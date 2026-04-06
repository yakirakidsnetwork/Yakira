"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Search, ChevronDown, 
  Facebook, Instagram, Youtube, Twitter, 
  BookOpen, Utensils, GraduationCap, Palette, Heart
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ComingSoonTooltip } from "@/components/ui/coming-soon-tooltip";
import { Button } from "@/components/ui/button";

const programItems = [
  { name: "Spiritual Foundation", href: "/programs/spiritual", icon: BookOpen },
  { name: "Monthly Sustenance", href: "/programs/nutritional", icon: Utensils },
  { name: "Education & Scholarships", href: "/programs/educational", icon: GraduationCap },
  { name: "Creative Skill Hubs", href: "/programs/creative", icon: Palette },
  { name: "Welfare & Dignity", href: "/programs/welfare", icon: Heart },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yakira" },
  { icon: Instagram, href: "https://instagram.com/yakira" },
  { icon: Youtube, href: "https://youtube.com/yakira" },
  { icon: Twitter, href: "https://twitter.com/yakira" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300",
      isScrolled ? "h-20 shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "h-20 lg:h-24"
    )}>
      {/* Use a wider max-width to fill more space on large screens and reduce the 'empty' side feel */}
      <div className="w-full max-w-[1700px] mx-auto px-4 2xl:px-8 h-full grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Side: Logo (Always Visible, Pushed to absolute left of grid col) */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="font-poppins font-bold text-lg xl:text-2xl text-african-earth tracking-tight whitespace-nowrap">
              Yakira Kids <span className="text-hope-orange">Network</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation (Hidden on LG and below, shown on XL+) */}
        {/* Absolute center of the entire header width */}
        <nav className="hidden xl:flex items-center justify-center gap-6 2xl:gap-10 px-4">
          <Link 
            href="/about" 
            className={cn(
              "font-poppins font-medium text-[14px] 2xl:text-[15px] transition-colors hover:text-hope-orange whitespace-nowrap",
              pathname === "/about" ? "text-hope-orange" : "text-text-dark"
            )}
          >
            About Us
          </Link>

          {/* Our Programs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center gap-1 font-poppins font-medium text-[14px] 2xl:text-[15px] outline-none hover:text-hope-orange transition-colors whitespace-nowrap",
              pathname.startsWith("/programs") ? "text-hope-orange" : "text-text-dark"
            )}>
              Our Programs <ChevronDown className="w-3 h-3 2xl:w-4 2xl:h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-3 w-64 bg-white shadow-xl rounded-xl border-none">
              {programItems.map((program) => (
                <DropdownMenuItem key={program.name} className="p-0">
                  <Link 
                    href={program.href}
                    className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-cream transition-colors group"
                  >
                    <program.icon className="w-5 h-5 text-hope-orange group-hover:scale-110 transition-transform" />
                    <span className="font-inter font-medium text-sm text-text-dark">{program.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/stories" 
            className={cn(
              "font-poppins font-medium text-[14px] 2xl:text-[15px] transition-colors hover:text-hope-orange whitespace-nowrap",
              pathname === "/stories" ? "text-hope-orange" : "text-text-dark"
            )}
          >
            Our Journey
          </Link>

          {/* Coming Soon Items - Standard visible only on 2xl to avoid crowding */}
          <div className="hidden 2xl:flex items-center gap-8">
            <ComingSoonTooltip title="Bible Studies Dashboard" description="Access structured curriculum and resources." launchDate="April 2026">
              <span className="font-poppins font-medium text-[15px] text-text-dark whitespace-nowrap">Bible Studies</span>
            </ComingSoonTooltip>

            <ComingSoonTooltip title="Donation Dashboard" description="Track your impact and manage recurring gifts." launchDate="March 2026">
              <span className="font-poppins font-medium text-[15px] text-text-dark flex items-center gap-1 whitespace-nowrap">
                Donations
              </span>
            </ComingSoonTooltip>
          </div>

          <Link 
            href="/contact" 
            className={cn(
              "font-poppins font-medium text-[14px] 2xl:text-[15px] transition-colors hover:text-hope-orange whitespace-nowrap",
              pathname === "/contact" ? "text-hope-orange" : "text-text-dark"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right Side: Utilities & Mobile Toggle (Pushed to absolute right of grid col) */}
        <div className="flex items-center justify-end gap-2 xl:gap-4 2xl:gap-6">
          {/* Social Icons (Desktop 2xl+) */}
          <div className="hidden 2xl:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.href} 
                href={social.href} 
                target="_blank" 
                rel="noopener"
                className="text-hope-orange hover:scale-110 transition-transform"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <div className="w-[1px] h-6 bg-border-light mx-1" />
          </div>

          {/* Search & Language (Desktop XL+) */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-4">
            <ComingSoonTooltip title="Search coming soon" description="Find articles, programs and impact stories." launchDate="Phase 2">
              <Search className="w-4 h-4 2xl:w-5 2xl:h-5 text-text-dark" />
            </ComingSoonTooltip>
            
            <div className="flex items-center gap-1 cursor-not-allowed group">
              <span className="font-poppins font-medium text-[13px] 2xl:text-[14px] text-text-dark">EN</span>
              <ChevronDown className="w-3 h-3 2xl:w-4 2xl:h-4 text-text-dark" />
            </div>
          </div>

          {/* Donate Now Button */}
          <Button 
            className="hidden sm:flex items-center gap-2 bg-hope-orange hover:bg-hope-orange/90 text-white rounded-full font-poppins font-semibold px-6 2xl:px-10 py-3 2xl:py-4 h-auto whitespace-nowrap"
          >
            DONATE NOW
          </Button>

          {/* Mobile Navigation Toggle (Visible below XL) */}
          <button 
            className="xl:hidden p-2 text-african-earth"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={cn(
        "fixed inset-0 top-20 z-40 bg-white transition-transform duration-500 xl:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 gap-4 h-full overflow-y-auto">
          <Link href="/about" className="font-poppins font-semibold text-lg py-2 border-b" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          
          <div className="space-y-3">
            <span className="font-poppins font-semibold text-lg text-hope-orange">Our Programs</span>
            <div className="grid gap-2 pl-4">
              {programItems.map(p => (
                <Link key={p.href} href={p.href} className="font-inter text-sm py-1" onClick={() => setMobileMenuOpen(false)}>{p.name}</Link>
              ))}
            </div>
          </div>

          <Link href="/stories" className="font-poppins font-semibold text-lg py-2 border-b" onClick={() => setMobileMenuOpen(false)}>Our Journey</Link>
          <Link href="/contact" className="font-poppins font-semibold text-lg py-2 border-b" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          {/* Mock Coming Soon for Mobile */}
          <div className="py-2 border-b text-muted-foreground opacity-60">Bible Studies (Coming Soon)</div>
          <div className="py-2 border-b text-muted-foreground opacity-60">Donations (Coming Soon)</div>

          <div className="mt-auto pt-6 flex gap-6">
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} className="text-hope-orange">
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
