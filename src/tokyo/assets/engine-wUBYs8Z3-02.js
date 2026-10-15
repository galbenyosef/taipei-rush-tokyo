// tokyo/assets/engine-wUBYs8Z3 02 — add
// Lines 220-605 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var We = class extends Set {
    latched = new Set();
    add(e) {
      return (this.latched?.add(e), super.add(e));
    }
  },
  Ge = class {
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
      buttons: new We(),
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
          if (!this.enabled || this.modalHandlers.length || Le(e.target))
            return;
          let t = Ue(e);
          (t === `Tab` && e.preventDefault(),
            (t === `AltLeft` || t === `AltRight`) && e.preventDefault(),
            this.syncModifiers(e, t),
            t &&
              !ze.has(t) &&
              (this.keys.add(t),
              !e.repeat && (this.tapKeys.add(t), (this.device = `kbm`))));
        }),
        t(`keyup`, (e) => {
          let t = Ue(e);
          ((t === `AltLeft` || t === `AltRight`) && e.preventDefault(),
            this.syncModifiers(e, t),
            t || this.dropNonModifiers(),
            this.keys.delete(t),
            (t === `MetaLeft` || t === `MetaRight`) && this.dropNonModifiers());
        }),
        t(`focusin`, (e) => {
          Le(e.target) && (this.clearControls(), this.unlockPointer());
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
        for (let n in Be)
          n !== t && e[Be[n]] === !1 && this.keys.has(n) && this.keys.delete(n);
    }
    dropNonModifiers() {
      for (let e of this.keys) e in Be || this.keys.delete(e);
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
  Ke = class {
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
