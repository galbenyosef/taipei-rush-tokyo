// tokyo/assets/region-tokyo-bodyWorker-CtngWad2 15 — times
// Lines 6343-6637 of readable/tokyo/assets/region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
var Kt = class {
  constructor(e, t, n, r) {
    if (e === void 0)
      throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
    ((this.name = e),
      (this.times = It(t, this.TimeBufferType)),
      (this.values = It(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation));
  }
  static toJSON(e) {
    let t = e.constructor,
      n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: It(e.times, Array),
        values: It(e.values, Array),
      };
      let t = e.getInterpolation();
      (t !== e.DefaultInterpolation && (n.interpolation = t),
        Lt(e.settings) &&
          (n.settings = {
            inTangents: It(e.settings.inTangents, Array),
            outTangents: It(e.settings.outTangents, Array),
          }));
    }
    return ((n.type = e.ValueTypeName), n);
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Vt(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Bt(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new zt(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new Ht(this.times, this.values, this.getValueSize(), e);
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents),
        (t.outTangents = this.settings.outTangents)),
      t
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case r:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case i:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case a:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case o:
        t = this.InterpolantFactoryMethodBezier;
    }
    if (t === void 0) {
      let t =
        `unsupported interpolation for ` +
        this.ValueTypeName +
        ` keyframe track named ` +
        this.name;
      if (this.createInterpolant === void 0) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t);
      }
      return (y(`KeyframeTrack:`, t), this);
    }
    return ((this.createInterpolant = t), this);
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return r;
      case this.InterpolantFactoryMethodLinear:
        return i;
      case this.InterpolantFactoryMethodSmooth:
        return a;
      case this.InterpolantFactoryMethodBezier:
        return o;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      Lt(this.settings) &&
        (qt(this.settings.inTangents, e), qt(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    let n = this.times,
      r = n.length,
      i = 0,
      a = r - 1;
    for (; i !== r && n[i] < e;) ++i;
    for (; a !== -1 && n[a] > t;) --a;
    if ((++a, i !== 0 || a !== r)) {
      i >= a && ((a = Math.max(a, 1)), (i = a - 1));
      let e = this.getValueSize();
      ((this.times = n.slice(i, a)),
        (this.values = this.values.slice(i * e, a * e)));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (b(`KeyframeTrack: Invalid value size in track.`, this), (e = !1));
    let n = this.times,
      r = this.values,
      i = n.length;
    i === 0 && (b(`KeyframeTrack: Track is empty.`, this), (e = !1));
    let a = null;
    for (let t = 0; t !== i; t++) {
      let r = n[t];
      if (typeof r == `number` && isNaN(r)) {
        (b(`KeyframeTrack: Time is not a valid number.`, this, t, r), (e = !1));
        break;
      }
      if (a !== null && a > r) {
        (b(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1));
        break;
      }
      a = r;
    }
    if (r !== void 0 && h(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t];
        if (isNaN(n)) {
          (b(`KeyframeTrack: Value is not a valid number.`, this, t, n),
            (e = !1));
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === a,
      i = e.length - 1,
      o = 1;
    for (let a = 1; a < i; ++a) {
      let i = !1,
        s = e[a];
      if (s !== e[a + 1] && (a !== 1 || s !== e[0])) {
        if (r) i = !0;
        else {
          let e = a * n,
            r = e - n,
            o = e + n;
          for (let a = 0; a !== n; ++a) {
            let n = t[e + a];
            if (n !== t[r + a] || n !== t[o + a]) {
              i = !0;
              break;
            }
          }
        }
      }
      if (i) {
        if (a !== o) {
          e[o] = e[a];
          let r = a * n,
            i = o * n;
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
        }
        ++o;
      }
    }
    if (i > 0) {
      e[o] = e[i];
      for (let e = i * n, r = o * n, a = 0; a !== n; ++a) t[r + a] = t[e + a];
      ++o;
    }
    return (
      o === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, o)), (this.values = t.slice(0, o * n))),
      this
    );
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t);
    return (
      (r.createInterpolant = this.createInterpolant),
      Lt(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    );
  }
};
function qt(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
((Kt.prototype.ValueTypeName = ``),
  (Kt.prototype.TimeBufferType = Float32Array),
  (Kt.prototype.ValueBufferType = Float32Array),
  (Kt.prototype.DefaultInterpolation = i));
var Jt = class extends Kt {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((Jt.prototype.ValueTypeName = `bool`),
  (Jt.prototype.ValueBufferType = Array),
  (Jt.prototype.DefaultInterpolation = r),
  (Jt.prototype.InterpolantFactoryMethodLinear = void 0),
  (Jt.prototype.InterpolantFactoryMethodSmooth = void 0));
var Yt = class extends Kt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
Yt.prototype.ValueTypeName = `color`;
var Xt = class extends Kt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
Xt.prototype.ValueTypeName = `number`;
var Zt = class extends Rt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4) j.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  Qt = class extends Kt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
      return new Zt(this.times, this.values, this.getValueSize(), e);
    }
  };
((Qt.prototype.ValueTypeName = `quaternion`),
  (Qt.prototype.InterpolantFactoryMethodSmooth = void 0));
var $t = class extends Kt {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
(($t.prototype.ValueTypeName = `string`),
  ($t.prototype.ValueBufferType = Array),
  ($t.prototype.DefaultInterpolation = r),
  ($t.prototype.InterpolantFactoryMethodLinear = void 0),
  ($t.prototype.InterpolantFactoryMethodSmooth = void 0));
var en = class extends Kt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
en.prototype.ValueTypeName = `vector`;
const tn = /* @__PURE__ */ RegExp(`[\\[\\]\\.:\\/]`, `g`),
  nn = /* @__PURE__ */ RegExp(
    `^((?:[^\\[\\]\\.:\\/]+[\\/:])*)([^\\[\\]:\\/]+)?(?:\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?)?\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?$`,
  ),
  rn = [`material`, `materials`, `bones`, `map`];
