import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { locales } from '@/i18n/config';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

export const metadata: Metadata = {
  title: "ABMTC - Anagkazo Bible & Ministry Training Center",
  description:
    "Transform your life and answer the call. Join students from 40+ nations training for global missions and church planting at ABMTC in Ghana.",
  keywords:
    "Bible training, missions, church planting, Ghana, international students, ministry training, theological education",
  openGraph: {
    title: "ABMTC - Answer the Call to Global Missions",
    description:
      "Transform your life and answer the call. Join students from 40+ nations training for global missions.",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  generator: 'v0.app'
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    return null;
  }

  // Providing all messages to the client for the specific locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          {children}
          <Footer />
          <FloatingWhatsAppButton />
          <Toaster />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
