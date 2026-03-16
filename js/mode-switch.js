// CK3 Helper Tool — Mode Switch (AGOT ↔ Vanilla)
// Swaps data sources and re-renders all dynamic content

window.currentMode = 'agot';

// ─── Public API ───────────────────────────────────────────────────────────────
window.switchMode = function(mode) {
  if (mode === window.currentMode) return;
  window.currentMode = mode;

  // ── Body class for CSS theme ──
  document.body.classList.toggle('vanilla-mode', mode === 'vanilla');

  // ── Toggle button states ──
  document.getElementById('mode-btn-agot')?.classList.toggle('active', mode === 'agot');
  document.getElementById('mode-btn-vanilla')?.classList.toggle('active', mode === 'vanilla');

  // ── Header text ──
  if (mode === 'vanilla') {
    document.getElementById('header-icon').textContent = '🏰';
    document.getElementById('header-title').textContent = 'CK3 Helper Tool';
    document.getElementById('header-sub').textContent = 'Crusader Kings 3 — Vanilla Advisor';
    document.getElementById('footer-text').textContent = 'CK3 Helper Tool — Crusader Kings 3 Vanilla — For the Iron Throne of Your Kingdom';
    document.getElementById('nav-mode-label').textContent = 'Vanilla';
    document.getElementById('nav-tab-longnight').innerHTML = '⚔️ Crusade Prep';
    document.getElementById('nav-tab-valyrian').innerHTML = '💎 Artifacts';
    document.getElementById('nav-tab-dragons').innerHTML = '🏛️ Holy Orders';
  } else {
    document.getElementById('header-icon').textContent = '🐉';
    document.getElementById('header-title').textContent = 'CK3 AGOT Helper Tool';
    document.getElementById('header-sub').textContent = 'Crusader Kings 3 — A Game of Thrones Mod Advisor';
    document.getElementById('footer-text').textContent = 'CK3 AGOT Helper Tool — Crusader Kings 3 | A Game of Thrones Mod — For the Iron Throne';
    document.getElementById('nav-mode-label').textContent = 'AGOT';
    document.getElementById('nav-tab-longnight').innerHTML = '❄️ Long Night';
    document.getElementById('nav-tab-valyrian').innerHTML = '🗡️ Valyrian Steel';
    document.getElementById('nav-tab-dragons').innerHTML = '🐉 Dragons';
  }

  // ── Re-render all data-driven tabs ──
  rerenderAll();
};

// ─── Active data accessors ────────────────────────────────────────────────────
window.activeData = function() {
  return window.currentMode === 'vanilla' ? window.VANILLA_DATA : window.AGOT_DATA;
};

window.activeExtra = function() {
  return window.currentMode === 'vanilla' ? window.VANILLA_EXTRA : window.AGOT_EXTRA;
};

// ─── Re-render everything ─────────────────────────────────────────────────────
function rerenderAll() {
  rerenderHouses();
  rerenderTraits();
  rerenderBuildings();
  rerenderTips();
  rerenderSuccession();
  rerenderModeSpecificTabs();
  rerenderMarriage();
  rerenderEvents();
  rerenderCulture();
  rerenderCompare();
}

// ─── Houses ───────────────────────────────────────────────────────────────────
function rerenderHouses() {
  const grid = document.getElementById('house-grid');
  if (!grid) return;
  const data = window.activeData();
  const label = window.currentMode === 'vanilla' ? 'Dynasties' : 'Houses';

  // Update tab button label
  const houseTabBtn = document.querySelector('[data-tab="houses"]');
  if (houseTabBtn) houseTabBtn.innerHTML = `🏰 ${label}`;

  // Update panel header
  const panelHeader = document.querySelector('#tab-houses .panel-header');
  if (panelHeader) {
    panelHeader.querySelector('h2').textContent = window.currentMode === 'vanilla'
      ? 'Major Dynasties of the Medieval World'
      : 'Great Houses of Westeros';
    panelHeader.querySelector('p').textContent = window.currentMode === 'vanilla'
      ? 'Select a dynasty to see their strengths, starting position, and key tips.'
      : 'Select a house to see their strengths, starting position, and key tips.';
  }

  // Re-render the grid (same structure, different data)
  grid.innerHTML = data.houses.map(h => {
    const diffClass = h.difficulty.toLowerCase().replace(' ', '-');
    return `
      <div class="house-card" data-house="${h.id}" style="--house-color: ${h.color}">
        <div class="house-card-header">
          <div class="house-name">${h.name}</div>
          <div class="difficulty-badge ${diffClass}">${h.difficulty}</div>
        </div>
        ${h.words ? `<div class="house-words">"${h.words}"</div>` : ''}
        <div class="house-region">🏰 ${h.seat} — ${h.region}</div>
        <div class="house-stats">
          <div class="stat-pill"><span>Econ</span><div class="stat-bar-row">${makeStatBars(h.economy)}</div></div>
          <div class="stat-pill"><span>Mil</span><div class="stat-bar-row">${makeStatBars(h.military)}</div></div>
          <div class="stat-pill"><span>Dip</span><div class="stat-bar-row">${makeStatBars(h.diplomacy)}</div></div>
        </div>
      </div>
    `;
  }).join('');

  // Re-bind click for house detail
  grid.querySelectorAll('.house-card').forEach(card => {
    card.addEventListener('click', () => showHouseDetail(card.dataset.house));
  });
}

function showHouseDetail(id) {
  const data = window.activeData();
  const h = data.houses.find(x => x.id === id);
  if (!h) return;

  const grid = document.getElementById('house-grid');
  const detail = document.getElementById('house-detail');
  if (!grid || !detail) return;

  grid.style.display = 'none';
  detail.style.display = 'block';

  detail.innerHTML = `
    <button id="house-back-dyn" class="btn-secondary" style="margin-bottom:16px;">← Back to ${window.currentMode === 'vanilla' ? 'Dynasties' : 'Houses'}</button>
    <div style="border-left: 4px solid ${h.color}; padding-left: 16px; margin-bottom: 20px;">
      <h2 style="color:var(--gold-light);">${h.name}</h2>
      ${h.words ? `<p style="color:var(--text-muted);font-style:italic;">"${h.words}"</p>` : ''}
      <p>🏰 ${h.seat} — ${h.region}</p>
    </div>
    <div class="two-col">
      <div class="card">
        <h3>Starting Ruler</h3>
        <p style="font-size:1.1rem;color:var(--gold);">${h.startingRuler}</p>
        <div class="stat-grid" style="margin-top:12px;">
          <label>Economy</label><span>${makeStatBars(h.economy)} ${h.economy}/5</span>
          <label>Military</label><span>${makeStatBars(h.military)} ${h.military}/5</span>
          <label>Diplomacy</label><span>${makeStatBars(h.diplomacy)} ${h.diplomacy}/5</span>
        </div>
      </div>
      <div class="card">
        <h3>Strengths</h3>
        <ul style="padding-left:18px;">${h.strengths.map(s => `<li style="padding:3px 0;color:var(--green-light);">${s}</li>`).join('')}</ul>
        <h3 style="margin-top:12px;">Weaknesses</h3>
        <ul style="padding-left:18px;">${h.weaknesses.map(w => `<li style="padding:3px 0;color:var(--red-light);">${w}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="card mt-20">
      <h3>Key Vassals</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">${h.keyVassals.map(v => `<span style="background:var(--bg-dark);border:1px solid var(--border);padding:4px 10px;border-radius:20px;font-size:0.8rem;">${v}</span>`).join('')}</div>
    </div>
    <div class="card mt-20">
      <h3>Strategic Tips</h3>
      <ul style="padding-left:18px;">${h.tips.map(t => `<li style="padding:5px 0;color:var(--text-secondary);border-bottom:1px solid var(--border);">${t}</li>`).join('')}</ul>
    </div>
  `;

  document.getElementById('house-back-dyn')?.addEventListener('click', () => {
    grid.style.display = '';
    detail.style.display = 'none';
  });
}

// ─── Traits ───────────────────────────────────────────────────────────────────
function rerenderTraits() {
  const container = document.getElementById('traits-list');
  if (!container) return;
  const traits = window.activeData().traits || [];
  container.innerHTML = traits.map(t => `
    <div class="trait-card ${t.isPositive ? 'positive' : 'negative'}">
      <div class="trait-name">${t.name}</div>
      <span class="trait-category">${t.category}</span>
      <span class="trait-rarity rarity-${t.rarity.toLowerCase()}">${t.rarity}</span>
      <p class="trait-effect">${t.effect}</p>
      <p class="trait-tip">💡 ${t.tip}</p>
    </div>
  `).join('');
}

// ─── Buildings ────────────────────────────────────────────────────────────────
function rerenderBuildings() {
  const container = document.getElementById('building-list');
  if (!container) return;
  const buildings = window.activeData().buildings || [];
  container.innerHTML = `<div class="building-grid">` + buildings.map(b => `
    <div class="building-card">
      <h4>${b.name}</h4>
      <span class="building-type">${b.type}</span>
      <div class="building-stats">
        <div class="b-stat"><span>Income</span><strong>${b.income}</strong></div>
        <div class="b-stat"><span>Military</span><strong>${b.militaryBonus}</strong></div>
        <div class="b-stat"><span>Max Level</span><strong>${b.maxLevel}</strong></div>
        <div class="b-stat"><span>Terrain</span><strong>${b.terrain}</strong></div>
        <div class="b-stat"><span>Cost</span><strong>${b.cost}</strong></div>
      </div>
      <p class="building-tip">💡 ${b.tip}</p>
    </div>
  `).join('') + `</div>`;
}

// ─── Tips ─────────────────────────────────────────────────────────────────────
function rerenderTips() {
  const tips = window.activeData().tips;
  if (!tips) return;

  const sections = {
    'tips-economy': tips.economy,
    'tips-military': tips.military,
    'tips-intrigue': tips.intrigue,
    'tips-special': tips.agotSpecific
  };

  Object.entries(sections).forEach(([id, items]) => {
    const el = document.getElementById(id);
    if (el && items) {
      el.innerHTML = `<ul>${items.map(t => `<li>${t}</li>`).join('')}</ul>`;
    }
  });

  // Update the special tips card header
  const specialHeader = document.querySelector('#tab-tips .tip-card:last-child h3');
  if (specialHeader) {
    specialHeader.textContent = window.currentMode === 'vanilla'
      ? '⚔️ Crusader Kings Essentials'
      : '🔥 AGOT Specific';
  }
}

// ─── Succession ───────────────────────────────────────────────────────────────
function rerenderSuccession() {
  const container = document.getElementById('succession-list');
  if (!container) return;
  const laws = window.activeData().successionLaws || [];
  container.innerHTML = laws.map(l => `
    <div class="succession-card ${l.recommended ? 'recommended' : ''}">
      <div class="succession-name">${l.name} ${l.recommended ? '<span class="rec-badge">Recommended</span>' : ''}</div>
      <p class="succession-desc">${l.description}</p>
      <div class="succession-pros-cons">
        <div><strong style="color:var(--green-light);">Pros:</strong><ul>${l.pros.map(p => `<li>${p}</li>`).join('')}</ul></div>
        <div><strong style="color:var(--red-light);">Cons:</strong><ul>${l.cons.map(c => `<li>${c}</li>`).join('')}</ul></div>
      </div>
      <p class="succession-unlock">🔓 Unlock: ${l.howToUnlock}</p>
      ${l.agotNote ? `<p class="succession-note">📝 ${l.agotNote}</p>` : ''}
    </div>
  `).join('');
}

// ─── Mode-specific tabs (Long Night/Crusade, Valyrian/Artifacts, Dragons/Holy Orders) ──
function rerenderModeSpecificTabs() {
  const extra = window.activeExtra();
  if (!extra) return;

  if (window.currentMode === 'vanilla') {
    renderCrusadeChecklist();
    renderArtifacts();
    renderHolyOrders();
    updateModeSpecificHeaders();
  } else {
    // Re-run AGOT-specific init functions
    initLongNight();
    initValyrianSteel();
    initDragons();
    updateModeSpecificHeaders();
  }

  rerenderMap();
}

function updateModeSpecificHeaders() {
  const isVanilla = window.currentMode === 'vanilla';

  // Long Night / Crusade Prep panel header
  const lnHeader = document.querySelector('#tab-longnight .panel-header');
  if (lnHeader) {
    lnHeader.querySelector('h2').textContent = isVanilla ? 'Crusade Preparedness' : 'Long Night Preparedness';
    lnHeader.querySelector('p').textContent = isVanilla
      ? 'Is your realm ready to lead a Crusade? Track your readiness across all critical factors.'
      : 'The Night King is coming. Are you ready? Track your readiness across all critical factors.';
    const scoreLabel = document.getElementById('longnight-score-label');
    if (scoreLabel) scoreLabel.textContent = 'Fill in your checklist below';
  }

  // Valyrian Steel / Artifacts header
  const vsHeader = document.querySelector('#tab-valyrian .panel-header');
  if (vsHeader) {
    vsHeader.querySelector('h2').textContent = isVanilla ? 'Legendary Artifacts' : 'Valyrian Steel Tracker';
    vsHeader.querySelector('p').textContent = isVanilla
      ? 'Legendary artifacts of the medieval world — where they are and how to acquire them.'
      : 'Every Valyrian Steel sword in Westeros — where it is, who has it, and how to get it.';
  }

  // Dragons / Holy Orders header
  const dragonHeader = document.querySelector('#tab-dragons .panel-header');
  if (dragonHeader) {
    dragonHeader.querySelector('h2').textContent = isVanilla ? 'Holy & Knightly Orders' : 'Dragon Bonding Guide';
    dragonHeader.querySelector('p').textContent = isVanilla
      ? 'The military religious orders of Christendom — and how to use them as strategic weapons.'
      : 'Step-by-step guide to hatching, bonding, and riding dragons as House Targaryen.';
  }
}

function renderCrusadeChecklist() {
  const extra = window.VANILLA_EXTRA;
  const container = document.getElementById('longnight-checklist');
  if (!container) return;

  container.innerHTML = extra.crusadeChecklist.map(item => `
    <div class="longnight-item">
      <h4>
        <span>${item.item}</span>
        <span class="longnight-category">${item.category}</span>
      </h4>
      <p>${item.description}</p>
      <select class="longnight-select" id="ln-${item.id}" data-scoring='${JSON.stringify(item.scoring)}' onchange="updateLongNightScore()">
        ${item.levels.map((l, i) => `<option value="${i}">${l}</option>`).join('')}
      </select>
      <div class="longnight-tip">💡 ${item.tips}</div>
    </div>
  `).join('');

  // Override updateLongNightScore to use vanilla data
  window._longNightData = extra.crusadeChecklist;
  updateLongNightScore();
}

function renderArtifacts() {
  const grid = document.getElementById('valyrian-grid');
  if (!grid) return;

  grid.innerHTML = window.VANILLA_EXTRA.legendaryArtifacts.map(a => {
    const statusCls = a.status === 'Active' ? 'active' : a.status === 'Lost' ? 'lost' : 'reforged';
    const badgeCls = statusCls === 'active' ? 'status-active' : statusCls === 'lost' ? 'status-lost' : 'status-reforged';
    return `
      <div class="valyrian-card ${statusCls}">
        <h4>💎 ${a.name}</h4>
        <span class="valyrian-status ${badgeCls}">${a.status}</span>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;"><strong>Type:</strong> ${a.type}</p>
        <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:8px;">${a.effect}</p>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:6px;"><strong>Location:</strong> ${a.location}</p>
        <p style="font-size:0.78rem;color:var(--text-secondary);padding:6px 8px;background:rgba(201,162,39,0.08);border-left:2px solid var(--gold-dim);">
          <strong>How to get:</strong> ${a.howToGet}
        </p>
        <div class="valyrian-priority-stars">${'★'.repeat(a.priority)}${'☆'.repeat(5 - a.priority)} Acquisition Priority</div>
      </div>
    `;
  }).join('');

  // Also update the status legend
  const legend = document.querySelector('#tab-valyrian .card:first-of-type .card > div');
}

function renderHolyOrders() {
  const reqEl = document.getElementById('dragon-requirements');
  const stagesEl = document.getElementById('dragon-stages');
  const knownEl = document.getElementById('dragon-known');
  if (!reqEl || !stagesEl || !knownEl) return;

  const orders = window.VANILLA_EXTRA.holyOrders;

  reqEl.innerHTML = `
    <div style="font-size:0.875rem;color:var(--text-secondary);">
      Holy Orders are religious military organizations that provide free armies during holy wars and crusades.
      Build relations with them through donations and grants of land.
    </div>
  `;

  stagesEl.innerHTML = orders.map(o => `
    <div class="dragon-stage">
      <div class="dragon-stage-number">${o.icon}</div>
      <div class="dragon-stage-content">
        <h4>${o.name}</h4>
        <p><strong>Faith:</strong> ${o.faith} | <strong>Troops:</strong> ${o.troops}</p>
        <p>${o.strength}</p>
        <p style="margin-top:6px;"><strong>How to use:</strong> ${o.how_to_use}</p>
        <p style="margin-top:4px;"><strong>Unique bonus:</strong> ${o.unique_bonus}</p>
        <div class="dragon-stage-tip">✓ ${o.tip}</div>
      </div>
    </div>
  `).join('');

  knownEl.innerHTML = `
    <p style="color:var(--text-muted);font-size:0.875rem;">
      Holy Orders are available when your realm's faith is in good standing with their founding church.
      Donate gold regularly, avoid heresy, and maintain good papal/patriarch relations.
    </p>
  `;
}

// ─── Map ──────────────────────────────────────────────────────────────────────
function rerenderMap() {
  const mapContainer = document.getElementById('westeros-map');
  if (!mapContainer) return;
  const detail = document.getElementById('map-detail');
  if (detail) detail.innerHTML = '<p class="hint-text">Click a region on the map to see details.</p>';

  const regions = window.activeExtra().mapRegions || [];
  const grid = Array.from({ length: 6 }, () => Array(7).fill(null));
  regions.forEach(r => {
    if (r.row <= 6 && r.col <= 7) grid[r.row - 1][r.col - 1] = r;
  });

  let html = '<div class="map-container">';
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      const region = grid[row][col];
      if (region) {
        const label = region.name.replace('The ', '').replace('Beyond the Wall', 'Beyond Wall').replace('Holy Roman Empire', 'HRE').replace('Kievan Rus', 'Kievan Rus');
        html += `<div class="map-region size-${region.size}" data-id="${region.id}"
          style="background-color:${region.color};color:${region.textColor};" title="${region.name}">${label}</div>`;
      } else {
        html += '<div class="map-ocean"></div>';
      }
    }
  }
  html += '</div>';

  html += `<div class="map-legend">
    ${regions.map(r => `
      <div class="map-legend-item">
        <div class="map-legend-dot" style="background:${r.color};"></div>
        <span>${r.name}</span>
      </div>`).join('')}
  </div>`;

  mapContainer.innerHTML = html;

  mapContainer.querySelectorAll('.map-region').forEach(el => {
    el.addEventListener('click', () => {
      mapContainer.querySelectorAll('.map-region').forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      const region = regions.find(r => r.id === el.dataset.id);
      if (!region || !detail) return;
      detail.innerHTML = `
        <div class="map-detail-card">
          <h3>${region.name}</h3>
          <div class="map-stat-row">
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);">Economy</div>
              <div style="color:${region.economy >= 4 ? 'var(--green-light)' : region.economy >= 3 ? 'var(--gold)' : 'var(--red-light)'};">${'★'.repeat(region.economy)}${'☆'.repeat(5 - region.economy)}</div>
            </div>
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);">Military</div>
              <div style="color:${region.military >= 4 ? 'var(--green-light)' : region.military >= 3 ? 'var(--gold)' : 'var(--red-light)'};">${'★'.repeat(region.military)}${'☆'.repeat(5 - region.military)}</div>
            </div>
          </div>
          <p style="font-size:0.875rem;color:var(--text-secondary);margin-top:10px;">${region.notes}</p>
        </div>
      `;
    });
  });
}

// ─── Marriage ─────────────────────────────────────────────────────────────────
function rerenderMarriage() {
  const sel1 = document.getElementById('marriage-house1');
  const sel2 = document.getElementById('marriage-house2');
  if (!sel1 || !sel2) return;
  const houses = window.activeData().houses;
  const opts = `<option value="">— Select —</option>` + houses.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
  sel1.innerHTML = opts;
  sel2.innerHTML = opts;
}

// ─── Events ───────────────────────────────────────────────────────────────────
function rerenderEvents() {
  const extra = window.activeExtra();
  const events = extra?.eventDecisions || [];
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const filter = document.getElementById('event-filter');
  const cat = filter?.value || 'all';

  const filtered = cat === 'all' ? events : events.filter(e => e.category === cat);
  grid.innerHTML = `<div class="events-grid">
    ${filtered.map(e => `
      <div class="event-card">
        <span class="event-category-badge">${e.category}</span>
        <h4>${e.name}</h4>
        <p class="event-trigger">Trigger: ${e.trigger}</p>
        ${e.options.map(o => `
          <div class="event-option ${o.recommended ? 'recommended' : ''}">
            <div style="flex:1;">
              <div class="event-option-label">${o.recommended ? '✓ ' : ''}${o.choice}</div>
              <div class="event-option-outcome">${o.outcome}</div>
            </div>
            ${o.recommended ? '<span class="event-rec-badge">Best</span>' : ''}
          </div>
        `).join('')}
        <div class="event-tip">💡 ${e.tip}</div>
      </div>
    `).join('')}
  </div>`;
}

// ─── Culture ──────────────────────────────────────────────────────────────────
function rerenderCulture() {
  const extra = window.activeExtra();
  const cultures = extra?.cultures || [];
  const grid = document.getElementById('culture-grid');
  if (!grid) return;

  // Update panel header
  const ph = document.querySelector('#tab-culture .panel-header');
  if (ph) {
    ph.querySelector('h2').textContent = window.currentMode === 'vanilla' ? 'Faith & Culture Advisor' : 'Culture & Religion Advisor';
  }

  grid.innerHTML = `<div class="culture-grid">
    ${cultures.map(c => `
      <div class="culture-card">
        <span class="culture-difficulty ${c.difficulty === 'Easy' ? 'difficulty-easy' : c.difficulty.includes('Hard') ? 'difficulty-hard' : 'difficulty-medium'}">${c.difficulty}</span>
        <h3>${c.name}</h3>
        <p class="culture-region">📍 ${c.region}</p>
        <ul class="culture-pros">${c.bonuses.map(b => `<li>${b}</li>`).join('')}</ul>
        <ul class="culture-cons">${c.penalties.map(p => `<li>${p}</li>`).join('')}</ul>
        <div class="culture-convert-box"><strong>Play when:</strong> ${c.convertWhen}</div>
      </div>
    `).join('')}
  </div>`;
}

// ─── Compare ──────────────────────────────────────────────────────────────────
function rerenderCompare() {
  const typeSelect = document.getElementById('compare-type');
  if (!typeSelect) return;
  // Repopulate with current mode's data
  const type = typeSelect.value;
  populateCompareSelects(type);
  document.getElementById('compare-output').innerHTML = '';
}

// ─── Utility ──────────────────────────────────────────────────────────────────

// Patch Long Night score to use the right data
const _origUpdateLongNightScore = window.updateLongNightScore;
window.updateLongNightScore = function() {
  const data = window.currentMode === 'vanilla'
    ? (window.VANILLA_EXTRA?.crusadeChecklist || [])
    : (window.AGOT_EXTRA?.longNightChecklist || []);

  let totalScore = 0;
  let maxScore = 0;
  data.forEach(item => {
    const sel = document.getElementById(`ln-${item.id}`);
    if (!sel) return;
    const idx = parseInt(sel.value);
    totalScore += item.scoring[idx] || 0;
    maxScore += Math.max(...item.scoring);
  });

  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const barColor = pct >= 70 ? 'high' : pct >= 40 ? 'medium' : 'low';
  const isVanilla = window.currentMode === 'vanilla';
  const readinessLabel = pct >= 80 ? (isVanilla ? 'Ready to lead a Crusade' : 'Ready for the Long Night') :
                         pct >= 60 ? 'Mostly Prepared — Fill the Gaps' :
                         pct >= 40 ? 'Partially Prepared — Significant Gaps' :
                         pct >= 20 ? 'Poorly Prepared — Urgent Action Needed' :
                         (isVanilla ? 'Not Ready — The Crusade will fail' : 'Not Ready — The Night King Will Win');

  const bar = document.getElementById('longnight-progress');
  const label = document.getElementById('longnight-score-label');
  if (bar) { bar.style.width = `${pct}%`; bar.textContent = `${totalScore} / ${maxScore}`; bar.className = `progress-bar ${barColor}`; }
  if (label) { label.textContent = `${pct}% — ${readinessLabel}`; label.style.color = pct >= 60 ? 'var(--green-light)' : pct >= 40 ? 'var(--gold)' : 'var(--red-light)'; }
};
