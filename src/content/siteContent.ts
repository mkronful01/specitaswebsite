export type NavItem = {
  path: string;
  label: string;
};

export type CompanyProfile = {
  id: string;
  brandName: string;
  legalNames: string[];
  focus: string;
  description: string;
  logoSrc: string;
  accent: "teal" | "plum";
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

export class SiteContent {
  public static readonly brandName = "Specitas Group";

  public static readonly tagline =
    "Specialized Expertise. Integrated Solutions. Better Outcomes.";

  public static readonly contactEmail = "contact@specitas.com";

  public static readonly logoMarkSrc = "/assets/brand/specitas-mark.png";

  public static readonly logoFullSrc = "/assets/brand/specitas-group-logo.png";

  public static readonly homeVideoSrc =
    "/assets/video/company-of-the-year-2026.mp4";

  public static readonly navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/companies", label: "Companies" },
    { path: "/how-we-work", label: "How We Work" },
    { path: "/contact", label: "Contact" },
  ];

  public static readonly hero = {
    headline: "Building Better Projects Through Specialized Expertise",
    support:
      "A multidisciplinary consultancy group uniting specialist companies across technical specification, technical support, and business advisory services throughout the Middle East.",
    primaryCta: { label: "Explore the Group", path: "/companies" },
    secondaryCta: { label: "Get in Touch", path: "/contact" },
  };

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

  public static readonly companies: CompanyProfile[] = [
    {
      id: "cb-group",
      brandName: "C&B Consult",
      legalNames: [
        "C&B Consultant LLC OPC",
        "Construction & Builders S.A.R.L.",
      ],
      focus: "Specification Consultancy & Technical Support",
      description:
        "Providing architectural, interior, landscape, and engineering specification consultancy, specification management, compliance reviews, material advisory, technical documentation, technical reviews, compliance assessments, and engineering expertise for complex construction projects.",
      logoSrc: "/assets/brand/cb-consult-official.png",
      accent: "teal",
      logoTone: "light",
      href: "https://www.candbconsult.com",
    },
    {
      id: "business-beyond",
      brandName: "Business & Beyond",
      legalNames: ["Business & Beyond for Consultancy and Studies LLC"],
      focus: "Business Consultancy Services",
      description:
        "Providing strategic consulting, business development, operational advisory, organizational improvement, and corporate support services that help organizations grow and operate more effectively.",
      logoSrc: "/assets/brand/business-beyond-official.png",
      accent: "plum",
      logoTone: "light",
      href: "https://www.tcbab.com",
    },
  ];

  public static readonly howWeWork = {
    label: "How We Work",
    title: "Two companies. One coordinated approach.",
    lead:
      "Specitas Group brings technical consultancy and business advisory together under one coordinated delivery model — while each company keeps its legal identity and specialist focus.",
    paragraphs: [
      "Each company within Specitas Group maintains its own legal identity, management structure, and specialist capabilities.",
      "When projects require multidisciplinary expertise, the Group operates collaboratively, bringing together the most suitable specialists while maintaining a single coordinated approach for the client.",
    ],
    pillars: [
      {
        id: "technical",
        brand: "C&B Consult",
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
      "One coordinated team",
      "Specialist expertise in every discipline",
      "Clear accountability",
      "Efficient communication",
      "High-quality deliverables",
    ],
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
