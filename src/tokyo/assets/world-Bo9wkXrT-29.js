// tokyo/assets/world-Bo9wkXrT 29 — clip
// Lines 8739-8989 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function Ms(e) {
  return { i: 0, grads: Array(e.grads).fill(null) };
}
var Ns = typeof performance < `u` ? () => performance.now() : () => Date.now();
function Ps(e, t, n, r = 0) {
  let i = t.nums,
    a = t.strs,
    o = n.grads,
    s = i.length,
    c = e,
    l = r > 0 ? Ns() : 0,
    u = n.i,
    d = 0;
  for (; u < s;) {
    if (r > 0 && !(++d & 7) && Ns() - l >= r) return ((n.i = u), !1);
    let t = i[u++];
    switch (t) {
      case Lo:
        (e.fillRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Ro:
        (e.strokeRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case zo:
        (e.clearRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Bo:
        e.beginPath();
        break;
      case Vo:
        e.closePath();
        break;
      case Ho:
        (e.moveTo(i[u], i[u + 1]), (u += 2));
        break;
      case Uo:
        (e.lineTo(i[u], i[u + 1]), (u += 2));
        break;
      case Wo:
        (e.quadraticCurveTo(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Go:
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
      case Ko:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case qo:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], !0), (u += 5));
        break;
      case Ss:
        (e.arcTo(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case Jo:
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
      case Yo:
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
      case Xo:
        (e.rect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Cs: {
        let t = i[u + 4],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 5 + e]);
        (e.roundRect(i[u], i[u + 1], i[u + 2], i[u + 3], t === 1 ? n[0] : n),
          (u += 5 + t));
        break;
      }
      case Zo:
        e.fill();
        break;
      case Qo:
        e.fill(`evenodd`);
        break;
      case $o:
        e.stroke();
        break;
      case es:
        e.clip();
        break;
      case ts:
        e.clip(`evenodd`);
        break;
      case ns:
        e.save();
        break;
      case rs:
        e.restore();
        break;
      case is:
        (e.translate(i[u], i[u + 1]), (u += 2));
        break;
      case as:
        (e.rotate(i[u]), (u += 1));
        break;
      case os:
        (e.scale(i[u], i[u + 1]), (u += 2));
        break;
      case ls:
        (e.transform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case ss:
        (e.setTransform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case cs:
        e.resetTransform();
        break;
      case us:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case ds:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case fs:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case ps:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case ms: {
        let t = i[u],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 1 + e]);
        (e.setLineDash(n), (u += 1 + t));
        break;
      }
      case hs:
        ((c[Ts[i[u]]] = i[u + 1]), (u += 2));
        break;
      case gs:
        ((c[Ts[i[u]]] = a[i[u + 1]]), (u += 2));
        break;
      case vs:
        ((c[Ts[i[u]]] = i[u + 1] !== 0), (u += 2));
        break;
      case _s:
        ((c[Ts[i[u]]] = o[i[u + 1]]), (u += 2));
        break;
      case ys:
        ((o[i[u]] = e.createLinearGradient(
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
        )),
          (u += 5));
        break;
      case bs:
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
      case ws:
        ((o[i[u]] = e.createConicGradient(i[u + 1], i[u + 2], i[u + 3])),
          (u += 4));
        break;
      case xs:
        (o[i[u]]?.addColorStop(i[u + 1], a[i[u + 2]]), (u += 3));
        break;
      default:
        throw Error(`site art replay: bad opcode ${t} at ${u - 1}`);
    }
  }
  return ((n.i = u), !0);
}
function Fs(e, t, n, r, i, a) {
  (e.save(),
    e.translate(t, n),
    e.beginPath(),
    e.rect(-a, -a, r + a * 2, i + a * 2),
    e.clip());
}
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
  Ls = 4e3;
function Rs(e) {
  let t = ``;
  for (let n = 0; n < Is.length; n++) t += String(e[Is[n]]) + ``;
  return t;
}
function zs(e, t) {
  let n = {};
  for (let r = 0; r < 9; r++) n[Io[r]] = e[t + r];
  return n;
}
function Bs(e, t) {
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
