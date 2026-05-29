export interface ServicePageContent {
  slug: string
  titleTag: string
  metaDescription: string
  h1: string
  heroSubhead: string
  sections: Array<{ heading: string; body: string }>
  faq: Array<{ question: string; answer: string }>
  ctaHeading: string
  ctaSubhead: string
}

export const movingServicePage: ServicePageContent = {
  slug: "moving",
  titleTag: "Moving Company South Shore MA | Big Red Moving Company",
  metaDescription:
    "Local and short-distance moves across the South Shore, MA. Flat-rate pricing, family-owned. Serving Hingham, Quincy, Weymouth & 14+ more towns.",
  h1: "South Shore Moving Company",
  heroSubhead:
    "Big Red Moving Company handles local and short-distance moves across the entire South Shore of Massachusetts. Flat-rate pricing. No surprises on moving day.",
  sections: [
    {
      heading: "Why South Shore Families Choose Big Red",
      body: "We're a South Shore company — based in Hingham, serving communities from Quincy down to Duxbury and everywhere in between. We don't subcontract your move to an unknown crew. When you book Big Red, you get our trained team, our trucks, and our commitment to doing the job right. We've earned a 5.0 rating across dozens of reviews because we treat every move — studio apartment or six-bedroom colonial — like it's the most important job we've ever done.",
    },
    {
      heading: "What We Move",
      body: "We handle all types of local residential and commercial moves: apartment moves, single-family homes, condos, townhouses, and small office relocations. Our trucks are equipped with furniture pads, stretch wrap, hand trucks, and dollies. We wrap and protect every piece of furniture before it's loaded, and we use floor runners and door jamb protectors to safeguard your home throughout the process. Have fragile or high-value items? Let us know and we'll bring additional packing materials.",
    },
    {
      heading: "Our Service Area",
      body: "We serve the full South Shore: Hingham, Quincy, Weymouth, Braintree, Scituate, Marshfield, Duxbury, Norwell, Cohasset, Hull, Milton, Holbrook, Rockland, Abington, Whitman, Hanover, and Pembroke. We also handle moves to and from Boston, the metro area, and the North Shore. If you're not sure we cover your location, give us a call — we'll let you know.",
    },
    {
      heading: "Flat-Rate Pricing — No Surprises",
      body: "We quote every move flat-rate before moving day. That means you know your total cost upfront — no hourly billing that drags on, no surprise charges for stairs, long carries, or fuel. We ask about your home size, floor plan, and any challenging items during the booking process, and we build all of that into your quote. Most South Shore moves range from a few hundred to a couple thousand dollars depending on home size and distance.",
    },
  ],
  faq: [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend 2–4 weeks in advance for most moves, especially on spring and summer weekends. Last-minute availability may exist, so call us even if your move is soon — we'll do our best to fit you in.",
    },
    {
      question: "Do you offer packing services?",
      answer:
        "We offer packing assistance as an add-on service. We can pack your entire home, pack fragile items only, or simply bring boxes and materials if you prefer to pack yourself. Ask about packing options when you get your quote.",
    },
    {
      question: "What happens if something is damaged during the move?",
      answer:
        "We take great care with every item we move, but in the rare event of damage, our cargo insurance covers the cost of repair or replacement. We'll work with you directly to resolve any issues — no runaround.",
    },
    {
      question: "Do you move pianos, safes, or other heavy specialty items?",
      answer:
        "We can move most pianos and heavy items with proper equipment and enough advance notice. Let us know about specialty items when booking so we can send the right crew and equipment.",
    },
  ],
  ctaHeading: "Get Your Free Moving Quote",
  ctaSubhead:
    "Tell us about your move and we'll get back to you with a flat-rate price — no hourly surprises, no hidden fees.",
}

export const junkRemovalServicePage: ServicePageContent = {
  slug: "junk-removal",
  titleTag: "Junk Removal South Shore MA | Big Red Moving Company",
  metaDescription:
    "Junk removal and hauling across the South Shore MA. Furniture, appliances, garage cleanouts, estate clearing. Flat-rate pricing. Call Big Red Moving Company.",
  h1: "Junk Removal South Shore MA",
  heroSubhead:
    "Big Red Moving Company hauls away the stuff you don't want anymore. Furniture, appliances, yard debris, full garage cleanouts, estate clearing — flat-rate pricing, same-week availability.",
  sections: [
    {
      heading: "What We Haul",
      body: "We remove just about anything that isn't hazardous: furniture (sofas, mattresses, bed frames, dressers), appliances (refrigerators, washers, dryers, stoves), electronics, exercise equipment, yard debris and brush, renovation debris, boxes and household clutter, and more. We work hard to donate or recycle whatever we can before sending anything to the landfill. If you're not sure whether we'll take something, just ask — the answer is usually yes.",
    },
    {
      heading: "How It Works",
      body: "Booking junk removal with Big Red is simple. Call or fill out the form, tell us roughly what you have and where it is, and we'll give you a flat-rate quote. On removal day, our crew arrives in a box truck, walks through the space with you, and hauls everything out — no effort required on your end. We sweep up afterward and make sure the space looks good before we leave. Most residential jobs are done in 1–3 hours.",
    },
    {
      heading: "Service Area",
      body: "We provide junk removal throughout the South Shore, including Quincy, Weymouth, Braintree, Hingham, Cohasset, Hull, Norwell, Scituate, Marshfield, Duxbury, Milton, Holbrook, Rockland, Abington, Whitman, Hanover, and Pembroke. We also serve parts of the Boston metro and North Shore. Not sure if we cover your area? Give us a call.",
    },
    {
      heading: "Transparent Flat-Rate Pricing",
      body: "We don't charge by the hour for junk removal. We quote you a flat rate based on the volume and type of items, so you know exactly what you're paying before we begin. Pricing is based on truck space used — we'll give you a solid quote over the phone or via the contact form. Most single-room or partial-load jobs start under $300; full home cleanouts vary based on volume.",
    },
  ],
  faq: [
    {
      question: "Do you do full garage and basement cleanouts?",
      answer:
        "Yes. Garage cleanouts, basement cleanouts, and full-home estate clearing are some of our most common jobs on the South Shore. We handle everything from clearing a single cluttered room to emptying an entire property.",
    },
    {
      question: "What items will you NOT take?",
      answer:
        "We don't remove hazardous materials including paint, chemicals, fuel, asbestos, or medical waste. For most other items — even large appliances and bulky furniture — we'll take it. Ask us if you're unsure.",
    },
    {
      question: "Do you donate or recycle items?",
      answer:
        "We make every effort to donate usable furniture and goods to local charities and recycle materials like metals and electronics before sending anything to the landfill. We'll let you know if we think specific items can be donated.",
    },
    {
      question: "How quickly can you schedule a junk removal job?",
      answer:
        "We often have same-week availability for junk removal, sometimes same-day for smaller loads. Call us to check current availability — we move quickly on these jobs.",
    },
    {
      question: "Do you remove items from upstairs or tight spaces?",
      answer:
        "Yes. Our crew will go wherever the items are — upstairs bedrooms, attics, tight hallways, basements. We handle all the heavy lifting. You just point us to what goes.",
    },
  ],
  ctaHeading: "Get a Junk Removal Quote",
  ctaSubhead:
    "Tell us what you need hauled away and we'll get you a flat-rate price. Same-week availability on most jobs.",
}
