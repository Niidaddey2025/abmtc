import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/diverse-students-praying-and-studying-together-at-.jpg"
            alt="ABMTC Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">ABMTC</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Equipping believers from every nation to fulfill the Great Commission through biblical training, practical
              ministry, and global community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                The Anagkazo Bible &amp; Ministry Training Centre (ABMTC) was founded in 1996 by the Presiding Bishop of the
                Lighthouse Chapel International Denomination; Bishop Dag Heward-Mills. This was prompted by Bishop Dag's
                strong desire to see young men and women trained and equipped for the work of the ministry, according to
                Ephesians 4:11-12. It is the founder's greatest desire that the school would always remain a pastors'
                training school, without ever evolving into a secular institution whether partly or fully.
              </p>
              <p>
                Anagkazo started as a one-year part-time bible school. The first graduation came on in November 1997
                with 12 students. It then later evolved into a two-year full-time program.
              </p>
              <p>
                Based on the conviction that ministers must have adequate training in different aspects of ministry, a
                decision was taken during the 2006 academic year to extend the period of training to four years. At this
                point, the school was called; Christ Missions Academy, later being changed back to Anagkazo Bible &amp;
                Ministry Training Centre.
              </p>
              <p>
                The word 'anagkazo' is the Greek word for compel (Luke 14:23). Our students are trained to compel,
                necessitate, entreat and constrain the unsaved to enter into the kingdom of God.
              </p>
              <p>
                The first batch of 45 students for the four-year program graduated in November 2008. In November 2009,
                another batch of 67 students were graduated from the institution. Over the years, Anagkazo Bible School,
                which is now well recognized has become an international ground for pastoral and missionary training.
              </p>
              <p>
                Currently, Anagkazo has over 800 full-time residential students. After much fine-tuning, the full scope
                of training offered by the school currently spans three years.
              </p>
              <p>
                Our students come from Africa, Europe, Asia, Australia, the Caribbean, and more. Graduates of Anagkazo
                are known for their soul-winning and church-planting passion, and have a strong desire to see the gospel
                preached to every soul everywhere! Their life's aim is to see every soul 'anagkazoed' into the kingdom
                of our Lord Jesus Christ.
              </p>
              <p>
                Coming to Anagkazo would definitely help you to nurture and fulfil God's calling upon your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To train and equip believers for effective missions, church planting, and discipleship in every
                  nation, providing biblical education and practical ministry experience.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every nation has access to trained, equipped missionaries who plant healthy churches and
                  make disciples that multiply the gospel impact.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Biblical authority, practical training, cultural sensitivity, spiritual formation, community living,
                  and sacrificial service in fulfilling the Great Commission.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detailed */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
            </div>

            <div className="space-y-8">
              <ValueCard
                title="Biblical Authority"
                description="We believe the Bible is God's inspired, authoritative Word and the foundation for all faith and practice. Our curriculum is rooted in sound biblical theology and hermeneutics."
              />
              <ValueCard
                title="Practical Training"
                description="Theory without practice is incomplete. We combine classroom learning with hands-on ministry experience through evangelism, church internships, and mission trips."
              />
              <ValueCard
                title="Cultural Sensitivity"
                description="With students from 40+ nations, we celebrate diversity and train students to minister effectively across cultural boundaries with respect and understanding."
              />
              <ValueCard
                title="Spiritual Formation"
                description="Character matters as much as competence. We emphasize prayer, worship, spiritual disciplines, and personal holiness as essential to effective ministry."
              />
              <ValueCard
                title="Community Living"
                description="We believe transformation happens in community. Students live, eat, study, and minister together, forming lifelong bonds and learning to work in teams."
              />
              <ValueCard
                title="Sacrificial Service"
                description="Following Christ's example, we call students to a life of sacrifice, serving others, and prioritizing the gospel above personal comfort and ambition."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground">
                Experienced leaders committed to equipping the next generation
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <LeaderCard name="Bishop Dag Heward-Mills" role="founder and Chancellor" image="https://miro.medium.com/v2/0*Z25Qu-2erHwbkCJs.png" />
              <LeaderCard name="Bishop Emmanuel Nterful" role="Vice Chancellor" image="https://www.allchristianquotes.org/quotes/Emmanuel_Nterful/5660/assets/docs/image/335580.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Be part of a global movement training missionaries to reach every nation with the gospel.
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
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}

function LeaderCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </Card>
  )
}
