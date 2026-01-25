// File: `src/components/layouts/MobileLayout.tsx`
'use client';

import React, { ReactNode, useEffect } from "react";
import type { Metadata } from "next";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MobileMenu from "@/components/UI/NavBar/MobileMenu";

export const metadata: Metadata = {
  title: "Marios Vourgos",
  description: "Marios Vourgos - Artist Portfolio",
};

export default function MobileLayout({
                                       children,
                                     }: Readonly<{
  children: ReactNode;
}>) {
  useEffect(() => {
    const scr = (screen as any);
    const addFallback = () => document.documentElement.classList.add('force-portrait');
    const removeFallback = () => document.documentElement.classList.remove('force-portrait');

    const tryLock = async () => {
      try {
        if (scr?.orientation?.lock) {
          await scr.orientation.lock('portrait-primary').catch(() => scr.orientation.lock('portrait'));
          removeFallback();
        } else {
          throw new Error('no-orientation-api');
        }
      } catch {
        addFallback();
      }
    };

    const unlockIfPossible = async () => {
      try {
        if (scr?.orientation?.unlock) await scr.orientation.unlock();
      } catch {
        // ignore
      }
      removeFallback();
    };

    const onFullscreenChange = () => {
      const doc: any = document;
      const el = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
      if (el) {
        unlockIfPossible();
      } else {
        tryLock();
      }
    };

    void tryLock();
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
      void unlockIfPossible();
    };
  }, []);

  return (
    <AppRouterCacheProvider>
      <MobileMenu />
      {children}
      <footer>
        <p className={'copyright-footer'}>
          © {new Date().getFullYear()} Mario Vourgos.
          All rights reserved.
        </p>
      </footer>
    </AppRouterCacheProvider>
  );
}
