// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 02 — math
// Lines 351-443 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function Ee(e, t, n, r, i, a, o, s, c, l, u = 14) {
  let d = (e, s = 1) => [
    t + i * Math.cos(e) * o * s,
    n + Math.sin(e) * o * s,
    r + a * Math.cos(e) * o * s,
  ];
  for (let t = 0; t < u; t++) {
    let n = d((t / u) * Math.PI * 2),
      r = d(((t + 1) / u) * Math.PI * 2);
    B(e, n[0], n[1], n[2], r[0], r[1], r[2], s, l);
  }
  for (let i = 0; i < c; i++) {
    let a = d((i / c) * Math.PI * 2 + 0.2, 0.96);
    B(e, t, n, r, a[0], a[1], a[2], s * 0.45, l);
  }
}
function De(e, t, n, r, i, a, o) {
  let s = 0,
    c = [0];
  for (let e = 1; e < t.length; e++)
    c.push((s += Math.hypot(t[e][0] - t[e - 1][0], t[e][1] - t[e - 1][1])));
  let l = i.u1 - i.u0,
    u = i.v1 - i.v0,
    d = o - a || 1,
    f = (e) => i.u0 + l * (s ? c[e] / s : 0),
    p = (e) => i.v0 + u * Math.min(1, Math.max(0, (e - a) / d));
  for (let i = 0; i + 1 < t.length; i++) {
    let [a, o] = t[i],
      [s, c] = t[i + 1],
      l = s - a,
      u = c - o,
      d = Math.hypot(l, u) || 1,
      m = -u / d,
      h = l / d,
      g = e.vertex(a, n[i], o, m, 0, h, f(i), p(n[i]));
    (e.vertex(s, n[i + 1], c, m, 0, h, f(i + 1), p(n[i + 1])),
      e.vertex(s, r[i + 1], c, m, 0, h, f(i + 1), p(r[i + 1])),
      e.vertex(a, r[i], o, m, 0, h, f(i), p(r[i])),
      e.tri(g, g + 1, g + 2).tri(g, g + 2, g + 3));
  }
}
var Oe = { shop: `shopOpen`, eat: `eatOpen`, bar: `barOpen` },
  ke = { shop: `shopShut`, eat: `eatShut`, bar: `barShut` },
  Ae = class {
    pieces = [];
    obbs = [];
    circles = [];
    w = new c(16384, 24576);
    tris = 0;
    begin() {
      return this.w.reset();
    }
    end(e, t, n, r, i = `always`, a) {
      this.w.n &&
        ((this.tris += this.w.ni / 3),
        this.pieces.push({
          name: e,
          geo: ee(this.w, `asa-${e}`),
          x: t,
          z: n,
          range: r,
          group: i,
          matrix: a,
        }));
    }
    box(e, t, n, r, i, a) {
      this.obbs.push({
        x: (e + n) / 2,
        z: (t + r) / 2,
        hx: (n - e) / 2,
        hz: (r - t) / 2,
        rot: 0,
        y0: i,
        y1: a,
      });
    }
  },
  V = (e) => ce[e]?.ja ?? (ue(e) ? ae(e) : ``);
function je(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function H(e, t, n, r, i, a, o, s = `900`, c = M()) {
  if (!t) return;
  let l = je(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
