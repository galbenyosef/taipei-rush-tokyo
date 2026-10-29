// tokyo/assets/net-PtwKfaxg 09 — tokens
// Lines 4202-4296 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var on = class {
    tokens;
    at = -1;
    bytesPerSecond;
    burstBytes;
    constructor(e = 48e3, t = 12e3) {
      ((this.bytesPerSecond = e), (this.burstBytes = t), (this.tokens = t));
    }
    take(e, t) {
      return !(e > 0) ||
        !Number.isFinite(e) ||
        !Number.isFinite(t) ||
        (this.at >= 0 &&
          (this.tokens = Math.min(
            this.burstBytes,
            this.tokens +
              (Math.max(0, t - this.at) * this.bytesPerSecond) / 1e3,
          )),
        (this.at = t),
        e > this.tokens)
        ? !1
        : ((this.tokens -= e), !0);
    }
    reset() {
      ((this.tokens = this.burstBytes), (this.at = -1));
    }
  },
  sn = 16,
  cn = (e, t) => (t === `taipei` ? `net-lobby-${e}` : `net-lobby-${t}-${e}`),
  ln = (e) => {
    let t = 0;
    for (let n = 0; n < e.length; n++) t = (t * 31 + e.charCodeAt(n)) >>> 0;
    return t % sn;
  },
  un = (e) => `net-room-${e}`,
  dn = `23456789ABCDEFGHJKLMNPQRSTUVWXYZ`,
  fn = () => {
    let e = new Uint8Array(6);
    return (crypto.getRandomValues(e), [...e].map((e) => dn[e & 31]).join(``));
  },
  pn = 6e3,
  mn = 3e3,
  hn = 2e4,
  gn = 12e3,
  _n = 3e4,
  vn = 3e3,
  yn = 2500,
  bn = 6e3,
  xn = 5e3,
  Sn = 6e3,
  Cn = 3e5,
  wn = 1e3,
  Tn = 168,
  En = 131072,
  Dn = 1024,
  On = 16384,
  kn = new TextEncoder(),
  An = () =>
    typeof crypto < `u` && `randomUUID` in crypto
      ? crypto.randomUUID()
      : `p` +
        Math.floor(Math.random() * 0x2386f26fc10000).toString(36) +
        Date.now().toString(36),
  K = (e, t = 64) => (typeof e == `string` ? e.slice(0, t) : ``),
  q = (e, t = -1) => (typeof e == `number` && Number.isInteger(e) ? e : t),
  jn = `paste-`,
  Mn = () => Object.assign(Error(`session cancelled`), { name: `AbortError` });
function Nn(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = t.sdp;
  if (n && typeof n == `object`)
    return (n.type !== `offer` && n.type !== `answer`) ||
      typeof n.sdp != `string` ||
      n.sdp.length > 3e4
      ? null
      : { sdp: { type: n.type, sdp: n.sdp } };
  if (t.ice === null) return { ice: null };
  let r = t.ice;
  return !r ||
    typeof r != `object` ||
    typeof r.candidate != `string` ||
    r.candidate.length > 2e3
    ? null
    : {
        ice: {
          candidate: r.candidate,
          sdpMid: typeof r.sdpMid == `string` ? r.sdpMid : null,
          sdpMLineIndex:
            typeof r.sdpMLineIndex == `number` ? r.sdpMLineIndex : null,
          usernameFragment:
            typeof r.usernameFragment == `string` ? r.usernameFragment : null,
        },
      };
}
