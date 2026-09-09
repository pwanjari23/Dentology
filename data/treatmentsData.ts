export interface TreatmentItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category:
    | "Smile & Aesthetics"
    | "Restorative & Reconstructive"
    | "Pain, Jaw & Sleep"
    | "Specialized Care"
    | "Consultation";
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  whatIsIt: string;
  whoMayBenefit: string[];
  whatToExpect: string[];
  highlights: string[];
  image: string;
  featured: boolean;
  displayOrder: number;
  technology: string;
  keywords: string[];
}

export const treatmentCategoriesList = [
  { id: "all", name: "All Treatments", slug: "all" },
  { id: "smile-aesthetics", name: "Smile & Aesthetics", slug: "smile-aesthetics" },
  { id: "restorative-reconstructive", name: "Restorative & Reconstructive", slug: "restorative-reconstructive" },
  { id: "pain-jaw-sleep", name: "Pain, Jaw & Sleep", slug: "pain-jaw-sleep" },
  { id: "specialized-care", name: "Specialized Care", slug: "specialized-care" },
  { id: "consultation", name: "Consultation", slug: "consultation" },
];

export const treatmentsData: TreatmentItem[] = [
  // ================= CATEGORY 01: SMILE & AESTHETICS =================
  {
    id: "smile-design",
    slug: "smile-design",
    number: "01",
    title: "Smile Design",
    category: "Smile & Aesthetics",
    categorySlug: "smile-aesthetics",
    shortDescription:
      "A personalized, digital approach to creating a balanced, natural-looking smile tailored to your facial features.",
    fullDescription:
      "Smile Design combines digital evaluation and aesthetic discernment to plan subtle or complete smile enhancements. We analyze tooth alignment, shade harmony, and facial proportions to design a smile that feels completely authentic to you.",
    whatIsIt:
      "A comprehensive cosmetic assessment using digital photography and non-invasive planning to visualize your optimal smile alignment and tooth contour before care begins.",
    whoMayBenefit: [
      "Patients seeking symmetrical, natural smile aesthetics",
      "Individuals with chipped, uneven, or discolored teeth",
      "Anyone desiring a confident smile upgrade prior to major life events",
    ],
    whatToExpect: [
      "Initial digital photo & 3D scan mapping session",
      "Co-design discussion of shape, shade, and alignment options",
      "Conservative placement of custom aesthetic veneers or restorations",
    ],
    highlights: ["Digital Smile Mapping", "Zero Unnecessary Enamel Removal", "Natural Shade Balance"],
    image: "/images/treatments/smile-aesthetics.jpg",
    featured: true,
    displayOrder: 1,
    technology: "HD Digital Intraoral Scan & Aesthetic Simulation",
    keywords: ["smile design", "veneers", "cosmetic dentistry", "smile makeover", "aesthetics"],
  },
  {
    id: "cosmetic-aesthetic-dentistry",
    slug: "cosmetic-aesthetic-dentistry",
    number: "02",
    title: "Cosmetic / Aesthetic Dentistry",
    category: "Smile & Aesthetics",
    categorySlug: "smile-aesthetics",
    shortDescription:
      "Refined aesthetic enhancements designed to preserve natural tooth structure while perfecting smile harmony.",
    fullDescription:
      "Aesthetic dentistry focuses on enhancing the visual appeal of your teeth while maintaining structural tooth health. From micro-bonding to ceramic contouring, our protocols prioritize natural translucency and gum health.",
    whatIsIt:
      "Custom aesthetic treatments including composite tooth bonding, subtle tooth reshaping, and bio-compatible cosmetic tooth restorations.",
    whoMayBenefit: [
      "Patients with worn edges or minor gaps between teeth",
      "Individuals wanting conservative aesthetic refinements",
      "Patients seeking long-lasting, natural-looking restorations",
    ],
    whatToExpect: [
      "Detailed clinical examination of tooth shade and enamel health",
      "Precise tooth preparation with minimal enamel touch",
      "Polishing and bonding for a smooth, joyful smile finish",
    ],
    highlights: ["Bio-Compatible Composite Bonding", "Conservative Contouring", "Painless Application"],
    image: "/images/treatments/smile-aesthetics.jpg",
    featured: true,
    displayOrder: 2,
    technology: "Micro-composite layering & shade matching",
    keywords: ["cosmetic dentistry", "bonding", "aesthetic dentist", "smile repair"],
  },
  {
    id: "bleaching-tooth-whitening",
    slug: "bleaching-tooth-whitening",
    number: "03",
    title: "Bleaching (Tooth Whitening)",
    category: "Smile & Aesthetics",
    categorySlug: "smile-aesthetics",
    shortDescription:
      "Safe, clinically monitored tooth whitening for a brighter, naturally radiant smile.",
    fullDescription:
      "Gentle professional tooth bleaching effectively removes deep enamel stains caused by coffee, tea, or age, restoring a fresh, luminous smile without damaging enamel integrity.",
    whatIsIt:
      "Clinically supervised tooth whitening application utilizing enamel-safe remineralizing formulas.",
    whoMayBenefit: [
      "Patients with surface or age-related enamel discoloration",
      "Individuals looking for quick, safe smile brightening",
      "Patients preparing for special occasions",
    ],
    whatToExpect: [
      "Pre-whitening enamel and sensitivity check",
      "Controlled, comfortable application in clinic",
      "Immediate noticeable shade brightening",
    ],
    highlights: ["Enamel-Safe Formula", "Sensitivity Prevention", "Immediate Brightness"],
    image: "/images/treatments/smile-aesthetics.jpg",
    featured: false,
    displayOrder: 3,
    technology: "LED-assisted gentle whitening system",
    keywords: ["whitening", "bleaching", "teeth whitening", "bright smile"],
  },
  {
    id: "invisible-clear-braces",
    slug: "invisible-clear-braces",
    number: "04",
    title: "Invisible / Clear Braces",
    category: "Smile & Aesthetics",
    categorySlug: "smile-aesthetics",
    shortDescription:
      "Discreet, removable clear aligners to gently straighten teeth without traditional metal wires.",
    fullDescription:
      "Clear aligner therapy offers an almost invisible way to align crowded or spaced teeth. Custom 3D digital scans are used to engineer custom transparent aligner trays that gently shift teeth into optimal positions.",
    whatIsIt:
      "3D digital aligner treatment that replaces noticeable metal brackets with clear, comfortable aligners.",
    whoMayBenefit: [
      "Adults and teens wanting discreet teeth alignment",
      "Patients looking for comfortable, removable braces",
      "Individuals with mild to moderate tooth crowding or gaps",
    ],
    whatToExpect: [
      "100% putty-free 3D digital intraoral scan",
      "Interactive 3D simulation preview of your alignment journey",
      "Set of custom transparent aligner trays changed periodically",
    ],
    highlights: ["100% Transparent Aligners", "Removable for Eating & Brushing", "3D Digital Precision"],
    image: "/images/treatments/intraoral-scan.jpg",
    featured: true,
    displayOrder: 4,
    technology: "3D Aligner Simulation Software",
    keywords: ["clear braces", "invisible aligners", "teeth alignment", "orthodontics"],
  },
  {
    id: "teeth-straightening",
    slug: "teeth-straightening",
    number: "05",
    title: "Teeth Straightening",
    category: "Smile & Aesthetics",
    categorySlug: "smile-aesthetics",
    shortDescription:
      "Comprehensive bite alignment and tooth positioning for enhanced oral function and aesthetics.",
    fullDescription:
      "Teeth straightening improves bite mechanics, prevents uneven tooth wear, and creates harmonious smile aesthetics using modern orthodontic protocols.",
    whatIsIt:
      "Targeted alignment of misplaced, crooked, or rotated teeth for long-term health and aesthetics.",
    whoMayBenefit: [
      "Patients with biting discomfort or uneven tooth wear",
      "Individuals seeking long-term structural bite correction",
    ],
    whatToExpect: [
      "Comprehensive bite & jaw joint evaluation",
      "Customized alignment plan",
      "Progressive guidance for stable results",
    ],
    highlights: ["Improved Bite Mechanics", "Prevents Tooth Wear", "Long-term Alignment"],
    image: "/images/treatments/intraoral-scan.jpg",
    featured: false,
    displayOrder: 5,
    technology: "Digital Occlusal Analysis",
    keywords: ["teeth straightening", "orthodontics", "bite correction"],
  },
  {
    id: "wedding-smile-planner",
    slug: "wedding-smile-planner",
    number: "06",
    title: "Wedding Smile Planner",
    category: "Smile & Aesthetics",
    categorySlug: "smile-aesthetics",
    shortDescription:
      "Curated, timeline-driven smile refinement packages designed specifically for brides, grooms, and families.",
    fullDescription:
      "Our Wedding Smile Planner organizes aesthetic enhancements—from gentle cleaning and polishing to whitening and alignment—into a stress-free schedule ahead of your big day.",
    whatIsIt:
      "A personalized aesthetic countdown program structured around your wedding date.",
    whoMayBenefit: [
      "Brides and grooms wanting picture-perfect smiles",
      "Family members seeking quick aesthetic touch-ups",
    ],
    whatToExpect: [
      "Timeline consultation mapping care leading up to wedding events",
      "Custom combination of cleaning, whitening, and aesthetic bonding",
    ],
    highlights: ["Custom Timeline Planning", "Stress-Free Scheduling", "Radiant Wedding Photography Results"],
    image: "/images/treatments/smile-aesthetics.jpg",
    featured: false,
    displayOrder: 6,
    technology: "Aesthetic Timeline Mapping",
    keywords: ["wedding smile", "bridal dentistry", "smile package"],
  },

  // ================= CATEGORY 02: RESTORATIVE & RECONSTRUCTIVE =================
  {
    id: "implant-rehabilitation",
    slug: "implant-rehabilitation",
    number: "07",
    title: "Implant Rehabilitation",
    category: "Restorative & Reconstructive",
    categorySlug: "restorative-reconstructive",
    shortDescription:
      "Biocompatible dental implants designed to replace missing teeth with natural strength and stability.",
    fullDescription:
      "Dental implant rehabilitation restores missing teeth by anchoring a durable, biocompatible post into the jawbone, capped with a custom ceramic tooth crown that looks and feels completely natural.",
    whatIsIt:
      "Permanent replacement of missing tooth roots with precision dental implants and porcelain crowns.",
    whoMayBenefit: [
      "Patients missing one or more natural teeth",
      "Individuals wanting a permanent alternative to removable dentures",
      "Patients seeking restored chewing strength and jawbone preservation",
    ],
    whatToExpect: [
      "3D digital bone density and position planning",
      "Gentle, precision implant placement",
      "Custom ceramic crown attachment for seamless aesthetics",
    ],
    highlights: ["Biocompatible Materials", "Restores Full Chewing Power", "Preserves Facial Structure"],
    image: "/images/treatments/tooth-preservation.jpg",
    featured: true,
    displayOrder: 7,
    technology: "3D Digital Guided Implant Placement",
    keywords: ["dental implants", "implant rehabilitation", "missing teeth replacement"],
  },
  {
    id: "oral-rehabilitation",
    slug: "oral-rehabilitation",
    number: "08",
    title: "Oral Rehabilitation",
    category: "Restorative & Reconstructive",
    categorySlug: "restorative-reconstructive",
    shortDescription:
      "Integrated restoration of damaged or broken teeth to rebuild oral comfort, health, and function.",
    fullDescription:
      "Oral rehabilitation addresses multiple dental concerns—such as worn enamel, broken fillings, or tooth loss—through a coordinated restorative treatment plan.",
    whatIsIt:
      "Comprehensive restorative care restoring chewing function, enamel strength, and oral health.",
    whoMayBenefit: [
      "Patients with multiple damaged or cracked teeth",
      "Individuals experiencing chewing difficulty or tooth breakdown",
    ],
    whatToExpect: [
      "Complete oral health audit & diagnostic 3D scan",
      "Phased treatment schedule prioritizing pain relief & structure",
    ],
    highlights: ["Coordinated Care Plan", "Restores Full Function", "Conservative Protocols"],
    image: "/images/treatments/tooth-preservation.jpg",
    featured: false,
    displayOrder: 8,
    technology: "Multi-point Occlusal Reconstruction",
    keywords: ["oral rehabilitation", "restorative dentistry", "broken teeth repair"],
  },
  {
    id: "full-mouth-rehabilitation",
    slug: "full-mouth-rehabilitation",
    number: "09",
    title: "Full Mouth Rehabilitation",
    category: "Restorative & Reconstructive",
    categorySlug: "restorative-reconstructive",
    shortDescription:
      "A holistic, precision-planned treatment to rebuild severe tooth wear, jaw alignment, and overall function.",
    fullDescription:
      "Full Mouth Rehabilitation combines restorative crowns, bridges, and alignment techniques to rebuild worn teeth, establish comfortable bite height, and restore natural aesthetics.",
    whatIsIt:
      "Full jaw occlusal & restorative reconstruction for heavily worn or severely damaged dental arches.",
    whoMayBenefit: [
      "Patients with extensive tooth wear from acid erosion or grinding",
      "Individuals with collapsed bite height causing facial fatigue",
    ],
    whatToExpect: [
      "3D digital model simulation of updated bite height",
      "Step-by-step restoration placement",
    ],
    highlights: ["Restores Bite Height", "Relieves Jaw Strain", "Complete Functional Renewal"],
    image: "/images/treatments/tooth-preservation.jpg",
    featured: true,
    displayOrder: 9,
    technology: "3D Virtual Bite Articulation",
    keywords: ["full mouth rehabilitation", "severe tooth wear", "reconstructive dentistry"],
  },
  {
    id: "re-rct",
    slug: "re-rct",
    number: "10",
    title: "Re-RCT (Tooth Preservation)",
    category: "Restorative & Reconstructive",
    categorySlug: "restorative-reconstructive",
    shortDescription:
      "Advanced conservative endodontic retreatment to resolve deep infections and save failing root canal teeth.",
    fullDescription:
      "When a previously treated root canal develops recurring infection, Re-RCT cleans deep microscopic canals to save the natural tooth root from extraction.",
    whatIsIt:
      "Microscopic endodontic retreatment aimed at saving compromised natural teeth.",
    whoMayBenefit: [
      "Patients with lingering pain or infection in a previously treated tooth",
      "Individuals determined to avoid tooth extraction",
    ],
    whatToExpect: [
      "Precision diagnosis of root canal anatomy",
      "Thorough disinfection and bio-compatible sealing",
    ],
    highlights: ["Natural Tooth Preservation", "Microscopic Infection Removal", "Avoids Extraction"],
    image: "/images/treatments/tooth-preservation.jpg",
    featured: false,
    displayOrder: 10,
    technology: "Endodontic Micro-Disinfection",
    keywords: ["re-rct", "root canal retreatment", "tooth preservation", "endodontics"],
  },

  // ================= CATEGORY 03: PAIN, JAW & SLEEP =================
  {
    id: "treatment-orofacial-pain",
    slug: "treatment-orofacial-pain",
    number: "11",
    title: "Treatment of Orofacial Pain",
    category: "Pain, Jaw & Sleep",
    categorySlug: "pain-jaw-sleep",
    shortDescription:
      "Diagnostic clinical relief for persistent facial pain, jaw soreness, and unexplained dental discomfort.",
    fullDescription:
      "Orofacial pain management identifies non-dental and jaw-related pain triggers, providing conservative therapeutic relief for chronic facial stiffness, headaches, and muscle tightness.",
    whatIsIt:
      "Clinical evaluation and targeted therapy for chronic facial, muscle, and nerve discomfort.",
    whoMayBenefit: [
      "Patients suffering from unexplained facial pain or muscle soreness",
      "Individuals experiencing frequent tension headaches linked to jaw clenching",
    ],
    whatToExpect: [
      "Detailed muscle and jaw nerve evaluation",
      "Non-invasive therapeutic care plan",
    ],
    highlights: ["Targeted Pain Relief", "Non-Surgical Protocol", "Comprehensive Diagnosis"],
    image: "/images/treatments/enamel-care.jpg",
    featured: false,
    displayOrder: 11,
    technology: "Neuromuscular & Joint Assessment",
    keywords: ["orofacial pain", "facial pain treatment", "jaw soreness relief"],
  },
  {
    id: "tmj-disorder-treatment",
    slug: "tmj-disorder-treatment",
    number: "12",
    title: "TMJ Disorder Treatment",
    category: "Pain, Jaw & Sleep",
    categorySlug: "pain-jaw-sleep",
    shortDescription:
      "Specialized management of jaw clicking, locking, and temporomandibular joint tension.",
    fullDescription:
      "TMJ disorder treatment addresses jaw joint misalignment, clicking sounds, and painful jaw opening through custom occlusal splints and therapeutic joint decompression.",
    whatIsIt:
      "Therapeutic care for temporomandibular joint dysfunction and associated jaw clicking.",
    whoMayBenefit: [
      "Patients experiencing jaw clicking, popping, or painful opening",
      "Individuals who clench or grind teeth during sleep (bruxism)",
    ],
    whatToExpect: [
      "Jaw range of motion measurement",
      "Custom protective night guard / splint fabrication",
    ],
    highlights: ["Custom Night Splints", "Joint Decompression", "Prevents Tooth Grinding Damage"],
    image: "/images/treatments/enamel-care.jpg",
    featured: false,
    displayOrder: 12,
    technology: "Digital Occlusal Splint Design",
    keywords: ["tmj disorder", "jaw clicking", "tmj treatment", "bruxism night guard"],
  },
  {
    id: "dental-sleep-medicine",
    slug: "dental-sleep-medicine",
    number: "13",
    title: "Dental Sleep Medicine",
    category: "Pain, Jaw & Sleep",
    categorySlug: "pain-jaw-sleep",
    shortDescription:
      "Custom oral appliance therapy for snoring management and obstructive sleep apnea.",
    fullDescription:
      "Dental Sleep Medicine utilizes custom oral appliances to hold the lower jaw comfortably forward during sleep, keeping upper airways open and reducing snoring without bulky CPAP machines.",
    whatIsIt:
      "Non-invasive oral appliance therapy for snoring and mild-to-moderate obstructive sleep apnea.",
    whoMayBenefit: [
      "Individuals suffering from heavy snoring or nighttime airway resistance",
      "Patients seeking an alternative to uncomfortable CPAP masks",
    ],
    whatToExpect: [
      "Airway evaluation & sleep history assessment",
      "Custom digital impression for a lightweight oral appliance",
    ],
    highlights: ["CPAP Alternative", "Compact & Travel Friendly", "Improves Nighttime Oxygenation"],
    image: "/images/treatments/intraoral-scan.jpg",
    featured: true,
    displayOrder: 13,
    technology: "Digital Airway Appliance Fabrication",
    keywords: ["dental sleep medicine", "snoring treatment", "sleep apnea appliance"],
  },

  // ================= CATEGORY 04: SPECIALIZED CARE =================
  {
    id: "sedation-dentistry",
    slug: "sedation-dentistry",
    number: "14",
    title: "Sedation Dentistry",
    category: "Specialized Care",
    categorySlug: "specialized-care",
    shortDescription:
      "Relaxed, stress-free dental care for anxious patients or extensive clinical procedures.",
    fullDescription:
      "Sedation dentistry helps fearful or sensitive patients undergo dental care in a state of calm relaxation under continuous safety monitoring.",
    whatIsIt:
      "Gentle sedation protocols designed to dissolve dental anxiety during appointments.",
    whoMayBenefit: [
      "Patients with severe dental anxiety or phobia",
      "Individuals undergoing complex or multi-step procedures",
    ],
    whatToExpect: [
      "Pre-procedure medical evaluation",
      "Relaxing sedation administration with constant vital tracking",
    ],
    highlights: ["Stress-Free Experience", "Continuous Vital Monitoring", "Gentle Care"],
    image: "/images/treatments/intraoral-scan.jpg",
    featured: false,
    displayOrder: 14,
    technology: "Monitored Sedation Protocol",
    keywords: ["sedation dentistry", "painless dentist", "anxiety free dentistry"],
  },
  {
    id: "oral-maxillofacial-surgery",
    slug: "oral-maxillofacial-surgery",
    number: "15",
    title: "Oral and Maxillofacial Surgery",
    category: "Specialized Care",
    categorySlug: "specialized-care",
    shortDescription:
      "Expert surgical procedures including gentle wisdom tooth removal and bone preservation.",
    fullDescription:
      "Our surgical care provides gentle, precise extractions of impacted wisdom teeth, surgical root care, and bone grafting performed with strict sterile standards.",
    whatIsIt:
      "Surgical dental care focusing on wisdom teeth, surgical pathology, and bone management.",
    whoMayBenefit: [
      "Patients with painful or impacted wisdom teeth",
      "Individuals requiring specialized surgical care",
    ],
    whatToExpect: [
      "3D digital radiograph scan of tooth position",
      "Gentle, atraumatic surgical technique for rapid healing",
    ],
    highlights: ["Atraumatic Technique", "3D Surgical Mapping", "Fast Healing Protocol"],
    image: "/images/treatments/tooth-preservation.jpg",
    featured: false,
    displayOrder: 15,
    technology: "3D Surgical Imaging",
    keywords: ["oral surgery", "wisdom tooth extraction", "maxillofacial"],
  },
  {
    id: "thumb-sucking-habit-breaker",
    slug: "thumb-sucking-habit-breaker",
    number: "16",
    title: "Thumb Sucking Habit Breaker",
    category: "Specialized Care",
    categorySlug: "specialized-care",
    shortDescription:
      "Gentle pediatric appliances to correct persistent oral habits and protect natural jaw growth.",
    fullDescription:
      "Habit breaker therapy uses comfortable, non-punitive oral appliances to help children discontinue thumb sucking or tongue thrusting before jaw development is impacted.",
    whatIsIt:
      "Pediatric habit correction appliances protecting developing dental arches.",
    whoMayBenefit: [
      "Children with prolonged thumb sucking or tongue thrusting habits",
      "Parents wanting to prevent future severe teeth misalignment",
    ],
    whatToExpect: [
      "Friendly pediatric consultation",
      "Custom fitting of a smooth, comfortable habit breaker appliance",
    ],
    highlights: ["Child-Friendly Design", "Protects Jaw Growth", "Prevents Severe Malocclusion"],
    image: "/images/treatments/enamel-care.jpg",
    featured: false,
    displayOrder: 16,
    technology: "Pediatric Appliance Customization",
    keywords: ["thumb sucking breaker", "habit breaker", "pediatric dentistry"],
  },

  // ================= CATEGORY 05: CONSULTATION =================
  {
    id: "general-dental-consultation",
    slug: "general-dental-consultation",
    number: "17",
    title: "Dental Consultation & Diagnostics",
    category: "Consultation",
    categorySlug: "consultation",
    shortDescription:
      "An unhurried, comprehensive oral health audit and consultation with Dr. Sanika Sharma.",
    fullDescription:
      "Your consultation is an authentic dialogue about your health. Dr. Sanika Sharma evaluates enamel thickness, gum health, and biting mechanics to create a personalized care roadmap.",
    whatIsIt:
      "Comprehensive diagnostic audit and clinical conversation.",
    whoMayBenefit: [
      "New patients establishing dental care in Jaripatka",
      "Anyone seeking a second opinion or comprehensive check-up",
    ],
    whatToExpect: [
      "Detailed clinical conversation about your goals & symptoms",
      "Gentle oral inspection & digital scan review",
      "Clear explanation of care options without pressure",
    ],
    highlights: ["Unhurried Dialogue", "Transparent Care Advice", "No Unnecessary Suggestions"],
    image: "/images/treatments/intraoral-scan.jpg",
    featured: false,
    displayOrder: 17,
    technology: "3D Intraoral HD Scan Review",
    keywords: ["dental consultation", "checkup", "dentist near me", "jaripatka dentist"],
  },
];
