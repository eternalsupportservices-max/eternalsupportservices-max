"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar, SmartFooter } from "@/app/page"; // Safely imports from your root app page directory

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

export default function TransportAssistancePage() {
  const provisions = [
    {
      title: "Medical & Clinical Commutes",
      desc: "Punctual, stress-free transfers to hospital check-ups, therapeutic consultations, and regular specialized healthcare appointments.",
      icon: "🏥",
    },
    {
      title: "Community & Social Outings",
      desc: "Reliable coordination for community group gatherings, sporting events, and cultural or recreational leisure activities.",
      icon: "🌳",
    },
    {
      title: "Essential Shopping Trips",
      desc: "Accompanied or independent transport loops for grocery runs, personal retail, or managing crucial domestic supplies.",
      icon: "🛍️",
    },
    {
      title: "Social Connections",
      desc: "Ensuring you stay linked with friends and loved ones through routine transit options to private gatherings and events.",
      icon: "✨",
    },
    {
      title: "Daily Commuting Frameworks",
      desc: "Assistance handling structural routines like scheduled school drop-offs, vocational programs, or regular workplaces.",
      icon: "💼",
    },
    {
      title: "Assisted Fleet Vehicles",
      desc: "Transit utilizing safe, modern vehicles managed by background-checked, disability-aware support workers for absolute peace of mind.",
      icon: "🛡️",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#3e5068] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Structural Top Navbar */}
      <Navbar />

      {/* ---------------- HERO DISPLAY HEADER ---------------- */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Cinematic Blur Accents */}
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-[#3e5068]/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-slate-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/5 border border-slate-900/5 rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3e5068]">
                    Mobility Portfolios
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                  Seamless <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-slate-400">
                    Connections.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                  Safe, completely reliable transport logistics built to ensure participants effortlessly 
                  reach appointments, social networks, and daily community activities without operational friction.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-5 h-[450px] w-full rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(62,80,104,0.1)] relative group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
                alt="Reliable Fleet Mobility Support"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES MATRIX GRID ---------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <FadeUp>
            <div className="mb-20">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3e5068] mb-3">Transit Logistics</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Core Transit Provisions</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provisions.map((item, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="group h-full bg-slate-50/60 hover:bg-white p-10 rounded-[3rem] border border-slate-100/80 hover:shadow-[0_30px_80px_rgba(62,80,104,0.06)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                      {item.desc}
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
              Need safe, structured travel <br />arrangements mapped out?
            </h2>
            <p className="text-slate-400 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Connect seamlessly with our support desk to align travel budget extensions under specialized NDIS support lines.
            </p>
            <div className="pt-4">
              <Link href="/join">
                <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-xl">
                  Arrange Travel Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium System Footer */}
      <SmartFooter />
    </main>
  );
}