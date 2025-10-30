"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Home, Users, Music, BookOpen, Globe, Utensils } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function StudentLifePage() {
  const t = useTranslations('studentLife')
  const locale = useLocale()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/diverse-students-praying-and-studying-together-at-.jpg"
            alt="Student life at ABMTC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
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

      {/* Campus Life Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('campusLife.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
                {t('campusLife.description1')}
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('campusLife.description2')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <LifeAspectCard
                icon={Home}
                title={t('aspects.dormLife')}
                description={t('aspects.dormLifeDesc')}
              />
              <LifeAspectCard
                icon={Utensils}
                title={t('aspects.meals')}
                description={t('aspects.mealsDesc')}
              />
              <LifeAspectCard
                icon={Music}
                title={t('aspects.worship')}
                description={t('aspects.worshipDesc')}
              />
              <LifeAspectCard
                icon={Users}
                title={t('aspects.community')}
                description={t('aspects.communityDesc')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Anagkazo */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('whyChoose.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <Heart className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground leading-relaxed">{t('whyChoose.reason1')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground leading-relaxed">{t('whyChoose.reason2')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground leading-relaxed">{t('whyChoose.reason3')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground leading-relaxed">{t('whyChoose.reason4')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground leading-relaxed">{t('whyChoose.reason5')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <Music className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground leading-relaxed">{t('whyChoose.reason6')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Community & Friendship */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">{t('sections.communityTitle')}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('sections.communityText')}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.communityPoint1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.communityPoint2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.communityPoint3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.communityPoint4')}</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/campus-life-1.jpg"
                  alt="Students in community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Worship & Prayer Culture */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/campus-life-0.png"
                  alt="Worship at ABMTC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-foreground mb-6">{t('sections.spiritualTitle')}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('sections.spiritualText')}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.spiritualPoint1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.spiritualPoint2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.spiritualPoint3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.spiritualPoint4')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Practical Ministry */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">{t('sections.practicalTitle')}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('sections.practicalText')}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.practicalPoint1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.practicalPoint2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.practicalPoint3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{t('sections.practicalPoint4')}</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/campus-life-5.jpg"
                  alt="Ministry outreach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('testimonials.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('testimonials.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote={t('testimonials.quote1')}
                name={t('testimonials.name1')}
                country={t('testimonials.country1')}
                image="https://images.unsplash.com/photo-1602342323893-b11f757957c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <TestimonialCard
                quote={t('testimonials.quote2')}
                name={t('testimonials.name2')}
                country={t('testimonials.country2')}
                image="https://images.unsplash.com/photo-1605398920523-26470ee935f6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <TestimonialCard
                quote={t('testimonials.quote3')}
                name={t('testimonials.name3')}
                country={t('testimonials.country3')}
                image="https://images.unsplash.com/photo-1738083378447-03319dcc31f0?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('facilities.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('facilities.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FacilityCard
                icon={Home}
                title={t('facilities.dormitories')}
                description={t('facilities.dormitoriesDesc')}
              />
              <FacilityCard
                icon={BookOpen}
                title={t('facilities.library')}
                description={t('facilities.libraryDesc')}
              />
              <FacilityCard
                icon={Users}
                title={t('facilities.classrooms')}
                description={t('facilities.classroomsDesc')}
              />
              <FacilityCard icon={Music} title={t('facilities.chapel')} description={t('facilities.chapelDesc')} />
              <FacilityCard icon={Utensils} title={t('facilities.diningHall')} description={t('facilities.diningHallDesc')} />
              <FacilityCard icon={Globe} title={t('facilities.recreation')} description={t('facilities.recreationDesc')} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.ctaTitle')}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {t('cta.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 group"
              >
                <Link href={`/${locale}/apply`}>
                  {t('cta.title')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href={`/${locale}/contact`}>{t('cta.subtitle')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function LifeAspectCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </Card>
  )
}

function TestimonialCard({
  quote,
  name,
  country,
  image,
}: {
  quote: string
  name: string
  country: string
  image: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <blockquote className="text-foreground mb-6 leading-relaxed italic">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-bold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{country}</div>
        </div>
      </div>
    </Card>
  )
}

function FacilityCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
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
