"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function InHomeSupportPage() {
  // ================= NAVBAR & DROP-DOWN STATE =================
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { name: "🏠 In-Home Support", desc: "Personal care, daily living & meals" },
    { name: "👨‍👩‍👧‍👦 Community Participation", desc: "Social, shopping & appointments" },
    { name: "🧒 Children's Services", desc: "Learning, development & recreation" },
    { name: "♿ All Ages & Disabilities", desc: "Individual care plans & inclusion" },
    { name: "🚗 Transport Assistance", desc: "Outings, medical trips & events" },
    { name: "💙 Supported SIL", desc: "24/7 routine support & life skills" },
    { name: "📋 Support Coordination", desc: "NDIS guidance & plan optimization" },
    { name: "🌟 Respite Care", desc: "Short-term stays & caregiver relief" },
  ];

  const features = [
    "Personal care assistance",
    "Daily living support",
    "Household tasks and cleaning",
    "Meal preparation",
    "Medication reminders"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#3e5068] selection:text-white flex flex-col antialiased">
      
      {/* Background Ambience Layers */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[50rem] h-[50rem] bg-[#3e5068]/5 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[-5%] w-[42rem] h-[42rem] bg-slate-400/10 blur-[130px] rounded-full" />
      </div>

      {/* ================= PREMIUM NAVBAR ================= */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "py-4 bg-white/80 backdrop-blur-2xl shadow-sm" : "py-8 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          
          {/* Corporate Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(62,80,104,0.15)] transition-transform duration-500 group-hover:rotate-[12deg]">
              <Image
                src="/Eternal support services.png"
                alt="Eternal Support Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Eternal <span className="text-[#3e5068]">Support Services</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-12 items-center">
            <li>
              <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">
                Home
              </Link>
            </li>

            {/* Micro-interactive Dropdown Container */}
            <li 
              ref={dropdownRef} 
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#3e5068] transition-colors focus:outline-none">
                Services <motion.span animate={{ rotate: serviceOpen ? 180 : 0 }} className="text-[8px] inline-block">▼</motion.span>
              </button>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 10, scale: 0.95 }} 
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px]"
                  >
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_rgba(62,80,104,0.08)] p-6 grid grid-cols-2 gap-2">
                      {services.map((item, i) => (
                        <Link
                          key={i}
                          href="/#services"
                          className="p-4 rounded-2xl hover:bg-slate-50 transition-all group/item"
                        >
                          <p className="text-[11px] font-black text-slate-900 group-hover/item:text-[#3e5068] tracking-tight">{item.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold mt-1 leading-normal">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/#about" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <Link href="/join">
              <button className="px-9 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#3e5068] shadow-xl hover:shadow-[#3e5068]/20 transition-all active:scale-95">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Control Icon */}
          <button
            className="lg:hidden text-slate-900 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 space-y-1.5">
              <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : "w-6"}`} />
              <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "opacity-0" : "w-4 ml-auto"}`} />
              <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : "w-6"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Flyout Navigation Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: "100%" }} 
              style={{ willChange: "transform" }}
              className="fixed inset-0 bg-white z-[90] p-10 flex flex-col justify-center gap-6 lg:hidden overflow-y-auto"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#3e5068]">Home</Link>
              <div className="flex flex-col gap-2 pl-2 border-l-2 border-slate-100 my-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Our Portfolio</p>
                {services.map((item, i) => (
                  <Link key={i} href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-[#3e5068]">
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#3e5068]">About</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-[#3e5068]">Contact</Link>
              <Link href="/join" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-[#3e5068]">Join Registry</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= PORTFOLIO PROFILE DETAILS ================= */}
      <section className="flex-1 max-w-7xl w-full mx-auto px-8 pt-44 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side Column: Strategic Descriptions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit border bg-[#3e5068]/5 border-[#3e5068]/10 text-[#3e5068]">
            Service Unit 01
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            In-Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] to-[#809bb4]">
              Support Ecosystem.
            </span>
          </h1>
          
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl pt-2">
            Personalized, professional care frameworks delivered seamlessly within the absolute comfort and secure familiarity of your own private residence.
          </p>

          {/* Luxury Feature List Blocks */}
          <div className="pt-8 border-t border-slate-100 space-y-3 max-w-md">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-slate-50/50 hover:bg-slate-50 rounded-2xl border border-slate-100/40 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#3e5068]/10 flex items-center justify-center font-bold text-xs text-[#3e5068]">
                  ✓
                </div>
                <span className="text-sm font-bold text-slate-800 tracking-tight">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6">
            <Link href="/join">
              <button className="px-10 py-5 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 bg-[#3e5068] shadow-[0_20px_35px_-5px_rgba(62,80,104,0.2)]">
                Request Support Matrix
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Column: Media Showcase Area */}
        <div className="lg:col-span-6 relative w-full aspect-[4/3] lg:aspect-square">
          <div className="absolute inset-0 bg-[#3e5068]/5 blur-3xl rounded-[3rem] scale-95 -z-10" />
          
          <div className="w-full h-full rounded-[3.5rem] border border-slate-100 overflow-hidden bg-slate-50 shadow-[0_40px_100px_rgba(62,80,104,0.06)] relative group">
            <Image
              src="/In-Home.png"
              alt="In Home Care Architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Elegant overlay card containing brand guidelines */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/70 backdrop-blur-md rounded-3xl border border-white/20 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3e5068] mb-1">Human Infrastructure</p>
              <p className="text-xs font-bold text-slate-800 leading-normal">
                Our in-home care services strictly follow the official brand identity manual layout guidelines for standard universal disability frameworks.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= SMART FOOTER ================= */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3e5068]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/60">
          
          {/* Column 1: Ecosystem Brand Overview */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/Eternal support services.png"
                  alt="Eternal Support Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter">
                Eternal <span className="text-[#809bb4]">Support</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-xs">
              Providing luxury human-centric infrastructure and premium individualized care plans across standard universal frameworks.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Registered NDIS Provider</span>
            </div>
          </div>

          {/* Column 2: Aligned Services Directory Tracking */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services Directory</p>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => {
                // Safe split implementation to avoid runtime failures on strings without white space splits
                const splitName = service.name.split(" ");
                const cleanName = splitName.length > 1 ? splitName.slice(1).join(" ") : service.name;
                
                return (
                  <Link 
                    key={index} 
                    href="/#services" 
                    className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px] text-[#809bb4]">→</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{cleanName} Support</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 3: Corporate Directory Mapping Links */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ecosystem Links</p>
            <div className="flex flex-col gap-3.5">
              <Link href="/" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Home Base</Link>
              <Link href="/#services" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Core Portfolio</Link>
              <Link href="/#about" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Corporate Intelligence</Link>
              <Link href="/join" className="text-xs font-black uppercase tracking-wider transition-colors text-[#809bb4]">Join Onboarding Registry →</Link>
            </div>
          </div>

          {/* Column 4: Operational Dispatch & Contact Desks */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Support Desks</p>
            <div className="space-y-3 text-xs font-medium text-slate-400">
              <div>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Headquarters Base</span>
                <p className="leading-relaxed">Melbourne Metro, Victoria, Australia</p>
              </div>
              <div>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Emergency Dispatch</span>
                <span className="text-white font-bold hover:underline cursor-pointer">1300 ETERNAL (Placeholder)</span>
              </div>
              <div>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Secure Gateway Email</span>
                <span className="text-white font-bold hover:underline cursor-pointer">intake@eternalsupport.com.au</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-Bar Copyright Area */}
        <div className="max-w-7xl mx-auto px-8 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] text-center md:text-left">
            © 2026 Eternal Support Ecosystem. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
            <a href="#" className="hover:text-white transition-colors">NDIS Compliance Charter</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Care</a>
          </div>
        </div>
      </footer>

    </div>
  );
}