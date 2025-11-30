'use client';

import {ReactNode} from "react";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import {getAppVersion} from "@/utils/helpers";

export default function BlankLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <AppRouterCacheProvider>
      {children}
      <p className={'footer-meta'}>
        © 2025 Mario Vourgos.
        All rights reserved. {getAppVersion()}
      </p>
    </AppRouterCacheProvider>
  );
}