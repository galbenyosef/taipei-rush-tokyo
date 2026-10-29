// tokyo/assets/region-tokyo-A7LxHjud 72 — style
// Lines 31905-32101 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Hf(e, t, n, r) {
  let i = Fr(t.bg),
    a = Fr(t.fg),
    o = Vf(t.key),
    s = t.sub ? Vf(t.sub) : ``,
    c = Math.min(n, r) / 64;
  switch (t.kind) {
    case `fascia`:
    case `band`:
    case `plate`: {
      if (t.style === 1)
        (P(e, 0, 0, n, r, `#f8f8f4`), P(e, 0, r * 0.78, n, r * 0.22, i));
      else if (t.style === 2) {
        P(e, 0, 0, n, r, `#3a2414`);
        for (let t = 0; t < r; t += 4 * c) P(e, 0, t, n, 1, `rgba(0,0,0,0.25)`);
        P(e, 2 * c, 2 * c, n - 4 * c, r - 4 * c, `rgba(255,255,255,0.05)`);
      } else
        t.style === 3
          ? P(e, 0, 0, n, r, `#0c0c10`)
          : (P(e, 0, 0, n, r, i),
            P(e, 0, 0, n, r * 0.06, `rgba(255,255,255,0.25)`),
            P(e, 0, r * 0.94, n, r * 0.06, `rgba(0,0,0,0.25)`));
      let l =
          t.style === 1
            ? Bf(t.bg) > 200
              ? a
              : i
            : t.style === 2
              ? `#f0d890`
              : (t.style, a),
        u = t.style === 2 || t.kind === `plate` ? Nr() : Mr(),
        d = n * 0.05,
        f = n * 0.95;
      if (s) {
        let a = Math.min(n * 0.3, r * 1.6);
        (P(
          e,
          r * 0.12,
          r * 0.14,
          a,
          r * (t.style === 1 ? 0.58 : 0.72),
          t.style === 1 ? i : l,
        ),
          Yr(
            e,
            s,
            r * 0.12 + a / 2,
            r * (t.style === 1 ? 0.43 : 0.5),
            a * 0.9,
            r * 0.5,
            t.style === 1 ? `#ffffff` : i,
            Mr(),
          ),
          (d = r * 0.12 + a + r * 0.2));
      }
      t.style === 3
        ? ((e.font = `bold ${Jr(e, o, f - d, r * 0.7, u)}px ${u}`),
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
        : Yr(
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
      (P(e, 0, 0, n, r, i), P(e, 0, 0, n, r * 0.08, `#2a1a10`));
      let t = [...o.replace(/\s+/g, ``)];
      for (let t = 1; t < 4; t++)
        P(e, (n * t) / 4 - 1.5 * c, r * 0.3, 3 * c, r, `rgba(0,0,0,0.55)`);
      ((e.font = `bold ${r * 0.5}px ${Nr()}`),
        (e.fillStyle = a),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`));
      let s = n / Math.max(t.length, 1);
      t.forEach((t, n) => e.fillText(t, s * (n + 0.5), r * 0.55));
      break;
    }
    case `lantern`: {
      P(e, 0, 0, n, r, `#1a1a1a`);
      let t = e.createLinearGradient(0, 0, n, 0);
      (t.addColorStop(0, `#9a1a10`),
        t.addColorStop(0.5, `#f0402a`),
        t.addColorStop(1, `#9a1a10`),
        (e.fillStyle = t),
        e.fillRect(0, r * 0.08, n, r * 0.84));
      for (let t = r * 0.12; t < r * 0.9; t += 6 * c)
        P(e, 0, t, n, 0.8, `rgba(0,0,0,0.12)`);
      Xr(e, o, n / 2, r * 0.14, r * 0.86, n * 0.7, `#141414`, Mr());
      break;
    }
    case `vpanel`:
    case `vbig`: {
      (t.style === 1
        ? (P(e, 0, 0, n, r, `#f8f8f4`), P(e, 0, 0, n * 0.12, r, i))
        : P(e, 0, 0, n, r, i),
        P(e, 0, 0, n, 2 * c, `rgba(255,255,255,0.25)`));
      let l = t.style === 1 ? (Bf(t.bg) > 200 ? a : i) : a,
        u = s && s.length <= 3,
        d = u ? r * 0.8 : r * 0.95;
      (s && !u
        ? (Xr(e, o, n * 0.62, r * 0.05, d, n * 0.5, l, Mr()),
          Xr(e, s, n * 0.24, r * 0.05, d * 0.6, n * 0.28, l, Mr(), `600`))
        : Xr(
            e,
            o,
            n / 2,
            r * 0.05,
            d,
            n * 0.78,
            l,
            t.style === 2 ? Nr() : Mr(),
          ),
        u &&
          (P(
            e,
            n * 0.1,
            r * 0.83,
            n * 0.8,
            r * 0.14,
            t.style === 1 ? i : `#ffffff`,
          ),
          (e.font = `bold ${Jr(e, s, n * 0.7, r * 0.11, `Arial, sans-serif`)}px Arial, sans-serif`),
          (e.fillStyle = t.style === 1 ? `#ffffff` : i),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          e.fillText(s, n / 2, r * 0.9)));
      break;
    }
  }
}
function Uf(e = 16384) {
  let t = new un(e / 4, e / 2);
  t.remap = rn.SIGN;
  let n = new un(256, 512);
  n.remap = rn.SCREEN;
  let r = new un(256, 512);
  return (
    (r.remap = rn.TICKER),
    { body: new un(e, e * 1.5), sign: t, screen: n, ticker: r }
  );
}
function ece(e) {
  (e.body.reset(), e.sign.reset(), e.screen.reset(), e.ticker.reset());
}
function Wf(e, t) {
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
