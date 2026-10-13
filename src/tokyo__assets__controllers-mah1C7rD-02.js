// tokyo__assets__controllers-mah1C7rD 02 — ports
// Lines 125-820 of readable/tokyo__assets__controllers-mah1C7rD.pretty.js (statement-aligned).
var U = (e) => new Promise((t) => setTimeout(t, e)),
  W = class {
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
          readCloudSync: c,
          writeCloudSync: a,
          clearCloudSync: p,
          backupSave: n,
          isAdopted: l,
          settleAdopted: r,
          readSyncedAt: t,
          writeSyncedAt: h,
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
    async rpc(t, n, r, i = !1) {
      let a = JSON.stringify(n),
        o = await fetch(`${e.url}/rest/v1/rpc/${t}`, {
          method: `POST`,
          headers: {
            apikey: e.publishableKey,
            Authorization: `Bearer ${r.access_token}`,
            "Content-Type": `application/json`,
            "Content-Profile": `api`,
            "Accept-Profile": `api`,
          },
          body: a,
          keepalive:
            i ||
            (t === `save_game` && new TextEncoder().encode(a).length <= 65536),
          signal: AbortSignal.timeout(1e4),
        });
      if (!o.ok) {
        if (o.status === 400) {
          let e = await o.json().catch(() => null),
            t = String(n?.p_slot ?? ``);
          if (e?.message === `invalid_slot`) throw (I.add(t), new P(t));
        }
        throw Error(`RPC offline`);
      }
      return (I.delete(String(n?.p_slot ?? ``)), o.json());
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
        if (g(this.ports.local())) {
          this.requireUpdate();
          return;
        }
        let r = M(
          await this.rpc(
            `load_save`,
            { p_slot: this.ports.slot ?? `tokyo` },
            e,
          ),
        );
        if (t !== this.epoch) return;
        if (r === void 0) throw Error(`Malformed load`);
        if (g(r?.data) || g(this.ports.local())) {
          this.requireUpdate();
          return;
        }
        if (
          this.ports.loaded &&
          (await this.ports.loaded(r?.data ?? null, async (t) => {
            let n = M(await L(this.rpc(`load_save`, { p_slot: t }, e)));
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
          c = H(e.user_id, a, o, r);
        if (
          (r &&
            o !== null &&
            !this.ports.merge &&
            z(this.ports.sanitize(o)) === z(this.ports.sanitize(r.data)) &&
            (c = `none`),
          this.ports.merge && r)
        ) {
          let e = this.ports.merge(o, r.data);
          (this.ports.apply(e, !1),
            (c =
              z(this.ports.sanitize(e)) === z(this.ports.sanitize(r.data))
                ? `none`
                : `upload`));
        }
        if (
          ((this.revision = r?.revision ?? 0),
          (this.acceptedFingerprint = r
            ? z(this.ports.sanitize(r.data))
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
      if (this.blocked || g(this.ports.local())) {
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
          z(this.ports.sanitize(e)) === this.acceptedFingerprint
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
          (I.has(this.ports.slot ?? `tokyo`)
            ? F
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
        this.blocked || g(this.ports.local()))
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
        r = z(n);
      if (r === e.fingerprint) return;
      let i = D();
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
      if (this.blocked || g(this.ports.local())) {
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
      let r = this.epoch,
        i = this.localVersion;
      this.busy = !0;
      try {
        let e = this.ports.local();
        if (e === null) return;
        let n = this.ports.sanitize(e),
          a = z(n);
        if (
          this.acceptedFingerprint !== void 0 &&
          a === this.acceptedFingerprint
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
        this.nextUpload = this.now() + R;
        let s = t ? D() : await this.ports.session();
        if (r !== this.epoch) return;
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
          p_device: o(),
        };
        if (t && new TextEncoder().encode(JSON.stringify(c)).length > 65536)
          throw Error(`Keepalive too large`);
        ((this.inflight = { base: this.revision, fingerprint: a }),
          this.remember(a),
          this.update({ ...this.snapshot }));
        let l = N(await this.rpc(`save_game`, c, s, t));
        if (r !== this.epoch) return;
        if (((this.inflight = void 0), !l)) throw Error(`Malformed save`);
        if (g(this.ports.local()) || (l.status === `conflict` && g(l.data))) {
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
            n = a;
          if (this.ports.merge && l.data)
            try {
              (this.ports.apply(
                this.ports.merge(this.ports.local(), l.data),
                !1,
              ),
                (n = z(this.ports.sanitize(l.data))));
            } catch {}
          this.acceptedFingerprint = t ? void 0 : n;
          let r =
            i !== this.localVersion ||
            t ||
            (!!this.ports.merge &&
              z(this.ports.sanitize(this.ports.local())) !== n);
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
            t = e ? z(this.ports.sanitize(e.data)) : void 0;
          this.acceptedFingerprint = t;
          let n = this.ports.local();
          if (!this.ports.merge && t !== void 0 && this.ownWrites.includes(t)) {
            let e = z(this.ports.sanitize(n)) !== t || i !== this.localVersion;
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
              : H(
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
        r === this.epoch &&
          ((this.inflight = void 0), (this.busy = !1), this.offline());
      } finally {
        r === this.epoch && ((this.busy = !1), (this.inflight = void 0));
      }
    }
    async flushForNavigation() {
      let e = Date.now() + 2800;
      for (; this.busy && Date.now() < e;) await U(25);
      await this.flush(!0, !0);
    }
    async flushNow(e = 8e3) {
      let t = Date.now() + e,
        n = async () => {
          if (this.blocked) return !1;
          if (!this.user) return !this.storage.readCloudSync()?.dirty;
          for (; this.busy && Date.now() < t;) await U(25);
          if (((this.retryAt = 0), !this.ready)) {
            let e = await this.ports.session();
            if (!e || e.user_id !== this.user?.user_id) return !1;
            await this.connect(e);
          }
          for (; this.busy && Date.now() < t;) await U(25);
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
        a = M(t),
        o = this.ports.merge;
      if (!a || !o) return i(`invalid_response`);
      let s = this.epoch,
        c = () => {
          (n(),
            (this.epoch !== s || !this.isReadyFor(e)) && i(`cloud_not_ready`));
        };
      c();
      let l = Date.now() + r;
      for (; this.busy && Date.now() < l;) (await U(25), c());
      (c(),
        this.busy && i(`cloud_not_ready`),
        (g(a.data) || g(this.ports.local())) &&
          (this.requireUpdate(), i(`cloud_not_ready`)));
      let u = this.storage.readCloudSync(),
        d = Math.max(
          this.revision,
          u?.userId === e ? u.revision : 0,
          a.revision,
        ),
        f = o(this.ports.local(), a.data),
        p = z(this.ports.sanitize(a.data));
      (this.epoch++,
        (this.inflight = void 0),
        (this.acceptedFingerprint = void 0),
        this.localVersion++);
      try {
        (n(),
          this.ports.apply(f, !1),
          n(),
          this.isReadyFor(e) || i(`cloud_not_ready`));
        let t =
          a.revision < d || z(this.ports.sanitize(this.ports.local())) !== p;
        (this.storage.writeCloudSync({ userId: e, revision: d, dirty: t }) ||
          i(`storage_unavailable`),
          (this.revision = d),
          (this.acceptedFingerprint = a.revision === d ? p : void 0),
          (this.retryAt = 0),
          (this.nextUpload = t ? 0 : this.now() + R),
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
      if (this.blocked || g(this.ports.local())) {
        this.requireUpdate();
        return;
      }
      let t = s().find((t) => t.id === e);
      if (!t || g(t.data)) return;
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
      if (g(e.data) || g(this.ports.local())) {
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
        o = z(this.ports.sanitize(a)) !== z(i);
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
        (this.acceptedFingerprint = z(this.ports.sanitize(e.data))),
        this.update({ status: o ? `dirty` : `saved` }),
        (this.failures = 0),
        (this.failureSince = void 0));
    }
  },
  G = `${C}:identities-v1`;
