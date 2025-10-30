"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Calendar, FileText, DollarSign, Users, MessageSquare, Mail, Plane, Home, GraduationCap, CreditCard, Heart, Shield, Banknote } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function AdmissionsPage() {
  const t = useTranslations('admissions')
  const tCommon = useTranslations('common')
  const tFinancialAid = useTranslations('financialAid')
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
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
              <Link href={`/${locale}/apply`}>
                {t('hero.cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Application Timeline</h2>
              <p className="text-xl text-muted-foreground">Important dates for the upcoming academic year</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TimelineCard
                date="Jan 15"
                title="Applications Open"
                description="Begin your application for Fall 2025"
                status="current"
              />
              <TimelineCard
                date="May 31"
                title="Priority Deadline"
                description="Submit by this date for scholarship priority"
                status="upcoming"
              />
              <TimelineCard
                date="Jul 15"
                title="Final Deadline"
                description="Last day to submit applications"
                status="upcoming"
              />
              <TimelineCard
                date="Sep 1"
                title="Classes Begin"
                description="Orientation and first day of classes"
                status="upcoming"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Admission Requirements */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('requirements.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('requirements.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('requirements.basicTitle')}</h3>
                <ul className="space-y-4">
                  <RequirementItem text={t('requirements.basic1')} />
                  <RequirementItem text={t('requirements.basic2')} />
                  <RequirementItem text={t('requirements.basic3')} />
                  <RequirementItem text={t('requirements.basic4')} />
                  <RequirementItem text={t('requirements.basic5')} />
                  <RequirementItem text={t('requirements.basic6')} />
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('requirements.materialsTitle')}</h3>
                <ul className="space-y-4">
                  <RequirementItem text={t('requirements.material1')} />
                  <RequirementItem text={t('requirements.material2')} />
                  <RequirementItem text={t('requirements.material3')} />
                  <RequirementItem text={t('requirements.material4')} />
                  <RequirementItem text={t('requirements.material5')} />
                  <RequirementItem text={t('requirements.material6')} />
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('process.title')}</h2>
              <p className="text-xl text-muted-foreground mb-4">
                {t('process.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground/80">
                {t('process.description')}
              </p>
            </div>

            {/* 4-Step Infographic */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <InfographicStep
                number={1}
                icon={FileText}
                title={t('process.step1')}
                description={t('process.step1Desc')}
              />
              <InfographicStep
                number={2}
                icon={MessageSquare}
                title={t('process.step2')}
                description={t('process.step2Desc')}
              />
              <InfographicStep
                number={3}
                icon={Mail}
                title={t('process.step3')}
                description={t('process.step3Desc')}
              />
              <InfographicStep
                number={4}
                icon={Plane}
                title={t('process.step4')}
                description={t('process.step4Desc')}
              />
            </div>

            {/* Sticky CTA */}
            <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('process.ctaTitle')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('process.ctaSubtitle')}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                <Link href={`/${locale}/apply`}>
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid Overview */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Financial Support</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('financial.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('financial.subtitle')}
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left Side - Major Benefits */}
              <div className="space-y-6">
                <FinancialBenefitCard
                  icon={Home}
                  title={t('financial.housing')}
                  description={t('financial.housingDesc')}
                  highlight={tFinancialAid('costOfAttendance.free')}
                  bgColor="bg-primary/5 border-primary/20"
                  iconColor="text-primary"
                />
                <FinancialBenefitCard
                  icon={GraduationCap}
                  title={t('financial.scholarships')}
                  description={t('financial.scholarshipsDesc')}
                  highlight={tFinancialAid('scholarships.needAmount')}
                  bgColor="bg-accent/10 border-accent/30"
                  iconColor="text-accent-foreground"
                />
              </div>

              {/* Right Side - Additional Support */}
              <div className="space-y-6">
                <FinancialBenefitCard
                  icon={Plane}
                  title={t('financial.travel')}
                  description={t('financial.travelDesc')}
                  highlight={t('financial.caseByCase')}
                  bgColor="bg-muted/30 border-muted"
                  iconColor="text-muted-foreground"
                />
                <FinancialBenefitCard
                  icon={CreditCard}
                  title={t('financial.payment')}
                  description={t('financial.paymentDesc')}
                  highlight={t('financial.zeroInterest')}
                  bgColor="bg-secondary/10 border-secondary/30"
                  iconColor="text-secondary-foreground"
                />
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white rounded-2xl border border-border p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('financialBreakdown.title')}</h3>
                <p className="text-muted-foreground">{t('financialBreakdown.subtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Banknote className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{t('financialBreakdown.tuitionAmount')}</div>
                  <div className="text-sm text-muted-foreground mb-2">{t('financialBreakdown.tuitionLabel')}</div>
                  <div className="text-xs text-primary font-medium">{t('financialBreakdown.tuitionNote')}</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <Home className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">$0</div>
                  <div className="text-sm text-muted-foreground mb-2">{t('financialBreakdown.housingLabel')}</div>
                  <div className="text-xs text-primary font-medium">{t('financialBreakdown.housingNote')}</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Shield className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{t('financialBreakdown.personalAmount')}</div>
                  <div className="text-sm text-muted-foreground mb-2">{t('financialBreakdown.personalLabel')}</div>
                  <div className="text-xs text-muted-foreground font-medium">{t('financialBreakdown.personalNote')}</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
              <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">{t('financialCta.title')}</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">{t('financialCta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
                >
                  <Link href={`/${locale}/financial-aid`}>{t('financialCta.primary')}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
                >
                  <Link href={`/${locale}/contact`}>{t('financialCta.secondary')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('faqs.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('faqs.subtitle')}</p>
            </div>

            <div className="space-y-6">
              <FAQItem
                question={t('faqs.q1')}
                answer={t('faqs.a1')}
              />
              <FAQItem
                question={t('faqs.q2')}
                answer={t('faqs.a2')}
              />
              <FAQItem
                question={t('faqs.q3')}
                answer={t('faqs.a3')}
              />
              <FAQItem
                question={t('faqs.q4')}
                answer={t('faqs.a4')}
              />
              <FAQItem
                question={t('faqs.q5')}
                answer={t('faqs.a5')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                <Link href={`/${locale}/apply`}>
                  {t('cta.startApplication')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href={`/${locale}/contact`}>{tCommon('contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function TimelineCard({
  date,
  title,
  description,
  status,
}: {
  date: string
  title: string
  description: string
  status: "current" | "upcoming" | "past"
}) {
  return (
    <Card className={`p-6 ${status === "current" ? "border-primary border-2" : ""}`}>
      {status === "current" && <Badge className="mb-3 bg-primary text-primary-foreground">Current</Badge>}
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-5 h-5 text-primary" />
        <div className="text-2xl font-bold text-primary">{date}</div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}

function RequirementItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-foreground">{text}</span>
    </li>
  )
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function InfographicStep({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: number
  icon: any
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function FinancialBenefitCard({
  icon: Icon,
  title,
  description,
  highlight,
  bgColor,
  iconColor,
}: {
  icon: any
  title: string
  description: string
  highlight: string
  bgColor: string
  iconColor: string
}) {
  return (
    <Card className={`p-6 ${bgColor} hover:shadow-lg transition-shadow`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <Badge className="bg-white/80 text-foreground border-0 font-semibold">
              {highlight}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold text-foreground mb-3">{question}</h3>
      <p className="text-muted-foreground leading-relaxed">{answer}</p>
    </Card>
  )
}
