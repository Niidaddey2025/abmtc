"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"
import Link from "next/link"

const AceternityGlobe = dynamic(() => import("@/components/aceternity-globe").then((mod) => ({ default: mod.AceternityGlobe })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] md:h-[720px] mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
      <div className="text-white text-lg">Loading Interactive Globe...</div>
    </div>
  )
})

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Global <span className="text-primary">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how ABMTC graduates are transforming nations through church planting, discipleship, and the power of
              the gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From the Nations to Ghana, From Ghana to the Nations
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore where our students come from and where they're planting churches around the world. Click on any
                marker to learn more.
              </p>
            </div>

            <AceternityGlobe />
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      {/* <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Recent Impact Stories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ImpactStoryCard
                image="/placeholder.svg?key=story1"
                title="3 Churches Planted in Thailand"
                description="Sarah Kim and her team have established three thriving churches in rural Thailand, reaching over 150 believers."
                location="Thailand"
                year="2022"
              />
              <ImpactStoryCard
                image="/placeholder.svg?key=story2"
                title="Mozambique Ministry Growing"
                description="Emmanuel Banda's church planting work in Mozambique continues to expand with 2 churches and 80+ members."
                location="Mozambique"
                year="2021"
              />
              <ImpactStoryCard
                image="/placeholder.svg?key=story3"
                title="New Church in Peru"
                description="Maria Santos recently planted a church in Lima, Peru, with 45 believers and growing weekly."
                location="Peru"
                year="2023"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission Focus Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Mission Focus</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Church Planting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Establishing new churches in unreached areas and equipping local leaders for sustainable growth.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Discipleship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Training believers to become mature disciples who can teach others and multiply the gospel impact.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving communities through practical ministry, meeting needs, and demonstrating Christ's love.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of This Global Movement</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join hundreds of students who are being equipped to transform nations through the gospel. Your story could
              be next on this map.
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
                <Link href="/alumni">View Alumni Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ImpactStoryCard({
  image,
  title,
  description,
  location,
  year,
}: {
  image: string
  title: string
  description: string
  location: string
  year: string
}) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {year}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{location}</div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}
