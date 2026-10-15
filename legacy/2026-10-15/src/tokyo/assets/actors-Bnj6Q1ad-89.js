// tokyo/assets/actors-Bnj6Q1ad 89 — math
// Lines 43161-43501 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function uS() {
  let e = lS();
  ((e.id = `police-a`), (e.name = { zh: `巡邏員警`, en: `Patrol officer` }));
  let t = lS();
  ((t.id = `police-b`),
    (t.name = { zh: `巡邏員警`, en: `Patrol officer` }),
    (t.height = 1.74),
    (t.skin = Qt.tan),
    (t.seed = 311),
    (t.hair = { style: `buzz`, color: Kt.black }),
    (t.face = Ht({
      jaw: 0.55,
      length: 0.55,
      cheek: 0.62,
      eyeSize: 0.97,
      eyeTilt: 0.06,
      lid: 0.18,
      noseW: 0.62,
      bridge: 0.35,
      lips: 0.55,
      brow: 0.62,
      browArch: 0.25,
      facial: `stubble`,
      smile: 0.12,
      iris: 2759184,
    })));
  let n = lS();
  ((n.id = `police-f`),
    (n.name = { zh: `女警`, en: `Policewoman` }),
    (n.sex = `f`),
    (n.build = `slim`),
    (n.height = 1.64),
    (n.skin = Qt.fair),
    (n.seed = 523),
    (n.hair = { style: `bun`, color: Kt.softBlack }),
    (n.face = Ht({
      jaw: 0.32,
      length: 0.48,
      eyeSize: 1.03,
      eyeTilt: 0.12,
      lid: 0.62,
      noseW: 0.4,
      bridge: 0.45,
      lips: 0.52,
      mouthW: 0.95,
      brow: 0.45,
      browArch: 0.5,
      lipColor: 11559519,
      blush: 0.12,
      liner: 0.15,
      smile: 0.05,
    })));
  let r = lS();
  ((r.id = `police-moto`),
    (r.name = { zh: `機車員警`, en: `Scooter officer` }),
    (r.height = 1.75),
    (r.skin = Qt.medium),
    (r.seed = 877),
    (r.hair = { style: `fade`, color: Kt.black }),
    (r.face = Ht({
      jaw: 0.62,
      eyeSize: 0.96,
      lid: 0.3,
      noseW: 0.55,
      brow: 0.66,
      smile: 0,
    })),
    (r.acc = [{ kind: `watch` }]));
  let i = (e, t, n, r, i) => ({
      id: e,
      name: { zh: `霹靂小組`, en: `Thunder Squad` },
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: r,
      skin: n,
      seed: t,
      face: i,
      hair: { style: `buzz`, color: Kt.black },
      top: { style: `shirt`, color: 3159099, sleeve: `long`, tucked: !0 },
      outer: { style: `vest`, color: 3685701, color2: 3685701, closed: !0 },
      bottom: { style: `slacks`, color: 3027512, belt: 1184533 },
      shoes: { style: `boot`, color: 1381913, sole: 921104 },
      acc: [{ kind: `mask`, color: 1710878 }],
    }),
    a = i(
      `swat-a`,
      1201,
      Qt.medium,
      1.8,
      Ht({
        jaw: 0.78,
        eyeSize: 0.94,
        lid: 0.28,
        brow: 0.82,
        browArch: 0.2,
        smile: -0.25,
      }),
    ),
    o = i(
      `swat-b`,
      1409,
      Qt.tan,
      1.76,
      Ht({ jaw: 0.66, eyeSize: 0.98, lid: 0.45, brow: 0.7, smile: -0.15 }),
    ),
    s = (e) => {
      let t = new Ae().setHex(e);
      return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b;
    };
  return [
    { id: 0, variant: 0, desc: e, tone: 1, heroTier: 1 },
    { id: 1, variant: 0, desc: t, tone: s(t.skin) / s(e.skin), heroTier: 2 },
    { id: 2, variant: 1, desc: n, tone: 1, heroTier: 1 },
    { id: 3, variant: 2, desc: r, tone: 1, heroTier: 1 },
    { id: 4, variant: 3, desc: a, tone: 1, heroTier: 1 },
    { id: 5, variant: 3, desc: o, tone: s(o.skin) / s(a.skin), heroTier: 2 },
  ];
}
var dS = uS(),
  fS = [0, 2, 3, 4],
  pS = [0, 1, 2],
  mS = [4, 5],
  Z = {
    belt: 1447706,
    leather: 1184534,
    metal: 13948892,
    gun: 2434602,
    gunDark: 1513499,
    radio: 1710878,
    badge: 15779674,
    swatPanel: 3817287,
    swatPouch: 4475475,
    swatMolle: 2764341,
    swatBelt: 2303532,
    patch: 15330286,
    glove: 1316119,
    knee: 2106152,
    rifle: 1842464,
    rifleFurn: 2763567,
    patchNavy: 2767462,
    helmet: 3685700,
    helmetRail: 1776929,
    goggleStrap: 4868924,
    goggleFrame: 2105893,
    goggleLens: 2834768,
    helmetPatch: 3817029,
    motoHelmet: 15856367,
    motoTrim: 2043215,
    motoVisor: 1448741,
    sleeve: 2240847,
    trouser: 1581624,
    swatSleeve: 3159099,
    swatTrouser: 3027512,
  },
  hS = { cloth: 0, skin: 1, gloss: 4, metal: 5, reflect: 7 },
  gS = class {
    nA = 32;
    y0;
    dy;
    cz;
    r;
    nY;
    constructor(e, t, n, r, i, a) {
      ((this.y0 = r), (this.nY = a), (this.dy = (i - r) / (a - 1)));
      let o = this.nA;
      ((this.cz = new Float32Array(a)), (this.r = new Float32Array(a * o)));
      let s = [],
        c = t ? t.length : e.length / 3;
      for (let e = 0; e + 2 < c; e += 3) {
        let r = t ? t[e] : e,
          i = t ? t[e + 1] : e + 1,
          a = t ? t[e + 2] : e + 2;
        n(r) && n(i) && n(a) && s.push(r, i, a);
      }
      let l = [],
        u = [],
        d = (t, n, r) => {
          let i = e[t * 3 + 1],
            a = e[n * 3 + 1];
          if ((i - r) * (a - r) > 0 || i === a) return !1;
          let o = (r - i) / (a - i);
          return (
            l.push(e[t * 3] + (e[n * 3] - e[t * 3]) * o),
            u.push(e[t * 3 + 2] + (e[n * 3 + 2] - e[t * 3 + 2]) * o),
            !0
          );
        };
      for (let e = 0; e < a; e++) {
        let t = r + e * this.dy;
        l.length = u.length = 0;
        for (let e = 0; e < s.length; e += 3) {
          let n = s[e],
            r = s[e + 1],
            i = s[e + 2],
            a = l.length;
          (d(n, r, t),
            d(r, i, t),
            d(i, n, t),
            (l.length - a === 1 || l.length - a === 3) && (l.pop(), u.pop()));
        }
        let n = 1 / 0,
          i = -1 / 0;
        for (let e = 0; e < u.length; e++)
          (u[e] < n && (n = u[e]), u[e] > i && (i = u[e]));
        let a = n <= i ? (n + i) / 2 : e > 0 ? this.cz[e - 1] : 0;
        this.cz[e] = a;
        let c = this.r.subarray(e * o, e * o + o);
        for (let e = 0; e + 1 < l.length; e += 2)
          for (let t = 0; t <= 4; t++) {
            let n = t / 4,
              r = l[e] + (l[e + 1] - l[e]) * n,
              i = u[e] + (u[e + 1] - u[e]) * n,
              s = Math.atan2(r, a - i);
            s < 0 && (s += Math.PI * 2);
            let d = Math.floor((s / (Math.PI * 2)) * o + 0.5) % o,
              f = Math.hypot(r, i - a);
            f > c[d] && (c[d] = f);
          }
        let f = !1;
        for (let e = 0; e < o; e++) c[e] > 0 && (f = !0);
        if (!f) {
          e > 0 ? c.set(this.r.subarray((e - 1) * o, e * o)) : c.fill(0.15);
          continue;
        }
        for (let e = 0; e < o; e++) {
          if (c[e] > 0) continue;
          let t = 1,
            n = 1;
          for (; c[(e - t + o) % o] <= 0;) t++;
          for (; c[(e + n) % o] <= 0;) n++;
          let r = c[(e - t + o) % o],
            i = c[(e + n) % o];
          c[e] = r + ((i - r) * t) / (t + n);
        }
      }
    }
    rowAt(e) {
      let t = Math.min(this.nY - 1.001, Math.max(0, (e - this.y0) / this.dy)),
        n = Math.floor(t);
      return { j: n, w: t - n };
    }
    czAt(e) {
      let { j: t, w: n } = this.rowAt(e);
      return this.cz[t] * (1 - n) + this.cz[t + 1] * n;
    }
    radius(e, t) {
      let n = this.nA,
        r = (e / (Math.PI * 2)) * n;
      r = ((r % n) + n) % n;
      let i = Math.floor(r),
        a = r - i,
        o = (i + 1) % n,
        { j: s, w: c } = this.rowAt(t),
        l = this.r[s * n + i] * (1 - a) + this.r[s * n + o] * a,
        u = this.r[(s + 1) * n + i] * (1 - a) + this.r[(s + 1) * n + o] * a;
      return l * (1 - c) + u * c;
    }
    maxRadius(e, t, n) {
      let r = 0;
      for (let i = 0; i <= 6; i++)
        r = Math.max(r, this.radius(e, t + ((n - t) * i) / 6));
      return r;
    }
    point(e, t, n, r) {
      let i = this.radius(e, t) + n;
      return r.set(Math.sin(e) * i, t, this.czAt(t) - Math.cos(e) * i);
    }
  },
  _S = new R(),
  vS = new R(),
  yS = new ke(),
  bS = new y(),
  xS = new k(),
  SS = new R(1, 1, 1),
  CS = new R(0, -1, 0);
function wS(e, t, n, r, i, a = 0, o = 0) {
  return (
    e.prof.point(n, r, i, _S),
    xS.set(a, -n, o, `YXZ`),
    bS.setFromEuler(xS),
    yS.compose(_S, bS, SS),
    t.applyMatrix4(yS),
    t
  );
}
function TS(e, t, n, r, i, a, o = 0, s = 0) {
  let c = e.prof,
    l = c.maxRadius(n, r - 0.038, r + 0.038) + a;
  return (
    _S.set(Math.sin(n) * l, i, c.czAt(r) - Math.cos(n) * l),
    xS.set(o, -n, s, `YXZ`),
    bS.setFromEuler(xS),
    yS.compose(_S, bS, SS),
    t.applyMatrix4(yS),
    t
  );
}
var Q = (e, t, n) => new L(e, t, n),
  ES = (e, t, n, r) => new w(e, t, n, r, 1);
function DS(e, t, n, r, i, a, o, s = 0, c = Math.PI * 2, l = !0) {
  let u = e.lod === 0 ? 32 : e.lod === 1 ? 14 : 8,
    d = [
      [r - i / 2, 0.002],
      [r - i / 2, a],
      [r + i / 2, a],
      [r + i / 2, 0.002],
    ],
    f = l ? u : u + 1,
    p = [],
    m = [],
    h = [],
    g = e.prof,
    _ = [];
  for (let e = 0; e < f; e++)
    _.push(
      g.maxRadius(s + ((c - s) * e) / u, r - i / 2 - 0.012, r + i / 2 + 0.012),
    );
  for (let e = 0; e < d.length; e++)
    for (let t = 0; t < f; t++) {
      let n = s + ((c - s) * t) / u,
        i = d[e][0],
        a = _[t] + d[e][1];
      (p.push(Math.sin(n) * a, i, g.czAt(r) - Math.cos(n) * a),
        h.push(t / u, e / (d.length - 1)));
    }
  for (let e = 0; e < d.length - 1; e++)
    for (let t = 0; t < u; t++) {
      let n = e * f + t,
        r = e * f + ((t + 1) % f),
        i = n + f,
        a = r + f;
      m.push(n, i, r, r, i, a);
    }
  let v = new fe();
  (v.setAttribute(`position`, new N(p, 3)),
    v.setAttribute(`uv`, new N(h, 2)),
    v.setIndex(m),
    v.computeVertexNormals(),
    t.add(v, n, o));
}
