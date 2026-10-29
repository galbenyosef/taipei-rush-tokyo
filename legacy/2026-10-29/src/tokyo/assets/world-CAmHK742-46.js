// tokyo/assets/world-CAmHK742 46 — math
// Lines 14526-14809 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var sd = Symbol(`sites-next-frame`),
  cd = {
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
  ld = 4,
  ud = { v: `` },
  dd =
    typeof location < `u` && /[?&]sitefast=0/.test(location.search) ? 2.5 : 1,
  fd = !1;
function pd(e) {
  fd = e;
}
var md = !1;
function hd(e) {
  md = e;
}
var gd = -1,
  _d = 0;
function vd(e) {
  return !md && e.budgetMs <= 6;
}
function yd(e) {
  return vd(e) ? e.frameNo === gd && _d >= (fd ? dd : 2.5) : !1;
}
var bd = 0,
  xd = null,
  Sd = !1;
function Cd(e) {
  if (e.frameNo !== gd) {
    if (Sd) {
      let e = cd;
      (_d > e.frameMaxMs && (e.frameMaxMs = Math.round(_d * 100) / 100),
        _d > 4 && e.framesOver4++,
        _d > 8 && e.framesOver8++);
    }
    ((gd = e.frameNo), (_d = 0), (bd = 0), (xd = null), (Sd = vd(e)));
  }
}
function wd(e, t, n, r) {
  e &&
    (Cd(e),
    (_d += t),
    (cd.msTotal += t),
    fd && (cd.msFast += t),
    !(r || n === xd) &&
      ((xd = n),
      vd(e) &&
        (++bd === 2 && cd.concurrentOpenFrames++,
        bd > cd.openMaxJobs && (cd.openMaxJobs = bd))));
}
var Td = null;
function Ed(e, t) {
  return !vd(e) || Td === null || Td === t;
}
function Dd(e, t, n) {
  if (t < ld) return;
  let r = cd.long;
  (r.length >= 48 && r.shift(),
    r.push([Math.round(n), Math.round(t * 10) / 10, e]));
}
var Od = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  kd = new Set(),
  Ad = class {
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
        ((this.cancelled = !0), Td === this && (Td = null));
    }
    close() {
      try {
        this.it.return?.(void 0);
      } catch {}
    }
    async drive() {
      (cd.jobs++, kd.add(this));
      try {
        let e = this.work;
        for (
          e ? await e.nextFrame() : await Promise.resolve(),
            cd.slices++,
            this.state = `running`;
          ;
        ) {
          if (this.cancelled)
            return (
              this.close(),
              (this.state = `cancelled`),
              cd.cancelled++,
              `cancelled`
            );
          if (e && yd(e)) {
            (await e.nextFrame(), cd.slices++);
            continue;
          }
          if (e && !Ed(e, this)) {
            (cd.tokenWaits++, await e.nextFrame(), cd.slices++);
            continue;
          }
          (e && vd(e) && (Td = this), (ud.v = ``));
          let t = Od(),
            n = this.it.next(),
            r = Od() - t;
          if (
            (wd(e, r, this, n.value === sd),
            this.steps++,
            cd.steps++,
            r > cd.stepMaxMs &&
              ((cd.stepMaxMs = Math.round(r * 100) / 100),
              (cd.stepMaxLabel = this.label)),
            r >= ld &&
              Dd(
                `step ${this.label}${ud.v ? `/` + ud.v : ``}#${this.steps}`,
                r,
                t,
              ),
            n.done)
          )
            return ((this.state = `done`), `done`);
          n.value === sd
            ? (Td === this && (Td = null),
              e ? await e.nextFrame() : await Promise.resolve(),
              cd.slices++)
            : e && e.remaining() <= 0 && (await e.nextFrame(), cd.slices++);
        }
      } catch (e) {
        throw ((this.state = `failed`), cd.failed++, e);
      } finally {
        (Td === this && (Td = null), kd.delete(this));
      }
    }
  };
function jd(e, t, n) {
  return new Ad(t, n, e ?? null);
}
function Md(e) {
  let t = 0;
  for (let n of kd) n.label.startsWith(e) && (n.cancel(), t++);
  return t;
}
var Nd = 0,
  Pd = 1,
  Fd = 2,
  Id = 3,
  Ld = 4,
  Rd = [`none`, `loading`, `building`, `ready`, `failed`],
  zd = 0.25,
  Bd = 256,
  Vd = 2,
  Hd = 45,
  Ud = 1,
  Wd = 8,
  Gd = 1500,
  Kd = 1,
  qd = 3,
  Jd = 3,
  Yd = 2,
  Xd = 12,
  Zd = [null],
  Qd = [],
  $d = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  ef = 8;
function tf(e) {
  return new Promise((t) => setTimeout(t, Math.max(0, e)));
}
function nf(e, t) {
  return new Promise((n) => {
    let r = !1,
      i = () => {
        r || ((r = !0), clearTimeout(a), n());
      },
      a = setTimeout(i, Math.max(0, t));
    Promise.all(e).then(i, i);
  });
}
var rf = class {
    s;
    tier;
    state = Nd;
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
      return this.state === Pd || this.state === Fd;
    }
  },
  af = class {
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
        (this.mid = new rf(this, `mid`)),
        (this.near = new rf(this, `near`)),
        (this.interior = new rf(this, `interior`)),
        (this.cos = Math.cos(t.facing)),
        (this.sin = Math.sin(t.facing)),
        (this.hasNear = r.hasScene(e.id)),
        (this.hasInt = e.interior !== `none` && r.hasInterior(e.id)));
    }
    tierOf(e) {
      return e === `mid` ? this.mid : e === `near` ? this.near : this.interior;
    }
  };
function of(e, t, n) {
  let r = Math.max(e.minX - t, 0, t - e.maxX),
    i = Math.max(e.minZ - n, 0, n - e.maxZ);
  return Math.sqrt(r * r + i * i);
}
function* sf(e) {
  $u(e.lm, e.meta.proxy, `mid`);
}
