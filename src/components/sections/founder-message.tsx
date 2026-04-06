"use client";

import React from "react";
import Link from "next/link";

export function FounderMessage() {
  return (
    <section className="bg-cream section-padding overflow-hidden">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
          {/* Left Column: Image (40%) */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-square max-w-[400px] mx-auto lg:max-w-none">
              <div className="absolute inset-0 rounded-2xl border-2 border-sunset-gold/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
              <div className="absolute inset-0 bg-african-earth rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder Image */}
                <div className="w-full h-full bg-[#D1C4B2] flex items-center justify-center">
                  <span className="text-african-earth/30 font-poppins font-bold text-lg">Yvonne Muyselaar</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center lg:text-left space-y-1">
              <h3 className="heading-5 text-african-earth">Yvonne Muyselaar</h3>
              <p className="body-small text-text-light font-medium flex items-center justify-center lg:justify-start gap-2">
                Founder & Executive Director 
                <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-black/5">
                  Netherlands 🇳🇱
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Message (60%) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="block font-poppins font-semibold text-xs text-sunset-gold uppercase tracking-[0.2em]">
                From the Founder
              </span>
              <h2 className="heading-2 text-african-earth">A Divine Calling</h2>
            </div>

            <div className="space-y-6">
              <p className="body-large text-text-light italic">
                &quot;On January 27, 2026, we officially launch Yakira Kids Network—a vision 
                birthed from God&apos;s heart for Africa&apos;s most vulnerable children. Every 
                child deserves to know they are loved, valued, and equipped for greatness.&quot;
              </p>

              <blockquote className="relative p-8 rounded-2xl bg-white border-l-4 border-sunset-gold shadow-soft">
                <span className="absolute -top-4 left-6 text-7xl font-playfair text-sunset-gold/20">&quot;</span>
                <p className="quote-small text-spiritual-blue leading-relaxed relative z-10">
                  Children, you rise by lifting others. If you rise and do not lift another 
                  person, you are a wicked person. We do this for the precious children, 
                  because it is God&apos;s Will.
                </p>
              </blockquote>
            </div>

            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-hope-orange font-poppins font-bold hover:gap-4 transition-all duration-300"
              >
                Read Full Story 
                <span className="text-2xl leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
