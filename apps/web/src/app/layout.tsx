import "./globals.css";

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
