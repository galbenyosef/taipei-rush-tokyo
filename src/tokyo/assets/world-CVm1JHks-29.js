// tokyo/assets/world-CVm1JHks 29 — clip
// Lines 8866-9116 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Js(e) {
  return { i: 0, grads: Array(e.grads).fill(null) };
}
var Ys = typeof performance < `u` ? () => performance.now() : () => Date.now();
function Xs(e, t, n, r = 0) {
  let i = t.nums,
    a = t.strs,
    o = n.grads,
    s = i.length,
    c = e,
    l = r > 0 ? Ys() : 0,
    u = n.i,
    d = 0;
  for (; u < s;) {
    if (r > 0 && !(++d & 7) && Ys() - l >= r) return ((n.i = u), !1);
    let t = i[u++];
    switch (t) {
      case $o:
        (e.fillRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case es:
        (e.strokeRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case ts:
        (e.clearRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case ns:
        e.beginPath();
        break;
      case rs:
        e.closePath();
        break;
      case is:
        (e.moveTo(i[u], i[u + 1]), (u += 2));
        break;
      case as:
        (e.lineTo(i[u], i[u + 1]), (u += 2));
        break;
      case os:
        (e.quadraticCurveTo(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case ss:
        (e.bezierCurveTo(
          i[u],
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
        ),
          (u += 6));
        break;
      case cs:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case ls:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], !0), (u += 5));
        break;
      case Rs:
        (e.arcTo(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case us:
        (e.ellipse(
          i[u],
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
          i[u + 6],
        ),
          (u += 7));
        break;
      case ds:
        (e.ellipse(
          i[u],
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
          i[u + 6],
          !0,
        ),
          (u += 7));
        break;
      case fs:
        (e.rect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case zs: {
        let t = i[u + 4],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 5 + e]);
        (e.roundRect(i[u], i[u + 1], i[u + 2], i[u + 3], t === 1 ? n[0] : n),
          (u += 5 + t));
        break;
      }
      case ps:
        e.fill();
        break;
      case ms:
        e.fill(`evenodd`);
        break;
      case hs:
        e.stroke();
        break;
      case gs:
        e.clip();
        break;
      case _s:
        e.clip(`evenodd`);
        break;
      case vs:
        e.save();
        break;
      case ys:
        e.restore();
        break;
      case bs:
        (e.translate(i[u], i[u + 1]), (u += 2));
        break;
      case xs:
        (e.rotate(i[u]), (u += 1));
        break;
      case Ss:
        (e.scale(i[u], i[u + 1]), (u += 2));
        break;
      case Ts:
        (e.transform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case Cs:
        (e.setTransform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case ws:
        e.resetTransform();
        break;
      case Es:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case Ds:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Os:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case ks:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case As: {
        let t = i[u],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 1 + e]);
        (e.setLineDash(n), (u += 1 + t));
        break;
      }
      case js:
        ((c[Vs[i[u]]] = i[u + 1]), (u += 2));
        break;
      case Ms:
        ((c[Vs[i[u]]] = a[i[u + 1]]), (u += 2));
        break;
      case Ps:
        ((c[Vs[i[u]]] = i[u + 1] !== 0), (u += 2));
        break;
      case Ns:
        ((c[Vs[i[u]]] = o[i[u + 1]]), (u += 2));
        break;
      case Fs:
        ((o[i[u]] = e.createLinearGradient(
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
        )),
          (u += 5));
        break;
      case Is:
        ((o[i[u]] = e.createRadialGradient(
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
          i[u + 6],
        )),
          (u += 7));
        break;
      case Bs:
        ((o[i[u]] = e.createConicGradient(i[u + 1], i[u + 2], i[u + 3])),
          (u += 4));
        break;
      case Ls:
        (o[i[u]]?.addColorStop(i[u + 1], a[i[u + 2]]), (u += 3));
        break;
      default:
        throw Error(`site art replay: bad opcode ${t} at ${u - 1}`);
    }
  }
  return ((n.i = u), !0);
}
function Zs(e, t, n, r, i, a) {
  (e.save(),
    e.translate(t, n),
    e.beginPath(),
    e.rect(-a, -a, r + a * 2, i + a * 2),
    e.clip());
}
var Qs = [
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
  $s = 4e3;
function ec(e) {
  let t = ``;
  for (let n = 0; n < Qs.length; n++) t += String(e[Qs[n]]) + ``;
  return t;
}
function tc(e, t) {
  let n = {};
  for (let r = 0; r < 9; r++) n[Qo[r]] = e[t + r];
  return n;
}
function nc(e, t) {
  let n = /(\d+(?:\.\d+)?)px/.exec(String(e.font ?? ``)),
    r = n ? +n[1] : 10,
    i = 0;
  for (let e of t) {
    let t = e.codePointAt(0) ?? 0;
    i += t >= 11904 ? r : e === ` ` ? r * 0.3 : r * 0.55;
  }
  return {
    width: i,
    actualBoundingBoxLeft: 0,
    actualBoundingBoxRight: i,
    actualBoundingBoxAscent: r * 0.8,
    actualBoundingBoxDescent: r * 0.2,
    fontBoundingBoxAscent: r * 0.9,
    fontBoundingBoxDescent: r * 0.25,
    alphabeticBaseline: 0,
    hangingBaseline: r * 0.8,
  };
}
