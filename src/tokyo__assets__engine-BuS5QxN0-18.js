// tokyo__assets__engine-BuS5QxN0 18 — vite__mapdeps
// Lines 6690-6955 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function mo() {
  if (!lo) {
    lo = !0;
    try {
      location.reload();
    } catch {}
  }
}
function ho() {
  uo === `due` &&
    oo === `playing` &&
    so &&
    ((uo = `shown`),
    go(
      so,
      {
        zh: `網路不穩，部分街區未載入 — 重新整理可修復`,
        en: `Unstable network: some districts did not load — refreshing the page can fix it`,
      },
      8,
    ));
}
function go(e, t, n) {
  try {
    e.events.emit(`notify`, { text: t, duration: n, kind: `info` });
  } catch {}
}
async function _o() {
  {
    let e = t(
      () => import(`./boot-C6yF8B4X.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    );
    (e.catch(() => {}),
      await t(
        () => import(`./landing-DfZEUEhC.js`).then((e) => e.runLanding()),
        __vite__mapDeps([10, 4, 2, 5, 6, 1, 3, 7, 8, 11, 12, 13, 14]),
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
function vo(e) {
  t(
    () => import(`./coordinator-R8919moQ.js`).then((t) => t.installCloud(e)),
    __vite__mapDeps([15, 2, 3, 7, 8, 9, 1, 4, 5, 6, 11, 12]),
  ).catch(() => {});
}
async function yo() {
  await t(
    () => import(`./coordinator-R8919moQ.js`).then((e) => e.flushDeparture()),
    __vite__mapDeps([15, 2, 3, 7, 8, 9, 1, 4, 5, 6, 11, 12]),
  ).catch(() => {});
}
function bo(e, n) {
  t(
    () =>
      import(`./ui-Bz5oqxsZ.js`).then((t) => {
        (n?.focus(), t.showCloudPanel(e));
      }),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
function xo(e, n) {
  t(
    () => import(`./ui-Bz5oqxsZ.js`).then((t) => t.mountCloudSettings(e, n)),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
function So(e, n) {
  t(
    () => import(`./ui-Bz5oqxsZ.js`).then((t) => t.mountCloudTitle(e, n)),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
function Co(e, n) {
  t(
    () => import(`./ui-Bz5oqxsZ.js`).then((t) => t.mountCloudPhoneStatus(e, n)),
    __vite__mapDeps([16, 2, 7, 8, 11, 15, 3, 9, 1, 4, 5, 6, 12, 13, 14, 17]),
  ).catch(() => {});
}
var wo = class extends Error {
    label;
    ms;
    name = `DeadlineError`;
    constructor(e, t) {
      (super(`${e}: no answer after ${t} ms`), (this.label = e), (this.ms = t));
    }
  },
  To = 15e3;
function Eo(e, t, n = `await`, r) {
  return new Promise((i, a) => {
    let o = !1,
      s = setTimeout(() => {
        if (!o) {
          if (((o = !0), !r)) return a(new wo(n, t));
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
var Do = (e, t, n) => (e < t ? t : e > n ? n : e),
  Oo = (e, t, n) => e + (t - e) * n,
  ko = (e, t, n) => Do((n - e) / (t - e), 0, 1),
  Ao = (e, t, n) => {
    let r = ko(e, t, n);
    return r * r * (3 - 2 * r);
  },
  jo = (e, t) => 1 - Math.exp(-e * t),
  Mo = (e, t, n, r) => Oo(e, t, jo(n, r));
function No(e) {
  return (
    (e = (e + Math.PI) % (Math.PI * 2)),
    e < 0 && (e += Math.PI * 2),
    e - Math.PI
  );
}
function Po(e, t, n, r) {
  return e + No(t - e) * jo(n, r);
}
(new Te(), new Te(), new Te(), new m(), new Oe(), new ke());
function Fo(
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
function Io(e, n) {
  t(
    () =>
      import(`./profile-BmQKTAov.js`).then((t) => {
        e.isConnected && t.mountNameRow(e, n);
      }),
    __vite__mapDeps([18, 8, 13, 2, 11, 17, 19]),
  ).catch(() => {});
}
function Lo(e, n) {
  t(
    () =>
      import(`./profile-BmQKTAov.js`).then((t) => {
        e.isConnected && t.mountNameView(e, n);
      }),
    __vite__mapDeps([18, 8, 13, 2, 11, 17, 19]),
  ).catch(() => {});
}
function Ro(e, n, r) {
  let i = !0,
    a;
  return (
    t(
      () =>
        import(`./phone-BvNRaOR5.js`).then((t) => {
          i && n.isConnected && (a = t.mountSocialApp(e, n, r));
        }),
      __vite__mapDeps([20, 18, 8, 13, 2, 11, 17, 19]),
    ).catch(() => {}),
    () => {
      ((i = !1), a?.());
    }
  );
}
function zo(e, n) {
  let r = !0,
    i;
  return (
    t(
      () =>
        import(`./phone-BvNRaOR5.js`).then((t) => {
          r && (i = t.startSummaryPolling(e, n));
        }),
      __vite__mapDeps([20, 18, 8, 13, 2, 11, 17, 19]),
    ).catch(() => {}),
    () => {
      ((r = !1), i?.());
    }
  );
}
var Bo = e({ GpuAccount: () => Zo }),
  Vo = {
    33321: 1,
    33323: 2,
    32849: 4,
    32856: 4,
    35905: 4,
    35907: 4,
    36194: 2,
    32854: 2,
    32855: 2,
    32857: 4,
    33325: 2,
    33327: 4,
    34843: 8,
    34842: 8,
    33326: 4,
    33328: 8,
    34837: 16,
    34836: 16,
    35898: 4,
    35901: 4,
    33330: 1,
    33334: 4,
    36220: 4,
    33189: 2,
    33190: 4,
    36012: 4,
    35056: 4,
    36013: 8,
    36168: 1,
    6408: 4,
    6407: 4,
    6409: 1,
    6410: 2,
    6406: 1,
    6402: 4,
    34041: 4,
  };
function Ho(e) {
  return e === 36196 ||
    e === 37492 ||
    e === 37493 ||
    e === 37494 ||
    e === 37495 ||
    e === 33776 ||
    e === 33777 ||
    e === 35916 ||
    e === 35917 ||
    e === 36283 ||
    e === 36284 ||
    e === 35840 ||
    e === 35842
    ? 4
    : e === 35841 || e === 35843
      ? 2
      : e >= 37808 && e <= 37821
        ? Wo(e - 37808)
        : e >= 37840 && e <= 37853
          ? Wo(e - 37840)
          : 8;
}
