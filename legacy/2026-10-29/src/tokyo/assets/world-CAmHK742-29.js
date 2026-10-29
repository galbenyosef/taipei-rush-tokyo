// tokyo/assets/world-CAmHK742 29 — clip
// Lines 8799-9049 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Vs(e) {
  return { i: 0, grads: Array(e.grads).fill(null) };
}
var Hs = typeof performance < `u` ? () => performance.now() : () => Date.now();
function Us(e, t, n, r = 0) {
  let i = t.nums,
    a = t.strs,
    o = n.grads,
    s = i.length,
    c = e,
    l = r > 0 ? Hs() : 0,
    u = n.i,
    d = 0;
  for (; u < s;) {
    if (r > 0 && !(++d & 7) && Hs() - l >= r) return ((n.i = u), !1);
    let t = i[u++];
    switch (t) {
      case Ko:
        (e.fillRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case qo:
        (e.strokeRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Jo:
        (e.clearRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Yo:
        e.beginPath();
        break;
      case Xo:
        e.closePath();
        break;
      case Zo:
        (e.moveTo(i[u], i[u + 1]), (u += 2));
        break;
      case Qo:
        (e.lineTo(i[u], i[u + 1]), (u += 2));
        break;
      case $o:
        (e.quadraticCurveTo(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case es:
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
      case ts:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case ns:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], !0), (u += 5));
        break;
      case js:
        (e.arcTo(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case rs:
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
      case is:
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
      case as:
        (e.rect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Ms: {
        let t = i[u + 4],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 5 + e]);
        (e.roundRect(i[u], i[u + 1], i[u + 2], i[u + 3], t === 1 ? n[0] : n),
          (u += 5 + t));
        break;
      }
      case os:
        e.fill();
        break;
      case ss:
        e.fill(`evenodd`);
        break;
      case cs:
        e.stroke();
        break;
      case ls:
        e.clip();
        break;
      case us:
        e.clip(`evenodd`);
        break;
      case ds:
        e.save();
        break;
      case fs:
        e.restore();
        break;
      case ps:
        (e.translate(i[u], i[u + 1]), (u += 2));
        break;
      case ms:
        (e.rotate(i[u]), (u += 1));
        break;
      case hs:
        (e.scale(i[u], i[u + 1]), (u += 2));
        break;
      case vs:
        (e.transform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case gs:
        (e.setTransform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case _s:
        e.resetTransform();
        break;
      case ys:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case bs:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case xs:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case Ss:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Cs: {
        let t = i[u],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 1 + e]);
        (e.setLineDash(n), (u += 1 + t));
        break;
      }
      case ws:
        ((c[Ps[i[u]]] = i[u + 1]), (u += 2));
        break;
      case Ts:
        ((c[Ps[i[u]]] = a[i[u + 1]]), (u += 2));
        break;
      case Ds:
        ((c[Ps[i[u]]] = i[u + 1] !== 0), (u += 2));
        break;
      case Es:
        ((c[Ps[i[u]]] = o[i[u + 1]]), (u += 2));
        break;
      case Os:
        ((o[i[u]] = e.createLinearGradient(
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
        )),
          (u += 5));
        break;
      case ks:
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
      case Ns:
        ((o[i[u]] = e.createConicGradient(i[u + 1], i[u + 2], i[u + 3])),
          (u += 4));
        break;
      case As:
        (o[i[u]]?.addColorStop(i[u + 1], a[i[u + 2]]), (u += 3));
        break;
      default:
        throw Error(`site art replay: bad opcode ${t} at ${u - 1}`);
    }
  }
  return ((n.i = u), !0);
}
function Ws(e, t, n, r, i, a) {
  (e.save(),
    e.translate(t, n),
    e.beginPath(),
    e.rect(-a, -a, r + a * 2, i + a * 2),
    e.clip());
}
var Gs = [
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
  Ks = 4e3;
function qs(e) {
  let t = ``;
  for (let n = 0; n < Gs.length; n++) t += String(e[Gs[n]]) + ``;
  return t;
}
function Js(e, t) {
  let n = {};
  for (let r = 0; r < 9; r++) n[Go[r]] = e[t + r];
  return n;
}
function Ys(e, t) {
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
