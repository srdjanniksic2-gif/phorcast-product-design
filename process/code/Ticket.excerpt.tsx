// Excerpt from src/trade/Ticket.tsx. The ticket's one primary button and its five states.

/* The trade ticket (Figma "Sports / Trade Ticket" set 979:775).
   ---------------------------------------------------------------------------
   One primary button, and its job changes with the state, so the next step
   is always the only thing to press:
     guest            white  "Sign up to trade"       pick is saved
     no amount        grey   "Enter amount"           disabled
     $0 balance       white  "Deposit $25 to trade"   deposit opens over it
     short balance    white  "Deposit $13.00 more"    only the difference
     ready            green  "Trade"                  the only green button
   "Trade" opens the confirmation step, then the "Trade placed" screen.
   Market / Limit (client, Oct 2026): a limit order takes a price in cents,
   a number of shares and an optional expiry, and rests in open orders.
   Below 1024 the ticket is a bar at the bottom of the screen that opens as a
   sheet, and picking a price opens it. */

// ...

  const user = auth.status === 'user';
  const price = pick.price;
  const shares = amount > 0 ? amount / price : 0;
  const swap = () => setPick({ ...pick, sideLabel: pick.otherLabel, otherLabel: pick.sideLabel, price: pick.otherPrice, otherPrice: pick.price, side: pick.side === 'buy' ? 'sell' : 'buy' });
  const held = positions.filter((p) => p.marketSlug === pick.marketSlug);

  // Limit: the price in cents (defaults to the current one) and whole shares.
  const limitC = limitRaw === '' ? Math.round(price * 100) : Math.min(99, Math.max(1, parseFloat(limitRaw) || 0));
  const limit = limitC / 100;
  const lShares = Math.max(0, Math.floor(parseFloat(sharesRaw) || 0));
  const lCost = Math.round(limit * lShares * 100) / 100;
  const need = kind === 'market' ? amount : lCost;

  let cta: { label: string; kind: string; onClick?: () => void; disabled?: boolean; note: string };
  if (!user) cta = { label: 'Sign up to trade', kind: 'inverse', onClick: () => open({ type: 'auth', mode: 'signup' }), note: 'Your position is saved while you sign up.' };
  else if (need <= 0) cta = kind === 'market'
    ? { label: 'Enter amount', kind: 'muted', disabled: true, note: 'Type an amount or tap a quick amount.' }
    : { label: 'Enter shares', kind: 'muted', disabled: true, note: 'Set your price and how many shares to buy.' };
  else if (cash <= 0) cta = { label: `Deposit ${usd(need, need % 1 ? 2 : 0)} to trade`, kind: 'inverse', onClick: () => open({ type: 'deposit', need }), note: 'Deposit opens here. Your position stays saved.' };
  else if (cash < need) cta = { label: `Deposit ${usd(need - cash)} more`, kind: 'inverse', onClick: () => open({ type: 'deposit', need: Math.ceil((need - cash) * 100) / 100 }), note: 'Only the difference. Your position stays saved.' };
  else cta = kind === 'market'
    ? { label: 'Trade', kind: 'buy', onClick: () => submit({ kind: 'market', amount }), note: '' }
    : { label: 'Place order', kind: 'buy', onClick: () => submit({ kind: 'limit', limit, shares: lShares, expires: expiring ? expiry : 'Until cancelled' }), note: '' };

// ...

<button type="button" className={`btn btn--lg btn--block btn--${cta.kind}`} onClick={cta.onClick} disabled={cta.disabled}>{cta.label}</button>
<p className="ticket__note">{cta.note || <>By trading, you agree to the <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="ticket__terms">Terms of Service</a>.</>}</p>
