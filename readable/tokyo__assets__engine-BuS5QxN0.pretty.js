const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/boot-C6yF8B4X.js",
      "assets/shared-DcD5mkpI.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/game-y-FF2uWA.js",
      "assets/three-CC5Mkdpe.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-CLv8PYlR.js",
      "assets/controllers-mah1C7rD.js",
      "assets/landing-DfZEUEhC.js",
      "assets/accounts-CpfgQQfK.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-BIQnAwky.js",
      "assets/text-0MpKmkwJ.js",
      "assets/coordinator-R8919moQ.js",
      "assets/ui-Bz5oqxsZ.js",
      "assets/icons-DYNV7fxr.js",
      "assets/profile-BmQKTAov.js",
      "assets/profile-OY6SPQJJ.css",
      "assets/phone-BvNRaOR5.js",
      "assets/panel-D9zvhD2V.js",
      "assets/panel-DY3g4qQQ.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, i as n, t as r } from "./ja-Ci9Qv_M-.js";
import {
  $n as i,
  $t as a,
  An as o,
  En as s,
  Et as c,
  F as l,
  J as u,
  Jn as d,
  K as f,
  Kn as p,
  Kt as m,
  Lt as h,
  N as g,
  Nn as _,
  Nt as v,
  Ot as y,
  P as b,
  Qn as ee,
  S as x,
  St as S,
  Tn as C,
  Tt as w,
  U as T,
  W as te,
  Y as E,
  Yn as ne,
  Zn as re,
  _ as ie,
  _n as ae,
  at as oe,
  c as se,
  g as ce,
  gn as le,
  h as ue,
  hn as de,
  ht as fe,
  ir as pe,
  it as me,
  jt as he,
  mn as ge,
  mt as _e,
  n as ve,
  nr as ye,
  nt as be,
  o as xe,
  p as Se,
  q as Ce,
  s as we,
  tr as Te,
  v as Ee,
  vn as De,
  wt as Oe,
  x as ke,
  yn as Ae,
  zn as je,
  zt as Me,
} from "./three-CC5Mkdpe.js";
import { n as Ne } from "./cities-8-O8IWPJ.js";
import { i as Pe, t as Fe } from "./shared-DcD5mkpI.js";
var Ie = class {
  intervalMs;
  last = 0;
  accumulator = 0;
  tickMs = 0;
  constructor(e) {
    this.intervalMs = e === `0` ? 0 : 1e3 / (e === `30` ? 30 : 60);
  }
  setFps(e) {
    let t = e === 0 ? 0 : 1e3 / e;
    t !== this.intervalMs && ((this.intervalMs = t), (this.accumulator = t));
  }
  reset(e) {
    ((this.last = e), (this.accumulator = 0));
  }
  ready(e) {
    return (
      (this.tickMs = Math.max(0, e - this.last)),
      (this.accumulator += this.tickMs),
      (this.last = e),
      this.intervalMs
        ? this.accumulator + 0.001 < this.intervalMs
          ? !1
          : ((this.accumulator = Math.max(
              0,
              this.accumulator -
                Math.floor((this.accumulator + 0.001) / this.intervalMs) *
                  this.intervalMs,
            )),
            !0)
        : !0
    );
  }
  adaptInterval(e) {
    return !this.intervalMs || this.tickMs > this.intervalMs + 0.001
      ? e
      : e <= this.intervalMs + this.tickMs + 0.001
        ? this.intervalMs
        : e;
  }
};
function Le(e) {
  return (
    e instanceof HTMLElement &&
    (!!e.closest(`input,textarea,select`) || e.isContentEditable)
  );
}
var Re = {
    ShiftLeft: [`sprint`],
    ShiftRight: [`sprint`],
    Space: [`jump`, `handbrake`],
    KeyF: [`enter`],
    KeyE: [`interact`],
    KeyH: [`horn`],
    Escape: [`pause`],
    KeyP: [`pause`],
    KeyM: [`map`],
    KeyT: [`phone`],
    KeyV: [`camera`],
    KeyC: [`lookBehind`],
    KeyQ: [`radio`],
    Tab: [`weaponNext`],
    KeyR: [`reload`],
  },
  ze = class extends Set {
    latched = new Set();
    add(e) {
      return (this.latched?.add(e), super.add(e));
    }
  },
  Be = class {
    canvas;
    keys = new Set();
    held = new Set();
    prevHeld = new Set();
    kbActions = new Set();
    mouseButtons = new Set();
    tapKeys = new Set();
    tapMouse = new Set();
    edges = new Set();
    wheelSteps = 0;
    look = { x: 0, y: 0 };
    rawLook = { x: 0, y: 0 };
    axes = { moveX: 0, moveY: 0, throttle: 0, brake: 0, steer: 0 };
    virtualTaps = new Set();
    virtual = {
      moveX: 0,
      moveY: 0,
      lookDX: 0,
      lookDY: 0,
      buttons: new ze(),
      throttle: 0,
      brake: 0,
      tap: (e) => {
        this.virtualTaps.add(e);
      },
    };
    device = `kbm`;
    isTouch;
    enabled = !0;
    pointerLocked = !1;
    sensitivity = 1;
    invertY = !1;
    gamepadIndex = -1;
    listeners = [];
    modalHandlers = [];
    constructor(e) {
      ((this.canvas = e),
        (this.isTouch =
          matchMedia(`(pointer: coarse)`).matches || `ontouchstart` in window),
        this.isTouch && (this.device = `touch`));
      let t = (e, t, n = window, r) => {
        (n.addEventListener(e, t, r),
          this.listeners.push(() => n.removeEventListener(e, t, r)));
      };
      (t(
        `keydown`,
        (e) => {
          let t = this.modalHandlers.at(-1);
          t &&
            (t(e),
            (e.defaultPrevented || !Le(e.target)) &&
              e.stopImmediatePropagation());
        },
        window,
        !0,
      ),
        t(
          `keyup`,
          (e) => {
            this.modalHandlers.length &&
              !Le(e.target) &&
              e.stopImmediatePropagation();
          },
          window,
          !0,
        ),
        t(`keydown`, (e) => {
          !this.enabled ||
            this.modalHandlers.length ||
            Le(e.target) ||
            (e.code === `Tab` && e.preventDefault(),
            !e.repeat &&
              (this.keys.add(e.code),
              this.tapKeys.add(e.code),
              (this.device = `kbm`)));
        }),
        t(`keyup`, (e) => this.keys.delete(e.code)),
        t(`focusin`, (e) => {
          Le(e.target) && (this.clearControls(), this.unlockPointer());
        }),
        t(`blur`, () => {
          (this.keys.clear(),
            this.mouseButtons.clear(),
            this.tapKeys.clear(),
            this.tapMouse.clear());
        }),
        t(
          `mousedown`,
          (e) => {
            e.target === this.canvas &&
              (this.mouseButtons.add(e.button),
              this.tapMouse.add(e.button),
              (this.device = `kbm`));
          },
          window,
        ),
        t(`mouseup`, (e) => this.mouseButtons.delete(e.button)),
        t(`mousemove`, (e) => {
          this.pointerLocked &&
            ((this.rawLook.x += e.movementX), (this.rawLook.y += e.movementY));
        }),
        t(
          `wheel`,
          (e) => {
            this.pointerLocked && (this.wheelSteps += Math.sign(e.deltaY));
          },
          window,
          { passive: !0 },
        ),
        t(`contextmenu`, (e) => e.preventDefault(), this.canvas),
        t(`gamepadconnected`, (e) => {
          this.gamepadIndex = e.gamepad.index;
        }));
      let n = () => {
        this.pointerLocked = document.pointerLockElement === this.canvas;
      };
      (document.addEventListener(`pointerlockchange`, n),
        this.listeners.push(() =>
          document.removeEventListener(`pointerlockchange`, n),
        ));
    }
    lockPointer() {
      this.isTouch ||
        !this.enabled ||
        this.modalHandlers.length ||
        Le(document.activeElement) ||
        this.canvas.requestPointerLock?.()?.catch?.(() => {});
    }
    unlockPointer() {
      document.pointerLockElement && document.exitPointerLock();
    }
    captureModal(e) {
      return (
        this.modalHandlers.push(e),
        this.clearControls(),
        this.unlockPointer(),
        () => {
          let t = this.modalHandlers.indexOf(e);
          t < 0 || (this.modalHandlers.splice(t, 1), this.clearControls());
        }
      );
    }
    clearControls() {
      (this.keys.clear(),
        this.tapKeys.clear(),
        this.tapMouse.clear(),
        this.mouseButtons.clear(),
        this.held.clear(),
        this.prevHeld.clear(),
        this.edges.clear(),
        (this.rawLook.x =
          this.rawLook.y =
          this.look.x =
          this.look.y =
          this.wheelSteps =
            0));
      for (let e of Object.keys(this.axes)) this.axes[e] = 0;
      ((this.virtual.moveX =
        this.virtual.moveY =
        this.virtual.lookDX =
        this.virtual.lookDY =
        this.virtual.throttle =
        this.virtual.brake =
          0),
        this.virtual.buttons.clear(),
        this.virtual.buttons.latched?.clear(),
        this.virtualTaps.clear());
    }
    beginFrame(e = 1 / 60) {
      let t = this.prevHeld;
      ((this.prevHeld = this.held), t.clear(), (this.held = t));
      let n = this.held,
        r = this.edges;
      r.clear();
      let i = Math.min(3, Math.max(0, e * 60)),
        a = 0,
        o = 0,
        s = 0,
        c = 0,
        l =
          this.enabled &&
          !this.modalHandlers.length &&
          !Le(document.activeElement);
      if (l) {
        for (let e of this.keys) {
          let t = Re[e];
          if (t) for (let e of t) n.add(e);
        }
        for (let e of this.tapKeys) {
          let t = Re[e];
          if (t) for (let e of t) (n.add(e), r.add(e));
        }
        ((this.keys.has(`KeyW`) || this.keys.has(`ArrowUp`)) && (o += 1),
          (this.keys.has(`KeyS`) || this.keys.has(`ArrowDown`)) && --o,
          (this.keys.has(`KeyD`) || this.keys.has(`ArrowRight`)) && (a += 1),
          (this.keys.has(`KeyA`) || this.keys.has(`ArrowLeft`)) && --a,
          o > 0 && (s = 1),
          o < 0 && (c = 1),
          this.pointerLocked &&
            ((this.mouseButtons.has(0) || this.tapMouse.has(0)) &&
              n.add(`attack`),
            (this.mouseButtons.has(2) || this.tapMouse.has(2)) && n.add(`aim`),
            this.tapMouse.has(0) && r.add(`attack`),
            this.tapMouse.has(2) && r.add(`aim`)),
          this.wheelSteps > 0 && n.add(`weaponNext`),
          this.wheelSteps < 0 && n.add(`weaponPrev`));
        let e = this.pollGamepad();
        if (e) {
          let t = (e) =>
              Math.abs(e) < 0.15 ? 0 : (e - Math.sign(e) * 0.15) / 0.85,
            r = t(e.axes[0] ?? 0),
            l = t(e.axes[1] ?? 0),
            u = t(e.axes[2] ?? 0),
            d = t(e.axes[3] ?? 0),
            f = (t) => !!e.buttons[t]?.pressed,
            p = (t) => e.buttons[t]?.value ?? 0;
          ((Math.abs(r) + Math.abs(l) + Math.abs(u) + Math.abs(d) > 0 ||
            e.buttons.some((e) => e.pressed)) &&
            (this.device = `gamepad`),
            (a += r),
            (o -= l),
            (this.rawLook.x += u * 14 * i),
            (this.rawLook.y += d * 10 * i),
            (s = Math.max(s, p(7))),
            (c = Math.max(c, p(6))),
            f(0) && (n.add(`jump`), n.add(`handbrake`)),
            f(1) && n.add(`sprint`),
            f(2) && n.add(`interact`),
            f(3) && n.add(`enter`),
            f(4) && (n.add(`radio`), n.add(`weaponPrev`)),
            f(5) && n.add(`weaponNext`),
            p(7) > 0.5 && n.add(`attack`),
            p(6) > 0.5 && n.add(`aim`),
            f(10) && (n.add(`sprint`), n.add(`horn`)),
            f(11) && n.add(`camera`),
            f(9) && n.add(`pause`),
            f(8) && n.add(`map`),
            f(12) && n.add(`phone`),
            f(13) && n.add(`lookBehind`),
            f(15) && n.add(`reload`),
            f(14) && n.add(`weaponPrev`));
        }
        let t = this.virtual,
          l = t.buttons.latched;
        if (
          t.moveX ||
          t.moveY ||
          t.buttons.size ||
          t.lookDX ||
          t.lookDY ||
          t.throttle ||
          t.brake ||
          this.virtualTaps.size ||
          l?.size
        ) {
          ((a += t.moveX),
            (o += t.moveY),
            (s = Math.max(s, t.throttle, t.moveY > 0.2 ? t.moveY : 0)),
            (c = Math.max(c, t.brake, t.moveY < -0.2 ? -t.moveY : 0)));
          for (let e of t.buttons) n.add(e);
          if (l) for (let e of l) (n.add(e), r.add(e));
          for (let e of this.virtualTaps) (n.add(e), r.add(e));
          ((this.rawLook.x += t.lookDX),
            (this.rawLook.y += t.lookDY),
            (this.device = `touch`));
        }
        ((t.lookDX = 0),
          (t.lookDY = 0),
          t.buttons.latched?.clear(),
          this.virtualTaps.clear());
      }
      (this.tapKeys.clear(),
        this.tapMouse.clear(),
        (this.axes.steer = Math.max(-1, Math.min(1, a))));
      let u = Math.hypot(a, o);
      (u > 1 && ((a /= u), (o /= u)),
        (this.axes.moveX = a),
        (this.axes.moveY = o),
        (this.axes.throttle = Math.min(1, s)),
        (this.axes.brake = Math.min(1, c)),
        (this.look.x = l ? this.rawLook.x * this.sensitivity : 0),
        (this.look.y = l
          ? this.rawLook.y * this.sensitivity * (this.invertY ? -1 : 1)
          : 0),
        (this.rawLook.x = 0),
        (this.rawLook.y = 0),
        (this.wheelSteps = 0));
    }
    endFrame() {}
    down(e) {
      return this.held.has(e);
    }
    pressed(e) {
      return (this.held.has(e) && !this.prevHeld.has(e)) || this.edges.has(e);
    }
    released(e) {
      return !this.held.has(e) && this.prevHeld.has(e);
    }
    axis(e) {
      return this.axes[e];
    }
    rumble(e = 0.5, t = 120) {
      (this.pollGamepad()
        ?.vibrationActuator?.playEffect?.(`dual-rumble`, {
          duration: t,
          strongMagnitude: e,
          weakMagnitude: e * 0.6,
        })
        .catch?.(() => {}),
        this.device === `touch` && navigator.vibrate?.(Math.min(t, 60)));
    }
    pollGamepad() {
      let e = navigator.getGamepads?.();
      if (!e) return null;
      if (this.gamepadIndex >= 0 && e[this.gamepadIndex])
        return e[this.gamepadIndex];
      for (let t of e)
        if (t && t.connected) return ((this.gamepadIndex = t.index), t);
      return null;
    }
    dispose() {
      for (let e of this.listeners) e();
    }
  },
  Ve = class {
    map = new Map();
    on(e, t) {
      let n = this.map.get(e);
      return (
        n || this.map.set(e, (n = new Set())),
        n.add(t),
        () => n.delete(t)
      );
    }
    once(e, t) {
      let n = this.on(e, (e) => {
        (n(), t(e));
      });
      return n;
    }
    listenerCount(e) {
      return this.map.get(e)?.size ?? 0;
    }
    emit(e, ...t) {
      let n = this.map.get(e);
      if (n)
        for (let r of [...n])
          try {
            r(t[0]);
          } catch (t) {
            console.error(`[events] handler for ${String(e)} threw`, t);
          }
    }
  };
function He() {
  if (typeof navigator > `u`) return { mobile: !1, tablet: !1 };
  let e = navigator.userAgent || ``,
    t =
      ((navigator.maxTouchPoints || 0) > 1 && /Macintosh/.test(e)) ||
      /iPad|Tablet/i.test(e) ||
      (/Android/i.test(e) && !/Mobile/i.test(e));
  return { mobile: t || /Android|iPhone|iPod|Mobile/i.test(e), tablet: t };
}
var Ue = {
  low: {
    level: `low`,
    maxPixelRatio: 1,
    minPixelRatio: 0.7,
    antialias: !1,
    shadows: !1,
    shadowMapSize: 1024,
    drawDistance: 420,
    propDensity: 0.45,
    maxTrafficVehicles: 26,
    maxPeds: 30,
    bloom: !1,
    postFx: !1,
    rainParticles: 1500,
    dynamicLights: 0,
    maxTextureSize: 2048,
    textureScale: 0.5,
    materials: `lambert`,
  },
  medium: {
    level: `medium`,
    maxPixelRatio: 1.25,
    minPixelRatio: 0.75,
    antialias: !1,
    shadows: !0,
    shadowMapSize: 1024,
    drawDistance: 650,
    propDensity: 0.7,
    maxTrafficVehicles: 40,
    maxPeds: 60,
    bloom: !0,
    postFx: !1,
    rainParticles: 4e3,
    dynamicLights: 1,
    maxTextureSize: 4096,
    textureScale: 0.75,
    materials: `pbr`,
  },
  high: {
    level: `high`,
    maxPixelRatio: 1.5,
    minPixelRatio: 0.8,
    antialias: !0,
    shadows: !0,
    shadowMapSize: 2048,
    drawDistance: 900,
    propDensity: 1,
    maxTrafficVehicles: 60,
    maxPeds: 90,
    bloom: !0,
    postFx: !0,
    rainParticles: 8e3,
    dynamicLights: 2,
    maxTextureSize: 8192,
    textureScale: 0.75,
    materials: `pbr`,
  },
  ultra: {
    level: `ultra`,
    maxPixelRatio: 2,
    minPixelRatio: 0.9,
    antialias: !0,
    shadows: !0,
    shadowMapSize: 4096,
    drawDistance: 1300,
    propDensity: 1,
    maxTrafficVehicles: 95,
    maxPeds: 120,
    bloom: !0,
    postFx: !0,
    rainParticles: 14e3,
    dynamicLights: 4,
    maxTextureSize: 8192,
    textureScale: 1,
    materials: `pbr`,
  },
};
function We(e, t) {
  let n = Math.min(t.maxTextureSize, e * (t.textureScale || 1));
  return Math.max(256, Math.round(n / 64) * 64);
}
var Ge = {
    low: {
      maxPixelRatio: 1.5,
      minPixelRatio: 0.9,
      antialias: !1,
      rainParticles: 1e3,
      maxTextureSize: 1024,
      maxSignTextureSize: 1536,
      textureScale: 0.375,
      materials: `lambert`,
    },
    medium: {
      maxPixelRatio: 2,
      minPixelRatio: 1,
      antialias: !1,
      shadowMapSize: 1024,
      drawDistance: 560,
      maxPeds: 45,
      maxTrafficVehicles: 34,
      maxTextureSize: 2048,
      textureScale: 0.5,
    },
    high: {
      maxPixelRatio: 2,
      minPixelRatio: 1,
      shadowMapSize: 1024,
      drawDistance: 700,
      maxTextureSize: 2048,
      textureScale: 0.75,
    },
    ultra: { maxPixelRatio: 2.5, minPixelRatio: 1.1, maxTextureSize: 4096 },
  },
  Ke = null;
function qe() {
  if (Ke) return Ke;
  let { mobile: e, tablet: t } = He(),
    n = ``;
  try {
    let e = document.createElement(`canvas`),
      t = e.getContext(`webgl2`) || e.getContext(`webgl`);
    if (t) {
      let e = t.getExtension(`WEBGL_debug_renderer_info`);
      ((n =
        String(
          e
            ? t.getParameter(e.UNMASKED_RENDERER_WEBGL)
            : t.getParameter(t.RENDERER),
        ) || ``),
        t.getExtension(`WEBGL_lose_context`)?.loseContext());
    }
  } catch {}
  return (
    (Ke = {
      mobile: e,
      tablet: t,
      gpu: n,
      cores: navigator.hardwareConcurrency || 4,
      memory: navigator.deviceMemory,
    }),
    Ke
  );
}
function Je(e = qe()) {
  return !e.mobile || e.memory === void 0 || !(e.memory > 0)
    ? 0
    : e.memory <= 1
      ? 2
      : +(e.memory <= 2);
}
function Ye(e, t = qe()) {
  let n = Ue[e] ?? Ue.medium;
  if (!t.mobile) return { ...n, mobile: !1 };
  let r = { ...n, ...Ge[n.level], mobile: !0 };
  return (
    t.tablet &&
      (n.level === `low` || n.level === `medium`) &&
      (r.maxPixelRatio = Math.min(r.maxPixelRatio, 1.5)),
    r
  );
}
function Xe(e = qe()) {
  let t = e.gpu.toLowerCase();
  if (/swiftshader|llvmpipe|softpipe|microsoft basic render/.test(t))
    return `low`;
  if (e.mobile) {
    if (e.tablet) return `medium`;
    let n = /adreno[^0-9]*(\d{3})/.exec(t);
    return (n && Number(n[1]) >= 730) ||
      /immortalis|mali-g7[1-9]0|mali-g9\d\d/.test(t)
      ? `medium`
      : `low`;
  }
  let n = e.cores <= 4 || (e.memory !== void 0 && e.memory <= 4);
  return /intel|uhd|iris|hd graphics|mali|adreno|powervr|videocore|vivante/.test(
    t,
  ) || /radeon\(tm\) graphics|radeon graphics|vega \d+ graphics/.test(t)
    ? `medium`
    : /apple m\d|apple gpu/.test(t)
      ? n || e.cores < 8
        ? `medium`
        : `high`
      : (/nvidia|geforce|rtx|gtx|quadro|radeon|amd|arc a\d/.test(t),
        n ? `medium` : `high`);
}
var D = (function (e) {
    return (
      (e[(e.AABB = 0)] = `AABB`),
      (e[(e.OBB = 1)] = `OBB`),
      (e[(e.Circle = 2)] = `Circle`),
      e
    );
  })({}),
  Ze = 16,
  Qe = 1792,
  $e = Math.ceil((Qe * 2) / Ze);
function O(e) {
  let t = Math.floor((e + Qe) / Ze);
  return t < 0 ? 0 : t >= $e ? 223 : t;
}
var et = class {
    bits;
    pages;
    pn;
    m;
    constructor(e, t) {
      ((this.bits = t),
        (this.pn = Math.ceil(e / (1 << t))),
        (this.m = (1 << t) - 1),
        (this.pages = Array(this.pn * this.pn)));
    }
    get(e, t) {
      let n = this.bits,
        r = this.pages[(t >> n) * this.pn + (e >> n)];
      return r === void 0 ? void 0 : r[((t & this.m) << n) | (e & this.m)];
    }
    getOr(e, t, n) {
      let r = this.bits,
        i = (t >> r) * this.pn + (e >> r),
        a = this.pages[i];
      a === void 0 && (this.pages[i] = a = Array(1 << (2 * r)));
      let o = ((t & this.m) << r) | (e & this.m),
        s = a[o];
      return (s === void 0 && (a[o] = s = n()), s);
    }
    get allocated() {
      let e = 0;
      for (let t = 0; t < this.pages.length; t++) this.pages[t] && e++;
      return e;
    }
  },
  tt = 4,
  nt = () => [],
  rt = () => [];
function it() {
  return { x: 0, z: 0, nx: 0, nz: 0, depth: 0, hit: !1, tag: `` };
}
var at = {
    kind: D.AABB,
    minX: 0,
    minZ: 0,
    maxX: 0,
    maxZ: 0,
    minY: 0,
    maxY: 0,
    cx: 0,
    cz: 0,
    hx: 0,
    hz: 0,
    cos: 1,
    sin: 0,
    tag: ``,
    _stamp: 0,
    disabled: !0,
    _idx: -1,
  },
  ot = class {
    colliders = [];
    cells = new et($e, tt);
    stamp = 1;
    floors = [];
    floorCells = new et($e, tt);
    group = null;
    beginGroup(e) {
      let t = e ?? { colliders: [], floors: [], removed: !1 };
      return ((this.group = t), t);
    }
    endGroup() {
      this.group = null;
    }
    removeGroup(e) {
      if (e.removed) return 0;
      ((e.removed = !0), this.group === e && (this.group = null));
      let t = 0;
      for (let n of e.colliders) this.remove(n) && t++;
      for (let n of e.floors) this.removeFloor(n) && t++;
      return ((e.colliders.length = 0), (e.floors.length = 0), t);
    }
    pageStats() {
      return {
        colliders: this.cells.allocated,
        floors: this.floorCells.allocated,
      };
    }
    addFloor(e, t, n, r, i, a = i, o = 0, s = `floor`) {
      let c = Math.cos(o),
        l = Math.sin(o),
        u = Math.abs(c) * n + Math.abs(l) * r,
        d = Math.abs(l) * n + Math.abs(c) * r,
        f = {
          cx: e,
          cz: t,
          hx: n,
          hz: r,
          cos: c,
          sin: l,
          y0: i,
          y1: a,
          tag: s,
          minX: e - u,
          minZ: t - d,
          maxX: e + u,
          maxZ: t + d,
          _stamp: 0,
          _fi: this.floors.length,
        };
      this.floors.push(f);
      let p = O(f.minX),
        m = O(f.maxX),
        h = O(f.minZ),
        g = O(f.maxZ);
      for (let e = h; e <= g; e++)
        for (let t = p; t <= m; t++) this.floorCells.getOr(t, e, rt).push(f);
      return (this.group?.floors.push(f), f);
    }
    setDisabledIn(e, t, n, r, i, a) {
      let o = [],
        s = ++this.stamp,
        c = O(e),
        l = O(n),
        u = O(t),
        d = O(r);
      for (let f = u; f <= d; f++)
        for (let u = c; u <= l; u++) {
          let c = this.cells.get(u, f);
          if (c)
            for (let l = 0; l < c.length; l++) {
              let u = this.colliders[c[l]];
              u._stamp !== s &&
                ((u._stamp = s),
                !(u.maxX < e || u.minX > n || u.maxZ < t || u.minZ > r) &&
                  (!a || a(u)) &&
                  ((u.disabled = i), o.push(u)));
            }
        }
      return o;
    }
    removeFloor(e) {
      let t = e._fi ?? -1;
      if (
        ((t < 0 || this.floors[t] !== e) && (t = this.floors.indexOf(e)), t < 0)
      )
        return !1;
      let n = this.floors[this.floors.length - 1];
      ((this.floors[t] = n), (n._fi = t), this.floors.pop(), (e._fi = -1));
      let r = O(e.minX),
        i = O(e.maxX),
        a = O(e.minZ),
        o = O(e.maxZ);
      for (let t = a; t <= o; t++)
        for (let n = r; n <= i; n++) {
          let r = this.floorCells.get(n, t);
          if (!r) continue;
          let i = r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        }
      return !0;
    }
    addFloorRect(e, t, n, r, i, a = `floor`) {
      return this.addFloor(
        (e + n) / 2,
        (t + r) / 2,
        (n - e) / 2,
        (r - t) / 2,
        i,
        i,
        0,
        a,
      );
    }
    floorHeightOf(e, t, n) {
      let r = t - e.cx,
        i = n - e.cz,
        a = r * e.cos + i * e.sin,
        o = -r * e.sin + i * e.cos;
      return a < -e.hx || a > e.hx || o < -e.hz || o > e.hz
        ? NaN
        : e.y0 === e.y1
          ? e.y0
          : e.y0 + (e.y1 - e.y0) * ((o + e.hz) / (2 * e.hz));
    }
    floorAt(e, t, n, r = 0.45) {
      let i = this.floorCells.get(O(e), O(t));
      if (!i) return -1 / 0;
      let a = -1 / 0;
      for (let o = 0; o < i.length; o++) {
        let s = this.floorHeightOf(i[o], e, t);
        s === s && s <= n + r && s > a && (a = s);
      }
      return a;
    }
    floorsAt(e, t, n) {
      n.length = 0;
      let r = this.floorCells.get(O(e), O(t));
      if (!r) return 0;
      for (let i of r) Number.isNaN(this.floorHeightOf(i, e, t)) || n.push(i);
      return n.length;
    }
    get count() {
      return this.colliders.length - this.freeSlots.length;
    }
    freeSlots = [];
    insert(e) {
      let t;
      (this.freeSlots.length
        ? ((t = this.freeSlots.pop()), (this.colliders[t] = e))
        : ((t = this.colliders.length), this.colliders.push(e)),
        (e._idx = t));
      let n = O(e.minX),
        r = O(e.maxX),
        i = O(e.minZ),
        a = O(e.maxZ);
      for (let e = i; e <= a; e++)
        for (let i = n; i <= r; i++) this.cells.getOr(i, e, nt).push(t);
      return (this.group?.colliders.push(e), e);
    }
    remove(e) {
      let t = e._idx ?? this.colliders.indexOf(e);
      if (t === void 0 || t < 0 || this.colliders[t] !== e) return !1;
      let n = O(e.minX),
        r = O(e.maxX),
        i = O(e.minZ),
        a = O(e.maxZ);
      for (let e = i; e <= a; e++)
        for (let i = n; i <= r; i++) {
          let n = this.cells.get(i, e);
          if (!n) continue;
          let r = n.indexOf(t);
          r >= 0 && ((n[r] = n[n.length - 1]), n.pop());
        }
      return (
        (e.disabled = !0),
        (e._idx = -1),
        (this.colliders[t] = at),
        this.freeSlots.push(t),
        !0
      );
    }
    addBox(e, t, n, r, i = 0, a = 1e3, o = `building`) {
      return this.insert({
        kind: D.AABB,
        minX: e,
        minZ: t,
        maxX: n,
        maxZ: r,
        minY: i,
        maxY: a,
        cx: (e + n) / 2,
        cz: (t + r) / 2,
        hx: (n - e) / 2,
        hz: (r - t) / 2,
        cos: 1,
        sin: 0,
        tag: o,
        _stamp: 0,
      });
    }
    addOBB(e, t, n, r, i, a = 0, o = 1e3, s = `building`) {
      if (Math.abs(Math.sin(i)) < 1e-4 || Math.abs(Math.cos(i)) < 1e-4) {
        let c = Math.abs(Math.sin(i)) > 0.5,
          l = c ? r : n,
          u = c ? n : r;
        return this.addBox(e - l, t - u, e + l, t + u, a, o, s);
      }
      let c = Math.cos(i),
        l = Math.sin(i),
        u = Math.abs(c) * n + Math.abs(l) * r,
        d = Math.abs(l) * n + Math.abs(c) * r;
      return this.insert({
        kind: D.OBB,
        minX: e - u,
        minZ: t - d,
        maxX: e + u,
        maxZ: t + d,
        minY: a,
        maxY: o,
        cx: e,
        cz: t,
        hx: n,
        hz: r,
        cos: c,
        sin: l,
        tag: s,
        _stamp: 0,
      });
    }
    addCircle(e, t, n, r = 0, i = 1e3, a = `pole`) {
      return this.insert({
        kind: D.Circle,
        minX: e - n,
        minZ: t - n,
        maxX: e + n,
        maxZ: t + n,
        minY: r,
        maxY: i,
        cx: e,
        cz: t,
        hx: n,
        hz: n,
        cos: 1,
        sin: 0,
        tag: a,
        _stamp: 0,
      });
    }
    query(e, t, n, r, i) {
      let a = ++this.stamp,
        o = 0,
        s = O(e),
        c = O(n),
        l = O(t),
        u = O(r);
      for (let d = l; d <= u; d++)
        for (let l = s; l <= c; l++) {
          let s = this.cells.get(l, d);
          if (s)
            for (let c = 0; c < s.length; c++) {
              let l = this.colliders[s[c]];
              l._stamp !== a &&
                ((l._stamp = a),
                !l.disabled &&
                  (l.maxX < e ||
                    l.minX > n ||
                    l.maxZ < t ||
                    l.minZ > r ||
                    (i[o++] = l)));
            }
        }
      return ((i.length = o), o);
    }
    tmp = [];
    satAxes = new Float64Array(8);
    resolveCircle(e, t, n, r = it()) {
      ((r.x = r.z = r.nx = r.nz = r.depth = 0), (r.hit = !1), (r.tag = ``));
      for (let i = 0; i < 2; i++) {
        let i = this.query(e.x - t, e.z - t, e.x + t, e.z + t, this.tmp),
          a = !1;
        for (let o = 0; o < i; o++) {
          let i = this.tmp[o];
          if (e.y >= i.maxY - 0.05 || e.y + n <= i.minY) continue;
          let s,
            c,
            l = 0,
            u = 0;
          if (i.kind === D.Circle) {
            let n = e.x - i.cx,
              o = e.z - i.cz,
              s = Math.hypot(n, o),
              c = t + i.hx - s;
            if (c <= 0) continue;
            let l = s > 1e-6 ? n / s : 1,
              u = s > 1e-6 ? o / s : 0;
            ((e.x += l * c),
              (e.z += u * c),
              this.acc(r, l * c, u * c, l, u, c, i.tag),
              (a = !0));
            continue;
          }
          if (i.kind === D.AABB) ((l = e.x - i.cx), (u = e.z - i.cz));
          else {
            let t = e.x - i.cx,
              n = e.z - i.cz;
            ((l = t * i.cos + n * i.sin), (u = -t * i.sin + n * i.cos));
          }
          let d = Math.max(-i.hx, Math.min(i.hx, l)),
            f = Math.max(-i.hz, Math.min(i.hz, u)),
            p = l - d,
            m = u - f,
            h = Math.hypot(p, m),
            g;
          if (h > 1e-6) {
            if (((g = t - h), g <= 0)) continue;
            ((p /= h), (m /= h));
          } else {
            let e = i.hx - Math.abs(l),
              n = i.hz - Math.abs(u);
            e < n
              ? ((p = Math.sign(l) || 1), (m = 0), (g = e + t))
              : ((p = 0), (m = Math.sign(u) || 1), (g = n + t));
          }
          let _ = p,
            v = m;
          (i.kind === D.OBB &&
            ((_ = p * i.cos - m * i.sin), (v = p * i.sin + m * i.cos)),
            (s = _ * g),
            (c = v * g),
            (e.x += s),
            (e.z += c),
            this.acc(r, s, c, _, v, g, i.tag),
            (a = !0));
        }
        if (!a) break;
      }
      return r;
    }
    resolveRect(e, t, n, r, i, a = it(), o) {
      ((a.x = a.z = a.nx = a.nz = a.depth = 0), (a.hit = !1), (a.tag = ``));
      let s = Math.cos(t),
        c = Math.sin(t),
        l = s,
        u = c,
        d = -c,
        f = s,
        p = Math.hypot(n, r);
      for (let t = 0; t < 3; t++) {
        let t = this.query(e.x - p, e.z - p, e.x + p, e.z + p, this.tmp),
          s = !1;
        for (let c = 0; c < t; c++) {
          let t = this.tmp[c];
          if (
            e.y >= t.maxY - 0.05 ||
            e.y + i <= t.minY ||
            (o !== void 0 && t.tag === o)
          )
            continue;
          let p = 1 / 0,
            m = 0,
            h = 0,
            g = t.cx - e.x,
            _ = t.cz - e.z;
          if (t.kind === D.Circle) {
            let e = g * l + _ * u,
              i = g * d + _ * f,
              a = Math.max(-n, Math.min(n, e)),
              o = Math.max(-r, Math.min(r, i)),
              s = e - a,
              c = i - o,
              v = Math.hypot(s, c),
              y;
            if (v > 1e-6) {
              if (((y = t.hx - v), y <= 0)) continue;
              ((s /= v), (c /= v));
            } else {
              let a = n - Math.abs(e),
                o = r - Math.abs(i);
              a < o
                ? ((s = Math.sign(e) || 1), (c = 0), (y = a + t.hx))
                : ((s = 0), (c = Math.sign(i) || 1), (y = o + t.hx));
            }
            ((m = -(s * l + c * d)), (h = -(s * u + c * f)), (p = y));
          } else {
            let e = t.cos,
              i = t.sin,
              a = -t.sin,
              o = t.cos,
              s = this.satAxes;
            ((s[0] = l),
              (s[1] = u),
              (s[2] = d),
              (s[3] = f),
              (s[4] = e),
              (s[5] = i),
              (s[6] = a),
              (s[7] = o));
            let c = !1;
            for (let v = 0; v < 8; v += 2) {
              let y = s[v],
                b = s[v + 1],
                ee = n * Math.abs(l * y + u * b) + r * Math.abs(d * y + f * b),
                x =
                  t.hx * Math.abs(e * y + i * b) +
                  t.hz * Math.abs(a * y + o * b),
                S = g * y + _ * b,
                C = ee + x - Math.abs(S);
              if (C <= 0) {
                c = !0;
                break;
              }
              if (C < p) {
                p = C;
                let e = S > 0 ? -1 : 1;
                ((m = y * e), (h = b * e));
              }
            }
            if (c) continue;
          }
          ((e.x += m * p),
            (e.z += h * p),
            this.acc(a, m * p, h * p, m, h, p, t.tag),
            (s = !0));
        }
        if (!s) break;
      }
      return a;
    }
    acc(e, t, n, r, i, a, o) {
      ((e.x += t),
        (e.z += n),
        (e.hit = !0),
        a > e.depth && ((e.depth = a), (e.nx = r), (e.nz = i), (e.tag = o)));
    }
    overlapsRect(e, t, n, r, i = 0.5) {
      let a = this.query(e, t, n, r, this.tmp);
      for (let o = 0; o < a; o++) {
        let a = this.tmp[o];
        if (i >= a.maxY || i < a.minY) continue;
        if (a.kind === D.AABB) return !0;
        let s = Math.max(e, Math.min(n, a.cx)),
          c = Math.max(t, Math.min(r, a.cz));
        if (a.kind !== D.Circle || Math.hypot(s - a.cx, c - a.cz) < a.hx)
          return !0;
      }
      return !1;
    }
    raycast(e, t, n, r, i) {
      let a = n,
        o = null,
        s = 0,
        c = 0,
        l = 0,
        u = e.x + t.x * n,
        d = e.z + t.z * n,
        f = this.query(
          Math.min(e.x, u),
          Math.min(e.z, d),
          Math.max(e.x, u),
          Math.max(e.z, d),
          this.tmp,
        );
      for (let n = 0; n < f; n++) {
        let r = this.tmp[n];
        if (i !== void 0 && r.tag === i) continue;
        let u,
          d = 0,
          f = 0,
          p = 0;
        if (r.kind === D.Circle) {
          let n = e.x - r.cx,
            i = e.z - r.cz,
            a = t.x * t.x + t.z * t.z;
          if (a < 1e-9) continue;
          let o = n * t.x + i * t.z,
            s = n * n + i * i - r.hx * r.hx,
            c = o * o - a * s;
          if (c < 0 || ((u = (-o - Math.sqrt(c)) / a), u < 0)) continue;
          let l = e.y + t.y * u;
          if (l < r.minY || l > r.maxY) continue;
          ((d = (n + t.x * u) / r.hx), (p = (i + t.z * u) / r.hx));
        } else {
          let n = e.x - r.cx,
            i = e.z - r.cz,
            a = t.x,
            o = t.z;
          if (r.kind === D.OBB) {
            let e = n * r.cos + i * r.sin,
              t = -n * r.sin + i * r.cos,
              s = a * r.cos + o * r.sin,
              c = -a * r.sin + o * r.cos;
            ((n = e), (i = t), (a = s), (o = c));
          }
          let s = -1 / 0,
            c = 1 / 0,
            l = -1,
            m = 0;
          if (Math.abs(a) < 1e-9) {
            if (n < -r.hx || n > r.hx) continue;
          } else {
            let e = (-r.hx - n) / a,
              t = (r.hx - n) / a,
              i = -1;
            if (e > t) {
              let n = e;
              ((e = t), (t = n), (i = 1));
            }
            (e > s && ((s = e), (l = 0), (m = i)), (c = Math.min(c, t)));
          }
          let h = e.y,
            g = t.y;
          if (Math.abs(g) < 1e-9) {
            if (h < r.minY || h > r.maxY) continue;
          } else {
            let e = (r.minY - h) / g,
              t = (r.maxY - h) / g,
              n = -1;
            if (e > t) {
              let r = e;
              ((e = t), (t = r), (n = 1));
            }
            (e > s && ((s = e), (l = 1), (m = n)), (c = Math.min(c, t)));
          }
          if (Math.abs(o) < 1e-9) {
            if (i < -r.hz || i > r.hz) continue;
          } else {
            let e = (-r.hz - i) / o,
              t = (r.hz - i) / o,
              n = -1;
            if (e > t) {
              let r = e;
              ((e = t), (t = r), (n = 1));
            }
            (e > s && ((s = e), (l = 2), (m = n)), (c = Math.min(c, t)));
          }
          if (c < Math.max(s, 0) || s < 0) continue;
          u = s;
          let _ = l === 0 ? m : 0,
            v = l === 2 ? m : 0;
          if (((f = l === 1 ? m : 0), r.kind === D.OBB)) {
            let e = _ * r.cos - v * r.sin,
              t = _ * r.sin + v * r.cos;
            ((_ = e), (v = t));
          }
          ((d = _), (p = v));
        }
        u < a && ((a = u), (o = r), (s = d), (c = f), (l = p));
      }
      return o
        ? (r &&
            ((r.distance = a),
            r.point.copy(e).addScaledVector(t, a),
            r.normal.set(s, c, l),
            (r.tag = o.tag),
            (r.body = null)),
          !0)
        : !1;
    }
  },
  st = 1;
function ct() {
  return st++;
}
var lt = 8,
  ut = Math.ceil((Qe * 2) / lt),
  dt = 5,
  ft = 31,
  pt = Math.ceil(ut / 32);
function k(e) {
  let t = Math.floor((e + Qe) / lt);
  return t < 0 ? 0 : t >= ut ? 447 : t;
}
var mt = 1,
  ht = class {
    bodies = new Set();
    list = [];
    pages = Array(196);
    touched = new Int32Array(1024);
    nTouched = 0;
    get pageCount() {
      let e = 0;
      for (let t = 0; t < this.pages.length; t++) this.pages[t] && e++;
      return e;
    }
    add(e) {
      return (this.bodies.has(e) || (this.bodies.add(e), this.list.push(e)), e);
    }
    remove(e) {
      if (!this.bodies.delete(e)) return;
      let t = this.list.indexOf(e);
      t >= 0 &&
        ((this.list[t] = this.list[this.list.length - 1]), this.list.pop());
    }
    rebuild() {
      let e = this.pages;
      for (let t = 0; t < this.nTouched; t++) {
        let n = this.touched[t];
        e[n >> 10].counts[n & 1023] = 0;
      }
      this.nTouched = 0;
      let t = this.list;
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (!r.active) continue;
        let i = k(r.x - r.radius),
          a = k(r.x + r.radius),
          o = k(r.z - r.radius),
          s = k(r.z + r.radius);
        for (let t = o; t <= s; t++)
          for (let n = i; n <= a; n++) {
            let i = (t >> dt) * pt + (n >> dt),
              a = e[i];
            a ||
              (e[i] = a =
                { cells: Array(1024), counts: new Uint16Array(1024) });
            let o = ((t & ft) << dt) | (n & ft),
              s = a.cells[o];
            s || (a.cells[o] = s = []);
            let c = a.counts[o];
            if (c === 0) {
              if (this.nTouched === this.touched.length) {
                let e = new Int32Array(this.touched.length * 2);
                (e.set(this.touched), (this.touched = e));
              }
              this.touched[this.nTouched++] = (i << 10) | o;
            }
            c < 65535 && ((s[c] = r), (a.counts[o] = c + 1));
          }
      }
    }
    query(e, t, n, r, i) {
      let a = 0,
        o = ++mt,
        s = k(e - n),
        c = k(e + n),
        l = k(t - n),
        u = k(t + n),
        d = this.pages;
      for (let f = l; f <= u; f++)
        for (let l = s; l <= c; l++) {
          let s = d[(f >> dt) * pt + (l >> dt)];
          if (s === void 0) continue;
          let c = ((f & ft) << dt) | (l & ft),
            u = s.counts[c];
          if (u === 0) continue;
          let p = s.cells[c];
          for (let s = 0; s < u; s++) {
            let c = p[s];
            if (c._q === o || ((c._q = o), !c.active)) continue;
            let l = n + c.radius,
              u = c.x - e,
              d = c.z - t;
            u * u + d * d > l * l || ((!i || i(c)) && (r[a++] = c));
          }
        }
      return ((r.length = a), a);
    }
    qtmp = [];
    raycast(e, t, n, r, i) {
      let a = n,
        o = null,
        s = 0,
        c = 0,
        l = this.list;
      for (let n = 0; n < l.length; n++) {
        let i = l[n];
        if (!i.active || i === r) continue;
        let u = i.x - e.x,
          d = i.z - e.z;
        if (
          u * t.x + d * t.z < -i.radius ||
          u * u + d * d > (a + i.radius) ** 2
        )
          continue;
        let f = 1 / 0,
          p = 0,
          m = 0;
        if (i.kind === `vehicle`) {
          let n = Math.cos(i.heading),
            r = Math.sin(i.heading),
            o = (e.x - i.x) * n + (e.z - i.z) * r,
            s = -(e.x - i.x) * r + (e.z - i.z) * n,
            c = t.x * n + t.z * r,
            l = -t.x * r + t.z * n,
            u = 0,
            d = a,
            h = -1;
          if (Math.abs(c) < 1e-9) {
            if (o < -i.halfW || o > i.halfW) continue;
          } else {
            let e = (-i.halfW - o) / c,
              t = (i.halfW - o) / c;
            if (e > t) {
              let n = e;
              ((e = t), (t = n));
            }
            if ((e > u && ((u = e), (h = 0)), t < d && (d = t), u > d))
              continue;
          }
          if (Math.abs(l) < 1e-9) {
            if (s < -i.halfL || s > i.halfL) continue;
          } else {
            let e = (-i.halfL - s) / l,
              t = (i.halfL - s) / l;
            if (e > t) {
              let n = e;
              ((e = t), (t = n));
            }
            if ((e > u && ((u = e), (h = 2)), t < d && (d = t), u > d))
              continue;
          }
          let g = e.y + t.y * u;
          if (g < i.y || g > i.y + i.height) continue;
          f = u;
          let _ = h === 0 ? -Math.sign(c) : 0,
            v = h === 2 ? -Math.sign(l) : 0;
          ((p = _ * n - v * r), (m = _ * r + v * n));
        } else {
          let n = e.x - i.x,
            r = e.z - i.z,
            a = t.x * t.x + t.z * t.z;
          if (a < 1e-9) continue;
          let o = n * t.x + r * t.z,
            s = n * n + r * r - i.radius * i.radius,
            c = o * o - a * s;
          if (c < 0) continue;
          ((f = (-o - Math.sqrt(c)) / a), f < 0 && (f = 0));
          let l = e.y + t.y * f;
          if (l < i.y || l > i.y + i.height) continue;
          ((p = (n + t.x * f) / i.radius), (m = (r + t.z * f) / i.radius));
        }
        f < a && ((a = f), (o = i), (s = p), (c = m));
      }
      return (
        o &&
          i &&
          ((i.distance = a),
          i.point.copy(e).addScaledVector(t, a),
          i.normal.set(s, 0, c),
          (i.tag = o.kind),
          (i.body = o)),
        o
      );
    }
  };
function gt() {
  return {
    distance: 0,
    point: new Te(),
    normal: new Te(),
    tag: ``,
    body: null,
  };
}
(gt(), gt());
function A(e) {
  return (
    !!e &&
    typeof e == `object` &&
    typeof e.version == `number` &&
    Number(e.version) > 1
  );
}
var _t = `open`,
  vt = {
    url: `https://auth.taipei-rush.app`.replace(/\/$/, ``),
    publishableKey: `sb_publishable_NLgL_rFWz2yEugLly54P-g_smO0obVw`,
    siteKey: `0x4AAAAAAFPvFluW05hu9g3O`,
  },
  yt = [`goldfish`, `rings`, `pinball`];
function bt(e) {
  let t = (e ?? ``).trim();
  if (!t || t === `0`) return [];
  if (t === `1` || t === `all`) return yt;
  let n = t.split(`,`).map((e) => e.trim());
  return yt.filter((e) => n.includes(e));
}
bt(`1`);
var j = `tokyo-rush-save-v1`,
  xt = `taipei-rush-cloud-session-v1`,
  St = `${j}:cloud-v1`,
  Ct = `taipei-rush-cloud-account-v1`,
  wt = Ct,
  M = `${j}:identities-v1`,
  Tt = `taipei-rush-device-v1`,
  Et = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`];
function Dt() {
  let e = P(Tt),
    t = {};
  if (!e) return t;
  (typeof e.quality == `string` &&
    /^(auto|low|medium|high|ultra)$/.test(e.quality) &&
    (t.quality = e.quality),
    typeof e.showFps == `boolean` && (t.showFps = e.showFps));
  for (let n of [`masterVolume`, `musicVolume`, `sfxVolume`]) {
    let r = e[n];
    typeof r == `number` &&
      Number.isFinite(r) &&
      (t[n] = Math.max(0, Math.min(1, r)));
  }
  return t;
}
function N() {
  let e = P(M);
  return e &&
    typeof e.active == `string` &&
    e.slots &&
    typeof e.slots == `object`
    ? e
    : null;
}
function Ot() {
  if (N()) return !0;
  let e = ln(),
    t = Yt(),
    n =
      e?.anonymous === !1 && !tn().signedOut && t?.userId === e.user_id
        ? e.user_id
        : `guest`,
    r = I();
  return F(M, {
    active: n,
    slots: { [n]: { data: r, backups: [], ...(t ? { sync: t } : {}) } },
  });
}
function kt() {
  return N()?.active ?? `guest`;
}
function At(e) {
  return N()?.slots[e]?.data ?? null;
}
function jt(e) {
  if (e === `tokyo-rush-save-v1`) return P(e);
  let t = P(`${e}:identities-v1`),
    n = kt();
  return t?.active === n
    ? P(e)
    : (t?.slots?.[n]?.data ?? (n === `guest` && !t ? P(e) : null));
}
function Mt(e, t = !1) {
  if (!Ot()) return !1;
  let n = N();
  if (A(I()) || A(n.slots[e]?.data)) return !1;
  if (e === n.active) return !0;
  let r = I();
  n.slots[n.active].data = r;
  let i = n.slots.guest,
    a = !n.slots[e],
    o = n.slots[e] ?? { data: i?.data ?? null, backups: [] };
  (a && e !== `guest` && o.data !== null && (o.adopted = !0),
    t && i?.sync?.userId === e && ((o.sync = i.sync), delete o.adopted),
    (n.slots[e] = o),
    (n.active = e));
  for (let t of tn().deleted ?? [])
    t !== e && t !== `guest` && delete n.slots[t];
  let s = N();
  if (!F(M, n)) return !1;
  try {
    return (
      o.data === null
        ? localStorage.removeItem(j)
        : localStorage.setItem(j, JSON.stringify(o.data)),
      !0
    );
  } catch {
    return (F(M, s), !1);
  }
}
function Nt() {
  let e = N(),
    t = e?.slots[e.active];
  return !!t && t.adopted === !0 && t.sync?.userId !== e.active;
}
function Pt(e) {
  let t = N();
  if (!t) return !1;
  let n = t.slots[t.active];
  return (delete n.adopted, e && (n.notice = e), F(M, t));
}
function Ft() {
  let e = N(),
    t = e?.slots[e.active];
  if (!e || !t?.notice) return null;
  let n = t.notice;
  return (delete t.notice, F(M, e), n);
}
function It(e, t = M) {
  let n = P(t);
  n?.slots &&
    e !== `guest` &&
    n.active !== e &&
    n.slots[e] &&
    (delete n.slots[e], F(t, n));
}
function Lt() {
  try {
    let e = `taipei-rush-storage-probe`;
    localStorage.setItem(e, `1`);
    let t = localStorage.getItem(e) === `1`;
    return (localStorage.removeItem(e), t);
  } catch {
    return !1;
  }
}
function Rt() {
  return N()?.slots[kt()]?.backups ?? [];
}
function zt(e, t = !1, n) {
  if (e === null || A(e) || !Ot()) return null;
  let r = N(),
    i = r.slots[r.active],
    a = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      data: e,
      ...(n ? { reason: n } : {}),
    };
  return (
    (i.backups = [a, ...i.backups].slice(0, 3)),
    t && (i.undo = a.id),
    F(M, r) ? a : null
  );
}
function Bt() {
  let e = N();
  if (!e) return null;
  let t = e.slots[e.active],
    n = t.backups.find((e) => e.id === t.undo) ?? null;
  return (delete t.undo, F(M, e), n);
}
function P(e) {
  try {
    let t = localStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function F(e, t) {
  try {
    return (localStorage.setItem(e, JSON.stringify(t)), !0);
  } catch {
    return !1;
  }
}
function Vt(e) {
  return P(e);
}
var Ht = `${j}:paid-v1`,
  Ut = () => kt();
function Wt() {
  let e = P(Ht);
  return e && typeof e == `object` && !Array.isArray(e)
    ? (e[Ut()] ?? null)
    : null;
}
function Gt(e) {
  let t = P(Ht),
    n = t && typeof t == `object` && !Array.isArray(t) ? t : {};
  return ((n[Ut()] = e), F(Ht, n));
}
function Kt(e) {
  let t = localStorage.getItem(e);
  return t === null ? null : JSON.parse(t);
}
function qt(e, t) {
  return F(e, t);
}
function Jt(e) {
  try {
    localStorage.removeItem(e);
  } catch {}
}
function Yt() {
  let e = N(),
    t = e ? e.slots[e.active]?.sync : P(St);
  return t &&
    typeof t.userId == `string` &&
    /^[\da-f-]{36}$/i.test(t.userId) &&
    typeof t.revision == `number` &&
    Number.isSafeInteger(t.revision) &&
    t.revision >= 0 &&
    typeof t.dirty == `boolean`
    ? { userId: t.userId, revision: t.revision, dirty: t.dirty }
    : null;
}
function Xt() {
  let e = N()?.slots[kt()]?.syncedAt;
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function Zt(e) {
  let t = N();
  return t ? ((t.slots[t.active].syncedAt = e), F(M, t)) : !1;
}
function Qt(e) {
  let t = N();
  return t ? ((t.slots[t.active].sync = e), F(M, t)) : F(St, e);
}
function $t() {
  let e = Yt();
  e && Qt({ ...e, dirty: !0 });
}
function en() {
  let e = N();
  e && (delete e.slots[e.active].sync, F(M, e));
  try {
    localStorage.removeItem(St);
  } catch {}
}
function tn() {
  let e = P(Ct),
    t = {
      signedOut: e?.signedOut === !0,
      pendingPassword: e?.pendingPassword === !0,
    },
    n = e?.pending;
  return (
    n &&
      typeof n.email == `string` &&
      [`signup`, `convert`, `email_change`].includes(n.kind) &&
      typeof n.at == `number` &&
      (t.pending = { email: n.email, kind: n.kind, at: n.at }),
    e?.expired &&
      typeof e.expired == `object` &&
      (t.expired =
        typeof e.expired.email == `string` ? { email: e.expired.email } : {}),
    typeof e?.pendingUser == `string` && (t.pendingUser = e.pendingUser),
    Array.isArray(e?.deleted) &&
      (t.deleted = e.deleted.filter((e) => typeof e == `string`).slice(-10)),
    t
  );
}
function nn(e) {
  let t = { ...tn(), ...e };
  for (let e of Object.keys(t)) t[e] === void 0 && delete t[e];
  return F(Ct, t);
}
function I() {
  try {
    let e = localStorage.getItem(j);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function rn(e) {
  try {
    if (A(I()) || A(e)) return !1;
    if (e && typeof e == `object` && `settings` in e) {
      let t = e.settings,
        n = Object.fromEntries(
          Et.filter((e) => t?.[e] !== void 0).map((e) => [e, t[e]]),
        );
      if (!F(Tt, { ...Dt(), ...n })) return !1;
    }
    let t = N();
    return t && ((t.slots[t.active].data = e), !F(M, t))
      ? !1
      : (localStorage.setItem(j, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function an() {
  try {
    if (A(I())) return;
    let e = N();
    if (e && ((e.slots[e.active].data = null), !F(M, e))) return;
    localStorage.removeItem(j);
  } catch {}
}
var on = `tokyo-rush-device-v1`;
function sn() {
  try {
    return localStorage.getItem(on);
  } catch {
    return null;
  }
}
function cn(e) {
  try {
    return (localStorage.setItem(on, e), !0);
  } catch {
    return !1;
  }
}
function ln() {
  try {
    let e = localStorage.getItem(xt);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function un(e) {
  try {
    return (localStorage.setItem(xt, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function dn() {
  try {
    localStorage.removeItem(xt);
  } catch {}
}
var fn = 0.25,
  pn = 36e5,
  mn = [1, 0.7, 0.45, 0.3, 0.2],
  hn = mn.length,
  gn = 200,
  _n = (e) => typeof e == `string` && e.length > 0 && e.length < 200;
function vn(e) {
  let t = e.payLog,
    n = {};
  if (!t || typeof t != `object` || Array.isArray(t)) return n;
  for (let [e, r] of Object.entries(t)) {
    if (!_n(e) || !Array.isArray(r)) continue;
    let t = r
      .filter((e) => typeof e == `number` && Number.isFinite(e))
      .slice(-hn);
    t.length && (n[e] = t);
  }
  return n;
}
function yn(e, t, n = Date.now()) {
  let r = vn(e)[t];
  return r ? r.filter((e) => n - e < pn).length : 0;
}
var bn = (e) => mn[Math.max(0, Math.min(mn.length - 1, Math.floor(e) || 0))];
function xn(e, t, n = Date.now()) {
  let r = vn(e),
    i = bn((r[t] ?? []).filter((e) => n - e < pn).length);
  for (let e of Object.keys(r))
    ((r[e] = r[e].filter((e) => n - e < pn)), r[e].length || delete r[e]);
  r[t] = [...(r[t] ?? []), n].slice(-hn);
  let a = Object.keys(r);
  if (a.length > gn) {
    a.sort((e, t) => Math.max(...r[e]) - Math.max(...r[t]));
    for (let e of a.slice(0, a.length - gn)) delete r[e];
  }
  return ((e.payLog = r), i);
}
function Sn(e) {
  return Array.isArray(e.claimed) ? e.claimed.filter(_n) : [];
}
var Cn = (e, t) => Sn(e).includes(t);
function wn(e, t) {
  if (!_n(t)) return !1;
  let n = Sn(e);
  return !n.includes(t) && (n.push(t), (e.claimed = n.slice(-4e3)), !0);
}
function Tn(e, t) {
  let n = new Set(Sn(e));
  if (Array.isArray(e.completedMissions))
    for (let t of e.completedMissions) _n(t) && n.add(`mission:${t}`);
  if (Array.isArray(e.collectibles))
    for (let t of e.collectibles) _n(t) && n.add(`collectible:${t}`);
  t.claimed = [...n].slice(-4e3);
  let r = vn(e);
  Object.keys(r).length && (t.payLog = r);
}
function En(e) {
  return { claimed: Sn(e), payLog: vn(e) };
}
function Dn(e, t) {
  if (!t || typeof t != `object` || Array.isArray(t)) return;
  let n = t,
    r = new Set([...Sn(e), ...Sn(n)]);
  r.size && (e.claimed = [...r].slice(-4e3));
  let i = vn(e);
  for (let [e, t] of Object.entries(vn(n)))
    i[e] = [...new Set([...(i[e] ?? []), ...t])]
      .sort((e, t) => e - t)
      .slice(-hn);
  Object.keys(i).length && (e.payLog = i);
}
function On(e) {
  if (!(e < 1)) return null;
  let t = Math.round((1 - e) * 100);
  return {
    zh: r.on
      ? r.t(
          `一小時內重複同一份工作 −${t}%`,
          `1時間以内に同じ仕事の繰り返し −${t}%`,
        )
      : `一小時內重複同一份工作 −${t}%`,
    en: `Same job again within the hour −${t}%`,
  };
}
function kn(e, t, n, r, i = Date.now()) {
  let a = Number.isFinite(n) ? Math.max(0, n) : 0;
  r.replay && (a *= fn);
  let o = xn(e, t, i);
  return (
    (a *= o),
    r.blessed && (a *= 1.1),
    { pay: Math.max(0, Math.round(a)), share: o }
  );
}
var An = {
  TWD: {
    code: `TWD`,
    unitsPer: 5,
    symbol: `NT$`,
    name: { zh: `新臺幣`, en: `New Taiwan dollar` },
  },
  JPY: {
    code: `JPY`,
    unitsPer: 1,
    symbol: `¥`,
    name: { zh: `日圓`, en: `Japanese yen` },
  },
};
function jn(e, t) {
  return Math.round(e) * An[t].unitsPer;
}
function Mn(e, t) {
  return Math.floor(e / An[t].unitsPer);
}
var Nn = (e) => e === `zh` || e === `en` || e === `ja`;
function Pn() {
  let e = Fn();
  if (e) return e;
  try {
    let e = I()?.settings?.lang;
    if (Nn(e)) return e;
  } catch {}
  return Ln.lang;
}
function Fn() {
  try {
    let e =
      typeof location < `u`
        ? new URLSearchParams(location.search).get(`lang`)
        : null;
    return Nn(e) ? e : null;
  } catch {
    return null;
  }
}
function In() {
  return `ja`;
}
var Ln = {
    lang: In(),
    quality: `auto`,
    masterVolume: 0.8,
    musicVolume: 0.6,
    sfxVolume: 0.9,
    sensitivity: 1,
    invertY: !1,
    showFps: !1,
    frameRate: `auto`,
  },
  Rn = class e {
    events;
    data;
    saveTimer = 0;
    beforeSave = [];
    world = 1;
    region = `tokyo`;
    currency = `JPY`;
    shared;
    seen;
    constructor(t) {
      ((this.events = t),
        (this.data = e.load()),
        (this.seen = this.data.lastPlayedAt));
      let n = Fn();
      (n
        ? (this.data.settings.lang = n)
        : !this.data.langPicked || this.data.langJa
          ? (this.data.settings.lang = `ja`)
          : this.data.settings.lang === `ja` &&
            (this.data.settings.lang = `zh`),
        (r.on = this.data.settings.lang === `ja`),
        (this.shared = new Fe(this, (e) =>
          this.events.emit(`money:changed`, {
            money: e,
            delta: 0,
            reason: `wallet:sync`,
          }),
        )),
        r.on && this.fetchJa(),
        typeof window < `u` &&
          typeof window.addEventListener == `function` &&
          window.addEventListener(`pageshow`, (e) => {
            e.persisted && !this.resetting && this.yieldToNewer(I());
          }));
    }
    yieldToNewer(e) {
      let t = e?.lastPlayedAt;
      if (typeof t != `string` || t === this.seen) return !1;
      let n = Date.parse(t);
      if (!(
        Number.isFinite(n) && n > ((this.seen && Date.parse(this.seen)) || 0)
      ))
        return !1;
      let r = `${j}:stale-reload`;
      try {
        let e = Number(sessionStorage.getItem(r));
        if (e > 0 && Date.now() - e < 6e4)
          return (
            console.warn(
              `[state] a newer save on disk again within a minute: writing over it as before (no reload loop)`,
            ),
            (this.seen = t),
            !1
          );
        sessionStorage.setItem(r, String(Date.now()));
      } catch {}
      return (this.reloadStale(), !0);
    }
    reloadStale() {
      if (
        ((this.resetting = !0),
        console.warn(
          `[state] this city's save was written by another page since this one loaded: reloading from it`,
        ),
        typeof document < `u`)
      ) {
        if (document.visibilityState === `visible`)
          setTimeout(() => location.reload(), 0);
        else {
          let e = () => {
            document.visibilityState === `visible` &&
              (document.removeEventListener(`visibilitychange`, e),
              location.reload());
          };
          document.addEventListener(`visibilitychange`, e);
        }
      }
    }
    fetchJa() {
      n().then(() => {
        this.data.settings.lang === `ja` &&
          this.events.emit(`settings:changed`, { key: `lang`, value: `ja` });
      });
    }
    mountRegion(e, t) {
      ((this.region = e), (this.currency = t));
    }
    setWorld(e) {
      this.world = Number.isFinite(e) && e >= 1 ? Math.floor(e) : 1;
    }
    get worldRev() {
      return Math.max(this.data.worldRev ?? 1, this.world);
    }
    static load() {
      try {
        let t = e.sanitize(Pe(I()));
        return ((t.settings = { ...t.settings, ...Dt() }), Dn(t, Wt()), t);
      } catch {
        return e.sanitize(null);
      }
    }
    static sanitize(e) {
      let t = e && typeof e == `object` ? e : {},
        n = (e) =>
          Array.isArray(e)
            ? [
                ...new Set(
                  e.filter(
                    (e) =>
                      typeof e == `string` && e.length > 0 && e.length < 200,
                  ),
                ),
              ]
            : [],
        r = (e) =>
          typeof e == `number`
            ? e
            : typeof e == `string` && e.trim() !== ``
              ? Number(e)
              : NaN,
        i = r(t.money),
        a = {};
      if (t.stats && typeof t.stats == `object` && !Array.isArray(t.stats))
        for (let [e, n] of Object.entries(t.stats)) {
          let t = r(n);
          Number.isFinite(t) && (a[e] = t);
        }
      let o = { ...Ln },
        s = t.settings;
      if (s && typeof s == `object` && !Array.isArray(s))
        for (let e of Object.keys(Ln)) {
          let t = s[e];
          typeof t == typeof Ln[e] &&
            (typeof t != `number` || Number.isFinite(t)) &&
            (o[e] = t);
        }
      if (s && typeof s == `object` && !Array.isArray(s))
        for (let [e, t] of Object.entries(s))
          e in Ln ||
            (((typeof t == `number` && Number.isFinite(t)) ||
              typeof t == `string` ||
              typeof t == `boolean`) &&
              (o[e] = t));
      (Nn(o.lang) || (o.lang = Ln.lang),
        /^(auto|low|medium|high|ultra)$/.test(o.quality) ||
          (o.quality = `auto`),
        /^(auto|30|60)$/.test(o.frameRate) || (o.frameRate = `auto`));
      for (let e of [`masterVolume`, `musicVolume`, `sfxVolume`])
        o[e] = Math.max(0, Math.min(1, o[e]));
      o.sensitivity = Math.max(0.1, Math.min(5, o.sensitivity));
      let c = {
          version: 1,
          money: Number.isFinite(i) ? Math.max(0, Math.round(i)) : 2500,
          completedMissions: n(t.completedMissions),
          collectibles: n(t.collectibles),
          stats: a,
          settings: o,
        },
        l = t.pos;
      if (
        l &&
        typeof l == `object` &&
        typeof l.regionId == `string` &&
        l.regionId !== `taipei`
      ) {
        let e = t.positions;
        l =
          e && typeof e == `object`
            ? Object.values(e).find(
                (e) => !!e && typeof e == `object` && e.regionId === `taipei`,
              )
            : void 0;
      }
      if (l && typeof l == `object`) {
        let e = r(l.x),
          t = r(l.z),
          n = r(l.heading);
        Number.isFinite(e) &&
          Number.isFinite(t) &&
          Math.abs(e) < 5e3 &&
          Math.abs(t) < 5e3 &&
          (c.pos = { x: e, z: t, heading: Number.isFinite(n) ? n : 0 });
      }
      let u = r(t.hour);
      Number.isFinite(u) && (c.hour = ((u % 24) + 24) % 24);
      let d = r(t.day);
      (Number.isFinite(d) && d >= 0 && (c.day = Math.floor(d)),
        typeof t.startDate == `string` &&
          /^\d{4}-\d{2}-\d{2}$/.test(t.startDate) &&
          (c.startDate = t.startDate));
      let f = r(t.worldRev);
      Number.isFinite(f) &&
        f >= 2 &&
        (c.worldRev = Math.min(99, Math.floor(f)));
      for (let e of [`lastPlayedAt`, `firstPlayedAt`])
        typeof t[e] == `string` &&
          Number.isFinite(Date.parse(t[e])) &&
          (c[e] = t[e]);
      for (let [e, n] of Object.entries(t))
        e in c ||
          e === `version` ||
          e === `pos` ||
          e === `hour` ||
          e === `day` ||
          e === `startDate` ||
          e === `worldRev` ||
          e === `lastPlayedAt` ||
          e === `firstPlayedAt` ||
          (n !== void 0 && typeof n != `function` && (c[e] = n));
      return c;
    }
    get money() {
      return (this.shared?.refresh(), this.data.money);
    }
    get wallet() {
      return this.money;
    }
    refreshSharedWallet() {
      this.shared.refresh();
    }
    get settings() {
      return this.data.settings;
    }
    get lang() {
      return this.data.settings.lang;
    }
    addMoney(e, t, n = this.currency) {
      let r = Number(e);
      Number.isFinite(r) &&
        An[n] &&
        ((this.data.money = Math.max(
          0,
          (Number.isFinite(this.data.money) ? Math.round(this.data.money) : 0) +
            jn(r, n),
        )),
        this.shared.money(),
        this.events.emit(`money:changed`, {
          money: this.data.money,
          delta: e,
          reason: t,
        }),
        this.scheduleSave());
    }
    stat(e, t = 1) {
      let n = this.data.stats[e];
      ((this.data.stats[e] =
        (Number.isFinite(n) ? n : 0) + (Number.isFinite(t) ? t : 0)),
        this.scheduleSave(5));
    }
    completeMission(e) {
      (this.data.completedMissions.includes(e) ||
        this.data.completedMissions.push(e),
        this.scheduleSave(0.2));
    }
    collect(e) {
      return (
        !this.data.collectibles.includes(e) &&
        (this.data.collectibles.push(e), this.scheduleSave(0.5), !0)
      );
    }
    claimOnce(e) {
      let t = wn(this.data, e);
      return (t && this.scheduleSave(0.5), t);
    }
    hasClaimed(e) {
      return Cn(this.data, e);
    }
    setSetting(e, t) {
      ((this.data.settings[e] = t),
        e === `lang` &&
          ((this.data.langJa = t === `ja`),
          (this.data.langPicked = !0),
          (r.on = t === `ja`),
          r.on && this.fetchJa()),
        this.events.emit(`settings:changed`, { key: e, value: t }),
        this.scheduleSave(0.2));
    }
    scheduleSave(e = 2) {
      this.saveTimer = this.saveTimer > 0 ? Math.min(this.saveTimer, e) : e;
    }
    update(e) {
      this.saveTimer > 0 &&
        ((this.saveTimer -= e), this.saveTimer <= 0 && this.saveNow());
    }
    onBeforeSave(e) {
      this.beforeSave.push(e);
    }
    saveNow() {
      if (this.resetting) return !1;
      let e = I();
      if (A(e) || this.yieldToNewer(e)) return !1;
      this.saveTimer = 0;
      for (let e of this.beforeSave)
        try {
          e();
        } catch (e) {
          console.error(`[state] beforeSave hook threw`, e);
        }
      return (
        this.world >= 2 &&
          !((this.data.worldRev ?? 1) >= this.world) &&
          (this.data.worldRev = this.world),
        (this.data.lastPlayedAt = new Date().toISOString()),
        this.shared.save(),
        rn(this.data)
          ? ((this.seen = this.data.lastPlayedAt),
            this.events.emit(`state:saved`, { data: this.data }),
            !0)
          : !1
      );
    }
    get totalPlayTime() {
      let e = Math.max(0, this.data.stats.playTime ?? 0);
      for (let t of Object.values(Ne)) {
        if (t.saveKey === `tokyo-rush-save-v1`) continue;
        let n = (
          Vt(`${t.saveKey}:identities-v1`)?.slots?.[kt()]?.data ??
          (kt() === `guest` ? Vt(t.saveKey) : null)
        )?.stats?.playTime;
        typeof n == `number` && Number.isFinite(n) && (e += Math.max(0, n));
      }
      return e;
    }
    restoreSave(t) {
      if (A(I()) || A(t)) return !1;
      let n = e.sanitize(t);
      return rn(n)
        ? ((this.data = n),
          (this.saveTimer = 0),
          (this.resetting = !0),
          this.shared.rebase(),
          !0)
        : !1;
    }
    reset() {
      if (A(I())) return;
      an();
      let t = this.data.settings,
        n = this.data.langJa,
        r = this.data.langPicked,
        i = this.data;
      ((this.data = e.load()),
        (this.data.settings = t),
        (this.data.langJa = n),
        r && (this.data.langPicked = !0),
        Tn(i, this.data),
        Gt(En(this.data)),
        delete this.data.pos,
        delete this.data.hour,
        delete this.data.day,
        delete this.data.startDate,
        (this.resetting = !0));
    }
    resetting = !1;
  },
  zn = {
    uTime: { value: 0 },
    uNight: { value: 0 },
    uWet: { value: 0 },
    uSunDir: { value: new Te(0.4, 0.8, 0.3).normalize() },
    uCharFill: { value: new ye(0, 0, 0, 0) },
  },
  Bn = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`;
function Vn(e, t = 0, n = 0) {
  let r = e.onBeforeCompile;
  e.onBeforeCompile = (i, a) => {
    (r?.call(e, i, a),
      (i.uniforms.uNight = zn.uNight),
      (i.uniforms.uTime = zn.uTime),
      (i.fragmentShader = i.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
uniform float uNight;
uniform float uTime;`,
        )
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>
        float nightK = mix(${t.toFixed(3)}, 1.0, uNight);
        ${n > 0 ? `nightK *= 1.0 - ${n.toFixed(3)} * step(0.93, fract(sin(floor(uTime * 12.0) * 12.9898 + vViewPosition.x * 0.1) * 43758.5453));` : ``}
        totalEmissiveRadiance *= nightK;`,
        )));
  };
  let i = `night:${t}:${n}`,
    a = e.customProgramCacheKey?.bind(e);
  return ((e.customProgramCacheKey = () => (a ? a() : ``) + i), e);
}
function Hn(e, t, n) {
  n.addEventListener(`dispose`, function r() {
    (n.removeEventListener(`dispose`, r), e.get(t) === n && e.delete(t));
  });
}
function Un(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
}
function Wn(e, t = {}) {
  let n = new Ee(e);
  return (
    t.srgb !== !1 && (n.colorSpace = C),
    t.repeat && (n.wrapS = n.wrapT = Ae),
    (n.generateMipmaps = t.mipmaps !== !1),
    (n.minFilter = t.mipmaps === !1 ? _e : fe),
    (n.anisotropy = t.anisotropy ?? 4),
    (n.needsUpdate = !0),
    n
  );
}
function Gn(e, t) {
  let n = document.createElement(`canvas`);
  return (
    (n.width = e),
    (n.height = t),
    [n, n.getContext(`2d`, { willReadFrequently: !0 })]
  );
}
var Kn = `
attribute vec4 aCity;
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uTime;
`,
  qn = `
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uNight;
uniform float uTime;
uniform float uWet;
float cityHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;
function Jn(e, t) {
  ((e.uniforms.uNight = zn.uNight),
    (e.uniforms.uTime = zn.uTime),
    (e.uniforms.uWet = zn.uWet),
    (e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
` + Kn,
      )
      .replace(
        `#include <beginnormal_vertex>`,
        `#include <beginnormal_vertex>
      {
        vec3 cn = objectNormal;
        #ifdef USE_INSTANCING
          cn = mat3( instanceMatrix ) * cn;
        #endif
        vCityUp = normalize( mat3( modelMatrix ) * cn ).y;
      }`,
      )
      .replace(
        `#include <worldpos_vertex>`,
        `#include <worldpos_vertex>
      {
        vec4 cw = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          cw = instanceMatrix * cw;
        #endif
        vCityW = ( modelMatrix * cw ).xyz;
      }`,
      )
      .replace(
        `#include <uv_vertex>`,
        `#include <uv_vertex>
      vCity = aCity;
      #ifdef USE_MAP
        if ( ( int( aCity.w * 255.0 + 0.5 ) & 8 ) != 0 ) vMapUv.x += uTime * 0.035;
      #endif`,
      )));
  let n = e.fragmentShader
    .replace(
      `#include <common>`,
      `#include <common>
` + qn,
    )
    .replace(
      `#include <color_fragment>`,
      `#include <color_fragment>
      int cityF = int( vCity.w * 255.0 + 0.5 );
      float cityWet = ( cityF & 16 ) != 0 ? 0.0 : uWet;
      float cityMask = 1.0;
      #ifdef USE_MAP
        cityMask = sampledDiffuseColor.a;
      #endif
      diffuseColor.rgb *= 1.0 - 0.28 * cityWet;`,
    );
  (t ||
    (n = n
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>
        roughnessFactor *= vCity.x;
        roughnessFactor = mix( roughnessFactor, 0.14, cityWet * smoothstep( 0.6, 0.9, vCityUp ) );`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>
 metalnessFactor *= vCity.y;`,
      )),
    (n = n.replace(
      `#include <emissivemap_fragment>`,
      `#include <emissivemap_fragment>
    {
      float eK = vCity.z * 4.0;
      if ( ( cityF & 1 ) != 0 ) eK *= uNight;
      if ( ( cityF & 2 ) != 0 ) eK *= cityMask;
      #ifdef USE_MAP
        if ( ( cityF & 32 ) != 0 ) { vec3 cc = floor( ( vCityW + 0.37 ) / 3.2 ); eK *= step( 0.45, cityHash( cc.xz + cc.y * 17.13 ) ); }
      #endif
      if ( ( cityF & 4 ) != 0 )
        eK *= 1.0 - 0.35 * step( 0.93, fract( sin( floor( uTime * 12.0 ) * 12.9898 + vCity.z * 91.7 ) * 43758.5453 ) );
      totalEmissiveRadiance += diffuseColor.rgb * eK;
    }`,
    )),
    (e.fragmentShader = n));
}
var Yn = new Map();
function Xn(e, t = {}) {
  let n = (t.policy ?? `pbr`) === `lambert` && e !== `glass`,
    r = `${e}|${t.map?.uuid ?? `-`}|${t.instanced ? `i` : ``}${t.batched ? `b` : ``}|${n ? `L` : `P`}|${t.opacity ?? ``}`,
    i = Yn.get(r);
  if (i) return i;
  let a = { map: t.map ?? null, vertexColors: !0, emissive: new ke(0) };
  ((i = n ? new y(a) : new he({ ...a, roughness: 1, metalness: 1 })),
    e === `cutout`
      ? ((i.alphaTest = 0.5), (i.side = 2))
      : e === `glass` &&
        ((i.transparent = !0),
        (i.opacity = t.opacity ?? 0.45),
        (i.depthWrite = !1),
        (i.forceSinglePass = !0)),
    (i.name = `city-${e}${t.instanced ? `-inst` : ``}${t.batched ? `-batch` : ``}${t.name ? `:` + t.name : ``}`),
    (i.onBeforeCompile = (e) => Jn(e, n)));
  let o = `city-v1:${e === `glass` ? `glass` : `solid`}:${n ? `L` : `P`}`;
  return ((i.customProgramCacheKey = () => o), Yn.set(r, i), Hn(Yn, r, i), i);
}
var Zn = {};
typeof window < `u` && (window.__materialLint = () => Zn);
function Qn(e, t) {
  let n = {
      twoPass: [],
      sharedInstanced: [],
      unnamed: 0,
      fixedSinglePass: 0,
      autoNamed: 0,
      misaligned: { count: 0, mb: 0, names: [] },
    },
    r = new Map(),
    i = new Set(),
    a = new Set();
  for (let o of e)
    o.traverse((e) => {
      let o = e;
      if (!o.material || !(o.isMesh || e.isPoints || e.isLine || e.isSprite))
        return;
      let s = o.geometry;
      if (s && !a.has(s)) {
        a.add(s);
        for (let t in s.attributes) {
          let r = s.attributes[t],
            i =
              (r.isInterleavedBufferAttribute ? r.data?.array : r.array)
                ?.BYTES_PER_ELEMENT ?? 4,
            a = r.isInterleavedBufferAttribute
              ? (r.data?.stride ?? 0) * i
              : r.itemSize * i;
          if (a % 4 == 0) continue;
          (n.misaligned.count++, (n.misaligned.mb += (r.count * a) / 1048576));
          let c = `${e.name || (Array.isArray(o.material) ? `` : o.material.name) || `?`}.${t}`;
          n.misaligned.names.length < 8 &&
            !n.misaligned.names.includes(c) &&
            n.misaligned.names.push(c);
        }
      }
      let c = e.isInstancedMesh
          ? 2
          : e.isSkinnedMesh || e.isBatchedMesh
            ? 4
            : 1,
        l = Array.isArray(o.material) ? o.material : [o.material];
      for (let e of l)
        (r.set(e, (r.get(e) ?? 0) | c),
          !i.has(e) &&
            (i.add(e),
            e.name ||
              (n.unnamed++,
              (e.name = `${t}:${e.type.replace(/Material$/, ``)}`),
              n.autoNamed++),
            e.transparent &&
              e.side === 2 &&
              !e.forceSinglePass &&
              ((e.blending === 2 || e.blending === 4) && !e.depthWrite
                ? ((e.forceSinglePass = !0), n.fixedSinglePass++)
                : n.twoPass.push(e.name || e.type))));
    });
  for (let [e, t] of r)
    (t & 3) == 3 && n.sharedInstanced.push(e.name || e.type);
  return (
    (Zn[t] = n),
    (n.misaligned.mb = Math.round(n.misaligned.mb * 10) / 10),
    n
  );
}
var $n = new Set([
    `environment`,
    `streets`,
    `buildings`,
    `landmarks`,
    `districts`,
    `culture`,
    `transit`,
  ]),
  er = 32768,
  tr = 4 << 20,
  nr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`gpumem`) !== `0`,
  rr = function () {
    this.__gpu = 1;
  };
((ue.prototype.onUploadCallback = rr), (me.prototype.onUploadCallback = rr));
var ir = { configurable: !0, enumerable: !1, get: () => !1, set: () => {} },
  L = {
    geoMB: 0,
    texMB: 0,
    clampedMB: 0,
    pendingGeo: 0,
    pendingTex: 0,
    blocked: 0,
    blockedAt: [],
    passMs: 0,
    passMeshes: 0,
    detached: 0,
    paddedMB: 0,
    droppedTexMB: 0,
    clampedAt: [],
  };
function ar(e) {
  if ((L.blocked++, L.blockedAt.length < 6)) {
    let t = (Error().stack ?? ``)
      .split(
        `
`,
      )
      .slice(3, 6)
      .map((e) => e.trim().replace(/https?:\/\/[^/]+/, ``))
      .join(` < `);
    L.blockedAt.push(`${e}: ${t}`);
  }
}
typeof window < `u` && (window.__gpuMem = L);
var R = (e) =>
    !!e &&
    ((typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
      (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas)),
  or = (e) => typeof ImageBitmap < `u` && e instanceof ImageBitmap;
function sr(e) {
  let t = e.isCompressedTexture ? e.mipmaps : null;
  if (t && t.length) {
    let e = 0;
    for (let n of t) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  return n
    ? R(n) || or(n)
      ? (n.width || 0) * (n.height || 0) * 4
      : n.data && n.data.byteLength
        ? n.data.byteLength
        : 0
    : 0;
}
function cr(e, t) {
  let n = 4;
  switch (e) {
    case se:
    case ae:
    case De:
    case g:
      n = 1;
      break;
    case ge:
    case de:
      n = 2;
      break;
    case b:
      return 4;
  }
  switch (t) {
    case re:
    case ee:
      return 2;
    case d:
    case ne:
      return 4;
    case ie:
    case p:
      return n;
    case o:
    case i:
    case E:
      return n * 2;
    default:
      return n * 4;
  }
}
function lr(e) {
  let t = e.userData?.gpuBytes;
  return typeof t == `number` && t > 0 ? t : ur(e);
}
function ur(e) {
  let t = e;
  if (t.isCompressedTexture) {
    let e = 0;
    for (let n of t.mipmaps ?? []) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  if (!n) return 0;
  let r = e.isCubeTexture,
    i = r && Array.isArray(e.image) ? e.image[0] : n,
    a = i?.width ?? 0,
    o = i?.height ?? 0,
    s = e.isDataArrayTexture || e.isData3DTexture ? (n.depth ?? 1) : r ? 6 : 1,
    c =
      R(n) ||
      or(n) ||
      (typeof HTMLImageElement < `u` && n instanceof HTMLImageElement)
        ? 4
        : cr(e.format, e.type),
    l = e.generateMipmaps && e.minFilter !== 1006 && e.minFilter !== 1003;
  return a * o * s * c * (l ? 4 / 3 : 1);
}
function dr(e) {
  let t = e.userData;
  if (!t || t.__gbV === e.version) return;
  let n = ur(e);
  n > 0 && ((t.gpuBytes = Math.round(n)), (t.__gbV = e.version));
}
var fr = Symbol(`tgta.onUpdate`);
{
  let e = je.prototype;
  Object.getOwnPropertyDescriptor(e, `onUpdate`)?.get ||
    Object.defineProperty(e, "onUpdate", {
      configurable: !0,
      enumerable: !1,
      get() {
        let e = this[fr];
        return function (t) {
          (t && t.isTexture && dr(t), e && e.call(this, t));
        };
      },
      set(e) {
        this[fr] = e;
      },
    });
}
function pr(e) {
  let t = Object.getOwnPropertyDescriptor(e, `onUpdate`),
    n = e,
    r;
  if (t && `value` in t) {
    let e = t.value;
    ((n.onUpdate = null), (r = () => void (n.onUpdate = e)));
  } else {
    let e = n[fr];
    ((n[fr] = null), (r = () => void (n[fr] = e)));
  }
  let i = !1;
  return (t) => {
    if (!i && ((i = !0), r(), t))
      try {
        n.onUpdate?.call(e, e);
      } catch (e) {
        console.warn(`[gpuMem] texture onUpdate hook failed`, e);
      }
  };
}
function mr(e) {
  if (e.__rel) return;
  let t = e.array;
  ((L.geoMB += t.byteLength / 1048576),
    (e.__rel = 1),
    (e.array = new t.constructor(0)),
    Object.defineProperty(e, "needsUpdate", {
      ...ir,
      set: (t) => {
        t && ar(`attribute(${e.count}×${e.itemSize ?? e.stride})`);
      },
    }));
}
function hr(e) {
  if (e.__rel) return;
  let t = e.image,
    n = e.isCompressedTexture ? e.mipmaps : null;
  if (!t && !n?.length) return;
  if (((L.texMB += sr(e) / 1048576), dr(e), (e.__rel = 1), n && n.length))
    for (let e of n) {
      let t = e?.data;
      if (t && t.byteLength) {
        let n = t.constructor;
        e.data = new n(0);
      }
    }
  else if (R(t)) ((t.width = 1), (t.height = 1));
  else if (or(t))
    try {
      t.close();
    } catch {}
  else if (t && t.data && t.data.byteLength) {
    let e = t.data.constructor;
    t.data = new e(0);
  }
  let r = {
    ...ir,
    set: (t) => {
      t && ar(`texture '${e.name}' ${e.image?.width ?? `?`}`);
    },
  };
  (Object.defineProperty(e, "needsUpdate", r),
    e.source && Object.defineProperty(e.source, "needsUpdate", r));
}
function gr(e, t = ``) {
  if (!nr) return;
  let n = e.image,
    r = e.isCompressedTexture ? e.mipmaps : null,
    i = e.__rel ? 0 : sr(e);
  if (r && r.length)
    for (let e of r) {
      let t = e?.data;
      t && t.byteLength && (e.data = new t.constructor(0));
    }
  else if (R(n))
    ((n.width > 1 || n.height > 1) && ((n.width = 1), (n.height = 1)),
      (n.__tgtaDropped = t || `?`));
  else if (or(n))
    try {
      n.close();
    } catch {}
  else n && n.data && n.data.byteLength && (n.data = new n.data.constructor(0));
  L.droppedTexMB += i / 1048576;
}
function _r(e) {
  e.__gm ||
    ((e.__gm = 1),
    (e.__up = +!!e.__gpu),
    (e.__v = e.version),
    (e.onUploadCallback = function () {
      ((this.__gpu = 1), (this.__up = (this.__up ?? 0) + 1));
    }));
}
function vr(e, t) {
  if (e.__gm) return;
  ((e.__gm = 1), (e.__up = +!!t), (e.__v = e.version));
  let n = e.onUpdate;
  e.onUpdate = (t) => {
    ((e.__up = (e.__up ?? 0) + 1), n?.call(e, t));
  };
}
var yr = function () {
  ((this.__gpu = 1), mr(this));
};
function br(e) {
  if (!nr) return;
  if (e.isTexture) {
    let t = e;
    vr(t, !1);
    let n = t.onUpdate;
    t.onUpdate = (e) => {
      (n?.call(t, e), hr(t));
    };
    return;
  }
  let t = e.isBufferGeometry ? e : e.geometry;
  if (!t) return;
  Tr(t);
  let n = !!e.isBatchedMesh;
  for (let e of xr(t, n)) e.__gpu ? mr(e) : (e.onUploadCallback = yr);
}
function xr(e, t = !1) {
  let n = [];
  for (let t in e.attributes) {
    let r = e.attributes[t];
    if (!(!r || r.isGLBufferAttribute || r.userData?.keepCpu)) {
      if (r.isInterleavedBufferAttribute) {
        let e = r.data;
        if (
          !e ||
          e.isInstancedInterleavedBuffer ||
          !e.array ||
          e.userData?.keepCpu ||
          n.includes(e)
        )
          continue;
        n.push(e);
        continue;
      }
      !r.isInstancedBufferAttribute && r.array && n.push(r);
    }
  }
  let r = e.index;
  return (r && !t && !r.userData?.keepCpu && n.push(r), n);
}
var Sr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`pad`) !== `0`,
  Cr = new WeakMap();
function wr(e) {
  for (let t in e.attributes) {
    let n = e.attributes[t];
    if (
      !n ||
      n.isInterleavedBufferAttribute ||
      n.isInstancedBufferAttribute ||
      n.isGLBufferAttribute ||
      n.__gpu ||
      n.userData?.keepCpu
    )
      continue;
    let r = n.array,
      i = r?.BYTES_PER_ELEMENT ?? 4;
    if (i >= 4 || !((n.itemSize * i) & 3)) continue;
    let a = Cr.get(n);
    if (a) {
      e.setAttribute(t, a);
      continue;
    }
    if (
      n.usage !== 35044 ||
      n.version > 1 ||
      n.gpuType === 1013 ||
      n.updateRanges?.length
    )
      continue;
    let o = n.itemSize,
      s = (Math.ceil((o * i) / 4) * 4) / i,
      c = n.count;
    if (!(c > 0) || r.length < c * o) continue;
    let l = new r.constructor(c * s);
    for (let e = 0, t = 0, n = 0; e < c; e++, t += o, n += s)
      for (let e = 0; e < o; e++) l[n + e] = r[t + e];
    let u = new me(l, s),
      d = new oe(u, o, 0, n.normalized);
    ((d.name = n.name),
      Cr.set(n, d),
      e.setAttribute(t, d),
      (L.paddedMB += (c * o * i) / 1048576));
  }
}
function Tr(e) {
  if (e.boundingSphere && e.boundingBox) return;
  let t = e.attributes.position,
    n = t ? (t.isInterleavedBufferAttribute ? t.data.array : t.array) : null;
  n &&
    n.length &&
    (e.boundingSphere || e.computeBoundingSphere(),
    e.boundingBox || e.computeBoundingBox());
}
var Er = (e) => {
    let t = e;
    return !t.isMesh ||
      e.isSkinnedMesh ||
      e.userData?.keepCpu ||
      t.geometry.userData?.keepCpu ||
      (e.isBatchedMesh && e.userData?.static !== !0)
      ? !1
      : !Or(t.geometry.morphAttributes) &&
          !(Array.isArray(t.material)
            ? t.material.some((e) => e.wireframe)
            : t.material.wireframe);
  },
  Dr = (e) => !!e.isBatchedMesh;
function Or(e) {
  for (let t in e) return !0;
  return !1;
}
var kr = class {
    scene;
    maxTextureSize;
    hooks;
    owner = new WeakMap();
    enabled = nr;
    releasing = !1;
    settled = new WeakMap();
    matTex = new WeakMap();
    texGen = 0;
    waitingGeo = new Set();
    pendTex = new Set();
    removed = [];
    tracking = 0;
    constructor(e, t = 1 / 0, n = {}) {
      ((this.scene = e),
        (this.maxTextureSize = t),
        (this.hooks = n),
        this.installDetachHook());
    }
    claim(e, t = this.scene.children) {
      for (let n of t) this.owner.has(n) || this.owner.set(n, e);
    }
    ownerOf(e) {
      return this.owner.get(e);
    }
    isStaticRoot(e) {
      return $n.has(this.owner.get(e) ?? ``);
    }
    trackDetached(e) {
      this.tracking = Math.max(0, this.tracking + (e ? 1 : -1));
    }
    installDetachHook() {
      if (!this.enabled) return;
      let e = this,
        t = h.prototype;
      if (t.__gmRemove) return;
      t.__gmRemove = 1;
      let n = t.remove;
      t.remove = function (...t) {
        if (e.tracking > 0 && t.length && this !== e.scene) {
          let n = this;
          for (; n.parent && n.parent !== e.scene;) n = n.parent;
          if (n.parent === e.scene)
            for (let r of t)
              r &&
                r.parent === this &&
                e.removed.push({ child: new WeakRef(r), top: new WeakRef(n) });
          e.removed.length > 4096 &&
            e.removed.splice(0, e.removed.length - 4096);
        }
        return n.apply(this, t);
      };
    }
    peekDetached() {
      let e = [];
      for (let t of this.removed) {
        let n = t.child.deref(),
          r = t.top.deref();
        n &&
          r &&
          !n.parent &&
          this.isStaticRoot(r) &&
          !e.includes(n) &&
          e.push(n);
      }
      return e;
    }
    takeDetached(e) {
      if (!this.removed.length) return [];
      let t = [],
        n = [];
      for (let r of this.removed) {
        let i = r.child.deref(),
          a = r.top.deref();
        if (i && a && !i.parent) {
          if (!this.owner.has(a) || (e && !e.includes(a))) {
            n.push(r);
            continue;
          }
          this.isStaticRoot(a) && !t.includes(i) && t.push(i);
        }
      }
      return ((this.removed = n), t);
    }
    forget(e) {
      for (let t of e.geometries ?? []) this.waitingGeo.delete(t);
      for (let t of e.textures ?? []) this.pendTex.delete(t);
      (this.aliases.clear(), this.texGen++, this.refreshPending());
    }
    texOf(e) {
      let t = this.matTex.get(e),
        n = !!t && t.gen === this.texGen;
      if (t && n && t.compiled) return t.list;
      let r = this.hooks.uniformsOf?.(e);
      if (t && n && !r) return t.list;
      let i = [],
        a = (e) => {
          let t = e;
          t && t.isTexture && !i.includes(t) && i.push(t);
        };
      for (let t in e) a(e[t]);
      for (let t of [e.uniforms, r]) if (t) for (let e in t) a(t[e]?.value);
      return (
        this.matTex.set(e, { list: i, compiled: !!r, gen: this.texGen }),
        i
      );
    }
    staleTexLists(e = this.scene.children) {
      let t = [],
        n = new Set();
      for (let r of e)
        r.traverse((e) => {
          let r = e.material;
          for (let e of Array.isArray(r) ? r : r ? [r] : []) {
            if (n.has(e)) continue;
            n.add(e);
            let r = this.matTex.get(e);
            if (!r) continue;
            let i = [],
              a = (e) => {
                let t = e;
                t &&
                  t.isTexture &&
                  !t.isRenderTargetTexture &&
                  sr(t) >= tr &&
                  i.push(t);
              };
            for (let t in e) a(e[t]);
            for (let t of [e.uniforms, this.hooks.uniformsOf?.(e)])
              if (t) for (let e in t) a(t[e]?.value);
            i.some((e) => !r.list.includes(e)) && t.push(e.name || e.type);
          }
        });
      return { n: t.length, names: t.slice(0, 12) };
    }
    unreleased() {
      let e = new Map(),
        t = new Set();
      for (let n of this.scene.children)
        this.isStaticRoot(n) &&
          n.traverse((n) => {
            let r = n.material;
            for (let n of Array.isArray(r) ? r : r ? [r] : []) {
              if (t.has(n)) continue;
              t.add(n);
              let r = (t) => {
                let n = t;
                if (
                  !n ||
                  !n.isTexture ||
                  n.isRenderTargetTexture ||
                  n.__rel ||
                  n.userData?.keepCpu ||
                  e.has(n)
                )
                  return;
                let r = sr(n);
                r >= tr && this.hooks.uploaded?.(n) && e.set(n, r);
              };
              for (let e in n) r(n[e]);
              for (let e of [n.uniforms, this.hooks.uniformsOf?.(n)])
                if (e) for (let t in e) r(e[t]?.value);
            }
          });
      let n = 0;
      for (let t of e.values()) n += t / 1048576;
      return {
        n: e.size,
        mb: Math.round(n * 10) / 10,
        names: [...e.keys()].map((e) => e.name || `?`).slice(0, 12),
      };
    }
    meshTex(e, t) {
      let n = Array.isArray(e.material)
        ? e.material
        : e.material
          ? [e.material]
          : [];
      for (let e of n) for (let n of this.texOf(e)) t.includes(n) || t.push(n);
    }
    prepare(e = [], t, n = {}) {
      let r = this.prepareSteps(e, t, n);
      for (;;) {
        let e = r.next();
        if (e.done) return e.value;
      }
    }
    *prepareSteps(e = [], t, n = {}) {
      if (!this.enabled) return [];
      t && this.texGen++;
      let r = [],
        i = new Set(),
        a = new Set();
      if (t) for (let e of t) this.isStaticRoot(e) && r.push(e);
      else
        for (let e of this.scene.children)
          this.isStaticRoot(e)
            ? r.push(e)
            : e.traverse((e) => {
                let t = e;
                if (!t.geometry || !t.material) return;
                a.add(t.geometry);
                let n = [];
                this.meshTex(t, n);
                for (let e of n) e.image && i.add(e.image);
              });
      let o = t ? this.takeDetached(t) : [];
      L.detached += o.length;
      let s = r.length + e.length;
      r.push(...e, ...o);
      let c = !!t,
        l = [],
        u = this.maxTextureSize,
        d = [],
        f = [],
        p = 0;
      for (let e = 0; e < r.length; e++) {
        let t = Sr && e < s,
          o = (e) => {
            let r = e;
            if (!r.geometry || !r.material || !Er(e)) return;
            let o = r.geometry;
            if (a.has(o)) return;
            (p++, Tr(o), t && !Dr(e) && wr(o));
            let s = xr(o, Dr(e)),
              f = 0;
            for (let e of s)
              e.onUploadCallback === rr &&
                e.usage === 35044 &&
                !e.__rel &&
                _r(e);
            if (c) {
              for (let e of s) f += e.array.byteLength;
              if (f >= er) {
                let e = !1;
                for (let t of s)
                  !t.__rel &&
                    t.__gm &&
                    t.usage === 35044 &&
                    ((t.__up ?? 0) > 0 ||
                      ((t.onUploadCallback = yr), (e = !0)));
                e && this.waitingGeo.add(o);
              }
              this.settled.set(e, { g: o, m: r.material });
            }
            ((d.length = 0), this.meshTex(r, d));
            for (let e of d) {
              if (
                e.__gm ||
                e.userData?.keepCpu ||
                e.isRenderTargetTexture ||
                i.has(e.image)
              )
                continue;
              let t = e.image;
              n.clamp !== !1 &&
                (u < 1 / 0 &&
                  R(t) &&
                  Math.max(t.width, t.height) > u &&
                  !e.userData?.noClamp &&
                  !l.includes(e) &&
                  l.push(e),
                vr(e, !!this.hooks.uploaded?.(e)));
            }
          };
        for (f.push(r[e]); f.length;) {
          let e = f.pop(),
            t = e.children;
          for (let e = t.length - 1; e >= 0; e--) f.push(t[e]);
          let n = p;
          (o(e), p !== n && p % 6 == 0 && (yield));
        }
      }
      if (l.length) {
        this.scanAliases(t ? [...t, ...e] : void 0);
        for (let e of l) this.clamp(e);
        this.aliases.clear();
      }
      return o;
    }
    clamp(e) {
      let t = e.image,
        n = this.maxTextureSize;
      if (
        !R(t) ||
        !(n < 1 / 0) ||
        e.version > 3 ||
        (e.__up ?? 0) > 0 ||
        this.hooks.uploaded?.(e)
      )
        return;
      let r = t.width,
        i = t.height,
        a = Math.max(r, i);
      if (a <= n) return;
      let o = n / a,
        s = Math.max(1, Math.round(r * o)),
        c = Math.max(1, Math.round(i * o)),
        l = performance.now();
      try {
        let n = document.createElement(`canvas`);
        ((n.width = s), (n.height = c));
        let a = n.getContext(`2d`);
        if (!a) return;
        ((a.imageSmoothingEnabled = !0),
          (a.imageSmoothingQuality = `high`),
          a.drawImage(t, 0, 0, s, c));
        let o = ((r * i - s * c) * 4 * (1 + 4 / 3)) / 1048576;
        ((L.clampedMB += o),
          L.clampedAt.length < 32 &&
            L.clampedAt.push(
              `${e.name || `?`} ${r}×${i}→${s}×${c} ${(performance.now() - l).toFixed(1)}ms`,
            ),
          (t.width = 1),
          (t.height = 1),
          (e.image = n),
          (e.needsUpdate = !0),
          e.__gm && (e.__v = e.version));
        let u = this.aliases.get(t);
        if (u)
          for (let t of u)
            t !== e &&
              ((t.image = n),
              (t.needsUpdate = !0),
              t.__gm && (t.__v = t.version));
      } catch {}
    }
    aliases = new Map();
    scanAliases(e) {
      this.aliases.clear();
      let t = (e) => {
        let t = e;
        if (!t.material) return;
        let n = [];
        this.meshTex(t, n);
        for (let e of n) {
          if (!R(e.image)) continue;
          let t = this.aliases.get(e.image);
          (t || this.aliases.set(e.image, (t = [])),
            t.includes(e) || t.push(e));
        }
      };
      if (e) for (let n of e) n.traverse(t);
      else this.scene.traverse(t);
    }
    release() {
      let e = this.releaseSteps();
      for (; !e.next().done;);
    }
    *releaseSteps(e) {
      if (!this.enabled || this.releasing) return;
      this.releasing = !0;
      let t = 0,
        n = performance.now(),
        r = () => {
          let e = performance.now();
          ((t += e - n), (n = e));
        };
      try {
        let t = [],
          n = 0,
          i = [],
          a = [];
        for (let t of this.scene.children)
          this.isStaticRoot(t) ? (!e || e.includes(t)) && i.push(t) : a.push(t);
        let o = this.takeDetached(e);
        ((L.detached += o.length), i.push(...o));
        let s = [];
        for (let e of i)
          for (s.push(e); s.length;) {
            let e = s.pop(),
              i = e.children;
            for (let e = 0; e < i.length; e++) s.push(i[e]);
            let a = e;
            if (a.geometry && a.material) {
              let n = this.settled.get(e);
              (!n || n.g !== a.geometry || n.m !== a.material) &&
                Er(e) &&
                t.push(a);
            }
            ++n % 400 == 0 && (r(), yield);
          }
        if (((L.passMeshes = t.length), !t.length)) {
          this.refreshPending();
          return;
        }
        let c = new Set(),
          l = new Set(),
          u = [];
        for (let e of a)
          for (s.push(e); s.length;) {
            let e = s.pop(),
              t = e.children;
            for (let e = 0; e < t.length; e++) s.push(t[e]);
            let i = e;
            if (i.geometry && i.material) {
              (c.add(i.geometry), (u.length = 0), this.meshTex(i, u));
              for (let e of u) e.image && l.add(e.image);
            }
            ++n % 400 == 0 && (r(), yield);
          }
        let d = new Map(),
          f = new Set(),
          p = 0;
        for (let e of t) {
          ((u.length = 0), this.meshTex(e, u));
          for (let e of u) {
            if (!e.image && !e.mipmaps?.length) continue;
            let t = e.image ?? e,
              n = d.get(t);
            (n || d.set(t, (n = [])), n.includes(e) || n.push(e));
          }
          let t = e.geometry;
          (!f.has(t) && !c.has(t) && (f.add(t), this.releaseGeo(t, Dr(e))),
            this.settled.set(e, { g: t, m: e.material }),
            ++p % 24 == 0 && (r(), yield));
        }
        p = 0;
        for (let [e, t] of d)
          (l.has(e) || this.releaseTexGroup(e, t),
            ++p % 16 == 0 && (r(), yield));
        this.refreshPending();
      } finally {
        (r(), (L.passMs = Math.round(t * 10) / 10), (this.releasing = !1));
      }
    }
    releaseGeo(e, t = !1) {
      let n = [];
      for (let r of xr(e, t))
        r.__rel ||
          (!r.__gm && r.onUploadCallback === rr && r.usage === 35044 && _r(r),
          r.__gm && n.push(r));
      if (!n.length) return;
      let r = 0,
        i = !0;
      for (let e of n)
        ((r += e.array.byteLength),
          (e.version !== e.__v || (e.__up ?? 0) > 1 || e.usage !== 35044) &&
            (i = !1));
      if (!i || r < er) return;
      Tr(e);
      let a = !1;
      for (let e of n)
        (e.__up ?? 0) > 0 ? mr(e) : ((a = !0), (e.onUploadCallback = yr));
      a && this.waitingGeo.add(e);
    }
    releaseTexGroup(e, t) {
      let n = t[0];
      if (!n || n.__rel) return;
      let r = !!e?.data;
      if (!R(e) && !r) return;
      let i = e.width ?? 0,
        a = e.height ?? 0;
      if (sr(n) < tr || i * a <= 1) return;
      let o = (e) =>
          e.__gm ? e.version === e.__v && (e.__up ?? 0) <= 1 : e.version <= 3,
        s = (e) => (e.__gm && (e.__up ?? 0) >= 1) || !!this.hooks.uploaded?.(e);
      if (!t.some((e) => e.userData?.keepCpu || !o(e))) {
        if (t.every(s)) {
          for (let e of t) hr(e);
          return;
        }
        for (let e of t) {
          if (e.__pend) continue;
          ((e.__pend = 1), this.pendTex.add(e), e.__gm || vr(e, !1));
          let n = e.onUpdate;
          e.onUpdate = (r) => {
            if ((n?.call(e, r), t.every((e) => o(e) && s(e))))
              for (let e of t) hr(e);
          };
        }
      }
    }
    refreshPending() {
      let e = 0;
      for (let t of this.waitingGeo) {
        let n = !1;
        for (let e of xr(t)) !e.__rel && e.onUploadCallback === yr && (n = !0);
        n ? e++ : this.waitingGeo.delete(t);
      }
      L.pendingGeo = e;
      for (let e of this.pendTex) e.__rel && this.pendTex.delete(e);
      L.pendingTex = this.pendTex.size;
    }
    neverDrawn(e = 64, t) {
      let n = [];
      if (!this.waitingGeo.size) return n;
      let r = new Set(this.waitingGeo),
        i = new _();
      for (let a of this.scene.children)
        if (
          this.isStaticRoot(a) &&
          (a.traverse((a) => {
            let o = a;
            n.length >= e ||
              !o.isMesh ||
              !r.has(o.geometry) ||
              (t &&
                o.geometry.boundingSphere &&
                (i.copy(o.geometry.boundingSphere).applyMatrix4(o.matrixWorld),
                Math.hypot(i.center.x - t.x, i.center.z - t.z) - i.radius >
                  t.r)) ||
              (r.delete(o.geometry), n.push(o));
          }),
          n.length >= e)
        )
          break;
      return n;
    }
  },
  Ar =
    typeof navigator < `u` &&
    typeof document < `u` &&
    /^Apple/.test(navigator.vendor || ``),
  jr = class e {
    raster = { n: 0, totalMs: 0, maxMs: 0, lastMs: 0 };
    barrierCtx = null;
    budgetMs = 6;
    lastUsedMs = 0;
    frameNo = 0;
    inFrame = !1;
    sliceStart = 0;
    sliceFrame = -1;
    waiters = [];
    posted = !1;
    rot = 0;
    channel = typeof MessageChannel < `u` ? new MessageChannel() : null;
    resolved = Promise.resolve();
    static HIDDEN_MS = 20;
    constructor() {
      (this.channel && (this.channel.port1.onmessage = () => this.wake()),
        typeof document < `u` &&
          document.addEventListener(`visibilitychange`, () => {
            document.hidden && this.waiters.length && this.post();
          }));
    }
    frame(e) {
      ((this.lastUsedMs =
        this.sliceFrame === this.frameNo
          ? Math.min(99, performance.now() - this.sliceStart)
          : 0),
        this.frameNo++,
        (this.budgetMs = e),
        this.waiters.length && this.post());
    }
    remaining() {
      let t = performance.now();
      return (
        this.sliceFrame !== this.frameNo &&
          ((this.sliceFrame = this.frameNo), (this.sliceStart = t)),
        (typeof document < `u` && document.hidden
          ? e.HIDDEN_MS
          : this.budgetMs) -
          (t - this.sliceStart)
      );
    }
    rasterBarrier() {
      if (!Ar) return 0;
      let e = this.barrierCtx;
      if (!e) {
        let t = document.createElement(`canvas`);
        if (
          ((t.width = t.height = 2),
          (e = this.barrierCtx = t.getContext(`2d`)),
          !e)
        )
          return 0;
      }
      let t = performance.now();
      try {
        (e.fillRect(0, 0, 1, 1), e.getImageData(0, 0, 1, 1));
      } catch {
        return 0;
      }
      let n = performance.now() - t,
        r = this.raster;
      return (
        r.n++,
        (r.totalMs += n),
        (r.lastMs = n),
        n > r.maxMs && (r.maxMs = n),
        n
      );
    }
    shouldYield() {
      return this.remaining() <= 0;
    }
    yield() {
      return this.remaining() > 0 ? this.resolved : this.nextFrame();
    }
    nextFrame() {
      return new Promise((e) => {
        (this.waiters.push(e),
          typeof document < `u` && document.hidden && this.post());
      });
    }
    async run(e) {
      for (;;) {
        let t = e.next();
        if (t.done) return t.value;
        this.remaining() <= 0 && (await this.nextFrame());
      }
    }
    get waiting() {
      return this.waiters.length;
    }
    idleWorker(e, t = {}) {
      return new Mr(e, t);
    }
    post() {
      this.posted ||
        ((this.posted = !0),
        this.channel
          ? this.channel.port2.postMessage(0)
          : setTimeout(() => this.wake(), 0));
    }
    wake() {
      ((this.posted = !1),
        (this.sliceStart = performance.now()),
        (this.sliceFrame = this.frameNo));
      let e = this.waiters;
      if (!e.length) return;
      this.waiters = [];
      let t = e.length,
        n = this.rot++ % t;
      for (let r = 0; r < t; r++) e[(n + r) % t]();
    }
  },
  Mr = class {
    create;
    opts;
    onmessage = null;
    onerror = null;
    w = null;
    inFlight = 0;
    timer = 0;
    idleMs;
    perJob;
    spawns = 0;
    constructor(e, t = {}) {
      ((this.create = e),
        (this.opts = t),
        (this.idleMs = Math.max(0, t.idleMs ?? 1e4)),
        (this.perJob = Math.max(1, t.repliesPerJob ?? 1)));
    }
    get alive() {
      return !!this.w;
    }
    get pending() {
      return this.inFlight;
    }
    post(e, t = []) {
      let n = this.ensure();
      ((this.inFlight += this.perJob), this.disarm(), n.postMessage(e, t));
    }
    terminate() {
      (this.disarm(),
        (this.inFlight = 0),
        (this.w &&= (this.w.terminate(), null)));
    }
    ensure() {
      if (this.w) return this.w;
      let e = this.create();
      return (
        this.spawns++,
        (e.onmessage = (e) => {
          this.inFlight = Math.max(0, this.inFlight - 1);
          try {
            this.onmessage?.(e);
          } finally {
            this.inFlight || this.arm();
          }
        }),
        (e.onerror = (e) => {
          ((this.inFlight = Math.max(0, this.inFlight - this.perJob)),
            this.onerror?.(e),
            this.inFlight || this.arm());
        }),
        (this.w = e),
        e
      );
    }
    arm() {
      (this.disarm(),
        (this.timer = setTimeout(() => {
          ((this.timer = 0),
            !this.inFlight &&
              this.w &&
              (this.w.terminate(),
              (this.w = null),
              this.opts.name &&
                typeof location < `u` &&
                new URLSearchParams(location.search).has(`debug`) &&
                console.info(
                  `[work] idle worker '${this.opts.name}' terminated (${this.spawns} spawn${this.spawns > 1 ? `s` : ``})`,
                )));
        }, this.idleMs)));
    }
    disarm() {
      (this.timer && clearTimeout(this.timer), (this.timer = 0));
    }
  },
  Nr = 1500,
  Pr = 8e3,
  Fr = 15e3,
  Ir = 6e3,
  Lr = 1e3,
  Rr = 64 << 20,
  zr = [4],
  Br = 24;
function Vr() {
  if (typeof document > `u` || typeof navigator > `u`) return !1;
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`gcnudge`);
  } catch {}
  return e === `0` ? !1 : e === `1` || /^Apple/.test(navigator.vendor || ``);
}
var z = {
  on: Vr(),
  requests: 0,
  nudges: 0,
  last: ``,
  lastAt: -1 / 0,
  ms: 0,
  log: [],
  confirmed: 0,
  fallbacks: 0,
  fallbackFull: 0,
  fallbackMB: 0,
};
typeof window < `u` && (window.__gcNudge = z);
var Hr = 0,
  Ur = 0,
  Wr = [],
  Gr = { o: null },
  Kr = null;
function qr() {
  if (typeof WeakRef != `function`) return;
  let e = { gcNudge: performance.now() };
  ((Gr.o = e),
    (Kr = new WeakRef(e)),
    setTimeout(() => {
      Gr.o === e && (Gr.o = null);
    }, Lr));
}
var Jr = () => !!Kr && !Gr.o && !Kr.deref(),
  Yr = () =>
    new Promise((e) => {
      !document.hidden && typeof requestAnimationFrame == `function`
        ? requestAnimationFrame(() => e())
        : setTimeout(e, 16);
    }),
  Xr = { b: null },
  Zr = !1;
async function Qr() {
  if (!(Zr || typeof WeakRef != `function`)) {
    ((Zr = !0), z.fallbacks++);
    try {
      for (let e of zr) {
        Xr.b = [];
        try {
          for (; Xr.b.length < e;) {
            for (let t = 0; t < 4 && Xr.b.length < e; t++)
              Xr.b.push(new ArrayBuffer(Rr));
            await Yr();
          }
        } catch {
          return;
        }
        z.fallbackMB = e * 64;
        let t = { gcNudgeYoung: 1 },
          n = new WeakRef(t);
        t = null;
        for (let e = 0; e < Br && n.deref(); e++) await Yr();
        Xr.b = null;
        for (let e = 0; e < Br && !Jr(); e++) await Yr();
        if (Jr()) {
          z.fallbackFull++;
          return;
        }
      }
    } finally {
      ((Xr.b = null), (Zr = !1));
    }
  }
}
function $r() {
  Hr = 0;
  let e = performance.now();
  try {
    let e = document.createElement(`iframe`);
    ((e.style.display = `none`),
      e.setAttribute(`aria-hidden`, `true`),
      (e.tabIndex = -1),
      (document.body ?? document.documentElement).appendChild(e),
      e.remove());
  } catch {}
  (z.nudges++,
    (z.ms = Math.round((performance.now() - e) * 100) / 100),
    (z.lastAt = performance.now()),
    (z.last =
      Wr.slice(0, 6).join(`, `) + (Wr.length > 6 ? ` +${Wr.length - 6}` : ``)),
    z.log.push([Math.round(z.lastAt) / 1e3, z.last]),
    z.log.length > 40 && z.log.shift(),
    (Wr = []),
    qr(),
    Kr &&
      setTimeout(() => {
        Jr() ? z.confirmed++ : Qr();
      }, Ir));
}
function ei(e) {
  if (!z.on) return;
  (z.requests++, Wr.length < 32 && Wr.push(e));
  let t = performance.now();
  Hr ? clearTimeout(Hr) : (Ur = t);
  let n = Math.max(Math.min(t + Nr, Ur + Pr), z.lastAt + Fr);
  Hr = setTimeout($r, Math.max(0, n - t));
}
var ti = `tgta-ctxloss`,
  ni = `tgta-safe-quality`,
  ri = `tgta-lowmem`,
  ii = `tgta-lost-at`,
  ai = `tgta-alive`;
function B(e) {
  try {
    return sessionStorage.getItem(e);
  } catch {
    return null;
  }
}
function V(e, t) {
  try {
    sessionStorage.setItem(e, t);
  } catch {}
}
function oi(e) {
  try {
    sessionStorage.removeItem(e);
  } catch {}
}
function si() {
  (oi(ai), ji && U() && (delete Si().live[ki()], bi()));
}
function ci() {
  if (li !== null) return li;
  let e = Math.max(Number(B(`tgta-lowmem`)) || 0, yi().lowmem, ui);
  return e >= 2 ? 2 : +(e >= 1);
}
var li = null,
  ui = 0;
function di(e, t) {
  ((ui = Math.max(0, Math.min(2, e | 0))),
    (li = t === null ? null : Math.max(0, Math.min(2, t | 0))));
}
function fi(e) {
  ((Number(B(`tgta-lowmem`)) || 0) < e && V(ri, String(e)), Ci({ lowmem: e }));
}
var H = [`low`, `medium`, `high`, `ultra`],
  pi = 2592e5,
  mi = null;
function U() {
  return (mi === null && (mi = He().mobile), mi);
}
var hi = () => ({
  lowmem: 0,
  safeQ: ``,
  strikes: 0,
  cleanS: 0,
  at: 0,
  struck: 0,
  decayAt: 0,
  live: {},
});
function gi(e) {
  if (e.lowmem > 0) e.lowmem--;
  else if (e.safeQ) {
    let t = H.indexOf(e.safeQ);
    e.safeQ = t >= 0 && t < H.length - 2 ? H[t + 1] : ``;
  }
  e.cleanS = 0;
}
function _i(e, t) {
  if (!e.lowmem && !e.safeQ) return;
  let n = e.decayAt || e.struck || e.at || t;
  n > t + pi && (n = t);
  let r = Math.floor((t - n) / pi);
  if (((e.decayAt = n), !(r <= 0))) {
    for (let t = 0; t < r && (e.lowmem || e.safeQ); t++)
      (gi(e), (e.strikes = Math.max(0, e.strikes - 1)));
    ((e.decayAt = n + r * pi),
      (e.at = t),
      !e.lowmem && !e.safeQ && ((e.strikes = 0), (e.cleanS = 0)));
  }
}
var vi = null;
function yi() {
  if (vi) return vi;
  if (!U()) return (vi = hi());
  let e = {};
  try {
    let t = sn();
    t && (e = JSON.parse(t));
  } catch {
    e = {};
  }
  (!e || typeof e != `object`) && (e = {});
  let t = (e, t, n) =>
      typeof e == `number` && Number.isFinite(e)
        ? Math.max(t, Math.min(n, Math.round(e)))
        : t,
    n = {};
  if (e.live && typeof e.live == `object`)
    for (let [t, r] of Object.entries(e.live))
      r &&
        typeof r.t == `number` &&
        Number.isFinite(r.t) &&
        (n[t] = { t: r.t, v: +!!r.v, p: +!!r.p });
  return (
    (vi = {
      lowmem: t(e.lowmem, 0, 2),
      safeQ: typeof e.safeQ == `string` && H.includes(e.safeQ) ? e.safeQ : ``,
      strikes: t(e.strikes, 0, 99),
      cleanS: t(e.cleanS, 0, 1e7),
      at: t(e.at, 0, 2 ** 53 - 1),
      struck: t(e.struck, 0, 2 ** 53 - 1),
      decayAt: t(e.decayAt, 0, 2 ** 53 - 1),
      live: n,
    }),
    _i(vi, Date.now()),
    vi
  );
}
function bi() {
  U() && cn(JSON.stringify(yi()));
}
function xi(e) {
  return Math.min(8, 1 + 2 * Math.max(1, e));
}
function Si() {
  return ((vi = null), yi());
}
function Ci(e) {
  if (!U()) return;
  let t = Si(),
    n = Date.now();
  (e.lowmem !== void 0 &&
    (t.lowmem = Math.max(t.lowmem, Math.min(2, e.lowmem))),
    e.safeQ &&
      H.includes(e.safeQ) &&
      (!t.safeQ || H.indexOf(e.safeQ) < H.indexOf(t.safeQ)) &&
      (t.safeQ = e.safeQ),
    n - t.struck < 6e4 || (t.strikes = Math.min(99, t.strikes + 1)),
    (t.struck = n),
    (t.decayAt = n),
    (t.cleanS = 0),
    (t.at = n),
    bi());
}
function wi() {
  let e = B(`tgta-safe-quality`) ?? ``,
    t = yi().safeQ,
    n = H.indexOf(e),
    r = H.indexOf(t);
  return n < 0 ? (r < 0 ? `` : t) : r < 0 || n <= r ? e : t;
}
function Ti(e) {
  if (!H.includes(e)) return;
  let t = B(ni);
  ((!t || H.indexOf(e) < H.indexOf(t)) && V(ni, e), Ci({ safeQ: e }));
}
function Ei() {
  let e = yi();
  return U() && (e.lowmem > 0 || !!e.safeQ);
}
function Di(e) {
  if (!U() || !(e > 0)) return;
  let t = Si();
  (t.lowmem || t.safeQ) &&
    ((t.cleanS += e),
    t.cleanS >= 480 * xi(t.strikes) && gi(t),
    (t.at = Date.now()),
    bi());
}
function Oi() {
  return { ...yi(), live: { ...yi().live }, on: U() };
}
function ki() {
  let e = `tgta-tab`,
    t = B(e);
  return (t || ((t = Math.random().toString(36).slice(2, 10)), V(e, t)), t);
}
function Ai() {
  if (!U()) return { killedElsewhere: !1 };
  let e = yi(),
    t = ki(),
    n = Date.now(),
    r = !1;
  for (let [i, a] of Object.entries(e.live)) {
    if (i === t) continue;
    let o = n - a.t;
    o < 6e4 || (a.v && !a.p && o < 108e5 && (r = !0), delete e.live[i]);
  }
  let i = { t: n, v: document.visibilityState === `hidden` ? 0 : 1, p: 0 };
  ((e.live[t] = i), bi());
  let a = () => {
    ((i.t = Date.now()),
      (i.v = document.visibilityState === `hidden` ? 0 : 1),
      (Si().live[t] = i),
      bi());
  };
  return (
    setInterval(() => {
      document.visibilityState !== `hidden` && a();
    }, 2e4),
    document.addEventListener(`visibilitychange`, a),
    window.addEventListener(`pagehide`, () => {
      (delete Si().live[t], bi());
    }),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    (ji = i),
    (Mi = a),
    { killedElsewhere: r }
  );
}
var ji = null,
  Mi = null;
function Ni() {
  let e = Number(B(ii));
  return e > 0 ? Date.now() - e : 1 / 0;
}
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
function ea(e, t, n) {
  let r = e.state,
    i = x,
    a = i.getPrimaries(i.workingColorSpace),
    o = n.colorSpace === `` ? null : i.getPrimaries(n.colorSpace);
  (r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY),
    r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
    r.pixelStorei(
      t.UNPACK_COLORSPACE_CONVERSION_WEBGL,
      n.colorSpace === `` || a === o ? t.NONE : t.BROWSER_DEFAULT_WEBGL,
    ),
    r.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment),
    r.pixelStorei(t.UNPACK_ROW_LENGTH, 0),
    r.pixelStorei(t.UNPACK_SKIP_PIXELS, 0),
    r.pixelStorei(t.UNPACK_SKIP_ROWS, 0));
}
function ta(e, t, n) {
  let r = e.properties.get(n).__webglTexture;
  return r ? (e.state.bindTexture(t.TEXTURE_2D, r), !0) : !1;
}
var na = { jobs: 0, bands: 0, whole: 0, maxBandMs: 0, lastMs: 0 };
function* ra(e, t, n = {}) {
  let r = e.getContext();
  if (r.isContextLost()) return `skip`;
  let i = t.image;
  if (t.version === 0 || !i || i.complete === !1) return `skip`;
  let a = i?.width ?? 0,
    o = i?.height ?? 0,
    s = t,
    c = t.isDataTexture ? (i?.data ?? null) : null,
    l = c ? Qi(r, t) : null,
    u = !c && $i(i) ? i : null,
    d = e.capabilities.maxTextureSize,
    f =
      typeof WebGL2RenderingContext < `u` &&
      r instanceof WebGL2RenderingContext &&
      !s.isCompressedTexture &&
      !s.isCubeTexture &&
      !s.isDataArrayTexture &&
      !s.isData3DTexture &&
      !s.isVideoTexture &&
      !s.isRenderTargetTexture &&
      !s.isDepthTexture &&
      !(t.mipmaps && t.mipmaps.length) &&
      a > 0 &&
      o > 0 &&
      a <= d &&
      o <= d,
    p = a * (l ? l.comps * l.bpc : 4),
    m =
      f &&
      (l
        ? !!c &&
          c.byteLength >= p * o &&
          p % Math.max(1, t.unpackAlignment) === 0
        : !!u && t.format === 1023 && t.type === 1009) &&
      p * o >= Zi;
  if ((na.jobs++, !m)) {
    try {
      e.initTexture(t);
    } catch (e) {
      return (console.warn(`[upload] texture upload failed`, e), `skip`);
    }
    return (na.whole++, `whole`);
  }
  let h = pr(t),
    g = !1,
    _ = () => {
      g || ((g = !0), h(!0));
    };
  try {
    ((t.source.dataReady = !1), e.initTexture(t));
  } catch (e) {
    return (
      (t.source.dataReady = !0),
      h(!1),
      console.warn(`[upload] texture allocation failed`, e),
      (t.needsUpdate = !0),
      `skip`
    );
  } finally {
    t.source.dataReady = !0;
  }
  if (!e.properties.get(t).__webglTexture)
    return (h(!1), (t.needsUpdate = !0), `skip`);
  let v = c,
    y = () => {
      let e = typeof n.bandBytes == `function` ? n.bandBytes() : n.bandBytes;
      return e && e > 0 ? e : 4 << 20;
    },
    b = Math.max(8, Math.min(o, Math.floor(Math.min(y(), Zi) / p))),
    ee = n.targetMs ?? 3,
    x = null,
    S = null,
    C = performance.now(),
    w = 0;
  try {
    for (let i = 0; i < o;) {
      if ((yield, r.isContextLost() || !ta(e, r, t))) return `skip`;
      let s = Math.min(b, o - i, Math.max(8, Math.floor(y() / p))),
        c = performance.now();
      ea(e, r, t);
      let d = t.flipY ? o - i - s : i;
      if (v && l) {
        let e = v.BYTES_PER_ELEMENT ?? 1;
        r.texSubImage2D(
          r.TEXTURE_2D,
          0,
          0,
          d,
          a,
          s,
          l.format,
          l.type,
          v,
          (i * p) / e,
        );
      } else if (u) {
        if (!x) {
          if (
            ((x =
              typeof document < `u`
                ? document.createElement(`canvas`)
                : new OffscreenCanvas(a, s)),
            (x.width = a),
            (x.height = s),
            (S = x.getContext(`2d`)),
            !S)
          )
            throw Error(`no 2D context for the upload strip`);
          ((S.globalCompositeOperation = `copy`),
            (S.imageSmoothingEnabled = !1));
        }
        (x.height !== s &&
          ((x.height = s),
          (S.globalCompositeOperation = `copy`),
          (S.imageSmoothingEnabled = !1)),
          S.drawImage(u, 0, i, a, s, 0, 0, a, s),
          r.texSubImage2D(r.TEXTURE_2D, 0, 0, d, r.RGBA, r.UNSIGNED_BYTE, x));
      }
      ((i += s), i >= o && t.generateMipmaps && r.generateMipmap(r.TEXTURE_2D));
      let f = performance.now() - c;
      (n.onBand?.(w++, f, s),
        na.bands++,
        f > na.maxBandMs && (na.maxBandMs = f),
        (b = Math.max(
          8,
          Math.min(
            Math.floor((4 << 20) / p),
            Math.round((s * ee) / Math.max(0.25, f)),
          ),
        )));
    }
  } catch (e) {
    return (
      console.warn(
        `[upload] band upload failed — the texture uploads whole on first use`,
        e,
      ),
      (t.needsUpdate = !0),
      h(!1),
      (g = !0),
      `skip`
    );
  } finally {
    (x && (x.width = x.height = 1), (na.lastMs = performance.now() - C));
  }
  return (_(), `bands`);
}
function ia(e, t, n, r, i = {}) {
  let a = e.getContext();
  if (
    a.isContextLost() ||
    !(
      typeof WebGL2RenderingContext < `u` && a instanceof WebGL2RenderingContext
    )
  )
    return !1;
  let o = t.image,
    s = i.data ?? o?.data ?? null,
    c = o?.width ?? 0,
    l = o?.height ?? 0,
    u = Qi(a, t);
  if (!s || !u || !c || !l) return !1;
  let d = Math.max(0, Math.floor(n)),
    f = Math.min(l, Math.ceil(r));
  if (f <= d) return !0;
  let p = c * u.comps * u.bpc;
  if (
    p % Math.max(1, t.unpackAlignment) !== 0 ||
    s.byteLength < p * f ||
    !e.properties.get(t) ||
    !e.properties.get(t).__webglTexture
  )
    return !1;
  try {
    (ta(e, a, t), ea(e, a, t));
    let n = s.BYTES_PER_ELEMENT ?? 1,
      r = f - d;
    return (
      a.texSubImage2D(
        a.TEXTURE_2D,
        0,
        0,
        t.flipY ? l - d - r : d,
        c,
        r,
        u.format,
        u.type,
        s,
        (d * p) / n,
      ),
      i.mips && a.generateMipmap(a.TEXTURE_2D),
      !0
    );
  } catch (e) {
    return (console.warn(`[upload] row upload failed`, e), !1);
  }
}
function aa(e = typeof location > `u` ? `` : location.search) {
  return new URLSearchParams(e).get(`rz`) !== `0`;
}
var oa =
    /shadowCoord\.xyz \/= shadowCoord\.w;\s*shadowCoord\.z \+= shadowBias;\s*bool inFrustum/,
  sa = `shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`,
  ca =
    /float getShadow\(\s*sampler2DShadow[^{]*\{[^}]*?USE_REVERSED_DEPTH_BUFFER[^}]*?shadowBias[\s\S]*?bool inFrustum/;
function la(e = ve) {
  let t = e.shadowmap_pars_fragment;
  return typeof t == `string`
    ? t.includes(`shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`)
      ? `already-patched`
      : oa.test(t)
        ? ((e.shadowmap_pars_fragment = t.replace(oa, sa)), `patched`)
        : ca.test(t)
          ? `native`
          : `unknown`
    : `unknown`;
}
function ua(e = ve) {
  let t = e.shadowmap_pars_fragment;
  typeof t == `string` &&
    t.includes(`shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`) &&
    (e.shadowmap_pars_fragment = t.replace(sa, da.get(e) ?? t));
}
var da = new WeakMap();
function fa(e) {
  let t = e.shadowmap_pars_fragment,
    n = typeof t == `string` ? oa.exec(t) : null;
  n && !da.has(e) && da.set(e, n[0]);
}
var pa = 0.6180339,
  ma = -0.4142135;
function ha(e, t) {
  let n = null,
    r = Object.prototype.hasOwnProperty.call(t, `polygonOffset`),
    i = t.polygonOffset;
  t.polygonOffset = (e, t) => {
    n = [e, t];
  };
  try {
    (e.setPolygonOffset(!0, pa, ma), e.setPolygonOffset(!1));
  } finally {
    r ? (t.polygonOffset = i) : delete t.polygonOffset;
  }
  let a = n;
  if (!a) return null;
  let o = (e, t) => (Math.abs(e - t) < 1e-6 ? -1 : +(Math.abs(e + t) < 1e-6)),
    s = o(a[0], pa),
    c = o(a[1], ma);
  return s && c ? { factor: s, units: c } : null;
}
function ga(e, t, n = 16) {
  if (t.factor === 1 && t.units === 1 && n === 1) return;
  let r = e.polygonOffset.bind(e),
    i = t.factor,
    a = t.units * n;
  e.polygonOffset = (e, t) => r(e * i, t * a);
}
function _a(e, t, n = typeof location > `u` ? `` : location.search) {
  let r = {
      wanted: t,
      supported: !!e.capabilities.reversedDepthBuffer,
      active: !1,
      pcf: `skipped`,
      polygonOffset: null,
      reason: ``,
    },
    i = e.state.buffers.depth;
  if (!t) return ((r.reason = `rz=0`), r);
  if (!r.supported || !i.getReversed())
    return ((r.reason = `EXT_clip_control unavailable`), r);
  if (new URLSearchParams(n).get(`rzfix`) === `0`)
    return ((r.active = !0), (r.reason = `rzfix=0: quirk fixes skipped`), r);
  let a = ve;
  (fa(a), (r.pcf = la(a)));
  let o = e.getContext();
  if (
    ((r.polygonOffset = ha(e.state, o)),
    r.pcf === `unknown` || !r.polygonOffset)
  )
    return (
      (r.reason =
        r.pcf === `unknown`
          ? `three's PCF shadow chunk changed`
          : `three's polygon-offset handling changed`),
      console.error(
        `[renderer] reversed-Z disabled: ${r.reason} — update src/render/reversedZ.ts (test/reversedZ.test.mjs)`,
      ),
      i.setReversed(!1),
      ua(a),
      r
    );
  let s = Number(new URLSearchParams(n).get(`rzunits`));
  return (ga(o, r.polygonOffset, s > 0 ? s : 16), (r.active = !0), r);
}
var va =
    typeof location > `u`
      ? NaN
      : Number(new URLSearchParams(location.search).get(`near`)),
  ya = va > 0.05 && va < 3 ? va : 0.3,
  ba = (() => {
    if (typeof location > `u`) return !1;
    let e = new URLSearchParams(location.search),
      t = e.get(`gpubudget`);
    return (
      (e.has(`gpuacct`) && e.get(`gpuacct`) !== `0`) ||
      (t !== null && t !== `0` && t !== ``)
    );
  })(),
  xa = null,
  Sa = null;
function Ca() {
  return ba
    ? (Sa ??= t(
        () =>
          Promise.resolve()
            .then(() => Bo)
            .then(
              (e) => (xa = e),
              (e) => (
                console.warn(`[renderer] GPU accounting unavailable`, e),
                null
              ),
            ),
        void 0,
      ))
    : Promise.resolve(null);
}
var wa = 1e3 / 60,
  Ta = 0.05,
  Ea = 12,
  Da = 0.985,
  W = { on: !1, depth: 1 / 0, culled: 0 },
  Oa = () => {},
  ka = class {
    quality;
    gl;
    scene = new s();
    camera;
    canvas;
    reversedZ;
    post = null;
    pixelRatio = 1;
    frameMsAvg = wa;
    gpuMs = -1;
    cpuMs = 0;
    targetMs = wa;
    frameCapMs = 0;
    renderRevision = 0;
    get redrawPending() {
      return this.resizePending;
    }
    adaptive = !0;
    worldHidden = !1;
    width = 1;
    height = 1;
    skippedEmpty = 0;
    tightCount = 0;
    dissolveCulled = 0;
    forceShed = (() => {
      let e =
        typeof location > `u`
          ? null
          : new URLSearchParams(location.search).get(`shed`);
      return e === `0` ? 0 : e === `1` ? 1 : null;
    })();
    dissolveCull =
      typeof location > `u` ||
      new URLSearchParams(location.search).get(`dcull`) !== `0`;
    contextLost = !1;
    gpuAccount = null;
    onContextLost = null;
    onContextRestored = null;
    gpuOom = 0;
    onGpuOom = null;
    oomT = 0;
    upWhere = ``;
    upFrame = -1;
    upT = 0;
    oomChecks = 0;
    noteUpload(e) {
      ((this.upWhere = e),
        (this.upFrame = this.frameNo),
        (this.upT = performance.now()));
    }
    pollOom(e) {
      this.oomT += e;
      let t = !this.streamBusy;
      if (this.upFrame >= 0) {
        if (
          !(
            t &&
            this.frameNo - this.upFrame >= 2 &&
            performance.now() - this.upT > 250
          ) &&
          this.oomT < 20
        )
          return;
        let e = this.upWhere;
        ((this.upFrame = -1), (this.oomT = 0), this.checkGpuOom(e));
        return;
      }
      t &&
        this.oomT > (this.quality.mobile ? 4 : 12) &&
        ((this.oomT = 0), this.checkGpuOom(`frame`));
    }
    checkGpuOom(e) {
      if (this.contextLost) return !1;
      this.oomChecks++;
      let t = this.gl.getContext(),
        n = !1;
      for (let e = 0; e < 4; e++) {
        let e = t.getError();
        if (e === t.NO_ERROR || e === t.CONTEXT_LOST_WEBGL) break;
        e === t.OUT_OF_MEMORY && (n = !0);
      }
      if (!n) return !1;
      if (this.gpuOom++ === 0) {
        console.warn(
          `[renderer] GL_OUT_OF_MEMORY (${e}) — the GPU memory pool is full`,
        );
        try {
          this.onGpuOom?.(e);
        } catch {}
      }
      return !0;
    }
    cpuBound = !1;
    shed = 0;
    onCpuBound = null;
    isStaticRoot = null;
    frameNo = 0;
    preRender = [];
    suspendT = 3;
    cooldown = 0;
    overT = 0;
    underT = 0;
    boundT = 0;
    freeT = 0;
    missEma = 0;
    lastFar = 0;
    lastShadowFrame = -10;
    probe = null;
    probeWait = 4;
    probeBackoff = 4;
    resizePending = !1;
    cadRing = new Float32Array(64);
    cadSorted = new Float32Array(64);
    cadN = 0;
    cadT = 0;
    cadenceMs = 0;
    bgMs = 0;
    streamBusy = !1;
    inShadowPass = !1;
    warmingShadow = !1;
    depthWarm = new Set();
    hdrType = E;
    timerExt = null;
    queries = [];
    pending = [];
    queryOpen = !1;
    cullList = [];
    hidden = [];
    cullScanT = 0;
    scanStatic = !1;
    held = new Set();
    constructor(e, t) {
      this.quality = t;
      let n = t.bloom || t.postFx;
      if (
        ((this.gl = new xe({
          antialias: t.antialias && !n,
          powerPreference: `high-performance`,
          stencil: !1,
          alpha: !1,
          preserveDrawingBuffer: new URLSearchParams(location.search).has(
            `shot`,
          ),
          reversedDepthBuffer: aa(),
        })),
        (this.reversedZ = _a(this.gl, aa())),
        (this.gl.debug.checkShaderErrors = !1),
        ba)
      ) {
        let e = (e) => {
          if (e && !this.gpuAccount)
            try {
              this.gpuAccount = new e.GpuAccount(this.gl.getContext());
            } catch (e) {
              console.warn(`[renderer] GPU accounting unavailable`, e);
            }
        };
        xa ? e(xa) : Ca().then(e);
      }
      (typeof window < `u` && (window.__gpuAccount = () => this.gpuMemory()),
        typeof window < `u` &&
          new URLSearchParams(location.search).has(`shot`) &&
          (window.__three = we),
        (this.canvas = this.gl.domElement),
        (this.canvas.id = `game-canvas`),
        e.appendChild(this.canvas),
        (this.gl.outputColorSpace = C),
        (this.gl.toneMapping = 4),
        (this.gl.toneMappingExposure = 1),
        (this.gl.shadowMap.enabled = t.shadows),
        (this.gl.shadowMap.type = 1),
        (this.gl.info.autoReset = !1),
        this.gl.setOpaqueSort(this.opaqueSort),
        this.wrapShadowMap(),
        this.skipEmptyBatches(),
        (this.camera = new Me(60, 1, ya, t.drawDistance)),
        (this.lastFar = this.camera.far));
      let r = new URLSearchParams(location.search),
        i = Number(r.get(`dpr`));
      ((r.get(`adapt`) === `0` || i > 0) && (this.adaptive = !1),
        (this.pixelRatio = i > 0 ? i : this.startPixelRatio()),
        this.initTimer(),
        (this.hdrType = Ia(this.gl.getContext())),
        this.resize(),
        window.addEventListener(`resize`, () => {
          ((this.resizePending = !0), this.suspendAdapt(1));
        }),
        this.canvas.addEventListener(
          `webglcontextlost`,
          (e) => {
            if ((e.preventDefault(), !this.contextLost)) {
              this.contextLost = !0;
              try {
                this.onContextLost?.();
              } catch (e) {
                console.warn(`[renderer] context-lost handler failed`, e);
              }
            }
          },
          !1,
        ),
        this.canvas.addEventListener(
          `webglcontextrestored`,
          () => this.onContextRestored?.(),
          !1,
        ));
    }
    gpuMemory() {
      return this.gpuAccount?.report() ?? null;
    }
    maxPR() {
      return Math.max(
        0.5,
        Math.min(window.devicePixelRatio || 1, this.quality.maxPixelRatio),
      );
    }
    setFrameCap(e) {
      e !== this.frameCapMs &&
        ((this.frameCapMs = e),
        (this.cadenceMs = 0),
        (this.targetMs = Math.max(wa, e)),
        (this.frameMsAvg = this.targetMs),
        (this.probe = null),
        this.suspendAdapt(2));
    }
    minPR() {
      return Math.min(this.maxPR(), this.quality.minPixelRatio);
    }
    startPixelRatio() {
      let e = this.maxPR();
      return Ba(
        this.quality.mobile ? Math.max(this.minPR(), Math.min(e, 1.5)) : e,
      );
    }
    applyQuality(e) {
      ((this.quality = e),
        (this.gl.shadowMap.enabled = e.shadows),
        (this.camera.far =
          e.drawDistance * (1 - 0.15000000000000002 * this.shed)),
        (this.lastFar = this.camera.far),
        this.camera.updateProjectionMatrix(),
        this.adaptive && (this.pixelRatio = this.startPixelRatio()),
        this.resize(),
        this.suspendAdapt(2),
        (this.probeBackoff = 4));
    }
    setPostFx(e) {
      (this.post?.dispose(), (this.post = e), this.resize());
    }
    get postFx() {
      return this.post;
    }
    resize() {
      (this.renderRevision++, (this.resizePending = !1));
      let e = window.innerWidth,
        t = window.innerHeight;
      ((this.width = e),
        (this.height = t),
        this.gl.setPixelRatio(this.pixelRatio),
        this.gl.setSize(e, t, !1),
        (this.canvas.style.width = `100%`),
        (this.canvas.style.height = `100%`),
        (this.camera.aspect = e / t),
        this.camera.updateProjectionMatrix(),
        this.post?.setSize(e, t));
    }
    suspendAdapt(e) {
      ((this.suspendT = Math.max(this.suspendT, e)),
        (this.overT = this.underT = 0),
        (this.boundT = Math.min(this.boundT, 0.5)),
        (this.probe &&= null));
    }
    adapt(e, t, n) {
      this.pollTimer();
      let r = Math.min(50, Math.max(0, e));
      if (
        ((this.cpuMs += (Math.min(50, t) - this.cpuMs) * 0.1), document.hidden)
      )
        return this.suspendAdapt(1);
      if ((this.trackCadence(e, n), this.suspendT > 0)) {
        ((this.suspendT -= n), (this.frameMsAvg = this.targetMs));
        return;
      }
      if ((this.trackCpuBound(r, n), !this.adaptive)) return;
      let i = this.gpuMs >= 0,
        a = this.targetMs,
        o;
      if (
        ((o = i
          ? this.gpuMs
          : r > a * 2.5 || this.cpuMs + this.bgMs > a * 0.8 || this.streamBusy
            ? r > a * 1.08
              ? a * 0.95
              : Math.min(r, a * 0.95)
            : r > a * 1.08
              ? this.cpuMs < a * 0.8
                ? r
                : a * 0.95
              : Math.min(r, Math.max(t, a * 0.9))),
        (this.frameMsAvg += (Math.min(50, o) - this.frameMsAvg) * 0.08),
        this.cooldown > 0)
      ) {
        this.cooldown -= n;
        return;
      }
      let s = this.maxPR(),
        c = this.minPR(),
        l = this.frameMsAvg / a;
      if (this.probe) {
        let e = this.probe;
        if (this.streamBusy && !i) {
          e.t = e.acc = e.n = 0;
          return;
        }
        if (((e.t += n), (e.acc += r), e.n++, e.t >= 1.5)) {
          let t = e.acc / e.n;
          ((this.probe = null),
            t > a * 1.1 && this.cpuMs < a * 0.8
              ? (this.setPR(e.from),
                (this.probeBackoff = Math.min(40, this.probeBackoff * 2)),
                (this.probeWait = this.probeBackoff))
              : ((this.probeBackoff = Math.max(4, this.probeBackoff * 0.75)),
                (this.probeWait = 2.5)),
            (this.cooldown = 1));
        }
        return;
      }
      if (l > 1.12 && this.pixelRatio > c + 0.001) {
        if (((this.overT += n), (this.underT = 0), this.overT > 0.6)) {
          let e = Math.max(0.7, Math.min(0.95, Math.sqrt(1 / l) * 0.97));
          (this.setPR(
            Math.max(c, Math.min(this.pixelRatio - Ta, this.pixelRatio * e)),
          ),
            (this.cooldown = 1.2),
            (this.overT = 0),
            (this.probeWait = Math.max(this.probeWait, 3)));
        }
        return;
      }
      if (
        ((this.overT = Math.max(0, this.overT - n)),
        !(this.pixelRatio >= s - 0.001))
      ) {
        if (i) {
          if (l < 0.7) {
            if (((this.underT += n), this.underT > 2)) {
              let e = Math.sqrt(0.85 / Math.max(0.2, l));
              (this.setPR(
                Math.min(
                  s,
                  Math.max(
                    this.pixelRatio + Ta,
                    Math.min(this.pixelRatio * e, this.pixelRatio + 0.25),
                  ),
                ),
              ),
                (this.underT = 0),
                (this.cooldown = 1.5));
            }
          } else this.underT = 0;
          return;
        }
        l < 0.98 &&
          r < a * 1.08 &&
          !this.streamBusy &&
          ((this.probeWait -= n),
          this.probeWait <= 0 &&
            ((this.probe = { from: this.pixelRatio, t: 0, acc: 0, n: 0 }),
            this.setPR(Math.min(s, this.pixelRatio + 0.1))));
      }
    }
    trackCadence(e, t) {
      if (this.gpuMs >= 0 || !(e > 0) || e > 100) return;
      let n = this.cadRing;
      if (((n[this.cadN++ % n.length] = e), (this.cadT += t), this.cadT < 1))
        return;
      this.cadT = 0;
      let r = Math.min(this.cadN, n.length);
      if (((this.cadN = 0), r < 12)) return;
      let i = this.cadSorted;
      for (let e = 0; e < r; e++) i[e] = n[e];
      for (let e = 1; e < r; e++) {
        let t = i[e],
          n = e - 1;
        for (; n >= 0 && i[n] > t;) ((i[n + 1] = i[n]), n--);
        i[n + 1] = t;
      }
      let a = i[r >> 1],
        o = 0,
        s = 0;
      for (let e = 0; e < r; e++)
        i[e] > a * 2.2 || (s++, Math.abs(i[e] - a) <= 2.5 && o++);
      let c = Math.max(wa, this.frameCapMs),
        l = Math.round(a / c),
        u =
          l >= 2 &&
          Math.abs(a - l * c) <= 2 &&
          s >= 8 &&
          o >= 0.75 * s &&
          this.cpuMs < 0.5 * a,
        d =
          this.cadenceMs > 0 &&
          Math.abs(a - this.cadenceMs) <= 2.5 &&
          this.cpuMs < 0.6 * this.cadenceMs,
        f = u ? l * c : d ? this.cadenceMs : 0;
      f !== this.cadenceMs &&
        ((this.cadenceMs = f),
        (this.targetMs = f || c),
        (this.frameMsAvg = this.targetMs),
        (this.overT = this.underT = 0),
        (this.probe = null));
    }
    trackCpuBound(e, t) {
      let n = this.targetMs;
      this.missEma += (+(e > n * 1.25) - this.missEma) * Math.min(1, t * 3);
      let r = this.gpuMs >= 0 ? this.gpuMs < 0.7 * n : !0;
      if (this.forceShed !== null) {
        let e = this.forceShed === 1;
        e !== this.cpuBound && ((this.cpuBound = e), this.notifyBound(e));
      } else if (this.cpuBound)
        ((this.freeT =
          this.cpuMs < 0.6 * n && this.missEma < 0.02
            ? this.freeT + t
            : Math.max(0, this.freeT - t * 0.5)),
          this.freeT > 4 &&
            ((this.cpuBound = !1), (this.boundT = 0), this.notifyBound(!1)));
      else {
        let e =
          this.cpuMs > n || (this.cpuMs > 0.75 * n && this.missEma > 0.05);
        ((this.boundT =
          e && r ? this.boundT + t : Math.max(0, this.boundT - t)),
          this.boundT > 1.5 &&
            ((this.cpuBound = !0), (this.freeT = 0), this.notifyBound(!0)));
      }
      let i = +!!this.cpuBound,
        a = this.shed;
      ((this.shed = Math.max(
        0,
        Math.min(1, a + Math.max(-t * 0.25, Math.min(t * 0.5, i - a))),
      )),
        this.shed !== a && this.applyShedFar());
    }
    notifyBound(e) {
      try {
        this.onCpuBound?.(e);
      } catch (e) {
        console.warn(`[renderer] cpuBound handler failed`, e);
      }
    }
    applyShedFar() {
      let e = this.camera,
        t = this.quality.drawDistance;
      if (Math.abs(e.far - this.lastFar) > 0.01 && Math.abs(e.far - t) > 0.01)
        return;
      let n = Math.round((t * (1 - 0.15000000000000002 * this.shed)) / 5) * 5;
      Math.abs(n - e.far) < 4.99 ||
        ((e.far = n), (this.lastFar = n), e.updateProjectionMatrix());
    }
    warmDepth = 0;
    skipEmptyBatches() {
      let e = this.gl,
        t = e.renderBufferDirect.bind(e);
      e.renderBufferDirect = (e, n, r, i, a, o) => {
        let s = a;
        if (
          s.isBatchedMesh &&
          s._multiDrawCount === 0 &&
          this.warmDepth === 0 &&
          !this.warmingShadow
        ) {
          this.skippedBatches++;
          return;
        }
        t(e, n, r, i, a, o);
      };
    }
    skippedBatches = 0;
    wrapShadowMap() {
      let e = this.gl.shadowMap,
        t = e.render.bind(e);
      e.render = (n, r, i) => {
        if (!n.length) return t(n, r, i);
        if (this.warmingShadow) {
          this.inShadowPass = !0;
          try {
            return t(n, r, i);
          } finally {
            this.inShadowPass = !1;
          }
        }
        if (this.shed > 0.5 && this.lastShadowFrame === this.frameNo - 1)
          return;
        if ((this.slimShadowMaps(n), e.autoUpdate || e.needsUpdate))
          for (let e = 0; e < n.length; e++) {
            let t = n[e].shadow;
            if (t && (t.autoUpdate || t.needsUpdate)) {
              this.lastShadowFrame = this.frameNo;
              break;
            }
          }
        let a = W.on;
        W.on = !1;
        try {
          t(n, r, i);
        } finally {
          W.on = a;
        }
      };
    }
    slimShadowMaps(e) {
      let t = this.gl.shadowMap.type;
      if (t === 1 || t === 0)
        for (let t = 0; t < e.length; t++) {
          let n = e[t].shadow,
            r = n?.map;
          if (
            !r ||
            r.isWebGLCubeRenderTarget ||
            !r.depthTexture ||
            r.texture.format === 1028
          )
            continue;
          let i = r.depthTexture,
            a = new pe(r.width, r.height, {
              format: ae,
              type: p,
              depthBuffer: !0,
              generateMipmaps: !1,
              minFilter: v,
              magFilter: v,
            });
          a.texture.name = r.texture.name;
          let o = new l(r.width, r.height, i.type);
          ((o.format = i.format),
            (o.compareFunction = i.compareFunction),
            (o.minFilter = i.minFilter),
            (o.magFilter = i.magFilter),
            (o.name = i.name),
            (a.depthTexture = o),
            (n.map = a),
            r.dispose(),
            (n.needsUpdate = !0));
        }
    }
    setPR(e) {
      let t = Ba(e);
      Math.abs(t - this.pixelRatio) < 0.001 ||
        ((this.pixelRatio = t), (this.resizePending = !0));
    }
    opaqueSort = (e, t) => {
      if (e.groupOrder !== t.groupOrder) return e.groupOrder - t.groupOrder;
      if (e.renderOrder !== t.renderOrder) return e.renderOrder - t.renderOrder;
      let n = this.progId(e.material),
        r = this.progId(t.material);
      if (n !== r) return n - r;
      let i = e.material.id,
        a = t.material.id;
      if (i !== a) return i - a;
      let o = e.materialVariant ?? 0,
        s = t.materialVariant ?? 0;
      return o === s ? (e.z === t.z ? e.id - t.id : e.z - t.z) : o - s;
    };
    progId(e) {
      if (e.__pf === this.frameNo) return e.__pid;
      let t = this.gl.properties.get(e).currentProgram;
      return ((e.__pf = this.frameNo), (e.__pid = t ? t.id : 1e6 + e.id));
    }
    initTimer() {
      if (new URLSearchParams(location.search).get(`gputimer`) !== `0`)
        try {
          let e = this.gl.getContext();
          if (!(e instanceof WebGL2RenderingContext)) return;
          let t = e.getExtension(`EXT_disjoint_timer_query_webgl2`);
          if (!t) return;
          this.timerExt = t;
          for (let t = 0; t < 4; t++) {
            let t = e.createQuery();
            t && this.queries.push(t);
          }
        } catch {
          this.timerExt = null;
        }
    }
    beginTimer() {
      if (!this.timerExt || this.queryOpen || !this.queries.length) return;
      let e = this.gl.getContext(),
        t = this.queries.pop();
      (e.beginQuery(this.timerExt.TIME_ELAPSED_EXT, t),
        this.pending.push(t),
        (this.queryOpen = !0));
    }
    endTimer() {
      this.queryOpen &&
        this.timerExt &&
        (this.gl.getContext().endQuery(this.timerExt.TIME_ELAPSED_EXT),
        (this.queryOpen = !1));
    }
    pollTimer() {
      if (!this.timerExt || !this.pending.length) return;
      let e = this.gl.getContext(),
        t = this.pending[0];
      if (!e.getQueryParameter(t, e.QUERY_RESULT_AVAILABLE)) return;
      let n = e.getParameter(this.timerExt.GPU_DISJOINT_EXT),
        r = e.getQueryParameter(t, e.QUERY_RESULT);
      if ((this.pending.shift(), this.queries.push(t), !n && r > 0)) {
        let e = r / 1e6;
        this.gpuMs = this.gpuMs < 0 ? e : this.gpuMs + (e - this.gpuMs) * 0.25;
      }
    }
    async compileAll(e = [], t = [], n) {
      let r = this.gl;
      if (this.contextLost) return;
      this.beginPrewarm(t);
      let i = null;
      this.post && (i = new pe(4, 4, { type: p, depthBuffer: !0 }));
      let a = [],
        o = (e, t, n) => {
          let o = r.getRenderTarget();
          i && r.setRenderTarget(i);
          try {
            a.push(r.compileAsync(e, t, n));
          } catch (e) {
            console.warn(`[renderer] compile warm-up failed`, e);
          } finally {
            r.setRenderTarget(o);
          }
        },
        s = performance.now(),
        c = this.scene.children.slice();
      for (let e of c)
        e.parent === this.scene &&
          (o(e, this.camera, this.scene),
          n &&
            performance.now() - s > 12 &&
            (await n(), (s = performance.now())));
      for (let t of e) o(t.scene, t.camera, null);
      (await Promise.race([
        Promise.all(a),
        new Promise((e) => setTimeout(e, 6e3)),
      ]),
        i?.dispose());
    }
    async compileRoots(e, t, n) {
      if (this.contextLost || !e.length) return;
      let r = this.gl,
        i = null;
      this.post && (i = new pe(4, 4, { type: p, depthBuffer: !0 }));
      let a = [],
        o = (e, t) => {
          let n = r.getRenderTarget();
          i && r.setRenderTarget(i);
          try {
            a.push(r.compileAsync(e, this.camera, t));
          } catch (e) {
            console.warn(`[renderer] compile failed`, e);
          } finally {
            r.setRenderTarget(n);
          }
        };
      if (t) {
        let r = [],
          i = new Set();
        for (let t of e)
          t.traverse((e) => {
            let t = e;
            if (
              !t.material ||
              !(t.isMesh || e.isPoints || e.isLine || e.isSprite)
            )
              return;
            let n =
                (e.isInstancedMesh ? `i` : ``) +
                (e.isSkinnedMesh ? `s` : ``) +
                (e.isBatchedMesh ? `b` : ``) +
                (t.morphTargetInfluences ? `m` : ``) +
                (e.isPoints ? `p` : e.isLine ? `l` : e.isSprite ? `S` : ``) +
                La(t),
              a = Array.isArray(t.material) ? t.material : [t.material],
              o = !1;
            for (let e of a) {
              let t = e.uuid + n;
              i.has(t) || (i.add(t), (o = !0));
            }
            o && r.push(e);
          });
        let a = new s();
        ((a.fog = this.scene.fog), (a.environment = this.scene.environment));
        let c = [];
        (this.scene.traverseVisible((e) => {
          e.isLight && c.push(e);
        }),
          (a.children = c));
        let l = new u(),
          d = l,
          f = 0;
        for (; f < r.length;) {
          let e = performance.now();
          do ((d.children = [r[f++]]), o(l, a), (d.children = []));
          while (f < r.length && !(n ? n() : performance.now() - e > 4));
          f < r.length && (await t());
        }
        a.children = [];
      } else for (let t of e) o(t, this.scene);
      (await Promise.race([
        Promise.all(a),
        new Promise((e) => setTimeout(e, 4e3)),
      ]),
        i?.dispose());
    }
    compileAs(e, t) {
      if (this.contextLost) return !1;
      let n = this.gl,
        r = e,
        i = r.material,
        a = this.post
          ? (this.compileRT ??= new pe(4, 4, { type: p, depthBuffer: !0 }))
          : null,
        o = new s();
      ((o.fog = this.scene.fog), (o.environment = this.scene.environment));
      let c = [];
      (this.scene.traverseVisible((e) => {
        e.isLight && c.push(e);
      }),
        (o.children = c));
      let l = new u(),
        d = Object.create(e);
      ((d.children = []), (d.material = t), (l.children = [d]));
      let f = n.getRenderTarget();
      try {
        return (a && n.setRenderTarget(a), n.compile(l, this.camera, o), !0);
      } catch (e) {
        return (console.warn(`[renderer] compileAs failed`, e), !1);
      } finally {
        (n.setRenderTarget(f), (o.children = []), (r.material = i));
      }
    }
    compileRT = null;
    texturesOf(e) {
      let t = new Set(),
        n = new Set(),
        r = (e) => {
          let n = e;
          n && n.isTexture && !n.isRenderTargetTexture && t.add(n);
        };
      for (let t of e)
        t.traverse((e) => {
          let t = e;
          if (!t.material) return;
          let i = Array.isArray(t.material) ? t.material : [t.material];
          for (let e of i)
            if (!n.has(e)) {
              n.add(e);
              for (let t in e) r(e[t]);
              for (let t of [e.uniforms, this.gl.properties.get(e).uniforms])
                if (t) for (let e in t) r(t[e]?.value);
            }
        });
      return [...t];
    }
    isUploaded(e) {
      return this.gl.properties.get(e).__version === e.version;
    }
    preupload(e) {
      if (this.contextLost || this.isUploaded(e)) return !1;
      let t = e.image;
      if (!t || (!t.width && !e.isCubeTexture && !e.mipmaps?.length)) return !1;
      try {
        return (
          this.gl.initTexture(e),
          this.noteUpload(`texture '${e.name}'`),
          !0
        );
      } catch (e) {
        return (console.warn(`[renderer] texture pre-upload failed`, e), !1);
      }
    }
    uploadBands(e, t) {
      let n = this;
      return (function* () {
        if (n.contextLost || n.isUploaded(e)) return `skip`;
        let r = yield* ra(n.gl, e, t);
        return (r !== `skip` && n.noteUpload(`texture '${e.name}'`), r);
      })();
    }
    uploadRows(e, t, n, r) {
      if (this.contextLost) return !1;
      let i = ia(this.gl, e, t, n, r);
      return (i && this.noteUpload(`rows of '${e.name}'`), i);
    }
    get bandStats() {
      return na;
    }
    uploadScene = null;
    uploadRT = null;
    noDraw = new le({
      name: `core-upload-nodraw`,
      glslVersion: Ce,
      vertexShader: `in vec3 position;
void main() { gl_Position = vec4(position * 0.0, 1.0) + vec4(2.0, 2.0, 2.0, 0.0); }`,
      fragmentShader: `precision lowp float;
out vec4 fragColor;
void main() { fragColor = vec4(0.0); }`,
      depthTest: !1,
      depthWrite: !1,
      colorWrite: !1,
    });
    uploadDraw(e) {
      if (this.contextLost || !e.length) return 0;
      let t = this.gl,
        n = (this.uploadScene ??= new s());
      n.matrixWorldAutoUpdate = !1;
      let r = (this.uploadRT ??= new pe(1, 1, { depthBuffer: !1 })),
        i = [],
        a = new Map(),
        o = 0,
        c = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      for (let t of e) {
        let e = t.geometry;
        if (!e) continue;
        (i.push({
          m: t,
          mat: t.material,
          v: t.visible,
          fc: t.frustumCulled,
          obr: c(t, `onBeforeRender`) ? t.onBeforeRender : void 0,
          oar: c(t, `onAfterRender`) ? t.onAfterRender : void 0,
        }),
          (t.material = this.noDraw),
          (t.visible = !0),
          (t.frustumCulled = !1),
          (t.onBeforeRender = Oa),
          (t.onAfterRender = Oa));
        let n = t;
        if (
          (n.isBatchedMesh &&
            ((i[i.length - 1].mdc = n._multiDrawCount),
            (n._multiDrawCount = 0)),
          !a.has(e))
        ) {
          (a.set(e, e.drawRange.count), (e.drawRange.count = 0));
          for (let t in e.attributes)
            o += e.attributes[t].array?.byteLength ?? 0;
          e.index && (o += e.index.array.byteLength);
        }
      }
      n.children = i.map((e) => e.m);
      let l = t.shadowMap,
        u = l.autoUpdate,
        d = l.needsUpdate;
      ((l.autoUpdate = !1), (l.needsUpdate = !1));
      let f = t.getRenderTarget();
      this.warmDepth++;
      try {
        (t.setRenderTarget(r),
          t.render(n, this.camera),
          this.noteUpload(`geometry`));
      } catch (e) {
        console.warn(`[renderer] geometry pre-upload failed`, e);
      } finally {
        (this.warmDepth--,
          t.setRenderTarget(f),
          (l.autoUpdate = u),
          (l.needsUpdate = d),
          (n.children = []));
        for (let [e, t] of a) e.drawRange.count = t;
        for (let e of i)
          ((e.m.material = e.mat),
            (e.m.visible = e.v),
            (e.m.frustumCulled = e.fc),
            e.obr ? (e.m.onBeforeRender = e.obr) : delete e.m.onBeforeRender,
            e.oar ? (e.m.onAfterRender = e.oar) : delete e.m.onAfterRender,
            e.mdc !== void 0 && (e.m._multiDrawCount = e.mdc));
      }
      return o;
    }
    hold(e) {
      for (let t of e) this.held.add(t);
    }
    unhold(e) {
      for (let t of e) this.held.delete(t);
    }
    freezeStatic(e) {
      (e.updateMatrixWorld(!0),
        (e.matrixWorldAutoUpdate = !1),
        e.traverse((e) => {
          e.matrixAutoUpdate = !1;
        }));
    }
    thaw(e) {
      ((e.matrixWorldAutoUpdate = !0),
        e.traverse((e) => {
          e.matrixAutoUpdate = !0;
        }));
    }
    programsAtReady = 0;
    pinned = new WeakSet();
    pinnedPrograms = 0;
    pinPrograms() {
      let e = 0;
      for (let t of this.gl.info.programs ?? [])
        this.pinned.has(t) || (this.pinned.add(t), t.usedTimes++, e++);
      return ((this.pinnedPrograms += e), e);
    }
    warmLog = ``;
    prewarmRoot = null;
    beginPrewarm(e) {
      if (this.prewarmRoot || !e.length) return;
      let t = (this.prewarmRoot = new u());
      t.name = `__prewarm`;
      for (let n of e) n && !n.parent && t.add(n);
      (t.position.set(0, -500, 0), this.scene.add(t));
    }
    endPrewarm() {
      let e = this.prewarmRoot;
      if (e) {
        ((this.prewarmRoot = null), this.scene.remove(e));
        for (let t of e.children.slice()) e.remove(t);
      }
    }
    warmFrames(e, t = !0) {
      if (!this.contextLost) {
        this.warmDepth++;
        try {
          this.warmFramesInner(e, t);
        } finally {
          this.warmDepth--;
        }
      }
    }
    warmFramesInner(e, t) {
      let n = this.camera,
        r = n.position.clone(),
        i = n.quaternion.clone(),
        a = new Te(),
        o = performance.now(),
        s = [];
      for (let t = 0; t < 4; t++) {
        let r = (t * Math.PI) / 2;
        (n.position.set(e.x, e.y + 1.7, e.z),
          a.set(e.x + Math.sin(r) * 10, e.y + 1.2, e.z - Math.cos(r) * 10),
          n.lookAt(a),
          n.updateMatrixWorld());
        let i = performance.now();
        (this.forceShadowUpdate(),
          this.render(0),
          s.push(Math.round(performance.now() - i)));
      }
      if (t) {
        let e = performance.now();
        try {
          this.warmRepresentatives();
        } catch (e) {
          console.warn(`[renderer] representative warm frame failed`, e);
        }
        s.push(Math.round(performance.now() - e));
      }
      ((this.warmLog = `warm frames ${Math.round(performance.now() - o)}ms [${s.join(`, `)}]`),
        n.position.copy(r),
        n.quaternion.copy(i),
        n.updateMatrixWorld(),
        this.forceShadowUpdate());
    }
    forceShadowUpdate() {
      let e = this.gl.shadowMap;
      e.enabled &&
        ((e.needsUpdate = !0),
        this.scene.traverse((e) => {
          let t = e.shadow;
          e.isLight && e.castShadow && t && (t.needsUpdate = !0);
        }));
    }
    shadowProxy = null;
    async warmShadowCasters(e, t) {
      let n = this.gl;
      if (this.contextLost || !n.shadowMap.enabled || !e.length) return 0;
      let r = new Map();
      for (let t of e)
        t.traverse((e) => {
          let t = Fa(e);
          if (t === null || this.depthWarm.has(t)) return;
          let n = e.geometry?.attributes?.position?.count ?? 0,
            i = r.get(t);
          (!i || n < i.n) && r.set(t, { o: e, n });
        });
      let i = 0;
      for (let [e, n] of r) {
        if ((await t(), this.contextLost)) break;
        this.depthWarm.has(e) ||
          (this.renderShadowOnly(n.o) && (this.depthWarm.add(e), i++));
      }
      return (i && this.forceShadowUpdate(), i);
    }
    warmCastersNow(e) {
      if (this.contextLost || !this.gl.shadowMap.enabled || !e.length) return 0;
      let t = new Map();
      for (let n of e)
        n.traverse((e) => {
          let n = Fa(e);
          n !== null && !this.depthWarm.has(n) && !t.has(n) && t.set(n, e);
        });
      let n = 0;
      for (let [e, r] of t)
        this.renderShadowOnly(r) && (this.depthWarm.add(e), n++);
      return (n && this.forceShadowUpdate(), n);
    }
    flippers = null;
    flipperFor(e) {
      let t = (this.flippers ??= (() => {
        let e = new ce();
        (e.setAttribute(
          `position`,
          new T([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0], 3),
        ),
          e.setAttribute(`normal`, new T([0, 0, 1, 0, 0, 1, 0, 0, 1], 3)));
        let t = new w(e, new c({ name: `core-shadow-flipper` })),
          n = new be(e, new c({ name: `core-shadow-flipper-i` }), 1);
        for (let e of [t, n])
          ((e.name = `core-shadow-flipper`),
            (e.castShadow = !0),
            (e.matrixAutoUpdate = !1),
            e.updateMatrixWorld(!0),
            (e.frustumCulled = !0),
            (e.intersectsFrustum = () => this.inShadowPass));
        return { plain: t, inst: n };
      })());
      return e.isInstancedMesh || e.isSkinnedMesh || e.isBatchedMesh
        ? t.plain
        : t.inst;
    }
    renderShadowOnly(e) {
      let t = this.gl,
        n = [],
        r = 0;
      if (
        (this.scene.traverseVisible((e) => {
          e.isLight && (n.push(e), e.castShadow && e.shadow && r++);
        }),
        !r)
      )
        return !1;
      let i = (this.shadowProxy ??= new s());
      ((i.matrixWorldAutoUpdate = !1),
        (i.fog = this.scene.fog),
        (i.environment = this.scene.environment),
        n.push(this.flipperFor(e), e),
        (i.children = n));
      let a = e,
        o = Object.prototype.hasOwnProperty.call(a, `intersectsFrustum`)
          ? a.intersectsFrustum
          : void 0,
        c = { v: e.visible, fc: e.frustumCulled, cs: e.castShadow },
        l = e,
        u =
          l.isInstancedMesh && l.count === 0 && l.instanceMatrix.count > 0
            ? 0
            : -1,
        d = (this.uploadRT ??= new pe(1, 1, { depthBuffer: !1 })),
        f = t.getRenderTarget();
      ((e.visible = !0),
        (e.frustumCulled = !0),
        (e.castShadow = !0),
        (a.intersectsFrustum = () => this.inShadowPass),
        u === 0 && (l.count = 1),
        this.forceShadowUpdate(),
        (this.warmingShadow = !0));
      try {
        return (t.setRenderTarget(d), t.render(i, this.camera), !0);
      } catch (e) {
        return (console.warn(`[renderer] shadow-depth warm failed`, e), !1);
      } finally {
        ((this.warmingShadow = !1),
          t.setRenderTarget(f),
          (i.children = []),
          (e.visible = c.v),
          (e.frustumCulled = c.fc),
          (e.castShadow = c.cs),
          o ? (a.intersectsFrustum = o) : delete a.intersectsFrustum,
          u === 0 && (l.count = 0));
      }
    }
    warmRepresentatives() {
      let e = this.scene,
        t = [],
        n = new Set(),
        r = 0;
      e.traverseVisible((e) => {
        e.isLight && (n.add(e), e.castShadow && e.shadow && r++);
      });
      let i = this.gl.shadowMap.enabled && r > 0;
      if (!i && this.quality.mobile) return;
      let a = [],
        o = new Map(),
        s = [],
        c = this.prewarmRoot;
      e.traverse((n) => {
        if (n === e) return;
        if (n.isLight) {
          a.push(n);
          return;
        }
        let r = { o: n, v: n.visible, fc: n.frustumCulled };
        t.push(r);
        let l = n;
        if (
          !(l.isMesh || n.isPoints || n.isLine || n.isSprite) ||
          !l.material ||
          n.userData?.noWarm
        )
          return;
        let u = i ? Fa(n) : null;
        if ((c && Ra(n, c) && s.push(r), u === null)) return;
        let d = l.geometry?.attributes?.position?.count ?? 0,
          f = o.get(u);
        (!f || d < f.n) && o.set(u, { s: r, n: d });
      });
      let l = [...s];
      for (let e of o.values()) l.includes(e.s) || l.push(e.s);
      if (!l.length) return;
      this.forceShadowUpdate();
      for (let e of t) e.o.visible = !1;
      for (let t of l) {
        let n = t.o;
        n.frustumCulled = !1;
        let r = n;
        r.isInstancedMesh &&
          r.count === 0 &&
          r.instanceMatrix.count > 0 &&
          ((t.count = 0), (r.count = 1));
        for (let t = n; t && t !== e; t = t.parent) t.visible = !0;
      }
      for (let t of n)
        for (let n = t.parent; n && n !== e; n = n.parent) n.visible = !0;
      let u = a.map((e) => e.visible);
      for (let e of a) n.has(e) || (e.visible = !1);
      try {
        this.render(0);
      } finally {
        for (let e of t)
          ((e.o.visible = e.v),
            (e.o.frustumCulled = e.fc),
            e.count !== void 0 && (e.o.count = e.count));
        a.forEach((e, t) => (e.visible = u[t]));
      }
      if (i) {
        for (let [e, t] of o)
          this.renderShadowOnly(t.s.o) && this.depthWarm.add(e);
        this.forceShadowUpdate();
      }
    }
    capture(e = `image/png`, t = 0.92) {
      return new Promise((n) => {
        try {
          this.render(0);
          let r = this.gl.getContext(),
            i = r.drawingBufferWidth,
            a = r.drawingBufferHeight,
            o = new Uint8Array(i * a * 4);
          (r.bindFramebuffer(r.FRAMEBUFFER, null),
            r.readPixels(0, 0, i, a, r.RGBA, r.UNSIGNED_BYTE, o));
          let s = document.createElement(`canvas`);
          ((s.width = i), (s.height = a));
          let c = s.getContext(`2d`);
          if (!c) return n(null);
          let l = c.createImageData(i, a),
            u = i * 4;
          for (let e = 0; e < a; e++)
            l.data.set(o.subarray((a - 1 - e) * u, (a - e) * u), e * u);
          for (let e = 3; e < l.data.length; e += 4) l.data[e] = 255;
          (c.putImageData(l, 0, 0), s.toBlob((e) => n(e), e, t));
        } catch (e) {
          (console.warn(`[renderer] capture failed`, e), n(null));
        }
      });
    }
    render(e) {
      if (this.contextLost) return;
      this.resizePending && this.resize();
      for (let e = 0; e < this.preRender.length; e++) this.preRender[e]();
      (this.frameNo++,
        this.gl.info.reset(),
        this.hideEmpty(e),
        this.beginTimer());
      let t = this.scene.fog;
      ((W.depth = t && t.isFog && this.dissolveCull ? t.far * Da : 1 / 0),
        (W.on = W.depth < 1 / 0),
        (W.culled = 0));
      try {
        this.post
          ? this.post.render(e)
          : this.gl.render(this.scene, this.camera);
      } finally {
        W.on = !1;
      }
      ((this.dissolveCulled = W.culled), this.endTimer(), this.restoreEmpty());
    }
    hideEmpty(e) {
      if (((this.cullScanT -= e), this.cullScanT <= 0)) {
        ((this.cullScanT = 1), (this.cullList.length = 0));
        let e = this.scene.children;
        for (let t = 0; t < e.length; t++)
          ((this.scanStatic = !!this.isStaticRoot?.(e[t])),
            e[t].traverse(this.collectCandidate));
      }
      let t = this.hidden;
      for (let e of this.held) e.visible && e.traverse(this.hideDrawable);
      let n = this.cullList,
        r = 0;
      for (let e = 0; e < n.length; e++) {
        let i = n[e];
        i.visible && Va(i) && ((i.visible = !1), t.push(i), r++);
      }
      this.skippedEmpty = r;
    }
    hideDrawable = (e) => {
      e.visible &&
        (e.isMesh || e.isPoints || e.isLine || e.isSprite) &&
        ((e.visible = !1), this.hidden.push(e));
    };
    collectCandidate = (e) => {
      let t = e;
      t.geometry &&
        (t.isMesh || e.isPoints || e.isLine) &&
        (this.scanStatic && t.isMesh && this.installTight(t),
        !e.children.length && za(t) && this.cullList.push(e));
    };
    installTight(e) {
      if (e.__tight !== void 0) return;
      if (
        e.isInstancedMesh ||
        e.isSkinnedMesh ||
        e.isBatchedMesh ||
        e.morphTargetInfluences ||
        e.userData?.noTightCull ||
        e.intersectsFrustum !== w.prototype.intersectsFrustum
      ) {
        e.__tight = 0;
        return;
      }
      if (!e.frustumCulled) return;
      let t = e.geometry;
      if (!t.boundingBox || !t.boundingSphere) {
        let e = t.attributes.position;
        if (!e || !e.array || !e.array.length || !e.count) return;
        (t.boundingBox || t.computeBoundingBox(),
          t.boundingSphere || t.computeBoundingSphere());
      }
      let n = t.boundingBox,
        r = t.boundingSphere;
      if (n.isEmpty()) return;
      let i = r.radius >= Ea;
      ((e.__tight = +!!i),
        i && ((e.intersectsFrustum = Aa), this.tightCount++));
    }
    restoreEmpty() {
      let e = this.hidden;
      for (let t = 0; t < e.length; t++) e[t].visible = !0;
      e.length = 0;
    }
  };
function Aa(e) {
  let t = this.geometry,
    n = t.boundingBox,
    r = t.boundingSphere;
  if (!n || !r) return e.intersectsObject(this);
  let i = this.matrixWorld.elements,
    a = this.__wk,
    o = this.__wb;
  return a &&
    o &&
    this.__wbSrc === n &&
    a[12] === i[12] &&
    a[13] === i[13] &&
    a[14] === i[14] &&
    a[0] === i[0] &&
    a[5] === i[5] &&
    a[10] === i[10] &&
    a[1] === i[1] &&
    a[2] === i[2] &&
    a[4] === i[4] &&
    a[6] === i[6] &&
    a[8] === i[8] &&
    a[9] === i[9] &&
    a[16] === r.center.x &&
    a[17] === r.center.y &&
    a[18] === r.center.z &&
    a[19] === r.radius
    ? e.intersectsBox(o) && !ja(this, e, o)
    : Na(this, n, r)
      ? e.intersectsBox(this.__wb) && !ja(this, e, this.__wb)
      : ((this.__tight = 0),
        delete this.intersectsFrustum,
        e.intersectsObject(this));
}
function ja(e, t, n) {
  if (!W.on) return !1;
  let r = t.planes[5],
    i = r.normal;
  return (i.x > 0 ? n.min.x : n.max.x) * i.x +
    (i.y > 0 ? n.min.y : n.max.y) * i.y +
    (i.z > 0 ? n.min.z : n.max.z) * i.z +
    r.constant <=
    W.depth ||
    (e.__fcMat !== e.material &&
      ((e.__fcMat = e.material), (e.__fc = Ma(e.material))),
    !e.__fc)
    ? !1
    : (W.culled++, !0);
}
function Ma(e) {
  let t = Array.isArray(e) ? e : [e];
  if (!t.length) return !1;
  for (let e of t) {
    let t = e;
    if (!e || !e.fog || t.isShaderMaterial || t.defines?.FOG_NO_CLIP !== void 0)
      return !1;
  }
  return !0;
}
function Na(e, t, n) {
  let r = e.geometry,
    i = e.matrixWorld.elements,
    a = (e.__wk ??= new Float64Array(20)),
    o = (e.__wb ??= new Se());
  for (let e = 0; e < 16; e++) a[e] = i[e];
  if (
    ((a[16] = n.center.x),
    (a[17] = n.center.y),
    (a[18] = n.center.z),
    (a[19] = n.radius),
    (e.__wbSrc = t),
    t.isEmpty() || !Pa(t, n))
  ) {
    let e = r.attributes.position;
    if (!e || !e.array || !e.array.length) return !1;
    r.computeBoundingBox();
  }
  return (
    o.copy(r.boundingBox).applyMatrix4(e.matrixWorld).expandByScalar(1),
    !0
  );
}
function Pa(e, t) {
  let n = t.radius * 1.001 + 0.01,
    r = t.center,
    i = Math.max(r.x - e.min.x, e.max.x - r.x),
    a = Math.max(r.y - e.min.y, e.max.y - r.y),
    o = Math.max(r.z - e.min.z, e.max.z - r.z);
  return i <= n && a <= n && o <= n;
}
function Fa(e) {
  let t = e;
  if (!t.isMesh || !t.material || e.userData?.noWarm) return null;
  let n = Array.isArray(t.material) ? t.material : [t.material];
  if (
    !e.castShadow &&
    (t.customDepthMaterial ||
      n.some((e) => !e || e.transparent || !e.depthWrite || !e.visible))
  )
    return null;
  let r = t.customDepthMaterial ? t.customDepthMaterial.uuid + `:` : ``;
  if (!r)
    for (let e of n) {
      let t = e;
      if (!t) continue;
      let n =
        (t.alphaTest > 0 && (t.map || t.alphaMap)) ||
        (t.displacementMap && t.displacementScale !== 0) ||
        t.alphaToCoverage;
      r +=
        (n
          ? `clone` +
            (t.displacementMap && t.displacementScale !== 0 ? `d` : ``) +
            (t.alphaToCoverage ? `c` : ``)
          : `shared`) +
        `:` +
        (e.shadowSide ?? e.side) +
        (t.map ? `m` : ``) +
        (t.alphaMap ? `a` : ``) +
        (t.alphaTest > 0 ? `t` : ``) +
        `,`;
    }
  let i = e,
    a = e;
  return (
    (r +=
      (i.isInstancedMesh ? `i` + (i.instanceColor ? `c` : ``) : ``) +
      (e.isSkinnedMesh ? `s` : ``) +
      (a.isBatchedMesh ? `b` + (a._colorsTexture ? `c` : ``) : ``) +
      (t.morphTargetInfluences ? `m` : ``)),
    r
  );
}
function Ia(e) {
  try {
    if (
      e.getExtension(`EXT_color_buffer_float`) ||
      e.getExtension(`EXT_color_buffer_half_float`)
    )
      return E;
  } catch {}
  return p;
}
function La(e) {
  let t = e.geometry?.attributes;
  if (!t) return ``;
  let n = e;
  return (
    (t.normal ? `n` : ``) +
    (t.color && t.color.itemSize === 4 ? `a` : ``) +
    (t.tangent ? `t` : ``) +
    (n.isInstancedMesh && n.instanceColor ? `c` : ``) +
    (n.isInstancedMesh && n.morphTexture ? `M` : ``)
  );
}
function Ra(e, t) {
  for (let n = e; n; n = n.parent) if (n === t) return !0;
  return !1;
}
function za(e) {
  if (e.isInstancedMesh) return !0;
  let t = e.geometry;
  if (t.isInstancedBufferGeometry || t.drawRange.count !== 1 / 0) return !0;
  let n = t.index;
  if (n) return n.count === 0;
  let r = t.attributes.position;
  return !r || r.count === 0;
}
function Ba(e) {
  return Math.round(e / Ta) * Ta;
}
function Va(e) {
  if (e.isInstancedMesh && e.count === 0) return !0;
  let t = e.geometry;
  if (!t) return !1;
  if (
    t.drawRange.count === 0 ||
    (t.isInstancedBufferGeometry && t.instanceCount === 0)
  )
    return !0;
  let n = t.index;
  if (n) return n.count === 0;
  let r = t.attributes.position;
  return !!r && r.count === 0;
}
var Ha = class {
  ctx;
  visible;
  timings;
  el;
  acc = 0;
  top = [];
  constructor(e, t, n = []) {
    ((this.ctx = e),
      (this.visible = t),
      (this.timings = n),
      (this.el = document.createElement(`div`)),
      (this.el.id = `perf-overlay`),
      Object.assign(this.el.style, {
        position: `fixed`,
        left: `8px`,
        top: `8px`,
        zIndex: `9999`,
        font: `11px/1.35 ui-monospace,Menlo,monospace`,
        color: `#9f9`,
        background: `rgba(0,0,0,.55)`,
        padding: `6px 8px`,
        borderRadius: `6px`,
        pointerEvents: `none`,
        whiteSpace: `pre`,
        display: t ? `block` : `none`,
      }),
      document.body.appendChild(this.el),
      (window.__memCensus = () => Ga(e)));
  }
  setVisible(e) {
    ((this.visible = e), (this.el.style.display = e ? `block` : `none`));
  }
  update(e, t) {
    if (((this.acc += e), this.acc < 0.5)) return;
    this.acc = 0;
    let n = 0,
      r = 0,
      i = 0;
    for (let e = 0; e < t.length; e++) {
      let a = t[e];
      a > 0 && ((n += a), r++, (i = Math.max(i, a)));
    }
    let a = r ? n / r : 16.7,
      o = this.ctx.renderer,
      s = o.gl.info,
      c = this.ctx.player?.position,
      l = this.top;
    l.length = 0;
    for (let e of this.timings) l.push(e);
    (l.sort((e, t) => t.avg - e.avg), (l.length = Math.min(5, l.length)));
    let u = 0;
    for (let e of this.timings) u += e.avg;
    let d = {
      fps: Math.round(1e3 / a),
      frameMs: +a.toFixed(2),
      worstMs: +i.toFixed(1),
      calls: s.render.calls,
      tris: s.render.triangles,
      geometries: s.memory.geometries,
      textures: s.memory.textures,
      programs: s.programs?.length ?? 0,
      progAfterReady: Math.max(
        0,
        (s.programs?.length ?? 0) -
          (o.programsAtReady || (s.programs?.length ?? 0)),
      ),
      releasedMB: Math.round(L.geoMB + L.texMB),
      dpr: +o.pixelRatio.toFixed(2),
      cpuMs: +o.cpuMs.toFixed(2),
      gpuMs: o.gpuMs >= 0 ? +o.gpuMs.toFixed(2) : void 0,
      sysMs: +u.toFixed(2),
      emptySkipped: o.skippedEmpty,
      dissolveCulled: o.dissolveCulled,
      shed: +o.shed.toFixed(2),
      cpuBound: o.cpuBound,
      workMs: +(this.ctx.work?.lastUsedMs ?? 0).toFixed(2),
      workWaiting: this.ctx.work?.waiting ?? 0,
      quality:
        this.ctx.quality.level + (this.ctx.quality.mobile ? `-mobile` : ``),
      traffic: this.ctx.traffic?.count ?? 0,
      peds: this.ctx.peds?.count ?? 0,
      bodies: this.ctx.dynamics.bodies.size,
      colliders: this.ctx.statics.count,
      heapMB: performance.memory
        ? Math.round(performance.memory.usedJSHeapSize / 1048576)
        : void 0,
      gpuMB: o.gpuAccount ? Math.round(o.gpuAccount.totalMB()) : void 0,
      gpuPeakMB: o.gpuAccount ? o.gpuAccount.report().peakMB : void 0,
      fpsCap: o.frameCapMs > 0 ? Math.round(1e3 / o.frameCapMs) : 0,
      pos: c ? `${c.x.toFixed(0)},${c.z.toFixed(0)}` : ``,
      packs: Ua(this.ctx),
      topSystems: l.map((e) => `${e.name} ${e.avg.toFixed(2)}`),
    };
    ((window.__perf = d),
      this.visible &&
        (this.el.textContent =
          `${d.fps} fps  ${d.frameMs}ms (worst ${d.worstMs})\ncalls ${d.calls}  tris ${(d.tris / 1e3).toFixed(0)}k  dpr ${d.dpr} [${d.quality}]\ncpu ${d.cpuMs}ms  gpu ${d.gpuMs ?? `–`}ms  js ${d.sysMs}ms\ngeo ${d.geometries} tex ${d.textures} prog ${d.programs} (+${d.progAfterReady}) skip ${d.emptySkipped}/${d.dissolveCulled}\n` +
          (d.shed || d.workWaiting
            ? `shed ${d.shed}${d.cpuBound ? ` CPU-BOUND` : ``}  work ${d.workMs}ms ×${d.workWaiting}\n`
            : ``) +
          `traffic ${d.traffic} peds ${d.peds} bodies ${d.bodies} static ${d.colliders}\n` +
          (d.packs ? `packs ${d.packs}\n` : ``) +
          (d.gpuMB === void 0
            ? ``
            : `gpu mem ${d.gpuMB}MB (peak ${Math.round(d.gpuPeakMB ?? 0)})  cap ${d.fpsCap || `∞`} fps\n`) +
          `pos ${d.pos}` +
          (d.heapMB ? `  heap ${d.heapMB}MB (freed ${d.releasedMB})` : ``) +
          (l.length
            ? `
— slowest (ms) —
` +
              d.topSystems.join(`
`)
            : ``)));
  }
};
function Ua(e) {
  let t = e.districts?.residency?.();
  if (!t) return ``;
  let n = 0,
    r = 0,
    i = 0;
  for (let e in t) {
    if (e.startsWith(`_`)) continue;
    let a = t[e];
    a === `built`
      ? n++
      : a === `building` || a === `dropping`
        ? r++
        : a === `dormant` && i++;
  }
  return `${n} built${r ? ` · ${r} building` : ``}${i ? ` · ${i} dormant` : ``}`;
}
function Wa(e, t) {
  let n = e.scene,
    r = e.renderer.gl,
    i = (e) => {
      let r = e;
      for (; r.parent && r.parent !== n;) r = r.parent;
      if (r.parent === n) return t(r) ?? `unowned`;
      let i = r;
      return i === n ? `scene` : i.isScene && i.fog ? `far` : `post`;
    },
    a = null,
    o = 0,
    s = r,
    c = s.renderBufferDirect,
    l = e.renderer.frameNo,
    u = function (t, n, s, u, d, f) {
      if (a) {
        let t = e.renderer.frameNo;
        t !== l && ((l = t), o++);
        let n = i(d),
          r = a.get(n);
        r || a.set(n, (r = { calls: 0, tris: 0 }));
        let c = d,
          u = Math.min(
            f
              ? f.count
              : s.index
                ? s.index.count
                : (s.attributes.position?.count ?? 0),
            s.drawRange.count,
          );
        if (c.isBatchedMesh)
          for (let e = (u = 0); e < c._multiDrawCount; e++)
            u += c._multiDrawCounts[e];
        ((!c.isBatchedMesh || c._multiDrawCount > 0) && r.calls++,
          (r.tris += (u / 3) * (d.isInstancedMesh ? d.count : 1)));
      }
      return c.call(r, t, n, s, u, d, f);
    },
    d = {
      start() {
        ((a = new Map()),
          (o = 0),
          (l = e.renderer.frameNo),
          (s.renderBufferDirect = u));
      },
      stop() {
        s.renderBufferDirect = c;
        let e = {},
          t = Math.max(1, o);
        for (let [n, r] of [...(a ?? new Map()).entries()].sort(
          (e, t) => t[1].calls - e[1].calls,
        ))
          e[n] = {
            calls: +(r.calls / t).toFixed(1),
            trisK: Math.round(r.tris / t / 1e3),
          };
        return ((a = null), e);
      },
      census() {
        let e = r.properties,
          i = new Map(),
          a = new Set(),
          o = new Set(),
          s = new Set(),
          c = (t) => (e.get(t).__version === void 0 ? 0 : lr(t) / 1048576),
          l = (e, t) => {
            if (a.has(e)) return;
            a.add(e);
            let n = e.userData?.owner;
            (typeof n == `string` ? u(n) : t).texMB += c(e);
          },
          u = (e) => {
            let t = i.get(e);
            return (
              t ||
                i.set(
                  e,
                  (t = {
                    progs: new Set(),
                    mats: new Set(),
                    unnamed: 0,
                    texMB: 0,
                    geoMB: 0,
                    gpuGeoMB: 0,
                  }),
                ),
              t
            );
          },
          d = (e, t) => {
            let n = (e, t) => {
              (e.userData?.owner && (t = String(e.userData.owner)), f(e, u(t)));
              let r = e.children;
              for (let e = 0; e < r.length; e++) n(r[e], t);
            };
            n(e, t);
          },
          f = (t, n) => {
            {
              let r = t;
              if (!r.material) return;
              let i = r.geometry;
              if (i && !o.has(i)) {
                o.add(i);
                let e = new Set(),
                  t = (t) => {
                    let r = t.isInterleavedBufferAttribute ? t.data : null,
                      i = r ?? t;
                    if (e.has(i)) return;
                    e.add(i);
                    let a = i.array?.BYTES_PER_ELEMENT ?? 4,
                      o =
                        ((r
                          ? r.count * r.stride
                          : (t.count || 0) * (t.itemSize || 0)) *
                          a) /
                        1048576;
                    ((n.geoMB += o), i.__gpu && (n.gpuGeoMB += o));
                  };
                for (let e in i.attributes) t(i.attributes[e]);
                i.index && t(i.index);
              }
              for (let t of Array.isArray(r.material)
                ? r.material
                : [r.material]) {
                if (n.mats.has(t)) continue;
                (n.mats.add(t), t.name || n.unnamed++);
                let r = e.get(t);
                if (r.programs)
                  for (let e of r.programs.values())
                    (n.progs.add(e.id), s.add(e.id));
                else
                  r.currentProgram &&
                    (n.progs.add(r.currentProgram.id),
                    s.add(r.currentProgram.id));
                for (let e in t) {
                  let r = t[e];
                  r && r.isTexture && l(r, n);
                }
                let i = e.get(t).uniforms;
                if (i)
                  for (let e in i) {
                    let t = i[e]?.value;
                    t && t.isTexture && l(t, n);
                  }
              }
            }
          };
        for (let e of n.children) d(e, t(e) ?? `unowned`);
        let p = {};
        for (let [e, t] of [...i.entries()].sort(
          (e, t) => t[1].progs.size - e[1].progs.size,
        ))
          p[e] = {
            programs: t.progs.size,
            materials: t.mats.size,
            unnamed: t.unnamed,
            texMB: Math.round(t.texMB * 10) / 10,
            geoMB: Math.round(t.geoMB * 10) / 10,
            gpuGeoMB: Math.round(t.gpuGeoMB * 10) / 10,
          };
        let m = r.info.programs?.length ?? 0;
        return {
          owners: p,
          programsTotal: m,
          programsInScene: s.size,
          programsElsewhere: Math.max(0, m - s.size),
        };
      },
    };
  return ((window.__owners = d), d);
}
function Ga(e) {
  let t = new Set(),
    n = new Set(),
    r = 0,
    i = 0,
    a = 0;
  e.scene.traverse((e) => {
    let o = e,
      s = o.geometry;
    if (s) {
      let e = Object.values(s.attributes);
      s.index && e.push(s.index);
      for (let n of e) {
        let e = n.array ?? n.data?.array,
          i = e?.buffer;
        e && i && !t.has(i) && (t.add(i), (r += e.byteLength));
      }
    }
    let c = e;
    if (c.isInstancedMesh) {
      let e = c.instanceMatrix.array;
      t.has(e.buffer) || (t.add(e.buffer), (r += e.byteLength));
    }
    let l = Array.isArray(o.material)
      ? o.material
      : o.material
        ? [o.material]
        : [];
    for (let e of l)
      for (let t in e) {
        let r = e[t];
        if (!r || !r.isTexture || n.has(r.image)) continue;
        n.add(r.image);
        let o = r.image;
        o &&
          (o.getContext
            ? ((i += (o.width || 0) * (o.height || 0) * 4), a++)
            : o.data?.byteLength && (i += o.data.byteLength));
      }
  });
  let o = (e) => Math.round(e / 104857.6) / 10,
    s = performance.memory;
  return {
    geoKeptMB: o(r),
    texSourcesMB: o(i),
    canvases: a,
    releasedGeoMB: Math.round(L.geoMB * 10) / 10,
    releasedTexMB: Math.round(L.texMB * 10) / 10,
    clampedMB: Math.round(L.clampedMB * 10) / 10,
    pending: L.pendingGeo + L.pendingTex,
    blockedUpdates: L.blocked,
    heapMB: s ? Math.round(s.usedJSHeapSize / 1048576) : void 0,
  };
}
var Ka = { TWD: !0, JPY: !1 },
  qa = { style: `tight` },
  Ja = { style: `tight`, group: `none` },
  Ya = `TWD`;
function Xa(e) {
  An[e] && (Ya = e);
}
function Za(e = Ya) {
  return An[e].symbol;
}
function Qa(e = `spaced`, t = Ya) {
  return An[t].symbol + (e === `spaced` && Ka[t] ? ` ` : ``);
}
function $a(e, t = `en`) {
  if (t === `none`) return `${e}`;
  let n = Math.round(e);
  return t === `host` ? n.toLocaleString() : n.toLocaleString(`en-US`);
}
function eo(e, t = {}) {
  let n = $a(e, t.group),
    r = t.style ?? `spaced`;
  return r === `bare` ? n : Qa(r, t.currency ?? Ya) + n;
}
function to(e, t = {}) {
  return eo(Mn(e, t.currency ?? Ya), t);
}
function no(e, t) {
  return (
    Xa(t),
    {
      currency: t,
      symbol: Za(t),
      balance: (n = t) => Mn(e.wallet, n),
      add: (n, r = t, i) => e.addMoney(n, i, r),
      canAfford: (n, r = t) => Number.isFinite(n) && e.wallet >= jn(n, r),
      spend(n, r = t, i) {
        return !(Number.isFinite(n) && n >= 0) || e.wallet < jn(n, r)
          ? !1
          : (e.addMoney(-n, i, r), !0);
      },
      format: (e, n) => eo(e, { currency: t, ...n }),
      formatUnits: (e, n) => to(e, { currency: t, ...n }),
    }
  );
}
var ro = `tgta-chunk-reload`,
  io = 6e5,
  ao = 6e4,
  oo = `loading`,
  so = null,
  co = !1,
  lo = !1,
  uo = `none`;
function fo(e, t) {
  ((oo = e),
    t && (so = t),
    co && oo !== `playing` && mo(),
    oo === `playing` && ho());
}
function po(e) {
  if (co || lo) return;
  let t = Number(B(ro)) || 0;
  if (t > 0 && Date.now() - t < io) {
    (console.warn(
      `[update] ${e}: code chunk unavailable again — not reloading (once per 10 min)`,
    ),
      uo === `none` && (uo = `due`),
      ho());
    return;
  }
  if (
    ((co = !0),
    V(ro, String(Date.now())),
    console.warn(
      `[update] ${e}: code chunk unavailable (new deploy or network error) — reloading ${oo === `playing` ? `at the next safe moment` : `now`}`,
    ),
    oo !== `playing` || !so)
  )
    return mo();
  let n = so;
  go(
    n,
    {
      zh: `遊戲已更新，稍後將自動重新載入（進度會保存）`,
      en: `The game was updated — it will reload shortly (progress is saved)`,
    },
    6,
  );
  let r = () => mo();
  (n.events.on(`game:pause`, ({ paused: e }) => e && r()),
    n.events.on(`player:respawned`, r),
    n.events.on(`mission:completed`, r),
    n.events.on(`mission:failed`, r),
    n.events.on(`mrt:travel`, r));
  let i = Date.now(),
    a = () => {
      if (lo) return;
      let e = !1;
      try {
        e = !!n.missions?.active;
      } catch {
        e = !1;
      }
      if (e || Date.now() - i < ao) return void setTimeout(a, 5e3);
      (go(
        n,
        {
          zh: `遊戲已更新，重新載入中…`,
          en: `The game was updated — reloading…`,
        },
        3,
      ),
        setTimeout(r, 2500));
    };
  setTimeout(a, 5e3);
}
function mo() {
  if (!lo) {
    lo = !0;
    try {
      location.reload();
    } catch {}
  }
}
function ho() {
  uo === `due` &&
    oo === `playing` &&
    so &&
    ((uo = `shown`),
    go(
      so,
      {
        zh: `網路不穩，部分街區未載入 — 重新整理可修復`,
        en: `Unstable network: some districts did not load — refreshing the page can fix it`,
      },
      8,
    ));
}
function go(e, t, n) {
  try {
    e.events.emit(`notify`, { text: t, duration: n, kind: `info` });
  } catch {}
}
async function _o() {
  {
    let e = t(
      () => import(`./boot-C6yF8B4X.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    );
    (e.catch(() => {}),
      await t(
        () => import(`./landing-DfZEUEhC.js`).then((e) => e.runLanding()),
        __vite__mapDeps([10, 4, 2, 5, 6, 1, 3, 7, 8, 11, 12, 13, 14]),
      ).catch(() => {}));
    let n = !1,
      r,
      i = e.then((e) => (n ? void 0 : e.hydrateBeforeTravel())).catch(() => {});
    (await Promise.race([
      i,
      new Promise((e) => {
        r = setTimeout(() => {
          ((n = !0), e());
        }, 3e3);
      }),
    ]),
      clearTimeout(r));
  }
}
function vo(e) {
  t(
    () => import(`./coordinator-R8919moQ.js`).then((t) => t.installCloud(e)),
    __vite__mapDeps([15, 2, 3, 7, 8, 9, 1, 4, 5, 6, 11, 12]),
  ).catch(() => {});
}
async function yo() {
  await t(
    () => import(`./coordinator-R8919moQ.js`).then((e) => e.flushDeparture()),
    __vite__mapDeps([15, 2, 3, 7, 8, 9, 1, 4, 5, 6, 11, 12]),
  ).catch(() => {});
}
function bo(e, n) {
  t(
    () =>
      import(`./ui-Bz5oqxsZ.js`).then((t) => {
        (n?.focus(), t.showCloudPanel(e));
      }),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
function xo(e, n) {
  t(
    () => import(`./ui-Bz5oqxsZ.js`).then((t) => t.mountCloudSettings(e, n)),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
function So(e, n) {
  t(
    () => import(`./ui-Bz5oqxsZ.js`).then((t) => t.mountCloudTitle(e, n)),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
function Co(e, n) {
  t(
    () => import(`./ui-Bz5oqxsZ.js`).then((t) => t.mountCloudPhoneStatus(e, n)),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
var wo = class extends Error {
    label;
    ms;
    name = `DeadlineError`;
    constructor(e, t) {
      (super(`${e}: no answer after ${t} ms`), (this.label = e), (this.ms = t));
    }
  },
  To = 15e3;
function Eo(e, t, n = `await`, r) {
  return new Promise((i, a) => {
    let o = !1,
      s = setTimeout(() => {
        if (!o) {
          if (((o = !0), !r)) return a(new wo(n, t));
          try {
            i(r());
          } catch (e) {
            a(e);
          }
        }
      }, t);
    Promise.resolve(e).then(
      (e) => {
        o || ((o = !0), clearTimeout(s), i(e));
      },
      (e) => {
        o || ((o = !0), clearTimeout(s), a(e));
      },
    );
  });
}
var Do = (e, t, n) => (e < t ? t : e > n ? n : e),
  Oo = (e, t, n) => e + (t - e) * n,
  ko = (e, t, n) => Do((n - e) / (t - e), 0, 1),
  Ao = (e, t, n) => {
    let r = ko(e, t, n);
    return r * r * (3 - 2 * r);
  },
  jo = (e, t) => 1 - Math.exp(-e * t),
  Mo = (e, t, n, r) => Oo(e, t, jo(n, r));
function No(e) {
  return (
    (e = (e + Math.PI) % (Math.PI * 2)),
    e < 0 && (e += Math.PI * 2),
    e - Math.PI
  );
}
function Po(e, t, n, r) {
  return e + No(t - e) * jo(n, r);
}
(new Te(), new Te(), new Te(), new m(), new Oe(), new ke());
function Fo(
  e = typeof navigator > `u` ? `` : navigator.userAgent,
  t = typeof navigator > `u` ? 0 : (navigator.maxTouchPoints ?? 0),
) {
  return /iPad|Tablet|Android(?!.*Mobile)/i.test(e) ||
    (/Macintosh/i.test(e) && t > 1)
    ? `tablet`
    : /Mobi|iPhone|iPod/i.test(e)
      ? `mobile`
      : `desktop`;
}
function Io(e, n) {
  t(
    () =>
      import(`./profile-BmQKTAov.js`).then((t) => {
        e.isConnected && t.mountNameRow(e, n);
      }),
    __vite__mapDeps([18, 8, 13, 2, 11, 17, 19]),
  ).catch(() => {});
}
function Lo(e, n) {
  t(
    () =>
      import(`./profile-BmQKTAov.js`).then((t) => {
        e.isConnected && t.mountNameView(e, n);
      }),
    __vite__mapDeps([18, 8, 13, 2, 11, 17, 19]),
  ).catch(() => {});
}
function Ro(e, n, r) {
  let i = !0,
    a;
  return (
    t(
      () =>
        import(`./phone-BvNRaOR5.js`).then((t) => {
          i && n.isConnected && (a = t.mountSocialApp(e, n, r));
        }),
      __vite__mapDeps([20, 18, 8, 13, 2, 11, 17, 19]),
    ).catch(() => {}),
    () => {
      ((i = !1), a?.());
    }
  );
}
function zo(e, n) {
  let r = !0,
    i;
  return (
    t(
      () =>
        import(`./phone-BvNRaOR5.js`).then((t) => {
          r && (i = t.startSummaryPolling(e, n));
        }),
      __vite__mapDeps([20, 18, 8, 13, 2, 11, 17, 19]),
    ).catch(() => {}),
    () => {
      ((r = !1), i?.());
    }
  );
}
var Bo = e({ GpuAccount: () => Zo }),
  Vo = {
    33321: 1,
    33323: 2,
    32849: 4,
    32856: 4,
    35905: 4,
    35907: 4,
    36194: 2,
    32854: 2,
    32855: 2,
    32857: 4,
    33325: 2,
    33327: 4,
    34843: 8,
    34842: 8,
    33326: 4,
    33328: 8,
    34837: 16,
    34836: 16,
    35898: 4,
    35901: 4,
    33330: 1,
    33334: 4,
    36220: 4,
    33189: 2,
    33190: 4,
    36012: 4,
    35056: 4,
    36013: 8,
    36168: 1,
    6408: 4,
    6407: 4,
    6409: 1,
    6410: 2,
    6406: 1,
    6402: 4,
    34041: 4,
  };
function Ho(e) {
  return e === 36196 ||
    e === 37492 ||
    e === 37493 ||
    e === 37494 ||
    e === 37495 ||
    e === 33776 ||
    e === 33777 ||
    e === 35916 ||
    e === 35917 ||
    e === 36283 ||
    e === 36284 ||
    e === 35840 ||
    e === 35842
    ? 4
    : e === 35841 || e === 35843
      ? 2
      : e >= 37808 && e <= 37821
        ? Wo(e - 37808)
        : e >= 37840 && e <= 37853
          ? Wo(e - 37840)
          : 8;
}
var Uo = [16, 20, 25, 30, 36, 40, 48, 64, 50, 60, 80, 100, 120, 144],
  Wo = (e) => 128 / (Uo[e] ?? 16),
  Go = 3553,
  Ko = 34067,
  qo = 32879,
  Jo = 35866,
  Yo = 34962,
  Xo = 34963,
  Zo = class {
    gl;
    texBytes = 0;
    bufBytes = 0;
    rbBytes = 0;
    peak = 0;
    tex = new Map();
    buf = new Map();
    rb = new Map();
    canvasBpp;
    samples;
    constructor(e) {
      this.gl = e;
      let t = e.getContextAttributes();
      ((this.canvasBpp = 4 + (t?.depth === !1 ? 0 : 4)),
        (this.samples = t?.antialias ? 4 : 1),
        this.install());
    }
    report() {
      let e = (e) => Math.round(e / 104857.6) / 10,
        t =
          this.gl.drawingBufferWidth *
          this.gl.drawingBufferHeight *
          this.canvasBpp *
          this.samples,
        n = this.texBytes + this.bufBytes + this.rbBytes + t;
      return (
        n > this.peak && (this.peak = n),
        {
          totalMB: e(n),
          texMB: e(this.texBytes),
          bufMB: e(this.bufBytes),
          rbMB: e(this.rbBytes),
          canvasMB: e(t),
          textures: this.tex.size,
          buffers: this.buf.size,
          peakMB: e(this.peak),
        }
      );
    }
    totalMB() {
      let e =
          this.gl.drawingBufferWidth *
          this.gl.drawingBufferHeight *
          this.canvasBpp *
          this.samples,
        t = this.texBytes + this.bufBytes + this.rbBytes + e;
      return (t > this.peak && (this.peak = t), t / 1048576);
    }
    boundTexture(e) {
      let t = this.gl,
        n =
          e === Go || (e >= 34069 && e <= 34074)
            ? e === Go
              ? t.TEXTURE_BINDING_2D
              : t.TEXTURE_BINDING_CUBE_MAP
            : e === Ko
              ? t.TEXTURE_BINDING_CUBE_MAP
              : e === qo
                ? t.TEXTURE_BINDING_3D
                : e === Jo
                  ? t.TEXTURE_BINDING_2D_ARRAY
                  : 0;
      return n ? t.getParameter(n) : null;
    }
    setTex(e, t, n) {
      if (!e) return;
      let r = this.tex.get(e);
      (r || this.tex.set(e, (r = new Map())),
        (this.texBytes += n - (r.get(t) ?? 0)),
        r.set(t, n));
    }
    install() {
      let e = this.gl,
        t = this,
        n = (t, n) => {
          let r = e[t].bind(e);
          e[t] = function () {
            try {
              n(arguments);
            } catch {}
            return r(...arguments);
          };
        };
      (n(`bufferData`, (n) => {
        let r = n[0];
        if (r !== Yo && r !== Xo && r !== 35345) return;
        let i =
            r === Yo
              ? e.ARRAY_BUFFER_BINDING
              : r === Xo
                ? e.ELEMENT_ARRAY_BUFFER_BINDING
                : e.UNIFORM_BUFFER_BINDING,
          a = e.getParameter(i);
        if (!a) return;
        let o = n[1],
          s = typeof o == `number` ? o : o ? (o.byteLength ?? 0) : 0;
        (n.length >= 5 &&
          typeof n[4] == `number` &&
          n[4] > 0 &&
          o &&
          typeof o != `number` &&
          (s = n[4] * (o.BYTES_PER_ELEMENT ?? 1)),
          (t.bufBytes += s - (t.buf.get(a) ?? 0)),
          t.buf.set(a, s));
      }),
        n(`deleteBuffer`, (e) => {
          let n = e[0];
          n && ((t.bufBytes -= t.buf.get(n) ?? 0), t.buf.delete(n));
        }),
        n(`texStorage2D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            o = e[4],
            s = t.boundTexture(n),
            c = n === Ko ? 6 : 1,
            l = Vo[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * Ho(i)
                : a * o * l),
              (a = Math.max(1, a >> 1)),
              (o = Math.max(1, o >> 1)));
          t.setTex(s, -1, u * c);
        }),
        n(`texStorage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            o = e[4],
            s = e[5],
            c = t.boundTexture(n),
            l = Vo[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              (l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * Ho(i)
                : a * o * l) * s),
              (a = Math.max(1, a >> 1)),
              (o = Math.max(1, o >> 1)),
              n === qo && (s = Math.max(1, s >> 1)));
          t.setTex(c, -1, u);
        }),
        n(`texImage2D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = 0,
            o = 0;
          if (e.length >= 8) ((a = e[3]), (o = e[4]));
          else {
            let t = e[5];
            ((a = t?.videoWidth || t?.naturalWidth || t?.width || 0),
              (o = t?.videoHeight || t?.naturalHeight || t?.height || 0));
          }
          let s = n >= 34069 && n <= 34074 ? n - 34069 : 0;
          t.setTex(t.boundTexture(n), s * 64 + r, a * o * (Vo[i] ?? 4));
        }),
        n(`texImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(t.boundTexture(n), r, e[3] * e[4] * e[5] * (Vo[i] ?? 4));
        }),
        n(`compressedTexImage2D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            o = e[4],
            s = n >= 34069 && n <= 34074 ? n - 34069 : 0;
          t.setTex(
            t.boundTexture(n),
            s * 64 + r,
            Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * Ho(i),
          );
        }),
        n(`compressedTexImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(
            t.boundTexture(n),
            r,
            Math.ceil(e[3] / 4) * Math.ceil(e[4] / 4) * 2 * Ho(i) * e[5],
          );
        }),
        n(`deleteTexture`, (e) => {
          let n = e[0],
            r = n && t.tex.get(n);
          if (r) {
            for (let e of r.values()) t.texBytes -= e;
            t.tex.delete(n);
          }
        }));
      let r = (n, r, i, a) => {
        let o = e.getParameter(e.RENDERBUFFER_BINDING);
        if (!o) return;
        let s = i * a * (Vo[r] ?? 4) * Math.max(1, n);
        ((t.rbBytes += s - (t.rb.get(o) ?? 0)), t.rb.set(o, s));
      };
      (n(`renderbufferStorage`, (e) => r(1, e[1], e[2], e[3])),
        n(`renderbufferStorageMultisample`, (e) => r(e[1], e[2], e[3], e[4])),
        n(`deleteRenderbuffer`, (e) => {
          let n = e[0];
          n && ((t.rbBytes -= t.rb.get(n) ?? 0), t.rb.delete(n));
        }));
    }
  },
  Qo = class e {
    s;
    constructor(e) {
      this.s = e >>> 0 || 2654435769;
    }
    next() {
      let e = (this.s += 1831565813);
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    }
    range(e, t) {
      return e + (t - e) * this.next();
    }
    int(e, t) {
      return e + Math.floor(this.next() * (t - e + 1));
    }
    pick(e) {
      return e[Math.floor(this.next() * e.length)];
    }
    chance(e) {
      return this.next() < e;
    }
    weighted(e) {
      let t = 0,
        n = e.length;
      for (let r = 0; r < n; r++) t += e[r][1];
      let r = this.next() * t;
      for (let t = 0; t < n; t++) if (((r -= e[t][1]), r <= 0)) return e[t][0];
      return e[n - 1][0];
    }
    fork(t) {
      return new e((this.s ^ Math.imul(t + 1, 2246822507)) >>> 0);
    }
  };
function $o(...e) {
  let t = 2166136261;
  for (let n of e) {
    let e = String(n);
    for (let n = 0; n < e.length; n++)
      ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
    t ^= 47;
  }
  return t >>> 0;
}
function es(e, t, n) {
  return e + (t + 0.5) * n;
}
function ts(e, t, n, r) {
  return (e + (t + 0.5) * n) * r;
}
function ns(e, t) {
  return e * t;
}
function rs(e, t) {
  return e * t;
}
function is(e, t, n) {
  return e.rx * (t * n);
}
function as(e, t, n) {
  return e.rz * (t * n);
}
function os(e, t, n, r) {
  return (t * e.rx + n * e.rz) * r;
}
function ss(e) {
  return e;
}
function cs(e) {
  return -e;
}
function ls(e) {
  return e;
}
function us(e) {
  return e;
}
function ds(e, t) {
  return e * t;
}
function fs(e, t) {
  let n = e < 0 ? -e : e;
  return n < 0.35 ? 0 : n > 2.8 ? 3 : e * t > 0 ? 1 : 2;
}
function ps(e) {
  return e === 2;
}
function ms(e) {
  return e < 0;
}
function hs(e) {
  return e === 1;
}
function gs(e, t) {
  return e * t;
}
function _s(e, t) {
  return e === 1 ? t : e === 2 || e === 3 ? -t : 0;
}
function vs(e, t, n) {
  return (e === `x` ? t : -t) * n;
}
function ys(e, t, n) {
  let r = t * n;
  return e === `x` ? (r > 0 ? Math.PI / 2 : -Math.PI / 2) : r > 0 ? 0 : Math.PI;
}
function bs(e, t, n, r, i, a, o) {
  let s = Math.cos(n),
    c = Math.sin(n),
    l = Math.sin(n),
    u = -Math.cos(n);
  return ((o.x = e + s * r * i + l * a), (o.z = t + c * r * i + u * a), o);
}
var xs =
  typeof location > `u` ||
  new URLSearchParams(location.search).get(`gpupool`) !== `0`;
function Ss(e, t, n) {
  if (!xs) return null;
  let r = t.getContext();
  if (typeof r.COPY_WRITE_BUFFER != `number`) return null;
  let i = e.geometry,
    a = i.index;
  if (!a) return null;
  let o = Object.keys(i.attributes),
    s = new Map();
  for (let e of o)
    i.attributes[e].onUploadCallback = () =>
      void s.set(e, r.getParameter(r.ARRAY_BUFFER_BINDING));
  a.onUploadCallback = () =>
    void s.set(`#index`, r.getParameter(r.ELEMENT_ARRAY_BUFFER_BINDING));
  try {
    n([e]);
  } catch {}
  for (let e of o) i.attributes[e].onUploadCallback = () => {};
  if (
    ((a.onUploadCallback = () => {}),
    !s.has(`#index`) || o.some((e) => !s.get(e)))
  )
    return null;
  let c = a.array.BYTES_PER_ELEMENT === 4 ? 4 : 2;
  for (let e of [...o.map((e) => i.attributes[e]), a]) {
    let t = e.array.constructor;
    e.array = new t(0);
  }
  let l = {};
  for (let e of o) l[e] = s.get(e);
  return { gl: r, buf: l, index: s.get(`#index`), ib: c };
}
function Cs(e, t, n, r, i) {
  let a = e.gl;
  (a.bindBuffer(a.COPY_WRITE_BUFFER, t),
    a.bufferSubData(a.COPY_WRITE_BUFFER, n, r, 0, i),
    a.bindBuffer(a.COPY_WRITE_BUFFER, null));
}
var G = {
  col: new Uint8Array(),
  city: new Uint8Array(),
  i16: new Uint16Array(),
  i32: new Uint32Array(),
  uv8: new Float32Array(8),
};
function ws(e, t, n, r) {
  let i = t.n,
    a = t.ni;
  G.col.length < i * 4 &&
    ((G.col = new Uint8Array(i * 4 + 8192)),
    (G.city = new Uint8Array(i * 4 + 8192)));
  let o = G.col,
    s = G.city,
    c = t.ca;
  for (let e = 0, t = 0, n = 0; e < i; e++, t += 4, n += 8)
    ((o[t] = c[n]),
      (o[t + 1] = c[n + 1]),
      (o[t + 2] = c[n + 2]),
      (o[t + 3] = 255),
      (s[t] = c[n + 4]),
      (s[t + 1] = c[n + 5]),
      (s[t + 2] = c[n + 6]),
      (s[t + 3] = c[n + 7]));
  let l;
  e.ib === 4
    ? (G.i32.length < a && (G.i32 = new Uint32Array(a + 12288)), (l = G.i32))
    : (G.i16.length < a && (G.i16 = new Uint16Array(a + 12288)), (l = G.i16));
  let u = t.idx;
  for (let e = 0; e < a; e++) l[e] = n + u[e];
  let d = e.buf;
  (Cs(e, d.position, n * 12, t.pos, i * 3),
    Cs(e, d.normal, n * 12, t.nor, i * 3),
    d.uv && t.uv && Cs(e, d.uv, n * 8, t.uv, i * 2),
    Cs(e, d.color, n * 4, o, i * 4),
    Cs(e, d.aCity, n * 4, s, i * 4),
    Cs(e, e.index, r * e.ib, l, a));
}
function Ts(e, t, n, r, i, a) {
  let o = G.uv8;
  ((o[0] = n),
    (o[1] = r),
    (o[2] = i),
    (o[3] = r),
    (o[4] = i),
    (o[5] = a),
    (o[6] = n),
    (o[7] = a),
    e.buf.uv && Cs(e, e.buf.uv, t * 8, o, 8));
}
var Es = new Oe(),
  K = new Me(),
  Ds = 0.002,
  Os = class {
    move;
    turn;
    maxAge;
    fovTol;
    frustum = new f();
    pose = new Float64Array(27).fill(NaN);
    cosTurn = 1;
    age = 0;
    rebuilds = 0;
    constructor(e = 3, t = S.degToRad(3), n = 120, r = S.degToRad(1)) {
      ((this.move = e), (this.turn = t), (this.maxAge = n), (this.fovTol = r));
    }
    stale(e, t = !1) {
      if (t || ++this.age >= this.maxAge) return !0;
      let n = e.matrixWorld.elements,
        r = this.pose,
        i = e.projectionMatrix.elements,
        a = n[12] - r[0],
        o = n[13] - r[1],
        s = n[14] - r[2];
      if (
        !(a * a + o * o + s * s <= this.move * this.move) ||
        !(-n[8] * r[3] - n[9] * r[4] - n[10] * r[5] >= this.cosTurn) ||
        !(n[4] * r[6] + n[5] * r[7] + n[6] * r[8] >= this.cosTurn)
      )
        return !0;
      if (e.isPerspectiveCamera)
        return (
          i[8] !== r[17] ||
          i[9] !== r[18] ||
          i[10] !== r[19] ||
          i[14] !== r[23] ||
          !(
            Math.atan(1 / i[5]) <= r[25] + this.fovTol &&
            Math.atan(1 / i[0]) <= r[26] + this.fovTol
          )
        );
      for (let e = 0; e < 16; e++) if (i[e] !== r[9 + e]) return !0;
      return !1;
    }
    set(e) {
      let t = e.matrixWorld.elements,
        n = this.pose,
        r = e.projectionMatrix.elements;
      ((n[0] = t[12]),
        (n[1] = t[13]),
        (n[2] = t[14]),
        (n[3] = -t[8]),
        (n[4] = -t[9]),
        (n[5] = -t[10]),
        (n[6] = t[4]),
        (n[7] = t[5]),
        (n[8] = t[6]));
      for (let e = 0; e < 16; e++) n[9 + e] = r[e];
      ((n[25] = Math.atan(1 / r[5])),
        (n[26] = Math.atan(1 / r[0])),
        (this.age = 0),
        this.rebuilds++);
      let i = e,
        a = this.move;
      if (i.isPerspectiveCamera) {
        this.cosTurn = Math.cos(this.turn);
        let t = this.turn * 1.45 + this.fovTol,
          r = n[25],
          a = n[26],
          o = Math.min(Math.PI / 2 - 0.01, r + t),
          s = Math.min(Math.PI / 2 - 0.01, a + t);
        ((K.near = i.near),
          (K.far = i.far),
          (K.fov = S.radToDeg(o * 2)),
          (K.aspect = Math.tan(s) / Math.tan(o)),
          (K.zoom = 1),
          K.updateProjectionMatrix(),
          Es.multiplyMatrices(K.projectionMatrix, e.matrixWorldInverse));
      } else {
        let t = e;
        this.cosTurn = Math.cos(Ds);
        let n = t.zoom || 1,
          r =
            Math.max(
              Math.abs(t.left),
              Math.abs(t.right),
              Math.abs(t.top),
              Math.abs(t.bottom),
            ) /
              n +
            Math.max(Math.abs(t.near), Math.abs(t.far));
        ((a += r * Ds * 1.45),
          Es.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse));
      }
      let o = i.isPerspectiveCamera ? K.reversedDepth : e.reversedDepth;
      this.frustum.setFromProjectionMatrix(Es, e.coordinateSystem, o);
      for (let e of this.frustum.planes) e.constant += a;
      return this.frustum;
    }
  },
  ks = 3.3,
  As = 0.15,
  js = { minX: -900, maxX: 900, minZ: -960, maxZ: 560 },
  Ms = -960,
  Ns = -1030,
  Ps = [
    {
      id: `riverside`,
      name: { zh: `河濱公園`, en: `Riverside Park` },
      minX: -1200,
      maxX: -900,
      minZ: -1400,
      maxZ: 1e3,
      style: { floors: [0, 0], towers: 0, neon: 0, old: 0, shops: 0 },
    },
    {
      id: `shilin`,
      name: { zh: `士林`, en: `Shilin` },
      minX: -900,
      maxX: 900,
      minZ: -1400,
      maxZ: -790,
      style: { floors: [3, 8], towers: 0.05, neon: 0.7, old: 0.6, shops: 0.95 },
    },
    {
      id: `ximending`,
      name: { zh: `西門町`, en: `Ximending` },
      minX: -900,
      maxX: -560,
      minZ: -330,
      maxZ: 70,
      style: { floors: [4, 12], towers: 0.1, neon: 1, old: 0.4, shops: 1 },
    },
    {
      id: `wanhua`,
      name: { zh: `萬華`, en: `Wanhua` },
      minX: -900,
      maxX: -560,
      minZ: 70,
      maxZ: 1e3,
      style: { floors: [2, 6], towers: 0, neon: 0.4, old: 1, shops: 0.85 },
    },
    {
      id: `zhongzheng`,
      name: { zh: `中正`, en: `Zhongzheng` },
      minX: -560,
      maxX: -130,
      minZ: -330,
      maxZ: 1e3,
      style: {
        floors: [4, 14],
        towers: 0.25,
        neon: 0.2,
        old: 0.35,
        shops: 0.6,
      },
    },
    {
      id: `zhongshan`,
      name: { zh: `中山`, en: `Zhongshan` },
      minX: -900,
      maxX: 230,
      minZ: -790,
      maxZ: -330,
      style: { floors: [5, 16], towers: 0.3, neon: 0.6, old: 0.45, shops: 0.8 },
    },
    {
      id: `songshan`,
      name: { zh: `松山`, en: `Songshan` },
      minX: 230,
      maxX: 900,
      minZ: -790,
      maxZ: -330,
      style: {
        floors: [5, 14],
        towers: 0.25,
        neon: 0.5,
        old: 0.5,
        shops: 0.75,
      },
    },
    {
      id: `xinyi`,
      name: { zh: `信義`, en: `Xinyi` },
      minX: 480,
      maxX: 1200,
      minZ: -330,
      maxZ: 1e3,
      style: {
        floors: [10, 40],
        towers: 0.8,
        neon: 0.35,
        old: 0.05,
        shops: 0.5,
      },
    },
    {
      id: `daan`,
      name: { zh: `大安`, en: `Da'an` },
      minX: -130,
      maxX: 480,
      minZ: -330,
      maxZ: 1e3,
      style: { floors: [5, 14], towers: 0.3, neon: 0.35, old: 0.4, shops: 0.8 },
    },
  ],
  Fs = [
    { id: `daan`, minX: -212, maxX: -130, minZ: 280, maxZ: 1e3 },
    { id: `zhongzheng`, minX: -700, maxX: -560, minZ: -330, maxZ: 70, gen: !1 },
    { id: `daan`, minX: -202, maxX: -62, minZ: 140, maxZ: 266, gen: !1 },
    { id: `shilin`, minX: -202, maxX: -62, minZ: -883, maxZ: -743, gen: !1 },
    { id: `songshan`, minX: 344, maxX: 464, minZ: -330, maxZ: -300, gen: !1 },
  ],
  Is = js;
function q(e, t, n, r, i, a, o, s = {}) {
  let c = {
    boulevard: { median: 8, sidewalk: 6, speed: 50 },
    arterial: { median: 2, sidewalk: 5, speed: 50 },
    street: { median: 0, sidewalk: 4, speed: 40 },
    lane: { median: 0, sidewalk: 2.5, speed: 30 },
  }[a];
  return {
    id: e,
    name: { zh: t, en: n },
    axis: r,
    at: i,
    kind: a,
    lanesPerDir: o,
    from: r === `x` ? Is.minX : Is.minZ,
    to: r === `x` ? Is.maxX : Is.maxZ,
    median: c.median,
    sidewalk: c.sidewalk,
    speedKmh: c.speed,
    ...s,
  };
}
var Ls = -400,
  Rs = -160,
  J = 1e5;
function Y(...e) {
  let t = [];
  for (let n = 0; n + 1 < e.length; n += 2) t.push([e[n], e[n + 1]]);
  return t;
}
var zs = [
  q(`huanhe`, `環河南北路`, `Huanhe Rd`, `z`, -870, `arterial`, 2, {
    median: 1.2,
    sections: Y(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  q(`yanping`, `延平北路`, `Yanping N. Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    to: -160,
    sections: Y(-1e5, 4, -720, 3, -580, 2, -440, 1),
  }),
  q(`zhonghua`, `中華路`, `Zhonghua Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    from: -160,
    sections: Y(-1e5, 1, 120, 2),
  }),
  q(`chongqing`, `重慶南北路`, `Chongqing Rd`, `z`, -580, `arterial`, 2, {
    sections: Y(-1e5, 4, -900, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  q(`zhongshan`, `中山南北路`, `Zhongshan Rd`, `z`, -400, `boulevard`, 3, {
    median: 7,
    treeMedian: !0,
    sections: Y(-1e5, 5, -790, 3, -720, 2, -440, 1, -160, 0),
  }),
  q(`xinsheng`, `新生南北路`, `Xinsheng Rd`, `z`, -220, `arterial`, 3, {
    median: 3,
    treeMedian: !0,
    sections: Y(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  q(`jianguo`, `建國南北路`, `Jianguo Rd`, `z`, -40, `boulevard`, 3, {
    median: 10,
    elevated: `expressway`,
    sections: Y(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  q(`fuxing`, `復興南北路`, `Fuxing Rd`, `z`, 140, `boulevard`, 3, {
    median: 9,
    elevated: `mrt`,
    sections: Y(-1e5, 0, -160, 1, 120, 2),
  }),
  q(`dunhua`, `敦化南北路`, `Dunhua Rd`, `z`, 320, `boulevard`, 3, {
    median: 10,
    treeMedian: !0,
    sections: Y(-1e5, 0, -160, 1, 120, 2),
  }),
  q(`guangfu`, `光復南北路`, `Guangfu Rd`, `z`, 480, `arterial`, 2),
  q(`keelung`, `基隆路`, `Keelung Rd`, `z`, 640, `boulevard`, 3, {
    median: 6,
    sections: Y(-1e5, 1, 120, 2, 430, 3),
  }),
  q(`songren`, `松仁路`, `Songren Rd`, `z`, 840, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
  }),
  q(`shilin-zz`, `中正路`, `Zhongzheng Rd`, `x`, -900, `arterial`, 2, {
    median: 2,
  }),
  q(`minquan`, `民權東西路`, `Minquan Rd`, `x`, -720, `boulevard`, 3, {
    median: 6,
    sections: Y(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  q(`minsheng`, `民生東西路`, `Minsheng Rd`, `x`, -580, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
    sections: Y(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  q(`nanjing`, `南京東西路`, `Nanjing Rd`, `x`, -440, `boulevard`, 3, {
    median: 6,
    sections: Y(-1e5, 0, -400, 1, -310, 2, -40, 3, 320, 4, 640, 5),
  }),
  q(`civic`, `市民大道`, `Civic Blvd`, `x`, -300, `boulevard`, 3, {
    median: 12,
    elevated: `expressway`,
    sections: Y(-1e5, 1, -400, 2, -220, 3, 140, 4, 320, 5, 640, 6),
  }),
  q(`zhongxiao`, `忠孝東西路`, `Zhongxiao Rd`, `x`, -160, `boulevard`, 3, {
    median: 5,
    sections: Y(-1e5, 2, -700, 1, -400, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  q(`ketagalan`, `凱達格蘭大道`, `Ketagalan Blvd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -580,
    to: -400,
  }),
  q(`renai`, `仁愛路`, `Ren'ai Rd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -400,
    sections: Y(-1e5, 1, -310, 2, -220, 3, 140, 4),
  }),
  q(`guangzhou`, `廣州街`, `Guangzhou St`, `x`, 120, `boulevard`, 3, {
    median: 6,
    to: -700,
  }),
  q(`aiguo`, `愛國西路`, `Aiguo W. Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -700,
    to: -400,
  }),
  q(`xinyi`, `信義路`, `Xinyi Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -400,
    sections: Y(-1e5, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  q(`heping`, `和平東西路`, `Heping Rd`, `x`, 280, `arterial`, 2, {
    median: 2,
    sections: Y(-1e5, 3, -700, 2, -580, 1, -400, 1, -220, 2, 140, 3),
  }),
  q(`juguang`, `莒光路`, `Juguang Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    to: -700,
  }),
  q(`tingzhou`, `汀州路`, `Tingzhou Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -700,
    to: -220,
    sections: Y(-1e5, 1, -580, 2, -400, 3),
  }),
  q(`xinhai`, `辛亥路`, `Xinhai Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -220,
    sections: Y(-1e5, 1, -40, 2, 140, 3, 480, 4),
  }),
];
function X(e, t, n, r, i, a, o) {
  return { axis: e, at: t, from: n, to: r, zh: i, en: a, sections: o };
}
var Bs = [
    X(`x`, -810, -1e5, -400, `通河街`, `Tonghe St`),
    X(`x`, -810, -400, 140, `大南路`, `Danan Rd`),
    X(`x`, -810, 140, 480, `福林路`, `Fulin Rd`),
    X(`x`, -810, 480, J, `士商路`, `Shishang Rd`),
    X(`x`, -650, -1e5, -700, `寧夏路`, `Ningxia Rd`),
    X(`x`, -650, -700, -400, `錦西街`, `Jinxi St`),
    X(`x`, -650, -400, 230, `錦州街`, `Jinzhou St`),
    X(`x`, -650, 230, 640, `富錦街`, `Fujin St`),
    X(`x`, -650, 640, J, `饒河街`, `Raohe St`),
    X(`x`, -510, -1e5, -400, `歸綏街`, `Guisui St`),
    X(`x`, -510, -400, 230, `長春路`, `Changchun Rd`),
    X(`x`, -510, 230, J, `延壽街`, `Yanshou St`),
    X(`x`, -370, -1e5, -400, `長安西路`, `Chang'an W. Rd`),
    X(`x`, -370, -400, 140, `長安東路`, `Chang'an E. Rd`, Y(-1e5, 1, -40, 2)),
    X(`x`, -370, 140, J, `八德路`, `Bade Rd`, Y(-1e5, 3, 480, 4)),
    X(`x`, -253, -1e5, -700, `武昌街`, `Wuchang St`, Y(-1e5, 2)),
    X(`x`, -207, -1e5, -700, `峨眉街`, `Emei St`),
    X(`x`, -230, -400, 140, `八德路`, `Bade Rd`, Y(-1e5, 1, -220, 2)),
    X(`x`, -90, -400, -40, `濟南路`, `Jinan Rd`, Y(-1e5, 1, -310, 2, -220, 3)),
    X(`x`, -20, -1e5, -700, `成都路`, `Chengdu Rd`),
    X(`x`, 50, -400, -220, `徐州路`, `Xuzhou Rd`),
    X(`x`, 50, 140, 480, `東豐街`, `Dongfeng St`),
    X(`x`, 200, -1e5, -580, `寧波西街`, `Ningbo W. St`),
    X(`x`, 200, -580, -400, `南海路`, `Nanhai Rd`),
    X(`x`, 200, -400, 140, `金華街`, `Jinhua St`),
    X(`x`, 200, 140, 480, `瑞安街`, `Rui'an St`),
    X(`x`, 355, -1e5, -580, `西藏路`, `Xizang Rd`),
    X(`x`, 355, -580, -220, `晉江街`, `Jinjiang St`),
    X(`x`, 355, -220, 140, `雲和街`, `Yunhe St`),
    X(`x`, 355, 140, 480, `臥龍街`, `Wolong St`),
    X(`x`, 355, 480, J, `崇德街`, `Chongde St`),
    X(`z`, -813, -1e5, J, `西寧南路`, `Xining S. Rd`),
    X(`z`, -757, -1e5, J, `漢中街`, `Hanzhong St`),
    X(`z`, -785, -1e5, -720, `社正路`, `Shezheng Rd`),
    X(`z`, -785, -720, -160, `西寧北路`, `Xining N. Rd`),
    X(`z`, -785, -160, J, `康定路`, `Kangding Rd`),
    X(`z`, -640, -1e5, -720, `前港街`, `Qiangang St`),
    X(`z`, -640, -720, -160, `甘州街`, `Ganzhou St`),
    X(`z`, -640, 280, J, `萬大路`, `Wanda Rd`),
    X(
      `z`,
      -490,
      -1e5,
      -160,
      `承德路`,
      `Chengde Rd`,
      Y(-1e5, 4, -720, 3, -440, 2, -300, 1),
    ),
    X(`z`, -490, -160, J, `牯嶺街`, `Guling St`),
    X(`z`, -310, -1e5, -720, `文林路`, `Wenlin Rd`),
    X(`z`, -310, -720, -160, `林森北路`, `Linsen N. Rd`),
    X(`z`, -310, -160, 200, `林森南路`, `Linsen S. Rd`),
    X(`z`, -310, 200, J, `羅斯福路`, `Roosevelt Rd`, Y(-1e5, 1, 355, 2)),
    X(`z`, -130, -1e5, -160, `松江路`, `Songjiang Rd`),
    X(`z`, -130, 280, J, `師大路`, `Shida Rd`),
    X(`z`, 50, -1e5, -720, `大東路`, `Dadong Rd`),
    X(`z`, 50, -720, -300, `龍江路`, `Longjiang Rd`),
    X(`z`, 50, -300, -160, `安東街`, `Andong St`),
    X(`z`, 50, -160, 280, `青田街`, `Qingtian St`),
    X(`z`, 50, 280, J, `溫州街`, `Wenzhou St`),
    X(`z`, 230, -1e5, -720, `大北路`, `Dabei Rd`),
    X(`z`, 230, -720, -300, `慶城街`, `Qingcheng St`),
    X(`z`, 230, -300, 280, `大安路`, `Da'an Rd`, Y(-1e5, 1, 120, 2)),
    X(`z`, 230, 280, J, `通化街`, `Tonghua St`),
    X(`z`, 400, -1e5, -720, `福國路`, `Fuguo Rd`),
    X(`z`, 400, -720, -300, `寧安街`, `Ning'an St`),
    X(`z`, 400, -300, 120, `延吉街`, `Yanji St`),
    X(`z`, 400, 120, J, `安和路`, `Anhe Rd`, Y(-1e5, 1, 280, 2)),
    X(`z`, 560, -1e5, -720, `士東路`, `Shidong Rd`),
    X(`z`, 560, -720, -300, `三民路`, `Sanmin Rd`),
    X(`z`, 560, -300, 120, `逸仙路`, `Yixian Rd`),
    X(`z`, 560, 120, J, `吳興街`, `Wuxing St`),
    X(`z`, 740, -1e5, -720, `雨聲街`, `Yusheng St`),
    X(`z`, 740, -720, -300, `松山路`, `Songshan Rd`),
    X(`z`, 740, -300, 120, `市府路`, `Shifu Rd`),
    X(`z`, 740, 120, J, `松智路`, `Songzhi Rd`),
  ],
  Vs = [
    {
      id: `taipei101`,
      name: { zh: `臺北101`, en: `Taipei 101` },
      x: 745,
      z: 200,
      w: 110,
      d: 110,
      facing: 0,
      kind: `landmark`,
    },
    {
      id: `xinyi-mall`,
      name: { zh: `信義新天地`, en: `Xinyi Plaza Malls` },
      x: 745,
      z: 52,
      w: 150,
      d: 90,
      facing: Math.PI,
      kind: `landmark`,
    },
    {
      id: `cityhall`,
      name: { zh: `臺北市政府`, en: `Taipei City Hall` },
      x: 745,
      z: -92,
      w: 150,
      d: 90,
      facing: Math.PI / 2,
      kind: `landmark`,
    },
    {
      id: `elephant-trailhead`,
      name: { zh: `象山步道`, en: `Elephant Mountain Trail` },
      x: 880,
      z: 330,
      w: 40,
      d: 40,
      facing: -Math.PI / 2,
      kind: `park`,
    },
    {
      id: `presidential`,
      name: { zh: `總統府`, en: `Presidential Office` },
      x: -640,
      z: -20,
      w: 80,
      d: 110,
      facing: Math.PI / 2,
      kind: `landmark`,
    },
    {
      id: `cks`,
      name: { zh: `中正紀念堂`, en: `CKS Memorial Hall` },
      x: -308,
      z: 203,
      w: 140,
      d: 126,
      facing: -Math.PI / 2,
      kind: `landmark`,
    },
    {
      id: `main-station`,
      name: { zh: `臺北車站`, en: `Taipei Main Station` },
      x: -490,
      z: -228,
      w: 140,
      d: 96,
      facing: Math.PI,
      kind: `station`,
    },
    {
      id: `ntu-hospital`,
      name: { zh: `臺大醫院`, en: `NTU Hospital` },
      x: -490,
      z: 52,
      w: 140,
      d: 94,
      facing: -Math.PI / 2,
      kind: `hospital`,
    },
    {
      id: `police-hq`,
      name: { zh: `臺北市政府警察局`, en: `Taipei City Police HQ` },
      x: -640,
      z: -228.25,
      w: 70,
      d: 99.7,
      facing: Math.PI,
      kind: `police`,
    },
    {
      id: `peace-park`,
      name: { zh: `二二八和平公園`, en: `228 Peace Memorial Park` },
      x: -505,
      z: -92,
      w: 110,
      d: 90,
      facing: Math.PI,
      kind: `park`,
    },
    {
      id: `beimen`,
      name: { zh: `北門（承恩門）`, en: `North Gate (Beimen)` },
      x: -640,
      z: -108,
      w: 50,
      d: 50,
      facing: 0,
      kind: `landmark`,
    },
    {
      id: `eastgate`,
      name: { zh: `景福門（東門）`, en: `East Gate (Jingfu Gate)` },
      x: -372,
      z: -20,
      w: 14,
      d: 12,
      facing: -Math.PI / 2,
      kind: `landmark`,
    },
    {
      id: `huashan`,
      name: { zh: `華山1914文創園區`, en: `Huashan 1914 Creative Park` },
      x: -310,
      z: -228,
      w: 110,
      d: 96,
      facing: 0,
      kind: `park`,
    },
    {
      id: `redhouse`,
      name: { zh: `西門紅樓`, en: `Red House` },
      x: -745,
      z: -90,
      w: 50,
      d: 50,
      facing: Math.PI / 2,
      kind: `landmark`,
    },
    {
      id: `ximen-walk`,
      name: { zh: `西門町徒步區`, en: `Ximending Pedestrian Zone` },
      x: -790,
      z: -200,
      w: 150,
      d: 180,
      facing: 0,
      kind: `plaza`,
      zone: `pedestrian`,
    },
    {
      id: `longshan`,
      name: { zh: `龍山寺`, en: `Longshan Temple` },
      x: -790,
      z: 190,
      w: 110,
      d: 90,
      facing: 0,
      kind: `temple`,
    },
    {
      id: `bopiliao`,
      name: { zh: `剝皮寮老街`, en: `Bopiliao Old Street` },
      x: -788,
      z: 330,
      w: 130,
      d: 60,
      facing: 0,
      kind: `landmark`,
    },
    {
      id: `daan-park`,
      name: { zh: `大安森林公園`, en: `Da'an Forest Park` },
      x: -132,
      z: 203,
      w: 140,
      d: 126,
      facing: 0,
      kind: `park`,
    },
    {
      id: `sunyatsen`,
      name: { zh: `國父紀念館`, en: `Sun Yat-sen Memorial Hall` },
      x: 557,
      z: -92,
      w: 120,
      d: 94,
      facing: Math.PI,
      kind: `landmark`,
    },
    {
      id: `taipei-dome`,
      name: { zh: `臺北大巨蛋`, en: `Taipei Dome` },
      x: 557,
      z: -228,
      w: 124,
      d: 96,
      facing: Math.PI,
      kind: `landmark`,
    },
    {
      id: `ntu`,
      name: {
        zh: `國立臺灣大學（椰林大道）`,
        en: `National Taiwan University`,
      },
      x: -132,
      z: 500,
      w: 140,
      d: 110,
      facing: 0,
      kind: `landmark`,
    },
    {
      id: `sogo`,
      name: { zh: `忠孝商圈百貨`, en: `Zhongxiao Dept. Store` },
      x: 230,
      z: -120,
      w: 70,
      d: 40,
      facing: 0,
      kind: `landmark`,
    },
    {
      id: `xingtian`,
      name: { zh: `行天宮`, en: `Xingtian Temple` },
      x: -130,
      z: -510,
      w: 80,
      d: 90,
      facing: Math.PI,
      kind: `temple`,
    },
    {
      id: `arena`,
      name: { zh: `臺北小巨蛋`, en: `Taipei Arena` },
      x: 404,
      z: -370,
      w: 120,
      d: 90,
      facing: Math.PI,
      kind: `landmark`,
    },
    {
      id: `dihua`,
      name: { zh: `大稻埕迪化街`, en: `Dihua Street (Dadaocheng)` },
      x: -788,
      z: -512,
      w: 130,
      d: 100,
      facing: -Math.PI / 2,
      kind: `landmark`,
    },
    {
      id: `ningxia-market`,
      name: { zh: `寧夏夜市`, en: `Ningxia Night Market` },
      x: -785,
      z: -650,
      w: 165,
      d: 16,
      facing: Math.PI / 2,
      kind: `market`,
      zone: `pedestrian`,
    },
    {
      id: `raohe-market`,
      name: { zh: `饒河街夜市`, en: `Raohe Night Market` },
      x: 740,
      z: -650,
      w: 190,
      d: 16,
      facing: Math.PI / 2,
      kind: `market`,
      zone: `pedestrian`,
    },
    {
      id: `ciyou-temple`,
      name: { zh: `松山慈祐宮`, en: `Ciyou Temple` },
      x: 877,
      z: -650,
      w: 44,
      d: 56,
      facing: -Math.PI / 2,
      kind: `temple`,
    },
    {
      id: `shilin-market`,
      name: { zh: `士林夜市`, en: `Shilin Night Market` },
      x: -132,
      z: -813,
      w: 140,
      d: 140,
      facing: Math.PI,
      kind: `market`,
    },
    {
      id: `grand-hotel`,
      name: { zh: `圓山大飯店`, en: `Grand Hotel` },
      x: -330,
      z: -1130,
      w: 100,
      d: 40,
      facing: Math.PI,
      kind: `landmark`,
    },
  ],
  Hs = [
    {
      x: 1010,
      z: 360,
      height: 183,
      radius: 190,
      name: { zh: `象山`, en: `Elephant Mountain` },
    },
    {
      x: 1120,
      z: 150,
      height: 150,
      radius: 190,
      name: { zh: `四獸山`, en: `Four Beasts Mountain` },
    },
    { x: 1150, z: 620, height: 240, radius: 300 },
    { x: 350, z: 900, height: 160, radius: 320 },
    { x: -300, z: 950, height: 120, radius: 300 },
    {
      x: -200,
      z: -1650,
      height: 700,
      radius: 700,
      name: { zh: `陽明山`, en: `Yangmingshan` },
      fadeZ: [-1500, -1150],
    },
    { x: 700, z: -1600, height: 520, radius: 600 },
    {
      x: -1e3,
      z: -1500,
      height: 420,
      radius: 500,
      name: { zh: `觀音山`, en: `Mt. Guanyin` },
    },
    {
      x: -330,
      z: -1130,
      height: 60,
      radius: 110,
      name: { zh: `圓山`, en: `Yuanshan` },
    },
  ],
  Us = {
    start: { x: -760, z: -150, heading: Math.PI / 2 },
    hospital: { x: -422.6, z: 44, heading: Math.PI / 2, snap: !1 },
    police: { x: -640, z: -196, heading: Math.PI, snap: !1 },
  },
  Ws = [
    {
      id: `taipei-main`,
      name: { zh: `臺北車站`, en: `Taipei Main Station` },
      x: -490,
      z: -170,
      line: `BL`,
      elevated: !1,
    },
    {
      id: `ximen`,
      name: { zh: `西門`, en: `Ximen` },
      x: -690,
      z: -175,
      line: `BL`,
      elevated: !1,
    },
    {
      id: `longshan`,
      name: { zh: `龍山寺`, en: `Longshan Temple` },
      x: -690,
      z: 180,
      line: `BL`,
      elevated: !1,
    },
    {
      id: `cks`,
      name: { zh: `中正紀念堂`, en: `Chiang Kai-Shek Memorial Hall` },
      x: -390,
      z: 130,
      line: `R`,
      elevated: !1,
    },
    {
      id: `daan-park`,
      name: { zh: `大安森林公園`, en: `Daan Park` },
      x: -50,
      z: 130,
      line: `R`,
      elevated: !1,
    },
    {
      id: `zhongxiao-fuxing`,
      name: { zh: `忠孝復興`, en: `Zhongxiao Fuxing` },
      x: 125,
      z: -170,
      line: `BR`,
      elevated: !0,
    },
    {
      id: `daan`,
      name: { zh: `大安`, en: `Daan` },
      x: 125,
      z: 110,
      line: `BR`,
      elevated: !0,
    },
    {
      id: `nanjing-fuxing`,
      name: { zh: `南京復興`, en: `Nanjing Fuxing` },
      x: 125,
      z: -450,
      line: `BR`,
      elevated: !0,
    },
    {
      id: `zhongshan`,
      name: { zh: `中山`, en: `Zhongshan` },
      x: -390,
      z: -455,
      line: `R`,
      elevated: !1,
    },
    {
      id: `jiantan`,
      name: { zh: `劍潭`, en: `Jiantan` },
      x: -400,
      z: -800,
      line: `R`,
      elevated: !0,
    },
    {
      id: `taipei101`,
      name: { zh: `臺北101/世貿`, en: `Taipei 101/World Trade Center` },
      x: 655,
      z: 130,
      line: `R`,
      elevated: !1,
    },
    {
      id: `cityhall`,
      name: { zh: `市政府`, en: `Taipei City Hall` },
      x: 655,
      z: -150,
      line: `BL`,
      elevated: !1,
    },
    {
      id: `songshan`,
      name: { zh: `松山`, en: `Songshan` },
      x: 820,
      z: -600,
      line: `G`,
      elevated: !1,
    },
  ],
  Gs = [
    {
      id: `51lan`,
      zh: `51嵐`,
      en: `51 Lan`,
      zhFull: `51嵐手搖飲`,
      colors: [`#1b3d8f`, `#ffd21f`, `#ffffff`],
      tagline: { zh: `珍珠奶茶 · 四季春青茶`, en: `Bubble milk tea` },
      weight: 1,
    },
    {
      id: `qingxin`,
      zh: `清新福泉`,
      en: `Qingxin Fuquan`,
      zhFull: `清新福泉茶飲`,
      colors: [`#f7f3e8`, `#1e8a44`, `#f08a1c`],
      tagline: { zh: `冬瓜檸檬 · 百香綠`, en: `Wax-gourd lemon tea` },
      weight: 1,
    },
    {
      id: `milkdong`,
      zh: `迷客冬`,
      en: `Milkdong`,
      zhFull: `迷客冬鮮奶茶`,
      colors: [`#2e6b3a`, `#f5efe0`, `#c8a86b`],
      tagline: { zh: `鮮奶茶 · 大甲芋頭鮮奶`, en: `Fresh milk tea` },
      weight: 1,
    },
    {
      id: `koko`,
      zh: `KoKo都好`,
      en: `KoKo`,
      zhFull: `KoKo都好茶飲`,
      colors: [`#f28c28`, `#ffffff`, `#6b3b1f`],
      tagline: { zh: `百香QQ綠 · 珍珠奶綠`, en: `Passion-fruit QQ green tea` },
      weight: 1,
    },
    {
      id: `zhenzhuhong`,
      zh: `珍煮紅`,
      en: `Zhenzhu Hong`,
      zhFull: `珍煮紅黑糖專賣`,
      colors: [`#1a1a1a`, `#d4a74a`, `#b3202a`],
      tagline: { zh: `黑糖珍珠鮮奶`, en: `Brown-sugar pearl milk` },
      weight: 1,
    },
  ],
  Ks = [
    {
      id: `7twelve`,
      zh: `7-TWELVE`,
      en: `7-TWELVE`,
      zhFull: `統二超商`,
      colors: [`#008c4a`, `#f58220`, `#e3262e`],
      tagline: { zh: `有統二真好`, en: `Always open, always near` },
      weight: 6,
    },
    {
      id: `familymark`,
      zh: `FamilyMark`,
      en: `FamilyMark`,
      zhFull: `全佳便利商店`,
      colors: [`#1a6fc9`, `#ffffff`, `#1fa64a`],
      tagline: { zh: `全佳就像你家`, en: `Feels like home` },
      weight: 3,
    },
    {
      id: `hilite`,
      zh: `Hi-Lite`,
      en: `Hi-Lite`,
      zhFull: `萊而福`,
      colors: [`#e60012`, `#ffffff`, `#f5a623`],
      tagline: { zh: `萊而福 好幸福`, en: `Hi-Lite, hi-life` },
      weight: 1,
    },
  ],
  qs = {
    id: `smilebike`,
    zh: `笑笑單車`,
    en: `SmileBike 2.0`,
    zhFull: `臺北市笑笑單車2.0`,
    colors: [`#f5c400`, `#ffffff`, `#e2231a`],
    tagline: { zh: `前30分鐘5元`, en: `NT$5 for the first 30 min` },
    weight: 1,
  },
  Js = [
    {
      id: `pangda`,
      zh: `胖達外送`,
      en: `PangDa`,
      zhFull: `胖達外送`,
      colors: [`#d70f64`, `#ffffff`, `#2b2b2b`],
      tagline: { zh: `餓了嗎？胖達馬上到`, en: `Hungry? PangDa is on the way` },
      weight: 2,
    },
    {
      id: `bearlove`,
      zh: `熊愛送`,
      en: `BearEats`,
      zhFull: `熊愛送外送`,
      colors: [`#06c167`, `#111111`, `#ffffff`],
      tagline: { zh: `熊愛送 什麼都送`, en: `We deliver anything` },
      weight: 1,
    },
  ],
  Ys = {
    id: `yoyo`,
    zh: `悠悠卡`,
    en: `YoYo Card`,
    zhFull: `悠悠卡`,
    colors: [`#0a8f4f`, `#ffffff`, `#ffd400`],
    weight: 1,
  },
  Xs = {
    id: `pymart`,
    zh: `全連`,
    en: `PY Mart`,
    zhFull: `全連福利中心`,
    colors: [`#003f98`, `#ffffff`, `#e60012`],
    tagline: { zh: `實在真便宜`, en: `Honestly cheap` },
    weight: 1,
  };
Object.keys({
  "7-ELEVEN": `7-TWELVE`,
  統一超商: `統二超商`,
  全家便利商店: `全佳便利商店`,
  全家就是你家: `全佳就像你家`,
  全家: `全佳`,
  FamilyMart: `FamilyMark`,
  萊爾富: `萊而福`,
  "Hi-Life": `Hi-Lite`,
  OK超商: `KO超商`,
  "50嵐": `51嵐`,
  清心福全: `清新福泉`,
  迷客夏: `迷客冬`,
  CoCo都可: `KoKo都好`,
  CoCo: `KoKo`,
  珍煮丹: `珍煮紅`,
  百香雙響炮: `百香QQ綠`,
  微笑單車: `笑笑單車`,
  YouBike: `SmileBike`,
  悠遊卡: `悠悠卡`,
  EasyCard: `YoYo Card`,
  foodpanda: `PangDa`,
  "Uber Eats": `BearEats`,
  全聯福利中心: `全連福利中心`,
  全聯: `全連`,
  "PX Mart": `PY Mart`,
  "85度C": `58度C`,
  瓦城: `瓦成泰式`,
  遠傳: `遠船電信`,
  中華電信: `中華點信`,
  台灣大哥大: `台灣大哥哥`,
  永慶房屋: `永輕房屋`,
  永慶: `永輕`,
  信義房屋: `信意房屋`,
  這一鍋: `那一鍋`,
  錢櫃: `錢貴KTV`,
  好樂迪: `好樂笛`,
  寶島眼鏡: `寶道眼鏡`,
  鼎泰豐: `鼎泰瘋`,
  "DIN TAI FUNG": `DING TAI FENG`,
  誠品: `誠品味`,
  屈臣氏: `屈成氏`,
  康是美: `康事美`,
  麥當勞: `麥當當`,
  肯德基: `肯德雞`,
  摩斯漢堡: `摩絲漢堡`,
  星巴克: `星八克`,
  路易莎: `路易沙`,
  大創: `大創意`,
  家樂福: `家樂富`,
  乾杯: `乾一杯`,
  橘色涮涮屋: `柳橙涮涮屋`,
  湛盧: `湛藍`,
  法朋: `法蓬`,
  OMNI: `OMNY`,
  健身工廠: `健身公廠`,
  世界健身: `世紀健身`,
  "World Gym": `Century Gym`,
  小林眼鏡: `小森眼鏡`,
  鷹流: `鷲流`,
  瓦城泰國料理: `瓦成泰式`,
  國光客運: `國廣客運`,
}).sort((e, t) => t.length - e.length);
function Zs(e) {
  return [...Gs, ...Ks, qs, ...Js, Ys, Xs].find(
    (t) => t.zh === e || t.id === e || t.zhFull === e,
  );
}
var Qs = [
    {
      id: `yongkang`,
      name: { zh: `永康街`, en: `Yongkang St` },
      minX: 3,
      minZ: 138.9,
      maxX: 21,
      maxZ: 193.7,
      kind: `lane`,
    },
    {
      id: `shida-longquan`,
      name: { zh: `龍泉街`, en: `Longquan St` },
      minX: -97,
      minZ: 292.6,
      maxX: -87,
      maxZ: 348.7,
      kind: `lane`,
    },
    {
      id: `shida-39`,
      name: { zh: `師大路39巷`, en: `Ln. 39, Shida Rd` },
      minX: -123.7,
      minZ: 322,
      maxX: -60.9,
      maxZ: 331.5,
      kind: `lane`,
    },
    {
      id: `huaxi`,
      name: { zh: `華西街觀光夜市`, en: `Huaxi St Night Market` },
      minX: -805,
      minZ: 441,
      maxX: -796,
      maxZ: 546.2,
      kind: `market`,
    },
    {
      id: `qingcao`,
      name: { zh: `青草巷`, en: `Herb Lane` },
      minX: -806.2,
      minZ: 235.2,
      maxX: -718.9,
      maxZ: 243,
      kind: `lane`,
    },
    {
      id: `dihua`,
      name: { zh: `迪化街`, en: `Dihua St` },
      minX: -789.2,
      minZ: -566.2,
      maxX: -780.8,
      maxZ: -459.1,
      kind: `lane`,
    },
    {
      id: `xiahai`,
      name: { zh: `霞海城隍廟`, en: `Xiahai City God Temple` },
      minX: -780.8,
      minZ: -501,
      maxX: -765.3,
      maxZ: -492,
      kind: `plaza`,
    },
    {
      id: `ningxia`,
      name: { zh: `寧夏夜市`, en: `Ningxia Night Market` },
      minX: -867,
      minZ: -658,
      maxX: -702,
      maxZ: -642,
      kind: `market`,
    },
    {
      id: `danan`,
      name: { zh: `大南路老街`, en: `Danan Rd Old Street` },
      minX: -203.6,
      minZ: -934,
      maxX: -60.9,
      maxZ: -927,
      kind: `lane`,
    },
    {
      id: `cixian`,
      name: { zh: `慈諴宮廟埕`, en: `Cixian Temple Square` },
      minX: -150,
      minZ: -936,
      maxX: -114,
      maxZ: -912.6,
      kind: `plaza`,
    },
    {
      id: `guandi`,
      name: { zh: `士林官邸公園`, en: `Shilin Residence Park` },
      minX: -380.6,
      minZ: -960,
      maxX: -236.4,
      maxZ: -912.6,
      kind: `plaza`,
    },
    {
      id: `shidong`,
      name: { zh: `士東商圈`, en: `Shidong Shopping District` },
      minX: -19.1,
      minZ: -960,
      maxX: 119.6,
      maxZ: -912.6,
      kind: `market`,
    },
  ],
  $s = 20260923,
  ec = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`],
  tc = 4.8;
function nc(e) {
  let t = e.name.zh;
  return t.endsWith(`東西路`) ? `ew` : t.endsWith(`南北路`) ? `ns` : null;
}
function rc(e, t) {
  let n = 0,
    r = e.from,
    i = e.to,
    a = e.sections;
  if (a)
    for (let o = 0; o < a.length && !(t < a[o][0]); o++)
      ((n = a[o][1]),
        (r = a[o][0]),
        (i = o + 1 < a.length ? a[o + 1][0] : e.to));
  let o = nc(e);
  if (o) {
    let e = o === `ew` ? Ls : Rs;
    t < e ? (i = Math.min(i, e)) : (r = Math.max(r, e));
  }
  return { n, lo: Math.max(r, e.from), hi: Math.min(i, e.to) };
}
function ic(e, t, n) {
  let r = e.name.zh,
    i = e.name.en,
    a = nc(e);
  if (a === `ew`) {
    let e = t >= Ls;
    ((r = r.slice(0, -3) + (e ? `東路` : `西路`)),
      (i = i.replace(/ Rd\.?$/, e ? ` E. Rd.` : ` W. Rd.`)));
  } else if (a === `ns`) {
    let e = n < Rs;
    ((r = r.slice(0, -3) + (e ? `北路` : `南路`)),
      (i = i.replace(/ Rd\.?$/, e ? ` N. Rd.` : ` S. Rd.`)));
  }
  i = i.replace(/ (Rd|St|Blvd|Ave|Ln)$/, ` $1.`);
  let o = rc(e, e.axis === `x` ? t : n).n,
    s = o > 0 ? `${ec[o] ?? o}段` : ``;
  return {
    zh: r,
    sec: s,
    en: o ? `${i}, Sec. ${o}` : i,
    n: o,
    full: { zh: r + s, en: o ? `Sec. ${o}, ${i}` : i },
  };
}
function ac(e, t, n) {
  let { lo: r, hi: i } = rc(e, t),
    a = nc(e),
    o = Math.max(
      0,
      (a === `ew` ? t < -400 : a === `ns` && t < -160) ? i - t : t - r,
    ),
    s = tc * (0.65 + (($o(e.name.zh) % 997) / 997) * 0.9);
  return 2 * Math.floor(o / s) + (n > 0 ? 2 : 1);
}
var oc = {
    streetLabel: ic,
    houseNumber: ac,
    laneName: (e, t) => ({
      zh: `${e.full.zh}${t}巷`,
      en: `Ln. ${t}, ${e.full.en}`,
    }),
    unnamedLane: () => ({ zh: `無名巷`, en: `Unnamed Ln.` }),
    address: (e, t) => ({
      zh: `${e.full.zh}${t}號`,
      en: `No. ${t}, ${e.full.en}`,
    }),
    cityAddress: () => ({ zh: `臺北市`, en: `Taipei City` }),
  },
  sc = (e, t) => {
    let n = [],
      r = new Qo(t ^ 24301),
      i = Ks.map((e) => [e.zh, e.weight]),
      a = Gs.map((e) => [e.zh, e.weight]);
    for (let t of e) {
      if (t.edge) continue;
      let e = t.district.style;
      if (e.shops <= 0) continue;
      let o = [];
      (t.north &&
        o.push({
          road: t.north,
          facing: 0,
          along: `x`,
          at: t.minZ,
          from: t.minX,
          to: t.maxX,
        }),
        t.south &&
          o.push({
            road: t.south,
            facing: Math.PI,
            along: `x`,
            at: t.maxZ,
            from: t.minX,
            to: t.maxX,
          }),
        t.west &&
          o.push({
            road: t.west,
            facing: -Math.PI / 2,
            along: `z`,
            at: t.minX,
            from: t.minZ,
            to: t.maxZ,
          }),
        t.east &&
          o.push({
            road: t.east,
            facing: Math.PI / 2,
            along: `z`,
            at: t.maxX,
            from: t.minZ,
            to: t.maxZ,
          }));
      let s = [],
        c = (e, i, a, c, l) => {
          for (let u = 0; u < 6; u++) {
            let u = o.map((e, t) => [t, l && e.road.major ? 3 : 1]),
              d = r.weighted(u),
              f = o[d];
            if (f.to - f.from < a + 6) continue;
            let p = c
                ? r.chance(0.5)
                  ? f.from + 1 + a / 2
                  : f.to - 1 - a / 2
                : r.range(f.from + a / 2 + 3, f.to - a / 2 - 3),
              m = p - a / 2,
              h = p + a / 2;
            if (s.some((e) => e.side === d && m < e.b + 1 && h > e.a - 1))
              continue;
            let g = f.along === `x` ? p : f.at,
              _ = f.along === `x` ? f.at : p;
            if (!t.reserved.some((e) => cc(e, t, g, _, a / 2 + 3))) {
              (s.push({ side: d, a: m, b: h }),
                n.push({
                  id: `${e}-${n.length}`,
                  kind: e,
                  brand: i,
                  x: g,
                  z: _,
                  facing: f.facing,
                  blockId: t.id,
                  width: a,
                }));
              return;
            }
          }
        },
        l = t.district.id,
        u = t.zones.length > 0;
      (r.chance(0.42 * (0.5 + e.shops)) &&
        c(`convenience`, r.weighted(i), 9, !0, !0),
        r.chance(Math.min(0.95, 0.3 * e.shops * (e.neon >= 0.7 ? 1.6 : 1))) &&
          c(`bubbletea`, r.weighted(a), 5, !1, !0),
        e.neon >= 0.7 &&
          r.chance(0.25 * e.shops) &&
          c(`bubbletea`, r.weighted(a), 5, !1, !1),
        r.chance(0.22 * e.shops) && c(`breakfast`, `早餐店`, 6, !1, !1),
        r.chance(0.05 + 0.1 * e.neon) && c(`claw`, `夾娃娃機`, 6, !1, !0),
        r.chance(0.12) && c(`pharmacy`, `藥局`, 6, !1, !1),
        r.chance(0.1) && c(`lottery`, `彩券行`, 4, !1, !1),
        !u &&
          l !== `daan` &&
          l !== `xinyi` &&
          r.chance(0.25 * e.old * e.old + (l === `wanhua` ? 0.25 : 0)) &&
          c(`betelnut`, `檳榔`, 3, !0, !0),
        r.chance(0.08 + 0.1 * e.old) && c(`shrine`, `土地公廟`, 3, !0, !1));
    }
    return n;
  };
function cc(e, t, n, r, i) {
  let a = e.x - e.w / 2 - i,
    o = e.x + e.w / 2 + i,
    s = e.z - e.d / 2 - i,
    c = e.z + e.d / 2 + i,
    l = ((e.facing % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI),
    u = (e) => Math.abs(l - e) < 0.4 || Math.abs(l - e - 2 * Math.PI) < 0.4;
  return (
    u(0)
      ? (s = Math.min(s, t.minZ - 1))
      : u(Math.PI)
        ? (c = Math.max(c, t.maxZ + 1))
        : u(Math.PI / 2)
          ? (o = Math.max(o, t.maxX + 1))
          : u((3 * Math.PI) / 2) && (a = Math.min(a, t.minX - 1)),
    n >= a && n <= o && r >= s && r <= c
  );
}
var lc = {
    regionId: `taipei`,
    mapVersion: `taipei-v1`,
    seed: $s,
    drivingSide: `right`,
    bounds: js,
    laneWidth: ks,
    sidewalkHeight: As,
    majorRoads: zs,
    minorStreets: Bs,
    districts: Ps,
    districtExtras: Fs,
    landmarks: Vs,
    hills: Hs,
    spawns: Us,
    stations: Ws,
    namedPlaces: Qs,
    water: { westX: Ms, northZ: Ns, level: -0.8 },
    labels: oc,
    pois: sc,
  },
  Z = 16,
  uc = 64,
  dc = [],
  fc = 64,
  pc = class {
    roads = [];
    nodes = [];
    links = [];
    blocks = [];
    dataset;
    landmarks;
    districts;
    hills;
    bounds;
    side;
    laneWidth;
    sidewalkHeight;
    mrtStations = [];
    pois = [];
    allPois = [];
    claimedPois = [];
    spawns;
    labels;
    riverX;
    riverNorthZ;
    waterFn;
    levelBoxes;
    terrainFn;
    roadGrid = new Map();
    nodeGrid = new Map();
    streetNames;
    corners = [];
    roadLinks = new Map();
    linkCells = new Map();
    linkExt = { x0: 0, x1: -1, z0: 0, z1: -1 };
    nodeCells = new Map();
    nodeExt = { x0: 0, x1: -1, z0: 0, z1: -1 };
    astar = null;
    anyFlush = !1;
    constructor(e = {}) {
      let t = (this.dataset = e.dataset ?? lc);
      ((this.landmarks = t.landmarks),
        (this.districts = t.districts),
        (this.hills = t.hills),
        (this.bounds = t.bounds),
        (this.side = t.drivingSide === `left` ? -1 : 1),
        (this.laneWidth = t.laneWidth),
        (this.sidewalkHeight = t.sidewalkHeight),
        (this.waterLevel = t.water.level),
        (this.riverX = t.water.westX),
        (this.riverNorthZ = t.water.northZ),
        (this.waterFn = t.water.at ?? null),
        (this.levelBoxes = Float64Array.from(
          (t.water.levels ?? []).flatMap((e) => [
            e.minX,
            e.maxX,
            e.minZ,
            e.maxZ,
            e.level,
          ]),
        )),
        (this.terrainFn = t.terrainAt ?? null),
        (this.labels = t.labels),
        (this.streetNames = [...(e.streetNames ?? []), ...t.minorStreets]),
        this.buildRoads(),
        this.buildNodesAndLinks(),
        this.buildIndices(),
        this.buildCorners(),
        this.buildBlocks());
      let n = (e) => {
        if (e.snap === !1) return { x: e.x, z: e.z, heading: e.heading };
        let t = this.snapToSidewalk(e.x, e.z);
        return { x: t.x, z: t.z, heading: e.heading };
      };
      this.spawns = {
        start: n(t.spawns.start),
        hospital: n(t.spawns.hospital),
        police: n(t.spawns.police),
      };
      for (let e of t.stations) {
        let t = this.snapToSidewalk(e.x, e.z);
        this.mrtStations.push({ ...e, ex: t.x, ez: t.z, eh: t.facing });
      }
      let r = t.pois(this.blocks, t.seed),
        i = this.carveBlocks();
      for (let e of r)
        (!i.has(e.blockId) || this.onFrontage(e)) && this.pois.push(e);
      (this.allPois.push(...this.pois),
        this.allPois.forEach((e, t) => this.poiOrder.set(e, t)),
        e.poiClaims && this.findClaimedPois(e.poiClaims));
    }
    poiClaim = new Map();
    poiOrder = new Map();
    findClaimedPois(e) {
      for (let t of this.pois) {
        if (e.honor.has(t.id)) continue;
        let n = t.x - Math.sin(t.facing),
          r = t.z + Math.cos(t.facing),
          i = e.claims.find(
            (e) => n >= e.minX && n <= e.maxX && r >= e.minZ && r <= e.maxZ,
          );
        i && this.poiClaim.set(t, i.label);
      }
    }
    claimPois(e) {
      let t = this.poiClaim.size;
      return (
        e.length && this.findClaimedPois({ claims: [...e], honor: new Set() }),
        this.poiClaim.size - t
      );
    }
    settleClaimedPois(e = () => !1) {
      if (!this.poiClaim.size) return 0;
      let t = 0,
        n = [];
      for (let r of this.pois) {
        let i = this.poiClaim.get(r);
        i === void 0
          ? n.push(r)
          : vc(e, r)
            ? (this.poiClaim.delete(r), n.push(r))
            : ((r.claimed = i), this.claimedPois.push(r), t++);
      }
      if (t) {
        this.pois.length = 0;
        for (let e of n) this.pois.push(e);
      }
      return t;
    }
    honorPoi(e) {
      let t = this.claimedPois.findIndex((t) => t.id === e);
      if (t < 0) return !1;
      let n = this.claimedPois[t];
      (this.claimedPois.splice(t, 1),
        this.poiClaim.delete(n),
        (n.claimed = void 0));
      let r = this.poiOrder.get(n) ?? 1 / 0,
        i = this.pois.findIndex((e) => (this.poiOrder.get(e) ?? 0) > r);
      return (i < 0 && (i = this.pois.length), this.pois.splice(i, 0, n), !0);
    }
    isClaimCandidate(e) {
      return this.poiClaim.has(e);
    }
    nearestPois(e, t, n, r = 1) {
      return this.pois
        .filter((t) => t.kind === e)
        .sort(
          (e, r) =>
            (e.x - t) ** 2 + (e.z - n) ** 2 - ((r.x - t) ** 2 + (r.z - n) ** 2),
        )
        .slice(0, r);
    }
    buildRoads() {
      let e = this.dataset.majorRoads.map((e) => this.makeRoad(e, !0)),
        t = e.filter((e) => e.axis === `z`).sort((e, t) => e.at - t.at),
        n = e.filter((e) => e.axis === `x`).sort((e, t) => e.at - t.at);
      this.roads.push(...e);
      let r = this.landmarks.filter((e) => !e.zone),
        i = this.landmarks.filter((e) => e.zone === `pedestrian`),
        a = yc(t.map((e) => e.at)),
        o = (e, t, n) =>
          e.find((e) => e.at === t && n >= e.from - 1 && n <= e.to + 1) ?? null,
        s = [],
        c = (e, t) => {
          let n = bc(this.streetNames, e.axis, e.at, e.from, e.to);
          n &&
            ((e.name = { zh: n.zh, en: n.en }),
            n.sections && (e.sections = n.sections));
          let r = this.makeRoad(e, !1);
          (this.roads.push(r), n || s.push({ road: r, parent: t }));
        };
      for (let e = 0; e + 1 < a.length; e++) {
        let s = a[e],
          l = a[e + 1],
          u = (s + l) / 2,
          d = n.filter((e) => e.from <= u && e.to >= u);
        for (let e = 0; e + 1 < d.length; e++) {
          let n = d[e].at,
            a = d[e + 1].at,
            f = (n + a) / 2,
            p = i.some((e) => e.kind === `plaza` && xc(e, u, f, 60)) ? 3 : 2;
          if (l - s > 110)
            for (let t = 1; t < p; t++) {
              let o = Math.round(s + ((l - s) * t) / p),
                u = { minX: o - 8, maxX: o + 8, minZ: n, maxZ: a };
              if (r.some((e) => Sc(u, e, 4))) continue;
              let f = i.some((e) => Cc(`z`, o, n, a, e) >= 0.5);
              c(
                {
                  id: `ns-${o}-${n}`,
                  name: { zh: ``, en: `` },
                  axis: `z`,
                  at: o,
                  from: n,
                  to: a,
                  kind: `street`,
                  lanesPerDir: 1,
                  median: 0,
                  sidewalk: 3,
                  speedKmh: 40,
                  pedestrian: f,
                },
                d[e],
              );
            }
          if (a - n > 110)
            for (let e = 1; e < p; e++) {
              let u = Math.round(n + ((a - n) * e) / p),
                d = { minX: s, maxX: l, minZ: u - 8, maxZ: u + 8 };
              if (r.some((e) => Sc(d, e, 4))) continue;
              let f = i.some((e) => Cc(`x`, u, s, l, e) >= 0.5);
              c(
                {
                  id: `ew-${u}-${s}`,
                  name: { zh: ``, en: `` },
                  axis: `x`,
                  at: u,
                  from: s,
                  to: l,
                  kind: `street`,
                  lanesPerDir: 1,
                  median: 0,
                  sidewalk: 3,
                  speedKmh: 40,
                  pedestrian: f,
                },
                o(t, s, u),
              );
            }
        }
      }
      let l = this.labels;
      for (let { road: e, parent: t } of s) {
        if (!t) {
          e.name = l.unnamedLane();
          continue;
        }
        let n = t.axis === `z` ? t.at : e.at,
          r = t.axis === `z` ? e.at : t.at,
          i = this.streetLabel(t, n, r),
          a = l.houseNumber(t, t.axis === `z` ? r : n, 1);
        ((e.lane = { parent: t, no: a }), (e.name = l.laneName(i, a)));
      }
      this.roads.forEach((e, t) => (e.index = t));
      for (let e of this.roads) {
        let [t, n, r, i] = this.roadRect(e, e.halfTotal + 1);
        for (let a = Math.floor(r / Z); a <= Math.floor(i / Z); a++)
          for (let r = Math.floor(t / Z); r <= Math.floor(n / Z); r++) {
            let t = Q(r, a),
              n = this.roadGrid.get(t);
            (n || this.roadGrid.set(t, (n = [])), n.push(e));
          }
      }
    }
    makeRoad(e, t) {
      let n = e.lanesPerDir * this.laneWidth + e.median / 2;
      return {
        ...e,
        index: 0,
        halfWidth: n,
        halfTotal: n + e.sidewalk,
        major: t,
      };
    }
    roadRect(e, t) {
      return e.axis === `x`
        ? [e.from, e.to, e.at - t, e.at + t]
        : [e.at - t, e.at + t, e.from, e.to];
    }
    buildNodesAndLinks() {
      let e = (e, t) => `${Math.round(e * 10)},${Math.round(t * 10)}`,
        t = new Map(),
        n = (n, r) => {
          let i = e(n, r),
            a = t.get(i);
          return (
            a ||
              ((a = {
                id: this.nodes.length,
                x: n,
                z: r,
                roads: [],
                halfX: 0,
                halfZ: 0,
                signal: !1,
                out: [],
                in: [],
                kind: `cross`,
              }),
              t.set(i, a),
              this.nodes.push(a)),
            a
          );
        },
        r = this.roads.filter((e) => e.axis === `x`),
        i = this.roads.filter((e) => e.axis === `z`),
        a = 0.5;
      for (let e of r)
        for (let t of i) {
          if (
            t.at < e.from - a ||
            t.at > e.to + a ||
            e.at < t.from - a ||
            e.at > t.to + a
          )
            continue;
          let r = n(t.at, e.at);
          (r.roads.includes(e) || r.roads.push(e),
            r.roads.includes(t) || r.roads.push(t));
        }
      for (let e of this.roads)
        for (let t of [e.from, e.to]) {
          let [r, i] = e.axis === `x` ? [t, e.at] : [e.at, t],
            a = n(r, i);
          a.roads.includes(e) || a.roads.push(e);
        }
      for (let e of this.nodes) {
        let t = 0,
          n = 0;
        for (let r of e.roads)
          r.axis === `z`
            ? (t = Math.max(t, r.halfWidth))
            : (n = Math.max(n, r.halfWidth));
        ((e.halfX = t), (e.halfZ = n));
        let r = 0;
        for (let t of e.roads) {
          let n = t.axis === `x` ? e.x : e.z;
          (n > t.from + a && r++, n < t.to - a && r++);
        }
        ((e.kind =
          r <= 1 ? `end` : r === 2 ? `corner` : r === 3 ? `tee` : `cross`),
          (e.signal =
            r >= 3 &&
            e.roads.some((e) => e.major) &&
            !e.roads.every((e) => e.pedestrian)));
      }
      for (let e of this.roads) {
        let t = this.nodes
          .filter((t) => t.roads.includes(e))
          .sort((t, n) => (e.axis === `x` ? t.x - n.x : t.z - n.z));
        for (let n = 0; n + 1 < t.length; n++) {
          let r = t[n],
            i = t[n + 1];
          this.addLinkPair(e, r, i);
        }
      }
      for (let e of this.nodes) {
        let t = Q(Math.floor(e.x / Z), Math.floor(e.z / Z)),
          n = this.nodeGrid.get(t);
        (n || this.nodeGrid.set(t, (n = [])), n.push(e));
      }
    }
    addLinkPair(e, t, n) {
      let r = (t, n) => {
          let r = n.x - t.x,
            i = n.z - t.z,
            a = Math.hypot(r, i),
            o = r / a,
            s = i / a,
            c =
              (e.axis === `x` ? t.halfX : t.halfZ) +
              (t.kind === `end` ? 0 : 3.5),
            l =
              (e.axis === `x` ? n.halfX : n.halfZ) +
              (n.kind === `end` ? 0 : 3.5),
            u = t.x + o * c,
            d = t.z + s * c,
            f = n.x - o * l,
            p = n.z - s * l,
            m = {
              id: this.links.length,
              road: e,
              from: t.id,
              to: n.id,
              sx: u,
              sz: d,
              ex: f,
              ez: p,
              dx: o,
              dz: s,
              rx: -s,
              rz: o,
              heading: Math.atan2(o, -s),
              length: Math.max(0.1, a - c - l),
              lanes: e.lanesPerDir,
              speed: e.speedKmh / 3.6,
              reverse: -1,
              pedestrian: !!e.pedestrian,
            };
          return (this.links.push(m), t.out.push(m.id), n.in.push(m.id), m);
        },
        i = r(t, n),
        a = r(n, t);
      return ((i.reverse = a.id), (a.reverse = i.id), i);
    }
    buildIndices() {
      for (let e of this.links) {
        let t = this.roadLinks.get(e.road);
        (t || this.roadLinks.set(e.road, (t = [])), t.push(e));
      }
      let e = this.linkExt;
      for (let t of this.links) {
        let n = this.laneOffset(t, 0),
          r = this.laneOffset(t, Math.max(0, t.lanes - 1)),
          i = t.sx + t.dx * t.length,
          a = t.sz + t.dz * t.length,
          o = 1 / 0,
          s = -1 / 0,
          c = 1 / 0,
          l = -1 / 0;
        for (let [e, u] of [
          [t.sx, t.sz],
          [i, a],
        ])
          for (let i of [n, r, -n, -r]) {
            let n = e + t.rx * i,
              r = u + t.rz * i;
            (n < o && (o = n),
              n > s && (s = n),
              r < c && (c = r),
              r > l && (l = r));
          }
        let u = Math.floor(o / uc),
          d = Math.floor(s / uc),
          f = Math.floor(c / uc),
          p = Math.floor(l / uc);
        for (let e = f; e <= p; e++)
          for (let n = u; n <= d; n++) {
            let r = Q(n, e),
              i = this.linkCells.get(r);
            (i || this.linkCells.set(r, (i = [])), i.push(t));
          }
        (wc(e, u, f), wc(e, d, p));
      }
      for (let e of this.nodes) {
        let t = Math.floor(e.x / fc),
          n = Math.floor(e.z / fc),
          r = Q(t, n),
          i = this.nodeCells.get(r);
        (i || this.nodeCells.set(r, (i = [])),
          i.push(e),
          wc(this.nodeExt, t, n));
      }
    }
    lanePoint(e, t, n, r) {
      let i = es(e.road.median / 2, t, this.laneWidth);
      return (
        (r.x = e.sx + e.dx * n + is(e, i, this.side)),
        (r.z = e.sz + e.dz * n + as(e, i, this.side)),
        r
      );
    }
    laneOffset(e, t) {
      return es(e.road.median / 2, t, this.laneWidth);
    }
    buildCorners() {
      let e = 0.5,
        t = (e, t) => (!e || t.halfWidth > e.halfWidth ? t : e),
        n = (e, t) => {
          if (!e || !t || e.pedestrian || t.pedestrian) return 0;
          let n = Math.min(
            e.halfTotal - e.halfWidth,
            t.halfTotal - t.halfWidth,
          );
          return Math.max(0, Math.min(e.major && t.major ? 2 : 1.4, n - 1));
        };
      for (let r of this.nodes) {
        let i = null,
          a = null,
          o = null,
          s = null;
        for (let n of r.roads)
          n.axis === `x`
            ? (r.x > n.from + e && (s = t(s, n)),
              r.x < n.to - e && (o = t(o, n)))
            : (r.z > n.from + e && (i = t(i, n)),
              r.z < n.to - e && (a = t(a, n)));
        let c = new Float32Array(4),
          l = new Float32Array(4),
          u = new Float32Array(4),
          d = [
            [s, i],
            [o, i],
            [s, a],
            [o, a],
          ];
        for (let e = 0; e < 4; e++) {
          let [t, r] = d[e];
          ((c[e] = n(t, r)),
            (l[e] = r ? r.halfWidth : 0),
            (u[e] = t ? t.halfWidth : 0));
        }
        this.corners[r.id] = { r: c, hx: l, hz: u };
      }
    }
    inCurbCorner(e, t) {
      let n = Math.floor(e / Z),
        r = Math.floor(t / Z);
      for (let i = -1; i <= 1; i++)
        for (let a = -1; a <= 1; a++) {
          let o = this.nodeGrid.get(Q(n + a, r + i));
          if (o)
            for (let n = 0; n < o.length; n++) {
              let r = o[n],
                i = this.corners[r.id];
              if (!i) continue;
              let a = e >= r.x ? 1 : -1,
                s = t >= r.z ? 1 : -1,
                c = (s > 0 ? 2 : 0) + +(a > 0),
                l = i.r[c];
              if (l <= 0) continue;
              let u = (e - r.x) * a - i.hx[c],
                d = (t - r.z) * s - i.hz[c];
              if (u < 0 || d < 0 || u > l || d > l) continue;
              let f = l - u,
                p = l - d;
              if (f * f + p * p > l * l) return !0;
            }
        }
      return !1;
    }
    buildBlocks() {
      let e = this.bounds,
        t = this.roads
          .filter((e) => e.major && e.axis === `z`)
          .sort((e, t) => e.at - t.at),
        n = this.roads
          .filter((e) => e.major && e.axis === `x`)
          .sort((e, t) => e.at - t.at),
        r = [e.minX, ...yc(t.map((e) => e.at)), e.maxX],
        i = (e, n) =>
          e === 0 || e === r.length - 1
            ? r[e]
            : (t.find(
                (t) => t.at === r[e] && n >= t.from - 1 && n <= t.to + 1,
              ) ?? r[e]),
        a = (e) => (typeof e == `number` ? e : e.at),
        o = (e) => (typeof e == `number` ? 0 : e.halfTotal);
      for (let t = 0; t + 1 < r.length; t++) {
        let s = (r[t] + r[t + 1]) / 2,
          c = [e.minZ, ...n.filter((e) => e.from <= s && e.to >= s), e.maxZ];
        for (let e = 0; e + 1 < c.length; e++) {
          let n = c[e],
            r = c[e + 1],
            l = (a(n) + a(r)) / 2,
            u = i(t, l),
            d = i(t + 1, l),
            f = this.roads
              .filter(
                (e) =>
                  !e.major &&
                  e.axis === `z` &&
                  e.at > a(u) &&
                  e.at < a(d) &&
                  e.from <= l &&
                  e.to >= l,
              )
              .sort((e, t) => e.at - t.at),
            p = this.roads
              .filter(
                (e) =>
                  !e.major &&
                  e.axis === `x` &&
                  e.at > a(n) &&
                  e.at < a(r) &&
                  e.from <= s &&
                  e.to >= s,
              )
              .sort((e, t) => e.at - t.at),
            m = [u, ...f, d],
            h = [n, ...p, r];
          for (let e = 0; e + 1 < m.length; e++)
            for (let t = 0; t + 1 < h.length; t++) {
              let n = m[e],
                r = m[e + 1],
                i = h[t],
                s = h[t + 1],
                c = a(n) + o(n),
                l = a(r) - o(r),
                u = a(i) + o(i),
                d = a(s) - o(s);
              if (l - c < 20 || d - u < 20) continue;
              let f = (c + l) / 2,
                p = (u + d) / 2,
                g = {
                  id: this.blocks.length,
                  minX: c,
                  maxX: l,
                  minZ: u,
                  maxZ: d,
                  district: this.districtAt(f, p, !0),
                  reserved: this.landmarks.filter(
                    (e) =>
                      !e.zone &&
                      Sc({ minX: c, maxX: l, minZ: u, maxZ: d }, e, 0),
                  ),
                  zones: this.landmarks.filter(
                    (e) =>
                      e.zone &&
                      Sc({ minX: c, maxX: l, minZ: u, maxZ: d }, e, 0),
                  ),
                  north: typeof i == `number` ? null : i,
                  south: typeof s == `number` ? null : s,
                  west: typeof n == `number` ? null : n,
                  east: typeof r == `number` ? null : r,
                  edge:
                    typeof i == `number` ||
                    typeof s == `number` ||
                    typeof n == `number` ||
                    typeof r == `number`,
                };
              this.blocks.push(g);
            }
        }
      }
    }
    carveBlocks() {
      let e = 0.05,
        t = new Set(),
        n = [],
        r = new Set(),
        i = this.blocks.length;
      for (let a = 0; a < i; a++) {
        let i = [this.blocks[a]];
        for (let t of this.roads) {
          let [n, r, a, o] = this.roadRect(t, t.halfTotal),
            s = [];
          for (let c of i)
            c.maxX > n + e && c.minX < r - e && c.maxZ > a + e && c.minZ < o - e
              ? s.push(...gc(c, n, r, a, o, t, 20))
              : s.push(c);
          i = s;
        }
        if (i.length === 1 && i[0] === this.blocks[a]) continue;
        let o = this.blocks[a];
        (t.add(o.id),
          i.sort(
            (e, t) =>
              (t.maxX - t.minX) * (t.maxZ - t.minZ) -
              (e.maxX - e.minX) * (e.maxZ - e.minZ),
          ));
        let s = i.shift();
        (s
          ? Object.assign(o, {
              minX: s.minX,
              maxX: s.maxX,
              minZ: s.minZ,
              maxZ: s.maxZ,
              north: s.north,
              south: s.south,
              east: s.east,
              west: s.west,
            })
          : r.add(o),
          i.forEach((e, t) => (e.id = hc + o.id * 8 + t)),
          n.push(...i));
      }
      if (!t.size) return t;
      if (r.size) {
        let e = this.blocks.filter((e) => !r.has(e));
        ((this.blocks.length = 0), this.blocks.push(...e));
      }
      for (let e of n) this.blocks.push(e);
      for (let e of this.blocks) {
        if (!t.has(e.id) && e.id < hc) continue;
        let n = { minX: e.minX, maxX: e.maxX, minZ: e.minZ, maxZ: e.maxZ };
        ((e.reserved = this.landmarks.filter((e) => !e.zone && Sc(n, e, 0))),
          (e.zones = this.landmarks.filter((e) => e.zone && Sc(n, e, 0))),
          (e.edge = !e.north || !e.south || !e.west || !e.east));
      }
      return t;
    }
    onFrontage(e) {
      let t = this.blocks.find((t) => t.id === e.blockId);
      if (!t) return !1;
      let n = 0.01,
        r = e.width / 2,
        i = e.x - r >= t.minX - n && e.x + r <= t.maxX + n,
        a = e.z - r >= t.minZ - n && e.z + r <= t.maxZ + n;
      return (
        (!!t.north && Math.abs(e.z - t.minZ) < n && i) ||
        (!!t.south && Math.abs(e.z - t.maxZ) < n && i) ||
        (!!t.west && Math.abs(e.x - t.minX) < n && a) ||
        (!!t.east && Math.abs(e.x - t.maxX) < n && a)
      );
    }
    districtAt(e, t, n = !1) {
      let r = this.districts;
      for (let i of this.dataset.districtExtras)
        if (
          (!n || i.gen !== !1) &&
          e >= i.minX &&
          e < i.maxX &&
          t >= i.minZ &&
          t < i.maxZ
        ) {
          let e = r.find((e) => e.id === i.id);
          if (e) return e;
        }
      for (let n of r)
        if (e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ) return n;
      return r[r.length - 1];
    }
    placeAt(e, t) {
      let n = null,
        r = 1 / 0;
      for (let i of this.dataset.namedPlaces) {
        if (e < i.minX || e > i.maxX || t < i.minZ || t > i.maxZ) continue;
        let a = (i.maxX - i.minX) * (i.maxZ - i.minZ);
        a < r && ((r = a), (n = i));
      }
      return n;
    }
    locationLabel(e, t) {
      let n = this.placeAt(e, t);
      if (n) return n.name;
      let r = this.roadAt(e, t);
      return r ? this.streetLabel(r, e, t).full : this.districtAt(e, t).name;
    }
    inCity(e, t) {
      let n = this.bounds;
      return e >= n.minX && e <= n.maxX && t >= n.minZ && t <= n.maxZ;
    }
    roadsNear(e, t) {
      return this.roadGrid.get(Q(Math.floor(e / Z), Math.floor(t / Z))) ?? mc;
    }
    roadAt(e, t) {
      let n = null,
        r = 1 / 0;
      for (let i of this.roadsNear(e, t)) {
        let a = i.axis === `x` ? e : t;
        if (a < i.from - 2 || a > i.to + 2) continue;
        let o = Math.abs((i.axis === `x` ? t : e) - i.at);
        if (o > i.halfTotal + 1) continue;
        let s = o / Math.max(1, i.halfWidth) - (i.major ? 0.25 : 0);
        s < r && ((r = s), (n = i));
      }
      return n;
    }
    streetLabel(e, t, n) {
      return this.labels.streetLabel(e, t, n);
    }
    address(e, t, n) {
      let r = e ?? this.roadAt(t, n) ?? this.snapToSidewalk(t, n).road;
      if (!r) return this.labels.cityAddress();
      let i = r.axis === `x` ? t : n,
        a = (r.axis === `x` ? n - r.at : t - r.at) >= 0 ? 1 : -1,
        o = this.labels.houseNumber(r, i, a),
        s = this.streetLabel(r, t, n);
      return this.labels.address(s, o);
    }
    surfaceAt(e, t) {
      if (
        e < this.riverX ||
        t < this.riverNorthZ ||
        (this.waterFn !== null && this.waterFn(e, t))
      )
        return `water`;
      let n = null;
      for (let r of this.roadsNear(e, t)) {
        let i = r.axis === `x` ? e : t,
          a = Math.abs((r.axis === `x` ? t : e) - r.at);
        if (i < r.from - r.halfTotal || i > r.to + r.halfTotal) continue;
        let o = i >= r.from - 0.01 && i <= r.to + 0.01;
        if (a <= r.halfWidth && o) return r.pedestrian ? `plaza` : `road`;
        a <= r.halfTotal && o && (n = `sidewalk`);
      }
      if (n === `sidewalk` && this.inCurbCorner(e, t)) return `road`;
      if (n) return n;
      if (!this.inCity(e, t)) return `terrain`;
      for (let n of this.landmarks)
        if (
          n.kind === `park` &&
          Math.abs(e - n.x) <= n.w / 2 &&
          Math.abs(t - n.z) <= n.d / 2
        )
          return `park`;
      return `lot`;
    }
    nodeAt(e, t) {
      let n = Math.floor(e / Z),
        r = Math.floor(t / Z);
      for (let i = -1; i <= 1; i++)
        for (let a = -1; a <= 1; a++) {
          let o = this.nodeGrid.get(Q(n + a, r + i));
          if (o) {
            for (let n of o)
              if (
                Math.abs(e - n.x) <= n.halfX &&
                Math.abs(t - n.z) <= n.halfZ &&
                n.kind !== `end`
              )
                return n;
          }
        }
      return null;
    }
    hillHeight(e, t) {
      let n = this.bounds,
        r = Math.max(n.minX - e, 0, e - n.maxX),
        i = Math.max(n.minZ - t, 0, t - n.maxZ);
      if (r <= 0 && i <= 0) return 0;
      let a = Math.sqrt(r * r + i * i),
        o = 0,
        s = this.riverX,
        c = this.riverNorthZ,
        l = this.hills,
        u = t >= c && e >= s;
      for (let n = 0; n < l.length; n++) {
        let r = l[n];
        if (u && (r.z < c || r.x < s)) continue;
        let i = e - r.x,
          a = t - r.z,
          d = (i * i + a * a) / (r.radius * r.radius);
        if (d >= 9) continue;
        let f = 1,
          p = r.fadeZ;
        if (p) {
          let e = p[0],
            n = p[1];
          if (t >= n) continue;
          if (t > e) {
            let r = (n - t) / (n - e);
            f = r * r * (3 - 2 * r);
          }
        }
        o += r.height * f * Math.exp(-2.302585 * d);
      }
      let d = Math.min(1, a / 140);
      return o * d * d * (3 - 2 * d);
    }
    terrainLift(e, t) {
      return this.terrainFn === null ? 0 : this.terrainFn(e, t);
    }
    groundHeight(e, t) {
      let n = this.baseGround(e, t);
      return this.terrainFn === null ? n : n + this.terrainFn(e, t);
    }
    baseGround(e, t) {
      switch (this.surfaceAt(e, t)) {
        case `road`:
        case `crosswalk`:
          return 0;
        case `plaza`:
          return 0.02;
        case `water`:
          return this.levelBoxes.length ? this.waterLevelAt(e, t) - 1.5 : -3;
        case `terrain`:
          return this.sidewalkHeight + this.hillHeight(e, t);
        case `sidewalk`:
          return this.anyFlush && this.isFlush(e, t) ? 0 : this.sidewalkHeight;
        default:
          return this.sidewalkHeight;
      }
    }
    markFlush(e) {
      for (let t of this.roads) !t.flush && e(t) && (t.flush = !0);
      this.anyFlush = this.roads.some((e) => e.flush);
    }
    isFlush(e, t) {
      if (!this.anyFlush) return !1;
      let n = !1;
      for (let r of this.roadsNear(e, t)) {
        let i = r.axis === `x` ? e : t;
        if (i < r.from - 0.01 || i > r.to + 0.01) continue;
        let a = Math.abs((r.axis === `x` ? t : e) - r.at);
        if (!(a > r.halfTotal || a <= r.halfWidth)) {
          if (!r.flush) return !1;
          n = !0;
        }
      }
      return n;
    }
    waterLevel;
    waterLevelAt(e, t) {
      let n = this.levelBoxes;
      for (let r = 0; r < n.length; r += 5)
        if (e >= n[r] && e <= n[r + 1] && t >= n[r + 2] && t <= n[r + 3])
          return n[r + 4];
      return this.waterLevel;
    }
    snapToSidewalk(e, t) {
      let n = { x: e, z: t, facing: 0, road: null },
        r = 1 / 0,
        i = new Set();
      for (let n = -3; n <= 3; n++)
        for (let r = -3; r <= 3; r++)
          for (let a of this.roadGrid.get(
            Q(Math.floor(e / Z) + r, Math.floor(t / Z) + n),
          ) ?? mc)
            i.add(a);
      if (!i.size) for (let e of this.roads) i.add(e);
      for (let a of i) {
        if (a.pedestrian) continue;
        let i = a.halfWidth + a.sidewalk * 0.5;
        for (let o of [-1, 1]) {
          let s = Math.max(
            a.from + 2,
            Math.min(a.to - 2, a.axis === `x` ? e : t),
          );
          for (let c of _c) {
            let l = s + c;
            if (l < a.from || l > a.to) continue;
            let u = a.axis === `x` ? l : a.at + o * i,
              d = a.axis === `x` ? a.at + o * i : l,
              f = Math.hypot(u - e, d - t);
            if (!(f >= r) && this.surfaceAt(u, d) === `sidewalk`) {
              ((r = f),
                (n = {
                  x: u,
                  z: d,
                  facing:
                    a.axis === `x`
                      ? o > 0
                        ? 0
                        : Math.PI
                      : o > 0
                        ? -Math.PI / 2
                        : Math.PI / 2,
                  road: a,
                }));
              break;
            }
          }
        }
      }
      return n;
    }
    nearestLink(e, t, n = !1) {
      let r = this.roadsNear(e, t);
      return (
        (r.length ? this.nearestLinkIn(r, e, t, n) : null) ??
        this.nearestLinkRing(e, t, n)
      );
    }
    linkCandidate(e, t, n, r, i) {
      if (e.pedestrian && !r) return i;
      let a = t - e.sx,
        o = n - e.sz,
        s = Math.max(0, Math.min(e.length, a * e.dx + o * e.dz)),
        c = os(e, a, o, this.side);
      if (c < 0) return i;
      let l = (c - e.road.median / 2) / this.laneWidth - 0.5,
        u = Math.max(0, Math.min(e.lanes - 1, Math.round(l))),
        d = e.sx + e.dx * s + is(e, this.laneOffset(e, u), this.side),
        f = e.sz + e.dz * s + as(e, this.laneOffset(e, u), this.side),
        p = Math.hypot(d - t, f - n);
      return !i || p < i.dist || (p === i.dist && e.id < i.link.id)
        ? { link: e, s, lane: u, dist: p }
        : i;
    }
    nearestLinkIn(e, t, n, r) {
      let i = null;
      for (let a = 0; a < e.length; a++) {
        let o = this.roadLinks.get(e[a]);
        if (o)
          for (let e = 0; e < o.length; e++)
            i = this.linkCandidate(o[e], t, n, r, i);
      }
      return i;
    }
    nearestLinkRing(e, t, n) {
      let r = null,
        i = this.linkExt;
      if (i.x1 < i.x0) return null;
      let a = Math.floor(e / uc),
        o = Math.floor(t / uc),
        s = Math.max(a - i.x0, i.x1 - a, o - i.z0, i.z1 - o),
        c = Math.max(0, i.x0 - a, a - i.x1, i.z0 - o, o - i.z1);
      for (let l = c; l <= s; l++) {
        let s = Math.max(o - l, i.z0),
          c = Math.min(o + l, i.z1);
        for (let u = s; u <= c; u++) {
          let s = u === o - l || u === o + l || l === 0 ? 1 : 2 * l;
          for (let o = a - l; o <= a + l; o += s) {
            if (o < i.x0 || o > i.x1) continue;
            let a = this.linkCells.get(Q(o, u));
            if (a)
              for (let i = 0; i < a.length; i++)
                r = this.linkCandidate(a[i], e, t, n, r);
          }
        }
        if (r && r.dist < l * uc - 0.001) break;
      }
      return r;
    }
    nearestNode(e, t, n) {
      let r = this.nodes[0],
        i = 1 / 0,
        a = this.nodeExt;
      if (a.x1 < a.x0) return r;
      let o = Math.floor(e / fc),
        s = Math.floor(t / fc),
        c = Math.max(o - a.x0, a.x1 - o, s - a.z0, a.z1 - s),
        l = Math.max(0, a.x0 - o, o - a.x1, a.z0 - s, s - a.z1);
      for (let u = l; u <= c; u++) {
        let c = Math.max(s - u, a.z0),
          l = Math.min(s + u, a.z1);
        for (let d = c; d <= l; d++) {
          let c = d === s - u || d === s + u || u === 0 ? 1 : 2 * u;
          for (let s = o - u; s <= o + u; s += c) {
            if (s < a.x0 || s > a.x1) continue;
            let o = this.nodeCells.get(Q(s, d));
            if (o)
              for (let a = 0; a < o.length; a++) {
                let s = o[a];
                if (n && !n(s)) continue;
                let c = (s.x - e) ** 2 + (s.z - t) ** 2;
                (c < i || (c === i && s.id < r.id)) && ((i = c), (r = s));
              }
          }
        }
        let d = u * fc - 0.001;
        if (d > 0 && i < d * d) break;
      }
      return r;
    }
    findRoute(e, t, n, r, i = !1) {
      let a = this.nearestNode(e, t, (e) => e.kind !== `end`),
        o = this.nearestNode(n, r, (e) => e.kind !== `end`),
        s = (this.astar ??= new Tc(this.nodes.length, this.links.length + 2));
      s.begin();
      let { g: c, f: l, came: u, closed: d } = s;
      for (
        s.touch(a.id),
          s.touch(o.id),
          c[a.id] = 0,
          l[a.id] = Math.hypot(a.x - o.x, a.z - o.z),
          s.push(a.id);
        s.size;
      ) {
        let e = s.pop();
        if (e === o.id) break;
        if (!d[e]) {
          d[e] = 1;
          for (let t of this.nodes[e].out) {
            let n = this.links[t];
            if (n.pedestrian && !i) continue;
            let r = n.to;
            if ((s.touch(r), d[r])) continue;
            let a =
              c[e] +
              n.length / Math.max(5, n.speed) +
              (this.nodes[r].signal ? 4 : 0);
            a < c[r] &&
              ((c[r] = a),
              (u[r] = e),
              (l[r] =
                a +
                Math.hypot(this.nodes[r].x - o.x, this.nodes[r].z - o.z) / 16),
              s.decreased(r),
              s.push(r));
          }
        }
      }
      if (c[o.id] === 1 / 0) return [];
      let f = [];
      for (let e = o.id; e !== -1; e = u[e]) f.push(e);
      return f.reverse();
    }
    fwdLinks = null;
    routeAnchor(e, t, n = !1) {
      if (!this.fwdLinks) {
        this.fwdLinks = new Map();
        for (let e of this.links) {
          let t = this.nodes[e.from],
            n = this.nodes[e.to],
            r = e.road.axis === `x` ? t.x : t.z;
          if ((e.road.axis === `x` ? n.x : n.z) <= r) continue;
          let i = this.fwdLinks.get(e.road);
          (i || this.fwdLinks.set(e.road, (i = [])), i.push(e));
        }
        for (let e of this.fwdLinks.values())
          e.sort((e, t) =>
            e.road.axis === `x`
              ? this.nodes[e.from].x - this.nodes[t.from].x
              : this.nodes[e.from].z - this.nodes[t.from].z,
          );
      }
      let r = new Set(),
        i = (n) => {
          for (let i = -n; i <= n; i++)
            for (let a = -n; a <= n; a++)
              for (let n of this.roadGrid.get(
                Q(Math.floor(e / Z) + a, Math.floor(t / Z) + i),
              ) ?? mc)
                r.add(n);
        },
        a = 2;
      for (; a <= 8 && !r.size; a *= 2) i(a);
      if (!r.size) for (let e of this.roads) r.add(e);
      let o = () => {
          let i = [];
          for (let a of r) {
            if ((a.pedestrian && !n) || !this.fwdLinks.get(a)?.length) continue;
            let r = a.axis === `x` ? e : t,
              o = Math.max(a.from, Math.min(a.to, r)),
              s = Math.abs((a.axis === `x` ? t : e) - a.at),
              c = Math.max(0, s - a.halfTotal) + Math.abs(r - o);
            i.push({
              r: a,
              along: o,
              off: c,
              s: c + (0.5 * s) / (a.halfTotal + 1) - (a.major ? 0.05 : 0),
            });
          }
          return i.sort((e, t) => e.s - t.s);
        },
        s = o();
      if (!s.length && a <= 8) {
        for (let e of this.roads) r.add(e);
        s = o();
      }
      let c = s[0],
        l = (n) =>
          this.walkClear(
            e,
            t,
            n.r.axis === `x` ? n.along : n.r.at,
            n.r.axis === `x` ? n.r.at : n.along,
          );
      if (c && c.off > 0.5 && !l(c)) {
        let e = c,
          t = (t) =>
            t.slice(0, 10).find((t) => t.r !== e.r && t.s < e.s + 150 && l(t)),
          n = t(s);
        (!n && a <= 8 && (i(8), (s = o()), (n = t(s))), (c = n ?? e));
      }
      if (!c) return null;
      let u = c.r,
        d = c.along,
        f = c.off,
        p = this.fwdLinks.get(u),
        m = u.axis === `x`,
        h = p[p.length - 1];
      for (let e of p)
        if ((m ? this.nodes[e.to].x : this.nodes[e.to].z) >= d) {
          h = e;
          break;
        }
      let g = f === 0 ? this.nodeAt(e, t) : null,
        _ = g && (g.id === h.from || g.id === h.to) ? g.id : -1;
      return {
        link: h,
        along: d,
        x: m ? d : u.at,
        z: m ? u.at : d,
        off: f,
        node: _,
      };
    }
    walkGrid = null;
    walkRects(e, t) {
      if (!this.walkGrid) {
        let e = new Map(),
          t = (t) => {
            for (let n = Math.floor(t.z0 / 32); n <= Math.floor(t.z1 / 32); n++)
              for (
                let r = Math.floor(t.x0 / 32);
                r <= Math.floor(t.x1 / 32);
                r++
              ) {
                let i = Q(r, n),
                  a = e.get(i);
                (a || e.set(i, (a = [])), a.push(t));
              }
          },
          n = (e) =>
            this.roads.some((t) => {
              let [n, r, i, a] = this.roadRect(t, t.halfWidth);
              return (
                e.x + e.w / 2 > n &&
                e.x - e.w / 2 < r &&
                e.z + e.d / 2 > i &&
                e.z - e.d / 2 < a
              );
            }),
          r = (e) =>
            !!e.zone ||
            e.kind === `park` ||
            e.kind === `plaza` ||
            e.kind === `station`;
        for (let e of this.landmarks)
          r(e) ||
            n(e) ||
            t({
              x0: e.x - e.w / 2,
              x1: e.x + e.w / 2,
              z0: e.z - e.d / 2,
              z1: e.z + e.d / 2,
              holes: [],
            });
        for (let e of this.blocks)
          t({
            x0: e.minX,
            x1: e.maxX,
            z0: e.minZ,
            z1: e.maxZ,
            holes: [...e.reserved, ...e.zones]
              .filter(r)
              .map((e) => [
                e.x - e.w / 2,
                e.x + e.w / 2,
                e.z - e.d / 2,
                e.z + e.d / 2,
              ]),
          });
        this.walkGrid = e;
      }
      return this.walkGrid.get(Q(Math.floor(e / 32), Math.floor(t / 32))) ?? dc;
    }
    walkObstacle(e, t, n = 0.4) {
      for (let r of this.walkRects(e, t))
        if (
          !(e <= r.x0 + n || e >= r.x1 - n || t <= r.z0 + n || t >= r.z1 - n) &&
          !r.holes.some((n) => e > n[0] && e < n[1] && t > n[2] && t < n[3])
        )
          return r;
      return null;
    }
    walkHomes(e, t) {
      let n = [];
      for (let r of this.walkRects(e, t))
        e > r.x0 &&
          e < r.x1 &&
          t > r.z0 &&
          t < r.z1 &&
          n.push({
            r,
            x: e,
            z: t,
            depth: Math.min(e - r.x0, r.x1 - e, t - r.z0, r.z1 - t),
          });
      return n;
    }
    walkHome(e, t, n, r, i = 0) {
      for (let a of r)
        if (a.r === e && Math.hypot(t - a.x, n - a.z) <= a.depth + 3 + i)
          return !0;
      return !1;
    }
    walkWater(e, t, n) {
      return e < this.riverX ||
        t < this.riverNorthZ ||
        (this.waterFn !== null && this.waterFn(e, t))
        ? !n.some((n) => e > n.r.x0 && e < n.r.x1 && t > n.r.z0 && t < n.r.z1)
        : !1;
    }
    walkClear(e, t, n, r, i = !1, a) {
      let o = Math.hypot(n - e, r - t);
      if (o < 0.5) return !0;
      let s = a ?? [...this.walkHomes(e, t), ...this.walkHomes(n, r)],
        c = Math.ceil(o);
      for (let a = 1; a < c; a++) {
        let l = a / c,
          u = e + (n - e) * l,
          d = t + (r - t) * l,
          f = this.walkObstacle(u, d);
        if (f && !this.walkHome(f, u, d, s)) return !1;
        let p = Math.min(l, 1 - l) * o;
        if (
          (p > 12 && this.walkWater(u, d, s)) ||
          (i && p > 2.5 && this.surfaceAt(u, d) === `road`)
        )
          return !1;
      }
      return !0;
    }
    walkPath(e, t, n, r) {
      let i = [...this.walkHomes(e, t), ...this.walkHomes(n, r)];
      return (
        this.walkPathIn(e, t, n, r, 40, i) ??
        this.walkPathIn(e, t, n, r, 160, i)
      );
    }
    walkPathIn(e, t, n, r, i, a) {
      let o = Math.min(e, n) - i,
        s = Math.min(t, r) - i,
        c = Math.max(e, n) + i - o,
        l = Math.max(t, r) + i - s,
        u = Math.max(2, Math.ceil(Math.sqrt((c * l) / 2e4) * 2) / 2);
      if (u > 5) return null;
      let d = Math.ceil(c / u),
        f = Math.ceil(l / u),
        p = (e, t) =>
          Math.max(0, Math.min(d - 1, Math.floor((e - o) / u))) +
          Math.max(0, Math.min(f - 1, Math.floor((t - s) / u))) * d,
        m = p(e, t),
        h = p(n, r),
        g = new Int8Array(d * f).fill(-1),
        _ = (e) => {
          if (e === m || e === h) return !1;
          if (g[e] < 0) {
            let t = o + ((e % d) + 0.5) * u,
              n = s + (Math.floor(e / d) + 0.5) * u,
              r = this.walkObstacle(t, n, 0.4 - u / 2);
            g[e] =
              (r && !this.walkHome(r, t, n, a, u * 0.75)) ||
              this.walkWater(t, n, a)
                ? 1
                : 0;
          }
          return g[e] === 1;
        },
        v = new Float32Array(d * f).fill(1 / 0),
        y = new Int32Array(d * f).fill(-1),
        b = new Uint8Array(d * f),
        ee = h % d,
        x = Math.floor(h / d),
        S = [],
        C = [],
        w = (e, t) => {
          let n = S.length;
          for (S.push(t), C.push(e); n > 0;) {
            let t = (n - 1) >> 1;
            if (C[t] <= e) break;
            ((S[n] = S[t]), (C[n] = C[t]), (n = t));
          }
          ((S[n] = t), (C[n] = e));
        },
        T = () => {
          let e = S[0],
            t = S.pop(),
            n = C.pop(),
            r = S.length;
          if (r) {
            let e = 0;
            for (;;) {
              let t = 2 * e + 1;
              if (t >= r) break;
              let i = t + 1 < r && C[t + 1] < C[t] ? t + 1 : t;
              if (C[i] >= n) break;
              ((S[e] = S[i]), (C[e] = C[i]), (e = i));
            }
            ((S[e] = t), (C[e] = n));
          }
          return e;
        };
      ((v[m] = 0), w(0, m));
      let te = !1;
      for (; S.length;) {
        let e = T();
        if (b[e]) continue;
        if (((b[e] = 1), e === h)) {
          te = !0;
          break;
        }
        let t = e % d,
          n = Math.floor(e / d);
        for (let r = -1; r <= 1; r++)
          for (let i = -1; i <= 1; i++) {
            if (!i && !r) continue;
            let a = t + i,
              o = n + r;
            if (a < 0 || o < 0 || a >= d || o >= f) continue;
            let s = a + o * d;
            if (b[s] || _(s) || (i && r && (_(a + n * d) || _(t + o * d))))
              continue;
            let c = v[e] + (i && r ? Math.SQRT2 : 1);
            c < v[s] &&
              ((v[s] = c), (y[s] = e), w(c + Math.hypot(a - ee, o - x), s));
          }
      }
      if (!te) return null;
      let E = [];
      for (let e = y[h]; e !== -1 && e !== m; e = y[e])
        E.push({
          x: o + ((e % d) + 0.5) * u,
          z: s + (Math.floor(e / d) + 0.5) * u,
        });
      (E.reverse(), E.push({ x: n, z: r }));
      let ne = [],
        re = e,
        ie = t;
      for (let e = 0; e < E.length;) {
        let t = e;
        for (
          ;
          t + 1 < E.length &&
          this.walkClear(re, ie, E[t + 1].x, E[t + 1].z, !1, a);
        )
          t++;
        (ne.push(E[t]), (re = E[t].x), (ie = E[t].z), (e = t + 1));
      }
      return ne;
    }
    gpsRoute(e, t, n, r, i = !1) {
      let a = this.routeAnchor(e, t, i),
        o = this.routeAnchor(n, r, i);
      if (!a || !o) return this.findRoute(e, t, n, r, i);
      let s = (e, t) => (t.axis === `x` ? this.nodes[e].x : this.nodes[e].z);
      if (a.link === o.link) {
        let e = a.link.road,
          t = Math.min(a.along, o.along),
          n = Math.max(a.along, o.along);
        return [a.link.from, a.link.to]
          .filter((r) => {
            let i = s(r, e),
              a =
                (e.axis === `x` ? this.nodes[r].halfX : this.nodes[r].halfZ) +
                1;
            return i >= t - a && i <= n + a;
          })
          .sort(
            (t, n) => Math.abs(s(t, e) - a.along) - Math.abs(s(n, e) - a.along),
          );
      }
      let c = this.nodes.length,
        l = new Float64Array(c).fill(1 / 0),
        u = new Float64Array(c).fill(1 / 0),
        d = new Int32Array(c).fill(-1),
        f = new Uint8Array(c),
        p = [],
        m = o.x,
        h = o.z,
        g = (e) => {
          let t =
            e === a.node
              ? 0
              : Math.abs(s(e, a.link.road) - a.along) /
                Math.max(5, a.link.speed);
          t >= l[e] ||
            ((l[e] = t),
            (u[e] =
              t + Math.hypot(this.nodes[e].x - m, this.nodes[e].z - h) / 16),
            p.push(e));
        };
      a.node >= 0 ? g(a.node) : (g(a.link.from), g(a.link.to));
      let _ = (e) =>
          o.node >= 0
            ? e === o.node
              ? 0
              : -1
            : e === o.link.from || e === o.link.to
              ? Math.abs(s(e, o.link.road) - o.along) /
                Math.max(5, o.link.speed)
              : -1,
        v = 1 / 0,
        y = -1;
      for (; p.length;) {
        let e = 0;
        for (let t = 1; t < p.length; t++) u[p[t]] < u[p[e]] && (e = t);
        let t = p[e];
        if (((p[e] = p[p.length - 1]), p.pop(), u[t] >= v)) break;
        if (f[t]) continue;
        f[t] = 1;
        let n = _(t);
        n >= 0 && l[t] + n < v && ((v = l[t] + n), (y = t));
        for (let e of this.nodes[t].out) {
          let n = this.links[e];
          if (n.pedestrian && !i) continue;
          let r = n.to;
          if (f[r]) continue;
          let a =
            l[t] +
            n.length / Math.max(5, n.speed) +
            (this.nodes[r].signal ? 4 : 0);
          a < l[r] &&
            ((l[r] = a),
            (d[r] = t),
            (u[r] =
              a + Math.hypot(this.nodes[r].x - m, this.nodes[r].z - h) / 16),
            p.push(r));
        }
      }
      if (y < 0) return [];
      let b = [];
      for (let e = y; e !== -1; e = d[e]) b.push(e);
      return b.reverse();
    }
    linkBetween(e, t) {
      for (let n of this.nodes[e].out)
        if (this.links[n].to === t) return this.links[n];
      return null;
    }
    landmark(e) {
      return this.landmarks.find((t) => t.id === e);
    }
  },
  mc = [],
  hc = 1e5;
function gc(e, t, n, r, i, a, o) {
  let s = (t, n, r, i, a) => ({
      ...e,
      minX: t,
      maxX: n,
      minZ: r,
      maxZ: i,
      ...a,
    }),
    c = Math.max(e.minZ, r),
    l = Math.min(e.maxZ, i),
    u = Math.max(e.minX, t),
    d = Math.min(e.maxX, n),
    f = [],
    p = [];
  (r > e.minZ && f.push(s(e.minX, e.maxX, e.minZ, c, { south: a })),
    i < e.maxZ && f.push(s(e.minX, e.maxX, l, e.maxZ, { north: a })),
    t > e.minX && f.push(s(e.minX, u, c, l, { east: a })),
    n < e.maxX && f.push(s(d, e.maxX, c, l, { west: a })),
    t > e.minX && p.push(s(e.minX, u, e.minZ, e.maxZ, { east: a })),
    n < e.maxX && p.push(s(d, e.maxX, e.minZ, e.maxZ, { west: a })),
    r > e.minZ && p.push(s(u, d, e.minZ, c, { south: a })),
    i < e.maxZ && p.push(s(u, d, l, e.maxZ, { north: a })));
  let m = (e) => e.maxX - e.minX >= o && e.maxZ - e.minZ >= o,
    h = (e) =>
      e.reduce((e, t) => e + (t.maxX - t.minX) * (t.maxZ - t.minZ), 0) -
      400 * Math.max(0, e.length - 1),
    g = f.filter(m),
    _ = p.filter(m);
  return h(g) >= h(_) ? g : _;
}
var _c = [0, 4, -4, 8, -8, 12, -12, 16, -16, 20, -20, 26, -26, 32, -32];
function vc(e, t) {
  try {
    return !!e(t);
  } catch {
    return !1;
  }
}
function yc(e) {
  return [...new Set(e)].sort((e, t) => e - t);
}
function bc(e, t, n, r, i) {
  let a = (r + i) / 2;
  for (let r of e)
    if (r.axis === t && Math.abs(r.at - n) <= 15 && a >= r.from && a < r.to)
      return r;
  return null;
}
function Q(e, t) {
  return (t + 2048) * 4096 + (e + 2048);
}
function xc(e, t, n, r) {
  return Math.abs(t - e.x) <= e.w / 2 + r && Math.abs(n - e.z) <= e.d / 2 + r;
}
function Sc(e, t, n) {
  return (
    e.maxX > t.x - t.w / 2 - n &&
    e.minX < t.x + t.w / 2 + n &&
    e.maxZ > t.z - t.d / 2 - n &&
    e.minZ < t.z + t.d / 2 + n
  );
}
function Cc(e, t, n, r, i) {
  if (e === `z`) {
    if (Math.abs(t - i.x) > i.w / 2) return 0;
    let e = Math.min(r, i.z + i.d / 2) - Math.max(n, i.z - i.d / 2);
    return Math.max(0, e) / (r - n);
  }
  if (Math.abs(t - i.z) > i.d / 2) return 0;
  let a = Math.min(r, i.x + i.w / 2) - Math.max(n, i.x - i.w / 2);
  return Math.max(0, a) / (r - n);
}
function wc(e, t, n) {
  if (e.x1 < e.x0) {
    ((e.x0 = e.x1 = t), (e.z0 = e.z1 = n));
    return;
  }
  (t < e.x0 && (e.x0 = t),
    t > e.x1 && (e.x1 = t),
    n < e.z0 && (e.z0 = n),
    n > e.z1 && (e.z1 = n));
}
var Tc = class {
    g;
    f;
    came;
    closed;
    stamp;
    gen = 0;
    open;
    heap;
    hpos;
    head;
    next;
    size = 0;
    constructor(e, t) {
      ((this.g = new Float64Array(e)),
        (this.f = new Float64Array(e)),
        (this.came = new Int32Array(e)),
        (this.closed = new Uint8Array(e)),
        (this.stamp = new Uint32Array(e)),
        (this.head = new Int32Array(e)),
        (this.open = new Int32Array(Math.max(4, t))),
        (this.heap = new Int32Array(this.open.length)),
        (this.hpos = new Int32Array(this.open.length)),
        (this.next = new Int32Array(this.open.length)));
    }
    begin() {
      ((this.size = 0),
        ++this.gen > 4294967280 && (this.stamp.fill(0), (this.gen = 1)));
    }
    touch(e) {
      this.stamp[e] !== this.gen &&
        ((this.stamp[e] = this.gen),
        (this.g[e] = 1 / 0),
        (this.f[e] = 1 / 0),
        (this.came[e] = -1),
        (this.closed[e] = 0),
        (this.head[e] = -1));
    }
    less(e, t) {
      let n = this.f[this.open[e]],
        r = this.f[this.open[t]];
      return n < r || (n === r && e < t);
    }
    swap(e, t) {
      let n = this.heap,
        r = n[e],
        i = n[t];
      ((n[e] = i), (n[t] = r), (this.hpos[i] = e), (this.hpos[r] = t));
    }
    up(e) {
      let t = this.heap;
      for (; e > 0;) {
        let n = (e - 1) >> 1;
        if (!this.less(t[e], t[n])) return;
        (this.swap(e, n), (e = n));
      }
    }
    down(e) {
      let t = this.heap,
        n = this.size;
      for (;;) {
        let r = 2 * e + 1,
          i = r + 1,
          a = e;
        if (
          (r < n && this.less(t[r], t[a]) && (a = r),
          i < n && this.less(t[i], t[a]) && (a = i),
          a === e)
        )
          return;
        (this.swap(e, a), (e = a));
      }
    }
    grow() {
      let e = this.open.length * 2,
        t = (t) => {
          let n = new Int32Array(e);
          return (n.set(t), n);
        };
      ((this.open = t(this.open)),
        (this.heap = t(this.heap)),
        (this.hpos = t(this.hpos)),
        (this.next = t(this.next)));
    }
    unlink(e, t) {
      let n = -1,
        r = this.head[e];
      for (; r !== -1 && r !== t;) ((n = r), (r = this.next[r]));
      r !== -1 &&
        (n === -1
          ? (this.head[e] = this.next[r])
          : (this.next[n] = this.next[r]));
    }
    push(e) {
      this.size >= this.open.length && this.grow();
      let t = this.size++;
      ((this.open[t] = e),
        (this.next[t] = this.head[e]),
        (this.head[e] = t),
        (this.heap[t] = t),
        (this.hpos[t] = t),
        this.up(t));
    }
    pop() {
      let e = this.heap[0],
        t = this.open[e],
        n = this.size - 1;
      if (
        (this.swap(0, n),
        this.size--,
        this.size > 0 && this.down(0),
        this.unlink(t, e),
        e !== n)
      ) {
        let t = this.open[n];
        ((this.open[e] = t),
          this.unlink(t, n),
          (this.next[e] = this.head[t]),
          (this.head[t] = e));
        let r = this.hpos[n];
        ((this.heap[r] = e), (this.hpos[e] = r), this.up(r));
      }
      return t;
    }
    decreased(e) {
      for (let t = this.head[e]; t !== -1; t = this.next[t])
        this.up(this.hpos[t]);
    }
  },
  $ = 3,
  Ec = 2,
  Dc = class {
    plan;
    greenX;
    greenZ;
    offset;
    isSignal;
    time = 0;
    constructor(e) {
      this.plan = e;
      let t = e.nodes.length;
      ((this.greenX = new Float32Array(t)),
        (this.greenZ = new Float32Array(t)),
        (this.offset = new Float32Array(t)),
        (this.isSignal = new Uint8Array(t)));
      for (let t of e.nodes) {
        if (!t.signal) continue;
        this.isSignal[t.id] = 1;
        let e = 0,
          n = 0;
        for (let r of t.roads) {
          let t = r.major ? r.lanesPerDir * 2 : 1;
          r.axis === `x` ? (e = Math.max(e, t)) : (n = Math.max(n, t));
        }
        ((this.greenX[t.id] = 14 + e * 3), (this.greenZ[t.id] = 14 + n * 3));
        let r = this.cycle(t.id);
        this.offset[t.id] = (((t.x / 12.5) % r) + ($o(t.id) % 5) + r) % r;
      }
    }
    cycle(e) {
      return this.greenX[e] + this.greenZ[e] + 10;
    }
    update(e) {
      this.time += e;
    }
    isSignalized(e) {
      return this.isSignal[e] === 1;
    }
    phaseT(e) {
      let t = this.cycle(e);
      return (((this.time + this.offset[e]) % t) + t) % t;
    }
    state(e, t) {
      if (!this.isSignal[e]) return `green`;
      let n = this.phaseT(e),
        r = this.greenX[e],
        i = this.greenZ[e],
        a = r + $ + Ec;
      return t === `x`
        ? n < r
          ? `green`
          : n < r + $
            ? `yellow`
            : `red`
        : n >= a && n < a + i
          ? `green`
          : n >= a + i && n < a + i + $
            ? `yellow`
            : `red`;
    }
    remaining(e, t) {
      if (!this.isSignal[e]) return 99;
      let n = this.phaseT(e),
        r = this.cycle(e),
        i = this.greenX[e],
        a = this.greenZ[e],
        o = i + $ + Ec;
      return t === `x`
        ? i > n
          ? i - n
          : i + $ > n
            ? i + $ - n
            : r - n
        : o > n
          ? o - n
          : o + a > n
            ? o + a - n
            : o + a + $ > n
              ? o + a + $ - n
              : r + o - n;
    }
    pedState(e, t) {
      if (!this.isSignal[e]) return `walk`;
      let n = t === `x` ? `z` : `x`;
      return this.state(e, n) === `green`
        ? this.remaining(e, n) > 7
          ? `walk`
          : `flash`
        : `dont`;
    }
    pedRemaining(e, t) {
      let n = t === `x` ? `z` : `x`;
      return this.state(e, n) === `green` ? this.remaining(e, n) : 0;
    }
  },
  Oc = !0;
function kc(e, n) {
  t(
    () =>
      import(`./panel-D9zvhD2V.js`).then((t) => {
        e.isConnected && t.mountFeedbackPanel(e, n);
      }),
    __vite__mapDeps([21, 2, 4, 5, 6, 1, 3, 8, 22]),
  ).catch(() => {});
}
var Ac = { GROUND: 0.02, PAINT: 0.01, PANEL: 0.02, DETAIL: 0.005 },
  jc = new WeakMap();
function Mc(e, t) {
  t ? jc.set(e, t) : jc.delete(e);
}
function Nc(e) {
  return (e && jc.get(e)) || null;
}
var Pc = new _(),
  Fc = new Oe(),
  Ic =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`;
function Lc(e) {
  if (!Ic) return;
  let t = e._instanceInfo;
  Array.isArray(t) &&
    ((e.frustumCulled = !0),
    (e.intersectsFrustum = (n) => {
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (
          i.active &&
          i.visible &&
          (!e.getBoundingSphereAt(i.geometryIndex, Pc) ||
            (e.getMatrixAt(r, Fc),
            Pc.applyMatrix4(Fc).applyMatrix4(e.matrixWorld),
            n.intersectsSphere(Pc)))
        )
          return !0;
      }
      return !1;
    }));
}
export {
  No as $,
  vt as $n,
  lr as $t,
  ns as A,
  jt as An,
  ti as At,
  Qo as B,
  Xt as Bn,
  Di as Bt,
  ss as C,
  zt as Cn,
  Ji as Ct,
  es as D,
  Ot as Dn,
  Bi as Dt,
  cs as E,
  It as En,
  Ki as Et,
  bs as F,
  At as Fn,
  Oi as Ft,
  zo as G,
  Bt as Gn,
  V as Gt,
  Ro as H,
  Pt as Hn,
  wi as Ht,
  us as I,
  I as In,
  ci as It,
  Mo as J,
  Qt as Jn,
  ei as Jt,
  Fo as K,
  nn as Kn,
  di as Kt,
  vs as L,
  Rt as Ln,
  si as Lt,
  as as M,
  ln as Mn,
  ni as Mt,
  ds as N,
  Yt as Nn,
  Ti as Nt,
  ts as O,
  Nt as On,
  Vi as Ot,
  rs as P,
  Dt as Pn,
  Ei as Pt,
  Ao as Q,
  _t as Qn,
  L as Qt,
  _s as R,
  Vt as Rn,
  Li as Rt,
  ys as S,
  kt as Sn,
  Xi as St,
  ls as T,
  en as Tn,
  Wi as Tt,
  Io as U,
  Lt as Un,
  oi as Ut,
  $o as V,
  Jt as Vn,
  fi as Vt,
  Lo as W,
  Ft as Wn,
  B as Wt,
  jo as X,
  qt as Xn,
  Ar as Xt,
  Po as Y,
  rn as Yn,
  jr as Yt,
  Oo as Z,
  Zt as Zn,
  kr as Zt,
  Ts as _,
  wt as _n,
  Za as _t,
  Oc as a,
  Qn as an,
  ct as ar,
  Co as at,
  ms as b,
  j as bn,
  ka as bt,
  pc as c,
  zn as cn,
  Xe as cr,
  bo as ct,
  As as d,
  Pn as dn,
  Ye as dr,
  fo as dt,
  br as en,
  A as er,
  wo as et,
  Gs as f,
  An as fn,
  Ve as fr,
  Ja as ft,
  Ss as g,
  kn as gn,
  Qa as gt,
  Os as h,
  yn as hn,
  Ie as hr,
  eo as ht,
  Ac as i,
  Xn as in,
  gt as ir,
  vo as it,
  is as j,
  tn as jn,
  ii as jt,
  os as k,
  $t as kn,
  zi as kt,
  js as l,
  Vn as ln,
  qe as lr,
  _o as lt,
  Zs as m,
  bn as mn,
  Le as mr,
  no as mt,
  Mc as n,
  Bn as nn,
  ot as nr,
  Eo as nt,
  kc as o,
  Un as on,
  Ue as or,
  xo as ot,
  $s as p,
  On as pn,
  Be as pr,
  qa as pt,
  Do as q,
  un as qn,
  Pi as qt,
  Nc as r,
  Wn as rn,
  it as rr,
  yo as rt,
  Dc as s,
  Gn as sn,
  We as sr,
  So as st,
  Lc as t,
  gr as tn,
  ht as tr,
  To as tt,
  Ms as u,
  Rn as un,
  Je as ur,
  po as ut,
  ws as v,
  xt as vn,
  Ha as vt,
  hs as w,
  dn as wn,
  Gi as wt,
  ps as x,
  Mt as xn,
  Ca as xt,
  gs as y,
  Et as yn,
  Wa as yt,
  fs as z,
  Kt as zn,
  Ni as zt,
};
