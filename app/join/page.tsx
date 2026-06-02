"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function JoinPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get("content-type");
      
      // Safety validation if server returns an empty body or wrong content-type
      if (!contentType || !contentType.includes("application/json")) {
        const errorText = await response.text();
        console.error(
          `Backend Route Error: Expected JSON, received fallback format instead.\n` +
          `Status Code: ${response.status}\n` +
          `Server Raw Output: "${errorText}"`
        );
        throw new Error(`Server responded with status ${response.status} (Non-JSON).`);
      }

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.message || "Failed to send data.");
      }
    } catch (error) {
      console.error("Submit Error Context:", error);
      alert("Could not reach the server endpoint properly. Please verify the API file path.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-white selection:bg-[#3e5068] selection:text-white overflow-hidden flex flex-col">
      
      {/* --- DYNAMIC BRANDED BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#3e5068]/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-slate-400/15 blur-[100px]" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="p-8">
        <Link href="/" className="flex items-center gap-2 group w-fit">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold transition-transform group-hover:-translate-x-1"
            style={{ 
              backgroundColor: "#3e5068",
              boxShadow: "0 10px 15px -3px rgba(62, 80, 104, 0.3)" 
            }}
          >
            ←
          </div>
          <span className="font-black text-slate-900 text-xs tracking-[0.2em] group-hover:text-[#3e5068] transition-colors">
            BACK TO HOME
          </span>
        </Link>
      </nav>

      {/* --- CONTENT CONTAINER --- */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Brand Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div 
              className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit border"
              style={{ 
                backgroundColor: "rgba(62, 80, 104, 0.05)", 
                borderColor: "rgba(62, 80, 104, 0.1)",
                color: "#3e5068"
              }}
            >
              Onboarding
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Join Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e5068] via-[#5a7293] to-[#809bb4]">
                Support Network.
              </span>
            </h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
              Complete the registration below. Our team uses human-centric infrastructure 
              to process your request securely and reach out within 24 hours.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div 
                className="p-5 bg-white rounded-3xl border border-slate-50"
                style={{ boxShadow: "0 20px 40px -10px rgba(62, 80, 104, 0.08)" }}
              >
                <p className="font-black text-2xl tracking-tight" style={{ color: "#3e5068" }}>24h</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-0.5">Response Time</p>
              </div>
              <div 
                className="p-5 bg-white rounded-3xl border border-slate-50"
                style={{ boxShadow: "0 20px 40px -10px rgba(62, 80, 104, 0.08)" }}
              >
                <p className="font-black text-2xl tracking-tight" style={{ color: "#3e5068" }}>100%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-0.5">Secure Data</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Luxury Branded Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#3e5068]/5 blur-3xl rounded-[3rem] -z-10 scale-90" />
            
            <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-[3.5rem] border border-slate-50 shadow-[0_40px_100px_rgba(62,80,104,0.06)]">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest ml-2" style={{ color: "#3e5068" }}>Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Enter Name"
                          className="w-full p-4 bg-white/50 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest ml-2" style={{ color: "#3e5068" }}>Phone</label>
                        <input
                          type="text"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+61 ..."
                          className="w-full p-4 bg-white/50 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-2" style={{ color: "#3e5068" }}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full p-4 bg-white/50 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-2" style={{ color: "#3e5068" }}>Message</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how we can support you..."
                        className="w-full p-4 bg-white/50 border border-slate-100 rounded-2xl focus:border-[#3e5068] focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all disabled:opacity-70 active:scale-95"
                      style={{ 
                        backgroundColor: "#3e5068",
                        boxShadow: "0 20px 35px -5px rgba(62, 80, 104, 0.2)"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2d3c50")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3e5068")}
                    >
                      {loading ? "System Processing..." : "Send Data Safely"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner"
                      style={{ 
                        backgroundColor: "rgba(62, 80, 104, 0.05)", 
                        color: "#3e5068" 
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight">Success!</h2>
                      <p className="text-slate-400 font-bold mt-2 text-sm leading-normal">Data saved safely to our secure registry system.</p>
                    </div>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#3e5068] transition-colors shadow-lg active:scale-95"
                    >
                      Send New Record
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}