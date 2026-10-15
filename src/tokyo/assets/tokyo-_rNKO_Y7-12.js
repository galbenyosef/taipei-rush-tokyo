// tokyo/assets/tokyo-_rNKO_Y7 12 — math
// Lines 5346-5643 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function Or(e) {
  let t = e.dataset.bounds,
    n = e.dataset.water.westX,
    r = e.dataset.water.northZ,
    i = n - 252,
    a = r - 105,
    o = (e, t) => {
      let o = Tr.get(e);
      if (!o) {
        let t = e.createLinearGradient(i, 0, n, 0);
        (t.addColorStop(0, X.water),
          t.addColorStop(0.85, X.water),
          t.addColorStop(1, X.waterHi));
        let s = e.createLinearGradient(0, a, 0, r);
        (s.addColorStop(0, X.water),
          s.addColorStop(0.7, X.water),
          s.addColorStop(1, X.waterHi),
          Tr.set(e, (o = [t, s])));
      }
      ((e.fillStyle = o[0]),
        e.fillRect(i, t.minZ - 10, n - i, t.maxZ - t.minZ + 20),
        (e.fillStyle = o[1]),
        e.fillRect(i, a, t.maxX - i + 10, r - a));
    };
  return {
    base: Er,
    view: Dr,
    city: t,
    ground: X.terrain,
    bearing: 0,
    relief: (e) => Ar(e, { minX: -1800, maxX: 1800, minZ: -2400, maxZ: 1500 }),
    backdrop(e, t) {
      (t.minX < i &&
        ((e.fillStyle = X.farCity),
        e.fillRect(
          t.minX - 10,
          t.minZ - 10,
          i - t.minX + 10,
          t.maxZ - t.minZ + 20,
        )),
        o(e, t));
    },
    under(e, i) {
      ((e.fillStyle = X.riverside),
        e.fillRect(n, r, t.minX - n, 3e3),
        e.fillRect(n, r, 3e3, t.minZ - r),
        i.pxPerM > 0.3 &&
          ((e.strokeStyle = X.bikePath),
          (e.lineWidth = Math.max(2, 1.2 * (1 / i.pxPerM))),
          e.setLineDash([10, 6]),
          e.beginPath(),
          e.moveTo(n + 22, 1200),
          e.lineTo(n + 22, r + 22),
          e.lineTo(2e3, r + 22),
          e.stroke(),
          e.setLineDash([])));
    },
    labels(e) {
      let { g: o, s, W: c, H: l, X: u, Z: d } = e;
      ((o.font = `italic 600 ${Math.round(Math.max(12, Math.min(18, 15 * Math.sqrt(s / 0.5))))}px ${e.font}`),
        (o.fillStyle = `rgba(140,200,255,0.7)`));
      let f = u((i + n) / 2),
        p = Math.max(90, Math.min(l - 140, d(e.cz) - 40));
      f > -20 &&
        f < c + 20 &&
        kr(o, e.t({ zh: `淡水河`, en: `Tamsui River` }), f, p);
      let m = u((n + t.minX) / 2);
      s >= 0.35 &&
        m > -20 &&
        m < c + 20 &&
        ((o.fillStyle = `rgba(150,230,170,0.75)`),
        kr(
          o,
          e.t({ zh: `河濱公園`, en: `Riverside Park` }),
          m,
          Math.max(90, Math.min(l - 160, d(e.cz) + 60)),
        ),
        (o.fillStyle = `rgba(140,200,255,0.7)`));
      let h = d((a + r) / 2),
        g = Math.max(90, Math.min(c - 240, u(e.cx)));
      h > -20 &&
        h < l + 20 &&
        o.fillText(e.t({ zh: `基 隆 河`, en: `Keelung River` }), g, h);
      let _ = u(i - 200);
      _ > -60 &&
        _ < c + 100 &&
        ((o.fillStyle = `rgba(255,255,255,0.22)`),
        (o.font = `800 ${Math.round(Math.max(13, Math.min(24, 20 * Math.sqrt(s / 0.5))))}px ${e.font}`),
        kr(
          o,
          e.t({ zh: `新北市`, en: `NEW TAIPEI` }),
          _,
          Math.max(80, Math.min(l - 80, d(e.cz))),
        ));
    },
  };
}
function kr(e, t, n, r) {
  if (/[㐀-鿿]/.test(t)) {
    let i = parseFloat(/(\d+(?:\.\d+)?)px/.exec(e.font)?.[1] ?? `14`),
      a = [...t],
      o = i * 1.15,
      s = r - ((a.length - 1) * o) / 2;
    a.forEach((t, r) => e.fillText(t, n, s + r * o));
  } else
    (e.save(),
      e.translate(n, r),
      e.rotate(-Math.PI / 2),
      e.fillText(t, 0, 0),
      e.restore());
}
function Ar(e, t) {
  let n = Math.ceil((t.maxX - t.minX) / 12),
    r = Math.ceil((t.maxZ - t.minZ) / 12),
    i = new Float32Array(n * r);
  for (let a = 0; a < r; a++)
    for (let r = 0; r < n; r++)
      i[a * n + r] = e.hillHeight(
        t.minX + (r + 0.5) * 12,
        t.minZ + (a + 0.5) * 12,
      );
  let a = document.createElement(`canvas`);
  ((a.width = n), (a.height = r));
  let o = a.getContext(`2d`),
    s = o.createImageData(n, r),
    c = s.data,
    l = [22, 32, 25];
  for (let e = 0; e < r; e++)
    for (let t = 0; t < n; t++) {
      let a = e * n + t,
        o = i[a],
        s = i[e * n + Math.max(0, t - 1)],
        u = i[e * n + Math.min(n - 1, t + 1)],
        d = i[Math.max(0, e - 1) * n + t],
        f = i[Math.min(r - 1, e + 1) * n + t],
        p = (s - u) / 24,
        m = (d - f) / 24,
        h = 1 / Math.hypot(p, 1, m),
        g = Math.max(0, (p * -0.6 + 0.58 + m * -0.55) * h),
        _ = Math.min(1, o / 500),
        v = o > 1 ? 0.25 + _ * 0.9 : 0,
        y = o > 1 ? (g - 0.58) * 1.6 : 0,
        b = o > 1 && Math.floor(o / 60) !== Math.floor(u / 60) ? -0.08 : 0,
        x = l[0] * (1 + v * 0.4 + y + b),
        S = l[1] * (1 + v * 0.9 + y + b),
        C = l[2] * (1 + v * 0.45 + y + b);
      ((c[a * 4] = Math.max(0, Math.min(255, x))),
        (c[a * 4 + 1] = Math.max(0, Math.min(255, S))),
        (c[a * 4 + 2] = Math.max(0, Math.min(255, C))),
        (c[a * 4 + 3] = 255));
    }
  return (
    o.putImageData(s, 0, 0),
    { canvas: a, ...t, maxX: t.minX + n * 12, maxZ: t.minZ + r * 12 }
  );
}
function jr(e, t, n) {
  let r = t.look.base,
    i = {
      minX: Math.max(r.minX, n.minX),
      maxX: Math.min(r.maxX, n.maxX),
      minZ: Math.max(r.minZ, n.minZ),
      maxZ: Math.min(r.maxZ, n.maxZ),
    };
  i.maxX <= i.minX ||
    i.maxZ <= i.minZ ||
    (e.save(),
    e.beginPath(),
    e.rect(i.minX, i.minZ, i.maxX - i.minX, i.maxZ - i.minZ),
    e.clip(),
    Cr(e, t.plan, {
      ...i,
      look: t.look,
      pxPerM: t.scale * 0.75,
      hills: t.hills,
      detail: !0,
      stations: t.stations,
    }),
    t.lines?.length && Pr(e, t.lines, t.scale * 0.75, !1),
    e.restore());
}
function Mr(e, t = 1 / 0) {
  let n = e.look.base,
    r = Math.min(e.scale, t / Math.max(n.maxX - n.minX, n.maxZ - n.minZ)),
    i = document.createElement(`canvas`);
  ((i.width = Math.ceil((n.maxX - n.minX) * r)),
    (i.height = Math.ceil((n.maxZ - n.minZ) * r)));
  let a = i.getContext(`2d`, { alpha: !1 });
  return (
    a.setTransform(r, 0, 0, r, -n.minX * r, -n.minZ * r),
    Cr(a, e.plan, {
      ...n,
      look: e.look,
      pxPerM: r * 0.75,
      hills: e.hills,
      detail: !0,
      stations: e.stations,
    }),
    e.lines?.length && Pr(a, e.lines, r * 0.75, !1),
    { canvas: i, scale: r, ...n }
  );
}
var Nr = class {
  src;
  canvas;
  g;
  minX = 0;
  maxX = 0;
  minZ = 0;
  maxZ = 0;
  ready = !1;
  paints = 0;
  px = 0;
  constructor(e) {
    ((this.src = e),
      (this.canvas = document.createElement(`canvas`)),
      (this.canvas.width = this.canvas.height = 1),
      (this.g = this.canvas.getContext(`2d`, { alpha: !1 })));
  }
  get scale() {
    return this.src.scale;
  }
  setSize(e, t) {
    let n = Math.ceil((e + t) * 2 * this.src.scale);
    n !== this.px &&
      ((this.px = n),
      (this.canvas.width = this.canvas.height = n),
      (this.ready = !1));
  }
  covers(e, t) {
    if (!this.ready) return !1;
    let n = this.src.look.base,
      r = Math.max(n.minX, e.minX),
      i = Math.min(n.maxX, e.maxX),
      a = Math.max(n.minZ, e.minZ),
      o = Math.min(n.maxZ, e.maxZ);
    return (
      i <= r ||
      o <= a ||
      ((r - t >= this.minX || this.minX <= n.minX) &&
        (i + t <= this.maxX || this.maxX >= n.maxX) &&
        (a - t >= this.minZ || this.minZ <= n.minZ) &&
        (o + t <= this.maxZ || this.maxZ >= n.maxZ))
    );
  }
  paint(e, t) {
    if (this.px <= 1) return;
    let n = this.src.scale,
      r = this.src.look.base,
      i = this.px,
      a = Math.round((e - r.minX) * n - i / 2),
      o = Math.round((t - r.minZ) * n - i / 2);
    ((this.minX = r.minX + a / n),
      (this.minZ = r.minZ + o / n),
      (this.maxX = this.minX + i / n),
      (this.maxZ = this.minZ + i / n));
    let s = this.g;
    (s.setTransform(1, 0, 0, 1, 0, 0),
      (s.fillStyle = this.src.look.ground),
      s.fillRect(0, 0, i, i),
      s.setTransform(n, 0, 0, n, -this.minX * n, -this.minZ * n),
      jr(s, this.src, this),
      s.setTransform(1, 0, 0, 1, 0, 0),
      (this.ready = !0),
      this.paints++);
  }
  release() {
    ((this.px = 0), (this.ready = !1), nt(this.canvas));
  }
};
function Pr(e, t, n, r) {
  let i = 1 / n;
  (e.save(), (e.lineJoin = `round`), (e.lineCap = `round`));
  for (let n of [0, 1])
    for (let a of t) {
      let t = a.points;
      if (!(!t || t.length < 2)) {
        (e.beginPath(), e.moveTo(t[0].x, t[0].z));
        for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].z);
        if (n === 0) {
          if (!a.elevated) continue;
          (e.setLineDash([]),
            (e.strokeStyle = `rgba(8,10,16,0.7)`),
            (e.lineWidth = (r ? 8 : 5.5) * i),
            e.stroke());
        } else
          ((e.strokeStyle = a.color),
            (e.globalAlpha = a.elevated ? 0.95 : 0.75),
            a.elevated
              ? (e.setLineDash([]), (e.lineWidth = (r ? 5 : 3.2) * i))
              : (e.setLineDash([7 * i, 5 * i]),
                (e.lineWidth = (r ? 3.4 : 2.2) * i)),
            e.stroke(),
            (e.globalAlpha = 1));
      }
    }
  (e.setLineDash([]), e.restore());
}
