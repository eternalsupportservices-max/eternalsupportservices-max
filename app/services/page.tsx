"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    title: "In-Home Support",
    image: "/In-Home.png",
    description:
      "Personalised support that helps participants manage daily activities and live comfortably and independently at home.",
    features: [
      "Daily living assistance",
      "Personalised support",
      "Home-based assistance",
      "Independence and choice",
    ],
  },
  {
    title: "Personal Care",
    image: "/Personal Care.png",
    description:
      "Respectful and individualised assistance with personal care routines while maintaining dignity, privacy and choice.",
    features: [
      "Personal hygiene",
      "Dressing assistance",
      "Daily routines",
      "Respectful personal support",
    ],
  },
  {
    title: "Domestic Assistance and Cleaning",
    image: "/Domestic Assistance.png",
    description:
      "Practical household assistance to help maintain a clean, safe and comfortable living environment.",
    features: [
      "General cleaning",
      "Laundry assistance",
      "Household tasks",
      "Home organisation",
    ],
  },
  {
    title: "Community Participation",
    image: "/Community Participation.png",
    description:
      "Support to participate in social, recreational and community activities while building confidence and independence.",
    features: [
      "Community activities",
      "Social participation",
      "Shopping",
      "Appointments and outings",
    ],
  },
  {
    title: "Transport Assistance",
    image: "/Transport Assistance.jpg",
    description:
      "Reliable support with transport to appointments, shopping, community activities and other important outings.",
    features: [
      "Medical appointments",
      "Shopping trips",
      "Community access",
      "Recreational activities",
    ],
  },
  {
    title: "Respite Care",
    image: "/Respite Care.png",
    description:
      "Short-term support designed to provide participants with quality care while giving families and carers valuable time to rest.",
    features: [
      "Short-term support",
      "Flexible assistance",
      "Participant-focused care",
      "Carer relief",
    ],
  },
  {
    title: "Children's Support",
    image: "/Children Services.png",
    description:
      "Individualised support for children and young people, helping them participate, develop confidence and enjoy everyday activities.",
    features: [
      "Individual support",
      "Community participation",
      "Daily activities",
      "Social development",
    ],
  },
  {
    title: "Supported Independent Living",
    image: "/Supported Independent Living.png",
    description:
      "Support designed to help participants develop greater independence and confidence in their everyday lives.",
    features: [
      "Daily living support",
      "Independence development",
      "Household routines",
      "Individualised assistance",
    ],
  },
  {
    title: "Support Coordination",
    image: "/Support Coordination.png",
    description:
      "Support to help participants understand their NDIS plan, connect with services and make informed choices.",
    features: [
      "Understanding your plan",
      "Service connections",
      "Support planning",
      "Participant choice",
    ],
  },
  {
    title: "Daily Living and Life Skills",
    image: "/Daily Living.png",
    description:
      "Practical support that helps participants build confidence, develop everyday skills and work towards greater independence.",
    features: [
      "Daily routines",
      "Life skills",
      "Confidence building",
      "Independent living skills",
    ],
  },
];

/* =========================================================
   ANIMATION
========================================================= */

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeUp = ({ children, delay = 0 }: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}

      <div className="bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">

          <a
            href="tel:0482911697"
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
                src="/Eternal support.png"
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

          {/* MOBILE HOME BUTTON */}

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

const ServicesHero = () => {
  return (
    <section className="relative pt-48 pb-28 overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <Image
          src="/Home.png"
          alt="Eternal Support Services"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[#F4F0E8]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8]/95 via-[#F4F0E8]/75 to-transparent" />

      </div>

      {/* DECORATIVE GLOW */}

      <div className="absolute top-20 left-[-10rem] w-[35rem] h-[35rem] bg-purple-400/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-[-10rem] w-[35rem] h-[35rem] bg-pink-400/10 blur-[140px] rounded-full" />

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp>

          <div className="max-w-4xl">

            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#d97706] mb-6">
              Our Services
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[0.85] tracking-[-0.07em] text-slate-950">

              Support built

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#b026d3] to-[#ec4899]">
                around you.
              </span>

            </h1>

            <p className="mt-9 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
              Our personalised NDIS support services are designed
              to help participants live with greater independence,
              confidence, choice and participation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <Link
                href="/referral"
                className="inline-flex justify-center items-center px-9 py-5 rounded-2xl bg-gradient-to-r from-[#6b21a8] to-[#ec4899] text-white text-xs font-black uppercase tracking-[0.18em] shadow-xl hover:-translate-y-1 transition-all"
              >
                Make a Referral →
              </Link>

              <a
                href="tel:0482911697"
                className="inline-flex justify-center items-center px-9 py-5 rounded-2xl bg-white/90 border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-[0.18em] shadow-md hover:-translate-y-1 transition-all"
              >
                Contact Us
              </a>

            </div>

          </div>

        </FadeUp>

      </div>

    </section>
  );
};

/* =========================================================
   SERVICES GRID
========================================================= */

const ServicesGrid = () => {
  return (
    <section className="relative py-28 bg-[#F4F0E8]">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp>

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d97706] mb-5">
              What We Provide
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.06em] leading-[0.9]">
              Our support services.
            </h2>

            <p className="mt-7 text-lg text-slate-500 leading-relaxed">
              Explore our range of support services and find
              the assistance that best matches your needs,
              goals and preferences.
            </p>

          </div>

        </FadeUp>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => (

            <FadeUp
              key={service.title}
              delay={(index % 3) * 0.08}
            >

              
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-shadow"
                >

                  {/* IMAGE */}

                  <div className="relative h-60 overflow-hidden bg-slate-100">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* NUMBER */}

                    <div className="absolute top-5 left-5">

                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-[#6b21a8] text-xs font-black shadow-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-8">

                    <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-[#6b21a8] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                      {service.description}
                    </p>

                    {/* FEATURES */}

                    <div className="mt-6 space-y-2">

                      {service.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-3 text-xs font-bold text-slate-600"
                        >

                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-50 text-[#6b21a8]">
                            ✓
                          </span>

                          {feature}

                        </div>

                      ))}

                    </div>

                    {/* LINK */}

                    <div className="mt-7 pt-5 border-t border-slate-100">

                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d97706] group-hover:text-[#6b21a8] transition-colors">
                        Explore Service →
                      </span>

                    </div>

                  </div>

                </motion.article>

             

            </FadeUp>

          ))}

        </div>

      </div>

    </section>
  );
};

/* =========================================================
   WHY CHOOSE US
========================================================= */

const WhyChooseUs = () => {

  const reasons = [
    {
      icon: "❤️",
      title: "Person-Centred",
      text: "Our support is designed around each participant's individual needs, goals and preferences.",
    },
    {
      icon: "🤝",
      title: "Respectful Support",
      text: "We value dignity, choice, privacy and independence in every interaction.",
    },
    {
      icon: "🌱",
      title: "Building Independence",
      text: "We encourage participants to develop confidence and skills for everyday life.",
    },
    {
      icon: "✨",
      title: "Individual Choice",
      text: "We listen to participants and work with them to achieve meaningful outcomes.",
    },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <FadeUp>

          <div className="max-w-3xl mx-auto text-center mb-16">

            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d97706] mb-5">
              Our Approach
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-[-0.05em]">
              More than support.
              <br />
              A partnership.
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              We believe good support starts with listening,
              understanding and respecting each person's
              individual goals and choices.
            </p>

          </div>

        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((reason, index) => (

            <FadeUp
              key={reason.title}
              delay={index * 0.1}
            >

              <div className="h-full p-8 rounded-[2rem] bg-[#F4F0E8] border border-slate-100">

                <div className="text-4xl mb-6">
                  {reason.icon}
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  {reason.text}
                </p>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>

    </section>
  );
};

/* =========================================================
   CTA
========================================================= */

const CTA = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#F4F0E8]">

      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#6b21a8] via-[#b026d3] to-[#ec4899] px-8 py-16 md:px-20 md:py-20 text-center text-white shadow-2xl">

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-950/20 blur-[120px] rounded-full" />

        <FadeUp>

          <div className="relative z-10">

            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-100 mb-6">
              Let's Get Started
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-none">
              Find the right
              <br />
              support for you.
            </h2>

            <p className="max-w-2xl mx-auto mt-7 text-purple-100 text-base md:text-lg leading-relaxed">
              Contact our team to discuss your support needs,
              goals and preferences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <Link
                href="/referral"
                className="px-10 py-5 rounded-2xl bg-white text-[#6b21a8] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Make a Referral
              </Link>

              <a
                href="tel:0482911697"
                className="px-10 py-5 rounded-2xl bg-white/10 border border-white/30 text-white font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Call 0482 911 697
              </a>

            </div>

          </div>

        </FadeUp>

      </div>

    </section>
  );
};

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-3">

              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white">

                <Image
                  src="/Eternal support.png"
                  alt="Eternal Support Services"
                  fill
                  sizes="56px"
                  className="object-cover"
                />

              </div>

              <div>

                <div className="text-xl font-black">
                  Eternal
                </div>

                <div className="text-xl font-black text-[#ec4899]">
                  Support Services
                </div>

              </div>

            </div>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed">
              Providing personalised support focused on
              independence, participation, choice and
              individual needs.
            </p>

          </div>

          {/* SERVICES */}

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-6">
              Services
            </p>

            <div className="space-y-3">

             

            </div>

          </div>

          {/* INFORMATION */}

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-6">
              Information
            </p>

            <div className="space-y-3">

              <Link
                href="/"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/about"
                className="block text-sm text-slate-400 hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/referral"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Make a Referral
              </Link>

              <Link
                href="/privacy"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block text-sm text-slate-400 hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-6">
              Contact Us
            </p>

            <div className="space-y-5">

              <div>

                <p className="text-[9px] uppercase tracking-widest text-slate-600 font-black mb-2">
                  Phone
                </p>

                <a
                  href="tel:0482911697"
                  className="text-white font-bold hover:text-pink-400 transition-colors"
                >
                  0482 911 697
                </a>

              </div>

              <div>

                <p className="text-[9px] uppercase tracking-widest text-slate-600 font-black mb-2">
                  Email
                </p>

                <a
                  href="mailto:admin@eternalsupportservice.com.au"
                  className="text-white font-bold break-all hover:text-pink-400 transition-colors"
                >
                  admin@eternalsupportservice.com.au
                </a>

              </div>

              <div>

                <p className="text-[9px] uppercase tracking-widest text-slate-600 font-black mb-2">
                  Location
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Melbourne Metro,
                  <br />
                  Victoria, Australia
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
            © 2026 Eternal Support Services. All Rights Reserved.
          </p>

          <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">
            NDIS Registered Provider
          </p>

        </div>

      </div>

    </footer>
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="bg-[#F4F0E8] min-h-screen antialiased">

      <Navbar />

      <ServicesHero />

      <ServicesGrid />

      <WhyChooseUs />

      <CTA />

      <Footer />

    </main>
  );
}