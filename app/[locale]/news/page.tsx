"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function NewsPage() {
  const t = useTranslations('news')
  const locale = useLocale()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('events.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('events.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <EventCard
                title="Graduation Ceremony 2025"
                date="November 15, 2025"
                time="10:00 AM"
                location="ABMTC Campus, Mampong"
                description="Join us as we celebrate our graduating class and commission them for ministry worldwide. This special ceremony will feature inspiring messages, testimonies, and the conferring of certificates."
                category="Graduation"
                featured
              />

              <EventCard
                title="Open Day & Campus Tour"
                date="January 20, 2025"
                time="9:00 AM - 3:00 PM"
                location="ABMTC Campus, Mampong"
                description="Prospective students and families are invited to visit our campus, meet faculty and current students, tour facilities, and learn about our programs."
                category="Campus Event"
              />

              <EventCard
                title="Missions Conference"
                date="March 10-12, 2025"
                time="All Day"
                location="ABMTC Campus, Mampong"
                description="Three days of powerful teaching on missions, church planting, and evangelism. Guest speakers from around the world will share insights and testimonies."
                category="Conference"
              />

              <EventCard
                title="Alumni Reunion"
                date="August 5, 2025"
                time="2:00 PM"
                location="ABMTC Campus, Mampong"
                description="Reconnect with fellow alumni, share ministry testimonies, and celebrate God's faithfulness. Open to all ABMTC graduates."
                category="Alumni Event"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Latest News</h2>
              <p className="text-xl text-muted-foreground">
                Recent updates and announcements from ABMTC
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <NewsCard
                title="New Scholarship Program Launched"
                date="October 15, 2024"
                excerpt="ABMTC announces expanded scholarship opportunities for students from underrepresented regions, making ministry training more accessible."
                image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop"
                category="Announcement"
              />

              <NewsCard
                title="Alumni Plant 10 New Churches"
                date="October 8, 2024"
                excerpt="Recent graduates from the 2023 class have successfully planted 10 churches across 5 nations in their first year of ministry."
                image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1473&auto=format&fit=crop"
                category="Impact Story"
              />

              <NewsCard
                title="Campus Expansion Project Begins"
                date="September 28, 2024"
                excerpt="Construction begins on new dormitory facilities to accommodate growing student enrollment from international applicants."
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop"
                category="Campus News"
              />

              <NewsCard
                title="International Student Week"
                date="September 15, 2024"
                excerpt="Students from 40+ nations celebrated their diverse cultures through food, music, and testimonies during International Student Week."
                image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop"
                category="Campus Life"
              />

              <NewsCard
                title="Evangelism Crusade Reaches 5,000"
                date="August 30, 2024"
                excerpt="ABMTC students participated in a major evangelism crusade that reached over 5,000 people with the gospel message."
                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470&auto=format&fit=crop"
                category="Ministry"
              />

              <NewsCard
                title="New Online Learning Platform"
                date="August 20, 2024"
                excerpt="ABMTC launches enhanced online learning platform, making courses accessible to students worldwide."
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
                category="Technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Press Releases</h2>
            </div>

            <div className="space-y-6">
              <PressReleaseCard
                title="ABMTC Celebrates 25 Years of Training Ministers"
                date="October 1, 2024"
                excerpt="Anagkazo Bible and Ministry Training Centre marks a quarter-century of equipping ministers for global missions, with over 800 graduates serving in 45+ nations."
              />

              <PressReleaseCard
                title="Partnership with International Mission Organizations"
                date="September 10, 2024"
                excerpt="ABMTC announces strategic partnerships with leading mission organizations to enhance student placement and support for graduates."
              />

              <PressReleaseCard
                title="Record Enrollment for 2024 Academic Year"
                date="August 15, 2024"
                excerpt="ABMTC welcomes its largest incoming class with students from 42 nations, reflecting growing global interest in missions training."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of the Story</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join ABMTC and become part of a global movement transforming nations through the gospel.
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

    </main>
  )
}

function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
  featured = false,
}: {
  title: string
  date: string
  time: string
  location: string
  description: string
  category: string
  featured?: boolean
}) {
  return (
    <Card className={`p-8 hover:shadow-lg transition-shadow ${featured ? "border-2 border-primary" : ""}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-primary">
              {new Date(date).getDate()}
            </div>
            <div className="text-xs text-muted-foreground uppercase">
              {new Date(date).toLocaleString('default', { month: 'short' })}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary">{category}</Badge>
              {featured && <Badge className="mb-2 ml-2 bg-secondary text-secondary-foreground">Featured</Badge>}
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function NewsCard({
  title,
  date,
  excerpt,
  image,
  category,
}: {
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{category}</Badge>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
      </div>
    </Card>
  )
}

function PressReleaseCard({
  title,
  date,
  excerpt,
}: {
  title: string
  date: string
  excerpt: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground mb-2">{date}</div>
          <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </Card>
  )
}
