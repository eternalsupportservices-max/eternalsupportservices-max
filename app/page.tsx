"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

/* =========================================================
   FADE UP ANIMATION
========================================================= */

export const FadeUp = ({
  children,
  delay = 0,
}: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   SERVICES DATA
========================================================= */

export const serviceLinks = [
  {
    name: "In-Home Support",
    href: "/services",
    desc: "Personal care and daily living support",
  },
  {
    name: "Personal Care",
    href: "/services",
    desc: "Individual personal care assistance",
  },
  {
    name: "Domestic Assistance and Cleaning",
    href: "/services",
    desc: "Household tasks and cleaning support",
  },
  {
    name: "Community Participation",
    href: "/services",
    desc: "Social, community and recreational support",
  },
  {
    name: "Transport Assistance",
    href: "/services",
    desc: "Appointments, shopping and outings",
  },
  {
    name: "Respite Care",
    href: "/services",
    desc: "Short-term support and caregiver relief",
  },
  {
    name: "Children's Support",
    href: "/services",
    desc: "Support for children and young people",
  },
  {
    name: "Supported Independent Living",
    href: "/services",
    desc: "Available once approved",
  },
  {
    name: "Support Coordination",
    href: "/services",
    desc: "Available once approved",
  },
  {
    name: "Daily Living and Life Skills",
    href: "/services",
    desc: "Available once approved",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div className="bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">

          <a
            href="/referral"
            className="text-xs font-bold hover:text-pink-400 transition-colors"
          >
            📞 0482 911 697
          </a>

          <a
            href="mailto:admin@eternalsupportservice.com.au"
            className="text-xs font-bold hover:text-pink-400 transition-colors"
          >
            ✉ admin@eternalsupportservice.com.au
          </a>

        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-[#F4F0E8]/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-md">

              <Image
                src="/LOGO.png"
                alt="Eternal Support Services Logo"
                fill
                sizes="56px"
                priority
                className="object-cover"
              />

            </div>

            <div className="hidden sm:block">

              <div className="text-lg md:text-xl font-black text-slate-950">
                Eternal
              </div>

              <div className="text-lg md:text-xl font-black text-[#ec4899]">
                Support Services
              </div>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 hover:text-[#6b21a8] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-[11px] font-black uppercase tracking-[0.18em] text-[#6b21a8]"
            >
              Services
            </Link>

            <Link
              href="/#how-it-works"
              className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 hover:text-[#6b21a8] transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="/about"
              className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 hover:text-[#6b21a8] transition-colors"
            >
              About
            </Link>

            <Link
              href="/referral"
              className="px-6 py-3 rounded-xl bg-[#6b21a8] hover:bg-[#581c87] text-white text-[11px] font-black uppercase tracking-wider transition-all shadow-md"
            >
              Make a Referral
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <Link
            href="/referral"
            className="md:hidden px-4 py-3 rounded-xl bg-[#6b21a8] text-white text-[9px] font-black uppercase tracking-wider"
          >
            Referral
          </Link>

        </div>

      </nav>

    </header>
  );
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  );

  return (
    <section className="relative min-h-screen flex items-center pt-44 pb-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <Image
          src="/Personal Care.png"
          alt="Eternal Support Services"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover opacity-75 scale-[1.02]"
        />

        <div className="absolute inset-0 bg-[#F4F0E8]/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8]/45 via-[#F4F0E8]/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F4F0E8] via-[#F4F0E8]/40 to-transparent" />

      </div>

      {/* DECORATIVE GRADIENTS */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none z-[1]"
      >

        <div className="absolute top-[10%] left-[-5%] w-[35rem] h-[35rem] bg-purple-500/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-[5%] right-[-5%] w-[30rem] h-[30rem] bg-pink-500/10 blur-[140px] rounded-full" />

      </motion.div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

        <div className="max-w-6xl pt-24 sm:pt-28 md:pt-32">

          {/* NDIS LOGO */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              top-[115px]
              right-[30px]
              sm:right-[50px]
              md:right-[70px]
              lg:right-[100px]
              xl:right-[130px]
              z-20
              w-[120px]
              sm:w-[150px]
              md:w-[190px]
              lg:w-[230px]
              xl:w-[260px]
            "
          >

            <Image
              src="/NDIS.png"
              alt="NDIS"
              width={612}
              height={323}
              priority
              className="
                w-full
                h-auto
                object-contain
                opacity-100
                mix-blend-multiply
                drop-shadow-[0_12px_25px_rgba(0,0,0,0.12)]
              "
            />

          </motion.div>

          {/* TITLE */}
          <FadeUp delay={0.2}>

            <h1 className="text-[58px] sm:text-[75px] md:text-[95px] lg:text-[105px] xl:text-[115px] font-black leading-[0.82] tracking-[-0.07em] text-slate-950">

              Support that

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#b026d3] to-[#ec4899]">
                puts you first.
              </span>

            </h1>

          </FadeUp>

          {/* DESCRIPTION */}
          <FadeUp delay={0.3}>

            <p className="mt-10 max-w-3xl text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
              Empowering people of all abilities to live independently, confidently and on their own terms through personalised, compassionate support.
            </p>

          </FadeUp>

          {/* BUTTONS */}
          <FadeUp delay={0.4}>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                href="/referral"
                className="inline-flex justify-center items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-[#6b21a8] to-[#ec4899] text-white font-black text-xs uppercase tracking-[0.18em] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Make a Referral →
              </Link>

              <a
                href="/referral"
                className="inline-flex justify-center items-center px-10 py-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-900 font-black text-xs uppercase tracking-[0.18em] shadow-lg hover:-translate-y-1 transition-all"
              >
                Contact Us Today
              </a>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  );
};

/* =========================================================
   WHO WE SUPPORT
========================================================= */

const WhoWeSupport = () => {
  return (
    <section className="relative min-h-[480px] flex items-center py-28 md:py-32 overflow-hidden">

      <div className="absolute inset-0 z-0 overflow-hidden">

        <Image
          src="/Domestic Assistance.png"
          alt="People receiving personalised support"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-[95%]"
        />

        <div className="absolute inset-0 bg-[#F4F0E8]/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8]/95 via-[#F4F0E8]/75 to-[#F4F0E8]/35" />

        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-purple-400/10 blur-[130px]" />

        <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-pink-400/10 blur-[130px]" />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F4F0E8] to-transparent" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

        <FadeUp>

          <div className="max-w-4xl">

            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#d97706] mb-6">
              Who We Support
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-950 tracking-[-0.055em] leading-[0.95] max-w-4xl">
              Support designed around you.
            </h2>

            <p className="mt-7 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
              We support participants with different needs, goals,
              preferences and levels of independence. Our approach
              is personalised, respectful and focused on helping
              each person live with greater confidence and choice.
            </p>

          </div>

        </FadeUp>

      </div>

    </section>
  );
};

/* =========================================================
   SERVICES
========================================================= */

const Services = () => {

  const serviceItems = [
    {
      title: "In-Home Support",
      img: "/Daily Living.png",
      href: "/services",
      desc: "Personal care, daily living support and assistance at home.",
    },
    {
      title: "Personal Care",
      img: "/Personal Care.png",
      href: "/services",
      desc: "Respectful and personalised assistance with personal care.",
    },
    {
      title: "Domestic Assistance and Cleaning",
      img: "/Domestic Assistance.png",
      href: "/services",
      desc: "Household tasks, cleaning and maintaining a comfortable home.",
    },
    {
      title: "Community Participation",
      img: "/Community Participation.png",
      href: "/services",
      desc: "Social activities, community access, shopping and appointments.",
    },
    {
      title: "Transport Assistance",
      img: "/Transport Assistance.png",
      href: "/services",
      desc: "Transport for appointments, shopping, outings and activities.",
    },
    {
      title: "Respite Care",
      img: "/Respite Care.png",
      href: "/services",
      desc: "Flexible short-term support and caregiver relief.",
    },
    {
      title: "Children's Support",
      img: "/Children Services.png",
      href: "/services",
      desc: "Individualised support for children and young people.",
    },
    {
      title: "Supported Independent Living(SIL)",
      img: "/Supported Independent Living.png",
      href: "/services",
      desc: "Available once approved.",
    },
    {
      title: "Support Coordination",
      img: "/Support Coordination.png",
      href: "/services",
      desc: "We help participants understand and use their NDIS plan with confidence.",
    },
    {
      title: "Daily Living and Life Skills",
      img: "/Home pages.png",
      href: "/services",
      desc: "We support participants to build confidence and independence in everyday life.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-[#F4F0E8]"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <FadeUp>

          <div className="mb-20">

            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d97706] mb-5">
              Our Services
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] tracking-tighter">

              Practical support.

              <br />

              Personalised care.

            </h2>

            <p className="mt-7 max-w-2xl text-slate-500 text-lg leading-relaxed">
              Our services are designed to support everyday
              independence, participation and wellbeing.
            </p>

          </div>

        </FadeUp>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {serviceItems.map(
            (service, index) => (

              <Link
                href={service.href}
                key={index}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full"
                >

                  {/* IMAGE */}
                  <div className="h-56 relative overflow-hidden bg-slate-100">

                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#6b21a8] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="mt-6 text-[10px] font-black uppercase tracking-widest text-[#d97706]">
                      Explore Service →
                    </div>

                  </div>

                </motion.div>

              </Link>

            )
          )}

        </div>

      </div>

    </section>
  );
};

/* =========================================================
   HOW IT WORKS
========================================================= */

const HowItWorks = () => {

  const steps = [
    {
      number: "01",
      title: "Contact us or submit a referral",
      description:
        "Get in touch with our team or complete a referral so we can understand how we can support you.",
      icon: "📞",
    },
    {
      number: "02",
      title: "We discuss your needs",
      description:
        "We discuss the participant's needs, goals, preferences and preferred supports.",
      icon: "💬",
    },
    {
      number: "03",
      title: "We match a suitable worker",
      description:
        "We work to match the participant with a suitable support worker based on their needs and preferences.",
      icon: "🤝",
    },
    {
      number: "04",
      title: "We arrange commencement",
      description:
        "We arrange the service agreement and agree on a suitable commencement date.",
      icon: "📅",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-32 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <Image
          src="/How-It-Works.png"
          alt="How It Works"
          fill
          loading="eager"
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-[15%]"
        />

        <div className="absolute inset-0 bg-white/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40" />

        <div className="absolute top-[-10rem] left-[-10rem] w-[32rem] h-[32rem] rounded-full bg-purple-400/10 blur-[140px]" />

        <div className="absolute bottom-[-10rem] right-[-10rem] w-[32rem] h-[32rem] rounded-full bg-pink-400/10 blur-[140px]" />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp>

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#d97706] mb-5">
              How It Works
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-[-0.05em] leading-[0.92]">

              Simple steps.

              <br />

              Personalised support.

            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Starting support should be straightforward.
              Our team guides you through each step.
            </p>

          </div>

        </FadeUp>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map(
            (step, index) => (

              <FadeUp
                key={index}
                delay={index * 0.1}
              >

                <div className="relative h-full p-8 rounded-[2rem] bg-white/80 backdrop-blur-md border border-white/70 shadow-sm hover:border-purple-200 hover:shadow-xl transition-all">

                  <div className="flex items-center justify-between mb-8">

                    <span className="text-4xl">
                      {step.icon}
                    </span>

                    <span className="text-5xl font-black text-purple-100">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="text-xl font-black text-slate-950 leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </FadeUp>

            )
          )}

        </div>

      </div>

    </section>
  );
};

/* =========================================================
   CTA
========================================================= */

export const CTA = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#F4F0E8]">

      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#6b21a8] via-[#b026d3] to-[#ec4899] p-12 md:p-20 text-center text-white shadow-2xl">

        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full" />

        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-950/20 blur-[100px] rounded-full" />

        <FadeUp>

          <div className="relative z-10">

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Ready to get started?
            </h2>

            <p className="max-w-2xl mx-auto mt-7 text-purple-100 text-base md:text-lg leading-relaxed">
              Tell us about your support needs and our team
              can discuss the next steps with you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <Link
                href="/referral"
                className="px-10 py-5 rounded-2xl bg-white text-[#6b21a8] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Make a Referral
              </Link>

              <a
                href="mailto:admin@eternalsupportservice.com.au"
                className="px-10 py-5 rounded-2xl bg-white/10 border border-white/30 text-white font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Contact Us Today
              </a>

            </div>

          </div>

        </FadeUp>

      </div>

    </section>
  );
};

/* =========================================================
   SMART FOOTER
========================================================= */

export const SmartFooter = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* DECORATIVE BACKGROUND */}
      <div className="absolute top-0 left-[-10%] w-[35rem] h-[35rem] bg-purple-900/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-[-10%] w-[35rem] h-[35rem] bg-pink-900/10 blur-[140px] rounded-full pointer-events-none" />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative z-10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* =================================================
                BRAND
            ================================================= */}

            <div>

              <div className="flex items-center gap-3">

                {/* ============================================
                    FOOTER LOGO
                    50px × 50px
                ============================================ */}

                <Link
                  href="/"
                  className="relative w-[50px] h-[50px] rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0 block"
                >

                  <Image
                    src="/LOGO.png"
                    alt="Eternal Support Services"
                    fill
                    sizes="50px"
                    className="object-cover"
                  />

                </Link>

                {/* BRAND NAME */}
                <div className="leading-tight">

                  <div className="text-lg font-black text-white">
                    Eternal
                  </div>

                  <div className="text-lg font-black text-[#ec4899]">
                    Support Services
                  </div>

                </div>

              </div>

              <p className="mt-7 text-sm text-slate-400 leading-relaxed max-w-sm">
                Providing personalised support focused on
                independence, participation, choice and
                individual needs.
              </p>

              {/* PROVIDER STATUS */}
              <div className="mt-7 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-slate-800">

                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400">
                  ✓
                </span>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500 font-black">
                    Provider Status
                  </p>

                  <p className="text-xs text-white font-bold mt-0.5">
                    NDIS Registered Provider
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">
                Services
              </p>

              <div className="flex flex-col gap-3">

                {serviceLinks
                  .slice(0, 7)
                  .map((service, index) => (

                    <Link
                      key={index}
                      href={service.href}
                      className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all"
                    >
                      {service.name}
                    </Link>

                  ))}

              </div>

            </div>

            {/* =================================================
                INFORMATION
            ================================================= */}

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">
                Information
              </p>

              <div className="flex flex-col gap-3">

                <Link
                  href="/"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/#how-it-works"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  How It Works
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  About Us
                </Link>

                <Link
                  href="/referral"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Make a Referral
                </Link>

                <Link
                  href="/privacy"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/feedback-complaints"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Feedback & Complaints
                </Link>

                <Link
                  href="/terms"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Terms & Conditions
                </Link>

              </div>

            </div>

            {/* =================================================
                CONTACT
            ================================================= */}

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">
                Contact Us
              </p>

              <div className="space-y-6">

                {/* PHONE */}
                <div>

                  <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-600 mb-2 font-black">
                    Phone
                  </span>

                  <a
                    href="tel:0482911697"
                    className="flex items-center gap-3 text-white font-bold hover:text-pink-400 transition-colors"
                  >

                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-purple-500/10">
                      📞
                    </span>

                    0482 911 697

                  </a>

                </div>

                {/* EMAIL */}
                <div>

                  <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-600 mb-2 font-black">
                    Email
                  </span>

                  <a
                    href="mailto:admin@eternalsupportservice.com.au"
                    className="flex items-start gap-3 text-white font-bold hover:text-pink-400 transition-colors break-all"
                  >

                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-pink-500/10 flex-shrink-0">
                      ✉
                    </span>

                    <span className="pt-1">
                      admin@eternalsupportservice.com.au
                    </span>

                  </a>

                </div>

                {/* LOCATION */}
                <div>

                  <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-600 mb-2 font-black">
                    Location
                  </span>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Melbourne Metro,
                    <br />
                    Victoria, Australia
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            FEEDBACK & COMPLAINTS
        =================================================== */}

        <div className="border-t border-b border-slate-800">

          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div>

              <div className="flex items-center gap-3">

                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-slate-800">
                  💬
                </span>

                <h4 className="text-base font-black text-white">
                  Your feedback matters.
                </h4>

              </div>

              <p className="mt-3 md:ml-[52px] text-sm text-slate-500 max-w-2xl leading-relaxed">
                We welcome feedback about our services and
                encourage participants, families and carers
                to raise any concerns with us.
              </p>

            </div>

            <Link
              href="/feedback-complaints"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.15em] hover:bg-pink-50 hover:text-[#6b21a8] transition-all whitespace-nowrap"
            >
              Feedback & Complaints →
            </Link>

          </div>

        </div>

        {/* ===================================================
            COPYRIGHT
        =================================================== */}

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.15em] text-center md:text-left">
            © 2026 Eternal Support Services. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[9px] text-slate-600 uppercase tracking-[0.15em] font-bold">

            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/feedback-complaints"
              className="hover:text-white transition-colors"
            >
              Feedback & Complaints
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function EternalSupportPage() {

  return (

    <main className="bg-[#F4F0E8] selection:bg-[#6b21a8] selection:text-white antialiased min-h-screen">

      <Navbar />

      <Hero />

      <WhoWeSupport />

      <Services />

      <HowItWorks />

      <CTA />

      <SmartFooter />

    </main>

  );
}