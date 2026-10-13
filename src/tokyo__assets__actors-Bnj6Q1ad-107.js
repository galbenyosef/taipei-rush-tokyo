// tokyo__assets__actors-Bnj6Q1ad 107 — color
// Lines 52268-52702 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var EE = class {
    kind;
    cap;
    m;
    color;
    param;
    owners;
    count = 0;
    warnedFull = !1;
    constructor(e, t) {
      ((this.kind = e),
        (this.cap = t),
        (this.m = new Float32Array(t * 16)),
        (this.color = new Float32Array(t * 4)),
        (this.param = new Float32Array(t * 4)),
        (this.owners = Array(t).fill(null)));
    }
    alloc(e) {
      return this.count >= this.cap
        ? (this.warnedFull ||
            ((this.warnedFull = !0),
            console.warn(
              `[missions] marker layer '${_E[this.kind]}' full (${this.cap}): a marker is drawn without it`,
            )),
          !1)
        : ((e.slot = this.count++), (this.owners[e.slot] = e), !0);
    }
    free(e) {
      let t = this.count - 1,
        n = e.slot;
      if (!(n < 0)) {
        if (n !== t) {
          let e = this.owners[t];
          (this.m.copyWithin(n * 16, t * 16, t * 16 + 16),
            this.color.copyWithin(n * 4, t * 4, t * 4 + 4),
            this.param.copyWithin(n * 4, t * 4, t * 4 + 4),
            (e.slot = n),
            (this.owners[n] = e));
        }
        ((this.owners[t] = null), (e.slot = -1), this.count--);
      }
    }
  },
  DE = class {
    cap;
    mesh;
    color;
    param;
    kind;
    constructor(e, t, n, r, i) {
      ((this.cap = n),
        (this.color = new a(new Float32Array(n * 4), 4)),
        (this.param = new a(new Float32Array(n * 4), 4)),
        (this.kind = new a(new Float32Array(n), 1)));
      for (let e of [this.color, this.param, this.kind]) e.setUsage(b);
      (e.setAttribute(`iColor`, this.color),
        e.setAttribute(`iParam`, this.param),
        e.setAttribute(`iKind`, this.kind),
        (this.mesh = new Se(e, t, n)),
        this.mesh.instanceMatrix.setUsage(b),
        (this.mesh.count = 0),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = r),
        (this.mesh.castShadow = !1),
        (this.mesh.receiveShadow = !1),
        (this.mesh.matrixAutoUpdate = !1),
        (this.mesh.name = i));
    }
    pack(e, t, n, r) {
      let i = this.mesh.instanceMatrix.array,
        a = this.color.array,
        o = this.param.array,
        s = this.kind.array,
        c = 0;
      for (let l of e) {
        let e = l.m,
          u = l.color,
          d = l.param,
          f = l.owners;
        for (let p = 0; p < l.count; p++) {
          if (!f[p]?.vis) continue;
          let m = p * 16;
          if (r > 0) {
            let i = e[m + 12] - t,
              a = e[m + 14] - n;
            if (i * i + a * a > r) continue;
          }
          if (c >= this.cap) break;
          i.set(e.subarray(m, m + 16), c * 16);
          let h = p * 4,
            g = c * 4;
          ((a[g] = u[h]),
            (a[g + 1] = u[h + 1]),
            (a[g + 2] = u[h + 2]),
            (a[g + 3] = u[h + 3]),
            (o[g] = d[h]),
            (o[g + 1] = d[h + 1]),
            (o[g + 2] = d[h + 2]),
            (o[g + 3] = d[h + 3]),
            (s[c] = l.kind),
            c++);
        }
      }
      if (((this.mesh.count = c), (this.mesh.visible = c > 0), c > 0))
        for (let [e, t] of [
          [this.mesh.instanceMatrix, 16],
          [this.color, 4],
          [this.param, 4],
          [this.kind, 1],
        ])
          (e.clearUpdateRanges(),
            e.addUpdateRange(0, c * t),
            (e.needsUpdate = !0));
    }
  },
  OE = class {
    sys;
    parts;
    opts;
    x = 0;
    y = 0;
    z = 0;
    visible = !0;
    alive = !0;
    constructor(e, t, n) {
      ((this.sys = e), (this.parts = t), (this.opts = n));
    }
    setPos(e, t, n) {
      if (this.alive) {
        ((this.x = e), (this.z = n), t !== void 0 && (this.y = t));
        for (let e of this.parts) this.sys.writeMatrix(e, this);
      }
    }
    setVisible(e) {
      if (this.alive && e !== this.visible) {
        this.visible = e;
        for (let e of this.parts) this.sys.writeAttrs(e, this);
      }
    }
    setColor(e) {
      if (this.alive)
        for (let t of this.parts)
          (t.layer !== gE.Icon ||
            t.cell === NT.chevron ||
            t.cell === NT.person) &&
            (t.color.setHex(e), this.sys.writeAttrs(t, this));
    }
    setIntensity(e) {
      if (this.alive)
        for (let t of this.parts) ((t.alpha = e), this.sys.writeAttrs(t, this));
    }
    remove() {
      this.alive && ((this.alive = !1), this.sys.remove(this));
    }
  },
  kE = class {
    layers = [];
    batch;
    gates;
    batchLayers;
    group = new _();
    handles = new Set();
    phaseSeed = 0;
    dirty = !0;
    packX = 1e9;
    packZ = 1e9;
    packR2 = -1;
    constructor() {
      ((this.group.name = `mission-markers`), hE());
      for (let e of [gE.Ring, gE.Beam, gE.Gate, gE.Icon, gE.Glow])
        this.layers[e] = new EE(e, SE[e]);
      this.batchLayers = CE.map((e) => this.layers[e]);
      let e = xE(`missions-fx`);
      this.batch = new DE(
        TE(),
        e,
        SE[gE.Ring] + SE[gE.Beam] + SE[gE.Glow] + SE[gE.Icon],
        1,
        `mission-markers:batch`,
      );
      let t = new ee(1, 0.055, 8, 56);
      (t.setAttribute(
        `aShape`,
        new I(new Float32Array(t.attributes.position.count).fill(2), 1),
      ),
        (this.gates = new DE(t, e, SE[gE.Gate], 3, `mission-markers:gate`)),
        this.group.add(this.batch.mesh, this.gates.mesh));
    }
    get drawCalls() {
      return +!!this.batch.mesh.visible + +!!this.gates.mesh.visible;
    }
    get count() {
      return this.handles.size;
    }
    add(e) {
      let t = [],
        n = e.color,
        r = (this.phaseSeed = (this.phaseSeed + 1.618) % 6.283),
        i = e.intensity ?? 1,
        a = (e, a) => {
          let o = {
            layer: e,
            slot: -1,
            dy: 0,
            sx: 1,
            sy: 1,
            sz: 1,
            rot: 0,
            size: 1,
            cell: 0,
            color: new Ae(n),
            alpha: 1,
            p0: r,
            p1: 0,
            p2: i,
            p3: 0,
            ...a,
          };
          (a.color && (o.color = a.color),
            this.layers[e].alloc(o) && t.push(o));
        },
        o = e.radius ?? 1.6,
        s = e.iconCell ?? (e.icon === void 0 ? -1 : NT[e.icon]);
      switch (e.style) {
        case `start`: {
          (a(gE.Ring, { dy: 0.02, sx: o * 2.7, sy: 1, sz: o * 2.7, p1: 1 }),
            a(gE.Ring, { dy: 0.03, sx: o, sy: 1, sz: o }),
            a(gE.Beam, { sx: o * 0.92, sy: 2.3, sz: o * 0.92, p1: 0, p2: i }),
            e.pillar !== !1 &&
              a(gE.Beam, { sx: 0.32, sy: 90, sz: 0.32, p1: 1, p2: 0.5 * i }));
          let t = e.iconY ?? 3.3;
          (a(gE.Glow, {
            dy: t,
            size: (e.iconSize ?? 1.5) * 2.4,
            cell: NT.glow,
            p0: r,
            p3: 0.12,
            alpha: 0.85,
          }),
            s >= 0 &&
              a(gE.Icon, {
                dy: t,
                size: e.iconSize ?? 1.5,
                cell: s,
                color: new Ae(16777215),
                p0: r,
                p3: 0.12,
              }));
          break;
        }
        case `goto`:
          (a(gE.Ring, { dy: 0.02, sx: o * 2.4, sy: 1, sz: o * 2.4, p1: 1 }),
            a(gE.Ring, { dy: 0.03, sx: o, sy: 1, sz: o }),
            a(gE.Beam, { sx: o * 0.92, sy: 1.7, sz: o * 0.92, p1: 0 }),
            e.pillar &&
              a(gE.Beam, { sx: 0.3, sy: 60, sz: 0.3, p1: 1, p2: 0.45 * i }),
            a(gE.Icon, {
              dy: e.iconY ?? 2.7,
              size: e.iconSize ?? 0.95,
              cell: s >= 0 ? s : NT.chevron,
              p3: 0.18,
            }));
          break;
        case `drive`:
          (a(gE.Ring, { dy: 0.02, sx: o * 2, sy: 1, sz: o * 2, p1: 1 }),
            a(gE.Ring, { dy: 0.03, sx: o, sy: 1, sz: o }),
            a(gE.Beam, { sx: o * 0.95, sy: 2.6, sz: o * 0.95, p1: 0 }),
            e.pillar !== !1 &&
              a(gE.Beam, { sx: 0.4, sy: 70, sz: 0.4, p1: 1, p2: 0.5 * i }),
            a(gE.Icon, {
              dy: e.iconY ?? 5.2,
              size: e.iconSize ?? 1.8,
              cell: s >= 0 ? s : NT.chevron,
              p3: 0.25,
            }));
          break;
        case `checkpoint`:
        case `finish`: {
          let t = e.radius ?? 6,
            n = Math.PI - (e.heading ?? 0);
          (a(gE.Gate, { dy: t * 0.62, sx: t, sy: t * 0.62, sz: t, rot: n }),
            a(gE.Ring, {
              dy: 0.04,
              sx: t * 0.7,
              sy: 1,
              sz: t * 0.7,
              p2: 0.8 * i,
            }),
            e.pillar !== !1 &&
              a(gE.Beam, { sx: 0.35, sy: 55, sz: 0.35, p1: 1, p2: 0.45 * i }),
            e.style === `finish`
              ? a(gE.Icon, {
                  dy: t * 1.35,
                  size: 3.2,
                  cell: NT.flag,
                  color: new Ae(16777215),
                  p3: 0.2,
                })
              : a(gE.Icon, {
                  dy: t * 1.3,
                  size: 2.2,
                  cell: NT.chevron,
                  p3: 0.25,
                }));
          break;
        }
        case `target`:
          (a(gE.Icon, {
            dy: e.iconY ?? 2.4,
            size: e.iconSize ?? 0.9,
            cell: s >= 0 ? s : NT.chevron,
            p3: 0.15,
          }),
            a(gE.Glow, {
              dy: e.iconY ?? 2.4,
              size: (e.iconSize ?? 0.9) * 2.2,
              cell: NT.glow,
              alpha: 0.6,
            }));
          break;
        case `glow`:
          a(gE.Glow, {
            dy: e.iconY ?? 0.5,
            size: e.iconSize ?? 1.8,
            cell: s >= 0 ? s : NT.glow,
            p3: 0.05,
            alpha: i,
          });
          break;
        case `pickup`:
          (a(gE.Ring, {
            dy: 0.02,
            sx: o * 2.6,
            sy: 1,
            sz: o * 2.6,
            p1: 1,
            p2: i,
          }),
            a(gE.Ring, { dy: 0.03, sx: o, sy: 1, sz: o, p2: 0.8 * i }),
            a(gE.Glow, {
              dy: e.iconY ?? 0.7,
              size: e.iconSize ?? 1.6,
              cell: NT.glow,
              p3: 0.08,
              alpha: 0.7 * i,
            }));
      }
      let c = new OE(this, t, e);
      (this.handles.add(c), c.setPos(e.x, e.y ?? 0.16, e.z));
      for (let e of t) this.writeAttrs(e, c);
      return c;
    }
    remove(e) {
      if (this.handles.delete(e)) {
        for (let t of e.parts) this.layers[t.layer].free(t);
        this.dirty = !0;
      }
    }
    clear() {
      for (let e of [...this.handles]) e.remove();
    }
    writeMatrix(e, t) {
      let n = this.layers[e.layer];
      if (e.slot < 0) return;
      let r = n.m,
        i = e.slot * 16,
        a = Math.cos(e.rot),
        o = Math.sin(e.rot);
      ((r[i + 0] = a * e.sx),
        (r[i + 1] = 0),
        (r[i + 2] = -o * e.sx),
        (r[i + 3] = 0),
        (r[i + 4] = 0),
        (r[i + 5] = e.sy),
        (r[i + 6] = 0),
        (r[i + 7] = 0),
        (r[i + 8] = o * e.sz),
        (r[i + 9] = 0),
        (r[i + 10] = a * e.sz),
        (r[i + 11] = 0),
        (r[i + 12] = t.x),
        (r[i + 13] = t.y + e.dy),
        (r[i + 14] = t.z),
        (r[i + 15] = 1),
        (this.dirty = !0));
    }
    writeAttrs(e, t) {
      let n = this.layers[e.layer];
      if (e.slot < 0) return;
      let r = n.color,
        i = n.param,
        a = e.slot * 4;
      ((r[a] = e.color.r),
        (r[a + 1] = e.color.g),
        (r[a + 2] = e.color.b),
        (r[a + 3] = t.visible ? e.alpha : 0),
        (e.vis = t.visible && e.alpha > 0.001),
        e.layer === gE.Icon || e.layer === gE.Glow
          ? ((i[a] = e.cell),
            (i[a + 1] = e.size),
            (i[a + 2] = e.p0),
            (i[a + 3] = e.p3))
          : ((i[a] = e.p0),
            (i[a + 1] = e.p1),
            (i[a + 2] = e.p2),
            (i[a + 3] = e.p3)),
        (this.dirty = !0));
    }
    flush(e) {
      let t = 0,
        n = 0,
        r = 0;
      if (e) {
        let i = e.matrixWorld.elements;
        ((t = i[12]), (n = i[14]));
        let a = e.far;
        r = a > 0 && a < 1e6 ? (a + wE) * (a + wE) : 0;
        let o = t - this.packX,
          s = n - this.packZ;
        if (!this.dirty && r === this.packR2 && o * o + s * s < 576) return;
      } else if (!this.dirty && this.packR2 === 0) return;
      ((this.dirty = !1),
        (this.packX = t),
        (this.packZ = n),
        (this.packR2 = r),
        this.batch.pack(this.batchLayers, t, n, r),
        this.gates.pack([this.layers[gE.Gate]], t, n, r));
    }
  },
  AE = new ke(),
  jE = new y(),
  ME = new k(),
  NE = new R(),
  PE = new R(),
  FE = new Ae();
