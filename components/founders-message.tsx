"use client"

import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"
import Link from "next/link"

export function FoundersMessage() {
  const t = useTranslations('home.founders')
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://miro.medium.com/v2/0*Z25Qu-2erHwbkCJs.png"
                  alt="Bishop Dag Heward-Mills"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{t('name')}</h3>
                  <p className="text-white/90">{t('role')}</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div>
              <Card className="p-8 relative">
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
                <div className="relative z-10 pt-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('message1')}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('message2')}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('message3')}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {t('message4')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-bold text-foreground text-lg">{t('founderName')}</div>
                      <div className="text-sm text-muted-foreground">{t('founderTitle1')}</div>
                      <div className="text-sm text-muted-foreground">{t('founderTitle2')}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-8 text-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 group">
                  <Link href="/about">
                    {t('learnMoreHistory')}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
