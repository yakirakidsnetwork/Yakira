"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Yakira changed my life. Through their programs, I learned about Jesus and discovered hope for my future. Now I'm in school and dreaming big!",
    author: "Sarah",
    age: 12,
    location: "Rwanda",
    program: "Spiritual Foundation",
    color: "bg-spiritual-blue",
  },
  {
    quote: "Thanks to the Monthly Sustenance Program, I no longer go to bed hungry. I can focus on my studies and help my younger siblings survive and thrive.",
    author: "David",
    age: 14,
    location: "Kenya",
    program: "Monthly Sustenance",
    color: "bg-life-green",
  },
  {
    quote: "The Creative Skill Hubs taught me graphic design. I'm now creating artwork and helping my community tell their stories digitally.",
    author: "Grace",
    age: 16,
    location: "Nigeria",
    program: "Creative Skill Hubs",
    color: "bg-mentor-purple",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-default">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="heading-2 text-african-earth">Stories of Hope</h2>
            <p className="body-large text-text-light">
              Real stories from children whose lives have been transformed through 
              the Yakira Kids Network.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border-2 border-african-earth/20 flex items-center justify-center hover:bg-african-earth hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full bg-african-earth text-white flex items-center justify-center hover:bg-hope-orange transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-8">
                <div className="bg-white p-10 rounded-3xl shadow-soft h-full flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-2">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <Quote className="w-12 h-12 text-sunset-gold/30" />
                      <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider", t.color)}>
                        {t.program}
                      </span>
                    </div>
                    
                    <p className="quote-small text-text-dark leading-relaxed italic">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-cream border border-sunset-gold/20 flex items-center justify-center shadow-inner overflow-hidden">
                      <div className="w-full h-full bg-[#E5DACE]" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-african-earth">— {t.author}, Age {t.age}</h4>
                      <p className="caption text-text-light uppercase tracking-widest">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
