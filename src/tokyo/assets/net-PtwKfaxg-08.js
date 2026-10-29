// tokyo/assets/net-PtwKfaxg 08 — presence
// Lines 3858-4201 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function Ht(e) {
  let t = JSON.stringify({ type: e.type, sdp: e.sdp });
  return `TGTA1:` + btoa(unescape(encodeURIComponent(t)));
}
function Ut(e, t) {
  let n = e.trim();
  if (!n.startsWith(`TGTA1:`))
    throw Error(`not a 《臺北狂飆》 connection code`);
  let r = JSON.parse(decodeURIComponent(escape(atob(n.slice(6)))));
  if (r.type !== t || typeof r.sdp != `string`) throw Error(`expected an ${t}`);
  return r;
}
var Wt = { sent: 0, received: 0, joins: 0 },
  Gt = 1e4,
  Kt = 1e4,
  qt = 25e3,
  Jt = class {
    status = `connecting`;
    presence = {};
    onBroadcast;
    onPresence;
    onStatus;
    ws = null;
    ref = 0;
    joinRef = ``;
    replies = new Map();
    heartbeat = null;
    retry = null;
    attempts = 0;
    tracked = null;
    closed = !1;
    topic;
    url;
    key;
    token;
    presenceSeen = !1;
    presenceWaiters = [];
    constructor(e, t, n, r = ``) {
      ((this.url = e),
        (this.topic = `realtime:${t}`),
        (this.key = n),
        (this.token = r));
    }
    async connect() {
      if (this.closed) throw Error(`realtime: channel closed`);
      (this.retry && clearTimeout(this.retry),
        (this.retry = null),
        this.heartbeat && clearInterval(this.heartbeat),
        (this.heartbeat = null),
        (this.presenceSeen = !1));
      for (let e of Object.keys(this.presence)) delete this.presence[e];
      if (this.ws) {
        let e = this.ws;
        ((this.ws = null), this.rejectReplies(e), e.close());
      }
      let e = new WebSocket(this.url);
      ((this.ws = e),
        (e.onmessage = (t) => {
          !this.closed && e === this.ws && this.receive(t.data);
        }),
        (e.onclose = () => this.dropped(e)),
        (e.onerror = () => {}));
      try {
        if (
          (await _(
            new Promise((t, n) => {
              (e.addEventListener(`open`, () => t(), { once: !0 }),
                e.addEventListener(
                  `close`,
                  () => n(Error(`realtime: socket closed`)),
                  { once: !0 },
                ));
            }),
            Gt,
            `realtime open`,
          ),
          this.closed || this.ws !== e)
        )
          throw Error(`realtime: connection replaced`);
        this.joinRef = String(++this.ref);
        let t = await this.push(
          `phx_join`,
          {
            config: {
              broadcast: { self: !1, ack: !1 },
              presence: { key: this.key, enabled: !0 },
              postgres_changes: [],
              private: !1,
            },
            ...(this.token ? { access_token: this.token } : {}),
          },
          this.joinRef,
        );
        if (this.closed || this.ws !== e)
          throw Error(`realtime: connection replaced`);
        if (t.payload.status !== `ok`)
          throw Error(
            `realtime: join refused (${JSON.stringify(t.payload).slice(0, 200)})`,
          );
        ((this.attempts = 0),
          Wt.joins++,
          this.setStatus(`joined`),
          this.heartbeat && clearInterval(this.heartbeat),
          (this.heartbeat = setInterval(() => this.beat(), qt)),
          this.tracked && this.sendPresence(this.tracked));
      } catch (t) {
        try {
          e.close();
        } catch {}
        throw t;
      }
    }
    presenceState(e = 3e3) {
      return this.closed || this.presenceSeen
        ? Promise.resolve(this.presence)
        : new Promise((t) => {
            let n = () => {
                (clearTimeout(r), t(this.presence));
              },
              r = setTimeout(() => {
                ((this.presenceWaiters = this.presenceWaiters.filter(
                  (e) => e !== n,
                )),
                  t(this.presence));
              }, e);
            this.presenceWaiters.push(n);
          });
    }
    send(e, t) {
      (this.status === `joined` && Wt.sent++,
        this.raw(`broadcast`, { type: `broadcast`, event: e, payload: t }));
    }
    track(e) {
      ((this.tracked = e), this.status === `joined` && this.sendPresence(e));
    }
    setToken(e) {
      ((this.token = e),
        this.status === `joined` &&
          e &&
          this.raw(`access_token`, { access_token: e }));
    }
    close() {
      if (!this.closed) {
        ((this.closed = !0),
          this.heartbeat && clearInterval(this.heartbeat),
          this.retry && clearTimeout(this.retry));
        try {
          (this.status === `joined` && this.raw(`phx_leave`, {}),
            this.ws?.close());
        } catch {}
        (this.ws && this.rejectReplies(this.ws),
          (this.ws = null),
          (this.heartbeat = this.retry = null));
        for (let e of this.presenceWaiters.splice(0)) e();
        this.setStatus(`closed`);
      }
    }
    sendPresence(e) {
      (Wt.sent++,
        this.raw(`presence`, { type: `presence`, event: `track`, payload: e }));
    }
    raw(e, t, n = String(++this.ref)) {
      let r = this.ws;
      if (r && r.readyState === WebSocket.OPEN) {
        let i = e === `heartbeat` ? `phoenix` : this.topic;
        r.send(
          JSON.stringify({
            topic: i,
            event: e,
            payload: t,
            ref: n,
            join_ref: i === `phoenix` ? null : this.joinRef,
          }),
        );
      }
      return n;
    }
    push(e, t, n) {
      let r = this.ws;
      if (this.closed || !r || r.readyState !== WebSocket.OPEN)
        return Promise.reject(Error(`realtime: socket closed`));
      let i = n ?? String(++this.ref);
      return _(
        new Promise((n, a) => {
          this.replies.set(i, { ws: r, resolve: n, reject: a });
          try {
            this.raw(e, t, i);
          } catch (e) {
            a(e instanceof Error ? e : Error(String(e)));
          }
        }),
        Kt,
        `realtime ${e}`,
      ).finally(() => this.replies.delete(i));
    }
    rejectReplies(e) {
      for (let [t, n] of this.replies)
        n.ws === e &&
          (this.replies.delete(t), n.reject(Error(`realtime: socket closed`)));
    }
    beat() {
      let e = this.ws;
      this.push(`heartbeat`, {}).catch(() => {
        try {
          e === this.ws && e?.close();
        } catch {}
      });
    }
    receive(e) {
      if (typeof e != `string`) return;
      let t;
      try {
        t = JSON.parse(e);
      } catch {
        return;
      }
      if (t.event === `phx_reply` && t.ref && this.replies.has(t.ref)) {
        this.replies.get(t.ref).resolve(t);
        return;
      }
      if (t.topic !== this.topic) return;
      let n = t.payload ?? {};
      switch (t.event) {
        case `broadcast`:
          (Wt.received++,
            typeof n.event == `string` &&
              n.payload &&
              typeof n.payload == `object` &&
              this.onBroadcast?.(n.event, n.payload));
          break;
        case `presence_state`:
          Wt.received++;
          for (let e of Object.keys(this.presence)) delete this.presence[e];
          (this.applyJoins(n), (this.presenceSeen = !0));
          for (let e of this.presenceWaiters.splice(0)) e();
          this.onPresence?.(this.presence);
          break;
        case `presence_diff`:
          (Wt.received++,
            this.applyLeaves(n.leaves ?? {}),
            this.applyJoins(n.joins ?? {}),
            this.onPresence?.(this.presence));
          break;
        case `phx_error`:
        case `phx_close`:
          this.closed || this.ws?.close();
      }
    }
    applyJoins(e) {
      for (let [t, n] of Object.entries(e)) {
        let e = Array.isArray(n?.metas) ? n.metas : [],
          r = (this.presence[t] ??= []);
        for (let t of e)
          r.some((e) => e.phx_ref && e.phx_ref === t.phx_ref) || r.push(t);
      }
    }
    applyLeaves(e) {
      for (let [t, n] of Object.entries(e)) {
        let e = new Set((n?.metas ?? []).map((e) => e.phx_ref)),
          r = (this.presence[t] ?? []).filter((t) => !e.has(t.phx_ref));
        r.length ? (this.presence[t] = r) : delete this.presence[t];
      }
    }
    dropped(e) {
      if (e !== this.ws) return;
      ((this.ws = null),
        this.heartbeat && clearInterval(this.heartbeat),
        (this.heartbeat = null),
        this.rejectReplies(e),
        (this.presenceSeen = !1));
      for (let e of Object.keys(this.presence)) delete this.presence[e];
      if (this.closed) return;
      this.setStatus(`retrying`);
      let t = Math.min(1e4, 1e3 * 2 ** this.attempts++);
      this.retry = setTimeout(() => {
        ((this.retry = null), this.closed || this.connect().catch(() => {}));
      }, t);
    }
    setStatus(e) {
      this.status !== e && ((this.status = e), this.onStatus?.(e));
    }
  },
  Yt = () => !!g.url && !!g.publishableKey;
function Xt() {
  return `${g.url.replace(/^http/, `ws`)}/realtime/v1/websocket?apikey=${encodeURIComponent(g.publishableKey)}&vsn=1.0.0`;
}
var Zt = ``;
function Qt() {
  let e = _e();
  if (e?.user_id) return e.user_id;
  if (Zt) return Zt;
  try {
    ((Zt = localStorage.getItem(`tgta-net-id`) ?? ``),
      /^[0-9a-f-]{36}$/.test(Zt) ||
        ((Zt = crypto.randomUUID()), localStorage.setItem(`tgta-net-id`, Zt)));
  } catch {
    Zt ||= `b` + Math.floor(Math.random() * 0x2386f26fc10000).toString(36);
  }
  return Zt;
}
async function $t() {
  let e = _e();
  if (!e || e.expires_at < Date.now() / 1e3 + 30) return null;
  try {
    let t = await fetch(`/api/net/turn`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${e.access_token}`,
      },
      body: `{}`,
      signal: AbortSignal.timeout(5e3),
    });
    if (!t.ok) return null;
    let n = await t.json();
    if (!Array.isArray(n?.iceServers) || !n.iceServers.length) return null;
    let r = typeof n.ttl == `number` && n.ttl > 0 ? n.ttl : 3600;
    return { servers: n.iceServers, ttlS: Math.min(86400, r) };
  } catch {
    return null;
  }
}
var en = new TextEncoder(),
  tn = new TextDecoder(`utf-8`, { fatal: !0 }),
  nn = (e) => e === `ambient-state` || e === `police-state`;
function rn(e, t, n = !1) {
  if (!Number.isInteger(t) || t < 0 || t > 7 || !nn(e.t)) return null;
  let r = JSON.stringify(e);
  if (r.length > 1200) return null;
  let i = en.encode(r);
  if (i.length > 1200) return null;
  let a = new Uint8Array(i.length + 2);
  return ((a[0] = n ? 4 : 3), (a[1] = t), a.set(i, 2), a);
}
function an(e) {
  if (e.length < 4 || e.length > 1202 || e[1] > 7 || (e[0] !== 3 && e[0] !== 4))
    return null;
  try {
    let t = JSON.parse(tn.decode(e.subarray(2)));
    return t && !Array.isArray(t) && nn(t.t) ? t : null;
  } catch {
    return null;
  }
}
