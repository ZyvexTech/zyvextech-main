const fs=require('fs'), vm=require('vm');
const code=fs.readFileSync('app.js','utf8');
const ctx={window:{addEventListener(){},location:{hash:'',pathname:'/'},scrollTo(){},requestAnimationFrame(){},history:{}},
  history:{}, document:{getElementById(){return null},querySelector(){return null},querySelectorAll(){return []},addEventListener(){}},console};
ctx.globalThis=ctx; vm.createContext(ctx); vm.runInContext(code,ctx);
const C=ctx;
const w0 = C.WORKS[0];
console.log('WORKS count:', C.WORKS.length);
console.log('keys:', Object.keys(w0).join(', '));
console.log(JSON.stringify(w0, null, 1).slice(0, 2600));
