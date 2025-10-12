import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using the Anagkazo Bible & Ministry Training Center (ABMTC) website and services, you
                agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our
                website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Use of Services</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these terms. You agree not
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information in applications</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Use our services for any commercial purpose without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Application and Admission</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Submitting an application to ABMTC does not guarantee admission. All applications are subject to review
                and approval by our admissions committee. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Accept or reject any application at our discretion</li>
                <li>Request additional information or documentation</li>
                <li>Verify information provided in applications</li>
                <li>Modify admission requirements and deadlines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Tuition and Fees</h2>
              <p className="text-foreground/80 leading-relaxed">
                Tuition and fees are subject to change. Accepted students will receive detailed information about costs,
                payment schedules, and available financial aid. All fees must be paid according to the agreed schedule.
                Failure to pay may result in dismissal from the program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Student Conduct</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Students are expected to maintain high standards of Christian conduct and adhere to ABMTC's code of
                conduct. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Respectful behavior toward staff, faculty, and fellow students</li>
                <li>Regular attendance and participation in classes and activities</li>
                <li>Adherence to biblical principles and ministry standards</li>
                <li>Compliance with campus rules and regulations</li>
                <li>Honest academic work and integrity in all matters</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed">
                All content on the ABMTC website, including text, graphics, logos, images, and software, is the property
                of ABMTC or its content suppliers and is protected by copyright and other intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website and services are provided "as is" without warranties of any kind, either express or implied.
                We do not guarantee that our services will be uninterrupted, secure, or error-free. We are not
                responsible for any technical issues that may affect your access to our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                To the fullest extent permitted by law, ABMTC shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our services or inability to use our
                services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice,
                for any reason, including breach of these Terms of Service. Upon termination, your right to use our
                services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Ghana, without
                regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the
                courts of Ghana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material
                changes by posting the updated terms on this page. Your continued use of our services after changes are
                posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Anagkazo Bible & Ministry Training Center</strong>
                  <br />
                  Accra, Ghana
                  <br />
                  Email: info@abmtc.org
                  <br />
                  Phone: +233 123 456 789
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
