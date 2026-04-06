"use client";

import React from "react";

const team = [
  {
    name: "Yvonne Muyselaar",
    role: "Executive Director",
    bio: "Oversight of all operations; final approval on all board actions and project plans. From Netherlands 🇳🇱",
  },
  {
    name: "Pastor Johnson",
    role: "Spiritual Lead",
    bio: "Leading spiritual guidance and teachings aligning with God's Word.",
  },
  {
    name: "Promise",
    role: "Admin & Finance",
    bio: "Managing all projects, legal frameworks, and financial occupations.",
  },
  {
    name: "David",
    role: "Programs Coordinator",
    bio: "Managing mentors, teaching schedules, feeding/clothing programs, and trauma-informed art therapy.",
  },
];

export function LeadershipTeam() {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="heading-2 text-african-earth">Our Leadership Team</h2>
          <p className="body-large text-text-light">
            Dedicated professionals committed to God&apos;s vision for the children of Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group space-y-6 text-center animate-in fade-in zoom-in duration-700"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden bg-african-earth shadow-soft group-hover:shadow-xl transition-shadow duration-500">
                {/* Photo Placeholder */}
                <div className="w-full h-full bg-[#E8DCCB] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                  <span className="text-african-earth/20 font-poppins font-bold text-lg">{member.name}</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="heading-5 text-african-earth group-hover:text-hope-orange transition-colors">
                  {member.name}
                </h3>
                <p className="caption text-hope-orange font-bold uppercase tracking-widest text-[10px]">
                  {member.role}
                </p>
                <p className="body-small text-text-light line-clamp-3 mt-4 px-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
