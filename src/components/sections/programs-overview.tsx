"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, Utensils, GraduationCap, Palette, Heart, ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Spiritual Foundation",
    description: "Fostering faith and character development through the Gospel.",
    icon: BookOpen,
    color: "spiritual-blue",
    href: "/programs/spiritual",
    bgClass: "bg-spiritual-blue/10",
    textClass: "text-spiritual-blue",
  },
  {
    title: "Monthly Sustenance",
    description: "Consistent, nutritious meals for children in underserved regions.",
    icon: Utensils,
    color: "life-green",
    href: "/programs/nutritional",
    bgClass: "bg-life-green/10",
    textClass: "text-life-green",
  },
  {
    title: "Educational Empowerment",
    description: "Full scholarships providing tuition, books, and uniforms.",
    icon: GraduationCap,
    color: "hope-orange",
    href: "/programs/educational",
    bgClass: "bg-hope-orange/10",
    textClass: "text-hope-orange",
  },
  {
    title: "Creative Skill Hubs",
    description: "Vocational training in trades, arts, and digital skills for life.",
    icon: Palette,
    color: "mentor-purple",
    href: "/programs/creative",
    bgClass: "bg-mentor-purple/10",
    textClass: "text-mentor-purple",
  },
  {
    title: "Welfare & Dignity",
    description: "Providing essential clothing and hygiene items with dignity.",
    icon: Heart,
    color: "donor-teal",
    href: "/programs/welfare",
    bgClass: "bg-donor-teal/10",
    textClass: "text-donor-teal",
  },
];

export function ProgramsOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="heading-2 text-african-earth">Our Five Pillars of Support</h2>
          <p className="body-large text-text-light">
            We provide holistic care that addresses the spiritual, physical, 
            intellectual, and creative needs of every child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <Link 
              key={program.title}
              href={program.href}
              className={cn(
                "card-default card-hover group",
                idx >= 3 ? "lg:translate-x-1/2" : "" // Center the bottom row on desktop
              )}
            >
              <div className={cn("icon-circle mb-8 transition-transform group-hover:rotate-12 duration-500", program.bgClass)}>
                <program.icon className={cn("w-10 h-10", program.textClass)} />
              </div>
              <h3 className="heading-4 mb-4 text-african-earth group-hover:text-hope-orange transition-colors">
                {program.title}
              </h3>
              <p className="body-regular text-text-light mb-8">
                {program.description}
              </p>
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="font-poppins font-bold text-sm text-hope-orange uppercase tracking-wider">
                  Learn More
                </span>
                <ArrowRight className="w-5 h-5 text-hope-orange translate-x-0 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
