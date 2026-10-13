// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 60 — buffer
// Lines 24211-24230 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
self.onmessage = (e) => {
  let t = e.data;
  try {
    if (t.t === `bake`) {
      let e = performance.now(),
        n = Il(t.desc, t.pose),
        r = [n.pos.buffer, n.nor.buffer];
      (n.col && r.push(n.col.buffer),
        n.idx && r.push(n.idx.buffer),
        zl({ id: t.id, bake: n, ms: performance.now() - e }, r));
    } else if (t.t === `hero`)
      Hl(t).catch((e) => zl({ id: t.id, error: String(e?.stack ?? e) }));
    else if (t.t === `reset`) {
      if (Bl) for (let e of Bl.pages) e.canvas.width = e.canvas.height = 1;
      ((Bl = null), Vl.clear());
    }
  } catch (e) {
    zl({ id: t.id, error: String(e?.stack ?? e) });
  }
};
