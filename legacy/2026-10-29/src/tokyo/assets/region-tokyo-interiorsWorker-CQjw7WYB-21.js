// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 21 — times
// Lines 8122-8428 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function sr(e, t, n, r, i) {
  let a = (e - t) / (i - t);
  for (let o = 0; o < 8; o++) {
    let o = ar(a, t, n, r, i) - e;
    if (Math.abs(o) < 1e-10) break;
    let s = or(a, t, n, r, i);
    if (Math.abs(s) < 1e-10) break;
    a = Math.max(0, Math.min(1, a - o / s));
  }
  return a;
}
var cr = class {
  constructor(e, t, n, r) {
    if (e === void 0)
      throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
    ((this.name = e),
      (this.times = Qn(t, this.TimeBufferType)),
      (this.values = Qn(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation));
  }
  static toJSON(e) {
    let t = e.constructor,
      n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Qn(e.times, Array),
        values: Qn(e.values, Array),
      };
      let t = e.getInterpolation();
      (t !== e.DefaultInterpolation && (n.interpolation = t),
        $n(e.settings) &&
          (n.settings = {
            inTangents: Qn(e.settings.inTangents, Array),
            outTangents: Qn(e.settings.outTangents, Array),
          }));
    }
    return ((n.type = e.ValueTypeName), n);
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new rr(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new nr(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new tr(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new ir(this.times, this.values, this.getValueSize(), e);
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
      case c:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case l:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case u:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case d:
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
      return (T(`KeyframeTrack:`, t), this);
    }
    return ((this.createInterpolant = t), this);
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return c;
      case this.InterpolantFactoryMethodLinear:
        return l;
      case this.InterpolantFactoryMethodSmooth:
        return u;
      case this.InterpolantFactoryMethodBezier:
        return d;
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
      $n(this.settings) &&
        (lr(this.settings.inTangents, e), lr(this.settings.outTangents, e));
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
      (E(`KeyframeTrack: Invalid value size in track.`, this), (e = !1));
    let n = this.times,
      r = this.values,
      i = n.length;
    i === 0 && (E(`KeyframeTrack: Track is empty.`, this), (e = !1));
    let a = null;
    for (let t = 0; t !== i; t++) {
      let r = n[t];
      if (typeof r == `number` && isNaN(r)) {
        (E(`KeyframeTrack: Time is not a valid number.`, this, t, r), (e = !1));
        break;
      }
      if (a !== null && a > r) {
        (E(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1));
        break;
      }
      a = r;
    }
    if (r !== void 0 && x(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t];
        if (isNaN(n)) {
          (E(`KeyframeTrack: Value is not a valid number.`, this, t, n),
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
      r = this.getInterpolation() === u,
      i = e.length - 1,
      a = 1;
    for (let o = 1; o < i; ++o) {
      let i = !1,
        s = e[o];
      if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
        if (r) i = !0;
        else {
          let e = o * n,
            r = e - n,
            a = e + n;
          for (let o = 0; o !== n; ++o) {
            let n = t[e + o];
            if (n !== t[r + o] || n !== t[a + o]) {
              i = !0;
              break;
            }
          }
        }
      }
      if (i) {
        if (o !== a) {
          e[a] = e[o];
          let r = o * n,
            i = a * n;
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
        }
        ++a;
      }
    }
    if (i > 0) {
      e[a] = e[i];
      for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
      ++a;
    }
    return (
      a === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n))),
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
      $n(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    );
  }
};
function lr(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
((cr.prototype.ValueTypeName = ``),
  (cr.prototype.TimeBufferType = Float32Array),
  (cr.prototype.ValueBufferType = Float32Array),
  (cr.prototype.DefaultInterpolation = l));
var ur = class extends cr {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((ur.prototype.ValueTypeName = `bool`),
  (ur.prototype.ValueBufferType = Array),
  (ur.prototype.DefaultInterpolation = c),
  (ur.prototype.InterpolantFactoryMethodLinear = void 0),
  (ur.prototype.InterpolantFactoryMethodSmooth = void 0));
var dr = class extends cr {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
dr.prototype.ValueTypeName = `color`;
var fr = class extends cr {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
fr.prototype.ValueTypeName = `number`;
var pr = class extends er {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4)
        ie.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  mr = class extends cr {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
      return new pr(this.times, this.values, this.getValueSize(), e);
    }
  };
((mr.prototype.ValueTypeName = `quaternion`),
  (mr.prototype.InterpolantFactoryMethodSmooth = void 0));
var hr = class extends cr {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((hr.prototype.ValueTypeName = `string`),
  (hr.prototype.ValueBufferType = Array),
  (hr.prototype.DefaultInterpolation = c),
  (hr.prototype.InterpolantFactoryMethodLinear = void 0),
  (hr.prototype.InterpolantFactoryMethodSmooth = void 0));
var gr = class extends cr {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
gr.prototype.ValueTypeName = `vector`;
const _r = /* @__PURE__ */ RegExp(`[\\[\\]\\.:\\/]`, `g`),
  vr = /* @__PURE__ */ RegExp(
    `^((?:[^\\[\\]\\.:\\/]+[\\/:])*)([^\\[\\]:\\/]+)?(?:\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?)?\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?$`,
  ),
  yr = [`material`, `materials`, `bones`, `map`];
