// tokyo/assets/region-tokyo-A7LxHjud 66 — math
// Lines 29104-29413 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function _se(e = 1024, t = `autumn`) {
  let n = Math.max(32, Math.round(e / 32)),
    r = document.createElement(`canvas`);
  ((r.width = e), (r.height = n));
  let i = r.getContext(`2d`);
  (br(r, i), (i.fillStyle = `#080404`), i.fillRect(0, 0, e, n));
  let a = Md(`buildings.ticker.`),
    o = `buildings.season.${t}.weather`;
  So(o) && a.splice(1, 0, o);
  let s = a.map((e) => L(e)).join(` ★ `) + ` ★ `;
  ((i.font = `bold ${n * 0.78}px ${Mr()}`),
    (i.textBaseline = `middle`),
    (i.fillStyle = `#ff2a10`));
  let c = 0;
  for (; c < e;)
    (i.fillText(s, c, n * 0.54), (c += Math.max(64, i.measureText(s).width)));
  i.fillStyle = `rgba(8,4,4,0.85)`;
  let l = Math.max(2, Math.round(n / 14));
  for (let t = 0; t < e; t += l) i.fillRect(t, 0, 1, n);
  for (let t = 0; t < n; t += l) i.fillRect(0, t, e, 1);
  return Ne(r, { repeat: !0, anisotropy: 2 });
}
var Kd = (e, t, n) => new Date(Date.UTC(e, t - 1, n)).getUTCDay(),
  qd = (e, t, n) => 1 + ((8 - Kd(e, t, 1)) % 7) + (n - 1) * 7;
function Jd(e, t, n) {
  switch (t) {
    case 1:
      return n === 1 || n === qd(e, 1, 2);
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
      return n === qd(e, 7, 3);
    case 8:
      return n === 11;
    case 9:
      return (
        n === qd(e, 9, 3) ||
        n ===
          Math.floor(
            23.2488 + 0.242194 * (e - 1980) - Math.floor((e - 1980) / 4),
          )
      );
    case 10:
      return n === qd(e, 10, 2);
    case 11:
      return n === 3 || n === 23;
    default:
      return !1;
  }
}
var Yd = (e, t, n, r) => {
  let i = new Date(Date.UTC(e, t - 1, n + r));
  return Jd(i.getUTCFullYear(), i.getUTCMonth() + 1, i.getUTCDate());
};
function Xd(e) {
  let { y: t, m: n, d: r } = e;
  if (Jd(t, n, r)) return !0;
  for (let e = -1; e >= -3 && Yd(t, n, r, e); e--)
    if (Kd(t, n, r + e) === 0) return !0;
  return Kd(t, n, r) !== 0 && Yd(t, n, r, -1) && Yd(t, n, r, 1);
}
var Zd = new Map();
function vse(e) {
  let t = { lift: null },
    n = Zd.get(e);
  (n || Zd.set(e, (n = new Set())), n.add(t));
  let r = !1;
  return (n) => {
    r ||
      ((r = !0),
      n ? (t.lift = n) : Zd.get(e)?.delete(t),
      Zd.get(e)?.size || Zd.delete(e));
  };
}
function Qd(e) {
  if (!Zd.size) return !1;
  let t = Zd.get(e);
  if (!t) return !1;
  for (let e of t) {
    let n = !1;
    if (e.lift)
      try {
        n = e.lift();
      } catch {
        n = !0;
      }
    n && t.delete(e);
  }
  return t.size ? !0 : (Zd.delete(e), !1);
}
function $d(e) {
  for (let [t, n] of Zd)
    if (!(e && t !== e)) {
      for (let e of n) e.lift && n.delete(e);
      n.size || Zd.delete(t);
    }
}
function ef(e, t, n, r) {
  let i = null;
  for (let n of e.hours) {
    let [e, r] = n.months;
    (e <= r ? t.m >= e && t.m <= r : t.m >= e || t.m <= r) && (i = n);
  }
  return !i || r < i.start || r >= i.end
    ? !1
    : e.days.includes(n) || (e.holidays && Xd(t));
}
function tf(e, t, n, r) {
  return ef(e, t, n, r) && !Qd(e.id);
}
function nf(e, t) {
  let n = 1 / 0,
    r = -1 / 0;
  for (let i of rf(e, t)) {
    let e = i.road.axis === `x` ? i.sx : i.sz,
      t = i.road.axis === `x` ? i.ex : i.ez;
    ((n = Math.min(n, e, t)), (r = Math.max(r, e, t)));
  }
  return n < r ? [n, r] : null;
}
function rf(e, t) {
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
function yse(e, t) {
  let n = rf(e, t),
    r = nf(e, t);
  if (!n.length || !r) return null;
  let i = n[0].road,
    a = i.at - i.halfWidth,
    o = i.at + i.halfWidth;
  return i.axis === `x`
    ? { x0: r[0], z0: a, x1: r[1], z1: o, axis: `x` }
    : { x0: a, z0: r[0], x1: o, z1: r[1], axis: `z` };
}
function af(e) {
  return Xd(e);
}
function of(e, t) {
  if ((!e.days.includes(t.wd) && !(e.holidays && af(t))) || Qd(e.id))
    return null;
  for (let n of e.hours) {
    let [e, r] = n.months;
    if (e <= r ? t.m >= e && t.m <= r : t.m >= e || t.m <= r)
      return [n.start, n.end];
  }
  return null;
}
function bse(e, t, n) {
  let r = of(e, t);
  if (!r) return 0;
  let [i, a] = r;
  return n < i || n >= a
    ? 0
    : Math.max(0, Math.min(1, (n - i) / 0.33, (a - n) / 0.33));
}
var sf = 5 / 60;
function cf(e, t, n) {
  let r = of(e, t);
  if (!r) return 0;
  let [i, a] = r;
  return n < i + sf || n >= a
    ? 0
    : Math.max(0, Math.min(1, (n - i - sf) / 0.33, (a - n) / 0.33));
}
var lf = [
  { moeru: [1, 4], shigen: 3, moenai: 6 },
  { moeru: [2, 5], shigen: 1, moenai: 3 },
  { moeru: [3, 6], shigen: 4, moenai: 2 },
];
function uf(e, t) {
  let n = lf[e % lf.length];
  if (n.moeru.includes(t.wd)) return `moeru`;
  if (n.shigen === t.wd) return `shigen`;
  let r = Math.ceil(t.d / 7);
  return n.moenai === t.wd && (r === 2 || r === 4) ? `moenai` : null;
}
function df(e, t, n, r) {
  return uf(e, n) !== null && r >= 5.5 && r < t;
}
function ff(e) {
  let t = (6 - new Date(e, 4, 15).getDay() + 7) % 7;
  return t <= 3 ? 15 + t : 15 + t - 7;
}
function xse(e) {
  if (e.m !== 5) return !1;
  let t = ff(e.y);
  return e.d >= t - 2 && e.d <= t + 1;
}
function Sse(e, t) {
  if (e.m !== 5) return !1;
  let n = ff(e.y);
  return (e.d === n || e.d === n + 1) && t >= 10 && t < 17;
}
function Cse(e) {
  return e.m === 1 && e.d <= 7;
}
function wse(e) {
  return (e.m === 3 && e.d >= 24) || (e.m === 4 && e.d <= 8);
}
function Tse(e) {
  return e >= 9.5 && e < 20;
}
function Ese(e, t) {
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
function pf(e, t) {
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
function Dse(e) {
  return e < 9 || e >= 21 ? 0 : e < 10 ? e - 9 : e >= 20 ? 21 - e : 1;
}
var Ose = (e, t, n) => new Date(Date.UTC(e, t - 1, n)).getUTCDay();
function mf(e, t, n, r = Ose(e, t, n), i) {
  let a = Xd({ y: e, m: t, d: n }),
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
