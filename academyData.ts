import { CertificateCourse, Scholarship, ExternalResource } from "../types";
import { UNIVERSITY_LINKS } from "../constants";

export const CERTIFICATE_COURSES: CertificateCourse[] = [
  {
    id: "cert-bls",
    title: "Basic Life Support (BLS)",
    provider: "BioNurse Academy",
    duration: "4 Hours",
    credits: 3,
    description: "Fundamental CPR and AED usage for healthcare providers.",
    skills: ["CPR (Adult/Pediatric)", "AED Usage", "Choking Relief"],
    modules: [
      {
        id: "bls-1",
        title: "Chain of Survival",
        content: `**The Chain of Survival**\n\n1. Immediate recognition of cardiac arrest and activation of the emergency response system.\n2. Early CPR with an emphasis on chest compressions.\n3. Rapid defibrillation.\n4. Effective advanced life support.\n5. Integrated post-cardiac arrest care.`
      },
      {
        id: "bls-2",
        title: "High-Quality CPR",
        content: `**Critical Components:**\n\n*   **Rate:** 100-120 compressions per minute.\n*   **Depth:** At least 2 inches (5 cm) for adults.\n*   **Recoil:** Allow full chest recoil after each compression.\n*   **Interruptions:** Minimize interruptions to less than 10 seconds.`
      },
      {
        id: "bls-3",
        title: "AED Usage",
        content: `**Using an AED:**\n\n1. Power on the AED.\n2. Attach pads to bare chest (Upper right, lower left).\n3. Analyze rhythm (Clear the patient).\n4. Shock if advised.\n5. Resume CPR immediately.`
      }
    ],
    isCompleted: false
  },
  {
    id: "cert-acls",
    title: "Advanced Cardiac Life Support (ACLS)",
    provider: "BioNurse Academy",
    duration: "12 Hours",
    credits: 4,
    description: "Advanced algorithms for cardiac arrest, stroke, and ACS.",
    skills: ["Airway Management", "ECG Rhythm Recognition", "Megacode"],
    modules: [
      { id: "acls-1", title: "H's and T's", content: "**Reversible Causes of Arrest:**\n\nHypovolemia, Hypoxia, Hydrogen Ion (Acidosis), Hypo/Hyperkalemia, Hypothermia.\n\nTension Pneumothorax, Tamponade, Toxins, Thrombosis (Pulmonary), Thrombosis (Coronary)." },
      { id: "acls-2", title: "Cardiac Arrest Algorithm", content: "Review the VF/pVT pathway versus the Asystole/PEA pathway. Epinephrine 1mg every 3-5 mins. Amiodarone for refractory VF." }
    ],
    isCompleted: false
  },
  {
    id: "cert-wound",
    title: "Wound Care Management",
    provider: "BioNurse Academy",
    duration: "8 Weeks",
    credits: 3,
    description: "Specialized training in treating acute and chronic wounds.",
    skills: ["Staging Ulcers", "Debridement", "Dressing Selection"],
    modules: [
      { id: "wc-1", title: "Anatomy of Skin", content: "Epidermis, Dermis, Subcutaneous tissue. Functions: Protection, Sensation, Thermoregulation." },
      { id: "wc-2", title: "Pressure Ulcer Staging", content: "**Stage 1:** Non-blanchable erythema.\n**Stage 2:** Partial thickness loss.\n**Stage 3:** Full thickness loss (fat visible).\n**Stage 4:** Bone/Muscle exposed." }
    ],
    isCompleted: false
  },
  {
    id: "cert-pharma",
    title: "Clinical Pharmacology",
    provider: "BioNurse Academy",
    duration: "10 Weeks",
    credits: 4,
    description: "In-depth study of pharmacokinetics and drug interactions.",
    skills: ["Dosage Calc", "Drug Classes", "Adverse Reactions"],
    modules: [
       { id: "ph-1", title: "Pharmacokinetics", content: "ADME: Absorption, Distribution, Metabolism, Excretion."}
    ],
    isCompleted: false
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "sch-1",
    title: "Liberian Nursing Association Scholarship",
    organization: "LNA / Ministry of Health",
    amount: "$500 - Full Tuition",
    deadline: "August 30, 2024",
    location: "Liberia",
    description: "Financial assistance for nursing students enrolled in accredited Liberian institutions (Tubman University, Cuttington, etc.).",
    eligibility: "Must be a Liberian citizen, GPA > 3.0, Nursing Major.",
    applyLink: "https://moh.gov.lr/"
  },
  {
    id: "sch-2",
    title: "Ellen Johnson Sirleaf Education Fund",
    organization: "EJS Center",
    amount: "Partial Tuition + Stipend",
    deadline: "December 15, 2024",
    location: "Liberia / Africa",
    description: "Supporting women in public service and healthcare education across Africa.",
    eligibility: "Female students in healthcare, Leadership potential.",
    applyLink: "https://www.ejscenter.org/"
  },
  {
    id: "sch-3",
    title: "Global Health Nursing Fellowship",
    organization: "Doctors Without Borders (MSF)",
    amount: "Fully Funded Training",
    deadline: "Rolling Admission",
    location: "International",
    description: "Training program for nurses willing to work in crisis zones and low-resource settings.",
    eligibility: "Registered Nurses with 2 years experience.",
    applyLink: "https://www.msf.org/"
  },
  {
    id: "sch-4",
    title: "Tubman University Merit Grant",
    organization: "William V.S. Tubman University",
    amount: "Tuition Waiver",
    deadline: "September 1, 2024",
    location: "Maryland Co., Liberia",
    description: "Merit-based grant for top-performing students in the College of Health Sciences.",
    eligibility: "Current TU student, GPA > 3.5.",
    applyLink: "https://www.tubman.edu.lr/"
  },
  {
    id: "sch-5",
    title: "MasterCard Foundation Scholars Program",
    organization: "MasterCard Foundation",
    amount: "Full Scholarship",
    deadline: "Various",
    location: "Africa / Global",
    description: "Comprehensive scholarship for academically talented youth from Africa facing economic hardship.",
    eligibility: "Leadership potential, academic excellence.",
    applyLink: "https://mastercardfdn.org/all/scholars/"
  },
  {
    id: "sch-6",
    title: "Chevening Scholarships",
    organization: "UK Government",
    amount: "Full Funding",
    deadline: "November 2024",
    location: "UK (International)",
    description: "Fully funded master's degrees in the UK for future leaders.",
    eligibility: "Undergraduate degree, 2 years work experience.",
    applyLink: "https://www.chevening.org/"
  }
];

export const EXTERNAL_RESOURCES: ExternalResource[] = [
  {
    id: "uni-1",
    title: "University of Liberia (UL)",
    platform: "University Website",
    url: UNIVERSITY_LINKS.UL,
    description: "Official portal for the College of Health Sciences and nursing program admissions.",
    tags: ["Liberia", "Nursing School", "University"],
    isFree: true
  },
  {
    id: "uni-2",
    title: "Cuttington University",
    platform: "University Website",
    url: UNIVERSITY_LINKS.CUTTINGTON,
    description: "Premier nursing education in Suacoco, Bong County. Check for scholarship opportunities.",
    tags: ["Liberia", "Nursing School", "University"],
    isFree: true
  },
  {
    id: "uni-3",
    title: "Tubman University",
    platform: "University Website",
    url: UNIVERSITY_LINKS.TUBMAN,
    description: "Quality health sciences education in Harper, Maryland County.",
    tags: ["Liberia", "Nursing School", "University"],
    isFree: true
  },
  {
    id: "ext-1",
    title: "Coursera: Vital Signs",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/vital-signs",
    description: "Understand the anatomy and physiology underlying the vital signs.",
    tags: ["Basic", "Vitals"],
    isFree: true
  },
  {
    id: "ext-2",
    title: "edX: Global Health Nursing",
    platform: "edX",
    url: "https://www.edx.org/learn/nursing",
    description: "Courses from top universities on global health challenges.",
    tags: ["Public Health", "Advanced"],
    isFree: true
  },
  {
    id: "ext-4",
    title: "Nursing World (ANA)",
    platform: "ANA",
    url: "https://www.nursingworld.org/",
    description: "Continuing education and certification for nurses.",
    tags: ["Professional", "CEU"],
    isFree: false
  },
  {
    id: "ext-5",
    title: "Stanford Medicine Online",
    platform: "Stanford",
    url: "https://med.stanford.edu/cme.html",
    description: "High-quality medical education and seminars.",
    tags: ["Advanced", "Research"],
    isFree: true
  }
];

export const DEGREE_PATHS = [
  {
    title: "Associate Degree in Nursing (ADN)",
    duration: "2 Years",
    focus: "Clinical Skills, NCLEX-RN Prep",
    status: "Open for Enrollment"
  },
  {
    title: "Bachelor of Science in Nursing (BSN)",
    duration: "4 Years",
    focus: "Leadership, Research, Public Health",
    status: "Prerequisites Required"
  },
  {
    title: "Master of Science in Nursing (MSN)",
    duration: "2 Years (Post-BSN)",
    focus: "Education, Informatics, or NP",
    status: "Waitlist"
  }
];