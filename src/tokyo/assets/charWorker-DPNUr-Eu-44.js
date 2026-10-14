// tokyo/assets/charWorker-DPNUr-Eu 44 — math
// Lines 15220-15487 of readable/tokyo/assets/charWorker-DPNUr-Eu.pretty.js (statement-aligned).
function Qo(e) {
  return `eye:${e.face.iris}:${+(e.age === `elder`)}`;
}
function $o(e, t) {
  return (n, r, i, a, o) => {
    let s = ui(e.face.iris * 3 + 7),
      c = e.age === `elder`,
      l = a / 180,
      u = r + a / 2,
      d = i + o / 2,
      f = t * l;
    ((n.fillStyle = q(c ? 15327180 : 16052200)), n.fillRect(r, i, a, o));
    let p = n.createLinearGradient(r, 0, r + a, 0);
    (p.addColorStop(0, `rgba(200,120,115,0.35)`),
      p.addColorStop(0.28, `rgba(210,170,165,0.06)`),
      p.addColorStop(0.72, `rgba(210,170,165,0.06)`),
      p.addColorStop(1, `rgba(200,120,115,0.35)`),
      (n.fillStyle = p),
      n.fillRect(r, i, a, o),
      (n.lineCap = `round`));
    for (let e = 0; e < 18; e++) {
      let t = e % 2 ? 1 : -1,
        r = u + t * (a * (0.3 + s() * 0.18)),
        i = d + (s() - 0.5) * o * 0.7;
      ((n.strokeStyle = `rgba(190,60,60,${(0.1 + s() * 0.16).toFixed(3)})`),
        (n.lineWidth = 0.5 + s() * 0.7),
        n.beginPath(),
        n.moveTo(r, i));
      for (let e = 0; e < 4; e++)
        ((r -= t * (6 + s() * 10)), (i += (s() - 0.5) * 8), n.lineTo(r, i));
      n.stroke();
    }
    let m = e.face.iris,
      h = n.createRadialGradient(u, d, f * 0.2, u, d, f);
    (h.addColorStop(0, q(Y(m, 0.7))),
      h.addColorStop(0.35, q(Y(m, 1.3))),
      h.addColorStop(0.62, q(m)),
      h.addColorStop(0.88, q(Y(m, 0.7))),
      h.addColorStop(1, q(1182214)),
      (n.fillStyle = h),
      n.beginPath(),
      n.arc(u, d, f, 0, Math.PI * 2),
      n.fill());
    for (let e = 0; e < 120; e++) {
      let e = s() * Math.PI * 2,
        t = f * (0.34 + s() * 0.1),
        r = f * (0.62 + s() * 0.32);
      ((n.strokeStyle =
        s() < 0.55
          ? q(Y(m, 1.55), 0.18 + s() * 0.2)
          : q(Y(m, 0.5), 0.2 + s() * 0.2)),
        (n.lineWidth = 0.6 + s() * 0.9),
        n.beginPath(),
        n.moveTo(u + Math.cos(e) * t, d + Math.sin(e) * t),
        n.lineTo(
          u + Math.cos(e + (s() - 0.5) * 0.08) * r,
          d + Math.sin(e + (s() - 0.5) * 0.08) * r,
        ),
        n.stroke());
    }
    ((n.strokeStyle = q(Y(m, 1.45), 0.35)), (n.lineWidth = 1.4), n.beginPath());
    for (let e = 0; e <= 48; e++) {
      let t = (e / 48) * Math.PI * 2,
        r = f * (0.46 + 0.04 * Math.sin(t * 7 + s()));
      e === 0
        ? n.moveTo(u + Math.cos(t) * r, d + Math.sin(t) * r)
        : n.lineTo(u + Math.cos(t) * r, d + Math.sin(t) * r);
    }
    n.stroke();
    let g = n.createRadialGradient(u, d, f * 0.86, u, d, f * 1.12);
    (g.addColorStop(0, `rgba(14,8,6,0)`),
      g.addColorStop(0.45, `rgba(14,8,6,0.75)`),
      g.addColorStop(1, `rgba(14,8,6,0)`),
      (n.fillStyle = g),
      n.beginPath(),
      n.arc(u, d, f * 1.12, 0, Math.PI * 2),
      n.fill());
    let _ = n.createRadialGradient(u, d, 0, u, d, f * 0.38);
    (_.addColorStop(0, `#020101`),
      _.addColorStop(0.85, `#050303`),
      _.addColorStop(1, q(Y(m, 0.4), 0)),
      (n.fillStyle = _),
      n.beginPath(),
      n.arc(u, d, f * 0.38, 0, Math.PI * 2),
      n.fill(),
      (n.fillStyle = `rgba(255,255,255,0.35)`),
      n.beginPath(),
      n.ellipse(
        u + f * 0.28,
        d - f * 0.32,
        f * 0.12,
        f * 0.1,
        0,
        0,
        Math.PI * 2,
      ),
      n.fill());
  };
}
function es(e) {
  return (t, n, r, i, a) => {
    let o = ui(e ? 911 : 577);
    (t.clearRect(n, r, i, a), (t.lineCap = `round`));
    let s = e ? 90 : 60;
    for (let c = 0; c < s; c++) {
      let l = (c + o() * 0.8) / s,
        u = n + l * i,
        d =
          a *
          (e ? 0.62 + 0.38 * o() : 0.45 + 0.35 * o()) *
          (0.6 + 0.4 * Math.sin(l * Math.PI * 0.95 + 0.1)),
        f = (l - 0.3) * 10 + (o() - 0.5) * 3;
      ((t.strokeStyle = `rgba(235,235,235,${(0.85 + o() * 0.15).toFixed(3)})`),
        (t.lineWidth = e ? 1.6 : 1.3),
        t.beginPath(),
        t.moveTo(u, r + a),
        t.quadraticCurveTo(u + f * 0.3, r + a - d * 0.6, u + f, r + a - d),
        t.stroke());
    }
  };
}
const ts = new M();
function ns(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = n < 0 ? R.thighL : R.thighR,
      a = n < 0 ? R.shinL : R.shinR,
      o = n < 0 ? R.footL : R.footR;
    (t[i].set(n * 0.095, 0.92, 0),
      t[a].set(n * 0.095, 0.5, -0.006),
      t[o].set(n * 0.095, 0.086, 0.012));
    let s = n < 0 ? R.armL : R.armR,
      c = n < 0 ? R.foreL : R.foreR,
      l = n < 0 ? R.handL : R.handR,
      u = n < 0 ? R.fingersL : R.fingersR;
    (t[s].set(n * 0.205, 1.4, 0),
      t[c].set(n * 0.215, 1.115, 0.012),
      t[l].set(n * 0.222, 0.865, -0.01),
      t[u]
        .copy(t[l])
        .add(ts.set(n * 0.004, -0.098 * (e.female ? 0.93 : 1), -0.004)));
    let d = e.arms[r],
      f = e.legs[r];
    (d.a.copy(t[s]),
      d.b.copy(t[c]),
      d.c.copy(t[l]),
      f.a.copy(t[i]),
      f.b.copy(t[a]),
      f.c.copy(t[o]));
  }
}
function* rs(e, t) {
  let { lod: n, conform: r, skip: i } = t,
    a = r ? { ...e, height: 1.72 } : e,
    o = new On(n === 0 ? 6144 : 2048);
  o.blank = fn;
  let s = t.textured && n === 0 ? new $r() : null;
  o.textured = !!s;
  let c = a.id === `jie` || a.id === `wen`,
    l = t.faceRes ?? (c ? 512 : 384),
    u = n === 0 ? 5e3 : 1500,
    d = a.sex === `f`,
    f = Wn(a);
  r && ns(f);
  let p = rr(a, f),
    m = Vi(a, f);
  yield;
  let h = Xa(a.hair.style, f.female),
    g = s
      ? s.tile(Xo(a) + `:` + l, l, l, !1, (e, t, n, r) =>
          Zo(a, p.lay, h)(e, t, n, r),
        )
      : null,
    _ = (Math.asin(Math.min(0.9, p.lay.irisR / p.eyes[0].r)) * 180) / Math.PI,
    v = s ? s.tile(Qo(a), 256, 128, !1, $o(a, _)) : null,
    y = s ? s.tile(`lash:${+!!d}`, 128, 32, !1, es(d)) : null,
    b = Za(a.hair.style, f.female),
    x = {},
    S = 0,
    C = (e, t) => {
      (i?.includes(e) || t(),
        (x[e] = o.triangleCount - S),
        (S = o.triangleCount));
    };
  (i?.includes(`head`) ||
    (yield* Vr({
      m: o,
      h: p,
      b: f,
      lod: n,
      skin: a.skin,
      faceRect: g,
      eyeRect: v,
      lashRect: y,
      cover: b,
      earsHidden: Qa(a.hair.style, f.female) && !i?.includes(`hair`),
      lashColor: 985608,
      lashLen: d
        ? 0.55 + 0.45 * a.face.liner
        : a.age === `student`
          ? 0.3
          : 0.15,
    })),
    (x.head = S = o.triangleCount));
  let w = o.mark(),
    T = s ? s.reqs.length : 0,
    E = S;
  yield;
  for (let e = 0; ; e++) {
    e > 0 && (o.rollback(w), s?.rollback(T), (S = E));
    let t = a.seed >>> 0 || 1,
      r = {
        desc: a,
        b: f,
        h: p,
        m: o,
        lod: n,
        atlas: null,
        page: null,
        tiles: s,
        rnd: () => ((t = (t * 1664525 + 1013904223) >>> 0), t / 4294967296),
        nT: n === 0 ? [14, 12, 12, 10][e] : [8, 7, 7, 6][e],
        nL: n === 0 ? [9, 8, 8, 7][e] : [6, 6, 5, 5][e],
        fit: m,
        trim: e,
      };
    if (
      (C(`hair`, () => $a(r, yo(a.acc))),
      yield,
      C(`torso`, () => ca(r)),
      yield,
      C(`arms`, () => _a(r)),
      C(`hands`, () => Da(r)),
      yield,
      C(`legs`, () => xa(r)),
      C(`feet`, () => Ma(r)),
      yield,
      C(`acc`, () => Co(r)),
      o.triangleCount <= u || e >= 3)
    )
      return { m: o, b: f, h: p, tiles: s, breakdown: x, trim: e };
    yield;
  }
}
function is(e) {
  for (;;) {
    let t = e.next();
    if (t.done) return t.value;
  }
}
function as(e, t) {
  return is(rs(e, t));
}
const os = (e, t = []) => self.postMessage(e, t);
let ss = null;
function cs() {
  if (ss === null)
    try {
      ss =
        typeof OffscreenCanvas < `u` &&
        !!new OffscreenCanvas(4, 4).getContext(`2d`) &&
        typeof OffscreenCanvas.prototype.transferToImageBitmap == `function`;
    } catch {
      ss = !1;
    }
  return ss;
}
