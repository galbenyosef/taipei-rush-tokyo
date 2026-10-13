// tokyo__assets__avatar-CbvrNwG6 06 — offset
// Lines 2410-2614 of readable/tokyo__assets__avatar-CbvrNwG6.pretty.js (statement-aligned).
function un(e, t, n) {
  let r = t.attributes,
    i = new Ue();
  if (r.POSITION !== void 0) {
    let e = n.json.accessors[r.POSITION],
      t = e.min,
      a = e.max;
    if (t !== void 0 && a !== void 0) {
      if (
        (i.set(new j(t[0], t[1], t[2]), new j(a[0], a[1], a[2])), e.normalized)
      ) {
        let t = on(B[e.componentType]);
        (i.min.multiplyScalar(t), i.max.multiplyScalar(t));
      }
    } else {
      console.warn(
        `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
      );
      return;
    }
  } else return;
  let a = t.targets;
  if (a !== void 0) {
    let e = new j(),
      t = new j();
    for (let r = 0, i = a.length; r < i; r++) {
      let i = a[r];
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max;
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = on(B[r.componentType]);
            t.multiplyScalar(e);
          }
          e.max(t);
        } else
          console.warn(
            `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
          );
      }
    }
    i.expandByVector(e);
  }
  e.boundingBox = i;
  let o = new x();
  (i.getCenter(o.center),
    (o.radius = i.min.distanceTo(i.max) / 2),
    (e.boundingSphere = o));
}
function dn(e, t, n) {
  let r = t.attributes,
    i = [];
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t);
    });
  }
  for (let t in r) {
    let n = Zt[t] || t.toLowerCase();
    n in e.attributes || i.push(a(r[t], n));
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t);
    });
    i.push(r);
  }
  return (
    ne.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ne.workingColorSpace}" not supported.`,
      ),
    U(e, t),
    un(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : tn(e, t.targets, n);
    })
  );
}
var fn = class {
    constructor(e = 4) {
      ((this.pool = e),
        (this.queue = []),
        (this.workers = []),
        (this.workersResolve = []),
        (this.workerStatus = 0),
        (this.workerCreator = null));
    }
    _initWorker(e) {
      if (!this.workers[e]) {
        let t = this.workerCreator();
        (t.addEventListener(`message`, this._onMessage.bind(this, e)),
          (this.workers[e] = t));
      }
    }
    _getIdleWorker() {
      for (let e = 0; e < this.pool; e++)
        if (!(this.workerStatus & (1 << e))) return e;
      return -1;
    }
    _onMessage(e, t) {
      let n = this.workersResolve[e];
      if ((n && n(t), this.queue.length)) {
        let { resolve: t, msg: n, transfer: r } = this.queue.shift();
        ((this.workersResolve[e] = t), this.workers[e].postMessage(n, r));
      } else this.workerStatus ^= 1 << e;
    }
    setWorkerCreator(e) {
      this.workerCreator = e;
    }
    setWorkerLimit(e) {
      this.pool = e;
    }
    postMessage(e, t) {
      return new Promise((n) => {
        let r = this._getIdleWorker();
        r === -1
          ? this.queue.push({ resolve: n, msg: e, transfer: t })
          : (this._initWorker(r),
            (this.workerStatus |= 1 << r),
            (this.workersResolve[r] = n),
            this.workers[r].postMessage(e, t));
      });
    }
    dispose() {
      (this.workers.forEach((e) => e.terminate()),
        (this.workersResolve.length = 0),
        (this.workers.length = 0),
        (this.queue.length = 0),
        (this.workerStatus = 0));
    }
  },
  pn = 1000054e3,
  mn = 1000054001,
  hn = 1000054004,
  gn = 1000054005,
  _n = 1000066e3,
  vn = 1000066004,
  W = class {
    constructor(e, t, n, r) {
      ((this._dataView = void 0),
        (this._littleEndian = void 0),
        (this._offset = void 0),
        (this._dataView = new DataView(e.buffer, e.byteOffset + t, n)),
        (this._littleEndian = r),
        (this._offset = 0));
    }
    _nextUint8() {
      let e = this._dataView.getUint8(this._offset);
      return ((this._offset += 1), e);
    }
    _nextUint16() {
      let e = this._dataView.getUint16(this._offset, this._littleEndian);
      return ((this._offset += 2), e);
    }
    _nextUint32() {
      let e = this._dataView.getUint32(this._offset, this._littleEndian);
      return ((this._offset += 4), e);
    }
    _nextUint64() {
      let e =
        this._dataView.getUint32(this._offset, this._littleEndian) +
        2 ** 32 *
          this._dataView.getUint32(this._offset + 4, this._littleEndian);
      return ((this._offset += 8), e);
    }
    _nextInt32() {
      let e = this._dataView.getInt32(this._offset, this._littleEndian);
      return ((this._offset += 4), e);
    }
    _nextUint8Array(e) {
      let t = new Uint8Array(
        this._dataView.buffer,
        this._dataView.byteOffset + this._offset,
        e,
      );
      return ((this._offset += e), t);
    }
    _skip(e) {
      return ((this._offset += e), this);
    }
    _scan(e, t = 0) {
      let n = this._offset,
        r = 0;
      for (; this._dataView.getUint8(this._offset) !== t && r < e;)
        (r++, this._offset++);
      return (
        r < e && this._offset++,
        new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, r)
      );
    }
  };
new Uint8Array([0]);
var G = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function yn(e) {
  return new TextDecoder().decode(e);
}
