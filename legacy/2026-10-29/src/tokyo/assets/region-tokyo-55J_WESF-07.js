// tokyo/assets/region-tokyo-55J_WESF 07 — next
// Lines 2240-2589 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function br(e, t) {
  return (
    e && `setAttribute` in e && e.setAttribute(`lang`, `ja`),
    t && `lang` in t && (t.lang = `ja`),
    t
  );
}
function cne() {
  if (typeof document > `u`) return !0;
  try {
    let e = document.createElement(`canvas`).getContext(`2d`);
    if (!e) return !0;
    let t = (t) => (
        (e.font = `48px ${t}`),
        e.measureText(`mmmmmmmmmmlliWWあアー漢`).width
      ),
      n = [
        `Hiragino Sans`,
        `Hiragino Kaku Gothic ProN`,
        `Yu Gothic`,
        `YuGothic`,
        `Meiryo`,
        `Noto Sans JP`,
        `Noto Sans CJK JP`,
      ],
      r = [`monospace`, `serif`, `sans-serif`],
      i = r.map(t);
    return n.some((e) =>
      r.some((n, r) => Math.abs(t(`"${e}",${n}`) - i[r]) > 0.5),
    );
  } catch {
    return !0;
  }
}
var lne = 4e3,
  xr = `system`,
  Sr = [];
function Cr(e) {
  xr === `loaded` ? e() : Sr.push(e);
}
async function une(e = !1) {
  if (typeof document > `u` || typeof FontFace > `u` || (!e && cne()))
    return !1;
  xr = `pending`;
  try {
    let e = new FontFace(_r, `url(${ane}) format("woff2")`, {
      weight: `100 900`,
      style: `normal`,
      display: `block`,
    });
    document.fonts.add(e);
    let t = e.load().then(
        () => {
          xr = `loaded`;
          for (let e of Sr.splice(0)) e();
          return !0;
        },
        () => ((xr = `failed`), !1),
      ),
      n = new Promise((e) => setTimeout(() => e(!1), lne));
    return await Promise.race([t, n]);
  } catch {
    return ((xr = `failed`), !1);
  }
}
var wr =
    typeof location < `u`
      ? new URLSearchParams(location.search).get(`jpfont`)
      : null,
  Tr = wr === `0` ? Promise.resolve(!1) : une(wr === `1`);
function Er(e) {
  return (
    (e < 0 ? `-` : ``) +
    String(Math.round(Math.abs(e))).replace(/\B(?=(\d{3})+(?!\d))/g, `,`)
  );
}
var Dr = (e) => `¥${Er(e)}`,
  Or = [`日`, `月`, `火`, `水`, `木`, `金`, `土`],
  kr = {
    "、": `︑`,
    "。": `︒`,
    "（": `︵`,
    "）": `︶`,
    "「": `﹁`,
    "」": `﹂`,
    "『": `﹃`,
    "』": `﹄`,
    "【": `︻`,
    "】": `︼`,
    "〔": `︹`,
    "〕": `︺`,
    "《": `︽`,
    "》": `︾`,
    "〈": `︿`,
    "〉": `﹀`,
    "…": `︙`,
    "‥": `︰`,
    "：": `︓`,
    "！": `︕`,
    "？": `︖`,
  },
  dne = new Set([
    `ー`,
    `〜`,
    `～`,
    `－`,
    `—`,
    `―`,
    `‐`,
    `-`,
    `=`,
    `＝`,
    `→`,
    `←`,
  ]),
  fne = new Set([...`ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ`]);
function Ar(e, t = {}) {
  let n = [],
    r = [...e];
  for (let e = 0; e < r.length;) {
    let i = r[e];
    if (/[A-Za-z0-9.,%$¥]/.test(i)) {
      let i = e;
      for (; i < r.length && /[A-Za-z0-9.,%$¥]/.test(r[i]);) i++;
      let a = r.slice(e, i).join(``);
      if (a.length <= 2) n.push({ text: a, rotate: !1, tcy: !0, shift: !1 });
      else if (t.upright ?? /^[0-9.,¥$%]+$/.test(a))
        for (let e of a) n.push({ text: e, rotate: !1, tcy: !1, shift: !1 });
      else n.push({ text: a, rotate: !0, tcy: !1, shift: !1 });
      e = i;
      continue;
    }
    (i === ` ` || i === `　`
      ? n.push({ text: ``, rotate: !1, tcy: !1, shift: !1 })
      : kr[i]
        ? n.push({ text: kr[i], rotate: !1, tcy: !1, shift: !1 })
        : n.push({ text: i, rotate: dne.has(i), tcy: !1, shift: fne.has(i) }),
      e++);
  }
  return n;
}
function jr(e, t) {
  return e.replace(/\{([a-z]+)\}/g, (e, n) => (n in t ? String(t[n]) : e));
}
var Mr = () => vr,
  Nr = () => yr,
  Pr = (e, t, n, r = 1) => `rgba(${e | 0},${t | 0},${n | 0},${r})`,
  Fr = (e) => `#` + (e & 16777215).toString(16).padStart(6, `0`),
  Ir = (e, t) => Pr(e[0] * t, e[1] * t, e[2] * t);
function Lr(e, t, n) {
  let r = 1 + (e.next() - 0.5) * n;
  return Pr(t[0] * r, t[1] * r, t[2] * r);
}
function P(e, t, n, r, i, a) {
  ((e.fillStyle = a), e.fillRect(t, n, r, i));
}
function Rr(e, t, n, r, i, a) {
  ((e.fillStyle = a ? `#fff` : `#000`), e.fillRect(t, n, r, i));
}
function zr(e, t, n, r, i, a, o) {
  let s = e.createLinearGradient(0, n, 0, n + i);
  (s.addColorStop(0, a),
    s.addColorStop(1, o),
    (e.fillStyle = s),
    e.fillRect(t, n, r, i));
}
function Br(e, t, n, r, i, a, o, s = 12, c = 6, l = 0.86) {
  ((e.fillStyle = Ir(o, l)), e.fillRect(n, r, i, a));
  for (let l = r, u = 0; l < r + a; l += c, u++) {
    let r = u % 2 ? s / 2 : 0;
    for (let a = n - r; a < n + i; a += s)
      ((e.fillStyle = Lr(t, o, 0.06)),
        e.fillRect(
          Math.max(n, a + 0.6),
          l + 0.6,
          Math.min(s - 1.2, n + i - a - 0.6),
          c - 1.2,
        ));
  }
}
function Vr(e, t, n, r, i, a, o, s = !0) {
  ((e.fillStyle = Pr(o[0], o[1], o[2])), e.fillRect(n, r, i, a));
  for (let o = 0; o < 10; o++) {
    let o = n + t.next() * i,
      s = r + t.next() * a,
      c = 10 + t.next() * 40,
      l = e.createRadialGradient(o, s, 0, o, s, c),
      u = t.next() < 0.5 ? 0 : 255;
    (l.addColorStop(0, `rgba(${u},${u},${u},${0.04 + t.next() * 0.05})`),
      l.addColorStop(1, `rgba(${u},${u},${u},0)`),
      (e.fillStyle = l),
      e.fillRect(n, r, i, a));
  }
  if (s)
    for (let t = r + 20; t < r + a; t += 64)
      for (let r = n + 24; r < n + i; r += 60)
        ((e.fillStyle = `rgba(60,60,58,0.35)`),
          e.beginPath(),
          e.arc(r, t, 2.2, 0, Math.PI * 2),
          e.fill());
}
function Hr(e, t, n, r, i, a, o, s = 60) {
  ((e.fillStyle = Pr(o[0], o[1], o[2])), e.fillRect(n, r, i, a));
  for (let c = r; c < r + a; c += s)
    ((e.fillStyle = Lr(t, o, 0.05)),
      e.fillRect(n, c + 1.5, i, s - 3),
      (e.fillStyle = `rgba(0,0,0,0.16)`),
      e.fillRect(n, c + s - 1.5, i, 1.5),
      (e.fillStyle = `rgba(255,255,255,0.12)`),
      e.fillRect(n, c + 1.5, i, 1));
}
function Ur(e, t, n, r, i, a, o, s = 64, c = 42) {
  ((e.fillStyle = Ir(o, 0.82)), e.fillRect(n, r, i, a));
  for (let l = r, u = 0; l < r + a; l += c, u++)
    for (let r = n - (u % 2 ? s / 2 : 0); r < n + i; r += s) {
      ((e.fillStyle = Lr(t, o, 0.07)),
        e.fillRect(
          Math.max(n, r + 1),
          l + 1,
          Math.min(s - 2, n + i - r - 1),
          c - 2,
        ));
      for (let n = 0; n < 6; n++)
        ((e.fillStyle = `rgba(0,0,0,${0.05 + t.next() * 0.06})`),
          e.fillRect(r + t.next() * s, l + t.next() * c, 1.5, 1.5));
    }
}
function Wr(e, t, n, r, i, a, o) {
  ((e.fillStyle = Pr(o[0], o[1], o[2])), e.fillRect(n, r, i, a));
  for (let o = 0; o < 14; o++) {
    let o = n + t.next() * i,
      s = r + t.next() * a;
    ((e.fillStyle = `rgba(0,0,0,${0.02 + t.next() * 0.03})`),
      e.fillRect(o, s, 10 + t.next() * 40, 3 + t.next() * 10));
  }
}
function pne(e, t, n, r, i, a, o, s = 0.16) {
  for (let c = 0; c < o; c++) {
    let o = n + t.next() * (r - n),
      c = 2 + t.next() * 6,
      l = a * (0.4 + t.next() * 0.8),
      u = e.createLinearGradient(0, i, 0, i + l);
    (u.addColorStop(0, `rgba(40,38,36,${s * (0.6 + t.next() * 0.6)})`),
      u.addColorStop(1, `rgba(40,38,36,0)`),
      (e.fillStyle = u),
      e.fillRect(o, i, c, l));
  }
}
function mne(e, t, n = 0.1, r = 256) {
  for (let i = 0; i < 5; i++) {
    let i = t.next() * r,
      a = t.next() * r,
      o = 20 + t.next() * 60,
      s = e.createRadialGradient(i, a, 0, i, a, o);
    (s.addColorStop(0, `rgba(60,56,50,${n * t.next()})`),
      s.addColorStop(1, `rgba(60,56,50,0)`),
      (e.fillStyle = s),
      e.fillRect(0, 0, r, r));
  }
}
var Gr = [
  [236, 230, 214],
  [214, 220, 226],
  [226, 210, 186],
  [200, 214, 200],
  [238, 236, 232],
  [222, 200, 196],
];
function Kr(e, t, n, r, i, a, o, s = 0) {
  switch (o) {
    case `lace`:
    case `curtain`: {
      let c = Gr[s % Gr.length];
      zr(e, n, r, i, a, Ir(c, 1), Ir(c, o === `lace` ? 0.86 : 0.78));
      for (let o = n + 3; o < n + i; o += 6 + t.next() * 4)
        ((e.fillStyle = `rgba(0,0,0,${0.04 + t.next() * 0.05})`),
          e.fillRect(o, r, 2, a));
      if (o === `curtain`) {
        let o = i * (0.25 + t.next() * 0.3);
        zr(e, t.next() < 0.5 ? n : n + i - o, r, o, a, `#4a4c50`, `#2e2e30`);
      }
      break;
    }
    case `blind`:
      P(e, n, r, i, a, `#d6d8d4`);
      for (let t = r; t < r + a; t += 4)
        P(e, n, t + 3, i, 1, `rgba(0,0,0,0.12)`);
      break;
    case `dark`:
      (zr(e, n, r, i, a, `#5d6e7c`, `#262c32`),
        (e.fillStyle = `rgba(255,255,255,0.10)`),
        e.beginPath(),
        e.moveTo(n + i * 0.2, r),
        e.lineTo(n + i * 0.45, r),
        e.lineTo(n + i * 0.15, r + a),
        e.lineTo(n - i * 0.1, r + a),
        e.fill());
      break;
    case `frosted`:
      zr(e, n, r, i, a, `#c8d0d4`, `#aab4ba`);
      for (let o = 0; o < 20; o++)
        P(
          e,
          n + t.next() * i,
          r + t.next() * a,
          3,
          3,
          `rgba(255,255,255,0.08)`,
        );
      break;
    case `office`:
      zr(e, n, r, i, a, `#8a949c`, `#3c444a`);
      for (let t = n + 6; t < n + i - 10; t += 34)
        P(e, t, r + 4, 20, 3, `rgba(255,255,255,0.35)`);
      P(e, n, r + a * 0.66, i, a * 0.06, `rgba(30,30,30,0.35)`);
      break;
    case `shoji`:
      P(e, n, r, i, a, `#ece6d6`);
      for (let t = n; t < n + i; t += i / 4) P(e, t, r, 1.6, a, `#8a6a48`);
      for (let t = r; t < r + a; t += a / 5) P(e, n, t, i, 1.6, `#8a6a48`);
  }
}
function qr(e, t, n, r, i, a, o, s = {}) {
  let c = s.panes ?? 2,
    l = s.frame ?? `#b8bcbc`;
  (P(e, r - 4, i - 4, a + 8, o + 8, l),
    P(e, r - 4, i - 4, a + 8, 1.5, `rgba(255,255,255,0.35)`));
  let u = a / c;
  for (let a = 0; a < c; a++) {
    let c = r + a * u + 2,
      l = i + 2,
      d = u - 4,
      f = o - 4;
    (Kr(e, n, c, l, d, f, s.look ?? `lace`, (s.tone ?? 0) + a),
      Rr(t, c, l, d, f, !1));
  }
  for (let t = 1; t < c; t++) P(e, r + t * u - 2.5, i, 5, o, l);
  s.sill !== !1 &&
    (P(e, r - 8, i + o + 4, a + 16, 5, `#a8aaa8`),
    P(e, r - 8, i + o + 9, a + 16, 2, `rgba(0,0,0,0.25)`));
}
function Jr(e, t, n, r, i, a = `bold`, o = 6) {
  let s = r;
  for (
    ;
    s > o && ((e.font = `${a} ${s}px ${i}`), !(e.measureText(t).width <= n));
    s -= Math.max(1, s * 0.08)
  );
  return s;
}
