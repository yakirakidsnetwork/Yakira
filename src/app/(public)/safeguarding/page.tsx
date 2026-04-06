import React from "react";
import { ShieldAlert, Users, FileText, CheckCircle2 } from "lucide-react";

export default function SafeguardingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-african-earth text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-life-green/10 rounded-full blur-3xl" />
        <div className="container-default relative z-10 text-center space-y-6">
          <div className="w-16 h-16 bg-life-green/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-life-green/30">
            <ShieldAlert className="w-8 h-8 text-life-green" />
          </div>
          <h1 className="heading-1 text-white">Child Safeguarding Policy</h1>
          <p className="body-large text-cream/80 max-w-2xl mx-auto italic">
            &quot;Our commitment to the protection and well-being of 
            every child in our care is absolute and unwavering.&quot;
          </p>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-16 bg-cream/50 border-b border-black/5">
        <div className="container-default max-w-3xl mx-auto text-center space-y-6">
          <h2 className="heading-3 text-african-earth">Zero Tolerance Statement</h2>
          <p className="body-large text-text-dark leading-relaxed">
            Yakira Kids Network maintains a zero-tolerance policy towards child abuse, 
            exploitation, and harassment. We are aligned with international 
            child protection standards to ensure a safe, nurturing environment 
            for all children.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-default max-w-4xl mx-auto space-y-20">
          
          {/* Section 1: Code of Conduct */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="flex items-center gap-3 text-hope-orange mb-4">
                <Users className="w-6 h-6" />
                <span className="font-poppins font-extrabold text-sm uppercase tracking-widest">Code of Conduct</span>
              </div>
              <h3 className="heading-4 text-african-earth">Behavioral Standards</h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <div className="bg-cream/30 p-8 rounded-3xl space-y-6">
                <p className="font-bold text-african-earth flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-life-green" />
                  Required Behaviors:
                </p>
                <ul className="space-y-4 body-regular text-text-light pl-8 list-disc">
                  <li>Treating every child with dignity and respect.</li>
                  <li>Maintaining professional boundaries at all times.</li>
                  <li>Adhering to the &quot;Two-Adult&quot; rule (never alone with a child).</li>
                  <li>Using only approved communication channels.</li>
                </ul>
                
                <p className="font-bold text-african-earth flex items-center gap-3 pt-4 text-hope-orange">
                  <AlertCircle className="w-5 h-5" />
                  Prohibited Actions:
                </p>
                <ul className="space-y-4 body-regular text-text-light pl-8 list-disc">
                  <li>Any form of physical, emotional, or sexual abuse.</li>
                  <li>Sharing unauthorized photos or personal data of children.</li>
                  <li>Giving unauthorized gifts or showing favoritism.</li>
                  <li>Private social media contact with children.</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-black/5" />

          {/* Section 2: Recruitment */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="flex items-center gap-3 text-spiritual-blue mb-4">
                <FileText className="w-6 h-6" />
                <span className="font-poppins font-extrabold text-sm uppercase tracking-widest">Recruitment</span>
              </div>
              <h3 className="heading-4 text-african-earth">Screening Process</h3>
            </div>
            <div className="md:col-span-8 space-y-6 body-regular text-text-light leading-relaxed">
              <p>
                All Yakira staff, mentors, and volunteers undergo a rigorous screening 
                process before being granted access to our network or children.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Comprehensive Background Checks",
                  "Minimum of 2 Reference Checks",
                  "Values-Alignment Interviews",
                  "Mandatory Safeguarding Training",
                  "Signed Code of Conduct Agreement",
                  "Regular Performance Audits",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-black/5 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-life-green shrink-0" />
                    <span className="text-sm font-medium text-african-earth">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-black/5" />

          {/* Section 3: Reporting */}
          <div className="bg-african-earth rounded-[40px] p-12 lg:p-16 text-white space-y-10 shadow-2xl relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-hope-orange/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl" />
             <div className="relative z-10 space-y-8">
               <h3 className="heading-3 text-white">Reporting Procedures</h3>
               <p className="body-large text-cream/70 max-w-2xl leading-relaxed">
                 If you suspect any breach of this policy or any form of child abuse, 
                 report it immediately and confidentially. Your report is protected 
                 under our non-retaliation policy.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                 <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                   <p className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-sunset-gold mb-3">Email Report</p>
                   <p className="text-xl font-bold mb-1">safeguarding@yakira.org</p>
                   <p className="text-sm opacity-60">Monitored 24/7 by our security lead.</p>
                 </div>
                 <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                   <p className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-sunset-gold mb-3">Emergency Contact</p>
                   <p className="text-xl font-bold mb-1">Promise (Admin Lead)</p>
                   <p className="text-sm opacity-60">Immediate assessment within 4 hours.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="section-padding bg-cream text-center">
        <p className="body-small text-text-light max-w-2xl mx-auto">
          Policy Effective: January 27, 2026. This document is reviewed annually 
          to remain compliant with international standards and local regulations 
          in our areas of operation.
        </p>
      </section>
    </div>
  );
}

import { AlertCircle } from "lucide-react"; // Re-importing for the prohibitions list
