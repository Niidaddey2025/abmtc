import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Users, BookOpen, Heart, Globe } from "lucide-react"
import Link from "next/link"

export default function AlumniPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Alumni <span className="text-primary">Network</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join a global family of over 300 graduates serving in 45+ nations, planting churches, and transforming
              communities through the gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <StatCard icon={Users} value="300+" label="Alumni Worldwide" />
              <StatCard icon={Globe} value="45+" label="Nations Served" />
              <StatCard icon={MapPin} value="25+" label="Churches Planted" />
              <StatCard icon={Heart} value="1000+" label="Lives Transformed" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Alumni Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                See how ABMTC graduates are making an impact around the world
              </p>
            </div>

            <div className="space-y-12">
              <AlumniStoryLarge
                name="Sarah Kim"
                class="Class of 2020"
                location="Thailand"
                image="https://images.unsplash.com/photo-1650784854554-c077585b9720?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                story="After graduating from ABMTC, Sarah moved to rural Thailand where she has planted three thriving churches with over 150 believers. Her ministry focuses on unreached villages in the northern provinces, combining evangelism with community development projects. Sarah credits her time at ABMTC for preparing her to navigate cross-cultural challenges and build sustainable ministry."
                impact={["3 churches planted", "150+ believers", "5 villages reached", "10 local leaders trained"]}
              />

              <AlumniStoryLarge
                name="Emmanuel Banda"
                class="Class of 2019"
                location="Mozambique"
                image="https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                story="Emmanuel returned to his home region in Southern Africa with a vision to reach unreached people groups. He has established two churches in Mozambique and trains local pastors through a discipleship program. His ministry has grown to include a Bible school that equips indigenous leaders for church planting. Emmanuel's story demonstrates the multiplying impact of ABMTC training."
                impact={["2 churches established", "80+ members", "Bible school founded", "15 pastors trained"]}
              />

              <AlumniStoryLarge
                name="Maria Santos"
                class="Class of 2021"
                location="Peru"
                image="/young-brazilian-woman-student-smiling.jpg"
                story="From Brazil to Peru, Maria followed God's call to reach Latin America. She recently planted a church in Lima that has grown to 45 believers in just two years. Maria's ministry emphasizes discipleship and leadership development, ensuring sustainable growth. She regularly mentors young women in ministry and hosts training workshops for church planters across South America."
                impact={[
                  "1 church planted",
                  "45 believers",
                  "Weekly discipleship groups",
                  "Regional training ministry",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Alumni Profiles */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">More Alumni Profiles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AlumniCard
                name="Miguel Cruz"
                class="Class of 2018"
                location="Cambodia"
                ministry="Church Planting"
                image="/placeholder.svg?key=miguel"
                description="Leading a network of 4 churches in rural Cambodia with over 200 believers"
              />
              <AlumniCard
                name="Ruth Mwangi"
                class="Class of 2020"
                location="Tanzania"
                ministry="Women's Ministry"
                image="/placeholder.svg?key=ruth"
                description="Empowering women through Bible teaching and establishing 2 churches"
              />
              <AlumniCard
                name="Priya Sharma"
                class="Class of 2022"
                location="Nepal"
                ministry="Discipleship"
                image="/placeholder.svg?key=priya"
                description="Training believers in the Himalayas and planting house churches"
              />
              <AlumniCard
                name="John Williams"
                class="Class of 2019"
                location="Senegal"
                ministry="Bible Translation"
                image="/placeholder.svg?key=john"
                description="Translating Scripture and planting churches among unreached tribes"
              />
              <AlumniCard
                name="Grace Adeyemi"
                class="Class of 2021"
                location="Nigeria"
                ministry="Youth Ministry"
                image="/placeholder.svg?key=grace"
                description="Reaching young people and establishing 3 churches in Northern Nigeria"
              />
              <AlumniCard
                name="David Chen"
                class="Class of 2017"
                location="Indonesia"
                ministry="Leadership Training"
                image="/placeholder.svg?key=david"
                description="Equipping pastors and church planters across Southeast Asia"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Alumni Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Alumni Network Benefits</h2>
              <p className="text-xl text-muted-foreground">
                Stay connected and supported throughout your ministry journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon={Users}
                title="Global Network"
                description="Connect with alumni serving in 45+ nations for collaboration and encouragement"
              />
              <BenefitCard
                icon={BookOpen}
                title="Continuing Education"
                description="Access to workshops, webinars, and advanced training opportunities"
              />
              <BenefitCard
                icon={Heart}
                title="Prayer Support"
                description="Join prayer networks and receive intercession for your ministry"
              />
              <BenefitCard
                icon={Globe}
                title="Resource Library"
                description="Exclusive access to ministry resources, curriculum, and teaching materials"
              />
              <BenefitCard
                icon={Users}
                title="Mentorship"
                description="Connect with experienced alumni for guidance and accountability"
              />
              <BenefitCard
                icon={Calendar}
                title="Annual Reunion"
                description="Attend yearly gatherings to reconnect, share stories, and be refreshed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Alumni Say</h2>
            </div>

            <div className="space-y-8">
              <TestimonialCard
                quote="ABMTC didn't just give me theological knowledge - it transformed my character and prepared me for the realities of cross-cultural ministry. The practical training and international community were invaluable."
                name="Pastor James Osei"
                details="Class of 2016 • Serving in Burkina Faso"
              />
              <TestimonialCard
                quote="The alumni network has been a lifeline in difficult seasons. Knowing I have brothers and sisters around the world praying for me and available for counsel makes all the difference."
                name="Rev. Anna Kowalski"
                details="Class of 2018 • Serving in Poland"
              />
              <TestimonialCard
                quote="My two years at ABMTC were the best investment I could have made in my ministry. The training I received continues to bear fruit as I train others to plant churches."
                name="Pastor Samuel Nguyen"
                details="Class of 2019 • Serving in Vietnam"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join This Global Family</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your story could be next. Apply today and become part of a movement transforming nations through the
              gospel.
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
                <Link href="/contact">Contact Alumni Office</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  )
}

function AlumniStoryLarge({
  name,
  class: classYear,
  location,
  image,
  story,
  impact,
}: {
  name: string
  class: string
  location: string
  image: string
  story: string
  impact: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative h-96 lg:h-auto">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary text-primary-foreground">{classYear}</Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">{name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{story}</p>
          <div>
            <h4 className="font-bold text-foreground mb-3">Ministry Impact:</h4>
            <div className="grid grid-cols-2 gap-3">
              {impact.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function AlumniCard({
  name,
  class: classYear,
  location,
  ministry,
  image,
  description,
}: {
  name: string
  class: string
  location: string
  ministry: string
  image: string
  description: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">{classYear}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{ministry}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

function BenefitCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
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

function TestimonialCard({ quote, name, details }: { quote: string; name: string; details: string }) {
  return (
    <Card className="p-8">
      <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">"{quote}"</blockquote>
      <div className="flex items-center gap-4">
        <div>
          <div className="font-bold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{details}</div>
        </div>
      </div>
    </Card>
  )
}
