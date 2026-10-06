# -*- coding: utf-8 -*-
"""Step 3 diagram: real platform logos where we hold the licensed assets."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

def rep(old, new, why, n=1):
    global s
    assert s.count(old) == n, (why, s.count(old))
    s = s.replace(old, new, n)

# a couple of generic UI glyphs (ours, not anyone's brand marks)
rep("""  check: '<circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.6 2.6L16.3 9"/>'""",
    """  check: '<circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.6 2.6L16.3 9"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.6 6.8 12 13l8.4-6.2"/>',
  sms: '<path d="M4 18.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5L4 18.5Z"/><path d="M8.5 10h7M8.5 13h4"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3.4v2.4M12 18.2v2.4M3.4 12h2.4M18.2 12h2.4M6 6l1.7 1.7M16.3 16.3 18 18M18 6l-1.7 1.7M7.7 16.3 6 18"/>'""",
    "glyphs")

# step 3 becomes an HTML panel so real logos can sit in it
start = s.index("  if(key === 'build'){")
end = s.index("  // maintain")
new = """  if(key === 'build'){
    /* Real marks where we hold the licensed asset; the platform's name set in
       type where we do not (Google and WhatsApp need their own approvals). */
    var glyph = function(name){
      return '<span class="hw-glyph">'+svgIcon(name, 20)+'</span>';
    };
    var word = function(t){ return '<span class="hw-word">'+t+'</span>'; };
    var node = function(marks, label){
      return '<div class="hw-node"><div class="hw-marks">'+marks+'</div>'
        + '<p class="hw-name">'+label+'</p></div>';
    };
    return '<div class="hw-sys">'
      + node(brandMark('shopify', false, 17), 'Store')
      + node(brandMark('meta', false, 11) + word('Google'), 'Campaigns')
      + node(word('WhatsApp') + glyph('sms') + glyph('mail'), 'Retention')
      + node(glyph('flow') + glyph('gear') + glyph('spark'), 'Automation')
      + '<p class="hw-wire">Wired into one system</p>'
      + '</div>';
  }

"""
s = s[:start] + new + s[end:]

# CSS
rep(".hw-svg{display:block;width:100%;height:auto}", """.hw-svg{display:block;width:100%;height:auto}
.hw-sys{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.hw-node{border:1px solid var(--line);background:rgba(244,242,236,.02);padding:18px;
  display:flex;flex-direction:column;justify-content:space-between;gap:16px;min-height:118px}
.hw-marks{display:flex;align-items:center;flex-wrap:wrap;gap:14px;min-height:30px}
.hw-marks img{display:block}
.hw-glyph{display:inline-flex;color:var(--teal2)}
.hw-word{font-family:'Runalto',Georgia,serif;font-size:16px;line-height:1;color:var(--muted)}
.hw-name{font-family:'Runalto',Georgia,serif;font-size:19px;line-height:1}
.hw-wire{grid-column:1/-1;border:1px solid var(--teal2);padding:13px;text-align:center;
  font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--teal2)}
@media(max-width:420px){.hw-sys{grid-template-columns:1fr}}""", "css")

io.open(p, "w", encoding="utf-8").write(s)
print("step 3 rebuilt with real logos")
