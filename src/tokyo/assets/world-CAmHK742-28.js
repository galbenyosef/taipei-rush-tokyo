// tokyo/assets/world-CAmHK742 28 — buf
// Lines 8329-8798 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var Is = [
    `font`,
    `letterSpacing`,
    `wordSpacing`,
    `fontKerning`,
    `direction`,
    `fontStretch`,
    `fontVariantCaps`,
    `textRendering`,
    `lang`,
  ],
  Ls = {
    fillStyle: `#000000`,
    strokeStyle: `#000000`,
    lineWidth: 1,
    lineCap: `butt`,
    lineJoin: `miter`,
    miterLimit: 10,
    lineDashOffset: 0,
    font: `10px sans-serif`,
    textAlign: `start`,
    textBaseline: `alphabetic`,
    direction: `inherit`,
    letterSpacing: `0px`,
    wordSpacing: `0px`,
    fontKerning: `auto`,
    globalAlpha: 1,
    globalCompositeOperation: `source-over`,
    shadowBlur: 0,
    shadowColor: `rgba(0, 0, 0, 0)`,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    imageSmoothingEnabled: !0,
    imageSmoothingQuality: `low`,
    filter: `none`,
    fontStretch: `normal`,
    fontVariantCaps: `normal`,
    textRendering: `auto`,
    lang: `inherit`,
  },
  Rs = class {
    id;
    rec;
    constructor(e, t) {
      ((this.id = e), (this.rec = t));
    }
    addColorStop(e, t) {
      this.rec.stop(this.id, e, t);
    }
  },
  zs = class {
    ctx;
    cur = {};
    constructor(e) {
      this.ctx = e;
    }
    text(e, t) {
      let n = this.ctx;
      for (let t = 0; t < Is.length; t++) {
        let r = Is[t],
          i = e[r];
        i !== this.cur[r] && (r in n && (n[r] = i), (this.cur[r] = i));
      }
      return this.ctx.measureText(t);
    }
  },
  Bs = class {
    measure;
    scratch;
    buf;
    n = 0;
    strs = [];
    strIndex = new Map();
    gid = 0;
    st = { ...Ls };
    stack = [];
    dash = [];
    dashStack = [];
    constructor(e, t = null) {
      ((this.measure = e),
        (this.scratch = t),
        (this.buf = t ? t.buf : new Float64Array(1024)));
    }
    room(e) {
      let t = this.n + e;
      if (t > this.buf.length) {
        let e = this.buf.length * 2;
        for (; e < t;) e *= 2;
        let n = new Float64Array(e);
        (n.set(this.buf.subarray(0, this.n)),
          (this.buf = n),
          this.scratch && (this.scratch.buf = n));
      }
      return this.buf;
    }
    p1(e) {
      let t = this.room(1);
      t[this.n++] = e;
    }
    p2(e, t) {
      let n = this.room(2);
      ((n[this.n++] = e), (n[this.n++] = t));
    }
    p3(e, t, n) {
      let r = this.room(3);
      ((r[this.n++] = e), (r[this.n++] = t), (r[this.n++] = n));
    }
    p4(e, t, n, r) {
      let i = this.room(4);
      ((i[this.n++] = e),
        (i[this.n++] = t),
        (i[this.n++] = n),
        (i[this.n++] = r));
    }
    p5(e, t, n, r, i) {
      let a = this.room(5);
      ((a[this.n++] = e),
        (a[this.n++] = t),
        (a[this.n++] = n),
        (a[this.n++] = r),
        (a[this.n++] = i));
    }
    p6(e, t, n, r, i, a) {
      let o = this.room(6);
      ((o[this.n++] = e),
        (o[this.n++] = t),
        (o[this.n++] = n),
        (o[this.n++] = r),
        (o[this.n++] = i),
        (o[this.n++] = a));
    }
    p7(e, t, n, r, i, a, o) {
      (this.p6(e, t, n, r, i, a), this.p1(o));
    }
    p8(e, t, n, r, i, a, o, s) {
      (this.p6(e, t, n, r, i, a), this.p2(o, s));
    }
    get g() {
      return this;
    }
    take() {
      let e = {
        nums: this.buf.slice(0, this.n),
        strs: this.strs,
        grads: this.gid,
      };
      return ((this.n = 0), (this.strs = []), this.strIndex.clear(), e);
    }
    get size() {
      return this.n;
    }
    s(e) {
      let t = this.strIndex.get(e);
      return (
        t === void 0 &&
          ((t = this.strs.length), this.strs.push(e), this.strIndex.set(e, t)),
        t
      );
    }
    set(e, t) {
      this.st[e] = t;
      let n = Fs[e];
      if (t instanceof Rs) this.p3(Es, n, t.id);
      else if (typeof t == `number`) this.p3(ws, n, t);
      else if (typeof t == `boolean`) this.p3(Ds, n, +!!t);
      else if (typeof t == `string`) this.p3(Ts, n, this.s(t));
      else
        throw Error(`site art recorder: ${e} = ${typeof t} is not recordable`);
    }
    get fillStyle() {
      return this.st.fillStyle;
    }
    set fillStyle(e) {
      this.set(`fillStyle`, e);
    }
    get strokeStyle() {
      return this.st.strokeStyle;
    }
    set strokeStyle(e) {
      this.set(`strokeStyle`, e);
    }
    get lineWidth() {
      return this.st.lineWidth;
    }
    set lineWidth(e) {
      this.set(`lineWidth`, e);
    }
    get lineCap() {
      return this.st.lineCap;
    }
    set lineCap(e) {
      this.set(`lineCap`, e);
    }
    get lineJoin() {
      return this.st.lineJoin;
    }
    set lineJoin(e) {
      this.set(`lineJoin`, e);
    }
    get miterLimit() {
      return this.st.miterLimit;
    }
    set miterLimit(e) {
      this.set(`miterLimit`, e);
    }
    get lineDashOffset() {
      return this.st.lineDashOffset;
    }
    set lineDashOffset(e) {
      this.set(`lineDashOffset`, e);
    }
    get font() {
      return this.st.font;
    }
    set font(e) {
      this.set(`font`, e);
    }
    get textAlign() {
      return this.st.textAlign;
    }
    set textAlign(e) {
      this.set(`textAlign`, e);
    }
    get textBaseline() {
      return this.st.textBaseline;
    }
    set textBaseline(e) {
      this.set(`textBaseline`, e);
    }
    get direction() {
      return this.st.direction;
    }
    set direction(e) {
      this.set(`direction`, e);
    }
    get letterSpacing() {
      return this.st.letterSpacing;
    }
    set letterSpacing(e) {
      this.set(`letterSpacing`, e);
    }
    get wordSpacing() {
      return this.st.wordSpacing;
    }
    set wordSpacing(e) {
      this.set(`wordSpacing`, e);
    }
    get fontKerning() {
      return this.st.fontKerning;
    }
    set fontKerning(e) {
      this.set(`fontKerning`, e);
    }
    get fontStretch() {
      return this.st.fontStretch;
    }
    set fontStretch(e) {
      this.set(`fontStretch`, e);
    }
    get fontVariantCaps() {
      return this.st.fontVariantCaps;
    }
    set fontVariantCaps(e) {
      this.set(`fontVariantCaps`, e);
    }
    get textRendering() {
      return this.st.textRendering;
    }
    set textRendering(e) {
      this.set(`textRendering`, e);
    }
    get globalAlpha() {
      return this.st.globalAlpha;
    }
    set globalAlpha(e) {
      this.set(`globalAlpha`, e);
    }
    get globalCompositeOperation() {
      return this.st.globalCompositeOperation;
    }
    set globalCompositeOperation(e) {
      this.set(`globalCompositeOperation`, e);
    }
    get shadowBlur() {
      return this.st.shadowBlur;
    }
    set shadowBlur(e) {
      this.set(`shadowBlur`, e);
    }
    get shadowColor() {
      return this.st.shadowColor;
    }
    set shadowColor(e) {
      this.set(`shadowColor`, e);
    }
    get shadowOffsetX() {
      return this.st.shadowOffsetX;
    }
    set shadowOffsetX(e) {
      this.set(`shadowOffsetX`, e);
    }
    get shadowOffsetY() {
      return this.st.shadowOffsetY;
    }
    set shadowOffsetY(e) {
      this.set(`shadowOffsetY`, e);
    }
    get imageSmoothingEnabled() {
      return this.st.imageSmoothingEnabled;
    }
    set imageSmoothingEnabled(e) {
      this.set(`imageSmoothingEnabled`, e);
    }
    get imageSmoothingQuality() {
      return this.st.imageSmoothingQuality;
    }
    set imageSmoothingQuality(e) {
      this.set(`imageSmoothingQuality`, e);
    }
    get filter() {
      return this.st.filter;
    }
    set filter(e) {
      this.set(`filter`, e);
    }
    get lang() {
      return this.st.lang;
    }
    set lang(e) {
      this.set(`lang`, e);
    }
    save() {
      (this.stack.push({ ...this.st }),
        this.dashStack.push(this.dash),
        this.p1(ds));
    }
    restore() {
      let e = this.stack.pop();
      e && (this.st = e);
      let t = this.dashStack.pop();
      (t && (this.dash = t), this.p1(fs));
    }
    setLineDash(e) {
      let t = Array.from(e, Number);
      ((this.dash = t), this.p2(Cs, t.length));
      for (let e = 0; e < t.length; e++) this.p1(t[e]);
    }
    getLineDash() {
      return this.dash.slice();
    }
    translate(e, t) {
      this.p3(ps, e, t);
    }
    rotate(e) {
      this.p2(ms, e);
    }
    scale(e, t) {
      this.p3(hs, e, t);
    }
    transform(e, t, n, r, i, a) {
      this.p7(vs, e, t, n, r, i, a);
    }
    setTransform(e, t, n, r, i, a) {
      if (typeof e != `number`) {
        if (e !== void 0)
          throw Error(
            `site art recorder: setTransform(DOMMatrix) is not recordable`,
          );
        this.p1(_s);
        return;
      }
      this.p7(gs, e, t ?? 0, n ?? 0, r ?? 1, i ?? 0, a ?? 0);
    }
    resetTransform() {
      this.p1(_s);
    }
    fillRect(e, t, n, r) {
      this.p5(Ko, e, t, n, r);
    }
    strokeRect(e, t, n, r) {
      this.p5(qo, e, t, n, r);
    }
    clearRect(e, t, n, r) {
      this.p5(Jo, e, t, n, r);
    }
    beginPath() {
      this.p1(Yo);
    }
    closePath() {
      this.p1(Xo);
    }
    moveTo(e, t) {
      this.p3(Zo, e, t);
    }
    lineTo(e, t) {
      this.p3(Qo, e, t);
    }
    quadraticCurveTo(e, t, n, r) {
      this.p5($o, e, t, n, r);
    }
    bezierCurveTo(e, t, n, r, i, a) {
      this.p7(es, e, t, n, r, i, a);
    }
    arc(e, t, n, r, i, a) {
      this.p6(a ? ns : ts, e, t, n, r, i);
    }
    arcTo(e, t, n, r, i) {
      this.p6(js, e, t, n, r, i);
    }
    ellipse(e, t, n, r, i, a, o, s) {
      this.p8(s ? is : rs, e, t, n, r, i, a, o);
    }
    rect(e, t, n, r) {
      this.p5(as, e, t, n, r);
    }
    roundRect(e, t, n, r, i) {
      let a =
        i === void 0 ? [0] : typeof i == `number` ? [i] : Array.from(i, Number);
      if (a.some((e) => typeof e != `number` || e !== e))
        throw Error(
          `site art recorder: roundRect(DOMPointInit) is not recordable`,
        );
      this.p6(Ms, e, t, n, r, a.length);
      for (let e = 0; e < a.length; e++) this.p1(a[e]);
    }
    fill(e) {
      if (e !== void 0 && typeof e != `string`)
        throw Error(`site art recorder: fill(Path2D) is not recordable`);
      this.p1(e === `evenodd` ? ss : os);
    }
    stroke(e) {
      if (e !== void 0)
        throw Error(`site art recorder: stroke(Path2D) is not recordable`);
      this.p1(cs);
    }
    clip(e) {
      if (e !== void 0 && typeof e != `string`)
        throw Error(`site art recorder: clip(Path2D) is not recordable`);
      this.p1(e === `evenodd` ? us : ls);
    }
    fillText(e, t, n, r) {
      r === void 0
        ? this.p4(ys, this.s(String(e)), t, n)
        : this.p5(bs, this.s(String(e)), t, n, r);
    }
    strokeText(e, t, n, r) {
      r === void 0
        ? this.p4(xs, this.s(String(e)), t, n)
        : this.p5(Ss, this.s(String(e)), t, n, r);
    }
    measureText(e) {
      if (!this.measure) throw Error(`site art recorder: no measuring context`);
      return this.measure.text(this.st, String(e));
    }
    createLinearGradient(e, t, n, r) {
      let i = this.gid++;
      return (this.p6(Os, i, e, t, n, r), new Rs(i, this));
    }
    createRadialGradient(e, t, n, r, i, a) {
      let o = this.gid++;
      return (this.p8(ks, o, e, t, n, r, i, a), new Rs(o, this));
    }
    createConicGradient(e, t, n) {
      let r = this.gid++;
      return (this.p5(Ns, r, e, t, n), new Rs(r, this));
    }
    stop(e, t, n) {
      this.p4(As, e, t, this.s(String(n)));
    }
  };
