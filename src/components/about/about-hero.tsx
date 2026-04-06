"use client";

import React from "react";

export function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-african-earth overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-hope-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />
      
      <div className="container-default relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="block font-poppins font-semibold text-xs text-sunset-gold uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-2 duration-700">
            Yakira Kids Network
          </span>
          <h1 className="heading-1 text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            About Our Mission
          </h1>
          <p className="body-large text-cream/90 max-w-2xl mx-auto italic animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            &quot;We rise by lifting others.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
