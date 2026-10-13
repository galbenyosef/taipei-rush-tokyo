// tokyo__assets__tokyo-BZXVhKTn 07 — index
// Lines 2968-3168 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
function yn() {
  let e = performance.now();
  if (e - vn < 1e3) return _n;
  vn = e;
  try {
    let e = navigator.getGamepads?.()?.find((e) => e && e.connected)?.id ?? ``,
      t =
        /vendor:?\s*([0-9a-f]{4})/i.exec(e)?.[1] ??
        /^([0-9a-f]{4})-[0-9a-f]{4}-/i.exec(e)?.[1] ??
        ``;
    _n =
      t === `054c`
        ? `ps`
        : t === `057e`
          ? `nintendo`
          : t || /xbox|xinput/i.test(e)
            ? `xbox`
            : /dualsense|dualshock|playstation|^wireless controller/i.test(e)
              ? `ps`
              : /nintendo|pro controller|joy-con/i.test(e)
                ? `nintendo`
                : `xbox`;
  } catch {
    _n = `xbox`;
  }
  return _n;
}
function bn(e) {
  return e >= 12 ? `` : (pn[yn()][e] ?? ``);
}
var xn = (e) =>
  `<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><path d="M7.5 1.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z" fill="rgba(255,255,255,.28)"/>${e === `up` ? `<path d="M7.5 1.5h5v6h-5z" fill="#fff"/>` : e === `down` ? `<path d="M7.5 12.5h5v6h-5z" fill="#fff"/>` : e === `left` ? `<path d="M1.5 7.5h6v5h-6z" fill="#fff"/>` : `<path d="M12.5 7.5h6v5h-6z" fill="#fff"/>`}</svg>`;
function Sn(e, t) {
  if (t >= 12) {
    let n = B(`span`, `kc kc-pad kc-dpad`, e);
    return ((n.innerHTML = xn(gn[t - 12])), (n.dataset.arm = gn[t - 12]), n);
  }
  let n = yn(),
    r = pn[n][t],
    i = t < 4 ? mn[n][t] : null,
    a = !i && r.length > 1 && !/[☰⧉]/.test(r);
  return B(
    `span`,
    `kc kc-pad${i ? ` kc-` + i : ``}${a ? ` kc-wide` : ``}`,
    e,
    r,
  );
}
function Cn(e, t) {
  let n = hn[t];
  if (n != null) return Sn(e, n);
  let r = t.replace(/\b(LB|RB|LT|RT|L3|R3|A|B|X|Y)\b/g, (e) => bn(hn[e]));
  return B(`span`, `kc kc-pad kc-wide`, e, r);
}
var wn = {
    sprint: { zh: `衝刺`, en: `Run`, ja: `ダッシュ` },
    jump: { zh: `跳`, en: `Jump`, ja: `ジャンプ` },
    handbrake: { zh: `手煞`, en: `Drift`, ja: `ドリフト` },
    enter: { zh: `上下車`, en: `Ride`, ja: `乗降` },
    interact: { zh: `互動`, en: `Use`, ja: `アクション` },
    attack: { zh: `攻擊`, en: `Attack`, ja: `攻撃` },
    aim: { zh: `瞄準`, en: `Aim`, ja: `エイム` },
    horn: { zh: `喇叭`, en: `Horn`, ja: `クラクション` },
    pause: { zh: `暫停`, en: `Pause`, ja: `ポーズ` },
    map: { zh: `地圖`, en: `Map`, ja: `マップ` },
    phone: { zh: `手機`, en: `Phone`, ja: `スマホ` },
    camera: { zh: `鏡頭`, en: `Cam`, ja: `カメラ` },
    lookBehind: { zh: `回頭`, en: `Back`, ja: `後方` },
    radio: { zh: `電台`, en: `Radio`, ja: `ラジオ` },
    weaponNext: { zh: `換武器`, en: `Swap`, ja: `武器切替` },
    weaponPrev: { zh: `武器`, en: `Weapon`, ja: `武器` },
    reload: { zh: `裝填`, en: `Reload`, ja: `リロード` },
  },
  Tn = new Set(Object.keys(dn));
function En(e, t, n, r) {
  if (n === `gamepad`) return Sn(e, fn[t]);
  if (n === `touch`) return B(`span`, `kc kc-touch`, e, wn[t][r]);
  let i = dn[t];
  if (i === `LMB` || i === `RMB`) {
    let t = B(`span`, `kc kc-mouse kc-${i.toLowerCase()}`, e);
    return ((t.innerHTML = Dn(i === `LMB`)), t);
  }
  return B(
    `span`,
    `kc${i.length > 1 ? ` kc-wide` : ``}`,
    e,
    i === `Space` && r !== `en` ? (r === `ja` ? `スペース` : `空白鍵`) : i,
  );
}
var Dn = (e) =>
    `<svg viewBox="0 0 16 22" width="12" height="16"><rect x="1.5" y="1.5" width="13" height="19" rx="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 1.5v7" stroke="currentColor" stroke-width="1.4"/>${e ? `<path d="M2.2 8.5V7a5.8 5.8 0 0 1 5.8-5.5v7z" fill="currentColor"/>` : `<path d="M13.8 8.5V7A5.8 5.8 0 0 0 8 1.5v7z" fill="currentColor"/>`}</svg>`,
  On =
    /(\{(\w+)\})|((?:按住|按下|按|點擊|點|Press|press|Hold|hold|Tap|tap)\s*)(Space|SPACE|Shift|SHIFT|Tab|TAB|Esc|ESC|ENTER|空白鍵|左鍵|右鍵|上車鍵|LMB|RMB|[A-Z]|[ⒶⒷⓍⓎ])(?![A-Za-z])|\[([A-Z]|Space|Shift|Tab|Esc)\]|([ⒶⒷⓍⓎ])|\{(k|p):([^}]+)\}/g,
  kn = { "Ⓐ": `jump`, "Ⓑ": `sprint`, "Ⓧ": `interact`, "Ⓨ": `enter` };
((un.ENTER = `enter`), (un.上車鍵 = `enter`), Object.assign(un, kn));
function An(e) {
  On.lastIndex = 0;
  let t;
  for (; (t = On.exec(e));) {
    let e = t[1]
      ? Tn.has(t[2])
        ? t[2]
        : null
      : t[4]
        ? (un[t[4].toUpperCase()] ?? un[t[4]] ?? null)
        : t[5]
          ? (un[t[5].toUpperCase()] ?? null)
          : t[6]
            ? kn[t[6]]
            : null;
    if (e) return ((On.lastIndex = 0), e);
  }
  return null;
}
function jn(e, t, n, r, i) {
  e.textContent = ``;
  let a = i?.quotes ? /\*([^*\n]+)\*|(「[^」\n]{1,30}」)/g : /\*([^*\n]+)\*/g,
    o = 0,
    s = !1,
    c;
  for (; (c = a.exec(t));)
    (c.index > o && (s = Mn(e, t.slice(o, c.index), n, r) || s),
      (s = Mn(B(`em`, `hl`, e), c[1] ?? c[2], n, r) || s),
      (o = c.index + c[0].length));
  return (o < t.length && (s = Mn(e, t.slice(o), n, r) || s), s);
}
function Mn(e, t, n, r) {
  let i = 0,
    a = !1;
  On.lastIndex = 0;
  let o;
  for (; (o = On.exec(t));) {
    let s = null,
      c = ``;
    if (o[7]) {
      o.index > i &&
        e.appendChild(document.createTextNode(t.slice(i, o.index)));
      let n = o[8];
      (o[7] === `p`
        ? n === `L` || n === `R`
          ? B(
              `span`,
              `kc kc-pad kc-wide`,
              e,
              r === `zh`
                ? n === `L`
                  ? `左搖桿`
                  : `右搖桿`
                : r === `ja`
                  ? n === `L`
                    ? `左スティック`
                    : `右スティック`
                  : n === `L`
                    ? `L-stick`
                    : `R-stick`,
            )
          : Cn(e, n)
        : B(`span`, `kc${n.length > 1 ? ` kc-wide` : ``}`, e, n),
        (a = !0),
        (i = o.index + o[0].length));
      continue;
    }
    (o[1]
      ? Tn.has(o[2]) && (s = o[2])
      : o[4]
        ? ((c = o[3]), (s = un[o[4].toUpperCase()] ?? un[o[4]] ?? null))
        : o[5]
          ? (s = un[o[5].toUpperCase()] ?? null)
          : o[6] && (s = kn[o[6]] ?? null),
      s &&
        (o.index > i &&
          e.appendChild(document.createTextNode(t.slice(i, o.index))),
        c && e.appendChild(document.createTextNode(c)),
        En(e, s, n, r),
        (a = !0),
        (i = o.index + o[0].length)));
  }
  return (
    i < t.length && e.appendChild(document.createTextNode(t.slice(i))),
    a
  );
}
var Nn = [
  `#ffb13d`,
  `#35e0ff`,
  `#ff6fb1`,
  `#7dffa8`,
  `#b28dff`,
  `#ff8a5c`,
  `#ffe066`,
];
function Pn(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = (t * 31 + e.charCodeAt(n)) | 0;
  return Nn[Math.abs(t) % Nn.length];
}
n.add({
  城市流行: `シティポップ`,
  日本搖滾: `Jロック`,
  偶像流行: `アイドルポップ`,
});
