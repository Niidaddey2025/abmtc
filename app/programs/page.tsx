import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Globe, Clock, GraduationCap, Video, MapPin, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the training path that fits your calling - whether on campus in Ghana or online from anywhere in
              the world.
            </p>
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* School of the Word */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="/students-studying-bible-in-classroom.jpg"
                  alt="School of the Word"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Foundation</Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">School of the Word</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Deep biblical foundations with comprehensive scripture study methods, word-based ministry training, and 
                  practical application for effective teaching and preaching.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Biblical Foundations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Scripture Study Methods</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Word-Based Ministry</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Teaching & Preaching</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Biblical Application</span>
                  </div>
                </div>

                {/* <Button asChild className="w-full bg-primary hover:bg-primary/90 group">
                  <Link href="/admissions">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button> */}
              </div>
            </Card>

            {/* School of Evangelism */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="/campus-life-5.jpg"
                  alt="School of the Word"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Outreach</Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">School of Evangelism</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive evangelism training with practical gospel presentation techniques, soul winning methods, 
                  and effective outreach strategies for personal and mass evangelism.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Gospel Presentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Soul Winning Techniques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Outreach Strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Personal Evangelism</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mass Evangelism</span>
                  </div>
                </div>

                {/* <Button asChild variant="outline" className="w-full group bg-transparent">
                  <Link href="/admissions">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button> */}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Curriculum</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our curriculum combines deep biblical study with practical ministry training to equip you for effective
                service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CurriculumCard
                icon={GraduationCap}
                title="Proof of Shepherding"
                courses={[
                  "Part 1 - What It Means to Become A Shepherd",
                  "Part 2 - Loyalty and Disloyalty",
                  "Part 3 - Transform Your Pastoral Ministry",
                  "Part 4 - Mega Church",
                  "Part 5 - Art of Leadership",
                ]}
              />
              <CurriculumCard
                icon={BookOpen}
                title="School of the Word"
                courses={[
                  "Biblical Foundations",
                  "Scripture Study Methods",
                  "Word-Based Ministry",
                  "Teaching & Preaching",
                  "Biblical Application",
                ]}
              />
              <CurriculumCard
                icon={Users}
                title="School of Solid Foundation"
                courses={[
                  "Christian Fundamentals",
                  "Doctrinal Foundations",
                  "Faith Building",
                  "Spiritual Maturity",
                  "Character Development",
                ]}
              />
              <CurriculumCard
                icon={Globe}
                title="School of Victorious Living"
                courses={[
                  "Overcoming Challenges",
                  "Victory Principles",
                  "Spiritual Warfare",
                  "Faith in Action",
                  "Triumphant Life",
                ]}
              />
              <CurriculumCard
                icon={Clock}
                title="School of Apologetics"
                courses={[
                  "Defending the Faith",
                  "Christian Evidences",
                  "Logical Reasoning",
                  "Counter-Arguments",
                  "Intellectual Ministry",
                ]}
              />
              <CurriculumCard
                icon={Users}
                title="School of Evangelism"
                courses={[
                  "Gospel Presentation",
                  "Soul Winning Techniques",
                  "Outreach Strategies",
                  "Personal Evangelism",
                  "Mass Evangelism",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">A Day in the Life</h2>
              <p className="text-xl text-muted-foreground">
                Experience a balanced rhythm of study, worship, ministry, and community.
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <ScheduleItem time="6:00 AM" activity="Morning Prayer & Devotion" />
                <ScheduleItem time="7:00 AM" activity="Breakfast & Fellowship" />
                <ScheduleItem time="8:00 AM" activity="Morning Classes (Biblical Studies)" />
                <ScheduleItem time="12:00 PM" activity="Lunch & Rest" />
                <ScheduleItem time="2:00 PM" activity="Afternoon Classes (Ministry Training)" />
                <ScheduleItem time="5:00 PM" activity="Practical Ministry / Evangelism" />
                <ScheduleItem time="7:00 PM" activity="Dinner & Community Time" />
                <ScheduleItem time="8:00 PM" activity="Evening Worship & Chapel" />
                <ScheduleItem time="9:30 PM" activity="Study Time & Personal Devotion" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Graduation Requirements */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Graduation Requirements</h2>
              <p className="text-xl text-muted-foreground">
                Complete these requirements to receive your certificate and join our global alumni network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Academic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete all core courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maintain satisfactory grades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Pass final examinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Submit capstone project</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Ministry Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Participate in evangelism outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete ministry internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Demonstrate spiritual maturity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Receive leadership endorsement</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Training?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Choose the program that fits your calling and start your journey toward global ministry impact.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function CurriculumCard({ icon: Icon, title, courses }: { icon: any; title: string; courses: string[] }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {courses.map((course, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{course}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function ScheduleItem({ time, activity }: { time: string; activity: string }) {
  return (
    <div className="flex items-center gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
      <div className="flex-shrink-0 w-24">
        <div className="text-sm font-bold text-primary">{time}</div>
      </div>
      <div className="flex-1">
        <div className="text-foreground font-medium">{activity}</div>
      </div>
    </div>
  )
}
