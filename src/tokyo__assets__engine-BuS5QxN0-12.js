// tokyo__assets__engine-BuS5QxN0 12 — math
// Lines 4056-4394 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function Pi() {
  let e = null;
  try {
    let t = B(ai);
    e = t ? JSON.parse(t) : null;
  } catch {
    e = null;
  }
  let t = Date.now(),
    n =
      !!e &&
      Number.isFinite(e.t) &&
      t >= e.t &&
      t - e.t < 36e5 &&
      e.vis === `visible`,
    r = n ? Math.min(9, (Number(e.n) || 0) + 1) : 0,
    i = {
      at: t,
      t,
      vis: document.visibilityState === `hidden` ? `hidden` : `visible`,
      n: r,
      ph: `load`,
    },
    a = () => {
      ((i.t = Date.now()), V(ai, JSON.stringify(i)));
    };
  (a(),
    document.addEventListener(`visibilitychange`, () => {
      ((i.vis = document.visibilityState === `hidden` ? `hidden` : `visible`),
        a());
    }),
    window.addEventListener(`pagehide`, () => oi(ai)),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    (Fi = i),
    (Ii = a));
  let o = Ai();
  return (
    n
      ? Ci(r >= 2 ? { safeQ: `low`, lowmem: 2 } : { lowmem: 1 })
      : o.killedElsewhere &&
        (Ci({ lowmem: 1 }),
        (Number(B(`tgta-lowmem`)) || 0) < 1 && V(ri, `1`),
        V(ii, String(t))),
    { killed: n, count: r, duringLoad: n && e.ph === `load` }
  );
}
var Fi = null,
  Ii = null;
function Li(e) {
  (ji && Mi && ((ji.p = 1), Mi()),
    Fi && Ii && ((Fi.ph = `play`), e && (Fi.n = 0), Ii()));
}
var Ri = {
  zh: {
    title: `無法啟動 3D 繪圖（WebGL）`,
    reload: `重新載入`,
    help: `若仍無法啟動：顯示記憶體不足當機後，瀏覽器會暫停 3D 約 2 分鐘。請關閉其他分頁或 App，等候約 2 分鐘再重新載入。電腦請確認瀏覽器已開啟「硬體加速」。`,
  },
  en: {
    title: `3D graphics (WebGL) could not start.`,
    reload: `Reload`,
    help: `If it still does not start: after a graphics crash the browser pauses 3D for about 2 minutes. Close other tabs or apps and wait about 2 minutes before reloading. On a computer, check that hardware acceleration is on.`,
  },
};
function zi(e, t, n) {
  if ((console.error(`[boot] WebGL context unavailable`, e), n))
    try {
      (fi(1), V(ii, String(Date.now())));
    } catch {}
  let r = Ri[t === `en` ? `en` : `zh`],
    i = Error(`${r.title} ${r.help}`);
  return ((i.name = `WebGLUnavailable`), i);
}
function Bi(e) {
  return e?.name === `WebGLUnavailable`;
}
function Vi(e) {
  let t = document.getElementById(`loader`),
    n = document.getElementById(`ld-err`);
  if (!t || !n || !t.isConnected) return !1;
  let r = Ri[e ? `en` : `zh`];
  (t.classList.add(`failed`),
    t.setAttribute(`role`, `group`),
    t.setAttribute(`aria-label`, e ? `Loading interrupted` : `載入中斷`),
    (n.textContent = ``),
    (n.style.pointerEvents = `auto`));
  let i = document.createElement(`div`);
  i.textContent = r.title;
  let a = document.createElement(`button`);
  ((a.type = `button`),
    (a.textContent = r.reload),
    (a.style.margin = `14px auto 16px`),
    a.addEventListener(`click`, () => {
      ((a.disabled = !0), location.reload());
    }));
  let o = document.createElement(`div`);
  return (
    (o.textContent = r.help),
    (o.style.cssText = `font-size:13px;line-height:1.6;opacity:.8;font-weight:500`),
    n.append(i, a, o),
    !0
  );
}
var Hi = 0,
  Ui = null;
function Wi() {
  return (
    Ui ||
      (Hi++,
      (Ui = t(() => import(`./analytics-B76dRwr5.js`), [])),
      Ui.then(
        () => Hi--,
        () => {
          (Hi--, (Ui = null));
        },
      )),
    Ui
  );
}
function Gi() {
  return Hi > 0;
}
function Ki(e, t) {}
var qi =
    typeof location < `u` && new URLSearchParams(location.search).has(`prof`),
  Ji = {
    on: qi,
    stage: ``,
    log: [],
    seg(e, t) {
      if (!qi) return;
      let n = performance.now();
      if ((this.log.push([n, e, n - t]), this.log.length > 4e3)) {
        this.log.splice(0, 2e3);
        try {
          performance.clearMeasures();
        } catch {}
      }
      try {
        performance.measure(e, { start: t, end: n });
      } catch {}
    },
  };
qi && typeof window < `u` && (window.__prof = Ji);
var Yi = null,
  Xi = class e {
    pos;
    nor;
    uv;
    ca;
    idx;
    n = 0;
    ni = 0;
    r = 255;
    g = 255;
    b = 255;
    rough = 230;
    metal = 0;
    emis = 0;
    flags = 0;
    static scratch() {
      return ((Yi ||= new e(16384, 24576)), Yi.reset());
    }
    static releaseScratch() {
      Yi = null;
    }
    constructor(e = 4096, t = Math.ceil(e * 1.5)) {
      let n = Math.max(16, e);
      ((this.pos = new Float32Array(n * 3)),
        (this.nor = new Float32Array(n * 3)),
        (this.uv = new Float32Array(n * 2)),
        (this.ca = new Uint8Array(n * 8)),
        (this.idx = new Uint32Array(Math.max(24, t))));
    }
    reserve(e, t = Math.ceil(e * 1.5)) {
      return (this.growV(this.n + e, !0), this.growI(this.ni + t, !0), this);
    }
    setColor(e, t, n) {
      return ((this.r = e & 255), (this.g = t & 255), (this.b = n & 255), this);
    }
    setMaterial(e, t = 0, n = 0, r = 0) {
      return (
        (this.rough = Math.round(Math.min(1, Math.max(0, e)) * 255)),
        (this.metal = Math.round(Math.min(1, Math.max(0, t)) * 255)),
        (this.emis = Math.round(Math.min(1, Math.max(0, n)) * 255)),
        (this.flags = r & 255),
        this
      );
    }
    growV(e, t = !1) {
      let n = this.pos.length / 3;
      if (e <= n) return;
      if (t) n = e;
      else for (; n < e;) n *= 2;
      let r = (e, t, r) => {
          let i = new e.constructor(n * t);
          return (i.set(e.subarray(0, r * t)), i);
        },
        i = this.n;
      ((this.pos = r(this.pos, 3, i)),
        (this.nor = r(this.nor, 3, i)),
        (this.uv = r(this.uv, 2, i)),
        (this.ca = r(this.ca, 8, i)));
    }
    growI(e, t = !1) {
      let n = this.idx.length;
      if (e <= n) return;
      if (t) n = e;
      else for (; n < e;) n *= 2;
      let r = new Uint32Array(n);
      (r.set(this.idx.subarray(0, this.ni)), (this.idx = r));
    }
    vertex(e, t, n, r, i, a, o, s) {
      let c = this.n;
      c >= this.pos.length / 3 && this.growV(c + 1);
      let l = c * 3,
        u = c * 2,
        d = c * 8,
        f = this.pos,
        p = this.nor,
        m = this.uv,
        h = this.ca;
      return (
        (f[l] = e),
        (f[l + 1] = t),
        (f[l + 2] = n),
        (p[l] = r),
        (p[l + 1] = i),
        (p[l + 2] = a),
        (m[u] = o),
        (m[u + 1] = s),
        (h[d] = this.r),
        (h[d + 1] = this.g),
        (h[d + 2] = this.b),
        (h[d + 3] = 255),
        (h[d + 4] = this.rough),
        (h[d + 5] = this.metal),
        (h[d + 6] = this.emis),
        (h[d + 7] = this.flags),
        (this.n = c + 1),
        c
      );
    }
    tri(e, t, n) {
      this.ni + 3 > this.idx.length && this.growI(this.ni + 3);
      let r = this.idx;
      return ((r[this.ni++] = e), (r[this.ni++] = t), (r[this.ni++] = n), this);
    }
    quad(e, t, n, r, i, a, o, s, c, l, u, d, f = 0, p = 0, m = 1, h = 1) {
      let g = r - e,
        _ = i - t,
        v = a - n,
        y = l - e,
        b = u - t,
        ee = d - n,
        x = _ * ee - v * b,
        S = v * y - g * ee,
        C = g * b - _ * y,
        w = Math.sqrt(x * x + S * S + C * C) || 1;
      ((x /= w), (S /= w), (C /= w));
      let T = this.vertex(e, t, n, x, S, C, f, p);
      return (
        this.vertex(r, i, a, x, S, C, m, p),
        this.vertex(o, s, c, x, S, C, m, h),
        this.vertex(l, u, d, x, S, C, f, h),
        this.tri(T, T + 1, T + 2).tri(T, T + 2, T + 3)
      );
    }
    box(e, t, n, r, i, a, o = 0, s = 0, c = 1, l = 1, u = !1) {
      let d = e - r,
        f = e + r,
        p = t - i,
        m = t + i,
        h = n - a,
        g = n + a;
      return (
        this.quad(d, p, g, f, p, g, f, m, g, d, m, g, o, s, c, l),
        this.quad(f, p, h, d, p, h, d, m, h, f, m, h, o, s, c, l),
        this.quad(f, p, g, f, p, h, f, m, h, f, m, g, o, s, c, l),
        this.quad(d, p, h, d, p, g, d, m, g, d, m, h, o, s, c, l),
        this.quad(d, m, g, f, m, g, f, m, h, d, m, h, o, s, c, l),
        u && this.quad(d, p, h, f, p, h, f, p, g, d, p, g, o, s, c, l),
        this
      );
    }
    build() {
      let e = this.n,
        t = new ce();
      (t.setAttribute(`position`, new ue(this.pos.slice(0, e * 3), 3)),
        t.setAttribute(`normal`, new ue(this.nor.slice(0, e * 3), 3)),
        t.setAttribute(`uv`, new ue(this.uv.slice(0, e * 2), 2)));
      let n = new me(this.ca.slice(0, e * 8), 8);
      (t.setAttribute(`color`, new oe(n, 3, 0, !0)),
        t.setAttribute(`aCity`, new oe(n, 4, 4, !0)));
      let r = e <= 65535 ? new Uint16Array(this.ni) : new Uint32Array(this.ni);
      return (
        r.set(this.idx.subarray(0, this.ni)),
        t.setIndex(new ue(r, 1)),
        t.computeBoundingSphere(),
        t.computeBoundingBox(),
        t
      );
    }
    reset() {
      return ((this.n = 0), (this.ni = 0), this);
    }
  },
  Zi = 1 << 20;
function Qi(e, t) {
  let n, r;
  switch (t.format) {
    case a:
      ((n = e.RGBA), (r = 4));
      break;
    case ge:
      ((n = e.RG), (r = 2));
      break;
    case ae:
      ((n = e.RED), (r = 1));
      break;
    default:
      return null;
  }
  switch (t.type) {
    case p:
      return { format: n, type: e.UNSIGNED_BYTE, comps: r, bpc: 1 };
    case E:
      return { format: n, type: e.HALF_FLOAT, comps: r, bpc: 2 };
    case te:
      return { format: n, type: e.FLOAT, comps: r, bpc: 4 };
    default:
      return null;
  }
}
var $i = (e) =>
  (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
  (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas);
