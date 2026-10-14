// tokyo/assets/region-tokyo-BcM3fReU 38 — math
// Lines 20491-20837 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Cp(e, t, n) {
  let r = 2166136261;
  for (let t = 0; t < e.length; t++)
    r = Math.imul(r ^ e.charCodeAt(t), 16777619);
  return (
    (r >>>= 0),
    n
      ? t && (t.id === `konbini` || t.id === `drugstore`)
        ? 1
        : 0
      : t && (t.id === `fashion` || t.id === `luxury`)
        ? 1
        : t?.trad
          ? 2
          : r % 3 == 0
            ? 1
            : r % 7 == 1
              ? 3
              : 0
  );
}
function wp(e) {
  return e <= 7
    ? `newyear`
    : e < 60
      ? `winter`
      : e < 152
        ? `spring`
        : e < 244
          ? `summer`
          : e < 335
            ? `autumn`
            : `yearend`;
}
function Tp(e) {
  return [`buildings.season.${e}.ad`, ...ip(`buildings.ad.`)]
    .filter((e) => oc(e))
    .slice(0, 8);
}
function Ep(e = 512, t = `autumn`) {
  let n = document.createElement(`canvas`);
  n.width = n.height = e;
  let r = n.getContext(`2d`);
  Wi(n, r);
  let i = e / 2,
    a = e / 4,
    o = Tp(t),
    s = [
      [`#ff3a7a`, `#ffd23a`, `#ffffff`],
      [`#0a1a4a`, `#30c8ff`, `#ffffff`],
      [`#f4f0e6`, `#d01818`, `#1a1a1a`],
      [`#1a1a1a`, `#ff6a00`, `#ffffff`],
      [`#2a8a4a`, `#ffffff`, `#ffffff`],
      [`#3a1a6a`, `#ff80ff`, `#ffffff`],
      [`#00a0e0`, `#ffffff`, `#003a6a`],
      [`#f0d000`, `#1a1a1a`, `#1a1a1a`],
    ];
  for (let e = 0; e < 8; e++)
    (r.save(),
      r.translate((e % 2) * i, Math.floor(e / 2) * a),
      r.beginPath(),
      r.rect(0, 0, i, a),
      r.clip(),
      Dp(r, i, a, s[e], o.length ? B(o[e % o.length]) : ``, e),
      r.restore());
  return Se(n, { anisotropy: 2 });
}
function Dp(e, t, n, [r, i, a], o, s) {
  let c = e.createLinearGradient(0, 0, t, n);
  if (
    (c.addColorStop(0, r),
    c.addColorStop(1, i),
    (e.fillStyle = c),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(255,255,255,0.22)`),
    e.beginPath(),
    s % 3 == 0)
  )
    e.arc(t * 0.2, n * 0.5, n * 0.42, 0, Math.PI * 2);
  else if (s % 3 == 1) e.rect(t * 0.06, n * 0.12, t * 0.22, n * 0.78);
  else
    for (let r = 0; r < 12; r++) {
      let i = (r / 12) * Math.PI * 2,
        a = r % 2 ? n * 0.22 : n * 0.44;
      e.lineTo(t * 0.2 + Math.cos(i) * a, n * 0.5 + Math.sin(i) * a);
    }
  (e.fill(), Ea(e, o, t * 0.62, n * 0.5, t * 0.68, n * 0.42, a, sa(), `900`));
}
function Op(e = 1024, t = `autumn`) {
  let n = Math.max(32, Math.round(e / 32)),
    r = document.createElement(`canvas`);
  ((r.width = e), (r.height = n));
  let i = r.getContext(`2d`);
  (Wi(r, i), (i.fillStyle = `#080404`), i.fillRect(0, 0, e, n));
  let a = ip(`buildings.ticker.`),
    o = `buildings.season.${t}.weather`;
  oc(o) && a.splice(1, 0, o);
  let s = a.map((e) => B(e)).join(` ★ `) + ` ★ `;
  ((i.font = `bold ${n * 0.78}px ${sa()}`),
    (i.textBaseline = `middle`),
    (i.fillStyle = `#ff2a10`));
  let c = 0;
  for (; c < e;)
    (i.fillText(s, c, n * 0.54), (c += Math.max(64, i.measureText(s).width)));
  i.fillStyle = `rgba(8,4,4,0.85)`;
  let l = Math.max(2, Math.round(n / 14));
  for (let t = 0; t < e; t += l) i.fillRect(t, 0, 1, n);
  for (let t = 0; t < n; t += l) i.fillRect(0, t, e, 1);
  return Se(r, { repeat: !0, anisotropy: 2 });
}
var kp = (e, t, n) => new Date(Date.UTC(e, t - 1, n)).getUTCDay(),
  Ap = (e, t, n) => 1 + ((8 - kp(e, t, 1)) % 7) + (n - 1) * 7;
function jp(e, t, n) {
  switch (t) {
    case 1:
      return n === 1 || n === Ap(e, 1, 2);
    case 2:
      return n === 11 || n === 23;
    case 3:
      return (
        n ===
        Math.floor(20.8431 + 0.242194 * (e - 1980) - Math.floor((e - 1980) / 4))
      );
    case 4:
      return n === 29;
    case 5:
      return n === 3 || n === 4 || n === 5;
    case 7:
      return n === Ap(e, 7, 3);
    case 8:
      return n === 11;
    case 9:
      return (
        n === Ap(e, 9, 3) ||
        n ===
          Math.floor(
            23.2488 + 0.242194 * (e - 1980) - Math.floor((e - 1980) / 4),
          )
      );
    case 10:
      return n === Ap(e, 10, 2);
    case 11:
      return n === 3 || n === 23;
    default:
      return !1;
  }
}
var Mp = (e, t, n, r) => {
  let i = new Date(Date.UTC(e, t - 1, n + r));
  return jp(i.getUTCFullYear(), i.getUTCMonth() + 1, i.getUTCDate());
};
function Np(e) {
  let { y: t, m: n, d: r } = e;
  if (jp(t, n, r)) return !0;
  for (let e = -1; e >= -3 && Mp(t, n, r, e); e--)
    if (kp(t, n, r + e) === 0) return !0;
  return kp(t, n, r) !== 0 && Mp(t, n, r, -1) && Mp(t, n, r, 1);
}
function Pp(e, t, n, r) {
  let i = null;
  for (let n of e.hours) {
    let [e, r] = n.months;
    (e <= r ? t.m >= e && t.m <= r : t.m >= e || t.m <= r) && (i = n);
  }
  return !i || r < i.start || r >= i.end
    ? !1
    : e.days.includes(n) || (e.holidays && Np(t));
}
function Fp(e, t) {
  let n = 1 / 0,
    r = -1 / 0;
  for (let i of Ip(e, t)) {
    let e = i.road.axis === `x` ? i.sx : i.sz,
      t = i.road.axis === `x` ? i.ex : i.ez;
    ((n = Math.min(n, e, t)), (r = Math.max(r, e, t)));
  }
  return n < r ? [n, r] : null;
}
function Ip(e, t) {
  let n = [],
    r = Math.min(t.from, t.to),
    i = Math.max(t.from, t.to);
  for (let a of e.links) {
    if (a.road.id !== t.road) continue;
    let e = a.road.axis === `x` ? (a.sx + a.ex) / 2 : (a.sz + a.ez) / 2;
    e >= r && e <= i && n.push(a);
  }
  return n;
}
function Lp(e) {
  return Np(e);
}
function Rp(e, t) {
  if (!e.days.includes(t.wd) && !(e.holidays && Lp(t))) return null;
  for (let n of e.hours) {
    let [e, r] = n.months;
    if (e <= r ? t.m >= e && t.m <= r : t.m >= e || t.m <= r)
      return [n.start, n.end];
  }
  return null;
}
function Cee(e, t, n) {
  let r = Rp(e, t);
  if (!r) return 0;
  let [i, a] = r;
  return n < i || n >= a
    ? 0
    : Math.max(0, Math.min(1, (n - i) / 0.33, (a - n) / 0.33));
}
var zp = 5 / 60;
function Bp(e, t, n) {
  let r = Rp(e, t);
  if (!r) return 0;
  let [i, a] = r;
  return n < i + zp || n >= a
    ? 0
    : Math.max(0, Math.min(1, (n - i - zp) / 0.33, (a - n) / 0.33));
}
var Vp = [
  { moeru: [1, 4], shigen: 3, moenai: 6 },
  { moeru: [2, 5], shigen: 1, moenai: 3 },
  { moeru: [3, 6], shigen: 4, moenai: 2 },
];
function Hp(e, t) {
  let n = Vp[e % Vp.length];
  if (n.moeru.includes(t.wd)) return `moeru`;
  if (n.shigen === t.wd) return `shigen`;
  let r = Math.ceil(t.d / 7);
  return n.moenai === t.wd && (r === 2 || r === 4) ? `moenai` : null;
}
function Up(e, t, n, r) {
  return Hp(e, n) !== null && r >= 5.5 && r < t;
}
function Wp(e) {
  let t = (6 - new Date(e, 4, 15).getDay() + 7) % 7;
  return t <= 3 ? 15 + t : 15 + t - 7;
}
function wee(e) {
  if (e.m !== 5) return !1;
  let t = Wp(e.y);
  return e.d >= t - 2 && e.d <= t + 1;
}
function Tee(e, t) {
  if (e.m !== 5) return !1;
  let n = Wp(e.y);
  return (e.d === n || e.d === n + 1) && t >= 10 && t < 17;
}
function Eee(e) {
  return e.m === 1 && e.d <= 7;
}
function Dee(e) {
  return (e.m === 3 && e.d >= 24) || (e.m === 4 && e.d <= 8);
}
function Oee(e) {
  return e >= 9.5 && e < 20;
}
function kee(e, t) {
  let n = ((e % 24) + 24) % 24;
  return n >= 1 && n < 4.5
    ? 0
    : t
      ? n < 1
        ? 0.18
        : n < 7
          ? 0.06 + ((n - 4.5) / 2.5) * 0.14
          : n < 10
            ? 0.2 + ((n - 7) / 3) * 0.35
            : n < 19
              ? 0.55
              : n < 22
                ? 0.55 - ((n - 19) / 3) * 0.2
                : 0.35 - ((n - 22) / 2) * 0.17
      : n < 1
        ? 0.28
        : n < 6
          ? 0.05 + ((n - 4.5) / 1.5) * 0.15
          : n < 7.5
            ? 0.2 + ((n - 6) / 1.5) * 0.8
            : n < 9.5
              ? 1
              : n < 11
                ? 1 - ((n - 9.5) / 1.5) * 0.5
                : n < 17
                  ? n >= 12 && n < 13.5
                    ? 0.55
                    : 0.48
                  : n < 17.5
                    ? 0.48 + ((n - 17) / 0.5) * 0.47
                    : n < 20
                      ? 0.95
                      : n < 22
                        ? 0.95 - ((n - 20) / 2) * 0.4
                        : 0.55 - ((n - 22) / 2) * 0.27;
}
function Gp(e, t) {
  let n = ((e % 24) + 24) % 24,
    r;
  return (
    (r =
      n < 5
        ? 0.02
        : n < 6
          ? 0.02 + (n - 5) * 0.2
          : n < 9
            ? 0.22 + ((n - 6) / 3) * 0.2
            : n < 11
              ? 0.42 + ((n - 9) / 2) * 0.48
              : n < 16.5
                ? 0.9
                : n < 18
                  ? 0.9 - ((n - 16.5) / 1.5) * 0.45
                  : n < 21
                    ? 0.45 - ((n - 18) / 3) * 0.3
                    : 0.12 - ((Math.min(n, 24) - 21) / 3) * 0.08),
    Math.min(1, r * (t ? 1.15 : 0.9))
  );
}
function Aee(e) {
  return e < 9 || e >= 21 ? 0 : e < 10 ? e - 9 : e >= 20 ? 21 - e : 1;
}
var jee = (e, t, n) => new Date(Date.UTC(e, t - 1, n)).getUTCDay();
function Kp(e, t, n, r = jee(e, t, n), i) {
  let a = Np({ y: e, m: t, d: n }),
    o = a ? `holiday` : r === 0 ? `sun` : r === 6 ? `sat` : `weekday`,
    s = (t === 12 && n >= 29) || (t === 1 && n <= 3),
    c = i ?? {};
  return (
    (c.y = e),
    (c.m = t),
    (c.d = n),
    (c.wd = r),
    (c.holiday = a),
    (c.kind = o),
    (c.off = o !== `weekday` || s),
    (c.newYear = s),
    (c.yearEnd = t === 12 && n >= 26),
    (c.obon = t === 8 && n >= 13 && n <= 16),
    (c.schoolBreak =
      (t === 7 && n >= 21) ||
      t === 8 ||
      (t === 12 && n >= 26) ||
      (t === 1 && n <= 7) ||
      (t === 3 && n >= 25) ||
      (t === 4 && n <= 5)),
    c
  );
}
