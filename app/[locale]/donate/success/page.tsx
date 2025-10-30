"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function DonationSuccessPage() {
  const t = useTranslations('donate')
  const locale = useLocale()

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 text-center">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-500" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t('successTitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('successMessage')}
              </p>
              <p className="text-muted-foreground mb-8">
                {t('successDetails')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}`}>{t('backToHome')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={`/${locale}/give`}>{t('viewGivePage')}</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
