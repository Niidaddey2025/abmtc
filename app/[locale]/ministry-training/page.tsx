"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Users, Globe, BookOpen, Target, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

const PROGRAMS = [
  { key: "evangelism", icon: Heart },
  { key: "churchPlanting", icon: Users },
  { key: "missions", icon: Globe },
  { key: "discipleship", icon: BookOpen },
] as const

const IMPACT_STORIES = [
  {
    key: "emmanuelBanda",
    image:
      "https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    key: "sarahKim",
    image:
      "https://images.unsplash.com/photo-1650784854554-c077585b9720?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
] as const

const APPROACH_ITEMS = [
  { key: "foundation", icon: BookOpen },
  { key: "practice", icon: Target },
  { key: "mentorship", icon: Users },
  { key: "multiplication", icon: TrendingUp },
] as const

export default function MinistryTrainingPage() {
  const t = useTranslations('ministry')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const programCards = PROGRAMS.map((program) => {
    const highlights = t.raw(`programs.${program.key}Highlights`) as string[] | undefined
    return {
      ...program,
      title: t(`programs.${program.key}`),
      description: t(`programs.${program.key}Desc`),
      highlights: highlights ?? [],
    }
  })
  const impactStories = IMPACT_STORIES.map((story) => {
    const impact = t.raw(`impactStories.items.${story.key}.impact`) as string[] | undefined
    return {
      ...story,
      name: t(`impactStories.items.${story.key}.name`),
      location: t(`impactStories.items.${story.key}.location`),
      story: t(`impactStories.items.${story.key}.story`),
      impact: impact ?? [],
    }
  })
  const approachCards = APPROACH_ITEMS.map((item) => ({
    ...item,
    title: t(`approach.items.${item.key}.title`),
    description: t(`approach.items.${item.key}.description`),
  }))
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">{t('hero.badge')}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground/80 italic">
              {t('hero.scripture')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('intro.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('intro.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StatCard icon={Users} value="1000+" label={t('intro.soulsWon')} />
            <StatCard icon={Globe} value="45+" label={t('intro.nationsReached')} />
            <StatCard icon={Heart} value="25+" label={t('intro.churchesPlanted')} />
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('programs.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('programs.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {programCards.map((program) => (
                <ProgramCard
                  key={program.key}
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  highlights={program.highlights}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('impactStories.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('impactStories.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {impactStories.map((story) => (
                <ImpactStoryCard
                  key={story.key}
                  name={story.name}
                  location={story.location}
                  image={story.image}
                  story={story.story}
                  impact={story.impact}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('approach.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('approach.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachCards.map((card) => (
                <ApproachCard
                  key={card.key}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 group"
              >
                <Link href={`/${locale}/apply`}>
                  {tCommon('applyNow')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href={`/${locale}/contact`}>{tCommon('learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  )
}

function ProgramCard({
  icon: Icon,
  title,
  description,
  highlights,
}: {
  icon: any
  title: string
  description: string
  highlights: string[]
}) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="p-4 bg-primary/10 rounded-lg">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

function ImpactStoryCard({
  name,
  location,
  image,
  story,
  impact,
}: {
  name: string
  location: string
  image: string
  story: string
  impact: string[]
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">{location}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{story}</p>
        <div className="grid grid-cols-2 gap-2">
          {impact.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

function ApproachCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}
