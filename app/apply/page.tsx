"use client"

import type React from "react"

import { useState, Fragment } from "react"
import { toast } from "@/hooks/use-toast"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { COUNTRIES } from "@/lib/countries"
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronsUpDown, AlertCircle } from "lucide-react"

type ApplicationStep = 1 | 2 | 3 | 4

const PROGRESS_STEPS = [
  { step: 1, label: "Personal Info" },
  { step: 2, label: "Spiritual Background" },
  { step: 3, label: "Program Details" },
  { step: 4, label: "References" },
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState<ApplicationStep>(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    email: "",
    phone: "",
    profession: "",
    currentWork: "",
    postalAddress: "",
    residentialAddress: "",
    settlement: "",
    nextOfKin: "",
    nextOfKinContact: "",
    fatherFullName: "",
    fatherProfession: "",
    motherFullName: "",
    motherProfession: "",
    guardianFullName: "",
    guardianProfession: "",
    parentGuardianOwnHouse: "",
    parentGuardianRentHouse: "",
    parentGuardianOwnBusiness: "",
    parentGuardianOwnCar: "",
    financialSupport: "",

    // Step 2: Spiritual Background
    testimony: "",
    salvationDate: "",
    churchName: "",
    pastorName: "",
    pastorEmail: "",
    ministryExperience: "",

    // Step 3: Program Selection
    program: "",
    startDate: "",
    housingNeeded: "",
    dietaryRestrictions: "",

    // Step 4: References
    reference1Name: "",
    reference1Email: "",
    reference1Phone: "",
    reference2Name: "",
    reference2Email: "",
    reference2Phone: "",
  })

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const [educationalCertificateFile, setEducationalCertificateFile] = useState<File | null>(null)

  const validateStep1 = () => {
    const errors: string[] = []
    const requiredFields = [
      { field: 'firstName', label: 'First Name' },
      { field: 'lastName', label: 'Last Name' },
      { field: 'dateOfBirth', label: 'Date of Birth' },
      { field: 'gender', label: 'Gender' },
      { field: 'maritalStatus', label: 'Marital Status' },
      { field: 'nationality', label: 'Nationality' },
      { field: 'email', label: 'Email Address' },
      { field: 'phone', label: 'Contact' },
      { field: 'profession', label: 'Profession' },
      { field: 'currentWork', label: 'Current Work' },
      { field: 'postalAddress', label: 'Postal Address' },
      { field: 'residentialAddress', label: 'Residential Address' },
      { field: 'settlement', label: 'Settlement' },
      { field: 'nextOfKin', label: 'Next Of Kin' },
      { field: 'nextOfKinContact', label: 'Next Of Kin Contact' },
      { field: 'fatherFullName', label: "Father's Full Name" },
      { field: 'fatherProfession', label: "Father's Profession" },
      { field: 'motherFullName', label: "Mother's Full Name" },
      { field: 'motherProfession', label: "Mother's Profession" },
      // guardianFullName and guardianProfession are now optional
      { field: 'parentGuardianOwnHouse', label: 'Does Parent/Guardian Own House?' },
      { field: 'parentGuardianRentHouse', label: 'Are Your Parents/Guardian Renting A House?' },
      { field: 'parentGuardianOwnBusiness', label: 'Do Your Parents/Guardian Own A Business?' },
      { field: 'parentGuardianOwnCar', label: 'Do Your Parents/Guardian Own A Car?' },
      { field: 'financialSupport', label: 'Who will take care of your financial needs?' }
    ]

    requiredFields.forEach(({ field, label }) => {
      if (!formData[field as keyof typeof formData].trim()) {
        errors.push(label)
      }
    })

    if (!educationalCertificateFile) {
      errors.push('Educational Certificate')
    } else if (educationalCertificateFile.type !== 'application/pdf') {
      errors.push('Educational Certificate must be a PDF file')
    }

    setValidationErrors(errors)
    return errors.length === 0
  }

  const nextStep = () => {
    if (currentStep === 1) {
      if (!validateStep1()) {
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }
    }
    
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as ApplicationStep)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as ApplicationStep)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const hasEducationalCertificateError = validationErrors.some((error) =>
    error.toLowerCase().includes('educational certificate'),
  )

  const validateAllSteps = () => {
    const errors: string[] = []
    
    // Step 1: Personal Information (already validated by validateStep1)
    if (!validateStep1()) {
      errors.push('Please complete all required fields in Step 1: Personal Information')
    }
    
    // Step 2: Spiritual Background
    // testimony is now optional
    if (!formData.churchName.trim()) errors.push('Church Name is required')
    if (!formData.pastorName.trim()) errors.push('Pastor Name is required')
    // pastorEmail is now optional
    // ministryExperience is already optional
    
    // Step 3: Program Selection
    if (!formData.program.trim()) errors.push('Program selection is required')
    if (!formData.startDate.trim()) errors.push('Start Date is required')
    
    // Step 4: References
    if (!formData.reference1Name.trim()) errors.push('Reference 1 Name is required')
    if (!formData.reference1Email.trim()) errors.push('Reference 1 Email is required')
    if (!formData.reference1Phone.trim()) errors.push('Reference 1 Phone is required')
    // Reference 2 is now optional
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate all steps before submission
    const allErrors = validateAllSteps()
    if (allErrors.length > 0) {
      toast({
        title: "Application Incomplete",
        description: `Please complete the following required fields:\n• ${allErrors.slice(0, 5).join('\n• ')}${allErrors.length > 5 ? `\n• ...and ${allErrors.length - 5} more` : ''}`,
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const submissionData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key, value)
      })

      if (educationalCertificateFile) {
        submissionData.append('educationalCertificate', educationalCertificateFile, educationalCertificateFile.name)
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: submissionData,
      })

      if (response.ok) {
        toast({
          title: "Application submitted",
          description: "Thank you! We'll be in touch soon.",
        })
        // Reset form or redirect as needed
        setCurrentStep(1)
        setFormData({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          maritalStatus: "",
          nationality: "",
          email: "",
          phone: "",
          profession: "",
          currentWork: "",
          postalAddress: "",
          residentialAddress: "",
          settlement: "",
          nextOfKin: "",
          nextOfKinContact: "",
          fatherFullName: "",
          fatherProfession: "",
          motherFullName: "",
          motherProfession: "",
          guardianFullName: "",
          guardianProfession: "",
          parentGuardianOwnHouse: "",
          parentGuardianRentHouse: "",
          parentGuardianOwnBusiness: "",
          parentGuardianOwnCar: "",
          financialSupport: "",
          testimony: "",
          salvationDate: "",
          churchName: "",
          pastorName: "",
          pastorEmail: "",
          ministryExperience: "",
          program: "",
          startDate: "",
          housingNeeded: "",
          dietaryRestrictions: "",
          reference1Name: "",
          reference1Email: "",
          reference1Phone: "",
          reference2Name: "",
          reference2Email: "",
          reference2Phone: "",
        })
        setEducationalCertificateFile(null)
        setValidationErrors([])
      } else {
        const errorData = await response.json()
        toast({
          title: "Submission failed",
          description: errorData.error || "Failed to submit application",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast({
        title: "Network error",
        description: "An error occurred while submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Application Form</h1>
              <p className="text-lg text-muted-foreground">Complete all steps to submit your application to ABMTC</p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {PROGRESS_STEPS.map(({ step, label }, index) => {
                  const isCompleted = step < currentStep
                  const isActive = step === currentStep
                  const connectorColor = isCompleted ? "border-primary" : "border-muted-foreground/40"

                  return (
                    <Fragment key={step}>
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                            step <= currentStep
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : step}
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            isActive || isCompleted ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {label}
                        </span>
                      </div>

                      {index < PROGRESS_STEPS.length - 1 && (
                        <div className="flex flex-col items-center md:flex-1">
                          <span
                            className={`hidden md:block w-full border-t-2 ${connectorColor}`}
                          />
                          <span
                            className={`md:hidden h-8 border-l-2 ${connectorColor}`}
                          />
                        </div>
                      )}
                    </Fragment>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Personal Information</h2>

                    {/* Validation Errors */}
                    {validationErrors.length > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                        <div className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="text-sm font-medium text-red-800 mb-2">
                              Please fill in all required fields:
                            </h3>
                            <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
                              {validationErrors.map((error, index) => (
                                <li key={index}>{error}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className={validationErrors.includes('First Name') ? 'border-red-500' : ''}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          className={validationErrors.includes('Last Name') ? 'border-red-500' : ''}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                          className={validationErrors.includes('Date of Birth') ? 'border-red-500' : ''}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <select
                          id="gender"
                          value={formData.gender}
                          onChange={(e) => updateFormData("gender", e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Gender') ? 'border-red-500' : 'border-input'}`}
                          required
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="maritalStatus">Marital Status *</Label>
                        <select
                          id="maritalStatus"
                          value={formData.maritalStatus}
                          onChange={(e) => updateFormData("maritalStatus", e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Marital Status') ? 'border-red-500' : 'border-input'}`}
                          required
                        >
                          <option value="">Select status</option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
                          <option value="widowed">Widowed</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={isCountryOpen}
                            aria-controls="country-list"
                            className={`justify-between ${validationErrors.includes('Nationality') ? 'border-red-500' : ''}`}
                          >
                            {formData.nationality ? formData.nationality : "Select nationality"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search countries..." />
                            <CommandList id="country-list">
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup>
                                {COUNTRIES.map((country) => (
                                  <CommandItem
                                    key={country}
                                    value={country}
                                    onSelect={(value) => {
                                      updateFormData("nationality", value)
                                      setIsCountryOpen(false)
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        formData.nationality === country ? "opacity-100" : "opacity-0",
                                      )}
                                    />
                                    {country}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <p className="text-xs text-muted-foreground">
                        Start typing to search for your country.
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            className={validationErrors.includes('Email Address') ? 'border-red-500' : ''}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Contact *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            className={validationErrors.includes('Contact') ? 'border-red-500' : ''}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Professional Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="profession">Profession *</Label>
                          <Input
                            id="profession"
                            value={formData.profession}
                            onChange={(e) => updateFormData("profession", e.target.value)}
                            className={validationErrors.includes('Profession') ? 'border-red-500' : ''}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="currentWork">Current Work *</Label>
                          <Input
                            id="currentWork"
                            value={formData.currentWork}
                            onChange={(e) => updateFormData("currentWork", e.target.value)}
                            className={validationErrors.includes('Current Work') ? 'border-red-500' : ''}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Address Information</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="postalAddress">Postal Address *</Label>
                          <Textarea
                            id="postalAddress"
                            value={formData.postalAddress}
                            onChange={(e) => updateFormData("postalAddress", e.target.value)}
                            className={validationErrors.includes('Postal Address') ? 'border-red-500' : ''}
                            rows={3}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="residentialAddress">Residential Address *</Label>
                          <Textarea
                            id="residentialAddress"
                            value={formData.residentialAddress}
                            onChange={(e) => updateFormData("residentialAddress", e.target.value)}
                            className={validationErrors.includes('Residential Address') ? 'border-red-500' : ''}
                            rows={3}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="settlement">Settlement *</Label>
                          <select
                            id="settlement"
                            value={formData.settlement}
                            onChange={(e) => updateFormData("settlement", e.target.value)}
                            className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Settlement') ? 'border-red-500' : 'border-input'}`}
                            required
                          >
                            <option value="">Select settlement type</option>
                            <option value="City">City</option>
                            <option value="Town">Town</option>
                            <option value="Village">Village</option>
                            <option value="Slum">Slum</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Next of Kin Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Next of Kin Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="nextOfKin">Next Of Kin *</Label>
                          <Input
                            id="nextOfKin"
                            value={formData.nextOfKin}
                            onChange={(e) => updateFormData("nextOfKin", e.target.value)}
                            className={validationErrors.includes('Next Of Kin') ? 'border-red-500' : ''}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="nextOfKinContact">Next Of Kin Contact *</Label>
                          <Input
                            id="nextOfKinContact"
                            type="tel"
                            value={formData.nextOfKinContact}
                            onChange={(e) => updateFormData("nextOfKinContact", e.target.value)}
                            className={validationErrors.includes('Next Of Kin Contact') ? 'border-red-500' : ''}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Family Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Family Information</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="fatherFullName">Father's Full Name *</Label>
                            <Input
                              id="fatherFullName"
                              value={formData.fatherFullName}
                              onChange={(e) => updateFormData("fatherFullName", e.target.value)}
                              className={validationErrors.includes("Father's Full Name") ? 'border-red-500' : ''}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="fatherProfession">Father's Profession *</Label>
                            <Input
                              id="fatherProfession"
                              value={formData.fatherProfession}
                              onChange={(e) => updateFormData("fatherProfession", e.target.value)}
                              className={validationErrors.includes("Father's Profession") ? 'border-red-500' : ''}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="motherFullName">Mother's Full Name *</Label>
                            <Input
                              id="motherFullName"
                              value={formData.motherFullName}
                              onChange={(e) => updateFormData("motherFullName", e.target.value)}
                              className={validationErrors.includes("Mother's Full Name") ? 'border-red-500' : ''}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="motherProfession">Mother's Profession *</Label>
                            <Input
                              id="motherProfession"
                              value={formData.motherProfession}
                              onChange={(e) => updateFormData("motherProfession", e.target.value)}
                              className={validationErrors.includes("Mother's Profession") ? 'border-red-500' : ''}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="guardianFullName">Guardian's Full Name</Label>
                            <Input
                              id="guardianFullName"
                              value={formData.guardianFullName}
                              onChange={(e) => updateFormData("guardianFullName", e.target.value)}
                              className={validationErrors.includes("Guardian's Full Name") ? 'border-red-500' : ''}
                            />
                          </div>
                          <div>
                            <Label htmlFor="guardianProfession">Guardian's Profession</Label>
                            <Input
                              id="guardianProfession"
                              value={formData.guardianProfession}
                              onChange={(e) => updateFormData("guardianProfession", e.target.value)}
                              className={validationErrors.includes("Guardian's Profession") ? 'border-red-500' : ''}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Family Financial Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Family Financial Information</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="parentGuardianOwnHouse">Does Parent / Guardian Own House? *</Label>
                            <select
                              id="parentGuardianOwnHouse"
                              value={formData.parentGuardianOwnHouse}
                              onChange={(e) => updateFormData("parentGuardianOwnHouse", e.target.value)}
                              className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Does Parent/Guardian Own House?') ? 'border-red-500' : 'border-input'}`}
                              required
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="parentGuardianRentHouse">Are Your Parents/Guardian Renting A House? *</Label>
                            <select
                              id="parentGuardianRentHouse"
                              value={formData.parentGuardianRentHouse}
                              onChange={(e) => updateFormData("parentGuardianRentHouse", e.target.value)}
                              className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Are Your Parents/Guardian Renting A House?') ? 'border-red-500' : 'border-input'}`}
                              required
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="parentGuardianOwnBusiness">Do Your Parents/Guardian Own A Business? *</Label>
                            <select
                              id="parentGuardianOwnBusiness"
                              value={formData.parentGuardianOwnBusiness}
                              onChange={(e) => updateFormData("parentGuardianOwnBusiness", e.target.value)}
                              className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Do Your Parents/Guardian Own A Business?') ? 'border-red-500' : 'border-input'}`}
                              required
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="parentGuardianOwnCar">Do Your Parents/Guardian Own A Car? *</Label>
                            <select
                              id="parentGuardianOwnCar"
                              value={formData.parentGuardianOwnCar}
                              onChange={(e) => updateFormData("parentGuardianOwnCar", e.target.value)}
                              className={`w-full px-3 py-2 border rounded-md bg-background ${validationErrors.includes('Do Your Parents/Guardian Own A Car?') ? 'border-red-500' : 'border-input'}`}
                              required
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="financialSupport">Who will take care of your financial needs? *</Label>
                          <Textarea
                            id="financialSupport"
                            value={formData.financialSupport}
                            onChange={(e) => updateFormData("financialSupport", e.target.value)}
                            className={validationErrors.includes('Who will take care of your financial needs?') ? 'border-red-500' : ''}
                            rows={3}
                            placeholder="Please describe who will be responsible for your financial support during your studies..."
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Educational Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Educational Information</h3>
                      <div>
                        <Label htmlFor="educationalCertificate">Educational Certificate *</Label>
                        <Input
                          id="educationalCertificate"
                          type="file"
                          accept="application/pdf"
                          className={hasEducationalCertificateError ? 'border-red-500 file:text-red-500' : ''}
                          onChange={(event) => {
                            const file = event.target.files?.[0] ?? null
                            if (file && file.type !== 'application/pdf') {
                              setEducationalCertificateFile(null)
                            } else {
                              setEducationalCertificateFile(file)
                            }
                          }}
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          {educationalCertificateFile
                            ? `Selected file: ${educationalCertificateFile.name}`
                            : "Upload your educational certificate as a PDF."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Spiritual Background */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Spiritual Background</h2>

                    <div>
                      <Label htmlFor="testimony">Personal Testimony (500-1000 words) *</Label>
                      <Textarea
                        id="testimony"
                        value={formData.testimony}
                        onChange={(e) => updateFormData("testimony", e.target.value)}
                        rows={8}
                        placeholder="Share your salvation testimony and calling to ministry..."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="salvationDate">Approximate Date of Salvation</Label>
                      <Input
                        id="salvationDate"
                        type="date"
                        value={formData.salvationDate}
                        onChange={(e) => updateFormData("salvationDate", e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="churchName">Current Church Name *</Label>
                        <Input
                          id="churchName"
                          value={formData.churchName}
                          onChange={(e) => updateFormData("churchName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pastorName">Pastor's Name *</Label>
                        <Input
                          id="pastorName"
                          value={formData.pastorName}
                          onChange={(e) => updateFormData("pastorName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="pastorEmail">Pastor's Email *</Label>
                      <Input
                        id="pastorEmail"
                        type="email"
                        value={formData.pastorEmail}
                        onChange={(e) => updateFormData("pastorEmail", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="ministryExperience">Ministry Experience</Label>
                      <Textarea
                        id="ministryExperience"
                        value={formData.ministryExperience}
                        onChange={(e) => updateFormData("ministryExperience", e.target.value)}
                        rows={5}
                        placeholder="Describe any previous ministry experience..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Program Selection */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Program Details</h2>

                    <div>
                      <Label htmlFor="program">Program Selection *</Label>
                      <select
                        id="program"
                        value={formData.program}
                        onChange={(e) => updateFormData("program", e.target.value)}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="residential">Residential Program (2 years, on-campus)</option>
                        <option value="online">Anagkazo Online (flexible, remote)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="startDate">Preferred Start Date *</Label>
                      <select
                        id="startDate"
                        value={formData.startDate}
                        onChange={(e) => updateFormData("startDate", e.target.value)}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select start date</option>
                        <option value="fall-2025">Fall 2025 (September)</option>
                        <option value="spring-2026">Spring 2026 (January)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="housingNeeded">Housing Needed (Residential only)</Label>
                      <select
                        id="housingNeeded"
                        value={formData.housingNeeded}
                        onChange={(e) => updateFormData("housingNeeded", e.target.value)}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select housing preference</option>
                        <option value="single">Single student housing</option>
                        <option value="married">Married/family housing</option>
                        <option value="none">Not needed (Online program)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="dietaryRestrictions">Dietary Restrictions or Allergies</Label>
                      <Textarea
                        id="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => updateFormData("dietaryRestrictions", e.target.value)}
                        rows={3}
                        placeholder="List any dietary restrictions or food allergies..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: References */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">References</h2>
                    <p className="text-muted-foreground mb-6">
                      Please provide contact information for two pastoral references. They will receive reference forms
                      via email.
                    </p>

                    <div className="border-b border-border pb-6 mb-6">
                      <h3 className="text-lg font-bold text-foreground mb-4">Reference 1 (Primary Pastor)</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reference1Name">Full Name *</Label>
                          <Input
                            id="reference1Name"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData("reference1Name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="reference1Email">Email *</Label>
                            <Input
                              id="reference1Email"
                              type="email"
                              value={formData.reference1Email}
                              onChange={(e) => updateFormData("reference1Email", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="reference1Phone">Phone *</Label>
                            <Input
                              id="reference1Phone"
                              type="tel"
                              value={formData.reference1Phone}
                              onChange={(e) => updateFormData("reference1Phone", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-4">Reference 2 (Ministry Leader)</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reference2Name">Full Name *</Label>
                          <Input
                            id="reference2Name"
                            value={formData.reference2Name}
                            onChange={(e) => updateFormData("reference2Name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="reference2Email">Email *</Label>
                            <Input
                              id="reference2Email"
                              type="email"
                              value={formData.reference2Email}
                              onChange={(e) => updateFormData("reference2Email", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="reference2Phone">Phone *</Label>
                            <Input
                              id="reference2Phone"
                              type="tel"
                              value={formData.reference2Phone}
                              onChange={(e) => updateFormData("reference2Phone", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="group bg-transparent"
                  >
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 group">
                      Next
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
