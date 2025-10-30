"use client"

import { Navigation } from "@/components/navigation"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: 10/14/2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                At Anagkazo Bible & Ministry Training Center (ABMTC), we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or apply to our programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Personal identification information (name, email address, phone number, date of birth)</li>
                <li>Application materials (educational background, ministry experience, references)</li>
                <li>Financial information for scholarship and financial aid purposes</li>
                <li>Communication preferences and correspondence with us</li>
                {/* <li>Technical data (IP address, browser type, device information) when you visit our website</li> */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Process and evaluate your application to ABMTC programs</li>
                <li>Communicate with you about your application status and program information</li>
                <li>Administer financial aid and scholarship programs</li>
                <li>Improve our website and services</li>
                <li>Send you updates, newsletters, and information about ABMTC (with your consent)</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Service providers who assist us in operating our website and conducting our programs</li>
                <li>References and educational institutions for verification purposes</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Partner organizations for ministry placement (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website, analyze
                usage patterns, and deliver personalized content. You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Anagkazo Bible & Ministry Training Center</strong>
                  <br />
                  Mampong, Ghana
                  <br />
                  Email: anagkazorecruitment@gmail.com
                  <br />
                  Phone: +233 55 746 7460 || +233 59 231 9140
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
