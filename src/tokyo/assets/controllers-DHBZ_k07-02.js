// tokyo/assets/controllers-DHBZ_k07 02 — ports
// Lines 125-820 of readable/tokyo/assets/controllers-DHBZ_k07.pretty.js (statement-aligned).
var H = (e) => new Promise((t) => setTimeout(t, e)),
  U = class {
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
          readCloudSync: g,
          writeCloudSync: o,
          clearCloudSync: h,
          backupSave: n,
          isAdopted: a,
          settleAdopted: u,
          readSyncedAt: l,
          writeSyncedAt: c,
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
        a = await fetch(`${f.url}/rest/v1/rpc/${e}`, {
          method: `POST`,
          headers: {
            apikey: f.publishableKey,
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
      let n = ++this.epoch,
        r = this.localVersion;
      ((this.user = e),
        (this.ready = !1),
        (this.blocked = !1),
        (this.retryAt = 0),
        (this.nextUpload = 0),
        (this.acceptedFingerprint = void 0),
        (this.busy = !0),
        this.update({ status: `connecting` }));
      try {
        if (t(this.ports.local())) {
          this.requireUpdate();
          return;
        }
        let i = j(
          await this.rpc(
            `load_save`,
            { p_slot: this.ports.slot ?? `tokyo` },
            e,
          ),
        );
        if (n !== this.epoch) return;
        if (i === void 0) throw Error(`Malformed load`);
        if (t(i?.data) || t(this.ports.local())) {
          this.requireUpdate();
          return;
        }
        if (
          this.ports.loaded &&
          (await this.ports.loaded(i?.data ?? null, async (t) => {
            let n = j(await I(this.rpc(`load_save`, { p_slot: t }, e)));
            if (n === void 0) throw Error(`Malformed load`);
            return n?.data ?? null;
          }),
          n !== this.epoch)
        )
          return;
        let a = this.storage.readCloudSync(),
          o = a && r !== this.localVersion ? { ...a, dirty: !0 } : a,
          s = this.ports.local(),
          c = this.storage.isAdopted?.() === !0,
          l = V(e.user_id, o, s, i);
        if (
          (i &&
            s !== null &&
            !this.ports.merge &&
            R(this.ports.sanitize(s)) === R(this.ports.sanitize(i.data)) &&
            (l = `none`),
          this.ports.merge && i)
        ) {
          let e = this.ports.merge(s, i.data);
          (this.ports.apply(e, !1),
            (l =
              R(this.ports.sanitize(e)) === R(this.ports.sanitize(i.data))
                ? `none`
                : `upload`));
        }
        if (
          ((this.revision = i?.revision ?? 0),
          (this.acceptedFingerprint = i
            ? R(this.ports.sanitize(i.data))
            : void 0),
          (this.ready = !0),
          (this.busy = !1),
          l === `apply` && i)
        ) {
          this.apply(i, c ? `adopted` : `device`);
          return;
        }
        if (
          l === `upload` &&
          i &&
          (!o || o.userId !== e.user_id || o.revision !== i.revision) &&
          !this.storage.backupSave(i.data, !0, `cloud`)
        )
          throw Error(`Backup unavailable`);
        if (
          !this.storage.writeCloudSync({
            userId: e.user_id,
            revision: this.revision,
            dirty: l === `upload`,
          })
        )
          throw Error(`Storage unavailable`);
        (c &&
          this.storage.settleAdopted?.(
            l === `upload` && !i ? `guest_adopted` : void 0,
          ),
          l !== `upload` && this.synced(),
          this.update({ status: l === `upload` ? `dirty` : `saved` }),
          (this.failures = 0),
          (this.failureSince = void 0),
          l === `upload` && (await this.flush()));
      } catch {
        if (n !== this.epoch) return;
        ((this.busy = !1), (this.ready = !1), this.offline());
      }
    }
    markDirty() {
      if (this.blocked || t(this.ports.local())) {
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
          R(this.ports.sanitize(e)) === this.acceptedFingerprint
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
        this.blocked || t(this.ports.local()))
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
        r = R(n);
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
    async flush(e = !1, n = !1) {
      if (this.blocked || t(this.ports.local())) {
        this.blocked || this.requireUpdate();
        return;
      }
      if (n && this.busy && this.ready) {
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
      let r = this.storage.readCloudSync();
      if (!r?.dirty || r.userId !== this.user.user_id) return;
      r.revision > this.revision &&
        ((this.revision = r.revision), (this.acceptedFingerprint = void 0));
      let i = this.epoch,
        a = this.localVersion;
      this.busy = !0;
      try {
        let e = this.ports.local();
        if (e === null) return;
        let r = this.ports.sanitize(e),
          o = R(r);
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
        this.nextUpload = this.now() + L;
        let s = n ? E() : await this.ports.session();
        if (i !== this.epoch) return;
        if (
          !s ||
          s.user_id !== this.user?.user_id ||
          s.expires_at <= Date.now() / 1e3 + 60
        )
          throw Error(`Session unavailable`);
        let c = {
          p_slot: this.ports.slot ?? `tokyo`,
          p_data: r,
          p_base_revision: this.revision,
          p_device_id: null,
          p_device: ee(),
        };
        if (n && new TextEncoder().encode(JSON.stringify(c)).length > 65536)
          throw Error(`Keepalive too large`);
        ((this.inflight = { base: this.revision, fingerprint: o }),
          this.remember(o),
          this.update({ ...this.snapshot }));
        let l = M(await this.rpc(`save_game`, c, s, n));
        if (i !== this.epoch) return;
        if (((this.inflight = void 0), !l)) throw Error(`Malformed save`);
        if (t(this.ports.local()) || (l.status === `conflict` && t(l.data))) {
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
                (n = R(this.ports.sanitize(l.data))));
            } catch {}
          this.acceptedFingerprint = t ? void 0 : n;
          let r =
            a !== this.localVersion ||
            t ||
            (!!this.ports.merge &&
              R(this.ports.sanitize(this.ports.local())) !== n);
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
            t = e ? R(this.ports.sanitize(e.data)) : void 0;
          this.acceptedFingerprint = t;
          let n = this.ports.local();
          if (!this.ports.merge && t !== void 0 && this.ownWrites.includes(t)) {
            let e = R(this.ports.sanitize(n)) !== t || a !== this.localVersion;
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
              : V(
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
      for (; this.busy && Date.now() < e;) await H(25);
      await this.flush(!0, !0);
    }
    async flushNow(e = 8e3) {
      let t = Date.now() + e,
        n = async () => {
          if (this.blocked) return !1;
          if (!this.user) return !this.storage.readCloudSync()?.dirty;
          for (; this.busy && Date.now() < t;) await H(25);
          if (((this.retryAt = 0), !this.ready)) {
            let e = await this.ports.session();
            if (!e || e.user_id !== this.user?.user_id) return !1;
            await this.connect(e);
          }
          for (; this.busy && Date.now() < t;) await H(25);
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
    async acceptExternal(e, n, r = () => {}, i = 8e3) {
      let a = (e) => {
          throw Object.assign(Error(e), { code: e });
        },
        o = j(n),
        s = this.ports.merge;
      if (!o || !s) return a(`invalid_response`);
      let c = this.epoch,
        l = () => {
          (r(),
            (this.epoch !== c || !this.isReadyFor(e)) && a(`cloud_not_ready`));
        };
      l();
      let u = Date.now() + i;
      for (; this.busy && Date.now() < u;) (await H(25), l());
      (l(),
        this.busy && a(`cloud_not_ready`),
        (t(o.data) || t(this.ports.local())) &&
          (this.requireUpdate(), a(`cloud_not_ready`)));
      let d = this.storage.readCloudSync(),
        f = Math.max(
          this.revision,
          d?.userId === e ? d.revision : 0,
          o.revision,
        ),
        p = s(this.ports.local(), o.data),
        m = R(this.ports.sanitize(o.data));
      (this.epoch++,
        (this.inflight = void 0),
        (this.acceptedFingerprint = void 0),
        this.localVersion++);
      try {
        (r(),
          this.ports.apply(p, !1),
          r(),
          this.isReadyFor(e) || a(`cloud_not_ready`));
        let t =
          o.revision < f || R(this.ports.sanitize(this.ports.local())) !== m;
        (this.storage.writeCloudSync({ userId: e, revision: f, dirty: t }) ||
          a(`storage_unavailable`),
          (this.revision = f),
          (this.acceptedFingerprint = o.revision === f ? m : void 0),
          (this.retryAt = 0),
          (this.nextUpload = t ? 0 : this.now() + L),
          (this.failures = 0),
          (this.failureSince = void 0),
          t || this.synced(),
          this.update({ status: t ? `dirty` : `saved` }));
      } catch (t) {
        try {
          if ((r(), this.isReadyFor(e))) {
            let t = this.storage.readCloudSync();
            (t?.userId === e &&
              this.storage.writeCloudSync({ ...t, dirty: !0 }),
              this.update({ status: `dirty` }));
          }
        } catch {}
        if (t && typeof t == `object` && `code` in t) throw t;
        a(`storage_unavailable`);
      }
    }
    async restore(e) {
      if (this.blocked || t(this.ports.local())) {
        this.requireUpdate();
        return;
      }
      let n = s().find((t) => t.id === e);
      if (!n || t(n.data)) return;
      let r =
        this.ports.adopt?.(this.ports.sanitize(n.data)) ??
        this.ports.sanitize(n.data);
      if (
        ((r.lastPlayedAt = new Date(this.now()).toISOString()),
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
        this.ports.apply(r, !1),
        (this.retryAt = 0),
        this.update({ status: this.user ? `dirty` : `local_only` }),
        await this.flush(!0),
        this.ports.reload?.());
    }
    apply(e, n) {
      if (!this.user) return;
      if (t(e.data) || t(this.ports.local())) {
        this.requireUpdate();
        return;
      }
      let r = this.ports.local();
      if (
        r !== null &&
        !this.storage.backupSave(r, !0, n === `adopted` ? `guest` : `device`)
      )
        throw Error(`Backup unavailable`);
      let i = this.storage.readCloudSync(),
        a = this.ports.sanitize(e.data),
        o = this.ports.adopt?.(a) ?? a,
        s = R(this.ports.sanitize(o)) !== R(a);
      if (
        !this.storage.writeCloudSync({
          userId: this.user.user_id,
          revision: e.revision,
          dirty: s,
        })
      )
        throw Error(`Storage unavailable`);
      this.synced();
      try {
        this.ports.apply(o);
      } catch (e) {
        throw (
          i ? this.storage.writeCloudSync(i) : this.storage.clearCloudSync(),
          e
        );
      }
      (n === `adopted` && this.storage.settleAdopted?.(),
        (this.acceptedFingerprint = R(this.ports.sanitize(e.data))),
        this.update({ status: s ? `dirty` : `saved` }),
        (this.failures = 0),
        (this.failureSince = void 0));
    }
  },
  W = `${w}:identities-v1`;
