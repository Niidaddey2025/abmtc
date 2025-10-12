"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { Playfair_Display, Lato } from "next/font/google"

const heroHeadingFont = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], preload: true })
const heroBodyFont = Lato({ subsets: ["latin"], weight: ["400", "700"], preload: true })

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <video
          src="/abmtc-tour.mp4"
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Headline */}
          <h1
            className={`${heroHeadingFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary via-white to-secondary/80 mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transform Your Life, <span>Answer the Call</span>
          </h1>

          <p
            className={`${heroBodyFont.className} text-xl md:text-2xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Join students from over 40 nations at ABMTC in Ghana for transformative Bible training, practical ministry
            experience, and a lifetime of global impact.
          </p>

          {/* Animated Statistics */}
          <div
            className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <StatItem number="40+" label="Nations Represented" />
            <StatItem number="20+" label="Countries with Church Plants" />
            <StatItem number="300+" label="Graduates Serving Globally" />
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 group"
            >
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 backdrop-blur-sm group"
            >
              <Link href="/programs">
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                View Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 animate-pulse-glow">{number}</div>
      <div className="text-sm md:text-base text-white/80 font-medium">{label}</div>
    </div>
  )
}
