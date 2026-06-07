import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "DİM AI — прогноз балла и подготовка к DİM",
  description:
    "AI-наставник для подготовки к DİM: прогнозируемый балл, слабые темы и персональный план повторения.",
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
