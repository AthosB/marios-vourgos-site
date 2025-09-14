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

  console.log('DesktopLayout');

  return (
    <AppRouterCacheProvider>
      <NavBar />
      {children}
    </AppRouterCacheProvider>
  );
}
