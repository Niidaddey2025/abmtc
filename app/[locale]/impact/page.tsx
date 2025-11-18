"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

const IMPACT_STORIES = [
  {
    key: "thailandChurches",
    image:
      "https://images.unsplash.com/photo-1650784854554-c077585b9720?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    key: "mozambiqueGrowth",
    image:
      "https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    key: "peruHarvest",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1470&auto=format&fit=crop",
  },
] as const

function GlobeFallback() {
  const t = useTranslations('impact')
  return (
    <div className="w-full h-[600px] md:h-[720px] mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
      <div className="text-white text-lg">{t('globe.loading')}</div>
    </div>
  )
}

const AceternityGlobe = dynamic(() => import("@/components/aceternity-globe").then((mod) => ({ default: mod.AceternityGlobe })), {
  ssr: false,
  loading: () => <GlobeFallback />,
})

export default function ImpactPage() {
  const t = useTranslations('impact')
  const locale = useLocale()
  const impactStories = IMPACT_STORIES.map((story) => ({
    ...story,
    title: t(`impactStories.items.${story.key}.title`),
    description: t(`impactStories.items.${story.key}.description`),
    location: t(`impactStories.items.${story.key}.location`),
    year: t(`impactStories.items.${story.key}.year`),
  }))
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('mapSection.title')}
              </h2>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t('mapSection.subtitle')}
              </h3>
              <div className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-4">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  {t('mapSection.quote')}
                </blockquote>
                <p>
                  {t('mapSection.paragraph1')}
                </p>
                <p>
                  {t('mapSection.paragraph2')}
                </p>
              </div>
            </div>

            <AceternityGlobe />
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('impactStories.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('impactStories.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactStories.map((story) => (
                <ImpactStoryCard
                  key={story.key}
                  image={story.image}
                  title={story.title}
                  description={story.description}
                  location={story.location}
                  year={story.year}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Focus Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('missionFocus.title')}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('missionFocus.churchPlanting')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('missionFocus.churchPlantingDesc')}
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('missionFocus.discipleship')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('missionFocus.discipleshipDesc')}
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('missionFocus.communityDev')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('missionFocus.communityDevDesc')}
                </p>
              </Card>
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
                  {t('cta.applyNow')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href={`/${locale}/alumni`}>{t('cta.viewAlumni')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function ImpactStoryCard({
  image,
  title,
  description,
  location,
  year,
}: {
  image: string
  title: string
  description: string
  location: string
  year: string
}) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {year}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{location}</div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}
