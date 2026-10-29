// tokyo/assets/actors-bknSEpf2 14 — kind
// Lines 4136-4476 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var xo = class {
    ctx;
    onHit;
    entries = new Map();
    layer;
    fleets = new Map();
    matrix = new N();
    quat = new v();
    euler = new Pe(0, 0, 0, `YXZ`);
    point = new V();
    scale = new V(1, 1, 1);
    bounds = new ye();
    source;
    constructor(e, t) {
      ((this.ctx = e),
        (this.onHit = t),
        (this.source = () => e.police.networkSource?.()));
    }
    get size() {
      return this.entries.size;
    }
    get(e) {
      return this.entries.get(e)?.target;
    }
    put(e, t, n) {
      if ((t.kind === 0 && !wa[t.look]) || (t.kind === 1 && !yo[t.look]))
        return;
      let r = `${e}/${t.id}`,
        i = this.entries.get(r);
      if (!i) {
        let a = [...this.entries.values()].filter(
            (e) => e.target.kind === t.kind,
          ),
          o = t.kind === 0 ? go : t.kind === 1 ? _o : vo;
        if (a.length >= o) {
          let e = this.ctx.player.position;
          if (
            (a.sort(
              (t, n) =>
                Math.hypot(n.x - e.x, n.z - e.z) -
                Math.hypot(t.x - e.x, t.z - e.z),
            ),
            Math.hypot(t.x - e.x, t.z - e.z) >=
              Math.hypot(a[0].x - e.x, a[0].z - e.z) - 8)
          )
            return;
          this.remove(a[0].key);
        }
        let s = t.kind === 1 ? this.ctx.vehicles.specs[yo[t.look]] : null,
          c = s?.halfW ?? (t.kind === 2 ? 2.2 : 0.32),
          l = s?.halfL ?? c,
          u = {
            id: Ue(),
            owner: `net-police`,
            kind: t.kind === 1 ? `vehicle` : `police`,
            x: t.x,
            y: t.y - (t.kind === 2 ? 1.5 : 0),
            z: t.z,
            heading: t.heading,
            vx: t.vx,
            vz: t.vz,
            halfW: c,
            halfL: l,
            radius: Math.hypot(c, l),
            height: s?.height ?? (t.kind === 2 ? 3.2 : 1.78),
            mass: s?.mass ?? (t.kind === 2 ? 3e3 : 85),
            active: !0,
            userData: { netPolice: !0, ownerPeer: e, policeId: t.id },
          };
        i = {
          key: r,
          owner: e,
          target: t,
          body: u,
          x: t.x,
          y: t.y,
          z: t.z,
          heading: t.heading,
          received: n,
          shot: t.shot,
          hitAt: -1 / 0,
        };
        let d = i;
        ((u.onDamage = (t) => this.onHit(e, d.target, t)),
          (u.onImpact = (n, r, i) => {
            if (
              !i ||
              i !== this.ctx.vehicles.playerVehicle?.body ||
              t.kind !== 1 ||
              performance.now() - d.hitAt < 350
            )
              return;
            d.hitAt = performance.now();
            let a = Math.hypot(n, r) / Math.max(80, u.mass);
            a > 4 &&
              this.onHit(e, d.target, {
                amount: Math.min(180, (a - 4) * 12),
                source: `vehicle`,
              });
          }),
          this.ctx.dynamics.add(u),
          this.entries.set(r, i));
      }
      if (i.target.kind === t.kind && i.target.look === t.look) {
        if (
          (t.kind === 1 &&
            t.health === 0 &&
            i.target.health > 0 &&
            (this.source()
              ?.assets()
              .fx.flash(t.x, t.y + 1, t.z, 8, 5, 2, 5, 0.45),
            this.ctx.audio.play(`explosion`, {
              x: t.x,
              y: t.y + 1,
              z: t.z,
              volume: 0.65,
            })),
          t.shot > i.shot && t.kind === 0 && t.health > 0)
        ) {
          let e = this.source()?.assets().fx,
            n = Math.sin(t.heading),
            r = -Math.cos(t.heading),
            i = t.y + 1.38 - t.crouch * 0.42;
          (e?.flash(
            t.x + n * 0.6,
            i,
            t.z + r * 0.6,
            5,
            3.6,
            1.6,
            0.55,
            0.08,
            3.5,
            t.y,
          ),
            this.ctx.audio.play(`gunshot`, {
              x: t.x,
              y: i,
              z: t.z,
              volume: 0.65,
              rate: t.gun === 2 ? 1.15 : 1,
            }));
        }
        ((i.shot = t.shot),
          (i.target = t),
          (i.received = n),
          (i.body.active =
            t.kind === 1 ? !!(t.flags & 2) : t.health > 0 && !!(t.flags & 1)));
      }
    }
    remove(e) {
      let t = this.entries.get(e);
      t &&
        (this.ctx.dynamics.remove(t.body),
        t.sound?.stop(),
        t.heli &&
          (t.heli.removeFromParent(),
          t.heli.traverse((e) => {
            e.isInstancedMesh && e.dispose();
          }),
          t.heliMaterial?.dispose()),
        this.entries.delete(e));
    }
    draw(e, t) {
      let n = this.source()?.assets();
      if (!n) return;
      (!this.layer &&
        [...this.entries.values()].some((e) => e.target.kind === 0) &&
        ((this.layer = bo(n.officers.near)),
        this.ctx.scene.add(this.layer.mesh)),
        this.layer &&
          (this.layer.mesh.material = n.officers.near.mesh.material));
      for (let e of this.fleets.values()) e.count = 0;
      let r = 0,
        i = 0;
      this.bounds.makeEmpty();
      let a = this.ctx.player.position;
      for (let o of this.entries.values()) {
        let s = o.target,
          c = Math.min(0.18, Math.max(0, t - o.received) / 1e3),
          l = s.x + s.vx * c,
          u = s.z + s.vz * c,
          d =
            Math.hypot(o.x - l, o.z - u) > 18
              ? 1
              : 1 - Math.exp(-Math.max(0, e) * 18);
        ((o.x += (l - o.x) * d),
          (o.y += (s.y - o.y) * d),
          (o.z += (u - o.z) * d),
          (o.heading +=
            Math.atan2(
              Math.sin(s.heading - o.heading),
              Math.cos(s.heading - o.heading),
            ) * d),
          Object.assign(o.body, {
            x: o.x,
            y: o.y - (s.kind === 2 ? 1.5 : 0),
            z: o.z,
            heading: o.heading,
            vx: s.vx,
            vz: s.vz,
          }));
        let f = Math.hypot(o.x - a.x, o.z - a.z);
        if (s.kind === 0 && this.layer) {
          let e = this.layer,
            t = wa[s.look],
            n = s.fall * (Math.PI / 2 - 0.08);
          (this.euler.set(n, -o.heading, -s.roll, `YXZ`),
            this.quat.setFromEuler(this.euler),
            this.point.set(o.x, o.y + Math.sin(n) * 0.14, o.z),
            this.scale.setScalar(ho(s.look)),
            this.matrix.compose(this.point, this.quat, this.scale),
            e.mesh.setMatrixAt(r, this.matrix),
            e.aA.setXYZW(
              r,
              s.phase + c * Math.hypot(s.vx, s.vz) * 1.5,
              s.stride,
              s.aim,
              s.crouch,
            ),
            e.aB.setXYZW(r, s.gun, t.variant * 8, t.tone, s.pitch),
            e.aC.setXYZW(r, s.flinch, s.reach, 0, -s.ride),
            this.bounds.expandByPoint(this.point),
            r++);
        } else if (s.kind === 1) {
          let e = yo[s.look],
            t = this.fleets.get(e);
          (t ||
            ((t = this.ctx.vehicles.createFleet?.(e, _o, {
              glow: !0,
              rider: !1,
            })),
            t && (this.ctx.scene.add(t.object), this.fleets.set(e, t))),
            t &&
              t.count < _o &&
              (t.set(
                t.count,
                o.x,
                o.y,
                o.z,
                o.heading,
                s.health > 0 ? s.color : 2369323,
                s.health > 0 ? s.flags & 16 : 128,
                s.seed,
              ),
              this.euler.set(s.pitch, -o.heading, s.roll, `YXZ`),
              this.quat.setFromEuler(this.euler),
              this.point.set(o.x, o.y, o.z),
              this.scale.setScalar(1),
              this.matrix.compose(this.point, this.quat, this.scale),
              t.mesh.setMatrixAt(t.count, this.matrix),
              t.count++));
        } else if (s.kind === 2) {
          (o.heli ||
            ((o.heli = n.helicopter.clone(!0)),
            o.heli.traverse((e) => {
              if (e.name !== `police-heli-body`) return;
              let t = e,
                n = t.material,
                r = n.clone();
              ((r.onBeforeCompile = n.onBeforeCompile),
                (r.customProgramCacheKey = n.customProgramCacheKey),
                (r.userData = n.userData),
                (t.material = o.heliMaterial = r));
            }),
            this.ctx.scene.add(o.heli)),
            (o.heli.visible = !0),
            o.heliMaterial?.color.setHex(s.flags & 1 ? 16777215 : 2762790));
          for (let e of o.heli.children)
            e.renderOrder === 5 && (e.visible = !!(s.flags & 1));
          (o.heli.position.set(o.x, o.y, o.z),
            o.heli.rotation.set(s.pitch, -o.heading, s.roll, `YXZ`));
        }
        s.health > 0 &&
        f < 130 &&
        (s.kind === 2 || (s.kind === 1 && s.flags & 1)) &&
        i++ < 2
          ? ((o.sound ??= this.ctx.audio.loop(
              s.kind === 2 ? `helicopter` : `siren_police`,
              { x: o.x, y: o.y + 1, z: o.z, volume: 0.55 },
            )),
            o.sound.setPosition(o.x, o.y + 1, o.z))
          : (o.sound &&= (o.sound.stop(), void 0));
      }
      if (this.layer) {
        let e = this.layer;
        ((e.mesh.count = r),
          (e.mesh.visible = r > 0),
          r &&
            (this.bounds.getBoundingSphere(e.sphere),
            (e.sphere.radius += 2),
            (e.mesh.instanceMatrix.needsUpdate = !0),
            (e.aA.needsUpdate = e.aB.needsUpdate = e.aC.needsUpdate = !0)));
      }
      for (let e of this.fleets.values()) e.commit();
    }
    clear() {
      for (let e of [...this.entries.keys()]) this.remove(e);
      this.layer &&
        ((this.layer.mesh.count = 0), (this.layer.mesh.visible = !1));
      for (let e of this.fleets.values()) ((e.count = 0), e.commit());
    }
    dispose() {
      this.clear();
      for (let e of this.fleets.values())
        (e.object.removeFromParent(), e.dispose());
      if ((this.fleets.clear(), this.layer)) {
        let e = this.layer.mesh.geometry;
        for (let t of Object.keys(e.attributes))
          [`aA`, `aB`, `aC`].includes(t) || e.deleteAttribute(t);
        (e.setIndex(null),
          this.layer.mesh.removeFromParent(),
          this.layer.mesh.dispose(),
          e.dispose(),
          (this.layer = void 0));
      }
    }
  },
  So = {
    brake: 1,
    left: 2,
    right: 4,
    hazard: 8,
    siren: 16,
    headlights: 32,
    reverse: 64,
    wrecked: 128,
    occupied: 256,
  },
  Co = new Pe(),
  wo = new v(),
  To = new V(),
  Eo = new V(1, 1, 1);
function Do(e, t, n, r, i, a) {
  let o = a?.surge ?? 0;
  return (
    To.set(t - Math.sin(i) * o, n + (a?.heave ?? 0), r + Math.cos(i) * o),
    wo.setFromEuler(Co.set(a?.pitch ?? 0, -i, a?.roll ?? 0, `YXZ`)),
    e.compose(To, wo, Eo)
  );
}
