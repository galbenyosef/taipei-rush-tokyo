// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 07 — math
// Lines 2021-2357 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function je(e, t, n, r, i, a, o) {
  ((e.strokeStyle = o),
    (e.lineWidth = a),
    e.beginPath(),
    e.moveTo(t, n),
    e.lineTo(r, i),
    e.stroke());
}
function Me(e, t, n, r, i, a, o = 0.9) {
  let s = Math.round(((r * i) / 18) * o);
  for (let o = 0; o < s; o++) {
    e.fillStyle = [
      `#2e4a22`,
      `#3e5e2a`,
      `#4e7a34`,
      `#28401c`,
      `#5a8a3a`,
      `#6a8a30`,
    ][a.int(0, 5)];
    let o = t + a.next() * r,
      s = n + a.next() * i,
      c = 2 + a.next() * 3.5;
    (e.beginPath(),
      e.moveTo(o, s - c),
      e.lineTo(o + c, s),
      e.lineTo(o, s + c * 0.8),
      e.lineTo(o - c, s),
      e.closePath(),
      e.fill());
  }
}
function Ne(e) {
  return (t, n, r, i, a) => {
    let o = ue(`ivy`, e);
    (z(t, n, r, i, a, `#2a4220`), Me(t, n, r, i, a, o, 1.6));
    let s = t.createLinearGradient(0, r, 0, r + a);
    (s.addColorStop(0, `rgba(0,0,0,0)`),
      s.addColorStop(1, `rgba(0,0,0,0.35)`),
      (t.fillStyle = s),
      t.fillRect(n, r, i, a));
  };
}
function Pe(e, t, n) {
  return (r, i, a, o, s) => {
    (z(r, i, a, o, s, `#4a3220`),
      z(r, i + o * 0.03, a + s * 0.05, o * 0.94, s * 0.9, `#f2ecd8`),
      V(
        r,
        R(e),
        i + o / 2,
        a + s * 0.16,
        o * 0.86,
        s * 0.14,
        `#2a1a0e`,
        `900`,
        x(),
      ),
      z(r, i + o * 0.08, a + s * 0.26, o * 0.84, s * 0.01, `#8a6a4a`),
      t.forEach((e, t) => {
        let n = R(e);
        ((r.font = `600 ${s * 0.085}px ${x()}`),
          (r.fillStyle = `#2a2018`),
          (r.textAlign = `left`),
          (r.textBaseline = `middle`),
          r.fillText(n, i + o * 0.08, a + s * (0.36 + t * 0.12), o * 0.84));
      }),
      V(
        r,
        R(n),
        i + o * 0.74,
        a + s * 0.88,
        o * 0.4,
        s * 0.07,
        `#4a3a2a`,
        `700`,
      ));
  };
}
function Fe(e, t) {
  return (n, r, i, a, o) => {
    (z(n, r, i, a, o, `#1d3f9a`),
      (n.strokeStyle = `#ffffff`),
      (n.lineWidth = Math.max(1.5, o * 0.05)),
      n.strokeRect(r + o * 0.06, i + o * 0.06, a - o * 0.12, o - o * 0.12),
      V(n, R(e), r + a / 2, i + o * 0.4, a * 0.84, o * 0.46, `#ffffff`, `800`),
      V(n, R(t), r + a / 2, i + o * 0.78, a * 0.7, o * 0.18, `#ffffff`, `600`));
  };
}
var Ie = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8,
  Le = 35,
  Re = 3,
  ze = (e) => `#` + (e & 16777215).toString(16).padStart(6, `0`),
  Be = (e) => `wall:${e.wallKind ?? `tile`}:${ze(e.wall)}`,
  Ve = (e, t, n) => `win:${e}:${t ?? ``}:${n ?? ``}`,
  He = [`#ffffff`, `#ffe14a`, `#ff6a8a`, `#7ad0ff`],
  Ue = new Set([
    `guitar`,
    `acoustic`,
    `books`,
    `ramen`,
    `teishoku`,
    `bigbooks`,
    `curry`,
    `ticket`,
  ]),
  We = (e) => (Ue.has(e.shop) ? s(`street-shopvar`, e.id) % 3 : 0),
  Ge = (e) => `shop:${e.shop}:${We(e)}`;
function Ke(e, t) {
  e.need(`shutter`, 64, 64, Te());
  for (let n of t) {
    if (
      (e.need(Be(n), 64, 64, Se(n.wallKind ?? `tile`, ze(n.wall))),
      e.need(Ve(n.win), 160, 60, Ce(n.win)),
      (n.winWords ?? []).forEach((t, r) => {
        if (!t) return;
        let i = He[s(n.id, r) % He.length],
          a = qe(t, r + 2);
        e.need(Ve(n.win, a, i), 160, 60, Ce(n.win, a, i));
      }),
      e.need(Ge(n), 320, 128, we(n.shop, We(n))),
      n.front === `lattice` && e.need(`lattice`, 128, 96, be(`#2a1a10`)),
      n.ivy)
    )
      for (let t of [0, 1]) e.need(`ivy:${t}`, 128, 128, Ne(t));
    e.need(U(n.fascia), 384, 48, de(n.fascia));
    for (let t of n.bands ?? []) e.need(U(t), 384, 48, de(t));
    (n.roofBoard && e.need(U(n.roofBoard), 384, 96, de(n.roofBoard)),
      n.vsign && e.need(fe(n.vsign), 52, 364, pe(n.vsign)),
      n.vsign2 && e.need(fe(n.vsign2), 52, 364, pe(n.vsign2)),
      n.noren &&
        e.need(
          `noren:${n.noren.key}:${n.noren.bg}`,
          128,
          80,
          ge(n.noren.key, n.noren.bg, n.noren.fg),
        ));
    for (let t of n.lanterns ?? []) e.need(`chochin:${t}`, 64, 96, he(t));
  }
}
function qe(e, t) {
  return _(e, { n: t });
}
var W = (e, t) => P(e, t);
function Je(e, t, n, r) {
  let i = new o(s(`street-shop`, t.id)),
    a = t.gh ?? 4,
    c = t.fh ?? 3.3,
    l = Ie(t),
    u = n.white(),
    d = n.uv(Be(t)),
    f = W(t, t.dir),
    p = (e) => {
      if (e === t.dir || e === t.corner) return 0;
      let n = W(t, e);
      return n.nx === -f.nx && n.nz === -f.nz
        ? (t.coverB ?? 0)
        : ((n.nx === f.tx && n.nz === f.tz ? t.coverR : t.coverL) ?? 0);
    };
  for (let o of [`N`, `E`, `S`, `W`]) {
    let f = W(t, o);
    if (o !== t.dir && o !== t.corner) {
      let n = p(o);
      if (n >= l - 0.05) continue;
      (e.setMaterial(0.92, 0, 0, 0),
        E(e, t.wall, 0.9),
        I(e, f, 0, f.L, Math.max(0, n), l, 0, d));
      continue;
    }
    Ye(e, t, f, n, o === t.dir, i);
    for (let i = 1; i < t.floors; i++) {
      let l = a + (i - 1) * c,
        p = l + c;
      (e.setMaterial(0.88, 0, 0, 0),
        E(e, t.wall),
        I(e, f, 0, f.L, l, l + 0.9, 0, d));
      let m = Math.max(1, Math.round(f.L / 3.4)),
        h = o === t.dir ? t.winWords?.[i - 1] : void 0,
        g = Math.floor((m - 1) / 2);
      for (let r = 0; r < m; r++) {
        let a = Ve(t.win);
        (h &&
          r === g &&
          (a = Ve(t.win, qe(h, i + 1), He[s(t.id, i - 1) % He.length])),
          e.setMaterial(0.2, 0.3, 0.2, Le),
          E(e, 16777215),
          I(
            e,
            f,
            (f.L * r) / m + 0.14,
            (f.L * (r + 1)) / m - 0.14,
            l + 0.9,
            p,
            0,
            n.uv(a),
          ));
      }
      (e.setMaterial(0.88, 0, 0, 0), E(e, t.wall, 0.96));
      for (let t = 0; t <= m; t++) {
        let n = (f.L * t) / m;
        I(
          e,
          f,
          Math.max(0, n - 0.14),
          Math.min(f.L, n + 0.14),
          l + 0.9,
          p,
          0,
          d,
        );
      }
      if (r > 0) {
        E(e, t.wall, 0.75);
        let [n, r] = F(f, 0, 0),
          [i, a] = F(f, f.L, 0.12);
        O(
          e,
          Math.min(n, i),
          Math.min(r, a),
          Math.max(n, i),
          Math.max(r, a),
          l + 0.9,
          u,
        );
      }
    }
    if (
      (e.setMaterial(0.88, 0, 0, 0),
      E(e, t.wall, 0.92),
      I(e, f, 0, f.L, l - 0.8, l, 0, d),
      E(e, 9079430),
      I(e, f, 0, f.L, l - 0.08, l + 0.05, 0.06, u),
      o === t.dir)
    )
      for (let r of t.bands ?? []) {
        let i = r.floor ?? 2;
        if (i < 2 || i > t.floors) continue;
        let o = a + (i - 2) * c + 0.05,
          s = 0.8,
          l = Math.min(f.L - 0.4, s * 8);
        (e.setMaterial(0.5, 0, 0.3, r.style === `lit` || !r.style ? Re : 0),
          E(e, 16777215),
          I(e, f, (f.L - l) / 2, (f.L + l) / 2, o, o + s, 0.1, n.uv(U(r))));
      }
  }
  if (
    (e.setMaterial(0.92, 0, 0, 0),
    E(e, 9211016),
    O(e, t.x0, t.z0, t.x1, t.z1, l - 0.5, u),
    r > 0 &&
      i.next() < 0.55 &&
      !t.roofBoard &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      E(e, i.next() < 0.5 ? 14212312 : 10133668),
      k(
        e,
        (t.x0 + t.x1) / 2 + (i.next() - 0.5) * 1.5,
        (t.z0 + t.z1) / 2 + (i.next() - 0.5) * 1.5,
        l - 0.5,
        l + 1.3,
        0.8,
        0.8,
        0,
        1,
        u,
      )),
    t.ivy)
  ) {
    (e.setMaterial(0.95, 0, 0, 0), E(e, 16777215));
    for (let r of [t.dir, t.corner].filter(Boolean)) {
      let a = W(t, r),
        o = (t, r, i, o, s, c) => {
          let [l, u] = F(a, (t + r) / 2, s / 2);
          k(e, l, u, i, o, (r - t) / 2, s / 2, a.nx, a.nz, n.uv(`ivy:${c}`));
        },
        s = t.gh ?? 4;
      (o(-0.15, 0.9 + i.next() * 0.6, 0.6, l + 0.3, 0.32, 0),
        o(a.L - 0.9 - i.next() * 0.6, a.L + 0.15, s - 0.6, l + 0.4, 0.3, 1),
        o(-0.1, a.L + 0.1, l - 0.6, l + 0.55, 0.36, 0));
      for (let e = 0; e < 3 + Math.floor(a.L / 3); e++) {
        let t = i.next() * (a.L - 1.4),
          n = 0.6 + i.next() * 1.8,
          r = s + i.next() * Math.max(0.5, l - s - n - 0.6);
        o(t, t + 0.8 + i.next() * 1.4, r, r + n, 0.18 + i.next() * 0.12, e % 2);
      }
      for (let e = 0; e < Math.floor(a.L / 1.6); e++) {
        let t = 0.2 + e * 1.6 + i.next() * 0.5;
        o(
          t,
          t + 0.7 + i.next() * 0.6,
          s - 0.55 - i.next() * 0.4,
          s + 0.25,
          0.42,
          (e + 1) % 2,
        );
      }
    }
  }
  let m = (t, r, i, a, o) => {
      let [s, c] = F(f, r, 0.35 + o / 2);
      (e.setMaterial(
        0.5,
        0,
        t.style === `wood` ? 0 : 0.3,
        t.style === `wood` ? 0 : Re,
      ),
        E(e, 16777215));
      let l = n.uv(fe(t));
      (k(e, s, c, i, a, o / 2, 0.18, f.tx, f.tz, u, l, l),
        e.setMaterial(0.6, 0.4, 0, 0),
        E(e, 5264472));
      let [d, p] = F(f, r, 0.18);
      k(e, d, p, i + 0.3, a - 0.3, 0.16, 0.05, f.tx, f.tz, u);
    },
    h = l - 0.4;
  if (t.vsign && t.floors >= 2) {
    let e = Math.min(h - (a + 0.2), t.floors >= 5 ? 14 : 7.5);
    m(t.vsign, 0.8, h - e, h, t.floors >= 6 ? 1.3 : 1);
  }
  if (t.vsign2 && t.floors >= 3) {
    let e = Math.min(h - (a + 0.2), 9);
    m(t.vsign2, f.L - 0.8, h - e, h, 0.9);
  }
  if (t.roofBoard) {
    let r = 2.4,
      i = Math.min(f.L - 0.6, r * 4);
    (e.setMaterial(0.7, 0.5, 0, 0), E(e, 6317160));
    for (let t of [f.L / 2 - i / 2 + 0.3, f.L / 2 + i / 2 - 0.3]) {
      let [n, r] = F(f, t, -1);
      k(e, n, r, l - 0.5, l + 0.6, 0.06, 0.5, f.nx, f.nz, u);
    }
    (e.setMaterial(0.5, 0, 0.3, Re), E(e, 16777215));
    let [a, o] = F(f, f.L / 2, -0.5),
      s = n.uv(U(t.roofBoard));
    k(e, a, o, l + 0.2, l + 0.2 + r, i / 2, 0.15, f.nx, f.nz, u, s, s);
  }
  return l;
}
