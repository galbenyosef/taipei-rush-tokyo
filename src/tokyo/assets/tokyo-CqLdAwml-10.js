// tokyo/assets/tokyo-CqLdAwml 10 — index
// Lines 3981-4157 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Ir(e, t) {
  if (t >= 12) {
    let n = B(`span`, `kc kc-pad kc-dpad`, e);
    return ((n.innerHTML = Fr(Ar[t - 12])), (n.dataset.arm = Ar[t - 12]), n);
  }
  let n = Nr(),
    r = Dr[n][t],
    i = t < 4 ? Or[n][t] : null,
    a = !i && r.length > 1 && !/[☰⧉]/.test(r);
  return B(
    `span`,
    `kc kc-pad${i ? ` kc-` + i : ``}${a ? ` kc-wide` : ``}`,
    e,
    r,
  );
}
function Lr(e, t) {
  let n = kr[t];
  if (n != null) return Ir(e, n);
  let r = t.replace(/\b(LB|RB|LT|RT|L3|R3|A|B|X|Y)\b/g, (e) => Pr(kr[e]));
  return B(`span`, `kc kc-pad kc-wide`, e, r);
}
var Rr = {
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
  zr = new Set(Object.keys(Tr));
function Br(e, t, n, r) {
  if (n === `gamepad`) return Ir(e, Er[t]);
  if (n === `touch`) return B(`span`, `kc kc-touch`, e, Rr[t][r]);
  let i = Tr[t];
  if (i === `LMB` || i === `RMB`) {
    let t = B(`span`, `kc kc-mouse kc-${i.toLowerCase()}`, e);
    return ((t.innerHTML = Vr(i === `LMB`)), t);
  }
  return B(
    `span`,
    `kc${i.length > 1 ? ` kc-wide` : ``}`,
    e,
    i === `Space` && r !== `en` ? (r === `ja` ? `スペース` : `空白鍵`) : i,
  );
}
var Vr = (e) =>
    `<svg viewBox="0 0 16 22" width="12" height="16"><rect x="1.5" y="1.5" width="13" height="19" rx="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 1.5v7" stroke="currentColor" stroke-width="1.4"/>${e ? `<path d="M2.2 8.5V7a5.8 5.8 0 0 1 5.8-5.5v7z" fill="currentColor"/>` : `<path d="M13.8 8.5V7A5.8 5.8 0 0 0 8 1.5v7z" fill="currentColor"/>`}</svg>`,
  Hr =
    /(\{(\w+)\})|((?:按住|按下|按|點擊|點|Press|press|Hold|hold|Tap|tap)\s*)(Space|SPACE|Shift|SHIFT|Tab|TAB|Esc|ESC|ENTER|空白鍵|左鍵|右鍵|上車鍵|LMB|RMB|[A-Z]|[ⒶⒷⓍⓎ])(?![A-Za-z])|\[([A-Z]|Space|Shift|Tab|Esc)\]|([ⒶⒷⓍⓎ])|\{(k|p):([^}]+)\}/g,
  Ur = { "Ⓐ": `jump`, "Ⓑ": `sprint`, "Ⓧ": `interact`, "Ⓨ": `enter` };
((wr.ENTER = `enter`), (wr.上車鍵 = `enter`), Object.assign(wr, Ur));
function Wr(e) {
  Hr.lastIndex = 0;
  let t;
  for (; (t = Hr.exec(e));) {
    let e = t[1]
      ? zr.has(t[2])
        ? t[2]
        : null
      : t[4]
        ? (wr[t[4].toUpperCase()] ?? wr[t[4]] ?? null)
        : t[5]
          ? (wr[t[5].toUpperCase()] ?? null)
          : t[6]
            ? Ur[t[6]]
            : null;
    if (e) return ((Hr.lastIndex = 0), e);
  }
  return null;
}
function Gr(e, t, n, r, i) {
  e.textContent = ``;
  let a = i?.quotes ? /\*([^*\n]+)\*|(「[^」\n]{1,30}」)/g : /\*([^*\n]+)\*/g,
    o = 0,
    s = !1,
    c;
  for (; (c = a.exec(t));)
    (c.index > o && (s = Kr(e, t.slice(o, c.index), n, r) || s),
      (s = Kr(B(`em`, `hl`, e), c[1] ?? c[2], n, r) || s),
      (o = c.index + c[0].length));
  return (o < t.length && (s = Kr(e, t.slice(o), n, r) || s), s);
}
function Kr(e, t, n, r) {
  let i = 0,
    a = !1;
  Hr.lastIndex = 0;
  let o;
  for (; (o = Hr.exec(t));) {
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
          : Lr(e, n)
        : B(`span`, `kc${n.length > 1 ? ` kc-wide` : ``}`, e, n),
        (a = !0),
        (i = o.index + o[0].length));
      continue;
    }
    (o[1]
      ? zr.has(o[2]) && (s = o[2])
      : o[4]
        ? ((c = o[3]), (s = wr[o[4].toUpperCase()] ?? wr[o[4]] ?? null))
        : o[5]
          ? (s = wr[o[5].toUpperCase()] ?? null)
          : o[6] && (s = Ur[o[6]] ?? null),
      s &&
        (o.index > i &&
          e.appendChild(document.createTextNode(t.slice(i, o.index))),
        c && e.appendChild(document.createTextNode(c)),
        Br(e, s, n, r),
        (a = !0),
        (i = o.index + o[0].length)));
  }
  return (
    i < t.length && e.appendChild(document.createTextNode(t.slice(i))),
    a
  );
}
var qr = [
  `#ffb13d`,
  `#35e0ff`,
  `#ff6fb1`,
  `#7dffa8`,
  `#b28dff`,
  `#ff8a5c`,
  `#ffe066`,
];
function Jr(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = (t * 31 + e.charCodeAt(n)) | 0;
  return qr[Math.abs(t) % qr.length];
}
var Yr = null;
function Xr(e) {
  Yr = e;
}
function Zr() {
  return Yr ? Yr.storyLog() : [];
}
function Qr() {
  return Yr ? Yr.storyDate() : null;
}
function $r(e) {
  Yr?.setMarkersVisible(e);
}
