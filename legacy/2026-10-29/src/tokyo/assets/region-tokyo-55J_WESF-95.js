// tokyo/assets/region-tokyo-55J_WESF 95 — color
// Lines 42383-42699 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Vh(e) {
  let t = Bh.find((t) => t.id === e);
  if (!t) throw Error(`[tokyo peds] unknown preset ${e}`);
  return t;
}
var Hh = [1315087, 1709330, 2759958, 1315087, 3811870];
function Uh(e, t, n, r = ``) {
  let i = Vh(e),
    a = JSON.parse(JSON.stringify(i)),
    o = t >>> 0 || 1,
    s = () => (o = (o * 1664525 + 1013904223) >>> 0) / 4294967296;
  return (
    (a.seed = t),
    (a.height = i.height + (s() - 0.5) * 0.07),
    i.age !== `elder` &&
      s() < 0.6 &&
      (a.hair.color = Hh[Math.floor(s() * Hh.length)]),
    n && n(a),
    (a.id = `${i.id}~t2i~${t}${r ? `~${r}` : ``}`),
    a
  );
}
function Wle(e, t, n) {
  return Uh(
    n ? `jp-konbini` : `jp-daigakusei`,
    e,
    (e) => {
      ((e.top = { style: `shirt`, color: t, sleeve: `long` }),
        (e.outer = void 0),
        (e.bottom = { style: `slacks`, color: 1842210 }),
        (e.acc = [{ kind: `lanyard`, color: 2777784 }]));
    },
    `kclerk${t.toString(16)}${n ? `f` : `m`}`,
  );
}
function Wh(e) {
  return Uh(
    `jp-ameyoko`,
    e,
    (e) => {
      ((e.build = `avg`),
        (e.top = { style: `tee`, color: 1315862, sleeve: `short` }),
        (e.bottom = { style: `slacks`, color: 1710620 }),
        (e.acc = [
          { kind: `headband`, color: 15921386 },
          { kind: `apron`, color: 1710620 },
        ]));
    },
    `ramen`,
  );
}
function Gle(e) {
  return Uh(
    `jp-oji`,
    e,
    (e) => {
      ((e.top = { style: `tee`, color: 2238522, sleeve: `elbow` }),
        (e.outer = void 0),
        (e.bottom = { style: `slacks`, color: 1842210 }),
        (e.acc = [
          { kind: `headband`, color: 15921904 },
          { kind: `apron`, color: 2763370 },
        ]));
    },
    `izakaya`,
  );
}
function Gh(e, t = 1842986, n = !1) {
  return Uh(
    n ? `jp-ol` : `jp-salaryman-shirt`,
    e,
    (e) => {
      ((e.top = {
        style: `shirt`,
        color: 16053490,
        sleeve: `long`,
        tucked: !0,
      }),
        (e.outer = { style: `vest`, color: t, color2: t, over: !0 }),
        (e.bottom = n
          ? { style: `pencil`, color: 1842210 }
          : { style: `slacks`, color: 1842210 }),
        (e.acc = [{ kind: `tie`, color: 9050658 }]));
    },
    `desk${t.toString(16)}${n ? `f` : `m`}`,
  );
}
function Kh(e, t = !0) {
  return Uh(t ? `jp-salaryman` : `jp-salaryman-shirt`, e);
}
function qh(e) {
  br(e.canvas, e);
}
function U(e, t, n, r, i, a, o = `#111`, s = {}) {
  qh(e);
  let c = s.serif ? yr : vr,
    l = s.weight ?? `bold`,
    u = a;
  e.font = `${l} ${u}px ${c}`;
  let d = e.measureText(t).width;
  return (
    d > i &&
      d > 0 &&
      ((u = Math.max(5, (u * i) / d)), (e.font = `${l} ${u}px ${c}`)),
    (e.fillStyle = o),
    (e.textAlign = s.align ?? `center`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r),
    u
  );
}
function Jh(e, t, n, r, i, a, o = `#111`, s = !0) {
  qh(e);
  let c = [...t],
    l = (i - r) / c.length;
  ((e.font = `bold ${Math.min(a, l * 0.92)}px ${s ? yr : vr}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    c.forEach((t, i) => {
      t === `ー` || t === `〜`
        ? (e.save(),
          e.translate(n, r + l * (i + 0.5)),
          e.rotate(Math.PI / 2),
          e.fillText(t, 0, 0),
          e.restore())
        : e.fillText(t, n, r + l * (i + 0.5));
    }));
}
function W(e, t, n, r, i, a) {
  ((e.fillStyle = a), e.fillRect(t, n, r, i));
}
function Yh(e, t, n, r, i, a, o) {
  let s = e.createLinearGradient(0, n, 0, n + i);
  (s.addColorStop(0, a),
    s.addColorStop(1, o),
    (e.fillStyle = s),
    e.fillRect(t, n, r, i));
}
function Xh(e, t, n, r, i, a = 0.06, o = 0.05, s = 2) {
  for (let c = 0; c < i; c++)
    ((e.fillStyle =
      r() < 0.5 ? `rgba(0,0,0,${a * r()})` : `rgba(255,255,255,${o * r()})`),
      e.fillRect(r() * t, r() * n, s * (0.5 + r()), s * (0.5 + r())));
}
function Zh(e, t, n, r, i, a, o = 2, s = 0.05) {
  (W(e, 0, 0, t, n, i),
    Xh(e, t, n, r, Math.round(t * n * s * 0.05), 0.08, 0.06, 1.5),
    (e.fillStyle = a));
  for (let r = 0; r <= o; r++)
    (e.fillRect((r * t) / o - 1, 0, 2, n),
      e.fillRect(0, (r * n) / o - 1, t, 2));
}
function Qh(e, t, n, r, i, a = 4) {
  let [o, s, c] = i,
    l = n / a;
  for (let n = 0; n < a; n++) {
    let i = 0.88 + r() * 0.22;
    (W(
      e,
      0,
      n * l,
      t,
      l,
      `rgb(${Math.round(o * i)},${Math.round(s * i)},${Math.round(c * i)})`,
    ),
      (e.strokeStyle = `rgba(0,0,0,0.08)`),
      (e.lineWidth = 1));
    for (let i = 0; i < 7; i++) {
      let i = n * l + r() * l;
      (e.beginPath(),
        e.moveTo(0, i),
        e.bezierCurveTo(
          t * 0.3,
          i + (r() - 0.5) * 6,
          t * 0.7,
          i + (r() - 0.5) * 6,
          t,
          i + (r() - 0.5) * 4,
        ),
        e.stroke());
    }
    W(e, 0, n * l, t, 1.5, `rgba(0,0,0,0.25)`);
  }
}
function $h(e, t, n, r, i, a, o, s = `#fffbe8`, c = `#c81818`) {
  (W(e, t, n, r, i, s),
    W(e, t, n + i - 2, r, 2, `rgba(0,0,0,0.15)`),
    o &&
      U(e, o, t + r / 2, n + i * 0.28, r - 4, i * 0.3, `#222`, {
        weight: `600`,
      }),
    U(
      e,
      Dr(a),
      t + r * 0.42,
      n + (o ? i * 0.68 : i * 0.55),
      r * 0.7,
      i * (o ? 0.42 : 0.6),
      c,
    ),
    U(
      e,
      `税込`,
      t + r * 0.88,
      n + (o ? i * 0.72 : i * 0.6),
      r * 0.2,
      i * 0.2,
      `#555`,
      { weight: `500` },
    ));
}
function eg(e, t, n, r, i, a = {}) {
  W(e, 0, 0, t, n, `#2a2a2c`);
  let o = 1,
    s = a.min ?? 9,
    c = a.max ?? 20;
  for (; o < t - 2;) {
    let l = Math.min(t - 1 - o, s + r() * (c - s)),
      u = n * ((a.tall ?? 0.78) + r() * 0.18),
      d = i[Math.floor(r() * i.length)];
    (W(e, o, n - u, l - 1, u, d),
      W(
        e,
        o,
        n - u + u * (0.2 + r() * 0.3),
        l - 1,
        u * 0.12,
        `rgba(255,255,255,0.55)`,
      ),
      W(e, o + 1, n - u, 2, u, `rgba(255,255,255,0.25)`),
      a.label !== !1 &&
        r() < 0.7 &&
        W(e, o + l * 0.2, n - u * 0.45, l * 0.5, u * 0.18, `rgba(0,0,0,0.35)`),
      (o += l));
  }
}
function tg(e, t, n, r, i, a = 5, o = !1) {
  Yh(e, 0, 0, t, n, `#dfe9ee`, `#b8c8d0`);
  let s = n / a;
  for (let n = 0; n < a; n++) {
    let a = (n + 1) * s - 7;
    W(e, 0, a - s + 9, t, s - 9, `rgba(40,60,70,0.12)`);
    let c = o ? 11 : 12.5,
      l = Math.floor(t / c),
      u = 0,
      d = i[0];
    for (let t = 0; t < l; t++) {
      (u <= 0 &&
        ((d = i[Math.floor(r() * i.length)]), (u = 2 + Math.floor(r() * 3))),
        u--);
      let [n, l] = d,
        f = t * c + 0.5,
        p = s * (o ? 0.6 : 0.86);
      o
        ? (W(e, f + 1, a - p, c - 2, p, l),
          W(e, f + 1, a - p, c - 2, 2.5, `#e4e8ea`),
          W(e, f + 2, a - p * 0.62, c - 4, p * 0.22, n),
          W(e, f + 2, a - p * 0.9, 1.5, p * 0.7, `rgba(255,255,255,0.45)`))
        : (W(
            e,
            f + c * 0.36,
            a - p,
            c * 0.28,
            p * 0.07,
            l === `#ffffff` ? `#2a6ad0` : `#f2f2f0`,
          ),
          W(e, f + c * 0.24, a - p * 0.93, c * 0.52, p * 0.16, n),
          W(e, f + c * 0.12, a - p * 0.78, c * 0.76, p * 0.78, n),
          W(e, f + c * 0.12, a - p * 0.6, c * 0.76, p * 0.32, l),
          W(
            e,
            f + c * 0.18,
            a - p * 0.74,
            1.5,
            p * 0.68,
            `rgba(255,255,255,0.5)`,
          ));
    }
    W(e, 0, a, t, 7, `#f8f8f4`);
    for (let t = 0; t < l; t += 3)
      W(e, t * c + 2, a + 1.5, c * 1.6, 4, `#c81818`);
  }
}
function ng(e, t, n, r, i, a = {}) {
  (W(e, 0, 0, t, n, a.bg ?? `#ffffff`),
    W(e, 0, 0, t, n * 0.14, i),
    W(e, 0, n - n * 0.08, t, n * 0.08, i),
    U(
      e,
      r,
      t / 2,
      a.sub ? n * 0.47 : n * 0.56,
      t * 0.9,
      n * (a.sub ? 0.42 : 0.56),
      a.fg ?? `#111`,
    ),
    a.sub &&
      U(e, a.sub, t / 2, n * 0.78, t * 0.9, n * 0.2, `#444`, {
        weight: `600`,
      }));
}
var rg = oi.filter((e) => e.category === `konbini`),
  Kle = [
    `onigiri`,
    `bento`,
    `sandwich`,
    `sweets`,
    `cupmen`,
    `okashi`,
    `nichiyo`,
    `zasshi`,
    `osake`,
    `drink`,
    `ice`,
    `reji`,
  ];
