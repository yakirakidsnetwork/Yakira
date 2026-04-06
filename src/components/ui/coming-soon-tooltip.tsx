"use client";

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

interface ComingSoonTooltipProps {
  children: React.ReactNode;
  title: string;
  description: string;
  launchDate: string;
}

export function ComingSoonTooltip({ 
  children, 
  title, 
  description, 
  launchDate 
}: ComingSoonTooltipProps) {
  return (
    <TooltipProvider delay={300}>
      <Tooltip>
        <TooltipTrigger>
          <span className="cursor-not-allowed opacity-60 flex items-center gap-1">
            {children}
            <span className="text-[9px] font-bold bg-muted px-1 py-0.5 rounded uppercase tracking-tighter opacity-70">Soon</span>
          </span>
        </TooltipTrigger>
        <TooltipContent 
          className={cn(
            "z-50 inline-flex w-fit max-w-xs items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            "w-64 p-5 bg-[#2D2D2D] text-white border-none rounded-xl shadow-2xl"
          )}
          sideOffset={5}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-hope-orange" />
              <h4 className="font-poppins font-semibold text-sm">{title}</h4>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {description}
            </p>
            <div className="pt-2 border-t border-gray-700 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-hope-orange font-bold">Planned Launch</span>
              <span className="text-[10px] font-medium text-white">{launchDate}</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
