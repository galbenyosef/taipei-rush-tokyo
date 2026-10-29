// tokyo/assets/region-tokyo-A7LxHjud 194 — base
// Lines 77728-78026 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function z_e(e, t, n, r) {
  if (n - t < 1) return;
  e.push().col(k_e).mat(0.55, 0.4, 0, 0);
  let i = Math.max(1, Math.round((n - t) / 2)),
    a = (n - t) / i;
  for (let n = 0; n <= i; n++)
    e.box(t + n * a - 0.04, 0.06, r - 0.04, t + n * a + 0.04, 1, r + 0.04);
  e.rod(t, 1, r, n, 1, r, 0.03, 4);
  for (let n = 0; n < i; n++) {
    let i = t + n * a;
    for (let t = 0; t < 5; t++) {
      let n = t / 5,
        o = (t + 1) / 5,
        s = (e) => 0.45 + 0.4 * Math.sin(Math.PI * e);
      e.rod(i + a * n, s(n), r, i + a * o, s(o), r, 0.025, 4);
    }
  }
  (e.solid(t, r - 0.08, n, r + 0.08, 0, 1, `fence`), e.pop());
}
function* B_e(e, t) {
  let n = t.c(`plaster`),
    r = t.c(`granite`),
    i = $O.x0,
    a = $O.x1,
    o = $O.zf,
    s = $O.zb;
  if (
    (e.col(ak).mat(0.8, 0, 0.08, G),
    e.box(i, 0, s, a, lk, $O.base, r, 3, 1.4, t.c(`paving`)),
    !e.coarse)
  ) {
    let n = (a - i) / 5;
    for (let r = 0; r < 5; r++) {
      let a = i + n * (r + 0.5);
      r % 2
        ? (e.col(16777215).mat(0.3, 0.2, 0.5, G),
          e.panel(
            a - 1.8,
            $O.base + 0.02,
            a + 1.8,
            $O.base + 0.02,
            0.06,
            3,
            t.c(`doors`),
          ))
        : (e.col(16777215).mat(0.6, 0.3, 0, 0),
          e.panel(
            a - 2.5,
            $O.base + 0.02,
            a + 2.5,
            $O.base + 0.02,
            0.06,
            3.9,
            t.A.sub(`uenoMisc`, ...Qx.shutter),
          ));
    }
  }
  (e.col(E_e).mat(0.5, 0.2, 0.06, 1),
    e.box(i + 0.5, 4.3, $O.base, a + 0.2, 4.55, Dk.z0 + 1.4),
    e.col(16774364).mat(0.4, 0, 0.7, 1),
    e.flat(
      i + 1.5,
      $O.base + 1.8,
      a - 1,
      $O.base + 2.1,
      4.29,
      e.white,
      0,
      0,
      !1,
    ),
    yield,
    e.col(16777215).mat(0.3, 0.2, 0.6, G),
    e.wall(
      i + 1.2,
      Ek,
      a - 1.2,
      Ek,
      lk,
      8.9,
      t.A.sub(`uenoMisc`, ...Qx.shop),
      4.6,
      3.3000000000000007,
    ),
    e.col(5920596).mat(0.7, 0.2, 0, 0),
    e.wall(i + 1.2, Ek, a - 1.2, Ek, 8.9, uk, e.white, 40, 1),
    e.col(ak).mat(0.8, 0, 0.08, G));
  for (let [t, n] of [
    [i, i + 1.2],
    [a - 1.2, a],
  ])
    e.box(t, lk, Ek, n, uk, $O.base, r, 3, 1.4);
  (e.solid(i, Ek, i + 1.2, $O.base, lk, uk),
    e.solid(a - 1.2, Ek, a, $O.base, lk, uk));
  for (let t = 0; t < 5; t++) {
    let n = M_e(t);
    (e.col(ak).mat(0.8, 0, 0.1, G),
      e.box(n - 0.5, lk, $O.base - 1, n + 0.5, uk, $O.base, r, 2, 1.4),
      e.solid(n - 0.5, $O.base - 1, n + 0.5, $O.base, lk, uk),
      e.coarse ||
        (e
          .col(1973790)
          .mat(0.5, 0.5, 0, 0)
          .box(n - 0.2, 7, $O.base + 0.02, n + 0.2, 7.75, $O.base + 0.32),
        e
          .col(16769448)
          .mat(0.3, 0, 0.9, 1)
          .box(n - 0.15, 7.1, $O.base + 0.06, n + 0.15, 7.6, $O.base + 0.34)));
  }
  if (!e.coarse) {
    e.col(4737354).mat(0.5, 0.6, 0, 0);
    for (let [t, n] of [
      [i + 1.2, tk.x0],
      [tk.x1, a - 1.2],
    ]) {
      (e.box(t, lk, $O.base - 0.06, n, 5.699999999999999, $O.base + 0.06),
        e.rod(
          t,
          6.6499999999999995,
          $O.base,
          n,
          6.6499999999999995,
          $O.base,
          0.04,
          4,
        ));
      for (let r = t + 0.15; r < n; r += 0.15)
        e.box(
          r - 0.012,
          5.699999999999999,
          $O.base - 0.012,
          r + 0.012,
          6.6499999999999995,
          $O.base + 0.012,
        );
      e.solid(
        t,
        $O.base - 0.1,
        n,
        $O.base + 0.1,
        lk,
        6.699999999999999,
        `railing`,
      );
    }
  }
  if (
    (e.col(15986662).mat(0.6, 0, 0.12, 1),
    e.flat(i + 1.2, Ek, a - 1.2, $O.base, uk, e.white, 0, 0, !1),
    e.col(T_e).mat(0.55, 0.35, 0, 0),
    e.box(i - 0.3, uk, Ek, a + 0.3, dk, $O.base + 2.2, e.white, 0, 0, null, !0),
    e.col(16773336).mat(0.4, 0, 0.6, 1),
    !e.coarse)
  )
    for (let t = i + 2; t < a - 1; t += 3)
      e.flat(
        t,
        $O.base + 0.6,
        t + 0.5,
        $O.base + 1.1,
        9.290000000000001,
        e.white,
        0,
        0,
        !1,
      );
  (yield,
    e.col(ak).mat(0.8, 0, 0.12, G),
    e.wall(i, o, a, o, dk, fk, r, 3, 1.4),
    e.col(rk).mat(0.85, 0, 0.3, G),
    e.wall(i, o, a, o, fk, pk, n, 6, 6));
  let c = i;
  for (let t = 0; t <= Sk; t++) {
    let r = t < Sk ? Tk(t) - Ck / 2 : a;
    (e.emis(0.85, G),
      e.wall(c, o, r, o, pk, mk, n, 6, 6, 0.3),
      t < Sk && (c = Tk(t) + Ck / 2));
  }
  (e.emis(0.3, G),
    e.wall(i, o, a, o, mk, hk, n, 6, 6, 0.14),
    e.emis(0.1, G),
    e.wall(i, o, a, o, 24.75, gk, n, 6, 6));
  let l = t.c(`uenoWin`),
    u = 0.35;
  for (let t = 0; t < Sk; t++) {
    let n = Tk(t) - Ck / 2,
      r = Tk(t) + Ck / 2;
    if (
      (e.col(16769716).mat(0.3, 0.3, 0.95, G),
      e.panel(n, o - u, r, o - u, pk, mk, l),
      e.col(rk, 0.86).mat(0.85, 0, 0.12, G),
      e.panel(n, o, n, o - u, pk, mk),
      e.panel(r, o - u, r, o, pk, mk),
      e.flat(n, o - u, r, o, mk, e.white, 0, 0, !1),
      e.flat(n, o - u, r, o, pk),
      !e.coarse)
    ) {
      e.col(14734278).mat(0.8, 0, 0.3, G);
      for (let t of [n - 0.2, r]) e.box(t, pk, o + 0, t + 0.2, mk, o + 0.06);
    }
  }
  if (
    (e.col(rk).mat(0.8, 0, 0.2, G),
    e.sweep([i, o, a, o], _C(13.1, 0.16, 0.3), !1),
    e.col(ik).mat(0.8, 0, 0.12, G),
    e.sweep([i + 1.4, o, a - 1.4, o], _C(hk, 0.1, 0.25), !1),
    e.sweep([i, o, a, o], _C(dk, 0.12, 0.3), !1),
    e.sweep([i, o, a, o, a, s, i, s], gC(gk, 0.45, 0.7999999999999972), !0),
    !e.coarse)
  ) {
    e.col(10976366).mat(0.85, 0, 0.08, G);
    for (let t = i + 0.3; t < a - 0.3; t += 0.6)
      e.box(t, 25.32, o + 0.02, t + 0.3, 25.540000000000003, o + 0.12);
  }
  if (
    (e.col(16777215).mat(0.5, 0, 0.6, G),
    e.panel(
      wk - 0.85,
      o + 0.04,
      wk + 0.85,
      o + 0.04,
      21.549999999999997,
      23.25,
      t.A.sub(`uenoMisc`, ...Qx.clock),
    ),
    yield,
    e.col(rk).mat(0.85, 0, 0.1, G),
    e.wall(a, s, i, s, dk, gk, t.c(`uenoBay`), 3.6, 4.6),
    e.wall(i, s, i, o, dk, gk, n, 6, 6),
    e.wall(a, o, a, s, dk, gk, n, 6, 6),
    e.wall(a, $O.base, a, ek.zf, 0, dk, r, 3, 1.4),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(i, s, a, o, 26),
    e.solid(i, s, a, $O.base, 0, lk),
    e.solid(i, s, a, Ek, lk, _k),
    !e.coarse)
  ) {
    e.col(15921902).mat(0.5, 0.3, 0.05, 1);
    for (let t of [i + 1.4, a - 4.6]) {
      let n = [];
      for (let e = 0; e <= 8; e++) {
        let r = (e / 8) * Math.PI;
        n.push(t + 1.6 - Math.cos(r) * 1.6, 26 + Math.sin(r) * 1.5);
      }
      (e.extrudeZ(n, o - 7.5, o - 2.2, !1, !0),
        e.box(t, 26, o - 7.5, t + 3.2, 26.05, o - 2.2));
    }
    e.col(9277588).mat(0.4, 0.7, 0, 0);
    for (let [t, n, r] of [
      [i + 8, o - 6, 7.5],
      [wk + 3, o - 9, 6.2],
      [a - 8, o - 6, 7.5],
      [wk - 6, o - 14, 5],
    ])
      e.rod(t, 26, n, t, 26 + r, n, 0.05, 4);
  }
  (yield, V_e(e, t));
}
function V_e(e, t) {
  let n = Pk,
    r = n.x1 - n.x0,
    i = n.zf,
    a = n.zf - n.d;
  e.col(5264986).mat(0.5, 0.6, 0, 0);
  for (let t of [n.y0 + 0.35, n.y0 + 1.5])
    e.box(n.x0, t, a - 0.12, n.x1, t + 0.1, a - 0.02);
  if (!e.coarse)
    for (let t = n.x0 + 0.5; t < n.x1; t += 2.4)
      e.box(t, 26, a - 0.14, t + 0.08, n.y0 + 1.7, a - 0.06);
  let o = t.A.glyphs?.(`uenoSign`);
  if (!o || !o.length) {
    let e = [];
    for (let t = 0; t < L_e; t++) {
      let n = (t % 52) / 52,
        r = Math.floor(t / 52) / 5;
      e.push([n, r, n + 0.012, r + 0.15]);
    }
    o = e;
  }
  e.col(ok).mat(0.45, 0.1, 0.55, 1);
  for (let [t, s, c, l] of o) {
    let o = n.x0 + t * r,
      u = n.x0 + c * r,
      d = n.y0 + (1 - s) * n.h,
      f = n.y0 + (1 - l) * n.h;
    (e.panel(o, i, u, i, f, d),
      !e.coarse &&
        (e.panel(u, a, o, a, f, d),
        e.flat(o, a, u, i, d),
        e.flat(o, a, u, i, f, e.white, 0, 0, !1),
        e.panel(o, a, o, i, f, d),
        e.panel(u, i, u, a, f, d)));
  }
  e.emis(0, 0);
}
function Lk(e, t, n, r, i, a, o = lk, s = vk) {
  (e.col(15985894).mat(0.85, 0, 0.32, G),
    e.wall(n, r, i, a, o, s, t.c(`uenoBay`), 3.6, 5.2));
}
