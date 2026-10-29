// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 36 — fillrect
// Lines 16666-16904 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function $a(e, t, n, r, i) {
  return (a, o, s, c, l) => {
    let u = Va(e.length * 31 + (t & 255)),
      d = (e) => s + e * l,
      f = (e) => o + e * c,
      p = e === `sneaker` || e === `boot`,
      m = e === `dress` || e === `loafer` || e === `heel` || e === `flat`;
    (a.clearRect(o, s, c, l), (a.fillStyle = K(t)), a.fillRect(o, s, c, l));
    for (let e = 0; e < 40; e++)
      ((a.fillStyle = m
        ? `rgba(255,255,255,${(0.03 + u() * 0.05).toFixed(3)})`
        : `rgba(0,0,0,${(0.02 + u() * 0.03).toFixed(3)})`),
        a.fillRect(f(u()), d(u()), c * (0.05 + u() * 0.2), 1));
    let h = p ? 0.2 : e === `rainboot` ? 0.13 : 0.11;
    if (
      ((a.fillStyle = K(r)),
      a.fillRect(o, d(0), c, h * l),
      a.fillRect(o, d(1 - h), c, h * l),
      (a.fillStyle = K(J(r, 0.72))),
      a.fillRect(o, d(h) - 1.5, c, 2),
      a.fillRect(o, d(1 - h) - 0.5, c, 2),
      p)
    ) {
      a.fillStyle = K(J(r, 0.85));
      for (let e = 0; e < 18; e++)
        (a.fillRect(f(e / 18), d(0), 1, h * l * 0.5),
          a.fillRect(f(e / 18), d(1 - h * 0.5), 1, h * l * 0.5));
      ((a.fillStyle = K(J(r, 0.9))),
        a.fillRect(o, d(h * 0.6), c, 1.5),
        a.fillRect(o, d(1 - h * 0.6), c, 1.5));
    }
    if (p) {
      ((a.fillStyle = K(J(t, 0.94))),
        a.fillRect(f(0.84), d(h), c * 0.16, l * (1 - 2 * h)),
        (a.strokeStyle = K(J(t, 0.75))),
        a.setLineDash([3, 2]),
        (a.lineWidth = 1),
        a.beginPath(),
        a.moveTo(f(0.84), d(h)),
        a.lineTo(f(0.84), d(1 - h)),
        a.stroke(),
        a.setLineDash([]),
        (a.fillStyle = K(n)),
        a.fillRect(o, d(0.36), c * 0.1, l * 0.28));
      for (let e of [0.27, 0.73])
        ((a.fillStyle = K(n)),
          a.beginPath(),
          a.moveTo(f(0.18), d(e + 0.1 * (e < 0.5 ? -1 : 1) * 0)),
          a.bezierCurveTo(
            f(0.35),
            d(e + 0.07),
            f(0.55),
            d(e + 0.02),
            f(0.72),
            d(e - 0.1),
          ),
          a.lineTo(f(0.7), d(e - 0.04)),
          a.bezierCurveTo(
            f(0.52),
            d(e + 0.07),
            f(0.34),
            d(e + 0.12),
            f(0.18),
            d(e + 0.08),
          ),
          a.closePath(),
          a.fill());
      ((a.fillStyle = K(J(t, 0.9))),
        a.fillRect(f(0.34), d(0.42), c * 0.34, l * 0.16),
        (a.strokeStyle = K(e === `boot` ? 3811866 : 16185074)),
        (a.lineWidth = 2.2));
      for (let e = 0; e < 6; e++) {
        let t = 0.36 + e * 0.05;
        (a.beginPath(),
          a.moveTo(f(t), d(0.43)),
          a.lineTo(f(t + 0.035), d(0.57)),
          a.moveTo(f(t), d(0.57)),
          a.lineTo(f(t + 0.035), d(0.43)),
          a.stroke());
      }
      a.fillStyle = K(J(t, 0.6));
      for (let e = 0; e < 7; e++)
        (a.fillRect(f(0.355 + e * 0.05), d(0.425), 2, 2),
          a.fillRect(f(0.355 + e * 0.05), d(0.565), 2, 2));
      ((a.fillStyle = `rgba(20,18,16,0.95)`),
        a.fillRect(o, d(0.46), c * 0.28, l * 0.08));
    } else if (m) {
      if (
        ((a.strokeStyle = K(J(t, 0.6))),
        (a.lineWidth = 1.2),
        a.beginPath(),
        a.ellipse(
          f(0.83),
          d(0.5),
          c * 0.1,
          l * 0.22,
          0,
          Math.PI * 0.5,
          Math.PI * 1.5,
        ),
        a.stroke(),
        e === `loafer` &&
          ((a.fillStyle = K(J(t, 0.82))),
          a.fillRect(f(0.52), d(0.4), c * 0.06, l * 0.2)),
        e === `dress`)
      ) {
        ((a.strokeStyle = K(J(t, 0.45))), (a.lineWidth = 1.5));
        for (let e = 0; e < 4; e++)
          (a.beginPath(),
            a.moveTo(f(0.46 + e * 0.045), d(0.46)),
            a.lineTo(f(0.46 + e * 0.045), d(0.54)),
            a.stroke());
      }
      ((a.fillStyle = `rgba(16,14,12,0.95)`),
        a.fillRect(o, d(0.47), c * 0.26, l * 0.06),
        i && a.clearRect(f(0.18), d(0.36), c * 0.55, l * 0.28));
    } else
      e === `rainboot` &&
        ((a.fillStyle = `rgba(255,255,255,0.12)`),
        a.fillRect(o, d(0.3), c, l * 0.05),
        (a.fillStyle = `rgba(16,14,12,0.9)`),
        a.fillRect(o, d(0.46), c * 0.2, l * 0.08));
  };
}
function eo(e, t) {
  return (n, r, i, a, o) => {
    let s = [e, 16052974, t, 16052974, e, 16052974],
      c = a / s.length;
    s.forEach((e, t) => {
      ((n.fillStyle = K(e)), n.fillRect(r + t * c, i, c + 1, o));
    });
    for (let e = 0; e < o; e += 4)
      for (let t = 0; t < a; t += 4)
        ((n.fillStyle =
          ((t + e) / 4) % 2 ? `rgba(0,0,0,0.12)` : `rgba(255,255,255,0.1)`),
          n.fillRect(r + t, i + e, 4, 2));
  };
}
function to(e) {
  return !!e.tiles || !!(e.atlas && e.page);
}
function no(e, t, n, r, i, a) {
  return e.tiles
    ? e.tiles.tile(t, n, r, i, a)
    : e.atlas && e.page
      ? e.atlas.tile(e.page, t, n, r, i, a)
      : null;
}
function ro(e, t, n, r = 16777215) {
  let i = t ?? `solid`;
  return to(e)
    ? i === `solid` || i === `knit`
      ? {
          vcol: n,
          rect:
            i === `knit`
              ? no(
                  e,
                  `knit:ffffff`,
                  128,
                  128,
                  !0,
                  Ga(`knit`, 15921906, 16777215, 5),
                )
              : no(e, `weave`, 128, 128, !0, Ua),
          tileM: i === `knit` ? 0.06 : 0.045,
        }
      : i === `denim`
        ? {
            vcol: n,
            rect: no(
              e,
              `denim`,
              128,
              128,
              !0,
              Ga(`denim`, 15790320, 16777215, 9),
            ),
            tileM: 0.05,
          }
        : {
            vcol: 16777215,
            rect: no(
              e,
              `pat:${i}:${n.toString(16)}:${r.toString(16)}`,
              128,
              128,
              !0,
              Ga(i, n, r, (n ^ (r << 3)) & 65535),
            ),
            tileM: i === `stripes` ? 0.09 : 0.11,
          }
    : {
        vcol: q(
          n,
          r,
          {
            stripes: 0.3,
            floral: 0.4,
            plaid: 0.35,
            check: 0.3,
            dots: 0.12,
            camo: 0.4,
            knit: 0,
            denim: 0,
            solid: 0,
          }[i] ?? 0,
        ),
        rect: null,
        tileM: 1,
      };
}
function io(e) {
  return no(e, `hair3`, 128, 128, !0, Wa);
}
function ao(e, t, n, r) {
  return no(e, `rib:${t}:${n}:${r}`, 128, 64, !0, Xa(t, n, r));
}
function oo(e, t, n, r) {
  return t === `none`
    ? null
    : no(e, `print:${t}:${n}:${r}`, 256, 256, !1, Za(t, n, r));
}
function so(e, t, n) {
  return no(e, `placket:${t}:${n}`, 32, 256, !1, qa(t, n, 6));
}
function co(e, t, n) {
  return no(e, `zip:${t}:${n}`, 16, 256, !1, Ja(t, n));
}
function lo(e, t, n, r) {
  return no(e, `pocket:${r}:${t}:${n}`, 96, 96, !1, Ya(t, n, r));
}
function uo(e, t) {
  return Math.max(1, Math.round((Math.PI * 2 * e) / t));
}
const fo = new F();
function Y(e, t) {
  return fo.setHex(e).multiplyScalar(t).getHex();
}
