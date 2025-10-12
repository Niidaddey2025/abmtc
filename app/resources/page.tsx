import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, Download, Users, Globe, Heart, Headphones } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Resource <span className="text-primary">Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access teaching materials, ministry resources, and training content to support your journey in missions
              and ministry.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <CategoryCard icon={BookOpen} title="Study Materials" count="150+ Resources" />
              <CategoryCard icon={Video} title="Video Teachings" count="80+ Videos" />
              <CategoryCard icon={FileText} title="Articles & Guides" count="200+ Articles" />
              <CategoryCard icon={Headphones} title="Podcast Series" count="50+ Episodes" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Resources</h2>
              <p className="text-xl text-muted-foreground">Popular materials for students and alumni</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                type="Course"
                title="Church Planting Essentials"
                description="Comprehensive guide to starting and growing healthy churches in any context"
                format="PDF + Video"
                duration="8 weeks"
                icon={BookOpen}
              />
              <ResourceCard
                type="Video Series"
                title="Cross-Cultural Ministry"
                description="Navigate cultural differences and build effective ministry in diverse contexts"
                format="12 Videos"
                duration="6 hours"
                icon={Video}
              />
              <ResourceCard
                type="Guide"
                title="Discipleship Framework"
                description="Practical tools for making disciples who make disciples"
                format="PDF"
                duration="45 pages"
                icon={FileText}
              />
              <ResourceCard
                type="Course"
                title="Biblical Hermeneutics"
                description="Learn to interpret and apply Scripture accurately in ministry"
                format="PDF + Audio"
                duration="10 weeks"
                icon={BookOpen}
              />
              <ResourceCard
                type="Podcast"
                title="Missions Stories"
                description="Inspiring testimonies from missionaries serving around the world"
                format="Audio"
                duration="20 episodes"
                icon={Headphones}
              />
              <ResourceCard
                type="Toolkit"
                title="Evangelism Training"
                description="Practical methods and resources for effective gospel sharing"
                format="PDF + Video"
                duration="4 weeks"
                icon={Users}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Collections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Resource Collections</h2>
              <p className="text-xl text-muted-foreground">Curated collections for specific ministry areas</p>
            </div>

            <div className="space-y-6">
              <CollectionCard
                title="New Student Orientation"
                description="Everything you need to prepare for your time at ABMTC"
                resources={["Welcome Guide", "Campus Map", "Packing List", "Pre-Arrival Checklist", "FAQs"]}
                icon={Users}
              />
              <CollectionCard
                title="Church Planting Resources"
                description="Comprehensive materials for starting and growing churches"
                resources={[
                  "Church Planting Manual",
                  "Leadership Training",
                  "Small Group Curriculum",
                  "Worship Resources",
                  "Administration Tools",
                ]}
                icon={Globe}
              />
              <CollectionCard
                title="Spiritual Formation"
                description="Resources for personal growth and spiritual disciplines"
                resources={[
                  "Prayer Guides",
                  "Bible Reading Plans",
                  "Fasting Resources",
                  "Meditation Practices",
                  "Accountability Tools",
                ]}
                icon={Heart}
              />
              <CollectionCard
                title="Ministry Training Modules"
                description="Practical training for various ministry contexts"
                resources={[
                  "Preaching Workshop",
                  "Counseling Basics",
                  "Youth Ministry",
                  "Women's Ministry",
                  "Children's Ministry",
                ]}
                icon={BookOpen}
              />
            </div>
          </div>
        </div>
      </section>

      {/* E-Library Access */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-secondary/20 rounded-full">
                <BookOpen className="w-12 h-12 text-secondary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Library Access</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Current students and alumni have access to our extensive digital library with thousands of books,
              journals, and theological resources.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">2,000+</div>
                <div className="text-sm text-primary-foreground/80">Digital Books</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-primary-foreground/80">Journal Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm text-primary-foreground/80">Video Courses</div>
              </div>
            </div>
            <Button
              size="lg"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
            >
              <Link href="/apply">Apply to Access Library</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Download Center</h2>
              <p className="text-xl text-muted-foreground">Free resources available for immediate download</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <DownloadCard
                title="ABMTC Prospectus"
                description="Complete information about our programs, admissions, and campus life"
                fileSize="2.5 MB"
                fileType="PDF"
              />
              <DownloadCard
                title="Application Guide"
                description="Step-by-step instructions for completing your application"
                fileSize="1.2 MB"
                fileType="PDF"
              />
              <DownloadCard
                title="Financial Aid Handbook"
                description="Comprehensive guide to scholarships and financial assistance"
                fileSize="1.8 MB"
                fileType="PDF"
              />
              <DownloadCard
                title="Missions Prayer Guide"
                description="30-day prayer guide for unreached people groups"
                fileSize="800 KB"
                fileType="PDF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Need More Resources?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact our resource center for specific materials or custom training content for your ministry context.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="/contact">Contact Resource Center</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function CategoryCard({ icon: Icon, title, count }: { icon: any; title: string; count: string }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{count}</p>
    </Card>
  )
}

function ResourceCard({
  type,
  title,
  description,
  format,
  duration,
  icon: Icon,
}: {
  type: string
  title: string
  description: string
  format: string
  duration: string
  icon: any
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="text-xs font-semibold text-primary uppercase">{type}</div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <span>{format}</span>
        <span>{duration}</span>
      </div>
      <Button variant="outline" className="w-full bg-transparent">
        Access Resource
      </Button>
    </Card>
  )
}

function CollectionCard({
  title,
  description,
  resources,
  icon: Icon,
}: {
  title: string
  description: string
  resources: string[]
  icon: any
}) {
  return (
    <Card className="p-8">
      <div className="flex items-start gap-6">
        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {resources.map((resource, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {resource}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

function DownloadCard({
  title,
  description,
  fileSize,
  fileType,
}: {
  title: string
  description: string
  fileSize: string
  fileType: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
          <Download className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              {fileType} • {fileSize}
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Download
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
