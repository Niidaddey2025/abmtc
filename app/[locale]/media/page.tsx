"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Video, Image as ImageIcon, Download, BookOpen, FileText, Headphones } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function MediaPage() {
  const t = useTranslations('media')
  const videos = [
    {
      title: t('videos.items.video1.title'),
      url: "https://www.youtube.com/watch?v=1F1f0vtSgKc",
      thumbnail: "https://img.youtube.com/vi/1F1f0vtSgKc/hqdefault.jpg",
    },
    {
      title: t('videos.items.video2.title'),
      url: "https://www.youtube.com/watch?v=G87HlDEP0Lg",
      thumbnail: "https://img.youtube.com/vi/G87HlDEP0Lg/hqdefault.jpg",
    },
    {
      title: t('videos.items.video3.title'),
      url: "https://www.youtube.com/watch?v=YBFBxfKZ-ag&pp=0gcJCQMKAYcqIYzv",
      thumbnail: "https://img.youtube.com/vi/YBFBxfKZ-ag/hqdefault.jpg",
    },
  ]
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

      {/* Video Resources */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('videos.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('videos.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <VideoCard
                  key={index}
                  title={video.title}
                  url={video.url}
                  thumbnail={video.thumbnail}
                  watchLabel={t('videos.watch')}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="https://www.youtube.com/@DagHewardMillsvideos/videos" target="_blank" rel="noopener noreferrer">
                  View All Videos
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('gallery.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('gallery.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <GalleryCard
                title="Campus Life"
                imageCount={45}
                thumbnail="/campus-life-1.jpg"
              />
              <GalleryCard
                title="Graduation Ceremonies"
                imageCount={67}
                thumbnail="/diverse-students-praying-and-studying-together-at-.jpg"
              />
              <GalleryCard
                title="Evangelism Outreach"
                imageCount={89}
                thumbnail="/campus-life-5.jpg"
              />
              <GalleryCard
                title="Chapel Services"
                imageCount={34}
                thumbnail="/campus-life-0.png"
              />
              <GalleryCard
                title="Student Activities"
                imageCount={56}
                thumbnail="/students-studying-bible-in-classroom.jpg"
              />
              <GalleryCard
                title="International Community"
                imageCount={78}
                thumbnail="/young-brazilian-woman-student-smiling.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Downloads</h2>
              <p className="text-xl text-muted-foreground">
                Access important documents and resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <DownloadCard
                icon={FileText}
                title="Prospectus 2025"
                description="Complete guide to ABMTC programs, admission requirements, and campus life"
                fileSize="2.4 MB"
                fileType="PDF"
              />
              <DownloadCard
                icon={FileText}
                title="Application Form"
                description="Official application form for admission to ABMTC"
                fileSize="856 KB"
                fileType="PDF"
              />
              <DownloadCard
                icon={BookOpen}
                title="Course Catalog"
                description="Detailed descriptions of all courses offered at ABMTC"
                fileSize="1.8 MB"
                fileType="PDF"
              />
              <DownloadCard
                icon={FileText}
                title="Financial Aid Guide"
                description="Information about scholarships, grants, and payment plans"
                fileSize="1.2 MB"
                fileType="PDF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Devotionals & Newsletters */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Devotionals & Newsletters</h2>
              <p className="text-xl text-muted-foreground">
                Stay connected with regular spiritual content and updates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <NewsletterCard
                title="Daily Devotional"
                description="Start your day with powerful biblical insights and prayers"
                frequency="Daily"
              />
              <NewsletterCard
                title="Monthly Newsletter"
                description="Updates on ABMTC activities, alumni stories, and upcoming events"
                frequency="Monthly"
              />
              <NewsletterCard
                title="Prayer Bulletin"
                description="Join us in praying for missions, students, and global needs"
                frequency="Weekly"
              />
            </div>

            {/* <div className="text-center mt-12">
              <Card className="p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest updates, devotionals, and resources delivered to your inbox
                </p>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience ABMTC?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              These resources give you a glimpse of life at ABMTC. Apply today to experience it firsthand.
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

function VideoCard({
  title,
  url,
  thumbnail,
  watchLabel,
}: {
  title: string
  url: string
  thumbnail: string
  watchLabel: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <Video className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {watchLabel}
          </Link>
        </Button>
      </div>
    </Card>
  )
}

function GalleryCard({
  title,
  imageCount,
  thumbnail,
}: {
  title: string
  imageCount: number
  thumbnail: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative h-64">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-center text-white">
            <ImageIcon className="w-12 h-12 mx-auto mb-2" />
            <p className="text-lg font-bold">{imageCount} Photos</p>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
    </Card>
  )
}

function DownloadCard({
  icon: Icon,
  title,
  description,
  fileSize,
  fileType,
}: {
  icon: any
  title: string
  description: string
  fileSize: string
  fileType: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="outline">{fileType}</Badge>
              <span>{fileSize}</span>
            </div>
            <Button size="sm" variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function NewsletterCard({
  title,
  description,
  frequency,
}: {
  title: string
  description: string
  frequency: string
}) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Headphones className="w-8 h-8 text-primary" />
        </div>
      </div>
      <Badge className="mb-3 bg-primary/10 text-primary">{frequency}</Badge>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}
