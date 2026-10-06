# -*- coding: utf-8 -*-
"""Step 1 diagram: a discovery sheet being filled in, not a chat."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

start = s.index("  if(key === 'consult'){")
end = s.index("  if(key === 'scope'){")

new = """  if(key === 'consult'){
    /* An intake sheet mid-answer: three things we establish before a single
       tool gets named. The last line is still being written.              */
    var row = function(n, y, label, answer, width, done){
      var out = '<circle cx="46" cy="'+y+'" r="15" fill="none" stroke="#0d9c80" '
        + 'stroke-opacity="'+(done?'1':'0.45')+'" stroke-width="2"/>'
        + '<text x="46" y="'+(y+6)+'" text-anchor="middle" font-family="Helvetica,Arial" '
        + 'font-size="15" fill="#0d9c80" fill-opacity="'+(done?'1':'0.55')+'">'+n+'</text>'
        + '<text x="86" y="'+(y-14)+'" font-family="Helvetica,Arial" font-size="13" '
        + 'letter-spacing="2.2" fill="#6b6a64">'+label+'</text>'
        + '<line x1="86" y1="'+(y+22)+'" x2="556" y2="'+(y+22)+'" stroke="#f4f2ec" '
        + 'stroke-opacity="0.16" stroke-width="1.5"/>'
        + '<text x="86" y="'+(y+14)+'" font-family="Helvetica,Arial" font-size="19" '
        + 'fill="'+(done?'#cfcdc6':'#8a8880')+'">'+answer+'</text>'
        + '<line x1="86" y1="'+(y+22)+'" x2="'+(86+width)+'" y2="'+(y+22)+'" '
        + 'stroke="#0d9c80" stroke-width="2.5" stroke-linecap="round"/>';
      return out;
    };
    return open
      + '<text x="46" y="36" font-family="Helvetica,Arial" font-size="13" letter-spacing="3" '
      + 'fill="#0d9c80">DISCOVERY</text>'
      + '<line x1="46" y1="52" x2="556" y2="52" ' + faint + '/>'
      + row('1', 110, 'BUSINESS MODEL', 'How the money is actually made', 330, true)
      + row('2', 212, 'PRODUCT', 'What it is, and who buys it', 288, true)
      + row('3', 314, 'GOALS', 'Where it needs to get to', 246, false)
      + '<rect x="334" y="296" width="2.5" height="26" fill="#0d9c80"/>'
      + '<text x="46" y="392" font-family="Helvetica,Arial" font-size="15" fill="#6b6a64">'
      + 'Not one tool named yet</text>'
      + '</svg>';
  }
"""
s = s[:start] + new + s[end:]
io.open(p, "w", encoding="utf-8").write(s)
print("step 1 redrawn as a discovery sheet")
