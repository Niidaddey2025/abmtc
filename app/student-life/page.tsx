import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Home, Users, Music, BookOpen, Globe, Utensils } from "lucide-react"
import Link from "next/link"

export default function StudentLifePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/diverse-students-praying-and-studying-together-at-.jpg"
            alt="Student life at ABMTC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Life at <span className="text-primary">ABMTC</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience transformation through community, worship, study, and practical ministry in a diverse
              international family.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Life Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <LifeAspectCard
                icon={Home}
                title="Dorm Life"
                description="Comfortable shared housing with students from around the world"
              />
              <LifeAspectCard
                icon={Utensils}
                title="Meals Together"
                description="Three daily meals fostering fellowship and cultural exchange"
              />
              <LifeAspectCard
                icon={Music}
                title="Daily Worship"
                description="Morning and evening worship in multiple languages and styles"
              />
              <LifeAspectCard
                icon={Users}
                title="Global Community"
                description="Build lifelong friendships with students from 40+ nations"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Community & Friendship */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Community & Friendship</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At ABMTC, you'll join a diverse family of believers from over 40 nations. Our international community
                  creates a unique environment where cultural barriers break down and lifelong friendships are formed.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Small group discipleship and accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Cultural exchange nights and celebrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Mentorship from experienced leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Recreational activities and team building</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/campus-life-1.jpg"
                  alt="Students in community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Worship & Prayer Culture */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/campus-life-0.png"
                  alt="Worship at ABMTC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-foreground mb-6">Worship & Prayer Culture</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Worship is at the heart of everything we do. Experience powerful times of prayer and worship that
                  transform hearts and prepare you for ministry.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Morning devotions and prayer (6:00 AM daily)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Evening chapel services with worship and teaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Weekly prayer nights for missions and nations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Worship in multiple languages and styles</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Practical Ministry */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Practical Ministry Opportunities</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Learning doesn't stop in the classroom. You'll gain hands-on experience through regular evangelism,
                  outreach, and ministry opportunities in Ghana and beyond.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Weekly street evangelism in local communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Church internships and ministry placements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Mission trips to unreached areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Community development projects</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/campus-life-5.jpg"
                  alt="Ministry outreach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Students Say</h2>
              <p className="text-xl text-muted-foreground">
                Hear from current students about their experience at ABMTC
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="ABMTC became my family. The community here has shaped me more than I ever imagined."
                name="Grace Adeyemi"
                country="Nigeria"
                image="https://images.unsplash.com/photo-1602342323893-b11f757957c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <TestimonialCard
                quote="The practical ministry experience prepared me for real-world church planting in ways no classroom could."
                name="Miguel Cruz"
                country="Philippines"
                image="https://images.unsplash.com/photo-1605398920523-26470ee935f6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <TestimonialCard
                quote="Living with students from 40+ nations opened my eyes to God's heart for all peoples."
                name="Ruth Mwangi"
                country="Kenya"
                image="https://images.unsplash.com/photo-1738083378447-03319dcc31f0?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Campus Facilities</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for comfortable living and effective learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FacilityCard
                icon={Home}
                title="Dormitories"
                description="Shared rooms with comfortable beds and storage"
              />
              <FacilityCard
                icon={BookOpen}
                title="Library"
                description="Extensive theological library and study spaces"
              />
              <FacilityCard
                icon={Users}
                title="Classrooms"
                description="Modern teaching facilities with AV equipment"
              />
              <FacilityCard icon={Music} title="Chapel" description="Worship space for daily services and events" />
              <FacilityCard icon={Utensils} title="Dining Hall" description="Communal meals with diverse cuisine" />
              <FacilityCard icon={Globe} title="Recreation" description="Sports facilities and common areas" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Life at ABMTC</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join a transformative community where students from every nation come together to be equipped for global
              ministry.
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
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function LifeAspectCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </Card>
  )
}

function TestimonialCard({
  quote,
  name,
  country,
  image,
}: {
  quote: string
  name: string
  country: string
  image: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <blockquote className="text-foreground mb-6 leading-relaxed italic">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-bold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{country}</div>
        </div>
      </div>
    </Card>
  )
}

function FacilityCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}
