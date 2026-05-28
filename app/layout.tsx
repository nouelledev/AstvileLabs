import type { Metadata } from "next";
import { ToastProvider } from "./components/toast-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstvileLabs | AI Ads & UGC Creative Studio",
  description:
    "Premium AI ad creative studio for UGC-style short-form ads, hook testing, and campaign-ready product videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
