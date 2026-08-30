"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countryCodes = [
  { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+1", flag: "🇦🇸", name: "American Samoa" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+1", flag: "🇦🇮", name: "Anguilla" },
  { code: "+1", flag: "🇦🇬", name: "Antigua and Barbuda" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+297", flag: "🇦🇼", name: "Aruba" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+1", flag: "🇧🇸", name: "Bahamas" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+1", flag: "🇧🇧", name: "Barbados" },
  { code: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "+1", flag: "🇧🇲", name: "Bermuda" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia and Herzegovina" },
  { code: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+1", flag: "🇻🇬", name: "British Virgin Islands" },
  { code: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+226", bg: "🇧🇫", name: "Burkina Faso" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+238", flag: "🇨🇻", name: "Cabo Verde" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+1", flag: "🇰🇾", name: "Cayman Islands" },
  { code: "+236", flag: "🇨🇫", name: "Central African Republic" },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+269", flag: "🇰🇲", name: "Comoros" },
  { code: "+242", flag: "🇨🇬", name: "Congo - Brazzaville" },
  { code: "+243", flag: "🇨🇩", name: "Congo - Kinshasa" },
  { code: "+682", flag: "🇨🇰", name: "Cook Islands" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+420", flag: "🇨🇿", name: "Czechia" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+253", flag: "🇩🇯", name: "Djibouti" },
  { code: "+1", flag: "🇩🇲", name: "Dominica" },
  { code: "+1", flag: "🇩🇴", name: "Dominican Republic" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+240", flag: "🇬🇶", name: "Equatorial Guinea" },
  { code: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+268", flag: "🇸🇿", name: "Eswatini" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+1", flag: "🇫🇰", name: "Falkland Islands" },
  { code: "+298", flag: "🇫🇴", name: "Faroe Islands" },
  { code: "+679", flag: "🇫 Fiji", name: "Fiji" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+594", flag: "🇬🇫", name: "French Guiana" },
  { code: "+689", flag: "🇵🇫", name: "French Polynesia" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+350", flag: "🇬🇮", name: "Gibraltar" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+299", flag: "🇬🇱", name: "Greenland" },
  { code: "+1", flag: "🇬🇩", name: "Grenada" },
  { code: "+590", flag: "🇬🇵", name: "Guadeloupe" },
  { code: "+1", flag: "🇬🇺", name: "Guam" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+245", flag: "🇬🇼", name: "Guinea-Bissau" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+1", flag: "🇯🇲", name: "Jamaica" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+686", flag: "🇰🇮", name: "Kiribati" },
  { code: "+850", flag: "🇰🇵", name: "North Korea" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+266", flag: "🇱🇸", name: "Lesotho" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+853", flag: "🇲🇴", name: "Macao" },
  { code: "+389", flag: "🇲🇰", name: "North Macedonia" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+265", flag: "🇲🇼", name: "Malawi" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+692", flag: "🇲🇭", name: "Marshall Islands" },
  { code: "+596", flag: "🇲🇶", name: "Martinique" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "+262", flag: "🇾🇹", name: "Mayotte" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+691", flag: "🇫🇲", name: "Micronesia" },
  { code: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "+377", flag: "🇲🇨", name: "Monaco" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+382", flag: "🇲 Montenegro", name: "Montenegro" },
  { code: "+1", flag: "🇲🇸", name: "Montserrat" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+674", flag: "🇳🇷", name: "Nauru" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+687", flag: "🇳🇨", name: "New Caledonia" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+683", flag: "🇳🇺", name: "Niue" },
  { code: "+672", flag: "🇳🇫", name: "Norfolk Island" },
  { code: "+1", flag: "🇲🇵", name: "Northern Mariana Islands" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+680", flag: "🇵 Palau", name: "Palau" },
  { code: "+970", flag: "🇵🇸", name: "Palestine" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+1", flag: "🇵🇷", name: "Puerto Rico" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+262", flag: "🇷🇪", name: "Réunion" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+1", flag: "🇰🇳", name: "Saint Kitts and Nevis" },
  { code: "+1", flag: "🇱🇨", name: "Saint Lucia" },
  { code: "+508", flag: "🇵🇲", name: "Saint Pierre and Miquelon" },
  { code: "+1", flag: "🇻🇨", name: "Saint Vincent and the Grenadines" },
  { code: "+685", flag: "🇼 Samoa", name: "Samoa" },
  { code: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "+239", flag: "🇸🇹", name: "São Tomé and Príncipe" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+677", flag: "🇸🇧", name: "Solomon Islands" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+690", flag: "🇹🇰", name: "Tokelau" },
  { code: "+676", flag: "🇹🇴", name: "Tonga" },
  { code: "+1", flag: "🇹🇹", name: "Trinidad and Tobago" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+1", flag: "🇹🇨", name: "Turks and Caicos Islands" },
  { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+971", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+1", flag: "🇻🇮", name: "Wallis and Futuna" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" }
];

export default function ReferralPage() {
  const initialForm = {
    fullName: "",
    gender: "",
    dob: "",
    phoneCountryCode: "+61",
    phone: "",
    email: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    disability: "",
    supportFrequency: "",
    fundingType: "",
    additionalDetails: "",
    referralFor: "Myself",
    enquirerName: "",
    relationship: "",
    enquirerCountryCode: "+61",
    enquirerPhone: "",
    enquirerEmail: "",
  };

  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string };

      try {
        data = JSON.parse(responseText);
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        alert("Server error: Invalid response. Please check your API route.");
        return;
      }

      if (!response.ok || !data.success) {
        alert(data.message || "Submission failed. Please try again.");
        return;
      }

      alert("Referral submitted successfully!");
      setForm(initialForm);
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit referral. Please check your internet connection and API route.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedFlag = (currentCode: string) => {
    const match = countryCodes.find((c) => c.code === currentCode);
    return match ? match.flag : "🏳️";
  };

  const inputClass =
    "w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-[#6b21a8] rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10";

  const selectClass =
    "w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-[#6b21a8] rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none cursor-pointer";

  const labelClass =
    "text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1";

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50 px-3 py-6 sm:px-5 lg:px-8 lg:py-10 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto">
        {/* Back button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="group mb-5 inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 shadow-sm transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>

        {/* LANDSCAPE CARD */}
        <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_35px_100px_rgba(15,23,42,0.10)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
            {/* LEFT INFORMATION PANEL */}
            <aside className="relative overflow-hidden bg-slate-950 text-white p-7 sm:p-9 lg:p-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-600/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-pink-600/20 blur-3xl" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-200">Intake Registry</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05]">
                  NDIS Referral
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mt-1">
                    Intake Portal
                  </span>
                </h1>

                <p className="text-slate-300 text-sm leading-6 mt-5">
                  Complete the referral details to help our team understand participant needs and coordinate appropriate support services.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    ["01", "Participant Profile"],
                    ["02", "Location Details"],
                    ["03", "Support Requirements"],
                    ["04", "Referral Source"],
                  ].map(([number, title]) => (
                    <div key={number} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-3">
                      <span className="w-7 h-7 shrink-0 rounded-lg bg-white text-slate-900 flex items-center justify-center text-[10px] font-black">
                        {number}
                      </span>
                      <span className="text-xs font-bold text-slate-200">{title}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-black text-purple-200">Privacy</p>
                    <p className="text-xs leading-5 text-slate-400 mt-2">
                      Please provide accurate information. Sensitive participant information should only be submitted through your secure production environment.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT FORM PANEL */}
            <section className="p-5 sm:p-7 lg:p-9 xl:p-10">
              <div className="flex items-start justify-between gap-5 border-b border-slate-100 pb-6 mb-7">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6b21a8] mb-2">Referral Application</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Participant information</h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl">
                    Enter the required participant, contact, support and referral information below.
                  </p>
                </div>
                <div className="hidden sm:flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100">
                  <svg className="w-6 h-6 text-[#6b21a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19a3 3 0 1 0-6 0m9-11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-3.5 6.5L18 17" />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* SECTION 1 */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">01</span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">Participant Core Profile</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">Basic participant contact information</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-1.5 xl:col-span-2">
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" name="fullName" placeholder="John Doe" value={form.fullName} onChange={handleChange} required className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Gender Identification</label>
                      <select name="gender" value={form.gender} onChange={handleChange} className={selectClass}>
                        <option value="">Select Option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other / Prefer Not To Disclose</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Date of Birth</label>
                      <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2 xl:col-span-2">
                      <label className={labelClass}>Primary Contact Phone</label>
                      <div className="flex gap-2">
                        <div className="relative w-[125px] shrink-0">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none select-none z-10">
                            {getSelectedFlag(form.phoneCountryCode)}
                          </span>
                          <select name="phoneCountryCode" value={form.phoneCountryCode} onChange={handleChange} className={`${selectClass} pl-9 pr-1`} aria-label="Phone country code">
                            {countryCodes.map((c, idx) => (
                              <option key={`part-${c.code}-${idx}`} value={c.code}>{c.code} ({c.name})</option>
                            ))}
                          </select>
                        </div>
                        <input type="tel" name="phone" placeholder="400 000 000" value={form.phone} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2 xl:col-span-2">
                      <label className={labelClass}>Email Address</label>
                      <input type="email" name="email" placeholder="example@domain.com" value={form.email} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                </section>

                {/* SECTION 2 */}
                <section className="border-t border-slate-100 pt-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">02</span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">Geographic Location</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">Participant residential details</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-1.5 md:col-span-2 xl:col-span-4">
                      <label className={labelClass}>Street Address</label>
                      <input type="text" name="address" placeholder="Unit 1, 123 Care Street" value={form.address} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Suburb</label>
                      <input type="text" name="suburb" placeholder="Melbourne" value={form.suburb} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>State</label>
                      <input type="text" name="state" placeholder="VIC" value={form.state} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Postcode</label>
                      <input type="text" name="postcode" placeholder="3000" value={form.postcode} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                </section>

                {/* SECTION 3 */}
                <section className="border-t border-slate-100 pt-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">03</span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">Support Metrics & Logistics</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">Support needs and funding information</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className={labelClass}>Primary Disability Diagnoses</label>
                      <input type="text" name="disability" placeholder="e.g., Intellectual Disability, ASD" value={form.disability} onChange={handleChange} className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className={labelClass}>Funding Management Stream</label>
                      <select name="fundingType" value={form.fundingType} onChange={handleChange} className={selectClass}>
                        <option value="">Select Stream Type</option>
                        <option value="NDIS - Agency Managed">NDIS (Agency Managed)</option>
                        <option value="NDIS - Plan Managed">NDIS (Plan Managed)</option>
                        <option value="NDIS - Self Managed">NDIS (Self Managed)</option>
                        <option value="TAC">TAC Covered</option>
                        <option value="Private Funding">Private / Commercial Brokerage</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2 xl:col-span-4">
                      <label className={labelClass}>Requested Care Frequency Target</label>
                      <select name="supportFrequency" value={form.supportFrequency} onChange={handleChange} className={selectClass}>
                        <option value="">Select Desired Frequency</option>
                        <option value="Daily">Daily High Intensity Routine Care</option>
                        <option value="Weekly">Weekly Standard Scheduled Hours</option>
                        <option value="Fortnightly">Fortnightly Cycle Check-Ins</option>
                        <option value="Monthly">Monthly Strategy & Coordination Only</option>
                        <option value="As Required">Flexible / Ad-Hoc / Respite Blocks</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2 xl:col-span-4">
                      <label className={labelClass}>Additional Detailed Strategy / Request Notes</label>
                      <textarea rows={4} name="additionalDetails" placeholder="Detail core requirements, specific goals, preferred scheduling windows, behavioral requirements, or dietary factors..." value={form.additionalDetails} onChange={handleChange} className={`${inputClass} resize-none rounded-2xl`} />
                    </div>
                  </div>
                </section>

                {/* SECTION 4 */}
                <section className="border-t border-slate-100 pt-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">04</span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">Filing Source / Relationship</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">Tell us who is completing this referral</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>I am completing this application for:</label>
                    <select name="referralFor" value={form.referralFor} onChange={handleChange} className={selectClass}>
                      <option value="Myself">Myself (Self Referral Intake)</option>
                      <option value="Someone Else">Someone Else (Third-Party Agent/Family/Coordinator)</option>
                    </select>
                  </div>

                  <AnimatePresence initial={false}>
                    {form.referralFor === "Someone Else" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                          <div className="flex flex-col gap-1.5">
                            <label className={labelClass}>Your Full Name</label>
                            <input type="text" name="enquirerName" placeholder="Jane Doe" value={form.enquirerName} onChange={handleChange} className={inputClass} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className={labelClass}>Relationship to Participant</label>
                            <input type="text" name="relationship" placeholder="e.g., Support Coordinator, Parent" value={form.relationship} onChange={handleChange} className={inputClass} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className={labelClass}>Your Phone</label>
                            <div className="flex gap-2">
                              <div className="relative w-[125px] shrink-0">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none select-none z-10">
                                  {getSelectedFlag(form.enquirerCountryCode)}
                                </span>
                                <select name="enquirerCountryCode" value={form.enquirerCountryCode} onChange={handleChange} className={`${selectClass} pl-9 pr-1`} aria-label="Enquirer country code">
                                  {countryCodes.map((c, idx) => (
                                    <option key={`enq-${c.code}-${idx}`} value={c.code}>{c.code} ({c.name})</option>
                                  ))}
                                </select>
                              </div>
                              <input type="tel" name="enquirerPhone" placeholder="400 000 000" value={form.enquirerPhone} onChange={handleChange} className={inputClass} />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className={labelClass}>Your Email Address</label>
                            <input type="email" name="enquirerEmail" placeholder="example@domain.com" value={form.enquirerEmail} onChange={handleChange} className={inputClass} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>

                {/* SUBMIT */}
                <div className="border-t border-slate-100 pt-7 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700">Ready to submit your referral?</p>
                    <p className="text-[11px] text-slate-400 mt-1">Review your information before submitting.</p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[260px] py-4 px-7 bg-gradient-to-r from-[#6b21a8] to-[#ec4899] hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/20 transition-all focus:ring-4 focus:ring-purple-500/20 text-xs"
                  >
                    {isSubmitting ? "Submitting Referral..." : "Submit Strategic Referral Intake"}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
