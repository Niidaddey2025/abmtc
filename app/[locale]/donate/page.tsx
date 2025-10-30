"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslations, useLocale } from "next-intl"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Heart, CreditCard, Smartphone } from "lucide-react"

export default function DonatePage() {
  const t = useTranslations('donate')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const initialType = searchParams.get('type') || 'one-time'
  
  const [donationType, setDonationType] = useState(initialType)
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const predefinedAmounts = ['50', '100', '250', '500', '1000', '2500']

  const handleDonate = async () => {
    setIsProcessing(true)
    
    const donationAmount = amount === 'custom' ? customAmount : amount
    
    if (!donationAmount || !name || !email || !phone) {
      alert(t('fillAllFields'))
      setIsProcessing(false)
      return
    }

    try {
      // Initialize Hubtel payment
      const response = await fetch('/api/hubtel/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(donationAmount),
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          donationType: donationType,
          description: `${donationType === 'one-time' ? 'One-time' : donationType === 'monthly' ? 'Monthly' : 'Sponsorship'} donation to ABMTC`,
        }),
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        // Redirect to Hubtel checkout page
        window.location.href = data.checkoutUrl
      } else {
        alert(t('paymentError'))
        setIsProcessing(false)
      }
    } catch (error) {
      console.error('Payment initialization error:', error)
      alert(t('paymentError'))
      setIsProcessing(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-8">
                {/* Donation Type */}
                <div>
                  <Label className="text-lg font-bold mb-4 block">{t('donationType')}</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time" className="flex-1 cursor-pointer">
                        <div className="font-semibold">{t('oneTime')}</div>
                        <div className="text-sm text-muted-foreground">{t('oneTimeDesc')}</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly" className="flex-1 cursor-pointer">
                        <div className="font-semibold">{t('monthly')}</div>
                        <div className="text-sm text-muted-foreground">{t('monthlyDesc')}</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="sponsor" id="sponsor" />
                      <Label htmlFor="sponsor" className="flex-1 cursor-pointer">
                        <div className="font-semibold">{t('sponsor')}</div>
                        <div className="text-sm text-muted-foreground">{t('sponsorDesc')}</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-lg font-bold mb-4 block">{t('selectAmount')}</Label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {predefinedAmounts.map((amt) => (
                      <Button
                        key={amt}
                        type="button"
                        variant={amount === amt ? "default" : "outline"}
                        onClick={() => {
                          setAmount(amt)
                          setCustomAmount('')
                        }}
                        className="h-16 text-lg"
                      >
                        GH₵ {amt}
                      </Button>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant={amount === 'custom' ? "default" : "outline"}
                    onClick={() => setAmount('custom')}
                    className="w-full mb-4"
                  >
                    {t('customAmount')}
                  </Button>
                  {amount === 'custom' && (
                    <div>
                      <Label htmlFor="customAmount">{t('enterAmount')}</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">{t('personalInfo')}</h3>
                  
                  <div>
                    <Label htmlFor="name">{t('fullName')}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t('fullNamePlaceholder')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t('phonePlaceholder')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className="w-6 h-6 text-primary" />
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('paymentMethods')}
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleDonate}
                  disabled={isProcessing}
                  className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                >
                  {isProcessing ? t('processing') : t('proceedToPayment')}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  {t('securePayment')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
