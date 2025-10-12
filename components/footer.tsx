"use client"

import type { SVGProps } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Twitter } from "lucide-react"

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M16.5 2h-3.25a.75.75 0 0 0-.75.75v12.01a2.51 2.51 0 1 1-2.5-2.5c.24 0 .48.02.7.07a.75.75 0 0 0 .93-.73V9.63a.75.75 0 0 0-.87-.74 5.26 5.26 0 0 0-.76-.05 5.5 5.5 0 1 0 5.5 5.5V8.91a8.02 8.02 0 0 0 3.08 1.27.75.75 0 0 0 .86-.74V6.18a.75.75 0 0 0-.63-.74 3.84 3.84 0 0 1-3.6-3.19A.75.75 0 0 0 16.5 2Z" />
    </svg>
  )
}

export function Footer() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <button onClick={() => handleNavigation("/")} className="flex items-center gap-3 group">
              <Image
                src="/logo.jpg"
                alt="ABMTC Logo"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-cover shadow-md"
                priority
              />
              <div className="text-2xl font-bold text-white cursor-pointer transition-colors">ABMTC</div>
            </button>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Anagkazo Bible & Ministry Training Center - Equipping students from 40+ nations for global missions and
              church planting.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/anagkazobibleschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/anagkazobibleschool_dhmm/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/anagkazoschool?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@ABMTC-MampongGh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@abmtc_dhmm_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About ABMTC
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/programs")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/admissions")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Admissions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/financial-aid")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Financial Aid
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/alumni")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Alumni Network
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/resources")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Free Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/online")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Anagkazo Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/impact")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Global Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/blog")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Blog & News
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/faq")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Mampong, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:anagkazorecruitment@gmail.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  anagkazorecruitment@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+233557467460"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +233 55 746 7460
                </a>,
                <a
                  href="tel:+233592319140"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +233 59 231 9140
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} ABMTC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => handleNavigation("/privacy")}
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms")}
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
          <p className="text-center text-primary-foreground/60 text-sm mt-6 italic">
            From the nations to Ghana, from Ghana to the nations.
          </p>
        </div>
      </div>
    </footer>
  )
}
