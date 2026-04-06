"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Timeline } from "@/components/stories/timeline";
import { FilterButtons } from "@/components/stories/filter-buttons";
import { Episode } from "@/components/stories/episode-card";
import episodesData from "@/data/episodes.json";
import { SearchX, Video } from "lucide-react";

export default function StoriesPage() {
  const allEpisodes = episodesData.episodes as Episode[];
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>(allEpisodes);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allEpisodes.forEach((ep) => ep.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [allEpisodes]);

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredEpisodes(allEpisodes);
    } else {
      const filtered = allEpisodes.filter((ep) => 
        activeFilters.some((filter) => ep.tags.includes(filter))
      );
      setFilteredEpisodes(filtered);
    }
  }, [activeFilters, allEpisodes]);

  const toggleFilter = (tag: string) => {
    setActiveFilters((prev) => 
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  const latestEpisode = allEpisodes[0]; // Assuming sorted in JSON or sort here

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-spiritual-blue to-african-earth overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container-default relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="heading-1 text-white">Our Journey: Stories of Hope</h1>
            <p className="body-large text-cream/90 max-w-2xl mx-auto">
              Follow Yakira&apos;s mission through our YouTube episodes. 
              Watch our story unfold, one child at a time.
            </p>
            <div className="pt-4">
              <a 
                href={`https://www.youtube.com/watch?v=${latestEpisode.youtubeId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 px-8 mx-auto w-fit"
              >
                <Video className="w-5 h-5" />
                WATCH LATEST EPISODE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="bg-white py-12 border-b border-black/5">
        <div className="container-default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Episodes", value: allEpisodes.length },
              { label: "Total Views", value: "5,234" },
              { label: "Children Featured", value: "47" },
              { label: "Countries Reached", value: "4" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <p className="font-poppins font-extrabold text-3xl text-sunset-gold leading-none tabular-nums">
                  {stat.value}
                </p>
                <p className="caption text-text-light uppercase tracking-widest text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Content Area */}
      <section className="section-padding bg-cream/30 min-h-screen">
        <div className="container-default space-y-16">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="font-poppins font-bold text-african-earth">Explore Themes</h2>
              <p className="body-small text-text-light italic">
                Showing {filteredEpisodes.length} stories
              </p>
            </div>
            
            <FilterButtons 
              tags={allTags} 
              activeFilters={activeFilters} 
              toggleFilter={toggleFilter} 
              clearFilters={clearFilters}
            />
          </div>

          {filteredEpisodes.length > 0 ? (
            <Timeline episodes={filteredEpisodes} />
          ) : (
            <div className="py-32 text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-soft">
                <SearchX className="w-10 h-10 text-text-light/30" />
              </div>
              <div className="space-y-2">
                <h3 className="heading-4 text-african-earth">No episodes found</h3>
                <p className="body-regular text-text-light">
                  Try adjusting your filters or browse all episodes.
                </p>
              </div>
              <button 
                onClick={clearFilters}
                className="btn-primary px-8 h-12"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-african-earth text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container-default max-w-4xl mx-auto space-y-10 relative z-10">
          <h2 className="heading-2 text-white">Be Part of the Story</h2>
          <p className="body-large text-cream/70 max-w-2xl mx-auto">
            Your support makes every episode possible. Join us as we build the 
            Yakira Kids Network and transform lives across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/donate" className="btn-primary px-10 h-16 w-full sm:w-auto">
              DONATE NOW
            </Link>
            <a 
              href="https://youtube.com/yakira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border-2 border-white text-african-earth font-poppins font-bold h-16 px-10 rounded-xl hover:bg-hope-orange hover:border-hope-orange hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              SUBSCRIBE ON YOUTUBE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
