"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Globe, Clock, Users, Video, BookOpen } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export default function OnlinePage() {
  const t = useTranslations('online')
  const locale = useLocale()
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t('title')}</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('description.title')}
              </h2>
            </div>
            <div className="text-lg text-muted-foreground space-y-6">
              <blockquote className="border-l-4 border-primary pl-6 italic text-xl">
                {t('description.quote')}
              </blockquote>
              <p className="leading-relaxed">
                {t('description.paragraph1')}
              </p>
              <p className="leading-relaxed">
                {t('description.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Globe,
                title: t('features.learnAnywhere'),
                description: t('features.learnAnywhereDesc'),
              },
              {
                icon: Clock,
                title: t('features.flexibleSchedule'),
                description: t('features.flexibleScheduleDesc'),
              },
              {
                icon: Users,
                title: t('features.liveInteraction'),
                description: t('features.liveInteractionDesc'),
              },
              {
                icon: Video,
                title: t('features.hdVideo'),
                description: t('features.hdVideoDesc'),
              },
              {
                icon: BookOpen,
                title: t('features.sameCurriculum'),
                description: t('features.sameCurriculumDesc'),
              },
              {
                icon: Check,
                title: t('features.certificate'),
                description: t('features.certificateDesc'),
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('courseStructure.title')}</h2>
            <div className="space-y-6">
              {[
                {
                  title: t('courseStructure.foundation'),
                  duration: t('courseStructure.foundationDuration'),
                  description: t('courseStructure.foundationDesc'),
                },
                {
                  title: t('courseStructure.advanced'),
                  duration: t('courseStructure.advancedDuration'),
                  description: t('courseStructure.advancedDesc'),
                },
                {
                  title: t('courseStructure.practical'),
                  duration: t('courseStructure.practicalDuration'),
                  description: t('courseStructure.practicalDesc'),
                },
              ].map((course, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-foreground/70">{course.description}</p>
                    </div>
                    <div className="text-primary font-semibold whitespace-nowrap">{course.duration}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('pricing.title')}</h2>
            <p className="text-xl text-foreground/70 mb-8">
              {t('pricing.subtitle')}
            </p>
            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">$299</div>
              <p className="text-xl text-foreground/70 mb-6">{t('pricing.perCourse')}</p>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  "12 weeks of comprehensive content",
                  "Live weekly sessions with instructors",
                  "Access to all course materials",
                  "Certificate upon completion",
                  "Lifetime access to recordings",
                  "Scholarship options available",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                {t('pricing.applyScholarship')}
              </Button>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('cta.subtitle')}
          </p>
          <Button size="lg" variant="secondary">
            {t('cta.enrollToday')}
          </Button>
        </div>
      </section>

    </div>
  )
}
