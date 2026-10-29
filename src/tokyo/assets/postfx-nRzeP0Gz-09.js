// tokyo/assets/postfx-nRzeP0Gz 09 — createelement
// Lines 4157-4166 of readable/tokyo/assets/postfx-nRzeP0Gz.pretty.js (statement-aligned).
function tn(e, t, n) {
  let r = document.createElement(`canvas`),
    i = r.getContext(`2d`);
  if (((r.width = e), (r.height = t), n instanceof Image)) i.drawImage(n, 0, 0);
  else {
    let r = i.createImageData(e, t);
    (r.data.set(n), i.putImageData(r, 0, 0));
  }
  return r;
}
