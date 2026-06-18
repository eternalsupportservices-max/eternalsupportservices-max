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

export default function AllAgesDisabilitiesPage() {
  const services = [
    {
      icon: "🧡",
      title: "Personal Care",
      desc: "Daily physical support tailored meticulously to individual needs while preserving personal choices and active independence.",
    },
    {
      icon: "🏠",
      title: "Independent Living",
      desc: "Helping participants develop vital lifestyle confidence, cooking skills, and domestic autonomy over daily routines.",
    },
    {
      icon: "🤝",
      title: "Community Access",
      desc: "Building authentic peer networks through inclusive local social gatherings, volunteer groups, and public activities.",
    },
    {
      icon: "🎯",
      title: "Goal Achievement",
      desc: "Providing structural assistance strategies to systematically reach both your personal passions and formal NDIS milestones.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Support",
      desc: "Working in close lockstep with families and legal guardians to establish stable, transparent, and long-term care plans.",
    },
    {
      icon: "🌟",
      title: "Flexible Services",
      desc: "Dynamic short-term relief, overnight respite care, and sustained lifestyle care tracks configured around your routine.",
    },
  ];

  return (
    <main className="bg-white selection:bg-[#6b21a8] selection:text-white antialiased min-h-screen flex flex-col justify-between">
      {/* Top Global Ecosystem Navigation */}
      <Navbar />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-52 pb-28 overflow-hidden bg-gradient-to-b from-purple-50/20 via-white to-white">
        {/* Balanced Brand Color Ambient Accents */}
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
                    NDIS Disability Support
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tight leading-[0.95]">
                  Support For <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#d97706] to-[#ec4899]">
                    All Ages & Abilities
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Empowering individuals through deeply personalized care systems, adaptive independence skill building, 
                  and highly integrated community involvement mapped precisely around every phase of life.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <Link href="/referral" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-[#6b21a8] to-[#ec4899] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-purple-500/20 hover:-translate-y-0.5 transition-all active:scale-95">
                      Get Started
                    </button>
                  </Link>

                  <Link href="/services" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                      View Services
                    </button>
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Balanced Media Frame */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FadeUp delay={0.4}>
                <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_30px_70px_rgba(107,33,168,0.1)] group">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                    alt="Inclusive Disability Support and Guidance"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                  {/* Floating Glassmorphic Context Badge */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-5 sm:p-6 max-w-[200px] sm:max-w-xs transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-black text-3xl sm:text-4xl text-[#6b21a8]">
                      100%
                    </h3>
                    <p className="text-slate-500 font-bold text-xs sm:text-sm mt-1 leading-none">
                      Person-Centred Care
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 2. ANALYTICS METRICS RIBBON ---------------- */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center">
            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">24/7</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Support Available</p>
            </div>

            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">100+</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Participants Guided</p>
            </div>

            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">All Ages</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Children to Seniors</p>
            </div>

            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">NDIS</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Registered Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. CORE SERVICE DELIVERABLES ---------------- */}
      <section className="py-32 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="text-center mb-24 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d97706]">Care Portfolios</p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Our Comprehensive Services
              </h2>
              <p className="text-slate-400 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We design and sustain highly integrated, flexible care plans around your distinct lifestyle choice parameters, goals, and long-term milestones.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="group h-full bg-white p-10 rounded-[3.5rem] border border-slate-200/60 shadow-sm hover:shadow-[0_30px_60px_rgba(107,33,168,0.05)] transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-slate-50 shadow-inner border border-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-purple-500/5 transition-colors duration-500">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#6b21a8] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 4. PREMIUM CONTEXTUAL CTA CARD ---------------- */}
      <section className="pb-36 pt-8 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#6b21a8] via-[#ec4899] to-[#b45309] rounded-[4rem] md:rounded-[5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(107,33,168,0.2)]">
          {/* Subtle Accent Glow Block */}
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Ready To Begin <br /> Your Journey?
            </h2>

            <p className="text-purple-100 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Connect with Eternal Support Services today. Our intake specialist coordination desk stands ready to align your care parameters completely around your wellbeing goals.
            </p>

            <div className="pt-4">
              <Link href="/referral">
                <button className="px-16 py-6 bg-white text-[#6b21a8] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 transition-transform shadow-2xl relative z-10">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Footer Element */}
      <SmartFooter />
    </main>
  );
}