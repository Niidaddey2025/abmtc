"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Globe, Clock, GraduationCap, CheckCircle2, Award, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { useState } from "react"

export default function ProgramsPage() {
  const t = useTranslations('programs')
  const locale = useLocale()
  const [expandedDiploma, setExpandedDiploma] = useState<string | null>(null)

  const handleDiplomaClick = (diplomaId: string) => {
    setExpandedDiploma(diplomaId)
    // Scroll to the detailed section
    setTimeout(() => {
      const element = document.getElementById(`${diplomaId}-detail`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

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

      {/* Diplomas Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <DiplomaOverviewCard
              title={t('makarios.title')}
              duration={t('makarios.duration')}
              badge={t('makarios.badge')}
              qualification={t('makarios.qualification')}
              onClick={() => handleDiplomaClick('makarios')}
            />
            <DiplomaOverviewCard
              title={t('machaneh.title')}
              duration={t('machaneh.duration')}
              badge={t('machaneh.badge')}
              qualification={t('machaneh.qualification')}
              onClick={() => handleDiplomaClick('machaneh')}
            />
            <DiplomaOverviewCard
              title={t('manthano.title')}
              duration={t('manthano.duration')}
              badge={t('manthano.badge')}
              qualification={t('manthano.qualification')}
              onClick={() => handleDiplomaClick('manthano')}
            />
            <DiplomaOverviewCard
              title={t('anagkazo.title')}
              duration={t('anagkazo.duration')}
              badge={t('anagkazo.badge')}
              qualification={t('anagkazo.qualification')}
              outcome={t('anagkazo.outcome')}
              onClick={() => handleDiplomaClick('anagkazo')}
            />
          </div>

          {/* Detailed Diploma Information */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('diplomaDetails.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('diplomaDetails.subtitle')}</p>
            </div>

            {/* Makarios Diploma Detail */}
            <Card id="makarios-detail" className="mb-6 overflow-hidden">
              <button
                onClick={() => setExpandedDiploma(expandedDiploma === 'makarios' ? null : 'makarios')}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge>Foundation</Badge>
                    <h3 className="text-2xl font-bold text-foreground">The Makarios Diploma</h3>
                  </div>
                  {expandedDiploma === 'makarios' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>

              {expandedDiploma === 'makarios' && (
                <div className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Duration</div>
                          <div className="text-sm text-muted-foreground">12 months</div>
                          <div className="text-xs text-muted-foreground">(March-February; September-August)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Qualification</div>
                          <div className="text-sm text-muted-foreground">BECE or equivalent</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Outcome</div>
                          <div className="text-sm text-muted-foreground">Makarios Diploma</div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Academic Rotations
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Six-week rotations with End-of-Rotation Examinations consisting of an MCQ paper, a written assignment, and an oral examination.
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Foundations for the Work of Ministry",
                          "Core Concepts of Shepherding",
                          "Loyalty",
                          "Fundamentals of Evangelism",
                          "The Art and Science of Applied Leadership",
                          "Practical Approaches to Church Growth",
                          "The Theory and Practice of Operating in the Anointing"
                        ].map((course, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Components */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Practical Ministry Components
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">BMCDR three times and CAP if one is scheduled</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">SONTA work</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Bacenta work observation for the first six months</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Active Bacenta work for the last six months</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Waiting on God</span>
                        </div>
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Grand Final Examination
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Students qualify with <span className="font-semibold text-foreground">1200 points</span>
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>2-hour MCQ paper consisting of 200 MCQs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Oral Examination with External Examiners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Machaneh Diploma Detail */}
            <Card id="machaneh-detail" className="mb-6 overflow-hidden">
              <button
                onClick={() => setExpandedDiploma(expandedDiploma === 'machaneh' ? null : 'machaneh')}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge>Intermediate</Badge>
                    <h3 className="text-2xl font-bold text-foreground">The Machaneh Diploma</h3>
                  </div>
                  {expandedDiploma === 'machaneh' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>

              {expandedDiploma === 'machaneh' && (
                <div className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Duration</div>
                          <div className="text-sm text-muted-foreground">18 months</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Qualification</div>
                          <div className="text-sm text-muted-foreground">BECE or equivalent</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Outcome</div>
                          <div className="text-sm text-muted-foreground">Machaneh Diploma</div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Academic Rotations (15)
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Four-week rotations with End-of-Rotation Examinations consisting of an MCQ paper, a written assignment, and an oral examination.
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Church History",
                          "Foundations for the Work of Ministry",
                          "Essential Charismatic Doctrines",
                          "Core Concepts of Shepherding",
                          "Loyalty and Disloyalty 1",
                          "Fundamentals of Evangelism",
                          "Principles of Financial Management in Ministry",
                          "The Art and Science of Applied Leadership 1",
                          "Practical Approaches to Church Growth",
                          "Principles of Spiritual Guidance",
                          "The Theory and Practice of Operating in the Anointing",
                          "Demonology: A Concise Guide",
                          "Illustrated Principles of Marriage Counselling",
                          "Loyalty and Disloyalty 2",
                          "The Art and Science of Applied Leadership 2"
                        ].map((course, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Components */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Practical Ministry Components
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">BMCDR four times and CAP if any are scheduled</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">SONTA work</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Bacenta work observation for the first six months</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Active Bacenta work for the last twelve months</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Waiting on God</span>
                        </div>
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Grand Final Examination
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Students qualify with <span className="font-semibold text-foreground">1500 points</span>
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>3-hour MCQ paper consisting of 300 MCQs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Oral Examination with External Examiners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Manthano Diploma Detail */}
            <Card id="manthano-detail" className="mb-6 overflow-hidden">
              <button
                onClick={() => setExpandedDiploma(expandedDiploma === 'manthano' ? null : 'manthano')}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge>Advanced</Badge>
                    <h3 className="text-2xl font-bold text-foreground">The Manthano Diploma</h3>
                  </div>
                  {expandedDiploma === 'manthano' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>

              {expandedDiploma === 'manthano' && (
                <div className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Duration</div>
                          <div className="text-sm text-muted-foreground">36 months (3 years)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Qualification</div>
                          <div className="text-sm text-muted-foreground">BECE or equivalent</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Outcome</div>
                          <div className="text-sm text-muted-foreground">Manthano Diploma</div>
                        </div>
                      </div>
                    </div>

                    {/* Program Structure */}
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2">Program Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        This Diploma is made up of two Clerkships of 18 months each - Junior and Senior. Rotations are 4 weeks in Junior Clerkship, extending to 6-8 weeks in Senior Clerkship. Each rotation ends with End-of-Rotation Examinations consisting of an MCQ paper, a written assignment, and an oral examination.
                      </p>
                    </div>

                    {/* Academic Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Academic Rotations
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Church History",
                          "Foundations for the Work of Ministry",
                          "Essential Charismatic Doctrines",
                          "Core Concepts of Shepherding",
                          "Loyalty and Disloyalty",
                          "Fundamentals of Evangelism",
                          "Principles of Financial Management in Ministry",
                          "The Art and Science of Applied Leadership",
                          "Practical Approaches to Church Growth",
                          "Principles of Spiritual Guidance",
                          "The Theory and Practice of Operating in the Anointing",
                          "Demonology: A Concise Guide",
                          "Illustrated Principles of Marriage Counselling"
                        ].map((course, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Components */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Practical Ministry Components
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">BMCDR eight times and CAP if any are scheduled</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">SONTA work</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Bacenta work observation for the first six months of Junior Clerkship</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Active Bacenta work for the rest of the program</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Waiting on God</span>
                        </div>
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Grand Final Examination
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Students qualify with <span className="font-semibold text-foreground">1500 points</span>
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>3-hour MCQ paper consisting of 300 MCQs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Oral Examination with External Examiners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Anagkazo Diploma Detail */}
            <Card id="anagkazo-detail" className="mb-6 overflow-hidden">
              <button
                onClick={() => setExpandedDiploma(expandedDiploma === 'anagkazo' ? null : 'anagkazo')}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge>Professional</Badge>
                    <h3 className="text-2xl font-bold text-foreground">The Anagkazo Diploma</h3>
                  </div>
                  {expandedDiploma === 'anagkazo' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>

              {expandedDiploma === 'anagkazo' && (
                <div className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Duration</div>
                          <div className="text-sm text-muted-foreground">4 years (48 months)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Qualification</div>
                          <div className="text-sm text-muted-foreground">BECE or equivalent</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">Outcome</div>
                          <div className="text-sm text-muted-foreground">Anagkazo Diploma + Pastoral Appointment</div>
                        </div>
                      </div>
                    </div>

                    {/* Program Structure */}
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2">Program Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        The Anagkazo Diploma consists of all the content of the Manthano Diploma (3 years) plus a specialized fourth year with three professional rotations.
                      </p>
                    </div>

                    {/* Fourth Year Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Fourth Year Professional Rotations
                      </h4>
                      
                      {/* Rural Rotation */}
                      <div className="mb-4 p-4 border border-border rounded-lg">
                        <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          Rural Rotation (9 months)
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          The student is posted to pastor a local church under the supervision of a selected Bishop. During this period, the student will conduct research on church growth and missions.
                        </p>
                      </div>

                      {/* Administrative Rotation */}
                      <div className="mb-4 p-4 border border-border rounded-lg">
                        <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          Administrative Rotation (9 months)
                        </h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          The student observes and learns administrative and church governing procedures including:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Training and supervision of treasurers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Fast-track audits</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Managing church facilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>All twelve recognized church offices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Operations of councils</span>
                          </li>
                        </ul>
                      </div>

                      {/* Practical Evangelism Rotation */}
                      <div className="p-4 border border-border rounded-lg">
                        <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          Practical Evangelism Rotation
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          The student engages in and attends at least one Healing Jesus campaign, involved from the beginning (advance team), through preparation (mobilization, choir rehearsals), and in the crusade nights (set up and set down).
                        </p>
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Grand Final Examination
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">1.</span>
                          <div>
                            <span className="font-semibold text-foreground">Presentation of Research Findings (50%)</span>
                            <p className="text-muted-foreground mt-1">Present research conducted during Rural Rotation on church growth and missions.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">2.</span>
                          <div>
                            <span className="font-semibold text-foreground">Grand Final Oral Examination (50%)</span>
                            <p className="text-muted-foreground mt-1">Objective structured ministry-based examinations demonstrating how the student has applied all learning from three years on campus to field work.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 group"
              >
                <Link href="/apply">
                  {t('cta.applyNow')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href="/contact">{t('cta.contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function DiplomaOverviewCard({ title, duration, badge, qualification, outcome, onClick }: { 
  title: string; 
  duration: string; 
  badge: string; 
  qualification: string;
  outcome?: string;
  onClick?: () => void;
}) {
  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary/50" 
      onClick={onClick}
    >
      <Badge className="mb-4">{badge}</Badge>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>{duration}</span>
        </div>
        <div className="flex items-start gap-2">
          <GraduationCap className="w-4 h-4 text-primary mt-0.5" />
          <span>{qualification}</span>
        </div>
        {outcome && (
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-primary mt-0.5" />
            <span className="text-xs">{outcome}</span>
          </div>
        )}
      </div>
    </Card>
  )
}
