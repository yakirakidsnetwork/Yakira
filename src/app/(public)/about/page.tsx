import React from "react";
import Link from "next/link";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVision } from "@/components/about/mission-vision";
import { FounderStory } from "@/components/about/founder-story";
import { LeadershipTeam } from "@/components/about/leadership-team";
import { OurValues } from "@/components/about/our-values";
import { AboutFAQ } from "@/components/about/about-faq";
import { ComingSoonTooltip } from "@/components/ui/coming-soon-tooltip";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <MissionVision />
      <FounderStory />
      <LeadershipTeam />
      <OurValues />
      <AboutFAQ />

      {/* Final CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-default max-w-4xl mx-auto space-y-8">
          <h2 className="heading-2 text-african-earth">Ready to make a difference?</h2>
          <p className="body-large text-text-light max-w-2xl mx-auto">
            Your support directly impacts thousands of children across Africa. 
            Join us in our mission to rise by lifting others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              href="/donate" 
              className="btn-primary text-lg px-10 h-16 w-full sm:w-auto"
            >
              DONATE NOW
            </Link>
            <ComingSoonTooltip 
              title="Volunteer Program" 
              description="Our volunteer application system is launching in April 2026." 
              launchDate="April 2026"
            >
              <button className="bg-white border-2 border-african-earth/20 text-african-earth font-poppins font-bold text-lg h-16 px-10 rounded-lg hover:bg-african-earth hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
                VOLUNTEER
              </button>
            </ComingSoonTooltip>
          </div>
        </div>
      </section>
    </div>
  );
}
