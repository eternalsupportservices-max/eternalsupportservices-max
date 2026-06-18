"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive list of global country codes and flags sorted alphabetically
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
  const [form, setForm] = useState({
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
  });

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

    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Response Status:", response.status);
      const responseText = await response.text();
      
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error("Failed to parse JSON:", e);
        alert("Server error: Invalid response. Check console logs.");
        return;
      }

      if (data.success) {
        alert("Referral submitted successfully!");
        setForm({
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
        });
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit referral. Check console logs.");
    }
  };

  const getSelectedFlag = (currentCode: string) => {
    const match = countryCodes.find((c) => c.code === currentCode);
    return match ? match.flag : "🏳️";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/30 via-slate-50 to-slate-100/80 py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-pink-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[3rem] shadow-[0_40px_100px_rgba(15,23,42,0.06)] p-8 md:p-16 relative z-10">
        
        {/* Top Actions Block featuring Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2.5 px-4 py-2 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 hover:border-slate-300 rounded-full text-xs font-bold text-slate-600 transition-all duration-200 shadow-sm"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </button>
        </div>

        {/* Header Block */}
        <div className="mb-14 border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-purple-50 border border-purple-100 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6b21a8]" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6b21a8]">Intake Registry</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            NDIS Referral <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#ec4899]">Intake Portal</span>
          </h1>
          <p className="text-slate-400 font-medium mt-3 text-sm md:text-base max-w-xl">
            Please fill out the detailed matrix below. Submitting this form compiles a structural briefing transferred securely via your mail native client.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECTION 1: Participant Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white font-black text-xs">01</span>
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">Participant Core Profile</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Gender Identification</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none cursor-pointer"
                >
                  <option value="">Select Option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other / Prefer Not To Disclose</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 cursor-pointer"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Primary Contact Phone</label>
                <div className="flex gap-2">
                  <div className="relative w-32 flex items-center bg-slate-50/50 border border-slate-200 focus-within:border-[#6b21a8] focus-within:bg-white rounded-2xl transition-all focus-within:ring-4 focus-within:ring-purple-500/10">
                    <span className="absolute left-3 text-base pointer-events-none select-none">
                      {getSelectedFlag(form.phoneCountryCode)}
                    </span>
                    <select
                      name="phoneCountryCode"
                      value={form.phoneCountryCode}
                      onChange={handleChange}
                      className="w-full h-full bg-transparent pl-9 pr-2 py-4 text-sm font-semibold text-slate-700 outline-none cursor-pointer appearance-none text-right"
                    >
                      {countryCodes.map((c, idx) => (
                        <option key={`part-${c.code}-${idx}`} value={c.code}>
                          {c.code} ({c.name})
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="400 000 000"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Address Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white font-black text-xs">02</span>
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">Geographic Location</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Street Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Unit 1, 123 Care Street"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Suburb</label>
                <input
                  type="text"
                  name="suburb"
                  placeholder="Melbourne"
                  value={form.suburb}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="VIC"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="3000"
                  value={form.postcode}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Support Architecture */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white font-black text-xs">03</span>
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">Support Metrics & Logistics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Primary Disability Diagnoses</label>
                <input
                  type="text"
                  name="disability"
                  placeholder="e.g., Intellectual Disability, ASD"
                  value={form.disability}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Funding Management Stream</label>
                <select
                  name="fundingType"
                  value={form.fundingType}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none cursor-pointer"
                >
                  <option value="">Select Stream Type</option>
                  <option value="NDIS - Agency Managed">NDIS (Agency Managed)</option>
                  <option value="NDIS - Plan Managed">NDIS (Plan Managed)</option>
                  <option value="NDIS - Self Managed">NDIS (Self Managed)</option>
                  <option value="TAC">TAC Covered</option>
                  <option value="Private Funding">Private / Commercial Brokerage</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Requested Care Frequency Target</label>
                <select
                  name="supportFrequency"
                  value={form.supportFrequency}
                  onChange={handleChange}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none cursor-pointer"
                >
                  <option value="">Select Desired Frequency</option>
                  <option value="Daily">Daily High Intensity Routine Care</option>
                  <option value="Weekly">Weekly Standard Scheduled Hours</option>
                  <option value="Fortnightly">Fortnightly Cycle Check-Ins</option>
                  <option value="Monthly">Monthly Strategy & Coordination Only</option>
                  <option value="As Required">Flexible / Ad-Hoc / Respite Blocks</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Additional Detailed Strategy / Request Notes</label>
              <textarea
                rows={5}
                name="additionalDetails"
                placeholder="Detail core requirements, specific goals, preferred scheduling windows, behavioral requirements, or dietary factors..."
                value={form.additionalDetails}
                onChange={handleChange}
                className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-3xl p-5 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 resize-none"
              />
            </div>
          </div>

          {/* SECTION 4: Enquirer Origin Source */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white font-black text-xs">04</span>
              <h2 className="text-lg font-black uppercase tracking-wider text-slate-800">Filing Source / Relationship</h2>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">I am completing this application for:</label>
              <select
                name="referralFor"
                value={form.referralFor}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#6b21a8] focus:bg-white rounded-2xl p-4 text-sm font-black text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none cursor-pointer"
              >
                <option value="Myself">Myself (Self Referral Intake)</option>
                <option value="Someone Else">Someone Else (Third-Party Agent/Family/Coordinator)</option>
              </select>
            </div>

            {/* Smart Framer-Motion Animated Dropdown Container */}
            <AnimatePresence initial={false}>
              {form.referralFor === "Someone Else" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 mt-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Your Full Name</label>
                      <input
                        type="text"
                        name="enquirerName"
                        placeholder="Jane Doe"
                        value={form.enquirerName}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-[#6b21a8] rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 pl-1">Relationship to Participant</label>
                      <input
                        type="text"
                        name="relationship"
                        placeholder="e.g., Support Coordinator, Parent"
                        value={form.relationship}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-[#6b21a8] rounded-2xl p-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Form Submit Block */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-[#6b21a8] to-[#ec4899] hover:opacity-95 text-white font-black uppercase tracking-wider rounded-2xl shadow-lg transition-all focus:ring-4 focus:ring-purple-500/20 text-sm"
            >
              Submit Strategic Referral Intake
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}