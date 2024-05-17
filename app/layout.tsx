import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavigationPage from "./nav/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud GPU Instances",
  description: "Compare cloud GPU instances from AWS, Azure to find the best GPU instance for your workload.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavigationPage/> */}
        <main>{children}</main>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
