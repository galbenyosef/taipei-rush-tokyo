// tokyo/assets/region-tokyo-55J_WESF 137 — math
// Lines 58830-59176 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var dy = { x0: -2200, x1: -1708, z0: 610, z1: 1180 },
  fy = (e, t, n, r) => n > dy.x0 && e < dy.x1 && r > dy.z0 && t < dy.z1,
  py = 12.6,
  Kde = 1004,
  my = 974.75,
  hy = 1005.25,
  qde = 0.15,
  gy = (e, t) => {
    let n = t[0] - e[0],
      r = t[1] - e[1],
      i = Math.hypot(n, r);
    return { ax: e[0], az: e[1], nx: r / i, nz: -n / i, z1: t[1] };
  },
  _y = [gy(gs[0], gs[1]), gy(gs[1], gs[2]), gy(gs[2], gs[3])];
function vy(e, t) {
  let n = t < _y[0].z1 ? _y[0] : t < _y[1].z1 ? _y[1] : _y[2];
  return (e - n.ax) * n.nx + (t - n.az) * n.nz;
}
var yy = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  by = (e, t, n) => e + (t - e) * n;
function Jde(e) {
  if (e <= 840) return 0;
  if (e <= 895) return ds.TK * yy((e - 840) / 55);
  if (e <= 955) {
    let t = (e - 895) / 60;
    return by(ds.TK, ds.H, 0.5 * t + 0.5 * yy(t));
  }
  return e <= 1008 ? ds.H : ds.H * (1 - yy((e - 1008) / 77));
}
function xy(e, t) {
  return Jde(t) * (1 - yy((e + 1828) / 116));
}
function Sy(e, t) {
  let n = yy((e + 2195) / 20),
    r = yy((e + 1925) / 10),
    i = by(975, 1005, r),
    a = by(1008, 1030, r),
    o = yy((t - 615) / 25) * (1 - yy((t - i) / (a - i)));
  return ds.H * n * o;
}
function Yde(e) {
  return e < 845
    ? 6 * (1 - yy((e - 830) / 15))
    : e > 1004
      ? 6 * yy((e - Kde) / 15)
      : 0;
}
function Cy(e, t) {
  if (e <= dy.x0 || e >= dy.x1 || t <= dy.z0 || t >= dy.z1) return 0;
  let n = vy(e, t),
    r = xy(e, t),
    i = Sy(e, t),
    a = n > 0 ? r : i,
    o = n > 0 ? n - 16 : -n - py;
  if (o >= 6 || (t >= my && t <= hy)) return a;
  let s = Nre(t) - 0.02 - qde;
  if (s >= Math.max(r, i) - 0.3) return a;
  if (o <= 0) return s;
  let c = Yde(t);
  return o >= c ? a : s + (a - s) * yy(o / c);
}
function Xde(e, t) {
  if (e <= dy.x0 || e >= dy.x1 || t <= 800 || t >= 1170) return !1;
  let n = vy(e, t);
  return n > -13.6 && n < 17;
}
function Zde(e, t, n) {
  for (let t of [my, hy]) t > e.minZ && t < e.maxZ && n.push(t);
  for (let r = 4; r < 256; r += 4) {
    let i = e.minX + r,
      a = e.minZ + r;
    (i > dy.x0 && i < dy.x1 && t.push(i), a > dy.z0 && a < dy.z1 && n.push(a));
  }
}
var wy = { x0: -2300, x1: -1998, z0: 104, z1: 456 },
  Ty = (e, t, n, r) => n > wy.x0 && e < wy.x1 && r > wy.z0 && t < wy.z1,
  Ey = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Dy = zs.ome - 16.75,
  Oy = zs.ome + 16.75,
  ky = { w0: -2265, w1: -2228, e1: -2078, e0: -2036 },
  Ay = 26,
  Qde = 28;
function $de(e, t) {
  let n =
    e < ky.w1
      ? Ey((e - ky.w0) / (ky.w1 - ky.w0))
      : e > ky.e1
        ? 1 - Ey((e - ky.e1) / (ky.e0 - ky.e1))
        : 1;
  return n <= 0
    ? 0
    : n *
        (t < Dy
          ? Ey((t - (Dy - Ay)) / Ay)
          : t > Oy
            ? 1 - Ey((t - Oy) / Qde)
            : 1);
}
var jy = Hs.w,
  My = Hs.s - jy / 2 - Hs.n,
  Ny = Hs.x0 + jy / 2,
  efe = My + (Hs.x1 - Ny);
function tfe(e, t) {
  let n = e < Hs.x0 + jy,
    r = t > Hs.s - jy;
  if (!n && !(r && e < Hs.x1)) return bs.B1;
  let i = 0;
  i =
    n && (!r || t - Hs.n <= My)
      ? Math.max(0, Math.min(My, t - Hs.n))
      : My + Math.max(0, Math.min(Hs.x1 - Ny, e - Ny));
  let a = i / efe;
  return bs.B1 * (0.15 * Ey(a) + 0.85 * a);
}
var Py = zs.koshu - 16.75,
  Fy = zs.koshu + 16.75,
  Iy = { z0: 262.25, z1: Py },
  Ly = { z0: Fy, z1: 452 },
  Ry = { z: 360, x0: -2221.25, x1: -2292, half: 6.25 },
  zy = { z0: 276, z1: Py },
  By = 12;
function Vy(e) {
  return e < Ws.x0 - 0.01
    ? 0
    : e <= Ws.x1
      ? bs.BR
      : bs.BR * (1 - Ey((e - Ws.x1) / (Ws.xEnd - Ws.x1)));
}
var Hy = 6.25,
  nfe = 16.75,
  Uy = 6.25;
function rfe(e, t) {
  let n = 0,
    r = (e, t) => {
      let r = t <= 0 ? 1 : 1 - Ey(t / By);
      e * r > n && (n = e * r);
    };
  if (e > Ws.x0 - By && e < Ws.xEnd) {
    let n = Vy(Math.max(e, Ws.x0)),
      i = t < Py ? Py - t : t > Fy ? t - Fy : 0;
    (i <= 0 || !(e > -2208.75 && e < -2054.25)) && r(n, Math.max(i, Ws.x0 - e));
  }
  {
    let n = Math.abs(e - Rs.west);
    if (t > Iy.z0 - By && t < Py + 1) {
      let i = bs.BR * Ey((Math.min(t, Iy.z1) - Iy.z0) / (Iy.z1 - Iy.z0));
      (n <= Hy || e < Rs.west) && r(i, n - Hy);
    }
    let i = Math.abs(e - Rs.west);
    t > Fy - 1 &&
      t < Ly.z1 &&
      r(bs.BR * (1 - Ey((t - Ly.z0) / (Ly.z1 - Ly.z0))), i - nfe);
  }
  e < Ry.x0 + 1 &&
    e > Ry.x1 - By &&
    r(
      bs.BR * (1 - Ey((Ry.x0 - e) / (Ry.x0 - Ry.x1))),
      Math.abs(t - Ry.z) - Ry.half,
    );
  {
    let n = Math.abs(e - Rs.eastS);
    if (t > zy.z0 && t < Py + 1) {
      let i = Vy(Rs.eastS) * Ey((t - zy.z0) / (zy.z1 - zy.z0));
      (n <= Uy || e > Rs.eastS) && r(i, n - Uy);
    }
  }
  return n;
}
function Wy(e, t) {
  if (e <= wy.x0 || e >= wy.x1 || t <= wy.z0 || t >= wy.z1) return 0;
  if (e > Vs.x0 && e < Vs.x1 && t > Vs.z0 && t < Vs.z1) return tfe(e, t);
  if (e > Us.x0 && e < Us.x1 && t > Us.z0 && t < Us.z1) return Us.y;
  if (t < 210) {
    let n = $de(e, t);
    return n > 0 ? bs.DIP * n : 0;
  }
  return t > 255 ? rfe(e, t) : 0;
}
function ife(e, t, n) {
  let r = (t) => t > e.minX && t < e.maxX,
    i = (t) => t > e.minZ && t < e.maxZ;
  for (let e of [Vs.x0, Vs.x1, Hs.x0 + jy, Hs.x1, Us.x0, Us.x1])
    r(e) && t.push(e);
  for (let e of [Vs.z0, Vs.z1, Hs.s - jy, Py, Fy, Us.z0, Us.z1])
    i(e) && n.push(e);
  for (let r = 4; r < 256; r += 4) {
    let i = e.minX + r,
      a = e.minZ + r;
    (i > wy.x0 && i < wy.x1 && t.push(i), a > wy.z0 && a < wy.z1 && n.push(a));
  }
}
var Gy = 170,
  Ky = as.slice(0, -1).map((e, t) => {
    let n = as[t + 1];
    return {
      ax: e[0],
      az: e[1],
      dx: n[0] - e[0],
      dz: n[1] - e[1],
      x0: Math.min(e[0], n[0]) - Gy,
      x1: Math.max(e[0], n[0]) + Gy,
      z0: Math.min(e[1], n[1]) - Gy,
      z1: Math.max(e[1], n[1]) + Gy,
    };
  }),
  afe = Math.min(...Ky.map((e) => e.x0)),
  ofe = Math.max(...Ky.map((e) => e.x1)),
  sfe = Math.min(...Ky.map((e) => e.z0)),
  cfe = Math.max(...Ky.map((e) => e.z1));
function qy(e, t) {
  if (e < afe || e > ofe || t < sfe || t > cfe) return 1;
  let n = 28900;
  for (let r = 0; r < Ky.length; r++) {
    let i = Ky[r];
    if (e < i.x0 || e > i.x1 || t < i.z0 || t > i.z1) continue;
    let a = i.dx * i.dx + i.dz * i.dz,
      o = a ? ((e - i.ax) * i.dx + (t - i.az) * i.dz) / a : 0;
    o = o < 0 ? 0 : o > 1 ? 1 : o;
    let s = i.ax + i.dx * o - e,
      c = i.az + i.dz * o - t,
      l = s * s + c * c;
    l < n && (n = l);
  }
  let r = Math.sqrt(n);
  if (r >= Gy) return 1;
  if (r <= 20) return 0;
  let i = (r - 20) / 150;
  return i * i * (3 - 2 * i);
}
var Jy = Pv.height,
  Yy = -139,
  Xy = -1191,
  Zy = -1196,
  Qy = -175,
  $y = -232,
  eb = -1250,
  tb = [-232, -1200],
  nb = [-480, -1290],
  lfe = 14.5,
  rb = -480,
  ib = -1520,
  ab = 250,
  ufe = 700,
  ob = nb[0] - tb[0],
  sb = nb[1] - tb[1],
  cb = Math.hypot(ob, sb),
  lb = ob / cb,
  ub = sb / cb,
  dfe = -lb > 0 ? ub : -ub,
  ffe = -lb > 0 ? -lb : lb,
  pfe = rs.findIndex((e) => e[1] <= eb),
  db = rs.slice(pfe);
{
  let e = db[db.length - 2],
    t = db[db.length - 1],
    n = 800 / Math.hypot(t[0] - e[0], t[1] - e[1]);
  db.push([t[0] + (t[0] - e[0]) * n, t[1] + (t[1] - e[1]) * n]);
}
var fb = new Float64Array((db.length - 1) * 6);
for (let e = 0; e + 1 < db.length; e++) {
  let [t, n] = db[e],
    [r, i] = db[e + 1],
    a = Math.hypot(r - t, i - n),
    o = (r - t) / a,
    s = (i - n) / a;
  fb.set([t, n, s, -o, n, i], e * 6);
}
function pb(e, t) {
  let n = fb.length / 6,
    r = 0;
  for (; r < n - 1 && t < fb[r * 6 + 5];) r++;
  let i = r * 6;
  return (e - fb[i]) * fb[i + 2] + (t - fb[i + 1]) * fb[i + 3];
}
function mfe(e) {
  let t = fb.length / 6,
    n = 0;
  for (; n < t - 1 && e < fb[n * 6 + 5];) n++;
  let r = fb[n * 6 + 2];
  return (-14.5 - pb(0, e)) / r;
}
function mb(e) {
  let t = fb.length / 6,
    n = 0;
  for (; n < t - 1 && e < fb[n * 6 + 5];) n++;
  return (24 - pb(0, e)) / fb[n * 6 + 2];
}
var hb = bv.find((e) => e.id === `kototoi`),
  gb = hb.at,
  _b = _p(hb, gv),
  vb = mfe(gb),
  yb = mb(gb) - 1,
  bb = 25;
function xb(e) {
  if (e <= vb) return 1;
  if (e >= -30) return 0;
  let t = -30 - vb,
    n = bb,
    r = e - vb,
    i = 1 / (t - n),
    a;
  if (r < n) a = (i * r * r) / 50;
  else if (r > t - n) {
    let e = t - r;
    a = 1 - (i * e * e) / 50;
  } else a = i * (r - n / 2);
  return 1 - a;
}
var Sb = Pv.stairs.map((e) => {
    let t = Math.round(Math.sin(e.heading) * 1e6) / 1e6,
      n = Math.round(-Math.cos(e.heading) * 1e6) / 1e6;
    return {
      id: e.id,
      x: e.x,
      z: e.z,
      dx: t,
      dz: n,
      half: e.width / 2,
      len: e.length,
    };
  }),
  Cb = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * e * (e * (e * 6 - 15) + 10));
function hfe(e, t) {
  let n;
  if (t >= -1250) {
    if (e >= -139) return 0;
    if (e >= -232) return t >= (e >= -175 ? -1191 : -1196) ? 0 : 1;
    n = 1;
  } else {
    let r = pb(e, t);
    if (r <= 14.5) return 0;
    n = r >= 24 ? 1 : Cb((r - lfe) / 9.5);
  }
  if (e < -232) {
    let r = (e - tb[0]) * dfe + (t - tb[1]) * ffe;
    if (r >= 45) return 0;
    r > 0 && (n *= 1 - Cb(r / 45));
  }
  if (e < rb || t < ib) {
    let r = e < rb ? rb - e : 0,
      i = t < ib ? ib - t : 0,
      a = Math.sqrt(r * r + i * i);
    if (a >= ufe) return 0;
    (a > ab && (n *= 1 - Cb((a - ab) / 450)), n > 0 && (n *= qy(e, t)));
  }
  return n;
}
