// tokyo/assets/actors-bknSEpf2 08 — math
// Lines 2513-2839 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Sa() {
  let e = gn(`police`);
  return e
    ? xa(e)
    : {
        id: `police`,
        sex: `m`,
        age: `adult`,
        build: `avg`,
        height: 1.78,
        skin: yn.light,
        seed: 7,
        face: ln({
          jaw: 0.7,
          eyeSize: 0.95,
          lid: 0.35,
          brow: 0.7,
          smile: -0.1,
        }),
        hair: { style: `fade`, color: pn.black },
        top: { style: `police`, color: 2240847, color2: 14267207 },
        outer: { style: `vest`, color: 12118076, color2: 14673642, closed: !0 },
        bottom: { style: `slacks`, color: 1581624, belt: 1052947 },
        shoes: { style: `dress`, color: 986897 },
        acc: [{ kind: `policeCap` }, { kind: `watch` }],
      };
}
function Ca() {
  let e = Sa();
  ((e.id = `police-a`), (e.name = { zh: `巡邏員警`, en: `Patrol officer` }));
  let t = Sa();
  ((t.id = `police-b`),
    (t.name = { zh: `巡邏員警`, en: `Patrol officer` }),
    (t.height = 1.74),
    (t.skin = yn.tan),
    (t.seed = 311),
    (t.hair = { style: `buzz`, color: pn.black }),
    (t.face = ln({
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
  let n = Sa();
  ((n.id = `police-f`),
    (n.name = { zh: `女警`, en: `Policewoman` }),
    (n.sex = `f`),
    (n.build = `slim`),
    (n.height = 1.64),
    (n.skin = yn.fair),
    (n.seed = 523),
    (n.hair = { style: `bun`, color: pn.softBlack }),
    (n.face = ln({
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
  let r = Sa();
  ((r.id = `police-moto`),
    (r.name = { zh: `機車員警`, en: `Scooter officer` }),
    (r.height = 1.75),
    (r.skin = yn.medium),
    (r.seed = 877),
    (r.hair = { style: `fade`, color: pn.black }),
    (r.face = ln({
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
      hair: { style: `buzz`, color: pn.black },
      top: { style: `shirt`, color: 3159099, sleeve: `long`, tucked: !0 },
      outer: { style: `vest`, color: 3685701, color2: 3685701, closed: !0 },
      bottom: { style: `slacks`, color: 3027512, belt: 1184533 },
      shoes: { style: `boot`, color: 1381913, sole: 921104 },
      acc: [{ kind: `mask`, color: 1710878 }],
    }),
    a = i(
      `swat-a`,
      1201,
      yn.medium,
      1.8,
      ln({
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
      yn.tan,
      1.76,
      ln({ jaw: 0.66, eyeSize: 0.98, lid: 0.45, brow: 0.7, smile: -0.15 }),
    ),
    s = (e) => {
      let t = new j().setHex(e);
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
var wa = Ca(),
  Ta = [0, 2, 3, 4],
  Ea = [0, 1, 2],
  Da = [4, 5],
  q = {
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
  Oa = { cloth: 0, skin: 1, gloss: 4, metal: 5, reflect: 7 },
  ka = class {
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
  Aa = new V(),
  ja = new V(),
  Ma = new N(),
  Na = new v(),
  Pa = new Pe(),
  Fa = new V(1, 1, 1),
  Ia = new V(0, -1, 0);
function La(e, t, n, r, i, a = 0, o = 0) {
  return (
    e.prof.point(n, r, i, Aa),
    Pa.set(a, -n, o, `YXZ`),
    Na.setFromEuler(Pa),
    Ma.compose(Aa, Na, Fa),
    t.applyMatrix4(Ma),
    t
  );
}
function Ra(e, t, n, r, i, a, o = 0, s = 0) {
  let c = e.prof,
    l = c.maxRadius(n, r - 0.038, r + 0.038) + a;
  return (
    Aa.set(Math.sin(n) * l, i, c.czAt(r) - Math.cos(n) * l),
    Pa.set(o, -n, s, `YXZ`),
    Na.setFromEuler(Pa),
    Ma.compose(Aa, Na, Fa),
    t.applyMatrix4(Ma),
    t
  );
}
var za = (e, t, n) => new B(e, t, n),
  Ba = (e, t, n, r) => new me(e, t, n, r, 1);
