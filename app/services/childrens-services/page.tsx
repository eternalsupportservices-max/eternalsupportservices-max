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

export default function ChildrensServicesPage() {
  const features = [
    {
      title: "Individualized Child Support",
      desc: "Tailored daily care plans built strictly around your child's routine, unique personalities, and clinical requirements.",
      icon: "🧩",
    },
    {
      title: "Learning & Development",
      desc: "Interactive milestone tracking and skill-building activities focused on fostering core cognitive and physical growth.",
      icon: "📚",
    },
    {
      title: "Social Skill Cultivation",
      desc: "Guided social environments and peer-to-peer programming designed to build long-term confidence and public interaction habits.",
      icon: "🌱",
    },
    {
      title: "Recreational Initiatives",
      desc: "Highly stimulating, accessible recreational programs that embrace fun, inclusivity, and creative play expressions.",
      icon: "🎨",
    },
    {
      title: "School Holiday Frameworks",
      desc: "Comprehensive structure during extended academic breaks, combining physical outings with safe, curated group settings.",
      icon: "☀️",
    },
    {
      title: "Family Care Integration",
      desc: "Regular updates and close collaborative syncs with immediate guardians to translate classroom milestones to home base success.",
      icon: "🤝",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#6b21a8] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Structural Top Navbar spacer */}
      <Navbar />

      {/* ---------------- HERO DISPLAY HEADER ---------------- */}
      <section className="relative pt-52 pb-28 overflow-hidden bg-gradient-to-b from-purple-50/20 via-white to-white">
        {/* Cinematic Ambient Blur Accents */}
        <div className="absolute top-[15%] left-[-10%] w-[35rem] h-[35rem] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Block */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-100 rounded-full shadow-lg shadow-purple-500/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Specialized Portfolios
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tight leading-[0.95]">
                  Nurturing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#d97706] to-[#ec4899]">
                    Young Horizons.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Human-centric, highly individualized support systems engineered exclusively for 
                  children. We provide early tools to confidently navigate learning, skill acquisition, 
                  and inclusive communal engagement.
                </p>
              </FadeUp>
            </div>

            {/* Right Balanced Media Frame */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FadeUp delay={0.3}>
                <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(107,33,168,0.1)] group">
                  <img
                    src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1200"
                    alt="Children's Development Support"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- FEATURES MATRIX GRID ---------------- */}
      <section className="py-32 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="text-center mb-24 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d97706]">The Program Matrix</p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">Core Pillars of Early Care</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="group h-full bg-white p-10 rounded-[3.5rem] border border-slate-200/60 shadow-sm hover:shadow-[0_30px_60px_rgba(107,33,168,0.05)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-slate-50 shadow-inner border border-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-purple-500/5 transition-colors duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#6b21a8] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTEXTUAL SUB-CTA CARD ---------------- */}
      <section className="pb-36 pt-8 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#6b21a8] via-[#ec4899] to-[#b45309] rounded-[4rem] md:rounded-[5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(107,33,168,0.2)]">
          {/* Subtle Accent Glow Block */}
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Build a custom roadmap <br />for your child's goals.
            </h2>
            <p className="text-purple-100 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Connect directly with our intake coordination team to map NDIS funding allocations to tailored pediatric care pathways.
            </p>
            <div className="pt-4">
              <Link href="/referral">
                <button className="px-16 py-6 bg-white text-[#6b21a8] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 transition-transform shadow-2xl relative z-10">
                  Initiate Intake Setup
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