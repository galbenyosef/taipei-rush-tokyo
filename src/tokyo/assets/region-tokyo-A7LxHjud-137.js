// tokyo/assets/region-tokyo-A7LxHjud 137 — math
// Lines 58921-59267 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var my = { x0: -2200, x1: -1708, z0: 610, z1: 1180 },
  hy = (e, t, n, r) => n > my.x0 && e < my.x1 && r > my.z0 && t < my.z1,
  gy = 12.6,
  ife = 1004,
  _y = 974.75,
  vy = 1005.25,
  afe = 0.15,
  yy = (e, t) => {
    let n = t[0] - e[0],
      r = t[1] - e[1],
      i = Math.hypot(n, r);
    return { ax: e[0], az: e[1], nx: r / i, nz: -n / i, z1: t[1] };
  },
  by = [yy(gs[0], gs[1]), yy(gs[1], gs[2]), yy(gs[2], gs[3])];
function xy(e, t) {
  let n = t < by[0].z1 ? by[0] : t < by[1].z1 ? by[1] : by[2];
  return (e - n.ax) * n.nx + (t - n.az) * n.nz;
}
var Sy = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Cy = (e, t, n) => e + (t - e) * n;
function ofe(e) {
  if (e <= 840) return 0;
  if (e <= 895) return ds.TK * Sy((e - 840) / 55);
  if (e <= 955) {
    let t = (e - 895) / 60;
    return Cy(ds.TK, ds.H, 0.5 * t + 0.5 * Sy(t));
  }
  return e <= 1008 ? ds.H : ds.H * (1 - Sy((e - 1008) / 77));
}
function wy(e, t) {
  return ofe(t) * (1 - Sy((e + 1828) / 116));
}
function Ty(e, t) {
  let n = Sy((e + 2195) / 20),
    r = Sy((e + 1925) / 10),
    i = Cy(975, 1005, r),
    a = Cy(1008, 1030, r),
    o = Sy((t - 615) / 25) * (1 - Sy((t - i) / (a - i)));
  return ds.H * n * o;
}
function sfe(e) {
  return e < 845
    ? 6 * (1 - Sy((e - 830) / 15))
    : e > 1004
      ? 6 * Sy((e - ife) / 15)
      : 0;
}
function Ey(e, t) {
  if (e <= my.x0 || e >= my.x1 || t <= my.z0 || t >= my.z1) return 0;
  let n = xy(e, t),
    r = wy(e, t),
    i = Ty(e, t),
    a = n > 0 ? r : i,
    o = n > 0 ? n - 16 : -n - gy;
  if (o >= 6 || (t >= _y && t <= vy)) return a;
  let s = Vre(t) - 0.02 - afe;
  if (s >= Math.max(r, i) - 0.3) return a;
  if (o <= 0) return s;
  let c = sfe(t);
  return o >= c ? a : s + (a - s) * Sy(o / c);
}
function cfe(e, t) {
  if (e <= my.x0 || e >= my.x1 || t <= 800 || t >= 1170) return !1;
  let n = xy(e, t);
  return n > -13.6 && n < 17;
}
function lfe(e, t, n) {
  for (let t of [_y, vy]) t > e.minZ && t < e.maxZ && n.push(t);
  for (let r = 4; r < 256; r += 4) {
    let i = e.minX + r,
      a = e.minZ + r;
    (i > my.x0 && i < my.x1 && t.push(i), a > my.z0 && a < my.z1 && n.push(a));
  }
}
var Dy = { x0: -2300, x1: -1998, z0: 104, z1: 456 },
  Oy = (e, t, n, r) => n > Dy.x0 && e < Dy.x1 && r > Dy.z0 && t < Dy.z1,
  ky = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Ay = zs.ome - 16.75,
  jy = zs.ome + 16.75,
  My = { w0: -2265, w1: -2228, e1: -2078, e0: -2036 },
  Ny = 26,
  ufe = 28;
function dfe(e, t) {
  let n =
    e < My.w1
      ? ky((e - My.w0) / (My.w1 - My.w0))
      : e > My.e1
        ? 1 - ky((e - My.e1) / (My.e0 - My.e1))
        : 1;
  return n <= 0
    ? 0
    : n *
        (t < Ay
          ? ky((t - (Ay - Ny)) / Ny)
          : t > jy
            ? 1 - ky((t - jy) / ufe)
            : 1);
}
var Py = Hs.w,
  Fy = Hs.s - Py / 2 - Hs.n,
  Iy = Hs.x0 + Py / 2,
  ffe = Fy + (Hs.x1 - Iy);
function pfe(e, t) {
  let n = e < Hs.x0 + Py,
    r = t > Hs.s - Py;
  if (!n && !(r && e < Hs.x1)) return bs.B1;
  let i = 0;
  i =
    n && (!r || t - Hs.n <= Fy)
      ? Math.max(0, Math.min(Fy, t - Hs.n))
      : Fy + Math.max(0, Math.min(Hs.x1 - Iy, e - Iy));
  let a = i / ffe;
  return bs.B1 * (0.15 * ky(a) + 0.85 * a);
}
var Ly = zs.koshu - 16.75,
  Ry = zs.koshu + 16.75,
  zy = { z0: 262.25, z1: Ly },
  By = { z0: Ry, z1: 452 },
  Vy = { z: 360, x0: -2221.25, x1: -2292, half: 6.25 },
  Hy = { z0: 276, z1: Ly },
  Uy = 12;
function Wy(e) {
  return e < Ws.x0 - 0.01
    ? 0
    : e <= Ws.x1
      ? bs.BR
      : bs.BR * (1 - ky((e - Ws.x1) / (Ws.xEnd - Ws.x1)));
}
var Gy = 6.25,
  mfe = 16.75,
  Ky = 6.25;
function hfe(e, t) {
  let n = 0,
    r = (e, t) => {
      let r = t <= 0 ? 1 : 1 - ky(t / Uy);
      e * r > n && (n = e * r);
    };
  if (e > Ws.x0 - Uy && e < Ws.xEnd) {
    let n = Wy(Math.max(e, Ws.x0)),
      i = t < Ly ? Ly - t : t > Ry ? t - Ry : 0;
    (i <= 0 || !(e > -2208.75 && e < -2054.25)) && r(n, Math.max(i, Ws.x0 - e));
  }
  {
    let n = Math.abs(e - Rs.west);
    if (t > zy.z0 - Uy && t < Ly + 1) {
      let i = bs.BR * ky((Math.min(t, zy.z1) - zy.z0) / (zy.z1 - zy.z0));
      (n <= Gy || e < Rs.west) && r(i, n - Gy);
    }
    let i = Math.abs(e - Rs.west);
    t > Ry - 1 &&
      t < By.z1 &&
      r(bs.BR * (1 - ky((t - By.z0) / (By.z1 - By.z0))), i - mfe);
  }
  e < Vy.x0 + 1 &&
    e > Vy.x1 - Uy &&
    r(
      bs.BR * (1 - ky((Vy.x0 - e) / (Vy.x0 - Vy.x1))),
      Math.abs(t - Vy.z) - Vy.half,
    );
  {
    let n = Math.abs(e - Rs.eastS);
    if (t > Hy.z0 && t < Ly + 1) {
      let i = Wy(Rs.eastS) * ky((t - Hy.z0) / (Hy.z1 - Hy.z0));
      (n <= Ky || e > Rs.eastS) && r(i, n - Ky);
    }
  }
  return n;
}
function qy(e, t) {
  if (e <= Dy.x0 || e >= Dy.x1 || t <= Dy.z0 || t >= Dy.z1) return 0;
  if (e > Vs.x0 && e < Vs.x1 && t > Vs.z0 && t < Vs.z1) return pfe(e, t);
  if (e > Us.x0 && e < Us.x1 && t > Us.z0 && t < Us.z1) return Us.y;
  if (t < 210) {
    let n = dfe(e, t);
    return n > 0 ? bs.DIP * n : 0;
  }
  return t > 255 ? hfe(e, t) : 0;
}
function gfe(e, t, n) {
  let r = (t) => t > e.minX && t < e.maxX,
    i = (t) => t > e.minZ && t < e.maxZ;
  for (let e of [Vs.x0, Vs.x1, Hs.x0 + Py, Hs.x1, Us.x0, Us.x1])
    r(e) && t.push(e);
  for (let e of [Vs.z0, Vs.z1, Hs.s - Py, Ly, Ry, Us.z0, Us.z1])
    i(e) && n.push(e);
  for (let r = 4; r < 256; r += 4) {
    let i = e.minX + r,
      a = e.minZ + r;
    (i > Dy.x0 && i < Dy.x1 && t.push(i), a > Dy.z0 && a < Dy.z1 && n.push(a));
  }
}
var Jy = 170,
  Yy = as.slice(0, -1).map((e, t) => {
    let n = as[t + 1];
    return {
      ax: e[0],
      az: e[1],
      dx: n[0] - e[0],
      dz: n[1] - e[1],
      x0: Math.min(e[0], n[0]) - Jy,
      x1: Math.max(e[0], n[0]) + Jy,
      z0: Math.min(e[1], n[1]) - Jy,
      z1: Math.max(e[1], n[1]) + Jy,
    };
  }),
  _fe = Math.min(...Yy.map((e) => e.x0)),
  vfe = Math.max(...Yy.map((e) => e.x1)),
  yfe = Math.min(...Yy.map((e) => e.z0)),
  bfe = Math.max(...Yy.map((e) => e.z1));
function Xy(e, t) {
  if (e < _fe || e > vfe || t < yfe || t > bfe) return 1;
  let n = 28900;
  for (let r = 0; r < Yy.length; r++) {
    let i = Yy[r];
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
  if (r >= Jy) return 1;
  if (r <= 20) return 0;
  let i = (r - 20) / 150;
  return i * i * (3 - 2 * i);
}
var Zy = Lv.height,
  Qy = -139,
  $y = -1191,
  eb = -1196,
  tb = -175,
  nb = -232,
  rb = -1250,
  ib = [-232, -1200],
  ab = [-480, -1290],
  xfe = 14.5,
  ob = -480,
  sb = -1520,
  cb = 250,
  Sfe = 700,
  lb = ab[0] - ib[0],
  ub = ab[1] - ib[1],
  db = Math.hypot(lb, ub),
  fb = lb / db,
  pb = ub / db,
  Cfe = -fb > 0 ? pb : -pb,
  wfe = -fb > 0 ? -fb : fb,
  Tfe = rs.findIndex((e) => e[1] <= rb),
  mb = rs.slice(Tfe);
{
  let e = mb[mb.length - 2],
    t = mb[mb.length - 1],
    n = 800 / Math.hypot(t[0] - e[0], t[1] - e[1]);
  mb.push([t[0] + (t[0] - e[0]) * n, t[1] + (t[1] - e[1]) * n]);
}
var hb = new Float64Array((mb.length - 1) * 6);
for (let e = 0; e + 1 < mb.length; e++) {
  let [t, n] = mb[e],
    [r, i] = mb[e + 1],
    a = Math.hypot(r - t, i - n),
    o = (r - t) / a,
    s = (i - n) / a;
  hb.set([t, n, s, -o, n, i], e * 6);
}
function gb(e, t) {
  let n = hb.length / 6,
    r = 0;
  for (; r < n - 1 && t < hb[r * 6 + 5];) r++;
  let i = r * 6;
  return (e - hb[i]) * hb[i + 2] + (t - hb[i + 1]) * hb[i + 3];
}
function Efe(e) {
  let t = hb.length / 6,
    n = 0;
  for (; n < t - 1 && e < hb[n * 6 + 5];) n++;
  let r = hb[n * 6 + 2];
  return (-14.5 - gb(0, e)) / r;
}
function _b(e) {
  let t = hb.length / 6,
    n = 0;
  for (; n < t - 1 && e < hb[n * 6 + 5];) n++;
  return (24 - gb(0, e)) / hb[n * 6 + 2];
}
var vb = Cv.find((e) => e.id === `kototoi`),
  yb = vb.at,
  bb = bp(vb, yv),
  xb = Efe(yb),
  Sb = _b(yb) - 1,
  Cb = 25;
function wb(e) {
  if (e <= xb) return 1;
  if (e >= -30) return 0;
  let t = -30 - xb,
    n = Cb,
    r = e - xb,
    i = 1 / (t - n),
    a;
  if (r < n) a = (i * r * r) / 50;
  else if (r > t - n) {
    let e = t - r;
    a = 1 - (i * e * e) / 50;
  } else a = i * (r - n / 2);
  return 1 - a;
}
var Tb = Lv.stairs.map((e) => {
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
  Eb = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * e * (e * (e * 6 - 15) + 10));
function Dfe(e, t) {
  let n;
  if (t >= -1250) {
    if (e >= -139) return 0;
    if (e >= -232) return t >= (e >= -175 ? -1191 : -1196) ? 0 : 1;
    n = 1;
  } else {
    let r = gb(e, t);
    if (r <= 14.5) return 0;
    n = r >= 24 ? 1 : Eb((r - xfe) / 9.5);
  }
  if (e < -232) {
    let r = (e - ib[0]) * Cfe + (t - ib[1]) * wfe;
    if (r >= 45) return 0;
    r > 0 && (n *= 1 - Eb(r / 45));
  }
  if (e < ob || t < sb) {
    let r = e < ob ? ob - e : 0,
      i = t < sb ? sb - t : 0,
      a = Math.sqrt(r * r + i * i);
    if (a >= Sfe) return 0;
    (a > cb && (n *= 1 - Eb((a - cb) / 450)), n > 0 && (n *= Xy(e, t)));
  }
  return n;
}
