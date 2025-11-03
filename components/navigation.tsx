"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useTranslations, useLocale } from 'next-intl'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const moreCloseTimer = useRef<number | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const isHomePage = pathname === "/" || pathname.match(/^\/[a-z]{2}$/)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (moreCloseTimer.current) {
        window.clearTimeout(moreCloseTimer.current)
      }
    }
  }, [])

  const navLinks = [
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/programs`, label: t('academics') },
    { href: `/${locale}/student-life`, label: t('studentLife') },
    { href: `/${locale}/ministry-training`, label: t('ministry') },
    { href: `/${locale}/alumni`, label: t('alumni') },
    { href: `/${locale}/admissions`, label: t('admissions') },
    { href: `/${locale}/media`, label: t('media') },
    { href: `/${locale}/give`, label: t('give') },
    { href: `/${locale}/online`, label: t('online') },
    { href: `/${locale}/financial-aid`, label: t('financialAid') },
    { href: `/${locale}/resources`, label: t('resources') },
    { href: `/${locale}/news`, label: t('news') }
  ]

  const primaryLinks = navLinks.filter((link) => [
    `/${locale}/about`,
    `/${locale}/programs`,
    `/${locale}/student-life`,
    `/${locale}/ministry-training`,
    `/${locale}/alumni`,
  ].includes(link.href))

  const moreLinks = navLinks.filter((link) => !primaryLinks.some((p) => p.href === link.href))

  const colorClass = isHomePage
    ? (isScrolled ? "text-foreground/80 hover:text-primary" : "text-white hover:text-secondary")
    : "text-foreground hover:text-primary"

  const baseLinkClass = "relative text-base font-medium transition-colors cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-current after:content-[''] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"

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
          <button onClick={() => handleNavigation(`/${locale}`)} className="flex items-center gap-3 group">
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
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`${baseLinkClass} ${colorClass}`}
              >
                {link.label}
              </Link>
            ))}
            {moreLinks.length > 0 && (
              <div
                className="relative"
                onMouseEnter={() => {
                  if (moreCloseTimer.current) {
                    window.clearTimeout(moreCloseTimer.current)
                    moreCloseTimer.current = null
                  }
                  setIsMoreOpen(true)
                }}
                onMouseLeave={() => {
                  if (moreCloseTimer.current) {
                    window.clearTimeout(moreCloseTimer.current)
                  }
                  moreCloseTimer.current = window.setTimeout(() => {
                    setIsMoreOpen(false)
                  }, 200)
                }}
              >
                <button
                  onClick={() => setIsMoreOpen((v) => !v)}
                  className={`flex items-center gap-1 text-base font-medium transition-colors cursor-pointer ${
                    isHomePage
                      ? isScrolled
                        ? "text-foreground/80 hover:text-primary"
                        : "text-white hover:text-secondary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {tCommon('more')}
                  {isMoreOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isMoreOpen && (
                  <div
                    className="absolute right-0 mt-1 w-56 rounded-md border border-border bg-background shadow-lg py-2 z-50"
                    onMouseEnter={() => {
                      if (moreCloseTimer.current) {
                        window.clearTimeout(moreCloseTimer.current)
                        moreCloseTimer.current = null
                      }
                    }}
                    onMouseLeave={() => {
                      if (moreCloseTimer.current) {
                        window.clearTimeout(moreCloseTimer.current)
                      }
                      moreCloseTimer.current = window.setTimeout(() => {
                        setIsMoreOpen(false)
                      }, 200)
                    }}
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        prefetch={true}
                        onClick={() => setIsMoreOpen(false)}
                        className={`block px-4 py-2 ${baseLinkClass} ${
                          isHomePage && !isScrolled ? "text-foreground hover:text-primary" : colorClass
                        } text-sm hover:bg-muted/40`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
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
              <Link href={`/${locale}/contact`} prefetch={true}>{t('contact')}</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 cursor-pointer">
              <Link href={`/${locale}/apply`} prefetch={true}>{tCommon('applyNow')}</Link>
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
          <div className="lg:hidden py-6 border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto">
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
                <div className="flex justify-center pb-2">
                  <LanguageSwitcher />
                </div>
                <Button
                  variant="outline"
                  asChild
                  className="relative w-full bg-transparent cursor-pointer transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-current after:content-[''] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-foreground hover:text-primary"
                >
                  <Link href={`/${locale}/contact`} prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>{t('contact')}</Link>
                </Button>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                  <Link href={`/${locale}/apply`} prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>{tCommon('applyNow')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
