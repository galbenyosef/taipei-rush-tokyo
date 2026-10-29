// tokyo/assets/engine-wUBYs8Z3 20 — vite__mapdeps
// Lines 6952-7217 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function zo() {
  if (!Fo) {
    Fo = !0;
    try {
      location.reload();
    } catch {}
  }
}
function Bo() {
  Io === `due` &&
    Mo === `playing` &&
    No &&
    ((Io = `shown`),
    Vo(
      No,
      {
        zh: `網路不穩，部分街區未載入 — 重新整理可修復`,
        en: `Unstable network: some districts did not load — refreshing the page can fix it`,
      },
      8,
    ));
}
function Vo(e, t, n) {
  try {
    e.events.emit(`notify`, { text: t, duration: n, kind: `info` });
  } catch {}
}
async function Ho() {
  {
    let e = t(
      () => import(`./boot-DzAWftFx.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    );
    (e.catch(() => {}),
      await t(
        () => import(`./landing-BF9tCPAp.js`).then((e) => e.runLanding()),
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
function Uo(e) {
  t(
    () => import(`./coordinator-idJVRLyI.js`).then((t) => t.installCloud(e)),
    __vite__mapDeps([15, 2, 3, 7, 8, 9, 1, 4, 5, 6, 11, 12]),
  ).catch(() => {});
}
async function Wo() {
  await t(
    () => import(`./coordinator-idJVRLyI.js`).then((e) => e.flushDeparture()),
    __vite__mapDeps([15, 2, 3, 7, 8, 9, 1, 4, 5, 6, 11, 12]),
  ).catch(() => {});
}
function Go(e, n) {
  t(
    () =>
      import(`./ui-wGTeK-Dn.js`).then((t) => {
        (n?.focus(), t.showCloudPanel(e));
      }),
    __vite__mapDeps([16, 2, 3, 1, 4, 5, 6, 7, 8, 9, 11, 15, 12, 13, 14, 17]),
  ).catch(() => {});
}
function Ko(e, n) {
  t(
    () => import(`./ui-wGTeK-Dn.js`).then((t) => t.mountCloudSettings(e, n)),
    __vite__mapDeps([16, 2, 3, 1, 4, 5, 6, 7, 8, 9, 11, 15, 12, 13, 14, 17]),
  ).catch(() => {});
}
function qo(e, n) {
  t(
    () => import(`./ui-wGTeK-Dn.js`).then((t) => t.mountCloudTitle(e, n)),
    __vite__mapDeps([16, 2, 3, 1, 4, 5, 6, 7, 8, 9, 11, 15, 12, 13, 14, 17]),
  ).catch(() => {});
}
function Jo(e, n) {
  t(
    () => import(`./ui-wGTeK-Dn.js`).then((t) => t.mountCloudPhoneStatus(e, n)),
    __vite__mapDeps([16, 2, 3, 1, 4, 5, 6, 7, 8, 9, 11, 15, 12, 13, 14, 17]),
  ).catch(() => {});
}
var Yo = class extends Error {
    label;
    ms;
    name = `DeadlineError`;
    constructor(e, t) {
      (super(`${e}: no answer after ${t} ms`), (this.label = e), (this.ms = t));
    }
  },
  Xo = 15e3;
function Zo(e, t, n = `await`, r) {
  return new Promise((i, a) => {
    let o = !1,
      s = setTimeout(() => {
        if (!o) {
          if (((o = !0), !r)) return a(new Yo(n, t));
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
var Qo = (e, t, n) => (e < t ? t : e > n ? n : e),
  $o = (e, t, n) => e + (t - e) * n,
  es = (e, t, n) => Qo((n - e) / (t - e), 0, 1),
  ts = (e, t, n) => {
    let r = es(e, t, n);
    return r * r * (3 - 2 * r);
  },
  ns = (e, t) => 1 - Math.exp(-e * t),
  rs = (e, t, n, r) => $o(e, t, ns(n, r));
function is(e) {
  return (
    (e = (e + Math.PI) % (Math.PI * 2)),
    e < 0 && (e += Math.PI * 2),
    e - Math.PI
  );
}
function as(e, t, n, r) {
  return e + is(t - e) * ns(n, r);
}
(new Te(), new Te(), new Te(), new we(), new Ae(), new je());
function os(
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
function ss(e, n) {
  t(
    () =>
      import(`./profile-DIg-QXlP.js`).then((t) => {
        e.isConnected && t.mountNameRow(e, n);
      }),
    __vite__mapDeps([18, 8, 13, 2, 11, 17, 19]),
  ).catch(() => {});
}
function cs(e, n) {
  t(
    () =>
      import(`./profile-DIg-QXlP.js`).then((t) => {
        e.isConnected && t.mountNameView(e, n);
      }),
    __vite__mapDeps([18, 8, 13, 2, 11, 17, 19]),
  ).catch(() => {});
}
function ls(e, n, r) {
  let i = !0,
    a;
  return (
    t(
      () =>
        import(`./phone-T88fC2hD.js`).then((t) => {
          i && n.isConnected && (a = t.mountSocialApp(e, n, r));
        }),
      __vite__mapDeps([20, 18, 8, 13, 2, 11, 17, 19]),
    ).catch(() => {}),
    () => {
      ((i = !1), a?.());
    }
  );
}
function us(e, n) {
  let r = !0,
    i;
  return (
    t(
      () =>
        import(`./phone-T88fC2hD.js`).then((t) => {
          r && (i = t.startSummaryPolling(e, n));
        }),
      __vite__mapDeps([20, 18, 8, 13, 2, 11, 17, 19]),
    ).catch(() => {}),
    () => {
      ((r = !1), i?.());
    }
  );
}
var ds = e({ GpuAccount: () => Ss }),
  fs = {
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
function ps(e) {
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
        ? hs(e - 37808)
        : e >= 37840 && e <= 37853
          ? hs(e - 37840)
          : 8;
}
