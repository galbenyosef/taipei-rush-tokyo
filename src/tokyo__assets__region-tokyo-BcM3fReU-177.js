// tokyo__assets__region-tokyo-BcM3fReU 177 — counts
// Lines 74020-74234 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var BV = { OPEN: 0, PREP: 1, BOARD: 2, NOREN: 3, DAYOFF: 4 },
  VV = {
    izakaya: 1,
    yakitori: 1,
    tachinomi: 1,
    kissaten: 3,
    cafe: 3,
    "tea-stand": 3,
    bar: 2,
    karaoke: 2,
    massage: 2,
    snack: 2,
    "restaurant-floor": 2,
  },
  HV = { soba: 0, sushi: 1, izakaya: 2, yakitori: 2, tachinomi: 2 },
  UV = (e) => {
    let t = e >>> 0;
    return (
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t = Math.imul(t ^ (t >>> 16), 73244475)),
      (t ^ (t >>> 16)) >>> 0
    );
  },
  WV = class {
    plan;
    batch;
    model;
    hours = [];
    hoursIdx = new Map();
    on = new Uint8Array(256);
    tiles = new Map();
    queue = [];
    stateKey = -1;
    _m = new Float32Array(16);
    counts = {
      doors: 0,
      instances: 0,
      plates: 0,
      boards: 0,
      noren: 0,
      shutters: 0,
    };
    constructor(e, t, n) {
      ((this.plan = e), (this.batch = t), (this.model = n));
    }
    idxOf(e) {
      let t = this.hoursIdx.get(e);
      if (t === void 0) {
        if (((t = this.hours.length), t >= this.on.length)) {
          let e = new Uint8Array(this.on.length * 2);
          (e.set(this.on), (this.on = e));
        }
        (this.hours.push(e),
          this.hoursIdx.set(e, t),
          (this.stateKey = -1),
          this.last &&
            (this.on[t] = this.bits(e, this.last.day, this.last.hour)));
      }
      return t;
    }
    add(e, t) {
      (this.remove(e), this.queue.push({ key: e, doors: t, at: 0 }));
    }
    remove(e) {
      let t = this.queue.findIndex((t) => t.key === e);
      t >= 0 && this.queue.splice(t, 1);
      let n = this.tiles.get(e);
      if (!n) return;
      this.tiles.delete(e);
      let r = this.batch();
      if (r) for (let e of n.ids) e >= 0 && r.remove(e);
      this.counts.instances -= n.ids.length;
    }
    last = null;
    bits(e, t, n) {
      let r = tm(e, t, n),
        i = Ree(e, t, n);
      return (
        (r === em.OPEN ? 1 << BV.OPEN : 0) |
        (r === em.PREP || r === em.BREAK ? 1 << BV.PREP : 0) |
        (i >= 2 ? 1 << BV.BOARD : 0) |
        (i === 3 ? 1 << BV.NOREN : 0) |
        (r === em.DAYOFF ? 1 << BV.DAYOFF : 0)
      );
    }
    refresh(e, t) {
      this.last = { day: e, hour: t };
      let n = e.d * 31 + e.m;
      for (let r = 0; r < this.hours.length; r++) {
        let i = this.bits(this.hours[r], e, t);
        ((this.on[r] = i), (n = (Math.imul(n, 31) + i * (r + 3)) | 0));
      }
      if (n === this.stateKey) return;
      this.stateKey = n;
      let r = this.batch();
      if (r)
        for (let e of this.tiles.values())
          for (let t = 0; t < e.ids.length; t++)
            e.ids[t] >= 0 && r.setOn(e.ids[t], this.isOn(e.params[t]));
    }
    isOn(e) {
      return ((this.on[e >> 3] >> (e & 7)) & 1) == 1;
    }
    update(e = 24) {
      let t = this.batch();
      if (t)
        for (; e > 0 && this.queue.length;) {
          let n = this.queue[0],
            r = this.tiles.get(n.key);
          for (
            r || this.tiles.set(n.key, (r = { ids: [], params: [] }));
            e > 0 && n.at < n.doors.length;
          )
            (this.door(t, n.doors[n.at++], r), e--);
          n.at >= n.doors.length && this.queue.shift();
        }
    }
    put(e, t, n, r, i, a, o, s, c, l, u = 1, d = 1) {
      let f = this.model(n);
      f < 0 ||
        (n_(this._m, r, this.plan.groundHeight(r, a) + i, a, o, s, u, d, 1),
        t.ids.push(e.add(f, this._m, r, a, c, this.isOn(l))),
        t.params.push(l),
        this.counts.instances++);
    }
    door(e, t, n) {
      let r = Zp(t.trade) ?? Qp(t.district);
      if (r.open <= 0 && r.close >= 24) return;
      let i = this.idxOf(r) * 8,
        a = UV(t.seed),
        { nx: o, nz: s, tx: c, tz: l } = t;
      if (
        (this.counts.doors++,
        (t.eat || r.brk || r.closed || r.sunHol) && a % 10 < 7)
      ) {
        let r = t.w > 1.4 ? t.w * 0.22 : 0,
          a = t.x + c * r + o * 0.04,
          u = t.z + l * r + s * 0.04;
        (this.put(e, n, `plate-open`, a, 0, u, o, s, 35, i + BV.OPEN),
          this.put(e, n, `plate-junbi`, a, 0, u, o, s, 35, i + BV.PREP),
          this.counts.plates++);
      }
      if (r.closed || r.sunHol || r.sat === null || r.newYear) {
        let r = t.x + c * t.cs + o * 0.07,
          a = t.z + l * t.cs + s * 0.07;
        (this.put(
          e,
          n,
          `shutter-down`,
          r,
          0,
          a,
          o,
          s,
          140,
          i + BV.DAYOFF,
          Math.max(0.8, t.uw - 0.12),
          Math.max(2, t.h),
        ),
          this.put(
            e,
            n,
            `plate-teikyu`,
            t.x + o * 0.1,
            0,
            t.z + s * 0.1,
            o,
            s,
            35,
            i + BV.DAYOFF,
          ),
          this.counts.shutters++);
      }
      if (t.noren) {
        let r = HV[t.trade] ?? 3,
          a = Math.max(0.6, Math.min(1.1, Math.min(t.uw - 0.6, 1.8) / 1.6));
        (this.put(
          e,
          n,
          `noren-${r}`,
          t.x + o * 0.3,
          t.h,
          t.z + s * 0.3,
          o,
          s,
          90,
          i + BV.NOREN,
          a,
        ),
          this.counts.noren++);
      }
      let u = r.board ?? (t.eat ? 0.5 : 0.15);
      if (((a >>> 8) % 100) / 100 < u) {
        let r = VV[t.trade] ?? (t.eat ? 0 : 2),
          u = (a >>> 4) & 1 ? 1 : -1,
          d = t.x + o * 0.7 + c * u * (t.w / 2 + 0.3),
          f = t.z + s * 0.7 + l * u * (t.w / 2 + 0.3);
        (this.plan.surfaceAt(d, f) === `sidewalk` ||
          this.plan.surfaceAt(d, f) === `lot`) &&
          (this.put(e, n, `aboard-${r}`, d, 0, f, c, l, 60, i + BV.BOARD),
          this.counts.boards++);
      }
    }
    get pending() {
      return this.queue.length;
    }
  };
function GV(e) {
  let t = 0,
    n = e.geometry;
  for (let e of Object.values(n.attributes)) t += e.array.byteLength;
  return (n.index && (t += n.index.array.byteLength), t);
}
var KV = { low: 170, medium: 220, high: 260, ultra: 380 },
  qV = new Set([vV.LEAVES, vV.SUMMER, vV.HANAMI]);
