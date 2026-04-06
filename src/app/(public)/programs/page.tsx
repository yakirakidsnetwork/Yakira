import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { programsData } from "@/lib/programs-data";
import { cn } from "@/lib/utils";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="relative py-20 lg:py-32 bg-life-green overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        <div className="container-default relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="heading-1 text-white">Our Five Pillars of Holistic Support</h1>
            <p className="body-large text-cream/90 max-w-2xl mx-auto">
              At Yakira Kids Network, we believe in addressing the whole child—
              spiritually, physically, intellectually, and creatively.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-default text-center max-w-3xl mx-auto space-y-8">
          <p className="body-large text-text-light leading-relaxed">
            Our approach is integrated and sustainable. We don&apos;t just provide a service; 
            we build a comprehensive care network that transforms lives and equips 
            the next generation of African leaders.
          </p>
        </div>
      </section>

      {/* Detailed Program Cards */}
      <section className="pb-24 bg-white">
        <div className="container-default">
          <div className="space-y-20">
            {programsData.map((program, idx) => (
              <div 
                key={program.slug}
                className={cn(
                  "flex flex-col lg:flex-row gap-12 items-center group",
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Image/Icon Side */}
                <div className="lg:w-1/2 w-full">
                  <div className={cn(
                    "aspect-video rounded-[40px] flex items-center justify-center relative overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]",
                    program.bgClass
                  )}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
                    <program.icon className={cn("w-32 h-32", program.textClass)} />
                    
                    {/* Floating Brand Element */}
                    <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-black/5">
                      <div className="text-right">
                        <p className="font-poppins font-bold text-2xl text-african-earth leading-none mb-1">
                          {program.impactStat?.value}
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-light">
                          {program.impactStat?.label}
                        </p>
                      </div>
                      <CheckCircle2 className={cn("w-6 h-6", program.textClass)} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 w-full space-y-8">
                  <div className="space-y-4">
                    <span className={cn("font-poppins font-bold text-xs uppercase tracking-[0.2em]", program.textClass)}>
                      {program.name}
                    </span>
                    <h2 className="heading-2 text-african-earth">{program.tagline}</h2>
                    <p className="body-large text-text-light">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {program.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={cn("w-5 h-5 shrink-0 mt-0.5", program.textClass)} />
                        <span className="body-small text-text-dark font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={`/programs/${program.slug}`}
                      className={cn(
                        "inline-flex items-center gap-2 font-poppins font-bold text-lg hover:gap-4 transition-all duration-300",
                        program.textClass
                      )}
                    >
                      Learn More About {program.name} 
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Preview */}
      <section className="section-padding bg-cream">
        <div className="container-default">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-2 text-african-earth">How It Works</h2>
            <p className="body-large text-text-light max-w-2xl mx-auto">
              Our process ensures that every child receives personalized care 
              tailored to their specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-african-earth/10 -translate-y-1/2 hidden md:block" />

            {[
              { step: "01", title: "Child Enrollment", desc: "Assessment and intake process." },
              { step: "02", title: "Program Matching", desc: "Personalized program assignment." },
              { step: "03", title: "Ongoing Support", desc: "Regular monitoring and care." },
              { step: "04", title: "Success & Growth", desc: "Graduation and life skills." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-soft relative z-10 text-center space-y-4 border border-black/5">
                <span className="font-poppins font-extrabold text-4xl text-hope-orange opacity-20 block leading-none">
                  {step.step}
                </span>
                <h3 className="font-poppins font-bold text-african-earth text-lg">{step.title}</h3>
                <p className="body-small text-text-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-african-earth text-white text-center">
        <div className="container-default max-w-3xl mx-auto space-y-8">
          <h2 className="heading-2 text-white">Support Our Programs</h2>
          <p className="body-large text-cream/70">
            Join our mission to provide holistic support for Africa&apos;s displaced children.
          </p>
          <div className="pt-4">
            <Link href="/donate" className="btn-primary text-xl px-12 h-20">
              DONATE NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
