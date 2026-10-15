// tokyo/assets/client-NeGl0SRK 03 — state
// Lines 398-685 of readable/tokyo/assets/client-NeGl0SRK.pretty.js (statement-aligned).
async function R(r) {
  if (!e.url || !e.publishableKey) throw new v(`not_configured`);
  let i = new URL(e.url);
  if (
    i.protocol !== `https:` &&
    ![`localhost`, `127.0.0.1`].includes(i.hostname)
  )
    throw new v(`not_configured`);
  let g = await d(!1);
  if (!g) throw new v(`session_expired`);
  let _ = g.user_id,
    y = g.anonymous === !1 ? _ : `guest`,
    b = !0,
    x = () => {
      let e = u();
      if (
        !b ||
        r.state.resetting ||
        !e ||
        e.user_id !== _ ||
        (e.anonymous === !1 ? e.user_id : `guest`) !== y ||
        n() !== y
      )
        throw new v(`session_expired`);
      if (t()) throw new v(`wallet_recovery_required`);
    },
    S = () => {
      if ((x(), !h().isReadyFor(_) || !f().isReadyFor(_)))
        throw new v(`cloud_not_ready`);
    };
  S();
  let w = await I();
  try {
    S();
  } catch (e) {
    throw (w(), e);
  }
  let T = () => {},
    E = () => {
      b &&
        ((b = !1),
        (N = void 0),
        (P = void 0),
        T(),
        F === D && (F = void 0),
        w());
    },
    D = () => {
      try {
        x();
      } catch {
        E();
      }
    };
  ((F = D), (T = l(D)), window.addEventListener(`pagehide`, E, { once: !0 }));
  async function O(t, n) {
    S();
    let r = await d(!1);
    if ((S(), !r || r.user_id !== _)) throw new v(`session_expired`);
    let a;
    try {
      a = await fetch(new URL(t, i), {
        method: `POST`,
        cache: `no-store`,
        credentials: `omit`,
        headers: {
          apikey: e.publishableKey,
          "Content-Type": `application/json`,
          Authorization: `Bearer ${r.access_token}`,
          "Content-Profile": `api`,
        },
        body: JSON.stringify(n),
        signal: AbortSignal.timeout(15e3),
      });
    } catch {
      throw (S(), new v(`network_error`));
    }
    S();
    let o = await a.json().catch(() => null);
    if ((S(), !a.ok))
      throw a.status === 401
        ? new v(`session_expired`)
        : new v(
            o?.code === `P0001` && /^[a-z_]{1,64}$/.test(o?.message)
              ? o.message
              : a.status === 429
                ? `rate_limited`
                : `service_unavailable`,
          );
    return o;
  }
  let k = async (e, t) => M(e, await O(`/rest/v1/rpc/${e}`, t), t);
  function A() {
    S();
    let e = r.state.money,
      t = s().shared;
    if (
      !t ||
      t.adopted ||
      r.state.data.marketPending ||
      t.wallet.market?.conflict ||
      Object.keys(t.wallet.market?.lanes ?? {}).length
    )
      throw new v(`wallet_recovery_required`);
    if (e !== o(t.wallet.ntd, c) + (c === `tokyo` ? a(r.state.data) : 0))
      throw new v(`storage_unavailable`);
    return t.wallet.ntd;
  }
  let j = new C(_, k, {
      assertIdentity: S,
      flush: async () => {
        if ((A(), !r.state.saveNow())) throw new v(`storage_unavailable`);
        try {
          await m(_);
        } catch {
          throw (S(), new v(`cloud_not_ready`));
        }
        S();
      },
      accept: async (e) => {
        S();
        try {
          await p(_, e);
        } catch {
          throw (S(), new v(`storage_unavailable`));
        }
        (S(), r.state.refreshSharedWallet());
      },
    }),
    L = Promise.resolve(void 0);
  function R(e) {
    let t = L.catch(() => {}).then(
      () => (
        S(),
        navigator.locks.request(`taipei-rush-market`, async () => {
          S();
          let t = await e();
          return (S(), t);
        })
      ),
    );
    return ((L = t), t);
  }
  let V;
  function H() {
    return (V ??= k(`market_state`, {})
      .then(async (e) => {
        if (e.travel) {
          try {
            await p(_, e.travel);
          } catch {
            throw (S(), new v(`storage_unavailable`));
          }
          (S(), r.state.refreshSharedWallet());
        }
        return e;
      })
      .finally(() => {
        V = void 0;
      }));
  }
  async function U() {
    (A(), j.pending() && (await j.recover()));
  }
  function W(e) {
    if (!e.snapshot || e.quotes?.length !== 50)
      throw new v(`market_unavailable`);
    let t = e.snapshot,
      n = e.trading_status ?? {},
      r = n.reason ?? null;
    return (
      (P = {
        id: t.id,
        date: t.trade_date,
        publishedAt: t.imported_at,
        source: t.source,
        sourceUrl: `https://openapi.twse.com.tw/`,
        status: n.paused
          ? r === `session_open`
            ? `closed`
            : r === `market_outdated`
              ? `stale`
              : `paused`
          : `current`,
        trading: {
          open: !n.paused,
          reason: r,
          reopensAt: n.reopens_at ?? null,
          closesAt: n.closes_at ?? null,
          nextSession: n.next_session ?? null,
        },
        fees: {
          commissionRate: e.rules.fee_ppm / 1e6,
          minCommission: e.rules.min_fee_cents / 100,
          sellTaxRate: e.rules.sell_tax_ppm / 1e6,
        },
        quotes: e.quotes.map(B),
      }),
      P
    );
  }
  function G(e) {
    return {
      cash: A() + e.account.cash_cents / 100,
      initialCapital:
        (e.account.total_deposited_cents - e.account.total_withdrawn_cents) /
        100,
      realizedPnl: e.account.realized_pnl_cents / 100,
      positions: e.positions.map((e) => ({
        symbol: e.symbol,
        quantity: e.quantity,
        costBasis: e.cost_cents / 100,
        lastPrice: e.price_cents == null ? void 0 : e.price_cents / 100,
        quote: e.quote ? B(e.quote) : void 0,
        tradable: e.tradable,
        valuationDate: e.valuation_date,
      })),
      orders: e.orders.map(z),
      dividends: (e.dividends ?? []).map((e) => ({
        symbol: e.symbol,
        date: e.trade_date,
        quantity: e.quantity,
        cash: e.cash_cents / 100,
        bonusShares: e.bonus_shares,
        createdAt: e.created_at,
      })),
      collectible: (e.account.collectible_cents ?? 0) / 100,
    };
  }
  return {
    refresh: () =>
      R(async () => {
        await U();
        let e = await H();
        return { snapshot: W(e), account: G(e) };
      }),
    snapshot: () => R(async () => (await U(), W(await H()))),
    account: () => R(async () => (await U(), G(await H()))),
    history: async (e) =>
      (await k(`market_history`, { p_symbol: e })).map((e) => ({
        date: e.trade_date,
        close: e.price_cents / 100,
      })),
    order: (e) => R(async () => (A(), z(await j.trade(e)))),
    collect: () =>
      R(async () => {
        A();
        let e = await j.collect();
        return (e && r.state.refreshSharedWallet(), e);
      }),
  };
}
function z(e) {
  return {
    id: e.request_id,
    requestId: e.request_id,
    snapshotId: e.snapshot_id,
    symbol: e.symbol,
    side: e.side,
    quantity: e.quantity,
    price: e.price_cents / 100,
    gross: e.gross_cents / 100,
    fee: e.fee_cents / 100,
    tax: e.tax_cents / 100,
    total: Math.abs(e.cash_delta_cents) / 100,
    realizedPnl: e.realized_pnl_cents / 100,
    createdAt: e.created_at,
  };
}
function B(e) {
  return {
    symbol: e.symbol,
    name: { zh: e.name_zh, en: e.name_en },
    close: e.price_cents / 100,
    tradable: e.tradable,
    haltReason: e.halt_reason,
    previousClose:
      e.previous_close_cents == null ? null : e.previous_close_cents / 100,
    change: e.change_cents == null ? null : e.change_cents / 100,
    changePercent: e.previous_close_cents
      ? (e.change_cents / e.previous_close_cents) * 100
      : null,
    open: e.open_cents == null ? null : e.open_cents / 100,
    high: e.high_cents == null ? null : e.high_cents / 100,
    low: e.low_cents == null ? null : e.low_cents / 100,
    volume: e.volume,
  };
}
