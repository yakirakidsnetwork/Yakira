"use client";

import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] lg:h-[calc(100vh-96px)] overflow-hidden flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-african-earth/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="container-default relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-poppins font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            YAKIRA KIDS <br />
            <span className="text-hope-orange">NETWORK</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl lg:text-2xl text-cream/90 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Empowering Africa&apos;s displaced children through the Gospel, 
            holistic care, and sustainable skill-building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Link 
              href="/donate" 
              className="btn-primary text-lg px-10 h-16 w-full sm:w-auto"
            >
              DONATE NOW
            </Link>
            <Link 
              href="/about" 
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-poppins font-semibold text-lg h-16 px-10 rounded-lg hover:bg-white hover:text-african-earth transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              LEARN OUR STORY
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white mx-auto mb-2" />
        <span className="caption text-white uppercase tracking-widest text-[10px]">Scroll</span>
      </div>
    </section>
  );
}
