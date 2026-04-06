import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight, CheckCircle2, Heart, 
  HelpCircle, MessageSquare, Sparkles, Users 
} from "lucide-react";
import { programsData } from "@/lib/programs-data";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComingSoonTooltip } from "@/components/ui/coming-soon-tooltip";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProgramDetailPage({ params }: PageProps) {
  const program = programsData.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = programsData
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Program Hero */}
      <section className={cn("relative py-20 lg:py-32 overflow-hidden", program.bgClass)}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent shadow-inner" />
        <div className="container-default relative z-10 text-center text-african-earth">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-white shadow-xl translate-y-0 group-hover:-translate-y-2 transition-transform duration-500", program.textClass)}>
              <program.icon className="w-10 h-10" />
            </div>
            <h1 className="heading-1 text-african-earth">{program.name}</h1>
            <p className="body-large text-text-light max-w-2xl mx-auto font-medium">
              {program.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className={cn("font-poppins font-bold text-xs uppercase tracking-[0.2em]", program.textClass)}>
                  Program Overview
                </span>
                <h2 className="heading-2 text-african-earth">What This Program Does</h2>
              </div>
              <div className="space-y-6 body-large text-text-light leading-relaxed">
                {program.fullDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {program.scripture && (
                <div className="bg-cream p-8 rounded-3xl border-l-4 border-sunset-gold space-y-4 shadow-soft">
                  <Sparkles className="w-6 h-6 text-sunset-gold" />
                  <p className="quote-small text-spiritual-blue italic font-playfair">&quot;{program.scripture.text}&quot;</p>
                  <p className="font-poppins font-bold text-african-earth text-sm uppercase tracking-wider">— {program.scripture.reference}</p>
                </div>
              )}
            </div>

            <div className="bg-cream rounded-[40px] p-12 space-y-8 shadow-soft">
              <h3 className="heading-4 text-african-earth flex items-center gap-3">
                <CheckCircle2 className={cn("w-6 h-6", program.textClass)} />
                Key Features & Benefits
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 bg-white shadow-sm", program.textClass)}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-african-earth">{feature}</h4>
                      <p className="body-small text-text-light opacity-80 mt-1 leading-relaxed">
                        Comprehensive support integrated with our core values to ensure long-term transformation.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story (Placeholder for Dynamic Story) */}
      <section className="section-padding bg-african-earth text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container-default relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square relative rounded-[40px] overflow-hidden bg-[#E8DCCB] shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-african-earth/20 font-poppins font-bold text-2xl">
                Impact Story Photo
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="block font-poppins font-semibold text-xs text-sunset-gold uppercase tracking-[0.2em]">
                  Real Impact
                </span>
                <h2 className="heading-2 text-white italic font-playfair">Meet One of Our Children</h2>
              </div>
              <p className="body-large text-cream/80 italic leading-relaxed">
                &quot;Before joining the {program.name} program, I struggled to see a future for myself. 
                Now, with the support of my mentors and the community at Yakira, I am 
                learning that I have a purpose and the skills to achieve my dreams.&quot;
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-sunset-gold/30 flex items-center justify-center font-poppins font-bold text-lg text-sunset-gold">
                  S
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-white leading-tight">Sarah, Age 12</h4>
                  <p className="caption text-sunset-gold uppercase tracking-widest text-[10px]">Beneficiary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding bg-white">
        <div className="container-default text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="heading-2 text-african-earth">How You Can Support This Program</h2>
              <p className="body-large text-text-light">
                Every contribution directly supports our mission to provide 
                holistic care for children through the {program.name} pillar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Link 
                href="/donate"
                className="bg-cream p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center group-hover:bg-hope-orange transition-colors">
                  <Heart className="w-8 h-8 text-hope-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-poppins font-bold text-african-earth">Direct Donation</h3>
                <p className="body-small text-text-light">Provide funds directly for this program&apos;s operations.</p>
              </Link>

              <ComingSoonTooltip title="Sponsor a Child" description="Launching in April 2026." launchDate="April 2026">
                <button className="bg-cream p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 group w-full opacity-60">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-spiritual-blue" />
                  </div>
                  <h3 className="font-poppins font-bold text-african-earth">Sponsor a Child</h3>
                  <p className="body-small text-text-light">Connect directly with a child and support their journey.</p>
                </button>
              </ComingSoonTooltip>

              <ComingSoonTooltip title="Partner With Us" description="Contact us for partnership opportunities." launchDate="2026">
                <button className="bg-cream p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 group w-full opacity-60">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                    <Users className="w-8 h-8 text-donor-teal" />
                  </div>
                  <h3 className="font-poppins font-bold text-african-earth">Partner With Us</h3>
                  <p className="body-small text-text-light">Institutional and corporate partnership opportunities.</p>
                </button>
              </ComingSoonTooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Program FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-default max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <HelpCircle className={cn("w-10 h-10 mx-auto opacity-50", program.textClass)} />
            <h2 className="heading-2 text-african-earth">Program FAQs</h2>
          </div>
          <Accordion className="w-full space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-8 rounded-2xl border-none shadow-soft">
                <AccordionTrigger className="hover:no-underline hover:text-hope-orange font-poppins font-bold text-lg text-african-earth py-6 text-left">
                  Question about {program.name} {i}?
                </AccordionTrigger>
                <AccordionContent className="body-regular text-text-light pb-6 leading-relaxed">
                  Detailed information regarding {program.name} operations and how we ensure 
                  maximum impact for every child in our network.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Programs */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-2 text-african-earth">Explore More Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((p) => (
              <Link 
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="bg-cream p-8 rounded-[40px] shadow-soft group hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-black/5"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform duration-500", p.textClass)}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-5 text-african-earth mb-3">{p.name}</h3>
                <p className="body-small text-text-light flex-grow mb-6 leading-relaxed">{p.tagline}</p>
                <div className={cn("flex items-center gap-2 font-poppins font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300", p.textClass)}>
                  Explore Program <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={cn("section-padding text-white text-center relative overflow-hidden bg-african-earth")}>
        <div className="container-default max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="heading-2 text-white">Support {program.name}</h2>
          <p className="body-large text-cream/70">
            Join our mission to provide holistic support for Africa&apos;s displaced children 
            specifically through our {program.name} pillar.
          </p>
          <div className="pt-4">
            <Link 
              href="/donate" 
              className="px-12 h-16 btn-primary text-lg flex items-center justify-center mx-auto w-full sm:w-auto"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
