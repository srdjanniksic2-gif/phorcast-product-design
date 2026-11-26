# 08 Launch tests

Four decisions I made on judgement or on a client note. Each test changes one thing and watches one number, with a second number that must not get worse.

**The platform has no live traffic yet, so there are no test results here.** These are the first four tests, written for the analytics the backend will bring.

| # | Test | Hypothesis | Primary metric | Guardrail | Live now |
|---|---|---|---|---|---|
| 01 | Sign-up order | If Google comes first, more people finish sign-up from the ticket, because it is one tap and no code. | Sign-ups completed from the ticket | Accounts that reach a first deposit within a day | A, the client's order |
| 02 | Where the promo code lives | If the code sits inside the steps, more first deposits carry it, because it is seen before the address. | First deposits with a code applied | Deposits started that reach the address | B, after a client note |
| 03 | Quick amounts | If the chips set common amounts instead of adding to them, more tickets reach Trade, because one tap gives a finished number. | Tickets opened that end in a placed trade | Trades backed out of at the confirm screen | A, chips that add |
| 04 | A still or a moving gauge | If the gauge cycles through markets, more visitors join the waitlist, because they see the range of what they can trade. | Waitlist sign-ups per visitor | Visitors who leave within ten seconds | B, the gauge that cycles |

Each test runs two full weeks, so both arms see weekends. B ships only if the primary number moves and the guardrail holds.

## Not in v1, on purpose

- **Placing the trade by itself when the deposit lands.** It needs a backend that waits for the chain.
- **Card payments.** They change the legal setup, so they are a question for the client.
- **An onboarding tour.** The ticket teaches itself by being used.

## Measured after launch

- Visitors who join the waitlist.
- Tickets opened that end in a first trade.
- First deposits with a promo code.

Next: [09 Feature proposal: Watchlist](09-watchlist-proposal.md)
