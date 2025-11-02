import {ReactNode} from "react";
import type {Metadata} from "next";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
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

  return (
    <AppRouterCacheProvider>
      <MobileMenu />
      {children}
      <p className={'copyright-footer'}>
        © 2025 Mario Vourgos.
        All rights reserved.
      </p>
    </AppRouterCacheProvider>
  );
}
