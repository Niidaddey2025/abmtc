import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "The Power of Missions Training: Transforming Lives for Global Impact",
      excerpt:
        "Discover how intentional Bible training prepares students to plant churches and transform communities across the nations.",
      author: "Dr. Samuel Mensah",
      date: "March 15, 2024",
      category: "Missions",
      image: "/missions-training-classroom.jpg",
    },
    {
      title: "From Ghana to the Nations: Stories of Alumni Impact",
      excerpt:
        "Read inspiring testimonies from ABMTC graduates who are now leading churches and ministries in over 40 countries.",
      author: "Grace Osei",
      date: "March 10, 2024",
      category: "Alumni Stories",
      image: "/church-planting-celebration.jpg",
    },
    {
      title: "Understanding Your Calling: Is Bible School Right for You?",
      excerpt:
        "Practical guidance for discerning God's call to full-time ministry and how to prepare for Bible training.",
      author: "Pastor John Adu",
      date: "March 5, 2024",
      category: "Calling",
      image: "/person-praying-with-bible.jpg",
    },
    {
      title: "Financial Aid Made Simple: How to Fund Your Ministry Training",
      excerpt:
        "A comprehensive guide to scholarships, work-study programs, and other ways to make Bible school affordable.",
      author: "Finance Team",
      date: "February 28, 2024",
      category: "Financial Aid",
      image: "/students-studying.png",
    },
    {
      title: "Life at ABMTC: A Day in the Life of a Student",
      excerpt:
        "Experience the daily rhythm of worship, study, community, and practical ministry that shapes ABMTC students.",
      author: "Student Life Team",
      date: "February 20, 2024",
      category: "Student Life",
      image: "/campus-worship-gathering.jpg",
    },
    {
      title: "Church Planting Essentials: Lessons from the Field",
      excerpt: "Practical insights from ABMTC alumni who have successfully planted churches in challenging contexts.",
      author: "Rev. Emmanuel Boateng",
      date: "February 15, 2024",
      category: "Church Planting",
      image: "/new-church-building.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Blog & News</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Stories, insights, and updates from ABMTC and our global alumni network
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to receive the latest stories, updates, and ministry insights from ABMTC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
