// Sub-service landing pages — the specific jobs Big Red actually does, each of
// which people search for by name. These are NOT town-multiplied: one page per
// service, distinct intent, distinct content.
//
// Every claim about the business here is drawn from what the site already
// states (flat-rate quoting, Mon–Sat 7–7, owner-run crews, donate/recycle
// first, no hazardous materials, 17 South Shore towns, Hingham base).
// The Massachusetts disposal-ban facts are sourced from MassDEP's waste ban
// list — mattresses, box springs and textiles were added effective 2022-11-01.

export interface SubServicePage {
  slug: string
  /** Which top-level service page this sits under, for breadcrumbs + schema. */
  parent: "junk-removal" | "moving"
  /** Short label used in nav lists and related-service links. */
  navLabel: string
  titleTag: string
  metaDescription: string
  h1: string
  heroSubhead: string
  sections: Array<{ heading: string; body: string }>
  faq: Array<{ question: string; answer: string }>
  ctaHeading: string
  ctaSubhead: string
}

export const subServicePages: SubServicePage[] = [
  {
    slug: "estate-cleanouts",
    parent: "junk-removal",
    navLabel: "Estate Cleanouts",
    titleTag: "Estate Cleanout Services South Shore MA | Big Red Moving Company",
    metaDescription:
      "Full estate cleanouts across the South Shore of MA. We clear entire homes — furniture, appliances, attics, basements, garages — with flat-rate pricing and a crew that works at your pace.",
    h1: "Estate Cleanouts on the South Shore",
    heroSubhead:
      "Clearing a parent's home is not a normal junk job, and we don't treat it like one. Flat-rate pricing, an owner on site, and a crew that will slow down when you need it to.",
    sections: [
      {
        heading: "We Work at Your Pace, Not the Truck's",
        body: "Most estate cleanouts happen at a hard moment — a death in the family, a move to assisted living, a house that has to be emptied before it can be listed. The job is rarely just about volume. There are things that need to be found before anything leaves, things that go to one sibling and not another, and things nobody has decided about yet. We plan around that. You can walk the house with us first and mark what stays, we can work room by room while you sort ahead of us, and we can stage the work across several visits rather than forcing everything into one day. Nothing goes on the truck that you haven't cleared.",
      },
      {
        heading: "What a Full Cleanout Covers",
        body: "We empty the entire property: furniture, mattresses and box springs, appliances, electronics, rugs and window treatments, clothing and linens, kitchenware, books and paper, tools, garden equipment, and the accumulated contents of attics, basements, garages, sheds and outbuildings. Attics and basements in older South Shore homes are usually the bulk of the work — decades of boxes, furniture that went up a staircase and never came back down, and storage that predates the current owner. We bring the crew and equipment to get it out without damaging staircases, banisters or floors on the way.",
      },
      {
        heading: "Donation and Recycling First",
        body: "A large share of what comes out of an estate is still perfectly usable, and families almost always want it to go somewhere rather than to a landfill. We sort as we load and route usable furniture and household goods to local donation, and metals, appliances and electronics to recycling. Several categories aren't a choice at all: Massachusetts bans mattresses, box springs, textiles, large appliances and CRT televisions and monitors from disposal, so those have to be diverted regardless. If a specific piece matters to you, tell us and we'll tell you honestly whether it's likely to be accepted anywhere.",
      },
      {
        heading: "Pricing and Timing for Estates",
        body: "Estate cleanouts are quoted flat-rate like everything else we do, based on the volume and what's involved in getting it out. We'd rather walk the property than guess — a full-house quote given sight unseen is how people end up with a very different number on the day. For homes going on the market, we can usually work to a listing date, and we sweep out at the end so the house is ready for photos or a broker walkthrough. Larger properties with outbuildings may run across more than one visit, which we'll tell you up front rather than discovering at 4pm.",
      },
    ],
    faq: [
      {
        question: "Can you work around items we haven't decided about yet?",
        answer:
          "Yes, and this is the most common request we get on estates. You can mark rooms or individual pieces to leave untouched, and we'll work around them. Plenty of families have us clear the obvious volume first — the basement, the garage, the furniture nobody wants — and bring us back for the rest once they've had time to go through what's left.",
      },
      {
        question: "What happens if you find something valuable?",
        answer:
          "We stop and give it to you. Cash, jewelry, documents, photographs and paperwork turn up in estate cleanouts more often than people expect, usually in furniture and boxes nobody has opened in years. Anything that looks personal or valuable comes to you rather than onto the truck.",
      },
      {
        question: "Do you handle the donation drop-offs, or do we?",
        answer:
          "We do. Usable furniture and household goods get routed to local donation as part of the job — you don't need to arrange anything or be there for it. If you want a specific charity used, tell us and we'll try, though we can't always promise a particular organization will accept a particular item.",
      },
      {
        question: "How long does a full house take?",
        answer:
          "Most single-family homes are one to two days depending on volume, staircases and how much is in the attic and basement. Properties with detached garages, sheds or outbuildings can run longer. We'll give you a realistic timeline when we walk the property rather than an optimistic one.",
      },
      {
        question: "Can you work with an executor or realtor instead of the family?",
        answer:
          "Yes. We regularly coordinate directly with executors, attorneys and listing agents, including when the family lives out of state. We can meet someone at the property for access, work to a listing deadline, and send photos when the job is done.",
      },
    ],
    ctaHeading: "Get an Estate Cleanout Quote",
    ctaSubhead:
      "Tell us about the property and we'll come walk it with you. Flat-rate quote before anything moves.",
  },
  {
    slug: "garage-cleanouts",
    parent: "junk-removal",
    navLabel: "Garage Cleanouts",
    titleTag: "Garage Cleanout Services South Shore MA | Big Red Moving Company",
    metaDescription:
      "Garage cleanouts across the South Shore of MA. We haul out tools, lawn equipment, old furniture, tires and years of clutter — flat-rate pricing, usually done in a few hours.",
    h1: "Garage Cleanouts on the South Shore",
    heroSubhead:
      "Get the garage back. We haul out everything you point at — you don't lift anything, and you know the price before we start.",
    sections: [
      {
        heading: "The Most Common Job We Do",
        body: "Garages fill up quietly. Lawn equipment that stopped working three summers ago, paint and hardware from a project that finished, boxes that came out of the house during a renovation and never went back, bikes the kids outgrew, and furniture that was put out there temporarily years ago. Nothing in it is worth a dump run on its own, so it stays. Most South Shore garages we clear take a crew a couple of hours and come out in a single load, and the difference is that you get a parking space back the same afternoon.",
      },
      {
        heading: "What We Take Out of a Garage",
        body: "Old furniture, appliances and freezers, lawn mowers, snowblowers and string trimmers, bicycles and sports equipment, tools and workbenches, shelving, scrap lumber and leftover building materials, cardboard and storage boxes, rugs, and general clutter. Metals, appliances and electronics get routed to recycling rather than the landfill. We handle the lifting, the loading and the sweep-out — you point at what goes, and if you're not sure about something, ask us and we'll tell you either way.",
      },
      {
        heading: "What We Can't Take",
        body: "We don't remove hazardous materials, and garages are exactly where they collect: paint and stains, solvents, gasoline and fuel cans, motor oil, propane tanks, pesticides, pool chemicals and asbestos. These need your town's household hazardous waste day or a designated drop-off, and no legitimate hauler will put them on a truck. Tell us what you have when you call — we'll be clear about what's coming with us and what you'll need to handle separately, so there are no surprises when the crew arrives.",
      },
      {
        heading: "Flat-Rate, Quoted Before We Start",
        body: "We price garage cleanouts by the load, not the hour, so a job that takes longer than expected doesn't cost you more. Describe roughly what's in there when you call — a half-garage, a full two-car, whether there's a mower or an old fridge in the mix — and we'll give you a number. Most single-garage jobs land in the range of a partial truckload. We're usually available within the week across the South Shore, and often sooner for smaller loads.",
      },
    ],
    faq: [
      {
        question: "Do I need to move anything out or sort it first?",
        answer:
          "No. Most people don't sort at all — they walk out with us, point at what goes, and we handle the rest. If you'd rather pull aside the few things you're keeping before we arrive, that speeds things up, but it isn't required.",
      },
      {
        question: "Can you take paint, gas cans and propane tanks?",
        answer:
          "No. Paint, solvents, gasoline, motor oil, propane tanks, pesticides and pool chemicals are hazardous materials and can't go on our truck. Your town runs household hazardous waste collection for exactly this. Everything else in a typical garage we can take.",
      },
      {
        question: "What about an old refrigerator or freezer in the garage?",
        answer:
          "We take those. Large appliances are banned from disposal in Massachusetts and have to be recycled, which we handle as part of the job. Units with refrigerant need proper processing, so just mention it when you call so we bring the right equipment.",
      },
      {
        question: "How fast can you get here?",
        answer:
          "Usually within the week across our South Shore service area, and sometimes same-day for smaller loads. Garage cleanouts are one of the easier jobs to fit into a schedule. Call us and we'll tell you the soonest we can be there.",
      },
    ],
    ctaHeading: "Get a Garage Cleanout Quote",
    ctaSubhead:
      "Tell us roughly what's in there and we'll give you a flat price. Most garages are done in a few hours.",
  },
  {
    slug: "basement-attic-cleanouts",
    parent: "junk-removal",
    navLabel: "Basement & Attic Cleanouts",
    titleTag: "Basement & Attic Cleanout South Shore MA | Big Red Moving Company",
    metaDescription:
      "Basement and attic cleanouts across the South Shore of MA. Narrow staircases, low headroom and heavy items handled — flat-rate pricing, all lifting done for you.",
    h1: "Basement & Attic Cleanouts",
    heroSubhead:
      "The two hardest rooms to empty in any house. Narrow stairs, low ceilings, and forty years of things that went down and never came back up. We do the carrying.",
    sections: [
      {
        heading: "Why These Rooms Stay Full",
        body: "Basements and attics don't fill up because people are disorganized. They fill up because getting anything out of them is genuinely difficult. A sleeper sofa that went into a finished basement before the stairs were rebuilt, a bedroom set carried into an attic by two people twenty years younger, boxes stacked behind other boxes in a crawl space with four feet of headroom. In older South Shore housing stock the staircases are narrow, the turns are tight, and the bulkhead is often the only realistic exit. That's the job. We bring enough crew to carry things properly rather than dragging them, and we protect the stairs, walls and doorframes on the way out.",
      },
      {
        heading: "What Comes Out",
        body: "Furniture and mattresses, old exercise equipment, washers, dryers and utility sinks, water-damaged carpet and padding, shelving, paint-free construction debris from old projects, storage boxes, holiday decorations, luggage, and the general contents of decades of storage. Damp basements often mean mildewed furniture and cardboard that can't be donated and simply needs to go — we'll tell you honestly which is which rather than pretending everything can be rehomed.",
      },
      {
        heading: "Access, Stairs and Protection",
        body: "We plan the exit before we start lifting. That means checking whether the bulkhead opens, whether a bedframe has to come apart, whether an attic hatch is the only way down and whether the banister is load-bearing enough to lean on. We use floor runners and door jamb protectors on the route out, and we take furniture apart rather than forcing it around a turn. If something genuinely cannot come out intact, we'll tell you the options before we do anything irreversible.",
      },
      {
        heading: "Pricing",
        body: "Quoted flat-rate by volume before we begin, same as the rest of our junk removal work — stairs and long carries don't add to the price on the day. If you can send a couple of photos of the space when you call, we can usually give you a tighter number. Most single-room basement or attic jobs are a partial truckload and finish in a morning; full basements in older homes can run longer, and we'll say so up front.",
      },
    ],
    faq: [
      {
        question: "Do you carry everything up the stairs yourselves?",
        answer:
          "Yes. That's the entire point of hiring us for these rooms. You don't need to bring anything up to the driveway or the curb — we go down and get it. If the only exit is a bulkhead or a narrow attic hatch, that's normal for us.",
      },
      {
        question: "Can you take apart furniture that won't fit through the stairwell?",
        answer:
          "Yes. Bedframes, sleeper sofas, sectionals, workbenches and shelving regularly have to come apart to get out of a basement or attic. We bring tools and do the disassembly as part of the job.",
      },
      {
        question: "The basement flooded and everything is mildewed. Will you still take it?",
        answer:
          "Yes. Water-damaged furniture, carpet, padding and cardboard are common basement jobs. That material can't be donated, so it goes for disposal, but there's nothing about it that stops us taking it. We do not handle mold remediation itself — we remove the contents, not treat the structure.",
      },
      {
        question: "Can you take an old oil tank or water heater?",
        answer:
          "Water heaters, yes — they're metal and get recycled. Oil tanks are a different matter: an out-of-service tank that still contains oil or residue needs a licensed contractor rather than a junk hauler. Tell us what you have and we'll tell you honestly whether it's our job.",
      },
    ],
    ctaHeading: "Get a Basement or Attic Quote",
    ctaSubhead:
      "Send us a couple of photos of the space and we'll give you a flat price. We do all the carrying.",
  },
  {
    slug: "mattress-disposal",
    parent: "junk-removal",
    navLabel: "Mattress Disposal",
    titleTag: "Mattress & Box Spring Disposal South Shore MA | Big Red Moving Company",
    metaDescription:
      "Massachusetts bans mattresses and box springs from the trash. We pick them up anywhere on the South Shore and take them for recycling — flat-rate, no curbside sticker needed.",
    h1: "Mattress & Box Spring Disposal in Massachusetts",
    heroSubhead:
      "You can't put it on the curb anymore — Massachusetts banned mattresses and box springs from disposal in 2022. We pick yours up from wherever it is and take it to be recycled.",
    sections: [
      {
        heading: "Why You Can't Just Throw It Away",
        body: "As of November 1, 2022, MassDEP added mattresses, box springs and textiles to the state's waste disposal ban list. That means they can no longer be landfilled or incinerated in Massachusetts, and haulers, transfer stations and disposal facilities are not permitted to accept them for disposal. In practice this is why your town stopped taking mattresses at the curb, why the transfer station turns them away, and why the old advice to just put it out on trash day no longer works. Mattresses are also one of the most recyclable bulky items there is — the steel, foam, fibre and wood in them are all recoverable, which is much of the reason for the ban.",
      },
      {
        heading: "How We Handle It",
        body: "We come to wherever the mattress actually is. You don't need to wrestle a king-size box spring down a staircase or out to the curb before we arrive — most of our mattress pickups come out of second-floor bedrooms, and that's the service. We take mattresses and box springs in any size and any condition, including sets, bunk mattresses, futons and pull-out couch mattresses, and route them for recycling rather than disposal. Bed frames, headboards and the rest of the bedroom set can go on the same trip if you want them gone too.",
      },
      {
        heading: "Textiles Are Banned Too",
        body: "The same November 2022 rule change banned textiles from disposal — clothing, footwear, bedding, curtains, fabric and scraps. The rule applies even to items that are worn, torn or stained, which surprises most people; those still go to textile recovery rather than the trash. The exception is textiles that are wet, mouldy or contaminated with oil or hazardous substances, which can't be recovered. If you're clearing a bedroom or doing a seasonal purge, we can take the bedding and clothing along with the mattress in the same pickup.",
      },
      {
        heading: "What It Costs",
        body: "Mattress pickup is quoted flat-rate like the rest of our work, and a single mattress or a mattress-and-box-spring set is at the small end of what we do. It's cheapest per item when it goes with other things — if you're already clearing a bedroom, a basement or a whole house, the mattress rides along rather than being its own trip. Call us with what you've got and where it is in the house and we'll give you a number on the spot.",
      },
    ],
    faq: [
      {
        question: "Can I still put a mattress out with the trash in Massachusetts?",
        answer:
          "No. Since November 1, 2022, mattresses and box springs are on the MassDEP waste disposal ban list, so they can't be landfilled or incinerated in the state. Municipal curbside programs and transfer stations aren't permitted to take them for disposal. Some towns run a separate mattress recycling program with its own fee and rules — check with your DPW — and otherwise you need a hauler who takes them for recycling.",
      },
      {
        question: "Do you take stained, torn or bed-bug mattresses?",
        answer:
          "Stained and torn, yes — condition doesn't stop a mattress being recycled and it doesn't change our price. Anything with an active bed bug infestation is different: tell us before we arrive so we can bag and handle it properly rather than carrying it through the house uncontained.",
      },
      {
        question: "Do I need to get it downstairs before you come?",
        answer:
          "No. We'll go up and get it. Second-floor bedrooms are where most of our mattress pickups come from, and a king box spring that won't make the turn on a staircase is a normal part of the job.",
      },
      {
        question: "Can you take the bed frame and headboard too?",
        answer:
          "Yes, and it's usually the sensible thing to do since we're already there. Frames, headboards, footboards, slats and the rest of the bedroom furniture can all go on the same pickup. Metal frames get recycled.",
      },
      {
        question: "What about old clothes and bedding?",
        answer:
          "Those are covered by the same 2022 rule — textiles are banned from disposal in Massachusetts, including worn, torn and stained items. We can take clothing, bedding, curtains and fabric along with the mattress and route them to textile recovery. The one exception is anything wet, mouldy or contaminated with oil or chemicals.",
      },
    ],
    ctaHeading: "Get a Mattress Picked Up",
    ctaSubhead:
      "Tell us the size and where it is in the house. We'll give you a flat price and take it for recycling.",
  },
  {
    slug: "furniture-appliance-removal",
    parent: "junk-removal",
    navLabel: "Furniture & Appliance Removal",
    titleTag: "Furniture & Appliance Removal South Shore MA | Big Red Moving Company",
    metaDescription:
      "Single-item and full-load furniture and appliance removal across the South Shore MA. Sofas, sectionals, treadmills, fridges, washers — we do the lifting. Flat-rate pricing.",
    h1: "Furniture & Appliance Removal",
    heroSubhead:
      "One sofa or a full house. We take the sectional that won't fit down the stairs, the treadmill nobody uses, and the fridge in the garage — no full booking required.",
    sections: [
      {
        heading: "Single Items Are a Real Job, Not a Favour",
        body: "A lot of haulers won't come out for one piece, which is how a broken recliner ends up in a garage for two years. We take single-item jobs. Sofas and sectionals, recliners, dining sets, dressers and armoires, desks, bookcases, pianos and organs, treadmills and home gyms, hot tubs, safes, pool tables, and the oversized sectional that four people got in through a slider and nobody can get out. If it's big and heavy and you want it gone, that's the whole job and we'll quote it as one.",
      },
      {
        heading: "Appliances and the Massachusetts Recycling Rules",
        body: "We take refrigerators, freezers, washers, dryers, dishwashers, stoves, ovens, microwaves, water heaters and air conditioners. Large appliances — white goods — are banned from disposal in Massachusetts and have to be recycled, and units containing refrigerant need proper handling before processing. Televisions and computer monitors are also banned; CRT sets in particular are heavy, awkward and can't go in the trash. All of that is handled as part of the job. You don't need to disconnect or move anything to the driveway first, though it helps if appliances are unplugged and defrosted.",
      },
      {
        heading: "Getting It Out of the House",
        body: "The reason people call us for a single sofa is almost never the weight — it's the doorway. We take furniture apart when it won't make a turn, use straps and dollies rather than dragging, and put down floor protection and jamb guards on the route out. Upstairs bedrooms, tight condo hallways, basement bulkheads and third-floor walk-ups are routine. If a piece genuinely can't come out intact, we'll tell you the options before we cut or unbolt anything.",
      },
      {
        heading: "Donation Where It Makes Sense",
        body: "Plenty of the furniture we pick up still has life in it, and we'd rather it went to a household than a landfill. Usable sofas, dressers, tables and chairs get routed to local donation where they'll be accepted — though it's worth knowing that most charities won't take upholstered furniture with rips, stains or pet damage, and none will take anything damp. Metals and appliances go for recycling. We'll give you a straight answer about where a specific piece is likely to end up rather than a vague promise.",
      },
    ],
    faq: [
      {
        question: "Will you come out for just one item?",
        answer:
          "Yes. Single-item pickups are a normal part of what we do and don't require a full move or cleanout booking. Call us with what it is and where it sits in the house and we'll quote that one piece.",
      },
      {
        question: "Do you take treadmills, hot tubs and pool tables?",
        answer:
          "Yes to all three, with notice. These need the right crew size and equipment — hot tubs usually need to be cut down, and pool tables come apart in sections with a slate top that takes several people. Mention it when you call so we send the right team rather than turning up short-handed.",
      },
      {
        question: "Do I need to empty and unplug the fridge first?",
        answer:
          "Please do if you can — unplugged, emptied and defrosted makes it much easier and avoids water through your hallway. If that isn't possible we'll still take it, we'll just plan for it.",
      },
      {
        question: "Can you take an old TV?",
        answer:
          "Yes. Televisions and computer monitors are banned from disposal in Massachusetts and need to go to electronics recycling, which we handle. Old CRT sets are the ones people struggle with most because of the weight — those are fine with us.",
      },
      {
        question: "What if the sofa won't fit through the door?",
        answer:
          "We take it apart. Sectionals separate, legs come off, and frames can be broken down when there's genuinely no other route out. We'll always check the door and stairwell before doing anything irreversible, and we'll tell you first.",
      },
    ],
    ctaHeading: "Get a Furniture or Appliance Quote",
    ctaSubhead:
      "One piece or a houseful. Tell us what it is and where it is, and we'll give you a flat price.",
  },
  {
    slug: "labor-only-movers",
    parent: "moving",
    navLabel: "Labor-Only / Loading Help",
    titleTag: "Labor-Only Movers & Loading Help South Shore MA | Big Red Moving Company",
    metaDescription:
      "Renting a truck or using a POD on the South Shore? We supply the crew to load, unload, or both. Two-man minimum, hourly rate, no truck fee. Serving 17 MA towns.",
    h1: "Labor-Only Movers & Loading Help",
    heroSubhead:
      "You've got the truck or the container. We've got the crew. Load, unload, or both — no truck fee, because you're not renting ours.",
    sections: [
      {
        heading: "When Labor-Only Makes Sense",
        body: "If you've already rented a U-Haul, booked a POD or a moving container, or have a truck through work, you don't need to pay for another one. What most people actually need is two or three people who lift for a living and know how to pack a truck so nothing shifts on Route 3. That's this service. It's the most common choice for apartment moves, small relocations, storage unit loads and moves where family is handling the driving but nobody wants to carry the couch down three flights.",
      },
      {
        heading: "What the Crew Does",
        body: "We load, we unload, or we do both ends. That includes carrying everything out, wrapping and padding furniture, disassembling beds and tables where needed, and stacking the truck or container properly — heavy and square on the bottom, weight over the axle, tie-offs as we go so the load doesn't move in transit. On the unload end we bring it in and put it where you want it rather than stacking it in the garage. We can also do in-home moves: shifting everything out of a room for flooring or paint and putting it back afterwards.",
      },
      {
        heading: "How It's Priced",
        body: "Labor-only is billed hourly with a two-man minimum, which is different from our junk removal work — you're buying crew time rather than a load, so the hourly structure is what's fair to both sides. There's no truck fee and no mileage, because you're supplying the vehicle. Tell us the size of the home, the floor you're on and whether there's an elevator, and we'll tell you how many people and roughly how many hours it should take. Bigger crew, fewer hours; the choice is usually yours.",
      },
      {
        heading: "What to Have Ready",
        body: "The job goes faster and costs less if boxes are packed, taped and stacked before we arrive, and if the truck or container is already on site and open when we get there. Reserve the elevator and the loading dock if your building requires it, and let us know about parking restrictions — several of the denser South Shore neighbourhoods need a plan for where a 26-footer actually sits. If you'd rather we packed as well, we offer packing as an add-on, but it's a separate conversation from labor-only.",
      },
    ],
    faq: [
      {
        question: "Do you supply the truck?",
        answer:
          "Not for this service — that's the point of it. You rent the truck or container, we supply the crew, and you don't pay a truck fee. If you'd rather we handled the whole thing including the vehicle, that's our regular local moving service instead.",
      },
      {
        question: "Will you load a POD or storage container?",
        answer:
          "Yes. PODs, moving containers and storage units are a large share of our labor-only work. Loading a container well matters more than loading a truck, because it may sit for weeks before it moves — we stack and secure it accordingly.",
      },
      {
        question: "What's the minimum booking?",
        answer:
          "Two movers is our minimum, billed hourly. Most apartment loads are a half day; a full house is usually a full day. We'll give you an honest estimate of hours when you tell us the size and the access.",
      },
      {
        question: "Can you just move heavy things around inside the house?",
        answer:
          "Yes, and people book that more often than you'd think — clearing rooms for flooring or painting, moving a piano or a gun safe to a different room, bringing furniture up from a basement. Same hourly structure, no truck involved.",
      },
      {
        question: "Do you drive the rental truck?",
        answer:
          "No. We load and unload; you or your rental agreement handles the driving. Rental contracts name authorised drivers and we're not on yours, so that stays with you.",
      },
    ],
    ctaHeading: "Get a Labor-Only Quote",
    ctaSubhead:
      "Tell us the size of the move, the floor you're on and your truck or container. We'll tell you crew size and hours.",
  },
]

export function getSubServicePage(slug: string): SubServicePage | undefined {
  return subServicePages.find((p) => p.slug === slug)
}

export function getSubServicesFor(parent: "junk-removal" | "moving"): SubServicePage[] {
  return subServicePages.filter((p) => p.parent === parent)
}
