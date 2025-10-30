"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Globe, Heart } from "lucide-react"
import Link from "next/link"

export function StudentLifePreview() {
  const t = useTranslations('home.journey')
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  const lifeAspects = [
    {
      icon: BookOpen,
      title: t('biblicalTraining'),
      description: t('biblicalTrainingDesc'),
      image: "/students-studying-bible-in-classroom.jpg",
    },
    {
      icon: Heart,
      title: t('community'),
      description: t('communityDesc'),
      image: "/students-worshiping-and-praying-together.jpg",
    },
    {
      icon: Users,
      title: t('evangelism'),
      description: t('evangelismDesc'),
      image: "/students-doing-street-ministry-and-evangelism-in-a.jpg",
    },
    {
      icon: Globe,
      title: t('missions'),
      description: t('missionsDesc'),
      image: "/graduation-ceremony-sending-missionaries.jpg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = document.querySelectorAll(".life-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Life Aspects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {lifeAspects.map((aspect, index) => {
            const Icon = aspect.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`life-card overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={aspect.image || "/placeholder.svg"}
                    alt={aspect.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{aspect.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{aspect.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
            <Link href="/student-life">
              {t('exploreStudentLife')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
