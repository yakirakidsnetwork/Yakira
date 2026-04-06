"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Yakira Kids Network?",
    answer: "The Yakira Kids Network is a comprehensive business and care network designed to provide holistic support for orphaned, displaced, and parentless children in Africa through five key pillars: Spiritual, Nutritional, Educational, Creative, and Welfare support.",
  },
  {
    question: "Who do you serve?",
    answer: "We focus on orphaned and displaced children across the African continent, starting with targeted regions in Rwanda, Kenya, and Nigeria, aiming to reach those most in need of holistic care and spiritual guidance.",
  },
  {
    question: "How are donations used?",
    answer: "Donations are directly utilized to fund our five pillars of support. This includes providing daily nutritious meals, funding full scholarships (tuition, books, uniforms), establishing creative skill hubs, and spiritual mentorship programs.",
  },
  {
    question: "Can I volunteer?",
    answer: "Yes! Our volunteer application system is set to launch in April 2026. You will be able to apply for various roles including mentorship, vocational training, and administrative support.",
  },
  {
    question: "Are you a registered nonprofit?",
    answer: "Yakira Kids Network operates as a specialized care network founded in the Netherlands. We are committed to transparency and are working towards full charitable designations in all our operational regions.",
  },
  {
    question: "How can I partner with you?",
    answer: "We welcome partnerships with churches, educational institutions, and corporate entities. Please contact us at info@yakirakidsnetwork.org to discuss partnership opportunities.",
  },
  {
    question: "What is your safeguarding policy?",
    answer: "We maintain a rigorous child safeguarding policy that includes thorough background checks for all staff and volunteers, specialized trauma-informed care training, and regular monitoring of all program activities.",
  },
];

export function AboutFAQ() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16">
          <div className="lg:col-span-4 space-y-6">
            <span className="block font-poppins font-semibold text-xs text-sunset-gold uppercase tracking-[0.2em]">
              Support & Transparency
            </span>
            <h2 className="heading-2 text-african-earth">Frequently Asked Questions</h2>
            <p className="body-large text-text-light">
              We believe in complete transparency and are here to answer any 
              questions you may have about our mission and operations.
            </p>
          </div>

          <div className="lg:col-span-6">
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="bg-white px-8 rounded-2xl border-none shadow-soft overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline hover:text-hope-orange font-poppins font-bold text-lg text-african-earth py-6 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="body-regular text-text-light pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
