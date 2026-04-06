"use client";

import React from "react";
import { 
  Heart, Users, Shield, Target, Smartphone, Sparkles 
} from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Faith-Centered",
    description: "Guided by the Gospel in every decision and program.",
    icon: Sparkles,
    color: "text-spiritual-blue",
    bg: "bg-spiritual-blue/10",
  },
  {
    title: "Child-Focused",
    description: "Prioritizing the holistic well-being of every individual child.",
    icon: Heart,
    color: "text-life-green",
    bg: "bg-life-green/10",
  },
  {
    title: "Transparent",
    description: "Committed to integrity, honesty, and financial accountability.",
    icon: Shield,
    color: "text-donor-teal",
    bg: "bg-donor-teal/10",
  },
  {
    title: "Empowering",
    description: "Equipping children with skills for long-term self-sufficiency.",
    icon: Target,
    color: "text-hope-orange",
    bg: "bg-hope-orange/10",
  },
  {
    title: "Dignified",
    description: "Ensuring children represent themselves with worth and honor.",
    icon: Users,
    color: "text-sunset-gold",
    bg: "bg-sunset-gold/10",
  },
  {
    title: "Service Integrity",
    description: "Acting as reliable and compassionate mentors for those in need.",
    icon: Smartphone,
    color: "text-mentor-purple",
    bg: "bg-mentor-purple/10",
  },
];

export function OurValues() {
  return (
    <section className="section-padding bg-african-earth overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunset-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-default relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="heading-2 text-white">Our Core Values</h2>
          <p className="body-large text-cream/70">
            The principles that guide our work and define our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-10 rounded-[32px] group hover:bg-white hover:border-transparent transition-all duration-500 shadow-soft"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500", value.bg)}>
                <value.icon className={cn("w-6 h-6", value.color)} />
              </div>
              <h3 className="heading-5 text-white group-hover:text-african-earth transition-colors mb-4">
                {value.title}
              </h3>
              <p className="body-small text-cream/60 group-hover:text-african-earth/80 transition-colors leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
