import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Web Factory",
    template: "%s · AI Web Factory",
  },
  description:
    "Catalog of reusable UI components and AI pipelines — browse, filter, and review with clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="factory-body min-h-full flex flex-col text-[color:var(--factory-text)]">
        <div aria-hidden className="factory-atmosphere">
          <div className="factory-atmosphere-light" />
          <div className="factory-atmosphere-structure" />
          <div className="factory-atmosphere-grain" />
        </div>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
