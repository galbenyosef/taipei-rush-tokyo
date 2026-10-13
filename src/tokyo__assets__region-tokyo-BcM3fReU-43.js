// tokyo__assets__region-tokyo-BcM3fReU 43 — style
// Lines 23050-23360 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Fm(e, t, n, r) {
  let i = ua(t.bg),
    a = ua(t.fg),
    o = Pm(t.key),
    s = t.sub ? Pm(t.sub) : ``,
    c = Math.min(n, r) / 64;
  switch (t.kind) {
    case `fascia`:
    case `band`:
    case `plate`: {
      if (t.style === 1)
        (I(e, 0, 0, n, r, `#f8f8f4`), I(e, 0, r * 0.78, n, r * 0.22, i));
      else if (t.style === 2) {
        I(e, 0, 0, n, r, `#3a2414`);
        for (let t = 0; t < r; t += 4 * c) I(e, 0, t, n, 1, `rgba(0,0,0,0.25)`);
        I(e, 2 * c, 2 * c, n - 4 * c, r - 4 * c, `rgba(255,255,255,0.05)`);
      } else
        t.style === 3
          ? I(e, 0, 0, n, r, `#0c0c10`)
          : (I(e, 0, 0, n, r, i),
            I(e, 0, 0, n, r * 0.06, `rgba(255,255,255,0.25)`),
            I(e, 0, r * 0.94, n, r * 0.06, `rgba(0,0,0,0.25)`));
      let l =
          t.style === 1
            ? Nm(t.bg) > 200
              ? a
              : i
            : t.style === 2
              ? `#f0d890`
              : (t.style, a),
        u = t.style === 2 || t.kind === `plate` ? ca() : sa(),
        d = n * 0.05,
        f = n * 0.95;
      if (s) {
        let a = Math.min(n * 0.3, r * 1.6);
        (I(
          e,
          r * 0.12,
          r * 0.14,
          a,
          r * (t.style === 1 ? 0.58 : 0.72),
          t.style === 1 ? i : l,
        ),
          Ea(
            e,
            s,
            r * 0.12 + a / 2,
            r * (t.style === 1 ? 0.43 : 0.5),
            a * 0.9,
            r * 0.5,
            t.style === 1 ? `#ffffff` : i,
            sa(),
          ),
          (d = r * 0.12 + a + r * 0.2));
      }
      t.style === 3
        ? ((e.font = `bold ${Ta(e, o, f - d, r * 0.7, u)}px ${u}`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          (e.lineJoin = `round`),
          (e.strokeStyle = a),
          (e.globalAlpha = 0.35),
          (e.lineWidth = 5 * c),
          e.strokeText(o, (d + f) / 2, r * 0.52),
          (e.globalAlpha = 1),
          (e.lineWidth = 2 * c),
          e.strokeText(o, (d + f) / 2, r * 0.52),
          (e.fillStyle = `#ffffff`),
          e.fillText(o, (d + f) / 2, r * 0.52))
        : Ea(
            e,
            o,
            (d + f) / 2,
            r * (t.style === 1 ? 0.42 : 0.52),
            f - d,
            r * (t.style === 1 ? 0.56 : 0.72),
            l,
            u,
          );
      break;
    }
    case `noren`: {
      (I(e, 0, 0, n, r, i), I(e, 0, 0, n, r * 0.08, `#2a1a10`));
      let t = [...o.replace(/\s+/g, ``)];
      for (let t = 1; t < 4; t++)
        I(e, (n * t) / 4 - 1.5 * c, r * 0.3, 3 * c, r, `rgba(0,0,0,0.55)`);
      ((e.font = `bold ${r * 0.5}px ${ca()}`),
        (e.fillStyle = a),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`));
      let s = n / Math.max(t.length, 1);
      t.forEach((t, n) => e.fillText(t, s * (n + 0.5), r * 0.55));
      break;
    }
    case `lantern`: {
      I(e, 0, 0, n, r, `#1a1a1a`);
      let t = e.createLinearGradient(0, 0, n, 0);
      (t.addColorStop(0, `#9a1a10`),
        t.addColorStop(0.5, `#f0402a`),
        t.addColorStop(1, `#9a1a10`),
        (e.fillStyle = t),
        e.fillRect(0, r * 0.08, n, r * 0.84));
      for (let t = r * 0.12; t < r * 0.9; t += 6 * c)
        I(e, 0, t, n, 0.8, `rgba(0,0,0,0.12)`);
      Da(e, o, n / 2, r * 0.14, r * 0.86, n * 0.7, `#141414`, sa());
      break;
    }
    case `vpanel`:
    case `vbig`: {
      (t.style === 1
        ? (I(e, 0, 0, n, r, `#f8f8f4`), I(e, 0, 0, n * 0.12, r, i))
        : I(e, 0, 0, n, r, i),
        I(e, 0, 0, n, 2 * c, `rgba(255,255,255,0.25)`));
      let l = t.style === 1 ? (Nm(t.bg) > 200 ? a : i) : a,
        u = s && s.length <= 3,
        d = u ? r * 0.8 : r * 0.95;
      (s && !u
        ? (Da(e, o, n * 0.62, r * 0.05, d, n * 0.5, l, sa()),
          Da(e, s, n * 0.24, r * 0.05, d * 0.6, n * 0.28, l, sa(), `600`))
        : Da(
            e,
            o,
            n / 2,
            r * 0.05,
            d,
            n * 0.78,
            l,
            t.style === 2 ? ca() : sa(),
          ),
        u &&
          (I(
            e,
            n * 0.1,
            r * 0.83,
            n * 0.8,
            r * 0.14,
            t.style === 1 ? i : `#ffffff`,
          ),
          (e.font = `bold ${Ta(e, s, n * 0.7, r * 0.11, `Arial, sans-serif`)}px Arial, sans-serif`),
          (e.fillStyle = t.style === 1 ? `#ffffff` : i),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          e.fillText(s, n / 2, r * 0.9)));
      break;
    }
  }
}
var Im = {
    OFFICE: 0,
    ZAKKYO: 1,
    MANSION: 2,
    SHITAMACHI: 3,
    KURA: 4,
    DEPATO: 5,
  },
  Lm = [
    [24, 64],
    [5, 8.5],
    [14, 30],
    [4.5, 8],
    [6, 11],
    [36, 70],
  ],
  Rm = {
    nihonbashi: 0.07,
    kanda: 0.04,
    ueno: 0.03,
    ameyoko: 0.02,
    shimbashi: 0.02,
    "tokyo-east-generic": 0.04,
  },
  zm = {
    ginza: 0.16,
    nihonbashi: 0.12,
    ueno: 0.08,
    shimbashi: 0.05,
    akihabara: 0.06,
  },
  Bm = [
    [15327956, 3],
    [14207924, 3],
    [13218454, 2],
    [11043946, 2],
    [9071192, 1],
    [14145748, 3],
    [12040888, 2],
    [15921128, 2],
    [9325122, 1],
    [7238776, 1],
    [13090980, 1],
    [10135214, 1],
  ],
  Vm = [
    [15722973, 4],
    [14866114, 3],
    [13812392, 2],
    [13089190, 2],
    [12098178, 2],
    [14474454, 3],
    [10783350, 1],
    [12892320, 1],
    [15262422, 2],
  ],
  Hm = [
    [14209218, 3],
    [13023396, 2],
    [11841190, 2],
    [10260354, 1],
    [14867922, 2],
    [9078144, 1],
  ],
  Um = [
    [16777215, 3],
    [14214896, 3],
    [13623516, 2],
    [14870250, 2],
    [12635352, 2],
    [12110020, 1],
  ],
  Wm = [
    [15261904, 3],
    [14076080, 2],
    [13155496, 2],
    [11047024, 1],
    [12371140, 2],
    [15789280, 2],
    [10135728, 1],
  ],
  Gm = [
    [6981800, 2],
    [10134182, 3],
    [11563088, 1],
    [14209728, 2],
    [8034950, 1],
  ],
  Km = [
    [9080468, 3],
    [6186094, 3],
    [4212302, 2],
    [10119760, 1],
  ],
  qm = [
    [9060408, 3],
    [4876932, 2],
    [6191706, 2],
    [8026742, 2],
  ],
  Jm = [
    [12071466, 3],
    [3041860, 2],
    [2903946, 2],
    [14198842, 1],
    [6961706, 1],
    [14708784, 1],
  ],
  Ym = [
    [15261904, 3],
    [13681840, 2],
    [15789800, 2],
    [13152400, 1],
  ];
function Xm(e = 16384) {
  let t = new Bn(e / 4, e / 2);
  t.remap = Kn.SIGN;
  let n = new Bn(256, 512);
  n.remap = Kn.SCREEN;
  let r = new Bn(256, 512);
  return (
    (r.remap = Kn.TICKER),
    { body: new Bn(e, e * 1.5), sign: t, screen: n, ticker: r }
  );
}
function Zm(e) {
  (e.body.reset(), e.sign.reset(), e.screen.reset(), e.ticker.reset());
}
function Qm(e, t) {
  switch (t) {
    case 0:
      return {
        px: e.x1,
        pz: e.z0,
        tx: -1,
        tz: 0,
        nx: 0,
        nz: -1,
        L: e.x1 - e.x0,
      };
    case 1:
      return {
        px: e.x1,
        pz: e.z1,
        tx: 0,
        tz: -1,
        nx: 1,
        nz: 0,
        L: e.z1 - e.z0,
      };
    case 2:
      return { px: e.x0, pz: e.z1, tx: 1, tz: 0, nx: 0, nz: 1, L: e.x1 - e.x0 };
    default:
      return {
        px: e.x0,
        pz: e.z0,
        tx: 0,
        tz: 1,
        nx: -1,
        nz: 0,
        L: e.z1 - e.z0,
      };
  }
}
