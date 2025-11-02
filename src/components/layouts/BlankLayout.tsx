'use client';

import {ReactNode} from "react";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';

export default function BlankLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <AppRouterCacheProvider>
      {children}
      <p style={ {textAlign: 'center', marginTop: 0, opacity: 0.5}}>
        © 2025 Mario Vourgos.
        All rights reserved.
      </p>
    </AppRouterCacheProvider>
  );
}