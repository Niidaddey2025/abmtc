"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/graduates-being-commissioned-and-sent-out-for-miss.jpg"
          alt="Graduates being commissioned"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Calling Is Waiting
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Don't let finances, fear, or uncertainty hold you back. Join hundreds of students who have answered the call
            to transform nations through the gospel.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-2 mb-8 text-white">
            <Clock className="w-5 h-5" />
            <span className="text-lg">Next intake deadline:</span>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
          </div>

          {/* Main CTA Button */}
          <Button
            size="lg"
            asChild
            className="
              relative overflow-hidden
              bg-gradient-to-r from-secondary via-accent to-secondary
              hover:from-accent hover:to-secondary
              text-secondary-foreground text-xl
              px-14 py-8
              rounded-full
              shadow-[0_10px_25px_rgba(0,0,0,0.25)]
              transition-all duration-500 ease-out
              group
            "
          >
            <Link href="/apply" className="flex items-center justify-center font-semibold tracking-wide">
              <span className="relative z-10">Apply Now</span>
              <ArrowRight
                className="ml-3 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2"
              />
              {/* Subtle animated glow behind the button */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 
                opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
              ></span>
            </Link>
          </Button>


          {/* Supporting Text */}
          <p className="mt-8 text-white/80 text-lg">
            Free application • Scholarships available • No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-6 py-4 min-w-[100px]">
        <div className="text-4xl md:text-5xl font-bold text-secondary">{value.toString().padStart(2, "0")}</div>
      </div>
      <div className="text-white/80 text-sm mt-2 font-medium">{label}</div>
    </div>
  )
}
