"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar, SmartFooter } from "@/app/page"; // Secure absolute import from root landing file

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

export default function SupportCoordinationPage() {
  const pillars = [
    {
      title: "NDIS Plan Navigation",
      desc: "Demystifying funding clauses, breaking down budget categories, and transforming dense NDIS paperwork into actionable strategies.",
      icon: "🧭",
    },
    {
      title: "Provider Ecosystem Sync",
      desc: "Connecting you seamlessly to leading, vetted therapeutic practitioners, clinical teams, and localized specialized service providers.",
      icon: "🤝",
    },
    {
      title: "Strategic Goal Architecture",
      desc: "Designing iterative short-term and long-term milestones centered entirely on individual growth, lifestyle choices, and true autonomy.",
      icon: "🎯",
    },
    {
      title: "Capacity Building Frameworks",
      desc: "Cultivating your independent skills over time to confidently coordinate service agreements, self-advocate, and manage your plan assets.",
      icon: "💪",
    },
    {
      title: "Ongoing Support Governance",
      desc: "Continuous check-ins, performance tracking of current providers, crisis resolution setup, and proactive budget health checks.",
      icon: "📊",
    },
    {
      title: "Plan Review Preparation",
      desc: "Compiling comprehensive support evidence, clinical reports, and progression data to lock in optimized funding configurations at review cycles.",
      icon: "📋",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#3e5068] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Top Fixed Ecosystem Navigation */}
      <Navbar />

      {/* ---------------- HERO DISPLAY HEADER ---------------- */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Cinematic Premium Lighting Accents */}
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-[#3e5068]/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-indigo-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/5 border border-slate-900/5 rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3e5068]">
                    Ecosystem Navigation
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                  Optimize <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-slate-400">
                    Your Potential.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  Strategic guidance designed to simplify complex NDIS frameworks. We connect you with 
                  the perfect network providers, build inner autonomy, and maximize the real-world value of your allocated budget.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-5 h-[450px] w-full rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(62,80,104,0.1)] relative group">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                alt="Strategic Support Coordination Meeting"
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
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3e5068] mb-3">Service Deliverables</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Coordination Architecture</h2>
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

      {/* ---------------- CONTEXTUAL INTENSE SUB-CTA CARD ---------------- */}
      <section className="pb-36 pt-12 px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-tr from-slate-900 to-[#253243] rounded-[4.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_90px_rgba(15,23,42,0.15)]">
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#3e5068]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Ready to unlock the full potential <br />of your NDIS plan?
            </h2>
            <p className="text-slate-400 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Partner with an experienced specialist to transition your budget allocations into tailored independent outcomes seamlessly.
            </p>
            <div className="pt-4">
              <Link href="/join">
                <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-xl">
                  Connect with a Coordinator
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