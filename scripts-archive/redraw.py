# -*- coding: utf-8 -*-
"""Redraw the step 1 and step 4 diagrams."""
import io, os, re

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

# ── step 1: a conversation, not a flowchart ───────────────────────────
old1_start = s.index("  if(key === 'consult'){")
old1_end = s.index("  if(key === 'scope'){")
new1 = """  if(key === 'consult'){
    var bubble = function(x, y, w, h, tailX, teal, label, sub){
      var c = teal ? '#0d9c80' : '#f4f2ec', o = teal ? '1' : '0.20';
      return '<g stroke="'+c+'" stroke-opacity="'+o+'" stroke-width="2" fill="none" stroke-linejoin="round">'
        + '<path d="M'+(x+14)+' '+y+'h'+(w-28)+'a14 14 0 0 1 14 14v'+(h-28)
        + 'a14 14 0 0 1-14 14h'+(-(tailX-x-18))+'l-10 18l-4-18h'+(-(w-(tailX-x)-4))
        + 'a14 14 0 0 1-14-14v'+(-(h-28))+'a14 14 0 0 1 14-14z"/></g>'
        + '<text x="'+(x+26)+'" y="'+(y+(sub?32:h/2+7))+'" fill="'+(teal?'#0d9c80':'#cfcdc6')
        + '" font-family="Helvetica,Arial" font-size="18">'+label+'</text>'
        + (sub ? '<text x="'+(x+26)+'" y="'+(y+58)+'" fill="#6b6a64" font-family="Helvetica,Arial" font-size="15">'+sub+'</text>' : '');
    };
    return open
      + bubble(36, 34, 330, 96, 80, false, 'How the business makes money', 'What you sell, and to whom')
      + bubble(212, 162, 352, 76, 520, true, 'And what is it costing you?')
      + bubble(36, 272, 330, 96, 80, false, 'Where it actually leaks', 'Before a single tool is named')
      + '</svg>';
  }
"""
s = s[:old1_start] + new1 + s[old1_end:]

# ── step 4: a loop that keeps running, not a finish line ──────────────
old4_start = s.index("  // maintain")
old4_end = s.index("\n}\n", old4_start) + 1
new4 = """  // maintain
  var cx = 300, cy = 206, r = 128;
  var node = function(x, y, label, ly){
    return '<circle cx="'+x+'" cy="'+y+'" r="10" fill="#0d9c80"/>'
      + '<text x="'+x+'" y="'+ly+'" fill="#cfcdc6" font-family="Helvetica,Arial" font-size="17" text-anchor="middle">'+label+'</text>';
  };
  var chev = function(x, y, rot){
    return '<path d="M-7 -9 L7 0 L-7 9" transform="translate('+x+','+y+') rotate('+rot+')" '
      + 'stroke="#0d9c80" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  };
  return open
    + '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#f4f2ec" stroke-opacity="0.16" stroke-width="1.5" fill="none"/>'
    + chev(412, 141, 60) + chev(300, 334, 180) + chev(188, 141, 300)
    + node(300, 78, 'Monitor', 52)
    + node(411, 270, 'Improve', 302)
    + node(189, 270, 'Support', 302)
    + '<text x="'+cx+'" y="'+(cy-4)+'" fill="#0d9c80" font-family="Helvetica,Arial" font-size="15" '
    + 'letter-spacing="3" text-anchor="middle">AFTER LAUNCH</text>'
    + '<text x="'+cx+'" y="'+(cy+24)+'" fill="#6b6a64" font-family="Helvetica,Arial" font-size="15" '
    + 'text-anchor="middle">we stay on</text>'
    + '</svg>';
}
"""
s = s[:old4_start] + new4 + s[old4_end:]

io.open(p, "w", encoding="utf-8").write(s)
print("step 1 and step 4 diagrams redrawn")
