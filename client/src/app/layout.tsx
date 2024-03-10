import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

import { Providers } from "./chakraUi/providers";

import "./styles/globals.css";
import Header from "@/components/layout/header/Header";
import HeaderMobile from "@/components/layout/header/HeaderMobile";
import SideNav from "@/components/layout/sideNav/SideNav";
import PageWrapper from "@/components/layout/wrappers/Page-Wrapper";
import MarginWidthWrapper from "@/components/layout/wrappers/Margin-Width-Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Created by pearl-wave",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>      
                  {children}           
                  <SpeedInsights />
                  <Analytics />
                </PageWrapper>
              </MarginWidthWrapper>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
