"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Users, GraduationCap, Globe, DollarSign, CreditCard, Smartphone } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function GivePage() {
  const t = useTranslations('give')
  const locale = useLocale()
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
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground/80 italic">
              {t('hero.scripture')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('why.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ImpactCard
              icon={Users}
              value="800+"
              label={t('why.studentsTrained')}
              description={t('why.studentsTrainedDesc')}
            />
            <ImpactCard
              icon={Globe}
              value="45+"
              label={t('why.nationsReached')}
              description={t('why.nationsReachedDesc')}
            />
            <ImpactCard
              icon={Heart}
              value="25+"
              label={t('why.churchesPlanted')}
              description={t('why.churchesPlantedDesc')}
            />
            <ImpactCard
              icon={GraduationCap}
              value="300+"
              label={t('why.alumniNetwork')}
              description={t('why.alumniNetworkDesc')}
            />
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('ways.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('ways.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <GivingOptionCard
                icon={Heart}
                title={t('ways.oneTime')}
                description={t('ways.oneTimeDesc')}
                action={t('ways.oneTimeAction')}
                paymentType="one-time"
                locale={locale}
              />
              <GivingOptionCard
                icon={Users}
                title={t('ways.monthly')}
                description={t('ways.monthlyDesc')}
                action={t('ways.monthlyAction')}
                paymentType="monthly"
                locale={locale}
                featured
              />
              <GivingOptionCard
                icon={GraduationCap}
                title={t('ways.sponsor')}
                description={t('ways.sponsorDesc')}
                action={t('ways.sponsorAction')}
                paymentType="sponsor"
                locale={locale}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('methods.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('methods.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <DonationMethodCard
                icon={Smartphone}
                title={t('methods.mobileMoney')}
                description={t('methods.mobileMoneyDesc')}
                details={[
                  t('methods.mobileMoneyDetail1'),
                  t('methods.mobileMoneyDetail2'),
                  t('methods.mobileMoneyDetail3')
                ]}
              />
              <DonationMethodCard
                icon={CreditCard}
                title={t('methods.bankTransfer')}
                description={t('methods.bankTransferDesc')}
                details={[
                  t('methods.bankTransferDetail1'),
                  t('methods.bankTransferDetail2'),
                  t('methods.bankTransferDetail3')
                ]}
              />
              <DonationMethodCard
                icon={DollarSign}
                title={t('methods.international')}
                description={t('methods.internationalDesc')}
                details={[
                  t('methods.internationalDetail1'),
                  t('methods.internationalDetail2'),
                  t('methods.internationalDetail3')
                ]}
              />
            </div>

            <div className="text-center mt-12">
              <Card className="p-8 max-w-2xl mx-auto bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('methods.needHelp')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('methods.needHelpDesc')}
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}/contact`}>
                    {t('methods.contactUs')}
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('impact.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('impact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ImpactStoryCard
                name={t('impact.story1Name')}
                location={t('impact.story1Location')}
                image="/young-brazilian-woman-student-smiling.jpg"
                story={t('impact.story1Text')}
                impact={t('impact.story1Impact')}
              />
              <ImpactStoryCard
                name={t('impact.story2Name')}
                location={t('impact.story2Location')}
                image="https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                story={t('impact.story2Text')}
                impact={t('impact.story2Impact')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{t('info.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">{t('info.taxReceipts')}</strong> {t('info.taxReceiptsDesc')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">{t('info.transparency')}</strong> {t('info.transparencyDesc')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">{t('info.usage')}</strong> {t('info.usageDesc')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">{t('info.contact')}</strong> {t('info.contactDesc')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-secondary" />
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
                <Link href={`/${locale}/donate?type=one-time`}>
                  {t('cta.giveNow')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href={`/${locale}/contact`}>{t('cta.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function ImpactCard({
  icon: Icon,
  value,
  label,
  description,
}: {
  icon: any
  value: string
  label: string
  description: string
}) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm font-bold text-foreground mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </Card>
  )
}

function GivingOptionCard({
  icon: Icon,
  title,
  description,
  action,
  paymentType,
  locale,
  featured = false,
}: {
  icon: any
  title: string
  description: string
  action: string
  paymentType: string
  locale: string
  featured?: boolean
}) {
  return (
    <Card className={`p-8 text-center hover:shadow-lg transition-shadow ${featured ? "border-2 border-primary" : ""}`}>
      {featured && <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <Button asChild className="w-full bg-primary hover:bg-primary/90">
        <Link href={`/${locale}/donate?type=${paymentType}`}>{action}</Link>
      </Button>
    </Card>
  )
}

function DonationMethodCard({
  icon: Icon,
  title,
  description,
  details,
}: {
  icon: any
  title: string
  description: string
  details: string[]
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 text-center">{description}</p>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <div key={index} className="text-sm text-muted-foreground text-center">
            {detail}
          </div>
        ))}
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
  impact: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{location}</Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{story}</p>
        <div className="p-4 bg-primary/5 rounded-lg">
          <p className="text-sm font-bold text-primary">{impact}</p>
        </div>
      </div>
    </Card>
  )
}
