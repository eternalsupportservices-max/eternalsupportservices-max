"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/* ---------------- TYPES & INTERFACES ---------------- */
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

/* ---------------- GLOBAL COMPONENTS & ANIMATIONS ---------------- */
export const FadeUp = ({ children, delay = 0 }: FadeUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

/* ---------------- SERVICE DATA SYNCED ACROSS COMPONENTS ---------------- */
export const serviceLinks = [
  {
    name: "🏠 In-Home Support",
    href: "/services/in-home-support",
    desc: "Personal care & daily living support",
  },
  {
    name: "👨‍👩‍👧‍👦 Community Participation",
    href: "/services/community-participation",
    desc: "Social, shopping & appointments",
  },
  {
    name: "🧒 Children's Services",
    href: "/services/childrens-services",
    desc: "Learning, development & recreation",
  },
  {
    name: "♿ All Ages & Disabilities",
    href: "/services/all-ages-disabilities",
    desc: "Individual care plans & inclusion",
  },
  {
    name: "🚗 Transport Assistance",
    href: "/services/transport-assistance",
    desc: "Outings, medical trips & events",
  },
  {
    name: "🌟 Respite Care",
    href: "/services/respite-care",
    desc: "Short-term stays & caregiver relief",
  },
];

/* ---------------- NAVBAR ---------------- */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Fully dissolve to 0 by 300px of scroll
      const opacity = Math.max(0, 1 - window.scrollY / 300);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[100] flex flex-col">
      {/* Smart Top Information Bar */}
      <div
        className={`bg-slate-900 text-slate-300 border-b border-slate-800/50 transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "py-4 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-2 text-xs md:text-sm font-bold tracking-wider">
            <a href="tel:0482911697" className="hover:text-white transition-colors flex items-center gap-2.5 py-0.5">
              <span className="text-base">📞</span>
              <span className="font-black uppercase tracking-[0.15em]">0482 911 697</span>
            </a>
            <a href="mailto:admin@eternalsupportservice.com.au" className="hover:text-white transition-colors flex items-center gap-2.5 py-0.5">
              <span className="text-base">✉️</span>
              <span className="font-extrabold text-[13px] md:text-[14px]">admin@eternalsupportservice.com.au</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NDIS Registered Care Network
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-700 ${
          isScrolled
            ? "py-4 bg-white/80 backdrop-blur-2xl shadow-sm border-b border-slate-100"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* ── LOGO: dissolve + emboss ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            style={{
              opacity: scrollOpacity,
              transition: "opacity 0.35s ease-out",
              pointerEvents: scrollOpacity === 0 ? "none" : "auto",
            }}
          >
            {/* Logo image container — raised emboss idle, pressed deboss on hover */}
            <div
              className="relative w-12 h-12 rounded-2xl overflow-hidden transition-all duration-500 group-hover:rotate-[15deg]"
              style={{
                boxShadow:
                  "3px 3px 7px rgba(0,0,0,0.20), -3px -3px 7px rgba(255,255,255,0.90)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "inset 3px 3px 6px rgba(0,0,0,0.18), inset -3px -3px 6px rgba(255,255,255,0.80)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "3px 3px 7px rgba(0,0,0,0.20), -3px -3px 7px rgba(255,255,255,0.90)";
              }}
            >
              <Image
                src="/Eternal support.png"
                alt="Eternal Support Logo"
                fill
                sizes="48px"
                priority
                className="object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
              />
            </div>

            {/* Brand text */}
            <span className="text-2xl font-black tracking-tighter text-slate-900 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6b21a8] group-hover:to-[#ec4899]">
              Eternal
              <span
                className="font-extrabold transition-colors duration-500"
                style={{ color: "#f33b7b" }}
              >
                {" "}Support Services
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#6b21a8] transition-colors">
              Home
            </Link>

            <div
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#6b21a8] transition-colors">
                Services{" "}
                <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }} className="text-[8px]">
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px]"
                  >
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_rgba(107,33,168,0.08)] p-6 grid grid-cols-2 gap-2">
                      {serviceLinks.map((s, i) => (
                        <Link key={i} href={s.href} className="p-4 rounded-2xl hover:bg-slate-50 transition-all group/item">
                          <p className="text-[11px] font-black text-slate-900 group-hover/item:text-[#6b21a8] tracking-tight">
                            {s.name}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold mt-1 leading-normal">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#6b21a8] transition-colors">
              About
            </Link>
            <Link href="/referral">
              <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#6b21a8] hover:shadow-2xl hover:shadow-[#6b21a8]/20 transition-all active:scale-95">
                Submit a Referral
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-slate-900 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <div className="w-6 space-y-1.5">
              <div className={`h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : "w-6"}`} />
              <div className={`h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : "w-4 ml-auto"}`} />
              <div className={`h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : "w-6"}`} />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 bg-white z-[90] p-10 flex flex-col justify-center overflow-y-auto gap-6 lg:hidden"
            >
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#6b21a8] transition-colors">
                Home
              </Link>
              <div className="flex flex-col gap-2 pl-2 border-l-2 border-slate-100 my-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Our Services</p>
                {serviceLinks.map((s, i) => (
                  <Link key={i} href={s.href} onClick={() => setMobileOpen(false)} className="text-lg font-bold text-slate-700 hover:text-[#6b21a8]">
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#6b21a8] transition-colors">
                About
              </Link>
              <Link href="/referral" onClick={() => setMobileOpen(false)} className="text-4xl font-black tracking-tighter text-[#6b21a8] hover:text-slate-900 transition-colors">
                Make a Referral
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

/* ---------------- HERO SECTION ---------------- */
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen lg:min-h-[105vh] flex items-center justify-center pt-48 lg:pt-36 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20" />

      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] left-[5%] w-[40rem] h-[40rem] bg-purple-500/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-pink-500/5 blur-[140px] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT — Clean floating logo with enhanced emboss effect */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
          <FadeUp delay={0.1}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] group cursor-pointer"
            >
              {/* Emboss ring — raised at rest, pressed inset on hover */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{
                  boxShadow:
                    "14px 14px 32px rgba(107,33,168,0.16), -14px -14px 32px rgba(255,255,255,1), 6px 6px 16px rgba(236,72,153,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "inset 10px 10px 24px rgba(107,33,168,0.18), inset -10px -10px 24px rgba(255,255,255,0.90), inset 4px 4px 10px rgba(236,72,153,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "14px 14px 32px rgba(107,33,168,0.16), -14px -14px 32px rgba(255,255,255,1), 6px 6px 16px rgba(236,72,153,0.08)";
                }}
              />

              {/* Gradient background layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 group-hover:from-purple-150 transition-all duration-700" />

              {/* Soft glow layer */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-200/50 via-pink-100/30 to-transparent blur-2xl group-hover:from-purple-300/60 transition-all duration-700" />

              {/* Logo */}
              <Image
                src="/Eternal support.png"
                alt="Eternal Support Logo"
                fill
                priority
                sizes="(max-width:768px) 320px, 448px"
                className="object-contain drop-shadow-xl relative z-10"
              />
            </motion.div>
          </FadeUp>
        </div>

        {/* RIGHT — Text content */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-1 lg:order-2">

          {/* Top row: badge + NDIS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-100 rounded-full shadow-lg shadow-purple-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Next-Gen Disability Support</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="bg-white/90 backdrop-blur-md border border-slate-200/60 p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col items-center gap-1 w-32">
                <div className="relative w-24 h-10">
                  <Image src="/ndis-logo.png" alt="NDIS Registered Provider" fill sizes="96px" className="object-contain" />
                </div>
                <span className="text-[7px] font-black uppercase tracking-wider text-slate-400 text-center">Registered Provider</span>
              </div>
            </FadeUp>
          </div>

          {/* Heading */}
          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-[7.5rem] font-black text-slate-900 leading-[0.9] tracking-tight">
              Eternal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#d97706] to-[#ec4899]">
                Support
              </span>
            </h1>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.2}>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We provide specialized infrastructure and human-centric care to ensure independence is accessible for everyone, everywhere.
            </p>
          </FadeUp>

          {/* Buttons */}
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link href="/referral">
                <button className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-[#6b21a8] to-[#ec4899] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-purple-500/20 hover:-translate-y-1 transition-all active:scale-95">
                  Submit a Referral
                </button>
              </Link>
              <Link href="/about">
                <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                  Our Vision
                </button>
              </Link>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
};

/* ---------------- SERVICES GRID ---------------- */
const Services = () => {
  const serviceItems = [
    { title: "In-Home Support", img: "/In-Home.png", href: "/services/in-home-support", desc: "Personal care assistance • Daily living support • Household tasks and cleaning • Meal preparation • Medication reminders" },
    { title: "Community Participation", img: "/Community Participation.png", href: "/services/community-participation", desc: "Social and recreational activities • Community access support • Shopping assistance • Appointment assistance • Transport support" },
    { title: "Children's Services", img: "/Children Services.png", href: "/services/childrens-services", desc: "Individualized support for children • Learning and development activities • Social skill development • Recreational programs • School holiday support" },
    { title: "All Ages & Disabilities", img: "/All Ages Disabilities.png", href: "/services/all-ages-disabilities", desc: "Support for all abilities • Personalized care plans • Short-term and long-term support • Independent living assistance • Inclusive community engagement" },
    { title: "Transport Assistance", img: "/Transport Assistance.png", href: "/services/transport-assistance", desc: "Medical appointments • Community outings • Shopping trips • Social events • Daily transportation needs" },
    { title: "Respite Care", img: "/Respite Care.png", href: "/services/respite-care", desc: "Short-term accommodation • Emergency support • Family caregiver relief • Flexible care arrangements" },
  ];

  return (
    <section id="services" className="relative py-40 border-y border-slate-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/services-background.jpg" alt="Services section background" fill sizes="100vw" className="object-cover" quality={75} />
        <div className="absolute inset-0 bg-slate-50/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d97706]">Our Services Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              Engineered <br /> for Independence.
            </h2>
          </div>
          <p className="text-slate-400 font-bold text-base md:text-lg leading-relaxed max-w-md lg:ml-auto lg:text-right">
            Every support service vector is backed by meticulous training and an absolute obsession with personal care detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((s, i) => (
            <Link href={s.href} key={i}>
              <motion.div
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[3.5rem] border border-slate-200/60 shadow-sm overflow-hidden transition-all h-full cursor-pointer hover:shadow-[0_30px_60px_rgba(107,33,168,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 w-full overflow-hidden relative bg-slate-100">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#6b21a8] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="px-10 pb-8 pt-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d97706] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Plan →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CTA ---------------- */
export const CTA = () => (
  <section className="relative py-40 px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image src="/cta-background.jpg" alt="Call to action background" fill sizes="100vw" className="object-cover" quality={75} />
      <div className="absolute inset-0 bg-slate-950/60" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto bg-gradient-to-br from-[#6b21a8] via-[#ec4899] to-[#b45309] rounded-[4rem] md:rounded-[5rem] p-12 md:p-20 text-center text-white shadow-[0_40px_100px_rgba(107,33,168,0.2)] overflow-hidden">
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <FadeUp>
        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
          Start your <br /> better tomorrow.
        </h2>
        <p className="text-purple-100 font-medium max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Get in touch with our intake coordinators today to perfectly build your custom routine management profile.
        </p>
        <Link href="/referral">
          <button className="px-16 py-6 bg-white text-[#6b21a8] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 transition-transform shadow-2xl relative z-10">
            Submit a Referral
          </button>
        </Link>
      </FadeUp>
    </div>
  </section>
);

/* ---------------- FOOTER ---------------- */
export const SmartFooter = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/60">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 relative">
              <Image src="/Eternal support.png" alt="Eternal Support Logo" fill sizes="40px" className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter">
              Eternal <span style={{ color: "#ec4899" }}>Support</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-xs">
            Providing premium human-centric infrastructure and individualized NDIS care plans.
          </p>

          <div className="flex flex-col gap-4 items-start pt-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Registered NDIS Provider</span>
            </div>

            <div className="relative w-36 h-16 bg-white rounded-2xl px-3 py-2 shadow-inner flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image src="/ndis-logo.png" alt="NDIS Registered Provider Logo" fill sizes="120px" className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services Directory</p>
          <div className="grid grid-cols-1 gap-2">
            {serviceLinks.map((service, index) => (
              <Link key={index} href={service.href} className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px]" style={{ color: "#ec4899" }}>→</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {service.name.split(" ").slice(1).join(" ") || service.name} Support
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ecosystem Links</p>
          <div className="flex flex-col gap-3.5">
            <Link href="/" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Home Base</Link>
            <Link href="/services" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Core Portfolio</Link>
            <Link href="/about" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Corporate Identity</Link>
            <Link href="/referral" className="text-xs font-black uppercase tracking-wider transition-colors" style={{ color: "#ec4899" }}>Submit a Referral →</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Support Desks</p>
          <div className="space-y-3 text-xs font-medium text-slate-400">
            <p>
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Headquarters Base</span>
              Melbourne Metro, Victoria, Australia
            </p>
            <p>
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Emergency Dispatch</span>
              <a href="tel:0482911697" className="text-white font-bold hover:underline cursor-pointer">0482 911 697</a>
            </p>
            <p>
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Secure Gateway Email</span>
              <a href="mailto:admin@eternalsupportservice.com.au" className="text-white font-bold hover:underline cursor-pointer">admin@eternalsupportservice.com.au</a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em]">
          © 2026 Eternal Support Ecosystem. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
          <a href="#" className="hover:text-white transition-colors">NDIS Compliance Charter</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Care</a>
        </div>
      </div>
    </footer>
  );
};

/* ---------------- FEEDBACK MODAL ---------------- */
interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", rating: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", text: "Feedback submitted successfully!" });
        setForm({ name: "", email: "", rating: "", message: "" });
        setTimeout(() => onClose(), 2000);
      } else {
        setStatus({ type: "error", text: data.message || "Failed to submit feedback" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: "Something went wrong. Please check your network connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.5)] p-8 md:p-10 relative overflow-hidden text-white z-10"
          >
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-all border border-white/10 text-lg"
            >
              ✕
            </button>

            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-[9px] font-black uppercase tracking-widest mb-2">
                Continuous Evaluation
              </span>
              <h3 className="text-3xl font-black tracking-tight text-white">Share Your Experience</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Your immediate direct perspective structures our care provision roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl p-3.5 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl p-3.5 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Experience Scale</label>
                <div className="relative">
                  <select
                    name="rating"
                    required
                    value={form.rating}
                    onChange={handleChange}
                    className="w-full bg-[#161224] border border-white/10 focus:border-purple-500/50 rounded-xl p-3.5 text-white text-xs focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="text-slate-500">Select Rating</option>
                    <option value="5 Stars">⭐⭐⭐⭐⭐ Excellent Experience</option>
                    <option value="4 Stars">⭐⭐⭐⭐ Good Support Standard</option>
                    <option value="3 Stars">⭐⭐⭐ Average Quality</option>
                    <option value="2 Stars">⭐⭐ Poor Evaluation</option>
                    <option value="1 Star">⭐ Critical Optimization Needed</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">▼</div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Detailed Feedback Record</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Please write down your detailed testimonial or system support notes here..."
                  className="w-full bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-xl p-3.5 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all resize-none leading-relaxed"
                />
              </div>

              <AnimatePresence mode="wait">
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`p-3 rounded-xl border text-[11px] font-semibold flex items-center gap-2 ${
                      status.type === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    }`}
                  >
                    <span>{status.type === "success" ? "✨" : "⚠️"}</span>
                    <p>{status.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#6b21a8] to-[#ec4899] text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Broadcasting Logs...
                  </>
                ) : (
                  "Submit Feedback"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/* ---------------- MAIN EXPORT ---------------- */
export default function EternalSupportPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="bg-white selection:bg-[#6b21a8] selection:text-white antialiased min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <SmartFooter />

      <motion.button
        onClick={() => setModalOpen(true)}
        whileHover={{ scale: 1.05, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[150] bg-gradient-to-l from-[#ec4899] to-[#6b21a8] text-white pl-4 pr-5 py-3.5 rounded-l-2xl shadow-[0_10px_30px_rgba(236,72,153,0.3)] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 border-y border-l border-white/20 hover:shadow-[0_15px_40px_rgba(236,72,153,0.5)] transition-all"
      >
        <span className="text-sm">✍️</span>
        <span className="hidden sm:inline">Feedback</span>
      </motion.button>

      <FeedbackModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}