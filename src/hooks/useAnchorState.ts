// typescript
// File: `src/hooks/useAnchorState.ts`
import { useEffect } from 'react';

export function useAnchorState() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollToHash = () => {
      try {
        const hash = window.location.hash;
        if (!hash) return;
        const id = decodeURIComponent(hash.replace(/^#/, ''));
        const el = document.getElementById(id);
        if (!el) return;
        // allow layout to stabilize before scrolling
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        });
      } catch {
        // noop - defensive
      }
    };

    // run once on mount in case page opened with a hash or a pushState already occurred
    // scrollToHash();

    // handle back/forward and direct hash changes
    window.addEventListener('popstate', scrollToHash);
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('popstate', scrollToHash);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);
}
