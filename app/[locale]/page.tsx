import { HeroSection } from "@/components/hero-section"
import { StudentLifePreview } from "@/components/student-life-preview"
import { FoundersMessage } from "@/components/founders-message"
import { VideoTestimonials } from "@/components/video-testimonials"
import { ScriptureSection } from "@/components/scripture-section"
import { FinalCTA } from "@/components/final-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StudentLifePreview />
      <ScriptureSection />
      <FoundersMessage />
      <VideoTestimonials />
      <FinalCTA />
    </main>
  )
}
