// tokyo/assets/engine-14d5lda2 20 — vite__mapdeps
// Lines 7047-7352 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function ls(e) {
  if (as || os) return;
  let t = Number(B(es)) || 0;
  if (t > 0 && Date.now() - t < ts) {
    (console.warn(
      `[update] ${e}: code chunk unavailable again — not reloading (once per 10 min)`,
    ),
      ss === `none` && (ss = `due`),
      ds());
    return;
  }
  if (
    ((as = !0),
    V(es, String(Date.now())),
    console.warn(
      `[update] ${e}: code chunk unavailable (new deploy or network error) — reloading ${rs === `playing` ? `at the next safe moment` : `now`}`,
    ),
    rs !== `playing` || !is)
  )
    return us();
  let n = is;
  fs(
    n,
    {
      zh: `遊戲已更新，稍後將自動重新載入（進度會保存）`,
      en: `The game was updated — it will reload shortly (progress is saved)`,
    },
    6,
  );
  let r = () => us();
  (n.events.on(`game:pause`, ({ paused: e }) => e && r()),
    n.events.on(`player:respawned`, r),
    n.events.on(`mission:completed`, r),
    n.events.on(`mission:failed`, r),
    n.events.on(`mrt:travel`, r));
  let i = Date.now(),
    a = () => {
      if (os) return;
      let e = !1;
      try {
        e = !!n.missions?.active;
      } catch {
        e = !1;
      }
      if (e || Date.now() - i < ns) return void setTimeout(a, 5e3);
      (fs(
        n,
        {
          zh: `遊戲已更新，重新載入中…`,
          en: `The game was updated — reloading…`,
        },
        3,
      ),
        setTimeout(r, 2500));
    };
  setTimeout(a, 5e3);
}
function us() {
  if (!os) {
    ((os = !0), $o(`update`));
    try {
      location.reload();
    } catch {}
  }
}
function ds() {
  ss === `due` &&
    rs === `playing` &&
    is &&
    ((ss = `shown`),
    fs(
      is,
      {
        zh: `網路不穩，部分街區未載入 — 重新整理可修復`,
        en: `Unstable network: some districts did not load — refreshing the page can fix it`,
      },
      8,
    ));
}
function fs(e, t, n) {
  try {
    e.events.emit(`notify`, { text: t, duration: n, kind: `info` });
  } catch {}
}
var ps = e({
  CLOUD_SAVE: () => !0,
  accountSignedIn: () => xs,
  flushCloudDeparture: () => gs,
  initializeCloud: () => hs,
  mountCloudPhoneStatus: () => bs,
  mountCloudSettings: () => vs,
  mountCloudTitle: () => ys,
  onCloudSessionChange: () => Cs,
  openCloudPanel: () => _s,
  openCloudSignIn: () => Ss,
  prepareCloudBoot: () => ms,
});
async function ms() {
  {
    let e = t(
      () => import(`./boot-BYKah_CW.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    );
    (e.catch(() => {}),
      await t(
        () => import(`./landing-CD9ntJhH.js`).then((e) => e.runLanding()),
        __vite__mapDeps([11, 9, 7, 6, 10, 3, 5, 8, 1, 2, 12, 13, 14, 15]),
      ).catch(() => {}));
    let n = !1,
      r,
      i = e.then((e) => (n ? void 0 : e.hydrateBeforeTravel())).catch(() => {});
    (await Promise.race([
      i,
      new Promise((e) => {
        r = setTimeout(() => {
          ((n = !0), e());
        }, 3e3);
      }),
    ]),
      clearTimeout(r));
  }
}
function hs(e) {
  t(
    () => import(`./coordinator-Brhh9B6T.js`).then((t) => t.installCloud(e)),
    __vite__mapDeps([16, 7, 8, 1, 2, 3, 4, 5, 6, 9, 10, 12, 13]),
  ).catch(() => {});
}
async function gs() {
  await t(
    () => import(`./coordinator-Brhh9B6T.js`).then((e) => e.flushDeparture()),
    __vite__mapDeps([16, 7, 8, 1, 2, 3, 4, 5, 6, 9, 10, 12, 13]),
  ).catch(() => {});
}
function _s(e, n) {
  t(
    () =>
      import(`./ui-P-VyG5rz.js`).then((t) => {
        (n?.focus(), t.showCloudPanel(e));
      }),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function vs(e, n) {
  t(
    () => import(`./ui-P-VyG5rz.js`).then((t) => t.mountCloudSettings(e, n)),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function ys(e, n) {
  t(
    () => import(`./ui-P-VyG5rz.js`).then((t) => t.mountCloudTitle(e, n)),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function bs(e, n) {
  t(
    () => import(`./ui-P-VyG5rz.js`).then((t) => t.mountCloudPhoneStatus(e, n)),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function xs() {
  let e = Pn();
  return !!e && typeof e.access_token == `string` && e.anonymous === !1;
}
function Ss(e, n) {
  t(
    () =>
      import(`./ui-P-VyG5rz.js`).then((t) =>
        t.showCloudPanel(e, `signin`, { notice: { message: n, kind: `info` } }),
      ),
    __vite__mapDeps([
      17, 6, 7, 8, 5, 9, 10, 3, 1, 2, 4, 12, 16, 13, 14, 15, 18,
    ]),
  ).catch(() => {});
}
function Cs(e) {
  t(
    () =>
      import(`./session-DVEw0yxj.js`)
        .then((e) => e.h)
        .then((t) => t.onSessionChange(() => e())),
    __vite__mapDeps([2, 3]),
  ).catch(() => {});
}
var ws = class extends Error {
    label;
    ms;
    name = `DeadlineError`;
    constructor(e, t) {
      (super(`${e}: no answer after ${t} ms`), (this.label = e), (this.ms = t));
    }
  },
  Ts = 15e3;
function Es(e, t, n = `await`, r) {
  return new Promise((i, a) => {
    let o = !1,
      s = setTimeout(() => {
        if (!o) {
          if (((o = !0), !r)) return a(new ws(n, t));
          try {
            i(r());
          } catch (e) {
            a(e);
          }
        }
      }, t);
    Promise.resolve(e).then(
      (e) => {
        o || ((o = !0), clearTimeout(s), i(e));
      },
      (e) => {
        o || ((o = !0), clearTimeout(s), a(e));
      },
    );
  });
}
var Ds = (e, t, n) => (e < t ? t : e > n ? n : e),
  Os = (e, t, n) => e + (t - e) * n,
  ks = (e, t, n) => Ds((n - e) / (t - e), 0, 1),
  As = (e, t, n) => {
    let r = ks(e, t, n);
    return r * r * (3 - 2 * r);
  },
  js = (e, t) => 1 - Math.exp(-e * t),
  Ms = (e, t, n, r) => Os(e, t, js(n, r));
function Ns(e) {
  return (
    (e = (e + Math.PI) % (Math.PI * 2)),
    e < 0 && (e += Math.PI * 2),
    e - Math.PI
  );
}
function Ps(e, t, n, r) {
  return e + Ns(t - e) * js(n, r);
}
(new xe(), new xe(), new xe(), new p(), new S(), new ee());
function Fs(
  e = typeof navigator > `u` ? `` : navigator.userAgent,
  t = typeof navigator > `u` ? 0 : (navigator.maxTouchPoints ?? 0),
) {
  return /iPad|Tablet|Android(?!.*Mobile)/i.test(e) ||
    (/Macintosh/i.test(e) && t > 1)
    ? `tablet`
    : /Mobi|iPhone|iPod/i.test(e)
      ? `mobile`
      : `desktop`;
}
function Is(e, n) {
  t(
    () =>
      import(`./profile-DAhvJU_P.js`).then((t) => {
        e.isConnected && t.mountNameRow(e, n);
      }),
    __vite__mapDeps([19, 2, 3, 14, 6, 7, 12, 18, 20]),
  ).catch(() => {});
}
function Ls(e, n) {
  t(
    () =>
      import(`./profile-DAhvJU_P.js`).then((t) => {
        e.isConnected && t.mountNameView(e, n);
      }),
    __vite__mapDeps([19, 2, 3, 14, 6, 7, 12, 18, 20]),
  ).catch(() => {});
}
function Rs(e, n, r) {
  let i = !0,
    a;
  return (
    t(
      () =>
        import(`./phone-Crnwgx7Y.js`).then((t) => {
          i && n.isConnected && (a = t.mountSocialApp(e, n, r));
        }),
      __vite__mapDeps([21, 2, 3, 19, 14, 6, 7, 12, 18, 20]),
    ).catch(() => {}),
    () => {
      ((i = !1), a?.());
    }
  );
}
function zs(e, n) {
  let r = !0,
    i;
  return (
    t(
      () =>
        import(`./phone-Crnwgx7Y.js`).then((t) => {
          r && (i = t.startSummaryPolling(e, n));
        }),
      __vite__mapDeps([21, 2, 3, 19, 14, 6, 7, 12, 18, 20]),
    ).catch(() => {}),
    () => {
      ((r = !1), i?.());
    }
  );
}
