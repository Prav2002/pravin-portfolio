export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  kaizen: {
    title: string;
    description: string;
    metrics: { label: string; value: string; accent?: boolean }[];
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  pathways: { 
    name: string; 
    impact: string; 
    rating: number;
    details?: string;
    focuses?: string[];
  }[];
  highlight: string;
}

export const pravinData = {
  name: "Pravin E",
  title: "Graduate Engineer Power Plant Operations",
  location: "India (Willing to Relocate)",
  contact: {
    email: "pravinelumalai@gmail.com",
    phone: "+91 6381072320",
    linkedin: "https://www.linkedin.com/in/pravin-e-029713208",
  },
  about: "Graduate Engineer Power Plant Operations with hands-on experience in Distributed Control System (DCS) operations, supporting safe and reliable boiler, turbine, and generator performance. Skilled in process monitoring, Permit-to-Work (PTW) coordination, trend analysis, and cross-functional troubleshooting, with a strong foundation in power plant engineering and a growing focus on electrical power systems, renewable energy, and sustainable technologies.",
  
  experience: {
    company: "JSW Energy Ltd., India",
    role: "Graduate Engineer Trainee – Operations",
    period: "June 2025 – March 2026",
    responsibilities: [
      "Operated and monitored a gas-fired power plant through Distributed Control System (DCS), ensuring safe and reliable boiler, turbine, and generator operations.",
      "Supported plant start-ups, shutdowns, load changes and Permit-to-Work (PTW) activities while coordinating with mechanical, electrical and instrumentation teams.",
      "Monitored pressure, temperature, vibration and equipment trends to identify abnormalities and support operational reliability."
    ],
    kaizen: {
      title: "Kaizen Initiative – Condensate Extraction Pump (CEP) Optimization",
      description: "Contributed to a cross-functional Kaizen initiative focused on optimizing the Condensate Extraction Pump (CEP) during 65 MW part-load operation. The improvement involved Variable Frequency Drive (VFD) speed optimization together with a reduction of approximately 0.73 kg/cm² in CEP discharge pressure while maintaining safe plant operation.",
      details: {
        equipment: "Condensate Extraction Pump (CEP)",
        operatingCondition: "65 MW Part Load",
        optimization: "VFD Speed Optimization + 0.73 kg/cm² Discharge Pressure Reduction",
        powerSaving: "15 kW",
        annualSavings: "₹6.57 Lakh",
        apcImprovement: "~0.4%"
      },
      metrics: [
        { label: "Power Saving", value: "15 kW", accent: true },
        { label: "Annual Savings", value: "₹6.57 Lakh", accent: true },
        { label: "APC Improvement", value: "~0.4%", accent: false }
      ]
    }
  },

  education: [
    {
      id: "edu-1",
      degree: "PG Diploma",
      field: "Power Plant Engineering",
      institution: "National Power Training Institute",
      location: "Neyveli, Tamil Nadu, India",
      period: "Aug 2024 – Aug 2025"
    },
    {
      id: "edu-2",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry, India",
      period: "June 2020 – June 2024"
    }
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Control Systems",
      skills: ["Distributed Control System (DCS)", "SCADA Monitoring", "Permit-to-Work (PTW)"]
    },
    {
      title: "Operations & Generation",
      skills: ["Boiler Operation", "Turbine Operation", "Generator Operation", "Power Plant Startup", "Power Plant Shutdown"]
    },
    {
      title: "Enterprise Systems",
      skills: ["SAP (Basic)", "MS Excel", "MS Word", "PowerPoint"]
    },
    {
      title: "Core Programming",
      skills: ["C", "C++"]
    }
  ] as SkillCategory[],

  certifications: [
    {
      id: "cert-1",
      title: "800 MW Simulator TPP (Super Critical) Simulator Training",
      issuer: "National Power Training Institute (NPTI)",
      year: "2025"
    },
    {
      id: "cert-2",
      title: "Electric Power Systems",
      issuer: "University at Buffalo (SUNY) via Coursera",
      year: "2024"
    },
    {
      id: "cert-3",
      title: "Renewable Energy Engineering: Solar, Wind and Biomass Energy Systems",
      issuer: "NPTEL",
      year: "2024"
    },
    {
      id: "cert-4",
      title: "Next-Gen Energy Storage – Battery and Hydrogen Technology",
      issuer: "Coursera",
      year: "2024"
    },
    {
      id: "cert-5",
      title: "Essential Technologies for Business",
      issuer: "IBM",
      year: "2023"
    },
    {
      id: "cert-6",
      title: "AI for Everyone: Master the Basics",
      issuer: "edX",
      year: "2023"
    }
  ] as CertificationItem[],

  project: {
    id: "proj-1",
    title: "Environmental Aspects of Various Technologies Used for Hydrogen Generation",
    description: "Conducted a comparative environmental study of major hydrogen production technologies using Life Cycle Assessment (LCA), evaluating greenhouse gas emissions, water consumption, energy use, air pollutants, carbon neutrality, and sustainability. Compared renewable and fossil-fuel-based hydrogen pathways to identify environmentally sustainable hydrogen production methods and assess their long-term role in the clean energy transition.",
    pathways: [
      { 
        name: "Water Electrolysis (Green Hydrogen)", 
        impact: "Lowest Life-Cycle Impact", 
        rating: 95,
        details: "Renewable-powered water electrolysis offers the lowest life-cycle environmental impact. Achieves excellent carbon neutrality and eliminates direct carbon emissions, though water and electricity sourcing are critical considerations.",
        focuses: ["Carbon Neutrality", "Zero Direct GHG", "Renewable Powered"]
      },
      { 
        name: "Steam Methane Reforming (Grey Hydrogen)", 
        impact: "High GHG Emissions & Resource Depletion", 
        rating: 30,
        details: "Conventional fossil-fuel-based pathway with substantial carbon dioxide emissions (~9-12 kg CO2/kg H2) and high depletion of natural gas resources unless integrated with capture systems.",
        focuses: ["High GHG Footprint", "Fossil Resource Depletion", "Air Pollution"]
      },
      { 
        name: "Steam Methane Reforming with Carbon Capture (Blue Hydrogen)", 
        impact: "Moderate Impact / Transition Option", 
        rating: 70,
        details: "SMR with Carbon Capture and Storage (CCS) reduces direct process emissions by 85-95%, though upstream methane leaks and energy requirements for capture remain environmental risks.",
        focuses: ["Carbon Capture (CCS)", "Reduced Direct GHG", "Methane Leakage Risk"]
      },
      { 
        name: "Coal Gasification", 
        impact: "Highest Environmental & Air Pollution Footprint", 
        rating: 15,
        details: "Produces extremely high life-cycle greenhouse gas emissions (~18-20 kg CO2/kg H2) alongside heavy air pollutants (SOx, NOx, particulates) and critical water consumption levels.",
        focuses: ["Severe GHG Footprint", "High Air Pollution", "Intense Resource Depletion"]
      },
      { 
        name: "Biomass Gasification", 
        impact: "Low-to-Moderate Net Footprint", 
        rating: 72,
        details: "Utilizes organic feedstock for potential carbon-neutral operation. However, land-use change, biomass transport emissions, and intensive water footprint present regional ecological challenges.",
        focuses: ["Feedstock Sustainability", "Land-Use Impact", "Water Consumption"]
      },
      { 
        name: "Thermochemical Water Splitting", 
        impact: "Low Emission / High Thermal Demand", 
        rating: 68,
        details: "Driven by high-temperature heat from concentrated solar or nuclear power to split water. Offers near-zero operational emissions but has high initial infrastructure and material footprint.",
        focuses: ["High Thermal Sourcing", "Zero Production GHG", "Material Resource Depletion"]
      },
      { 
        name: "Methane Pyrolysis", 
        impact: "Low Process Emissions / Solid Carbon Output", 
        rating: 75,
        details: "Thermally splits methane into hydrogen and solid carbon black. Avoids gaseous CO2 emissions entirely and requires less electricity than electrolysis, but upstream natural gas footprint remains.",
        focuses: ["No Gaseous CO2", "Solid Carbon Byproduct", "Electricity & Heat Demand"]
      },
      { 
        name: "Photoelectrochemical Hydrogen Production", 
        impact: "Emerging Low-Emission Route", 
        rating: 80,
        details: "Direct solar-to-hydrogen water splitting using semiconductor electrodes. Zero production emissions, but currently bound by low conversion efficiency and scarce catalyst material depletion.",
        focuses: ["Direct Solar-to-H2", "Zero Operational GHG", "Rare Catalyst Depletion"]
      }
    ],
    highlight: "The study concluded that renewable-powered electrolysis (Green Hydrogen) offers the lowest life-cycle environmental impact, while conventional fossil-fuel-based pathways have significantly higher environmental impacts unless integrated with carbon capture technologies."
  } as ProjectItem
};
