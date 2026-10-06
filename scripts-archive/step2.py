# -*- coding: utf-8 -*-
"""Step 2 diagram: a filter, not a list. Everything goes in, only what fits comes out."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

start = s.index("  if(key === 'scope'){")
end = s.index("  if(key === 'build'){")

new = """  if(key === 'scope'){
    var chip = function(x, y, w, label, teal){
      var stroke = teal ? '#0d9c80' : '#f4f2ec', op = teal ? '1' : '0.20';
      return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="44" rx="3" fill="none" '
        + 'stroke="'+stroke+'" stroke-opacity="'+op+'" stroke-width="'+(teal?2:1.5)+'"/>'
        + '<text x="'+(x+w/2)+'" y="'+(y+28)+'" text-anchor="middle" font-family="Helvetica,Arial" '
        + 'font-size="15" fill="'+(teal?'#0d9c80':'#8a8880')+'">'+label+'</text>';
    };
    var col = [52, 224, 396], w = 152;
    var inTop = ['Another CRM', 'Shopify', 'Fourth dashboard'];
    var inBot = ['Meta Ads', 'An unused app', 'SEO'];
    var pile = '';
    for(var i=0;i<3;i++){ pile += chip(col[i], 20, w, inTop[i], false); }
    for(var j=0;j<3;j++){ pile += chip(col[j], 74, w, inBot[j], false); }

    var out = '';
    var keep = ['Shopify', 'Meta Ads', 'SEO'];
    for(var k=0;k<3;k++){ out += chip(col[k], 312, w, keep[k], true); }

    var cross = function(x, y){
      return '<path d="M'+(x-9)+' '+(y-9)+'l18 18M'+(x+9)+' '+(y-9)+'l-18 18" stroke="#f4f2ec" '
        + 'stroke-opacity="0.26" stroke-width="2" stroke-linecap="round"/>';
    };

    return open
      + pile
      + '<g stroke="#0d9c80" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">'
      + '<path d="M40 150 L236 258 L236 296"/><path d="M560 150 L364 258 L364 296"/>'
      + '</g>'
      + cross(104, 246) + cross(496, 246)
      + '<path d="M300 258 v34" stroke="#0d9c80" stroke-width="2" stroke-linecap="round"/>'
      + '<path d="M291 284 l9 12 l9 -12" stroke="#0d9c80" stroke-width="2" fill="none" '
      + 'stroke-linecap="round" stroke-linejoin="round"/>'
      + '<text x="300" y="392" text-anchor="middle" font-family="Helvetica,Arial" font-size="14" '
      + 'letter-spacing="2.5" fill="#6b6a64">THE STACK THAT FITS</text>'
      + '</svg>';
  }
"""
s = s[:start] + new + s[end:]
io.open(p, "w", encoding="utf-8").write(s)
print("step 2 diagram redrawn as a filter")
