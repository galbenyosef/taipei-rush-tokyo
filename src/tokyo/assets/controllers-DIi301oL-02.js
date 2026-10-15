// tokyo/assets/controllers-DIi301oL 02 — ports
// Lines 125-820 of readable/tokyo/assets/controllers-DIi301oL.pretty.js (statement-aligned).
var V = (e) => new Promise((t) => setTimeout(t, e)),
  H = class {
    ports;
    user = null;
    revision = 0;
    epoch = 0;
    localVersion = 0;
    busy = !1;
    ready = !1;
    blocked = !1;
    nextUpload = 0;
    acceptedFingerprint;
    retryAt = 0;
    failures = 0;
    failureSince;
    snapshot = { status: `local_only` };
    listeners = new Set();
    inflight;
    ownWrites = [];
    storage;
    constructor(e) {
      ((this.ports = e),
        (this.storage = e.storage ?? {
          readCloudSync: n,
          writeCloudSync: v,
          clearCloudSync: t,
          backupSave: c,
          isAdopted: l,
          settleAdopted: ee,
          readSyncedAt: te,
          writeSyncedAt: _,
        }));
    }
    state() {
      return this.snapshot;
    }
    protectNewerSave() {
      this.requireUpdate();
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    setPorts(e) {
      Object.assign(this.ports, e);
    }
    connectedTo(e) {
      return (
        this.user?.user_id === e && (this.ready || this.busy) && !this.blocked
      );
    }
    isReadyFor(e) {
      return this.user?.user_id === e && this.ready && !this.blocked;
    }
    now() {
      return this.ports.now?.() ?? Date.now();
    }
    update(e) {
      this.snapshot = {
        ...e,
        busy: this.busy,
        syncedAt: this.storage.readSyncedAt?.(),
      };
      for (let e of this.listeners)
        try {
          e();
        } catch {}
    }
    synced() {
      this.storage.writeSyncedAt?.(this.now());
    }
    remember(e) {
      e &&
        (this.ownWrites = [e, ...this.ownWrites.filter((t) => t !== e)].slice(
          0,
          8,
        ));
    }
    disconnect() {
      (this.epoch++,
        (this.user = null),
        (this.ready = !1),
        (this.blocked = !1),
        (this.busy = !1),
        (this.inflight = void 0),
        (this.acceptedFingerprint = void 0),
        (this.failures = 0),
        (this.failureSince = void 0),
        this.update({ status: `local_only` }));
    }
    async rpc(e, t, n, r = !1) {
      let i = JSON.stringify(t),
        a = await fetch(`${g.url}/rest/v1/rpc/${e}`, {
          method: `POST`,
          headers: {
            apikey: g.publishableKey,
            Authorization: `Bearer ${n.access_token}`,
            "Content-Type": `application/json`,
            "Content-Profile": `api`,
            "Accept-Profile": `api`,
          },
          body: i,
          keepalive:
            r ||
            (e === `save_game` && new TextEncoder().encode(i).length <= 65536),
          signal: AbortSignal.timeout(1e4),
        });
      if (!a.ok) {
        if (a.status === 400) {
          let e = await a.json().catch(() => null),
            n = String(t?.p_slot ?? ``);
          if (e?.message === `invalid_slot`) throw (F.add(n), new N(n));
        }
        throw Error(`RPC offline`);
      }
      return (F.delete(String(t?.p_slot ?? ``)), a.json());
    }
    async connect(e) {
      let t = ++this.epoch,
        n = this.localVersion;
      ((this.user = e),
        (this.ready = !1),
        (this.blocked = !1),
        (this.retryAt = 0),
        (this.nextUpload = 0),
        (this.acceptedFingerprint = void 0),
        (this.busy = !0),
        this.update({ status: `connecting` }));
      try {
        if (f(this.ports.local())) {
          this.requireUpdate();
          return;
        }
        let r = j(
          await this.rpc(
            `load_save`,
            { p_slot: this.ports.slot ?? `tokyo` },
            e,
          ),
        );
        if (t !== this.epoch) return;
        if (r === void 0) throw Error(`Malformed load`);
        if (f(r?.data) || f(this.ports.local())) {
          this.requireUpdate();
          return;
        }
        if (
          this.ports.loaded &&
          (await this.ports.loaded(r?.data ?? null, async (t) => {
            let n = j(await ie(this.rpc(`load_save`, { p_slot: t }, e)));
            if (n === void 0) throw Error(`Malformed load`);
            return n?.data ?? null;
          }),
          t !== this.epoch)
        )
          return;
        let i = this.storage.readCloudSync(),
          a = i && n !== this.localVersion ? { ...i, dirty: !0 } : i,
          o = this.ports.local(),
          s = this.storage.isAdopted?.() === !0,
          c = B(e.user_id, a, o, r);
        if (
          (r &&
            o !== null &&
            !this.ports.merge &&
            L(this.ports.sanitize(o)) === L(this.ports.sanitize(r.data)) &&
            (c = `none`),
          this.ports.merge && r)
        ) {
          let e = this.ports.merge(o, r.data);
          (this.ports.apply(e, !1),
            (c =
              L(this.ports.sanitize(e)) === L(this.ports.sanitize(r.data))
                ? `none`
                : `upload`));
        }
        if (
          ((this.revision = r?.revision ?? 0),
          (this.acceptedFingerprint = r
            ? L(this.ports.sanitize(r.data))
            : void 0),
          (this.ready = !0),
          (this.busy = !1),
          c === `apply` && r)
        ) {
          this.apply(r, s ? `adopted` : `device`);
          return;
        }
        if (
          c === `upload` &&
          r &&
          (!a || a.userId !== e.user_id || a.revision !== r.revision) &&
          !this.storage.backupSave(r.data, !0, `cloud`)
        )
          throw Error(`Backup unavailable`);
        if (
          !this.storage.writeCloudSync({
            userId: e.user_id,
            revision: this.revision,
            dirty: c === `upload`,
          })
        )
          throw Error(`Storage unavailable`);
        (s &&
          this.storage.settleAdopted?.(
            c === `upload` && !r ? `guest_adopted` : void 0,
          ),
          c !== `upload` && this.synced(),
          this.update({ status: c === `upload` ? `dirty` : `saved` }),
          (this.failures = 0),
          (this.failureSince = void 0),
          c === `upload` && (await this.flush()));
      } catch {
        if (t !== this.epoch) return;
        ((this.busy = !1), (this.ready = !1), this.offline());
      }
    }
    markDirty() {
      if (this.blocked || f(this.ports.local())) {
        this.requireUpdate();
        return;
      }
      if (
        this.ready &&
        !this.busy &&
        this.acceptedFingerprint !== void 0 &&
        this.storage.readCloudSync()?.dirty === !1
      ) {
        let e = this.ports.local();
        if (
          e !== null &&
          L(this.ports.sanitize(e)) === this.acceptedFingerprint
        )
          return;
      }
      this.localVersion++;
      let e = this.storage.readCloudSync();
      (e
        ? this.storage.writeCloudSync({ ...e, dirty: !0 })
        : this.user &&
          this.ready &&
          this.storage.writeCloudSync({
            userId: this.user.user_id,
            revision: this.revision,
            dirty: !0,
          }),
        this.user &&
          this.snapshot.status !== `connecting` &&
          this.snapshot.status !== `offline` &&
          this.update({ status: `dirty` }));
    }
    offline() {
      (this.failures++,
        (this.failureSince ??= this.now()),
        (this.retryAt =
          this.now() +
          (F.has(this.ports.slot ?? `tokyo`)
            ? P
            : Math.min(3e5, 5e3 * 2 ** Math.min(this.failures, 6)))),
        this.update({
          status: `offline`,
          offlineNotice:
            this.failures >= 3 || this.now() - this.failureSince > 12e4,
        }));
    }
    requireUpdate() {
      ((this.blocked = !0),
        (this.ready = !1),
        (this.busy = !1),
        this.update({ status: `update_required` }));
    }
    async tick() {
      if (
        (this.snapshot.status === `offline` &&
          !this.snapshot.offlineNotice &&
          this.failureSince !== void 0 &&
          this.now() - this.failureSince > 12e4 &&
          this.update({ ...this.snapshot, offlineNotice: !0 }),
        this.blocked || f(this.ports.local()))
      ) {
        this.blocked || this.requireUpdate();
        return;
      }
      if (!(!this.user || this.busy || this.now() < this.retryAt)) {
        if (!this.ready) {
          let e = this.epoch;
          this.busy = !0;
          try {
            let t = await this.ports.session();
            if (e !== this.epoch) return;
            ((this.busy = !1),
              t && t.user_id === this.user?.user_id
                ? await this.connect(t)
                : this.offline());
          } catch {
            e === this.epoch && this.offline();
          } finally {
            e === this.epoch && (this.busy = !1);
          }
          return;
        }
        await this.flush();
      }
    }
    chainKeepalive() {
      let e = this.inflight;
      if (!e || !this.user) return;
      let t = this.ports.local();
      if (t === null) return;
      let n = this.ports.sanitize(t),
        r = L(n);
      if (r === e.fingerprint) return;
      let i = E();
      if (
        !i ||
        i.user_id !== this.user.user_id ||
        i.expires_at <= Date.now() / 1e3 + 60
      )
        return;
      let a = {
        p_slot: this.ports.slot ?? `tokyo`,
        p_data: n,
        p_base_revision: e.base + 1,
        p_device_id: null,
      };
      new TextEncoder().encode(JSON.stringify(a)).length > 65536 ||
        (this.remember(r), this.rpc(`save_game`, a, i, !0).catch(() => {}));
    }
    async flush(e = !1, t = !1) {
      if (this.blocked || f(this.ports.local())) {
        this.blocked || this.requireUpdate();
        return;
      }
      if (t && this.busy && this.ready) {
        this.chainKeepalive();
        return;
      }
      if (
        !this.user ||
        !this.ready ||
        this.busy ||
        this.now() < this.retryAt ||
        (!e && this.now() < this.nextUpload)
      )
        return;
      let n = this.storage.readCloudSync();
      if (!n?.dirty || n.userId !== this.user.user_id) return;
      n.revision > this.revision &&
        ((this.revision = n.revision), (this.acceptedFingerprint = void 0));
      let i = this.epoch,
        a = this.localVersion;
      this.busy = !0;
      try {
        let e = this.ports.local();
        if (e === null) return;
        let n = this.ports.sanitize(e),
          o = L(n);
        if (
          this.acceptedFingerprint !== void 0 &&
          o === this.acceptedFingerprint
        ) {
          if (
            !this.storage.writeCloudSync({
              userId: this.user.user_id,
              revision: this.revision,
              dirty: !1,
            })
          )
            throw Error(`Storage unavailable`);
          ((this.failures = 0),
            (this.failureSince = void 0),
            (this.retryAt = 0),
            (this.busy = !1),
            this.synced(),
            this.update({ status: `saved` }));
          return;
        }
        this.nextUpload = this.now() + I;
        let s = t ? E() : await this.ports.session();
        if (i !== this.epoch) return;
        if (
          !s ||
          s.user_id !== this.user?.user_id ||
          s.expires_at <= Date.now() / 1e3 + 60
        )
          throw Error(`Session unavailable`);
        let c = {
          p_slot: this.ports.slot ?? `tokyo`,
          p_data: n,
          p_base_revision: this.revision,
          p_device_id: null,
          p_device: r(),
        };
        if (t && new TextEncoder().encode(JSON.stringify(c)).length > 65536)
          throw Error(`Keepalive too large`);
        ((this.inflight = { base: this.revision, fingerprint: o }),
          this.remember(o),
          this.update({ ...this.snapshot }));
        let l = M(await this.rpc(`save_game`, c, s, t));
        if (i !== this.epoch) return;
        if (((this.inflight = void 0), !l)) throw Error(`Malformed save`);
        if (f(this.ports.local()) || (l.status === `conflict` && f(l.data))) {
          this.requireUpdate();
          return;
        }
        if (l.status === `ok`) {
          let e = this.ports.merge ? this.storage.readCloudSync() : null;
          this.revision = Math.max(
            l.revision,
            e?.userId === s.user_id ? e.revision : 0,
          );
          let t = this.revision > l.revision,
            n = o;
          if (this.ports.merge && l.data)
            try {
              (this.ports.apply(
                this.ports.merge(this.ports.local(), l.data),
                !1,
              ),
                (n = L(this.ports.sanitize(l.data))));
            } catch {}
          this.acceptedFingerprint = t ? void 0 : n;
          let r =
            a !== this.localVersion ||
            t ||
            (!!this.ports.merge &&
              L(this.ports.sanitize(this.ports.local())) !== n);
          if (
            !this.storage.writeCloudSync({
              userId: s.user_id,
              revision: this.revision,
              dirty: r,
            })
          )
            throw Error(`Storage unavailable`);
          (this.ports.merge && r && (this.nextUpload = 0),
            (this.failures = 0),
            (this.failureSince = void 0),
            (this.retryAt = 0),
            (this.busy = !1),
            this.synced(),
            this.update({ status: r ? `dirty` : `saved` }));
        } else if (l.status === `conflict`) {
          this.revision = l.revision;
          let e =
              l.data && l.updated_at
                ? {
                    data: l.data,
                    revision: l.revision,
                    updated_at: l.updated_at,
                  }
                : null,
            t = e ? L(this.ports.sanitize(e.data)) : void 0;
          this.acceptedFingerprint = t;
          let n = this.ports.local();
          if (!this.ports.merge && t !== void 0 && this.ownWrites.includes(t)) {
            let e = L(this.ports.sanitize(n)) !== t || a !== this.localVersion;
            if (
              !this.storage.writeCloudSync({
                userId: s.user_id,
                revision: this.revision,
                dirty: e,
              })
            )
              throw Error(`Storage unavailable`);
            ((this.nextUpload = 0),
              (this.failures = 0),
              (this.failureSince = void 0),
              (this.busy = !1),
              this.synced(),
              this.update({ status: e ? `dirty` : `saved` }));
            return;
          }
          if (
            (this.ports.merge &&
              e &&
              this.ports.apply(this.ports.merge(n, e.data), !1),
            (this.ports.merge
              ? `upload`
              : B(
                  s.user_id,
                  { userId: s.user_id, revision: -1, dirty: !0 },
                  n,
                  e,
                )) === `apply` && e)
          )
            this.apply(e, `device`);
          else {
            if (
              e &&
              !this.ports.merge &&
              !this.storage.backupSave(e.data, !0, `cloud`)
            )
              throw Error(`Backup unavailable`);
            if (
              !this.storage.writeCloudSync({
                userId: s.user_id,
                revision: this.revision,
                dirty: !0,
              })
            )
              throw Error(`Storage unavailable`);
            ((this.nextUpload = 0), this.update({ status: `dirty` }));
          }
        } else
          ((this.retryAt = this.now() + l.retry_after_s * 1e3),
            (this.failureSince ??= this.now()),
            this.update({
              status: `offline`,
              offlineNotice: this.now() - this.failureSince > 12e4,
            }));
      } catch {
        i === this.epoch &&
          ((this.inflight = void 0), (this.busy = !1), this.offline());
      } finally {
        i === this.epoch && ((this.busy = !1), (this.inflight = void 0));
      }
    }
    async flushForNavigation() {
      let e = Date.now() + 2800;
      for (; this.busy && Date.now() < e;) await V(25);
      await this.flush(!0, !0);
    }
    async flushNow(e = 8e3) {
      let t = Date.now() + e,
        n = async () => {
          if (this.blocked) return !1;
          if (!this.user) return !this.storage.readCloudSync()?.dirty;
          for (; this.busy && Date.now() < t;) await V(25);
          if (((this.retryAt = 0), !this.ready)) {
            let e = await this.ports.session();
            if (!e || e.user_id !== this.user?.user_id) return !1;
            await this.connect(e);
          }
          for (; this.busy && Date.now() < t;) await V(25);
          for (let e = 0; e < 2; e++) {
            let e = this.storage.readCloudSync();
            if (e && e.userId === this.user?.user_id && !e.dirty && this.ready)
              return !0;
            await this.flush(!0);
          }
          let e = this.storage.readCloudSync();
          return (
            !!e && e.userId === this.user?.user_id && !e.dirty && this.ready
          );
        },
        r;
      try {
        return await Promise.race([
          n().catch(() => !1),
          new Promise((t) => {
            r = setTimeout(() => t(!1), e);
          }),
        ]);
      } finally {
        r !== void 0 && clearTimeout(r);
      }
    }
    async acceptExternal(e, t, n = () => {}, r = 8e3) {
      let i = (e) => {
          throw Object.assign(Error(e), { code: e });
        },
        a = j(t),
        o = this.ports.merge;
      if (!a || !o) return i(`invalid_response`);
      let s = this.epoch,
        c = () => {
          (n(),
            (this.epoch !== s || !this.isReadyFor(e)) && i(`cloud_not_ready`));
        };
      c();
      let l = Date.now() + r;
      for (; this.busy && Date.now() < l;) (await V(25), c());
      (c(),
        this.busy && i(`cloud_not_ready`),
        (f(a.data) || f(this.ports.local())) &&
          (this.requireUpdate(), i(`cloud_not_ready`)));
      let u = this.storage.readCloudSync(),
        d = Math.max(
          this.revision,
          u?.userId === e ? u.revision : 0,
          a.revision,
        ),
        p = o(this.ports.local(), a.data),
        m = L(this.ports.sanitize(a.data));
      (this.epoch++,
        (this.inflight = void 0),
        (this.acceptedFingerprint = void 0),
        this.localVersion++);
      try {
        (n(),
          this.ports.apply(p, !1),
          n(),
          this.isReadyFor(e) || i(`cloud_not_ready`));
        let t =
          a.revision < d || L(this.ports.sanitize(this.ports.local())) !== m;
        (this.storage.writeCloudSync({ userId: e, revision: d, dirty: t }) ||
          i(`storage_unavailable`),
          (this.revision = d),
          (this.acceptedFingerprint = a.revision === d ? m : void 0),
          (this.retryAt = 0),
          (this.nextUpload = t ? 0 : this.now() + I),
          (this.failures = 0),
          (this.failureSince = void 0),
          t || this.synced(),
          this.update({ status: t ? `dirty` : `saved` }));
      } catch (t) {
        try {
          if ((n(), this.isReadyFor(e))) {
            let t = this.storage.readCloudSync();
            (t?.userId === e &&
              this.storage.writeCloudSync({ ...t, dirty: !0 }),
              this.update({ status: `dirty` }));
          }
        } catch {}
        if (t && typeof t == `object` && `code` in t) throw t;
        i(`storage_unavailable`);
      }
    }
    async restore(e) {
      if (this.blocked || f(this.ports.local())) {
        this.requireUpdate();
        return;
      }
      let t = s().find((t) => t.id === e);
      if (!t || f(t.data)) return;
      let n =
        this.ports.adopt?.(this.ports.sanitize(t.data)) ??
        this.ports.sanitize(t.data);
      if (
        ((n.lastPlayedAt = new Date(this.now()).toISOString()),
        this.ports.local() !== null &&
          !this.storage.backupSave(this.ports.local(), !1, `device`))
      )
        throw Error(`Backup unavailable`);
      if (
        this.user &&
        !this.storage.writeCloudSync({
          userId: this.user.user_id,
          revision: this.storage.readCloudSync()?.revision ?? this.revision,
          dirty: !0,
        })
      )
        throw Error(`Storage unavailable`);
      (this.localVersion++,
        this.ports.apply(n, !1),
        (this.retryAt = 0),
        this.update({ status: this.user ? `dirty` : `local_only` }),
        await this.flush(!0),
        this.ports.reload?.());
    }
    apply(e, t) {
      if (!this.user) return;
      if (f(e.data) || f(this.ports.local())) {
        this.requireUpdate();
        return;
      }
      let n = this.ports.local();
      if (
        n !== null &&
        !this.storage.backupSave(n, !0, t === `adopted` ? `guest` : `device`)
      )
        throw Error(`Backup unavailable`);
      let r = this.storage.readCloudSync(),
        i = this.ports.sanitize(e.data),
        a = this.ports.adopt?.(i) ?? i,
        o = L(this.ports.sanitize(a)) !== L(i);
      if (
        !this.storage.writeCloudSync({
          userId: this.user.user_id,
          revision: e.revision,
          dirty: o,
        })
      )
        throw Error(`Storage unavailable`);
      this.synced();
      try {
        this.ports.apply(a);
      } catch (e) {
        throw (
          r ? this.storage.writeCloudSync(r) : this.storage.clearCloudSync(),
          e
        );
      }
      (t === `adopted` && this.storage.settleAdopted?.(),
        (this.acceptedFingerprint = L(this.ports.sanitize(e.data))),
        this.update({ status: o ? `dirty` : `saved` }),
        (this.failures = 0),
        (this.failureSince = void 0));
    }
  },
  U = `${C}:identities-v1`;
