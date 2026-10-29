// tokyo/assets/region-tokyo-A7LxHjud 440 — math
// Lines 156589-157108 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var K3 = (e, t) => Math.atan2(e, -t),
  q3 = (e) => Math.atan2(Math.sin(e), Math.cos(e)),
  GRe = 40,
  KRe = `
#tk-rg { position: fixed; left: 50%; top: calc(136px + env(safe-area-inset-top)); transform: translateX(-50%); z-index: 19;
  pointer-events: none; user-select: none; display: flex; flex-direction: column; align-items: center; gap: 4px; color: #fff;
  font: 800 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; text-shadow: 0 2px 6px rgba(0,0,0,.65); }
#tk-rg .rg-a { width: 64px; height: 64px; filter: drop-shadow(0 3px 6px rgba(0,0,0,.55)); transition: transform .08s linear; }
#tk-rg .rg-a svg { width: 100%; height: 100%; display: block; }
#tk-rg .rg-t { display: flex; align-items: center; gap: 6px; padding: 3px 12px; border-radius: 10px; background: rgba(10,14,24,.66);
  border: 1px solid rgba(255,210,77,.55); color: #ffd24d; font-size: 17px; opacity: 0; transition: opacity .2s; }
#tk-rg .rg-t.on { opacity: 1; }
#tk-rg .rg-t.near { background: rgba(255,170,30,.9); color: #1a1205; text-shadow: none; }
#tk-rg .rg-t svg { width: 20px; height: 20px; }
#tk-rg .rg-t.left svg { transform: scaleX(-1); }
#tk-rg .rg-t.straight svg { display: none; }
#tk-rg.wait { display: none; }
#tk-rg .rg-c { padding: 2px 10px; border-radius: 8px; background: rgba(10,14,24,.55); font-size: 13.5px; font-weight: 700; }
#tk-rg .rg-w { padding: 5px 14px; border-radius: 10px; background: rgba(200,30,30,.88); font-size: 18px; display: none; white-space: nowrap; }
#tk-rg .rg-w.on { display: block; }
@media (max-width: 760px) { #tk-rg { top: calc(112px + env(safe-area-inset-top)); } #tk-rg .rg-a { width: 48px; height: 48px; } #tk-rg .rg-t { font-size: 15px; } #tk-rg .rg-c { font-size: 12px; } }
/* a phone held sideways (≈ 390 px tall): one compact row under the kart HUD's drift strip, top centre (the left edge
   has the street-name card and the stick) */
@media (max-height: 480px) { #tk-rg { top: calc(96px + env(safe-area-inset-top)); flex-direction: row; gap: 6px; }
  #tk-rg .rg-a { width: 34px; height: 34px; } #tk-rg .rg-t { font-size: 13px; padding: 2px 8px; } #tk-rg .rg-c { font-size: 11.5px; }
  /* (the warning under the row, not in it: in the row it widened it into the race panel on the right) */
  #tk-rg .rg-w { font-size: 14px; padding: 3px 10px; position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); } }
body:has(#tk-photo) #tk-rg { visibility: hidden; }
`,
  qRe = `<svg viewBox="0 0 100 100"><path d="M50 4 L90 54 L64 54 L64 96 L36 96 L36 54 L10 54 Z" fill="#ffd24d" stroke="#1a1205" stroke-width="5" stroke-linejoin="round"/></svg>`,
  JRe = `<svg viewBox="0 0 24 24"><path d="M6 21 V11 Q6 7 10 7 H15 V3 L22 9 L15 15 V11 H10 V21 Z" fill="currentColor"/></svg>`,
  YRe = `
attribute float aS;
uniform float uS;
uniform vec2 uSize;
varying vec2 vUv;
varying float vD;
void main() {
  vUv = uv;
  vD = aS - uS;
  vec3 P = instanceMatrix[3].xyz;
  vec3 T = instanceMatrix[0].xyz;
  vec4 c0 = viewMatrix * vec4(P, 1.0);
  if (c0.z > -0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  // the course's heading relative to the view, as on a map turned with the camera: along the view = up, a bend to
  // the right = right (not the perspective projection — beside the camera a straight line runs to the vanishing point
  // and would read as a turn)
  vec3 tv = mat3(viewMatrix) * T;
  vec2 d = vec2(tv.x, -tv.z);
  d = length(d) > 1e-4 ? normalize(d) : vec2(0.0, 1.0);
  vec2 r = vec2(d.y, -d.x);
  // (the plane geometry lies in XZ: x across, −z forward)
  vec2 q = vec2(position.x, -position.z) * uSize;
  c0.xy += r * q.x + d * q.y;
  gl_Position = projectionMatrix * c0;
}
`,
  XRe = `
uniform float uTime;
uniform float uNight;
uniform float uFar;
uniform vec2 uSize;
uniform vec3 uColor;
varying vec2 vUv;
varying float vD;
void main() {
  // in metres on the arrow: X across, Y along its direction
  vec2 q = (vUv - 0.5) * uSize;
  float hw = uSize.x * 0.5 - 0.1, top = uSize.y * 0.5 - 0.1, T = uSize.y * 0.42;
  // a chevron: the band between two V lines, cut at the sides; a dark rim round it (contrast by day)
  float f = q.y + abs(q.x) * 0.8;
  float core = smoothstep(top - T, top - T + 0.05, f) * (1.0 - smoothstep(top - 0.05, top, f)) * (1.0 - smoothstep(hw - 0.05, hw, abs(q.x)));
  float rim = smoothstep(top - T - 0.13, top - T - 0.08, f) * (1.0 - smoothstep(top + 0.03, top + 0.08, f)) * (1.0 - smoothstep(hw + 0.02, hw + 0.07, abs(q.x)));
  float a = max(core, rim * 0.6);
  if (a < 0.01) discard;
  // a pulse running forward through the trail
  float w = fract((vD - uTime * 26.0) / 48.0);
  float pulse = smoothstep(0.0, 0.08, w) * (1.0 - smoothstep(0.08, 0.45, w));
  float fade = smoothstep(2.0, 8.0, vD) * (1.0 - smoothstep(uFar * 0.7, uFar, vD));
  vec3 col = mix(vec3(0.05, 0.03, 0.0), uColor * mix(1.1, 1.6, uNight) * (0.9 + 0.5 * pulse), core);
  gl_FragColor = vec4(col, a * fade * (0.85 + 0.15 * pulse));
  #include <colorspace_fragment>
}
`,
  J3 = class {
    m;
    path;
    L;
    closed;
    s0;
    laps;
    total;
    gates = [];
    gatesPerLap;
    next = -1;
    turns = [];
    mesh = null;
    aS = null;
    mat = null;
    chev;
    chevFirst = NaN;
    root = null;
    el = {};
    last = {};
    hudT = 0;
    wrongT = 0;
    warnText = ``;
    prog = NaN;
    seg = -1;
    lastS = 0;
    disposed = !1;
    proj = { s: 0, seg: 0, dist: 0 };
    pt = { x: 0, z: 0 };
    dir = { x: 0, z: 0 };
    heightAt;
    gpsAhead;
    gateR = 5.5;
    constructor(e, t) {
      this.m = e;
      let n = e.ctx;
      ((this.path = t.path),
        (this.L = t.path.length),
        (this.closed = t.path.closed),
        (this.s0 = this.closed ? (t.s0 ?? 0) : 0),
        (this.laps = this.closed ? Math.max(1, t.laps ?? 1) : 1),
        (this.total = this.closed
          ? this.L * this.laps
          : Math.min(this.L, t.finishS ?? this.L)),
        (this.gpsAhead = t.gpsAhead ?? 700),
        (this.heightAt =
          t.heightAt ??
          ((e, t, r) => {
            let i = n.groundAt(e, t, r + 0.5, 0.7);
            return Number.isFinite(i) && Math.abs(i - r) < 3 ? i : r;
          })));
      let r = Math.max(1, Math.round(t.gates));
      this.gatesPerLap = r;
      let i = this.closed ? this.L / r : this.total / r;
      for (let e = 0; e < this.laps; e++)
        for (let t = 1; t <= r; t++) {
          let n = e * (this.closed ? this.L : 0) + i * t;
          this.gates.push({
            p: n,
            line: t === r,
            last: e === this.laps - 1 && t === r,
            mk: null,
            bright: !1,
          });
        }
      ((this.gateR = t.gateRadius ?? 5.5), (this.turns = ZRe(this.path)));
      let a = t.chevron?.spacing ?? 8,
        o = t.chevron?.ahead ?? 130;
      this.chev = {
        spacing: a,
        ahead: o,
        width: t.chevron?.width ?? 1.7,
        length: t.chevron?.length ?? 1.3,
        height: t.chevron?.height ?? 1.1,
        count: Math.min(GRe, Math.ceil(o / a) + 1),
      };
      try {
        this.buildMesh();
      } catch (e) {
        console.warn(`[race-guide] chevrons unavailable`, e);
      }
      (this.buildHud(), Jn({ fill: (e, t, n, r) => this.fillGps(e, t, n, r) }));
    }
    track(e, t, n) {
      let r = this.path;
      (r.project(e, t, this.proj, this.seg, 8),
        this.proj.dist > 30 && r.project(e, t, this.proj),
        (this.seg = this.proj.seg));
      let i = this.proj.s;
      if (n !== void 0 && Number.isFinite(n)) this.prog = n;
      else if (Number.isFinite(this.prog)) {
        let e = i - this.lastS;
        (this.closed &&
          (e > this.L / 2 ? (e -= this.L) : e < -this.L / 2 && (e += this.L)),
          (this.prog += e));
      } else {
        let e = i - this.s0;
        (this.closed &&
          ((e = ((e % this.L) + this.L) % this.L),
          e > this.L / 2 && (e -= this.L)),
          (this.prog = e));
      }
      this.lastS = i;
    }
    sOf(e) {
      return this.closed ? this.s0 + e : e;
    }
    update(e, t, n = !0) {
      if (this.disposed) return;
      let r = this.m,
        i = r.ctx,
        a = r.playerVehicle,
        o = a ? a.body.x : r.px,
        s = a ? a.body.z : r.pz,
        c = a ? a.object.position.y : i.player.position.y;
      this.track(o, s, t);
      let l = this.prog,
        u = this.gates.findIndex((e) => e.p > l + 0.5);
      if (
        (u < 0 && (u = this.gates.length),
        u !== this.next &&
          (this.next >= 0 &&
            u > this.next &&
            u < this.gates.length &&
            !this.gates[u - 1].line &&
            r.sfx(`checkpoint`, { ui: !0, volume: 0.45 }),
          (this.next = u),
          this.showGates(c)),
        this.mesh && this.aS)
      ) {
        let e = this.chev.spacing,
          t = Math.floor(l / e) + 1;
        (t !== this.chevFirst &&
          ((this.chevFirst = t), this.placeChevrons(t, o, s, c)),
          (this.mat.uniforms.uS.value = l));
      }
      (this.hudT -= e) <= 0 &&
        ((this.hudT = 1 / 15),
        this.root?.classList.toggle(`wait`, !n),
        n && this.hud(o, s, a ? Math.abs(a.speed) : 0, a ? a.heading : NaN));
    }
    showGates(e) {
      let t = this.m;
      for (let n = 0; n < this.gates.length; n++) {
        let r = this.gates[n],
          i = n === this.next || n === this.next + 1,
          a = n === this.next;
        if (
          (r.mk && (!i || r.bright !== a) && (r.mk.remove(), (r.mk = null)),
          i && !r.mk)
        ) {
          let n = this.sOf(r.p);
          (this.path.pointAt(n, this.pt), this.path.dirAt(n, this.dir));
          let i = this.heightAlong(this.prog, r.p, e),
            o = r.line ? (a ? 16777215 : 16773824) : a ? 16727406 : 16754880;
          ((r.mk = t.marker({
            x: this.pt.x,
            z: this.pt.z,
            y: i + 0.05,
            color: o,
            style: r.line ? `finish` : `checkpoint`,
            pillar: r.line,
            radius: this.gateR,
            heading: K3(this.dir.x, this.dir.z),
            intensity: a ? 1 : 0.42,
          })),
            (r.bright = a));
        }
      }
      let n = this.gates[this.next];
      if (n) {
        this.path.pointAt(this.sOf(n.p), this.pt);
        let e = this.gatesPerLap,
          r = Math.floor(this.next / e),
          i = n.last
            ? { zh: `終點`, en: `Finish`, ja: `ゴール` }
            : n.line
              ? { zh: `第 ${r + 2} 圈`, en: `Lap ${r + 2}`, ja: `${r + 2}周目` }
              : {
                  zh: `檢查點 ${(this.next % e) + 1}`,
                  en: `Checkpoint ${(this.next % e) + 1}`,
                  ja: `チェックポイント ${(this.next % e) + 1}`,
                };
        t.waypoint({ x: this.pt.x, z: this.pt.z }, i);
      } else t.waypoint(null);
    }
    heightAlong(e, t, n) {
      let r = n,
        i = Math.min(80, Math.max(1, Math.ceil((t - e) / 8)));
      for (let n = 1; n <= i; n++)
        (this.path.pointAt(this.sOf(e + ((t - e) * n) / i), this.pt),
          (r = this.heightAt(this.pt.x, this.pt.z, r)));
      return r;
    }
    buildMesh() {
      let e = this.m.ctx,
        t = new m(1, 1);
      t.rotateX(-Math.PI / 2);
      let n = new i({
        name: `race-guide-chevrons`,
        uniforms: {
          uTime: Be.uTime,
          uNight: Be.uNight,
          uS: { value: 0 },
          uFar: { value: this.chev.ahead },
          uSize: { value: new v(this.chev.width, this.chev.length) },
          uColor: { value: new f(16761370) },
        },
        vertexShader: YRe,
        fragmentShader: XRe,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1,
        fog: !1,
      });
      n.forceSinglePass = !0;
      let r = this.chev.count,
        a = new A(t, n, r);
      ((a.name = `race-guide-chevrons`),
        (a.frustumCulled = !1),
        (a.matrixAutoUpdate = !1),
        (a.renderOrder = 2),
        (a.count = 0));
      let o = new x(new Float32Array(r), 1);
      (o.setUsage(d),
        t.setAttribute(`aS`, o),
        (this.mesh = a),
        (this.aS = o),
        (this.mat = n),
        e.scene.add(a));
    }
    _m = new p();
    ys = new Float32Array(42);
    placeChevrons(e, t, n, r) {
      let i = this.mesh,
        a = this.aS,
        o = this.chev.spacing,
        s = this.total,
        c = this.heightAt(t, n, r),
        l = this.prog,
        u = [];
      for (let t = -1; t <= this.chev.count; t++) {
        let n = (e + t) * o;
        (n > l && ((c = this.heightAlong(l, n, c)), (l = n)),
          (this.ys[t + 1] = c),
          u.push(n));
      }
      let d = 0;
      for (let e = 0; e < this.chev.count; e++) {
        let t = u[e + 1];
        if (t > s - 1) break;
        if (t < this.prog + 1) continue;
        let n = this.sOf(t);
        (this.path.pointAt(n, this.pt), this.path.dirAt(n, this.dir));
        let r = (this.ys[e + 2] - this.ys[e]) / (2 * o),
          c = Math.hypot(this.dir.x, r, this.dir.z) || 1;
        (this._m.set(
          this.dir.x / c,
          0,
          0,
          this.pt.x,
          r / c,
          1,
          0,
          this.ys[e + 1] + this.chev.height,
          this.dir.z / c,
          0,
          1,
          this.pt.z,
          0,
          0,
          0,
          1,
        ),
          i.setMatrixAt(d, this._m),
          (a.array[d] = t),
          d++);
      }
      ((i.count = d),
        (i.instanceMatrix.needsUpdate = !0),
        (a.needsUpdate = !0));
    }
    fillGps(e, t, n, r) {
      let i = 0;
      ((n[i * 2] = e), (n[i * 2 + 1] = t), i++);
      let a = Number.isFinite(this.prog) ? this.prog : 0,
        o = Math.min(this.total, a + this.gpsAhead);
      for (let e = Math.ceil(a / 10) * 10 + 10; e <= o && i < r; e += 10)
        (this.path.pointAt(this.sOf(e), this.pt),
          (n[i * 2] = this.pt.x),
          (n[i * 2 + 1] = this.pt.z),
          i++);
      let s = this.gates[this.next],
        c = s ? Math.max(0, s.p - a) : 0;
      return { n: i, toTarget: c, y: s?.mk ? s.mk.y : NaN };
    }
    buildHud() {
      if (typeof document > `u`) return;
      if (!document.getElementById(`tk-rg-css`)) {
        let e = document.createElement(`style`);
        ((e.id = `tk-rg-css`),
          (e.textContent = KRe),
          document.head.appendChild(e));
      }
      let e = document.createElement(`div`);
      ((e.id = `tk-rg`),
        (e.innerHTML = `<div class="rg-w"></div><div class="rg-a">${qRe}</div><div class="rg-t">${JRe}<span></span></div><div class="rg-c"></div>`),
        document.body.appendChild(e),
        (this.root = e),
        (this.el.w = e.querySelector(`.rg-w`)),
        (this.el.a = e.querySelector(`.rg-a`)),
        (this.el.t = e.querySelector(`.rg-t`)),
        (this.el.ts = e.querySelector(`.rg-t span`)),
        (this.el.c = e.querySelector(`.rg-c`)));
    }
    setText(e, t) {
      let n = this.el[e];
      n && this.last[e] !== t && ((this.last[e] = t), (n.textContent = t));
    }
    hud(e, t, n, r) {
      if (!this.root) return;
      let i = this.m.ctx,
        a = (e) => i.t(e),
        o = this.prog,
        s = Math.min(this.total, o + Math.max(22, Math.min(60, n * 1.6)));
      this.path.pointAt(this.sOf(s), this.pt);
      let c = K3(this.pt.x - e, this.pt.z - t),
        l = i.camera.matrixWorld.elements,
        u = q3(c - K3(-l[8], -l[10])),
        d = Math.round((u * 180) / Math.PI);
      (this.last.deg !== String(d) &&
        ((this.last.deg = String(d)),
        (this.el.a.style.transform = `rotate(${d}deg)`)),
        this.path.dirAt(this.sOf(Math.max(0, o)), this.dir));
      let f = K3(this.dir.x, this.dir.z),
        p = Number.isFinite(r) && n > 2.5 && Math.cos(q3(r - f)) < -0.3;
      this.wrongT = p ? this.wrongT + 1 / 15 : 0;
      let m = this.wrongT > 1,
        h =
          this.warnText ||
          (m
            ? a({
                zh: `逆向了！快掉頭`,
                en: `Wrong way! Turn around`,
                ja: `逆走！引き返せ`,
              })
            : ``);
      (this.el.w.classList.toggle(`on`, !!h), h && this.setText(`w`, h));
      let g = null,
        _ = 0,
        v = this.closed ? (((this.s0 + o) % this.L) + this.L) % this.L : o;
      for (let e of this.turns) {
        let t = e.s - v;
        (this.closed && t < -5 && (t += this.L),
          !(t < -5 || t > 260) &&
            ((!this.closed && e.s > this.total) ||
              (this.closed && o + t > this.total) ||
              ((!g || t < _) && ((g = e), (_ = t)))));
      }
      let y = this.el.t;
      if (g) {
        let e = g.angle > 1,
          t = g.right
            ? a(
                e
                  ? { zh: `右轉`, en: `Turn right`, ja: `右折` }
                  : { zh: `右彎`, en: `Bear right`, ja: `右カーブ` },
              )
            : a(
                e
                  ? { zh: `左轉`, en: `Turn left`, ja: `左折` }
                  : { zh: `左彎`, en: `Bear left`, ja: `左カーブ` },
              );
        (this.setText(
          `ts`,
          _ < 25 ? t : `${t} · ${Math.round(Math.max(0, _) / 10) * 10} m`,
        ),
          y.classList.add(`on`),
          y.classList.toggle(`left`, !g.right),
          y.classList.remove(`straight`),
          y.classList.toggle(`near`, _ < 60));
      } else
        (this.setText(`ts`, a({ zh: `直走`, en: `Straight on`, ja: `直進` })),
          y.classList.add(`on`),
          y.classList.remove(`left`, `near`),
          y.classList.add(`straight`));
      let b = this.gates[this.next];
      if (b) {
        let e = Math.max(0, b.p - o),
          t =
            e >= 1e3
              ? `${(e / 1e3).toFixed(1)} km`
              : `${Math.round(e / 10) * 10} m`,
          n = this.gatesPerLap,
          r = (this.next % n) + 1;
        this.setText(
          `c`,
          b.last
            ? `${a({ zh: `終點`, en: `Finish`, ja: `ゴール` })} · ${t}`
            : b.line
              ? `${a({ zh: `圈線`, en: `Lap line`, ja: `コントロールライン` })} · ${t}`
              : `${a({ zh: `檢查點`, en: `Checkpoint`, ja: `チェックポイント` })} ${r}/${n} · ${t}`,
        );
      } else this.setText(`c`, ``);
    }
    warn(e) {
      e !== this.warnText &&
        ((this.warnText = e),
        this.el.w &&
          (e && this.setText(`w`, e),
          this.el.w.classList.toggle(`on`, !!e || this.wrongT > 1)));
    }
    hideHud() {
      this.root?.classList.add(`wait`);
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0), Jn(null));
        for (let e of this.gates) (e.mk?.remove(), (e.mk = null));
        try {
          this.m.waypoint(null);
        } catch {}
        ((this.mesh &&=
          (this.mesh.removeFromParent(),
          this.mesh.geometry.dispose(),
          this.mesh.dispose(),
          this.mat?.dispose(),
          null)),
          this.root?.remove(),
          (this.root = null));
      }
    }
  };
