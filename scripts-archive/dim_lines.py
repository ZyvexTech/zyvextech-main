# -*- coding: utf-8 -*-
"""Soften the decorative background grid lines without touching real borders."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

subs = [
    # the decorative grid gets its own, much fainter tokens
    (":root{\n  --black:#030303;",
     ":root{\n  --grid-line:rgba(244,242,236,0.05); --grid-line-t:rgba(3,15,13,0.09);\n  --black:#030303;"),
    (".grid-lines span{border-left:1px solid var(--line);height:100%}",
     ".grid-lines span{border-left:1px solid var(--grid-line);height:100%}"),
    (".on-teal .grid-lines span{border-left-color:var(--line-t)}",
     ".on-teal .grid-lines span{border-left-color:var(--grid-line-t)}"),
]
for old, new in subs:
    assert s.count(old) == 1, (old[:50], s.count(old))
    s = s.replace(old, new, 1)

io.open(p, "w", encoding="utf-8").write(s)
print("grid lines softened: 0.14 -> 0.05 on dark, 0.22 -> 0.09 on teal")
