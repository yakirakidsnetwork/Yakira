"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FilterButtonsProps {
  tags: string[];
  activeFilters: string[];
  toggleFilter: (tag: string) => void;
  clearFilters: () => void;
}

export function FilterButtons({ tags, activeFilters, toggleFilter, clearFilters }: FilterButtonsProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={clearFilters}
          className={cn(
            "h-10 px-6 rounded-full font-poppins font-medium text-sm transition-all duration-300 border-2",
            activeFilters.length === 0
              ? "bg-hope-orange border-hope-orange text-white"
              : "bg-cream border-transparent text-text-dark hover:border-hope-orange/30"
          )}
        >
          All Stories
        </button>
        
        {tags.map((tag) => {
          const isActive = activeFilters.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleFilter(tag)}
              className={cn(
                "h-10 px-6 rounded-full font-poppins font-medium text-sm transition-all duration-300 border-2",
                isActive
                  ? "bg-hope-orange border-hope-orange text-white"
                  : "bg-cream border-transparent text-text-dark hover:border-hope-orange/30 hover:scale-105"
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>
      
      {activeFilters.length > 0 && (
        <div className="text-center">
          <button 
            onClick={clearFilters}
            className="text-xs font-poppins font-bold text-hope-orange uppercase tracking-widest hover:underline"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
