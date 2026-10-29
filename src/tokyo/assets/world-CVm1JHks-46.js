// tokyo/assets/world-CVm1JHks 46 — math
// Lines 14593-14876 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var md = Symbol(`sites-next-frame`),
  hd = {
    jobs: 0,
    steps: 0,
    cancelled: 0,
    failed: 0,
    stepMaxMs: 0,
    stepMaxLabel: ``,
    slices: 0,
    long: [],
    concurrentOpenFrames: 0,
    openMaxJobs: 0,
    tokenWaits: 0,
    frameMaxMs: 0,
    framesOver4: 0,
    framesOver8: 0,
    msTotal: 0,
    msFast: 0,
  },
  gd = 4,
  _d = { v: `` },
  vd =
    typeof location < `u` && /[?&]sitefast=0/.test(location.search) ? 2.5 : 1,
  yd = !1;
function bd(e) {
  yd = e;
}
var xd = !1;
function Sd(e) {
  xd = e;
}
var Cd = -1,
  wd = 0;
function Td(e) {
  return !xd && e.budgetMs <= 6;
}
function Ed(e) {
  return Td(e) ? e.frameNo === Cd && wd >= (yd ? vd : 2.5) : !1;
}
var Dd = 0,
  Od = null,
  kd = !1;
function Ad(e) {
  if (e.frameNo !== Cd) {
    if (kd) {
      let e = hd;
      (wd > e.frameMaxMs && (e.frameMaxMs = Math.round(wd * 100) / 100),
        wd > 4 && e.framesOver4++,
        wd > 8 && e.framesOver8++);
    }
    ((Cd = e.frameNo), (wd = 0), (Dd = 0), (Od = null), (kd = Td(e)));
  }
}
function jd(e, t, n, r) {
  e &&
    (Ad(e),
    (wd += t),
    (hd.msTotal += t),
    yd && (hd.msFast += t),
    !(r || n === Od) &&
      ((Od = n),
      Td(e) &&
        (++Dd === 2 && hd.concurrentOpenFrames++,
        Dd > hd.openMaxJobs && (hd.openMaxJobs = Dd))));
}
var Md = null;
function Nd(e, t) {
  return !Td(e) || Md === null || Md === t;
}
function Pd(e, t, n) {
  if (t < gd) return;
  let r = hd.long;
  (r.length >= 48 && r.shift(),
    r.push([Math.round(n), Math.round(t * 10) / 10, e]));
}
var Fd = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  Id = new Set(),
  Ld = class {
    label;
    it;
    work;
    state = `queued`;
    steps = 0;
    cancelled = !1;
    done;
    constructor(e, t, n) {
      ((this.label = e),
        (this.it = t),
        (this.work = n),
        (this.done = this.drive()));
    }
    cancel() {
      this.state !== `done` &&
        this.state !== `failed` &&
        this.state !== `cancelled` &&
        ((this.cancelled = !0), Md === this && (Md = null));
    }
    close() {
      try {
        this.it.return?.(void 0);
      } catch {}
    }
    async drive() {
      (hd.jobs++, Id.add(this));
      try {
        let e = this.work;
        for (
          e ? await e.nextFrame() : await Promise.resolve(),
            hd.slices++,
            this.state = `running`;
          ;
        ) {
          if (this.cancelled)
            return (
              this.close(),
              (this.state = `cancelled`),
              hd.cancelled++,
              `cancelled`
            );
          if (e && Ed(e)) {
            (await e.nextFrame(), hd.slices++);
            continue;
          }
          if (e && !Nd(e, this)) {
            (hd.tokenWaits++, await e.nextFrame(), hd.slices++);
            continue;
          }
          (e && Td(e) && (Md = this), (_d.v = ``));
          let t = Fd(),
            n = this.it.next(),
            r = Fd() - t;
          if (
            (jd(e, r, this, n.value === md),
            this.steps++,
            hd.steps++,
            r > hd.stepMaxMs &&
              ((hd.stepMaxMs = Math.round(r * 100) / 100),
              (hd.stepMaxLabel = this.label)),
            r >= gd &&
              Pd(
                `step ${this.label}${_d.v ? `/` + _d.v : ``}#${this.steps}`,
                r,
                t,
              ),
            n.done)
          )
            return ((this.state = `done`), `done`);
          n.value === md
            ? (Md === this && (Md = null),
              e ? await e.nextFrame() : await Promise.resolve(),
              hd.slices++)
            : e && e.remaining() <= 0 && (await e.nextFrame(), hd.slices++);
        }
      } catch (e) {
        throw ((this.state = `failed`), hd.failed++, e);
      } finally {
        (Md === this && (Md = null), Id.delete(this));
      }
    }
  };
function Rd(e, t, n) {
  return new Ld(t, n, e ?? null);
}
function zd(e) {
  let t = 0;
  for (let n of Id) n.label.startsWith(e) && (n.cancel(), t++);
  return t;
}
var Bd = 0,
  Vd = 1,
  Hd = 2,
  Ud = 3,
  Wd = 4,
  Gd = [`none`, `loading`, `building`, `ready`, `failed`],
  Kd = 0.25,
  qd = 256,
  Jd = 2,
  Yd = 45,
  Xd = 1,
  Zd = 8,
  Qd = 1500,
  $d = 1,
  ef = 3,
  tf = 3,
  nf = 2,
  rf = 12,
  af = [null],
  of = [],
  sf = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  cf = 8;
function lf(e) {
  return new Promise((t) => setTimeout(t, Math.max(0, e)));
}
function uf(e, t) {
  return new Promise((n) => {
    let r = !1,
      i = () => {
        r || ((r = !0), clearTimeout(a), n());
      },
      a = setTimeout(i, Math.max(0, t));
    Promise.all(e).then(i, i);
  });
}
var df = class {
    s;
    tier;
    state = Bd;
    gen = 0;
    job = null;
    handle = null;
    col = null;
    scope = null;
    visible = !1;
    cached = !1;
    hiddenAt = 0;
    buildMs = 0;
    bytes = 0;
    builds = 0;
    artGen = -1;
    builtState = 0;
    lives = [];
    peds = [];
    spots = [];
    spotOff = [];
    indoorOff = null;
    label;
    constructor(e, t) {
      ((this.s = e), (this.tier = t), (this.label = `sites:${e.meta.id}:${t}`));
    }
    get busy() {
      return this.state === Vd || this.state === Hd;
    }
  },
  ff = class {
    meta;
    site;
    index;
    id;
    shown = `far`;
    mid;
    near;
    interior;
    d = 1 / 0;
    radii = { midB: 0, midD: 0, nearB: 0, nearD: 0, intB: 0, intD: 0 };
    cos;
    sin;
    mods = 0;
    modsPromise = null;
    scene = null;
    interiorMod = null;
    arts = [];
    paintState = 0;
    quarantined = !1;
    hasNear;
    hasInt;
    stamp = -1;
    active = !1;
    proxyHidden = !1;
    nearCalls = 0;
    constructor(e, t, n, r) {
      ((this.meta = e),
        (this.site = t),
        (this.index = n),
        (this.id = e.id),
        (this.mid = new df(this, `mid`)),
        (this.near = new df(this, `near`)),
        (this.interior = new df(this, `interior`)),
        (this.cos = Math.cos(t.facing)),
        (this.sin = Math.sin(t.facing)),
        (this.hasNear = r.hasScene(e.id)),
        (this.hasInt = e.interior !== `none` && r.hasInterior(e.id)));
    }
    tierOf(e) {
      return e === `mid` ? this.mid : e === `near` ? this.near : this.interior;
    }
  };
function pf(e, t, n) {
  let r = Math.max(e.minX - t, 0, t - e.maxX),
    i = Math.max(e.minZ - n, 0, n - e.maxZ);
  return Math.sqrt(r * r + i * i);
}
function* mf(e) {
  od(e.lm, e.meta.proxy, `mid`);
}
