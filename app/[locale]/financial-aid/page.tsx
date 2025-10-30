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
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Financial Aid & <span className="text-primary">Scholarships</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe finances should never be a barrier to answering God's call. Discover the support available to
              make your training possible.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cost of Attendance</h2>
              <p className="text-xl text-muted-foreground">Understanding the investment in your training</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-primary text-primary-foreground">Residential Program</Badge>
                </div>
                <div className="space-y-4 mb-6">
                  <CostItem label="Tuition (per year)" amount="$2,000" />
                  <CostItem label="Housing" amount="FREE" highlight />
                  <CostItem label="Meals (3 daily)" amount="FREE" highlight />
                  <CostItem label="Books & Materials" amount="$300" />
                  <CostItem label="Travel to Ghana" amount="$800-2,000" note="Varies by location" />
                  <CostItem label="Visa & Medical" amount="$200" />
                  <CostItem label="Personal Expenses" amount="$500-1,000" note="Per year" />
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Estimated Total (Year 1)</span>
                    <span className="text-2xl font-bold text-primary">$3,800-5,500</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-secondary text-secondary-foreground">Anagkazo Online</Badge>
                </div>
                <div className="space-y-4 mb-6">
                  <CostItem label="Tuition (per year)" amount="$1,200" />
                  <CostItem label="Digital Resources" amount="Included" highlight />
                  <CostItem label="Live Classes" amount="Included" highlight />
                  <CostItem label="E-Library Access" amount="Included" highlight />
                  <CostItem label="Books (optional)" amount="$100-200" />
                  <CostItem label="Internet Connection" amount="Self-provided" />
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Estimated Total (Year 1)</span>
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Available Scholarships</h2>
              <p className="text-xl text-muted-foreground">
                Multiple scholarship opportunities to support your training
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScholarshipCard
                title="Merit Scholarship"
                amount="Up to $1,500"
                description="Awarded based on academic excellence and ministry potential"
                criteria={[
                  "Strong academic record",
                  "Leadership experience",
                  "Ministry involvement",
                  "Compelling testimony",
                ]}
              />
              <ScholarshipCard
                title="Need-Based Aid"
                amount="Up to $2,000"
                description="Financial assistance for students with demonstrated need"
                criteria={[
                  "Financial need documentation",
                  "Complete FAFSA or equivalent",
                  "Personal statement",
                  "Budget plan",
                ]}
              />
              <ScholarshipCard
                title="Regional Scholarships"
                amount="Varies"
                description="Special funding for students from specific regions or countries"
                criteria={[
                  "From designated region",
                  "Strong calling to missions",
                  "Church endorsement",
                  "Good standing",
                ]}
              />
              <ScholarshipCard
                title="Ministry Partner Scholarship"
                amount="Up to $1,000"
                description="For students sent by partner churches and organizations"
                criteria={[
                  "Partner church member",
                  "Church endorsement letter",
                  "Ministry commitment",
                  "Good references",
                ]}
              />
              <ScholarshipCard
                title="Travel Grant"
                amount="Up to $1,500"
                description="Assistance with international travel costs to Ghana"
                criteria={[
                  "Accepted student",
                  "Financial need",
                  "First-time international travel",
                  "Complete application",
                ]}
              />
              <ScholarshipCard
                title="Family Scholarship"
                amount="20% discount"
                description="Reduced tuition for married couples enrolling together"
                criteria={["Both spouses enrolled", "Good standing", "Complete applications", "Housing availability"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply for Aid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How to Apply for Financial Aid</h2>
            </div>

            <div className="space-y-6">
              <AidStep
                number={1}
                title="Complete Your Admission Application"
                description="Submit your application for admission first. Financial aid is only available to accepted students."
              />
              <AidStep
                number={2}
                title="Submit Financial Aid Application"
                description="Fill out the separate financial aid application form, including documentation of financial need."
              />
              <AidStep
                number={3}
                title="Provide Supporting Documents"
                description="Submit required documents such as income statements, bank statements, and personal budget."
              />
              <AidStep
                number={4}
                title="Write Personal Statement"
                description="Explain your financial situation, calling to ministry, and how aid would help you attend ABMTC."
              />
              <AidStep
                number={5}
                title="Receive Aid Decision"
                description="Financial aid decisions are typically made within 2 weeks of receiving complete applications."
              />
            </div>

            <Card className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Priority Deadline</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Submit your financial aid application by May 31st for priority consideration. Late applications are
                    reviewed on a rolling basis as funds are available.
                  </p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Payment Options</h2>
              <p className="text-xl text-muted-foreground">Flexible ways to manage your educational costs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Payment Plans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spread tuition payments over monthly installments throughout the academic year
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Fundraising Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide resources and guidance for raising support from churches and individuals
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sponsor Matching</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We can connect you with potential sponsors and ministry partners who support students
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Finances Hold You Back</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              If God has called you to missions training, we'll work with you to make it financially possible. Apply
              today and let's discuss your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 group"
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href="/contact">Contact Financial Aid Office</Link>
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
