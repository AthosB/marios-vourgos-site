import {ReactNode} from "react";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import NavBar from "@/components/UI/NavBar/NavBar";

export default function DesktopLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <AppRouterCacheProvider>
      <NavBar />
      {children}
      <footer>
        <p className={'footer-meta'}>
          © {new Date().getFullYear()} Mario Vourgos.
          All rights reserved.
        </p>
      </footer>
    </AppRouterCacheProvider>
  );
}
