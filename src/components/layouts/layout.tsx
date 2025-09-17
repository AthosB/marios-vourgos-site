// components/AppLayoutChooser.tsx
'use client';

import {useEffect, useState, ReactNode} from 'react';
import dynamic from 'next/dynamic';

const MobileLayout = dynamic(() => import('@/components/layouts/MobileLayout'), {ssr: false});
const DesktopLayout = dynamic(() => import('@/components/layouts/DesktopLayout'), {ssr: false});

type Choice = 'mobile' | 'desktop';

const PREDEFINED_PASSWORD = 'IseeYou';

function getQueryOverride(): Choice | null {
  const p = new URLSearchParams(typeof window === 'undefined' ? '' : window.location.search);
  const v = p.get('layout');
  if (v === 'mobile' || v === 'desktop') return v;
  return null;
}

function PasswordGate({children}: { children: ReactNode }) {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authenticated') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PREDEFINED_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    }
  };

  if (!authenticated) {
    return (
      <form onSubmit={handleSubmit} style={{margin: '2rem'}}>
        <label>
          Enter password:
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return <>{children}</>;
}

function useLayoutChoice(breakpoint = '(max-width: 767px)') {
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    // 1) URL override takes precedence
    const urlOverride = getQueryOverride();
    if (urlOverride) {
      setChoice(urlOverride);
      // remember override for future navigations
      try {
        localStorage.setItem('layoutOverride', urlOverride);
      } catch {
      }
      return;
    }

    // 2) Saved override from a previous visit?
    try {
      const saved = localStorage.getItem('layoutOverride') as Choice | null;
      if (saved === 'mobile' || saved === 'desktop') {
        setChoice(saved);
        return;
      }
    } catch {
    }

    // 3) Detect via media query
    const mql = window.matchMedia(breakpoint);
    const decide = () => setChoice(mql.matches ? 'mobile' : 'desktop');
    decide();
    // Update if viewport crosses the breakpoint (rotate/resize)
    const handler = (e: MediaQueryListEvent) => setChoice(e.matches ? 'mobile' : 'desktop');
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, [breakpoint]);

  return choice;
}

export default function AppLayoutChooser({children}: { children: ReactNode }) {
  const choice = useLayoutChoice();

  // Render nothing until we know the layout (prevents hydration mismatch)
  if (choice === null) return <div suppressHydrationWarning />;

  return choice === 'mobile'
    ? <PasswordGate><MobileLayout>{children}</MobileLayout></PasswordGate>
    : <PasswordGate><DesktopLayout>{children}</DesktopLayout></PasswordGate>;
}
