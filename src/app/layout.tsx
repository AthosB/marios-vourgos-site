import type {Metadata} from "next";
import '@/styles/globals.scss';
import '@/styles/mario.scss';
import AppLayoutChooser from "@/components/layouts/layout";
import {ThemeProvider} from '@mui/material/styles';
import theme from '@/theme';
import {Geist, Geist_Mono} from "next/font/google";


const getDeviceType = () => {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return 'mobile';
  if (/iPad|Tablet/i.test(ua)) return 'tablet';
  return 'desktop';
};
const deviceType = typeof window !== 'undefined' ? getDeviceType() : 'unknown';
console.log('deviceType', deviceType);

export const metadata: Metadata = {
  title: "Marios Vourgos",
  description: "Marios Vourgos - Artist Portfolio",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <ThemeProvider theme={theme}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased root-page`}
          >
            <AppLayoutChooser>{children}</AppLayoutChooser>
          </body>
        </ThemeProvider>
      </html>
    </>
  );
}
