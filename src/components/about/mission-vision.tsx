"use client";

import React from "react";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-cream p-12 rounded-3xl space-y-6 flex flex-col items-center text-center group hover:bg-african-earth hover:text-white transition-all duration-500 shadow-soft">
            <div className="w-16 h-16 rounded-2xl bg-african-earth/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Target className="w-8 h-8 text-african-earth group-hover:text-sunset-gold transition-colors" />
            </div>
            <h2 className="heading-3 group-hover:text-white transition-colors">Our Mission</h2>
            <p className="body-large opacity-80 leading-relaxed">
              To provide holistic support for orphaned, displaced, and 
              parentless children in Africa through spiritual, academic, 
              and creative excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-12 rounded-3xl border border-african-earth/5 space-y-6 flex flex-col items-center text-center group hover:bg-hope-orange hover:text-white transition-all duration-500 shadow-soft">
            <div className="w-16 h-16 rounded-2xl bg-hope-orange/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Eye className="w-8 h-8 text-hope-orange group-hover:text-white transition-colors" />
            </div>
            <h2 className="heading-3 group-hover:text-white transition-colors">Our Vision</h2>
            <p className="body-large opacity-80 leading-relaxed">
              A future where every African child knows they are loved by 
              God and equipped to transform their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
