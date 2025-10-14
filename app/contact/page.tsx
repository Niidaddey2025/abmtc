"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for your message! We'll get back to you soon.",
        })
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        const errorData = await response.json()
        toast({
          title: "Submission failed",
          description: errorData.error || "Failed to send message",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Network error",
        description: "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about ABMTC? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Reach out through any of these channels and our team will assist you.
                  </p>
                </div>

                <ContactInfoCard icon={MapPin} title="Location" details={["Mampong, Ghana"]} />

                <ContactInfoCard icon={Mail} title="Email" details={["anagkazorecruitment@gmail.com"]} />

                <ContactInfoCard icon={Phone} title="Phone" details={["+233 55 746 7460", "+233 59 231 9140"]} />

                <ContactInfoCard
                  icon={Clock}
                  title="Office Hours"
                  details={["Monday - Friday", "8:00 AM - 5:00 PM GMT"]}
                />
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => updateFormData("subject", e.target.value)}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="financial-aid">Financial Aid</option>
                          <option value="programs">Program Information</option>
                          <option value="visit">Campus Visit</option>
                          <option value="alumni">Alumni Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Department Contacts</h2>
              <p className="text-xl text-muted-foreground">
                Reach out to specific departments for specialized assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DepartmentCard
                title="Admissions Office"
                description="Questions about applications, requirements, and enrollment"
              />
              <DepartmentCard
                title="Financial Aid"
                description="Scholarships, payment plans, and financial assistance"
              />
              <DepartmentCard
                title="Student Services"
                description="Current student support, housing, and campus life"
              />
              <DepartmentCard
                title="Alumni Relations"
                description="Alumni network, events, and continuing education"
              />
              <DepartmentCard
                title="Academic Affairs"
                description="Curriculum, courses, and academic policies"
              />
              <DepartmentCard
                title="International Students"
                description="Visa assistance, travel, and international student support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Visit Our Campus</h2>
              <p className="text-xl text-muted-foreground">
                Located in Mampong, Ghana - Schedule a visit to experience ABMTC firsthand
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.7956262830585!2d-0.1536956703655262!3d5.899463134189145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf6fbefa859ca5%3A0x75bc87391d2fb7f2!2sAnagkazo%20Bible%20And%20Ministry%20Training%20Center!5e0!3m2!1sen!2sgh!4v1760009402333!5m2!1sen!2sgh"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

function ContactInfoCard({ icon: Icon, title, details }: { icon: any; title: string; details: string[] }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-foreground mb-2">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-sm text-muted-foreground">
            {detail}
          </p>
        ))}
      </div>
    </div>
  )
}

function DepartmentCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}
