"use client"

import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

type FAQSection = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export default function FAQPage() {
  const t = useTranslations('faq')
  const locale = useLocale()

  const sectionsData = t.raw('sections')
  const sections: FAQSection[] = Array.isArray(sectionsData)
    ? (sectionsData as FAQSection[])
    : []

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t('title')}</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions?.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${sectionIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl.mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('stillHaveQuestions')}</h2>
            <p className="text-xl text-foreground/70 mb-8">{t('admissionsHelp')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href={`/${locale}/contact`}>{t('contactAdmissions')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+233557467460" className="text-secondary transition-colors">
                  {t('scheduleCall')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
