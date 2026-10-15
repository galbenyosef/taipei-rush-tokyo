// tokyo/assets/characters-BvEb7Acx 32 — lod
// Lines 9607-9933 of readable/tokyo/assets/characters-BvEb7Acx.pretty.js (statement-aligned).
function* No(e, t) {
  let n = t.lod ?? 0,
    r = vo(t),
    i = Do(e, n, r, t),
    a = ko(i);
  if (a) return a;
  let o = yield* Ga(e, {
      lod: n,
      textured: n === 0 && !!r,
      conform: !1,
      faceRes: t.faceRes,
      skip: t.skip,
    }),
    s = null,
    c = null;
  if (o.tiles && r) {
    yield;
    let e = yield* r.resolveSteps(o.tiles.reqs);
    ((s = e.page), (c = e.rects), r.flush());
  }
  let l = _o(o, s, c);
  return (Ao(i, l), l);
}
function Po(e, t = {}) {
  if (t.lod === 2) return fo(e);
  let n = qa(e, {
      lod: t.lod ?? 1,
      textured: !1,
      conform: t.conformPeds !== !1,
    }),
    r = n.m.buildCrowd();
  return (
    (r.userData = {
      triangles: n.m.triangleCount,
      breakdown: n.breakdown,
      trim: n.trim,
      height: e.height,
      scale: e.height / 1.72,
      id: e.id,
    }),
    r
  );
}
function Fo(e) {
  return jo(e, { lod: 1, atlas: null });
}
var Io = new (class {
    w = null;
    seq = 1;
    pending = new Map();
    broken = !1;
    noPaint = !1;
    built = 0;
    workerMs = 0;
    applyMs = 0;
    applyMax = 0;
    noteApply(e) {
      ((this.applyMs += e), (this.applyMax = Math.max(this.applyMax, e)));
    }
    start() {
      if (this.w || this.broken) return this.w;
      if (typeof Worker > `u`) return ((this.broken = !0), null);
      try {
        let e = new Worker(
          new URL(`/tokyo/assets/charWorker-DPNUr-Eu.js`, `` + import.meta.url),
          { type: `module` },
        );
        ((e.onmessage = (e) => {
          this.lastReply = performance.now();
          let t = e.data,
            n = this.pending.get(t.id);
          n &&
            (this.pending.delete(t.id),
            t.error
              ? n.reject(Error(t.error))
              : (this.built++, (this.workerMs += t.ms ?? 0), n.resolve(t)));
        }),
          (e.onerror = (e) => {
            (e.preventDefault?.(),
              console.warn(
                `[characters] build worker unavailable — building on the main thread (sliced)`,
              ),
              this.fail());
          }),
          (this.w = e));
      } catch {
        this.broken = !0;
      }
      return this.w;
    }
    lastReply = 0;
    watchT = 0;
    watch() {
      if (this.watchT || this.broken) return;
      let e = this.lastReply + te - performance.now();
      this.watchT = setTimeout(
        () => {
          if (((this.watchT = 0), this.pending.size && !this.broken)) {
            if (performance.now() - this.lastReply < 15e3) return this.watch();
            (console.warn(
              `[characters] build worker silent for ${te / 1e3} s — building on the main thread (sliced)`,
            ),
              this.fail());
          }
        },
        Math.max(250, e),
      );
    }
    fail() {
      ((this.broken = !0), this.w?.terminate(), (this.w = null));
      let e = [...this.pending.values()];
      this.pending.clear();
      for (let t of e) t.reject(Error(`worker failed`));
    }
    run(e) {
      let t = this.start();
      if (!t) return null;
      let n = this.seq++,
        r = { ...e, id: n };
      return new Promise((e, i) => {
        (this.pending.size || (this.lastReply = performance.now()),
          this.pending.set(n, { resolve: e, reject: i, job: r }),
          this.watch());
        try {
          t.postMessage(r);
        } catch (e) {
          (this.pending.delete(n), i(e));
        }
      });
    }
    get inFlight() {
      return this.pending.size;
    }
  })(),
  Lo = [],
  Ro = !1,
  zo = 0,
  Bo =
    typeof requestAnimationFrame == `function`
      ? (e) => requestAnimationFrame(e)
      : (e) => setTimeout(e, 16);
function Vo() {
  if (((Ro = !1), !Lo.length)) return;
  let e = performance.now(),
    t = Lo[0].budget;
  do {
    let e = Lo[0];
    try {
      let t = e.it.next();
      t.done && (Lo.shift(), e.resolve(t.value));
    } catch (t) {
      (Lo.shift(), e.reject(t));
    }
  } while (Lo.length && performance.now() - e < t);
  ((zo += performance.now() - e), Lo.length && Ho());
}
function Ho() {
  Ro || ((Ro = !0), Bo(Vo));
}
function Uo(e, t = 2) {
  return new Promise((n, r) => {
    (Lo.push({ it: e, budget: Math.max(0.5, t), resolve: n, reject: r }), Ho());
  });
}
function Wo(e) {
  let t = [];
  for (let n = 0; n < 27; n++)
    t.push(new k(e[n * 3], e[n * 3 + 1], e[n * 3 + 2]));
  return t;
}
var Go = new Map();
function Ko(e, t = {}) {
  let n = t.lod ?? 0,
    r = vo(t),
    i = Do(e, n, r, t),
    a = ko(i);
  if (a) return Promise.resolve(go(e, n, a));
  let o = Go.get(i);
  if (o) return o.then((t) => go(e, n, Oo(t)));
  let s = qo(e, n, r, i, t);
  Go.set(i, s);
  let c = () => void Go.delete(i);
  return (
    s.then(c, c),
    s.then((t) => {
      let r = performance.now(),
        i = go(e, n, t);
      return (
        t.applyMs !== void 0 && Io.noteApply(t.applyMs + performance.now() - r),
        i
      );
    })
  );
}
function qo(e, t, n, r, i) {
  let a = t === 0 && !!n,
    o = () => Uo(No(e, i), i.budgetMs);
  if (i.worker === !1 || Io.broken || (a && Io.noPaint)) return o();
  let s = Io.run({
    kind: `hero`,
    desc: e,
    lod: t,
    textured: a,
    conform: !1,
    faceRes: i.faceRes,
    skip: i.skip,
  });
  return s
    ? s.then(
        (e) => {
          if (e.noPaint) return ((Io.noPaint = !0), o());
          let t = performance.now(),
            i = null,
            s = {
              pos: e.pos,
              nor: e.nor,
              col: e.col,
              uv: e.uv,
              rect: e.rect,
              surf: e.surf,
              si: e.si,
              sw: e.sw,
              idx: e.idx,
              n0: e.n0,
              bounds: e.bounds,
            };
          if (a && e.tiles && e.tiles.length && n) {
            let t = n.resolve(
              e.tiles,
              e.sheet ? { src: e.sheet, xy: e.xy } : void 0,
            );
            ((i = t.page), re(s.rect, t.rects), n.flush());
          }
          e.sheet?.close();
          let c = {
            arrays: s,
            page: i,
            joints: Wo(e.joints),
            height: e.height,
            triangles: e.triangles,
            breakdown: e.breakdown,
            trim: e.trim,
          };
          return (Ao(r, c), (c.applyMs = performance.now() - t), c);
        },
        (e) => (
          console.warn(
            `[characters] worker build failed, building on the main thread`,
            e,
          ),
          o()
        ),
      )
    : o();
}
function Jo(e, t = {}) {
  if (t.lod === 2) return Promise.resolve(fo(e));
  let n = t.lod ?? 1,
    r = t.conformPeds !== !1,
    i = () =>
      Uo(
        (function* () {
          let t = yield* Ga(e, { lod: n, textured: !1, conform: r }),
            i = t.m.buildCrowd();
          return (
            (i.userData = {
              triangles: t.m.triangleCount,
              breakdown: t.breakdown,
              trim: t.trim,
              height: e.height,
              scale: e.height / 1.72,
              id: e.id,
            }),
            i
          );
        })(),
        t.budgetMs,
      );
  if (t.worker === !1 || Io.broken) return i();
  let a = Io.run({ kind: `crowd`, desc: e, lod: n, textured: !1, conform: r });
  return a
    ? a.then(
        (t) => {
          let n = new v();
          return (
            n.setAttribute(`position`, new y(t.pos, 3)),
            n.setAttribute(`normal`, new y(t.nor, 3)),
            n.setAttribute(`color`, new y(t.col, 3)),
            n.setAttribute(`part`, new y(t.part, 1)),
            n.setAttribute(`aInfo`, new y(t.info, 4)),
            n.setIndex(new y(t.idx, 1)),
            n.computeBoundingSphere(),
            n.computeBoundingBox(),
            (n.userData = {
              triangles: t.triangles,
              breakdown: t.breakdown,
              trim: t.trim,
              height: e.height,
              scale: e.height / 1.72,
              id: e.id,
            }),
            n
          );
        },
        (e) => (
          console.warn(
            `[characters] worker crowd build failed, building on the main thread`,
            e,
          ),
          i()
        ),
      )
    : i();
}
function Yo() {
  return {
    worker: !Io.broken,
    paintsInWorker: !Io.noPaint,
    built: Io.built,
    workerMs: +Io.workerMs.toFixed(1),
    applyMs: +Io.applyMs.toFixed(2),
    applyMaxMs: +Io.applyMax.toFixed(2),
    inFlight: Io.inFlight,
    slicedQueued: Lo.length,
    slicedMs: +zo.toFixed(1),
  };
}
