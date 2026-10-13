// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 02 — math
// Lines 340-681 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function V(e, t, n, r, i, a, o, s, c, l = 12, u = !0, d = c) {
  let f = -a,
    p = i,
    m = o / 2,
    h = e.n;
  for (let o = 0; o <= l; o++) {
    let u = (o / l) * Math.PI * 2,
      d = Math.cos(u),
      h = Math.sin(u),
      g = d * f,
      _ = h,
      v = d * p,
      y = c.u0 + ((c.u1 - c.u0) * o) / l;
    (e.vertex(
      t - i * m + g * s,
      n + _ * s,
      r - a * m + v * s,
      g,
      _,
      v,
      y,
      c.v0,
    ),
      e.vertex(
        t + i * m + g * s,
        n + _ * s,
        r + a * m + v * s,
        g,
        _,
        v,
        y,
        c.v1,
      ));
  }
  for (let t = 0; t < l; t++) {
    let n = h + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
  if (u)
    for (let o of [-1, 1]) {
      let c = e.vertex(
          t + i * m * o,
          n,
          r + a * m * o,
          i * o,
          0,
          a * o,
          (d.u0 + d.u1) / 2,
          (d.v0 + d.v1) / 2,
        ),
        u = e.n;
      for (let c = 0; c <= l; c++) {
        let u = (c / l) * Math.PI * 2,
          h = Math.cos(u),
          g = Math.sin(u);
        e.vertex(
          t + i * m * o + h * f * s,
          n + g * s,
          r + a * m * o + h * p * s,
          i * o,
          0,
          a * o,
          d.u0 + (d.u1 - d.u0) * (0.5 - 0.5 * h * o),
          d.v0 + (d.v1 - d.v0) * (0.5 + 0.5 * g),
        );
      }
      for (let t = 0; t < l; t++)
        o > 0 ? e.tri(c, u + t + 1, u + t) : e.tri(c, u + t, u + t + 1);
    }
}
var he = class {
    pieces = [];
    obbs = [];
    circles = [];
    w = new r(16384, 24576);
    tris = 0;
    begin() {
      return this.w.reset();
    }
    end(e, t, n, r, i = `always`, a) {
      this.w.n &&
        ((this.tris += this.w.ni / 3),
        this.pieces.push({
          name: e,
          geo: T(this.w, `shim-${e}`),
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
  H = (e) => (O(e) ? d(e) : e);
function ge(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function U(e, t, n, r, i, a, o, s = `900`, c = _()) {
  let l = ge(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function _e(e, t, n, r, i, a, o, s = `700`, c = _()) {
  let l = ge(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `left`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r));
}
var W = (e, t, n, r, i) => {
    ((e.fillStyle = i),
      e.beginPath(),
      e.arc(t, n, r, 0, Math.PI * 2),
      e.fill());
  },
  ve = (e, t, n, r, i, a) => {
    ((e.strokeStyle = i),
      (e.lineWidth = a),
      e.beginPath(),
      e.arc(t, n, r, 0, Math.PI * 2),
      e.stroke());
  };
function ye(e, t, n, r, i) {
  (N(e, t, n, r, i, `#b8902e`),
    N(e, t + i * 0.08, n + i * 0.08, r - i * 0.16, i * 0.84, `#111111`),
    U(
      e,
      H(`shim.sl.plate`),
      t + r / 2,
      n + i / 2,
      r * 0.86,
      i * 0.7,
      `#d9b44a`,
      `800`,
      v(),
    ));
}
function be(e, t, n, r, i) {
  N(e, t, n, r, i, `#151515`);
  let a = t + r / 2,
    o = n + i / 2,
    s = r * 0.46;
  (W(e, a, o, s, `#1d1d1e`),
    ve(e, a, o, s * 0.98, `#2c2c2e`, r * 0.03),
    ve(e, a, o, s * 0.8, `#262628`, r * 0.015));
  for (let t = 0; t < 8; t++) {
    let n = (t / 8) * Math.PI * 2;
    W(
      e,
      a + Math.cos(n) * s * 0.88,
      o + Math.sin(n) * s * 0.88,
      r * 0.025,
      `#3a3a3c`,
    );
  }
  ve(e, a, o + s * 0.1, s * 0.18, `#c9a23e`, r * 0.022);
  for (let t = 0; t < 4; t++) {
    let n = (t / 4) * Math.PI * 2 + 0.4;
    (e.beginPath(),
      e.moveTo(a, o + s * 0.1),
      e.lineTo(
        a + Math.cos(n) * s * 0.18,
        o + s * 0.1 + Math.sin(n) * s * 0.18,
      ),
      e.stroke());
  }
  let c = r * 0.56,
    l = i * 0.15;
  ye(e, a - c / 2, o - s * 0.55 - l / 2, c, l);
}
function xe(e, t, n, r, i) {
  (N(e, t, n, r, i, `#141414`),
    N(e, t + r * 0.12, n + i * 0.1, r * 0.36, i * 0.34, `#3a3e40`),
    N(e, t + r * 0.14, n + i * 0.12, r * 0.32, i * 0.3, `#1d2a30`),
    N(e, t + r * 0.56, n + i * 0.08, r * 0.3, i * 0.5, `#0b0b0b`),
    (e.fillStyle = `#262626`));
  for (let a = 0; a < 12; a++)
    e.fillRect(t + r * (0.05 + a * 0.08), n + i * 0.66, 2, 2);
  ye(e, t + r * 0.12, n + i * 0.5, r * 0.34, i * 0.13);
}
function Se(e, t, n, r, i) {
  (N(e, t, n, r, i, `#141414`), (e.fillStyle = `#242424`));
  for (let a = 0; a < 18; a++)
    (e.fillRect(t + r * (0.03 + a * 0.055), n + i * 0.08, 2, 2),
      e.fillRect(t + r * (0.03 + a * 0.055), n + i * 0.9, 2, 2));
  ye(e, t + r * 0.38, n + i * 0.4, r * 0.24, i * 0.22);
}
function Ce(e, t, n, r, i) {
  (N(e, t, n, r, i, `#22402e`),
    N(e, t + r * 0.03, n + i * 0.05, r * 0.94, i * 0.9, `#f1ecdf`),
    U(
      e,
      H(`shim.sl.board.title`),
      t + r / 2,
      n + i * 0.17,
      r * 0.86,
      i * 0.16,
      `#1c2a22`,
      `900`,
    ),
    N(e, t + r * 0.07, n + i * 0.29, r * 0.86, 2, `#22402e`),
    _e(
      e,
      H(`shim.sl.board.1`),
      t + r * 0.07,
      n + i * 0.42,
      r * 0.86,
      i * 0.1,
      `#2a2a2a`,
    ),
    _e(
      e,
      H(`shim.sl.board.2`),
      t + r * 0.07,
      n + i * 0.58,
      r * 0.86,
      i * 0.09,
      `#2a2a2a`,
    ),
    _e(
      e,
      H(`shim.sl.board.3`),
      t + r * 0.07,
      n + i * 0.76,
      r * 0.86,
      i * 0.1,
      `#8a1a12`,
      `900`,
    ));
}
function we(e, t, r, a, o) {
  N(e, t, r, a, o, `#5e5f5c`);
  let s = new n(i(`shim-stones`, 1)),
    c = o * 0.42;
  (e.save(), e.beginPath(), e.rect(t, r, a, o), e.clip());
  for (let n = -2; n < 5; n++)
    for (let i = -2; i < a / c + 3; i++) {
      let a = t + i * c + (n % 2) * c * 0.5,
        o = r + n * c * 0.5,
        l = 0.78 + s.next() * 0.3;
      ((e.fillStyle = `rgb(${(122 * l) | 0},${(123 * l) | 0},${(118 * l) | 0})`),
        e.beginPath(),
        e.moveTo(a, o - c * 0.46),
        e.lineTo(a + c * 0.46, o),
        e.lineTo(a, o + c * 0.46),
        e.lineTo(a - c * 0.46, o),
        e.closePath(),
        e.fill(),
        s.next() < 0.12 &&
          U(
            e,
            String(10 + Math.floor(s.next() * 290)),
            a,
            o,
            c * 0.4,
            c * 0.18,
            `#e8e6dc`,
            `700`,
          ));
    }
  e.restore();
}
function Te(e, t, n, r, i) {
  (N(e, t, n, r, i, `#3a3c3e`),
    N(e, t + 3, n + 3, r - 6, i - 6, `#52555a`),
    U(
      e,
      H(`shim.sl.stone.title`),
      t + r / 2,
      n + i * 0.38,
      r * 0.86,
      i * 0.34,
      `#f0ede4`,
      `800`,
      v(),
    ),
    U(
      e,
      H(`shim.sl.stone.sub`),
      t + r / 2,
      n + i * 0.75,
      r * 0.8,
      i * 0.18,
      `#d8d4c8`,
      `600`,
    ));
}
function Ee(e, t, r, a, o) {
  (N(e, t, r, a, o, `#a5532e`), N(e, t, r, a, o * 0.45, `#2f6a2c`));
  let s = new n(i(`shim-petunia`, 1));
  for (let n = 0; n < 40; n++)
    W(
      e,
      t + s.next() * a,
      r + s.next() * o * 0.42,
      o * 0.07,
      [`#d23a8a`, `#f2f2f2`, `#8a3ac8`, `#e85a5a`][n % 4],
    );
}
function De(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.3, `#0d3c8c`),
    U(
      e,
      H(`shim.tv.latin`),
      t + r / 2,
      n + i * 0.15,
      r * 0.8,
      i * 0.22,
      `#ffffff`,
      `900`,
    ),
    U(
      e,
      H(`shim.tv.name`),
      t + r / 2,
      n + i * 0.62,
      r * 0.9,
      i * 0.3,
      `#0d3c8c`,
      `900`,
    ));
}
