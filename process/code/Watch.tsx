// src/trade/Watch.tsx. The watchlist bookmark: one component wherever a market shows.
// It adds or removes, says so, and offers the list or an undo.

import { useStore } from '../lib/store';
import { Icon } from '../ui/Icon';

/** The bookmark: adds to or takes off the watchlist, says so, and offers the list or an undo. */
export function WatchButton({ id, title, className = 'icon-btn icon-btn--sq', size }: { id: string; title: string; className?: string; size?: number }) {
  const { watching, setWatch, toast } = useStore();
  const on = watching.includes(id);
  const flip = () => {
    if (on) {
      const at = watching.indexOf(id);
      setWatch(id, false);
      toast({ tone: 'info', title: 'Removed from your watchlist', body: title, actions: [{ label: 'Undo', run: () => setWatch(id, true, at) }] });
    } else {
      setWatch(id, true);
      toast({ tone: 'success', title: 'Added to your watchlist', body: title, actions: [{ label: 'View watchlist', to: '/watchlist' }] });
    }
  };
  return (
    <button type="button" className={`${className} watch${on ? ' is-watched' : ''}`} aria-pressed={on} aria-label={on ? 'Remove from watchlist' : 'Add to watchlist'} title={on ? 'On your watchlist' : 'Add to watchlist'} onClick={flip}>
      <Icon name="bookmark" size={size} />
    </button>
  );
}
