"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Clock, GraduationCap, CheckCircle2, Award, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { useState } from "react"

export default function ProgramsPage() {
  const t = useTranslations('programs')
  const locale = useLocale()
  const [expandedDiploma, setExpandedDiploma] = useState<string | null>(null)

  const getArray = (path: string) => {
    const value = t.raw(path)
    return Array.isArray(value) ? (value as string[]) : []
  }

  const makariosRotations = getArray('makarios.rotations')
  const makariosPractical = getArray('makarios.practicalComponents')
  const makariosFinalExam = getArray('makarios.finalExamDetails')
  const machanehRotations = getArray('machaneh.rotations')
  const machanehPractical = getArray('machaneh.practicalComponents')
  const machanehFinalExam = getArray('machaneh.finalExamDetails')
  const manthanoRotations = getArray('manthano.rotations')
  const manthanoPractical = getArray('manthano.practicalComponents')
  const manthanoFinalExam = getArray('manthano.finalExamDetails')
  const anagkazoAdminList = getArray('anagkazo.adminList')

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
                    <Badge>{t('makarios.badge')}</Badge>
                    <h3 className="text-2xl font-bold text-foreground">{t('makarios.title')}</h3>
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
                          <div className="font-semibold text-foreground">{t('common.duration')}</div>
                          <div className="text-sm text-muted-foreground">{t('makarios.durationDetail')}</div>
                          <div className="text-xs text-muted-foreground">{t('makarios.intakes')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.qualification')}</div>
                          <div className="text-sm text-muted-foreground">{t('makarios.qualification')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.outcome')}</div>
                          <div className="text-sm text-muted-foreground">{t('makarios.outcome')}</div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {t('common.academicRotations')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('makarios.rotationDesc')}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {makariosRotations.map((course, index) => (
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
                        {t('common.practicalComponents')}
                      </h4>
                      <div className="space-y-2">
                        {makariosPractical.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {t('common.grandFinal')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('common.qualifyingPointsFull', { points: t('makarios.points') })}
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        {makariosFinalExam.map((detail, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
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
                    <Badge>{t('machaneh.badge')}</Badge>
                    <h3 className="text-2xl font-bold text-foreground">{t('machaneh.title')}</h3>
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
                          <div className="font-semibold text-foreground">{t('common.duration')}</div>
                          <div className="text-sm text-muted-foreground">{t('machaneh.duration')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.qualification')}</div>
                          <div className="text-sm text-muted-foreground">{t('machaneh.qualification')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.outcome')}</div>
                          <div className="text-sm text-muted-foreground">{t('machaneh.outcome')}</div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {t('machaneh.rotationCount')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('machaneh.rotationDesc')}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {machanehRotations.map((course, index) => (
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
                        {t('common.practicalComponents')}
                      </h4>
                      <div className="space-y-2">
                        {machanehPractical.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {t('common.grandFinal')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('common.qualifyingPointsFull', { points: t('machaneh.points') })}
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        {machanehFinalExam.map((detail, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
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
                    <Badge>{t('manthano.badge')}</Badge>
                    <h3 className="text-2xl font-bold text-foreground">{t('manthano.title')}</h3>
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
                          <div className="font-semibold text-foreground">{t('common.duration')}</div>
                          <div className="text-sm text-muted-foreground">{t('manthano.durationDetail')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.qualification')}</div>
                          <div className="text-sm text-muted-foreground">{t('manthano.qualification')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.outcome')}</div>
                          <div className="text-sm text-muted-foreground">{t('manthano.outcome')}</div>
                        </div>
                      </div>
                    </div>

                    {/* Program Structure */}
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2">{t('common.programStructure')}</h4>
                      <p className="text-sm text-muted-foreground">{t('manthano.structureDesc')}</p>
                    </div>

                    {/* Academic Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {t('common.academicRotations')}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {manthanoRotations.map((course, index) => (
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
                        {t('common.practicalComponents')}
                      </h4>
                      <div className="space-y-2">
                        {manthanoPractical.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {t('common.grandFinal')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('common.qualifyingPointsFull', { points: t('manthano.points') })}
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        {manthanoFinalExam.map((detail, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
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
                    <Badge>{t('anagkazo.badge')}</Badge>
                    <h3 className="text-2xl font-bold text-foreground">{t('anagkazo.title')}</h3>
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
                          <div className="font-semibold text-foreground">{t('common.duration')}</div>
                          <div className="text-sm text-muted-foreground">{t('anagkazo.durationDetail')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.qualification')}</div>
                          <div className="text-sm text-muted-foreground">{t('anagkazo.qualification')}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-semibold text-foreground">{t('common.outcome')}</div>
                          <div className="text-sm text-muted-foreground">{t('anagkazo.outcome')}</div>
                        </div>
                      </div>
                    </div>

                    {/* Program Structure */}
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-2">{t('common.programStructure')}</h4>
                      <p className="text-sm text-muted-foreground">{t('anagkazo.structureDesc')}</p>
                    </div>

                    {/* Fourth Year Rotations */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {t('anagkazo.fourthYearTitle')}
                      </h4>
                      
                      {/* Rural Rotation */}
                      <div className="mb-4 p-4 border border-border rounded-lg">
                        <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {t('anagkazo.ruralRotation')}
                        </h5>
                        <p className="text-sm text-muted-foreground">{t('anagkazo.ruralDesc')}</p>
                      </div>

                      {/* Administrative Rotation */}
                      <div className="mb-4 p-4 border border-border rounded-lg">
                        <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {t('anagkazo.adminRotation')}
                        </h5>
                        <p className="text-sm text-muted-foreground mb-2">{t('anagkazo.adminDesc')}</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          {anagkazoAdminList.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical Evangelism Rotation */}
                      <div className="p-4 border border-border rounded-lg">
                        <h5 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          {t('anagkazo.evangelismRotation')}
                        </h5>
                        <p className="text-sm text-muted-foreground">{t('anagkazo.evangelismDesc')}</p>
                      </div>
                    </div>

                    {/* Grand Final Examination */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {t('common.grandFinal')}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">1.</span>
                          <div>
                            <span className="font-semibold text-foreground">{t('anagkazo.researchPresentation')}</span>
                            <p className="text-muted-foreground mt-1">{t('anagkazo.researchDesc')}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">2.</span>
                          <div>
                            <span className="font-semibold text-foreground">{t('anagkazo.oralExam')}</span>
                            <p className="text-muted-foreground mt-1">{t('anagkazo.oralExamDesc')}</p>
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
                <Link href={`/${locale}/apply`}>
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
                <Link href={`/${locale}/contact`}>{t('cta.contactUs')}</Link>
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
