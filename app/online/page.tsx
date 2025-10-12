import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Globe, Clock, Users, Video, BookOpen } from "lucide-react"

export default function OnlinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Anagkazo Online</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Experience transformative Bible training from anywhere in the world. Access ABMTC's proven curriculum
              through our flexible online platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Globe,
                title: "Learn Anywhere",
                description: "Access courses from any location with internet connectivity",
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description: "Study at your own pace while balancing work and ministry",
              },
              {
                icon: Users,
                title: "Live Interaction",
                description: "Join live sessions with instructors and fellow students",
              },
              {
                icon: Video,
                title: "HD Video Lessons",
                description: "High-quality video content with downloadable resources",
              },
              {
                icon: BookOpen,
                title: "Same Curriculum",
                description: "Access the same transformative content as our residential program",
              },
              {
                icon: Check,
                title: "Certificate",
                description: "Earn an official certificate upon course completion",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Course Structure</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Foundation Courses",
                  duration: "12 weeks",
                  description: "Biblical foundations, theology, and ministry principles",
                },
                {
                  title: "Advanced Studies",
                  duration: "12 weeks",
                  description: "Deep dive into missions, church planting, and leadership",
                },
                {
                  title: "Practical Ministry",
                  duration: "Ongoing",
                  description: "Apply learning through local ministry opportunities",
                },
              ].map((course, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-foreground/70">{course.description}</p>
                    </div>
                    <div className="text-primary font-semibold whitespace-nowrap">{course.duration}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Affordable & Accessible</h2>
            <p className="text-xl text-foreground/70 mb-8">
              We believe cost should never be a barrier to ministry training. Anagkazo Online offers flexible payment
              options and scholarships.
            </p>
            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">$299</div>
              <p className="text-xl text-foreground/70 mb-6">per course</p>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  "12 weeks of comprehensive content",
                  "Live weekly sessions with instructors",
                  "Access to all course materials",
                  "Certificate upon completion",
                  "Lifetime access to recordings",
                  "Scholarship options available",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Apply for Scholarship
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join students from around the world who are being equipped for ministry through Anagkazo Online.
          </p>
          <Button size="lg" variant="secondary">
            Enroll Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
