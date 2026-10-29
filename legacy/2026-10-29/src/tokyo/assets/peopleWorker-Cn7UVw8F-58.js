// tokyo/assets/peopleWorker-Cn7UVw8F 58 — buffer
// Lines 23557-23576 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
self.onmessage = (e) => {
  let t = e.data;
  try {
    if (t.t === `bake`) {
      let e = performance.now(),
        n = Sl(t.desc, t.pose),
        r = [n.pos.buffer, n.nor.buffer];
      (n.col && r.push(n.col.buffer),
        n.idx && r.push(n.idx.buffer),
        Tl({ id: t.id, bake: n, ms: performance.now() - e }, r));
    } else if (t.t === `hero`)
      Ol(t).catch((e) => Tl({ id: t.id, error: String(e?.stack ?? e) }));
    else if (t.t === `reset`) {
      if (El) for (let e of El.pages) e.canvas.width = e.canvas.height = 1;
      ((El = null), Dl.clear());
    }
  } catch (e) {
    Tl({ id: t.id, error: String(e?.stack ?? e) });
  }
};
