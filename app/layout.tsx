import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"
import "./globals.css"

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <FloatingWhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
