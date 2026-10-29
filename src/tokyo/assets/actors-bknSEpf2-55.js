// tokyo/assets/actors-bknSEpf2 55 — math
// Lines 20598-20902 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var ch = `
#pl-ov{position:fixed;inset:0;pointer-events:none;z-index:8;overflow:hidden}
#pl-ov .vig{position:absolute;inset:-2px;opacity:0;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 48%,rgba(150,0,0,.55) 82%,rgba(110,0,0,.9) 100%);will-change:opacity}
#pl-ov .low{position:absolute;inset:-2px;opacity:0;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 55%,rgba(120,0,0,.6) 100%);will-change:opacity}
#pl-ov .wash{position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at center,rgba(20,20,24,.15) 30%,rgba(0,0,0,.75) 100%);will-change:opacity}
#pl-ov .dir{position:absolute;left:50%;top:50%;width:0;height:0;will-change:transform,opacity;opacity:0}
#pl-ov .dir i{position:absolute;left:-70px;top:-38vh;width:140px;height:26px;border-radius:50%;border-top:6px solid rgba(230,30,30,.95);filter:drop-shadow(0 0 6px rgba(255,0,0,.8))}
#pl-ov .xh{position:absolute;left:50%;top:50%;width:0;height:0;opacity:0;transition:opacity .12s}
#pl-ov .xh b{position:absolute;background:#fff;box-shadow:0 0 2px rgba(0,0,0,.9);border-radius:1px}
#pl-ov .xh .d{left:-2px;top:-2px;width:4px;height:4px;border-radius:50%}
#pl-ov .xh .t,#pl-ov .xh .bt{left:-1px;width:2px;height:8px}
#pl-ov .xh .l,#pl-ov .xh .r{top:-1px;width:8px;height:2px}
#pl-ov .xh.on-target b{background:#ff3b30}
#pl-ov .xh.melee .t,#pl-ov .xh.melee .bt,#pl-ov .xh.melee .l,#pl-ov .xh.melee .r{display:none}
#pl-ov .hm{position:absolute;left:50%;top:50%;width:0;height:0;opacity:0}
#pl-ov .hm b{position:absolute;width:12px;height:3px;background:#fff;box-shadow:0 0 3px rgba(0,0,0,.8);border-radius:2px}
#pl-ov .hm.kill b{background:#ff3b30}
#pl-ov .hm b:nth-child(1){left:6px;top:4px;transform:rotate(45deg)}
#pl-ov .hm b:nth-child(2){left:-18px;top:4px;transform:rotate(-45deg)}
#pl-ov .hm b:nth-child(3){left:6px;top:-7px;transform:rotate(-45deg)}
#pl-ov .hm b:nth-child(4){left:-18px;top:-7px;transform:rotate(45deg)}
`,
  lh = [`xh`, `xh melee`, `xh on-target`, `xh melee on-target`],
  uh = class {
    ctx;
    root;
    vig;
    low;
    wash;
    dir;
    xh;
    xt;
    xb;
    xl;
    xr;
    hm;
    dmg = 0;
    dirA = 0;
    dirK = 0;
    hmT = 0;
    lowK = 0;
    grade = 0;
    time = 0;
    w = {
      vig: -1,
      low: -1,
      wash: -1,
      dir: -1,
      dirA: -99,
      xo: -1,
      xs: -1,
      hm: -1,
      grade: -1,
    };
    xMode = `none`;
    xTarget = !1;
    xSpread = 0;
    hmKill = !1;
    clsKey = -1;
    constructor(e) {
      this.ctx = e;
    }
    init() {
      if (!document.getElementById(`pl-ov-style`)) {
        let e = document.createElement(`style`);
        ((e.id = `pl-ov-style`),
          (e.textContent = ch),
          document.head.appendChild(e));
      }
      let e = document.createElement(`div`);
      ((e.id = `pl-ov`),
        (e.innerHTML = `<div class="vig"></div><div class="low"></div><div class="dir"><i></i></div><div class="wash"></div>
      <div class="xh"><b class="d"></b><b class="t"></b><b class="bt"></b><b class="l"></b><b class="r"></b></div>
      <div class="hm"><b></b><b></b><b></b><b></b></div>`),
        document.body.appendChild(e),
        (this.root = e),
        (this.vig = e.querySelector(`.vig`)),
        (this.low = e.querySelector(`.low`)),
        (this.wash = e.querySelector(`.wash`)),
        (this.dir = e.querySelector(`.dir`)),
        (this.xh = e.querySelector(`.xh`)),
        (this.xt = e.querySelector(`.xh .t`)),
        (this.xb = e.querySelector(`.xh .bt`)),
        (this.xl = e.querySelector(`.xh .l`)),
        (this.xr = e.querySelector(`.xh .r`)),
        (this.hm = e.querySelector(`.hm`)));
    }
    damage(e, t) {
      ((this.dmg = Math.min(1, this.dmg + 0.25 + e * 0.02)),
        Number.isFinite(t) && ((this.dirA = t), (this.dirK = 1)));
    }
    setLowHealth(e) {
      this.lowK = e;
    }
    setGrade(e) {
      this.grade = e;
    }
    setCrosshair(e, t, n) {
      ((this.xMode = e), (this.xSpread = t), (this.xTarget = n));
    }
    hitMarker(e) {
      ((this.hmT = 0.28), (this.hmKill = e));
    }
    update(e) {
      if (!this.root) return;
      this.time += e;
      let t = this.w;
      ((this.dmg = Math.max(0, this.dmg - e * 1.6)),
        (this.dirK = Math.max(0, this.dirK - e * 1.1)),
        (this.hmT = Math.max(0, this.hmT - e)));
      let n = (e) => Math.round(e * 50) / 50,
        r = n(this.dmg * 0.9);
      r !== t.vig && (this.vig.style.opacity = String((t.vig = r)));
      let i = n(
        this.lowK > 0
          ? (0.55 + 0.45 * Math.max(0, Math.sin(this.time * 6.5)) ** 6) *
              this.lowK
          : 0,
      );
      i !== t.low && (this.low.style.opacity = String((t.low = i)));
      let a = n(this.dirK);
      (a !== t.dir && (this.dir.style.opacity = String((t.dir = a))),
        this.dirK > 0 &&
          Math.abs(this.dirA - t.dirA) > 0.01 &&
          ((t.dirA = this.dirA),
          (this.dir.style.transform = `rotate(${this.dirA.toFixed(3)}rad)`)));
      let o = n(this.grade);
      if (o !== t.wash) {
        ((t.wash = o), (this.wash.style.opacity = String(o)));
        let e = this.ctx.renderer.canvas;
        e.style.filter =
          o > 0.01
            ? `grayscale(${Math.min(1, o * 1.1).toFixed(2)}) contrast(${(1 + o * 0.15).toFixed(2)}) brightness(${(1 - o * 0.18).toFixed(2)})`
            : ``;
      }
      let s = this.xMode === `none` ? 0 : 1;
      s !== t.xo && ((t.xo = s), (this.xh.style.opacity = String(s)));
      let c = +(this.xMode === `melee`) + (this.xTarget ? 2 : 0);
      c !== this.clsKey && ((this.clsKey = c), (this.xh.className = lh[c]));
      let l = Math.round(4 + this.xSpread);
      l !== t.xs &&
        this.xMode === `gun` &&
        ((t.xs = l),
        (this.xt.style.top = `${-l - 8}px`),
        (this.xb.style.top = `${l}px`),
        (this.xl.style.left = `${-l - 8}px`),
        (this.xr.style.left = `${l}px`));
      let u = n(this.hmT > 0 ? Math.min(1, this.hmT / 0.12) : 0);
      u !== t.hm &&
        ((t.hm = u),
        (this.hm.style.opacity = String(u)),
        (this.hm.className = this.hmKill ? `hm kill` : `hm`));
    }
    dispose() {
      this.root?.remove();
    }
  },
  dh = 24,
  fh = class {
    ctx;
    covered = !1;
    station = !1;
    t = 0;
    coverT = 0;
    openT = 0;
    floors = [];
    grid = null;
    gridN = -1;
    constructor(e) {
      this.ctx = e;
    }
    update(e, t, n, r) {
      if (((this.t -= e), this.t > 0)) return;
      let i = 0.2 - this.t;
      ((this.t = 0.2),
        this.probe(t, n, r)
          ? ((this.coverT += i),
            (this.openT = 0),
            this.coverT >= 0.5 && (this.covered = !0))
          : ((this.openT += i),
            (this.coverT = 0),
            this.openT >= 0.35 && (this.covered = !1)));
    }
    reset(e, t, n) {
      ((this.covered = this.probe(e, t, n)),
        (this.coverT = this.openT = 0),
        (this.t = 0.2));
    }
    probe(e, t, n) {
      let r = this.ctx;
      this.station = !1;
      let i = r.statics,
        a = !1;
      if (typeof i.floorsAt == `function` && i.floorsAt(e, n, this.floors) > 0)
        for (let r of this.floors) {
          let o = i.floorHeightOf(r, e, n);
          o === o &&
            (o > t + 2.1 && o < t + 30
              ? (a = !0)
              : r.tag === `station` &&
                Math.abs(o - t) < 0.6 &&
                (this.station = !0));
        }
      if (this.station || a || r.interiors?.playerInside) return !0;
      let o = r.env;
      try {
        if (typeof o?.isSheltered == `function` && o.isSheltered(e, n, t + 1.7))
          return !0;
      } catch {}
      let s = r.buildings;
      if (!s) return !1;
      try {
        return s.heightAt(e, n) > t + 2.4 || this.inArcade(e, n, t);
      } catch {
        return !1;
      }
    }
    inArcade(e, t, n) {
      let r = this.ctx.buildings.arcades;
      if (!r || !r.length || n > 3) return !1;
      if (!this.grid || this.gridN !== r.length) {
        let e = new Map();
        (r.forEach((t, n) => {
          let r = Math.floor(Math.min(t.x0, t.x1) / dh),
            i = Math.floor(Math.max(t.x0, t.x1) / dh),
            a = Math.floor(Math.min(t.z0, t.z1) / dh),
            o = Math.floor(Math.max(t.z0, t.z1) / dh);
          for (let t = a; t <= o; t++)
            for (let a = r; a <= i; a++) {
              let r = t * 4096 + a,
                i = e.get(r);
              (i || e.set(r, (i = [])), i.push(n));
            }
        }),
          (this.grid = e),
          (this.gridN = r.length));
      }
      let i = this.grid.get(Math.floor(t / dh) * 4096 + Math.floor(e / dh));
      if (!i) return !1;
      for (let n = 0; n < i.length; n++) {
        let a = r[i[n]];
        if (
          e >= Math.min(a.x0, a.x1) &&
          e <= Math.max(a.x0, a.x1) &&
          t >= Math.min(a.z0, a.z1) &&
          t <= Math.max(a.z0, a.z1)
        )
          return !0;
      }
      return !1;
    }
  },
  ph = /-(head|hair|fringe)$/;
function mh(e, t) {
  if (e.kind === `rocketbox`) {
    if (t) return;
    for (let t of e.meshes) ph.test(t.name) && (t.visible = !1);
    return;
  }
  let n = e.rig.bones[4],
    r = t ? 1 : 1e-4;
  n.scale.x !== r && n.scale.setScalar(r);
}
var hh = 0.33,
  gh = 4,
  _h = 1.8,
  vh = 0.45,
  yh = 0.32,
  bh = 0,
  xh = 1,
  Sh = 2,
  Ch = 3,
  wh = [0.6, 0.85],
  Th = [0.45, 0.7],
  Eh = [0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2],
  Dh = 21,
  Oh = 5.8,
  kh = 1.75,
  Ah = 4.5,
  jh = 7,
  Mh = 2.1,
  Nh = 1.05,
  Ph = 1.45,
  Fh = 12.5,
  Ih = 7.5,
  Lh = 3.6,
  Rh = 11,
  zh = 16,
  Bh = 12,
  Vh = 8,
  Hh = 9,
  Uh = 7,
  Wh = [0, 6, -6, 12, -12, 18, -18, 26, -26],
  Gh = !1,
  Kh = !1;
function qh() {
  if (Kh || typeof window > `u`) return;
  Kh = !0;
  let e = (e) => {
    Gh = e.altKey;
  };
  for (let t of [`keydown`, `keyup`, `pointermove`, `pointerdown`])
    window.addEventListener(t, e, { capture: !0, passive: !0 });
  window.addEventListener(`blur`, () => (Gh = !1));
}
