"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
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

  // ================= CONTACT FORM STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mimicking secure submission infrastructure
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#3e5068] selection:text-white flex flex-col antialiased">
      
      {/* Ambient background blur elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#3e5068]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40rem] h-[40rem] bg-slate-400/10 blur-[130px] rounded-full" />
      </div>

      {/* ================= PREMIUM NAVBAR ================= */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "py-4 bg-white/80 backdrop-blur-2xl shadow-sm" : "py-8 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          
          {/* Logo Brand Frame */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(62,80,104,0.15)] transition-transform duration-500 group-hover:rotate-[12deg]">
              <Image
                src="/Eternal support services.png"
                alt="Eternal Support Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Eternal <span style={{ color: "#3e5068" }}>Support Services</span>
            </span>
          </Link>

          {/* Desktop Core Menu */}
          <ul className="hidden lg:flex gap-12 items-center">
            <li>
              <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">
                Home
              </Link>
            </li>

            {/* Premium Interactive Dropdown */}
            <li 
              ref={dropdownRef} 
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#3e5068] transition-colors">
                Services <motion.span animate={{ rotate: serviceOpen ? 180 : 0 }} className="text-[8px]">▼</motion.span>
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
              <Link href="/contact" className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3e5068] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Right Action */}
          <div className="hidden lg:block">
            <Link href="/join">
              <button className="px-9 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#3e5068] shadow-xl hover:shadow-[#3e5068]/20 transition-all active:scale-95">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            className="lg:hidden text-slate-900 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 space-y-1.5">
              <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : "w-6"}`} />
              <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "opacity-0" : "w-4 ml-auto"}`} />
              <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : "w-6"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: "100%" }} 
              className="fixed inset-0 bg-white z-[90] p-10 flex flex-col justify-center gap-6 lg:hidden"
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
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-[#3e5068]">Contact</Link>
              <Link href="/join" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-400">Join Network</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= CONTACT MAIN SECTION ================= */}
      <section className="flex-1 max-w-7xl w-full mx-auto px-8 pt-44 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Aspect: Typography & Status */}
        <div className="lg:col-span-5 space-y-6">
          <div 
            className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit border"
            style={{ backgroundColor: "rgba(62, 80, 104, 0.05)", borderColor: "rgba(62, 80, 104, 0.1)", color: "#3e5068" }}
          >
            Communications Hub
          </div>
          <h1 className="text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Connect With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] to-[#809bb4]">
              Our Intake Desk.
            </span>
          </h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
            Have questions about your NDIS funding setup or our localized support availability? Drop us a secure line below.
          </p>
          
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 text-sm">📍</div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Melbourne Metro, Victoria</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 text-sm">✉️</div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">intake@eternalsupport.com.au</p>
            </div>
          </div>
        </div>

        {/* Right Aspect: Secure Form Frame */}
        <div className="lg:col-span-7 relative">
          <div className="absolute inset-0 bg-[#3e5068]/5 blur-3xl rounded-[3rem] -z-10 scale-95" />
          
          <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] border border-slate-50 shadow-[0_40px_100px_rgba(62,80,104,0.05)]">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Your Full Identity</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alexander Mason"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/60 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Secure Reply Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/60 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Brief Message or Request Outline</label>
                    <textarea
                      name="message"
                      placeholder="Describe how our support network can assist your independence roadmap..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/60 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm h-36 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
                    style={{ backgroundColor: "#3e5068", boxShadow: "0 20px 35px -5px rgba(62, 80, 104, 0.2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2d3c50")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3e5068")}
                  >
                    {loading ? "Transmitting..." : "Send Message"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-prompt"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto bg-slate-50" style={{ color: "#3e5068" }}>
                    ✓
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Transmission Complete</h2>
                    <p className="text-slate-400 font-bold mt-2 text-sm max-w-sm mx-auto">Your inquiry has hit our dispatch queue. A representative will communicate shortly.</p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#3e5068] transition-all active:scale-95"
                  >
                    Send Additional Note
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= SMART FOOTER ================= */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3e5068]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/60">
          
          {/* Col 1: Brand Ecosystem Statement */}
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
                Eternal <span style={{ color: "#809bb4" }}>Support</span>
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

          {/* Col 2: Sync Services Directory */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services Directory</p>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  href="/#services" 
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[9px]" style={{ color: "#809bb4" }}>→</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{service.name.split(" ")[1] || service.name} Support</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Framework Navigation Links */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ecosystem Links</p>
            <div className="flex flex-col gap-3.5">
              <Link href="/" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Home Base</Link>
              <Link href="/#services" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Core Portfolio</Link>
              <Link href="/about" className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white transition-colors">Corporate Intelligence</Link>
              <Link href="/join" className="text-xs font-black uppercase tracking-wider transition-colors" style={{ color: "#809bb4" }}>Join Onboarding Registry →</Link>
            </div>
          </div>

          {/* Col 4: Operations & Secure Contact Desk */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Support Desks</p>
            <div className="space-y-3 text-xs font-medium text-slate-400">
              <p className="leading-relaxed">
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Headquarters Base</span>
                Melbourne Metro, Victoria, Australia
              </p>
              <p>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Emergency Dispatch</span>
                <span className="text-white font-bold hover:underline cursor-pointer">1300 ETERNAL (Placeholder)</span>
              </p>
              <p>
                <span className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Secure Gateway Email</span>
                <span className="text-white font-bold hover:underline cursor-pointer">intake@eternalsupport.com.au</span>
              </p>
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