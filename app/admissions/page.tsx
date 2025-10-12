import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Calendar, FileText, DollarSign, Users, MessageSquare, Mail, Plane, Home, GraduationCap, CreditCard, Heart, Shield, Banknote } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join <span className="text-primary">ABMTC</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Start your journey toward global ministry impact. We're accepting applications for our next cohort.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
              <Link href="/apply">
                Start Your Application
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Admission Requirements</h2>
              <p className="text-xl text-muted-foreground">What you need to apply to ABMTC</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Basic Requirements</h3>
                <ul className="space-y-4">
                  <RequirementItem text="Born-again Christian with clear testimony" />
                  <RequirementItem text="High school diploma or equivalent" />
                  <RequirementItem text="Minimum age of 18 years" />
                  <RequirementItem text="Good physical and mental health" />
                  <RequirementItem text="Willingness to live in community" />
                  <RequirementItem text="Commitment to missions and evangelism" />
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Application Materials</h3>
                <ul className="space-y-4">
                  <RequirementItem text="Completed online application form" />
                  <RequirementItem text="Personal testimony (500-1000 words)" />
                  <RequirementItem text="Two pastoral references" />
                  <RequirementItem text="Copy of passport or ID" />
                  <RequirementItem text="Recent passport-sized photo" />
                  <RequirementItem text="Medical clearance form" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Application Process</h2>
              <p className="text-xl text-muted-foreground mb-4">
                No stressful deadlines — we walk with you step by step
              </p>
              <p className="text-lg text-muted-foreground/80">
                Our team provides support & guidance throughout your entire journey
              </p>
            </div>

            {/* 4-Step Infographic */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <InfographicStep
                number={1}
                icon={FileText}
                title="Fill out the form"
                description="Complete our simple online application with your personal information and testimony"
              />
              <InfographicStep
                number={2}
                icon={MessageSquare}
                title="Online interview"
                description="Have a friendly conversation with our admissions team via video call"
              />
              <InfographicStep
                number={3}
                icon={Mail}
                title="Acceptance letter"
                description="Receive your admission decision and welcome package"
              />
              <InfographicStep
                number={4}
                icon={Plane}
                title="Travel & arrival at campus"
                description="We'll help coordinate your travel and ensure a smooth arrival experience"
              />
            </div>

            {/* Sticky CTA */}
            <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to take the first step?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join students from over 40 nations in this life-changing journey
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                <Link href="/apply">
                  Start Your Application
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
                Your Calling, <span className="text-primary">Our Investment</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We believe finances should never be a barrier to answering God's call. That's why we've designed 
                comprehensive support to make your training accessible and affordable.
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left Side - Major Benefits */}
              <div className="space-y-6">
                <FinancialBenefitCard
                  icon={Home}
                  title="100% Free Housing & Meals"
                  description="Complete accommodation and three nutritious daily meals provided at no cost"
                  highlight="$0 Cost"
                  bgColor="bg-primary/5 border-primary/20"
                  iconColor="text-primary"
                />
                <FinancialBenefitCard
                  icon={GraduationCap}
                  title="Merit & Need-Based Scholarships"
                  description="Up to 100% tuition coverage based on academic merit and financial need"
                  highlight="Up to $2,000"
                  bgColor="bg-accent/10 border-accent/30"
                  iconColor="text-accent-foreground"
                />
              </div>

              {/* Right Side - Additional Support */}
              <div className="space-y-6">
                <FinancialBenefitCard
                  icon={Plane}
                  title="Travel Assistance"
                  description="Partial or full travel grants available for international students"
                  highlight="Case by case"
                  bgColor="bg-muted/30 border-muted"
                  iconColor="text-muted-foreground"
                />
                <FinancialBenefitCard
                  icon={CreditCard}
                  title="Flexible Payment Plans"
                  description="Interest-free payment options and fundraising guidance"
                  highlight="0% Interest"
                  bgColor="bg-secondary/10 border-secondary/30"
                  iconColor="text-secondary-foreground"
                />
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white rounded-2xl border border-border p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Total Program Investment</h3>
                <p className="text-muted-foreground">Transparent pricing with maximum support</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Banknote className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">Call to find out</div>
                  <div className="text-sm text-muted-foreground mb-2">Annual Tuition</div>
                  <div className="text-xs text-primary font-medium">Scholarships Available</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <Home className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">$0</div>
                  <div className="text-sm text-muted-foreground mb-2">Housing & Meals</div>
                  <div className="text-xs text-primary font-medium">Completely Free</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Shield className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">Varies</div>
                  <div className="text-sm text-muted-foreground mb-2">Personal Expenses</div>
                  <div className="text-xs text-muted-foreground font-medium">Books, Travel, etc.</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
              <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">Ready to Invest in Your Future?</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Don't let finances hold you back from your calling. Our financial aid team is here to help you 
                create a personalized funding plan that works for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
                >
                  <Link href="/financial-aid">Explore Financial Aid Options</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
                >
                  <Link href="/contact">Speak with Financial Aid Team</Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <FAQItem
                question="Do I need to be fluent in English?"
                answer="Basic English proficiency is required as classes are taught in English. However, we provide language support and have students from many language backgrounds."
              />
              <FAQItem
                question="Can I apply if I'm married?"
                answer="Yes! We welcome married students. Family housing is available, and spouses can also enroll in the program."
              />
              <FAQItem
                question="How long does the application process take?"
                answer="From submission to decision typically takes 2-3 weeks, provided all materials and references are received promptly."
              />
              <FAQItem
                question="Can I defer my admission?"
                answer="Yes, accepted students can defer admission for up to one year with approval from the admissions office."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take the first step toward your calling. Start your application today and join students from over 40
              nations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                <Link href="/apply">
                  Start Application
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
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
