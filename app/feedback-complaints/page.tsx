 "use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar, SmartFooter, FadeUp } from "@/app/page";

/* =========================================================
   FEEDBACK & COMPLAINTS PAGE
   Clear, respectful and participant-focused information.
========================================================= */

const steps = [
  {
    number: "01",
    title: "Tell us what happened",
    description:
      "Share your feedback, concern or complaint with us. You can contact us by phone, email or through the form on this page.",
    icon: "💬",
  },
  {
    number: "02",
    title: "We listen and understand",
    description:
      "We will listen respectfully, clarify the information provided and seek to understand the issue and what outcome you are looking for.",
    icon: "👂",
  },
  {
    number: "03",
    title: "We review the concern",
    description:
      "We consider the information and, where appropriate, discuss the matter with the relevant people so it can be addressed fairly.",
    icon: "🔎",
  },
  {
    number: "04",
    title: "We respond and follow up",
    description:
      "We aim to communicate the outcome and any agreed next steps clearly and respectfully.",
    icon: "🤝",
  },
];

const rights = [
  {
    icon: "🗣️",
    title: "Your Voice Matters",
    text: "You can tell us what you think about our services, your experience or how we can improve.",
  },
  {
    icon: "💜",
    title: "Be Heard Respectfully",
    text: "Feedback and complaints will be treated respectfully and taken seriously.",
  },
  {
    icon: "🔐",
    title: "Privacy",
    text: "We handle information provided to us in line with our privacy and information-handling responsibilities.",
  },
  {
    icon: "🤝",
    title: "Support Person",
    text: "You may choose to have a trusted person assist you when providing feedback or making a complaint.",
  },
];

const feedbackTypes = [
  "Compliments about our staff or services",
  "Suggestions for improving our services",
  "Concerns about the support you receive",
  "Concerns about communication or service arrangements",
  "Concerns about participant experience",
  "Complaints about a service or interaction",
  "Feedback about accessibility or inclusion",
  "Other matters you would like us to know about",
];

export default function FeedbackComplaintsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-slate-950 antialiased">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[680px] flex items-center pt-44 pb-24 overflow-hidden">

        <div className="absolute inset-0 z-0 overflow-hidden">

          <Image
            src="/Community Participation.png"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover object-center opacity-[18%]"
          />

          <div className="absolute inset-0 bg-[#F4F0E8]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8]/95 via-[#F4F0E8]/80 to-[#F4F0E8]/45" />

          <div className="absolute top-[-10rem] left-[-8rem] w-[35rem] h-[35rem] rounded-full bg-purple-400/10 blur-[140px]" />

          <div className="absolute bottom-[-10rem] right-[-8rem] w-[35rem] h-[35rem] rounded-full bg-pink-400/10 blur-[140px]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

          <div className="max-w-5xl">

            <FadeUp>

              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200 text-[#6b21a8] text-[10px] font-black uppercase tracking-[0.25em] mb-8">

                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />

                Feedback &amp; Complaints

              </div>

            </FadeUp>

            <FadeUp delay={0.1}>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-black leading-[0.88] tracking-[-0.065em] text-slate-950">

                Your feedback.
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#b026d3] to-[#ec4899]">
                  Your voice matters.
                </span>

              </h1>

            </FadeUp>

            <FadeUp delay={0.2}>

              <p className="mt-9 max-w-3xl text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">

                We welcome feedback, suggestions, compliments and
                complaints. Your feedback helps us understand your
                experience and identify opportunities to improve.

              </p>

            </FadeUp>

            <FadeUp delay={0.3}>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <a
                  href="#submit-feedback"
                  className="inline-flex justify-center items-center px-9 py-5 rounded-2xl bg-gradient-to-r from-[#6b21a8] to-[#ec4899] text-white font-black text-xs uppercase tracking-[0.18em] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  Give Feedback →
                </a>

                <a
                  href="tel:0482911697"
                  className="inline-flex justify-center items-center px-9 py-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 font-black text-xs uppercase tracking-[0.18em] shadow-lg hover:-translate-y-1 transition-all"
                >
                  Call Us Today
                </a>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative py-28 bg-white overflow-hidden">

        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-purple-100/40 blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="max-w-4xl">

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#d97706] mb-5">
                We Want To Hear From You
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">

                Good experiences matter.
                <br />
                So do concerns.

              </h2>

              <p className="mt-7 max-w-3xl text-lg text-slate-500 leading-relaxed">

                Whether you want to tell us about something that went
                well, suggest an improvement or raise a concern, we
                encourage you to speak with us. We are committed to
                listening and responding respectfully.

              </p>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* =====================================================
          WHAT CAN YOU TELL US
      ===================================================== */}

      <section className="relative py-32 bg-[#F4F0E8] overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-[-12rem] left-[-10rem] w-[35rem] h-[35rem] rounded-full bg-purple-400/10 blur-[150px]" />

          <div className="absolute bottom-[-12rem] right-[-10rem] w-[35rem] h-[35rem] rounded-full bg-pink-400/10 blur-[150px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="max-w-3xl mb-16">

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#d97706] mb-5">
                Feedback Is Welcome
              </p>

              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">

                Tell us what
                <br />
                matters to you.

              </h2>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed">

                You can contact us about any aspect of your experience
                with Eternal Support Services.

              </p>

            </div>

          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {feedbackTypes.map((item, index) => (

              <FadeUp
                key={item}
                delay={index * 0.05}
              >

                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full bg-white/85 backdrop-blur-md border border-white rounded-[1.75rem] p-7 shadow-sm hover:shadow-lg transition-all"
                >

                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6b21a8] flex items-center justify-center font-black mb-5">
                    ✓
                  </div>

                  <p className="text-sm font-bold text-slate-700 leading-relaxed">
                    {item}
                  </p>

                </motion.div>

              </FadeUp>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          RIGHTS / APPROACH
      ===================================================== */}

      <section className="relative py-32 overflow-hidden bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="max-w-3xl mb-16">

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#d97706] mb-5">
                Our Commitment
              </p>

              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">

                Listening with
                <br />
                respect.

              </h2>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed">

                We aim to make it straightforward for participants,
                families, representatives and others to provide
                feedback or raise concerns.

              </p>

            </div>

          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {rights.map((item, index) => (

              <FadeUp
                key={item.title}
                delay={index * 0.07}
              >

                <motion.div
                  whileHover={{ y: -7 }}
                  className="h-full rounded-[2rem] bg-[#F8F5F9] border border-slate-100 p-8 hover:border-purple-200 hover:shadow-xl transition-all"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm mb-7">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                    {item.text}
                  </p>

                </motion.div>

              </FadeUp>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          HOW WE HANDLE FEEDBACK
      ===================================================== */}

      <section className="relative py-32 bg-[#F4F0E8] overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/Community Participation.png"
            alt=""
            fill
            sizes="100vw"
            quality={75}
            className="object-cover object-center opacity-[12%]"
          />

          <div className="absolute inset-0 bg-[#F4F0E8]/78" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8]/95 via-[#F4F0E8]/80 to-[#F4F0E8]/50" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="max-w-3xl mb-16">

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#d97706] mb-5">
                Our Process
              </p>

              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">

                What happens
                <br />
                after you contact us?

              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">

                We aim to make the process clear, respectful and
                focused on understanding the issue and identifying
                appropriate next steps.

              </p>

            </div>

          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {steps.map((step, index) => (

              <FadeUp
                key={step.number}
                delay={index * 0.08}
              >

                <div className="h-full rounded-[2rem] bg-white/85 backdrop-blur-md border border-white p-8 shadow-sm">

                  <div className="flex items-center justify-between mb-8">

                    <span className="text-4xl">
                      {step.icon}
                    </span>

                    <span className="text-5xl font-black text-purple-100">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="text-xl font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </FadeUp>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT OPTIONS
      ===================================================== */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="text-center max-w-3xl mx-auto mb-16">

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#d97706] mb-5">
                Contact Us
              </p>

              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">

                Choose the way
                <br />
                that works for you.

              </h2>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed">

                You can contact our team directly or use the feedback
                form below.

              </p>

            </div>

          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            <motion.a
              whileHover={{ y: -6 }}
              href="mailto:admin@eternalsupportservice.com.au?subject=Feedback%20or%20Complaint"
              className="rounded-[2rem] bg-[#F8F5F9] border border-slate-100 p-8 hover:shadow-xl transition-all"
            >

              <div className="text-3xl mb-5">
                📞
              </div>

              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Phone
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                0482 911 697
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Speak with our team about your feedback or concern.
              </p>

            </motion.a>

            <motion.a
              whileHover={{ y: -6 }}
              href="mailto:admin@eternalsupportservice.com.au?subject=Feedback%20or%20Complaint"
              className="rounded-[2rem] bg-[#F8F5F9] border border-slate-100 p-8 hover:shadow-xl transition-all"
            >

              <div className="text-3xl mb-5">
                ✉️
              </div>

              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Email
              </p>

              <h3 className="mt-2 text-xl md:text-2xl font-black text-slate-950 break-all">
                admin@eternalsupportservice.com.au
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Send your feedback or complaint by email.
              </p>

            </motion.a>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEEDBACK FORM
      ===================================================== */}

      <section
        id="submit-feedback"
        className="relative py-32 bg-[#F4F0E8] overflow-hidden"
      >

        <div className="absolute top-[-10rem] right-[-8rem] w-[35rem] h-[35rem] rounded-full bg-purple-400/10 blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="text-center mb-14">

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#d97706] mb-5">
                Online Feedback
              </p>

              <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                Tell us what happened.
              </h2>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Complete the form below and our team can review your message.
              </p>

            </div>

          </FadeUp>

          <FadeUp delay={0.1}>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-7 md:p-10"
            >

              {submitted ? (

                <div className="py-14 text-center">

                  <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 text-[#6b21a8] flex items-center justify-center text-2xl font-black">
                    ✓
                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    Thank you for your feedback.
                  </h3>

                  <p className="mt-4 max-w-xl mx-auto text-slate-500 leading-relaxed">
                    Your message has been prepared for submission.
                    Connect this form to your preferred backend or
                    email service to receive submissions.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-7 py-3 rounded-xl bg-[#6b21a8] text-white text-xs font-black uppercase tracking-widest"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <div className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>

                      <label
                        htmlFor="name"
                        className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="email"
                        className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                      />

                    </div>

                  </div>

                  <div>

                    <label
                      htmlFor="phone"
                      className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="type"
                      className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2"
                    >
                      Type of Message
                    </label>

                    <select
                      id="type"
                      name="type"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                    >

                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="feedback">
                        General Feedback
                      </option>

                      <option value="compliment">
                        Compliment
                      </option>

                      <option value="suggestion">
                        Suggestion
                      </option>

                      <option value="complaint">
                        Complaint
                      </option>

                      <option value="concern">
                        Concern
                      </option>

                    </select>

                  </div>

                  <div>

                    <label
                      htmlFor="message"
                      className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Please tell us about your feedback, concern or complaint..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none resize-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                    />

                  </div>

                  <div className="rounded-xl bg-purple-50 border border-purple-100 p-4 text-sm text-slate-600 leading-relaxed">
                    Please avoid including unnecessary sensitive or private
                    information in this form. We may contact you if we need
                    further information to understand your message.
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-[#6b21a8] to-[#ec4899] px-6 py-5 text-white text-xs font-black uppercase tracking-[0.18em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Submit Feedback →
                  </button>

                </div>

              )}

            </form>

          </FadeUp>

        </div>

      </section>

      {/* =====================================================
          EXTERNAL / ESCALATION INFORMATION
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 md:px-12">

          <FadeUp>

            <div className="rounded-[2rem] bg-[#F8F5F9] border border-slate-100 p-8 md:p-10">

              <div className="flex items-start gap-5">

                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 text-[#6b21a8] flex items-center justify-center text-xl">
                  ℹ️
                </div>

                <div>

                  <h3 className="text-xl font-black text-slate-950">
                    If you need further assistance
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-slate-500 leading-relaxed">

                    If you are not comfortable raising a concern directly
                    with us, or if you need help understanding your options,
                    you can seek assistance from a support person, advocate
                    or the relevant external complaints body. If your
                    concern involves an immediate safety risk or emergency,
                    contact the appropriate emergency service.

                  </p>

                </div>

              </div>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative py-32 px-6 md:px-12 bg-[#F4F0E8] overflow-hidden">

        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#6b21a8] via-[#b026d3] to-[#ec4899] p-12 md:p-20 text-center text-white shadow-2xl">

          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full" />

          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-950/20 blur-[100px] rounded-full" />

          <FadeUp>

            <div className="relative z-10">

              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-100 mb-5">
                We Are Listening
              </p>

              <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.9]">

                Have something
                <br />
                to tell us?

              </h2>

              <p className="max-w-2xl mx-auto mt-7 text-purple-100 text-base md:text-lg leading-relaxed">

                Your feedback can help us understand what is working
                well and where we can improve.

              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                <a
                  href="#submit-feedback"
                  className="px-10 py-5 rounded-2xl bg-white text-[#6b21a8] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Give Feedback
                </a>

                <a
                  href="tel:0482911697"
                  className="px-10 py-5 rounded-2xl bg-white/10 border border-white/30 text-white font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  Contact Us Today
                </a>

              </div>

            </div>

          </FadeUp>

        </div>

      </section>

      <SmartFooter />

    </main>
  );
}
