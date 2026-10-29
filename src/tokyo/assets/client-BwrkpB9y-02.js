// tokyo/assets/client-BwrkpB9y 02 — receipt
// Lines 222-397 of readable/tokyo/assets/client-BwrkpB9y.pretty.js (statement-aligned).
function M(e, t, n) {
  if (e === `market_state`) {
    if ((T(t), T(t.account), T(t.rules), t.trading_status !== void 0)) {
      (T(t.trading_status),
        w(typeof t.trading_status.paused == `boolean`),
        t.trading_status.reason != null && D(t.trading_status.reason),
        t.trading_status.validated_at != null &&
          k(t.trading_status.validated_at),
        t.trading_status.next_session != null &&
          O(t.trading_status.next_session));
      for (let e of [`reopens_at`, `closes_at`])
        t.trading_status[e] != null && k(t.trading_status[e]);
    }
    if (
      (t.account.collectible_cents !== void 0 &&
        (E(t.account.collectible_cents),
        w(t.account.collectible_cents % 100 == 0)),
      t.dividends !== void 0)
    ) {
      w(Array.isArray(t.dividends) && t.dividends.length <= 20);
      for (let e of t.dividends)
        (T(e),
          w(/^\d{4}$/.test(e.symbol)),
          O(e.trade_date),
          E(e.quantity, 1),
          E(e.cash_cents),
          E(e.bonus_shares),
          k(e.created_at));
    }
    for (let e of [
      `cash_cents`,
      `total_deposited_cents`,
      `total_withdrawn_cents`,
      `market_value_cents`,
      `equity_cents`,
    ])
      E(t.account[e]);
    (E(t.account.realized_pnl_cents, -(2 ** 53 - 1)),
      w(
        t.rules.fee_ppm === 1425 &&
          t.rules.min_fee_cents === 2e3 &&
          t.rules.sell_tax_ppm === 3e3,
      ),
      w(
        Array.isArray(t.quotes) &&
          Array.isArray(t.positions) &&
          Array.isArray(t.orders),
      ),
      t.snapshot === null
        ? w(t.quotes.length === 0)
        : (T(t.snapshot),
          D(t.snapshot.id),
          O(t.snapshot.trade_date),
          k(t.snapshot.imported_at),
          D(t.snapshot.source),
          w(t.quotes.length === 50)),
      t.quotes.forEach(A),
      w(new Set(t.quotes.map((e) => e.symbol)).size === t.quotes.length));
    for (let e of t.positions)
      (T(e),
        w(/^\d{4}$/.test(e.symbol)),
        E(e.quantity, 1),
        E(e.cost_cents),
        e.price_cents !== null && E(e.price_cents, 1),
        w(typeof e.tradable == `boolean` || e.tradable === null),
        e.quote && A(e.quote),
        e.tradable &&
          w(
            e.quote &&
              e.quote.symbol === e.symbol &&
              e.valuation_date === t.snapshot?.trade_date,
          ));
    (t.orders.forEach(j), w(t.travel === null || !!g(t.travel)));
  } else if (e === `market_trade`) {
    (T(t), M(`market_order`, t.receipt, n), w(!!g(t.travel)));
    let e = t.travel.data.shared?.wallet;
    (T(e),
      T(e.dev),
      T(e.dev[0]),
      E(e.ntd),
      E(e.dev[0].e),
      E(e.dev[0].s),
      E(e.dev[0].at));
  } else if (e === `market_collect`) {
    (T(t),
      t.receipt !== null &&
        (T(t.receipt),
        w(
          t.receipt.status === `collected` &&
            t.receipt.request_id === n.p_request_id,
        ),
        E(t.receipt.amount_cents, 100),
        w(t.receipt.amount_cents % 100 == 0),
        E(t.receipt.cash_after_cents),
        k(t.receipt.created_at)),
      w(!!g(t.travel)));
    let e = t.travel.data.shared?.wallet;
    (T(e),
      T(e.dev),
      E(e.ntd),
      t.receipt !== null && (T(e.dev[0]), E(e.dev[0].e), E(e.dev[0].s)));
  } else if (e === `market_execute`)
    (T(t),
      M(`market_order`, t.receipt, n),
      E(t.deposit_cents),
      E(t.withdrawal_cents),
      w(t.deposit_cents === n.p_deposit_cents && t.deposit_cents % 100 == 0),
      w(t.withdrawal_cents % 100 == 0),
      w(
        t.withdrawal_cents ===
          Math.floor(t.receipt.cash_after_cents / 100) * 100,
      ));
  else if (e === `market_order`)
    (j(t),
      w(
        t.request_id === n.p_request_id &&
          t.snapshot_id === n.p_snapshot_id &&
          t.symbol === n.p_symbol &&
          t.side === n.p_side &&
          t.quantity === n.p_quantity,
      ));
  else if (e === `market_transfer`)
    (T(t),
      w(
        t.status === `transferred` &&
          t.request_id === n.p_request_id &&
          t.direction === n.p_direction &&
          t.amount_cents === n.p_amount_cents,
      ),
      E(t.amount_cents, 1),
      E(t.cash_after_cents),
      k(t.created_at));
  else if (e === `market_history`) {
    w(Array.isArray(t) && t.length <= 90);
    let e = ``;
    for (let n of t)
      (T(n),
        O(n.trade_date),
        E(n.price_cents, 1),
        w(n.trade_date > e),
        (e = n.trade_date));
  }
  return t;
}
var N, P, F;
async function I() {
  if (!navigator.locks) throw new v(`unsupported_browser`);
  return new Promise((e, t) => {
    navigator.locks
      .request(`taipei-rush-market-owner`, { ifAvailable: !0 }, (n) => {
        if (!n) {
          t(new v(`market_in_use`));
          return;
        }
        return new Promise((t) => {
          (window.addEventListener(
            `pagehide`,
            () => {
              ((N = void 0), t());
            },
            { once: !0 },
          ),
            e(t));
        });
      })
      .catch(t);
  });
}
function createMarketClient(e) {
  return (
    F?.(),
    (N ??= R(e).catch((e) => {
      throw ((N = void 0), e);
    }))
  );
}
