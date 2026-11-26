// Excerpt from src/trade/picks.ts.

/* Turning a price button into a ticket pick. Every page builds picks through
   these, so the ticket always gets the same shape. */
import type { Market, Outcome, Pick } from '../lib/types';
import type { MarketMark } from '../ui/Glyphs';

export function binaryPick(m: Market, side: 'yes' | 'no'): Pick {
  const yes = m.outcomes[0].price;
  return {
    marketSlug: m.slug,
    marketTitle: m.title,
    context: `${m.tag} · Ends ${m.ends}`,
    outcome: m.title,
    sideLabel: side === 'yes' ? 'Yes' : 'No',
    otherLabel: side === 'yes' ? 'No' : 'Yes',
    side: side === 'yes' ? 'buy' : 'sell',
    price: side === 'yes' ? yes : 1 - yes,
    otherPrice: side === 'yes' ? 1 - yes : yes,
    mark: m.mark,
  };
}
