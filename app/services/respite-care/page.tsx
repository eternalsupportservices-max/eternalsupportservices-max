"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar, SmartFooter } from "@/app/page";

/* ---------------- ANIMATION HELPER ---------------- */
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function RespiteCarePage() {
  const respiteModules = [
    {
      icon: "🏨",
      title: "Short-Term Accommodation",
      desc: "Safe, beautifully appointed temporary residential properties offering structured, relaxing environments with fully integrated on-site support.",
    },
    {
      icon: "🚨",
      title: "Emergency Care Support",
      desc: "Rapid deployment care teams equipped to step in with immediate, high-fidelity coverage during unexpected medical or household incidents.",
    },
    {
      icon: "🧘‍♀️",
      title: "Family Caregiver Relief",
      desc: "Providing main household support providers with crucial, worry-free breaks to recharge, knowing their loved ones are receiving expert, premium care.",
    },
    {
      icon: "⏳",
      title: "Flexible Care Tracks",
      desc: "Highly customizable timing windows configured explicitly around your family’s scheduling parameters—ranging from single days to multi-week stints.",
    },
    {
      icon: "🌿",
      title: "Recreational Outings",
      desc: "Fun, fully supervised community integration trips, nature path visits, and hobby workshops designed to make every respite stay engaging.",
    },
    {
      icon: "🩺",
      title: "Continuous Care Alignment",
      desc: "Seamless handover protocols ensuring daily medical management, therapeutic exercises, and sensory routines remain perfectly uninterrupted.",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#3e5068] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Top Global Navigation Ecosystem */}
      <Navbar />

      {/* ---------------- 1. HERO ARCHITECTURE ---------------- */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Balanced Brand Color Ambient Accents */}
        <div className="absolute top-[15%] left-[-10%] w-[35rem] h-[35rem] bg-[#3e5068]/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-[#3e5068]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Block */}
            <div className="space-y-6 max-w-2xl">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3e5068]/10 border border-[#3e5068]/20 rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3e5068]">
                    Flexible Relief Systems
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05]">
                  Time To Recharge, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-slate-700">
                    Peace of Mind.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                  Dynamic, professional respite care services offering absolute stability, temporary accommodation pathways, and vital situational relief for participants and their families.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/contact">
                    <button className="px-10 py-4.5 bg-[#3e5068] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2c3a4c] hover:scale-103 active:scale-97 transition-all shadow-md">
                      Request Respite Care
                    </button>
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Protected Media Frame */}
            <FadeUp delay={0.4}>
              <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[3.5rem] sm:rounded-[4.5rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(62,80,104,0.15)] group">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
                  alt="Compassionate health provider comforting an individual in a bright environment"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                {/* Floating Glassmorphic Context Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-5 sm:p-6 max-w-[220px] sm:max-w-xs transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <h3 className="font-black text-2xl sm:text-3xl text-[#3e5068] leading-none">
                    Reliable Support
                  </h3>
                  <p className="text-slate-400 font-medium text-xs mt-2">
                    Every Hour Covered Transparently
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ---------------- 2. MATRIX PILLARS GRID ---------------- */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="text-center mb-20 space-y-3">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3e5068]">Functional Frameworks</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Core Care Capabilities
              </h2>
              <p className="text-slate-400 font-medium text-base max-w-2xl mx-auto leading-relaxed">
                Whether you require short-term structured adjustments or rapid overnight emergency relief, our respite programs adapt perfectly to support you.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {respiteModules.map((module, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="group h-full bg-slate-50/50 hover:bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-[0_25px_60px_rgba(62,80,104,0.05)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    {/* Icon container with brand color layout shifts */}
                    <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#3e5068]/10 transition-colors duration-500">
                      {module.icon}
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#3e5068] transition-colors">
                      {module.title}
                    </h3>

                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                      {module.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 3. CONTEXTUAL CALL TO ACTION ---------------- */}
      <section className="pb-32 pt-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-gradient-to-tr from-slate-900 via-[#253243] to-slate-900 rounded-[3.5rem] sm:rounded-[4.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_90px_rgba(15,23,42,0.15)]">
          {/* Subtle Dynamic Ambient Lighting Block */}
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#3e5068]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Need to Coordinate Urgent Support?
            </h2>

            <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Our placement desk coordinates closely with families to handle emergency intake seamlessly. Reach out directly to secure prompt, fully managed accommodation relief.
            </p>

            <div className="pt-4">
              <Link href="/contact">
                <button className="px-12 py-5 bg-white text-slate-900 rounded-xl sm:rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 active:scale-97 transition-all shadow-xl">
                  Connect with Intake Desk
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Global Shared Footer Element */}
      <SmartFooter />
    </main>
  );
}