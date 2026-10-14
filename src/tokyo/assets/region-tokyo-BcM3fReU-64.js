// tokyo/assets/region-tokyo-BcM3fReU 64 — math
// Lines 33062-34091 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var My = class extends Jv {
    poi;
    kind = `konbini`;
    page = `konbini`;
    minW = 4.9;
    minD = 6.2;
    maxD = 12.5;
    front = `auto`;
    name;
    brandId;
    colors;
    L = null;
    constructor(e, t) {
      let n = Math.sin(t.facing),
        r = -Math.cos(t.facing);
      (super(
        e,
        t.id,
        {
          x: t.x + n * 0.6,
          z: t.z + r * 0.6,
          facing: t.facing,
          width: t.width,
        },
        `24H`,
      ),
        (this.poi = t));
      let i = Wa(t.brand) ?? Oy[0];
      ((this.brandId = i.id),
        (this.colors = i.colors),
        (this.name = { zh: i.zh, en: i.en }),
        (this.fillHex = 15922943),
        (this.fillK = 0.95));
    }
    layoutDoor() {
      let e = this.seed & 1 ? 1 : -1,
        { W: t } = this;
      this.doorHW = t < 5.6 ? 0.78 : 0.85;
      let n = e * (t / 2 - 1.62 - this.doorHW - 0.1);
      ((this.dx = Math.max(
        -t / 2 + this.doorHW + 0.15,
        Math.min(t / 2 - this.doorHW - 0.15, n),
      )),
        (this.L = null));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = this.seed & 1 ? 1 : -1,
        r = n * (e / 2 - 1.6),
        i = 1.15,
        a = Math.max(3.15, Math.min(t - 3.4, 4.25)),
        o = t - 0.8,
        s = -n * (e / 2 - 0.72),
        c = t - 1.05,
        l = s + n * 1,
        u = (r - n * 1.1 - l) * n,
        d = Math.max(0, Math.floor((u + 0.95) / 1.85)),
        f = [];
      if (d > 0) {
        let e = l + n * ((u - (d * 0.9 + (d - 1) * 0.95)) / 2 + 0.45);
        for (let t = 0; t < d; t++) f.push(e + n * t * 1.85);
      }
      let p = this.dx - n * (this.doorHW + 0.25),
        m = [
          Math.min(p, -n * (e / 2 - 0.05)),
          Math.max(p, -n * (e / 2 - 0.05)),
        ],
        h = this.sh.ctx.time.date?.m ?? 10;
      return (
        (this.L = {
          s: n,
          xc: r,
          cz0: i,
          cz1: a,
          rz: i + (a - i) * 0.42,
          xch: s,
          chz0: 2.55,
          chz1: c,
          zco: o,
          gx: f,
          gz0: 2.35,
          gz1: o - 1.05,
          mag: m,
          atmZ: 0.95,
          copyZ: 1.95,
          oden: h >= 9 || h <= 4,
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout(),
        { W: t } = this,
        n = this.rng(7),
        r = parseInt(
          (this.colors[0] === `#ffffff`
            ? this.colors[2]
            : this.colors[0]
          ).slice(1),
          16,
        ),
        i = [
          {
            x: e.s * (t / 2 - 1.12),
            z: e.rz,
            ry: e.s > 0 ? Math.PI / 2 : -Math.PI / 2,
            pose: `counter`,
            desc: py(this.seed, r, n() < 0.55),
            staff: !0,
          },
        ];
      return (
        Math.abs(e.mag[1] - e.mag[0]) > 1 &&
          n() < 0.8 &&
          i.push({
            x: (e.mag[0] + e.mag[1]) / 2,
            z: 0.85,
            ry: 0,
            pose: `browse`,
            desc: fy(
              n() < 0.6 ? `jp-salaryman` : `jp-daigakusei`,
              this.seed + 11,
            ),
          }),
        n() < 0.75 &&
          i.push({
            x: e.gx.length ? (e.gx[0] + e.xch) / 2 : 0,
            z: e.zco - 0.75,
            ry: Math.PI,
            pose: `browse`,
            desc: fy(n() < 0.5 ? `jp-ol` : `jp-ol-casual`, this.seed + 23),
          }),
        n() < 0.45 &&
          i.push({
            x: e.xc - e.s * 0.55,
            z: e.rz + 0.9,
            ry: e.s > 0 ? -Math.PI / 2 : Math.PI / 2,
            pose: `hold`,
            desc: fy(
              n() < 0.5 ? `jp-oji` : `jp-salaryman-shirt`,
              this.seed + 37,
            ),
          }),
        i
      );
    }
    *content() {
      let { W: e, D: t, H: n, g: r, gl: i } = this,
        a = this.layout(),
        o = a.s,
        s = (e) => this.R(e);
      (hr(r, {
        x0: -e / 2,
        z0: 0,
        x1: e / 2,
        z1: t,
        h: n,
        floor: { hex: 16777215, reg: s(`k-floor`), tile: 0.6 },
        wall: { hex: 16777215, reg: s(`k-wall`), tile: 1.2 },
        ceiling: { hex: 16777215, reg: s(`k-ceil`), tile: 1.2 },
        baseboard: { hex: 9080466, h: 0.1 },
        openings: [
          { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        ],
        ao: 0.28,
      }),
        yield `shell`,
        r.tex(s(`k-stripe-${this.brandId}`), 16777215, 0.15));
      for (let [i, a, o, s] of [
        [-e / 2 + 0.01, t - 0.01, e / 2 - 0.01, t - 0.01],
      ])
        r.rectZ(i, n - 0.42, o, n - 0.22, a - 0.002, -1);
      (r.rectX(
        0.3,
        n - 0.42,
        t - 0.3,
        n - 0.22,
        -o * (e / 2) + o * 0.012,
        o > 0 ? 1 : -1,
      ),
        yield `shell`);
      let c = o > 0 ? -e / 2 + 0.05 : -e / 2 + 1.05,
        l = o > 0 ? e / 2 - 1.05 : e / 2 - 0.05,
        u = Math.max(3, Math.round((l - c) / 0.78)),
        d = [];
      for (let e = 0; e < u; e++) {
        let t = o > 0 ? e / u : 1 - e / u;
        d.push(
          s(t > 0.68 ? `k-beer` : e % 2 ? `k-drinks-color` : `k-drinks-tea`),
        );
      }
      (o < 0 && d.reverse(),
        sr(r, i, c, l, t, 2.05, d, {
          header: s(`k-cooler-head`),
          frame: 3817028,
          depth: 0.78,
        }),
        this.boxes.push({ x0: c, z0: t - 0.82, x1: l, z1: t, y0: 0, y1: 2.2 }));
      let f = o > 0 ? e / 2 - 0.55 : -e / 2 + 0.55;
      (r.tex(s(`k-staffdoor`), 16777215, 0.02),
        r.rectZ(f - 0.42, 0, f + 0.42, 2.05, t - 0.015, -1),
        yield `coolers`);
      let p = -o * (e / 2),
        m = a.xch,
        h = Math.min(p, m),
        g = Math.max(p, m);
      (this.openChiller(h, g, a.chz0, a.chz1, o),
        this.boxes.push({ x0: h, z0: a.chz0, x1: g, z1: a.chz1, y0: 0, y1: 2 }),
        yield `chiller`);
      let _ = [s(`k-snacks`), s(`k-sweets-dry`), s(`k-snacks`)],
        v = [s(`k-cupmen`), s(`k-daily`), s(`k-cupmen`)],
        y = [`okashi`, `cupmen`, `nichiyo`, `sweets`];
      (a.gx.forEach((e, t) => {
        a.gz1 - a.gz0 < 1.2 ||
          (ir(r, e, a.gz0, a.gz1, 1.35, t % 2 ? v : _, t % 2 ? _ : v, {
            body: 15527662,
          }),
          r.tex(s(`k-n-shinhatsubai`), 16777215, 0.2),
          r.rectZ(e - 0.15, 1.05, e + 0.15, 1.2, a.gz0 - 0.05, -1),
          this.boxes.push({
            x0: e - 0.47,
            z0: a.gz0 - 0.05,
            x1: e + 0.47,
            z1: a.gz1 + 0.05,
            y0: 0,
            y1: 1.4,
          }),
          rr(
            r,
            s(`k-aisle-${y[t % y.length]}`),
            e,
            n - 0.55,
            a.gz0 + 0.4,
            0.9,
            0.24,
            0,
            0.35,
            0.3,
          ));
      }),
        rr(
          r,
          s(`k-aisle-onigiri`),
          a.xch + o * 0.5,
          n - 0.55,
          a.chz0 + 0.3,
          1,
          0.26,
          0,
          0.35,
          0.3,
        ),
        rr(
          r,
          s(`k-aisle-drink`),
          0,
          n - 0.55,
          a.zco - 0.55,
          1.1,
          0.26,
          0,
          0.35,
          0.3,
        ),
        yield `gondolas`,
        this.counter(a),
        yield `counter`,
        this.frontCorner(a));
      let b = a.xc - o * 0.85,
        x = a.xc - o * 0.08,
        S = a.cz1 + 0.35,
        C = S + 1.1;
      if (
        C < a.gz1 &&
        (a.gx.length === 0 ||
          Math.abs(b - (a.gx[a.gx.length - 1] + o * 0.47)) > 0.95)
      ) {
        let e = Math.min(b, x),
          t = Math.max(b, x);
        (r.col(16053490),
          r.box(e, 0, S, t, 0.82, C, 63),
          r.col(12114152, 0.25),
          r.rectY(e + 0.05, S + 0.05, t - 0.05, C - 0.05, 0.825, 1),
          r.tex(s(`k-aisle-ice`), 16777215, 0.3),
          r.rectX(
            S + 0.1,
            0.35,
            C - 0.1,
            0.62,
            o > 0 ? e - 0.002 : t + 0.002,
            o > 0 ? -1 : 1,
          ),
          this.boxes.push({ x0: e, z0: S, x1: t, z1: C, y0: 0, y1: 0.85 }));
      }
      let w = Math.max(2, Math.round(e / 1.9));
      (nr(
        r,
        -e / 2 + 0.4,
        0.6,
        e / 2 - 0.4,
        t - 0.6,
        n,
        w,
        Math.max(2, Math.round((t - 1.2) / 2.4)),
        0.16,
        1.9,
        void 0,
        3.2,
        16777215,
      ),
        yield `ceiling`);
      let T = [];
      for (let r = 0; r < w; r++)
        for (let i = 0; i < 3; i++)
          T.push({
            x: -e / 2 + 0.4 + ((r + 0.5) * (e - 0.8)) / w,
            y: n - 0.1,
            z: 0.6 + ((i + 0.5) * (t - 1.2)) / 3,
            r: 3.6,
            c: [0.32, 0.33, 0.35],
          });
      (T.push({
        x: (c + l) / 2,
        y: 1.2,
        z: t - 1,
        r: 2.5,
        c: [0.12, 0.14, 0.16],
      }),
        (this.bake = {
          amb: [0.66, 0.67, 0.7],
          lights: T,
          dir: { x: 0, y: 1, z: 0, k: 0.12 },
          floorAO: 0.45,
        }));
    }
    openChiller(e, t, n, r, i) {
      let a = this.g,
        o = (e) => this.R(e),
        s = i > 0 ? t : e,
        c = i > 0 ? 1 : -1;
      (a.col(2895926),
        a.box(e, 0, n, t, 0.35, r, 63),
        a.box(e, 1.75, n, t, 2, r, 63),
        a.col(3817028),
        a.box(e, 0, n - 0.05, t, 2, n, 63),
        a.box(e, 0, r, t, 2, r + 0.05, 63));
      let l = [
          [0.38, 0.72, `k-bento`],
          [0.74, 1.06, `k-sandwich`],
          [1.08, 1.4, `k-onigiri`],
          [1.42, 1.72, `k-sweets`],
        ],
        u = i > 0 ? e + 0.06 : t - 0.06;
      for (let [e, t, i] of l)
        (a.tex(o(i), 16777215, 0.22, 1.04),
          a.rectX(n, e, r, t, u + c * 0.18, c),
          a.col(14542056, 0.2),
          a.box(
            Math.min(u, s - c * 0.02),
            e - 0.02,
            n,
            Math.max(u, s - c * 0.02),
            e,
            r,
            4,
          ),
          a.col(16774856, 0.15),
          a.box(s - c * 0.03, e - 0.05, n, s, e + 0.01, r, c > 0 ? 1 : 2));
      (a.col(16777215, 0.9, 1.6),
        a.rectY(Math.min(u, s), n, Math.max(u, s), r, 1.74, -1),
        a.tex(o(`k-aisle-onigiri`), 16777215, 0.6, 1.1),
        a.rectX(
          n + 0.1,
          1.78,
          Math.min(r - 0.1, n + 1.2),
          1.96,
          s + c * 0.003,
          c,
        ),
        a.tex(o(`k-aisle-bento`), 16777215, 0.6, 1.1),
        r - n > 2.6 &&
          a.rectX(
            n + 1.4,
            1.78,
            Math.min(r - 0.1, n + 2.5),
            1.96,
            s + c * 0.003,
            c,
          ));
    }
    counter(e) {
      let t = this.g,
        n = (e) => this.R(e),
        { W: r } = this,
        i = e.s,
        a = e.xc,
        o = e.xc + i * 0.62,
        s = Math.min(a, o),
        c = Math.max(a, o),
        l = 0.95;
      (t.col(15921904),
        t.box(
          s,
          0.06,
          e.cz0,
          c,
          0.9099999999999999,
          e.cz1,
          48 | (i > 0 ? 1 : 2),
        ),
        t.tex(n(`k-counter-front`), 16777215, 0.05),
        t.rectX(
          e.cz0,
          0.06,
          e.cz1,
          0.9099999999999999,
          i > 0 ? s : c,
          i > 0 ? -1 : 1,
        ),
        t.col(2895667),
        t.box(s + 0.03, 0, e.cz0 + 0.03, c - 0.03, 0.06, e.cz1 - 0.03, 55),
        t.col(14210768),
        t.box(
          s - 0.04,
          0.9099999999999999,
          e.cz0 - 0.03,
          c + 0.02,
          l,
          e.cz1 + 0.03,
          63,
        ),
        this.boxes.push({
          x0: s - 0.04,
          z0: e.cz0 - 0.03,
          x1: c + 0.02,
          z1: e.cz1 + 0.03,
          y0: 0,
          y1: 1.1,
        }));
      let u = (s + c) / 2;
      (t
        .push()
        .translate(u, l, e.rz)
        .rotateY(i > 0 ? -Math.PI / 2 : Math.PI / 2),
        pr(t, n(`k-pos`)),
        t.pop(),
        t.col(6975090),
        t.box(u - 0.08, l, e.rz + 0.32, u + 0.08, 0.98, e.rz + 0.52, 63));
      let d = (e, r, a, o = 0.55) => {
        (t.col(10133670),
          t.box(u - 0.24, l, e - o / 2, u + 0.24, 1.01, e + o / 2, 63),
          t.tex(n(r), 16777215, 0.45, 1),
          t.rectX(
            e - o / 2 + 0.02,
            1.01,
            e + o / 2 - 0.02,
            l + a,
            i > 0 ? u - 0.24 : u + 0.24,
            i > 0 ? -1 : 1,
          ),
          this.gl.col(15267064, 0.18),
          this.gl.box(
            u - 0.24,
            1.01,
            e - o / 2,
            u + 0.24,
            l + a,
            e + o / 2,
            52,
          ),
          t.col(13159632, 0.3),
          t.box(
            u - 0.25,
            l + a,
            e - o / 2,
            u + 0.25,
            l + a + 0.03,
            e + o / 2,
            63,
          ));
      };
      if (
        (d(e.rz - 0.65, `k-hotsnack`, 0.42),
        d(e.rz - 1.25, `k-chukaman`, 0.48, 0.5),
        e.oden && e.cz0 + 0.3 < e.rz - 1.55)
      ) {
        let r = e.cz0 + 0.45;
        (t.col(12106944),
          t.box(
            u - 0.22,
            l,
            r - 0.3,
            u + 0.22,
            1.0899999999999999,
            r + 0.3,
            63,
          ),
          t.tex(n(`k-oden`), 16777215, 0.35),
          t.rectY(u - 0.2, r - 0.28, u + 0.2, r + 0.28, 1.091, 1),
          t.tex(n(`k-n-oden`), 16777215, 0.3),
          t.rectX(
            r - 0.2,
            1.15,
            r + 0.2,
            1.3699999999999999,
            i > 0 ? u - 0.25 : u + 0.25,
            i > 0 ? -1 : 1,
          ));
      }
      let f = e.cz1 - 0.35;
      (t.tex(n(`k-coffee`), 16777215, 0.45),
        t.boxFront(
          u - 0.22,
          l,
          f - 0.2,
          u + 0.22,
          1.63,
          f + 0.2,
          n(`k-coffee`),
          1973794,
        ),
        t.tex(n(`k-coffee`), 16777215, 0.45),
        t.rectX(
          f - 0.2,
          l,
          f + 0.2,
          1.63,
          i > 0 ? u - 0.225 : u + 0.225,
          i > 0 ? -1 : 1,
        ));
      let p = (r / 2) * i - i * 0.02;
      (t.col(2763824),
        t.box(
          Math.min(p, p - i * 0.32),
          0.95,
          e.cz0 + 0.1,
          Math.max(p, p - i * 0.32),
          2.15,
          e.cz1 - 0.1,
          63,
        ),
        t.tex(n(`k-tabako`), 16777215, 0.3),
        t.rectX(
          e.cz0 + 0.15,
          1,
          e.cz1 - 0.15,
          2.1,
          p - i * 0.325,
          i > 0 ? -1 : 1,
        ),
        t.tex(n(`k-n-tabako`), 16777215, 0.3),
        t.rectX(
          e.cz0 + 0.3,
          2.18,
          Math.min(e.cz1 - 0.3, e.cz0 + 1.5),
          2.52,
          p - i * 0.01,
          i > 0 ? -1 : 1,
        ),
        t.tex(n(`k-n-toilet`), 16777215, 0.2),
        t.rectX(
          e.cz1 - 1.2,
          2.18,
          e.cz1 - 0.3,
          2.45,
          p - i * 0.01,
          i > 0 ? -1 : 1,
        ),
        t.col(15263974),
        t.box(
          Math.min(p, p - i * 0.5),
          0,
          e.cz0 + 0.1,
          Math.max(p, p - i * 0.5),
          0.9,
          e.cz1 - 0.1,
          63,
        ),
        t.col(1842208));
      for (let n = 0; n < 2; n++)
        t.box(
          Math.min(p - i * 0.05, p - i * 0.45),
          0.9,
          e.cz0 + 0.4 + n * 0.55,
          Math.max(p - i * 0.05, p - i * 0.45),
          1.2,
          e.cz0 + 0.85 + n * 0.55,
          63,
        );
      (this.boxes.push({
        x0: Math.min(p, p - i * 0.5),
        z0: e.cz0 + 0.1,
        x1: Math.max(p, p - i * 0.5),
        z1: e.cz1 - 0.1,
        y0: 0,
        y1: 2.2,
      }),
        rr(
          t,
          n(`k-aisle-reji`),
          u - i * 0.3,
          this.H - 0.5,
          e.cz0 + 0.2,
          0.8,
          0.22,
          0,
          0.35,
          0.25,
        ));
    }
    frontCorner(e) {
      let t = this.g,
        n = (e) => this.R(e),
        { W: r } = this,
        i = e.s,
        [a, o] = e.mag;
      if (o - a > 0.8) {
        (t.col(14211804),
          t.box(a, 0, 0.06, o, 0.5, 0.42, 63),
          t.tex(n(`k-mags`), 16777215, 0.08));
        for (let e = 0; e < 3; e++) {
          let n = 0.5 + e * 0.15,
            r = 0.42 - e * 0.12;
          t.quad(o, n, r, a, n, r, a, n + 0.2, r - 0.1, o, n + 0.2, r - 0.1);
        }
        (t.col(12106944),
          t.box(a, 0.92, 0.06, o, 0.95, 0.2, 63),
          t.tex(n(`k-aisle-zasshi`), 16777215, 0.3),
          t.rectZ((a + o) / 2 - 0.35, 1.05, (a + o) / 2 + 0.35, 1.23, 0.06, 1),
          this.boxes.push({ x0: a, z0: 0.04, x1: o, z1: 0.45, y0: 0, y1: 1 }));
      }
      {
        let a = this.dx + i * (this.doorHW + 0.35);
        Math.abs(a) < r / 2 - 0.3 &&
          Math.abs(a - e.xc) > 0.5 &&
          ([
            `common.facility.moeru`,
            `common.facility.kan-bin`,
            `common.facility.petbottle`,
          ].forEach((e, r) => {
            let i = a - 0.45 + r * 0.3;
            (t.col(14212318),
              t.box(i, 0, 0.12, i + 0.28, 0.95, 0.5, 63),
              t.tex(n(`k-bin-${r}`), 16777215, 0.15),
              t.rectZ(i + 0.01, 0.55, i + 0.27, 0.92, 0.501, 1));
          }),
          this.boxes.push({
            x0: a - 0.46,
            z0: 0.1,
            x1: a + 0.46,
            z1: 0.52,
            y0: 0,
            y1: 0.95,
          }));
        let o = -i * (r / 2 - 0.35),
          s = (e.atmZ + e.copyZ) / 2 + 0.95;
        if (e.chz0 - s > 0.35) {
          (t.col(3817028),
            t.box(o - 0.15, 0, s - 0.15, o + 0.15, 0.5, s + 0.15, 59),
            this.gl.col(15266548, 0.32));
          for (let e = 0; e < 9; e++) {
            let t = (e / 9) * Math.PI * 2;
            this.gl.cyl(
              o + Math.cos(t) * 0.08,
              s + Math.sin(t) * 0.08,
              0.035,
              0.012,
              0.15,
              0.95,
              6,
              !1,
            );
          }
          (t.col(16053488),
            t.box(o - 0.004, 0.95, s - 0.12, o + 0.004, 1.12, s + 0.12, 63));
        }
      }
      let s = -i * (r / 2),
        c = (e, r, a, o, c) => {
          let l = s,
            u = s + i * c;
          (t.col(14475234),
            t.box(
              Math.min(l, u),
              0,
              e - a / 2,
              Math.max(l, u),
              o,
              e + a / 2,
              63,
            ),
            t.tex(n(r), 16777215, 0.25),
            t.rectX(
              e - a / 2 + 0.02,
              0.05,
              e + a / 2 - 0.02,
              o - 0.02,
              u + i * 0.002,
              i > 0 ? 1 : -1,
            ),
            this.boxes.push({
              x0: Math.min(l, u),
              z0: e - a / 2,
              x1: Math.max(l, u),
              z1: e + a / 2,
              y0: 0,
              y1: o,
            }));
        };
      e.chz0 > 2.3 &&
        (c(e.atmZ, `k-atm`, 0.62, 1.55, 0.62),
        c(e.copyZ, `k-copy`, 0.95, 1.15, 0.68));
    }
    transom(e, t, n) {
      n - t < 0.12 ||
        (e.tex(this.R(`k-stripe-${this.brandId}`), 16777215, 0.55, 1.05),
        e.rectZ(-this.W / 2, t, this.W / 2, Math.min(n, t + 0.36), -0.062, -1));
    }
    leafSticker(e, t, n) {
      e.tex(this.R(`k-jido`), 16777215, 0.9);
      let r = (t + n) / 2;
      (e.rectZ(r - 0.22, 1.02, r + 0.22, 1.17, -0.071, -1),
        e.tex(this.R(`k-logo-${this.brandId}`), 16777215, 0.9),
        e.rectZ(r - 0.24, 1.32, r + 0.24, 1.48, -0.071, -1));
    }
    frameHex() {
      return 12896717;
    }
    greeting() {
      let e = ac(`interior.konbini.voice.irasshai`);
      return { ja: B(`interior.konbini.voice.irasshai`), zh: e.zh, en: e.en };
    }
    spotDefs() {
      let e = this.layout(),
        t = e.s,
        n = this.sh.ctx,
        i = [],
        a = {
          zh: `店員嚇壞了，暫停結帳……`,
          en: `The clerk is too scared to serve you…`,
        };
      if (
        (i.push({
          x: e.xc - t * 0.5,
          z: e.rz,
          r: 0.85,
          label: () =>
            this.panic > 0
              ? a
              : { zh: `按 E 在櫃檯結帳`, en: `Press E to pay at the register` },
          act: () => (this.panic > 0 ? void 0 : this.openMenu()),
        }),
        i.push({
          x: 0,
          z: e.zco - 0.55,
          r: 0.8,
          label: () => ({
            zh: r.on
              ? r.t(
                  `按 E 拿一瓶綠茶 · ${n.money.format(160)}`,
                  `E で緑茶を取る · ${n.money.format(160)}`,
                )
              : `按 E 拿一瓶綠茶 · ${n.money.format(160)}`,
            en: `Press E: bottled green tea · ${n.money.format(160)}`,
          }),
          act: () => {
            if (
              !(this.panic > 0) &&
              this.sell(
                { zh: `瓶裝綠茶`, en: `Bottled green tea` },
                160,
                15,
                `ocha`,
                `jp-ocha`,
              )
            )
              try {
                n.audio.play(`fridge_door`, {
                  x: this.x,
                  y: this.fr.py + 1.2,
                  z: this.z,
                  volume: 0.7,
                });
              } catch {}
          },
        }),
        e.chz0 > 2.3)
      ) {
        let a = -t * (this.W / 2 - 0.95);
        (i.push({
          x: a,
          z: e.atmZ,
          r: 0.7,
          label: () => ({ zh: `按 E 使用 ATM`, en: `Press E to use the ATM` }),
          act: () => {
            try {
              n.audio.play(`ui_click`, { ui: !0 });
            } catch {}
            let e = n.env?.hour ?? 12,
              t = e >= 8 && e < 21 ? 110 : 220;
            n.events.emit(`notify`, {
              text: {
                zh: r.on
                  ? r.t(
                      `ATM：餘額 ${n.money.format(n.money.balance())}。時間外手續費 ${n.money.format(t)}…還是算了。`,
                      `ATM：残高 ${n.money.format(n.money.balance())}。時間外手数料 ${n.money.format(t)}…やめておこう。`,
                    )
                  : `ATM：餘額 ${n.money.format(n.money.balance())}。時間外手續費 ${n.money.format(t)}…還是算了。`,
                en: `ATM: balance ${n.money.format(n.money.balance())}. ${n.money.format(t)} fee at this hour… maybe not.`,
              },
              duration: 4,
            });
          },
        }),
          i.push({
            x: -t * (this.W / 2 - 1),
            z: e.copyZ,
            r: 0.7,
            label: () => ({
              zh: `按 E 使用多功能影印機`,
              en: `Press E to use the multi-copy machine`,
            }),
            act: () => {
              try {
                n.audio.play(`ui_confirm`, { ui: !0 });
              } catch {}
              let e = [
                {
                  zh: `多功能影印機：演唱會門票…已售完。`,
                  en: `Multi-copy machine: concert tickets… sold out.`,
                },
                {
                  zh: `多功能影印機：印了一份住民票。`,
                  en: `Multi-copy machine: printed a residence certificate.`,
                },
                {
                  zh: `多功能影印機：黑白影印一張 ¥10。`,
                  en: `Multi-copy machine: one black-and-white copy, ¥10.`,
                },
              ];
              n.events.emit(`notify`, {
                text: e[Math.floor(Math.random() * e.length)],
                duration: 3,
              });
            },
          }));
      }
      return i;
    }
    openMenu() {
      let e = this.sh.ctx,
        t = ny().items.convenience ?? [],
        n = { 0: `飯`, 1: `茶`, 2: `咖`, 3: `包`, 4: `煮`, 5: `雞` },
        i = this.layout(),
        a = [];
      t.forEach((t, o) => {
        if (o === 4 && !i.oden) return;
        let s = t.heal ?? 0,
          c =
            o === 2
              ? () => {
                  (e.player.buff?.(`caffeine`, 90) ?? !1) &&
                    e.events.emit(`notify`, {
                      text: {
                        zh: `咖啡因上身！衝刺更快 90 秒`,
                        en: `Caffeine rush! Faster sprint for 90 s`,
                      },
                      duration: 2.5,
                      kind: `good`,
                    });
                }
              : void 0;
        a.push({
          name: t.name,
          price: t.price,
          glyph: n[o] ?? `品`,
          desc: {
            zh: s ? (r.on ? r.t(`+${s} 生命`, `HP +${s}`) : `+${s} 生命`) : ``,
            en: s ? `+${s} HP` : ``,
          },
          can: () =>
            e.money.canAfford(t.price)
              ? !0
              : { zh: `錢不夠…`, en: `Not enough cash…` },
          buy: () => void this.sell(t.name, t.price, s, t.name.en, t.bag, c),
        });
      });
      let o = ac(`interior.konbini.voice.arigato`),
        s = ac(`interior.konbini.voice.atatame`);
      this.sh.menu.show({
        title: {
          zh: r.on
            ? r.t(`${this.name.zh} 櫃檯`, `${r.jz(this.name.zh)} レジ`)
            : `${this.name.zh} 櫃檯`,
          en: `${this.name.en} register`,
        },
        subtitle: {
          zh: `飯糰・熱食・咖啡 · 24 小時營業`,
          en: `Onigiri, hot snacks, coffee · open 24 h`,
        },
        speaker: {
          name: { zh: `店員`, en: `Clerk` },
          line: {
            zh: r.on ? r.t(`「${s.zh}」`, `「${r.jz(s.zh)}」`) : `「${s.zh}」`,
            en: `"${s.en}"`,
          },
        },
        accent: this.colors[0] === `#ffffff` ? this.colors[2] : this.colors[0],
        items: a,
        owner: this,
        onClose: () => {
          try {
            e.audio.say?.(
              { ja: B(`interior.konbini.voice.arigato`), zh: o.zh, en: o.en },
              { lang: `ja`, priority: 3, volume: 0.7 },
            );
          } catch {}
          e.events.emit(`subtitle`, {
            text: {
              zh: r.on
                ? r.t(`「${o.zh}」`, `「${r.jz(o.zh)}」`)
                : `「${o.zh}」`,
              en: `"${o.en}"`,
            },
            duration: 1.6,
            speaker: e.t({ zh: `店員`, en: `Clerk` }),
          });
        },
      });
    }
    sell(e, t, n, i, a, o) {
      let s = this.sh.ctx;
      if (!this.pay(t, i)) return !1;
      let c = s.money.format(t),
        l =
          Xr(s, `jp-receipt`, 1, { quiet: !0 }) > 0
            ? { zh: ` · 收據放進背包`, en: ` · receipt in your bag` }
            : { zh: ``, en: `` };
      if (
        a &&
        s.player.health >= s.player.maxHealth &&
        Xr(s, a, 1, { quiet: !0 }) > 0
      )
        return (
          s.events.emit(`notify`, {
            text: {
              zh: r.on
                ? r.t(
                    `${e.zh} −${c} · 外帶，放進背包${l.zh}`,
                    `${r.jz(e.zh)} −${c} · 持ち帰り、バッグに入れた${r.jz(l.zh)}`,
                  )
                : `${e.zh} −${c} · 外帶，放進背包${l.zh}`,
              en: `${e.en} −${c} · to go, in your bag${l.en}`,
            },
            duration: 2.8,
            kind: `good`,
          }),
          !0
        );
      if (n > 0)
        try {
          s.player.heal(n);
        } catch {}
      o?.();
      let u =
        n > 0
          ? {
              zh: r.on ? r.t(` · +${n} 生命`, ` · HP +${n}`) : ` · +${n} 生命`,
              en: ` · +${n} HP`,
            }
          : { zh: ``, en: `` };
      return (
        s.events.emit(`notify`, {
          text: {
            zh: `${e.zh} −${c}${u.zh}${l.zh}`,
            en: `${e.en} −${c}${u.en}${l.en}`,
          },
          duration: 2.6,
          kind: `good`,
        }),
        !0
      );
    }
    views() {
      let e = super.views(),
        t = this.layout(),
        n = t.s;
      return (
        (e.detail = [
          t.xc - n * 1.35,
          1.5,
          t.rz - 1.9,
          t.xc + n * 0.3,
          1.15,
          t.rz - 0.3,
        ]),
        (e.chiller = [
          t.xch + n * 1.4,
          1.55,
          (t.chz0 + t.chz1) / 2 - 1.2,
          t.xch,
          1.2,
          (t.chz0 + t.chz1) / 2 + 0.3,
        ]),
        e
      );
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter`
        ? [t.xc - t.s * 0.5, t.rz]
        : e === `chiller`
          ? [t.xch + t.s * 0.6, (t.chz0 + t.chz1) / 2]
          : e === `coolers`
            ? [0, t.zco - 0.7]
            : e === `magazines`
              ? [(t.mag[0] + t.mag[1]) / 2, 1]
              : null;
    }
  },
  Ny = [
    [`trade.ramen.item.shoyu`, 1e3, 70, `醤`],
    [`trade.ramen.item.ajitama`, 1100, 80, `玉`],
    [`interior.ramen.item.chashumen`, 1300, 95, `叉`],
    [`trade.ramen.item.tsukemen`, 1100, 75, `沾`],
    [`trade.ramen.item.gyoza`, 400, 30, `餃`],
    [`trade.ramen.item.rice`, 150, 15, `飯`],
    [`interior.ramen.item.beer`, 600, 5, `啤`],
  ];
