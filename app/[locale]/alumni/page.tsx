"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Users, BookOpen, Heart, Globe } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const STORY_CONTENT = [
  {
    key: "sarahKim",
    image:
      "https://images.unsplash.com/photo-1650784854554-c077585b9720?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    key: "emmanuelBanda",
    image:
      "https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    key: "mariaSantos",
    image: "/young-brazilian-woman-student-smiling.jpg",
  },
] as const

const TESTIMONIAL_CONTENT = [
  { key: "jamesOsei" },
  { key: "annaKowalski" },
  { key: "samuelNguyen" },
] as const

export default function AlumniPage() {
  const t = useTranslations('alumni')
  const featuredStories = STORY_CONTENT.map((story) => {
    const impact = t.raw(`stories.items.${story.key}.impact`) as string[] | undefined
    return {
      ...story,
      name: t(`stories.items.${story.key}.name`),
      classYear: t(`stories.items.${story.key}.class`),
      location: t(`stories.items.${story.key}.location`),
      story: t(`stories.items.${story.key}.story`),
      impact: impact ?? [],
    }
  })
  const testimonials = TESTIMONIAL_CONTENT.map((testimonial) => ({
    ...testimonial,
    quote: t(`testimonials.items.${testimonial.key}.quote`),
    name: t(`testimonials.items.${testimonial.key}.name`),
    details: t(`testimonials.items.${testimonial.key}.details`),
  }))

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-lg px-4 py-2">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <StatCard icon={Users} value="300+" label={t('stats.alumniWorldwide')} />
              <StatCard icon={Globe} value="45+" label={t('stats.nationsServed')} />
              <StatCard icon={MapPin} value="25+" label={t('stats.churchesPlanted')} />
              <StatCard icon={Heart} value="1000+" label={t('stats.livesTransformed')} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('stories.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('stories.subtitle')}
              </p>
            </div>

            <div className="space-y-12">
              {featuredStories.map((story) => (
                <AlumniStoryLarge
                  key={story.key}
                  name={story.name}
                  class={story.classYear}
                  location={story.location}
                  image={story.image}
                  story={story.story}
                  impact={story.impact}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('benefits.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('benefits.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon={Users}
                title={t('benefits.globalNetwork.title')}
                description={t('benefits.globalNetwork.description')}
              />
              <BenefitCard
                icon={BookOpen}
                title={t('benefits.continuingEducation.title')}
                description={t('benefits.continuingEducation.description')}
              />
              <BenefitCard
                icon={Heart}
                title={t('benefits.prayerSupport.title')}
                description={t('benefits.prayerSupport.description')}
              />
              <BenefitCard
                icon={Globe}
                title={t('benefits.resourceLibrary.title')}
                description={t('benefits.resourceLibrary.description')}
              />
              <BenefitCard
                icon={Users}
                title={t('benefits.mentorship.title')}
                description={t('benefits.mentorship.description')}
              />
              <BenefitCard
                icon={Calendar}
                title={t('benefits.annualReunion.title')}
                description={t('benefits.annualReunion.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('testimonials.title')}</h2>
            </div>

            <div className="space-y-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.key}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  details={testimonial.details}
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
                <Link href="/contact">{t('cta.contactAlumni')}</Link>
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

function AlumniStoryLarge({
  name,
  class: classYear,
  location,
  image,
  story,
  impact,
  t,
}: {
  name: string
  class: string
  location: string
  image: string
  story: string
  impact: string[]
  t: any
}) {
  return (
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative h-96 lg:h-auto">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary text-primary-foreground">{classYear}</Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">{name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{story}</p>
          <div>
            <h4 className="font-bold text-foreground mb-3">{t('stories.ministryImpact')}</h4>
            <div className="grid grid-cols-2 gap-3">
              {impact.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function AlumniCard({
  name,
  class: classYear,
  location,
  ministry,
  image,
  description,
}: {
  name: string
  class: string
  location: string
  ministry: string
  image: string
  description: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">{classYear}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{ministry}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

function BenefitCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function TestimonialCard({ quote, name, details }: { quote: string; name: string; details: string }) {
  return (
    <Card className="p-8">
      <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">"{quote}"</blockquote>
      <div className="flex items-center gap-4">
        <div>
          <div className="font-bold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{details}</div>
        </div>
      </div>
    </Card>
  )
}
