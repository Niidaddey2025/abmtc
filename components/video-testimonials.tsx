"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Kweku Larbi",
    country: "UK",
    videoPath: "/testimony1.mp4",
    category: "Calling",
    quote: "God called me from UK to Ghana, and ABMTC equipped me to answer that call.",
  },
  {
    id: 2,
    name: "David Osei",
    country: "Ghana",
    thumbnail: "/young-ghanaian-man-student-portrait.jpg",
    category: "Transformation",
    quote: "ABMTC transformed my understanding of Scripture and my passion for missions.",
  },
  {
    id: 3,
    name: "Sarah Kim",
    country: "South Korea",
    thumbnail: "/young-korean-woman-student-portrait.jpg",
    category: "Mission Field",
    quote: "Now I'm planting churches in Southeast Asia, all because of my training at ABMTC.",
  }
]

export function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false)
  const [currentVideoPath, setCurrentVideoPath] = useState<string | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleVideoHover = (index: number, isHovering: boolean) => {
    const video = videoRefs.current[index]
    if (video) {
      if (isHovering) {
        video.muted = true
        video.play()
      } else {
        video.pause()
        video.currentTime = 0
      }
    }
  }

  const handleVideoClick = (videoPath: string) => {
    setCurrentVideoPath(videoPath)
    setIsVideoPopupOpen(true)
  }

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false)
    setCurrentVideoPath(null)
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories of{" "}
            <span className="bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from students and graduates whose lives have been transformed through ABMTC's training and are now
            impacting nations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Video Thumbnail */}
                      <div className="relative h-80 md:h-auto group cursor-pointer">
                        {testimonial.videoPath ? (
                          <>
                            <video
                              ref={(el) => {
                                const index = testimonials.findIndex(t => t.id === testimonial.id)
                                videoRefs.current[index] = el
                              }}
                              src={testimonial.videoPath}
                              className="w-full h-full object-cover"
                              muted
                              loop
                              playsInline
                              onMouseEnter={() => {
                                const index = testimonials.findIndex(t => t.id === testimonial.id)
                                handleVideoHover(index, true)
                              }}
                              onMouseLeave={() => {
                                const index = testimonials.findIndex(t => t.id === testimonial.id)
                                handleVideoHover(index, false)
                              }}
                              onClick={() => handleVideoClick(testimonial.videoPath!)}
                            />
                            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors flex items-center justify-center pointer-events-none">
                              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <img
                              src={testimonial.thumbnail || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                            {testimonial.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <blockquote className="text-2xl md:text-3xl font-serif text-foreground mb-6 leading-relaxed italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-bold text-xl text-foreground">{testimonial.name}</div>
                          <div className="text-muted-foreground">{testimonial.country}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-border/80"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Video Popup Modal */}
        {isVideoPopupOpen && currentVideoPath && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeVideoPopup}
              >
                <X className="w-6 h-6" />
              </Button>
              <video
                src={currentVideoPath}
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
