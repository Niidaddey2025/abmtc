"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/student-life", label: "Student Life" },
    { href: "/admissions", label: "Admissions" },
    { href: "/impact", label: "Global Impact" },
    { href: "/alumni", label: "Alumni" },
    { href: "/resources", label: "Resources" },
  ]

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    router.push(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="ABMTC Logo"
              width={48}
              height={48}
              className="h-10 w-10 rounded-full object-cover shadow-md"
              priority
            />
            <div className={`cursor-pointer transition-colors ${
                isHomePage
                  ? (isScrolled || isMobileMenuOpen)
                    ? "text-foreground hover:text-primary text-2xl"
                    : "text-white hover:text-foreground text-2xl"
                  : "text-foreground hover:text-primary text-2xl"
              }`}>ABMTC</div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`relative text-base font-medium transition-colors cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-current after:content-[''] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isHomePage
                    ? isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white hover:text-secondary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              asChild
              className={`cursor-pointer transition-colors ${
                isHomePage
                  ? isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-foreground"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <Link href="/contact" prefetch={true}>Contact</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 cursor-pointer">
              <Link href="/apply" prefetch={true}>Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isHomePage
                ? (isScrolled || isMobileMenuOpen)
                  ? "text-foreground"
                  : "text-white"
                : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-lg font-medium transition-colors py-2 text-left cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-current after:content-[''] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-foreground/80 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  asChild
                  className="relative w-full bg-transparent cursor-pointer transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-current after:content-[''] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-foreground hover:text-primary"
                >
                  <Link href="/contact" prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </Button>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                  <Link href="/apply" prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
