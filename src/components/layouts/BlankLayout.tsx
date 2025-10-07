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
    </AppRouterCacheProvider>
  );
}