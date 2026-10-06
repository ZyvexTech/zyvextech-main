const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const ROOT = __dirname;
const DIST_DIR = path.join(ROOT, 'dist');
const SRC_DIR = path.join(ROOT, 'src');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8'
};

const LIVE_RELOAD_SCRIPT = `
<script>
(function() {
  var es = new EventSource('/__livereload');
  es.onmessage = function(e) {
    if (e.data === 'reload') {
      console.log('[LiveReload] Site updated, reloading...');
      window.location.reload();
    }
  };
  es.onerror = function() {
    es.close();
    setTimeout(function() { location.reload(); }, 2000);
  };
})();
</script>
`;

// SSE clients for live reload
const sseClients = new Set();

function notifyClients() {
  for (const res of sseClients) {
    try {
      res.write('data: reload\n\n');
    } catch {
      sseClients.delete(res);
    }
  }
}

// Build orchestrator
let isBuilding = false;
let pendingBuild = false;

function runBuild(callback) {
  if (isBuilding) {
    pendingBuild = true;
    return;
  }
  isBuilding = true;
  console.log('\n[Build] Rebuilding site bundle...');
  const start = Date.now();

  const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';
  const child = spawn(pythonCmd, ['build/rebuild.py'], {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env
  });

  child.on('close', (code) => {
    isBuilding = false;
    const duration = ((Date.now() - start) / 1000).toFixed(2);
    if (code === 0) {
      console.log(`[Build] Rebuild complete in ${duration}s\n`);
      notifyClients();
      if (callback) callback(null);
    } else {
      console.error(`[Build] Rebuild failed with exit code ${code}\n`);
      if (callback) callback(new Error(`Exit code ${code}`));
    }
    if (pendingBuild) {
      pendingBuild = false;
      runBuild();
    }
  });

  child.on('error', (err) => {
    isBuilding = false;
    console.error(`[Build] Error starting python process: ${err.message}\n`);
    if (callback) callback(err);
  });
}

function resolveFilePath(urlPath) {
  const cleanUrl = urlPath.split('?')[0].split('#')[0];
  const decoded = decodeURIComponent(cleanUrl);

  // 1. Direct file
  let candidate = path.join(DIST_DIR, decoded);
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  // 2. Trailing slash / index.html
  if (decoded.endsWith('/')) {
    candidate = path.join(DIST_DIR, decoded, 'index.html');
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  // 3. Clean URL without extension -> .html
  candidate = path.join(DIST_DIR, decoded + '.html');
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  // 4. Directory with index.html
  candidate = path.join(DIST_DIR, decoded, 'index.html');
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  return null;
}

const server = http.createServer((req, res) => {
  // Live reload SSE endpoint
  if (req.url === '/__livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(': connected\n\n');
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
    return;
  }

  // Special shortcut for artifact preview
  if (req.url === '/artifact' || req.url === '/preview-artifact') {
    const artifactPath = path.join(DIST_DIR, 'index.artifact.html');
    if (fs.existsSync(artifactPath)) {
      const content = fs.readFileSync(artifactPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content.replace('</body>', `${LIVE_RELOAD_SCRIPT}</body>`));
      return;
    }
  }

  const filePath = resolveFilePath(req.url);

  if (filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';

    try {
      let content = fs.readFileSync(filePath);
      const headers = { 'Content-Type': mime };

      if (ext === '.html') {
        let htmlStr = content.toString('utf8');
        htmlStr = htmlStr.replace('</body>', `${LIVE_RELOAD_SCRIPT}</body>`);
        content = Buffer.from(htmlStr, 'utf8');
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      } else if (filePath.includes(path.join(DIST_DIR, 'assets'))) {
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      }

      res.writeHead(200, headers);
      res.end(content);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Internal Server Error: ${err.message}`);
    }
  } else {
    // 404 handler
    const notFoundPage = path.join(DIST_DIR, '404.html');
    if (fs.existsSync(notFoundPage)) {
      let content = fs.readFileSync(notFoundPage, 'utf8');
      content = content.replace('</body>', `${LIVE_RELOAD_SCRIPT}</body>`);
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  }
});

// Watcher setup
function setupWatcher() {
  let debounceTimer = null;
  const onFileChange = (filename) => {
    if (!filename) return;
    if (filename.includes('.git') || filename.includes('dist') || filename.includes('.zip')) return;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log(`[Watch] File changed: ${filename}`);
      runBuild();
    }, 300);
  };

  try {
    fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
      onFileChange(path.join('src', filename || ''));
    });
    console.log('[Watch] Watching src/ for changes (live reload enabled)');
  } catch (err) {
    console.warn(`[Watch] Warning: recursive watch failed (${err.message}). Falling back to single-file watch.`);
    fs.watch(path.join(SRC_DIR, 'index.html'), () => {
      onFileChange('src/index.html');
    });
  }
}

function startListening(port) {
  server.listen(port, () => {
    console.log('\n==================================================');
    console.log('  🚀 Zyvex Tech — Local Development Server');
    console.log('==================================================');
    console.log(`  Local:            http://localhost:${port}`);
    console.log(`  Artifact Preview: http://localhost:${port}/artifact`);
    console.log(`  Routes:           46 static prerendered routes + SPA`);
    console.log('==================================================\n');
    setupWatcher();
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} in use, trying port ${port + 1}...`);
      startListening(port + 1);
    } else {
      console.error(`Server error: ${err.message}`);
    }
  });
}

// Initial check: if dist is missing, run rebuild first
if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
  console.log('[Init] dist/ not found. Running initial build...');
  runBuild((err) => {
    if (err) {
      console.error('[Init] Initial build failed, starting server anyway...');
    }
    startListening(PORT);
  });
} else {
  startListening(PORT);
}
