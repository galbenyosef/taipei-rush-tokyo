// tokyo/assets/game-y-FF2uWA 03 — style
// Lines 555-885 of readable/tokyo/assets/game-y-FF2uWA.pretty.js (statement-aligned).
function Re(e) {
  let t = F.get(e)?.index ?? 0;
  return t > 0 ? Le[t - 1].id : void 0;
}
var ze = `2027-04-01`,
  I = `tokyoStoryCalendar`,
  Be = (e) => e.m * 40 + e.d;
function Ve(e, t, n) {
  if (t[I]) return null;
  let r = e.get(`mission`) ?? ``,
    i =
      (e.has(`autoplay`) || e.has(`spawn`) || e.has(`cam`)) &&
      !e.has(`onboard`),
    a = Array.isArray(t.completedMissions) && t.completedMissions.includes(n);
  if (!r.startsWith(`tokyo:`) && (i || a)) return null;
  t[I] = 1;
  let o = F.get(r)?.mission;
  return o
    ? `2027-${String(o.date.m).padStart(2, `0`)}-${String(o.date.d).padStart(2, `0`)}`
    : ze;
}
function He(e) {
  let t = e.state.data;
  if (!t[I])
    try {
      (e.time.setDate?.(ze), (t[I] = 1));
    } catch {}
}
var L = {
    zh: `日一二三四五六`,
    ja: `日月火水木金土`,
    en: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  },
  Ue = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
function We(e, t, n) {
  let r = Math.floor(n),
    i = Math.round((n - r) * 60),
    a = `${r}:${String(i).padStart(2, `0`)}`;
  return {
    zh: `${e.m}月${e.d}日（${L.zh[t]}）${a}`,
    en: `${L.en[t]} ${e.d} ${Ue[e.m - 1]}, ${a}`,
    ja: `${e.m}月${e.d}日（${L.ja[t]}）${a}`,
  };
}
function Ge(e, t) {
  let n = e.time.date;
  if (Be(t) <= Be(n)) return 0;
  let r = Date.UTC(n.y, n.m - 1, n.d),
    i = Date.UTC(n.y, t.m - 1, t.d);
  return Math.round((i - r) / 864e5);
}
async function Ke(e, t, n, r) {
  for (let n = 0; n < t; n++) {
    try {
      e.env.setHour(23.95);
    } catch {}
    await r();
    try {
      e.env.setHour(0.05);
    } catch {}
    await r();
  }
  try {
    e.env.setHour(n);
  } catch {}
}
var qe = new Set([
  `environment`,
  `streets`,
  `buildings`,
  `player`,
  `camera`,
  `ui`,
]);
function R(e) {
  return qe.has(e);
}
function Je(e, t, n) {
  let r = n instanceof Error ? n.message : String(n);
  return Error(`Required game system ${t} failed during ${e}: ${r}`, {
    cause: n,
  });
}
var Ye = class {
    lang;
    tr;
    el = null;
    title = null;
    sub = null;
    btn = null;
    constructor(e, t) {
      ((this.lang = e), (this.tr = t));
    }
    build() {
      if (this.el) return;
      let e = document.createElement(`div`);
      ((e.id = `sys-overlay`),
        e.setAttribute(`role`, `alert`),
        e.setAttribute(`aria-live`, `assertive`),
        Object.assign(e.style, {
          position: `fixed`,
          inset: `0`,
          zIndex: `100000`,
          display: `none`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          gap: `10px`,
          background: `rgba(6,7,12,.82)`,
          color: `#f4f1ea`,
          textAlign: `center`,
          font: `600 16px/1.5 "PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif`,
          padding: `env(safe-area-inset-top) 24px env(safe-area-inset-bottom)`,
          backdropFilter: `blur(6px)`,
          WebkitBackdropFilter: `blur(6px)`,
          touchAction: `none`,
          userSelect: `none`,
        }));
      let t = document.createElement(`div`);
      Object.assign(t.style, {
        width: `28px`,
        height: `28px`,
        borderRadius: `50%`,
        border: `3px solid rgba(255,255,255,.18)`,
        borderTopColor: `#e0262f`,
        animation: `sysOvSpin .8s linear infinite`,
        marginBottom: `6px`,
      });
      let n = document.createElement(`style`);
      n.textContent = `@keyframes sysOvSpin{to{transform:rotate(360deg)}}`;
      let r = document.createElement(`div`);
      ((r.style.fontSize = `20px`), (r.style.letterSpacing = `.06em`));
      let i = document.createElement(`div`);
      Object.assign(i.style, {
        fontSize: `12.5px`,
        opacity: `.66`,
        letterSpacing: `.12em`,
        textTransform: `uppercase`,
      });
      let a = document.createElement(`button`);
      (Object.assign(a.style, {
        display: `none`,
        marginTop: `14px`,
        padding: `12px 26px`,
        minHeight: `44px`,
        border: `0`,
        borderRadius: `999px`,
        background: `#e0262f`,
        color: `#fff`,
        font: `inherit`,
        fontSize: `16px`,
        cursor: `pointer`,
      }),
        e.append(n, t, r, i, a),
        document.body.appendChild(e),
        (this.el = e),
        (this.title = r),
        (this.sub = i),
        (this.btn = a));
    }
    show(e, t) {
      try {
        this.build();
        let n = this.lang(),
          r = n === `en`,
          i = (e) => (n === `ja` ? (this.tr?.(e) ?? e.en) : r ? e.en : e.zh);
        ((this.title.textContent = i(e)),
          (this.sub.textContent = n === `ja` ? `` : r ? e.zh : e.en),
          t
            ? ((this.btn.textContent = i(t.label)),
              (this.btn.onclick = t.run),
              (this.btn.style.display = `inline-block`))
            : (this.btn.style.display = `none`),
          (this.el.style.display = `flex`));
      } catch {}
    }
    hide() {
      this.el && (this.el.style.display = `none`);
    }
    get visible() {
      return !!this.el && this.el.style.display !== `none`;
    }
  },
  z = { bat: 0, pistol: 120, smg: 300 },
  Xe = [`taipei`, `tokyo`],
  Ze = `tgta-cheats-history`,
  Qe = Math.PI / 180,
  $e = [
    `tp <x> <z> [heading°] · tp <name> · tp waypoint · places [filter] · pos`,
    `give <bat|pistol|smg> [ammo] · give ammo · give armor [n] · give health · give caffeine [s] · give all`,
    `money [amount] · money set <amount> · heal · wanted <0-5> · region <taipei|tokyo> · clear`,
  ];
function et(e) {
  let t = document.createElement(`div`);
  ((t.id = `cheat-console`),
    Object.assign(t.style, {
      position: `fixed`,
      left: `0`,
      right: `0`,
      top: `0`,
      zIndex: `100000`,
      display: `none`,
      font: `13px/1.45 ui-monospace,Menlo,monospace`,
      color: `#e8e6e1`,
      background: `rgba(8,8,12,.88)`,
      borderBottom: `2px solid #d81f2a`,
      padding: `8px 12px`,
      boxSizing: `border-box`,
    }));
  let n = document.createElement(`div`);
  Object.assign(n.style, {
    maxHeight: `40vh`,
    overflowY: `auto`,
    whiteSpace: `pre-wrap`,
    marginBottom: `6px`,
  });
  let r = document.createElement(`input`);
  ((r.type = `text`),
    (r.spellcheck = !1),
    (r.autocomplete = `off`),
    (r.placeholder = `help · tp · give · money …`),
    Object.assign(r.style, {
      width: `100%`,
      boxSizing: `border-box`,
      font: `inherit`,
      color: `#fff`,
      background: `rgba(255,255,255,.08)`,
      border: `1px solid rgba(255,255,255,.25)`,
      borderRadius: `3px`,
      padding: `5px 8px`,
      outline: `none`,
    }),
    t.append(n, r),
    document.body.appendChild(t));
  let i = (e, t = `info`) => {
      let r = document.createElement(`div`);
      for (
        r.textContent = e,
          r.style.color =
            t === `err` ? `#ff7a7a` : t === `ok` ? `#9fe89f` : `#c9c6bf`,
          n.appendChild(r);
        n.childElementCount > 200;
      )
        n.firstElementChild?.remove();
      n.scrollTop = n.scrollHeight;
    },
    a = [];
  try {
    let e = JSON.parse(localStorage.getItem(Ze) ?? `[]`);
    Array.isArray(e) && (a = e.filter((e) => typeof e == `string`).slice(-50));
  } catch {}
  let o = a.length,
    s = !1,
    c = !0,
    l = (l) => {
      l !== s &&
        ((s = l),
        (t.style.display = l ? `block` : `none`),
        l
          ? ((c = e.input.enabled),
            (e.input.enabled = !1),
            e.input.keys.clear(),
            e.input.unlockPointer(),
            n.childElementCount || i("cheat console — `help` for commands"),
            (o = a.length),
            (r.value = ``),
            setTimeout(() => r.focus(), 0))
          : (r.blur(), (e.input.enabled = c), e.input.lockPointer()));
    },
    u = (t) => {
      let r = t.trim();
      if (r) {
        (i(`> ` + r, `info`),
          a[a.length - 1] !== r && a.push(r),
          (a = a.slice(-50)));
        try {
          localStorage.setItem(Ze, JSON.stringify(a));
        } catch {}
        try {
          tt(e, r, i, () => (n.textContent = ``));
        } catch (e) {
          i(String(e?.message ?? e), `err`);
        }
      }
    };
  (r.addEventListener(`keydown`, (e) => {
    (e.stopPropagation(),
      e.code === `Backquote` || e.code === `Escape`
        ? (e.preventDefault(), l(!1))
        : e.code === `Enter`
          ? (u(r.value), (r.value = ``), (o = a.length))
          : (e.code === `ArrowUp` || e.code === `ArrowDown`) &&
            (e.preventDefault(),
            (o = Math.max(
              0,
              Math.min(a.length, o + (e.code === `ArrowUp` ? -1 : 1)),
            )),
            (r.value = a[o] ?? ``)));
  }),
    window.addEventListener(`keydown`, (t) => {
      if (
        t.code !== `Backquote` ||
        s ||
        t.repeat ||
        e.ui.menuOpen ||
        !e.input.enabled
      )
        return;
      let n = t.target;
      (!n ||
        (n.tagName !== `INPUT` &&
          n.tagName !== `TEXTAREA` &&
          !n.isContentEditable)) &&
        (t.preventDefault(), l(!0));
    }),
    (window.__cheats = { run: u, open: () => l(!0), close: () => l(!1) }),
    console.info("[cheats] console ready — press ` to open"));
}
