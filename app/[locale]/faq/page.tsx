"use client"

import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function FAQPage() {
  const t = useTranslations('faq')
  const locale = useLocale()
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Anagkazo Bible and Ministry Training Centre?",
          a: "A world-class Christian training centre founded by Bishop Dag Heward-Mills to raise anointed ministers for the work of the ministry. We equip students from 40+ nations for global missions and church planting.",
        },
        {
          q: "Where is Anagkazo located?",
          a: "Located in Mampong, Ghana, with a peaceful campus atmosphere for spiritual and academic growth. Our campus provides an ideal environment for focused ministry training.",
        },
        {
          q: "How long is the training program?",
          a: "Programs range from a few months to multi-year advanced ministry courses. Our comprehensive three-year program provides thorough preparation for effective ministry.",
        },
        {
          q: "Can I visit the campus?",
          a: "Yes. Visitations are allowed during open days or by appointment. Contact us at least two weeks in advance to schedule your visit and campus tour.",
        },
        {
          q: "How can I support Anagkazo?",
          a: "You can give, partner, or sponsor a student via the 'Give / Partner' page. Your support enables us to train the next generation of ministers who will transform nations.",
        },
      ],
    },
    {
      category: "Admissions",
      questions: [
        {
          q: "Who can apply?",
          a: "Anyone with a genuine call to ministry or passion to serve God can apply. We welcome students from all nations and backgrounds who have a heart for ministry and readiness to learn.",
        },
        {
          q: "Do I need a pastoral background?",
          a: "No, but a heart for ministry and readiness to learn are essential. We train students from various backgrounds who are committed to serving God.",
        },
        {
          q: "Are scholarships available?",
          a: "Yes, partial scholarships are offered based on merit and need. We believe finances should never be a barrier to answering God's call.",
        },
        {
          q: "When is the next intake?",
          a: "Intakes usually occur twice a year. Check the Admissions page for updates on application deadlines and start dates.",
        },
        {
          q: "Can international students apply?",
          a: "Yes. We welcome students from all nations; visa guidance is available. Currently, we have students from 40+ nations studying at ABMTC.",
        },
      ],
    },
    {
      category: "Financial",
      questions: [
        {
          q: "How much does the program cost?",
          a: "The total cost for the 9-month residential program is approximately $3,500, which includes tuition, accommodation, meals, and materials. We offer various scholarship and financial aid options.",
        },
        {
          q: "What scholarships are available?",
          a: "We offer need-based scholarships (up to 100%), merit scholarships, country-specific scholarships, and work-study opportunities. Over 80% of our students receive some form of financial assistance.",
        },
        {
          q: "Can I work while studying?",
          a: "The program is intensive and requires full-time commitment. However, we offer work-study opportunities on campus that allow students to earn while learning without compromising their studies.",
        },
        {
          q: "Are there payment plans available?",
          a: "Yes, we offer flexible payment plans. Students can pay in installments throughout the program. We work with each student to create a manageable payment schedule.",
        },
      ],
    },
    {
      category: "Program",
      questions: [
        {
          q: "How long is the program?",
          a: "The residential program is 9 months (one academic year), running from September to May. We also offer a 2-year online program for those who cannot attend in person.",
        },
        {
          q: "What subjects are covered?",
          a: "The curriculum includes Biblical Studies, Theology, Church History, Missions, Church Planting, Leadership, Evangelism, Discipleship, Worship, and Practical Ministry. Students also participate in hands-on ministry experience.",
        },
        {
          q: "Will I receive a certificate or degree?",
          a: "Graduates receive a Certificate in Bible and Ministry from ABMTC. We are working toward accreditation for diploma and degree programs.",
        },
        {
          q: "What is the daily schedule like?",
          a: "Days typically include morning devotions (6:30 AM), classes (8 AM - 3 PM), practical ministry (afternoons), and evening worship or study time. Weekends include church services and community activities.",
        },
      ],
    },
    {
      category: "Student Life",
      questions: [
        {
          q: "Where will I live?",
          a: "All students live on campus in shared dormitories. Accommodation includes beds, storage, and basic amenities. Meals are provided in our dining hall.",
        },
        {
          q: "What should I bring?",
          a: "Bring personal items, clothing suitable for Ghana's climate, study materials, Bible, and any necessary medications. We provide bedding, but you may bring personal items for comfort.",
        },
        {
          q: "Is there internet access?",
          a: "Yes, we provide WiFi access on campus for students to stay connected with family and for research purposes.",
        },
        {
          q: "What about healthcare?",
          a: "We have basic medical facilities on campus and partnerships with local clinics and hospitals. Students should have health insurance and bring necessary medications.",
        },
      ],
    },
    {
      category: "After Graduation",
      questions: [
        {
          q: "What support do graduates receive?",
          a: "Graduates join our global alumni network with ongoing mentorship, ministry placement assistance, continued education opportunities, and access to resources for church planting and missions.",
        },
        {
          q: "Where do graduates serve?",
          a: "Our alumni serve in over 40 countries as pastors, church planters, missionaries, ministry leaders, and Christian workers. Many return to their home countries to plant churches and train others.",
        },
        {
          q: "Can I continue my education after ABMTC?",
          a: "Yes! Many graduates pursue further theological education. We have partnerships with several institutions and can provide recommendations and guidance for continued studies.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Find answers to common questions about ABMTC, our programs, admissions, and student life
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${sectionIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">{faq.a}</AccordionContent>
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Our admissions team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Contact Admissions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+233557467460" className="text-secondary transition-colors">
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
