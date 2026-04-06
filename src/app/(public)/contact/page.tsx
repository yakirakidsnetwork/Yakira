"use client";

import React, { useState } from "react";
import { 
  Mail, MapPin, Send, 
  Facebook, Instagram, Youtube, Twitter, 
  CheckCircle2 
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: [
      { label: "General", value: "info@yakirakidsnetwork.org" },
      { label: "Founder", value: "yvonne@yakirakidsnetwork.org" },
      { label: "Donations", value: "giving@yakirakidsnetwork.org" },
    ],
  },
  {
    icon: MapPin,
    title: "Our Presence",
    details: [
      { label: "Netherlands", value: "HQ & Strategy" },
      { label: "Africa", value: "Rwanda, Kenya, Nigeria" },
    ],
  },
  {
    icon: Clock,
    title: "Response Time",
    details: [
      { label: "Inquiries", value: "24-48 Hours" },
      { label: "Urgent", value: "Same Business Day" },
    ],
  },
];

import { Clock } from "lucide-react"; // Re-importing for clarity in the array

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-african-earth overflow-hidden">
        <div className="container-default relative z-10 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="heading-1 text-white">Get in Touch</h1>
            <p className="body-large text-cream/80 italic">
              &quot;We&apos;d love to hear from you. Whether you want to partner, 
              volunteer, or just say hello.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Form (8 columns) */}
            <div className="lg:col-span-8 bg-cream p-10 lg:p-16 rounded-[40px] shadow-soft border border-black/5">
              {formState === "success" ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-life-green/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-life-green" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="heading-3 text-african-earth">Message Sent!</h2>
                    <p className="body-regular text-text-light">
                      Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="btn-primary px-8 h-12"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-poppins font-bold text-sm text-african-earth uppercase tracking-widest">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        id="name"
                        placeholder="Yvonne Muyselaar"
                        className="w-full h-14 px-6 rounded-xl border border-african-earth/10 bg-white focus:border-hope-orange focus:ring-1 focus:ring-hope-orange transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-poppins font-bold text-sm text-african-earth uppercase tracking-widest">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        id="email"
                        placeholder="hello@yakira.org"
                        className="w-full h-14 px-6 rounded-xl border border-african-earth/10 bg-white focus:border-hope-orange focus:ring-1 focus:ring-hope-orange transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-poppins font-bold text-sm text-african-earth uppercase tracking-widest">Subject</label>
                    <select 
                      id="subject"
                      className="w-full h-14 px-6 rounded-xl border border-african-earth/10 bg-white focus:border-hope-orange focus:ring-1 focus:ring-hope-orange transition-all outline-none appearance-none"
                    >
                      <option>General Inquiry</option>
                      <option>Donation Question</option>
                      <option>Volunteer Interest</option>
                      <option>Partnership Proposal</option>
                      <option>Media & Press</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-poppins font-bold text-sm text-african-earth uppercase tracking-widest">Your Message</label>
                    <textarea 
                      required 
                      id="message"
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full p-6 rounded-xl border border-african-earth/10 bg-white focus:border-hope-orange focus:ring-1 focus:ring-hope-orange transition-all outline-none resize-none" 
                    />
                  </div>

                  <button 
                    disabled={formState === "submitting"}
                    type="submit" 
                    className="btn-primary w-full h-16 text-lg space-x-3 group"
                  >
                    <span>{formState === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
                    <Send className={cn("w-5 h-5 transition-transform group-hover:translate-x-1", formState === "submitting" ? "animate-pulse" : "")} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info (4 columns) */}
            <div className="lg:col-span-4 space-y-12">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-african-earth text-white flex items-center justify-center shadow-soft">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h3 className="heading-5 text-african-earth">{info.title}</h3>
                  </div>
                  <div className="space-y-3 pl-16">
                    {info.details.map((detail, dIdx) => (
                      <div key={dIdx}>
                        <p className="caption text-text-light uppercase tracking-widest text-[10px] mb-1">{detail.label}</p>
                        <p className="font-poppins font-bold text-african-earth">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-6">
                <h3 className="heading-5 text-african-earth pl-16">Connect With Us</h3>
                <div className="flex gap-4 pl-16">
                  {[Facebook, Instagram, Youtube, Twitter].map((Icon, sIdx) => (
                    <a 
                      key={sIdx} 
                      href="#" 
                      className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-african-earth hover:bg-hope-orange hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-[#E8DCCB] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-10 text-center space-y-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
            <MapPin className="w-8 h-8 text-hope-orange" />
          </div>
          <h3 className="heading-4 text-african-earth">Our Global Reach</h3>
          <p className="body-small text-text-light max-w-sm mx-auto">
            Supporting children across Africa through our network in Rwanda, Kenya, and Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}
