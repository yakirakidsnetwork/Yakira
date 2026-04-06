"use client";

import React from "react";
import Link from "next/link";
import { Users, BookOpen, Newspaper } from "lucide-react";
import { ComingSoonTooltip } from "@/components/ui/coming-soon-tooltip";

export function SecondaryCTA() {
  return (
    <section className="bg-hope-orange py-20 relative overflow-hidden">
      {/* Background Texture Placeholder */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
      </div>

      <div className="container-default relative z-10 text-center text-white">
        <h2 className="heading-2 text-white mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Join Our Network of Hope
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <ComingSoonTooltip 
            title="Volunteer Program" 
            description="Our volunteer application system is launching in April 2026." 
            launchDate="April 2026"
          >
            <button className="flex items-center gap-3 px-8 h-16 rounded-xl border-2 border-white text-white font-poppins font-bold hover:bg-white hover:text-hope-orange transition-all duration-300 w-full md:w-auto">
              <Users className="w-5 h-5" />
              Become a Volunteer
            </button>
          </ComingSoonTooltip>

          <Link 
            href="/stories" 
            className="flex items-center gap-3 px-8 h-16 rounded-xl border-2 border-white text-white font-poppins font-bold hover:bg-white hover:text-hope-orange transition-all duration-300 w-full md:w-auto"
          >
            <BookOpen className="w-5 h-5" />
            Explore Our Stories
          </Link>

          <Link 
            href="/blog" 
            className="flex items-center gap-3 px-8 h-16 rounded-xl border-2 border-white text-white font-poppins font-bold hover:bg-white hover:text-hope-orange transition-all duration-300 w-full md:w-auto"
          >
            <Newspaper className="w-5 h-5" />
            Read Our Latest News
          </Link>
        </div>
      </div>
    </section>
  );
}
