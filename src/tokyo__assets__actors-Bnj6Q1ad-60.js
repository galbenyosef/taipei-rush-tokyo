// tokyo__assets__actors-Bnj6Q1ad 60 — math
// Lines 30872-31222 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var xg = {
    hey: [`欸！`, `Hey!`, 2],
    watch: [`看路啦！`, `Watch it!`, 2],
    crowded: [`很擠欸！`, `It's crowded!`, 2],
    whoa: [`哇靠！`, `Whoa!`, 2],
    omg: [`夭壽喔！`, `Oh my god!`, 1],
    help: [`救命啊！`, `Help!`, 1],
    run: [`快跑！`, `Run!`, 1],
    murder: [`殺人喔！`, `Murder!`, 1],
    police: [`報警啦！`, `Call the cops!`, 1],
    rob: [`搶劫啊！`, `Robbery!`, 1],
    carjack: [`搶車啊！`, `Carjacking!`, 1],
    aaah: [`啊啊啊！`, `Aaah!`, 1],
    ow: [`好痛！`, `Ow!`, 2],
    ouch: [`哎喲！`, `Ouch!`, 2],
    want: [`你想怎樣？`, `You want some?`, 2],
    come: [`來啊！`, `Come on!`, 2],
    remember: [`給我記住！`, `You'll pay for this!`, 2],
    call110: [`喂，110嗎？`, `Hello, police?`, 1],
    film: [`拍起來拍起來`, `Get it on video!`, 0],
    eaten: [`呷飽沒？`, `Eaten yet?`, 0],
    hot: [`好熱喔～`, `So hot~`, 0],
    really: [`真的假的？`, `For real?`, 0],
    yummy: [`好好吃！`, `So good!`, 0],
    rain: [`下雨了啦！`, `It's raining!`, 3],
    wait: [`等我一下`, `Wait for me`, 0],
    go: [`走啦走啦`, `Let's go`, 0],
    amitabha: [`阿彌陀佛`, `Amitabha`, 3],
    vendor: [`來喔來喔！`, `Come take a look!`, 0],
    bogo: [`買一送一喔！`, `Buy one get one!`, 0],
    cute: [`好可愛！`, `So cute!`, 0],
    sugar: [`半糖少冰`, `Half sugar, less ice`, 0],
    garbage: [`垃圾車來了！`, `Garbage truck!`, 3],
    late: [`要遲到了！`, `I'm gonna be late!`, 0],
    green: [`綠燈了`, `Green light`, 3],
    honk: [`叭什麼叭`, `Stop honking!`, 2],
    scooter: [`騎慢一點啦！`, `Slow down!`, 2],
    wow101: [`101好漂亮`, `101 looks great`, 0],
    shoot: [`有人開槍！`, `Gunshots!`, 1],
    fire: [`失火啦！`, `Fire!`, 1],
    bless: [`保佑保佑`, `Bless us`, 3],
    nogarbage: [`今天停收啦！`, `No garbage pickup today!`, 3],
    chant: [`勞工權益！`, `Workers' rights!`, 2],
    chant2: [`還我權益！`, `Give us our rights!`, 2],
    chant3: [`反對！反對！`, `We object!`, 2],
    chant4: [`團結！`, `Solidarity!`, 2],
    chant5: [`加薪！`, `Raise our pay!`, 2],
  },
  Sg = Object.keys(xg),
  Cg = [`chant`, `chant2`, `chant3`, `chant4`, `chant5`],
  wg = 5,
  Tg = 204,
  Eg = 100,
  Dg = 1020,
  Og = 1024,
  kg = 12,
  Ag = `
attribute vec4 iPos;
attribute vec4 iRect;
attribute vec4 iBub;
varying vec2 vUv;
varying float vA;
void main() {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float h = iPos.w * iBub.z;
  float w = h * iBub.y;
  vec3 wp = iPos.xyz + right * position.x * w + up * (position.y + 0.5) * h;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  vUv = vec2(iRect.x + (position.x + 0.5) * iRect.z, iRect.y + (position.y + 0.5) * iRect.w);
  vA = iBub.x;
}`,
  jg = `
uniform sampler2D map;
varying vec2 vUv;
varying float vA;
void main() {
  vec4 c = texture2D(map, vUv);
  float a = c.a * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(c.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  Mg = class {
    mesh;
    ids;
    table;
    th = Og;
    font;
    rects;
    aspect;
    list = [];
    aPos;
    aRect;
    aBub;
    attrs;
    enabled = !0;
    tex;
    constructor(e, t = {}) {
      this.table = t.table?.lines ?? xg;
      let n = t.table ? Object.keys(t.table.lines).length : 0;
      ((this.th =
        t.table && n > wg * Math.floor(Og / Eg)
          ? Math.min(2048, Math.ceil(n / wg) * Eg + 24)
          : Og),
        (this.ids = t.table
          ? Object.keys(t.table.lines).slice(0, wg * Math.floor(this.th / Eg))
          : Sg),
        (this.font = t.table?.font ?? ft),
        (this.rects = new Float32Array(this.ids.length * 4)),
        (this.aspect = new Float32Array(this.ids.length)));
      let r = this.buildAtlas(t.scale ?? 1);
      ((this.tex = r), t.keepCpu || et(r));
      try {
        t.upload?.(r);
      } catch {}
      let i = new te(1, 1);
      ((this.aPos = new a(new Float32Array(48), 4)),
        (this.aRect = new a(new Float32Array(48), 4)),
        (this.aBub = new a(new Float32Array(48), 4)),
        (this.attrs = [this.aPos, this.aRect, this.aBub]));
      for (let e of this.attrs) e.setUsage(b);
      (i.setAttribute(`iPos`, this.aPos),
        i.setAttribute(`iRect`, this.aRect),
        i.setAttribute(`iBub`, this.aBub));
      let o = new l({
        uniforms: { map: { value: r } },
        vertexShader: Ag,
        fragmentShader: jg,
        transparent: !0,
        depthWrite: !1,
        depthTest: !0,
        toneMapped: !1,
      });
      ((o.name = `peds-bubbles`),
        (this.mesh = new Se(i, o, kg)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.count = 0),
        (this.mesh.visible = !1),
        (this.mesh.renderOrder = 10),
        (this.mesh.name = `peds-bubbles`),
        e.add(this.mesh));
      for (let e = 0; e < kg; e++)
        this.list.push({ ped: -1, line: 0, t: 0, life: 0, x: 0, y: 0, z: 0 });
    }
    buildAtlas(e) {
      let t = document.createElement(`canvas`);
      ((t.width = Math.round(Dg * e)), (t.height = Math.round(this.th * e)));
      let n = t.getContext(`2d`);
      (n.clearRect(0, 0, t.width, t.height),
        n.scale(t.width / Dg, t.height / this.th));
      let r = this.font;
      this.ids.forEach((e, t) => {
        let [i, a, o] = this.table[e],
          s = t % wg,
          c = Math.floor(t / wg),
          l = s * Tg,
          u = c * Eg,
          d = 34,
          f = 15;
        n.font = `900 ${d}px ${r}`;
        let p = n.measureText(i).width;
        (p > 170 &&
          ((d = Math.floor((d * 170) / p)),
          (n.font = `900 ${d}px ${r}`),
          (p = n.measureText(i).width)),
          (n.font = `600 ${f}px system-ui, sans-serif`));
        let m = n.measureText(a).width;
        m > 174 &&
          ((f = Math.max(10, Math.floor((f * 174) / m))),
          (n.font = `600 ${f}px system-ui, sans-serif`),
          (m = n.measureText(a).width));
        let h = Math.min(196, Math.max(p, m) + 30),
          g = l + (Tg - h) / 2,
          _ = u + 4;
        (n.save(),
          (n.shadowColor = `rgba(0,0,0,0.35)`),
          (n.shadowBlur = 4),
          (n.shadowOffsetY = 2),
          (n.fillStyle = o === 1 ? `#fff4f0` : o === 3 ? `#f2f6fa` : `#ffffff`),
          (n.strokeStyle =
            o === 1
              ? `#d23a2e`
              : o === 2
                ? `#e0852a`
                : o === 3
                  ? `#5a7894`
                  : `#2a2a2a`),
          (n.lineWidth = 3.5),
          n.beginPath(),
          Pg(n, g, _, h, 70, 18));
        let v = l + Tg / 2;
        (n.moveTo(v - 10, _ + 70 - 1),
          n.lineTo(v, _ + 70 + 16),
          n.lineTo(v + 10, _ + 70 - 1),
          n.closePath(),
          n.fill(),
          n.restore(),
          n.beginPath(),
          Pg(n, g, _, h, 70, 18),
          (n.strokeStyle =
            o === 1
              ? `#d23a2e`
              : o === 2
                ? `#e0852a`
                : o === 3
                  ? `#5a7894`
                  : `#2a2a2a`),
          (n.lineWidth = 3),
          n.stroke(),
          (n.fillStyle = o === 1 ? `#fff4f0` : o === 3 ? `#f2f6fa` : `#ffffff`),
          n.beginPath(),
          n.moveTo(v - 10, _ + 70 - 3),
          n.lineTo(v, _ + 70 + 14),
          n.lineTo(v + 10, _ + 70 - 3),
          n.closePath(),
          n.fill(),
          n.beginPath(),
          n.moveTo(v - 10, _ + 70),
          n.lineTo(v, _ + 70 + 16),
          n.lineTo(v + 10, _ + 70),
          n.stroke(),
          (n.textAlign = `center`),
          (n.textBaseline = `alphabetic`),
          (n.fillStyle =
            o === 1
              ? `#c8261c`
              : o === 2
                ? `#b8541a`
                : o === 3
                  ? `#2e4a66`
                  : `#1c1c1c`),
          (n.font = `900 ${d}px ${r}`),
          n.fillText(i, v, a ? _ + 40 : _ + 35 + d * 0.36),
          (n.fillStyle = `#6a6a6a`),
          (n.font = `600 ${f}px system-ui, sans-serif`),
          n.fillText(a, v, _ + 60));
        let y = (l + (Tg - h) / 2 - 2) / Dg,
          b = (h + 4) / Dg,
          x = u,
          S = u + 70 + 20;
        ((this.rects[t * 4] = y),
          (this.rects[t * 4 + 1] = 1 - S / this.th),
          (this.rects[t * 4 + 2] = b),
          (this.rects[t * 4 + 3] = (S - x) / this.th),
          (this.aspect[t] = (h + 4) / 90));
      });
      let i = new Oe(t);
      return (
        (i.colorSpace = j),
        (i.anisotropy = 4),
        (i.name = `peds-bubbles`),
        (i.needsUpdate = !0),
        i
      );
    }
    live = 0;
    has(e) {
      return this.ids.includes(e);
    }
    talking(e) {
      for (let t of this.list) if (t.ped === e && t.life > 0) return !0;
      return !1;
    }
    say(e, t, n, r, i, a = 2.3) {
      if (!this.enabled) return !1;
      let o = this.ids.indexOf(t);
      if (o < 0) return !1;
      let s = null;
      for (let t of this.list)
        if (t.ped === e && t.life > 0) {
          s = t;
          break;
        }
      if (!s) {
        let e = null;
        for (let t of this.list) {
          if (t.life <= 0) {
            s = t;
            break;
          }
          (!e || t.t > e.t) && (e = t);
        }
        s ||= e;
      }
      return (
        (s.ped = e),
        (s.line = o),
        (s.t = 0),
        (s.life = a),
        (s.x = n),
        (s.y = r),
        (s.z = i),
        this.live++,
        !0
      );
    }
    follow(e, t, n, r) {
      for (let i of this.list)
        i.ped === e && i.life > 0 && ((i.x = t), (i.y = n), (i.z = r));
    }
    drop(e) {
      for (let t of this.list) t.ped === e && ((t.life = 0), (t.ped = -1));
    }
    update(e, t) {
      let n = 0,
        r = this.aPos.array,
        i = this.aRect.array,
        a = this.aBub.array,
        o = t.position.x,
        s = t.position.y,
        c = t.position.z,
        l = 0;
      for (let t of this.list) {
        if (t.life <= 0) continue;
        if (((t.t += e), t.t >= t.life)) {
          ((t.life = 0), (t.ped = -1));
          continue;
        }
        l++;
        let u = Math.hypot(t.x - o, t.y - s, t.z - c);
        if (u > 45) continue;
        let d = t.t < 0.18 ? 0.6 + 0.4 * Ng(t.t / 0.18) : 1,
          f = Math.min(1, (t.life - t.t) / 0.35),
          p = Math.max(0.46, u * 0.036);
        ((r[n * 4] = t.x),
          (r[n * 4 + 1] = t.y + 0.12 + Math.min(0.15, t.t * 0.12)),
          (r[n * 4 + 2] = t.z),
          (r[n * 4 + 3] = p),
          (i[n * 4] = this.rects[t.line * 4]),
          (i[n * 4 + 1] = this.rects[t.line * 4 + 1]),
          (i[n * 4 + 2] = this.rects[t.line * 4 + 2]),
          (i[n * 4 + 3] = this.rects[t.line * 4 + 3]),
          (a[n * 4] = f),
          (a[n * 4 + 1] = this.aspect[t.line]),
          (a[n * 4 + 2] = d),
          n++);
      }
      if (
        ((this.live = l),
        (this.mesh.count = n),
        (this.mesh.visible = n > 0),
        n > 0)
      )
        for (let e of this.attrs)
          (e.clearUpdateRanges(),
            e.addUpdateRange(0, n * 4),
            (e.needsUpdate = !0));
    }
  };
