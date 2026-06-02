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
    name: "💙 Supported SIL",
    href: "/services/supported-independent-living",
    desc: "24/7 routine support & life skills",
  },
  {
    name: "📋 Support Coordination",
    href: "/services/support-coordination",
    desc: "NDIS guidance & plan optimization",
  },
  {
    name: "🌟 Respite Care",
    href: "/services/respite-care",
    desc: "Short-term stays & caregiver relief",
  },
];

/* ---------------- PREMIUM NAVBAR ---------------- */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
      isScrolled ? "py-4 bg-white/80 backdrop-blur-2xl shadow-sm border-b border-slate-100" : "py-10 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:rotate-[15deg] shadow-[0_20px_25px_-5px_rgba(62,80,104,0.2)]">
            <Image
              src="/Eternal support services.png"
              alt="Eternal Support Logo"
              fill
              sizes="48px"
              priority
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Eternal  
            <span className="font-extrabold" style={{ color: "#3e5068" }}>
              {" "}Support Services
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">Home</Link>
          
          <div className="relative py-2" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">
              Services <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }} className="text-[8px]">▼</motion.span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px]">
                  <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_rgba(62,80,104,0.08)] p-6 grid grid-cols-2 gap-2">
                    {serviceLinks.map((s, i) => (
                      <Link key={i} href={s.href} className="p-4 rounded-2xl hover:bg-slate-50 transition-all group/item">
                        <p className="text-[11px] font-black text-slate-900 group-hover/item:text-[#3e5068] tracking-tight">{s.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold mt-1 leading-normal">{s.desc}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">About</Link>
          <Link href="/join">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#3e5068] hover:shadow-2xl hover:shadow-[#3e5068]/20 transition-all active:scale-95">
              Get Started
            </button>
          </Link>
        </div>

        <button className="lg:hidden text-slate-900 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="w-6 space-y-1.5">
            <div className={`h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : "w-6"}`} />
            <div className={`h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : "w-4 ml-auto"}`} />
            <div className={`h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : "w-6"}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 bg-white z-[90] p-10 flex flex-col justify-center overflow-y-auto gap-6 lg:hidden">
            <Link href="/page" onClick={() => setMobileOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#3e5068] transition-colors">Home</Link>
            
            <div className="flex flex-col gap-2 pl-2 border-l-2 border-slate-100 my-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Our Services</p>
              {serviceLinks.map((s, i) => (
                <Link key={i} href={s.href} onClick={() => setMobileOpen(false)} className="text-lg font-bold text-slate-700 hover:text-[#3e5068]">
                  {s.name}
                </Link>
              ))}
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#3e5068] transition-colors">About</Link>
            <Link href="/join" onClick={() => setMobileOpen(false)} className="text-4xl font-black tracking-tighter text-[#3e5068] hover:text-slate-900 transition-colors">Join Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ---------------- HERO SECTION ---------------- */
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Dynamic Lighting Ambiance */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] left-[5%] w-[40rem] h-[40rem] bg-[#3e5068]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-[#5a7293]/6 blur-[140px] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center mt-12">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 bg-white border border-slate-100 rounded-full shadow-xl shadow-[#3e5068]/5">
            <span className="w-2 h-2 rounded-full bg-[#3e5068] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Next-Gen Disability Support</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-7xl md:text-[9.5rem] font-black text-slate-900 leading-[0.85] tracking-tight mb-12">
            Better <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-[#809bb4]">Everyday.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-16">
            We provide specialized infrastructure and human-centric care to ensure independence 
            is accessible for everyone, everywhere.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <button className="px-14 py-6 bg-[#3e5068] text-white rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-[#3e5068]/30 hover:-translate-y-1 transition-all active:scale-95">
                Join our Network
              </button>
            </Link>
            <Link href="/about">
              <button className="px-10 py-6 bg-white border border-slate-200 text-slate-900 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                Our Vision
              </button>
            </Link>
          </div>
        </FadeUp>
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
    { title: "Supported Independent Living (SIL)", img: "/Supported Independent Living.png", href: "/services/supported-independent-living", desc: "Daily routine support • Life skills development • Household management • Personal independence training • 24/7 support options" },
    { title: "Support Coordination", img: "/Support Coordination.png", href: "/services/support-coordination", desc: "NDIS plan guidance • Service provider coordination • Goal planning • Capacity building • Ongoing support management" },
    { title: "Respite Care", img: "/Respite Care.png", href: "/services/respite-care", desc: "Short-term accommodation • Emergency support • Family caregiver relief • Flexible care arrangements" },
  ];

  return (
    <section id="services" className="py-40 bg-slate-50/60 relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#3e5068]">Our Services Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter">Engineered <br /> for Independence.</h2>
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
                className="group relative bg-white rounded-[3.5rem] border border-slate-200/60 shadow-sm overflow-hidden transition-all h-full cursor-pointer hover:shadow-[0_30px_60px_rgba(62,80,104,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 w-full overflow-hidden relative bg-slate-100">
                    <Image 
                      src={s.img} 
                      alt={s.title} 
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                      priority={i === 0} // Immediately preloads the first card asset above the fold to keep LCP highly responsive
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#3e5068] transition-colors">{s.title}</h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="px-10 pb-8 pt-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3e5068] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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

/* ---------------- FINAL CTA ---------------- */
export const CTA = () => (
  <section className="py-40 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#3e5068] to-[#253243] rounded-[4rem] md:rounded-[5rem] p-12 md:p-20 text-center text-white shadow-[0_40px_100px_rgba(62,80,104,0.25)] relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <FadeUp>
        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">Start your <br /> better tomorrow.</h2>
        <p className="text-slate-300 font-medium max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Get in touch with our intake coordinators today to perfectly build your custom routine management profile.
        </p>
        <Link href="/contact">
          <button className="px-16 py-6 bg-white text-[#3e5068] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-103 transition-transform shadow-2xl relative z-10">
            Register Now
          </button>
        </Link>
      </FadeUp>
    </div>
  </section>
);

/* ---------------- SMART & PREMIUM FOOTER ---------------- */
export const SmartFooter = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3e5068]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/60">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            {/* Swapped fill with explicit responsive dimensions for clear structure layout handling */}
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800">
              <Image 
                src="/Eternal support services.png" 
                alt="Eternal Support Logo" 
                width={40} 
                height={40} 
                className="object-cover" 
              />
            </div>
            <span className="text-xl font-black tracking-tighter">Eternal <span style={{ color: "#809bb4" }}>Support</span></span>
          </div>
          <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-xs">
            Providing premium human-centric infrastructure and individualized NDIS care plans.
          </p>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Registered NDIS Provider</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services Directory</p>
          <div className="grid grid-cols-1 gap-2">
            {serviceLinks.map((service, index) => (
              <Link key={index} href={service.href} className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px]" style={{ color: "#809bb4" }}>→</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">{service.name.split(" ").slice(1).join(" ") || service.name} Support</span>
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
            <Link href="/contact" className="text-xs font-black uppercase tracking-wider transition-colors" style={{ color: "#809bb4" }}>Join Onboarding Registry →</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Support Desks</p>
          <div className="space-y-3 text-xs font-medium text-slate-400">
            <p><span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Headquarters Base</span>Melbourne Metro, Victoria, Australia</p>
            <p><span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Emergency Dispatch</span><span className="text-white font-bold hover:underline cursor-pointer">1300 ETERNAL</span></p>
            <p><span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Secure Gateway Email</span><span className="text-white font-bold hover:underline cursor-pointer">intake@eternalsupport.com.au</span></p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em]">© 2026 Eternal Support Ecosystem. All Rights Reserved.</p>
        <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
          <a href="#" className="hover:text-white transition-colors">NDIS Compliance Charter</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Care</a>
        </div>
      </div>
    </footer>
  );
};

export default function EternalSupportPage() {
  return (
    <main className="bg-white selection:bg-[#3e5068] selection:text-white antialiased">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <SmartFooter />
    </main>
  );
}