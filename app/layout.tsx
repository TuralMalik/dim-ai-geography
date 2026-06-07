import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "DİM AI | География | Coğrafiya | Geography",
  description: "DİM AI exam preparation MVP in Russian, Azerbaijani, and English",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <I18nProvider>
          <AppShell>{children}</AppShell>
        </I18nProvider>
      </body>
    </html>
  );
}
