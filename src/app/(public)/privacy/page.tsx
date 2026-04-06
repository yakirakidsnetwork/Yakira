import React from "react";

export default function PrivacyPage() {
  const lastUpdated = "March 25, 2026";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-20 bg-cream">
        <div className="container-default text-center">
          <h1 className="heading-1 text-african-earth">Privacy Policy</h1>
          <p className="body-regular text-text-light mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-default max-w-4xl mx-auto prose prose-brown">
          <div className="space-y-12 text-text-dark leading-relaxed">
            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">1. Introduction</h2>
              <p>
                Yakira Kids Network (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting 
                your privacy. This policy explains how we collect, use, and protect 
                your personal information when you use our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, and phone number.</li>
                <li><strong>Donation Data:</strong> History and amounts (processed via third-party providers).</li>
                <li><strong>Usage Data:</strong> How you interact with our website (via cookies and analytics).</li>
                <li><strong>Guardian Consent:</strong> Data for children in our care, collected only with explicit legal guardian consent.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">3. How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and acknowledge your donations.</li>
                <li>Send regular updates about our mission and impact.</li>
                <li>Improve our website and program delivery.</li>
                <li>Ensure the safety and security of all children in our network.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">4. Children&apos;s Privacy</h2>
              <p className="bg-life-green/5 p-6 border-l-4 border-life-green italic">
                Protecting children is our highest priority. We never collect data from children 
                under 13 without verifiable parental/guardian consent. All child images and stories 
                are shared in strict accordance with our Child Safeguarding Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">5. Third-Party Services</h2>
              <p>
                We use trusted third-party providers for payment processing (e.g., GoFundMe) 
                and email communications. These providers have their own privacy policies 
                governing how they handle your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-3 text-african-earth">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or request the deletion of your 
                personal data at any time. To exercise these rights, please contact us 
                at privacy@yakirakidsnetwork.org.
              </p>
            </section>

            <section className="pt-12 border-t border-black/5">
              <p className="body-small text-text-light text-center">
                Questions about this policy? Reach out to <a href="mailto:privacy@yakirakidsnetwork.org" className="text-hope-orange hover:underline font-bold">privacy@yakirakidsnetwork.org</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
