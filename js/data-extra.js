// CK3 AGOT Helper Tool — Extended Data

const AGOT_EXTRA = {

  // =============================================
  // COUNCIL ROLES
  // =============================================
  councilRoles: [
    {
      id: "chancellor",
      name: "Chancellor",
      stat: "Diplomacy",
      icon: "📜",
      tasks: ["Improve Relations", "Fabricate Claim", "Improve Development"],
      why: "High Diplomacy improves vassal opinion and unlocks fabricated claims for expansion.",
      minRecommended: 15,
      idealStat: 20,
      tips: [
        "Send Chancellor to your most dangerous neighbor to improve relations pre-war",
        "Fabricate Claim generates free Casus Belli — do this constantly",
        "Chancellor's Diplomacy adds to your own for alliance checks"
      ]
    },
    {
      id: "marshal",
      name: "Marshal",
      stat: "Martial",
      icon: "⚔️",
      tasks: ["Train Troops", "Organize Levies", "Assist Ruler"],
      why: "High Martial increases levy sizes and Men-at-Arms effectiveness.",
      minRecommended: 15,
      idealStat: 20,
      tips: [
        "Keep Marshal on 'Train Troops' during peacetime for passive army bonuses",
        "Switch to 'Assist Ruler' if your own Martial is below 12",
        "In AGOT, a Marshal with 20+ Martial is a battlefield difference-maker"
      ]
    },
    {
      id: "steward",
      name: "Steward",
      stat: "Stewardship",
      icon: "💰",
      tasks: ["Increase Taxes", "Oversee Development", "Manage Domain"],
      why: "High Stewardship multiplies tax income — the single most impactful economic lever.",
      minRecommended: 15,
      idealStat: 22,
      tips: [
        "Stewardship above 20 gives substantial multiplier to all holding income",
        "Assign to 'Increase Taxes' for immediate income boost",
        "In The Reach or Westerlands, a great Steward is worth thousands of gold"
      ]
    },
    {
      id: "spymaster",
      name: "Spymaster",
      stat: "Intrigue",
      icon: "🗡️",
      tasks: ["Find Secrets", "Scheme", "Spread Rumors", "Expose Plots"],
      why: "High Intrigue Spymaster uncovers hooks, accelerates schemes, and counters enemy plots.",
      minRecommended: 15,
      idealStat: 20,
      tips: [
        "'Find Secrets' gives hooks on powerful rulers — hooks are diplomatic gold",
        "Set to 'Expose Plots' if you suspect you're being schemed against",
        "In AGOT, Varys/Littlefinger-equivalent characters are priceless finds"
      ]
    },
    {
      id: "chaplain",
      name: "Court Chaplain / Maester",
      stat: "Learning",
      icon: "📚",
      tasks: ["Promote Faith", "Research Culture", "Train Heir"],
      why: "High Learning increases piety income, tech progress, and heir education quality.",
      minRecommended: 15,
      idealStat: 18,
      tips: [
        "Assign to 'Train Heir' when your heir is between ages 6-14 for best education outcome",
        "High-Learning Maester grants better event outcomes for health and innovation",
        "In AGOT, Oldtown maesters have unique bonuses — recruit from there"
      ]
    }
  ],

  // =============================================
  // MARRIAGE PLANNER DATA
  // =============================================
  marriageBenefits: {
    stark_lannister: {
      alliance: "Strong — two of the most powerful houses, deterrence value is massive",
      claims: "None direct, but children inherit political legitimacy in both regions",
      prestige: "High — both prestigious houses, significant prestige gain",
      risks: "Historical enmity — expect opinion penalties among Northern lords",
      recommendation: "Excellent diplomatic marriage for stability. Do this early to prevent conflict."
    },
    stark_tully: {
      alliance: "Very Strong — Riverlands and North combined dominate central Westeros",
      claims: "Children can press Tully claims on Riverlands titles",
      prestige: "Moderate",
      risks: "Low — natural allies historically",
      recommendation: "The canonical alliance. Strong, low-risk, and historically stable."
    },
    targaryen_baratheon: {
      alliance: "Moderate — legitimizes Targaryen claim, Baratheon gets Iron Throne access",
      claims: "Targaryen gains claim to Stormlands, Baratheon gains claim to Dragon titles",
      prestige: "Very High — Dragon bloodline mixed with Fury",
      risks: "Baratheon independence culture may chafe under Targaryen rule",
      recommendation: "Historically proven path. Essential for Targaryen Westeros return."
    },
    lannister_tyrell: {
      alliance: "Extremely Strong — Gold + Grain = unbeatable economic dominance",
      claims: "Cross-claims on Westerlands and Reach holdings for children",
      prestige: "Very High — two of the wealthiest houses",
      risks: "Tyrell ambition may eventually challenge Lannister supremacy",
      recommendation: "The golden alliance. Economically unstoppable. Do this."
    },
    martell_targaryen: {
      alliance: "Strong — Dorne's defense + Dragon firepower = impenetrable south",
      claims: "Ancient Valyrian-Dornish intermarriage history, legitimacy boost",
      prestige: "Very High — both ancient bloodlines",
      risks: "Elia Martell trauma creates instability. Manage carefully.",
      recommendation: "Natural AGOT alliance. Dorne's defensive terrain + dragons is unbeatable."
    }
  },

  marriageTypes: [
    {
      name: "Standard Marriage",
      description: "Spouse joins your court. Children inherit your dynasty name.",
      allianceFormed: true,
      dynastyHeir: "Yours",
      pros: ["Alliance with spouse's house", "Children are dynasty heirs"],
      cons: ["Lose potential heir to another court", "Spouse's house may demand things"]
    },
    {
      name: "Matrilineal Marriage",
      description: "Husband joins wife's court. Children inherit mother's dynasty.",
      allianceFormed: true,
      dynastyHeir: "Mother's",
      pros: ["Keep a female heir in your dynasty", "Useful for heiresses"],
      cons: ["Less prestigious", "Husband's house may refuse"]
    },
    {
      name: "Alliance Marriage (Foreign)",
      description: "Pure alliance play — no claim transfer, but guarantees mutual defense.",
      allianceFormed: true,
      dynastyHeir: "Varies",
      pros: ["Immediate military alliance", "Deterrence against shared enemies"],
      cons: ["Obligates you to join their wars", "Alliance breaks on ruler death"]
    }
  ],

  // =============================================
  // BUDGET / INCOME DATA
  // =============================================
  incomeData: {
    holdingBase: {
      castle: 1.5,
      city: 3.0,
      temple: 1.8,
      tribe: 0.8
    },
    buildingMultipliers: {
      "Market District": 1.4,
      "Barracks": 1.0,
      "Granary": 1.1,
      "Maester Tower": 1.05,
      "Shipyard (Coastal)": 1.3,
      "Godswood": 1.05
    },
    stewardshipBonus: 0.03, // per point above 10
    expenseTypes: [
      { name: "Men-at-Arms Upkeep", costPerUnit: 0.1, notes: "Per MaA regiment per month" },
      { name: "Mercenary Retainer", costPerUnit: 50, notes: "Per mercenary company hired" },
      { name: "Building Construction", costPerUnit: 200, notes: "Average per building (one-time)" },
      { name: "Vassal Gifts", costPerUnit: 10, notes: "Per gift to improve opinion by ~5" },
      { name: "Feast", costPerUnit: 25, notes: "One-time, improves court opinion" },
      { name: "Ransom Payment", costPerUnit: 100, notes: "Average prisoner ransom" }
    ],
    goldThresholds: {
      critical: { max: 50, advice: "EMERGENCY: You cannot maintain armies. Sell artifacts, raid neighbors, or take loans." },
      low: { max: 200, advice: "Low reserves. Pause building projects, focus Steward on taxes." },
      adequate: { max: 500, advice: "Stable. Continue building but maintain buffer for war costs." },
      comfortable: { max: 1500, advice: "Good position. Invest in buildings and Men-at-Arms." },
      wealthy: { max: 9999, advice: "Exceptional wealth. Hire mercenaries, purchase artifacts, fund allies." }
    }
  },

  // =============================================
  // STRESS SYSTEM
  // =============================================
  stressData: {
    thresholds: [
      { level: 0, max: 99, name: "Composed", color: "green", description: "No stress effects. Keep it this way.", moodPenalty: 0 },
      { level: 100, max: 199, name: "Stressed", color: "yellow", description: "Minor mood penalties. Chance of stress event.", moodPenalty: -1 },
      { level: 200, max: 299, name: "Overwhelmed", color: "orange", description: "Significant penalties. Mental break risk increases.", moodPenalty: -2 },
      { level: 300, max: 399, name: "Breaking Point", color: "red", description: "High mental break chance. Negative trait acquisition likely.", moodPenalty: -3 },
      { level: 400, max: 999, name: "Mental Break", color: "darkred", description: "Mental break will occur. Expect Lunatic, Depressed, or Possessed trait.", moodPenalty: -5 }
    ],
    stressGains: [
      { action: "Acting against your traits (e.g., Compassionate ruler executing)", stress: "+50 to +100", severity: "high" },
      { action: "Losing a loved one (spouse, child, friend)", stress: "+30 to +80", severity: "high" },
      { action: "Losing a major war", stress: "+50", severity: "medium" },
      { action: "Being imprisoned", stress: "+50", severity: "medium" },
      { action: "Murder scheme discovered", stress: "+30", severity: "medium" },
      { action: "Succession anxiety events", stress: "+20", severity: "low" },
      { action: "Realm instability / faction threats", stress: "+20", severity: "low" },
      { action: "Negative court events", stress: "+10 to +30", severity: "low" }
    ],
    stressRelief: [
      { action: "Feast", relief: "-30", cooldown: "6 months", cost: "25 gold", requirement: "None" },
      { action: "Hunt", relief: "-20", cooldown: "3 months", cost: "Free", requirement: "None" },
      { action: "Pilgrimage", relief: "-50", cooldown: "Once per ruler", cost: "Travel time", requirement: "Religious" },
      { action: "Lover's Embrace", relief: "-30", cooldown: "3 months", cost: "Free", requirement: "Have a lover/spouse" },
      { action: "Indulge Vice (Drink, etc.)", relief: "-40 now, +20 later", cooldown: "Variable", cost: "Potential trait", requirement: "None" },
      { action: "Mystic Lifestyle Events", relief: "-30 to -60", cooldown: "Variable", cost: "None", requirement: "Learning lifestyle" },
      { action: "Physician Treatment", relief: "-20 to -40", cooldown: "Variable", cost: "Needs court physician", requirement: "Court Physician" },
      { action: "Write in Journal (event)", relief: "-20", cooldown: "Variable", cost: "Free", requirement: "Random event" }
    ],
    mentalBreakOutcomes: [
      { name: "Lunatic", effect: "Random bizarre decisions, -2 all stats, unique event chain", recovery: "Physician treatment or time" },
      { name: "Depressed", effect: "-3 all stats, reduced scheme/diplomatic options", recovery: "Time + positive events" },
      { name: "Possessed (R'hllor/Old Gods)", effect: "AGOT-specific — unique dark event chain", recovery: "Religious ritual" },
      { name: "Drunkard", effect: "-2 Stewardship, random negative events", recovery: "Willpower event chain" },
      { name: "Flagellant", effect: "+Piety but health damage over time", recovery: "Physician" }
    ]
  },

  // =============================================
  // THE LONG NIGHT CHECKLIST
  // =============================================
  longNightChecklist: [
    {
      id: "dragonglass",
      category: "Weapons",
      item: "Dragonglass Supply",
      description: "Dragonglass (obsidian) is the primary weapon against White Walkers and wights.",
      levels: ["None", "Small cache (<500)", "Moderate (500-2000)", "Large (2000-5000)", "Arsenal (5000+)"],
      scoring: [0, 1, 2, 3, 5],
      tips: "Mine from Dragonstone or beyond the Wall. Trade with Essos for supplies."
    },
    {
      id: "valyrian_steel",
      category: "Weapons",
      item: "Valyrian Steel Weapons",
      description: "Valyrian Steel kills White Walkers — each sword in your realm is a strategic asset.",
      levels: ["None", "1 sword", "2-3 swords", "4+ swords"],
      scoring: [0, 2, 4, 6],
      tips: "Acquire Ice, Longclaw, Heartsbane. Gift to your best commanders, not yourself."
    },
    {
      id: "nights_watch",
      category: "Defense",
      item: "Night's Watch Garrison",
      description: "The Wall is your first line of defense. A depleted Watch invites immediate breach.",
      levels: ["Abandoned", "Minimal (<500)", "Adequate (500-2000)", "Strong (2000-5000)", "Fortress (5000+)"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Send criminal vassals to the Watch to simultaneously punish and reinforce them."
    },
    {
      id: "northern_alliance",
      category: "Alliance",
      item: "Northern Alliance",
      description: "The North bears the brunt of the Long Night. Allied Northern houses multiply your defensive strength.",
      levels: ["None", "1-2 houses", "3-4 houses", "Most Northern lords", "All Northern lords"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Stark dominance over the North is the fastest path. Don't leave enemies at your back."
    },
    {
      id: "westerosi_alliance",
      category: "Alliance",
      item: "Westerosi Coalition",
      description: "The Long Night is a pan-Westerosi threat. Unite the continent or face it alone.",
      levels: ["None", "1 major house", "2-3 major houses", "4-5 major houses", "All Westeros united"],
      scoring: [0, 1, 2, 4, 6],
      tips: "The Iron Throne gives you legal authority to call banners. Seize it before the Long Night."
    },
    {
      id: "army_size",
      category: "Military",
      item: "Combined Army Strength",
      description: "Raw numbers matter — you need armies large enough to hold the line while dragonglass units do the real work.",
      levels: ["< 5,000", "5,000-15,000", "15,000-30,000", "30,000-50,000", "50,000+"],
      scoring: [0, 1, 3, 4, 5],
      tips: "Quality over quantity — Men-at-Arms with dragonglass are worth 10x normal soldiers."
    },
    {
      id: "dragon",
      category: "Military",
      item: "Dragons",
      description: "A single dragon can change the course of the Long Night. Multiple dragons = victory.",
      levels: ["None", "Egg (not hatched)", "1 young dragon", "1 adult dragon", "2+ dragons"],
      scoring: [0, 1, 3, 5, 8],
      tips: "Targaryen bloodline is required. Begin the hatching event chain the moment you play as Targaryen."
    },
    {
      id: "rhlor_faith",
      category: "Spiritual",
      item: "R'hllor Presence",
      description: "The Lord of Light is the enemy of the Long Night. R'hllor priests provide unique bonuses against undead.",
      levels: ["None", "Small following", "Established presence", "Dominant faith in North", "Lord of Light's chosen realm"],
      scoring: [0, 1, 2, 3, 4],
      tips: "Convert key commanders to R'hllor faith for resurrection mechanics and undead bonuses."
    },
    {
      id: "food_supply",
      category: "Logistics",
      item: "Winter Food Stores",
      description: "The Long Night brings eternal winter. Without food stores, armies dissolve from attrition.",
      levels: ["None prepared", "1 year supply", "2-3 year supply", "5 year supply", "Decade supply"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Build Granaries in every holding. The Reach's farmland is a strategic asset for the whole continent."
    },
    {
      id: "warg_scouts",
      category: "Intelligence",
      item: "Warg Scouts / Intelligence Network",
      description: "Knowing when and where the White Walkers attack is critical for positioning forces.",
      levels: ["None", "Basic spies", "Spymaster network", "Warg scouts", "Greenseer / Three-Eyed Raven"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Recruit Warg-trait characters specifically for scouting roles. Bran Stark is the ultimate intelligence asset."
    }
  ],

  // =============================================
  // VALYRIAN STEEL SWORDS
  // =============================================
  valyrian_steel: [
    {
      name: "Ice",
      house: "House Stark",
      holder: "Eddard Stark → Tywin Lannister (reforged into two swords)",
      status: "Reforged",
      location: "King's Landing → Winterfell (Oathkeeper) + King's Landing (Widow's Wail)",
      description: "The ancestral greatsword of House Stark. One of the largest Valyrian Steel swords. Reforged by Tywin Lannister into Widow's Wail and Oathkeeper.",
      stats: "+5 Prowess (greatsword), Stark legitimacy bonus",
      howToGet: "Start as Eddard Stark. Protect Ice during Lannister events. If reforged, recapture the pieces.",
      priority: 5
    },
    {
      name: "Longclaw",
      house: "House Mormont",
      holder: "Jeor Mormont → Jon Snow",
      status: "Active",
      location: "Castle Black / Night's Watch",
      description: "Bastard sword of House Mormont, gifted to Jon Snow by Lord Commander Jeor Mormont. Has a wolf pommel added by Jeor.",
      stats: "+4 Prowess, Night's Watch commander bonus",
      howToGet: "Control the Night's Watch leadership. Jon Snow storyline events.",
      priority: 4
    },
    {
      name: "Heartsbane",
      house: "House Tarly",
      holder: "Randyll Tarly → Samwell Tarly",
      status: "Active",
      location: "Horn Hill, The Reach",
      description: "The ancestral sword of House Tarly, passed down for 500 years. Samwell takes it when he leaves for Oldtown.",
      stats: "+4 Prowess, House Tarly legitimacy bonus",
      howToGet: "Control House Tarly. Invite Samwell Tarly to court and gift it back.",
      priority: 4
    },
    {
      name: "Widow's Wail",
      house: "House Lannister → Baratheon",
      holder: "King Joffrey → King Tommen",
      status: "Active",
      location: "King's Landing",
      description: "One half of the reforged Ice, given to King Joffrey as a wedding present. A short one-handed sword.",
      stats: "+3 Prowess",
      howToGet: "Play as Lannister/Baratheon. Acquire after Joffrey's death or from Tommen.",
      priority: 3
    },
    {
      name: "Oathkeeper",
      house: "House Lannister → Brienne",
      holder: "Jaime Lannister → Brienne of Tarth",
      status: "Active",
      location: "With Brienne of Tarth",
      description: "The other half of Ice, gifted by Jaime Lannister to Brienne to honor his oath to Catelyn Stark.",
      stats: "+4 Prowess",
      howToGet: "Recruit or capture Brienne of Tarth. Jaime Lannister event chain.",
      priority: 4
    },
    {
      name: "Blackfyre",
      house: "House Targaryen",
      holder: "Lost / Held by Blackfyre claimants",
      status: "Lost",
      location: "Unknown — Essos likely",
      description: "The sword of Aegon the Conqueror, passed to Daemon Blackfyre. Became the symbol of the Blackfyre Pretenders.",
      stats: "+5 Prowess, Targaryen legitimacy +20, Dragon bonding bonus",
      howToGet: "AGOT event chain — recover Blackfyre from Essos. Requires significant intrigue.",
      priority: 5
    },
    {
      name: "Dark Sister",
      house: "House Targaryen",
      holder: "Bloodraven (Brynden Rivers) → Beyond the Wall",
      status: "Lost",
      location: "Beyond the Wall with Bloodraven",
      description: "A slim Valyrian Steel sword suited for women or slim men. Wielded by Visenya Targaryen and later Bloodraven.",
      stats: "+3 Prowess, +2 Intrigue when equipped",
      howToGet: "Event chain involving Bloodraven / Three-Eyed Raven. Rare discovery event.",
      priority: 3
    },
    {
      name: "Brightroar",
      house: "House Lannister",
      holder: "Lost at sea",
      status: "Lost",
      location: "Valyria — cursed ruins",
      description: "The ancestral sword of House Lannister, lost when King Tommen II sailed to Valyria and never returned.",
      stats: "+5 Prowess, Lannister legitimacy bonus",
      howToGet: "AGOT expedition event to Valyria — extremely dangerous, potential death/madness events.",
      priority: 4
    },
    {
      name: "Dawn",
      house: "House Dayne",
      holder: "The Sword of the Morning (title)",
      status: "Active",
      location: "Starfall, Dorne",
      description: "Not Valyrian Steel — forged from the heart of a fallen star. Only awarded to the greatest knight of House Dayne who earns the title 'Sword of the Morning'.",
      stats: "+6 Prowess (strongest sword in game), unique Dayne honor bonus",
      howToGet: "Control House Dayne. Earn or grant the Sword of the Morning title.",
      priority: 5
    },
    {
      name: "Red Rain",
      house: "House Drumm (Iron Islands)",
      holder: "Dunstan Drumm",
      status: "Active",
      location: "Iron Islands",
      description: "Valyrian Steel sword of House Drumm, acquired through reaving in the old days.",
      stats: "+4 Prowess, Ironborn raiding bonus",
      howToGet: "Conquer or scheme against House Drumm in the Iron Islands.",
      priority: 3
    },
    {
      name: "Nightfall",
      house: "House Harlaw (Iron Islands)",
      holder: "Ser Harras Harlaw",
      status: "Active",
      location: "Iron Islands",
      description: "Valyrian Steel sword of the Harlaw family, known as a slender, deadly blade.",
      stats: "+4 Prowess",
      howToGet: "Control or raid House Harlaw in the Iron Islands.",
      priority: 3
    }
  ],

  // =============================================
  // DRAGON BONDING GUIDE
  // =============================================
  dragonGuide: {
    requirements: [
      "Must be of Targaryen or Valyrian bloodline (purple/silver hair trait)",
      "Must have a dragon egg in your possession or court",
      "Higher Learning stat improves event outcomes",
      "The 'Dragonlord' trait is the ultimate goal"
    ],
    stages: [
      {
        stage: 1,
        name: "Acquire the Egg",
        description: "Obtain a dragon egg. Options: inherit one, find via event, trade from Essos, or steal.",
        events: ["Dragonstone vaults discovery", "Essos merchant event", "Inheritance event"],
        tips: "Start looking immediately as Targaryen. Dragonstone should have eggs.",
        duration: "Year 1"
      },
      {
        stage: 2,
        name: "Incubate the Egg",
        description: "Keep the egg warm and attended. Events fire over the following months.",
        events: ["Egg begins to glow", "Strange warmth event", "Maester advice event"],
        tips: "Keep a high-Learning Maester. Don't choose skeptical options in events.",
        duration: "6-24 months (RNG)"
      },
      {
        stage: 3,
        name: "The Hatching",
        description: "The egg hatches — choose your actions carefully. Wrong choices can kill the hatchling.",
        events: ["The Hatching event (critical choice)", "Bond or let it go wild"],
        tips: "ALWAYS choose to bond personally. Never delegate to a handler.",
        duration: "Single event"
      },
      {
        stage: 4,
        name: "Young Dragon (Hatchling)",
        description: "Your dragon is alive but small — not yet rideable. Nurture it through events.",
        events: ["Dragon eats event", "First fire event", "Growth milestone events"],
        tips: "Feed it during events. Don't sell it for gold — it will be worth 10x that later.",
        duration: "3-5 years"
      },
      {
        stage: 5,
        name: "First Flight",
        description: "Your dragon is large enough to fly. Riding events begin.",
        events: ["First flight event", "Bonding deepens", "Dragon shows personality"],
        tips: "Choose bold options. Timid choices slow the bond progression.",
        duration: "2-3 years"
      },
      {
        stage: 6,
        name: "Full Bond — Dragonrider",
        description: "You gain the Dragonlord trait. Your dragon is now a battle asset.",
        events: ["Dragonlord ceremony", "Battle with dragon event", "Dragon names itself"],
        tips: "Never send your dragon alone to battle without you early on — it can be killed.",
        duration: "Achievement unlocked"
      },
      {
        stage: 7,
        name: "Adult Dragon",
        description: "Your dragon reaches full size — a world-changing weapon.",
        events: ["Territory marking", "Dragon challenges others", "Legendary status events"],
        tips: "An adult dragon is worth 10,000 soldiers. Guard your dragonrider obsessively.",
        duration: "5-10 years from hatching"
      }
    ],
    knownDragons: [
      { name: "Drogon", color: "Black/Red", rider: "Daenerys Targaryen", status: "Alive", notes: "Largest living dragon. Named after Khal Drogo." },
      { name: "Rhaegal", color: "Green/Bronze", rider: "Jon Snow", status: "Alive (start)", notes: "Named after Rhaegar Targaryen." },
      { name: "Viserion", color: "Cream/Gold", rider: "None → Night King", status: "Alive (start)", notes: "Named after Viserys. Can be turned undead." },
      { name: "Balerion (the Black Dread)", color: "Black", rider: "Aegon the Conqueror", status: "Dead", notes: "The greatest dragon ever. Bones in King's Landing." },
      { name: "Meraxes", color: "Silver", rider: "Rhaenys Targaryen", status: "Dead", notes: "Killed in Dorne. Rhaenys died with her." },
      { name: "Vhagar", color: "Bronze/Gold", rider: "Visenya Targaryen", status: "Dead (old)", notes: "Second largest after Balerion. Long lived." }
    ]
  },

  // =============================================
  // EVENT DECISION GUIDE
  // =============================================
  eventDecisions: [
    {
      category: "Court Events",
      name: "The Wandering Maester",
      trigger: "Random — maester arrives at court seeking employment",
      options: [
        { choice: "Hire them immediately", outcome: "Gain skilled councillor, cost ~20 gold/year", recommended: true },
        { choice: "Test them first", outcome: "May leave, or reveal hidden skills", recommended: false },
        { choice: "Turn them away", outcome: "Miss a potentially game-changing hire", recommended: false }
      ],
      tip: "Always hire maesters with Learning 15+. Their event bonuses compound over years."
    },
    {
      category: "War Events",
      name: "Enemy Offers Surrender",
      trigger: "During war — losing enemy offers peace",
      options: [
        { choice: "Accept honorable terms", outcome: "Get your war goal, end quickly", recommended: true },
        { choice: "Demand humiliation", outcome: "More prestige but enemy never forgives you", recommended: false },
        { choice: "Continue the war", outcome: "Risk stretching your forces, attrition losses", recommended: false }
      ],
      tip: "Accept once you have your war goal. Overextension kills more kingdoms than defeat."
    },
    {
      category: "Intrigue Events",
      name: "Servant Reports a Plot",
      trigger: "Your court has discovered a scheme against you",
      options: [
        { choice: "Investigate secretly", outcome: "Uncover the full conspiracy, get hooks on plotters", recommended: true },
        { choice: "Arrest immediately", outcome: "Stop the plot but miss other conspirators", recommended: false },
        { choice: "Ignore it", outcome: "Plot continues, risk grows", recommended: false }
      ],
      tip: "Always investigate first. Hooks on conspirators are more valuable than quick arrests."
    },
    {
      category: "Dynasty Events",
      name: "Child Shows Promise",
      trigger: "Your child exhibits special talent during education",
      options: [
        { choice: "Encourage this talent (stat-specific)", outcome: "+2 to specific stat permanently", recommended: true },
        { choice: "Redirect to more practical skills", outcome: "Small boost to different stat", recommended: false },
        { choice: "Let them choose freely", outcome: "Random small bonus", recommended: false }
      ],
      tip: "Always match the encouragement to their education focus. Stacking bonuses is how you create exceptional rulers."
    },
    {
      category: "AGOT Events",
      name: "The Red Comet Appears",
      trigger: "AGOT — Specific calendar event",
      options: [
        { choice: "See it as your omen", outcome: "+Legitimacy, +Prestige, faith boost", recommended: true },
        { choice: "Dismiss it as superstition", outcome: "Nothing, small piety loss with faithful", recommended: false },
        { choice: "Consult the maesters", outcome: "+Learning but no prestige", recommended: false }
      ],
      tip: "Claim the comet. Every ruler in Westeros is doing so — be the loudest."
    },
    {
      category: "AGOT Events",
      name: "Wildfire Cache Discovered",
      trigger: "King's Landing holding — random excavation event",
      options: [
        { choice: "Weaponize it for war", outcome: "Massive siege bonus but huge safety risk event chain", recommended: false },
        { choice: "Store it safely", outcome: "+Strategic deterrence, negotiation leverage", recommended: true },
        { choice: "Destroy it all", outcome: "Safety, small piety gain", recommended: false }
      ],
      tip: "Store it. Wildfire as a diplomatic threat is more valuable than the modest combat bonus."
    },
    {
      category: "Health Events",
      name: "The Stranger Comes (Illness)",
      trigger: "Random — ruler or heir falls ill",
      options: [
        { choice: "Best court physician treatment", outcome: "Highest recovery chance, costs physician time", recommended: true },
        { choice: "Rest and prayer", outcome: "Slower recovery, piety gain", recommended: false },
        { choice: "Folk remedies", outcome: "Random — can help or harm", recommended: false }
      ],
      tip: "Always use your court physician. Health is your most important asset. Hire a physician with Learning 14+ specifically for this."
    },
    {
      category: "Succession Events",
      name: "Heir Challenges You",
      trigger: "Adult heir with high Martial and low opinion of you",
      options: [
        { choice: "Accept the challenge (duel)", outcome: "Win: massive prestige, lose: abdicate", recommended: false },
        { choice: "Negotiate a role for them", outcome: "Give them a title/council seat, peace", recommended: true },
        { choice: "Imprison them", outcome: "Civil war risk, dynasty shame", recommended: false }
      ],
      tip: "Give them a council position. A bored ambitious heir is a liability. Give them something to do."
    },
    {
      category: "AGOT Events",
      name: "The Dragon Dreams",
      trigger: "Targaryen ruler — prophetic dream event",
      options: [
        { choice: "Heed the vision and act on it", outcome: "Unique event chain, sometimes major reward", recommended: true },
        { choice: "Dismiss it as a dream", outcome: "Nothing — and the opportunity passes", recommended: false },
        { choice: "Consult a shadowbinder", outcome: "Risky — dark path with powerful consequences", recommended: false }
      ],
      tip: "Always heed Targaryen dreams. The event chains lead to dragon eggs, Valyrian artifacts, or strategic visions."
    }
  ],

  // =============================================
  // CULTURE & RELIGION ADVISOR
  // =============================================
  cultures: [
    {
      name: "Andal (Faith of Seven)",
      region: "Most of Westeros",
      bonuses: ["+Diplomacy with most Westerosi lords", "+Church tax income", "Access to Knightly order"],
      penalties: ["Weak vs Old Gods culture", "No Warg/Greenseer bonuses"],
      convertWhen: "Default for most players. Stay unless you have strong reason to change.",
      difficulty: "Easy"
    },
    {
      name: "First Men (Old Gods)",
      region: "The North, Beyond the Wall",
      bonuses: ["+Warg event chance", "+Greenseer event chance", "+Northern lord opinion", "Godswood building bonuses"],
      penalties: ["-Opinion with Seven Faith lords", "Smaller religious army access"],
      convertWhen: "Playing as Stark or Northern ruler. Essential for Warg/Greenseer playthroughs.",
      difficulty: "Medium"
    },
    {
      name: "Ironborn (Drowned God)",
      region: "Iron Islands",
      bonuses: ["+Naval combat", "+Raiding income", "+Unique Ironborn MaA units", "Reaving bonuses"],
      penalties: ["-Opinion with all mainland lords", "No farming income bonuses"],
      convertWhen: "Playing as Greyjoy. The naval bonuses are exceptional for island-based expansion.",
      difficulty: "Medium"
    },
    {
      name: "Dornish (Rhoynar)",
      region: "Dorne",
      bonuses: ["+Gender equality succession", "+Desert terrain bonus", "+Trade income", "Unique Dornish events"],
      penalties: ["-Levy size vs Northern cultures", "Isolated geographically"],
      convertWhen: "Playing in Dorne. The gender-equal succession is uniquely powerful for dynasty management.",
      difficulty: "Easy"
    },
    {
      name: "R'hllor (Lord of Light)",
      region: "Essos, some Westeros",
      bonuses: ["+Anti-undead bonuses (Long Night)", "Resurrection mechanic for followers", "+Fire magic events", "Unique priest characters"],
      penalties: ["-Opinion with Seven/Old Gods lords initially", "Aggressive conversion pressure"],
      convertWhen: "Preparing for the Long Night OR playing a mystical/magical build. R'hllor resurrection is game-changing.",
      difficulty: "Hard"
    },
    {
      name: "Dothraki (Horse Lords)",
      region: "Dothraki Sea, Essos",
      bonuses: ["+Cavalry bonuses (massive)", "+Raiding", "+Unique Dothraki MaA", "Khal legitimacy mechanics"],
      penalties: ["-City/building income", "-Fortification bonuses", "Cannot siege effectively"],
      convertWhen: "Playing in Essos as a Dothraki ruler or building a cavalry-focused conquest build.",
      difficulty: "Hard"
    },
    {
      name: "Valyrian (Old Valyria)",
      region: "Dragonstone, Essos remnants",
      bonuses: ["+Dragon bonding chance (massive)", "+Valyrian artifact bonuses", "+Unique Targaryen events", "Fire resistance"],
      penalties: ["Rare culture — limited vassal pool", "Targets you for religious persecution"],
      convertWhen: "Essential for Targaryen dragon builds. If you have dragons or want dragons, keep this culture.",
      difficulty: "Very Hard"
    }
  ],

  // =============================================
  // MAP DATA
  // =============================================
  mapRegions: [
    { id: "beyond_wall", name: "Beyond the Wall", row: 1, col: 3, color: "#c8e6f5", textColor: "#1a3a5c", size: "large", economy: 1, military: 2, notes: "White Walker territory. Wildling clans roam here." },
    { id: "north", name: "The North", row: 2, col: 3, color: "#708090", textColor: "#fff", size: "xlarge", economy: 2, military: 4, notes: "Largest kingdom. Stark seat at Winterfell." },
    { id: "iron_islands", name: "Iron Islands", row: 3, col: 1, color: "#4a5a6a", textColor: "#fff", size: "small", economy: 2, military: 3, notes: "Greyjoy naval power. Reaving culture." },
    { id: "vale", name: "The Vale", row: 3, col: 4, color: "#87CEEB", textColor: "#1a3a5c", size: "medium", economy: 4, military: 3, notes: "Arryn seat at the Eyrie. Mountain fortress." },
    { id: "riverlands", name: "Riverlands", row: 3, col: 3, color: "#4169E1", textColor: "#fff", size: "large", economy: 4, military: 3, notes: "Tully seat at Riverrun. Contested central region." },
    { id: "westerlands", name: "Westerlands", row: 3, col: 2, color: "#FFD700", textColor: "#3a2a00", size: "medium", economy: 5, military: 4, notes: "Lannister gold mines. Richest region." },
    { id: "crownlands", name: "Crownlands", row: 4, col: 4, color: "#8B0000", textColor: "#fff", size: "medium", economy: 4, military: 3, notes: "King's Landing. Iron Throne. Baratheon/Crown." },
    { id: "reach", name: "The Reach", row: 4, col: 2, color: "#228B22", textColor: "#fff", size: "xlarge", economy: 5, military: 5, notes: "Tyrell seat at Highgarden. Most fertile land." },
    { id: "stormlands", name: "Stormlands", row: 4, col: 5, color: "#F4A460", textColor: "#3a2a00", size: "medium", economy: 3, military: 4, notes: "Baratheon seat at Storm's End." },
    { id: "dorne", name: "Dorne", row: 5, col: 3, color: "#FF8C00", textColor: "#fff", size: "large", economy: 3, military: 2, notes: "Martell seat at Sunspear. Desert fortress." },
    { id: "essos_free", name: "Free Cities", row: 3, col: 6, color: "#9932CC", textColor: "#fff", size: "medium", economy: 4, military: 2, notes: "Braavos, Pentos, Myr, Tyrosh, Volantis. Trade hubs." },
    { id: "essos_dothraki", name: "Dothraki Sea", row: 2, col: 6, color: "#8B4513", textColor: "#fff", size: "large", economy: 1, military: 5, notes: "Vast steppe. Dothraki horse lords dominate here." },
    { id: "essos_slaver", name: "Slaver's Bay", row: 4, col: 6, color: "#CC4444", textColor: "#fff", size: "medium", economy: 3, military: 3, notes: "Astapor, Yunkai, Meereen. Daenerys campaigns here." }
  ]
};

window.AGOT_EXTRA = AGOT_EXTRA;
