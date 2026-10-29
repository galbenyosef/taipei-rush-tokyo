// tokyo/assets/actors-bknSEpf2 58 — math
// Lines 24258-24589 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function ug(e) {
  let t = new wp(e),
    n = new Xh(e, t);
  t.host = n;
  let r = new lg(e, n),
    i = n.update.bind(n);
  n.update = (e) => {
    (i(e), r.update(e));
  };
  let a = n;
  return (
    (a.respawnNearby = (e) => r.respawnNearby(e)),
    { player: a, cameraRig: t }
  );
}
var dg = 0.095,
  fg = 0.92,
  pg = 0.5,
  mg = 0.205,
  hg = 1.4,
  gg = 0.215,
  _g = 1.115,
  vg = 0.865,
  yg = 1.5,
  bg = 0.98,
  xg = 0.085,
  Sg = 0,
  Cg = 1,
  wg = 2,
  Tg = 3,
  Eg = 4,
  Dg = 5,
  Og = 6,
  kg = 7,
  Ag = 8,
  jg = 9,
  Mg = 10,
  Ng = 16711935,
  Pg = 16776960,
  Fg = 255;
function Ig(e, t) {
  let n = !!e.passenger,
    r = ln({ jaw: n ? 0.35 : 0.55, eyeSize: 0.97, lid: 0.4, smile: 0 }),
    i = e.fullFace ? [] : [{ kind: `mask`, color: Pg }];
  return n
    ? {
        id: `veh-pillion-${+!!t}`,
        sex: `f`,
        age: `adult`,
        build: `slim`,
        height: 1.62,
        skin: 14990748,
        face: r,
        hair: { style: `long`, color: 1906194 },
        top: {
          style: t ? `hoodie` : `tee`,
          color: Fg,
          color2: Fg,
          sleeve: `long`,
        },
        bottom: {
          style: t ? `wide` : `jeans`,
          color: t ? 2763827 : 4016742,
          pattern: t ? `solid` : `denim`,
        },
        shoes: {
          style: `sneaker`,
          color: 15658730,
          color2: 13684940,
          sole: 15921902,
        },
        acc: i,
        seed: t ? 77 : 41,
      }
    : {
        id: `veh-rider-${e.fullFace ? `ff` : `sc`}`,
        sex: `m`,
        age: `adult`,
        build: `avg`,
        height: 1.72,
        skin: 14199428,
        face: r,
        hair: { style: `buzz`, color: 1117708 },
        top: { style: `tee`, color: 2763310 },
        outer: {
          style: e.fullFace ? `bomber` : `windbreaker`,
          color: Ng,
          color2: 2500395,
          closed: !0,
        },
        bottom: { style: `jeans`, color: 2832981, pattern: `denim` },
        shoes: {
          style: e.fullFace ? `boot` : `sneaker`,
          color: 1842207,
          color2: 3815998,
          sole: 15263972,
        },
        acc: i,
        seed: 19,
      };
}
var Lg = new Map(),
  Rg = new Map(),
  zg = !0,
  Bg = (e) => !!e.passenger && e.hipZ > 0.6,
  Vg = (e) => `${e.passenger ? `p` : `d`}${+!!Bg(e)}${+!!e.fullFace}`;
async function Hg(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    if (Lg.has(r)) continue;
    let e = Vg(r);
    Rg.has(e) ||
      n.has(e) ||
      (n.add(e),
      t.push(
        bn(Ig(r, Bg(r))).then(
          (t) => void (zg && !Rg.has(e) && Rg.set(e, t)),
          () => void 0,
        ),
      ));
  }
  await Promise.all(t);
}
function Ug() {
  ((zg = !1), Rg.clear());
}
function Wg(e, t, n) {
  let r = Math.max(e, t, n);
  return r < 0.03 || Math.min(e, t, n) > r * 0.12
    ? 0
    : t < r * 0.12 && Math.abs(e - n) < r * 0.2
      ? 2
      : e < r * 0.12 && Math.abs(t - n) < r * 0.2
        ? 3
        : n < r * 0.12 && Math.abs(e - t) < r * 0.2
          ? 6
          : e < r * 0.12 && t < r * 0.12
            ? 5
            : 0;
}
new v();
var Gg = new V(),
  Kg = new V();
function qg(e, t, n, r, i, a, o) {
  Kg.subVectors(t, e);
  let s = Kg.length(),
    c = (n + r) * 0.995;
  (s > c && (s = c),
    s < Math.abs(n - r) + 0.01 && (s = Math.abs(n - r) + 0.01),
    Kg.normalize(),
    o.copy(e).addScaledVector(Kg, s));
  let l = (n * n - r * r + s * s) / (2 * s),
    u = Math.sqrt(Math.max(0, n * n - l * l));
  (Gg.copy(i).addScaledVector(Kg, -i.dot(Kg)).normalize(),
    a.copy(e).addScaledVector(Kg, l).addScaledVector(Gg, u));
}
function Jg(e) {
  let t = Lg.get(e);
  if (t) return t;
  let n = Bg(e),
    r = Vg(e),
    i = Rg.get(r);
  i || ((i = dn(Ig(e, n))), zg && Rg.set(r, i));
  let a = i.attributes.position,
    o = i.attributes.normal,
    s = i.attributes.color,
    c = i.attributes.part,
    l = a.count,
    u = new Float32Array(l * 3),
    d = new Float32Array(l * 3),
    f = new Float32Array(l),
    p = new Float32Array(l * 3),
    m = new Uint8Array(l),
    h = -1 / 0;
  for (let e = 0; e < l; e++)
    Math.round(c.getX(e)) === wg && (h = Math.max(h, a.getY(e)));
  let g = 1 / 0,
    _ = -1 / 0,
    y = 1 / 0,
    b = -1 / 0;
  for (let e = 0; e < l; e++) {
    if (Math.round(c.getX(e)) !== wg) continue;
    let t = a.getY(e);
    t < h - 0.13 ||
      t > h - 0.03 ||
      ((g = Math.min(g, a.getX(e))),
      (_ = Math.max(_, a.getX(e))),
      (y = Math.min(y, a.getZ(e))),
      (b = Math.max(b, a.getZ(e))));
  }
  let x = e.passenger ? 0.95 : 1,
    S = new V(0, e.hipY + 0.05 - fg * x, e.hipZ),
    C = Math.asin(Math.min(0.92, e.lean / 0.46)),
    w = new v().setFromAxisAngle(new V(1, 0, 0), -C),
    T = new v().setFromAxisAngle(new V(1, 0, 0), C * 0.78).premultiply(w),
    E = new V(0, bg * x, 0).add(S),
    D = new V(0, yg * x, 0),
    O = D.clone()
      .sub(new V(0, bg * x, 0))
      .applyQuaternion(w)
      .add(E),
    k = (e, t) =>
      t
        .copy(e)
        .sub(new V(0, bg * x, 0))
        .applyQuaternion(w)
        .add(E),
    A = (e, t, n, r, i, a) => {
      let o = t.distanceTo(e),
        s = n.distanceTo(t),
        c = new V(),
        l = new V();
      qg(r, i, o, s, a, c, l);
      let u = new v().setFromUnitVectors(
          t.clone().sub(e).normalize(),
          c.clone().sub(r).normalize(),
        ),
        d = n.clone().sub(t).normalize().applyQuaternion(u);
      return {
        r0: e,
        r1: t,
        r2: n,
        w0: r,
        w1: c,
        w2: l,
        q0: u,
        q1: new v()
          .setFromUnitVectors(d, l.clone().sub(c).normalize())
          .multiply(u),
      };
    },
    j = x,
    M = [],
    N = [];
  for (let t of [-1, 1]) {
    let n = new V(t * mg * j, hg * j, 0),
      r = new V(t * gg * j, _g * j, 0),
      i = new V(t * 0.217 * j, vg * j, 0),
      a = k(n, new V()),
      o = new V(t * e.hand[0], e.hand[1] + 0.02, e.hand[2] + 0.07);
    M.push(A(n, r, i, a, o, new V(t * 0.7, -0.75, 0.25)));
    let s = new V(t * dg * j, fg * j, 0),
      c = new V(t * dg * j, pg * j, 0),
      l = new V(t * dg * j, xg * j, 0),
      u = s.clone().add(S),
      d = new V(t * e.foot[0], e.foot[1] + 0.07, e.foot[2] + 0.07);
    N.push(A(s, c, l, u, d, new V(t * 0.35, 0.45, -1)));
  }
  let ee = new v().setFromAxisAngle(new V(1, 0, 0), -0.18),
    P = new V(),
    F = new V();
  for (let e = 0; e < l; e++) {
    (P.set(a.getX(e) * j, a.getY(e) * j, a.getZ(e) * j),
      F.set(o.getX(e), o.getY(e), o.getZ(e)));
    let t = Math.round(c.getX(e));
    switch ((P.x, (m[e] = +(t === wg)), t)) {
      case Cg:
        (k(P, P), F.applyQuaternion(w));
        break;
      case wg:
        (P.sub(D).applyQuaternion(T).add(O), F.applyQuaternion(T));
        break;
      case Tg:
      case Dg: {
        let e = M[t === Tg ? 0 : 1];
        (P.sub(e.r0).applyQuaternion(e.q0).add(e.w0), F.applyQuaternion(e.q0));
        break;
      }
      case Eg:
      case Og: {
        let e = M[t === Eg ? 0 : 1];
        (P.sub(e.r1).applyQuaternion(e.q1).add(e.w1), F.applyQuaternion(e.q1));
        break;
      }
      case kg:
      case jg: {
        let e = N[t === kg ? 0 : 1];
        (P.sub(e.r0).applyQuaternion(e.q0).add(e.w0), F.applyQuaternion(e.q0));
        break;
      }
      case Ag:
      case Mg: {
        let e = N[t === Ag ? 0 : 1];
        P.y < xg * j + 0.035
          ? (P.sub(e.r2).applyQuaternion(ee).add(e.w2), F.applyQuaternion(ee))
          : (P.sub(e.r1).applyQuaternion(e.q1).add(e.w1),
            F.applyQuaternion(e.q1));
        break;
      }
      case Sg:
      default:
        P.add(S);
    }
    ((u[e * 3] = P.x),
      (u[e * 3 + 1] = P.y),
      (u[e * 3 + 2] = P.z),
      F.normalize(),
      (d[e * 3] = F.x),
      (d[e * 3 + 1] = F.y),
      (d[e * 3 + 2] = F.z));
    let n = s.getX(e),
      r = s.getY(e),
      i = s.getZ(e),
      l = Wg(n, r, i);
    if (((f[e] = l), l)) {
      let t = Math.min(1, Math.max(n, r, i) * 1.05);
      ((p[e * 3] =
        p[e * 3 + 1] =
        p[e * 3 + 2] =
          l === 6 ? Math.min(1, t * 0.93) : t),
        l === 6 && (p[e * 3 + 2] = Math.min(1, t)));
    } else ((p[e * 3] = n), (p[e * 3 + 1] = r), (p[e * 3 + 2] = i));
  }
  t = Yg(u, d, p, f, m, i.index.array, e.passenger ? 0.068 : 0.036);
  let I = new V(((g + _) / 2) * j, (h - 0.1) * j, ((y + b) / 2 + 0.008) * j),
    te = new V(((_ - g) / 2 + 0.034) * j, 0.128 * j, ((b - y) / 2 + 0.03) * j);
  return (
    (t.userData.helmet = Qg(
      I,
      te,
      !!e.fullFace,
      e.passenger ? 10 : 14,
      e.passenger ? 4 : 5,
      (e, t) => {
        (e.sub(D).applyQuaternion(T).add(O), t.applyQuaternion(T));
      },
    )),
    Lg.set(e, t),
    t
  );
}
