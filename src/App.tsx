import { useEffect, useState, useRef } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  Layers,
  Globe,
  Download,
  Check,
  Copy,
  Zap,
  ChevronRight,
  Sparkles,
  TrendingDown,
  DollarSign,
  Leaf,
  ArrowUpRight,
  Info,
  Sliders,
  ShieldCheck,
  MapPin,
  Flame,
  Activity
} from "lucide-react";
import ThreeCanvas from "./components/ThreeCanvas";
import TiltCard from "./components/TiltCard";
import { pravinData } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Interactive CEP state
  const [cepMode, setCepMode] = useState<"standard" | "optimized">("optimized");
  
  // Interactive LCA Project State
  const [activeLcaPathway, setActiveLcaPathway] = useState<number>(0);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Setup Intersection Observer to highlight current active nav tab
  useEffect(() => {
    const sections = ["home", "about", "experience", "education", "skills", "certifications", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus on viewport center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Copy to clipboard helper
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] selection:bg-blue-100 selection:text-blue-700 antialiased overflow-x-hidden">
      
      {/* 3D Background Wrapper */}
      <div className="absolute inset-0 pointer-events-none z-0" id="three-canvas-container">
        <ThreeCanvas />
      </div>

      {/* Decorative Grid Pattern for Tech Corporate Vibe */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute inset-0 blueprint-grid-fine pointer-events-none opacity-60 z-0" />

      {/* Header / Sticky Navigation */}
      <nav className="fixed top-6 inset-x-0 mx-auto max-w-4xl w-[92%] backdrop-blur-xl bg-white/75 border border-[#E2E8F0] shadow-[0_8px_30px_rgb(15,23,42,0.04)] rounded-full py-2 px-3 flex items-center justify-between z-50 no-print transition-all duration-300">
        <div 
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 px-3 py-1.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-display font-extrabold text-sm shadow-md group-hover:bg-blue-500 transition-colors">
            PE
          </div>
          <span className="font-display font-semibold text-[#1E293B] tracking-tight group-hover:text-blue-600 transition-colors text-sm md:inline hidden">
            Pravin E
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            { id: "certifications", label: "Certifications" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-[#475569] hover:text-[#1E293B] hover:bg-slate-100/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Scrollable Mobile Navigation Links */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto max-w-[70vw] no-scrollbar px-1 py-1">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Exp" },
            { id: "education", label: "Edu" },
            { id: "skills", label: "Skills" },
            { id: "certifications", label: "Certs" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1 text-[11px] font-semibold whitespace-nowrap rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-[#475569] hover:text-[#1E293B]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#1E293B] hover:bg-[#2563EB] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm transition-all duration-300 md:inline-block hidden cursor-pointer hover:shadow-md"
        >
          Let's Talk
        </button>
      </nav>

      {/* Main Container */}
      <main className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 z-10">

        {/* =======================================
            HERO SECTION
            ======================================= */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center py-12 relative">
          
          {/* Subtle light glowing circles in background */}
          <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-12 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 md:space-y-8 max-w-3xl text-left">
            {/* Title & Name Grid */}
            <div className="space-y-3">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#1E293B] tracking-tight leading-[0.95]">
                {pravinData.name}
              </h1>
              <p className="font-display text-xl md:text-3xl font-medium text-[#475569] leading-snug max-w-2xl mt-4">
                {pravinData.title}
              </p>
            </div>

            {/* Geographical Indicator */}
            <div className="flex items-center gap-2.5 text-[#64748B] text-sm font-medium">
              <MapPin className="w-4.5 h-4.5 text-blue-600" />
              <span>{pravinData.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 no-print">
              <a
                href="/Pravin_E_Resume.pdf"
                download="Pravin_E_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)] transition-all duration-300 flex items-center gap-2.5 group cursor-pointer hover:-translate-y-0.5"
              >
                <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white hover:bg-slate-50 text-[#1E293B] font-semibold px-7 py-3.5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-4.5 h-4.5 text-[#64748B]" />
              </button>

              <a
                href={pravinData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white hover:bg-blue-50 text-[#475569] hover:text-blue-600 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Hero Quick Highlight Metric Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 border-t border-slate-200/60 max-w-2xl">
              <div>
                <p className="text-2xl font-extrabold text-[#1E293B] font-display">GET Operations</p>
                <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold mt-0.5">JSW Energy Ltd.</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#1E293B] font-display">PGDC / B.Tech</p>
                <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold mt-0.5">NPTI Neyveli / SMVEC</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-2xl font-extrabold text-[#2563EB] font-display">15 kW Aux Cut</p>
                <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold mt-0.5">Kaizen Innovation</p>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            ABOUT SECTION
            ======================================= */}
        <section id="about" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">01 / Profile</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-2">
                Executive Statement
              </h2>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />
            </div>

            <div className="lg:col-span-8 space-y-6">
              {/* Premium Quote Container */}
              <div className="relative bg-white border border-[#E2E8F0] p-8 md:p-10 rounded-2xl shadow-[0_4px_25px_rgba(15,23,42,0.03)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full pointer-events-none -z-10" />
                <Sparkles className="w-8 h-8 text-blue-600/20 absolute top-6 right-8 animate-pulse" />
                
                <p className="font-display text-lg md:text-xl font-medium text-[#1E293B] leading-relaxed relative">
                  "{pravinData.about}"
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-[#1E293B]">{pravinData.name}</p>
                      <p className="text-xs text-[#64748B]">Graduate Engineer Power Plant Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================
            EXPERIENCE SECTION
            ======================================= */}
        <section id="experience" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Header Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">02 / Experience</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-2">
                Professional Journey
              </h2>
              <p className="text-[#64748B] text-sm mt-3 leading-relaxed">
                Hands-on core utility engineering combined with control-room operations, reliability optimization, and predictive trend oversight.
              </p>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />

              {/* Company Logo Widget */}
              <div className="mt-8 p-5 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 border border-[#E2E8F0] rounded-xl flex items-center justify-center font-display font-black text-xl text-blue-600">
                  JSW
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#1E293B] text-sm">JSW Energy Ltd.</h4>
                  <p className="text-xs text-[#64748B]">India (Utility Scale Generation)</p>
                </div>
              </div>
            </div>

            {/* Experience Cards Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Primary Experience Card */}
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
                
                {/* Header Container with responsive flex flow */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-extrabold text-[#1E293B] leading-tight">
                        {pravinData.experience.role}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mt-1">
                        {pravinData.experience.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Visual Timeline Tag */}
                  <div className="self-start sm:self-center px-3 py-1 rounded-full bg-[#EEF4F8] text-[#1E293B] text-xs font-bold whitespace-nowrap">
                    {pravinData.experience.period}
                  </div>
                </div>

                {/* Duty Points */}
                <ul className="space-y-4 text-sm text-[#475569] leading-relaxed mb-8">
                  {pravinData.experience.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* ==========================================
                    KAIZEN INITIATIVE: PREMIUM COMPONENT
                    ========================================== */}
                <div className="border-t border-slate-100 pt-8">
                  <div className="bg-slate-50 border border-blue-100 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    
                    {/* Background visual curves for premium depth */}
                    <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-200/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -left-12 -top-12 w-64 h-64 bg-sky-200/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Header Tag */}
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                          <Zap className="h-5 w-5 animate-pulse" />
                        </span>
                        <div>
                          <span className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest block">
                            KAIZEN ACHIEVEMENT
                          </span>
                          <h4 className="font-display font-extrabold text-[#1E293B] text-base md:text-lg tracking-tight mt-0.5">
                            Condensate Extraction Pump (CEP) Optimization
                          </h4>
                        </div>
                      </div>

                      {/* Interactive toggle simulator tabs */}
                      <div className="flex bg-slate-200/60 p-0.5 rounded-lg text-xs font-semibold no-print">
                        <button
                          type="button"
                          onClick={() => setCepMode("standard")}
                          className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                            cepMode === "standard"
                              ? "bg-white text-[#1E293B] shadow-xs"
                              : "text-[#64748B] hover:text-[#1E293B]"
                          }`}
                        >
                          Baseline (Pre-Kaizen)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCepMode("optimized")}
                          className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                            cepMode === "optimized"
                              ? "bg-blue-600 text-white shadow-xs"
                              : "text-[#64748B] hover:text-[#1E293B]"
                          }`}
                        >
                          Optimized State
                        </button>
                      </div>
                    </div>

                    {/* Verified Technical Text */}
                    <p className="text-sm text-[#475569] leading-relaxed mb-8 border-l-2 border-blue-500 pl-4">
                      Contributed to a cross-functional Kaizen initiative focused on optimizing the Condensate Extraction Pump (CEP) during 65 MW part-load operation. The improvement involved Variable Frequency Drive (VFD) speed optimization together with a reduction of approximately 0.73 kg/cm² in CEP discharge pressure while maintaining safe plant operation.
                    </p>

                    {/* Dashboard Layout: System Input Parameters */}
                    <div className="mb-6">
                      <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-[#64748B] mb-3">
                        Operational Parameters & Configuration
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Equipment */}
                        <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl flex items-start gap-3 shadow-xs hover:border-blue-100 transition-colors">
                          <Sliders className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase font-bold text-[#64748B]">Equipment</p>
                            <p className="text-xs font-extrabold text-[#1E293B] mt-0.5">
                              Condensate Extraction Pump (CEP)
                            </p>
                          </div>
                        </div>

                        {/* Operating Condition */}
                        <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl flex items-start gap-3 shadow-xs hover:border-blue-100 transition-colors">
                          <Activity className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase font-bold text-[#64748B]">Operating Condition</p>
                            <p className="text-xs font-extrabold text-[#1E293B] mt-0.5">
                              65 MW Part Load
                            </p>
                          </div>
                        </div>

                        {/* Optimization Strategy */}
                        <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl flex items-start gap-3 shadow-xs hover:border-blue-100 transition-colors md:col-span-1">
                          <Cpu className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase font-bold text-[#64748B]">Optimization Strategy</p>
                            <p className="text-xs font-extrabold text-[#1E293B] mt-0.5">
                              VFD Speed Optimization + 0.73 kg/cm² Discharge Pressure Reduction
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Layout: Optimization Key Results (KPI Cards) */}
                    <div>
                      <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-[#64748B] mb-3">
                        Optimization Key Results
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        
                        {/* Power Saving KPI */}
                        <div className="bg-white border border-[#E2E8F0] p-5 rounded-2xl text-center shadow-xs relative overflow-hidden group hover:border-blue-200 transition-all">
                          <div className={`absolute top-0 inset-x-0 h-1 bg-green-500 transition-opacity ${cepMode === "optimized" ? "opacity-100" : "opacity-0"}`} />
                          <div className="w-9 h-9 mx-auto bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5" />
                          </div>
                          <p className="text-[10px] uppercase font-extrabold text-[#64748B] tracking-wider">Power Saving</p>
                          <p className="text-2xl md:text-3xl font-extrabold text-[#1E293B] font-display mt-1 transition-all duration-300">
                            {cepMode === "standard" ? "Baseline" : "15 kW"}
                          </p>
                          <p className="text-[10px] text-green-600 font-bold mt-1 h-4">
                            {cepMode === "optimized" ? "↓ Auxiliary Power saved" : "Full Power draw"}
                          </p>
                        </div>

                        {/* Annual Savings KPI */}
                        <div className="bg-white border border-[#E2E8F0] p-5 rounded-2xl text-center shadow-xs relative overflow-hidden group hover:border-blue-200 transition-all">
                          <div className={`absolute top-0 inset-x-0 h-1 bg-blue-600 transition-opacity ${cepMode === "optimized" ? "opacity-100" : "opacity-0"}`} />
                          <div className="w-9 h-9 mx-auto bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                            <DollarSign className="w-5 h-5" />
                          </div>
                          <p className="text-[10px] uppercase font-extrabold text-[#64748B] tracking-wider">Annual Savings</p>
                          <p className="text-2xl md:text-3xl font-extrabold text-[#1E293B] font-display mt-1 transition-all duration-300">
                            {cepMode === "standard" ? "Baseline" : "₹6.57 Lakh"}
                          </p>
                          <p className="text-[10px] text-green-600 font-bold mt-1 h-4">
                            {cepMode === "optimized" ? "Cost Reduction Achieved" : "No Savings"}
                          </p>
                        </div>

                        {/* APC Improvement KPI */}
                        <div className="bg-white border border-[#E2E8F0] p-5 rounded-2xl text-center shadow-xs relative overflow-hidden group hover:border-blue-200 transition-all">
                          <div className={`absolute top-0 inset-x-0 h-1 bg-sky-500 transition-opacity ${cepMode === "optimized" ? "opacity-100" : "opacity-0"}`} />
                          <div className="w-9 h-9 mx-auto bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-3">
                            <TrendingDown className="w-5 h-5" />
                          </div>
                          <p className="text-[10px] uppercase font-extrabold text-[#64748B] tracking-wider">APC Improvement</p>
                          <p className="text-2xl md:text-3xl font-extrabold text-[#1E293B] font-display mt-1 transition-all duration-300">
                            {cepMode === "standard" ? "Baseline" : "~0.4%"}
                          </p>
                          <p className="text-[10px] text-green-600 font-bold mt-1 h-4">
                            {cepMode === "optimized" ? "↓ Auxiliary Power %" : "Standard Consumption"}
                          </p>
                        </div>

                      </div>
                    </div>

                    {/* Operational Safety Guarantee Stamp */}
                    <div className="mt-6 p-4 bg-slate-100 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] border border-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="font-semibold">
                          Successfully implemented without affecting plant reliability or operational safety.
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] bg-white border border-slate-200 px-2.5 py-1 rounded-md text-[#475569]">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span>VFD Optimized Flow</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =======================================
            EDUCATION SECTION
            ======================================= */}
        <section id="education" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Header Column */}
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">03 / Education</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-2">
                Academic Background
              </h2>
              <p className="text-[#64748B] text-sm mt-3 leading-relaxed">
                Solid academic grounding combining intensive thermal operations engineering with electronics and communication specialties.
              </p>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />
            </div>

            {/* Timelines Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-12">
                
                {pravinData.education.map((edu, index) => (
                  <div key={edu.id} className="relative group">
                    {/* Node Circle */}
                    <div className="absolute -left-[41px] top-1.5 bg-white border-2 border-blue-600 h-6 w-6 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 z-10">
                      <div className="h-2 w-2 bg-blue-600 rounded-full group-hover:bg-white" />
                    </div>

                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:shadow-md transition-all duration-300 hover:border-blue-200">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                        {edu.period}
                      </span>

                      <h3 className="font-display text-xl font-extrabold text-[#1E293B] mt-3">
                        {edu.degree} — {edu.field}
                      </h3>
                      
                      <p className="text-sm text-[#475569] font-medium mt-1">
                        {edu.institution}
                      </p>

                      <div className="flex items-center gap-1.5 mt-3 text-xs text-[#64748B] font-medium">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            TECHNICAL SKILLS SECTION
            ======================================= */}
        <section id="skills" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Header Column */}
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">04 / Skillsets</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-2">
                Technical Capabilities
              </h2>
              <p className="text-[#64748B] text-sm mt-3 leading-relaxed">
                Core domain expertise, operations monitoring, software, and systems analysis. Click skills to highlight their engineering categories.
              </p>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />
            </div>

            {/* Interactive Skill Bento Grids */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {pravinData.skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group hover:border-blue-100"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/40 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />
                  
                  <div className="flex items-center gap-2.5 mb-4">
                    {idx === 0 && <Cpu className="w-5 h-5 text-blue-600" />}
                    {idx === 1 && <Flame className="w-5 h-5 text-sky-600" />}
                    {idx === 2 && <Layers className="w-5 h-5 text-emerald-600" />}
                    {idx === 3 && <Sliders className="w-5 h-5 text-indigo-600" />}
                    
                    <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-slate-50 border border-[#E2E8F0] text-[#475569] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Auxiliary Power Systems Core Graphic Widget */}
              <div className="md:col-span-2 bg-[#EEF4F8] border border-blue-100 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-xs text-[#1E293B]">Continuous Improvement Philosophy</h4>
                    <p className="text-[11px] text-[#64748B]">Experienced with ISO/Kaizen workflows, root-cause troubleshooting, and shift safety audits.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-blue-600 border border-blue-100">DCS Operations</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-[#475569] border border-slate-200">PTW Certified</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================
            CERTIFICATIONS SECTION
            ======================================= */}
        <section id="certifications" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="space-y-4 mb-12 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">05 / Accreditations</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-1">
              Professional Certifications
            </h2>
            <p className="text-[#64748B] text-sm max-w-2xl">
              Specialized simulator training and cross-disciplinary technical engineering credits.
            </p>
            <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pravinData.certifications.map((cert) => (
              <TiltCard
                id={cert.id}
                key={cert.id}
                intensity={8}
                className="p-6 flex flex-col justify-between h-[210px] group border border-[#E2E8F0]"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display font-extrabold text-sm text-[#1E293B] leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 mt-auto">
                  <span className="text-xs text-[#64748B] font-medium">{cert.issuer}</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* =======================================
            PROJECTS SECTION (LCA COMPARATIVE STUDY)
            ======================================= */}
        <section id="projects" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">06 / Research Project</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-2">
                Life Cycle Assessment Study
              </h2>
              <p className="text-[#64748B] text-sm mt-3 leading-relaxed">
                A rigorous, comparative environmental study assessing various mainstream and emerging technologies for hydrogen generation from a life-cycle perspective.
              </p>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />

              {/* Research Conclusion Card */}
              <div className="mt-8 p-5 bg-[#EEF4F8] border border-blue-100 rounded-2xl">
                <p className="text-xs font-mono text-blue-700 font-bold mb-1">KEY STUDY CONCLUSION</p>
                <h4 className="font-display text-[#1E293B] font-bold text-sm">Green Hydrogen Prominence</h4>
                <p className="text-[11px] text-[#475569] mt-2 leading-relaxed">
                  Renewable-powered electrolysis (Green Hydrogen) offers the lowest life-cycle environmental impact, while conventional fossil-fuel-based pathways have significantly higher environmental impacts unless integrated with carbon capture technologies.
                </p>
              </div>
            </div>

            {/* Right Interactive Dashboard Column */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-[0_4px_25px_rgba(15,23,42,0.02)]">
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base md:text-lg font-extrabold text-[#1E293B]">
                      {pravinData.project.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                      Comparative Environmental Research
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-8">
                  {pravinData.project.description}
                </p>

                {/* Interactive LCA Comparison Dashboard */}
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-display font-extrabold text-sm text-[#1E293B] mb-4 flex items-center gap-2">
                    <Sliders className="w-4.5 h-4.5 text-blue-600" />
                    <span>Evaluated Hydrogen Production Pathways ({pravinData.project.pathways.length})</span>
                  </h4>

                  {/* Pathway Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {pravinData.project.pathways.map((path, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveLcaPathway(idx)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          activeLcaPathway === idx
                            ? "bg-blue-600 text-white border-blue-600 shadow-md"
                            : "bg-slate-50 text-[#475569] border-[#E2E8F0] hover:bg-slate-100"
                        }`}
                      >
                        <p className="font-bold text-[11px] leading-tight line-clamp-2 min-h-[32px]">{path.name}</p>
                        <p className={`text-[10px] font-semibold mt-1.5 ${activeLcaPathway === idx ? "text-blue-100" : "text-[#64748B]"}`}>
                          LCA Rating: {path.rating}%
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Active Pathway Details Card */}
                  <div className="bg-slate-50 border border-[#E2E8F0] rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                        Pathway LCA Profile
                      </span>
                      <span className="text-xs font-mono text-green-700 bg-green-50 px-2.5 py-0.5 rounded-md font-bold">
                        {pravinData.project.pathways[activeLcaPathway].impact}
                      </span>
                    </div>

                    <h5 className="font-display font-extrabold text-[#1E293B] text-sm mb-2">
                      {pravinData.project.pathways[activeLcaPathway].name}
                    </h5>

                    <p className="text-xs text-[#475569] leading-relaxed mb-4">
                      {pravinData.project.pathways[activeLcaPathway].details}
                    </p>

                    {/* Focus Points Badges */}
                    {pravinData.project.pathways[activeLcaPathway].focuses && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {pravinData.project.pathways[activeLcaPathway].focuses.map((focus, idx2) => (
                          <span
                            key={idx2}
                            className="text-[9px] font-bold uppercase tracking-wider bg-white border border-[#E2E8F0] text-[#475569] px-2 py-1 rounded-md"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Comparative indicator bars */}
                    <div className="space-y-4 border-t border-slate-200/60 pt-4">
                      {/* Metric 1 */}
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                          <span className="text-[#475569]">Carbon & Emission Sourcing Index</span>
                          <span className="font-bold text-[#1E293B]">
                            {pravinData.project.pathways[activeLcaPathway].rating}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${pravinData.project.pathways[activeLcaPathway].rating}%` }}
                          />
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                          <span className="text-[#475569]">Overall Environmental Sourcing Viability</span>
                          <span className="font-bold text-[#1E293B]">
                            {Math.max(45, Math.min(95, 140 - pravinData.project.pathways[activeLcaPathway].rating))}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-sky-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.max(45, Math.min(95, 140 - pravinData.project.pathways[activeLcaPathway].rating))}%` }}
                          />
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Comparison Focus Parameters */}
                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <h5 className="text-[11px] font-extrabold uppercase tracking-widest text-[#64748B] mb-3">
                      LCA Comparison Focus Parameters
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {[
                        "Greenhouse Gas (GHG)",
                        "Water Consumption",
                        "Energy Consumption",
                        "Air Pollution",
                        "Resource Depletion",
                        "Carbon Neutrality",
                        "Environmental Risks",
                        "Life Cycle Assessment",
                        "Sustainability Metrics",
                        "Policies & Regulations"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center flex flex-col items-center justify-center min-h-[64px]"
                        >
                          <Check className="w-3.5 h-3.5 text-green-600 mb-1" />
                          <span className="text-[10px] font-bold text-[#475569] leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-50 rounded-xl flex items-start gap-2.5 text-xs text-[#64748B] border border-slate-100">
                    <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{pravinData.project.highlight}</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            CONTACT SECTION
            ======================================= */}
        <section id="contact" className="py-20 border-t border-slate-200/60 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Column */}
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">07 / Contact</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mt-2">
                Connect Directly
              </h2>
              <p className="text-[#64748B] text-sm mt-3 leading-relaxed max-w-sm">
                Feel free to reach out for professional inquiries or collaborative opportunities.
              </p>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />

              {/* Direct Access details */}
              <div className="mt-10 space-y-5">
                {/* Email detail */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-2xl flex items-center justify-center text-[#475569] group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold">Primary Email</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${pravinData.contact.email}`}
                        className="text-sm font-bold text-[#1E293B] hover:text-blue-600 transition-colors"
                      >
                        {pravinData.contact.email}
                      </a>
                      <button
                        onClick={() => handleCopy(pravinData.contact.email, "email")}
                        className="p-1 bg-slate-100 hover:bg-slate-200 rounded text-[#64748B] cursor-pointer"
                        title="Copy to Clipboard"
                      >
                        {copiedText === "email" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone detail */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-2xl flex items-center justify-center text-[#475569] group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold">Direct Phone</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`tel:${pravinData.contact.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-bold text-[#1E293B] hover:text-blue-600 transition-colors"
                      >
                        {pravinData.contact.phone}
                      </a>
                      <button
                        onClick={() => handleCopy(pravinData.contact.phone, "phone")}
                        className="p-1 bg-slate-100 hover:bg-slate-200 rounded text-[#64748B] cursor-pointer"
                        title="Copy to Clipboard"
                      >
                        {copiedText === "phone" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn detail */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-2xl flex items-center justify-center text-[#475569] group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 shadow-xs">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold">LinkedIn</p>
                    <a
                      href={pravinData.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1.5 mt-0.5"
                    >
                      <span>pravin-e-029713208</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Premium Direct Message Form */}
            <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-[0_4px_30px_rgba(15,23,42,0.03)] relative overflow-hidden">
              <h3 className="font-display font-extrabold text-lg text-[#1E293B] mb-1">
                Dispatch Quick Enquiry
              </h3>
              <p className="text-xs text-[#64748B] mb-6">
                Fill this out to immediately draft an email thread with Pravin.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("senderName") as HTMLInputElement).value;
                  const company = (form.elements.namedItem("senderCompany") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("senderMsg") as HTMLTextAreaElement).value;
                  
                  const mailto = `mailto:${pravinData.contact.email}?subject=Inquiry from ${encodeURIComponent(name)} - ${encodeURIComponent(company)}&body=${encodeURIComponent(message)}`;
                  window.location.href = mailto;
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-[#475569]">Your Name</label>
                    <input
                      required
                      name="senderName"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2.5 rounded-xl text-xs text-[#1E293B] outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-[#475569]">Company / Utility</label>
                    <input
                      required
                      name="senderCompany"
                      type="text"
                      placeholder="Energy Corp"
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2.5 rounded-xl text-xs text-[#1E293B] outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-[#475569]">Message Details</label>
                  <textarea
                    required
                    name="senderMsg"
                    rows={4}
                    placeholder="Describe your relocation package, shift role availability, or engineering request..."
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3 rounded-xl text-xs text-[#1E293B] outline-none focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1E293B] hover:bg-blue-600 text-white font-semibold text-xs py-3.5 rounded-xl transition-all duration-300 shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Prepare Draft & Send</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* =======================================
          FOOTER
          ======================================= */}
      <footer className="bg-white border-t border-[#E2E8F0] py-12 relative z-10 no-print">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-xs">
              PE
            </div>
            <div>
              <p className="font-display font-extrabold text-[#1E293B] text-sm leading-none">Pravin E</p>
              <p className="text-[11px] text-[#64748B] mt-1">Graduate Engineer Power Plant Operations</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#64748B] font-medium">
            <a
              href={`mailto:${pravinData.contact.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              Email
            </a>
            <a
              href={pravinData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="/Pravin_E_Resume.pdf"
              download="Pravin_E_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-xs text-[#64748B] font-medium">
            © 2026 Pravin E. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
