// tokyo/assets/actors-bknSEpf2 21 — math
// Lines 6735-7083 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var qs = new N(),
  Js = new v(),
  Ys = new V(),
  Xs = new V(),
  Zs = new V(0, 1, 0),
  Qs = new V(),
  $s = new V(),
  ec = class {
    ctx;
    mat = new C({ vertexColors: !0, roughness: 0.55, metalness: 0 });
    wet = new C({ vertexColors: !0, roughness: 0.12, metalness: 0 });
    foodMesh;
    poopMesh;
    peeMesh;
    stream;
    food = [];
    poops = [];
    puddles = [];
    bar = null;
    btns = {};
    want = null;
    barkCool = 0;
    barShown = !1;
    barLang = ``;
    host = null;
    onKey = (e) => {
      if (
        e.repeat ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        We(e.target) ||
        !this.barShown ||
        this.ctx.paused
      )
        return;
      let t = dt(e),
        n = zs.find((e) => e.code === t);
      n && this.ask(n.act);
    };
    spawnIn = 1.5;
    seed = (Date.now() % 99991) + 3;
    nextId = 0;
    t = 0;
    eaten = 0;
    constructor(e) {
      ((this.ctx = e),
        (this.foodMesh = new Ce(Us(), this.mat, Ds)),
        (this.poopMesh = new Ce(Ks(), this.mat, Os)),
        (this.peeMesh = new Ce(Ws(), this.wet, Ms)));
      for (let t of [this.foodMesh, this.poopMesh, this.peeMesh])
        ((t.count = 0),
          (t.frustumCulled = !1),
          (t.castShadow = !1),
          (t.receiveShadow = !1),
          (t.name = `dog-props`),
          t.instanceMatrix.setUsage(O),
          e.scene.add(t));
      ((this.stream = new d(Gs(), this.wet)),
        (this.stream.visible = !1),
        (this.stream.frustumCulled = !1),
        (this.stream.name = `dog-props`),
        e.scene.add(this.stream),
        this.buildBar(),
        window.addEventListener(`keydown`, this.onKey));
    }
    buildBar() {
      if (typeof document > `u`) return;
      if (!Vs) {
        Vs = !0;
        let e = document.createElement(`style`);
        ((e.id = `dogbar-css`),
          (e.textContent = Bs),
          document.head.appendChild(e));
      }
      let e = document.createElement(`div`);
      e.className = `dogbar`;
      for (let t of zs) {
        let n = document.createElement(`button`);
        ((n.type = `button`),
          (n.innerHTML = `<i aria-hidden="true">${t.icon}</i><b></b><kbd>${t.key}</kbd>`),
          n.addEventListener(`pointerdown`, (e) => {
            (e.preventDefault(), e.stopPropagation(), this.ask(t.act));
          }),
          n.addEventListener(`click`, (e) => e.preventDefault()),
          e.appendChild(n),
          (this.btns[t.act] = n));
      }
      ((document.querySelector(`.tr-hud`) ?? document.body).appendChild(e),
        (this.bar = e),
        this.labelBar());
    }
    labelBar() {
      let e = String(this.ctx.state.lang ?? `zh`);
      if (this.bar && e !== this.barLang) {
        this.barLang = e;
        for (let t of zs) {
          let n = this.btns[t.act],
            r = e === `en` ? t.label.en : t.label.zh;
          ((n.querySelector(`b`).textContent = r),
            (n.title = `${r} (${t.key})`),
            n.setAttribute(
              `aria-label`,
              `${t.label.zh} ${t.label.en} (${t.key})`,
            ));
        }
      }
    }
    ask(e) {
      this.want = e;
      let t = this.btns[e];
      t &&
        (t.classList.add(`hit`),
        setTimeout(() => t.classList.remove(`hit`), 140));
    }
    act(e, t, n) {
      this.barkCool = Math.max(0, this.barkCool - e);
      let r = this.want;
      if (((this.want = null), r === `poop`)) t.poop();
      else if (r === `pee`) t.pee();
      else if (r === `bark` && t.canBark && this.barkCool <= 0) {
        let e = t.model.spec;
        ((this.barkCool = e.howl ? 1.3 : 0.45), t.bark());
        try {
          this.ctx.audio.play(`dog_bark`, {
            x: n.x,
            y: n.y + 0.6,
            z: n.z,
            volume: 1,
            rate: e.barkRate,
          });
        } catch {}
      }
      let i = t.canBark && !this.ctx.paused;
      if (
        (this.bar &&
          i !== this.barShown &&
          this.bar.classList.toggle(`show`, i),
        (this.barShown = i),
        i)
      ) {
        this.labelBar();
        let e = !t.canAct;
        (this.btns.poop?.classList.toggle(`off`, e),
          this.btns.pee?.classList.toggle(`off`, e));
      }
    }
    rnd() {
      return (
        (this.seed = (this.seed * 16807) % 2147483647),
        this.seed / 2147483647
      );
    }
    addPoop(e, t) {
      if (
        (this.poops.length >= Os && this.poops.shift(),
        this.poops.push({
          x: e.x,
          y: e.y,
          z: e.z,
          age: 0,
          s: t,
          yaw: this.rnd() * Math.PI * 2,
        }),
        !this.host?.poopWasAsked)
      )
        try {
          this.ctx.ui.notify(Ls, { duration: 2.2, kind: `info` });
        } catch {}
    }
    update(e, t, n, r, i) {
      ((this.t += e), (this.host = r), this.act(e, r, t));
      let a = r.takePee();
      if (
        (a &&
          (this.puddles.length >= Ms && this.puddles.shift(),
          this.puddles.push({
            x: a.x,
            y: a.y,
            z: a.z,
            age: 0,
            r: 0.1 * (r.model.spec.H / 0.42),
            yaw: this.rnd() * Math.PI * 2,
          })),
        r.peeStream(Qs, $s))
      ) {
        $s.y += 0.01;
        let e = Qs.distanceTo($s),
          t = 0.006 * (r.model.spec.H / 0.42);
        (this.stream.position.copy(Qs),
          this.stream.quaternion.setFromUnitVectors(
            Zs,
            $s.sub(Qs).divideScalar(Math.max(e, 1e-4)),
          ),
          this.stream.scale.set(t, e, t),
          (this.stream.visible = !0));
      } else this.stream.visible = !1;
      let o = 0;
      for (let t = this.puddles.length - 1; t >= 0; t--)
        (this.puddles[t].age += e) > Ns && this.puddles.splice(t, 1);
      for (let e of this.puddles) {
        let t = Math.min(1, e.age / 1.6),
          n = (1 - (1 - t) * (1 - t)) * Math.min(1, (Ns - e.age) / 4),
          r = Math.max(0.001, e.r * n);
        (Js.setFromAxisAngle(Zs, e.yaw),
          qs.compose(Ys.set(e.x, e.y + 0.008, e.z), Js, Xs.set(r, 1, r)),
          this.peeMesh.setMatrixAt(o++, qs));
      }
      ((this.peeMesh.count = o),
        o && (this.peeMesh.instanceMatrix.needsUpdate = !0),
        n && this.spawn(e, t));
      for (let a = this.food.length - 1; a >= 0; a--) {
        let o = this.food[a];
        o.age += e;
        let s = o.x - t.x,
          c = o.z - t.z,
          l = s * s + c * c;
        if (o.eat > 0) {
          if (((o.eat -= e), o.eat <= 0)) {
            (this.remove(a), this.reward(i));
            continue;
          }
        } else if (
          n &&
          l < Ps * Ps &&
          Math.abs(o.y - t.y) < 1 &&
          !r.holdFeet &&
          r.eat()
        )
          o.eat = 1.7;
        else if (o.age > As || l > 6400) {
          this.remove(a);
          continue;
        }
        o.k = Math.min(1, o.k + e * 4);
      }
      let s = 0;
      for (let e of this.food) {
        let t = e.eat > 0 ? Math.min(1, e.eat * 2) : e.k,
          n = t < 1 ? t * (1 + 0.25 * Math.sin(t * Math.PI)) : 1;
        (Js.setFromAxisAngle(Zs, this.t * 1.6 + e.x),
          qs.compose(
            Ys.set(e.x, e.y + 0.004, e.z),
            Js,
            Xs.setScalar(Math.max(0.001, n)),
          ),
          this.foodMesh.setMatrixAt(s++, qs));
      }
      ((this.foodMesh.count = s),
        s && (this.foodMesh.instanceMatrix.needsUpdate = !0),
        (s = 0));
      for (let t = this.poops.length - 1; t >= 0; t--)
        (this.poops[t].age += e) > js && this.poops.splice(t, 1);
      for (let e of this.poops) {
        let t = Math.min(1, e.age * 5) * Math.min(1, (js - e.age) / 2);
        (Js.setFromAxisAngle(Zs, e.yaw),
          qs.compose(
            Ys.set(e.x, e.y + 0.003, e.z),
            Js,
            Xs.setScalar(Math.max(0.001, t * e.s)),
          ),
          this.poopMesh.setMatrixAt(s++, qs));
      }
      ((this.poopMesh.count = s),
        s && (this.poopMesh.instanceMatrix.needsUpdate = !0));
    }
    spawn(e, t) {
      if (((this.spawnIn -= e), this.spawnIn > 0 || this.food.length >= Ds))
        return;
      this.spawnIn = ks * (0.7 + this.rnd() * 0.6);
      let n = this.ctx;
      for (let e = 0; e < 10; e++) {
        let e = this.rnd() * Math.PI * 2,
          r = 10 + this.rnd() * 25,
          i = t.x + Math.sin(e) * r,
          a = t.z + Math.cos(e) * r,
          o = !1;
        try {
          o = Fs.has(n.plan.surfaceAt(i, a));
        } catch {}
        if (!o) continue;
        let s = n.groundAt(i, a, t.y + 0.5, 0.6);
        if (!Number.isFinite(s) || Math.abs(s - t.y) > 2.5) continue;
        let c = `dogfood-${this.nextId++}`;
        this.food.push({ x: i, y: s, z: a, age: 0, eat: 0, k: 0, id: c });
        try {
          n.ui.addBlip(c, {
            x: i,
            z: a,
            icon: `collectible`,
            color: `#f2a33a`,
            label: Rs,
          });
        } catch {}
        return;
      }
      this.spawnIn = 2;
    }
    remove(e) {
      let t = this.food[e];
      this.food.splice(e, 1);
      try {
        this.ctx.ui.removeBlip(t.id);
      } catch {}
    }
    reward(e) {
      let t = this.ctx;
      try {
        t.state.addMoney(5, `dog-food`);
      } catch {}
      try {
        e.heal(15);
      } catch {}
      try {
        t.ui.notify(Is[this.eaten++ % Is.length], {
          duration: 1.8,
          kind: `good`,
        });
      } catch {}
    }
    dispose() {
      for (let e of this.food)
        try {
          this.ctx.ui.removeBlip(e.id);
        } catch {}
      ((this.food.length = 0),
        (this.poops.length = 0),
        (this.puddles.length = 0));
      for (let e of [this.foodMesh, this.poopMesh, this.peeMesh])
        (e.removeFromParent(), e.geometry.dispose(), e.dispose());
      (this.stream.removeFromParent(),
        this.stream.geometry.dispose(),
        this.mat.dispose(),
        this.wet.dispose(),
        window.removeEventListener(`keydown`, this.onKey),
        this.bar?.remove(),
        (this.bar = null),
        (this.host = null));
    }
  },
  tc = e({ CAR_LEAN: () => sc, DogAvatar: () => dc, DogProps: () => ec }),
  nc = new V(),
  rc = new V(),
  ic = new N(),
  ac = new ye(),
  oc = new WeakMap(),
  sc = 0.5,
  cc = -0.09,
  lc = 1e-4;
