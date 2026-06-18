"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar, SmartFooter } from "@/app/page"; // Core absolute layout import

/* ---------------- ANIMATION HELPER ---------------- */
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function CommunityParticipationPage() {
  const pillars = [
    {
      title: "Social & Recreational Groups",
      desc: "Immersive group gatherings, shared hobby clubs, sports inclusion, and creative group outings focused on genuine social fulfillment.",
      icon: "🎉",
    },
    {
      title: "Community Access Systems",
      desc: "Comprehensive navigation support to access public structures, local parks, events, and educational workshops comfortably.",
      icon: "🏙️",
    },
    {
      title: "Guided Shopping Outings",
      desc: "One-on-one assisted trips to shopping complexes to manage domestic choices, develop budgeting skills, or handle personal styling retail.",
      icon: "🛒",
    },
    {
      title: "Appointment Management",
      desc: "Structured administrative and physical accompaniment to secure seamless attendance for both clinical and non-clinical bookings.",
      icon: "🗓️",
    },
    {
      title: "Integrated Transport Systems",
      desc: "Synchronized travel pathways to remove the anxiety of public mapping, keeping your transfers to the broader community safe and swift.",
      icon: "🚗",
    },
    {
      title: "Relationship Cultivation",
      desc: "Dedicated social mapping to help build authentic peer connections, lifelong friendships, and trusted communal bonds.",
      icon: "❤️",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#3e5068] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Top Fixed Ecosystem Navigation */}
      <Navbar />

      {/* ---------------- HERO DISPLAY HEADER ---------------- */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-gradient-to-b from-purple-50/20 via-white to-white border-b border-slate-100">
        {/* Cinematic Premium Blur Accents */}
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-[#3e5068]/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur border border-slate-100 rounded-full shadow-lg shadow-purple-500/5">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3e5068]">
                    Inclusion Frameworks
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95]">
                  Live Fully <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#ec4899] to-[#d97706]">
                    Connected.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We empower participants to smoothly step out into their communities, establish deep lifelong
                  friendships, and thrive within highly rewarding, inclusive environments.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <Link href="/referral">
                    <button className="px-12 py-5 bg-[#3e5068] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-[#3e5068]/10 hover:bg-[#2e3e52]">
                       Coordinate Your Journey
                    </button>
                  </Link>
                   <Link href="#community-spheres">
                    <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 active:scale-95 transition-transform shadow-sm">
                      Our Focus Areas
                    </button>
                  </Link>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5 h-[450px] w-full rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(62,80,104,0.15)] relative group order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
                alt="Enriching Community Outings"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STRATEGIC PILLARS MATRIX GRID ---------------- */}
      <section id="community-spheres" className="py-32 bg-slate-50/50 relative">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <FadeUp>
            <div className="mb-24 text-center space-y-4 max-w-2xl mx-auto">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ec4899]">Community Spheres</p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">Core Inclusion Pillars</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed pt-2">
                 We've engineered dedicated support vectors across these essential community dimensions to remove participation barriers and foster lifelong fulfillment.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="group h-full bg-white hover:bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-[0_30px_80px_rgba(62,80,104,0.06)] hover:border-[#3e5068]/10 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-[#3e5068]/5 border border-[#3e5068]/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-[#3e5068]/10 group-hover:border-[#3e5068]/15">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#3e5068] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed group-hover:text-slate-500 transition-colors">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTEXTUAL SUB-CTA CARD ---------------- */}
      <section className="pb-36 pt-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-tr from-slate-900 via-[#253243] to-slate-900 rounded-[4rem] md:rounded-[5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_90px_rgba(15,23,42,0.15)]">
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#3e5068]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#ec4899]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              Explore social groups and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#d97706]">vibrant local events.</span>
            </h2>
            <p className="text-slate-400 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              We look forward to introducing you to social activities configured precisely around your hobbies and long-term connection metrics. Submit an intake form today.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/referral">
                <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-white/10 hover:bg-slate-50">
                   Submit Your Intake Form
                </button>
              </Link>
               <Link href="/about">
                <button className="px-10 py-5 bg-transparent border-2 border-white/40 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:border-white active:scale-95 transition-all">
                  Our Inclusion Vision
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium System Footer Element */}
      <SmartFooter />
    </main>
  );
}