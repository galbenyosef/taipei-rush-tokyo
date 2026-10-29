const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/boot-BYKah_CW.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-DVEw0yxj.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/controllers-DHBZ_k07.js",
      "assets/shared-BaQwRjes.js",
      "assets/ja-anaGONx4.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/game-DQ7TeBJx.js",
      "assets/three-C4coU-vx.js",
      "assets/landing-CD9ntJhH.js",
      "assets/accounts-DSoNIbxN.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-CivB7fIR.js",
      "assets/text-Dz2IP1v8.js",
      "assets/coordinator-Brhh9B6T.js",
      "assets/ui-P-VyG5rz.js",
      "assets/icons-Md4jzY0j.js",
      "assets/profile-DAhvJU_P.js",
      "assets/profile-DrLTezeU.css",
      "assets/phone-Crnwgx7Y.js",
      "assets/panel-z7F7sGKE.js",
      "assets/panel-DY3g4qQQ.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./preload-helper-DZce6yc-.js";
import { i as n, t as r } from "./ja-anaGONx4.js";
import {
  $n as i,
  C as a,
  Ct as o,
  Dt as s,
  Et as c,
  F as l,
  G as u,
  I as d,
  J as f,
  Jt as p,
  Ln as m,
  Mt as h,
  On as g,
  P as _,
  Pn as v,
  Pt as y,
  Rt as b,
  S as ee,
  Sn as x,
  Tt as S,
  Un as C,
  Vt as te,
  W as w,
  X as ne,
  Y as T,
  Zn as E,
  _ as re,
  _n as ie,
  at as ae,
  bn as oe,
  c as se,
  er as ce,
  g as le,
  gn as ue,
  gt as de,
  h as fe,
  ht as pe,
  ir as me,
  kn as he,
  kt as ge,
  lr as _e,
  n as ve,
  nr as ye,
  o as be,
  or as xe,
  ot as Se,
  p as Ce,
  q as we,
  rr as Te,
  rt as Ee,
  s as De,
  sr as Oe,
  tn as ke,
  v as Ae,
  vn as je,
  xn as Me,
} from "./three-C4coU-vx.js";
import { n as Ne } from "./cities-tfcRdmsJ.js";
import { f as Pe, i as Fe, t as Ie } from "./shared-BaQwRjes.js";
var Le = class {
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
function Re(e) {
  return (
    e instanceof HTMLElement &&
    (!!e.closest(`input,textarea,select`) || e.isContentEditable)
  );
}
var ze = {
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
  Be = new Set([`CapsLock`, `NumLock`, `ScrollLock`]),
  Ve = {
    ShiftLeft: `shiftKey`,
    ShiftRight: `shiftKey`,
    AltLeft: `altKey`,
    AltRight: `altKey`,
    ControlLeft: `ctrlKey`,
    ControlRight: `ctrlKey`,
    MetaLeft: `metaKey`,
    MetaRight: `metaKey`,
  },
  He = {
    " ": `Space`,
    Spacebar: `Space`,
    ArrowUp: `ArrowUp`,
    Up: `ArrowUp`,
    ArrowDown: `ArrowDown`,
    Down: `ArrowDown`,
    ArrowLeft: `ArrowLeft`,
    Left: `ArrowLeft`,
    ArrowRight: `ArrowRight`,
    Right: `ArrowRight`,
    Escape: `Escape`,
    Esc: `Escape`,
    Tab: `Tab`,
    Enter: `Enter`,
    CapsLock: `CapsLock`,
  },
  Ue = {
    9: `Tab`,
    13: `Enter`,
    16: `ShiftLeft`,
    17: `ControlLeft`,
    18: `AltLeft`,
    20: `CapsLock`,
    27: `Escape`,
    32: `Space`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    91: `MetaLeft`,
    92: `MetaRight`,
    93: `MetaRight`,
  };
function We(e) {
  if (e.code && e.code !== `Unidentified`) return e.code;
  let t = e.key ?? ``,
    n = e.location === 2 ? `Right` : `Left`;
  if (t.length === 1 && /[a-z]/i.test(t)) return `Key${t.toUpperCase()}`;
  if (t.length === 1 && t >= `0` && t <= `9`) return `Digit${t}`;
  if (t === `Shift` || t === `Alt` || t === `Control` || t === `Meta`)
    return t + n;
  if (He[t]) return He[t];
  let r = e.keyCode ?? 0;
  return r >= 65 && r <= 90
    ? `Key${String.fromCharCode(r)}`
    : r >= 48 && r <= 57
      ? `Digit${r - 48}`
      : r === 16 || r === 17 || r === 18
        ? Ue[r].replace(`Left`, n)
        : (Ue[r] ?? ``);
}
var Ge = class extends Set {
    latched = new Set();
    add(e) {
      return (this.latched?.add(e), super.add(e));
    }
  },
  Ke = class {
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
      buttons: new Ge(),
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
            (e.defaultPrevented || !Re(e.target)) &&
              e.stopImmediatePropagation());
        },
        window,
        !0,
      ),
        t(
          `keyup`,
          (e) => {
            this.modalHandlers.length &&
              !Re(e.target) &&
              e.stopImmediatePropagation();
          },
          window,
          !0,
        ),
        t(`keydown`, (e) => {
          if (!this.enabled || this.modalHandlers.length || Re(e.target))
            return;
          let t = We(e);
          (t === `Tab` && e.preventDefault(),
            (t === `AltLeft` || t === `AltRight`) && e.preventDefault(),
            this.syncModifiers(e, t),
            t &&
              !Be.has(t) &&
              (this.keys.add(t),
              !e.repeat && (this.tapKeys.add(t), (this.device = `kbm`))));
        }),
        t(`keyup`, (e) => {
          let t = We(e);
          ((t === `AltLeft` || t === `AltRight`) && e.preventDefault(),
            this.syncModifiers(e, t),
            t || this.dropNonModifiers(),
            this.keys.delete(t),
            (t === `MetaLeft` || t === `MetaRight`) && this.dropNonModifiers());
        }),
        t(`focusin`, (e) => {
          Re(e.target) && (this.clearControls(), this.unlockPointer());
        }));
      let n = () => {
        (this.keys.clear(),
          this.mouseButtons.clear(),
          this.tapKeys.clear(),
          this.tapMouse.clear());
      };
      t(`blur`, n);
      let r = () => {
        document.visibilityState === `hidden` && n();
      };
      (document.addEventListener(`visibilitychange`, r),
        this.listeners.push(() =>
          document.removeEventListener(`visibilitychange`, r),
        ),
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
      let i = () => {
        this.pointerLocked = document.pointerLockElement === this.canvas;
      };
      (document.addEventListener(`pointerlockchange`, i),
        this.listeners.push(() =>
          document.removeEventListener(`pointerlockchange`, i),
        ));
    }
    syncModifiers(e, t) {
      if (this.keys.size)
        for (let n in Ve)
          n !== t && e[Ve[n]] === !1 && this.keys.has(n) && this.keys.delete(n);
    }
    dropNonModifiers() {
      for (let e of this.keys) e in Ve || this.keys.delete(e);
    }
    lockPointer() {
      this.isTouch ||
        !this.enabled ||
        this.modalHandlers.length ||
        Re(document.activeElement) ||
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
          !Re(document.activeElement);
      if (l) {
        for (let e of this.keys) {
          let t = ze[e];
          if (t) for (let e of t) n.add(e);
        }
        for (let e of this.tapKeys) {
          let t = ze[e];
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
    consume(e) {
      (this.edges.delete(e), this.held.has(e) && this.prevHeld.add(e));
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
  qe = class {
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
function Je() {
  if (typeof navigator > `u`) return { mobile: !1, tablet: !1 };
  let e = navigator.userAgent || ``,
    t =
      ((navigator.maxTouchPoints || 0) > 1 && /Macintosh/.test(e)) ||
      /iPad|Tablet/i.test(e) ||
      (/Android/i.test(e) && !/Mobile/i.test(e));
  return { mobile: t || /Android|iPhone|iPod|Mobile/i.test(e), tablet: t };
}
var Ye = {
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
function Xe(e, t) {
  let n = Math.min(t.maxTextureSize, e * (t.textureScale || 1));
  return Math.max(256, Math.round(n / 64) * 64);
}
var Ze = {
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
  Qe = null;
function $e() {
  if (Qe) return Qe;
  let { mobile: e, tablet: t } = Je(),
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
    (Qe = {
      mobile: e,
      tablet: t,
      gpu: n,
      cores: navigator.hardwareConcurrency || 4,
      memory: navigator.deviceMemory,
    }),
    Qe
  );
}
function et(e = $e()) {
  return !e.mobile || e.memory === void 0 || !(e.memory > 0)
    ? 0
    : e.memory <= 1
      ? 2
      : +(e.memory <= 2);
}
function tt(e, t = $e()) {
  let n = Ye[e] ?? Ye.medium;
  if (!t.mobile) return { ...n, mobile: !1 };
  let r = { ...n, ...Ze[n.level], mobile: !0 };
  return (
    t.tablet &&
      (n.level === `low` || n.level === `medium`) &&
      (r.maxPixelRatio = Math.min(r.maxPixelRatio, 1.5)),
    r
  );
}
function nt(e = $e()) {
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
  rt = 16,
  it = 1792,
  at = Math.ceil((it * 2) / rt);
function O(e) {
  let t = Math.floor((e + it) / rt);
  return t < 0 ? 0 : t >= at ? 223 : t;
}
var ot = class {
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
  st = 4,
  ct = () => [],
  lt = () => [];
function ut() {
  return { x: 0, z: 0, nx: 0, nz: 0, depth: 0, hit: !1, tag: `` };
}
var dt = {
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
  ft = class {
    colliders = [];
    cells = new ot(at, st);
    stamp = 1;
    floors = [];
    floorCells = new ot(at, st);
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
        for (let t = p; t <= m; t++) this.floorCells.getOr(t, e, lt).push(f);
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
        for (let i = n; i <= r; i++) this.cells.getOr(i, e, ct).push(t);
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
        (this.colliders[t] = dt),
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
    resolveCircle(e, t, n, r = ut()) {
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
    resolveRect(e, t, n, r, i, a = ut(), o) {
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
  pt = 1;
function mt() {
  return pt++;
}
var ht = 8,
  gt = Math.ceil((it * 2) / ht),
  _t = 5,
  vt = 31,
  yt = Math.ceil(gt / 32);
function k(e) {
  let t = Math.floor((e + it) / ht);
  return t < 0 ? 0 : t >= gt ? 447 : t;
}
var bt = 1,
  xt = class {
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
            let i = (t >> _t) * yt + (n >> _t),
              a = e[i];
            a ||
              (e[i] = a =
                { cells: Array(1024), counts: new Uint16Array(1024) });
            let o = ((t & vt) << _t) | (n & vt),
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
        o = ++bt,
        s = k(e - n),
        c = k(e + n),
        l = k(t - n),
        u = k(t + n),
        d = this.pages;
      for (let f = l; f <= u; f++)
        for (let l = s; l <= c; l++) {
          let s = d[(f >> _t) * yt + (l >> _t)];
          if (s === void 0) continue;
          let c = ((f & vt) << _t) | (l & vt),
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
function St() {
  return {
    distance: 0,
    point: new xe(),
    normal: new xe(),
    tag: ``,
    body: null,
  };
}
(St(), St());
function A(e) {
  return (
    !!e &&
    typeof e == `object` &&
    typeof e.version == `number` &&
    Number(e.version) > 1
  );
}
var Ct = `open`,
  wt = {
    url: `https://auth.taipei-rush.app`.replace(/\/$/, ``),
    publishableKey: `sb_publishable_NLgL_rFWz2yEugLly54P-g_smO0obVw`,
    siteKey: `0x4AAAAAAFPvFluW05hu9g3O`,
  },
  Tt = [
    `goldfish`,
    `rings`,
    `pinball`,
    `sipalah`,
    `pokepoke`,
    `darts`,
    `claw`,
    `oyster`,
    `cutlet`,
    `xlb`,
    `mangoice`,
    `boba`,
    `sausagebun`,
    `saltchicken`,
    `wheelcake`,
    `pepperbun`,
    `tanghulu`,
    `takoyaki`,
    `fireworks`,
    `ninegrid`,
    `garbage`,
    `stinkytofu`,
    `eggcake`,
    `baseball`,
    `sushi`,
  ],
  Et = [`goldfish`, `rings`, `pinball`];
function Dt(e) {
  let t = (e ?? ``).trim();
  if (!t || t === `0`) return [];
  if (t === `1`) return Et;
  if (t === `all`) return Tt;
  let n = t.split(`,`).map((e) => e.trim());
  return Tt.filter((e) => n.includes(e));
}
Dt(`all`);
function Ot(e) {
  return (e ?? ``).trim() !== `1`;
}
var kt = Ot(`2`);
function At() {
  try {
    return new URLSearchParams(location.search).get(`legalign`) === `0`;
  } catch {
    return !1;
  }
}
var jt = kt && !At();
function Mt() {
  try {
    return new URLSearchParams(location.search).get(`altbodies`) === `1`;
  } catch {
    return !1;
  }
}
!Je().mobile || Mt();
function Nt() {
  try {
    return new URLSearchParams(location.search).get(`veh2h`);
  } catch {
    return null;
  }
}
var Pt = Nt() !== `0`;
function Ft() {
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`hbdrift`);
  } catch {}
  let t = Number(e ?? void 0 ?? 4);
  return Number.isInteger(t) && t >= 0 && t <= 4 ? t : 4;
}
var It = Ft();
function Lt() {
  try {
    let e = new URLSearchParams(location.search).get(`titleart`);
    if (e === `classic` || e === `typhoon` || e === `studio`) return e;
  } catch {}
  return `classic`;
}
Lt();
function Rt() {
  try {
    let e = new URLSearchParams(location.search).get(`herolook`);
    if (e !== null) return e === `1`;
  } catch {}
  return null;
}
var zt = Rt() ?? !0;
function Bt() {
  try {
    let e = new URLSearchParams(location.search).get(`kit`);
    if (e !== null) return e === `brothers` || e === `1`;
  } catch {}
  return null;
}
var Vt = Bt() ?? !1;
function Ht() {
  try {
    let e = new URLSearchParams(location.search).get(`heli`);
    if (e !== null) return e !== `0`;
  } catch {}
  return null;
}
var Ut = Ht() !== !1,
  j = `tokyo-rush-save-v1`,
  Wt = `taipei-rush-cloud-session-v1`,
  Gt = `${j}:cloud-v1`,
  Kt = `taipei-rush-cloud-account-v1`,
  qt = Kt,
  M = `${j}:identities-v1`,
  Jt = `taipei-rush-device-v1`,
  Yt = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`];
function Xt() {
  let e = P(Jt),
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
function Zt() {
  if (N()) return !0;
  let e = Pn(),
    t = xn(),
    n =
      e?.anonymous === !1 && !Dn().signedOut && t?.userId === e.user_id
        ? e.user_id
        : `guest`,
    r = I();
  return F(M, {
    active: n,
    slots: { [n]: { data: r, backups: [], ...(t ? { sync: t } : {}) } },
  });
}
function Qt() {
  return N()?.active ?? `guest`;
}
function $t(e) {
  return N()?.slots[e]?.data ?? null;
}
function en(e) {
  if (e === `tokyo-rush-save-v1`) return P(e);
  let t = P(`${e}:identities-v1`),
    n = Qt();
  return t?.active === n
    ? P(e)
    : (t?.slots?.[n]?.data ?? (n === `guest` && !t ? P(e) : null));
}
function tn(e, t = !1) {
  if (!Zt()) return !1;
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
  for (let t of Dn().deleted ?? [])
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
function nn() {
  let e = N(),
    t = e?.slots[e.active];
  return !!t && t.adopted === !0 && t.sync?.userId !== e.active;
}
function rn(e) {
  let t = N();
  if (!t) return !1;
  let n = t.slots[t.active];
  return (delete n.adopted, e && (n.notice = e), F(M, t));
}
function an() {
  let e = N(),
    t = e?.slots[e.active];
  if (!e || !t?.notice) return null;
  let n = t.notice;
  return (delete t.notice, F(M, e), n);
}
function on(e, t = M) {
  let n = P(t);
  n?.slots &&
    e !== `guest` &&
    n.active !== e &&
    n.slots[e] &&
    (delete n.slots[e], F(t, n));
}
function sn() {
  try {
    let e = `taipei-rush-storage-probe`;
    localStorage.setItem(e, `1`);
    let t = localStorage.getItem(e) === `1`;
    return (localStorage.removeItem(e), t);
  } catch {
    return !1;
  }
}
var cn = !1;
function ln() {
  if (!cn) {
    cn = !0;
    try {
      let e = typeof navigator < `u` ? navigator.storage : void 0;
      if (!e?.persist || /Firefox\//.test(navigator.userAgent)) return;
      (e.persisted ? e.persisted() : Promise.resolve(!1))
        .then((t) => t || e.persist())
        .catch(() => {});
    } catch {}
  }
}
function un() {
  return N()?.slots[Qt()]?.backups ?? [];
}
function dn(e, t = !1, n) {
  if (e === null || A(e) || !Zt()) return null;
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
function fn() {
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
function pn(e) {
  return P(e);
}
var mn = `${j}:paid-v1`,
  hn = () => Qt();
function gn() {
  let e = P(mn);
  return e && typeof e == `object` && !Array.isArray(e)
    ? (e[hn()] ?? null)
    : null;
}
function _n(e) {
  let t = P(mn),
    n = t && typeof t == `object` && !Array.isArray(t) ? t : {};
  return ((n[hn()] = e), F(mn, n));
}
function vn(e) {
  let t = localStorage.getItem(e);
  return t === null ? null : JSON.parse(t);
}
function yn(e, t) {
  return F(e, t);
}
function bn(e) {
  try {
    localStorage.removeItem(e);
  } catch {}
}
function xn() {
  let e = N(),
    t = e ? e.slots[e.active]?.sync : P(Gt);
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
function Sn() {
  let e = N()?.slots[Qt()]?.syncedAt;
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function Cn(e) {
  let t = N();
  return t ? ((t.slots[t.active].syncedAt = e), F(M, t)) : !1;
}
function wn(e) {
  let t = N();
  return t ? ((t.slots[t.active].sync = e), F(M, t)) : F(Gt, e);
}
function Tn() {
  let e = xn();
  e && wn({ ...e, dirty: !0 });
}
function En() {
  let e = N();
  e && (delete e.slots[e.active].sync, F(M, e));
  try {
    localStorage.removeItem(Gt);
  } catch {}
}
function Dn() {
  let e = P(Kt),
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
function On(e) {
  let t = { ...Dn(), ...e };
  for (let e of Object.keys(t)) t[e] === void 0 && delete t[e];
  return F(Kt, t);
}
function I() {
  try {
    let e = localStorage.getItem(j);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function kn(e) {
  try {
    if (A(I()) || A(e)) return !1;
    if (e && typeof e == `object` && `settings` in e) {
      let t = e.settings,
        n = Object.fromEntries(
          Yt.filter((e) => t?.[e] !== void 0).map((e) => [e, t[e]]),
        );
      if (!F(Jt, { ...Xt(), ...n })) return !1;
    }
    let t = N();
    return t && ((t.slots[t.active].data = e), !F(M, t))
      ? !1
      : (localStorage.setItem(j, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function An() {
  try {
    if (A(I())) return;
    let e = N();
    if (e && ((e.slots[e.active].data = null), !F(M, e))) return;
    localStorage.removeItem(j);
  } catch {}
}
var jn = `tokyo-rush-device-v1`;
function Mn() {
  try {
    return localStorage.getItem(jn);
  } catch {
    return null;
  }
}
function Nn(e) {
  try {
    return (localStorage.setItem(jn, e), !0);
  } catch {
    return !1;
  }
}
function Pn() {
  try {
    let e = localStorage.getItem(Wt);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function Fn(e) {
  try {
    return (localStorage.setItem(Wt, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function In() {
  try {
    localStorage.removeItem(Wt);
  } catch {}
}
var Ln = [`jie`, `wen`, `kai`, `mei`];
function Rn(e) {
  return typeof e == `string` && Ln.includes(e);
}
function zn(e, t = `jie`) {
  return Rn(e) ? e : t;
}
function Bn(e) {
  return e === `wen` || e === `mei`;
}
var Vn = {
  jie: { zh: `阿傑`, en: `Jie` },
  wen: { zh: `小雯`, en: `Wen` },
  kai: { zh: `阿凱`, en: `Kai` },
  mei: { zh: `小美`, en: `Mei` },
};
function Hn(e) {
  return Vn[zn(e)];
}
function Un(e) {
  return e === `jie`
    ? `wen`
    : e === `wen`
      ? `jie`
      : e === `kai`
        ? `mei`
        : `kai`;
}
var Wn,
  Gn = null,
  Kn;
function qn() {
  try {
    let e = navigator.languages?.[0] || navigator.language || ``;
    return /^zh(?:[-_](?:tw|hant)(?:[-_]|$)|$)/i.test(e) ? `zh` : `en`;
  } catch {
    return `en`;
  }
}
function Jn() {
  return Wn ?? qn();
}
function Yn() {
  return Gn;
}
function Xn() {
  if (Kn) return Kn;
  let e = qn();
  return (
    (Wn = e),
    (Kn = new Promise((t) => {
      let n = new AbortController(),
        r = !1,
        i = (i, o) => {
          r ||
            ((r = !0),
            clearTimeout(a),
            (Wn = i === `zh` || i === `en` ? i : e),
            (Gn = typeof o == `string` && /^[a-z-]{2,20}$/.test(o) ? o : null),
            t(),
            n.abort());
        },
        a = setTimeout(() => i(), 800);
      Promise.resolve()
        .then(() =>
          fetch(`/api/locale`, {
            signal: n.signal,
            cache: `no-store`,
            credentials: `same-origin`,
          }),
        )
        .then((e) => (e.ok ? e.json() : null))
        .then((e) => i(e?.lang, e?.city))
        .catch(() => i());
    })),
    Kn
  );
}
var Zn = 0.25,
  Qn = 36e5,
  $n = [1, 0.7, 0.45, 0.3, 0.2],
  er = $n.length,
  tr = 200,
  nr = (e) => typeof e == `string` && e.length > 0 && e.length < 200;
function rr(e) {
  let t = e.payLog,
    n = {};
  if (!t || typeof t != `object` || Array.isArray(t)) return n;
  for (let [e, r] of Object.entries(t)) {
    if (!nr(e) || !Array.isArray(r)) continue;
    let t = r
      .filter((e) => typeof e == `number` && Number.isFinite(e))
      .slice(-er);
    t.length && (n[e] = t);
  }
  return n;
}
function ir(e, t, n = Date.now()) {
  let r = rr(e)[t];
  return r ? r.filter((e) => n - e < Qn).length : 0;
}
var ar = (e) => $n[Math.max(0, Math.min($n.length - 1, Math.floor(e) || 0))];
function or(e, t, n = Date.now()) {
  let r = rr(e),
    i = ar((r[t] ?? []).filter((e) => n - e < Qn).length);
  for (let e of Object.keys(r))
    ((r[e] = r[e].filter((e) => n - e < Qn)), r[e].length || delete r[e]);
  r[t] = [...(r[t] ?? []), n].slice(-er);
  let a = Object.keys(r);
  if (a.length > tr) {
    a.sort((e, t) => Math.max(...r[e]) - Math.max(...r[t]));
    for (let e of a.slice(0, a.length - tr)) delete r[e];
  }
  return ((e.payLog = r), i);
}
function sr(e) {
  return Array.isArray(e.claimed) ? e.claimed.filter(nr) : [];
}
var cr = (e, t) => sr(e).includes(t);
function lr(e, t) {
  if (!nr(t)) return !1;
  let n = sr(e);
  return !n.includes(t) && (n.push(t), (e.claimed = n.slice(-4e3)), !0);
}
function ur(e, t) {
  let n = new Set(sr(e));
  if (Array.isArray(e.completedMissions))
    for (let t of e.completedMissions) nr(t) && n.add(`mission:${t}`);
  if (Array.isArray(e.collectibles))
    for (let t of e.collectibles) nr(t) && n.add(`collectible:${t}`);
  t.claimed = [...n].slice(-4e3);
  let r = rr(e);
  Object.keys(r).length && (t.payLog = r);
}
function dr(e) {
  return { claimed: sr(e), payLog: rr(e) };
}
function fr(e, t) {
  if (!t || typeof t != `object` || Array.isArray(t)) return;
  let n = t,
    r = new Set([...sr(e), ...sr(n)]);
  r.size && (e.claimed = [...r].slice(-4e3));
  let i = rr(e);
  for (let [e, t] of Object.entries(rr(n)))
    i[e] = [...new Set([...(i[e] ?? []), ...t])]
      .sort((e, t) => e - t)
      .slice(-er);
  Object.keys(i).length && (e.payLog = i);
}
function pr(e) {
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
function mr(e, t, n, r, i = Date.now()) {
  let a = Number.isFinite(n) ? Math.max(0, n) : 0;
  r.replay && (a *= Zn);
  let o = or(e, t, i);
  return (
    (a *= o),
    r.blessed && (a *= 1.1),
    { pay: Math.max(0, Math.round(a)), share: o }
  );
}
var hr = {
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
function gr(e, t) {
  return Math.round(e) * hr[t].unitsPer;
}
function _r(e, t) {
  return Math.floor(e / hr[t].unitsPer);
}
var vr = (e) => e === `zh` || e === `en` || e === `ja`;
function yr() {
  let e = br();
  if (e) return e;
  try {
    let e = I();
    if (e?.langJa === !0) return `ja`;
    let t = e?.settings?.lang;
    if (vr(t)) return t;
    let n = Pe().shared?.settings.lang;
    if (n === `zh` || n === `en`) return n;
  } catch {}
  return xr.lang;
}
function br() {
  try {
    let e =
      typeof location < `u`
        ? new URLSearchParams(location.search).get(`lang`)
        : null;
    return vr(e) ? e : null;
  } catch {
    return null;
  }
}
var xr = {
    get lang() {
      return Jn();
    },
    quality: `auto`,
    masterVolume: 0.8,
    musicVolume: 0.6,
    sfxVolume: 0.9,
    sensitivity: 1,
    invertY: !1,
    showFps: !1,
    frameRate: `auto`,
  },
  Sr = class e {
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
      let n = br();
      (n
        ? (this.data.settings.lang = n)
        : this.data.langJa === !0 && (this.data.settings.lang = `ja`),
        (r.on = this.data.settings.lang === `ja`),
        (this.shared = new Ie(this, (e) =>
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
        let t = e.sanitize(Fe(I()));
        return ((t.settings = { ...t.settings, ...Xt() }), fr(t, gn()), t);
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
      let o = { ...xr },
        s = t.settings;
      if (s && typeof s == `object` && !Array.isArray(s))
        for (let e of Object.keys(xr)) {
          let t = s[e];
          typeof t == typeof xr[e] &&
            (typeof t != `number` || Number.isFinite(t)) &&
            (o[e] = t);
        }
      if (s && typeof s == `object` && !Array.isArray(s))
        for (let [e, t] of Object.entries(s))
          e in xr ||
            (((typeof t == `number` && Number.isFinite(t)) ||
              typeof t == `string` ||
              typeof t == `boolean`) &&
              (o[e] = t));
      (vr(o.lang) || (o.lang = xr.lang),
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
        hr[n] &&
        ((this.data.money = Math.max(
          0,
          (Number.isFinite(this.data.money) ? Math.round(this.data.money) : 0) +
            gr(r, n),
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
      let t = lr(this.data, e);
      return (t && this.scheduleSave(0.5), t);
    }
    hasClaimed(e) {
      return cr(this.data, e);
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
        kn(this.data)
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
          pn(`${t.saveKey}:identities-v1`)?.slots?.[Qt()]?.data ??
          (Qt() === `guest` ? pn(t.saveKey) : null)
        )?.stats?.playTime;
        typeof n == `number` && Number.isFinite(n) && (e += Math.max(0, n));
      }
      return e;
    }
    restoreSave(t) {
      if (A(I()) || A(t)) return !1;
      let n = e.sanitize(t);
      return kn(n)
        ? ((this.data = n),
          (this.saveTimer = 0),
          (this.resetting = !0),
          this.shared.rebase(),
          !0)
        : !1;
    }
    reset() {
      if (A(I())) return;
      An();
      let t = this.data.settings,
        n = this.data.langJa,
        r = this.data.langPicked,
        i = this.data;
      ((this.data = e.load()),
        (this.data.settings = t),
        (this.data.langJa = n),
        r && (this.data.langPicked = !0),
        ur(i, this.data),
        _n(dr(this.data)),
        delete this.data.pos,
        delete this.data.hour,
        delete this.data.day,
        delete this.data.startDate,
        (this.resetting = !0));
    }
    resetting = !1;
  },
  Cr = {
    uTime: { value: 0 },
    uNight: { value: 0 },
    uWet: { value: 0 },
    uSunDir: { value: new xe(0.4, 0.8, 0.3).normalize() },
    uCharFill: { value: new Oe(0, 0, 0, 0) },
  },
  wr = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`;
function Tr(e, t = 0, n = 0) {
  let r = e.onBeforeCompile;
  e.onBeforeCompile = (i, a) => {
    (r?.call(e, i, a),
      (i.uniforms.uNight = Cr.uNight),
      (i.uniforms.uTime = Cr.uTime),
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
function Er(e, t, n) {
  n.addEventListener(`dispose`, function r() {
    (n.removeEventListener(`dispose`, r), e.get(t) === n && e.delete(t));
  });
}
function Dr(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
}
function Or(e, t = {}) {
  let n = new Ae(e);
  return (
    t.srgb !== !1 && (n.colorSpace = g),
    t.repeat && (n.wrapS = n.wrapT = x),
    (n.generateMipmaps = t.mipmaps !== !1),
    (n.minFilter = t.mipmaps === !1 ? pe : de),
    (n.anisotropy = t.anisotropy ?? 4),
    (n.needsUpdate = !0),
    n
  );
}
function kr(e, t) {
  let n = document.createElement(`canvas`);
  return (
    (n.width = e),
    (n.height = t),
    [n, n.getContext(`2d`, { willReadFrequently: !0 })]
  );
}
var Ar = `
attribute vec4 aCity;
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uTime;
`,
  jr = `
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uNight;
uniform float uTime;
uniform float uWet;
float cityHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;
function Mr(e, t) {
  ((e.uniforms.uNight = Cr.uNight),
    (e.uniforms.uTime = Cr.uTime),
    (e.uniforms.uWet = Cr.uWet),
    (e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
` + Ar,
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
` + jr,
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
      diffuseColor.rgb *= 1.0 - 0.28 * cityWet;
      float cityWinLit = 0.0;
      vec3 cityWinCol = vec3( 0.0 );
      if ( ( cityF & 64 ) != 0 && abs( vCityUp ) < 0.5 ) {
        // (the far city's windows — the props shader's procedural window LOD, environment/props.ts)
        vec3 cfn = normalize( cross( dFdx( vCityW ), dFdy( vCityW ) ) );
        vec2 wc = vec2( ( abs( cfn.x ) > 0.5 ? vCityW.z : vCityW.x ) / 3.2, vCityW.y / 3.3 );
        vec2 wcell = floor( wc ), wf = fract( wc );
        float inWinS = step( 0.14, wf.x ) * step( wf.x, 0.86 ) * step( 0.26, wf.y ) * step( wf.y, 0.88 );
        float fwp = max( fwidth( wc.x ), fwidth( wc.y ) );
        float inWin = mix( inWinS, 0.45, smoothstep( 0.22, 0.55, fwp ) );
        diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * 0.32 + vec3( 0.025, 0.035, 0.05 ), inWin * 0.9 );
        float wseed = 1.0 + vCity.z * 255.0;
        float bh = cityHash( vec2( wseed, 1.3 ) );
        float lf = 0.5 * ( 0.15 + 0.85 * bh * bh );
        float lvl = max( 0.0, ceil( log2( fwp * 3.5 ) ) );
        float scl = exp2( min( lvl, 5.0 ) );
        vec2 gc = wc / scl;
        vec2 gcell = floor( gc ), gf = fract( gc ) - 0.5;
        float wr = cityHash( ( lvl < 0.5 ? wcell : gcell * 7.31 + lvl ) + wseed * 13.7 );
        float pLit = lvl < 0.5 ? lf : 1.0 - pow( 1.0 - lf, scl * 0.9 );
        if ( lvl < 0.5 ) pLit = cityHash( vec2( wcell.y, wseed * 1.7 + 0.3 ) ) < lf ? 0.85 : 0.1;
        float shape = lvl < 0.5 ? inWinS : smoothstep( 0.42, 0.18, length( gf ) );
        cityWinLit = shape * step( wr, pLit ) * ( lvl < 0.5 ? 1.0 : 0.9 );
        float wch = cityHash( vec2( wseed, 2.7 ) );
        if ( cityHash( ( lvl < 0.5 ? wcell : gcell ) + 5.3 ) < 0.2 ) wch = fract( wch + 0.5 );
        cityWinCol = wch < 0.5 ? vec3( 1.0, 0.68, 0.36 ) : ( wch < 0.8 ? vec3( 0.8, 0.9, 1.0 ) : vec3( 0.85, 1.0, 0.82 ) );
      }`,
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
      float eK = ( cityF & 64 ) != 0 ? 0.0 : vCity.z * 4.0;
      totalEmissiveRadiance += cityWinCol * cityWinLit * 1.25 * mix( 0.08, 1.0, uNight );
      if ( ( cityF & 1 ) != 0 ) eK *= uNight;
      if ( ( cityF & 2 ) != 0 ) eK *= cityMask;
      #ifdef USE_MAP
        if ( ( cityF & 32 ) != 0 ) {
          vec3 cq = ( vCityW + 0.37 ) / 3.2, cc = floor( cq );
          // (《東京狂飆》 a cell under ~1 px averages out instead of sparkling — the far city's light points)
          float cfw = max( fwidth( cq.y ), max( fwidth( cq.x ), fwidth( cq.z ) ) );
          // (whole floors lit or dark, a few odd cells either way: offices at night, not confetti)
          float cOn = cityHash( vec2( cc.y, floor( ( cc.x + cc.z ) / 9.0 ) * 0.37 + 4.1 ) ) < 0.55 ? step( cityHash( cc.xz + cc.y * 17.13 ), 0.88 ) : step( cityHash( cc.xz + cc.y * 17.13 ), 0.08 );
          eK *= mix( cOn, 0.55, smoothstep( 0.35, 0.9, cfw ) );
        }
      #endif
      if ( ( cityF & 4 ) != 0 )
        eK *= 1.0 - 0.35 * step( 0.93, fract( sin( floor( uTime * 12.0 ) * 12.9898 + vCity.z * 91.7 ) * 43758.5453 ) );
      totalEmissiveRadiance += diffuseColor.rgb * eK;
    }`,
    )),
    (e.fragmentShader = n));
}
var Nr = new Map();
function Pr(e, t = {}) {
  let n = (t.policy ?? `pbr`) === `lambert` && e !== `glass`,
    r = `${e}|${t.map?.uuid ?? `-`}|${t.instanced ? `i` : ``}${t.batched ? `b` : ``}|${n ? `L` : `P`}|${t.opacity ?? ``}`,
    i = Nr.get(r);
  if (i) return i;
  let a = { map: t.map ?? null, vertexColors: !0, emissive: new ee(0) };
  ((i = n ? new ge(a) : new h({ ...a, roughness: 1, metalness: 1 })),
    e === `cutout`
      ? ((i.alphaTest = 0.5), (i.side = 2))
      : e === `glass` &&
        ((i.transparent = !0),
        (i.opacity = t.opacity ?? 0.45),
        (i.depthWrite = !1),
        (i.forceSinglePass = !0)),
    (i.name = `city-${e}${t.instanced ? `-inst` : ``}${t.batched ? `-batch` : ``}${t.name ? `:` + t.name : ``}`),
    (i.onBeforeCompile = (e) => Mr(e, n)));
  let o = `city-v1:${e === `glass` ? `glass` : `solid`}:${n ? `L` : `P`}`;
  return ((i.customProgramCacheKey = () => o), Nr.set(r, i), Er(Nr, r, i), i);
}
var Fr = {};
typeof window < `u` && (window.__materialLint = () => Fr);
function Ir(e, t) {
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
    (Fr[t] = n),
    (n.misaligned.mb = Math.round(n.misaligned.mb * 10) / 10),
    n
  );
}
var Lr = new Set([
    `environment`,
    `streets`,
    `buildings`,
    `landmarks`,
    `districts`,
    `culture`,
    `transit`,
  ]),
  Rr = 32768,
  zr = 4 << 20,
  Br =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`gpumem`) !== `0`,
  Vr = function () {
    this.__gpu = 1;
  };
((fe.prototype.onUploadCallback = Vr), (ae.prototype.onUploadCallback = Vr));
var Hr = { configurable: !0, enumerable: !1, get: () => !1, set: () => {} },
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
function Ur(e) {
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
  Wr = (e) => typeof ImageBitmap < `u` && e instanceof ImageBitmap;
function Gr(e) {
  let t = e.isCompressedTexture ? e.mipmaps : null;
  if (t && t.length) {
    let e = 0;
    for (let n of t) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  return n
    ? R(n) || Wr(n)
      ? (n.width || 0) * (n.height || 0) * 4
      : n.data && n.data.byteLength
        ? n.data.byteLength
        : 0
    : 0;
}
function Kr(e, t) {
  let n = 4;
  switch (e) {
    case se:
    case oe:
    case Me:
    case _:
      n = 1;
      break;
    case ue:
    case ie:
      n = 2;
      break;
    case l:
      return 4;
  }
  switch (t) {
    case ye:
    case Te:
      return 2;
    case i:
    case ce:
      return 4;
    case re:
    case E:
      return n;
    case v:
    case me:
    case ne:
      return n * 2;
    default:
      return n * 4;
  }
}
function qr(e) {
  let t = e.userData?.gpuBytes;
  return typeof t == `number` && t > 0 ? t : Jr(e);
}
function Jr(e) {
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
      Wr(n) ||
      (typeof HTMLImageElement < `u` && n instanceof HTMLImageElement)
        ? 4
        : Kr(e.format, e.type),
    l = e.generateMipmaps && e.minFilter !== 1006 && e.minFilter !== 1003;
  return a * o * s * c * (l ? 4 / 3 : 1);
}
function Yr(e) {
  let t = e.userData;
  if (!t || t.__gbV === e.version) return;
  let n = Jr(e);
  n > 0 && ((t.gpuBytes = Math.round(n)), (t.__gbV = e.version));
}
var Xr = Symbol(`tgta.onUpdate`);
{
  let e = C.prototype;
  Object.getOwnPropertyDescriptor(e, `onUpdate`)?.get ||
    Object.defineProperty(e, "onUpdate", {
      configurable: !0,
      enumerable: !1,
      get() {
        let e = this[Xr];
        return function (t) {
          (t && t.isTexture && Yr(t), e && e.call(this, t));
        };
      },
      set(e) {
        this[Xr] = e;
      },
    });
}
function Zr(e) {
  let t = Object.getOwnPropertyDescriptor(e, `onUpdate`),
    n = e,
    r;
  if (t && `value` in t) {
    let e = t.value;
    ((n.onUpdate = null), (r = () => void (n.onUpdate = e)));
  } else {
    let e = n[Xr];
    ((n[Xr] = null), (r = () => void (n[Xr] = e)));
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
function Qr(e) {
  if (e.__rel) return;
  let t = e.array;
  ((L.geoMB += t.byteLength / 1048576),
    (e.__rel = 1),
    (e.array = new t.constructor(0)),
    Object.defineProperty(e, "needsUpdate", {
      ...Hr,
      set: (t) => {
        t && Ur(`attribute(${e.count}×${e.itemSize ?? e.stride})`);
      },
    }));
}
function $r(e) {
  if (e.__rel) return;
  let t = e.image,
    n = e.isCompressedTexture ? e.mipmaps : null;
  if (!t && !n?.length) return;
  if (((L.texMB += Gr(e) / 1048576), Yr(e), (e.__rel = 1), n && n.length))
    for (let e of n) {
      let t = e?.data;
      if (t && t.byteLength) {
        let n = t.constructor;
        e.data = new n(0);
      }
    }
  else if (R(t)) ((t.width = 1), (t.height = 1));
  else if (Wr(t))
    try {
      t.close();
    } catch {}
  else if (t && t.data && t.data.byteLength) {
    let e = t.data.constructor;
    t.data = new e(0);
  }
  let r = {
    ...Hr,
    set: (t) => {
      t && Ur(`texture '${e.name}' ${e.image?.width ?? `?`}`);
    },
  };
  (Object.defineProperty(e, "needsUpdate", r),
    e.source && Object.defineProperty(e.source, "needsUpdate", r));
}
function ei(e, t = ``) {
  if (!Br) return;
  let n = e.image,
    r = e.isCompressedTexture ? e.mipmaps : null,
    i = e.__rel ? 0 : Gr(e);
  if (r && r.length)
    for (let e of r) {
      let t = e?.data;
      t && t.byteLength && (e.data = new t.constructor(0));
    }
  else if (R(n))
    ((n.width > 1 || n.height > 1) && ((n.width = 1), (n.height = 1)),
      (n.__tgtaDropped = t || `?`));
  else if (Wr(n))
    try {
      n.close();
    } catch {}
  else n && n.data && n.data.byteLength && (n.data = new n.data.constructor(0));
  L.droppedTexMB += i / 1048576;
}
function ti(e) {
  e.__gm ||
    ((e.__gm = 1),
    (e.__up = +!!e.__gpu),
    (e.__v = e.version),
    (e.onUploadCallback = function () {
      ((this.__gpu = 1), (this.__up = (this.__up ?? 0) + 1));
    }));
}
function ni(e, t) {
  if (e.__gm) return;
  ((e.__gm = 1), (e.__up = +!!t), (e.__v = e.version));
  let n = e.onUpdate;
  e.onUpdate = (t) => {
    ((e.__up = (e.__up ?? 0) + 1), n?.call(e, t));
  };
}
var ri = function () {
  ((this.__gpu = 1), Qr(this));
};
function ii(e) {
  if (!Br) return;
  if (e.isTexture) {
    let t = e;
    ni(t, !1);
    let n = t.onUpdate;
    t.onUpdate = (e) => {
      (n?.call(t, e), $r(t));
    };
    return;
  }
  let t = e.isBufferGeometry ? e : e.geometry;
  if (!t) return;
  li(t);
  let n = !!e.isBatchedMesh;
  for (let e of ai(t, n)) e.__gpu ? Qr(e) : (e.onUploadCallback = ri);
}
function ai(e, t = !1) {
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
var oi =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`pad`) !== `0`,
  si = new WeakMap();
function ci(e) {
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
    let a = si.get(n);
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
    let u = new ae(l, s),
      d = new Se(u, o, 0, n.normalized);
    ((d.name = n.name),
      si.set(n, d),
      e.setAttribute(t, d),
      (L.paddedMB += (c * o * i) / 1048576));
  }
}
function li(e) {
  if (e.boundingSphere && e.boundingBox) return;
  let t = e.attributes.position,
    n = t ? (t.isInterleavedBufferAttribute ? t.data.array : t.array) : null;
  n &&
    n.length &&
    (e.boundingSphere || e.computeBoundingSphere(),
    e.boundingBox || e.computeBoundingBox());
}
var ui = (e) => {
    let t = e;
    return !t.isMesh ||
      e.isSkinnedMesh ||
      e.userData?.keepCpu ||
      t.geometry.userData?.keepCpu ||
      (e.isBatchedMesh && e.userData?.static !== !0)
      ? !1
      : !fi(t.geometry.morphAttributes) &&
          !(Array.isArray(t.material)
            ? t.material.some((e) => e.wireframe)
            : t.material.wireframe);
  },
  di = (e) => !!e.isBatchedMesh;
function fi(e) {
  for (let t in e) return !0;
  return !1;
}
var pi = class {
    scene;
    maxTextureSize;
    hooks;
    owner = new WeakMap();
    enabled = Br;
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
      return Lr.has(this.owner.get(e) ?? ``);
    }
    trackDetached(e) {
      this.tracking = Math.max(0, this.tracking + (e ? 1 : -1));
    }
    installDetachHook() {
      if (!this.enabled) return;
      let e = this,
        t = b.prototype;
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
                  Gr(t) >= zr &&
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
                let r = Gr(n);
                r >= zr && this.hooks.uploaded?.(n) && e.set(n, r);
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
        let t = oi && e < s,
          o = (e) => {
            let r = e;
            if (!r.geometry || !r.material || !ui(e)) return;
            let o = r.geometry;
            if (a.has(o)) return;
            (p++, li(o), t && !di(e) && ci(o));
            let s = ai(o, di(e)),
              f = 0;
            for (let e of s)
              e.onUploadCallback === Vr &&
                e.usage === 35044 &&
                !e.__rel &&
                ti(e);
            if (c) {
              for (let e of s) f += e.array.byteLength;
              if (f >= Rr) {
                let e = !1;
                for (let t of s)
                  !t.__rel &&
                    t.__gm &&
                    t.usage === 35044 &&
                    ((t.__up ?? 0) > 0 ||
                      ((t.onUploadCallback = ri), (e = !0)));
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
                ni(e, !!this.hooks.uploaded?.(e)));
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
                ui(e) &&
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
          (!f.has(t) && !c.has(t) && (f.add(t), this.releaseGeo(t, di(e))),
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
      for (let r of ai(e, t))
        r.__rel ||
          (!r.__gm && r.onUploadCallback === Vr && r.usage === 35044 && ti(r),
          r.__gm && n.push(r));
      if (!n.length) return;
      let r = 0,
        i = !0;
      for (let e of n)
        ((r += e.array.byteLength),
          (e.version !== e.__v || (e.__up ?? 0) > 1 || e.usage !== 35044) &&
            (i = !1));
      if (!i || r < Rr) return;
      li(e);
      let a = !1;
      for (let e of n)
        (e.__up ?? 0) > 0 ? Qr(e) : ((a = !0), (e.onUploadCallback = ri));
      a && this.waitingGeo.add(e);
    }
    releaseTexGroup(e, t) {
      let n = t[0];
      if (!n || n.__rel) return;
      let r = !!e?.data;
      if (!R(e) && !r) return;
      let i = e.width ?? 0,
        a = e.height ?? 0;
      if (Gr(n) < zr || i * a <= 1) return;
      let o = (e) =>
          e.__gm ? e.version === e.__v && (e.__up ?? 0) <= 1 : e.version <= 3,
        s = (e) => (e.__gm && (e.__up ?? 0) >= 1) || !!this.hooks.uploaded?.(e);
      if (!t.some((e) => e.userData?.keepCpu || !o(e))) {
        if (t.every(s)) {
          for (let e of t) $r(e);
          return;
        }
        for (let e of t) {
          if (e.__pend) continue;
          ((e.__pend = 1), this.pendTex.add(e), e.__gm || ni(e, !1));
          let n = e.onUpdate;
          e.onUpdate = (r) => {
            if ((n?.call(e, r), t.every((e) => o(e) && s(e))))
              for (let e of t) $r(e);
          };
        }
      }
    }
    refreshPending() {
      let e = 0;
      for (let t of this.waitingGeo) {
        let n = !1;
        for (let e of ai(t)) !e.__rel && e.onUploadCallback === ri && (n = !0);
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
        i = new m();
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
  mi =
    typeof navigator < `u` &&
    typeof document < `u` &&
    /^Apple/.test(navigator.vendor || ``),
  hi = class e {
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
      if (!mi) return 0;
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
      return new gi(e, t);
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
  gi = class {
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
  _i = 1500,
  vi = 8e3,
  yi = 15e3,
  bi = 6e3,
  xi = 1e3,
  Si = 64 << 20,
  Ci = [4],
  wi = 24;
function Ti() {
  if (typeof document > `u` || typeof navigator > `u`) return !1;
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`gcnudge`);
  } catch {}
  return e === `0` ? !1 : e === `1` || /^Apple/.test(navigator.vendor || ``);
}
var z = {
  on: Ti(),
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
var Ei = 0,
  Di = 0,
  Oi = [],
  ki = { o: null },
  Ai = null;
function ji() {
  if (typeof WeakRef != `function`) return;
  let e = { gcNudge: performance.now() };
  ((ki.o = e),
    (Ai = new WeakRef(e)),
    setTimeout(() => {
      ki.o === e && (ki.o = null);
    }, xi));
}
var Mi = () => !!Ai && !ki.o && !Ai.deref(),
  Ni = () =>
    new Promise((e) => {
      !document.hidden && typeof requestAnimationFrame == `function`
        ? requestAnimationFrame(() => e())
        : setTimeout(e, 16);
    }),
  Pi = { b: null },
  Fi = !1;
async function Ii() {
  if (!(Fi || typeof WeakRef != `function`)) {
    ((Fi = !0), z.fallbacks++);
    try {
      for (let e of Ci) {
        Pi.b = [];
        try {
          for (; Pi.b.length < e;) {
            for (let t = 0; t < 4 && Pi.b.length < e; t++)
              Pi.b.push(new ArrayBuffer(Si));
            await Ni();
          }
        } catch {
          return;
        }
        z.fallbackMB = e * 64;
        let t = { gcNudgeYoung: 1 },
          n = new WeakRef(t);
        t = null;
        for (let e = 0; e < wi && n.deref(); e++) await Ni();
        Pi.b = null;
        for (let e = 0; e < wi && !Mi(); e++) await Ni();
        if (Mi()) {
          z.fallbackFull++;
          return;
        }
      }
    } finally {
      ((Pi.b = null), (Fi = !1));
    }
  }
}
function Li() {
  Ei = 0;
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
      Oi.slice(0, 6).join(`, `) + (Oi.length > 6 ? ` +${Oi.length - 6}` : ``)),
    z.log.push([Math.round(z.lastAt) / 1e3, z.last]),
    z.log.length > 40 && z.log.shift(),
    (Oi = []),
    ji(),
    Ai &&
      setTimeout(() => {
        Mi() ? z.confirmed++ : Ii();
      }, bi));
}
function Ri(e) {
  if (!z.on) return;
  (z.requests++, Oi.length < 32 && Oi.push(e));
  let t = performance.now();
  Ei ? clearTimeout(Ei) : (Di = t);
  let n = Math.max(Math.min(t + _i, Di + vi), z.lastAt + yi);
  Ei = setTimeout(Li, Math.max(0, n - t));
}
var zi = `tgta-ctxloss`,
  Bi = `tgta-safe-quality`,
  Vi = `tgta-lowmem`,
  Hi = `tgta-lost-at`,
  Ui = `tgta-alive`,
  Wi = `tgta-resume`,
  Gi = `tgta-in-game`;
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
function Ki(e) {
  try {
    sessionStorage.removeItem(e);
  } catch {}
}
function qi() {
  try {
    V(Wi, `${location.pathname}|${Date.now()}`);
  } catch {}
}
function Ji() {
  try {
    V(Gi, location.pathname);
  } catch {}
}
function Yi() {
  try {
    return B(Gi) === location.pathname;
  } catch {
    return !1;
  }
}
function Xi() {
  let e = B(Wi);
  if (!e) return !1;
  Ki(Wi);
  let t = e.lastIndexOf(`|`);
  try {
    return (
      e.slice(0, t) === location.pathname &&
      Date.now() - Number(e.slice(t + 1)) < 12e4
    );
  } catch {
    return !1;
  }
}
function Zi() {
  (Ki(Ui), ba && U() && (delete da().live[va()], la()));
}
function Qi() {
  if ($i !== null) return $i;
  let e = Math.max(Number(B(`tgta-lowmem`)) || 0, W().lowmem, ea);
  return e >= 2 ? 2 : +(e >= 1);
}
var $i = null,
  ea = 0;
function ta(e, t) {
  ((ea = Math.max(0, Math.min(2, e | 0))),
    ($i = t === null ? null : Math.max(0, Math.min(2, t | 0))));
}
function na(e) {
  ((Number(B(`tgta-lowmem`)) || 0) < e && V(Vi, String(e)), fa({ lowmem: e }));
}
var H = [`low`, `medium`, `high`, `ultra`],
  ra = 2592e5,
  ia = null;
function U() {
  return (ia === null && (ia = Je().mobile), ia);
}
var aa = () => ({
  lowmem: 0,
  safeQ: ``,
  strikes: 0,
  cleanS: 0,
  at: 0,
  struck: 0,
  decayAt: 0,
  live: {},
});
function oa(e) {
  if (e.lowmem > 0) e.lowmem--;
  else if (e.safeQ) {
    let t = H.indexOf(e.safeQ);
    e.safeQ = t >= 0 && t < H.length - 2 ? H[t + 1] : ``;
  }
  e.cleanS = 0;
}
function sa(e, t) {
  if (!e.lowmem && !e.safeQ) return;
  let n = e.decayAt || e.struck || e.at || t;
  n > t + ra && (n = t);
  let r = Math.floor((t - n) / ra);
  if (((e.decayAt = n), !(r <= 0))) {
    for (let t = 0; t < r && (e.lowmem || e.safeQ); t++)
      (oa(e), (e.strikes = Math.max(0, e.strikes - 1)));
    ((e.decayAt = n + r * ra),
      (e.at = t),
      !e.lowmem && !e.safeQ && ((e.strikes = 0), (e.cleanS = 0)));
  }
}
var ca = null;
function W() {
  if (ca) return ca;
  if (!U()) return (ca = aa());
  let e = {};
  try {
    let t = Mn();
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
    (ca = {
      lowmem: t(e.lowmem, 0, 2),
      safeQ: typeof e.safeQ == `string` && H.includes(e.safeQ) ? e.safeQ : ``,
      strikes: t(e.strikes, 0, 99),
      cleanS: t(e.cleanS, 0, 1e7),
      at: t(e.at, 0, 2 ** 53 - 1),
      struck: t(e.struck, 0, 2 ** 53 - 1),
      decayAt: t(e.decayAt, 0, 2 ** 53 - 1),
      live: n,
    }),
    sa(ca, Date.now()),
    ca
  );
}
function la() {
  U() && Nn(JSON.stringify(W()));
}
function ua(e) {
  return Math.min(8, 1 + 2 * Math.max(1, e));
}
function da() {
  return ((ca = null), W());
}
function fa(e) {
  if (!U()) return;
  let t = da(),
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
    la());
}
function pa() {
  let e = B(`tgta-safe-quality`) ?? ``,
    t = W().safeQ,
    n = H.indexOf(e),
    r = H.indexOf(t);
  return n < 0 ? (r < 0 ? `` : t) : r < 0 || n <= r ? e : t;
}
function ma(e) {
  if (!H.includes(e)) return;
  let t = B(Bi);
  ((!t || H.indexOf(e) < H.indexOf(t)) && V(Bi, e), fa({ safeQ: e }));
}
function ha() {
  let e = W();
  return U() && (e.lowmem > 0 || !!e.safeQ);
}
function ga(e) {
  if (!U() || !(e > 0)) return;
  let t = da();
  (t.lowmem || t.safeQ) &&
    ((t.cleanS += e),
    t.cleanS >= 480 * ua(t.strikes) && oa(t),
    (t.at = Date.now()),
    la());
}
function _a() {
  return { ...W(), live: { ...W().live }, on: U() };
}
function va() {
  let e = `tgta-tab`,
    t = B(e);
  return (t || ((t = Math.random().toString(36).slice(2, 10)), V(e, t)), t);
}
function ya() {
  if (!U()) return { killedElsewhere: !1 };
  let e = W(),
    t = va(),
    n = Date.now(),
    r = !1;
  for (let [i, a] of Object.entries(e.live)) {
    if (i === t) continue;
    let o = n - a.t;
    o < 6e4 || (a.v && !a.p && o < 108e5 && (r = !0), delete e.live[i]);
  }
  let i = { t: n, v: document.visibilityState === `hidden` ? 0 : 1, p: 0 };
  ((e.live[t] = i), la());
  let a = () => {
    ((i.t = Date.now()),
      (i.v = document.visibilityState === `hidden` ? 0 : 1),
      (da().live[t] = i),
      la());
  };
  return (
    setInterval(() => {
      document.visibilityState !== `hidden` && a();
    }, 2e4),
    document.addEventListener(`visibilitychange`, a),
    window.addEventListener(`pagehide`, () => {
      (delete da().live[t], la());
    }),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    (ba = i),
    (xa = a),
    { killedElsewhere: r }
  );
}
var ba = null,
  xa = null;
function Sa() {
  let e = Number(B(Hi));
  return e > 0 ? Date.now() - e : 1 / 0;
}
function Ca() {
  let e = null;
  try {
    let t = B(Ui);
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
      ((i.t = Date.now()), V(Ui, JSON.stringify(i)));
    };
  (a(),
    document.addEventListener(`visibilitychange`, () => {
      ((i.vis = document.visibilityState === `hidden` ? `hidden` : `visible`),
        a());
    }),
    window.addEventListener(`pagehide`, () => Ki(Ui)),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    (wa = i),
    (Ta = a));
  let o = ya();
  return (
    n
      ? fa(r >= 2 ? { safeQ: `low`, lowmem: 2 } : { lowmem: 1 })
      : o.killedElsewhere &&
        (fa({ lowmem: 1 }),
        (Number(B(`tgta-lowmem`)) || 0) < 1 && V(Vi, `1`),
        V(Hi, String(t))),
    { killed: n, count: r, duringLoad: n && e.ph === `load` }
  );
}
var wa = null,
  Ta = null;
function Ea(e) {
  (ba && xa && ((ba.p = 1), xa()),
    wa && Ta && ((wa.ph = `play`), e && (wa.n = 0), Ta()));
}
var Da = {
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
function Oa(e, t, n) {
  if ((console.error(`[boot] WebGL context unavailable`, e), n))
    try {
      (na(1), V(Hi, String(Date.now())));
    } catch {}
  let r = Da[t === `en` ? `en` : `zh`],
    i = Error(`${r.title} ${r.help}`);
  return ((i.name = `WebGLUnavailable`), i);
}
function ka(e) {
  return e?.name === `WebGLUnavailable`;
}
function Aa(e) {
  let t = document.getElementById(`loader`),
    n = document.getElementById(`ld-err`);
  if (!t || !n || !t.isConnected) return !1;
  let r = Da[e ? `en` : `zh`];
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
var ja = 0,
  Ma = null;
function Na() {
  return (
    Ma ||
      (ja++,
      (Ma = t(() => import(`./analytics-B76dRwr5.js`), [])),
      Ma.then(
        () => ja--,
        () => {
          (ja--, (Ma = null));
        },
      )),
    Ma
  );
}
function Pa() {
  return ja > 0;
}
function Fa(e, t) {}
var Ia =
    typeof location < `u` && new URLSearchParams(location.search).has(`prof`),
  La = {
    on: Ia,
    stage: ``,
    log: [],
    seg(e, t) {
      if (!Ia) return;
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
Ia && typeof window < `u` && (window.__prof = La);
var Ra = null,
  za = class e {
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
      return ((Ra ||= new e(16384, 24576)), Ra.reset());
    }
    static releaseScratch() {
      Ra = null;
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
        te = Math.sqrt(x * x + S * S + C * C) || 1;
      ((x /= te), (S /= te), (C /= te));
      let w = this.vertex(e, t, n, x, S, C, f, p);
      return (
        this.vertex(r, i, a, x, S, C, m, p),
        this.vertex(o, s, c, x, S, C, m, h),
        this.vertex(l, u, d, x, S, C, f, h),
        this.tri(w, w + 1, w + 2).tri(w, w + 2, w + 3)
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
        t = new le();
      (t.setAttribute(`position`, new fe(this.pos.slice(0, e * 3), 3)),
        t.setAttribute(`normal`, new fe(this.nor.slice(0, e * 3), 3)),
        t.setAttribute(`uv`, new fe(this.uv.slice(0, e * 2), 2)));
      let n = new ae(this.ca.slice(0, e * 8), 8);
      (t.setAttribute(`color`, new Se(n, 3, 0, !0)),
        t.setAttribute(`aCity`, new Se(n, 4, 4, !0)));
      let r = e <= 65535 ? new Uint16Array(this.ni) : new Uint32Array(this.ni);
      return (
        r.set(this.idx.subarray(0, this.ni)),
        t.setIndex(new fe(r, 1)),
        t.computeBoundingSphere(),
        t.computeBoundingBox(),
        t
      );
    }
    reset() {
      return ((this.n = 0), (this.ni = 0), this);
    }
  },
  Ba = 1 << 20;
function Va(e, t) {
  let n, r;
  switch (t.format) {
    case ke:
      ((n = e.RGBA), (r = 4));
      break;
    case ue:
      ((n = e.RG), (r = 2));
      break;
    case oe:
      ((n = e.RED), (r = 1));
      break;
    default:
      return null;
  }
  switch (t.type) {
    case E:
      return { format: n, type: e.UNSIGNED_BYTE, comps: r, bpc: 1 };
    case ne:
      return { format: n, type: e.HALF_FLOAT, comps: r, bpc: 2 };
    case u:
      return { format: n, type: e.FLOAT, comps: r, bpc: 4 };
    default:
      return null;
  }
}
var Ha = (e) =>
  (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
  (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas);
function Ua(e, t, n) {
  let r = e.state,
    i = a,
    o = i.getPrimaries(i.workingColorSpace),
    s = n.colorSpace === `` ? null : i.getPrimaries(n.colorSpace);
  (r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY),
    r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
    r.pixelStorei(
      t.UNPACK_COLORSPACE_CONVERSION_WEBGL,
      n.colorSpace === `` || o === s ? t.NONE : t.BROWSER_DEFAULT_WEBGL,
    ),
    r.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment),
    r.pixelStorei(t.UNPACK_ROW_LENGTH, 0),
    r.pixelStorei(t.UNPACK_SKIP_PIXELS, 0),
    r.pixelStorei(t.UNPACK_SKIP_ROWS, 0));
}
function Wa(e, t, n) {
  let r = e.properties.get(n).__webglTexture;
  return r ? (e.state.bindTexture(t.TEXTURE_2D, r), !0) : !1;
}
var Ga = { jobs: 0, bands: 0, whole: 0, maxBandMs: 0, lastMs: 0 };
function* Ka(e, t, n = {}) {
  let r = e.getContext();
  if (r.isContextLost()) return `skip`;
  let i = t.image;
  if (t.version === 0 || !i || i.complete === !1) return `skip`;
  let a = i?.width ?? 0,
    o = i?.height ?? 0,
    s = t,
    c = t.isDataTexture ? (i?.data ?? null) : null,
    l = c ? Va(r, t) : null,
    u = !c && Ha(i) ? i : null,
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
      p * o >= Ba;
  if ((Ga.jobs++, !m)) {
    try {
      e.initTexture(t);
    } catch (e) {
      return (console.warn(`[upload] texture upload failed`, e), `skip`);
    }
    return (Ga.whole++, `whole`);
  }
  let h = Zr(t),
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
    b = Math.max(8, Math.min(o, Math.floor(Math.min(y(), Ba) / p))),
    ee = n.targetMs ?? 3,
    x = null,
    S = null,
    C = performance.now(),
    te = 0;
  try {
    for (let i = 0; i < o;) {
      if ((yield, r.isContextLost() || !Wa(e, r, t))) return `skip`;
      let s = Math.min(b, o - i, Math.max(8, Math.floor(y() / p))),
        c = performance.now();
      Ua(e, r, t);
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
      (n.onBand?.(te++, f, s),
        Ga.bands++,
        f > Ga.maxBandMs && (Ga.maxBandMs = f),
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
    (x && (x.width = x.height = 1), (Ga.lastMs = performance.now() - C));
  }
  return (_(), `bands`);
}
function qa(e, t, n, r, i = {}) {
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
    u = Va(a, t);
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
    (Wa(e, a, t), Ua(e, a, t));
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
function Ja(e = typeof location > `u` ? `` : location.search) {
  return new URLSearchParams(e).get(`rz`) !== `0`;
}
var Ya =
    /shadowCoord\.xyz \/= shadowCoord\.w;\s*shadowCoord\.z \+= shadowBias;\s*bool inFrustum/,
  Xa = `shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`,
  Za =
    /float getShadow\(\s*sampler2DShadow[^{]*\{[^}]*?USE_REVERSED_DEPTH_BUFFER[^}]*?shadowBias[\s\S]*?bool inFrustum/;
function Qa(e = ve) {
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
      : Ya.test(t)
        ? ((e.shadowmap_pars_fragment = t.replace(Ya, Xa)), `patched`)
        : Za.test(t)
          ? `native`
          : `unknown`
    : `unknown`;
}
function $a(e = ve) {
  let t = e.shadowmap_pars_fragment;
  typeof t == `string` &&
    t.includes(`shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`) &&
    (e.shadowmap_pars_fragment = t.replace(Xa, eo.get(e) ?? t));
}
var eo = new WeakMap();
function to(e) {
  let t = e.shadowmap_pars_fragment,
    n = typeof t == `string` ? Ya.exec(t) : null;
  n && !eo.has(e) && eo.set(e, n[0]);
}
var no = 0.6180339,
  ro = -0.4142135;
function io(e, t) {
  let n = null,
    r = Object.prototype.hasOwnProperty.call(t, `polygonOffset`),
    i = t.polygonOffset;
  t.polygonOffset = (e, t) => {
    n = [e, t];
  };
  try {
    (e.setPolygonOffset(!0, no, ro), e.setPolygonOffset(!1));
  } finally {
    r ? (t.polygonOffset = i) : delete t.polygonOffset;
  }
  let a = n;
  if (!a) return null;
  let o = (e, t) => (Math.abs(e - t) < 1e-6 ? -1 : +(Math.abs(e + t) < 1e-6)),
    s = o(a[0], no),
    c = o(a[1], ro);
  return s && c ? { factor: s, units: c } : null;
}
function ao(e, t, n = 16) {
  if (t.factor === 1 && t.units === 1 && n === 1) return;
  let r = e.polygonOffset.bind(e),
    i = t.factor,
    a = t.units * n;
  e.polygonOffset = (e, t) => r(e * i, t * a);
}
function oo(e, t, n = typeof location > `u` ? `` : location.search) {
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
  (to(a), (r.pcf = Qa(a)));
  let o = e.getContext();
  if (
    ((r.polygonOffset = io(e.state, o)),
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
      $a(a),
      r
    );
  let s = Number(new URLSearchParams(n).get(`rzunits`));
  return (ao(o, r.polygonOffset, s > 0 ? s : 16), (r.active = !0), r);
}
var so = 300;
function co(e) {
  let t = 0,
    n = 0,
    r = () => {
      ((t = 0), e());
    },
    i = () => {
      (e(),
        (t ||= requestAnimationFrame(r)),
        clearTimeout(n),
        (n = window.setTimeout(e, so)));
    },
    a = window.visualViewport;
  return (
    window.addEventListener(`resize`, i),
    window.addEventListener(`orientationchange`, i),
    a?.addEventListener(`resize`, i),
    () => {
      (window.removeEventListener(`resize`, i),
        window.removeEventListener(`orientationchange`, i),
        a?.removeEventListener(`resize`, i),
        t && cancelAnimationFrame(t),
        clearTimeout(n));
    }
  );
}
function lo() {
  return typeof matchMedia == `function`
    ? matchMedia(`(orientation: portrait)`).matches
    : window.innerHeight > window.innerWidth;
}
var uo =
    typeof location > `u`
      ? NaN
      : Number(new URLSearchParams(location.search).get(`near`)),
  fo = uo > 0.05 && uo < 3 ? uo : 0.3,
  po = (() => {
    if (typeof location > `u`) return !1;
    let e = new URLSearchParams(location.search),
      t = e.get(`gpubudget`);
    return (
      (e.has(`gpuacct`) && e.get(`gpuacct`) !== `0`) ||
      (t !== null && t !== `0` && t !== ``)
    );
  })(),
  mo = null,
  ho = null;
function go() {
  return po
    ? (ho ??= t(
        () =>
          Promise.resolve()
            .then(() => dc)
            .then(
              (e) => (mo = e),
              (e) => (
                console.warn(`[renderer] GPU accounting unavailable`, e),
                null
              ),
            ),
        void 0,
      ))
    : Promise.resolve(null);
}
var _o = 1e3 / 60,
  vo = 0.05,
  yo = 12,
  bo = 0.985,
  G = { on: !1, depth: 1 / 0, culled: 0 },
  xo = () => {},
  So = class {
    quality;
    gl;
    scene = new he();
    camera;
    canvas;
    reversedZ;
    post = null;
    pixelRatio = 1;
    frameMsAvg = _o;
    gpuMs = -1;
    cpuMs = 0;
    targetMs = _o;
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
    hdrType = ne;
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
        ((this.gl = new be({
          antialias: t.antialias && !n,
          powerPreference: `high-performance`,
          stencil: !1,
          alpha: !1,
          preserveDrawingBuffer: new URLSearchParams(location.search).has(
            `shot`,
          ),
          reversedDepthBuffer: Ja(),
        })),
        (this.reversedZ = oo(this.gl, Ja())),
        (this.gl.debug.checkShaderErrors = !1),
        po)
      ) {
        let e = (e) => {
          if (e && !this.gpuAccount)
            try {
              this.gpuAccount = new e.GpuAccount(this.gl.getContext());
            } catch (e) {
              console.warn(`[renderer] GPU accounting unavailable`, e);
            }
        };
        mo ? e(mo) : go().then(e);
      }
      (typeof window < `u` && (window.__gpuAccount = () => this.gpuMemory()),
        typeof window < `u` &&
          new URLSearchParams(location.search).has(`shot`) &&
          (window.__three = De),
        (this.canvas = this.gl.domElement),
        (this.canvas.id = `game-canvas`),
        e.appendChild(this.canvas),
        (this.gl.outputColorSpace = g),
        (this.gl.toneMapping = 4),
        (this.gl.toneMappingExposure = 1),
        (this.gl.shadowMap.enabled = t.shadows),
        (this.gl.shadowMap.type = 1),
        (this.gl.info.autoReset = !1),
        this.gl.setOpaqueSort(this.opaqueSort),
        this.wrapShadowMap(),
        this.skipEmptyBatches(),
        (this.camera = new te(60, 1, fo, t.drawDistance)),
        (this.lastFar = this.camera.far));
      let r = new URLSearchParams(location.search),
        i = Number(r.get(`dpr`));
      ((r.get(`adapt`) === `0` || i > 0) && (this.adaptive = !1),
        (this.pixelRatio = i > 0 ? i : this.startPixelRatio()),
        this.initTimer(),
        (this.hdrType = ko(this.gl.getContext())),
        this.resize(),
        co(() => {
          (window.innerWidth !== this.width ||
            window.innerHeight !== this.height) &&
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
        (this.targetMs = Math.max(_o, e)),
        (this.frameMsAvg = this.targetMs),
        (this.probe = null),
        this.suspendAdapt(2));
    }
    minPR() {
      return Math.min(this.maxPR(), this.quality.minPixelRatio);
    }
    startPixelRatio() {
      let e = this.maxPR();
      return No(
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
            Math.max(c, Math.min(this.pixelRatio - vo, this.pixelRatio * e)),
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
                    this.pixelRatio + vo,
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
      let c = Math.max(_o, this.frameCapMs),
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
        let a = G.on;
        G.on = !1;
        try {
          t(n, r, i);
        } finally {
          G.on = a;
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
            a = new _e(r.width, r.height, {
              format: oe,
              type: E,
              depthBuffer: !0,
              generateMipmaps: !1,
              minFilter: y,
              magFilter: y,
            });
          a.texture.name = r.texture.name;
          let o = new d(r.width, r.height, i.type);
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
      let t = No(e);
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
      this.post && (i = new _e(4, 4, { type: E, depthBuffer: !0 }));
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
      this.post && (i = new _e(4, 4, { type: E, depthBuffer: !0 }));
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
                Ao(t),
              a = Array.isArray(t.material) ? t.material : [t.material],
              o = !1;
            for (let e of a) {
              let t = e.uuid + n;
              i.has(t) || (i.add(t), (o = !0));
            }
            o && r.push(e);
          });
        let a = new he();
        ((a.fog = this.scene.fog), (a.environment = this.scene.environment));
        let s = [];
        (this.scene.traverseVisible((e) => {
          e.isLight && s.push(e);
        }),
          (a.children = s));
        let c = new T(),
          l = c,
          u = 0;
        for (; u < r.length;) {
          let e = performance.now();
          do ((l.children = [r[u++]]), o(c, a), (l.children = []));
          while (u < r.length && !(n ? n() : performance.now() - e > 4));
          u < r.length && (await t());
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
          ? (this.compileRT ??= new _e(4, 4, { type: E, depthBuffer: !0 }))
          : null,
        o = new he();
      ((o.fog = this.scene.fog), (o.environment = this.scene.environment));
      let s = [];
      (this.scene.traverseVisible((e) => {
        e.isLight && s.push(e);
      }),
        (o.children = s));
      let c = new T(),
        l = Object.create(e);
      ((l.children = []), (l.material = t), (c.children = [l]));
      let u = n.getRenderTarget();
      try {
        return (a && n.setRenderTarget(a), n.compile(c, this.camera, o), !0);
      } catch (e) {
        return (console.warn(`[renderer] compileAs failed`, e), !1);
      } finally {
        (n.setRenderTarget(u), (o.children = []), (r.material = i));
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
        let r = yield* Ka(n.gl, e, t);
        return (r !== `skip` && n.noteUpload(`texture '${e.name}'`), r);
      })();
    }
    uploadRows(e, t, n, r) {
      if (this.contextLost) return !1;
      let i = qa(this.gl, e, t, n, r);
      return (i && this.noteUpload(`rows of '${e.name}'`), i);
    }
    get bandStats() {
      return Ga;
    }
    uploadScene = null;
    uploadRT = null;
    noDraw = new je({
      name: `core-upload-nodraw`,
      glslVersion: f,
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
        n = (this.uploadScene ??= new he());
      n.matrixWorldAutoUpdate = !1;
      let r = (this.uploadRT ??= new _e(1, 1, { depthBuffer: !1 })),
        i = [],
        a = new Map(),
        o = 0,
        s = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      for (let t of e) {
        let e = t.geometry;
        if (!e) continue;
        (i.push({
          m: t,
          mat: t.material,
          v: t.visible,
          fc: t.frustumCulled,
          obr: s(t, `onBeforeRender`) ? t.onBeforeRender : void 0,
          oar: s(t, `onAfterRender`) ? t.onAfterRender : void 0,
        }),
          (t.material = this.noDraw),
          (t.visible = !0),
          (t.frustumCulled = !1),
          (t.onBeforeRender = xo),
          (t.onAfterRender = xo));
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
      let c = t.shadowMap,
        l = c.autoUpdate,
        u = c.needsUpdate;
      ((c.autoUpdate = !1), (c.needsUpdate = !1));
      let d = t.getRenderTarget();
      this.warmDepth++;
      try {
        (t.setRenderTarget(r),
          t.render(n, this.camera),
          this.noteUpload(`geometry`));
      } catch (e) {
        console.warn(`[renderer] geometry pre-upload failed`, e);
      } finally {
        (this.warmDepth--,
          t.setRenderTarget(d),
          (c.autoUpdate = l),
          (c.needsUpdate = u),
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
      let t = (this.prewarmRoot = new T());
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
        a = new xe(),
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
          let t = Oo(e);
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
          let n = Oo(e);
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
        let e = new le();
        (e.setAttribute(
          `position`,
          new w([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0], 3),
        ),
          e.setAttribute(`normal`, new w([0, 0, 1, 0, 0, 1, 0, 0, 1], 3)));
        let t = new c(e, new s({ name: `core-shadow-flipper` })),
          n = new Ee(e, new s({ name: `core-shadow-flipper-i` }), 1);
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
      let i = (this.shadowProxy ??= new he());
      ((i.matrixWorldAutoUpdate = !1),
        (i.fog = this.scene.fog),
        (i.environment = this.scene.environment),
        n.push(this.flipperFor(e), e),
        (i.children = n));
      let a = e,
        o = Object.prototype.hasOwnProperty.call(a, `intersectsFrustum`)
          ? a.intersectsFrustum
          : void 0,
        s = { v: e.visible, fc: e.frustumCulled, cs: e.castShadow },
        c = e,
        l =
          c.isInstancedMesh && c.count === 0 && c.instanceMatrix.count > 0
            ? 0
            : -1,
        u = (this.uploadRT ??= new _e(1, 1, { depthBuffer: !1 })),
        d = t.getRenderTarget();
      ((e.visible = !0),
        (e.frustumCulled = !0),
        (e.castShadow = !0),
        (a.intersectsFrustum = () => this.inShadowPass),
        l === 0 && (c.count = 1),
        this.forceShadowUpdate(),
        (this.warmingShadow = !0));
      try {
        return (t.setRenderTarget(u), t.render(i, this.camera), !0);
      } catch (e) {
        return (console.warn(`[renderer] shadow-depth warm failed`, e), !1);
      } finally {
        ((this.warmingShadow = !1),
          t.setRenderTarget(d),
          (i.children = []),
          (e.visible = s.v),
          (e.frustumCulled = s.fc),
          (e.castShadow = s.cs),
          o ? (a.intersectsFrustum = o) : delete a.intersectsFrustum,
          l === 0 && (c.count = 0));
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
        let u = i ? Oo(n) : null;
        if ((c && jo(n, c) && s.push(r), u === null)) return;
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
      ((G.depth = t && t.isFog && this.dissolveCull ? t.far * bo : 1 / 0),
        (G.on = G.depth < 1 / 0),
        (G.culled = 0));
      try {
        this.post
          ? this.post.render(e)
          : this.gl.render(this.scene, this.camera);
      } finally {
        G.on = !1;
      }
      ((this.dissolveCulled = G.culled), this.endTimer(), this.restoreEmpty());
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
        i.visible && Po(i) && ((i.visible = !1), t.push(i), r++);
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
        !e.children.length && Mo(t) && this.cullList.push(e));
    };
    installTight(e) {
      if (e.__tight !== void 0) return;
      if (
        e.isInstancedMesh ||
        e.isSkinnedMesh ||
        e.isBatchedMesh ||
        e.morphTargetInfluences ||
        e.userData?.noTightCull ||
        e.intersectsFrustum !== c.prototype.intersectsFrustum
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
      let i = r.radius >= yo;
      ((e.__tight = +!!i),
        i && ((e.intersectsFrustum = Co), this.tightCount++));
    }
    restoreEmpty() {
      let e = this.hidden;
      for (let t = 0; t < e.length; t++) e[t].visible = !0;
      e.length = 0;
    }
  };
function Co(e) {
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
    ? e.intersectsBox(o) && !wo(this, e, o)
    : Eo(this, n, r)
      ? e.intersectsBox(this.__wb) && !wo(this, e, this.__wb)
      : ((this.__tight = 0),
        delete this.intersectsFrustum,
        e.intersectsObject(this));
}
function wo(e, t, n) {
  if (!G.on) return !1;
  let r = t.planes[5],
    i = r.normal;
  return (i.x > 0 ? n.min.x : n.max.x) * i.x +
    (i.y > 0 ? n.min.y : n.max.y) * i.y +
    (i.z > 0 ? n.min.z : n.max.z) * i.z +
    r.constant <=
    G.depth ||
    (e.__fcMat !== e.material &&
      ((e.__fcMat = e.material), (e.__fc = To(e.material))),
    !e.__fc)
    ? !1
    : (G.culled++, !0);
}
function To(e) {
  let t = Array.isArray(e) ? e : [e];
  if (!t.length) return !1;
  for (let e of t) {
    let t = e;
    if (!e || !e.fog || t.isShaderMaterial || t.defines?.FOG_NO_CLIP !== void 0)
      return !1;
  }
  return !0;
}
function Eo(e, t, n) {
  let r = e.geometry,
    i = e.matrixWorld.elements,
    a = (e.__wk ??= new Float64Array(20)),
    o = (e.__wb ??= new Ce());
  for (let e = 0; e < 16; e++) a[e] = i[e];
  if (
    ((a[16] = n.center.x),
    (a[17] = n.center.y),
    (a[18] = n.center.z),
    (a[19] = n.radius),
    (e.__wbSrc = t),
    t.isEmpty() || !Do(t, n))
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
function Do(e, t) {
  let n = t.radius * 1.001 + 0.01,
    r = t.center,
    i = Math.max(r.x - e.min.x, e.max.x - r.x),
    a = Math.max(r.y - e.min.y, e.max.y - r.y),
    o = Math.max(r.z - e.min.z, e.max.z - r.z);
  return i <= n && a <= n && o <= n;
}
function Oo(e) {
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
function ko(e) {
  try {
    if (
      e.getExtension(`EXT_color_buffer_float`) ||
      e.getExtension(`EXT_color_buffer_half_float`)
    )
      return ne;
  } catch {}
  return E;
}
function Ao(e) {
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
function jo(e, t) {
  for (let n = e; n; n = n.parent) if (n === t) return !0;
  return !1;
}
function Mo(e) {
  if (e.isInstancedMesh) return !0;
  let t = e.geometry;
  if (t.isInstancedBufferGeometry || t.drawRange.count !== 1 / 0) return !0;
  let n = t.index;
  if (n) return n.count === 0;
  let r = t.attributes.position;
  return !r || r.count === 0;
}
function No(e) {
  return Math.round(e / vo) * vo;
}
function Po(e) {
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
var Fo = class {
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
      (window.__memCensus = () => Ro(e)));
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
      packs: Io(this.ctx),
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
function Io(e) {
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
function Lo(e, t) {
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
          c = (t) => (e.get(t).__version === void 0 ? 0 : qr(t) / 1048576),
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
function Ro(e) {
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
var zo = { TWD: !0, JPY: !1 },
  Bo = { style: `tight` },
  Vo = { style: `tight`, group: `none` },
  Ho = `TWD`;
function Uo(e) {
  hr[e] && (Ho = e);
}
function Wo(e = Ho) {
  return hr[e].symbol;
}
function Go(e = `spaced`, t = Ho) {
  return hr[t].symbol + (e === `spaced` && zo[t] ? ` ` : ``);
}
function Ko(e, t = `en`) {
  if (t === `none`) return `${e}`;
  let n = Math.round(e);
  return t === `host` ? n.toLocaleString() : n.toLocaleString(`en-US`);
}
function qo(e, t = {}) {
  let n = Ko(e, t.group),
    r = t.style ?? `spaced`;
  return r === `bare` ? n : Go(r, t.currency ?? Ho) + n;
}
function Jo(e, t = {}) {
  return qo(_r(e, t.currency ?? Ho), t);
}
function Yo(e, t) {
  return (
    Uo(t),
    {
      currency: t,
      symbol: Wo(t),
      balance: (n = t) => _r(e.wallet, n),
      add: (n, r = t, i) => e.addMoney(n, i, r),
      canAfford: (n, r = t) => Number.isFinite(n) && e.wallet >= gr(n, r),
      spend(n, r = t, i) {
        return !(Number.isFinite(n) && n >= 0) || e.wallet < gr(n, r)
          ? !1
          : (e.addMoney(-n, i, r), !0);
      },
      format: (e, n) => qo(e, { currency: t, ...n }),
      formatUnits: (e, n) => Jo(e, { currency: t, ...n }),
    }
  );
}
var Xo = `tgta-restart-reason`,
  Zo = `tgta-crash-log-v1`;
function Qo() {
  try {
    let e = JSON.parse(localStorage.getItem(Zo) || `[]`);
    return Array.isArray(e)
      ? e.filter(
          (e) => e && typeof e.reason == `string` && typeof e.at == `number`,
        )
      : [];
  } catch {
    return [];
  }
}
function $o(e, t = {}) {
  let n = {
    reason: e,
    at: Date.now(),
    path: typeof location < `u` ? location.pathname : ``,
    ...t,
  };
  try {
    V(Xo, JSON.stringify(n));
  } catch {}
  try {
    let e = Qo();
    (e.push(n), localStorage.setItem(Zo, JSON.stringify(e.slice(-10))));
  } catch {}
  console.warn(`[restart] ${e}`, t);
}
typeof window < `u` && (window.__crashLog = Qo);
var es = `tgta-chunk-reload`,
  ts = 6e5,
  ns = 6e4,
  rs = `loading`,
  is = null,
  as = !1,
  os = !1,
  ss = `none`;
function cs(e, t) {
  ((rs = e),
    t && (is = t),
    as && rs !== `playing` && us(),
    rs === `playing` && ds());
}
function ls(e) {
  if (as || os) return;
  let t = Number(B(es)) || 0;
  if (t > 0 && Date.now() - t < ts) {
    (console.warn(
      `[update] ${e}: code chunk unavailable again — not reloading (once per 10 min)`,
    ),
      ss === `none` && (ss = `due`),
      ds());
    return;
  }
  if (
    ((as = !0),
    V(es, String(Date.now())),
    console.warn(
      `[update] ${e}: code chunk unavailable (new deploy or network error) — reloading ${rs === `playing` ? `at the next safe moment` : `now`}`,
    ),
    rs !== `playing` || !is)
  )
    return us();
  let n = is;
  fs(
    n,
    {
      zh: `遊戲已更新，稍後將自動重新載入（進度會保存）`,
      en: `The game was updated — it will reload shortly (progress is saved)`,
    },
    6,
  );
  let r = () => us();
  (n.events.on(`game:pause`, ({ paused: e }) => e && r()),
    n.events.on(`player:respawned`, r),
    n.events.on(`mission:completed`, r),
    n.events.on(`mission:failed`, r),
    n.events.on(`mrt:travel`, r));
  let i = Date.now(),
    a = () => {
      if (os) return;
      let e = !1;
      try {
        e = !!n.missions?.active;
      } catch {
        e = !1;
      }
      if (e || Date.now() - i < ns) return void setTimeout(a, 5e3);
      (fs(
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
function us() {
  if (!os) {
    ((os = !0), $o(`update`));
    try {
      location.reload();
    } catch {}
  }
}
function ds() {
  ss === `due` &&
    rs === `playing` &&
    is &&
    ((ss = `shown`),
    fs(
      is,
      {
        zh: `網路不穩，部分街區未載入 — 重新整理可修復`,
        en: `Unstable network: some districts did not load — refreshing the page can fix it`,
      },
      8,
    ));
}
function fs(e, t, n) {
  try {
    e.events.emit(`notify`, { text: t, duration: n, kind: `info` });
  } catch {}
}
var ps = e({
  CLOUD_SAVE: () => !0,
  accountSignedIn: () => xs,
  flushCloudDeparture: () => gs,
  initializeCloud: () => hs,
  mountCloudPhoneStatus: () => bs,
  mountCloudSettings: () => vs,
  mountCloudTitle: () => ys,
  onCloudSessionChange: () => Cs,
  openCloudPanel: () => _s,
  openCloudSignIn: () => Ss,
  prepareCloudBoot: () => ms,
});
async function ms() {
  {
    let e = t(
      () => import(`./boot-BYKah_CW.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    );
    (e.catch(() => {}),
      await t(
        () => import(`./landing-CD9ntJhH.js`).then((e) => e.runLanding()),
        __vite__mapDeps([11, 9, 7, 6, 10, 3, 5, 8, 1, 2, 12, 13, 14, 15]),
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
function hs(e) {
  t(
    () => import(`./coordinator-Brhh9B6T.js`).then((t) => t.installCloud(e)),
    __vite__mapDeps([16, 7, 8, 1, 2, 3, 4, 5, 6, 9, 10, 12, 13]),
  ).catch(() => {});
}
async function gs() {
  await t(
    () => import(`./coordinator-Brhh9B6T.js`).then((e) => e.flushDeparture()),
    __vite__mapDeps([16, 7, 8, 1, 2, 3, 4, 5, 6, 9, 10, 12, 13]),
  ).catch(() => {});
}
function _s(e, n) {
  t(
    () =>
      import(`./ui-P-VyG5rz.js`).then((t) => {
        (n?.focus(), t.showCloudPanel(e));
      }),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function vs(e, n) {
  t(
    () => import(`./ui-P-VyG5rz.js`).then((t) => t.mountCloudSettings(e, n)),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function ys(e, n) {
  t(
    () => import(`./ui-P-VyG5rz.js`).then((t) => t.mountCloudTitle(e, n)),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function bs(e, n) {
  t(
    () => import(`./ui-P-VyG5rz.js`).then((t) => t.mountCloudPhoneStatus(e, n)),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function xs() {
  let e = Pn();
  return !!e && typeof e.access_token == `string` && e.anonymous === !1;
}
function Ss(e, n) {
  t(
    () =>
      import(`./ui-P-VyG5rz.js`).then((t) =>
        t.showCloudPanel(e, `signin`, { notice: { message: n, kind: `info` } }),
      ),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function Cs(e) {
  t(
    () =>
      import(`./session-DVEw0yxj.js`)
        .then((e) => e.h)
        .then((t) => t.onSessionChange(() => e())),
    __vite__mapDeps([2, 3]),
  ).catch(() => {});
}
var ws = class extends Error {
    label;
    ms;
    name = `DeadlineError`;
    constructor(e, t) {
      (super(`${e}: no answer after ${t} ms`), (this.label = e), (this.ms = t));
    }
  },
  Ts = 15e3;
function Es(e, t, n = `await`, r) {
  return new Promise((i, a) => {
    let o = !1,
      s = setTimeout(() => {
        if (!o) {
          if (((o = !0), !r)) return a(new ws(n, t));
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
var Ds = (e, t, n) => (e < t ? t : e > n ? n : e),
  Os = (e, t, n) => e + (t - e) * n,
  ks = (e, t, n) => Ds((n - e) / (t - e), 0, 1),
  As = (e, t, n) => {
    let r = ks(e, t, n);
    return r * r * (3 - 2 * r);
  },
  js = (e, t) => 1 - Math.exp(-e * t),
  Ms = (e, t, n, r) => Os(e, t, js(n, r));
function Ns(e) {
  return (
    (e = (e + Math.PI) % (Math.PI * 2)),
    e < 0 && (e += Math.PI * 2),
    e - Math.PI
  );
}
function Ps(e, t, n, r) {
  return e + Ns(t - e) * js(n, r);
}
(new xe(), new xe(), new xe(), new p(), new S(), new ee());
function Fs(
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
function Is(e, n) {
  t(
    () =>
      import(`./profile-DAhvJU_P.js`).then((t) => {
        e.isConnected && t.mountNameRow(e, n);
      }),
    __vite__mapDeps([19, 2, 3, 14, 6, 7, 12, 18, 20]),
  ).catch(() => {});
}
function Ls(e, n) {
  t(
    () =>
      import(`./profile-DAhvJU_P.js`).then((t) => {
        e.isConnected && t.mountNameView(e, n);
      }),
    __vite__mapDeps([19, 2, 3, 14, 6, 7, 12, 18, 20]),
  ).catch(() => {});
}
function Rs(e, n, r) {
  let i = !0,
    a;
  return (
    t(
      () =>
        import(`./phone-Crnwgx7Y.js`).then((t) => {
          i && n.isConnected && (a = t.mountSocialApp(e, n, r));
        }),
      __vite__mapDeps([21, 2, 3, 19, 14, 6, 7, 12, 18, 20]),
    ).catch(() => {}),
    () => {
      ((i = !1), a?.());
    }
  );
}
function zs(e, n) {
  let r = !0,
    i;
  return (
    t(
      () =>
        import(`./phone-Crnwgx7Y.js`).then((t) => {
          r && (i = t.startSummaryPolling(e, n));
        }),
      __vite__mapDeps([21, 2, 3, 19, 14, 6, 7, 12, 18, 20]),
    ).catch(() => {}),
    () => {
      ((r = !1), i?.());
    }
  );
}
var Bs = 3.3,
  Vs = 0.15,
  Hs = { minX: -900, maxX: 900, minZ: -960, maxZ: 560 },
  Us = -960,
  Ws = -1030,
  Gs = [
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
  Ks = [
    { id: `daan`, minX: -212, maxX: -130, minZ: 280, maxZ: 1e3 },
    { id: `zhongzheng`, minX: -700, maxX: -560, minZ: -330, maxZ: 70, gen: !1 },
    { id: `daan`, minX: -202, maxX: -62, minZ: 140, maxZ: 266, gen: !1 },
    { id: `shilin`, minX: -202, maxX: -62, minZ: -883, maxZ: -743, gen: !1 },
    { id: `songshan`, minX: 344, maxX: 464, minZ: -330, maxZ: -300, gen: !1 },
  ],
  qs = Hs;
function K(e, t, n, r, i, a, o, s = {}) {
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
    from: r === `x` ? qs.minX : qs.minZ,
    to: r === `x` ? qs.maxX : qs.maxZ,
    median: c.median,
    sidewalk: c.sidewalk,
    speedKmh: c.speed,
    ...s,
  };
}
var Js = -400,
  Ys = -160,
  q = 1e5;
function J(...e) {
  let t = [];
  for (let n = 0; n + 1 < e.length; n += 2) t.push([e[n], e[n + 1]]);
  return t;
}
var Xs = [
  K(`huanhe`, `環河南北路`, `Huanhe Rd`, `z`, -870, `arterial`, 2, {
    median: 1.2,
    sections: J(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  K(`yanping`, `延平北路`, `Yanping N. Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    to: -160,
    sections: J(-1e5, 4, -720, 3, -580, 2, -440, 1),
  }),
  K(`zhonghua`, `中華路`, `Zhonghua Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    from: -160,
    sections: J(-1e5, 1, 120, 2),
  }),
  K(`chongqing`, `重慶南北路`, `Chongqing Rd`, `z`, -580, `arterial`, 2, {
    sections: J(-1e5, 4, -900, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  K(`zhongshan`, `中山南北路`, `Zhongshan Rd`, `z`, -400, `boulevard`, 3, {
    median: 7,
    treeMedian: !0,
    sections: J(-1e5, 5, -790, 3, -720, 2, -440, 1, -160, 0),
  }),
  K(`xinsheng`, `新生南北路`, `Xinsheng Rd`, `z`, -220, `arterial`, 3, {
    median: 3,
    treeMedian: !0,
    sections: J(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  K(`jianguo`, `建國南北路`, `Jianguo Rd`, `z`, -40, `boulevard`, 3, {
    median: 10,
    elevated: `expressway`,
    sections: J(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  K(`fuxing`, `復興南北路`, `Fuxing Rd`, `z`, 140, `boulevard`, 3, {
    median: 9,
    elevated: `mrt`,
    sections: J(-1e5, 0, -160, 1, 120, 2),
  }),
  K(`dunhua`, `敦化南北路`, `Dunhua Rd`, `z`, 320, `boulevard`, 3, {
    median: 10,
    treeMedian: !0,
    sections: J(-1e5, 0, -160, 1, 120, 2),
  }),
  K(`guangfu`, `光復南北路`, `Guangfu Rd`, `z`, 480, `arterial`, 2),
  K(`keelung`, `基隆路`, `Keelung Rd`, `z`, 640, `boulevard`, 3, {
    median: 6,
    sections: J(-1e5, 1, 120, 2, 430, 3),
  }),
  K(`songren`, `松仁路`, `Songren Rd`, `z`, 840, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
  }),
  K(`shilin-zz`, `中正路`, `Zhongzheng Rd`, `x`, -900, `arterial`, 2, {
    median: 2,
  }),
  K(`minquan`, `民權東西路`, `Minquan Rd`, `x`, -720, `boulevard`, 3, {
    median: 6,
    sections: J(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  K(`minsheng`, `民生東西路`, `Minsheng Rd`, `x`, -580, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
    sections: J(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  K(`nanjing`, `南京東西路`, `Nanjing Rd`, `x`, -440, `boulevard`, 3, {
    median: 6,
    sections: J(-1e5, 0, -400, 1, -310, 2, -40, 3, 320, 4, 640, 5),
  }),
  K(`civic`, `市民大道`, `Civic Blvd`, `x`, -300, `boulevard`, 3, {
    median: 12,
    elevated: `expressway`,
    sections: J(-1e5, 1, -400, 2, -220, 3, 140, 4, 320, 5, 640, 6),
  }),
  K(`zhongxiao`, `忠孝東西路`, `Zhongxiao Rd`, `x`, -160, `boulevard`, 3, {
    median: 5,
    sections: J(-1e5, 2, -700, 1, -400, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  K(`ketagalan`, `凱達格蘭大道`, `Ketagalan Blvd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -580,
    to: -400,
  }),
  K(`renai`, `仁愛路`, `Ren'ai Rd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -400,
    sections: J(-1e5, 1, -310, 2, -220, 3, 140, 4),
  }),
  K(`guangzhou`, `廣州街`, `Guangzhou St`, `x`, 120, `boulevard`, 3, {
    median: 6,
    to: -700,
  }),
  K(`aiguo`, `愛國西路`, `Aiguo W. Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -700,
    to: -400,
  }),
  K(`xinyi`, `信義路`, `Xinyi Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -400,
    sections: J(-1e5, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  K(`heping`, `和平東西路`, `Heping Rd`, `x`, 280, `arterial`, 2, {
    median: 2,
    sections: J(-1e5, 3, -700, 2, -580, 1, -400, 1, -220, 2, 140, 3),
  }),
  K(`juguang`, `莒光路`, `Juguang Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    to: -700,
  }),
  K(`tingzhou`, `汀州路`, `Tingzhou Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -700,
    to: -220,
    sections: J(-1e5, 1, -580, 2, -400, 3),
  }),
  K(`xinhai`, `辛亥路`, `Xinhai Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -220,
    sections: J(-1e5, 1, -40, 2, 140, 3, 480, 4),
  }),
];
function Y(e, t, n, r, i, a, o) {
  return { axis: e, at: t, from: n, to: r, zh: i, en: a, sections: o };
}
var Zs = [
    Y(`x`, -810, -1e5, -400, `通河街`, `Tonghe St`),
    Y(`x`, -810, -400, 140, `大南路`, `Danan Rd`),
    Y(`x`, -810, 140, 480, `福林路`, `Fulin Rd`),
    Y(`x`, -810, 480, q, `士商路`, `Shishang Rd`),
    Y(`x`, -650, -1e5, -700, `寧夏路`, `Ningxia Rd`),
    Y(`x`, -650, -700, -400, `錦西街`, `Jinxi St`),
    Y(`x`, -650, -400, 230, `錦州街`, `Jinzhou St`),
    Y(`x`, -650, 230, 640, `富錦街`, `Fujin St`),
    Y(`x`, -650, 640, q, `饒河街`, `Raohe St`),
    Y(`x`, -510, -1e5, -400, `歸綏街`, `Guisui St`),
    Y(`x`, -510, -400, 230, `長春路`, `Changchun Rd`),
    Y(`x`, -510, 230, q, `延壽街`, `Yanshou St`),
    Y(`x`, -370, -1e5, -400, `長安西路`, `Chang'an W. Rd`),
    Y(`x`, -370, -400, 140, `長安東路`, `Chang'an E. Rd`, J(-1e5, 1, -40, 2)),
    Y(`x`, -370, 140, q, `八德路`, `Bade Rd`, J(-1e5, 3, 480, 4)),
    Y(`x`, -253, -1e5, -700, `武昌街`, `Wuchang St`, J(-1e5, 2)),
    Y(`x`, -207, -1e5, -700, `峨眉街`, `Emei St`),
    Y(`x`, -230, -400, 140, `八德路`, `Bade Rd`, J(-1e5, 1, -220, 2)),
    Y(`x`, -90, -400, -40, `濟南路`, `Jinan Rd`, J(-1e5, 1, -310, 2, -220, 3)),
    Y(`x`, -20, -1e5, -700, `成都路`, `Chengdu Rd`),
    Y(`x`, 50, -400, -220, `徐州路`, `Xuzhou Rd`),
    Y(`x`, 50, 140, 480, `東豐街`, `Dongfeng St`),
    Y(`x`, 200, -1e5, -580, `寧波西街`, `Ningbo W. St`),
    Y(`x`, 200, -580, -400, `南海路`, `Nanhai Rd`),
    Y(`x`, 200, -400, 140, `金華街`, `Jinhua St`),
    Y(`x`, 200, 140, 480, `瑞安街`, `Rui'an St`),
    Y(`x`, 355, -1e5, -580, `西藏路`, `Xizang Rd`),
    Y(`x`, 355, -580, -220, `晉江街`, `Jinjiang St`),
    Y(`x`, 355, -220, 140, `雲和街`, `Yunhe St`),
    Y(`x`, 355, 140, 480, `臥龍街`, `Wolong St`),
    Y(`x`, 355, 480, q, `崇德街`, `Chongde St`),
    Y(`z`, -813, -1e5, q, `西寧南路`, `Xining S. Rd`),
    Y(`z`, -757, -1e5, q, `漢中街`, `Hanzhong St`),
    Y(`z`, -785, -1e5, -720, `社正路`, `Shezheng Rd`),
    Y(`z`, -785, -720, -160, `西寧北路`, `Xining N. Rd`),
    Y(`z`, -785, -160, q, `康定路`, `Kangding Rd`),
    Y(`z`, -640, -1e5, -720, `前港街`, `Qiangang St`),
    Y(`z`, -640, -720, -160, `甘州街`, `Ganzhou St`),
    Y(`z`, -640, 280, q, `萬大路`, `Wanda Rd`),
    Y(
      `z`,
      -490,
      -1e5,
      -160,
      `承德路`,
      `Chengde Rd`,
      J(-1e5, 4, -720, 3, -440, 2, -300, 1),
    ),
    Y(`z`, -490, -160, q, `牯嶺街`, `Guling St`),
    Y(`z`, -310, -1e5, -720, `文林路`, `Wenlin Rd`),
    Y(`z`, -310, -720, -160, `林森北路`, `Linsen N. Rd`),
    Y(`z`, -310, -160, 200, `林森南路`, `Linsen S. Rd`),
    Y(`z`, -310, 200, q, `羅斯福路`, `Roosevelt Rd`, J(-1e5, 1, 355, 2)),
    Y(`z`, -130, -1e5, -160, `松江路`, `Songjiang Rd`),
    Y(`z`, -130, 280, q, `師大路`, `Shida Rd`),
    Y(`z`, 50, -1e5, -720, `大東路`, `Dadong Rd`),
    Y(`z`, 50, -720, -300, `龍江路`, `Longjiang Rd`),
    Y(`z`, 50, -300, -160, `安東街`, `Andong St`),
    Y(`z`, 50, -160, 280, `青田街`, `Qingtian St`),
    Y(`z`, 50, 280, q, `溫州街`, `Wenzhou St`),
    Y(`z`, 230, -1e5, -720, `大北路`, `Dabei Rd`),
    Y(`z`, 230, -720, -300, `慶城街`, `Qingcheng St`),
    Y(`z`, 230, -300, 280, `大安路`, `Da'an Rd`, J(-1e5, 1, 120, 2)),
    Y(`z`, 230, 280, q, `通化街`, `Tonghua St`),
    Y(`z`, 400, -1e5, -720, `福國路`, `Fuguo Rd`),
    Y(`z`, 400, -720, -300, `寧安街`, `Ning'an St`),
    Y(`z`, 400, -300, 120, `延吉街`, `Yanji St`),
    Y(`z`, 400, 120, q, `安和路`, `Anhe Rd`, J(-1e5, 1, 280, 2)),
    Y(`z`, 560, -1e5, -720, `士東路`, `Shidong Rd`),
    Y(`z`, 560, -720, -300, `三民路`, `Sanmin Rd`),
    Y(`z`, 560, -300, 120, `逸仙路`, `Yixian Rd`),
    Y(`z`, 560, 120, q, `吳興街`, `Wuxing St`),
    Y(`z`, 740, -1e5, -720, `雨聲街`, `Yusheng St`),
    Y(`z`, 740, -720, -300, `松山路`, `Songshan Rd`),
    Y(`z`, 740, -300, 120, `市府路`, `Shifu Rd`),
    Y(`z`, 740, 120, q, `松智路`, `Songzhi Rd`),
  ],
  Qs = [
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
  $s = [
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
  ec = {
    start: { x: -760, z: -150, heading: Math.PI / 2 },
    hospital: { x: -422.6, z: 44, heading: Math.PI / 2, snap: !1 },
    police: { x: -640, z: -196, heading: Math.PI, snap: !1 },
  },
  tc = [
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
  nc = [
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
  rc = [
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
  ic = {
    id: `smilebike`,
    zh: `笑笑單車`,
    en: `SmileBike 2.0`,
    zhFull: `臺北市笑笑單車2.0`,
    colors: [`#f5c400`, `#ffffff`, `#e2231a`],
    tagline: { zh: `前30分鐘5元`, en: `NT$5 for the first 30 min` },
    weight: 1,
  },
  ac = [
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
  oc = {
    id: `yoyo`,
    zh: `悠悠卡`,
    en: `YoYo Card`,
    zhFull: `悠悠卡`,
    colors: [`#0a8f4f`, `#ffffff`, `#ffd400`],
    weight: 1,
  },
  sc = {
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
function cc(e) {
  return [...nc, ...rc, ic, ...ac, oc, sc].find(
    (t) => t.zh === e || t.id === e || t.zhFull === e,
  );
}
var lc = [
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
  uc = 20260923,
  dc = e({ GpuAccount: () => Sc }),
  fc = {
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
function pc(e) {
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
        ? hc(e - 37808)
        : e >= 37840 && e <= 37853
          ? hc(e - 37840)
          : 8;
}
var mc = [16, 20, 25, 30, 36, 40, 48, 64, 50, 60, 80, 100, 120, 144],
  hc = (e) => 128 / (mc[e] ?? 16),
  gc = 3553,
  _c = 34067,
  vc = 32879,
  yc = 35866,
  bc = 34962,
  xc = 34963,
  Sc = class {
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
          e === gc || (e >= 34069 && e <= 34074)
            ? e === gc
              ? t.TEXTURE_BINDING_2D
              : t.TEXTURE_BINDING_CUBE_MAP
            : e === _c
              ? t.TEXTURE_BINDING_CUBE_MAP
              : e === vc
                ? t.TEXTURE_BINDING_3D
                : e === yc
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
        if (r !== bc && r !== xc && r !== 35345) return;
        let i =
            r === bc
              ? e.ARRAY_BUFFER_BINDING
              : r === xc
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
            c = n === _c ? 6 : 1,
            l = fc[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * pc(i)
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
            l = fc[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              (l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * pc(i)
                : a * o * l) * s),
              (a = Math.max(1, a >> 1)),
              (o = Math.max(1, o >> 1)),
              n === vc && (s = Math.max(1, s >> 1)));
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
          t.setTex(t.boundTexture(n), s * 64 + r, a * o * (fc[i] ?? 4));
        }),
        n(`texImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(t.boundTexture(n), r, e[3] * e[4] * e[5] * (fc[i] ?? 4));
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
            Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * pc(i),
          );
        }),
        n(`compressedTexImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(
            t.boundTexture(n),
            r,
            Math.ceil(e[3] / 4) * Math.ceil(e[4] / 4) * 2 * pc(i) * e[5],
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
        let s = i * a * (fc[r] ?? 4) * Math.max(1, n);
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
  Cc = class e {
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
function wc(...e) {
  let t = 2166136261;
  for (let n of e) {
    let e = String(n);
    for (let n = 0; n < e.length; n++)
      ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
    t ^= 47;
  }
  return t >>> 0;
}
var Tc = { GROUND: 0.02, PAINT: 0.01, PANEL: 0.02, DETAIL: 0.005 };
function Ec(e, t, n) {
  return e + (t + 0.5) * n;
}
function Dc(e, t, n, r) {
  return (e + (t + 0.5) * n) * r;
}
function Oc(e, t) {
  return e * t;
}
function kc(e, t) {
  return e * t;
}
function Ac(e, t, n) {
  return e.rx * (t * n);
}
function jc(e, t, n) {
  return e.rz * (t * n);
}
function Mc(e, t, n, r) {
  return (t * e.rx + n * e.rz) * r;
}
function Nc(e) {
  return e;
}
function Pc(e) {
  return -e;
}
function Fc(e) {
  return e;
}
function Ic(e) {
  return e;
}
function Lc(e, t) {
  return e * t;
}
function Rc(e, t) {
  let n = e < 0 ? -e : e;
  return n < 0.35 ? 0 : n > 2.8 ? 3 : e * t > 0 ? 1 : 2;
}
function zc(e) {
  return e === 2;
}
function Bc(e) {
  return e < 0;
}
function Vc(e) {
  return e === 1;
}
function Hc(e, t) {
  return e * t;
}
function Uc(e, t) {
  return e === 1 ? t : e === 2 || e === 3 ? -t : 0;
}
function Wc(e, t, n) {
  return (e === `x` ? t : -t) * n;
}
function Gc(e, t, n) {
  let r = t * n;
  return e === `x` ? (r > 0 ? Math.PI / 2 : -Math.PI / 2) : r > 0 ? 0 : Math.PI;
}
function Kc(e, t, n, r, i, a, o) {
  let s = Math.cos(n),
    c = Math.sin(n),
    l = Math.sin(n),
    u = -Math.cos(n);
  return ((o.x = e + s * r * i + l * a), (o.z = t + c * r * i + u * a), o);
}
var qc =
  typeof location > `u` ||
  new URLSearchParams(location.search).get(`gpupool`) !== `0`;
function Jc(e, t, n) {
  if (!qc) return null;
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
function Yc(e, t, n, r, i) {
  let a = e.gl;
  (a.bindBuffer(a.COPY_WRITE_BUFFER, t),
    a.bufferSubData(a.COPY_WRITE_BUFFER, n, r, 0, i),
    a.bindBuffer(a.COPY_WRITE_BUFFER, null));
}
var X = {
  col: new Uint8Array(),
  city: new Uint8Array(),
  i16: new Uint16Array(),
  i32: new Uint32Array(),
  uv8: new Float32Array(8),
};
function Xc(e, t, n, r) {
  let i = t.n,
    a = t.ni;
  X.col.length < i * 4 &&
    ((X.col = new Uint8Array(i * 4 + 8192)),
    (X.city = new Uint8Array(i * 4 + 8192)));
  let o = X.col,
    s = X.city,
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
    ? (X.i32.length < a && (X.i32 = new Uint32Array(a + 12288)), (l = X.i32))
    : (X.i16.length < a && (X.i16 = new Uint16Array(a + 12288)), (l = X.i16));
  let u = t.idx;
  for (let e = 0; e < a; e++) l[e] = n + u[e];
  let d = e.buf;
  (Yc(e, d.position, n * 12, t.pos, i * 3),
    Yc(e, d.normal, n * 12, t.nor, i * 3),
    d.uv && t.uv && Yc(e, d.uv, n * 8, t.uv, i * 2),
    Yc(e, d.color, n * 4, o, i * 4),
    Yc(e, d.aCity, n * 4, s, i * 4),
    Yc(e, e.index, r * e.ib, l, a));
}
function Zc(e, t, n, r, i, a) {
  let o = X.uv8;
  ((o[0] = n),
    (o[1] = r),
    (o[2] = i),
    (o[3] = r),
    (o[4] = i),
    (o[5] = a),
    (o[6] = n),
    (o[7] = a),
    e.buf.uv && Yc(e, e.buf.uv, t * 8, o, 8));
}
var Qc = new S(),
  Z = new te(),
  $c = 0.002,
  el = class {
    move;
    turn;
    maxAge;
    fovTol;
    frustum = new we();
    pose = new Float64Array(27).fill(NaN);
    cosTurn = 1;
    age = 0;
    rebuilds = 0;
    constructor(e = 3, t = o.degToRad(3), n = 120, r = o.degToRad(1)) {
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
          s = Math.min(Math.PI / 2 - 0.01, r + t),
          c = Math.min(Math.PI / 2 - 0.01, a + t);
        ((Z.near = i.near),
          (Z.far = i.far),
          (Z.fov = o.radToDeg(s * 2)),
          (Z.aspect = Math.tan(c) / Math.tan(s)),
          (Z.zoom = 1),
          Z.updateProjectionMatrix(),
          Qc.multiplyMatrices(Z.projectionMatrix, e.matrixWorldInverse));
      } else {
        let t = e;
        this.cosTurn = Math.cos($c);
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
        ((a += r * $c * 1.45),
          Qc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse));
      }
      let s = i.isPerspectiveCamera ? Z.reversedDepth : e.reversedDepth;
      this.frustum.setFromProjectionMatrix(Qc, e.coordinateSystem, s);
      for (let e of this.frustum.planes) e.constant += a;
      return this.frustum;
    }
  },
  tl = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`],
  nl = 4.8;
function rl(e) {
  let t = e.name.zh;
  return t.endsWith(`東西路`) ? `ew` : t.endsWith(`南北路`) ? `ns` : null;
}
function il(e, t) {
  let n = 0,
    r = e.from,
    i = e.to,
    a = e.sections;
  if (a)
    for (let o = 0; o < a.length && !(t < a[o][0]); o++)
      ((n = a[o][1]),
        (r = a[o][0]),
        (i = o + 1 < a.length ? a[o + 1][0] : e.to));
  let o = rl(e);
  if (o) {
    let e = o === `ew` ? Js : Ys;
    t < e ? (i = Math.min(i, e)) : (r = Math.max(r, e));
  }
  return { n, lo: Math.max(r, e.from), hi: Math.min(i, e.to) };
}
function al(e, t, n) {
  let r = e.name.zh,
    i = e.name.en,
    a = rl(e);
  if (a === `ew`) {
    let e = t >= Js;
    ((r = r.slice(0, -3) + (e ? `東路` : `西路`)),
      (i = i.replace(/ Rd\.?$/, e ? ` E. Rd.` : ` W. Rd.`)));
  } else if (a === `ns`) {
    let e = n < Ys;
    ((r = r.slice(0, -3) + (e ? `北路` : `南路`)),
      (i = i.replace(/ Rd\.?$/, e ? ` N. Rd.` : ` S. Rd.`)));
  }
  i = i.replace(/ (Rd|St|Blvd|Ave|Ln)$/, ` $1.`);
  let o = il(e, e.axis === `x` ? t : n).n,
    s = o > 0 ? `${tl[o] ?? o}段` : ``;
  return {
    zh: r,
    sec: s,
    en: o ? `${i}, Sec. ${o}` : i,
    n: o,
    full: { zh: r + s, en: o ? `Sec. ${o}, ${i}` : i },
  };
}
function ol(e, t, n) {
  let { lo: r, hi: i } = il(e, t),
    a = rl(e),
    o = Math.max(
      0,
      (a === `ew` ? t < -400 : a === `ns` && t < -160) ? i - t : t - r,
    ),
    s = nl * (0.65 + ((wc(e.name.zh) % 997) / 997) * 0.9);
  return 2 * Math.floor(o / s) + (n > 0 ? 2 : 1);
}
var sl = {
    streetLabel: al,
    houseNumber: ol,
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
  cl = (e, t) => {
    let n = [],
      r = new Cc(t ^ 24301),
      i = rc.map((e) => [e.zh, e.weight]),
      a = nc.map((e) => [e.zh, e.weight]);
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
            if (!t.reserved.some((e) => ll(e, t, g, _, a / 2 + 3))) {
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
function ll(e, t, n, r, i) {
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
var ul = {
    regionId: `taipei`,
    mapVersion: `taipei-v1`,
    seed: uc,
    drivingSide: `right`,
    bounds: Hs,
    laneWidth: Bs,
    sidewalkHeight: Vs,
    majorRoads: Xs,
    minorStreets: Zs,
    districts: Gs,
    districtExtras: Ks,
    landmarks: Qs,
    hills: $s,
    spawns: ec,
    stations: tc,
    namedPlaces: lc,
    water: { westX: Us, northZ: Ws, level: -0.8 },
    labels: sl,
    pois: cl,
  },
  Q = 16,
  dl = 64,
  fl = [],
  pl = 64,
  ml = class {
    roads = [];
    nodes = [];
    links = [];
    blocks = [];
    dataset;
    landmarks;
    districts;
    hills;
    bounds;
    coreBounds;
    sectors;
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
    hillCutFn;
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
      let t = (this.dataset = e.dataset ?? ul);
      ((this.landmarks = t.landmarks),
        (this.districts = t.districts),
        (this.hills = t.hills),
        (this.bounds = t.bounds),
        (this.coreBounds = t.coreBounds ?? t.bounds),
        (this.sectors = t.sectors ?? []),
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
        (this.hillCutFn = t.hillCut ?? null),
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
        let t = e.entrance
          ? { x: e.entrance[0], z: e.entrance[1], facing: 0 }
          : this.snapToSidewalk(e.x, e.z);
        this.mrtStations.push({ ...e, ex: t.x, ez: t.z, eh: t.facing });
      }
      let r = t.pois(this.blocks, t.seed);
      if (this.sectors.length) {
        let e = new Map(
          this.blocks.filter((e) => e.sector).map((e) => [e.id, e.sector]),
        );
        for (let t of r) {
          let n = e.get(t.blockId);
          n && (t.sector = n);
        }
      }
      let i = this.carveBlocks();
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
          : yl(e, r)
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
      let e = this.dataset.majorRoads.map((e) => this.makeRoad(e, !0));
      this.roads.push(...e);
      let t = [],
        n = e.filter((e) => !e.gridless);
      this.genMinors(
        n.filter((e) => !e.sector),
        null,
        t,
      );
      for (let e of this.sectors) {
        let r = this.seamRoads(n, e);
        this.genMinors([...n.filter((t) => t.sector === e.id), ...r], e, t);
      }
      this.finishRoads(t);
    }
    seamRoads(e, t) {
      let n = Object.values(t.seams ?? {});
      return e.filter((e) => n.includes(e.id));
    }
    genMinors(e, t, n) {
      let r = e.filter((e) => e.axis === `z`).sort((e, t) => e.at - t.at),
        i = e.filter((e) => e.axis === `x`).sort((e, t) => e.at - t.at),
        a = t ? `${t.id}-` : ``,
        o = (e, n) =>
          !t || (e > t.minX && e < t.maxX && n > t.minZ && n < t.maxZ),
        s = this.landmarks.filter((e) => !e.zone),
        c = this.landmarks.filter((e) => e.zone === `pedestrian`),
        l = bl(r.map((e) => e.at)),
        u = (e, t, n) =>
          e.find((e) => e.at === t && n >= e.from - 1 && n <= e.to + 1) ?? null,
        d = (e, r) => {
          let i = xl(this.streetNames, e.axis, e.at, e.from, e.to);
          (i &&
            ((e.name = { zh: i.zh, en: i.en, ...(i.ja ? { ja: i.ja } : {}) }),
            i.sections && (e.sections = i.sections)),
            t && (e.sector = t.id));
          let a = this.makeRoad(e, !1);
          (this.roads.push(a), i || n.push({ road: a, parent: r }));
        };
      for (let e = 0; e + 1 < l.length; e++) {
        let t = l[e],
          n = l[e + 1],
          f = (t + n) / 2,
          p = i.filter((e) => e.from <= f && e.to >= f);
        for (let e = 0; e + 1 < p.length; e++) {
          let i = p[e].at,
            l = p[e + 1].at,
            m = (i + l) / 2;
          if (!o(f, m)) continue;
          let h = c.some((e) => e.kind === `plaza` && Sl(e, f, m, 60)) ? 3 : 2;
          if (n - t > 110)
            for (let r = 1; r < h; r++) {
              let o = Math.round(t + ((n - t) * r) / h),
                u = { minX: o - 8, maxX: o + 8, minZ: i, maxZ: l };
              if (s.some((e) => Cl(u, e, 4))) continue;
              let f = c.some((e) => wl(`z`, o, i, l, e) >= 0.5);
              d(
                {
                  id: `${a}ns-${o}-${i}`,
                  name: { zh: ``, en: `` },
                  axis: `z`,
                  at: o,
                  from: i,
                  to: l,
                  kind: `street`,
                  lanesPerDir: 1,
                  median: 0,
                  sidewalk: 3,
                  speedKmh: 40,
                  pedestrian: f,
                },
                p[e],
              );
            }
          if (l - i > 110)
            for (let e = 1; e < h; e++) {
              let o = Math.round(i + ((l - i) * e) / h),
                f = { minX: t, maxX: n, minZ: o - 8, maxZ: o + 8 };
              if (s.some((e) => Cl(f, e, 4))) continue;
              let p = c.some((e) => wl(`x`, o, t, n, e) >= 0.5);
              d(
                {
                  id: `${a}ew-${o}-${t}`,
                  name: { zh: ``, en: `` },
                  axis: `x`,
                  at: o,
                  from: t,
                  to: n,
                  kind: `street`,
                  lanesPerDir: 1,
                  median: 0,
                  sidewalk: 3,
                  speedKmh: 40,
                  pedestrian: p,
                },
                u(r, t, o),
              );
            }
        }
      }
    }
    finishRoads(e) {
      let t = this.labels;
      for (let { road: n, parent: r } of e) {
        if (!r) {
          n.name = t.unnamedLane();
          continue;
        }
        let e = r.axis === `z` ? r.at : n.at,
          i = r.axis === `z` ? n.at : r.at,
          a = this.streetLabel(r, e, i),
          o = t.houseNumber(r, r.axis === `z` ? i : e, 1);
        ((n.lane = { parent: r, no: o }), (n.name = t.laneName(a, o)));
      }
      this.roads.forEach((e, t) => (e.index = t));
      for (let e of this.roads) {
        let [t, n, r, i] = this.roadRect(e, e.halfTotal + 1);
        for (let a = Math.floor(r / Q); a <= Math.floor(i / Q); a++)
          for (let r = Math.floor(t / Q); r <= Math.floor(n / Q); r++) {
            let t = $(r, a),
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
        let t = $(Math.floor(e.x / Q), Math.floor(e.z / Q)),
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
        let u = Math.floor(o / dl),
          d = Math.floor(s / dl),
          f = Math.floor(c / dl),
          p = Math.floor(l / dl);
        for (let e = f; e <= p; e++)
          for (let n = u; n <= d; n++) {
            let r = $(n, e),
              i = this.linkCells.get(r);
            (i || this.linkCells.set(r, (i = [])), i.push(t));
          }
        (Tl(e, u, f), Tl(e, d, p));
      }
      for (let e of this.nodes) {
        let t = Math.floor(e.x / pl),
          n = Math.floor(e.z / pl),
          r = $(t, n),
          i = this.nodeCells.get(r);
        (i || this.nodeCells.set(r, (i = [])),
          i.push(e),
          Tl(this.nodeExt, t, n));
      }
    }
    lanePoint(e, t, n, r) {
      let i = Ec(e.road.median / 2, t, this.laneWidth);
      return (
        (r.x = e.sx + e.dx * n + Ac(e, i, this.side)),
        (r.z = e.sz + e.dz * n + jc(e, i, this.side)),
        r
      );
    }
    laneOffset(e, t) {
      return Ec(e.road.median / 2, t, this.laneWidth);
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
      let n = Math.floor(e / Q),
        r = Math.floor(t / Q);
      for (let i = -1; i <= 1; i++)
        for (let a = -1; a <= 1; a++) {
          let o = this.nodeGrid.get($(n + a, r + i));
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
      this.gridBlocks(this.coreBounds, null);
      for (let e of this.sectors) this.gridBlocks(e, e);
    }
    gridBlocks(e, t) {
      let n = (e) => !e.gridless && (t ? e.sector === t.id : !e.sector),
        r = this.roads
          .filter(
            (r) =>
              r.major &&
              r.axis === `z` &&
              n(r) &&
              (!t || (r.at > e.minX && r.at < e.maxX)),
          )
          .sort((e, t) => e.at - t.at),
        i = this.roads
          .filter(
            (r) =>
              r.major &&
              r.axis === `x` &&
              n(r) &&
              (!t || (r.at > e.minZ && r.at < e.maxZ)),
          )
          .sort((e, t) => e.at - t.at),
        a = (n) => {
          let r = t?.seams?.[n];
          return (
            (r ? this.roads.find((e) => e.major && e.id === r) : void 0) ??
            (n === `west`
              ? e.minX
              : n === `east`
                ? e.maxX
                : n === `north`
                  ? e.minZ
                  : e.maxZ)
          );
        },
        o = a(`west`),
        s = a(`east`),
        c = a(`north`),
        l = a(`south`),
        u = (e) => (typeof e == `number` ? e : e.at),
        d = (e) => (typeof e == `number` ? 0 : e.halfTotal),
        f = 0,
        p = [u(o), ...bl(r.map((e) => e.at)), u(s)],
        m = (e, t) =>
          e === 0
            ? o
            : e === p.length - 1
              ? s
              : (r.find(
                  (n) => n.at === p[e] && t >= n.from - 1 && t <= n.to + 1,
                ) ?? p[e]);
      for (let e = 0; e + 1 < p.length; e++) {
        let r = (p[e] + p[e + 1]) / 2,
          a = [c, ...i.filter((e) => e.from <= r && e.to >= r), l];
        for (let i = 0; i + 1 < a.length; i++) {
          let o = a[i],
            s = a[i + 1],
            c = (u(o) + u(s)) / 2,
            l = m(e, c),
            p = m(e + 1, c),
            h = this.roads
              .filter(
                (e) =>
                  !e.major &&
                  n(e) &&
                  e.axis === `z` &&
                  e.at > u(l) &&
                  e.at < u(p) &&
                  e.from <= c &&
                  e.to >= c,
              )
              .sort((e, t) => e.at - t.at),
            g = this.roads
              .filter(
                (e) =>
                  !e.major &&
                  n(e) &&
                  e.axis === `x` &&
                  e.at > u(o) &&
                  e.at < u(s) &&
                  e.from <= r &&
                  e.to >= r,
              )
              .sort((e, t) => e.at - t.at),
            _ = [l, ...h, p],
            v = [o, ...g, s];
          for (let e = 0; e + 1 < _.length; e++)
            for (let n = 0; n + 1 < v.length; n++) {
              let r = _[e],
                i = _[e + 1],
                a = v[n],
                o = v[n + 1],
                s = u(r) + d(r),
                c = u(i) - d(i),
                l = u(a) + d(a),
                p = u(o) - d(o);
              if (c - s < 20 || p - l < 20) continue;
              let m = (s + c) / 2,
                h = (l + p) / 2,
                g = {
                  id: t ? t.idBase + f++ : this.blocks.length,
                  minX: s,
                  maxX: c,
                  minZ: l,
                  maxZ: p,
                  district: this.districtAt(m, h, !0),
                  reserved: this.landmarks.filter(
                    (e) =>
                      !e.zone &&
                      Cl({ minX: s, maxX: c, minZ: l, maxZ: p }, e, 0),
                  ),
                  zones: this.landmarks.filter(
                    (e) =>
                      e.zone &&
                      Cl({ minX: s, maxX: c, minZ: l, maxZ: p }, e, 0),
                  ),
                  north: typeof a == `number` ? null : a,
                  south: typeof o == `number` ? null : o,
                  west: typeof r == `number` ? null : r,
                  east: typeof i == `number` ? null : i,
                  edge:
                    typeof a == `number` ||
                    typeof o == `number` ||
                    typeof r == `number` ||
                    typeof i == `number`,
                };
              (t && (g.sector = t.id), this.blocks.push(g));
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
              ? s.push(..._l(c, n, r, a, o, t, 20))
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
          i.forEach((e, t) => (e.id = gl + o.id * 8 + t)),
          n.push(...i));
      }
      if (!t.size) return t;
      if (r.size) {
        let e = this.blocks.filter((e) => !r.has(e));
        ((this.blocks.length = 0), this.blocks.push(...e));
      }
      for (let e of n) this.blocks.push(e);
      for (let e of this.blocks) {
        if (!t.has(e.id) && e.id < gl) continue;
        let n = { minX: e.minX, maxX: e.maxX, minZ: e.minZ, maxZ: e.maxZ };
        ((e.reserved = this.landmarks.filter((e) => !e.zone && Cl(n, e, 0))),
          (e.zones = this.landmarks.filter((e) => e.zone && Cl(n, e, 0))),
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
      let n = this.coreBounds;
      if (e >= n.minX && e <= n.maxX && t >= n.minZ && t <= n.maxZ) return !0;
      for (let n of this.sectors)
        if (e >= n.minX && e <= n.maxX && t >= n.minZ && t <= n.maxZ) return !0;
      return !1;
    }
    roadsNear(e, t) {
      return this.roadGrid.get($(Math.floor(e / Q), Math.floor(t / Q))) ?? hl;
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
      let n = Math.floor(e / Q),
        r = Math.floor(t / Q);
      for (let i = -1; i <= 1; i++)
        for (let a = -1; a <= 1; a++) {
          let o = this.nodeGrid.get($(n + a, r + i));
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
      o > 0 && this.hillCutFn !== null && (o *= this.hillCutFn(e, t));
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
            $(Math.floor(e / Q) + r, Math.floor(t / Q) + n),
          ) ?? hl)
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
          for (let c of vl) {
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
        c = Mc(e, a, o, this.side);
      if (c < 0) return i;
      let l = (c - e.road.median / 2) / this.laneWidth - 0.5,
        u = Math.max(0, Math.min(e.lanes - 1, Math.round(l))),
        d = e.sx + e.dx * s + Ac(e, this.laneOffset(e, u), this.side),
        f = e.sz + e.dz * s + jc(e, this.laneOffset(e, u), this.side),
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
      let a = Math.floor(e / dl),
        o = Math.floor(t / dl),
        s = Math.max(a - i.x0, i.x1 - a, o - i.z0, i.z1 - o),
        c = Math.max(0, i.x0 - a, a - i.x1, i.z0 - o, o - i.z1);
      for (let l = c; l <= s; l++) {
        let s = Math.max(o - l, i.z0),
          c = Math.min(o + l, i.z1);
        for (let u = s; u <= c; u++) {
          let s = u === o - l || u === o + l || l === 0 ? 1 : 2 * l;
          for (let o = a - l; o <= a + l; o += s) {
            if (o < i.x0 || o > i.x1) continue;
            let a = this.linkCells.get($(o, u));
            if (a)
              for (let i = 0; i < a.length; i++)
                r = this.linkCandidate(a[i], e, t, n, r);
          }
        }
        if (r && r.dist < l * dl - 0.001) break;
      }
      return r;
    }
    nearestNode(e, t, n) {
      let r = this.nodes[0],
        i = 1 / 0,
        a = this.nodeExt;
      if (a.x1 < a.x0) return r;
      let o = Math.floor(e / pl),
        s = Math.floor(t / pl),
        c = Math.max(o - a.x0, a.x1 - o, s - a.z0, a.z1 - s),
        l = Math.max(0, a.x0 - o, o - a.x1, a.z0 - s, s - a.z1);
      for (let u = l; u <= c; u++) {
        let c = Math.max(s - u, a.z0),
          l = Math.min(s + u, a.z1);
        for (let d = c; d <= l; d++) {
          let c = d === s - u || d === s + u || u === 0 ? 1 : 2 * u;
          for (let s = o - u; s <= o + u; s += c) {
            if (s < a.x0 || s > a.x1) continue;
            let o = this.nodeCells.get($(s, d));
            if (o)
              for (let a = 0; a < o.length; a++) {
                let s = o[a];
                if (n && !n(s)) continue;
                let c = (s.x - e) ** 2 + (s.z - t) ** 2;
                (c < i || (c === i && s.id < r.id)) && ((i = c), (r = s));
              }
          }
        }
        let d = u * pl - 0.001;
        if (d > 0 && i < d * d) break;
      }
      return r;
    }
    findRoute(e, t, n, r, i = !1) {
      let a = this.nearestNode(e, t, (e) => e.kind !== `end`),
        o = this.nearestNode(n, r, (e) => e.kind !== `end`),
        s = (this.astar ??= new El(this.nodes.length, this.links.length + 2));
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
                $(Math.floor(e / Q) + a, Math.floor(t / Q) + i),
              ) ?? hl)
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
                let i = $(r, n),
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
      return this.walkGrid.get($(Math.floor(e / 32), Math.floor(t / 32))) ?? fl;
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
        te = (e, t) => {
          let n = S.length;
          for (S.push(t), C.push(e); n > 0;) {
            let t = (n - 1) >> 1;
            if (C[t] <= e) break;
            ((S[n] = S[t]), (C[n] = C[t]), (n = t));
          }
          ((S[n] = t), (C[n] = e));
        },
        w = () => {
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
      ((v[m] = 0), te(0, m));
      let ne = !1;
      for (; S.length;) {
        let e = w();
        if (b[e]) continue;
        if (((b[e] = 1), e === h)) {
          ne = !0;
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
              ((v[s] = c), (y[s] = e), te(c + Math.hypot(a - ee, o - x), s));
          }
      }
      if (!ne) return null;
      let T = [];
      for (let e = y[h]; e !== -1 && e !== m; e = y[e])
        T.push({
          x: o + ((e % d) + 0.5) * u,
          z: s + (Math.floor(e / d) + 0.5) * u,
        });
      (T.reverse(), T.push({ x: n, z: r }));
      let E = [],
        re = e,
        ie = t;
      for (let e = 0; e < T.length;) {
        let t = e;
        for (
          ;
          t + 1 < T.length &&
          this.walkClear(re, ie, T[t + 1].x, T[t + 1].z, !1, a);
        )
          t++;
        (E.push(T[t]), (re = T[t].x), (ie = T[t].z), (e = t + 1));
      }
      return E;
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
  hl = [],
  gl = 1e5;
function _l(e, t, n, r, i, a, o) {
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
var vl = [0, 4, -4, 8, -8, 12, -12, 16, -16, 20, -20, 26, -26, 32, -32];
function yl(e, t) {
  try {
    return !!e(t);
  } catch {
    return !1;
  }
}
function bl(e) {
  return [...new Set(e)].sort((e, t) => e - t);
}
function xl(e, t, n, r, i) {
  let a = (r + i) / 2;
  for (let r of e)
    if (r.axis === t && Math.abs(r.at - n) <= 15 && a >= r.from && a < r.to)
      return r;
  return null;
}
function $(e, t) {
  return (t + 2048) * 4096 + (e + 2048);
}
function Sl(e, t, n, r) {
  return Math.abs(t - e.x) <= e.w / 2 + r && Math.abs(n - e.z) <= e.d / 2 + r;
}
function Cl(e, t, n) {
  return (
    e.maxX > t.x - t.w / 2 - n &&
    e.minX < t.x + t.w / 2 + n &&
    e.maxZ > t.z - t.d / 2 - n &&
    e.minZ < t.z + t.d / 2 + n
  );
}
function wl(e, t, n, r, i) {
  if (e === `z`) {
    if (Math.abs(t - i.x) > i.w / 2) return 0;
    let e = Math.min(r, i.z + i.d / 2) - Math.max(n, i.z - i.d / 2);
    return Math.max(0, e) / (r - n);
  }
  if (Math.abs(t - i.z) > i.d / 2) return 0;
  let a = Math.min(r, i.x + i.w / 2) - Math.max(n, i.x - i.w / 2);
  return Math.max(0, a) / (r - n);
}
function Tl(e, t, n) {
  if (e.x1 < e.x0) {
    ((e.x0 = e.x1 = t), (e.z0 = e.z1 = n));
    return;
  }
  (t < e.x0 && (e.x0 = t),
    t > e.x1 && (e.x1 = t),
    n < e.z0 && (e.z0 = n),
    n > e.z1 && (e.z1 = n));
}
var El = class {
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
  Dl = 3,
  Ol = 2,
  kl = class {
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
        this.offset[t.id] = (((t.x / 12.5) % r) + (wc(t.id) % 5) + r) % r;
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
        a = r + Dl + Ol;
      return t === `x`
        ? n < r
          ? `green`
          : n < r + Dl
            ? `yellow`
            : `red`
        : n >= a && n < a + i
          ? `green`
          : n >= a + i && n < a + i + Dl
            ? `yellow`
            : `red`;
    }
    remaining(e, t) {
      if (!this.isSignal[e]) return 99;
      let n = this.phaseT(e),
        r = this.cycle(e),
        i = this.greenX[e],
        a = this.greenZ[e],
        o = i + Dl + Ol;
      return t === `x`
        ? i > n
          ? i - n
          : i + Dl > n
            ? i + Dl - n
            : r - n
        : o > n
          ? o - n
          : o + a > n
            ? o + a - n
            : o + a + Dl > n
              ? o + a + Dl - n
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
  Al = !0;
function jl(e, n) {
  t(
    () =>
      import(`./panel-z7F7sGKE.js`).then((t) => {
        e.isConnected && t.mountFeedbackPanel(e, n);
      }),
    __vite__mapDeps([22, 6, 7, 9, 10, 3, 5, 8, 2, 23]),
  ).catch(() => {});
}
var Ml = [];
function Nl(e, t) {
  for (let n = 0; n < Ml.length; n++) {
    let r = Ml[n];
    if (e >= r.minX && e <= r.maxX && t >= r.minZ && t <= r.maxZ) return r;
  }
  return null;
}
var Pl = new WeakMap();
function Fl(e, t) {
  t ? Pl.set(e, t) : Pl.delete(e);
}
function Il(e) {
  return (e && Pl.get(e)) || null;
}
var Ll = new m(),
  Rl = new S(),
  zl =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`;
function Bl(e) {
  if (!zl) return;
  let t = e._instanceInfo;
  Array.isArray(t) &&
    ((e.frustumCulled = !0),
    (e.intersectsFrustum = (n) => {
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (
          i.active &&
          i.visible &&
          (!e.getBoundingSphereAt(i.geometryIndex, Ll) ||
            (e.getMatrixAt(r, Rl),
            Ll.applyMatrix4(Rl).applyMatrix4(e.matrixWorld),
            n.intersectsSphere(Ll)))
        )
          return !0;
      }
      return !1;
    }));
}
export {
  As as $,
  Dn as $n,
  B as $t,
  Ic as A,
  Yn as An,
  A as Ar,
  La as At,
  nc as B,
  Wt as Bn,
  et as Br,
  ma as Bt,
  Mc as C,
  hr as Cn,
  Ut as Cr,
  Fo as Ct,
  Lc as D,
  ar as Dn,
  Ct as Dr,
  lo as Dt,
  jc as E,
  pr as En,
  kt as Er,
  go as Et,
  Cc as F,
  Hn as Fn,
  mt as Fr,
  Aa as Ft,
  Ls as G,
  dn as Gn,
  Re as Gr,
  Ea as Gt,
  cc as H,
  j as Hn,
  qe as Hr,
  _a as Ht,
  wc as I,
  Un as In,
  Ye as Ir,
  Oa as It,
  Ds as J,
  on as Jn,
  ga as Jt,
  zs as K,
  In as Kn,
  Le as Kr,
  qi as Kt,
  Hs as L,
  Rn as Ln,
  Xe as Lr,
  zi as Lt,
  Uc as M,
  Ln as Mn,
  ft as Mr,
  Na as Mt,
  Rc as N,
  Vn as Nn,
  ut as Nr,
  Fa as Nt,
  kc as O,
  ir as On,
  Pt as Or,
  co as Ot,
  Tc as P,
  zn as Pn,
  St as Pr,
  ka as Pt,
  Os as Q,
  en as Qn,
  Ki as Qt,
  Us as R,
  Bn as Rn,
  nt as Rr,
  Hi as Rt,
  Dc as S,
  yr as Sn,
  It as Sr,
  Wo as St,
  Ac as T,
  gr as Tn,
  jt as Tr,
  So as Tt,
  Rs as U,
  tn as Un,
  Ke as Ur,
  Qi as Ut,
  uc as V,
  Yt as Vn,
  tt as Vr,
  ha as Vt,
  Is as W,
  Qt as Wn,
  We as Wr,
  Zi as Wt,
  Ps as X,
  nn as Xn,
  na as Xt,
  Ms as Y,
  Zt as Yn,
  Ji as Yt,
  js as Z,
  Tn as Zn,
  pa as Zt,
  Nc as _,
  Dr as _n,
  wn as _r,
  Vo as _t,
  Al as a,
  Ri as an,
  un as ar,
  ps as at,
  Pc as b,
  Tr as bn,
  Cn as br,
  qo as bt,
  ml as c,
  pi as cn,
  Sn as cr,
  bs as ct,
  Zc as d,
  ii as dn,
  rn as dr,
  Cs as dt,
  V as en,
  Pn as er,
  Ns as et,
  Xc as f,
  ei as fn,
  sn as fr,
  _s as ft,
  Gc as g,
  Ir as gn,
  Fn as gr,
  cs as gt,
  zc as h,
  Pr as hn,
  On as hr,
  ls as ht,
  Nl as i,
  Yi as in,
  I as ir,
  xs as it,
  Wc as j,
  Xn as jn,
  xt as jr,
  Pa as jt,
  Kc as k,
  mr as kn,
  wt as kr,
  za as kt,
  el as l,
  L as ln,
  bn as lr,
  vs as lt,
  Bc as m,
  Or as mn,
  fn as mr,
  ms as mt,
  Fl as n,
  Xi as nn,
  Xt as nr,
  Ts as nt,
  jl as o,
  hi as on,
  pn as or,
  gs as ot,
  Hc as p,
  wr as pn,
  an as pr,
  Ss as pt,
  Fs as q,
  En as qn,
  Sa as qt,
  Il as r,
  Ca as rn,
  $t as rr,
  Es as rt,
  kl as s,
  mi as sn,
  vn as sr,
  hs as st,
  Bl as t,
  ta as tn,
  xn as tr,
  ws as tt,
  Jc as u,
  qr as un,
  ln as ur,
  ys as ut,
  Vc as v,
  kr as vn,
  kn as vr,
  Bo as vt,
  Oc as w,
  _r as wn,
  zt as wr,
  Lo as wt,
  Ec as x,
  Sr as xn,
  Vt as xr,
  Go as xt,
  Fc as y,
  Cr as yn,
  yn as yr,
  Yo as yt,
  Vs as z,
  qt as zn,
  $e as zr,
  Bi as zt,
};
