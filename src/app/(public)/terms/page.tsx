import React from "react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-20 bg-cream">
        <div className="container-default text-center">
          <h1 className="heading-1 text-african-earth">Terms of Service</h1>
          <p className="body-regular text-text-light mt-4">Effective: January 27, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-default max-w-4xl mx-auto prose prose-brown">
          <div className="space-y-12 text-text-dark leading-relaxed">
            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">1. Acceptance of Terms</h2>
              <p>
                By accessing and using yakirakidsnetwork.org, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">2. Use of Content</h2>
              <p>
                All content on this site, including text, logos, and images of children, 
                is the property of Yakira Kids Network or its content suppliers. 
                Unauthorized use or reproduction is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">3. Donation Terms</h2>
              <p>
                Donations are processed through third-party platforms. By donating, 
                you acknowledge that all contributions are final and non-refundable 
                unless required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">4. User Conduct</h2>
              <p>
                Users agree not to use the website for any unlawful purpose or to 
                engage in any activity that could damage, disable, or impair 
                our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">5. Limitation of Liability</h2>
              <p>
                Yakira Kids Network shall not be liable for any direct, indirect, or 
                consequential damages arising from your use of this website.
              </p>
            </section>

            <section className="pt-12 border-t border-black/5">
              <p className="body-small text-text-light text-center">
                For legal inquiries, please contact <a href="mailto:legal@yakirakidsnetwork.org" className="text-hope-orange hover:underline font-bold">legal@yakirakidsnetwork.org</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
