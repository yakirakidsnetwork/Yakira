"use client";

import React from "react";
import { Play, Calendar, Clock, Users, Book, Target, ArrowUpRight } from "lucide-react";
import { format, parseISO } from "date-fns";

export interface Episode {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  publishDate: string;
  duration: string;
  tags: string[];
  impactMetrics: {
    childrenReached: number;
    lessonsShared: number;
    milestone: string;
  };
  featured?: boolean;
}

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${episode.youtubeId}`;
  const formattedDate = format(parseISO(episode.publishDate), "MMMM d, yyyy");

  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-soft border border-black/5 group hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
      {/* Thumbnail */}
      <a 
        href={youtubeUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative aspect-video overflow-hidden block"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-hope-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="p-8 flex-grow flex flex-col">
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {episode.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-cream text-text-dark border border-african-earth/10 rounded-full text-[10px] font-bold uppercase tracking-wider hover:border-hope-orange transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-poppins font-bold text-xl text-african-earth group-hover:text-hope-orange transition-colors line-clamp-2">
            {episode.title}
          </h3>

          <div className="flex items-center gap-4 text-text-light text-sm">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {episode.duration}
            </div>
          </div>

          <p className="body-small text-text-light line-clamp-3 leading-relaxed">
            {episode.description}
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="mt-auto space-y-4">
          <div className="p-4 bg-cream/50 rounded-2xl border border-black/5 space-y-3">
            <p className="font-poppins font-bold text-[10px] uppercase tracking-[0.2em] text-text-light">
              📊 Impact Stats
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-life-green" />
                <span className="text-sm font-medium text-text-dark">
                  {episode.impactMetrics.childrenReached} Children Reached
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Book className="w-4 h-4 text-spiritual-blue" />
                <span className="text-sm font-medium text-text-dark">
                  {episode.impactMetrics.lessonsShared} Lessons Shared
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-sunset-gold" />
                <span className="text-sm font-medium text-text-dark">
                  {episode.impactMetrics.milestone}
                </span>
              </div>
            </div>
          </div>

          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-hope-orange text-hope-orange font-poppins font-bold hover:bg-hope-orange hover:text-white transition-all duration-300"
          >
            Watch on YouTube
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
