// tokyo/assets/postfx-nRzeP0Gz 03 — renderbuffer
// Lines 558-577 of readable/tokyo/assets/postfx-nRzeP0Gz.pretty.js (statement-aligned).
function xe(e, t) {
  let n = e.getContext();
  if (t <= 0 || typeof n.renderbufferStorageMultisample != `function`) return 0;
  let r = n.getParameter(n.MAX_SAMPLES),
    i = Math.min(t, r);
  if (i <= 0) return 0;
  let a = n.getParameter(n.RENDERBUFFER_BINDING),
    o = n.createRenderbuffer();
  try {
    return (
      n.bindRenderbuffer(n.RENDERBUFFER, o),
      n.renderbufferStorageMultisample(n.RENDERBUFFER, i, n.RGBA8, 1, 1),
      i
    );
  } catch {
    return 0;
  } finally {
    (n.bindRenderbuffer(n.RENDERBUFFER, a), n.deleteRenderbuffer(o));
  }
}
