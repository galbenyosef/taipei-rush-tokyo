// tokyo/assets/region-tokyo-A7LxHjud 59 — next
// Lines 27083-27231 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var loe = (e) => Hu()[e] ?? Bu,
  Uu = dn.x0,
  Wu = dn.x1,
  Gu = dn.y0,
  Ku = dn.y1,
  qu = Wu - Uu,
  Ju = Ku - Gu,
  Yu = 58,
  Xu = (e) => Ku - e * Yu,
  Zu = [
    `#d84a3a`,
    `#f0c030`,
    `#3a7ac8`,
    `#f4f0e8`,
    `#3aa060`,
    `#e87a2a`,
    `#8a4ab0`,
    `#e85a8a`,
    `#2a2a2a`,
    `#a0d0e8`,
  ];
function Qu(e, t, n) {
  zr(e, Uu, Gu, qu, Ju, t, n);
}
function $u(e, t, n, r, i, a, o = Zu, s = `#9a9ea2`) {
  let c = Xu(i),
    l = Xu(0.1);
  P(e, n, c, r, l - c, `rgba(0,0,0,0.10)`);
  let u = (l - c) / a;
  for (let i = 0; i < a; i++) {
    let a = c + (i + 1) * u,
      l = n + 2;
    for (; l < n + r - 3;) {
      let i = 3 + t.next() * 7,
        s = u * (0.45 + t.next() * 0.45);
      (P(
        e,
        l,
        a - s - 2,
        Math.min(i, n + r - 2 - l),
        s,
        o[Math.floor(t.next() * o.length)],
      ),
        (l += i + 0.8));
    }
    P(e, n, a - 2, r, 2.5, s);
  }
  (P(e, n, c, 2, l - c, s), P(e, n + r - 2, c, 2, l - c, s));
}
var ed = (e) => (Si[e]?.items ?? []).map((e) => e.key),
  td = (e) =>
    (Si[e]?.signs ?? [])
      .filter((t) => t.startsWith(`trade.${e}.`))
      .map(L)
      .filter((e) => !e.includes(`{`));
function nd(e, t, n, r, i, a = `#f4ecd6`, o = `#1a1a1a`, s = 10) {
  let c = ed(n),
    l = qu / s;
  for (let n = 0; n < s; n++) {
    let s = Uu + n * l + 1.5;
    (P(e, s, r, l - 3, i, a),
      P(e, s, r + i - 2, l - 3, 2, `rgba(0,0,0,0.15)`),
      c.length &&
        Xr(
          e,
          L(c[(n + Math.floor(t.next() * c.length)) % c.length]).replace(
            /（[^）]*）/g,
            ``,
          ),
          s + (l - 3) / 2,
          r + 3,
          r + i - 4,
          (l - 3) * 0.8,
          o,
          Nr(),
          `600`,
        ));
  }
}
function uoe(e, t, n, r, i, a, o, s, c = 4) {
  (P(e, n, r, i, a, o), P(e, n, r, i, 3, `rgba(255,255,255,0.15)`));
  let l = ed(t);
  for (let t = 0; t < c && t < l.length; t++)
    Yr(
      e,
      L(l[t]),
      n + i / 2,
      r + (a / c) * (t + 0.5),
      i * 0.9,
      (a / c) * 0.62,
      s,
      Mr(),
      `600`,
    );
}
function doe(e, t, n, r, i, a) {
  let o = Xu(i),
    s = Xu(0.05);
  P(e, n, o, r, s - o, `#cfd6da`);
  let c = r / a;
  for (let r = 0; r < a; r++) {
    let i = n + r * c + 2;
    zr(e, i, o + 3, c - 4, s - o - 6, `#f6fbff`, `#d8e6ee`);
    for (let n = 0; n < 5; n++) {
      let r = o + 3 + ((s - o - 6) / 5) * (n + 1);
      for (let n = i + 2; n < i + c - 7; n += 4.2)
        P(e, n, r - 9, 3.2, 8, Zu[Math.floor(t.next() * Zu.length)]);
      P(e, i, r - 1, c - 4, 1.5, `#b8c0c4`);
    }
    P(e, i + c - 6, o + 30, 1.5, 40, `#8a9296`);
  }
}
function foe(e, t, n, r, i) {
  (P(e, t, n, r, i, `#e8e8e4`), P(e, t + 3, n + 4, r - 6, i * 0.12, `#2a3a6a`));
  for (let a = 0; a < 5; a++)
    for (let o = 0; o < 3; o++)
      P(
        e,
        t + 4 + o * ((r - 8) / 3),
        n + i * 0.2 + i * 0.11 * a,
        (r - 8) / 3 - 2,
        i * 0.09,
        a === 0 ? `#e85a2a` : `#f6f2e0`,
      );
  P(e, t + r * 0.3, n + i * 0.8, r * 0.4, i * 0.06, `#3a3a3a`);
}
function rd(e, t, n = 0.95) {
  (P(e, Uu, Xu(n), qu, Xu(0) - Xu(n), t),
    P(e, Uu, Xu(n), qu, 3, `rgba(255,255,255,0.25)`));
}
function id(e, t, n, r, i, a = 2) {
  for (let o = 0; o < a; o++) {
    let a = Xu(i + o * 0.45);
    P(e, n, a, r, 2, `#6a4a2a`);
    for (let i = n + 2; i < n + r - 4; i += 5) {
      let n = 14 + t.next() * 8;
      P(
        e,
        i,
        a - n,
        3.4,
        n,
        [`#2a5a2a`, `#6a3a1a`, `#e8e0c8`, `#3a2a1a`, `#a0a8b0`][
          Math.floor(t.next() * 5)
        ],
      );
    }
  }
}
