"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DollarSign, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function FinancialAidPage() {
  const t = useTranslations('financialAid')
  const locale = useLocale()
  const scholarships = [
    {
      title: t('scholarships.merit'),
      amount: t('scholarships.meritAmount'),
      description: t('scholarships.meritDesc'),
      criteria: t.raw('scholarships.meritCriteria') as string[],
    },
    {
      title: t('scholarships.needBased'),
      amount: t('scholarships.needAmount'),
      description: t('scholarships.needDesc'),
      criteria: t.raw('scholarships.needCriteria') as string[],
    },
    {
      title: t('scholarships.regional'),
      amount: t('scholarships.regionalAmount'),
      description: t('scholarships.regionalDesc'),
      criteria: t.raw('scholarships.regionalCriteria') as string[],
    },
    {
      title: t('scholarships.partner'),
      amount: t('scholarships.partnerAmount'),
      description: t('scholarships.partnerDesc'),
      criteria: t.raw('scholarships.partnerCriteria') as string[],
    },
    {
      title: t('scholarships.travel'),
      amount: t('scholarships.travelAmount'),
      description: t('scholarships.travelDesc'),
      criteria: t.raw('scholarships.travelCriteria') as string[],
    },
    {
      title: t('scholarships.family'),
      amount: t('scholarships.familyAmount'),
      description: t('scholarships.familyDesc'),
      criteria: t.raw('scholarships.familyCriteria') as string[],
    },
  ]

  const aidSteps = [1, 2, 3, 4, 5]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{t('title')}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('costOfAttendance.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('costOfAttendance.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-primary text-primary-foreground">{t('costOfAttendance.residential')}</Badge>
                </div>
                <div className="space-y-4 mb-6">
                  <CostItem label={t('costOfAttendance.tuition')} amount="$2,000" />
                  <CostItem label={t('costOfAttendance.housing')} amount={t('costOfAttendance.free')} highlight />
                  <CostItem label={t('costOfAttendance.meals')} amount={t('costOfAttendance.free')} highlight />
                  <CostItem label={t('costOfAttendance.books')} amount="$300" />
                  <CostItem label={t('costOfAttendance.travel')} amount="$800-2,000" note={t('costOfAttendance.variesByLocation')} />
                  <CostItem label={t('costOfAttendance.visa')} amount="$200" />
                  <CostItem label={t('costOfAttendance.personal')} amount="$500-1,000" note={t('costOfAttendance.perYear')} />
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">{t('costOfAttendance.estimatedTotal')}</span>
                    <span className="text-2xl font-bold text-primary">$3,800-5,500</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-secondary text-secondary-foreground">{t('costOfAttendance.online')}</Badge>
                </div>
                <div className="space-y-4 mb-6">
                  <CostItem label={t('costOfAttendance.tuition')} amount="$1,200" />
                  <CostItem label={t('costOfAttendance.digitalResources')} amount={t('costOfAttendance.included')} highlight />
                  <CostItem label={t('costOfAttendance.liveClasses')} amount={t('costOfAttendance.included')} highlight />
                  <CostItem label={t('costOfAttendance.eLibrary')} amount={t('costOfAttendance.included')} highlight />
                  <CostItem label={`${t('costOfAttendance.books')} (${t('costOfAttendance.optional')})`} amount="$100-200" />
                  <CostItem label={t('costOfAttendance.internet')} amount={t('costOfAttendance.selfProvided')} />
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">{t('costOfAttendance.estimatedTotal')}</span>
                    <span className="text-2xl font-bold text-primary">$1,300-1,400</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('scholarships.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('scholarships.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.title} {...scholarship} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply for Aid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('howToApply.title')}</h2>
            </div>

            <div className="space-y-6">
              {aidSteps.map((step) => (
                <AidStep
                  key={step}
                  number={step}
                  title={t(`howToApply.step${step}`)}
                  description={t(`howToApply.step${step}Desc`)}
                />
              ))}
            </div>

            <Card className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{t('howToApply.priorityDeadline')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('howToApply.priorityDesc')}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('paymentOptions.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('paymentOptions.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('paymentOptions.paymentPlans')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('paymentOptions.paymentPlansDesc')}</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('paymentOptions.fundraising')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('paymentOptions.fundraisingDesc')}</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('paymentOptions.sponsorMatching')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('paymentOptions.sponsorMatchingDesc')}</p>
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
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">{t('cta.subtitle')}</p>
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
                <Link href={`/${locale}/contact`}>{t('cta.contactFinance')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function CostItem({
  label,
  amount,
  note,
  highlight,
}: {
  label: string
  amount: string
  note?: string
  highlight?: boolean
}) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className={`font-medium ${highlight ? "text-green-600 dark:text-green-400" : "text-foreground"}`}>
          {label}
        </div>
        {note && <div className="text-xs text-muted-foreground">{note}</div>}
      </div>
      <div className={`font-bold ${highlight ? "text-green-600 dark:text-green-400" : "text-foreground"}`}>
        {amount}
      </div>
    </div>
  )
}

function ScholarshipCard({
  title,
  amount,
  description,
  criteria,
}: {
  title: string
  amount: string
  description: string
  criteria: string[]
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <div className="text-2xl font-bold text-primary mb-3">{amount}</div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="pt-4 border-t border-border">
        <div className="text-sm font-semibold text-foreground mb-2">Criteria:</div>
        <ul className="space-y-1">
          {criteria.map((item, index) => (
            <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
              <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

function AidStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}
