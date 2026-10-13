// assets__rolldown-runtime-DK3Fl9T5 01 — defineproperty
// Lines 1-6 of readable/assets__rolldown-runtime-DK3Fl9T5.pretty.js (statement-aligned).
var e = Object.defineProperty,
  t = (t, n) => {
    let r = {};
    for (var i in t) e(r, i, { get: t[i], enumerable: !0 });
    return (n || e(r, Symbol.toStringTag, { value: `Module` }), r);
  };
