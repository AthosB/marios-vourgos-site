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

function estimateDiagonalInches(): number {
  try {
    const ua = (navigator as any).userAgent || '';
    const dpr = window.devicePixelRatio || 1;

    // screen.width/height are CSS pixels; multiply by DPR to get physical pixels
    const widthPx = ((screen as any).width ?? window.innerWidth) * dpr;
    const heightPx = ((screen as any).height ?? window.innerHeight) * dpr;
    const diagPx = Math.sqrt(widthPx * widthPx + heightPx * heightPx);

    // Heuristic PPI guesses for common tablets (improves accuracy vs assuming 96dpi)
    // - iPad Pro 12.9 uses ~264 PPI
    // - many Android tablets are between ~200-300 PPI; use 224 as a compromise
    // - fallback to 160 (conservative for older/lower-density devices)
    let ppi = 160;
    if (/iPad/i.test(ua) || (navigator as any).platform === 'MacIntel' && (navigator as any).maxTouchPoints > 1) {
      ppi = 264;
    } else if (/Android/i.test(ua) && !/Mobile/i.test(ua)) {
      ppi = 224;
    }

    return diagPx / ppi;
  } catch {
    return 0;
  }
}

function isTabletDevice(): boolean {
  try {
    const nav: any = navigator;
    const ua = nav.userAgent || '';
    const hasTouch = (navigator.maxTouchPoints ?? 0) > 0 || 'ontouchstart' in window;

    // Strong iPad detection (covers iPadOS on desktop-class UA)
    const isIPad = /iPad/i.test(ua) || (navigator.platform === 'MacIntel' && (navigator as any).maxTouchPoints > 1);

    // Android tablets usually identify as Android but not Mobile
    const isAndroidTablet = /Android/i.test(ua) && !/Mobile/i.test(ua);

    // Generic Tablet keyword heuristic
    const uaTablet = /Tablet|SM-T|Tab|Nexus 9|Nexus 7/i.test(ua);

    return Boolean(isIPad || isAndroidTablet || (hasTouch && uaTablet));
  } catch {
    return false;
  }
}

function useLayoutChoice() {
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Basic mobile detection (phones / small touch devices)
    const isMobileDevice = (() => {
      try {
        const nav: any = navigator;
        const ua = nav.userAgent || '';
        const uaMobile = /Mobi|Android|iPhone|iPod|Mobile/i.test(ua);
        const uaDataMobile = !!(nav.userAgentData && nav.userAgentData.mobile);
        const hasTouch = (navigator.maxTouchPoints ?? 0) > 0 || 'ontouchstart' in window;
        const coarsePointer = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
        return uaMobile || uaDataMobile || (hasTouch && coarsePointer);
      } catch {
        return false;
      }
    })();

    const tablet = isTabletDevice();
    const diagonal = estimateDiagonalInches();
    const LARGE_TABLET_THRESHOLD = 10; // inches

    console.log('diagonal:', diagonal, 'isTablet:', tablet);

    // If this is a large tablet, serve desktop in landscape and mobile in portrait,
    // and watch orientation so we can flip the layout on rotate.
    if (tablet && diagonal >= LARGE_TABLET_THRESHOLD) {
      const getIsLandscape = () => {
        const vv = (window as any).visualViewport as VisualViewport | undefined;
        if (vv && typeof vv.width === 'number' && typeof vv.height === 'number') return vv.width > vv.height;
        const so: any = (screen as any)?.orientation;
        if (so && typeof so.type === 'string') return so.type.includes('landscape');
        if (typeof window.matchMedia === 'function') return window.matchMedia('(orientation: landscape)').matches;
        return window.innerWidth > window.innerHeight;
      };

      let currentLandscape = getIsLandscape();
      setChoice(currentLandscape ? 'desktop' : 'mobile');

      const onChange = () => {
        const next = getIsLandscape();
        if (next !== currentLandscape) {
          currentLandscape = next;
          setChoice(currentLandscape ? 'desktop' : 'mobile');
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
    }

    // Non-large-tablet choices:
    if (isMobileDevice) {
      setChoice('mobile');
    } else {
      setChoice('desktop');
    }
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
