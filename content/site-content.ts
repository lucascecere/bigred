// content/site-content.ts
// Single source of truth for all Big Red Moving Company site copy.
// Edit this file to update any text, links, or structured data across the site.

export interface NavLink {
  label: string
  href: string
}

export interface CtaLink {
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface WhyUsItem {
  id: string
  title: string
  description: string
}

export interface ServiceCluster {
  name: string
  body: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface StatItem {
  value: string
  label: string
}

export interface TestimonialItem {
  quote: string
  author: string
  town: string
  stars: number
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    siteUrl: string
  }
  phone: {
    display: string
    href: string
  }
  email: string
  header: {
    logoText: string
    tagline: string
    navLinks: NavLink[]
  }
  hero: {
    headline: string
    subhead: string
    ctaPrimary: CtaLink
    ctaSecondary: CtaLink
    trustStrip: string[]
  }
  services: ServiceItem[]
  whyUs: WhyUsItem[]
  stats: StatItem[]
  testimonials: TestimonialItem[]
  process: {
    heading: string
    steps: ProcessStep[]
  }
  serviceArea: {
    heading: string
    subhead: string
    towns: string[]
    clusters: ServiceCluster[]
  }
  faq: FaqItem[]
  about: {
    heading: string
    body: string
    ownerName: string
    ownerTitle: string
  }
  contact: {
    heading: string
    subhead: string
    formLabels: {
      name: string
      phone: string
      email: string
      movingFrom: string
      movingTo: string
      moveDate: string
      notes: string
      submit: string
    }
    rightCard: {
      heading: string
      subhead: string
      hours: string
      promise: string
    }
  }
  footer: {
    tagline: string
    address: {
      city: string
      state: string
      zip: string
    }
    license: string
    credit: string
    creditUrl: string
    copyright: string
  }
}

export const siteContent: SiteContent = {
  meta: {
    title: "Big Red Moving Company | Local Movers in Hingham, MA & South Shore",
    description:
      "Hingham-based local moving company serving the South Shore — Hingham, Cohasset, Scituate, Weymouth, Quincy, and surrounding towns. Family-owned, licensed, insured. Get a free quote today.",
    ogTitle: "Big Red Moving Company | Hingham, MA",
    ogDescription:
      "Local movers based in Hingham. Family-owned, licensed & insured. Serving the South Shore.",
    siteUrl: "https://bigredmoving.com",
  },
  phone: {
    display: "(781) 555-0100",
    href: "tel:+17815550100",
  },
  email: "hello@bigredmoving.com",
  header: {
    logoText: "BIG RED MOVING",
    tagline: "HINGHAM, MA",
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Service Area", href: "#service-area" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    headline: "HINGHAM'S MOVING COMPANY.",
    subhead:
      "Local moves done right by people who actually live here. Serving Hingham and the South Shore.",
    ctaPrimary: { label: "Get a Free Quote", href: "#contact" },
    ctaSecondary: { label: "Call (781) 555-0100", href: "tel:+17815550100" },
    trustStrip: [
      "Licensed & Insured",
      "Family Owned",
      "South Shore Local",
      "Flat-Rate Pricing",
      "5-Star Google Rated",
    ],
  },
  services: [
    {
      id: "local-moves",
      title: "Local Moves",
      description: "Full-service local moves across the South Shore. We load, transport, and unload — including furniture disassembly and reassembly as needed. Flat-rate pricing means the number we quote is the number you pay. No hourly overruns.",
      icon: "home",
    },
    {
      id: "long-distance",
      title: "Long-Distance Moves",
      description: "Moving out of state or across New England? We handle the full haul. All pricing is flat-rate upfront — no fuel surcharges or surprise fees on delivery day. Fully insured for every mile.",
      icon: "map-pin",
    },
    {
      id: "packing",
      title: "Packing Services",
      description: "Full-pack, partial-pack, or just supplies. We use professional-grade boxes, packing paper, bubble wrap, and furniture blankets. Fragile items and large artwork handled with care. You don't have to touch a single box if you don't want to.",
      icon: "package",
    },
    {
      id: "labor-only",
      title: "Labor-Only / Loading Help",
      description: "Renting your own truck or using a POD? We supply the crew. Load, unload, or both. Two-man minimum, hourly rate, no truck fee. Perfect for apartment moves and storage unit cleanouts.",
      icon: "truck",
    },
  ],
  whyUs: [
    {
      id: "local",
      title: "We Live Here Too",
      description: "Hingham-based, not a faceless national chain. We're your neighbors.",
    },
    {
      id: "pricing",
      title: "Flat, Honest Pricing",
      description:
        "No surprise charges on moving day. The price we quote is the price you pay.",
    },
    {
      id: "insured",
      title: "Fully Licensed & Insured",
      description:
        "Your stuff is protected, period. MA moving license, full liability coverage.",
    },
    {
      id: "responsive",
      title: "Real People Answer the Phone",
      description: "Talk to Charles, Andrew, or Anthony directly — not a call center. Questions get real answers from the people who actually run the crew.",
    },
  ],
  stats: [
    { value: "200+", label: "Moves Completed" },
    { value: "5 Yrs", label: "Serving South Shore" },
    { value: "5-Star", label: "Google Rated" },
    { value: "17", label: "Towns Served" },
  ],
  testimonials: [
    {
      quote: "The Big Red crew showed up on time, handled our furniture with care, and the final bill matched the quote exactly. No surprise charges. Highly recommend.",
      author: "Sarah",
      town: "Hingham, MA",
      stars: 5,
    },
    {
      quote: "We had a third-floor apartment, tight staircase, and a lot of heavy stuff. They didn't complain once. Done in four hours. Will use again when we move out.",
      author: "Mike",
      town: "Weymouth, MA",
      stars: 5,
    },
    {
      quote: "Every other mover I called was vague about pricing. Big Red gave me a flat number and that's what I paid. That alone is worth five stars.",
      author: "Jen",
      town: "Scituate, MA",
      stars: 5,
    },
  ],
  process: {
    heading: "How It Works",
    steps: [
      {
        step: 1,
        title: "Get Your Free Quote",
        description: "Fill out the form or call us. We'll ask about your home size, distance, and any tricky items. You get a flat price — no estimates that magically grow on moving day.",
      },
      {
        step: 2,
        title: "We Plan Your Move",
        description: "We confirm your date, send a reminder the day before, and show up on time with the right crew and truck for your job. No guesswork, no surprises.",
      },
      {
        step: 3,
        title: "Move Day — We Handle Everything",
        description: "Load, transport, unload, and place furniture where you want it. When we leave, your new place is set up and ready to live in.",
      },
    ],
  },
  serviceArea: {
    heading: "Serving the South Shore",
    subhead: "Based in Hingham. Proudly moving families across these towns:",
    towns: [
      "Hingham",
      "Cohasset",
      "Hull",
      "Norwell",
      "Scituate",
      "Weymouth",
      "Braintree",
      "Quincy",
      "Milton",
      "Holbrook",
      "Rockland",
      "Abington",
      "Whitman",
      "Hanover",
      "Pembroke",
      "Marshfield",
      "Duxbury",
    ],
    clusters: [
      {
        name: "hingham-cohasset-hull",
        body: "Moving in Hingham? We know every neighborhood from World's End to Crow Point. Our trucks navigate the narrow streets of Hingham Square daily. Cohasset and Hull moves are our specialty — we've handled every tight waterfront driveway on the coast.",
      },
      {
        name: "scituate-marshfield-duxbury",
        body: "Heading to Scituate, Marshfield, or Duxbury? South Shore coastal moves are our specialty. We handle the tight driveways and historic homes that bigger movers won't touch. Year-round service, no beach-season surcharges.",
      },
      {
        name: "weymouth-braintree-quincy",
        body: "Moving to or from Weymouth, Braintree, or Quincy? We make this run constantly. Apartment buildings, condos, multi-families — we've seen it all on the northern stretch of the South Shore. No elevator fee surprises, no stair nonsense.",
      },
      {
        name: "rockland-hanover-pembroke",
        body: "Serving inland Rockland, Hanover, Pembroke, and the surrounding towns. Whether you're upsizing to a colonial or downsizing out of a ranch, our crew handles the whole job so you can focus on the next chapter.",
      },
    ],
  },
  faq: [
    {
      question: "How much does a local move in Hingham cost?",
      answer:
        "Most local moves in Hingham and surrounding South Shore towns run between $400 and $1,200 depending on home size and hours needed. We provide flat-rate quotes so there are no surprises on moving day. Contact us for a free estimate tailored to your specific move.",
    },
    {
      question: "Do you provide packing supplies?",
      answer:
        "Yes. We offer full packing services, partial packing, and box-only supply orders. We bring professional-grade boxes, packing paper, bubble wrap, and furniture blankets. Just let us know what level of help you need when you book.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Big Red Moving Company is fully licensed with the Massachusetts Department of Public Utilities and carries full liability coverage. Your belongings are protected from the moment we arrive until the last box is placed.",
    },
    {
      question: "How far in advance should I book my move?",
      answer:
        "We recommend booking at least 2–3 weeks in advance, especially for weekend moves during peak season (May through September). Last-minute moves happen — call us and we'll do our best to accommodate. Early bookers get first pick of dates and times.",
    },
    {
      question: "Do you move on weekends?",
      answer:
        "Yes, we operate Monday through Saturday, 7am to 7pm. Weekend slots fill fast during peak season, so book early. We currently do not offer Sunday moves, but call us if you have a special situation.",
    },
    {
      question: "What towns do you serve on the South Shore?",
      answer:
        "We serve Hingham, Cohasset, Hull, Norwell, Scituate, Weymouth, Braintree, Quincy, Milton, Holbrook, Rockland, Abington, Whitman, Hanover, Pembroke, Marshfield, and Duxbury. Don't see your town? Call us — we may still be able to help.",
    },
  ],
  about: {
    heading: "Run by locals, for locals.",
    body: "Big Red Moving was founded by three South Shore guys — Charles Even, Andrew Concannon, and Anthony Fabrizio — who got tired of watching their neighbors get burned by national moving chains. Hidden fees, late crews, broken furniture, zero accountability. Big Red is the answer to all of that. We're a small Hingham crew that treats every move like it's family. Because around here, it basically is.\n\nEvery job is run by one of the owners or someone they personally trained and trust. No rotating strangers. No subcontractors hired off a list. You know who's showing up, and they know what they're doing.",
    ownerName: "Charles, Andrew & Anthony",
    ownerTitle: "Co-Founders, Big Red Moving Company",
  },
  contact: {
    heading: "Get Your Free Quote",
    subhead:
      "Fill out the form and we'll get back to you within a few hours. Or just call.",
    formLabels: {
      name: "Your Name",
      phone: "Phone Number",
      email: "Email Address",
      movingFrom: "Moving From (City, ZIP)",
      movingTo: "Moving To (City, ZIP)",
      moveDate: "Approximate Move Date",
      notes: "Anything we should know?",
      submit: "Get My Free Quote",
    },
    rightCard: {
      heading: "Prefer to talk?",
      subhead: "Call us.",
      hours: "Mon–Sat  7am–7pm",
      promise: "We answer. Promise.",
    },
  },
  footer: {
    tagline: "Hingham's moving company.",
    address: {
      city: "Hingham",
      state: "MA",
      zip: "02043",
    },
    license: "MA DPU Licensed · Fully Insured",
    credit: "Built by Your Website Friend",
    creditUrl: "https://yourwebsitefriend.com",
    copyright: `© ${new Date().getFullYear()} Big Red Moving Company. All rights reserved.`,
  },
}
