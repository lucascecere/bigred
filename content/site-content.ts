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

// NOTE: page titles, meta descriptions and OG tags are NOT defined here — they
// live in each route's `metadata` export (src/app/**/page.tsx, layout.tsx) and
// in content/service-pages.ts + content/location-pages.ts. A duplicate `meta`
// block used to sit in this file doing nothing, which made it look like the
// place to edit titles. Don't reintroduce it.

export interface SiteContent {
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
    /** One entry per rendered line of the H1. */
    headline: string[]
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
    credit: string
    creditUrl: string
    copyright: string
  }
}

export const siteContent: SiteContent = {
  phone: {
    display: "320-321-JUNK",
    href: "tel:+13203215865",
  },
  email: "info@bigredmovingco.com",
  header: {
    logoText: "BIG RED MOVING",
    tagline: "HINGHAM, MA",
    // Root-relative anchors ("/#about") on purpose — a bare "#about" resolves
    // against the current URL, so on a town page the nav pointed at anchors
    // that don't exist there.
    navLinks: [
      { label: "Junk Removal", href: "/junk-removal" },
      { label: "Moving", href: "/moving" },
      { label: "Service Area", href: "/#service-area" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  hero: {
    // Rendered as three lines by Hero.tsx. Keep in sync — this field used to be
    // dead while the H1 was hardcoded in the component.
    headline: ["HINGHAM'S", "JUNK REMOVAL", "COMPANY."],
    subhead:
      "Hingham's junk removal and hauling crew. Serving all of the South Shore.",
    ctaPrimary: { label: "Get a Free Quote", href: "/#contact" },
    ctaSecondary: { label: "Call or Text 320-321-JUNK", href: "tel:+13203215865" },
    trustStrip: [
      "South Shore Local",
      "Flat-Rate Pricing",
      "Family Owned",
    ],
  },
  services: [
    {
      id: "junk-removal",
      title: "Junk Removal & Hauling",
      description: "Clearing out a garage, basement, or estate? We haul it away. Furniture, appliances, yard debris, renovation debris — if you need it gone, we'll take it. Fast scheduling, fair flat pricing.",
      icon: "truck",
    },
    {
      id: "labor-only",
      title: "Labor-Only / Loading Help",
      description: "Renting your own truck or using a POD? We supply the crew. Load, unload, or both. Two-man minimum, hourly rate, no truck fee. Perfect for apartment moves and storage unit cleanouts.",
      icon: "muscle",
    },
    {
      id: "furniture-hauling",
      title: "Furniture & Large Items",
      description: "Moving a single piece of furniture, a treadmill, or an oversized item? We handle one-off heavy hauls without requiring a full move booking. Call us — if it's big and heavy, we can move it.",
      icon: "box",
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
      id: "responsive",
      title: "Real People Answer the Phone",
      description: "Talk to Andrew, Anthony, or Charles directly — not a call center. Questions get real answers from the people who actually run the crew.",
    },
  ],
  stats: [
    { value: "100+", label: "Moves Completed" },
    { value: "3 Yrs", label: "Serving South Shore" },
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
    {
      quote: "Andy and his crew helped us clear out my mom's house after she passed. They were professional, respectful, and surprisingly fast. Made a hard day a lot easier.",
      author: "Dave",
      town: "Norwell, MA",
      stars: 5,
    },
    {
      quote: "Booked them for a same-week move. They showed up the next day. Two guys, three hours, done. Price was exactly what they quoted — no add-ons, no funny business.",
      author: "Kristen",
      town: "Marshfield, MA",
      stars: 5,
    },
    {
      quote: "We've used Big Red twice now. First for our move, then to haul out a pile of furniture. Both times: on time, professional, fair price.",
      author: "Tom",
      town: "Duxbury, MA",
      stars: 5,
    },
    {
      quote: "Other companies wanted to charge extra for our piano. Big Red quoted it upfront and handled it without drama. Great crew.",
      author: "Rachel",
      town: "Cohasset, MA",
      stars: 5,
    },
    {
      quote: "Called in the morning, they were there by afternoon. Cleared out a full basement's worth of junk in under two hours. Highly recommend.",
      author: "Brian",
      town: "Quincy, MA",
      stars: 5,
    },
    {
      quote: "Flat rate pricing is what sold me. No hourly surprises. They quoted me a number up front and that's exactly what I paid. Simple as that.",
      author: "Lisa",
      town: "Braintree, MA",
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
        title: "We Plan It Out",
        description: "We confirm your date, send a reminder the day before, and show up on time with the right crew and equipment for your job. No guesswork, no surprises.",
      },
      {
        step: 3,
        title: "We Show Up & Finish It",
        description: "We load, haul, and place everything where you want it. When we leave, the job is done and done right.",
      },
    ],
  },
  serviceArea: {
    heading: "Serving the South Shore",
    subhead: "Based in Hingham. Hauling junk and clearing out homes across these towns:",
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
        body: "Junk removal in Hingham's waterfront estates and Crow Point neighborhoods — we know these streets. Garage cleanouts, basement hauls, full estate cleanouts in Hull and Cohasset. Narrow driveways and tight access roads are no problem for our crew.",
      },
      {
        name: "scituate-marshfield-duxbury",
        body: "Coastal junk removal for Scituate, Marshfield, and Duxbury. We clear seasonal homes, beach property cleanouts, and estate hauls up and down the South Shore coast. Year-round service, no seasonal surcharges.",
      },
      {
        name: "weymouth-braintree-quincy",
        body: "Dense residential junk removal in Weymouth, Braintree, and Quincy. Apartment cleanouts, furniture hauls, renovation debris removal — we handle high-rise logistics and multi-family buildings without the extra fees.",
      },
      {
        name: "rockland-hanover-pembroke",
        body: "Inland junk removal for Rockland, Hanover, Pembroke, and surrounding towns. Garage cleanouts, full property hauls, and estate clear-outs for suburban homes throughout the South Shore interior.",
      },
    ],
  },
  faq: [
    {
      question: "How much does a local job in Hingham cost?",
      answer:
        "It depends on the size of the home and the scope of the job, so we quote every job individually rather than working from a price list. What we can tell you is how we quote: flat-rate, given before we start, with no hourly meter running and no surprise charges added on the day. Contact us with a description of the job and we'll give you a free estimate.",
    },
    {
      question: "Do you do junk removal?",
      answer: "Yes. We haul away furniture, appliances, garage clutter, yard waste, renovation debris, and general junk. We can usually schedule junk removal jobs within a day or two. Call us with a description of what needs to go and we'll give you a flat price.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "About a week out is ideal, but we're flexible. If something just came up, give us a call — we'll do our best to fit you in. Early bookings get first pick on dates and times.",
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
    {
      question: "How much does junk removal cost in the South Shore?",
      answer: "It depends on the volume and the type of items, so we quote your specific load rather than reading off a chart. We price by the load, not by the hour, so you know exactly what you're paying before we start. Call us with a description of what needs to go — or send a couple of photos — and we'll give you a flat price on the spot."
    },
    {
      question: "Do you offer labor-only help if I have my own truck?",
      answer: "Yes. If you're renting your own moving truck or using a POD, we'll supply the crew to load, unload, or both. Our labor-only service is billed hourly with a two-man minimum. It's a popular option for apartment moves and small relocations where you don't need us to provide the truck."
    },
    {
      question: "Can you haul a single heavy item like a treadmill or oversized furniture?",
      answer: "Yes. We handle single-item hauls without a full booking. Treadmill, safe, hot tub, oversized sectional — if it's big and heavy, we can move it. Call us with the details and we'll give you a flat price."
    },
  ],
  about: {
    heading: "Run by locals, for locals.",
    body: "Big Red Moving Co. is three South Shore guys who got tired of watching neighbors get burned by national moving chains. Hidden fees, late crews, broken furniture, zero accountability. We built Big Red as the answer to all of that.\n\nEvery job is run by an owner or someone we personally trained. No rotating strangers, no subcontractors hired off a list. You know who's showing up, and they know what they're doing.\n\nWe also handle junk removal and hauling — garages, basements, estate cleanouts. Same crew, same flat pricing, same reliability.\n\nWe show up, we work hard, we're careful with your stuff, and we get it done. That's it.",
    ownerName: "Andrew, Anthony & Charles",
    ownerTitle: "Owners, Big Red Moving Company",
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
    tagline: "South Shore's moving company.",
    address: {
      city: "Hingham",
      state: "MA",
      zip: "02043",
    },
    credit: "Built by Your Website Friend",
    creditUrl: "https://yourwebsitefriend.com",
    copyright: `© ${new Date().getFullYear()} Big Red Moving Company. All rights reserved.`,
  },
}
