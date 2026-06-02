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
    },
    {
      icon: "🛡️",
      title: "Integrity",
      desc: "Acting honestly, ethically, transparently, and professionally across all individual service operations.",
    },
    {
      icon: "🌍",
      title: "Inclusion",
      desc: "Creating authentic, physical community spaces for everyone to participate, belong, and dynamically grow.",
    },
    {
      icon: "🥇",
      title: "Excellence",
      desc: "Consistently delivering high-fidelity support, robust safety measures, and continuous skill updates.",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#3e5068] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Top Global Ecosystem Navigation */}
      <Navbar />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white text-center">
        {/* Ambient Brand Color Lighting Blooms */}
        <div className="absolute top-[15%] left-[5%] w-[35rem] h-[35rem] bg-[#3e5068]/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[5%] w-[30rem] h-[30rem] bg-[#3e5068]/6 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 space-y-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3e5068]/10 border border-[#3e5068]/20 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3e5068]">
                Our Purpose & Mission
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-slate-700">
                Eternal Support
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="max-w-3xl mx-auto text-slate-500 text-base md:text-lg font-medium leading-relaxed">
              We are dedicated to empowering individuals with disabilities through compassionate, professional, and personalized support services that systematically enhance personal independence, overall wellbeing, and active community participation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------------- 2. DETAILED NARRATIVE SPLIT ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Protected Left Media Container */}
          <FadeUp>
            <div className="relative w-full aspect-[4/3] rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(62,80,104,0.12)] group">
              <Image
                src="/homecare.png"
                alt="Empathetic caregiver interaction under Eternal Support Services"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
          </FadeUp>

          {/* Right Narrative Copy */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#3e5068]">
                Who We Are
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Supporting Lives,<br />
                Building Independence
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-slate-500 font-medium text-base leading-relaxed">
                Eternal Support Services is committed to providing premium, highly personalized disability support systems tailored specifically to match each participant's personal goals, dynamic routines, and lifestyle choice parameters.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                Our meticulously trained, experienced support teams focus explicitly on cultivating long-term positive outcomes through deeply respectful care frameworks, meaningful local group involvement, and robust independent living skill pathways.
              </p>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ---------------- 3. MISSION & VISION STRATIFICATION ---------------- */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            <FadeUp>
              <div className="h-full bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3e5068]/10 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  To systematically engineer and deliver exceptional support ecosystems that empower individuals to achieve autonomous, self-directed, fulfilling, and deeply meaningful lives under custom lifestyle vectors.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="h-full bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3e5068]/10 flex items-center justify-center text-2xl">
                  👁️
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  To remain an architectural, trusted leader in community care by fostering deep societal inclusion, uncompromised structural independence, and clear professional opportunity paths for every individual we serve.
                </p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ---------------- 4. CORE OPERATIONAL VALUES ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <FadeUp>
            <div className="text-center mb-20 space-y-3">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3e5068]">The Framework</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-slate-400 font-medium text-base max-w-xl mx-auto">
                The core structural principles that carefully guide every internal operational interaction, system update, and care process.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="h-full bg-slate-50/60 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(62,80,104,0.06)] transition-all duration-500 space-y-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-2xl group-hover:bg-[#3e5068]/10 transition-colors duration-500">
                    {value.icon}
                  </div>
                  <h3 className="font-black text-xl text-slate-900 tracking-tight group-hover:text-[#3e5068] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 5. PREMIUM CALL TO ACTION ---------------- */}
      <section className="pb-32 pt-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-gradient-to-tr from-slate-900 via-[#253243] to-slate-900 rounded-[3.5rem] sm:rounded-[4.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_90px_rgba(15,23,42,0.15)]">
          {/* Subtle Accent Glow Block */}
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#3e5068]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Ready to Get Started?
            </h2>

            <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Contact our specialty intake team today to thoroughly map out how Eternal Support Services can assist you or your family in reaching vital plan goals.
            </p>

            <div className="pt-4">
              <Link href="/join">
                <button className="px-12 py-5 bg-white text-slate-900 rounded-xl sm:rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 hover:scale-103 active:scale-97 transition-all shadow-xl">
                  Contact Us Now
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