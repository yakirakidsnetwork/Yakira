"use client";

import React from "react";

export function FounderStory() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#8B6F47_0.5px,transparent_0.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container-default relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Detailed Narrative (7 columns) */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="block font-poppins font-semibold text-xs text-sunset-gold uppercase tracking-[0.2em]">
                The Heart Behind Yakira
              </span>
              <h2 className="heading-2 text-african-earth italic font-playfair">Birthed from a Divine Calling</h2>
            </div>
            
            <div className="space-y-6 text-text-light body-large leading-relaxed">
              <p>
                Yakira Kids Network is not just a project; it is a vision birthed 
                from God&apos;s heart for Africa&apos;s most vulnerable children. 
                Founded by Yvonne Muyselaar, the network was established with a 
                profound sense of purpose and a commitment to transforming the 
                lives of those who have been forgotten by society.
              </p>
              <p>
                With a deep connection to both the Netherlands and the various 
                regions of Africa, Yvonne saw the immense potential within children 
                who were displaced or orphaned. She realized that providing for their 
                physical needs was only the first step—they needed a foundation of 
                faith, the empowerment of education, and the dignity of knowing 
                their worth in Christ.
              </p>
              <p>
                The launch date of January 27, 2026, marks the official beginning 
                of a journey that will see thousands of lives touched, mentored, 
                and equipped for greatness. At Yakira, we believe that we do not 
                just rise; we rise by lifting others.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft border-l-4 border-sunset-gold">
              <p className="quote-small text-spiritual-blue leading-relaxed font-playfair italic">
                &quot;Children, you rise by lifting others. If you rise and do not lift 
                another person, you are a wicked person. We do this for the precious 
                children, because it is God&apos;s Will.&quot;
              </p>
              <p className="mt-4 font-poppins font-bold text-african-earth">— Yvonne Muyselaar</p>
            </div>
          </div>

          {/* Portrait & Profile (5 columns) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl bg-african-earth">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-[#C2B5A3] flex items-center justify-center">
                <span className="text-african-earth/20 font-poppins font-bold text-2xl">Yvonne Muyselaar</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-poppins font-bold text-2xl mb-1">Yvonne Muyselaar</p>
                <div className="flex items-center gap-2 text-sm font-medium text-cream/90">
                  Netherlands 🇳🇱 | Founder
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-soft text-center">
                <p className="font-poppins font-bold text-2xl text-hope-orange leading-tight">Jan 27</p>
                <p className="caption text-text-light uppercase tracking-wider text-[10px] mt-1">Official Launch</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-soft text-center">
                <p className="font-poppins font-bold text-2xl text-spiritual-blue leading-tight">Global</p>
                <p className="caption text-text-light uppercase tracking-wider text-[10px] mt-1">Movement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
