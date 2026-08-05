// Per-town disposal reality — the genuinely local content that makes each town
// page worth indexing instead of being 17 copies of the same page.
//
// EDITORIAL RULES FOR THIS FILE — please keep to them:
//
// 1. NO DOLLAR AMOUNTS. Every town resets sticker and per-item fees annually.
//    A page that says "$35 per mattress" is wrong within a year and actively
//    misleads customers. Describe the *mechanism* (a sticker is required, the
//    item carries a per-item fee, pickup must be booked ahead) — never the number.
// 2. NO PHONE NUMBERS or hauler names for the town's contracted service. Those
//    contracts change hands and we don't want to be the stale source.
// 3. Every entry carries a `source` — the official town page it came from.
//    Re-check these annually, and whenever a town changes its trash contract.
// 4. Researched 2026-08-05. VERIFY WITH THE CLIENT before publishing: the guys
//    work these towns daily and will know immediately if any of it is out of date.

export interface TownDisposal {
  heading: string
  body: string
  /** Official municipal source this was written from. */
  source: string
}

export const townDisposal: Record<string, TownDisposal> = {
  Hingham: {
    heading: "Getting Rid of It in Hingham",
    body:
      "Hingham runs its own transfer station off Bare Cove Park Drive, and it's residents-only — you need a current town sticker on the vehicle to get in at all, and it isn't open every day of the week. Mattresses and box springs are accepted but carry a separate per-item disposal fee, charged per piece, so a bed set costs more than people expect. The bulky and construction waste area keeps the same hours as the rest of the station. It works well if you own a truck, have a sticker, and the job is one or two items. It works badly for a full garage or a bedroom set, which is most of what we get called for here.",
    source: "https://www.hingham-ma.gov/292/Transfer-Station",
  },
  Cohasset: {
    heading: "Getting Rid of It in Cohasset",
    body:
      "Cohasset's Recycling Transfer Facility takes a wide range of bulky material — furniture, mattresses, appliances, televisions, rugs, tires and residential construction debris — which is more than most South Shore towns accept in one place. The catch is access: every vehicle needs a current All Facilities sticker displayed on the windshield, household trash has to be in the town's pay-per-throw bags, and the facility is closed Sundays and Mondays. It also won't take asphalt, cement or fuel. For a couple of bags and a chair it's a good system. For clearing a house on Jerusalem Road it means a lot of trips in your own vehicle.",
    source: "https://www.cohassetma.gov/267/Recycling-Transfer-Facility",
  },
  Hull: {
    heading: "Getting Rid of It in Hull",
    body:
      "Hull residents have two routes. The transfer station on Nantasket Avenue takes self-hauled material with a resident permit or proof of residency. Or the DPW runs a curbside bulk collection on a set day each month, which has to be booked in advance and carries per-item limits — including a weight limit that rules out a lot of what people actually want gone. Because it runs monthly rather than on demand, missing the booking window means waiting several weeks. On a peninsula where a lot of properties are seasonal rentals turning over between tenants, that timing rarely lines up, which is when people call us instead.",
    source: "https://www.town.hull.ma.us/public-works",
  },
  Norwell: {
    heading: "Getting Rid of It in Norwell",
    body:
      "Norwell's transfer station on Main Street is residents-only and requires an annual sticker. It does accept furniture, mattresses and appliances, with bulky material charged by volume rather than by the piece — appliances need refrigerant removed before they'll be taken. Volume-based pricing is fine for a single chair and gets expensive quickly for a basement's worth of furniture, on top of needing a vehicle that can carry it. Norwell's larger lots and detached garages tend to produce exactly the volume where self-hauling stops making sense.",
    source: "https://www.townofnorwell.net/transfer-station",
  },
  Scituate: {
    heading: "Getting Rid of It in Scituate",
    body:
      "Scituate's transfer station is residents-only with an annual sticker, and runs on pay-as-you-throw — household trash has to be in town-approved bags. Bulky waste is charged by volume. The detail that catches people out is mattresses: a mattress and its box spring are charged as two separate items, each at the full per-item rate, so a single bed costs double what you'd assume. Add the annual sticker and a vehicle that can carry a king box spring, and clearing a bedroom the official way stops being cheap. That's the most common reason we get called in Scituate.",
    source: "https://www.scituatema.gov/1273/Transfer-Station",
  },
  Weymouth: {
    heading: "Getting Rid of It in Weymouth",
    body:
      "Weymouth has curbside collection, but bulk items are not part of it — they have to be booked ahead separately, and mattresses go through a dedicated recycling program rather than the regular truck. There's also a transfer station on Winter Street that takes self-hauled material with proof of residency. The friction here is scheduling: bulk pickups need advance notice and items must be curbside early on the collection morning, which means getting a sofa out of a third-floor apartment yourself the night before. Weymouth's density of apartments and multi-family homes is exactly why that's the sticking point.",
    source: "https://www.weymouth.ma.us/1621/TrashRecycling",
  },
  Braintree: {
    heading: "Getting Rid of It in Braintree",
    body:
      "Braintree changed how mattresses work after the state disposal ban. They can no longer go out with regular trash, collection has to be booked with the town's contracted hauler, and — the part that surprises everyone — the mattress must be sealed in a mattress bag before it goes to the curb. Bags are sold to residents at a reduced rate, but you still have to get one, get the mattress into it, and get it outside on the right morning. Other large items also need to be scheduled rather than simply put out. It's workable for one item and genuinely tedious for a bedroom set.",
    source: "https://braintreema.gov/287",
  },
  Quincy: {
    heading: "Getting Rid of It in Quincy",
    body:
      "Quincy offers residents a bulk pickup at no charge, which is the best deal on the South Shore if you can wait — appointments typically run one to three weeks out. Bulk items can't simply be left beside the trash or a dumpster; the pickup has to be arranged. There's also the DPW yard on Sea Street for self-hauling, which charges by the load with a minimum. For a planned declutter, the free option is hard to argue with. For a lease ending, a closing date, or a landlord turning an apartment around in a week, the wait is the problem — and in Quincy's triple-deckers and high-rises, someone still has to get it down to the curb.",
    source: "https://www.quincyma.gov/departments/public_works/waste___recycle/how_can_i_get_rid_of.php",
  },
  Milton: {
    heading: "Getting Rid of It in Milton",
    body:
      "Milton has the most procedural mattress process of any town we serve. Collection happens one set weekday, by request only, with a request cutoff several days beforehand. Each piece needs a large-item trash sticker, and each piece must also be sealed in a mattress bag you buy yourself from a hardware store. Miss the cutoff and it's another week. There's an alternative drop-off at the town recycling center, but only on one Saturday morning a month. None of it is unreasonable, but it's four separate steps and two purchases before a mattress leaves the house.",
    source: "https://www.townofmilton.org/department-public-works/news/changes-mattressbox-spring-pick",
  },
  Holbrook: {
    heading: "Getting Rid of It in Holbrook",
    body:
      "Holbrook residents can self-haul to the transfer station on Maple Avenue with proof of residency, and bulk items need to be arranged ahead rather than left at the curb. What Holbrook doesn't have is a town-run mattress program — since the state ban took effect, mattresses can't go in the trash, a dumpster, or on the curb, and there's no municipal collection to fall back on. That leaves self-hauling to a facility that accepts them, or a hauler who takes them for recycling. It's the clearest gap of any town in our area, and it's most of what we get called about here.",
    source: "https://www.holbrookma.gov/department-public-works",
  },
  Rockland: {
    heading: "Getting Rid of It in Rockland",
    body:
      "Rockland runs automated curbside collection with wheeled totes, and the rule that governs everything is simple: if it doesn't fit in the tote with the lid closed, the truck doesn't take it. Anything left beside the tote gets left behind. That's fine week to week and useless the moment you're clearing a garage or a basement. Mattresses fall under a separate regional curbside recycling collection that runs on a monthly rotation by town, so timing depends on where in the month you happen to be. For anything larger than a tote, self-hauling or a hauler is the practical answer.",
    source: "https://www.rockland-ma.gov/public-works",
  },
  Abington: {
    heading: "Getting Rid of It in Abington",
    body:
      "Abington's curbside collection runs through a regional contractor, with bulk items handled separately from the weekly trash rather than alongside it. Mattresses are covered by a monthly curbside recycling collection that rotates between towns — you leave the mattress at the curb on your town's scheduled morning, with no preparation needed, but you're tied to that once-a-month date. It's a genuinely good program if your timing lines up with it. If you're clearing a house on a deadline, or you have more than a mattress, it doesn't stretch to cover the job.",
    source: "https://www.abingtonma.gov/department-public-works",
  },
  Whitman: {
    heading: "Getting Rid of It in Whitman",
    body:
      "Whitman uses the same regional curbside setup as its neighbours, with weekly trash handled by a contractor and bulk items requiring separate arrangements. Mattresses are collected curbside through a monthly recycling rotation rather than with regular trash. Whitman's older housing stock — deep lots, detached garages, workshops and sheds that have accumulated for decades — regularly produces more than a monthly curbside slot can absorb. That's the gap we usually get called into, particularly on property cleanouts before a sale.",
    source: "https://www.whitman-ma.gov/department-public-works",
  },
  Hanover: {
    heading: "Getting Rid of It in Hanover",
    body:
      "Hanover's transfer station on Rockland Street is residents-only and requires a permit sticker, and the permits are tiered — a limited-access permit covers recycling, individual item disposal and construction debris, but not the trash pit, so the sticker you hold determines what you can actually drop off. Bulky items, mattresses, box springs and appliances are all accepted on a fee-per-item basis. Permits are bought through the town and picked up in person. For a single item with the right permit it's straightforward; for a full cleanout it's repeat trips and a fee at each one.",
    source: "https://www.hanover-ma.gov/transfer-station",
  },
  Pembroke: {
    heading: "Getting Rid of It in Pembroke",
    body:
      "Pembroke gives residents two options, both with paperwork. The transfer station on Center Street takes self-hauled material with a valid permit or proof of residency. Or there's curbside bulk collection — but it's limited to one item per week on a set weekday, and you have to arrange the pickup with the contracted hauler and then obtain a sticker from Town Hall before the item goes out. One item a week is the constraint that matters: at that rate, clearing a garage or an outbuilding takes months. Pembroke's larger lots and detached structures are exactly where that adds up.",
    source: "https://www.pembroke-ma.gov/trash-recycling/pages/bulk-item-pick",
  },
  Marshfield: {
    heading: "Getting Rid of It in Marshfield",
    body:
      "Marshfield's transfer station on Plain Street is residents-only and needs an annual sticker that runs on the calendar year, bought through the DPW. It accepts bulk items and residential construction debris, and mattresses and box springs are taken at a per-item fee charged on each piece. There's also a Swap Shop running several days a week, which is genuinely useful for anything still usable. The system is one of the better ones locally — provided you have a sticker, a vehicle that fits the load, and time within their hours. Coastal and seasonal properties clearing out at once tend to exceed all three.",
    source: "https://www.marshfield-ma.gov/departments/public_works/trash_recycling/transfer_station___recycling_center.php",
  },
  Duxbury: {
    heading: "Getting Rid of It in Duxbury",
    body:
      "Duxbury's Recycling & Transfer Station on Mayflower Street is open to residents and taxpayers holding a current town permit — and the permit year runs spring to spring alongside the beach sticker rather than on the calendar year, which catches people out when they go to renew. The station is closed at the start of the week. Bulky material and mattresses are handled through the town's disposal arrangements rather than going out with the trash. For an estate or a seasonal property being cleared in one go, permit timing and station hours are usually what makes self-hauling impractical.",
    source: "https://www.town.duxbury.ma.us/recycling-transfer-station",
  },
}

export function getTownDisposal(town: string): TownDisposal | undefined {
  return townDisposal[town]
}
