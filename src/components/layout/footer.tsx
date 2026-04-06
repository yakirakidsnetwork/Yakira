"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, Instagram, Youtube, Twitter, 
  Mail, Phone, MapPin 
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-african-earth text-cream pt-16 pb-8">
      <div className="container-default grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: About Us */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="font-poppins font-bold text-2xl text-white tracking-tight">
              Yakira Kids <span className="text-sunset-gold">Network</span>
            </span>
          </Link>
          <p className="font-playfair italic text-lg text-sunset-gold">
            &quot;We rise by lifting others&quot;
          </p>
          <p className="body-small opacity-90 leading-relaxed">
            The Yakira Kids Network is a comprehensive business and care network 
            designed to provide holistic support for orphaned, displaced, and 
            parentless children in Africa.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: "Our Programs", href: "/programs" },
              { name: "Our Journey", href: "/stories" },
              { name: "Contact Us", href: "/contact" },
              { name: "Child Safeguarding", href: "/safeguarding" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="body-small hover:text-sunset-gold transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-hope-orange/50" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 border-b border-white/10 pb-2">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-sunset-gold shrink-0 mt-0.5" />
              <div className="body-small">
                <p className="block opacity-70">Email Us</p>
                <a href="mailto:info@yakirakidsnetwork.org" className="hover:text-sunset-gold transition-colors">
                  info@yakirakidsnetwork.org
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-sunset-gold shrink-0 mt-0.5" />
              <div className="body-small opacity-70">
                <p className="block">Phone</p>
                <p>[To be provided]</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sunset-gold shrink-0 mt-0.5" />
              <div className="body-small opacity-70">
                <p className="block">Address</p>
                <p>[To be provided]</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="font-poppins font-bold text-lg mb-6 border-b border-white/10 pb-2">Follow Our Work</h4>
          <p className="body-small mb-6 opacity-80">
            Stay updated with our latest stories and impact across Africa.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com/yakira" },
              { icon: Instagram, href: "https://instagram.com/yakira" },
              { icon: Youtube, href: "https://youtube.com/yakira" },
              { icon: Twitter, href: "https://twitter.com/yakira" },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hope-orange transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-white group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/10 pt-8">
        <div className="container-default flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="body-small opacity-70">
            <p>© {currentYear} Yakira Kids Network. All rights reserved.</p>
          </div>
          
          <div className="body-small text-sunset-gold font-medium">
            From Netherlands 🇳🇱 | Founded by Yvonne Muyselaar
          </div>

          <div className="flex gap-6 body-small opacity-70">
            <Link href="/privacy" className="hover:text-sunset-gold underline underline-offset-4">Privacy</Link>
            <Link href="/terms" className="hover:text-sunset-gold underline underline-offset-4">Terms</Link>
            <Link href="/safeguarding" className="hover:text-sunset-gold underline underline-offset-4">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
