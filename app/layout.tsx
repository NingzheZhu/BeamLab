import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEAM Lab — Behavior, Evaluation & Advanced Methodology",
  description: "An independent research collective connecting psychology, statistics, computer science, and related disciplines.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
