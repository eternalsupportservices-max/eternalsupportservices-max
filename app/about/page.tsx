"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function AboutPage() {
  const values = [
    {
      icon: "🤝",
      title: "Respect",
      desc: "Treating every unique individual with complete dignity, deep validation, and continuous baseline compassion.",
      borderHover: "hover:border-purple-500/30",
      iconBg: "bg-purple-500/10",
      textColor: "group-hover:text-[#6b21a8]",
    },
    {
      icon: "🛡️",
      title: "Integrity",
      desc: "Acting honestly, ethically, transparently, and professionally across all individual service operations.",
      borderHover: "hover:border-pink-500/30",
      iconBg: "bg-pink-500/10",
      textColor: "group-hover:text-[#ec4899]",
    },
    {
      icon: "🌍",
      title: "Inclusion",
      desc: "Creating authentic, physical community spaces for everyone to participate, belong, and dynamically grow.",
      borderHover: "hover:border-amber-500/30",
      iconBg: "bg-amber-500/10",
      textColor: "group-hover:text-[#d97706]",
    },
    {
      icon: "🥇",
      title: "Excellence",
      desc: "Consistently delivering high-fidelity support, robust safety measures, and continuous skill updates.",
      borderHover: "hover:border-emerald-500/30",
      iconBg: "bg-emerald-500/10",
      textColor: "group-hover:text-emerald-600",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#6b21a8] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Top Global Ecosystem Navigation */}
      <Navbar />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-48 pb-28 overflow-hidden bg-gradient-to-b from-purple-50/30 via-pink-50/10 to-white text-center">
        {/* Vibrant Dynamic Lighting Blooms */}
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-purple-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-[5%] right-[5%] w-[35rem] h-[35rem] bg-pink-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[0%] left-[25%] w-[30rem] h-[30rem] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 space-y-8">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-purple-100 rounded-full shadow-xl shadow-purple-500/5">
              <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
                Our Purpose & Mission
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-7xl md:text-[8.5rem] font-black text-slate-900 tracking-tighter leading-[0.85]">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#d97706] to-[#ec4899]">
                Eternal Support
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              We are dedicated to empowering individuals with disabilities through compassionate, professional, and personalized support services that systematically enhance personal independence, overall wellbeing, and active community participation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------------- 2. DETAILED NARRATIVE SPLIT ---------------- */}
      <section className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Protected Left Media Container */}
          <FadeUp>
            <div className="relative w-full aspect-[4/3] rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_40px_80px_rgba(107,33,168,0.08)] group">
              <Image
                src="/Daily Living.png"
                alt="Empathetic caregiver interaction under Eternal Support Services"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b21a8]/20 via-transparent to-transparent" />
            </div>
          </FadeUp>

          {/* Right Narrative Copy */}
          <div className="space-y-8">
            <FadeUp delay={0.1}>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d97706]">
                Who We Are
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
                Supporting Lives,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#ec4899]">Building Independence</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Eternal Support Services is committed to providing premium, highly personalised disability support systems tailored specifically to match each participant's personal goals, dynamic routines, and lifestyle choice parameters.Our meticulously trained, experienced support teams focus explicitly on cultivating long-term positive outcomes through deeply respectful care frameworks, meaningful local group involvement, and robust independent living skill pathways.
              </p>
            </FadeUp>

            
          </div>

        </div>
      </section>

      {/* ---------------- 3. MISSION & VISION STRATIFICATION ---------------- */}
      <section className="py-32 bg-slate-50/60 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            <FadeUp>
              <div className="h-full bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-200/60 shadow-sm space-y-6 hover:shadow-[0_30px_60px_rgba(107,33,168,0.04)] transition-all">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Professional Mission Statement
                </h3>
                <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
                  At Eternal Support Services, we are committed to delivering compassionate, person-centred support that empowers individuals to live independently, participate fully in their communities, and achieve their goals with dignity, choice and control.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="h-full bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-200/60 shadow-sm space-y-6 hover:shadow-[0_30px_60px_rgba(217,119,6,0.04)] transition-all">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-3xl">
                  👁️
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Professional Vision Statement
                </h3>
                <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
                  To be a trusted provider of high-quality disability supports that create meaningful opportunities, foster independence and enhance the lives of the people we support.
                </p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ---------------- 4. CORE OPERATIONAL VALUES ---------------- */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <FadeUp>
            <div className="text-center mb-24 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ec4899]">The Framework</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-slate-400 font-bold text-lg max-w-2xl mx-auto leading-relaxed">
                The core structural principles that carefully guide every internal operational interaction, system update, and care process.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className={`h-full bg-slate-50/60 p-10 rounded-[3rem] border border-slate-100 ${value.borderHover} hover:bg-white hover:shadow-[0_30px_60px_rgba(107,33,168,0.05)] transition-all duration-500 space-y-5 group`}>
                  <div className={`w-14 h-14 ${value.iconBg} rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110`}>
                    {value.icon}
                  </div>
                  <h3 className={`font-black text-2xl text-slate-900 tracking-tight ${value.textColor} transition-colors`}>
                    {value.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 5. PREMIUM CALL TO ACTION ---------------- */}
      <section className="pb-40 pt-10 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#6b21a8] via-[#ec4899] to-[#b45309] rounded-[4rem] md:rounded-[5rem] p-12 md:p-20 text-center text-white shadow-[0_40px_100px_rgba(107,33,168,0.2)] relative overflow-hidden">
          {/* Subtle Accent Glow Blocks */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Ready to Submit a Referral?
            </h2>

            <p className="text-purple-100 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Contact our specialty intake team today to thoroughly map out how Eternal Support Services can assist you or your family in reaching vital plan goals.
            </p>

            <div className="pt-4">
              <Link href="/referral">
                <button className="px-16 py-6 bg-white text-[#6b21a8] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 active:scale-97 transition-all shadow-2xl relative z-10">
                  Make a Referral Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium System Shared Footer Block */}
      <SmartFooter />
    </main>
  );
}