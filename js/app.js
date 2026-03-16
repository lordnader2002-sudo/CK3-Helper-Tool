// CK3 AGOT Helper Tool — Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initHouses();
  initSuccession();
  initBuildings();
  initTraits();
  initMAACounters();
  initSchemeGuide();
  bindCalculators();
});

// =============================================
// TAB SWITCHING
// =============================================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${target}`)?.classList.add('active');
    });
  });
}

// =============================================
// HOUSES TAB
// =============================================
function initHouses() {
  const grid = document.getElementById('house-grid');
  const detail = document.getElementById('house-detail');
  const backBtn = document.getElementById('house-back');

  if (!grid) return;

  grid.innerHTML = AGOT_DATA.houses.map(h => {
    const diffClass = h.difficulty.toLowerCase().replace(' ', '-');
    const econBars = makeStatBars(h.economy);
    const milBars = makeStatBars(h.military);
    const dipBars = makeStatBars(h.diplomacy);

    return `
      <div class="house-card" data-house="${h.id}" style="--house-color: ${h.color}">
        <div class="house-card-header">
          <div class="house-name">${h.name}</div>
          <div class="difficulty-badge ${diffClass}">${h.difficulty}</div>
        </div>
        <div class="house-words">"${h.words}"</div>
        <div class="house-region">&#127963; ${h.seat} &mdash; ${h.region}</div>
        <div class="house-stats">
          <div class="stat-pill">
            <span>Econ</span>
            <div class="stat-bar-row">${econBars}</div>
          </div>
          <div class="stat-pill">
            <span>Mil</span>
            <div class="stat-bar-row">${milBars}</div>
          </div>
          <div class="stat-pill">
            <span>Dip</span>
            <div class="stat-bar-row">${dipBars}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.house-card').forEach(card => {
    card.addEventListener('click', () => {
      const house = AGOT_DATA.houses.find(h => h.id === card.dataset.house);
      if (!house) return;
      renderHouseDetail(house);
      grid.style.display = 'none';
      detail.style.display = 'block';
    });
  });

  backBtn?.addEventListener('click', () => {
    grid.style.display = 'grid';
    detail.style.display = 'none';
  });
}

function makeStatBars(val) {
  const MAX = 5;
  let bars = '';
  for (let i = 1; i <= MAX; i++) {
    const filled = i <= val;
    bars += `<div class="stat-bar"><div class="stat-bar-fill" style="width:${filled ? 100 : 0}%"></div></div>`;
  }
  return bars;
}
window.makeStatBars = makeStatBars;

function renderHouseDetail(h) {
  const content = document.getElementById('house-detail-content');
  if (!content) return;

  content.innerHTML = `
    <div class="card" style="border-left: 4px solid ${h.color}; margin-bottom: 20px;">
      <div class="house-detail-title" style="color:${h.color}">${h.name}</div>
      <div class="house-detail-sub">"${h.words}" &mdash; ${h.seat}, ${h.region} &mdash; Starting Ruler: ${h.startingRuler}</div>
      <div class="house-stats" style="margin-top:10px;">
        <div class="stat-pill"><span>Economy</span><div class="stat-bar-row">${makeStatBars(h.economy)}</div></div>
        <div class="stat-pill"><span>Military</span><div class="stat-bar-row">${makeStatBars(h.military)}</div></div>
        <div class="stat-pill"><span>Diplomacy</span><div class="stat-bar-row">${makeStatBars(h.diplomacy)}</div></div>
      </div>
    </div>

    <div class="house-detail-grid">
      <div class="card">
        <h3 class="text-green">&#9989; Strengths</h3>
        <ul class="strength-list">
          ${h.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      <div class="card">
        <h3 class="text-red">&#10060; Weaknesses</h3>
        <ul class="weakness-list">
          ${h.weaknesses.map(w => `<li>${w}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="card mt-20">
      <h3>&#128161; Strategic Tips for ${h.name}</h3>
      <ul class="tip-list-detail">
        ${h.tips.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>

    <div class="card mt-20">
      <h3>&#128101; Key Vassal Houses</h3>
      <div class="vassal-tags">
        ${h.keyVassals.map(v => `<span class="vassal-tag">House ${v}</span>`).join('')}
      </div>
    </div>
  `;
}

// =============================================
// SUCCESSION TAB
// =============================================
function initSuccession() {
  const grid = document.getElementById('succession-cards');
  const tableBody = document.getElementById('succession-table-body');
  if (!grid || !tableBody) return;

  const integrityMap = {
    'Partition': '&#9632;&#9633;&#9633;&#9633;&#9633;',
    'High Partition': '&#9632;&#9632;&#9633;&#9633;&#9633;',
    'Primogeniture': '&#9632;&#9632;&#9632;&#9632;&#9632;',
    'Seniority': '&#9632;&#9632;&#9633;&#9633;&#9633;',
    'Ultimogeniture': '&#9632;&#9632;&#9632;&#9633;&#9633;',
    'Elective': '&#9632;&#9632;&#9632;&#9633;&#9633;'
  };
  const predictMap = {
    'Partition': 'High',
    'High Partition': 'High',
    'Primogeniture': 'Very High',
    'Seniority': 'Medium',
    'Ultimogeniture': 'High',
    'Elective': 'Low'
  };
  const riskMap = {
    'Partition': 'High',
    'High Partition': 'Medium',
    'Primogeniture': 'Low',
    'Seniority': 'High',
    'Ultimogeniture': 'Medium',
    'Elective': 'Very High'
  };
  const riskClass = { High: 'text-red', Medium: 'text-gold', Low: 'text-green', 'Very High': 'text-red' };

  grid.innerHTML = AGOT_DATA.successionLaws.map(law => `
    <div class="succession-card ${law.recommended ? 'recommended' : ''}">
      <h4>${law.name} ${law.recommended ? '<span class="recommended-badge">&#9733; Recommended</span>' : ''}</h4>
      <p style="color:var(--text-muted); font-size:0.82rem; margin-bottom:10px;">${law.description}</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:10px;">
        <div>
          <div style="color:var(--green-light); font-size:0.75rem; margin-bottom:4px;">PROS</div>
          ${law.pros.map(p => `<div style="font-size:0.8rem; color:var(--text-secondary); padding:2px 0;">+ ${p}</div>`).join('')}
        </div>
        <div>
          <div style="color:var(--red-light); font-size:0.75rem; margin-bottom:4px;">CONS</div>
          ${law.cons.map(c => `<div style="font-size:0.8rem; color:var(--text-secondary); padding:2px 0;">- ${c}</div>`).join('')}
        </div>
      </div>
      <div style="background:var(--bg-dark); border-radius:4px; padding:8px; font-size:0.8rem; color:var(--gold); border-left:2px solid var(--gold);">
        &#128161; ${law.tip}
      </div>
    </div>
  `).join('');

  tableBody.innerHTML = AGOT_DATA.successionLaws.map(law => `
    <tr>
      <td style="color:var(--text-primary); font-weight:600;">${law.name}</td>
      <td>${integrityMap[law.name] || '—'}</td>
      <td>${predictMap[law.name] || '—'}</td>
      <td class="${riskClass[riskMap[law.name]] || ''}">${riskMap[law.name] || '—'}</td>
      <td>${law.recommended ? '<span class="text-green">&#9733; Yes</span>' : '<span class="text-muted">No</span>'}</td>
    </tr>
  `).join('');
}

// =============================================
// BUILDINGS TAB
// =============================================
function initBuildings() {
  renderBuildings('all', 'all');

  document.getElementById('filter-buildings')?.addEventListener('click', () => {
    const typeFilter = document.getElementById('building-filter-type')?.value || 'all';
    const priorityFilter = document.getElementById('building-filter-priority')?.value || 'all';
    renderBuildings(typeFilter, priorityFilter);
  });

  const regionGrid = document.getElementById('region-grid');
  if (regionGrid) {
    regionGrid.innerHTML = AGOT_DATA.regions.map(r => `
      <div class="region-card">
        <h5>${r.name}</h5>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:6px;">&#9968; ${r.terrain}</div>
        <div style="display:flex; gap:10px; margin-bottom:6px;">
          <span style="font-size:0.75rem;">Econ: <strong class="${r.economy >= 4 ? 'text-green' : r.economy >= 3 ? 'text-gold' : 'text-red'}">${'★'.repeat(r.economy)}${'☆'.repeat(5 - r.economy)}</strong></span>
          <span style="font-size:0.75rem;">Mil: <strong class="${r.military >= 4 ? 'text-green' : r.military >= 3 ? 'text-gold' : 'text-red'}">${'★'.repeat(r.military)}${'☆'.repeat(5 - r.military)}</strong></span>
        </div>
        <div style="font-size:0.78rem; color:var(--text-secondary);">${r.notes}</div>
      </div>
    `).join('');
  }
}

function renderBuildings(typeFilter, priorityFilter) {
  const grid = document.getElementById('building-grid');
  if (!grid) return;

  const filtered = AGOT_DATA.buildings.filter(b => {
    const typeMatch = typeFilter === 'all' || b.type.includes(typeFilter);
    const priorityMatch = priorityFilter === 'all' || b.priority >= parseInt(priorityFilter);
    return typeMatch && priorityMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="hint-text">No buildings match the current filters.</p>';
    return;
  }

  grid.innerHTML = filtered.map(b => `
    <div class="building-card">
      <div class="building-type-badge">${b.type} &mdash; ${b.slot}</div>
      <h4>${b.name}</h4>
      <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:6px;">${b.effect}</p>
      <p style="font-size:0.78rem; color:var(--gold); margin-bottom:8px;">&#9876; ${b.agot_note}</p>
      <div class="priority-stars">${'★'.repeat(b.priority)}${'☆'.repeat(5 - b.priority)} Priority</div>
    </div>
  `).join('');
}

// =============================================
// TRAITS TAB
// =============================================
function initTraits() {
  const traitTabBtns = document.querySelectorAll('.trait-tab-btn');
  traitTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      traitTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTraits(btn.dataset.traitTab);
    });
  });
  renderTraits('personality');
}

function renderTraits(type) {
  const content = document.getElementById('trait-content');
  if (!content) return;

  if (type === 'personality') {
    content.innerHTML = `
      <div class="traits-grid">
        ${AGOT_DATA.traits.personality.map(t => `
          <div class="trait-card ${t.type}">
            <div class="trait-name">${t.name}</div>
            <div class="trait-effect">${t.effect}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (type === 'lifestyle') {
    content.innerHTML = `
      <div class="traits-grid">
        ${AGOT_DATA.traits.lifestyle.map(t => `
          <div class="trait-card positive">
            <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">${t.category} Tree — Tier ${t.tier}</div>
            <div class="trait-name">${t.name}</div>
            <div class="trait-effect">${t.effect}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (type === 'agot') {
    content.innerHTML = `
      <div class="traits-grid">
        ${AGOT_DATA.traits.agot_specific.map(t => `
          <div class="trait-card legendary">
            <div class="trait-name">${t.name}</div>
            <div class="trait-effect">${t.effect}</div>
            <span class="trait-rarity rarity-${t.rarity.toLowerCase().replace(' ', '-')}">${t.rarity}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// =============================================
// MEN-AT-ARMS COUNTER GUIDE
// =============================================
function initMAACounters() {
  const container = document.getElementById('maa-counters');
  if (!container) return;

  container.innerHTML = `
    <table class="maa-table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Counters</th>
          <th>Countered By</th>
          <th>Best Terrain</th>
        </tr>
      </thead>
      <tbody>
        ${AGOT_DATA.menAtArms.map(m => `
          <tr>
            <td style="color:var(--text-primary); font-weight:600;">${m.name}</td>
            <td style="color:var(--green-light)">${m.counters.join(', ')}</td>
            <td style="color:var(--red-light)">${m.counteredBy.join(', ')}</td>
            <td>${m.terrain}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// =============================================
// SCHEME GUIDE
// =============================================
function initSchemeGuide() {
  const container = document.getElementById('scheme-guide');
  if (!container) return;

  container.innerHTML = AGOT_DATA.schemes.map(s => {
    const diffClass = s.difficulty.toLowerCase().replace(' ', '-');
    return `
      <div class="scheme-card">
        <h4>&#128065; ${s.name}</h4>
        <span class="scheme-difficulty difficulty-${diffClass}">${s.difficulty}</span>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">Base success: ${s.base_success}%</p>
        <p style="font-size:0.78rem; color:var(--gold); margin-bottom:8px;"><strong>Best for:</strong> ${s.bestFor}</p>
        <div style="font-size:0.8rem; color:var(--text-secondary);">
          <strong style="color:var(--text-primary);">Tips:</strong>
          <ul style="padding-left:16px; margin-top:4px;">
            ${s.tips.map(t => `<li style="padding:2px 0;">${t}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================
// BIND CALCULATOR EVENTS
// =============================================
function bindCalculators() {

  // --- CHARACTER CALCULATOR ---
  document.getElementById('calc-character')?.addEventListener('click', () => {
    const stats = {
      diplomacy: parseInt(document.getElementById('stat-diplomacy')?.value) || 10,
      martial: parseInt(document.getElementById('stat-martial')?.value) || 10,
      stewardship: parseInt(document.getElementById('stat-stewardship')?.value) || 10,
      intrigue: parseInt(document.getElementById('stat-intrigue')?.value) || 10,
      learning: parseInt(document.getElementById('stat-learning')?.value) || 10,
      prowess: parseInt(document.getElementById('stat-prowess')?.value) || 10,
      prestige: parseInt(document.getElementById('stat-prestige')?.value) || 4,
      age: parseInt(document.getElementById('stat-age')?.value) || 30
    };
    const playstyles = {
      conqueror: document.getElementById('play-conqueror')?.checked,
      diplomat: document.getElementById('play-diplomat')?.checked,
      schemer: document.getElementById('play-schemer')?.checked,
      economy: document.getElementById('play-economy')?.checked,
      faith: document.getElementById('play-faith')?.checked
    };
    const results = Calculators.analyzeCharacter(stats, playstyles);
    Calculators.renderResults(results, 'character-output');
  });

  // --- WAR CALCULATOR ---
  document.getElementById('calc-war')?.addEventListener('click', () => {
    const params = {
      levies: parseInt(document.getElementById('war-levies')?.value) || 0,
      maa: parseInt(document.getElementById('war-maa')?.value) || 0,
      enemyLevies: parseInt(document.getElementById('war-enemy-levies')?.value) || 0,
      enemyMaa: parseInt(document.getElementById('war-enemy-maa')?.value) || 0,
      terrain: document.getElementById('war-terrain')?.value || 'plains',
      commander: document.getElementById('war-commander')?.value || 'average',
      hasDragon: document.getElementById('war-dragon')?.checked || false,
      isCrusade: document.getElementById('war-crusade')?.checked || false,
      isWinter: document.getElementById('war-winter')?.checked || false,
      hasMercenary: document.getElementById('war-mercenary')?.checked || false
    };
    const results = Calculators.assessBattle(params);
    Calculators.renderResults(results, 'war-output');
  });

  // --- SCHEME CALCULATOR ---
  document.getElementById('calc-scheme')?.addEventListener('click', () => {
    const params = {
      myIntrigue: parseInt(document.getElementById('scheme-intrigue')?.value) || 10,
      targetIntrigue: parseInt(document.getElementById('scheme-target-intrigue')?.value) || 10,
      agents: parseInt(document.getElementById('scheme-agents')?.value) || 0,
      spymasterIntrigue: parseInt(document.getElementById('scheme-spymaster')?.value) || 10,
      schemeType: document.getElementById('scheme-type')?.value || 'murder',
      hasHook: document.getElementById('scheme-hook')?.checked || false,
      agentAccess: document.getElementById('scheme-agent-access')?.checked || false,
      targetIll: document.getElementById('scheme-ill')?.checked || false
    };
    const results = Calculators.calculateScheme(params);
    Calculators.renderResults(results, 'scheme-output');
  });
}
