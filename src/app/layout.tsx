import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unidash | One Application, All Universities",
  description: "The centralized application platform for Indian higher education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
