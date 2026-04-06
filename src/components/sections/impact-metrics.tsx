"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Utensils, GraduationCap, Heart } from "lucide-react";

const metrics = [
  {
    label: "Children Reached",
    value: 2450,
    icon: Users,
    suffix: "+",
  },
  {
    label: "Meals Served",
    value: 147890,
    icon: Utensils,
    suffix: "",
  },
  {
    label: "Scholarships Awarded",
    value: 485,
    icon: GraduationCap,
    suffix: "",
  },
  {
    label: "Mentors Engaged",
    value: 89,
    icon: Heart,
    suffix: "",
  },
];

export function ImpactMetrics() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="bg-spiritual-blue py-24 text-white overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunset-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-default relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white">Our Global Impact</h2>
          <div className="w-24 h-1.5 bg-sunset-gold mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="text-center space-y-4 animate-in fade-in zoom-in duration-700"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-2">
                <metric.icon className="w-8 h-8 text-sunset-gold opacity-80" />
              </div>
              
              <div className="space-y-1">
                <div className="font-poppins font-extrabold text-5xl md:text-6xl text-sunset-gold tabular-nums">
                  {inView ? (
                    <CountUp end={metric.value} duration={2.5} separator="," suffix={metric.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="font-inter font-medium text-lg text-cream/80 uppercase tracking-widest text-sm">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
