// tokyo__assets__region-tokyo-BcM3fReU 220 — math
// Lines 90504-90804 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function SX(e) {
  for (let t of hX()) {
    let n = Math.max(1, Math.round((t.to - t.from) / 8));
    for (let r = 0; r < n; r++) {
      let i = t.from + ((t.to - t.from) * r) / n,
        a = t.from + ((t.to - t.from) * (r + 1)) / n,
        [o, s] = vX(t, (i + a) / 2),
        c = Math.max(o, s) + pX,
        l = Math.min(o, s) - 0.3;
      if (!(c - l < 0.4)) {
        if (t.stone)
          for (let n = l, r = 0; n < c - 0.05; n += 1.6, r++) {
            let o = (r % 2 ? 0.8 : 0.95) + 0.2 * bX();
            (e.setColor(0.47 * o, 0.45 * o, 0.4 * o),
              xX(e, t, i, a, n, Math.min(c, n + 1.6), 0.02));
          }
        else {
          let n = 0.9 + 0.12 * bX();
          (e.setColor(0.6 * n, 0.59 * n, 0.56 * n),
            xX(e, t, i, a, l, c, 0.02),
            e.setColor(0.42, 0.41, 0.39),
            xX(e, t, i, a, c - 1.6, c - 0.2, 0.03));
        }
        (e.setColor(0.68, 0.67, 0.64),
          t.axis === `x`
            ? e.boxMinMax(
                t.at - t.dir * 0.5 - 0.3,
                c,
                i,
                t.at - t.dir * 0.5 + 0.3,
                c + fX,
                a,
              )
            : e.boxMinMax(
                i,
                c,
                t.at - t.dir * 0.5 - 0.3,
                a,
                c + fX,
                t.at - t.dir * 0.5 + 0.3,
              ));
      }
    }
  }
  for (let t of _w) {
    let n = Math.round(LC / 0.17),
      r = t.len / n,
      i = LC / n;
    e.detail(!0);
    for (let a = 0; a < n; a++) {
      let n = a * r,
        o = (a + 1) * r,
        s = (a + 1) * i + pX,
        c = (e, n) => [t.x + t.dx * e - t.dz * n, t.z + t.dz * e + t.dx * n],
        [l, u] = c(n, -t.half),
        [d, f] = c(n, t.half),
        [p, m] = c(o, t.half),
        [h, g] = c(o, -t.half),
        _ = 0.94 + (0.08 * ((a * 7) % 3)) / 2;
      (e.setColor(0.6 * _, 0.59 * _, 0.56 * _),
        e.quad(l, s, u, h, s, g, p, s, m, d, s, f),
        e.setColor(0.5, 0.49, 0.47),
        e.quad(d, s - i, f, l, s - i, u, l, s, u, d, s, f));
    }
    e.detail(!1);
    let a = _X(t);
    for (let n of [-1, 1]) {
      let r = n * (t.half + 0.25);
      for (let i = 0; i < 6; i++) {
        let o = a + ((t.len - a) * i) / 6,
          s = a + ((t.len - a) * (i + 1)) / 6,
          c = (o + s) / 2,
          l = Cw(
            t.x + t.dx * c - t.dz * (r + n * 0.6),
            t.z + t.dz * c + t.dx * (r + n * 0.6),
          ),
          u = Math.max(l, (LC * Math.max(0, s)) / t.len) + pX + fX,
          d = t.x + t.dx * c - t.dz * r,
          f = t.z + t.dz * c + t.dx * r;
        (e.setColor(0.56, 0.55, 0.52),
          e.box(
            d,
            -0.3,
            f,
            Math.abs(t.dx) > 0.5 ? s - o : 0.5,
            u + 0.3,
            Math.abs(t.dz) > 0.5 ? s - o : 0.5,
          ));
      }
    }
  }
  e.detail(!0);
  for (let t = UC - 2; t > -1560; t -= 4) {
    if (t < dw + fw + 1 && t > dw - fw - 1) continue;
    let n = gX(t),
      r = gX(t - 4),
      i = Cw(n - 1, t) + pX;
    (e.setColor(0.2, 0.24, 0.22),
      e.beam(n, i + 1.75, t, r, i + 1.75, t - 4, 0.08, 0.08),
      e.beam(n, i + 0.1, t, r, i + 0.1, t - 4, 0.06, 0.06),
      e.box(n, i, t, 0.12, 1.8, 0.12),
      e.setColor(0.26, 0.3, 0.28),
      e.quad(
        n,
        i + 0.1,
        t,
        r,
        i + 0.1,
        t - 4,
        r,
        i + 1.75,
        t - 4,
        n,
        i + 1.75,
        t,
      ));
  }
  e.detail(!1);
  let t = wX();
  for (let n of [-1, 1]) {
    let r = dw + n * fw,
      i = n,
      a = r - n * 0.3;
    for (let a = mw; a < t; a += 3) {
      let o = Math.min(t, a + 3),
        s = Cw((a + o) / 2, r + n * 0.8);
      (e.setColor(0.6, 0.59, 0.56),
        xX(
          e,
          { axis: `z`, at: r, from: a, to: o, dir: i, stone: !1 },
          a,
          o,
          s - 0.3,
          LC + pX,
        ));
    }
    (e.setColor(0.42, 0.44, 0.45),
      e.boxMinMax(t, LC - 2.6, Math.min(r, a), pw, LC + pX, Math.max(r, a)));
    for (let t = pw; t < -30; t += 3) {
      let i = Math.min(-30, t + 3),
        a = LC * gw(i) + pX,
        o = LC * gw(t) + pX,
        s = 0.92 + 0.1 * bX();
      (e.setColor(0.6 * s, 0.59 * s, 0.56 * s),
        e.quad(...CX(t, i, r, n, -0.3, o, a)));
    }
    e.setColor(0.66, 0.65, 0.62);
    for (let t = mw; t < -31; t += 6) {
      let n = Math.min(-30, t + 6),
        i = LC * gw(n) + pX;
      e.boxMinMax(
        t,
        i,
        Math.min(r, a),
        n,
        LC * gw(t) + pX + fX,
        Math.max(r, a),
      );
    }
  }
  (e.setColor(0.36, 0.38, 0.39),
    e.quad(
      t,
      LC - 2.6,
      dw - fw,
      pw,
      LC - 2.6,
      dw - fw,
      pw,
      LC - 2.6,
      dw + fw,
      t,
      LC - 2.6,
      dw + fw,
    ));
}
function CX(e, t, n, r, i, a, o) {
  return r > 0
    ? [e, i, n, t, i, n, t, o, n, e, a, n]
    : [t, i, n, e, i, n, e, a, n, t, o, n];
}
function wX() {
  let e = mw;
  for (; sw(e, dw) > 14.5 && e < pw;) e += 0.25;
  return e;
}
function TX(e) {
  let t = 0.35,
    n = (t, n, r, i, a) => e.addBox(t, n, r, i, mX, a, `wall`);
  for (let e of hX()) {
    let r = Math.max(1, Math.ceil((e.to - e.from) / 6));
    for (let i = 0; i < r; i++) {
      let a = e.from + ((e.to - e.from) * i) / r,
        o = e.from + ((e.to - e.from) * (i + 1)) / r,
        [s] = vX(e, a),
        [c] = vX(e, o),
        [l] = vX(e, (a + o) / 2),
        u = Math.max(s, c, l) + pX + fX,
        d = e.at - e.dir * 0.5;
      e.axis === `x` ? n(d - t, a, d + t, o, u) : n(a, d - t, o, d + t, u);
    }
  }
  for (let e of _w) {
    let r = _X(e);
    for (let i of [-1, 1]) {
      let a = i * (e.half + 0.25),
        o = e.x - e.dz * a + e.dx * r,
        s = e.z + e.dx * a + e.dz * r,
        c = e.x - e.dz * a + e.dx * e.len,
        l = e.z + e.dx * a + e.dz * e.len;
      n(
        Math.min(o, c) - t,
        Math.min(s, l) - t,
        Math.max(o, c) + t,
        Math.max(s, l) + t,
        LC + pX + fX,
      );
    }
  }
  for (let n = UC - 2; n > -1560; n -= 8) {
    if (n - 8 < dw + fw + 1 && n > dw - fw - 1) continue;
    let r = gX(n),
      i = gX(n - 8),
      a = Math.hypot(i - r, 8);
    e.addOBB(
      (r + i) / 2,
      n - 4,
      t,
      a / 2 + 0.2,
      Math.atan2(i - r, 8),
      LC - 2,
      LC + 2,
      `wall`,
    );
  }
  for (let n of [-1, 1]) {
    let r = dw + n * (fw - 0.15);
    for (let n = mw; n < -31; n += 6) {
      let i = Math.min(-30, n + 6),
        a = LC * gw(n) + pX + fX,
        o = n < pw ? LC - 3 : mX;
      e.addBox(n, r - t, i, r + t, o, a, `wall`);
    }
  }
}
var EX = new ee(0.25, 0.62, 1),
  DX = new ee(0.5, 0.2, 1);
function OX(e) {
  let { x: t, z: n } = _Y,
    r = new cr(9e3, 13500);
  return (
    r.setColor(0.9, 0.9, 0.9).setEmit(1.1, 0),
    eX(r, t, e, n, 0.5, LY),
    r.setColor(1, 1, 1).setEmit(1.5, 0),
    tX(r, t, e, n, 0.3, LY),
    r.noEmit(),
    r.build()
  );
}
var kX = class {
    main;
    far;
    mat;
    dayKey = -1;
    constructor(e) {
      let t = OX(e.field.height(_Y.x, _Y.z));
      ((this.mat = e.propsMaterial(`skytree-lights`)),
        (this.main = new p(t, this.mat)),
        (this.main.name = `tokyo-skytree-lights`),
        (this.main.userData.noWarm = !0),
        (this.far = new p(t, this.mat)),
        (this.far.name = `tokyo-skytree-lights-far`),
        (this.far.frustumCulled = !1),
        e.scene.add(this.main),
        e.farScene.add(this.far));
    }
    update(e, t, n) {
      let r = e > 0.05 && t >= 12;
      if (((this.main.visible = r), (this.far.visible = r), !r)) return;
      let i = n.y * 400 + n.m * 32 + n.d;
      if (i !== this.dayKey) {
        this.dayKey = i;
        let e = Math.floor(Date.UTC(n.y, n.m - 1, n.d) / 864e5);
        this.mat.color.copy(e % 2 == 0 ? EX : DX);
      }
    }
    get design() {
      return this.mat.color.equals(EX) ? `iki` : `miyabi`;
    }
  },
  AX = 30,
  jX = 40,
  MX = 1400,
  NX = [
    [0.7, 0.69, 0.66],
    [0.64, 0.62, 0.57],
    [0.57, 0.57, 0.56],
    [0.5, 0.44, 0.38],
    [0.62, 0.6, 0.55],
    [0.46, 0.47, 0.49],
  ];
