"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function AboutPage() {
  const t = useTranslations('about')
  const locale = useLocale()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/diverse-students-praying-and-studying-together-at-.jpg"
            alt="ABMTC Community"
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
              {t('story.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('story.title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
              <p>{t('story.p4')}</p>
              <p>{t('story.p5')}</p>
              <p>{t('story.p6')}</p>
              <p>{t('story.p7')}</p>
              <p>{t('story.p8')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('mission')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('missionText')}
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('vision')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('visionText')}
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('values')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('valuesText')}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detailed */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('coreValues.title')}</h2>
            </div>

            <div className="space-y-8">
              <ValueCard
                title={t('coreValues.biblicalAuthority')}
                description={t('coreValues.biblicalAuthorityDesc')}
              />
              <ValueCard
                title={t('coreValues.practicalTraining')}
                description={t('coreValues.practicalTrainingDesc')}
              />
              <ValueCard
                title={t('coreValues.culturalSensitivity')}
                description={t('coreValues.culturalSensitivityDesc')}
              />
              <ValueCard
                title={t('coreValues.spiritualFormation')}
                description={t('coreValues.spiritualFormationDesc')}
              />
              <ValueCard
                title={t('coreValues.communityLiving')}
                description={t('coreValues.communityLivingDesc')}
              />
              <ValueCard
                title={t('coreValues.sacrificialService')}
                description={t('coreValues.sacrificialServiceDesc')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('heritage.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('heritage.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              <TimelineCard
                year="1996"
                title={t('heritage.1996.title')}
                description={t('heritage.1996.desc')}
              />
              <TimelineCard
                year="1997"
                title={t('heritage.1997.title')}
                description={t('heritage.1997.desc')}
              />
              <TimelineCard
                year="2006"
                title={t('heritage.2006.title')}
                description={t('heritage.2006.desc')}
              />
              <TimelineCard
                year="2008"
                title={t('heritage.2008.title')}
                description={t('heritage.2008.desc')}
              />
              <TimelineCard
                year="2009"
                title={t('heritage.2009.title')}
                description={t('heritage.2009.desc')}
              />
              <TimelineCard
                year={t('heritage.present.title').split(' ')[0]}
                title={t('heritage.present.title')}
                description={t('heritage.present.desc')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('leadership.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('leadership.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <LeaderCard 
                name="Bishop Dag Heward-Mills" 
                role={t('leadership.founder')} 
                image="https://miro.medium.com/v2/0*Z25Qu-2erHwbkCJs.png"
                bio={t('leadership.founderBio')}
              />
              <LeaderCard 
                name="Bishop Emmanuel Nterful" 
                role={t('leadership.viceChancellor')} 
                image="https://www.allchristianquotes.org/quotes/Emmanuel_Nterful/5660/assets/docs/image/335580.jpg"
                bio={t('leadership.vcBio')}
              />
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
                <Link href={`/${locale}/contact`}>{t('cta.learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}

function LeaderCard({ name, role, image, bio }: { name: string; role: string; image: string; bio?: string }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-80">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-primary font-medium mb-3">{role}</p>
        {bio && <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>}
      </div>
    </Card>
  )
}

function TimelineCard({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">{year}</span>
        </div>
      </div>
      <Card className="flex-1 p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </div>
  )
}
