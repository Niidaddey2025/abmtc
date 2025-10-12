import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StudentLifePreview } from "@/components/student-life-preview"
import { VideoTestimonials } from "@/components/video-testimonials"
import { ScriptureSection } from "@/components/scripture-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StudentLifePreview />
      <VideoTestimonials />
      <ScriptureSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
