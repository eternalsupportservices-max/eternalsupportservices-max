"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", text: "Feedback submitted successfully!" });
        setForm({
          name: "",
          email: "",
          rating: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", text: data.message || "Failed to submit feedback" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: "Something went wrong. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0a14] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-black py-20 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Decorative Cinematic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-8 md:p-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-purple-400 bg-clip-text text-transparent">
            Customer Feedback
          </h1>
          <p className="text-slate-400/80 text-sm mt-2">
            Your insights drive our continuous pipeline optimization.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-purple-500/50 rounded-2xl p-4 text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-purple-500/50 rounded-2xl p-4 text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
              />
            </div>
          </div>

          {/* Rating Dropdown */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Experience Rating</label>
            <div className="relative">
              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                required
                className="w-full bg-[#161224] border border-white/[0.08] focus:border-purple-500/50 rounded-2xl p-4 text-white text-sm focus:outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#120e1f] text-slate-500">Select Rating</option>
                <option value="5 Stars" className="bg-[#120e1f]">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4 Stars" className="bg-[#120e1f]">⭐⭐⭐⭐ Good</option>
                <option value="3 Stars" className="bg-[#120e1f]">⭐⭐⭐ Average</option>
                <option value="2 Stars" className="bg-[#120e1f]">⭐⭐ Poor</option>
                <option value="1 Star" className="bg-[#120e1f]">⭐ Very Poor</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Write your feedback</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your experience..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-purple-500/50 rounded-2xl p-4 text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all focus:ring-4 focus:ring-purple-500/10 resize-none"
            />
          </div>

          {/* Dynamic Status Notifications Instead of Alerts */}
          <AnimatePresence mode="wait">
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 ${
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

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            <span className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting Infrastructure Logs...
                </>
              ) : (
                "Submit Feedback"
              )}
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}