export type NavItem = {
  path: string;
  label: string;
};

export type CompanyEntity = {
  name: string;
  region: string;
};

export type CompanyProfile = {
  id: string;
  brandName: string;
  legalNames: string[];
  entities?: CompanyEntity[];
  focus: string;
  region: string;
  description: string;
  logoSrc: string;
  accent: "teal" | "plum" | "gold";
  logoTone: "light" | "dark";
  href?: string;
};

export type ValueItem = {
  id: string;
  title: string;
  description: string;
  accent: "teal" | "plum" | "gold" | "slate" | "charcoal";
};

export type WhyItem = {
  id: string;
  title: string;
  description: string;
};

export type HowWeWorkBenefit = {
  id: string;
  title: string;
  description: string;
  accent: "teal" | "plum" | "indigo" | "gold";
};

export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href?: string;
  accent: "teal" | "plum" | "gold" | "charcoal";
};

export type OfficeLocation = {
  id: string;
  name: string;
  addressLines: string[];
  telephoneDisplay: string;
  telephoneHref: string;
};

export class SiteContent {
  public static readonly brandName = "Specitas Group";

  public static readonly tagline =
    "Specialized Expertise. Integrated Solutions. Better Outcomes.";

  public static readonly contactEmail = "contact@specitas.com";

  public static readonly contactPhone = "+971 (7) 233 7367";

  public static readonly websiteUrl = "https://www.specitas.com";

  public static readonly websiteDisplay = "www.specitas.com";

  public static readonly presenceLabel = "UAE · Lebanon · Middle East";

  public static readonly offices: OfficeLocation[] = [
    {
      id: "uae",
      name: "UAE Office",
      addressLines: [
        "Julphar Office Tower, Office 4203",
        "Al Hisn Road",
        "Ras Al Khaimah, UAE",
      ],
      telephoneDisplay: "+971 (7) 233 7367",
      telephoneHref: "tel:+97172337367",
    },
    {
      id: "beirut",
      name: "Beirut Office",
      addressLines: [
        "Abu Diab Building, Level 2",
        "Old Saida Road, Seaside",
        "Khalde, Lebanon",
      ],
      telephoneDisplay: "+961 (5) 806 331",
      telephoneHref: "tel:+9615806331",
    },
  ];

  public static readonly logoMarkSrc = "/assets/brand/specitas-mark.png";

  public static readonly logoFullSrc = "/assets/brand/specitas-group-logo.png";

  public static readonly logoTexturedSrc =
    "/assets/brand/specitas-mark-textured.png";

  public static readonly logoHeroMarkSrc =
    "/assets/brand/specitas-hero-mark-clear.png";

  public static readonly pageBackgroundSrc =
    "/assets/backgrounds/specitas-web-bg.png";

  public static readonly homeVideoSrc =
    "/assets/video/company-of-the-year-2026.mp4";

  public static readonly navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/companies", label: "Companies" },
    { path: "/how-we-work", label: "How We Work" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  public static readonly careersPortalUrl = "https://career.specitas.com";

  public static readonly careers = {
    label: "Careers",
    titleBefore: "Build your next chapter ",
    titleAccent: "with Specitas.",
    lead:
      "Join a consortium of specialist companies delivering technical consultancy and business advisory across the Middle East. Explore open roles and opportunities on our careers portal.",
    ctaLabel: "Visit career.specitas.com",
    portalDisplay: "career.specitas.com",
    points: [
      {
        id: "specialist",
        title: "Specialist expertise",
        description:
          "Work within focused member companies while collaborating across the Specitas Group network.",
      },
      {
        id: "regional",
        title: "Regional impact",
        description:
          "Contribute to projects across the UAE, Lebanon, and the wider MENA region.",
      },
      {
        id: "growth",
        title: "Professional growth",
        description:
          "Grow through technically sound work, trusted partnerships, and high professional standards.",
      },
    ],
  };

  public static readonly hero = {
    headline: "Building Better Projects Through Specialized Expertise",
    support:
      "A multidisciplinary consultancy group uniting specialist companies across technical specification, technical support, and business advisory services throughout the Middle East.",
    primaryCta: { label: "Explore the Group", path: "/companies" },
    secondaryCta: { label: "Get in Touch", path: "/contact" },
  };

  public static readonly aboutHero = {
    eyebrow: "A New Chapter Begins",
    headlinePrimary: "Specialized Expertise.",
    headlineAccent: "Shared Vision.",
    support:
      "Specitas Group unites specialist companies across technical consultancy and business advisory — delivering coordinated expertise with independent excellence.",
    primaryCta: { label: "Discover Our Group", path: "/companies" },
  };

  public static readonly homeValues: ValueItem[] = [
    {
      id: "precision",
      title: "Precision",
      description: "We focus on the details that build the foundation.",
      accent: "teal",
    },
    {
      id: "integrity",
      title: "Integrity",
      description: "We operate with honesty, transparency and trust.",
      accent: "plum",
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We embrace new ideas to create better solutions.",
      accent: "gold",
    },
    {
      id: "excellence",
      title: "Excellence",
      description: "We deliver quality that makes a lasting impact.",
      accent: "charcoal",
    },
  ];

  public static readonly whoWeAre = {
    label: "Who We Are",
    title: "Specialized companies. One coordinated identity.",
    paragraphs: [
      "Specitas Group is a multidisciplinary consultancy group bringing together specialized companies that provide technical specification consultancy, technical support, and business advisory services across the Middle East.",
      "Our Group was established to unite complementary expertise under one identity while allowing each member company to maintain its independence and specialization. Through this structure, clients benefit from integrated knowledge, consistent quality standards, and access to highly experienced professionals throughout every stage of a project.",
      "Specitas Group is a consortium of specialist consulting companies operating across the UAE, Lebanon, and the wider MENA region. Rather than offering every service under one company, we believe expertise should remain specialized.",
    ],
    benefits: [
      "Specialized technical expertise",
      "Integrated project delivery",
      "Consistent quality across all services",
      "Regional knowledge with international standards",
      "Flexible engagement models for projects of every scale",
    ],
  };

  public static readonly visionMission = {
    vision: {
      label: "Our Vision",
      text: "To become the Middle East's leading group of specialist consulting companies, recognized for technical excellence, integrity, and delivering measurable value to every project.",
    },
    mission: {
      label: "Our Mission",
      text: "To empower the construction and business sectors by providing specialist consultancy services that combine technical expertise, practical experience, and collaborative thinking, enabling clients to make better decisions and deliver better projects.",
    },
  };

  public static readonly values: ValueItem[] = [
    {
      id: "precision",
      title: "Precision",
      description:
        "We believe quality begins with accuracy. Every recommendation, specification, and deliverable is prepared with attention to detail and technical rigor.",
      accent: "teal",
    },
    {
      id: "expertise",
      title: "Expertise",
      description:
        "Our companies are led by specialists with extensive industry experience, allowing us to solve complex challenges with confidence.",
      accent: "plum",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description:
        "We work as one team across multiple disciplines, ensuring our clients receive coordinated advice and seamless project support.",
      accent: "gold",
    },
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We build long-term relationships through transparency, professionalism, and accountability.",
      accent: "slate",
    },
    {
      id: "adaptability",
      title: "Adaptability",
      description:
        "Every project is different. We tailor our services to suit each client's objectives, project type, procurement strategy, and regional requirements.",
      accent: "charcoal",
    },
  ];

  public static readonly companiesSection = {
    label: "Our Group Companies",
    title: "Three Companies. One Consortium. Shared Excellence.",
  };

  public static readonly companies: CompanyProfile[] = [
    {
      id: "cb-consultant",
      brandName: "C&B Consultant",
      legalNames: ["C&B Consultant LLC OPC"],
      focus: "Specification Consultancy & Technical Support",
      region: "UAE",
      description:
        "Architectural, interior, landscape, and engineering specification consultancy, specification management, compliance reviews, material advisory, and technical documentation for complex construction projects.",
      logoSrc: "/assets/brand/cb-consult-official.png",
      accent: "teal",
      logoTone: "light",
      href: "https://www.candbconsult.com",
    },
    {
      id: "construction-builders",
      brandName: "Construction & Builders",
      legalNames: ["Construction & Builders S.A.R.L."],
      focus: "Specification Consultancy & Lead Technical Support",
      region: "Lebanon",
      description:
        "Technical specification consultancy and lead technical support for construction projects across Lebanon, aligned with Specitas Group quality standards.",
      logoSrc: "/assets/brand/construction-builders-official.png?v=3",
      accent: "gold",
      logoTone: "light",
    },
    {
      id: "business-beyond",
      brandName: "Business & Beyond",
      legalNames: ["Business & Beyond for Consultancy and Studies LLC"],
      focus: "Business Consultancy Services",
      region: "UAE",
      description:
        "Strategic consulting, business development, operational advisory, organizational improvement, and corporate support services that help organizations grow and operate more effectively.",
      logoSrc: "/assets/brand/business-beyond-official.png",
      accent: "plum",
      logoTone: "light",
      href: "https://www.tcbab.com",
    },
  ];

  public static readonly howWeWork = {
    label: "How We Work",
    titleBefore: "Two companies. One coordinated ",
    titleAccent: "approach.",
    lead:
      "Specitas Group brings technical consultancy and business advisory together under one coordinated delivery model — while each company keeps its legal identity and specialist focus.",
    paragraphs: [
      "Each company within Specitas Group maintains its own legal identity, management structure, and specialist capabilities.",
      "When projects require multidisciplinary expertise, the Group operates collaboratively, bringing together the most suitable specialists while maintaining a single coordinated approach for the client.",
    ],
    pillars: [
      {
        id: "technical",
        brand: "C&B Consultant",
        title: "Technical consultancy",
        text: "Specification consultancy and technical support for construction projects.",
        logoSrc: "/assets/brand/cb-consult-official.png",
        logoTone: "light" as const,
      },
      {
        id: "business",
        brand: "Business & Beyond",
        title: "Business advisory",
        text: "Strategic, operational, and corporate consultancy for growing organizations.",
        logoSrc: "/assets/brand/business-beyond-official.png",
        logoTone: "light" as const,
      },
    ],
    benefits: [
      {
        id: "team",
        title: "One coordinated team",
        description: "Aligned professionals working together toward one goal.",
        accent: "teal",
      },
      {
        id: "expertise",
        title: "Specialist expertise in every discipline",
        description: "Deep knowledge. Proven experience. Measurable impact.",
        accent: "plum",
      },
      {
        id: "accountability",
        title: "Clear accountability",
        description: "Defined roles, transparent processes, responsible delivery.",
        accent: "teal",
      },
      {
        id: "communication",
        title: "Efficient communication",
        description: "Streamlined channels. Smarter collaboration.",
        accent: "indigo",
      },
      {
        id: "quality",
        title: "High-quality deliverables",
        description: "Excellence in every detail. Value in every outcome.",
        accent: "gold",
      },
    ] as HowWeWorkBenefit[],
  };

  public static readonly whyItems: WhyItem[] = [
    {
      id: "specialized",
      title: "Specialized, Not Generalized",
      description: "Every company focuses exclusively on what it does best.",
    },
    {
      id: "regional",
      title: "Regional Experience",
      description:
        "Deep understanding of construction practices, regulations, and market conditions throughout the Middle East.",
    },
    {
      id: "integrated",
      title: "Integrated Expertise",
      description:
        "Multiple specialist disciplines working together under one coordinated framework.",
    },
    {
      id: "practical",
      title: "Practical Solutions",
      description:
        "Our recommendations are technically robust, commercially realistic, and focused on successful project delivery.",
    },
    {
      id: "partnerships",
      title: "Long-Term Partnerships",
      description:
        "We aim to become trusted advisors rather than simply service providers.",
    },
  ];

  public static readonly presence = {
    label: "Our Geographic Presence",
    title: "Operating across the Middle East",
    lead:
      "Our Group supports projects throughout the Middle East, with an operational presence across key markets — and consultancy services across the wider GCC and MENA region.",
    regions: [
      { name: "United Arab Emirates", detail: "Operational presence" },
      { name: "Lebanon", detail: "Operational presence" },
    ],
  };

  public static readonly contact = {
    label: "Contact",
    titleBefore: "Let's Build Better ",
    titleAccent: "Together.",
    lead:
      "Whether you require specialist specification consultancy, technical support, or business advisory services, Specitas Group brings together the expertise needed to help your projects succeed.",
    commitmentPoints: [
      {
        id: "decisions",
        title: "Informed decisions",
        description: "Specialist knowledge that reduces risk and strengthens outcomes.",
        accent: "teal" as const,
      },
      {
        id: "partnerships",
        title: "Trusted partnerships",
        description: "Long-term relationships built on transparency and accountability.",
        accent: "plum" as const,
      },
      {
        id: "standards",
        title: "Professional standards",
        description: "Technically sound, commercially practical consultancy.",
        accent: "gold" as const,
      },
    ],
    channels: [
      {
        id: "phone-uae",
        label: "UAE Office.",
        value: "+971 (7) 233 7367",
        href: "tel:+97172337367",
        accent: "teal",
      },
      {
        id: "phone-beirut",
        label: "Beirut Office.",
        value: "+961 (5) 806 331",
        href: "tel:+9615806331",
        accent: "charcoal",
      },
      {
        id: "email",
        label: "Email us.",
        value: "contact@specitas.com",
        href: "mailto:contact@specitas.com",
        accent: "plum",
      },
      {
        id: "web",
        label: "Visit our website.",
        value: "www.specitas.com",
        href: "https://www.specitas.com",
        accent: "gold",
      },
    ] as ContactChannel[],
  };

  public static readonly commitment = {
    label: "Our Commitment",
    paragraphs: [
      "At Specitas Group, we believe that successful projects are built on informed decisions, specialist knowledge, and trusted partnerships.",
      "By combining the strengths of our member companies, we help clients reduce risk, improve quality, and achieve better outcomes from concept through completion.",
      "We are committed to delivering consultancy services that are technically sound, commercially practical, and aligned with the highest professional standards.",
    ],
    closingTitle: "Let's Build Better Together",
    closingLead:
      "Whether you require specialist specification consultancy, technical support, or business advisory services, Specitas Group brings together the expertise needed to help your projects succeed.",
  };
}

