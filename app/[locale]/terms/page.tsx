"use client"

import { Navigation } from "@/components/navigation"
import { useTranslations } from "next-intl"

export default function TermsPage() {
  const t = useTranslations("terms")
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("title")}</h1>
          <p className="text-muted-foreground mb-12">{t("lastUpdated")} {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("agreement.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("agreement.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("useOfServices.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {t("useOfServices.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information in applications</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Use our services for any commercial purpose without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("application.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {t("application.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Accept or reject any application at our discretion</li>
                <li>Request additional information or documentation</li>
                <li>Verify information provided in applications</li>
                <li>Modify admission requirements and deadlines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("tuition.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("tuition.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("conduct.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {t("conduct.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Respectful behavior toward staff, faculty, and fellow students</li>
                <li>Regular attendance and participation in classes and activities</li>
                <li>Adherence to biblical principles and ministry standards</li>
                <li>Compliance with campus rules and regulations</li>
                <li>Honest academic work and integrity in all matters</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("intellectualProperty.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("intellectualProperty.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("disclaimer.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("disclaimer.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("limitation.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("limitation.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("termination.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("termination.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("governingLaw.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("governingLaw.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("changes.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">
                {t("changes.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {t("contact.intro")}
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Anagkazo Bible & Ministry Training Center</strong>
                  <br />
                  Accra, Ghana
                  <br />
                  Email: info@abmtc.org
                  <br />
                  Phone: +233 123 456 789
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  )
}
