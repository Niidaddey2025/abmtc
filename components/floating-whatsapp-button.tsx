"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+233557467460"
const WHATSAPP_URL = "https://wa.me/233557467460"

export function FloatingWhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${WHATSAPP_NUMBER}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
    >
      <FaWhatsapp size={24} />
    </Link>
  )
}
