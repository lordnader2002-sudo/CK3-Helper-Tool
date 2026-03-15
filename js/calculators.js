// CK3 AGOT Helper Tool — Calculators

const Calculators = {

  // =============================================
  // CHARACTER ANALYZER
  // =============================================
  analyzeCharacter(stats, playstyles) {
    const { diplomacy, martial, stewardship, intrigue, learning, prowess, prestige, age } = stats;
    const results = [];

    // Find weakest and strongest stats
    const statMap = { diplomacy, martial, stewardship, intrigue, learning };
    const sorted = Object.entries(statMap).sort((a, b) => b[1] - a[1]);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    // Overall rating
    const total = diplomacy + martial + stewardship + intrigue + learning;
    const avg = total / 5;
    let overallRating;
    if (avg >= 18) overallRating = { label: 'Exceptional Ruler', class: 'success' };
    else if (avg >= 14) overallRating = { label: 'Strong Ruler', class: 'success' };
    else if (avg >= 10) overallRating = { label: 'Average Ruler', class: 'warning' };
    else overallRating = { label: 'Weak Ruler — Needs Improvement', class: 'danger' };

    results.push({
      type: overallRating.class,
      title: `Overall Rating: ${overallRating.label}`,
      items: [
        `Total stat points: ${total} | Average per stat: ${avg.toFixed(1)}`,
        `Best stat: ${strongest[0].charAt(0).toUpperCase() + strongest[0].slice(1)} (${strongest[1]})`,
        `Weakest stat: ${weakest[0].charAt(0).toUpperCase() + weakest[0].slice(1)} (${weakest[1]}) — prioritize this`
      ]
    });

    // Lifestyle recommendations
    const lifestyleRec = [];
    if (playstyles.conqueror || martial < 12) lifestyleRec.push('Martial → Strategist perk for battle bonuses');
    if (playstyles.diplomat || diplomacy < 12) lifestyleRec.push('Diplomacy → Diplomat perk for alliance building');
    if (playstyles.economy || stewardship < 12) lifestyleRec.push('Stewardship → Administrator perk for tax income');
    if (playstyles.schemer || intrigue < 12) lifestyleRec.push('Intrigue → Schemer perk for murder/espionage');
    if (playstyles.faith || learning < 12) lifestyleRec.push('Learning → Theologian perk for religious power');

    if (lifestyleRec.length > 0) {
      results.push({
        type: 'warning',
        title: 'Recommended Lifestyle Focus',
        items: lifestyleRec
      });
    }

    // Council recommendations
    const councilRec = [];
    if (diplomacy < 15) councilRec.push('Your Diplomacy is low — appoint a chancellor with 15+ Diplomacy');
    if (martial < 15) councilRec.push('Your Martial is low — appoint a marshal with 15+ Martial');
    if (stewardship < 15) councilRec.push('Your Stewardship is low — appoint a steward with 15+ Stewardship');
    if (intrigue < 15) councilRec.push('Your Intrigue is low — appoint a spymaster with 15+ Intrigue');
    if (learning < 15) councilRec.push('Your Learning is low — appoint a court chaplain/maester with 15+ Learning');

    if (councilRec.length > 0) {
      results.push({
        type: 'warning',
        title: 'Council Appointments Needed',
        items: councilRec
      });
    }

    // Age-based advice
    const ageItems = [];
    if (age < 25) {
      ageItems.push('Young ruler — focus on education events to maximize stat growth');
      ageItems.push('Have your first child soon to secure succession');
    } else if (age >= 50) {
      ageItems.push('Aging ruler — ensure your heir is well-educated and ready');
      ageItems.push('Consider grooming a regent for potential regency period');
      ageItems.push('Prioritize low-stress decisions to extend lifespan');
    }
    if (ageItems.length > 0) {
      results.push({ type: 'warning', title: 'Age Considerations', items: ageItems });
    }

    // Prowess advice
    const combatItems = [];
    if (prowess < 8) {
      combatItems.push('Low Prowess — avoid personal combat events and duels');
      combatItems.push('Never personally lead armies (risk of capture/death)');
      combatItems.push('Invest in bodyguards with high prowess');
    } else if (prowess >= 16) {
      combatItems.push('High Prowess — you can safely duel rivals and champions');
      combatItems.push('Consider the Blademaster lifestyle perk for dominance in combat');
    }
    if (combatItems.length > 0) {
      results.push({ type: prowess < 8 ? 'danger' : 'success', title: 'Combat Assessment', items: combatItems });
    }

    // Playstyle-specific tips
    if (playstyles.conqueror) {
      results.push({
        type: 'success',
        title: 'Conqueror Build Tips',
        items: [
          'Prioritize Martial and Prowess above all other stats',
          'Use "Raise Armies" decision immediately when war declared',
          'Build Barracks and Stables in all castle holdings',
          'Keep a standing force of Men-at-Arms for rapid deployment',
          'Build Knights Trails in your capital for better knight quality'
        ]
      });
    }
    if (playstyles.diplomat) {
      results.push({
        type: 'success',
        title: 'Diplomat Build Tips',
        items: [
          'Diplomacy above 20 enables unique dialogue options',
          'Arrange marriages before declaring wars — alliances prevent conflicts',
          'Use "Invite to Court" to poach skilled characters from rivals',
          'Focus on high-opinion events to stack vassal loyalty',
          'Send chancellor to improve relations before any diplomatic action'
        ]
      });
    }
    if (playstyles.economy) {
      results.push({
        type: 'success',
        title: 'Economy Build Tips',
        items: [
          'Stewardship above 25 gives massive holding tax bonuses',
          'Prioritize Market Districts in all city holdings',
          'Build Granaries to increase supply limit for larger armies',
          'Never build temples — cities and castles generate more income',
          'The Administrator lifestyle perk is essential for this playstyle'
        ]
      });
    }

    return results;
  },

  // =============================================
  // WAR / BATTLE CALCULATOR
  // =============================================
  assessBattle(params) {
    const { levies, maa, enemyLevies, enemyMaa, terrain, commander, hasDragon, isCrusade, isWinter, hasMercenary } = params;

    // Effective army strength (MaA worth ~7x levies in effectiveness)
    let myStrength = levies + (maa * 7);
    let enemyStrength = enemyLevies + (enemyMaa * 7);

    // Commander modifier
    const commanderMods = { poor: 0.75, average: 1.0, good: 1.25, exceptional: 1.5 };
    myStrength *= commanderMods[commander] || 1.0;

    // Terrain modifier
    const terrainMods = {
      plains: { attacker: 1.0, label: 'Plains — neutral terrain, no penalties' },
      hills: { attacker: 0.85, label: 'Hills — attacker at -15%, spearmen advantaged' },
      forest: { attacker: 0.8, label: 'Forest — attacker at -20%, cavalry penalized' },
      desert: { attacker: 0.75, label: 'Desert — attacker at -25%, supply issues' },
      mountains: { attacker: 0.7, label: 'Mountains — attacker at -30%, siege will be key' },
      river: { attacker: 0.6, label: 'River Crossing — attacker at -40%, extremely dangerous' }
    };
    const terrainInfo = terrainMods[terrain] || terrainMods.plains;
    myStrength *= terrainInfo.attacker;

    // Special modifiers
    if (hasDragon) myStrength *= 2.5;
    if (isCrusade) myStrength *= 1.3;
    if (isWinter) { myStrength *= 0.85; enemyStrength *= 0.85; }
    if (hasMercenary) myStrength *= 1.2;

    const ratio = myStrength / enemyStrength;
    const results = [];

    // Battle outcome
    let outcome;
    if (ratio >= 2.0) outcome = { label: 'Overwhelming Victory Expected', class: 'success', winChance: 95 };
    else if (ratio >= 1.4) outcome = { label: 'Strong Victory Expected', class: 'success', winChance: 80 };
    else if (ratio >= 1.1) outcome = { label: 'Likely Victory', class: 'success', winChance: 65 };
    else if (ratio >= 0.9) outcome = { label: 'Coin Flip — Too Close to Call', class: 'warning', winChance: 50 };
    else if (ratio >= 0.7) outcome = { label: 'Likely Defeat — Reconsider', class: 'danger', winChance: 30 };
    else outcome = { label: 'Do NOT Engage — You Will Lose', class: 'danger', winChance: 10 };

    results.push({
      type: outcome.class,
      title: `Battle Assessment: ${outcome.label}`,
      winChance: outcome.winChance,
      items: [
        `Your effective strength: ${Math.round(myStrength).toLocaleString()}`,
        `Enemy effective strength: ${Math.round(enemyStrength).toLocaleString()}`,
        `Strength ratio: ${ratio.toFixed(2)}:1`,
        `Terrain: ${terrainInfo.label}`
      ]
    });

    // Specific recommendations
    const recs = [];
    if (maa / (levies + maa || 1) < 0.05) {
      recs.push('Your Men-at-Arms ratio is very low — recruit more for decisive battles');
    }
    if (commander === 'poor' || commander === 'average') {
      recs.push('Appoint a high-Martial commander for significant battle advantage');
    }
    if (terrain === 'river' || terrain === 'mountains') {
      recs.push('Consider finding another route — this terrain heavily disadvantages you');
    }
    if (isWinter) {
      recs.push('Winter attrition will bleed both armies — short engagements only');
    }
    if (ratio < 1.1 && !hasDragon) {
      recs.push('Consider hiring mercenaries to tip the balance before engaging');
      recs.push('Soften enemy with raids before committing to full battle');
    }
    if (hasDragon) {
      recs.push('Dragon dominance — ensure your dragonrider is skilled and healthy');
      recs.push('Dragon can solo sieges — use this to rapidly capture holdings');
    }

    if (recs.length > 0) {
      results.push({ type: 'warning', title: 'Strategic Recommendations', items: recs });
    }

    return results;
  },

  // =============================================
  // SCHEME CALCULATOR
  // =============================================
  calculateScheme(params) {
    const { myIntrigue, targetIntrigue, agents, spymasterIntrigue, schemeType, hasHook, agentAccess, targetIll } = params;

    const basePower = {
      murder: 20,
      kidnap: 35,
      claim: 10,
      seduce: 40
    };

    let power = basePower[schemeType] || 25;

    // Intrigue difference
    const intrigueDiff = myIntrigue - targetIntrigue;
    power += intrigueDiff * 1.5;

    // Spymaster bonus
    power += (spymasterIntrigue - 10) * 0.8;

    // Agents
    power += agents * 8;

    // Modifiers
    if (hasHook) power += 15;
    if (agentAccess) power += 20;
    if (targetIll) power += 10;

    power = Math.max(5, Math.min(95, Math.round(power)));

    const results = [];

    let outcomeLabel, outcomeClass;
    if (power >= 70) { outcomeLabel = 'Excellent — Proceed'; outcomeClass = 'success'; }
    else if (power >= 50) { outcomeLabel = 'Good Chance — Worth Attempting'; outcomeClass = 'success'; }
    else if (power >= 35) { outcomeLabel = 'Moderate — Wait for More Agents'; outcomeClass = 'warning'; }
    else if (power >= 20) { outcomeLabel = 'Low — Needs Preparation'; outcomeClass = 'warning'; }
    else { outcomeLabel = 'Very Low — Do Not Proceed'; outcomeClass = 'danger'; }

    results.push({
      type: outcomeClass,
      title: `Scheme Power: ${power}% — ${outcomeLabel}`,
      winChance: power,
      items: [
        `Base scheme power: ${basePower[schemeType]}%`,
        `Intrigue advantage: ${intrigueDiff >= 0 ? '+' : ''}${Math.round(intrigueDiff * 1.5)}%`,
        `Spymaster contribution: +${Math.round((spymasterIntrigue - 10) * 0.8)}%`,
        `Agents contributing: +${agents * 8}%`
      ]
    });

    const tips = [];
    if (power < 50) {
      tips.push('Recruit more agents — target courtiers, servants, and friends of the target');
      tips.push('Give your Spymaster the "Scheme" task for passive power accumulation');
      tips.push('Wait at least 6 game-months for scheme power to build naturally');
    }
    if (!hasHook) {
      tips.push('Fabricate a hook on the target first for +15% scheme power');
    }
    if (!agentAccess) {
      tips.push('Find an agent with direct access to the target for +20% power');
    }
    if (agents < 3) {
      tips.push('Each additional agent adds ~8% power — aim for 3-5 agents minimum');
    }
    if (schemeType === 'murder' && power < 60) {
      tips.push('Murder is high-risk — if discovered, expect war. Only proceed at 60%+');
    }

    if (tips.length > 0) {
      results.push({ type: 'warning', title: 'Scheme Improvement Tips', items: tips });
    }

    return results;
  },

  // =============================================
  // RENDER HELPERS
  // =============================================
  renderResults(results, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = results.map(r => {
      const hasBar = r.winChance !== undefined;
      const barColor = r.winChance >= 65 ? 'high' : r.winChance >= 40 ? 'medium' : 'low';
      return `
        <div class="result-block ${r.type}">
          <h4>${r.title}</h4>
          ${hasBar ? `
            <div class="progress-bar-container">
              <div class="progress-bar ${barColor}" style="width:${r.winChance}%">${r.winChance}%</div>
            </div>
          ` : ''}
          <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `;
    }).join('');
  }
};

window.Calculators = Calculators;
