// CK3 Vanilla — Game Data (1066 "Alexios" bookmark focus)

const VANILLA_DATA = {

  // ===========================
  // GREAT DYNASTIES / REALMS
  // ===========================
  houses: [
    {
      id: "karling",
      name: "House Karling",
      words: "By the Grace of God",
      seat: "Paris",
      region: "West Francia",
      color: "#3a5a8a",
      startingRuler: "Philip I of France",
      difficulty: "Beginner",
      economy: 4,
      military: 3,
      diplomacy: 4,
      strengths: ["Large demesne income", "Strong claim to kingdom title", "Central European position", "Good vassal pool"],
      weaknesses: ["Rebellious dukes constantly", "Flanked by HRE and England", "Church interference"],
      keyVassals: ["Duke of Normandy", "Duke of Burgundy", "Duke of Champagne", "Duke of Anjou"],
      tips: [
        "Focus on crushing the great dukes of France before expanding",
        "Build strong alliances with the Pope — Church money is real",
        "Marry into HRE to avoid a two-front war",
        "Use the Capet dynasty's legitimacy early for quick stability",
        "Royal Court DLC unlocks unique Capet event chains — prioritize it",
        "Control key river counties for maximum trade income"
      ]
    },
    {
      id: "rurikid",
      name: "House Rurikid",
      words: "From the Varangians",
      seat: "Kiev",
      region: "Kievan Rus",
      color: "#8B0000",
      startingRuler: "Vsevolod I of Kiev",
      difficulty: "Intermediate",
      economy: 3,
      military: 5,
      diplomacy: 2,
      strengths: ["Enormous territory potential", "Strong tribal levies", "Eastern expansion options", "Viking-era event chains"],
      weaknesses: ["Gavelkind succession splits realm", "Constant internal conflicts", "Mongol threat from east"],
      keyVassals: ["Chernigov princes", "Novgorod lords", "Polotsk branch"],
      tips: [
        "Convert out of Gavelkind succession as fast as possible",
        "Raid the Cumans for gold while building up infrastructure",
        "Forming Russia is the long-term goal — unify all Rus princes",
        "Norse heritage gives access to powerful raid and war mechanics",
        "Watch the Mongols — start preparing defenses in the 1200s",
        "The Orthodox Church is your greatest stabilizing ally"
      ]
    },
    {
      id: "jimena",
      name: "House Jimena",
      words: "Santiago and Castile",
      seat: "Burgos",
      region: "Kingdom of Castile",
      color: "#D4A520",
      startingRuler: "Alfonso VI of Castile",
      difficulty: "Beginner",
      economy: 3,
      military: 4,
      diplomacy: 3,
      strengths: ["Reconquista gives constant wars", "Strong Christian faith bonuses", "El Cid event chain available", "Natural expansion direction"],
      weaknesses: ["Multiple rival kingdoms in Iberia", "Al-Andalus is powerful opponent", "Risk of losing to the Moors"],
      keyVassals: ["El Cid (Rodrigo Díaz)", "Leon nobles", "Portuguese counts"],
      tips: [
        "Use Holy War CBs against the Taifa kingdoms constantly",
        "Recruit El Cid as your marshal — he's exceptional",
        "Don't try to fight all Islamic kingdoms at once — one at a time",
        "The Reconquista mission tree gives massive rewards",
        "Alliance with Aragon protects your eastern flank",
        "Build churches for faith income — Catholicism pays well in Iberia"
      ]
    },
    {
      id: "normandy",
      name: "House of Normandy",
      words: "Dieu et mon droit",
      seat: "London",
      region: "England",
      color: "#C00000",
      startingRuler: "William the Conqueror",
      difficulty: "Beginner",
      economy: 5,
      military: 4,
      diplomacy: 3,
      strengths: ["Island fortress — no land borders with France initially", "Rich England economy", "Strong feudal structure", "Norman heavy cavalry is dominant"],
      weaknesses: ["Welsh and Scottish rebellions", "Norman barons are proud and rebellious", "France eventually presses claims"],
      keyVassals: ["Roger de Montgomery", "Hugh d'Avranches", "Walter Giffard"],
      tips: [
        "Conquer Wales and Scotland early to secure the island",
        "Norman heavy cavalry Men-at-Arms are among the best in the game",
        "Build the Tower of London for a massive prestige boost event",
        "Use England's wealth to fund military reforms",
        "Avoid wars with France until fully consolidated at home",
        "Irish lords are easily conquered once England is stable"
      ]
    },
    {
      id: "komnenos",
      name: "House Komnenos",
      words: "Defender of Rome",
      seat: "Constantinople",
      region: "Byzantine Empire",
      color: "#8B008B",
      startingRuler: "Nikephoros III (pre-Alexios)",
      difficulty: "Hard",
      economy: 5,
      military: 3,
      diplomacy: 4,
      strengths: ["Richest economy in the game", "Roman legacy bonuses", "Greek culture cultural head bonuses", "Access to Cataphract Men-at-Arms"],
      weaknesses: ["Surrounded by enemies on all sides", "Civil war mechanics are brutal", "Seljuk pressure is constant"],
      keyVassals: ["Theme governors", "Doukas family", "Kantakouzenos"],
      tips: [
        "Cataphracts are the best Heavy Cavalry unit in the base game",
        "Restore the Roman Empire as your ultimate goal",
        "The Pronoia system gives unique economic bonuses — use it",
        "Never fight Crusaders AND Seljuks at the same time",
        "Marry strategically into Western dynasties for Crusade immunity",
        "Constantinople's trade income alone can fund massive armies"
      ]
    },
    {
      id: "abbasid",
      name: "House Abbasid",
      words: "Caliph of the Faithful",
      seat: "Baghdad",
      region: "Abbasid Caliphate",
      color: "#1a6a1a",
      startingRuler: "Caliph Al-Muqtadi",
      difficulty: "Hard",
      economy: 4,
      military: 2,
      diplomacy: 4,
      strengths: ["Religious authority is unmatched", "Vast territory and vassal network", "Unique Caliph mechanics", "Rich Middle Eastern trade"],
      weaknesses: ["Seljuk sultans control all real power", "Sunni schisms threaten unity", "Crusades target your territory"],
      keyVassals: ["Seljuk Sultanate", "Various Emirs", "Abbasid princes"],
      tips: [
        "Your real power is soft — use it diplomatically to play factions off each other",
        "The Caliph title gives unique religious CB options",
        "Build Madrasas for incredible Learning and Faith income",
        "Focus on reclaiming real power from the Seljuks gradually",
        "Holy War defensively rather than offensively early",
        "Jihad CBs are your most powerful wartime tool once unlocked"
      ]
    },
    {
      id: "salian",
      name: "House Salian (HRE)",
      words: "For God and Empire",
      seat: "Aachen",
      region: "Holy Roman Empire",
      color: "#FFD700",
      startingRuler: "Henry IV",
      difficulty: "Very Hard",
      economy: 4,
      military: 4,
      diplomacy: 3,
      strengths: ["Enormous vassal pool", "Emperor title mechanics", "Access to Imperial Reconquest CB", "Central European position"],
      weaknesses: ["Princes are nearly impossible to control", "Pope constantly at war with you (Investiture Controversy)", "Elective succession is chaotic"],
      keyVassals: ["Duke of Bavaria", "Duke of Saxony", "Archbishop of Cologne", "King of Bohemia"],
      tips: [
        "The Investiture Contest with Pope Gregory VII is your first crisis — manage it carefully",
        "Never try to directly control all HRE — use vassals strategically",
        "Getting the Papal blessing unlocks massive diplomatic options",
        "Reform the HRE constitution as quickly as possible",
        "The Walk to Canossa event chain is devastating — prepare for it",
        "Use the Imperial title to call Crusades of your own"
      ]
    },
    {
      id: "seljuk",
      name: "House Seljuk",
      words: "Sultan of the East",
      seat: "Isfahan",
      region: "Seljuk Sultanate",
      color: "#2a6a2a",
      startingRuler: "Malik Shah I",
      difficulty: "Hard",
      economy: 3,
      military: 5,
      diplomacy: 3,
      strengths: ["Massive territory", "Exceptional cavalry", "Horse Archer Men-at-Arms are devastating", "Natural expansion east and west"],
      weaknesses: ["Gavelkind equivalent splits realm", "Crusader pressure from west", "Byzantine wars are ongoing"],
      keyVassals: ["Syrian emirs", "Anatolian governors", "Khorasan princes"],
      tips: [
        "Horse Archers are your signature unit — build many",
        "Convert tribal vassals to feudal quickly for better income",
        "Destroy Byzantine before Crusades start hitting your territory",
        "The Great Seljuk mission tree rewards unification",
        "Manage internal factions early — Seljuk princes are ambitious",
        "Trade routes through Persia are your economic backbone"
      ]
    }
  ],

  // ===========================
  // VANILLA MEN-AT-ARMS
  // ===========================
  menAtArms: [
    {
      name: "Heavy Infantry",
      type: "Heavy Infantry",
      icon: "🛡️",
      description: "The backbone of medieval armies. High toughness, steady in all terrain.",
      stats: { damage: 30, toughness: 35, pursuit: 5, screen: 10 },
      terrain: "Plains, Hills",
      counters: ["Light Cavalry", "Light Infantry"],
      counteredBy: ["Pikemen", "Heavy Cavalry"],
      recruitment: "Medium — available to most feudal realms",
      cost: "Medium gold, medium supply",
      tip: "Your bread-and-butter unit. Stack with knights for maximum melee power."
    },
    {
      name: "Huscarls",
      type: "Heavy Infantry",
      icon: "🪓",
      description: "Norse/Anglo-Saxon elite infantry. Top-tier heavy infantry with devastating attack.",
      stats: { damage: 40, toughness: 30, pursuit: 8, screen: 12 },
      terrain: "Plains, Forests",
      counters: ["Light Infantry", "Archers", "Light Cavalry"],
      counteredBy: ["Cataphracts", "Heavy Cavalry"],
      recruitment: "Norsemen, Anglo-Saxons, Normans only",
      cost: "High gold",
      tip: "One of the best infantry units. Essential for Norse and English playthroughs."
    },
    {
      name: "Heavy Cavalry",
      type: "Heavy Cavalry",
      icon: "🐴",
      description: "Armored knights — the decisive shock unit of medieval warfare.",
      stats: { damage: 50, toughness: 20, pursuit: 40, screen: 4 },
      terrain: "Plains",
      counters: ["Heavy Infantry", "Light Infantry", "Archers"],
      counteredBy: ["Pikemen", "Terrain (Mountains, Forests)"],
      recruitment: "Feudal Catholic/Orthodox realms",
      cost: "Very High gold",
      tip: "Devastating on plains. Completely useless in forests and mountains. Pick terrain carefully."
    },
    {
      name: "Cataphracts",
      type: "Heavy Cavalry",
      icon: "⚔️",
      description: "Byzantine super-cavalry. The most powerful cavalry unit in the game.",
      stats: { damage: 60, toughness: 28, pursuit: 45, screen: 5 },
      terrain: "Plains, Hills",
      counters: ["Everything on open ground"],
      counteredBy: ["Pikemen", "Extremely rough terrain"],
      recruitment: "Byzantine/Greek culture only",
      cost: "Extremely High",
      tip: "The best Heavy Cavalry in vanilla. Playing Byzantine and NOT building these is a mistake."
    },
    {
      name: "Horse Archers",
      type: "Light Cavalry",
      icon: "🏹",
      description: "Mobile mounted archers — devastating ranged harassment before melee contact.",
      stats: { damage: 22, toughness: 10, pursuit: 55, screen: 18 },
      terrain: "Steppes, Plains, Drylands",
      counters: ["Heavy Infantry", "Archers", "Siege equipment"],
      counteredBy: ["Heavy Cavalry", "Pikemen"],
      recruitment: "Steppe, Nomad, Turkish cultures",
      cost: "Medium",
      tip: "Essential for Seljuk, Mongol, and Cuman playthroughs. Absolutely dominant in steppe terrain."
    },
    {
      name: "Pikemen",
      type: "Spearmen",
      icon: "🗡️",
      description: "Anti-cavalry specialists. A wall of pikes stops any cavalry charge cold.",
      stats: { damage: 20, toughness: 30, pursuit: 5, screen: 20 },
      terrain: "Plains, Hills",
      counters: ["Heavy Cavalry", "Light Cavalry", "Cataphracts"],
      counteredBy: ["Heavy Infantry", "Archers"],
      recruitment: "Most European realms",
      cost: "Low-Medium",
      tip: "Mandatory counter to enemy cavalry. Mix with Heavy Infantry for balanced infantry lines."
    },
    {
      name: "Crossbowmen",
      type: "Skirmishers",
      icon: "🎯",
      description: "Powerful ranged infantry with armor-piercing bolts. Slow to reload, devastating shots.",
      stats: { damage: 30, toughness: 8, pursuit: 0, screen: 25 },
      terrain: "Plains, Forests, Hills",
      counters: ["Light Infantry", "Archers", "Heavy Infantry at range"],
      counteredBy: ["Light Cavalry", "Heavy Cavalry (closing fast)"],
      recruitment: "Italian, French, Iberian cultures",
      cost: "Medium",
      tip: "Excellent screen unit. Crossbowmen make your army punch above its weight."
    },
    {
      name: "War Elephants",
      type: "Shock",
      icon: "🐘",
      description: "Terrifying shock units from South Asia and Africa. Enormous combat power but fragile.",
      stats: { damage: 80, toughness: 15, pursuit: 20, screen: 5 },
      terrain: "Drylands, Plains",
      counters: ["Everything in open battle"],
      counteredBy: ["Noise/fire effects (event)", "Mountains", "Pikemen"],
      recruitment: "Indian Subcontinent, Africa cultures",
      cost: "Enormous",
      tip: "Situationally the most powerful unit in the game. Only viable if you control Indian/African territory."
    }
  ],

  // ===========================
  // SUCCESSION LAWS (same mechanics as AGOT)
  // ===========================
  successionLaws: [
    {
      name: "Primogeniture",
      description: "Eldest child inherits the entire realm.",
      recommended: true,
      pros: ["Realm stays unified", "Predictable succession", "No civil war on inheritance"],
      cons: ["Your heir may have weak stats", "Younger children can resent being excluded"],
      howToUnlock: "Requires Crown Authority: Medium and Cultural Innovation",
      agotNote: "Universal mechanic — works identically in vanilla CK3."
    },
    {
      name: "Gavelkind",
      description: "All children inherit portions of the realm. Realm splits on death.",
      recommended: false,
      pros: ["Children stay loyal", "Easy to keep initially"],
      cons: ["Realm splits every generation", "Devastating for long-term play", "Destroys your empire"],
      howToUnlock: "Default for tribal rulers",
      agotNote: "Universal mechanic. Reform this ASAP as any ruler."
    },
    {
      name: "Elective Monarchy",
      description: "Powerful vassals vote on the next ruler from your dynasty.",
      recommended: false,
      pros: ["Can elect the best candidate", "Powerful vassals stay loyal"],
      cons: ["Vassals gain enormous power", "Enemy dynasties can be elected", "Dangerous to manage"],
      howToUnlock: "HRE default, or cultural unlock",
      agotNote: "The HRE is stuck with this by default. Reforming it is a major mid-game goal."
    },
    {
      name: "Tanistry",
      description: "Clan elects the most capable close relative.",
      recommended: false,
      pros: ["Competent rulers", "Celtic cultural authenticity"],
      cons: ["Still elected — unpredictable", "Non-dynasty members can win"],
      howToUnlock: "Celtic cultures",
      agotNote: "Use for Irish/Scottish/Welsh rulers. Upgrade to Primogeniture ASAP."
    },
    {
      name: "Ultimogeniture",
      description: "Youngest child inherits.",
      recommended: false,
      pros: ["Heir has more time to develop before inheriting"],
      cons: ["Completely unplanned succession", "Older children often rebel"],
      howToUnlock: "Specific cultural traditions",
      agotNote: "Very niche. Only use if your culture specifically rewards it."
    }
  ],

  // ===========================
  // VANILLA TRAITS (selected important ones)
  // ===========================
  traits: [
    { name: "Genius", category: "Education", effect: "+5 all stats, Learning +5, faster skill gain", isPositive: true, rarity: "Rare", tip: "The single best trait in the game. Pray for it in children." },
    { name: "Quick", category: "Education", effect: "+3 all stats", isPositive: true, rarity: "Uncommon", tip: "Second-best education trait. Still very powerful." },
    { name: "Diligent", category: "Personality", effect: "+1 all stats, +1 Stewardship", isPositive: true, rarity: "Common", tip: "Great general trait. Combine with good education for stacking bonuses." },
    { name: "Brave", category: "Personality", effect: "+2 Prowess, +1 Martial, +5 Advantage in battle", isPositive: true, rarity: "Common", tip: "Essential for a martial ruler or commander." },
    { name: "Greedy", category: "Personality", effect: "+2 Stewardship, -15 opinion of vassals", isPositive: false, rarity: "Common", tip: "The gold bonus is tempting but vassal opinion loss compounds badly." },
    { name: "Craven", category: "Personality", effect: "-2 Prowess, -1 Martial, -10 vassal opinion", isPositive: false, rarity: "Common", tip: "Never show cowardice in events. Craven is one of the worst ruler traits." },
    { name: "Ambitious", category: "Personality", effect: "+2 all stats, but others see you as a threat", isPositive: true, rarity: "Common", tip: "Excellent stats but causes intrigue complications. Worth it for capable rulers." },
    { name: "Wrathful", category: "Personality", effect: "+2 Prowess, +1 Martial, -10 diplomacy opinion", isPositive: false, rarity: "Common", tip: "Stats are decent but diplomacy hit hurts alliances." },
    { name: "Lustful", category: "Personality", effect: "+1 Intrigue, more lover/affair events", isPositive: false, rarity: "Common", tip: "Illegitimate children cause succession crises. Manage carefully." },
    { name: "Just", category: "Personality", effect: "+2 Diplomacy, +10 vassal opinion", isPositive: true, rarity: "Common", tip: "Vassal opinion +10 is huge early game when you're consolidating power." },
    { name: "Cynical", category: "Personality", effect: "-1 Piety/month, immune to religious manipulation", isPositive: true, rarity: "Common", tip: "Stops priests and bishops from extorting you via piety mechanics." },
    { name: "Zealous", category: "Personality", effect: "+1 Piety/month, better holy war outcomes", isPositive: true, rarity: "Common", tip: "Essential for Crusade-focused rulers. Piety income funds holy armies." },
    { name: "Temperate", category: "Personality", effect: "-Stress gain, healthier lifestyle", isPositive: true, rarity: "Common", tip: "Reduces stress accumulation — great for long-reigning rulers." },
    { name: "Gluttonous", category: "Personality", effect: "+Health issues over time, negative events", isPositive: false, rarity: "Common", tip: "Hidden health damage is dangerous for ruler longevity." },
    { name: "Shrewd", category: "Personality", effect: "+2 Stewardship, +1 Intrigue, +15 scheme success", isPositive: true, rarity: "Uncommon", tip: "Exceptional for an intrigue/economy focused ruler." },
    { name: "Paranoid", category: "Personality", effect: "+1 Intrigue but negative court events", isPositive: false, rarity: "Common", tip: "The negative event spam outweighs the intrigue bonus." }
  ],

  // ===========================
  // VANILLA BUILDINGS
  // ===========================
  buildings: [
    {
      name: "Farms & Fields",
      type: "Economic",
      income: "+0.3/level",
      militaryBonus: "None",
      maxLevel: 3,
      terrain: "Plains, Farmlands",
      cost: "100/level",
      tip: "Your primary income source in fertile territories. Max in all farmland holdings."
    },
    {
      name: "Windmills",
      type: "Economic",
      income: "+0.2/level",
      militaryBonus: "None",
      maxLevel: 2,
      terrain: "Plains, Hills",
      cost: "80/level",
      tip: "Good secondary income. Always build after Farms in rural holdings."
    },
    {
      name: "Barracks",
      type: "Military",
      income: "+0.1/level",
      militaryBonus: "+100 Garrison / +50 Levies per level",
      maxLevel: 3,
      terrain: "All",
      cost: "120/level",
      tip: "Essential for castle holdings. Garrison size directly affects siege defense duration."
    },
    {
      name: "Market",
      type: "Economic",
      income: "+0.5/level (city bonus)",
      militaryBonus: "None",
      maxLevel: 3,
      terrain: "City Holdings",
      cost: "150/level",
      tip: "The richest building in the game. Prioritize cities near trade routes."
    },
    {
      name: "Hunting Grounds",
      type: "Prestige",
      income: "+0.15/level",
      militaryBonus: "None",
      maxLevel: 2,
      terrain: "Forest, Hills",
      cost: "75/level",
      tip: "Cheap prestige income. Good filler for forested holdings."
    },
    {
      name: "Training Fields",
      type: "Military",
      income: "None",
      militaryBonus: "+1 Knight effectiveness / level",
      maxLevel: 2,
      terrain: "Castle, Plains",
      cost: "100/level",
      tip: "Knights are massively powerful — buffing them with Training Fields pays off fast."
    },
    {
      name: "Scriptorium / Library",
      type: "Learning",
      income: "+0.1/level",
      militaryBonus: "None",
      maxLevel: 2,
      terrain: "Temple Holdings",
      cost: "90/level",
      tip: "Increases innovation spread in your realm — important for technology advancement."
    },
    {
      name: "Cathedral",
      type: "Faith",
      income: "+0.3 Piety/month",
      militaryBonus: "None",
      maxLevel: 3,
      terrain: "Temple Holdings",
      cost: "200/level",
      tip: "Piety income enables Crusade launching and Holy Order maintenance — critical for Catholic rulers."
    },
    {
      name: "Walls & Towers",
      type: "Defense",
      income: "None",
      militaryBonus: "+200 Fort Level / +5% Defender Advantage",
      maxLevel: 3,
      terrain: "Castle Holdings",
      cost: "150/level",
      tip: "Essential for your capital. High fort level can hold sieges for years against large armies."
    },
    {
      name: "Harbor",
      type: "Naval/Economic",
      income: "+0.4/level",
      militaryBonus: "+100 Garrison (coastal)",
      maxLevel: 3,
      terrain: "Coastal Holdings",
      cost: "130/level",
      tip: "Coastal holdings with Harbors are your most valuable economic assets. Build these first."
    }
  ],

  // ===========================
  // VANILLA TIPS
  // ===========================
  tips: {
    economy: [
      "Prioritize Farms in farmland counties — they multiply everything else",
      "Cities are the richest holdings — always build Markets there",
      "High Stewardship (15+) gives a massive income multiplier — it's your most important stat",
      "Coastal holdings with Harbors generate more than inland castles",
      "Don't build military buildings until your economy is solid",
      "Manage your domain carefully — over-extension destroys income"
    ],
    military: [
      "Knights are individually more powerful than any Men-at-Arms regiment early",
      "Recruit council members with high Martial and Prowess as your knights",
      "Heavy Cavalry dominates open plains but is useless in mountains",
      "Pikemen are a cheap, essential counter to enemy cavalry",
      "Let your Marshal manage armies during war — their Martial adds to combat outcome",
      "Don't fight wars on two fronts — Westeros applies here too"
    ],
    intrigue: [
      "Hooks on powerful rulers are the most valuable diplomatic currency",
      "Keep a 15+ Intrigue Spymaster permanently on 'Find Secrets'",
      "Stress management matters — a mental-broken ruler can destroy everything",
      "The Murder scheme is your most powerful intrigue tool",
      "Fabricate Claims constantly — even low-priority ones build leverage",
      "Your court physician prevents illness deaths — hire Learning 15+ only"
    ],
    agotSpecific: [
      "Crusades are your largest military opportunity as a Catholic ruler",
      "Piety income is as important as gold for religious rulers",
      "The Papacy is a powerful ally or enemy — manage relations constantly",
      "Holy Orders provide free troops if you have enough Piety",
      "Forming a Kingdom title costs gold but unlocks powerful laws",
      "Your cultural head status gives unique innovation bonuses — be the largest culture"
    ]
  }
};

// ===========================
// VANILLA EXTRA DATA
// ===========================
const VANILLA_EXTRA = {

  // Crusade Preparedness (replaces Long Night)
  crusadeChecklist: [
    {
      id: "piety",
      category: "Religion",
      item: "Piety Reserves",
      description: "Piety is required to call Crusades and maintain Holy Orders. Low piety = no crusade.",
      levels: ["Negative", "0-200", "200-500", "500-1500", "1500+"],
      scoring: [0, 1, 2, 3, 5],
      tips: "Build Cathedrals, be Zealous, complete pilgrimages. Piety income compounds over years."
    },
    {
      id: "holy_order",
      category: "Military",
      item: "Holy Order Support",
      description: "Holy Orders (Knights Templar, Hospitaller, etc.) provide free troops during holy wars.",
      levels: ["None", "One order, poor standing", "One order, good standing", "Two orders supported", "All major orders allied"],
      scoring: [0, 1, 2, 4, 6],
      tips: "Donate gold regularly to Holy Orders. The Templars in particular are a military game-changer."
    },
    {
      id: "realm_size",
      category: "Military",
      item: "Realm Size & Army",
      description: "Crusades require projecting force to the Holy Land. You need a large enough army to matter.",
      levels: ["Under 2,000 troops", "2,000-5,000", "5,000-12,000", "12,000-25,000", "25,000+"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Knights + Men-at-Arms quality beats raw levy numbers. Invest in MaA before the Crusade call."
    },
    {
      id: "papal_relations",
      category: "Diplomacy",
      item: "Papal Relations",
      description: "Good relations with the Pope unlocks Crusade calling, Papal blessing, and church support.",
      levels: ["Excommunicated", "Poor (< 0)", "Neutral (0-25)", "Good (25-60)", "Excellent (60+)"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Never steal Church money unless you can immediately repair relations. Papal support is too valuable."
    },
    {
      id: "crusade_alliances",
      category: "Diplomacy",
      item: "Crusade Allies",
      description: "Other Catholic rulers joining your crusade multiply the force dramatically.",
      levels: ["None", "1 minor ally", "1-2 major allies", "Coalition of rulers", "Pan-European alliance"],
      scoring: [0, 1, 2, 4, 5],
      tips: "Marry into major Catholic dynasties before the crusade. Your father-in-law's army joins you."
    },
    {
      id: "gold_reserves",
      category: "Logistics",
      item: "Gold Reserves",
      description: "Crusades are expensive — maintaining armies far from home drains gold fast.",
      levels: ["< 100", "100-300", "300-700", "700-1500", "1500+"],
      scoring: [0, 1, 2, 3, 5],
      tips: "Aim for 1000+ gold before a major crusade. Attrition and supply costs are brutal."
    },
    {
      id: "succession_secure",
      category: "Stability",
      item: "Secure Succession",
      description: "If you die on crusade, an insecure succession causes immediate civil war at home.",
      levels: ["Contested / multiple claimants", "Weak heir", "Clear heir but low opinion", "Strong heir, vassal support", "Primogeniture, full support"],
      scoring: [0, 1, 2, 3, 5],
      tips: "Never go on a major crusade with contested succession. You WILL die in a siege."
    },
    {
      id: "realm_stability",
      category: "Stability",
      item: "Internal Stability",
      description: "Rebel factions at home will strike the moment your armies leave for the Holy Land.",
      levels: ["Active rebellion", "Major faction threat", "Minor factions", "Stable, small factions", "Full control, no factions"],
      scoring: [0, 1, 2, 3, 5],
      tips: "Crush all major factions before the crusade. Imprison dangerous vassals as you depart."
    }
  ],

  // Legendary Artifacts (replaces Valyrian Steel)
  legendaryArtifacts: [
    {
      name: "The Holy Grail",
      type: "Holy Relic",
      status: "Lost",
      effect: "+10 Piety/month, +3 Learning, ruler health bonus",
      location: "Unknown — various quest events",
      howToGet: "Rare discovery event through Faith focus or Pilgrimage. Extremely RNG-dependent.",
      priority: 5
    },
    {
      name: "The Sword of Charlemagne",
      type: "Legendary Weapon",
      status: "Discoverable",
      effect: "+4 Prowess, +2 Martial, +15 legitimacy as Karling",
      location: "Can be found via Karling dynasty events",
      howToGet: "Karling dynasty heritage events. Fully restoring the Karling empire has high discovery chance.",
      priority: 4
    },
    {
      name: "True Cross Fragment",
      type: "Holy Relic",
      status: "Discoverable",
      effect: "+5 Piety/month, +1 Faith opinion, Crusade advantage",
      location: "Jerusalem, Crusade loot events, Byzantine treasury",
      howToGet: "Control Jerusalem or win a Crusade. The richest event chain reward for Catholic rulers.",
      priority: 5
    },
    {
      name: "Durandal (Roland's Sword)",
      type: "Legendary Weapon",
      status: "Discoverable",
      effect: "+5 Prowess, +3 Martial, Frankish legitimacy bonus",
      location: "Francia — Karling dynasty event chain",
      howToGet: "Play as a Frank/Karling ruler and explore the Carolingian heritage event chain.",
      priority: 4
    },
    {
      name: "The Shroud of Turin",
      type: "Holy Relic",
      status: "Active",
      effect: "+3 Piety/month, +1 Devotion, unique prayer event chain",
      location: "Italian city holding (historically Turin)",
      howToGet: "Control the holding where it resides. Can be stolen via Intrigue scheme.",
      priority: 3
    },
    {
      name: "Viking Runestone",
      type: "Cultural Artifact",
      status: "Discoverable",
      effect: "+2 Prestige/month, +10 Norse vassal opinion, unique raid events",
      location: "Scandinavian holdings",
      howToGet: "Excavation events in Scandinavian territory. High Learning ruler improves discovery chance.",
      priority: 3
    },
    {
      name: "Byzantine Crown Jewels",
      type: "Regalia",
      status: "Active",
      effect: "+4 Prestige/month, +2 Diplomacy, Roman legitimacy",
      location: "Constantinople",
      howToGet: "Control Constantinople. These pass automatically with the Byzantine crown.",
      priority: 4
    },
    {
      name: "The Spear of Destiny",
      type: "Holy Relic",
      status: "Lost",
      effect: "+3 Martial, +5 Prowess, unique holy war event chain",
      location: "HRE imperial treasury — rare event",
      howToGet: "HRE emperor position or intrigue theft from the HRE. Starts a unique chain.",
      priority: 3
    }
  ],

  // Holy Orders guide (replaces Dragon Guide)
  holyOrders: [
    {
      name: "Knights Templar",
      faith: "Catholic",
      founded: "1119",
      icon: "✝️",
      troops: "Heavy Cavalry + Heavy Infantry",
      strength: "The most powerful Holy Order in combat. Templars are elite professional soldiers.",
      how_to_use: "Donate gold to raise their opinion. When calling a Holy War or Crusade, they provide free armies.",
      unique_bonus: "Templar 'Trial by Combat' event chain. Massive gold accumulation unique events.",
      tip: "Keep 30+ Piety and regular donations. Templars joining a Crusade is equivalent to 3,000 heavy cavalry."
    },
    {
      name: "Knights Hospitaller",
      faith: "Catholic",
      founded: "1080",
      icon: "🏥",
      troops: "Heavy Infantry + Crossbowmen",
      strength: "Excellent defensive fighters. Also provide medical benefits — reduces army attrition.",
      how_to_use: "Donate regularly. Best used for defensive Holy Wars in vulnerable border territories.",
      unique_bonus: "Hospital events — Hospitaller court physician gives the best health care bonuses.",
      tip: "The Hospitaller court physician is worth more than a normal physician. Recruit one."
    },
    {
      name: "Teutonic Knights",
      faith: "Catholic",
      founded: "1190",
      icon: "🛡️",
      troops: "Heavy Infantry + Huscarls",
      strength: "Northern Crusade specialists. Best in Baltic, Slavic, and forest terrain.",
      how_to_use: "Essential for converting pagan Baltic rulers. Grant them territory in Prussia for a powerful ally.",
      unique_bonus: "Unique conversion events in pagan lands. Grant them the Northern Crusade duchy.",
      tip: "If you're expanding north into Baltic territory, the Teutonic Knights are indispensable."
    },
    {
      name: "Varangian Guard",
      faith: "Orthodox",
      founded: "988",
      icon: "🪓",
      troops: "Huscarls + Heavy Infantry",
      strength: "Byzantine elite guard — some of the best heavy infantry in the game.",
      how_to_use: "As Byzantine Emperor, the Varangians are automatically at your disposal.",
      unique_bonus: "Individual Varangian character recruitment events. Unique Byzantine court events.",
      tip: "Recruit Norse and Anglo-Saxon characters specifically for the Varangian Guard trait."
    },
    {
      name: "Order of Santiago",
      faith: "Catholic",
      founded: "1170",
      icon: "⚔️",
      troops: "Heavy Cavalry + Light Infantry",
      strength: "Iberian Reconquista specialists. Essential for Catholic Iberian rulers fighting the Moors.",
      how_to_use: "Invaluable for Spanish rulers during the Reconquista. They provide free cavalry.",
      unique_bonus: "Reconquista event chain. Convert Moorish territory bonus events.",
      tip: "Playing Castile or Aragon without using the Order of Santiago is leaving massive free armies on the table."
    }
  ],

  // Vanilla European map regions
  mapRegions: [
    { id: "scandinavia", name: "Scandinavia", row: 1, col: 2, color: "#4a6080", textColor: "#fff", size: "large", economy: 2, military: 4, notes: "Norse kingdoms. Raiding powerhouses. Rurikid expansion north." },
    { id: "england", name: "England", row: 2, col: 1, color: "#C00000", textColor: "#fff", size: "medium", economy: 5, military: 4, notes: "Post-Conquest Norman England. Richest island realm." },
    { id: "france", name: "France", row: 2, col: 2, color: "#3a5a8a", textColor: "#fff", size: "large", economy: 4, military: 3, notes: "Capet dynasty. Rich farmland. Constant ducal rebellions." },
    { id: "hre", name: "Holy Roman Empire", row: 2, col: 3, color: "#8B8B00", textColor: "#fff", size: "xlarge", economy: 4, military: 4, notes: "Most complex realm. Emperor vs princes vs Pope." },
    { id: "iberia", name: "Iberia", row: 3, col: 1, color: "#D4A520", textColor: "#000", size: "large", economy: 3, military: 4, notes: "Reconquista ongoing. Christian kingdoms vs Al-Andalus." },
    { id: "italy", name: "Italy", row: 3, col: 2, color: "#2a6a4a", textColor: "#fff", size: "medium", economy: 5, military: 2, notes: "Trade cities. Pope territory. Contested between HRE and independents." },
    { id: "balkans", name: "Balkans", row: 3, col: 3, color: "#5a3a8a", textColor: "#fff", size: "medium", economy: 2, military: 3, notes: "Orthodox Christian kingdoms. Byzantine borderlands." },
    { id: "byzantium", name: "Byzantium", row: 3, col: 4, color: "#8B008B", textColor: "#fff", size: "large", economy: 5, military: 3, notes: "Constantinople. Richest city. Greek culture heartland." },
    { id: "kievan_rus", name: "Kievan Rus", row: 2, col: 4, color: "#8B0000", textColor: "#fff", size: "xlarge", economy: 2, military: 4, notes: "Rurikid principalities. Future Russia. Mongol threat." },
    { id: "middle_east", name: "Middle East", row: 4, col: 4, color: "#2a6a2a", textColor: "#fff", size: "large", economy: 4, military: 3, notes: "Seljuk Sultanate. Future Crusade target. Jerusalem." },
    { id: "north_africa", name: "North Africa", row: 4, col: 2, color: "#CC8800", textColor: "#fff", size: "large", economy: 3, military: 3, notes: "Berber kingdoms. Al-Andalus southern base." },
    { id: "persia", name: "Persia", row: 3, col: 5, color: "#4a2a6a", textColor: "#fff", size: "large", economy: 4, military: 3, notes: "Seljuk heartland. Silk Road trade income." }
  ],

  // Vanilla marriage alliances
  marriageBenefits: {
    karling_rurikid: {
      alliance: "Moderate — East-West axis. Useful but geographically separated",
      claims: "Cross-claims possible on border territories",
      prestige: "High — two legendary dynasty names",
      risks: "Religious difference (Catholic vs Orthodox) requires tolerance",
      recommendation: "Good diplomatic marriage. Use for peace, not combat alliance."
    },
    normandy_karling: {
      alliance: "Very Strong — France and England combined dominate Western Europe",
      claims: "Norman claims on French territory and vice-versa",
      prestige: "Very High",
      risks: "Historical tension — England and France are natural rivals",
      recommendation: "The canonical Western European alliance. Essential for early stability."
    },
    komnenos_karling: {
      alliance: "Strong — Western Catholic + Eastern Orthodox = pan-European deterrence",
      claims: "Byzantine historical claims on southern Italy create complications",
      prestige: "Enormous — combining the two most prestigious dynasties in 1066",
      risks: "Religious schism — Catholic-Orthodox marriages have opinion penalties",
      recommendation: "Prestige marriage of the century. Worth managing the religious friction."
    },
    jimena_abbasid: {
      alliance: "Impossible under normal circumstances — requires special diplomatic events",
      claims: "Would end the Reconquista dynamic entirely",
      prestige: "Negative — massive faith opinion loss from your own church",
      risks: "Excommunication risk, Holy War declarations from other Catholic rulers",
      recommendation: "Do not attempt. The diplomatic and religious cost is catastrophic."
    },
    seljuk_abbasid: {
      alliance: "Natural — Sunni solidarity + military power",
      claims: "Seljuk legitimacy massively boosted by Abbasid blessing",
      prestige: "Very High in Islamic world",
      risks: "Seljuk may eventually rebel for full caliphate control",
      recommendation: "The central Islamic world alliance. Unbreakable when working."
    }
  },

  // Vanilla events
  eventDecisions: [
    {
      category: "Court Events",
      name: "The Wandering Scholar",
      trigger: "Random — learned stranger arrives seeking patronage",
      options: [
        { choice: "Hire them as court scholar", outcome: "Gain Learning +1 bonus and innovation boost", recommended: true },
        { choice: "Send them to the monastery", outcome: "+Piety but lose the talent", recommended: false },
        { choice: "Turn them away", outcome: "Nothing", recommended: false }
      ],
      tip: "Scholars accelerate innovation and give unique event chains. Always hire them."
    },
    {
      category: "AGOT Events",
      name: "The Pope Calls a Crusade",
      trigger: "Pope declares Crusade for the Holy Land",
      options: [
        { choice: "Join the Crusade with full forces", outcome: "Major Crusade score, potential kingdom reward", recommended: true },
        { choice: "Make a token contribution", outcome: "Minimal score, lose papal favor", recommended: false },
        { choice: "Ignore the call", outcome: "Massive papal opinion loss, possible excommunication", recommended: false }
      ],
      tip: "Crusades with high participation give entire kingdoms. Never skip if you have the army."
    },
    {
      category: "Intrigue Events",
      name: "Vassal Demands More Autonomy",
      trigger: "Powerful duke demands lower Crown Authority",
      options: [
        { choice: "Negotiate — give minor concession", outcome: "Peace, small opinion boost", recommended: true },
        { choice: "Imprison them for insolence", outcome: "War with their allies", recommended: false },
        { choice: "Refuse flatly", outcome: "Rebellion joins existing faction", recommended: false }
      ],
      tip: "Pick your battles. Imprison only when you can win the war AND have backup support."
    },
    {
      category: "Health Events",
      name: "The Black Death",
      trigger: "Plague spreads into your territory",
      options: [
        { choice: "Quarantine infected regions", outcome: "Economic loss, but plague contained faster", recommended: true },
        { choice: "Trust God's will — do nothing", outcome: "Plague spreads, mass death, economy collapses", recommended: false },
        { choice: "Send physicians", outcome: "Slow spread with partial success", recommended: false }
      ],
      tip: "Quarantine is always the right call. Economic recovery is faster than population recovery."
    },
    {
      category: "Dynasty Events",
      name: "Child Education — Shows Aptitude",
      trigger: "Heir shows extraordinary skill in a subject",
      options: [
        { choice: "Double down on that education focus", outcome: "+2 to that skill permanently", recommended: true },
        { choice: "Broaden their education", outcome: "+1 spread across stats", recommended: false },
        { choice: "Let them choose themselves", outcome: "Small random bonus", recommended: false }
      ],
      tip: "Specializing the heir is always better. A 20+ stat in one skill beats balanced 12s."
    },
    {
      category: "Court Events",
      name: "Pilgrimage Opportunity",
      trigger: "Your ruler or an advisor proposes a pilgrimage",
      options: [
        { choice: "Go personally to Jerusalem", outcome: "+50 Piety, -50 Stress, unique trait possible", recommended: true },
        { choice: "Send a representative", outcome: "+15 Piety", recommended: false },
        { choice: "Decline — too risky", outcome: "Nothing, minor piety loss", recommended: false }
      ],
      tip: "Personal pilgrimages are one of the best stress relief tools in the game."
    },
    {
      category: "Succession Events",
      name: "Great Earl's Revolt",
      trigger: "Multiple powerful vassals join a faction rebellion",
      options: [
        { choice: "Fight — crush the rebellion", outcome: "Win: massive authority gain. Lose: forced concessions", recommended: false },
        { choice: "Negotiate — grant some demands", outcome: "Peace, but precedent set for future demands", recommended: true },
        { choice: "Arrest the faction leader pre-emptively", outcome: "War if allies defend them", recommended: false }
      ],
      tip: "Negotiate when outnumbered. Concede enough to end it, then rebuild authority gradually."
    },
    {
      category: "AGOT Events",
      name: "Investiture Crisis",
      trigger: "Pope demands control over church appointments in your realm",
      options: [
        { choice: "Acknowledge papal authority", outcome: "Massive papal opinion gain, lose bishop income", recommended: false },
        { choice: "Resist — maintain lay investiture", outcome: "War with Pope's allies, excommunication risk", recommended: true },
        { choice: "Compromise — partial concession", outcome: "Modest opinion gain, keep some income", recommended: false }
      ],
      tip: "Resist if you have allies. Bishop income is too valuable to surrender. But never fight alone."
    },
    {
      category: "Health Events",
      name: "Court Physician Diagnoses Heir",
      trigger: "Heir falls ill — physician offers treatment options",
      options: [
        { choice: "Use all available medical knowledge", outcome: "Best recovery chance, risk of experimental treatment", recommended: true },
        { choice: "Prayer and rest", outcome: "Slow recovery, piety gain", recommended: false },
        { choice: "Folk remedy", outcome: "Random — 50/50 good or worse", recommended: false }
      ],
      tip: "Always use the physician. A court physician with Learning 15+ prevents the vast majority of heir deaths."
    }
  ],

  // Vanilla cultures
  cultures: [
    {
      name: "Norman",
      region: "England, Southern Italy, Antioch",
      bonuses: ["+Heavy Cavalry bonus", "Feudal efficiency", "+Conquest legitimacy", "Unique Norman architecture events"],
      penalties: ["Conflicts with conquered cultures", "-Opinion with Anglo-Saxons/Greeks initially"],
      convertWhen: "If playing England or Southern Italy. Norman feudalism is the gold standard early-medieval culture.",
      difficulty: "Easy"
    },
    {
      name: "Norse / Scandinavian",
      region: "Scandinavia, Varangian Russia",
      bonuses: ["+Huscarl Men-at-Arms (top infantry)", "+Raiding income", "+Naval combat", "Unique Viking event chains"],
      penalties: ["Pagan Norse religion causes diplomatic issues", "Raiding makes enemies fast"],
      convertWhen: "Viking Age start (867). Convert to Christian Norse when needed for alliances.",
      difficulty: "Medium"
    },
    {
      name: "Greek / Byzantine",
      region: "Byzantine Empire, Greece, Anatolia",
      bonuses: ["Cataphract access", "+Trade income", "+Innovation spread", "Roman Empire restoration events"],
      penalties: ["Orthodox schism limits Catholic alliances", "Cultural imperialism pressure in non-Greek lands"],
      convertWhen: "Essential for Byzantine playthrough. Restoring Rome requires Greek culture.",
      difficulty: "Hard"
    },
    {
      name: "Frankish / French",
      region: "France, Burgundy, Lorraine",
      bonuses: ["+Diplomacy bonuses", "Karling dynasty heritage events", "+Church relations", "Crusade leadership bonuses"],
      penalties: ["Moderate — small cultural tension with non-Frank vassals"],
      convertWhen: "Natural for any ruler of France or the Karling heartland.",
      difficulty: "Easy"
    },
    {
      name: "Arab / Levantine",
      region: "Middle East, North Africa, Iberia (Al-Andalus)",
      bonuses: ["+Cavalry variety", "+Trade income (Silk Road)", "+Madrasa learning bonus", "Unique Islamic event chains"],
      penalties: ["Crusade CB pressure", "Sunni-Shia schism complications"],
      convertWhen: "Playing in the Islamic world. Arabic culture maximizes Abbasid and Fatimid strength.",
      difficulty: "Medium"
    },
    {
      name: "Iberian / Castilian",
      region: "Spain, Portugal",
      bonuses: ["+Reconquista CB access", "+Crusade support", "El Cid event chain", "Unique Spanish chivalry bonuses"],
      penalties: ["Surrounded by competitors in peninsula", "Al-Andalus constant pressure"],
      convertWhen: "Playing any Iberian ruler. The Reconquista mechanics are uniquely powerful.",
      difficulty: "Easy"
    },
    {
      name: "German / Saxon",
      region: "Holy Roman Empire heartland",
      bonuses: ["+HRE authority mechanics", "+Innovation spread", "+Knightly culture bonuses", "Crusade heavy cavalry"],
      penalties: ["HRE elective mechanics complicate succession", "Pope always watching"],
      convertWhen: "HRE German playthroughs. German culture gives the most HRE-specific bonuses.",
      difficulty: "Hard"
    }
  ]
};

window.VANILLA_DATA = VANILLA_DATA;
window.VANILLA_EXTRA = VANILLA_EXTRA;
