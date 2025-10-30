"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const scriptures = [
  {
    verse: "And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry, for the edifying of the body of Christ.",
    reference: "Ephesians 4:11-12",
  },
  {
    verse: "And the things that you have heard from me among many witnesses, commit these to faithful men who will be able to teach others also.",
    reference: "2 Timothy 2:2",
  },
  {
    verse: "Go therefore and make disciples of all nations...",
    reference: "Matthew 28:19",
  },
  {
    verse: "How beautiful are the feet of those who bring good news!",
    reference: "Romans 10:15",
  },
  {
    verse: "Here am I. Send me!",
    reference: "Isaiah 6:8",
  },
  {
    verse: "The harvest is plentiful, but the workers are few.",
    reference: "Matthew 9:37",
  },
  {
    verse: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
  },
  {
    verse: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
  }
];


export function ScriptureSection() {
  const t = useTranslations('home.scripture')
  const [currentScripture, setCurrentScripture] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * scriptures.length)
    setCurrentScripture(randomIndex)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("scripture-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const scripture = scriptures[currentScripture]

  return (
    <section id="scripture-section" className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img src="/diverse-international-students-worshiping-together.jpg" alt="Students in worship" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-relaxed italic">
              "{scripture.verse}"
            </blockquote>
            <cite className="text-xl md:text-2xl text-secondary font-semibold not-italic">— {scripture.reference}</cite>
          </div>

          <div
            className={`mt-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-2xl md:text-3xl text-white font-semibold mb-4">{t('callToAction')}</p>
            <p className="text-xl md:text-2xl text-white/90">{t('willYouBeNext')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
