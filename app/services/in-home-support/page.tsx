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

export default function InHomeSupportPage() {
  const services = [
    {
      icon: "🧹",
      title: "Domestic Assistance",
      desc: "Comprehensive support for standard household tasks including cleaning, laundry, dishwashing, and keeping your living environment organized.",
      hoverGlow: "hover:border-pink-200 hover:shadow-[0_30px_60px_rgba(236,72,153,0.08)]",
      iconBg: "group-hover:bg-pink-500/10"
    },
    {
      icon: "🍳",
      title: "Meal Preparation & Nutrition",
      desc: "Collaborative meal planning, grocery sourcing, and healthy cooking sessions customized around your personal dietary choices and medical preferences.",
      hoverGlow: "hover:border-purple-200 hover:shadow-[0_30px_60px_rgba(66,10,81,0.08)]",
      iconBg: "group-hover:bg-[#420a51]/10"
    },
    {
      icon: "🛀",
      title: "Personal Care Support",
      desc: "Dignified, respectful assistance with essential daily routines such as morning/evening transfers, showering, grooming, and dressing.",
      hoverGlow: "hover:border-cyan-200 hover:shadow-[0_30px_60px_rgba(6,182,212,0.08)]",
      iconBg: "group-hover:bg-cyan-500/10"
    },
    {
      icon: "💊",
      title: "Medication Reminders",
      desc: "Careful monitoring and regular reminders to ensure you follow your prescriptions, health check targets, and therapeutic routines accurately.",
      hoverGlow: "hover:border-amber-200 hover:shadow-[0_30px_60px_rgba(217,119,6,0.08)]",
      iconBg: "group-hover:bg-amber-500/10"
    },
    {
      icon: "🛠️",
      title: "Home Environmental Safety",
      desc: "Assessing hazard spaces and coordinating setup adjustments or assistive tools to keep your physical living layout securely accessible.",
      hoverGlow: "hover:border-indigo-200 hover:shadow-[0_30px_60px_rgba(99,102,241,0.08)]",
      iconBg: "group-hover:bg-indigo-500/10"
    },
    {
      icon: "📈",
      title: "Skills & Routine Building",
      desc: "Step-by-step guidance designed to strengthen your personal autonomy, manage domestic bills, and direct your own household systems.",
      hoverGlow: "hover:border-emerald-200 hover:shadow-[0_30px_60px_rgba(16,185,129,0.08)]",
      iconBg: "group-hover:bg-emerald-500/10"
    },
  ];

  return (
    <main className="bg-[#faf8fc] selection:bg-[#420a51] selection:text-white antialiased min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Top Global Ecosystem Navigation */}
      <Navbar />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-52 pb-28 overflow-hidden bg-gradient-to-b from-purple-50/30 via-[#faf8fc] to-[#faf8fc]">
        {/* Balanced Brand Color Ambient Accents */}
        <div className="absolute top-[10%] right-[-10%] w-[55rem] h-[55rem] bg-gradient-to-br from-[#420a51]/15 to-pink-500/10 blur-[180px] rounded-full pointer-events-none animate-pulse duration-[8s]" />
        <div className="absolute top-[20%] left-[-15%] w-[45rem] h-[45rem] bg-gradient-to-tr from-cyan-500/10 via-transparent to-amber-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse duration-[12s]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Block */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left order-2 lg:order-1">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-purple-100 rounded-full shadow-[0_10px_30px_rgba(66,10,81,0.04)] ring-1 ring-purple-900/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#420a51]">
                    NDIS In-Home Care Track
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tight leading-[0.95]">
                  Independent <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#420a51] via-pink-600 to-amber-500">
                    In-Home Support
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Maintain control over your environment with customized home support structures. We provide assistance directly in your living space to make daily routines straightforward and safe.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <Link href="/referral" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-[#420a51] via-[#a35fa8] to-pink-600 hover:from-pink-600 hover:to-amber-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_45px_rgba(66,10,81,0.25)] hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all active:scale-95 duration-300">
                      Get Care Setup
                    </button>
                  </Link>

                  <Link href="/services" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-5 bg-white border border-purple-100 text-slate-800 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-50/50 transition-all shadow-sm">
                      All Core Portfolios
                    </button>
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Balanced Media Frame */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FadeUp delay={0.4}>
                <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[3.5rem] md:rounded-[4rem] overflow-hidden border-4 border-white bg-gradient-to-br from-purple-100 to-pink-50 shadow-[0_40px_100px_rgba(66,10,81,0.12)] group ring-1 ring-purple-100/60">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
                    alt="Friendly healthcare professional or caregiver providing support in a comfortable independent home environment"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent" />

                  {/* Floating Glassmorphic Context Badge */}
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-5 sm:p-6 max-w-[200px] sm:max-w-xs transition-transform duration-500 group-hover:-translate-y-1 ring-1 ring-purple-900/5">
                    <h3 className="font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#420a51] to-pink-600">
                      Comfort
                    </h3>
                    <p className="text-slate-600 font-extrabold text-xs sm:text-sm mt-1 leading-none">
                      In Your Own Space
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
        <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] bg-pink-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[35rem] h-[35rem] bg-[#420a51]/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 text-center">
            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">Flexible</h2>
              <p className="text-slate-400 font-extrabold text-[10px] uppercase tracking-[0.2em] mt-2">Hourly & Roster Scheduling</p>
            </div>

            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Vetted</h2>
              <p className="text-slate-400 font-extrabold text-[10px] uppercase tracking-[0.2em] mt-2">Screened Support Staff</p>
            </div>

            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">Matched</h2>
              <p className="text-slate-400 font-extrabold text-[10px] uppercase tracking-[0.2em] mt-2">Compatible Care Placements</p>
            </div>

            <div className="pt-4 md:pt-0">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">Secure</h2>
              <p className="text-slate-400 font-extrabold text-[10px] uppercase tracking-[0.2em] mt-2">Safe Environment Protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. CORE SERVICE DELIVERABLES ---------------- */}
      <section className="py-32 bg-purple-50/10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="text-center mb-24 space-y-4">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-pink-600">Domestic Deliverables</p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Domestic & Home Support Focus
              </h2>
              <p className="text-slate-500 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Every element of our in-home support portfolio works dynamically to keep your living environments reliable, clean, and perfectly suited to your active goals.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className={`group h-full bg-white p-10 rounded-[3.5rem] border border-purple-100 shadow-[0_10px_25px_rgba(66,10,81,0.01)] transition-all duration-500 flex flex-col justify-between ${service.hoverGlow}`}>
                  <div>
                    <div className={`w-16 h-16 bg-[#faf8fc] shadow-inner border border-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-colors duration-500 ${service.iconBg}`}>
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#420a51] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
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
      <section className="pb-36 pt-8 px-6 md:px-12 bg-[#faf8fc]">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#420a51] via-pink-600 to-amber-600 rounded-[4rem] md:rounded-[5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(66,10,81,0.25)]">
          {/* Subtle Accent Glow Block */}
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white/10 blur-[110px] rounded-full pointer-events-none" />
          <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Transform Your <br /> Home Routine Today
            </h2>

            <p className="text-purple-50 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed opacity-90">
              Connect with Eternal Support Services today. Our intake specialist coordination desk stands ready to align your home environment care parameters completely around your safety and preferences.
            </p>

            <div className="pt-4">
              <Link href="/referral">
                <button className="px-16 py-6 bg-white text-[#420a51] hover:text-pink-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 transition-all duration-300 shadow-2xl relative z-10">
                  Arrange In-Home Care
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