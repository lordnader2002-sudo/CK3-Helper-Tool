// CK3 AGOT Mod - Game Data

const AGOT_DATA = {

  // ===========================
  // GREAT HOUSES OF WESTEROS
  // ===========================
  houses: [
    {
      id: "stark",
      name: "House Stark",
      words: "Winter is Coming",
      seat: "Winterfell",
      region: "The North",
      color: "#708090",
      startingRuler: "Eddard Stark",
      strengths: ["Large territory", "Strong levies", "High vassal loyalty", "Sturdy defensive position"],
      weaknesses: ["Isolated from southern politics", "Harsh winters drain economy", "Far from the Iron Throne"],
      tips: [
        "Secure The North fully before expanding south",
        "Befriend the Wildlings or subdue them early",
        "Use the Gift territory for economic expansion",
        "Build cold-weather buildings for supply bonuses",
        "Marry into Vale or Riverlands for alliances",
        "The Crannogmen (Reed) make excellent spymasters"
      ],
      keyVassals: ["Manderly", "Karstark", "Umber", "Bolton", "Reed", "Mormont"],
      economy: 3,
      military: 4,
      diplomacy: 3,
      difficulty: "Beginner"
    },
    {
      id: "lannister",
      name: "House Lannister",
      words: "Hear Me Roar",
      seat: "Casterly Rock",
      region: "The Westerlands",
      color: "#FFD700",
      startingRuler: "Tywin Lannister",
      strengths: ["Enormous wealth (gold mines)", "High prestige start", "Strong military reputation", "Excellent starting ruler stats"],
      weaknesses: ["Surrounded by rivals", "Tywin is aging", "High succession pressure", "Pride can lead to overextension"],
      tips: [
        "Exploit Casterly Rock's gold mines immediately — build economic buildings",
        "Marry strategically into Reach and Stormlands",
        "Use gold to hire mercenaries and maintain large armies",
        "Tywin is exceptional — max out his skills with lifestyle choices",
        "Secure the Iron Throne early via political marriages",
        "Watch for the Lannister succession — plan carefully"
      ],
      keyVassals: ["Clegane", "Crakehall", "Westerling", "Marbrand"],
      economy: 5,
      military: 4,
      diplomacy: 4,
      difficulty: "Intermediate"
    },
    {
      id: "baratheon",
      name: "House Baratheon",
      words: "Ours is the Fury",
      seat: "Storm's End",
      region: "The Stormlands",
      color: "#F4A460",
      startingRuler: "Robert Baratheon",
      strengths: ["King of Westeros start", "Iron Throne prestige", "Military power", "Central location"],
      weaknesses: ["Unstable court", "Robert is a poor ruler (drunk trait)", "Many enemies", "Succession crisis looming"],
      tips: [
        "Purge troublesome courtiers early in the game",
        "Reform Robert's lifestyle toward Stewardship to counter drunken trait",
        "Secure Stannis and Renly's loyalty immediately",
        "Build up the Small Council with loyal, competent members",
        "Address the debt to the Iron Bank early",
        "Watch for Cersei's schemes — consider replacing her"
      ],
      keyVassals: ["Florent", "Tarly", "Swann", "Cafferen"],
      economy: 3,
      military: 5,
      diplomacy: 3,
      difficulty: "Hard"
    },
    {
      id: "targaryen",
      name: "House Targaryen",
      words: "Fire and Blood",
      seat: "Dragonstone",
      region: "Crownlands / Essos",
      color: "#DC143C",
      startingRuler: "Daenerys Targaryen",
      strengths: ["Dragons (when hatched)", "Claim to Iron Throne", "Unique dragon mechanics", "High intrigue potential"],
      weaknesses: ["Starting in exile", "Few initial resources", "Dragon hatching is RNG-dependent", "Many claimants to deal with"],
      tips: [
        "Secure Dothraki allies before crossing to Westeros",
        "Focus on dragon-hatching events early in game",
        "Build marriage alliances with Westerosi dissidents",
        "Use intrigue to destabilize existing rulers before invasion",
        "The Unsullied are worth purchasing for an elite standing army",
        "Reclaim Slaver's Bay for resources before heading west"
      ],
      keyVassals: ["Velaryon", "Celtigar"],
      economy: 2,
      military: 3,
      diplomacy: 3,
      difficulty: "Very Hard"
    },
    {
      id: "tyrell",
      name: "House Tyrell",
      words: "Growing Strong",
      seat: "Highgarden",
      region: "The Reach",
      color: "#228B22",
      startingRuler: "Mace Tyrell",
      strengths: ["Richest region in Westeros", "Largest army potential", "Excellent farmland", "Strong trade income"],
      weaknesses: ["Mace is mediocre", "Competition from Lannisters", "Olenna controls family politics"],
      tips: [
        "The Reach has the best farmland — build agricultural buildings",
        "Use Margaery for high-value diplomatic marriages",
        "Leverage Highgarden's wealth to hire mercenaries",
        "Secure Oldtown for the Maester chain bonuses",
        "Alliance with either Lannisters or Baratheons (pick one)",
        "Loras is your best military commander — protect him"
      ],
      keyVassals: ["Tarly", "Redwyne", "Hightower", "Florent", "Oakheart"],
      economy: 5,
      military: 4,
      diplomacy: 4,
      difficulty: "Beginner"
    },
    {
      id: "martell",
      name: "House Martell",
      words: "Unbowed, Unbent, Unbroken",
      seat: "Sunspear",
      region: "Dorne",
      color: "#FF8C00",
      startingRuler: "Doran Martell",
      strengths: ["Defensive terrain (desert)", "Unique gender-equal succession", "Strong intrigue options", "Isolated and defensible"],
      weaknesses: ["Small levy size", "Isolated from main politics", "Heat limits army operations", "Slow to build power"],
      tips: [
        "Dorne's desert terrain makes invasion extremely costly for enemies",
        "Use Oberyn as a fearsome champion in duels",
        "Intrigue is your primary weapon — scheme ruthlessly",
        "Build spy networks across Westeros before acting",
        "The Rhoynar culture bonuses are excellent — embrace them",
        "Avenge Elia Martell for massive prestige gain"
      ],
      keyVassals: ["Dayne", "Yronwood", "Uller", "Manwoody"],
      economy: 3,
      military: 2,
      diplomacy: 4,
      difficulty: "Intermediate"
    },
    {
      id: "tully",
      name: "House Tully",
      words: "Family, Duty, Honor",
      seat: "Riverrun",
      region: "The Riverlands",
      color: "#4169E1",
      startingRuler: "Hoster Tully",
      strengths: ["Central location for trade", "Multiple river systems", "Strong alliance network", "Family bonds mechanic"],
      weaknesses: ["Surrounded on all sides", "Constant invasion target", "Hoster is dying", "Weak starting military"],
      tips: [
        "Immediately secure alliances with Stark, Arryn, and Baratheon",
        "Use Cat and Lysa strategically for marriage diplomacy",
        "Rivers give trade bonuses — build trade posts on waterways",
        "The Riverlands are a battleground — maintain strong defenses",
        "Prepare for Hoster's succession by grooming Edmure early",
        "Ser Brynden (Blackfish) is your best military commander"
      ],
      keyVassals: ["Blackwood", "Bracken", "Frey", "Mallister"],
      economy: 4,
      military: 3,
      diplomacy: 5,
      difficulty: "Intermediate"
    },
    {
      id: "arryn",
      name: "House Arryn",
      words: "As High as Honor",
      seat: "The Eyrie",
      region: "The Vale",
      color: "#87CEEB",
      startingRuler: "Jon Arryn",
      strengths: ["Nearly impregnable fortress", "High Honor trait bonuses", "Good economy", "Defensive terrain"],
      weaknesses: ["Isolated by Mountains of the Moon", "Jon Arryn is elderly", "Robin Arryn is weak", "Limited expansion paths"],
      tips: [
        "The Eyrie is almost impossible to siege — use this defensively",
        "Clansmen of the Mountains can be a nuisance or an asset",
        "Broker peace deals — your defensive position gives leverage",
        "Jon Arryn is your best diplomat; use him on tour frequently",
        "Prepare Robin's regency carefully before Jon dies",
        "Expand into the Fingers and Mountains of the Moon"
      ],
      keyVassals: ["Royce", "Waynwood", "Hunter", "Corbray", "Templeton"],
      economy: 4,
      military: 2,
      diplomacy: 5,
      difficulty: "Intermediate"
    }
  ],

  // ===========================
  // CHARACTER TRAITS
  // ===========================
  traits: {
    personality: [
      { name: "Brave", effect: "+1 Martial, +1 Prowess, better duel outcomes", type: "positive", stat: "martial" },
      { name: "Diligent", effect: "+1 to all skills, faster learning", type: "positive", stat: "all" },
      { name: "Genius", effect: "+5 to all skills, all children may inherit", type: "positive", stat: "all" },
      { name: "Quick", effect: "+3 to all skills", type: "positive", stat: "all" },
      { name: "Gregarious", effect: "+2 Diplomacy, better opinion from courtiers", type: "positive", stat: "diplomacy" },
      { name: "Just", effect: "+2 Diplomacy, better vassal opinion", type: "positive", stat: "diplomacy" },
      { name: "Patient", effect: "+1 Intrigue, +1 Stewardship", type: "positive", stat: "mixed" },
      { name: "Humble", effect: "+1 Learning, better popular opinion", type: "positive", stat: "learning" },
      { name: "Compassionate", effect: "+1 Diplomacy, but harder to execute/imprison", type: "mixed", stat: "diplomacy" },
      { name: "Craven", effect: "-1 Martial, poor duel outcomes, can avoid wars", type: "negative", stat: "martial" },
      { name: "Lazy", effect: "-1 to all skills", type: "negative", stat: "all" },
      { name: "Paranoid", effect: "+1 Intrigue, -2 Diplomacy, harder to form alliances", type: "mixed", stat: "mixed" },
      { name: "Wrathful", effect: "+1 Martial, -2 Diplomacy, prone to costly decisions", type: "mixed", stat: "mixed" },
      { name: "Greedy", effect: "+2 Stewardship, -2 Diplomacy, vassal opinion penalty", type: "mixed", stat: "mixed" },
      { name: "Drunkard", effect: "-2 Stewardship, random negative events (Robert Baratheon)", type: "negative", stat: "stewardship" }
    ],
    lifestyle: [
      { name: "Blademaster", effect: "+8 Prowess, excellent in duels", category: "Martial", tier: 3 },
      { name: "Strategist", effect: "+20% enemy casualties in battles", category: "Martial", tier: 3 },
      { name: "Gallant", effect: "+15 knight opinion, more knights available", category: "Martial", tier: 2 },
      { name: "Architect", effect: "+25% construction speed, -15% cost", category: "Stewardship", tier: 2 },
      { name: "Administrator", effect: "+10% taxes, domain limit +1", category: "Stewardship", tier: 3 },
      { name: "Schemer", effect: "+20 scheme power, harder to detect", category: "Intrigue", tier: 2 },
      { name: "Torturer", effect: "Better confession extractions, prisoners surrender secrets", category: "Intrigue", tier: 2 },
      { name: "Theologian", effect: "+2 Learning, religious authority bonuses", category: "Learning", tier: 2 },
      { name: "Mystic", effect: "Access to unique events, stress management", category: "Learning", tier: 2 },
      { name: "Diplomat", effect: "+20 opinion, alliances easier to form", category: "Diplomacy", tier: 2 }
    ],
    agot_specific: [
      { name: "Dragonlord", effect: "Can bond with and ride dragons, massive combat bonuses", rarity: "Legendary" },
      { name: "Valyrian Steel Owner", effect: "+3 Prowess when equipped, legendary artifact", rarity: "Rare" },
      { name: "Warg", effect: "Can skin-change animals, unique scouting abilities", rarity: "Rare" },
      { name: "Greenseer", effect: "Access to prophetic events, see the future", rarity: "Very Rare" },
      { name: "Water Dancer", effect: "+4 Prowess, unique Braavosi dueling style", rarity: "Uncommon" },
      { name: "Shadow Binder", effect: "Access to dark magic events (Asshai origin)", rarity: "Legendary" },
      { name: "Knight of Westeros", effect: "+2 Diplomacy with Faith of the Seven rulers", rarity: "Common" },
      { name: "Sworn Brother (Night's Watch)", effect: "Cannot marry, cannot inherit, defense bonuses", rarity: "Common" }
    ]
  },

  // ===========================
  // BUILDINGS
  // ===========================
  buildings: [
    {
      name: "Watchtower → Tower of Sorcery",
      slot: "Special",
      type: "Castle",
      effect: "+Garrison, +Levies",
      agot_note: "Upgraded with Valyrian Steel for bonus effects",
      priority: 3
    },
    {
      name: "Barracks",
      slot: "Military",
      type: "Castle",
      effect: "+Men-at-Arms capacity, +Levy size",
      agot_note: "Essential for military dominance",
      priority: 5
    },
    {
      name: "Granary",
      slot: "Economic",
      type: "Castle/City",
      effect: "+Supply limit, +Holding taxes",
      agot_note: "Critical in The North for winter survival",
      priority: 4
    },
    {
      name: "Market District",
      slot: "Economic",
      type: "City",
      effect: "+Tax income, +Trade income",
      agot_note: "Best built in coastal and river holdings",
      priority: 5
    },
    {
      name: "Maester's Tower",
      slot: "Special",
      type: "Castle",
      effect: "+Learning, +Positive event chance",
      agot_note: "Oldtown chain gives massive bonuses",
      priority: 4
    },
    {
      name: "Sept / Temple",
      slot: "Religious",
      type: "Castle/City",
      effect: "+Religious authority, +Vassal piety",
      agot_note: "Seven Faith: Septs. Old Gods: Godswood",
      priority: 3
    },
    {
      name: "Godswood",
      slot: "Religious",
      type: "Castle",
      effect: "+Warg/Greenseer event chance, Old Gods authority",
      agot_note: "Essential for North culture characters",
      priority: 4
    },
    {
      name: "Stables",
      slot: "Military",
      type: "Castle",
      effect: "+Knight effectiveness, +Cavalry levies",
      agot_note: "Great for Dothraki integration",
      priority: 3
    },
    {
      name: "Shipyard",
      slot: "Naval",
      type: "Coastal",
      effect: "+Fleet size, +Naval transport capacity",
      agot_note: "Critical for Essos invasions and coastal raids",
      priority: 4
    },
    {
      name: "Dragonglass Mine",
      slot: "Special",
      type: "Beyond the Wall",
      effect: "+Men-at-Arms against undead, unique White Walker counter",
      agot_note: "AGOT-specific — essential for Long Night prep",
      priority: 5
    }
  ],

  // ===========================
  // REGIONS
  // ===========================
  regions: [
    { name: "The North", terrain: "Cold/Forest", economy: 2, military: 4, notes: "Largest region, harsh winters, loyal to Starks" },
    { name: "The Westerlands", terrain: "Hills/Forest", economy: 5, military: 4, notes: "Gold mines make this the wealthiest region" },
    { name: "The Reach", terrain: "Fertile Plains", economy: 5, military: 5, notes: "Most fertile land, largest population, highest levies" },
    { name: "The Stormlands", terrain: "Coastal/Hills", economy: 3, military: 4, notes: "Storm's End is nearly impregnable" },
    { name: "Dorne", terrain: "Desert", economy: 3, military: 2, notes: "Defensive terrain negates superior forces" },
    { name: "The Vale", terrain: "Mountains", economy: 4, military: 3, notes: "The Eyrie cannot be besieged traditionally" },
    { name: "The Riverlands", terrain: "River/Plains", economy: 4, military: 3, notes: "Central location, constantly contested" },
    { name: "The Crownlands", terrain: "Coastal/Forest", economy: 4, military: 3, notes: "King's Landing has massive income potential" },
    { name: "Iron Islands", terrain: "Coastal/Harsh", economy: 2, military: 3, notes: "Ironborn excel at naval and coastal raids" },
    { name: "Beyond the Wall", terrain: "Frozen Tundra", economy: 1, military: 2, notes: "White Walker threat, unique Wildling mechanics" },
    { name: "Essos (Free Cities)", terrain: "Varied", economy: 4, military: 2, notes: "Trade-focused, mercenary companies available" },
    { name: "Essos (Dothraki Sea)", terrain: "Steppe", economy: 1, military: 5, notes: "Massive cavalry armies, unique culture bonuses" }
  ],

  // ===========================
  // MEN-AT-ARMS TYPES
  // ===========================
  menAtArms: [
    {
      name: "Heavy Infantry",
      counters: ["Light Infantry"],
      counteredBy: ["Heavy Cavalry", "Spearmen"],
      terrain: "Plains, Hills",
      stats: { damage: 25, toughness: 25 },
      recommendation: "Core of any army — reliable and versatile"
    },
    {
      name: "Spearmen",
      counters: ["Heavy Cavalry", "Light Cavalry"],
      counteredBy: ["Heavy Infantry", "Crossbowmen"],
      terrain: "Plains",
      stats: { damage: 18, toughness: 20 },
      recommendation: "Essential counter to cavalry-heavy enemies (Dothraki)"
    },
    {
      name: "Heavy Cavalry",
      counters: ["Heavy Infantry", "Light Infantry", "Archers"],
      counteredBy: ["Spearmen", "Pikemen"],
      terrain: "Plains, Steppes",
      stats: { damage: 40, toughness: 15 },
      recommendation: "Best on open terrain, devastating flanking unit"
    },
    {
      name: "Crossbowmen",
      counters: ["Heavy Infantry", "Spearmen"],
      counteredBy: ["Light Cavalry", "Heavy Cavalry"],
      terrain: "Forest, Hills",
      stats: { damage: 30, toughness: 8 },
      recommendation: "Excellent for sieges and defensive battles"
    },
    {
      name: "War Elephants",
      counters: ["Everything"],
      counteredBy: ["Skirmishers"],
      terrain: "Plains",
      stats: { damage: 70, toughness: 30 },
      recommendation: "Rare but devastating — available via Essos connections"
    },
    {
      name: "Unsullied (AGOT)",
      counters: ["Heavy Infantry", "Spearmen"],
      counteredBy: ["Cavalry"],
      terrain: "All",
      stats: { damage: 35, toughness: 35 },
      recommendation: "Elite disciplined infantry, excellent all-around"
    },
    {
      name: "Dothraki Riders (AGOT)",
      counters: ["Light Infantry", "Archers", "Routing enemies"],
      counteredBy: ["Spearmen", "Pikes", "Terrain"],
      terrain: "Steppes, Plains",
      stats: { damage: 50, toughness: 10 },
      recommendation: "Devastating on open ground, useless in forests/mountains"
    }
  ],

  // ===========================
  // SUCCESSION LAWS
  // ===========================
  successionLaws: [
    {
      name: "Partition",
      type: "inheritance",
      description: "All children inherit equal portions of realm",
      pros: ["Easy to unlock", "Children are satisfied"],
      cons: ["Realm splits on death", "Weakens dynasty over time"],
      recommended: false,
      tip: "Avoid for large realms — your empire will fragment"
    },
    {
      name: "High Partition",
      type: "inheritance",
      description: "Primary heir gets majority, others get smaller portions",
      pros: ["Better than full partition", "Primary heir gets lion's share"],
      cons: ["Still splits realm", "Secondary heirs may rebel"],
      recommended: false,
      tip: "Step toward better succession — transition quickly"
    },
    {
      name: "Primogeniture",
      type: "inheritance",
      description: "Eldest child inherits everything",
      pros: ["Realm stays intact", "Predictable succession"],
      cons: ["Unlucky eldest child could be bad ruler"],
      recommended: true,
      tip: "Best for keeping realm intact — aim for this ASAP"
    },
    {
      name: "Seniority",
      type: "inheritance",
      description: "Oldest dynasty member inherits",
      pros: ["Often experienced heirs"],
      cons: ["Old heirs die quickly", "Realm passes to distant relatives"],
      recommended: false,
      tip: "Trap for dynasties — avoid unless playing specific culture"
    },
    {
      name: "Ultimogeniture",
      type: "inheritance",
      description: "Youngest child inherits",
      pros: ["Long reign for heirs"],
      cons: ["Young inexperienced heirs", "Long regencies"],
      recommended: false,
      tip: "Can work for specific builds but has major drawbacks"
    },
    {
      name: "Elective",
      type: "inheritance",
      description: "Powerful vassals vote on successor",
      pros: ["Can pick best candidate", "Unique political gameplay"],
      cons: ["Vassals gain power", "Risky if poorly managed"],
      recommended: false,
      tip: "Only viable if you carefully manage vassal opinions"
    }
  ],

  // ===========================
  // SCHEMES & INTRIGUE
  // ===========================
  schemes: [
    {
      name: "Murder",
      difficulty: "Hard",
      base_success: 25,
      modifiers: [
        { factor: "Your Intrigue vs Target's Intrigue", impact: "Major" },
        { factor: "Agents with target access", impact: "Major" },
        { factor: "Target's bodyguard prowess", impact: "Moderate" },
        { factor: "Scheme secrecy", impact: "Moderate" }
      ],
      tips: [
        "Recruit agents who are close to the target (family, friends, courtiers)",
        "High intrigue Spymaster is essential",
        "Use 'Fabricate Hook' first to get agents without suspicion",
        "Wait for target to be stressed/ill for better success rate",
        "Never rush — each month adds power to the scheme"
      ],
      bestFor: "Eliminating heirs, rivals, and dangerous vassals"
    },
    {
      name: "Kidnapping",
      difficulty: "Medium",
      base_success: 40,
      modifiers: [
        { factor: "Target's travel state", impact: "Major" },
        { factor: "Your Intrigue", impact: "Moderate" },
        { factor: "Agents near target", impact: "Major" }
      ],
      tips: [
        "Best when target is traveling or on pilgrimage",
        "Ransom or imprison for hooks/gold",
        "Can extract confessions for blackmail material"
      ],
      bestFor: "Getting ransom gold, obtaining hooks on rulers"
    },
    {
      name: "Claim Throne",
      difficulty: "Very Hard",
      base_success: 15,
      modifiers: [
        { factor: "Your claim strength", impact: "Major" },
        { factor: "Number of agents (faction members)", impact: "Major" },
        { factor: "Target's vassal loyalty", impact: "Major" }
      ],
      tips: [
        "Build a coalition of disgruntled vassals first",
        "Destabilize target's economy and military before activating",
        "Requires patience — months of preparation",
        "Make sure your own realm is secure before activating"
      ],
      bestFor: "Taking control of a powerful title from the inside"
    },
    {
      name: "Seduction",
      difficulty: "Medium",
      base_success: 45,
      modifiers: [
        { factor: "Your Intrigue & Diplomacy", impact: "Major" },
        { factor: "Target's attraction to you", impact: "Moderate" },
        { factor: "Target's spouse suspicion", impact: "Moderate" }
      ],
      tips: [
        "Get a hook on powerful rulers for diplomatic leverage",
        "Useful for gaining alliance through illegitimate channels",
        "Can destabilize enemy marriages and alliances"
      ],
      bestFor: "Obtaining hooks, diplomatic leverage, chaos"
    }
  ],

  // ===========================
  // AGOT EVENTS & DECISIONS
  // ===========================
  decisions: [
    {
      name: "The Purple Wedding",
      trigger: "King Joffrey alive, specific event chain",
      recommendation: "Let it happen — removes a difficult character",
      outcome: "Shifts Lannister succession, creates chaos opportunity"
    },
    {
      name: "The Red Wedding",
      trigger: "Frey and Bolton alliance, Stark military weak",
      recommendation: "Use carefully — massive infamy gain",
      outcome: "Can eliminate Stark threat but creates lasting enemies"
    },
    {
      name: "Dragon Hatching",
      trigger: "Targaryen bloodline, specific items",
      recommendation: "Prioritize this above all else as Targaryen",
      outcome: "Changes the entire game — dragons are game-winning"
    },
    {
      name: "Hatch the Long Night",
      trigger: "White Walker advance, Night's Watch weakened",
      recommendation: "Prepare 5+ years early — stockpile dragonglass",
      outcome: "Major existential threat to all of Westeros"
    },
    {
      name: "Declare for a Claimant",
      trigger: "Succession crisis, faction opportunity",
      recommendation: "Choose the weakest claimant you can control",
      outcome: "Can gain massive rewards but creates dangerous precedent"
    }
  ]
};

window.AGOT_DATA = AGOT_DATA;
