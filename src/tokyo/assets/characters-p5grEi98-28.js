// tokyo/assets/characters-p5grEi98 28 — math
// Lines 8208-8654 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function La(e, t, n = null) {
  return (r, i, a, o) => {
    let s = e.face,
      c = e.sex === `f`,
      l = e.age === `elder`,
      u = e.age === `student`,
      d = Pe(e.seed * 7 + 13),
      f = (e) => i + (0.5 + e / (2 * t.Theta)) * o,
      p = (e) => a + ((e - t.d0) / (t.d1 - t.d0)) * o,
      m = o / 512,
      h = e.skin;
    (r.clearRect(i, a, o, o), (r.lineCap = `round`), (r.lineJoin = `round`));
    let g = (e, t, n, i, a, o) => {
        if (o <= 0) return;
        (r.save(), r.translate(e, t), r.scale(1, i / n));
        let s = r.createRadialGradient(0, 0, 0, 0, 0, n);
        (s.addColorStop(0, P(a, o)),
          s.addColorStop(1, P(a, 0)),
          (r.fillStyle = s),
          r.fillRect(-n, -n, n * 2, n * 2),
          r.restore());
      },
      _ = F(I(h, 0.62), 6961728, 0.25),
      v = F(h, 14700650, 0.55),
      y = F(h, 13131850, 0.5);
    for (let e = 0; e < 70; e++) {
      let e = (d() * 2 - 1) * 1.1,
        t = 0.2 + d() * 0.8,
        n = (0.02 + d() * 0.05) * o;
      g(
        f(e),
        p(t),
        n,
        n * (0.6 + d() * 0.6),
        d() < 0.5 ? y : I(h, 1.08),
        0.02 + d() * 0.025,
      );
    }
    for (let e of [-1, 1])
      (g(f(e * 0.64), p(0.655), 0.13 * o, 0.065 * o, v, 0.04 + 0.24 * s.blush),
        g(f(e * 1.3), p(0.6), 0.05 * o, 0.08 * o, y, 0.1));
    if (
      (g(
        f(0),
        p(t.noseTipD - 0.01),
        0.055 * o,
        0.04 * o,
        F(h, 13652048, 0.4),
        0.14,
      ),
      g(f(0), p(0.93), 0.1 * o, 0.035 * o, y, 0.08),
      g(f(0), p(0.3), 0.2 * o, 0.1 * o, 16777215, 0.035),
      u || (c && s.blush > 0.2))
    ) {
      let e = u ? 26 : 12;
      for (let t = 0; t < e; t++)
        g(
          f((d() < 0.5 ? -1 : 1) * (0.2 + d() * 0.45)),
          p(0.6 + d() * 0.1),
          (1 + d() * 1.4) * m,
          (1 + d() * 1.4) * m,
          I(h, 0.72),
          0.2,
        );
    }
    for (let e of [-1, 1])
      (g(f(e * 0.8), p(0.73), 0.07 * o, 0.06 * o, _, 0.08),
        g(f(e * 0.1), p(0.6), 0.022 * o, 0.075 * o, _, 0.12),
        g(
          f(e * (t.eyeT - t.eyeW * 1.05)),
          p(t.eyeD - 0.004),
          0.018 * o,
          0.022 * o,
          _,
          0.2,
        ),
        g(
          f(e * (t.noseW * 1.02)),
          p(t.noseBaseD - 0.008),
          0.016 * o,
          0.013 * o,
          _,
          0.18,
        ));
    if (
      (g(f(0), p(t.noseBaseD + 0.012), 0.03 * o, 0.01 * o, _, 0.12),
      g(f(0), p(0.6), 0.025 * o, 0.09 * o, 16777215, 0.07),
      n)
    ) {
      let i = e.hair.color;
      for (let e = -1.45; e <= 1.45; e += 0.01) {
        let a = n(e);
        if (a > t.d1 - 0.02) continue;
        let o = f(e),
          s = r.createLinearGradient(0, p(a - 0.014), 0, p(a + 0.028));
        (s.addColorStop(0, P(i, 0.72)),
          s.addColorStop(0.4, P(i, 0.24)),
          s.addColorStop(1, P(i, 0)),
          (r.fillStyle = s),
          r.fillRect(
            o - 0.6 * m,
            p(a - 0.014),
            3 * m,
            p(a + 0.028) - p(a - 0.014),
          ));
      }
      r.lineWidth = 0.7 * m;
      for (let e = 0; e < 320; e++) {
        let e = (d() * 2 - 1) * 1.42,
          t = n(e),
          a = f(e),
          o = p(t - 0.006 + d() * 0.006);
        ((r.strokeStyle = P(i, 0.3 + 0.35 * d())),
          r.beginPath(),
          r.moveTo(a, o),
          r.quadraticCurveTo(
            a + (d() - 0.5) * 3 * m,
            o + 4 * m,
            a + (d() - 0.5) * 5 * m,
            o + (4 + 8 * d()) * m,
          ),
          r.stroke());
      }
    }
    let b = e.hair.color,
      x = l ? 9078143 : F(b, 3356740, 0.3);
    if (s.facial !== `none`) {
      let e = t.mouthW,
        n = (n, r) => {
          let i = Math.abs(n),
            a = i / e;
          return a < 1.05 &&
            r > Xt(t, Math.min(1, a)) - Zt(t, a) - 0.003 &&
            r < Xt(t, Math.min(1, a)) + Qt(t, a) + 0.003
            ? !1
            : s.facial === `mustache`
              ? r > t.noseBaseD + 0.008 &&
                r < Xt(t, Math.min(1, a)) - Zt(t, a) &&
                i < e * 1.15
              : s.facial === `goatee`
                ? (r > t.mouthD + 0.03 && i < 0.3) ||
                  (r > t.noseBaseD + 0.01 &&
                    r < Xt(t, Math.min(1, a)) - Zt(t, a) &&
                    i < e * 1.1)
                : r > 0.68 + 0.1 * Math.min(1, i / 1) &&
                  i < 1.3 &&
                  !(r < t.noseBaseD + 0.012 && i < t.noseW * 1.2);
        },
        i = s.facial === `stubble`;
      (i || s.facial === `beard`) &&
        g(f(0), p(0.9), 0.36 * o, 0.13 * o, 3818064, i ? 0.1 : 0.18);
      let a = Math.round(o * o * (i ? 0.07 : 0.1));
      for (let e = 0; e < a; e++) {
        let e = (d() * 2 - 1) * 1.3,
          t = 0.62 + d() * 0.4;
        if (!n(e, t)) continue;
        r.fillStyle = P(x, (i ? 0.16 : 0.5) * (0.4 + d() * 0.6));
        let a = (i ? 0.7 : 1.2) * m * (0.6 + d());
        r.fillRect(f(e), p(t), a, a * (i ? 1.2 : 2.4));
      }
    }
    let S = s.wrinkles;
    if (S > 0.02) {
      ((r.strokeStyle = P(I(h, 0.6), 0.12 + 0.18 * S)),
        (r.lineWidth = 1.4 * m));
      for (let e = 0; e < 3; e++) {
        let t = 0.25 + e * 0.045;
        r.beginPath();
        for (let n = -0.55; n <= 0.55; n += 0.05) {
          let i = p(t + 0.006 * Math.sin(n * 7 + e));
          n === -0.55 ? r.moveTo(f(n), i) : r.lineTo(f(n), i);
        }
        r.stroke();
      }
      for (let e of [-1, 1]) {
        let n = e * (t.eyeT + t.eyeW * 1.12),
          i = t.eyeD - t.tilt;
        for (let t = -1; t <= 1; t++)
          (r.beginPath(),
            r.moveTo(f(n), p(i + t * 0.012)),
            r.lineTo(f(n + e * 0.1), p(i + t * 0.03)),
            r.stroke());
        r.beginPath();
        for (let n = -0.6; n <= 0.9; n += 0.1) {
          let i = f(e * (t.eyeT + n * t.eyeW)),
            a = p(Yt(t, n) + 0.03);
          n === -0.6 ? r.moveTo(i, a) : r.lineTo(i, a);
        }
        r.stroke();
      }
    }
    {
      let e = 0.02 + 0.16 * S + (s.smile > 0 ? 0.04 * s.smile : 0);
      ((r.strokeStyle = P(I(h, 0.55), e)), (r.lineWidth = (2.4 + 2 * S) * m));
      for (let e of [-1, 1])
        (r.beginPath(),
          r.moveTo(f(e * (t.noseW * 1.18)), p(t.noseBaseD - 0.012)),
          r.quadraticCurveTo(
            f(e * (t.mouthW * 1.3)),
            p(t.mouthD - 0.03),
            f(e * (t.mouthW * 1.3)),
            p(t.mouthD + 0.04),
          ),
          r.stroke());
    }
    if (l)
      for (let e = 0; e < 7; e++)
        g(
          f((d() * 2 - 1) * 0.9),
          p(0.25 + d() * 0.5),
          (2 + d() * 3) * m,
          (2 + d() * 3) * m,
          8016438,
          0.3,
        );
    let C = l ? F(b, 10130572, 0.6) : F(b, 1708557, 0.35);
    for (let e of [-1, 1]) {
      let n = [];
      for (let r = 0; r <= 16; r++) {
        let i = r / 16,
          a = e * (t.browIn + (t.browOut - t.browIn) * i),
          o =
            Math.sin(Math.min(1, i / 0.68) * Math.PI * 0.5) *
            (i < 0.68 ? 1 : 1 - ((i - 0.68) / 0.32) * 0.9),
          l =
            t.browD +
            0.012 -
            (0.012 + 0.022 * s.browArch) * o -
            t.tilt * 0.3 * i,
          u =
            (0.016 + 0.014 * s.brow) *
            (1 - 0.72 * i * i) *
            (c ? 0.85 : 1.05) *
            (i < 0.16 ? 0.45 + 0.55 * Math.sin((i / 0.16) * Math.PI * 0.5) : 1);
        n.push([a, l, u]);
      }
      let i = f(n[0][0]),
        a = f(n[5][0]),
        o = r.createLinearGradient(i, 0, a, 0);
      (o.addColorStop(0, P(C, 0)),
        o.addColorStop(1, P(C, c ? 0.3 : 0.36)),
        (r.fillStyle = o),
        r.beginPath(),
        n.forEach(([e, t, n], i) =>
          i ? r.lineTo(f(e), p(t - n * 0.45)) : r.moveTo(f(e), p(t - n * 0.45)),
        ));
      for (let e = n.length - 1; e >= 0; e--)
        r.lineTo(f(n[e][0]), p(n[e][1] + n[e][2] * 0.45));
      (r.closePath(), r.fill());
      let l = Math.round(110 + 90 * s.brow);
      for (let t = 0; t < l; t++) {
        let t = d() ** 0.9,
          [i, a, o] = n[Math.min(15, Math.floor(t * 16))],
          s = a + (d() - 0.5) * o * 0.95,
          c = (t < 0.22 ? -1.3 : t < 0.55 ? -0.6 : -0.18) + (d() - 0.5) * 0.35,
          l = (5 + 6 * d()) * m * (t < 0.22 ? 0.75 : 1.15),
          u = f(i),
          h = p(s);
        ((r.strokeStyle = P(F(C, 0, d() * 0.35), 0.5 + 0.4 * d())),
          (r.lineWidth = (0.75 + 0.55 * d()) * m),
          r.beginPath(),
          r.moveTo(u, h),
          r.quadraticCurveTo(
            u + e * Math.cos(c) * l * 0.5,
            h + Math.sin(c) * l * 0.55,
            u + e * Math.cos(c) * l,
            h + Math.sin(c) * l + 1.2 * m,
          ),
          r.stroke());
      }
    }
    let w = 1051143;
    for (let e of [-1, 1]) {
      let n = (n) => f(e * (t.eyeT + n * t.eyeW)),
        i = (e, i, a) => {
          r.beginPath();
          for (let o = 0; o <= 24; o++) {
            let s = e + ((i - e) * o) / 24,
              c = Math.max(-1, Math.min(1, s)),
              l = n(s),
              u = p(Jt(t, c) - a(c));
            o === 0 ? r.moveTo(l, u) : r.lineTo(l, u);
          }
        },
        a = 0.024 + 0.01 * s.lid;
      ((r.fillStyle = P(
        c && !l
          ? F(F(h, 9064520, 0.3), 6965850, 0.25 * s.liner)
          : F(h, 9067096, 0.2),
        c ? 0.34 + 0.2 * s.liner : 0.28,
      )),
        i(-1.05, 1.1, (e) => a * Math.max(0, 1 - e * e) ** 0.5 + 0.002));
      for (let e = 24; e >= 0; e--) {
        let i = -1.05 + (2.15 * e) / 24;
        r.lineTo(n(i), p(Jt(t, Math.max(-1, Math.min(1, i))) + 0.001));
      }
      if ((r.closePath(), r.fill(), s.lid > 0.25)) {
        let e = 0.009 + 0.008 * s.lid;
        ((r.strokeStyle = P(I(h, 0.45), 0.18 + 0.3 * s.lid)),
          (r.lineWidth = 1.5 * m),
          i(-0.72, 1.02, (t) => e * (1 - 0.25 * t * t)),
          r.stroke());
      }
      let _ = 0.05 + 0.4 * s.liner;
      ((r.fillStyle = P(w, 0.95)),
        i(-1, 1, () => -0.0012),
        r.lineTo(n(1 + _), p(Jt(t, 1) - 0.01 - _ * 0.045)));
      for (let e = 24; e >= 0; e--) {
        let i = -1 + (e / 24) * 2,
          a =
            (0.0042 + (0.003 + 0.006 * s.liner) * ((i + 1) / 2) ** 1.3) *
            (c ? 1.1 : 0.9);
        r.lineTo(n(i), p(Jt(t, i) - a));
      }
      (r.closePath(), r.fill());
      let v = c ? 30 : 18;
      r.strokeStyle = P(w, 0.75);
      for (let i = 0; i < v; i++) {
        let a = -0.85 + (i / (v - 1)) * 1.9,
          o = Math.min(1, a),
          s = n(a),
          l = p(Jt(t, o) - 0.004),
          u = (c ? 5 : 3) * m * (0.6 + 0.8 * ((a + 1) / 2)),
          d = -Math.PI / 2 + e * (0.25 + 0.8 * Math.max(0, a));
        ((r.lineWidth = 0.9 * m),
          r.beginPath(),
          r.moveTo(s, l),
          r.lineTo(s + Math.cos(d) * u, l + Math.sin(d) * u),
          r.stroke());
      }
      ((r.strokeStyle = P(3810848, 0.45)),
        (r.lineWidth = 1.3 * m),
        r.beginPath());
      for (let e = 0; e <= 14; e++) {
        let i = -0.6 + (e / 14) * 1.6,
          a = n(i),
          o = p(Yt(t, Math.min(1, i)) + 0.0045);
        e === 0 ? r.moveTo(a, o) : r.lineTo(a, o);
      }
      (r.stroke(), (r.strokeStyle = P(w, 0.4)), (r.lineWidth = 0.7 * m));
      for (let i = 0; i < (c ? 14 : 8); i++) {
        let i = -0.4 + d() * 1.35,
          a = n(i),
          o = p(Yt(t, Math.min(1, i)) + 0.004);
        (r.beginPath(),
          r.moveTo(a, o),
          r.lineTo(
            a + e * (1 + 2 * Math.max(0, i)) * m,
            o + (2.2 + 1.5 * d()) * m,
          ),
          r.stroke());
      }
      (g(n(-1.02), p(t.eyeD), 3.4 * m, 3 * m, 14256774, 0.6),
        g(
          f(e * (t.eyeT - 0.04)),
          p(Yt(t, 0) + 0.03),
          t.eyeW * o * 0.32,
          0.016 * o,
          6965848,
          l ? 0.24 : u ? 0.05 : 0.1,
        ),
        c &&
          !l &&
          g(
            f(e * t.eyeT),
            p(Yt(t, 0) + 0.012),
            t.eyeW * o * 0.28,
            0.01 * o,
            16777215,
            0.12,
          ));
    }
    {
      let e = t.mouthW,
        n = F(F(h, 12736604, 0.4), 9060424, l ? 0.25 : 0),
        i = s.lipColor ? F(n, s.lipColor, 0.85) : n,
        a = I(i, 0.84),
        c = (e) => -1 + (2 * e) / 28,
        u = (n, i, a, o) => {
          r.beginPath();
          for (let i = 0; i <= 28; i++) {
            let a = c(i),
              s = Xt(t, a),
              l = n ? s - Zt(t, a) - o : s + Qt(t, a) + o;
            i === 0
              ? r.moveTo(f(a * e * (1 + o * 4)), p(l))
              : r.lineTo(f(a * e * (1 + o * 4)), p(l));
          }
          for (let i = 28; i >= 0; i--) {
            let a = c(i);
            r.lineTo(
              f(a * e * (1 + o * 4)),
              p(Xt(t, a) + (n ? 0.0015 : -0.0015)),
            );
          }
          (r.closePath(), (r.fillStyle = P(i, a)), r.fill());
        };
      (u(!0, i, 0.22, 0.002),
        u(!1, i, 0.22, 0.002),
        u(!0, a, 0.92, 0),
        u(!1, i, 0.92, 0),
        (r.strokeStyle = P(I(i, 0.7), 0.25)),
        (r.lineWidth = 0.8 * m));
      for (let n = 0; n < 26; n++) {
        let i = -0.85 + (n / 25) * 1.7 + (d() - 0.5) * 0.03,
          a = Xt(t, i),
          o = n % 2 == 0,
          s = o ? a - Zt(t, i) * 0.85 : a + Qt(t, i) * 0.1,
          c = o ? a - Zt(t, i) * 0.15 : a + Qt(t, i) * 0.85;
        (r.beginPath(),
          r.moveTo(f(i * e), p(s)),
          r.lineTo(f(i * e * (1 + 0.02 * (d() - 0.5))), p(c)),
          r.stroke());
      }
      (g(
        f(e * 0.08),
        p(Xt(t, 0) + Qt(t, 0) * 0.45),
        e * o * 0.2,
        0.007 * o,
        16777215,
        s.lipColor ? 0.3 : 0.18,
      ),
        (r.strokeStyle = P(I(i, 0.35), 0.9)),
        (r.lineWidth = 1.5 * m),
        r.beginPath());
      for (let n = 0; n <= 28; n++) {
        let i = c(n) * 1.02;
        n === 0
          ? r.moveTo(f(i * e), p(Xt(t, Math.max(-1, Math.min(1, i)))))
          : r.lineTo(f(i * e), p(Xt(t, Math.max(-1, Math.min(1, i)))));
      }
      r.stroke();
      for (let n of [-1, 1])
        g(f(n * e * 1.02), p(Xt(t, 1)), 3.2 * m, 2.6 * m, I(h, 0.42), 0.4);
      ((r.strokeStyle = P(I(h, 0.78), 0.1)), (r.lineWidth = 2 * m));
      for (let n of [-1, 1])
        (r.beginPath(),
          r.moveTo(f(n * 0.045), p(t.noseBaseD + 0.01)),
          r.lineTo(f(n * e * 0.28), p(Xt(t, 0.28) - Zt(t, 0.28))),
          r.stroke());
    }
    s.mole === 1
      ? g(f(0.5), p(0.72), 2.4 * m, 2.4 * m, 3810328, 0.85)
      : s.mole === 2 &&
        g(f(-0.2), p(t.mouthD + 0.06), 2.2 * m, 2.2 * m, 3810328, 0.85);
  };
}
