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
      <section className="relative pt-44 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Cinematic Premium Blur Accents */}
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-[#3e5068]/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/5 border border-slate-900/5 rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3e5068]">
                    Inclusion Frameworks
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                  Live Fully <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-slate-400">
                    Connected.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  We empower participants to smoothly step out into their communities, establish deep lifelong 
                  friendships, and thrive within highly rewarding, inclusive environments.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-5 h-[450px] w-full rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(62,80,104,0.1)] relative group">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
                alt="Enriching Community Outings"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STRATEGIC PILLARS MATRIX GRID ---------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <FadeUp>
            <div className="mb-20">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3e5068] mb-3">Community Spheres</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Core Inclusion Pillars</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="group h-full bg-slate-50/60 hover:bg-white p-10 rounded-[3rem] border border-slate-100/80 hover:shadow-[0_30px_80px_rgba(62,80,104,0.06)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
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
      <section className="pb-36 pt-12 px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-tr from-slate-900 to-[#253243] rounded-[4.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_90px_rgba(15,23,42,0.15)]">
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#3e5068]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Explore social groups and <br />vibrant local events.
            </h2>
            <p className="text-slate-400 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              We look forward to introducing you to social activities configured precisely around your hobbies and long-term connection metrics.
            </p>
            <div className="pt-4">
              <Link href="/join">
                <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-xl">
                  Coordinate Your Journey
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