"use client"

import { Navigation } from "@/components/navigation"
import { useTranslations } from "next-intl"

type TermsSection = {
  title: string
  body?: string[]
  items?: string[]
}

type ContactSection = {
  title: string
  description: string
  organization: string
  addressLines?: string[]
  emailLabel: string
  email: string
  phoneLabel: string
  phones?: string[]
}

export default function TermsPage() {
  const t = useTranslations('terms')
 
  const sectionsData = t.raw('sections')
  const sections: TermsSection[] = Array.isArray(sectionsData) ? (sectionsData as TermsSection[]) : []
  const contactData = t.raw('contact') as ContactSection | undefined

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h1>
          <p className="text-muted-foreground mb-12">{t('lastUpdated')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            {sections.map((section, index) => (
              <section key={`${section.title}-${index}`}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                {section.body?.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/80 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {section.items && section.items.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {contactData && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{contactData.title}</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">{contactData.description}</p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-foreground/80">
                    <strong>{contactData.organization}</strong>
                    {contactData.addressLines?.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="block mt-4">
                      <strong>{contactData.emailLabel}:</strong> {contactData.email}
                    </span>
                    {contactData.phones && contactData.phones.length > 0 && (
                      <span className="block mt-2">
                        <strong>{contactData.phoneLabel}:</strong> {contactData.phones.join(' | ')}
                      </span>
                    )}
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
