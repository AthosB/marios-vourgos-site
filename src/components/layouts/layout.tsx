// TypeScript
// File: `src/components/layouts/layout.tsx`
'use client';

import { useEffect, useState, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const MobileLayout = dynamic(() => import('@/components/layouts/MobileLayout'), { ssr: false });
const DesktopLayout = dynamic(() => import('@/components/layouts/DesktopLayout'), { ssr: false });
const OrientationGuard = dynamic(() => import('@/components/UI/OrientationGuard/OrientationGuard'), { ssr: false });

type Choice = 'mobile' | 'desktop';

function useLayoutChoice() {
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobileDevice = (() => {
      try {
        const nav: any = navigator;
        const ua = nav.userAgent || '';
        const uaMobile = /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(ua);
        const uaDataMobile = !!(nav.userAgentData && nav.userAgentData.mobile);
        const hasTouch = (navigator.maxTouchPoints ?? 0) > 0 || 'ontouchstart' in window;
        const coarsePointer = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
        return uaMobile || uaDataMobile || hasTouch || coarsePointer;
      } catch {
        return false;
      }
    })();

    setChoice(isMobileDevice ? 'mobile' : 'desktop');
  }, []);

  return choice;
}

function useIsLandscape() {
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const get = () => {
      const vv = (window as any).visualViewport as VisualViewport | undefined;
      if (vv && typeof vv.width === 'number' && typeof vv.height === 'number') return vv.width > vv.height;
      const so: any = (screen as any)?.orientation;
      if (so && typeof so.type === 'string') return so.type.includes('landscape');
      if (typeof window.matchMedia === 'function') return window.matchMedia('(orientation: landscape)').matches;
      return window.innerWidth > window.innerHeight;
    };

    let current = get();
    setIsLandscape(current);

    const onChange = () => {
      const next = get();
      if (next !== current) {
        current = next;
        setIsLandscape(next);
      }
    };

    const vv = (window as any).visualViewport;
    vv?.addEventListener?.('resize', onChange);

    window.addEventListener('resize', onChange);
    window.addEventListener('orientationchange', onChange);

    if ((screen as any)?.orientation?.addEventListener) {
      (screen as any).orientation.addEventListener('change', onChange);
    } else if ((screen as any)?.orientation?.onchange !== undefined) {
      try { (screen as any).orientation.onchange = onChange; } catch {}
    }

    const mql = typeof window.matchMedia === 'function' ? window.matchMedia('(orientation: landscape)') : null;
    mql?.addEventListener?.('change', onChange);

    return () => {
      vv?.removeEventListener?.('resize', onChange);
      window.removeEventListener('resize', onChange);
      window.removeEventListener('orientationchange', onChange);
      if ((screen as any)?.orientation?.removeEventListener) {
        (screen as any).orientation.removeEventListener('change', onChange);
      } else if ((screen as any)?.orientation?.onchange !== undefined) {
        try { (screen as any).orientation.onchange = null; } catch {}
      }
      mql?.removeEventListener?.('change', onChange);
    };
  }, []);

  return isLandscape;
}

export default function AppLayoutChooser({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const choice = useLayoutChoice();
  const isLandscape = useIsLandscape();

  if (pathname === '/view') {
    const BlankLayout = dynamic(() => import('@/components/layouts/BlankLayout'), { ssr: false });
    return <BlankLayout>{children}</BlankLayout>;
  }

  // Wait until we know the layout; for mobile also wait until orientation is known
  if (choice === null) return <div suppressHydrationWarning />;

  if (choice === 'mobile') {
    if (isLandscape === null) return <div suppressHydrationWarning />;
    if (isLandscape) return <OrientationGuard />;
    return <MobileLayout>{children}</MobileLayout>;
  }

  return <DesktopLayout>{children}</DesktopLayout>;
}
