// tokyo__assets__world-Bo9wkXrT 46 — math
// Lines 14466-14749 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
var Qu = Symbol(`sites-next-frame`),
  $u = {
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
  ed = 4,
  td = { v: `` },
  nd =
    typeof location < `u` && /[?&]sitefast=0/.test(location.search) ? 2.5 : 1,
  rd = !1;
function id(e) {
  rd = e;
}
var ad = !1;
function od(e) {
  ad = e;
}
var sd = -1,
  cd = 0;
function ld(e) {
  return !ad && e.budgetMs <= 6;
}
function ud(e) {
  return ld(e) ? e.frameNo === sd && cd >= (rd ? nd : 2.5) : !1;
}
var dd = 0,
  fd = null,
  pd = !1;
function md(e) {
  if (e.frameNo !== sd) {
    if (pd) {
      let e = $u;
      (cd > e.frameMaxMs && (e.frameMaxMs = Math.round(cd * 100) / 100),
        cd > 4 && e.framesOver4++,
        cd > 8 && e.framesOver8++);
    }
    ((sd = e.frameNo), (cd = 0), (dd = 0), (fd = null), (pd = ld(e)));
  }
}
function hd(e, t, n, r) {
  e &&
    (md(e),
    (cd += t),
    ($u.msTotal += t),
    rd && ($u.msFast += t),
    !(r || n === fd) &&
      ((fd = n),
      ld(e) &&
        (++dd === 2 && $u.concurrentOpenFrames++,
        dd > $u.openMaxJobs && ($u.openMaxJobs = dd))));
}
var gd = null;
function _d(e, t) {
  return !ld(e) || gd === null || gd === t;
}
function vd(e, t, n) {
  if (t < ed) return;
  let r = $u.long;
  (r.length >= 48 && r.shift(),
    r.push([Math.round(n), Math.round(t * 10) / 10, e]));
}
var yd = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  bd = new Set(),
  xd = class {
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
        ((this.cancelled = !0), gd === this && (gd = null));
    }
    close() {
      try {
        this.it.return?.(void 0);
      } catch {}
    }
    async drive() {
      ($u.jobs++, bd.add(this));
      try {
        let e = this.work;
        for (
          e ? await e.nextFrame() : await Promise.resolve(),
            $u.slices++,
            this.state = `running`;
          ;
        ) {
          if (this.cancelled)
            return (
              this.close(),
              (this.state = `cancelled`),
              $u.cancelled++,
              `cancelled`
            );
          if (e && ud(e)) {
            (await e.nextFrame(), $u.slices++);
            continue;
          }
          if (e && !_d(e, this)) {
            ($u.tokenWaits++, await e.nextFrame(), $u.slices++);
            continue;
          }
          (e && ld(e) && (gd = this), (td.v = ``));
          let t = yd(),
            n = this.it.next(),
            r = yd() - t;
          if (
            (hd(e, r, this, n.value === Qu),
            this.steps++,
            $u.steps++,
            r > $u.stepMaxMs &&
              (($u.stepMaxMs = Math.round(r * 100) / 100),
              ($u.stepMaxLabel = this.label)),
            r >= ed &&
              vd(
                `step ${this.label}${td.v ? `/` + td.v : ``}#${this.steps}`,
                r,
                t,
              ),
            n.done)
          )
            return ((this.state = `done`), `done`);
          n.value === Qu
            ? (gd === this && (gd = null),
              e ? await e.nextFrame() : await Promise.resolve(),
              $u.slices++)
            : e && e.remaining() <= 0 && (await e.nextFrame(), $u.slices++);
        }
      } catch (e) {
        throw ((this.state = `failed`), $u.failed++, e);
      } finally {
        (gd === this && (gd = null), bd.delete(this));
      }
    }
  };
function Sd(e, t, n) {
  return new xd(t, n, e ?? null);
}
function Cd(e) {
  let t = 0;
  for (let n of bd) n.label.startsWith(e) && (n.cancel(), t++);
  return t;
}
var wd = 0,
  Td = 1,
  Ed = 2,
  Dd = 3,
  Od = 4,
  kd = [`none`, `loading`, `building`, `ready`, `failed`],
  Ad = 0.25,
  jd = 256,
  Md = 2,
  Nd = 45,
  Pd = 1,
  Fd = 8,
  Id = 1500,
  Ld = 1,
  Rd = 3,
  zd = 3,
  Bd = 2,
  Vd = 12,
  Hd = [null],
  Ud = [],
  Wd = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  Gd = 8;
function Kd(e) {
  return new Promise((t) => setTimeout(t, Math.max(0, e)));
}
function qd(e, t) {
  return new Promise((n) => {
    let r = !1,
      i = () => {
        r || ((r = !0), clearTimeout(a), n());
      },
      a = setTimeout(i, Math.max(0, t));
    Promise.all(e).then(i, i);
  });
}
var Jd = class {
    s;
    tier;
    state = wd;
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
      return this.state === Td || this.state === Ed;
    }
  },
  Yd = class {
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
        (this.mid = new Jd(this, `mid`)),
        (this.near = new Jd(this, `near`)),
        (this.interior = new Jd(this, `interior`)),
        (this.cos = Math.cos(t.facing)),
        (this.sin = Math.sin(t.facing)),
        (this.hasNear = r.hasScene(e.id)),
        (this.hasInt = e.interior !== `none` && r.hasInterior(e.id)));
    }
    tierOf(e) {
      return e === `mid` ? this.mid : e === `near` ? this.near : this.interior;
    }
  };
function Xd(e, t, n) {
  let r = Math.max(e.minX - t, 0, t - e.maxX),
    i = Math.max(e.minZ - n, 0, n - e.maxZ);
  return Math.sqrt(r * r + i * i);
}
function* Zd(e) {
  Wu(e.lm, e.meta.proxy, `mid`);
}
