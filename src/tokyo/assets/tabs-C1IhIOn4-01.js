// tokyo/assets/tabs-C1IhIOn4 01 — promise
// Lines 1-143 of readable/tokyo/assets/tabs-C1IhIOn4.pretty.js (statement-aligned).
var CLIENT_ID = Math.random().toString(36).slice(2),
  cloudChannel,
  channelListeners = new Set();
function ensureChannel() {
  return cloudChannel || typeof BroadcastChannel > `u`
    ? cloudChannel
    : ((cloudChannel = new BroadcastChannel(`taipei-gta-cloud`)),
      cloudChannel.unref?.(),
      (cloudChannel.onmessage = (e) => {
        for (let t of channelListeners)
          try {
            t(e.data);
          } catch {}
      }),
      cloudChannel);
}
function subscribeChannel(e) {
  return (
    ensureChannel(),
    channelListeners.add(e),
    () => {
      channelListeners.delete(e);
    }
  );
}
function getLockManager() {
  return typeof navigator < `u` ? navigator.locks : void 0;
}
var releaseLock,
  ownerCity,
  playLockName = (e) => `taipei-gta-play:${e}`;
function acquirePlayLock(e) {
  let t = getLockManager();
  return t?.request
    ? ownerCity === e
      ? Promise.resolve(`owner`)
      : new Promise((n) => {
          t.request(playLockName(e), { ifAvailable: !0 }, (t) => {
            if (!t) {
              n(`duplicate`);
              return;
            }
            return (
              (ownerCity = e),
              n(`owner`),
              new Promise((e) => {
                releaseLock = e;
              })
            );
          }).catch(() => n(`unsupported`));
        })
    : Promise.resolve(`unsupported`);
}
function requestTakeover(e) {
  let t = getLockManager();
  if (!t?.request) return Promise.resolve();
  let n = () => ensureChannel()?.postMessage({ type: `takeover`, city: e });
  n();
  let i = setInterval(n, 1e3);
  return new Promise((n) => {
    t.request(
      playLockName(e),
      (t) => (
        clearInterval(i),
        (ownerCity = t ? e : void 0),
        n(),
        new Promise((e) => {
          releaseLock = e;
        })
      ),
    ).catch(() => {
      (clearInterval(i), n());
    });
  });
}
var takeoverHandler,
  takeoverInstalled = !1;
function installTakeoverHandler(e) {
  if (((takeoverHandler = e), takeoverInstalled)) return;
  takeoverInstalled = !0;
  let t = !1;
  subscribeChannel((e) => {
    e.type === `takeover` &&
      e.city === ownerCity &&
      !t &&
      takeoverHandler &&
      ((t = !0),
      Promise.resolve(takeoverHandler())
        .catch(() => {})
        .finally(() => {
          t = !1;
        }));
  });
}
var released = !1;
function releasePlayLock() {
  ((ownerCity = void 0), (released = !0), releaseLock?.(), (releaseLock = void 0));
}
function isReleased() {
  return released;
}
function broadcastFlush(t) {
  let n = ensureChannel();
  if (!n) return Promise.resolve(!0);
  let a = `${CLIENT_ID}-${Date.now()}`,
    o = new Set(),
    s = new Map();
  return new Promise((e) => {
    let r = !1,
      c = !0,
      l = (t) => {
        r || ((r = !0), d(), clearTimeout(f), clearTimeout(p), e(t));
      },
      u = () => {
        !c &&
          [...o].every((e) => s.has(e)) &&
          l([...s.values()].every(Boolean));
      },
      d = subscribeChannel((e) => {
        (e.type === `flush-ack` && e.id === a && o.add(e.from),
          e.type === `flush-done` &&
            e.id === a &&
            (o.add(e.from), s.set(e.from, e.ok), u()));
      }),
      f = setTimeout(() => {
        ((c = !1), u());
      }, 400),
      p = setTimeout(() => l(!1), t);
    n.postMessage({ type: `flush`, id: a });
  });
}
function respondToFlush(t) {
  subscribeChannel((n) => {
    if (n.type !== `flush`) return;
    let i = ensureChannel();
    (i?.postMessage({ type: `flush-ack`, id: n.id, from: CLIENT_ID }),
      t()
        .catch(() => !1)
        .then((t) =>
          i?.postMessage({ type: `flush-done`, id: n.id, from: CLIENT_ID, ok: t }),
        ));
  });
}
