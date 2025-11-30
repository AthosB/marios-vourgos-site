import {ReactNode} from "react";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import NavBar from "@/components/UI/NavBar/NavBar";
import {getAppVersion} from "@/utils/helpers";

export default function DesktopLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <AppRouterCacheProvider>
      <NavBar />
      {children}
      <p className={'footer-meta'}>
        © 2025 Mario Vourgos.
        All rights reserved. {getAppVersion()}
      </p>
    </AppRouterCacheProvider>
  );
}
