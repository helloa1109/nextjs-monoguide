import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monorepo Web App",
  description: "Modern monorepo with Next.js, TypeScript, and Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
    <body suppressHydrationWarning className="antialiased">
        {children}
    
    </body>
  </html>
  );
}
