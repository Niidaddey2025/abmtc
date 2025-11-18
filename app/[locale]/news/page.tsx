"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const UPCOMING_EVENTS = [
  { key: "graduation", featured: true },
  { key: "openDay" },
  { key: "missionsConference" },
  { key: "alumniReunion" },
] as const

const LATEST_NEWS = [
  {
    key: "scholarshipProgram",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
  },
  {
    key: "alumniPlanting",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1473&auto=format&fit=crop",
  },
  {
    key: "campusExpansion",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop",
  },
  {
    key: "internationalWeek",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop",
  },
  {
    key: "evangelismCrusade",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470&auto=format&fit=crop",
  },
  {
    key: "onlinePlatform",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
  },
] as const

const PRESS_RELEASES = [
  { key: "anniversary25" },
  { key: "missionPartnership" },
  { key: "recordEnrollment" },
] as const

export default function NewsPage() {
  const t = useTranslations('news')
  const upcomingEvents = UPCOMING_EVENTS.map((event) => {
    const hasFeaturedFlag = 'featured' in event && typeof event.featured === 'boolean'
    return {
      ...event,
      title: t(`events.items.${event.key}.title`),
      dateDay: t(`events.items.${event.key}.dateDay`),
      dateMonth: t(`events.items.${event.key}.dateMonth`),
      time: t(`events.items.${event.key}.time`),
      location: t(`events.items.${event.key}.location`),
      description: t(`events.items.${event.key}.description`),
      category: t(`events.items.${event.key}.category`),
      featured: hasFeaturedFlag ? (event as { featured: boolean }).featured : false,
    }
  })
  const latestNews = LATEST_NEWS.map((item) => ({
    ...item,
    title: t(`latest.items.${item.key}.title`),
    date: t(`latest.items.${item.key}.date`),
    excerpt: t(`latest.items.${item.key}.excerpt`),
    category: t(`latest.items.${item.key}.category`),
  }))
  const pressReleases = PRESS_RELEASES.map((press) => ({
    ...press,
    title: t(`press.items.${press.key}.title`),
    date: t(`press.items.${press.key}.date`),
    excerpt: t(`press.items.${press.key}.excerpt`),
  }))
  const featuredLabel = t('events.featuredLabel')

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

      {/* Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('events.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('events.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.key}
                  title={event.title}
                  dateDay={event.dateDay}
                  dateMonth={event.dateMonth}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  category={event.category}
                  featured={event.featured}
                  featuredLabel={featuredLabel}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('latest.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('latest.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((item) => (
                <NewsCard
                  key={item.key}
                  title={item.title}
                  date={item.date}
                  excerpt={item.excerpt}
                  image={item.image}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('press.title')}</h2>
            </div>

            <div className="space-y-6">
              {pressReleases.map((press) => (
                <PressReleaseCard
                  key={press.key}
                  title={press.title}
                  date={press.date}
                  excerpt={press.excerpt}
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
                <Link href="/apply">
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
                <Link href="/contact">{t('cta.contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function EventCard({
  title,
  dateDay,
  dateMonth,
  time,
  location,
  description,
  category,
  featured = false,
  featuredLabel,
}: {
  title: string
  dateDay: string
  dateMonth: string
  time: string
  location: string
  description: string
  category: string
  featured?: boolean
  featuredLabel: string
}) {
  return (
    <Card className={`p-8 hover:shadow-lg transition-shadow ${featured ? "border-2 border-primary" : ""}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-primary">{dateDay}</div>
            <div className="text-xs text-muted-foreground uppercase">{dateMonth}</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary">{category}</Badge>
              {featured && (
                <Badge className="mb-2 ml-2 bg-secondary text-secondary-foreground">{featuredLabel}</Badge>
              )}
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function NewsCard({
  title,
  date,
  excerpt,
  image,
  category,
}: {
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{category}</Badge>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
      </div>
    </Card>
  )
}

function PressReleaseCard({
  title,
  date,
  excerpt,
}: {
  title: string
  date: string
  excerpt: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground mb-2">{date}</div>
          <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </Card>
  )
}
