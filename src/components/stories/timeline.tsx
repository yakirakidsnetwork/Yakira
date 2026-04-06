"use client";

import React from "react";
import { format, parseISO } from "date-fns";
import { Episode, EpisodeCard } from "./episode-card";

interface TimelineProps {
  episodes: Episode[];
}

export function Timeline({ episodes }: TimelineProps) {
  // Sort episodes by date descending
  const sortedEpisodes = [...episodes].sort((a, b) => 
    parseISO(b.publishDate).getTime() - parseISO(a.publishDate).getTime()
  );

  return (
    <div className="relative py-12">
      {/* Vertical Line */}
      <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-african-earth/10 -translate-x-1/2" />

      <div className="space-y-16 lg:space-y-24">
        {sortedEpisodes.map((episode, idx) => {
          const isEven = idx % 2 === 0;
          const formattedMonth = format(parseISO(episode.publishDate), "MMMM yyyy").toUpperCase();

          return (
            <div key={episode.id} className="relative">
              {/* Timeline Marker */}
              <div className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className="w-5 h-5 rounded-full bg-hope-orange border-4 border-white shadow-soft" />
                <div className="absolute top-0 left-8 lg:left-auto lg:right-8 whitespace-nowrap lg:text-right">
                   <span className="font-poppins font-bold text-[10px] text-african-earth tracking-widest bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-black/5">
                    {formattedMonth}
                   </span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pl-16 lg:pl-0">
                <div className={isEven ? "lg:text-right" : "lg:order-2"}>
                  <div className={isEven ? "lg:mr-auto" : "lg:ml-auto"}>
                    <EpisodeCard episode={episode} />
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden lg:block h-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
