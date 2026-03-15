// CK3 AGOT Helper Tool — New Features Logic

document.addEventListener('DOMContentLoaded', () => {
  initCouncil();
  initMarriage();
  initBudget();
  initStress();
  initLongNight();
  initValyrianSteel();
  initDragons();
  initMap();
  initEvents();
  initCulture();
  initCompare();
  initNotes();
});

// =============================================
// COUNCIL OPTIMIZER
// =============================================
function initCouncil() {
  const inputsContainer = document.getElementById('council-inputs');
  const guideContainer = document.getElementById('council-role-guide');
  if (!inputsContainer || !guideContainer) return;

  const roles = AGOT_EXTRA.councilRoles;

  inputsContainer.innerHTML = `
    <div class="council-input-grid">
      ${roles.map(r => `
        <div class="council-input-block">
          <label>${r.icon} ${r.name} (${r.stat})</label>
          <input type="number" id="council-${r.id}" min="1" max="100" value="10" placeholder="Stat value" />
          <input type="text" id="council-${r.id}-name" placeholder="Courtier name (optional)" style="margin-top:4px;" />
        </div>
      `).join('')}
    </div>
    <p style="font-size:0.78rem;color:var(--text-muted);margin-top:8px;">Enter the primary stat value for your best candidate for each role.</p>
  `;

  guideContainer.innerHTML = `<div class="council-role-grid">
    ${roles.map(r => `
      <div class="council-role-card">
        <h4>${r.icon} ${r.name}</h4>
        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:6px;">Primary stat: <strong style="color:var(--gold)">${r.stat}</strong> | Min recommended: ${r.minRecommended} | Ideal: ${r.idealStat}+</div>
        <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:8px;">${r.why}</p>
        <ul style="padding-left:16px;font-size:0.78rem;color:var(--text-muted);">
          ${r.tips.map(t => `<li style="padding:2px 0;">${t}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>`;

  document.getElementById('calc-council')?.addEventListener('click', () => {
    const output = document.getElementById('council-output');
    const assignments = roles.map(r => {
      const val = parseInt(document.getElementById(`council-${r.id}`)?.value) || 0;
      const name = document.getElementById(`council-${r.id}-name`)?.value || 'Unknown Courtier';
      return { role: r, stat: val, name };
    });

    const html = assignments.map(a => {
      const quality = a.stat >= a.role.idealStat ? 'success' :
                      a.stat >= a.role.minRecommended ? 'warning' : 'danger';
      const qualityLabel = a.stat >= a.role.idealStat ? 'Excellent' :
                           a.stat >= a.role.minRecommended ? 'Adequate' : 'Too Low — Find Better';
      return `
        <div class="council-assignment">
          <div class="council-assignment-icon">${a.role.icon}</div>
          <div style="flex:1;">
            <div class="council-assignment-role">${a.role.name}</div>
            <div class="council-assignment-name">${a.name}</div>
            <div class="council-assignment-stat">${a.role.stat}: ${a.stat} — <span class="text-${quality === 'success' ? 'green' : quality === 'warning' ? 'gold' : 'red'}">${qualityLabel}</span></div>
          </div>
        </div>
      `;
    }).join('');

    const totalScore = assignments.reduce((sum, a) => sum + a.stat, 0);
    const avgScore = (totalScore / assignments.length).toFixed(1);
    const overallClass = avgScore >= 18 ? 'success' : avgScore >= 14 ? 'warning' : 'danger';

    output.innerHTML = `
      <div class="result-block ${overallClass}">
        <h4>Council Average: ${avgScore} / stat — ${avgScore >= 18 ? 'Elite Council' : avgScore >= 14 ? 'Solid Council' : 'Weak Council — Recruit Urgently'}</h4>
      </div>
      ${html}
    `;
  });
}

// =============================================
// MARRIAGE PLANNER
// =============================================
function initMarriage() {
  const sel1 = document.getElementById('marriage-house1');
  const sel2 = document.getElementById('marriage-house2');
  const typeContainer = document.getElementById('marriage-type-options');
  if (!sel1 || !sel2 || !typeContainer) return;

  const houseOptions = AGOT_DATA.houses.map(h =>
    `<option value="${h.id}">${h.name}</option>`
  ).join('');
  sel1.innerHTML += houseOptions;
  sel2.innerHTML += houseOptions;

  typeContainer.innerHTML = AGOT_EXTRA.marriageTypes.map((t, i) => `
    <div class="marriage-type-card ${i === 0 ? 'selected' : ''}" data-type="${i}">
      <h5>${t.name}</h5>
      <p>${t.description}</p>
    </div>
  `).join('');

  let selectedType = 0;
  typeContainer.querySelectorAll('.marriage-type-card').forEach(card => {
    card.addEventListener('click', () => {
      typeContainer.querySelectorAll('.marriage-type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedType = parseInt(card.dataset.type);
    });
  });

  document.getElementById('calc-marriage')?.addEventListener('click', () => {
    const h1 = sel1.value;
    const h2 = sel2.value;
    const output = document.getElementById('marriage-output');

    if (!h1 || !h2) {
      output.innerHTML = '<p class="hint-text">Please select both houses.</p>';
      return;
    }
    if (h1 === h2) {
      output.innerHTML = '<p style="color:var(--red-light);text-align:center;padding:20px;">Select two different houses.</p>';
      return;
    }

    const house1 = AGOT_DATA.houses.find(h => h.id === h1);
    const house2 = AGOT_DATA.houses.find(h => h.id === h2);
    const type = AGOT_EXTRA.marriageTypes[selectedType];
    const benefitKey = [h1, h2].sort().join('_');
    const knownBenefit = AGOT_EXTRA.marriageBenefits[benefitKey];

    const combinedEcon = house1.economy + house2.economy;
    const combinedMil = house1.military + house2.military;
    const combinedDip = house1.diplomacy + house2.diplomacy;

    output.innerHTML = `
      <div class="marriage-result-block" style="border:1px solid var(--gold-dim);">
        <h4>💍 ${house1.name} × ${house2.name}</h4>
        <p style="color:var(--text-muted);margin-bottom:8px;">Via: ${type.name}</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <span style="font-size:0.8rem;">Combined Econ: <strong class="${combinedEcon >= 8 ? 'text-green' : 'text-gold'}">${combinedEcon}/10</strong></span>
          <span style="font-size:0.8rem;">Combined Mil: <strong class="${combinedMil >= 8 ? 'text-green' : 'text-gold'}">${combinedMil}/10</strong></span>
          <span style="font-size:0.8rem;">Combined Dip: <strong class="${combinedDip >= 8 ? 'text-green' : 'text-gold'}">${combinedDip}/10</strong></span>
        </div>
      </div>
      ${knownBenefit ? `
        <div class="marriage-result-block" style="border:1px solid var(--success);">
          <h4>Known Alliance Analysis</h4>
          <p><strong>Alliance:</strong> ${knownBenefit.alliance}</p>
          <p><strong>Claims:</strong> ${knownBenefit.claims}</p>
          <p><strong>Prestige:</strong> ${knownBenefit.prestige}</p>
          <p><strong>Risks:</strong> ${knownBenefit.risks}</p>
          <div style="margin-top:8px;padding:8px;background:rgba(201,162,39,0.08);border-left:2px solid var(--gold);font-size:0.85rem;color:var(--gold);">
            ★ ${knownBenefit.recommendation}
          </div>
        </div>
      ` : `
        <div class="marriage-result-block" style="border:1px solid var(--border-accent);">
          <h4>General Analysis</h4>
          <p>This combination provides a mutual defense alliance and cross-dynasty legitimacy for children.</p>
          <p style="margin-top:6px;">Strategic value is ${combinedMil >= 8 ? 'high' : combinedEcon >= 8 ? 'moderate-high' : 'moderate'} based on combined house strength.</p>
        </div>
      `}
      <div class="marriage-result-block" style="border:1px solid var(--border);">
        <h4>${type.name} — Pros & Cons</h4>
        ${type.pros.map(p => `<p style="color:var(--green-light);font-size:0.82rem;">+ ${p}</p>`).join('')}
        ${type.cons.map(c => `<p style="color:var(--red-light);font-size:0.82rem;">- ${c}</p>`).join('')}
      </div>
    `;
  });
}

// =============================================
// BUDGET CALCULATOR
// =============================================
function initBudget() {
  document.getElementById('calc-budget')?.addEventListener('click', () => {
    const castles = parseInt(document.getElementById('budget-castles')?.value) || 0;
    const cities = parseInt(document.getElementById('budget-cities')?.value) || 0;
    const temples = parseInt(document.getElementById('budget-temples')?.value) || 0;
    const stewardship = parseInt(document.getElementById('budget-stewardship')?.value) || 10;
    const maaCount = parseInt(document.getElementById('budget-maa-count')?.value) || 0;
    const mercCount = parseInt(document.getElementById('budget-merc-count')?.value) || 0;
    const hasMarket = document.getElementById('budget-market')?.checked;
    const hasShipyard = document.getElementById('budget-shipyard')?.checked;

    const d = AGOT_EXTRA.incomeData;
    const stewBonus = 1 + Math.max(0, stewardship - 10) * d.stewardshipBonus;
    const castleIncome = castles * d.holdingBase.castle * stewBonus;
    const cityIncome = cities * d.holdingBase.city * (hasMarket ? 1.4 : 1) * stewBonus;
    const templeIncome = temples * d.holdingBase.temple * stewBonus;
    const shipyardBonus = hasShipyard ? cities * 0.8 : 0;
    const totalIncome = castleIncome + cityIncome + templeIncome + shipyardBonus;

    const maaUpkeep = maaCount * d.expenseTypes[0].costPerUnit * 100;
    const mercUpkeep = mercCount * d.expenseTypes[1].costPerUnit;
    const totalExpenses = maaUpkeep + mercUpkeep;
    const net = totalIncome - totalExpenses;

    let goldAdvice;
    const thresholds = d.goldThresholds;
    if (net < 0) goldAdvice = { label: 'Deficit!', advice: thresholds.critical.advice, cls: 'danger' };
    else if (net < 0.5) goldAdvice = { label: 'Breaking Even', advice: thresholds.low.advice, cls: 'warning' };
    else if (net < 2) goldAdvice = { label: 'Tight Budget', advice: thresholds.adequate.advice, cls: 'warning' };
    else if (net < 5) goldAdvice = { label: 'Comfortable', advice: thresholds.comfortable.advice, cls: 'success' };
    else goldAdvice = { label: 'Wealthy', advice: thresholds.wealthy.advice, cls: 'success' };

    document.getElementById('budget-output').innerHTML = `
      <div class="result-block ${goldAdvice.cls}">
        <h4>Budget Status: ${goldAdvice.label}</h4>
        <p>${goldAdvice.advice}</p>
      </div>
      <div class="budget-row"><span class="label">Castle income (×${castles})</span><span class="value income">+${castleIncome.toFixed(1)}/mo</span></div>
      <div class="budget-row"><span class="label">City income (×${cities})${hasMarket ? ' +Markets' : ''}</span><span class="value income">+${cityIncome.toFixed(1)}/mo</span></div>
      <div class="budget-row"><span class="label">Temple income (×${temples})</span><span class="value income">+${templeIncome.toFixed(1)}/mo</span></div>
      ${hasShipyard ? `<div class="budget-row"><span class="label">Shipyard bonus</span><span class="value income">+${shipyardBonus.toFixed(1)}/mo</span></div>` : ''}
      <div class="budget-row"><span class="label">Stewardship multiplier</span><span class="value income">×${stewBonus.toFixed(2)}</span></div>
      <div class="budget-divider"></div>
      <div class="budget-row"><span class="label">Total Income</span><span class="value income">+${totalIncome.toFixed(1)}/mo</span></div>
      <div class="budget-row"><span class="label">MaA upkeep (${maaCount} regiments)</span><span class="value expense">-${maaUpkeep.toFixed(1)}/mo</span></div>
      ${mercCount > 0 ? `<div class="budget-row"><span class="label">Mercenary retainer (×${mercCount})</span><span class="value expense">-${mercUpkeep}/mo</span></div>` : ''}
      <div class="budget-divider"></div>
      <div class="budget-row"><span class="label" style="font-weight:700;">Net Monthly Income</span><span class="value total">${net >= 0 ? '+' : ''}${net.toFixed(1)}/mo</span></div>
      <div class="budget-row"><span class="label">Yearly estimate</span><span class="value ${net >= 0 ? 'income' : 'expense'}">${net >= 0 ? '+' : ''}${(net * 12).toFixed(0)}/year</span></div>
    `;
  });
}

// =============================================
// STRESS MANAGER
// =============================================
function initStress() {
  const slider = document.getElementById('stress-slider');
  const stressVal = document.getElementById('stress-value');
  const causesContainer = document.getElementById('stress-causes');
  const reliefContainer = document.getElementById('stress-relief-table');
  const breakGrid = document.getElementById('mental-break-grid');
  if (!slider) return;

  slider.addEventListener('input', () => {
    stressVal.textContent = slider.value;
    updateStressColor(parseInt(slider.value));
  });

  if (causesContainer) {
    causesContainer.innerHTML = AGOT_EXTRA.stressData.stressGains.map((g, i) => `
      <label>
        <input type="checkbox" data-stress="${g.stress.replace(/[^0-9]/g, '') || 30}" class="stress-cause-cb" />
        ${g.action} <span style="color:var(--${g.severity === 'high' ? 'red-light' : g.severity === 'medium' ? 'gold' : 'text-muted'}">(${g.stress})</span>
      </label>
    `).join('');
  }

  if (reliefContainer) {
    reliefContainer.innerHTML = `
      <table class="relief-table">
        <thead><tr><th>Action</th><th>Relief</th><th>Cooldown</th><th>Requirement</th></tr></thead>
        <tbody>
          ${AGOT_EXTRA.stressData.stressRelief.map(r => `
            <tr>
              <td style="color:var(--text-primary);font-weight:600;">${r.action}</td>
              <td style="color:var(--green-light);">${r.relief}</td>
              <td>${r.cooldown}</td>
              <td>${r.requirement}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  if (breakGrid) {
    breakGrid.innerHTML = `<div class="mental-break-grid">
      ${AGOT_EXTRA.stressData.mentalBreakOutcomes.map(m => `
        <div class="mental-break-card">
          <h5>${m.name}</h5>
          <p>${m.effect}</p>
          <p style="color:var(--gold);margin-top:4px;font-size:0.75rem;">Recovery: ${m.recovery}</p>
        </div>
      `).join('')}
    </div>`;
  }

  document.getElementById('calc-stress')?.addEventListener('click', () => {
    const current = parseInt(slider.value);
    const threshold = AGOT_EXTRA.stressData.thresholds.find(t => current >= t.level && current <= t.max)
      || AGOT_EXTRA.stressData.thresholds[AGOT_EXTRA.stressData.thresholds.length - 1];

    const output = document.getElementById('stress-output');
    const urgency = current >= 400 ? 'danger' : current >= 300 ? 'danger' : current >= 200 ? 'warning' : current >= 100 ? 'warning' : 'success';

    const top3Relief = [...AGOT_EXTRA.stressData.stressRelief]
      .sort((a, b) => parseInt(b.relief.replace(/[^0-9]/g, '')) - parseInt(a.relief.replace(/[^0-9]/g, '')))
      .slice(0, 3);

    output.innerHTML = `
      <div class="stress-indicator ${threshold.color}">
        <h3>${threshold.name}</h3>
        <p style="font-size:0.85rem;">${threshold.description}</p>
        ${threshold.moodPenalty < 0 ? `<p style="color:var(--red-light);font-size:0.82rem;margin-top:4px;">Mood penalty: ${threshold.moodPenalty} to all stats</p>` : ''}
      </div>
      ${current >= 300 ? `
        <div class="result-block danger">
          <h4>⚠️ Mental Break Imminent</h4>
          <p>Take stress relief actions NOW before losing control of your ruler.</p>
        </div>
      ` : ''}
      <div class="result-block ${urgency}">
        <h4>Top Relief Actions</h4>
        <ul>
          ${top3Relief.map(r => `<li><strong>${r.action}</strong>: ${r.relief} stress (${r.cooldown} cooldown)</li>`).join('')}
        </ul>
      </div>
    `;
  });
}

function updateStressColor(val) {
  const el = document.getElementById('stress-value');
  if (!el) return;
  if (val >= 400) el.style.color = '#ff2222';
  else if (val >= 300) el.style.color = '#ff6644';
  else if (val >= 200) el.style.color = '#ff9900';
  else if (val >= 100) el.style.color = '#ffcc00';
  else el.style.color = 'var(--green-light)';
}

// =============================================
// LONG NIGHT CHECKLIST
// =============================================
function initLongNight() {
  const container = document.getElementById('longnight-checklist');
  if (!container) return;

  container.innerHTML = AGOT_EXTRA.longNightChecklist.map(item => `
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

  updateLongNightScore();
}

function updateLongNightScore() {
  const items = AGOT_EXTRA.longNightChecklist;
  let totalScore = 0;
  let maxScore = 0;

  items.forEach(item => {
    const sel = document.getElementById(`ln-${item.id}`);
    if (!sel) return;
    const idx = parseInt(sel.value);
    const scoring = item.scoring;
    totalScore += scoring[idx] || 0;
    maxScore += Math.max(...scoring);
  });

  const pct = Math.round((totalScore / maxScore) * 100);
  const barColor = pct >= 70 ? 'high' : pct >= 40 ? 'medium' : 'low';
  const readinessLabel = pct >= 80 ? 'Ready for the Long Night' :
                         pct >= 60 ? 'Mostly Prepared — Fill the Gaps' :
                         pct >= 40 ? 'Partially Prepared — Significant Gaps' :
                         pct >= 20 ? 'Poorly Prepared — Urgent Action Needed' :
                         'Not Ready — The Night King Will Win';

  const bar = document.getElementById('longnight-progress');
  const label = document.getElementById('longnight-score-label');
  if (bar) { bar.style.width = `${pct}%`; bar.textContent = `${totalScore} / ${maxScore}`; bar.className = `progress-bar ${barColor}`; }
  if (label) { label.textContent = `${pct}% — ${readinessLabel}`; label.style.color = pct >= 60 ? 'var(--green-light)' : pct >= 40 ? 'var(--gold)' : 'var(--red-light)'; }
}

window.updateLongNightScore = updateLongNightScore;

// =============================================
// VALYRIAN STEEL TRACKER
// =============================================
function initValyrianSteel() {
  const grid = document.getElementById('valyrian-grid');
  if (!grid) return;

  grid.innerHTML = AGOT_EXTRA.valyrian_steel.map(s => {
    const statusClass = s.status.toLowerCase().replace(' ', '-').split('(')[0].trim();
    const statusBadgeClass = statusClass === 'active' ? 'status-active' : statusClass === 'reforged' ? 'status-reforged' : 'status-lost';
    return `
      <div class="valyrian-card ${statusClass}">
        <h4>⚔️ ${s.name}</h4>
        <span class="valyrian-status ${statusBadgeClass}">${s.status}</span>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;"><strong>House:</strong> ${s.house}</p>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:6px;"><strong>Current Holder:</strong> ${s.holder}</p>
        <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:8px;">${s.description}</p>
        <p style="font-size:0.78rem;color:var(--gold);margin-bottom:6px;"><strong>Stats:</strong> ${s.stats}</p>
        <p style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:6px;padding:6px 8px;background:rgba(201,162,39,0.08);border-left:2px solid var(--gold-dim);">
          <strong>How to get:</strong> ${s.howToGet}
        </p>
        <div class="valyrian-priority-stars">${'★'.repeat(s.priority)}${'☆'.repeat(5 - s.priority)} Acquisition Priority</div>
      </div>
    `;
  }).join('');
}

// =============================================
// DRAGON BONDING GUIDE
// =============================================
function initDragons() {
  const reqContainer = document.getElementById('dragon-requirements');
  const stagesContainer = document.getElementById('dragon-stages');
  const knownContainer = document.getElementById('dragon-known');
  if (!reqContainer || !stagesContainer || !knownContainer) return;

  reqContainer.innerHTML = `
    <ul style="padding-left:20px;">
      ${AGOT_EXTRA.dragonGuide.requirements.map(r => `
        <li style="color:var(--text-secondary);font-size:0.875rem;padding:4px 0;border-bottom:1px solid var(--border);">${r}</li>
      `).join('')}
    </ul>
  `;

  stagesContainer.innerHTML = AGOT_EXTRA.dragonGuide.stages.map(s => `
    <div class="dragon-stage">
      <div class="dragon-stage-number">${s.stage}</div>
      <div class="dragon-stage-content">
        <h4>🐉 ${s.name}</h4>
        <p>${s.description}</p>
        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">
          <strong>Key events:</strong> ${s.events.join(', ')}
        </div>
        <div class="dragon-stage-tip">✓ ${s.tips}</div>
        <div class="dragon-stage-duration">⏱ ${s.duration}</div>
      </div>
    </div>
  `).join('');

  knownContainer.innerHTML = `<div class="dragon-known-grid">
    ${AGOT_EXTRA.dragonGuide.knownDragons.map(d => `
      <div class="dragon-known-card">
        <h5>🐉 ${d.name}</h5>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;"><strong>Color:</strong> ${d.color}</p>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;"><strong>Rider:</strong> ${d.rider}</p>
        <p style="font-size:0.78rem;color:${d.status.includes('Dead') ? 'var(--red-light)' : 'var(--green-light)'};margin-bottom:4px;"><strong>Status:</strong> ${d.status}</p>
        <p style="font-size:0.78rem;color:var(--text-secondary);">${d.notes}</p>
      </div>
    `).join('')}
  </div>`;
}

// =============================================
// WESTEROS MAP
// =============================================
function initMap() {
  const mapContainer = document.getElementById('westeros-map');
  if (!mapContainer) return;

  // Build a 6-row × 7-col grid
  const grid = Array.from({ length: 6 }, () => Array(7).fill(null));

  AGOT_EXTRA.mapRegions.forEach(r => {
    if (r.row <= 6 && r.col <= 7) {
      grid[r.row - 1][r.col - 1] = r;
    }
  });

  let html = '<div class="map-container">';
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      const region = grid[row][col];
      if (region) {
        html += `<div class="map-region size-${region.size}" data-id="${region.id}"
          style="background-color:${region.color};color:${region.textColor};"
          title="${region.name}">${region.name.replace('The ', '').replace('Beyond the Wall', 'Beyond Wall')}</div>`;
      } else {
        html += '<div class="map-ocean"></div>';
      }
    }
  }
  html += '</div>';

  html += `<div class="map-legend">
    ${AGOT_EXTRA.mapRegions.map(r => `
      <div class="map-legend-item">
        <div class="map-legend-dot" style="background:${r.color};"></div>
        <span>${r.name}</span>
      </div>
    `).join('')}
  </div>`;

  mapContainer.innerHTML = html;

  mapContainer.querySelectorAll('.map-region').forEach(el => {
    el.addEventListener('click', () => {
      mapContainer.querySelectorAll('.map-region').forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      const region = AGOT_EXTRA.mapRegions.find(r => r.id === el.dataset.id);
      if (!region) return;

      document.getElementById('map-detail').innerHTML = `
        <div class="map-detail-card">
          <h3>${region.name}</h3>
          <p style="color:var(--text-muted);font-size:0.82rem;margin-bottom:12px;">Terrain: ${region.terrain}</p>
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

// =============================================
// EVENT DECISIONS
// =============================================
function initEvents() {
  renderEvents('all');

  document.getElementById('filter-events')?.addEventListener('click', () => {
    const cat = document.getElementById('event-filter')?.value || 'all';
    renderEvents(cat);
  });
}

function renderEvents(category) {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const filtered = category === 'all'
    ? AGOT_EXTRA.eventDecisions
    : AGOT_EXTRA.eventDecisions.filter(e => e.category === category);

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

// =============================================
// CULTURE & RELIGION ADVISOR
// =============================================
function initCulture() {
  const grid = document.getElementById('culture-grid');
  if (!grid) return;

  grid.innerHTML = `<div class="culture-grid">
    ${AGOT_EXTRA.cultures.map(c => `
      <div class="culture-card">
        <span class="culture-difficulty difficulty-${c.difficulty.toLowerCase().replace(' ', '-')} ${c.difficulty === 'Easy' ? 'difficulty-easy' : c.difficulty === 'Hard' || c.difficulty === 'Very Hard' ? 'difficulty-hard' : 'difficulty-medium'}">${c.difficulty}</span>
        <h3>${c.name}</h3>
        <p class="culture-region">📍 ${c.region}</p>
        <ul class="culture-pros">${c.bonuses.map(b => `<li>${b}</li>`).join('')}</ul>
        <ul class="culture-cons">${c.penalties.map(p => `<li>${p}</li>`).join('')}</ul>
        <div class="culture-convert-box"><strong>Convert when:</strong> ${c.convertWhen}</div>
      </div>
    `).join('')}
  </div>`;
}

// =============================================
// COMPARE TOOL
// =============================================
function initCompare() {
  const typeSelect = document.getElementById('compare-type');
  if (!typeSelect) return;

  populateCompareSelects('houses');

  typeSelect.addEventListener('change', () => {
    populateCompareSelects(typeSelect.value);
  });

  document.getElementById('do-compare')?.addEventListener('click', () => {
    const type = typeSelect.value;
    const aVal = document.getElementById('compare-a')?.value;
    const bVal = document.getElementById('compare-b')?.value;
    if (!aVal || !bVal || aVal === bVal) {
      document.getElementById('compare-output').innerHTML = '<p style="color:var(--red-light);text-align:center;padding:20px;">Select two different items to compare.</p>';
      return;
    }
    renderComparison(type, aVal, bVal);
  });
}

function populateCompareSelects(type) {
  const selA = document.getElementById('compare-a');
  const selB = document.getElementById('compare-b');
  if (!selA || !selB) return;

  let options = [];
  if (type === 'houses') options = AGOT_DATA.houses.map(h => ({ value: h.id, label: h.name }));
  else if (type === 'units') options = AGOT_DATA.menAtArms.map((m, i) => ({ value: i, label: m.name }));
  else if (type === 'succession') options = AGOT_DATA.successionLaws.map((s, i) => ({ value: i, label: s.name }));
  else if (type === 'cultures') options = AGOT_EXTRA.cultures.map((c, i) => ({ value: i, label: c.name }));

  const html = options.map(o => `<option value="${o.value}">${o.label}</option>`).join('');
  selA.innerHTML = html;
  selB.innerHTML = html;
  if (options.length > 1) selB.selectedIndex = 1;
}

function renderComparison(type, aVal, bVal) {
  const output = document.getElementById('compare-output');
  if (!output) return;

  let itemA, itemB, rows;

  if (type === 'houses') {
    itemA = AGOT_DATA.houses.find(h => h.id === aVal);
    itemB = AGOT_DATA.houses.find(h => h.id === bVal);
    rows = [
      { label: 'Region', a: itemA.region, b: itemB.region },
      { label: 'Starting Ruler', a: itemA.startingRuler, b: itemB.startingRuler },
      { label: 'Difficulty', a: itemA.difficulty, b: itemB.difficulty },
      { label: 'Economy', a: itemA.economy, b: itemB.economy, numeric: true },
      { label: 'Military', a: itemA.military, b: itemB.military, numeric: true },
      { label: 'Diplomacy', a: itemA.diplomacy, b: itemB.diplomacy, numeric: true },
      { label: 'Key Vassals', a: itemA.keyVassals.length, b: itemB.keyVassals.length, numeric: true }
    ];
  } else if (type === 'units') {
    itemA = AGOT_DATA.menAtArms[aVal];
    itemB = AGOT_DATA.menAtArms[bVal];
    rows = [
      { label: 'Damage', a: itemA.stats.damage, b: itemB.stats.damage, numeric: true },
      { label: 'Toughness', a: itemA.stats.toughness, b: itemB.stats.toughness, numeric: true },
      { label: 'Best Terrain', a: itemA.terrain, b: itemB.terrain },
      { label: 'Counters', a: itemA.counters.join(', '), b: itemB.counters.join(', ') },
      { label: 'Countered By', a: itemA.counteredBy.join(', '), b: itemB.counteredBy.join(', ') }
    ];
  } else if (type === 'succession') {
    itemA = AGOT_DATA.successionLaws[aVal];
    itemB = AGOT_DATA.successionLaws[bVal];
    rows = [
      { label: 'Description', a: itemA.description, b: itemB.description },
      { label: 'Recommended', a: itemA.recommended ? '✓ Yes' : 'No', b: itemB.recommended ? '✓ Yes' : 'No' },
      { label: 'Pros', a: itemA.pros.join('; '), b: itemB.pros.join('; ') },
      { label: 'Cons', a: itemA.cons.join('; '), b: itemB.cons.join('; ') }
    ];
  } else if (type === 'cultures') {
    itemA = AGOT_EXTRA.cultures[aVal];
    itemB = AGOT_EXTRA.cultures[bVal];
    rows = [
      { label: 'Region', a: itemA.region, b: itemB.region },
      { label: 'Difficulty', a: itemA.difficulty, b: itemB.difficulty },
      { label: 'Key Bonuses', a: itemA.bonuses.slice(0, 2).join('; '), b: itemB.bonuses.slice(0, 2).join('; ') },
      { label: 'Key Penalties', a: itemA.penalties.slice(0, 2).join('; '), b: itemB.penalties.slice(0, 2).join('; ') }
    ];
  }

  const nameA = itemA?.name || aVal;
  const nameB = itemB?.name || bVal;

  output.innerHTML = `
    <div class="compare-grid">
      <div class="compare-card">
        <h3>${nameA}</h3>
        ${rows.map(r => `
          <div class="compare-row">
            <span class="clabel">${r.label}</span>
            <span class="cval ${r.numeric ? (r.a > r.b ? 'better' : r.a < r.b ? 'worse' : '') : ''}">${r.a}</span>
          </div>
        `).join('')}
      </div>
      <div class="compare-vs">VS</div>
      <div class="compare-card">
        <h3>${nameB}</h3>
        ${rows.map(r => `
          <div class="compare-row">
            <span class="clabel">${r.label}</span>
            <span class="cval ${r.numeric ? (r.b > r.a ? 'better' : r.b < r.a ? 'worse' : '') : ''}">${r.b}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// =============================================
// NOTES & CHECKLIST
// =============================================
function initNotes() {
  const area = document.getElementById('notes-area');
  const status = document.getElementById('notes-status');
  const checklistContainer = document.getElementById('checklist-area');

  const EARLY_GAME_TASKS = [
    'Appoint council with best available characters',
    'Secure first alliance via marriage',
    'Educate heir — assign to best guardian',
    'Start building economic buildings',
    'Fabricate first claim on neighbor',
    'Find secrets on dangerous rival',
    'Raise Men-at-Arms to 3+ regiments',
    'Ensure succession law is stable',
    'Build Barracks in capital castle',
    'Prepare war declaration within first 5 years'
  ];

  if (area) {
    const saved = localStorage.getItem('ck3-agot-notes');
    if (saved) area.value = saved;

    area.addEventListener('input', () => {
      localStorage.setItem('ck3-agot-notes', area.value);
      if (status) { status.textContent = 'Auto-saved'; setTimeout(() => { if (status) status.textContent = ''; }, 2000); }
    });
  }

  document.getElementById('save-notes')?.addEventListener('click', () => {
    if (area) localStorage.setItem('ck3-agot-notes', area.value);
    if (status) { status.textContent = '✓ Saved'; setTimeout(() => { if (status) status.textContent = ''; }, 2000); }
  });

  document.getElementById('clear-notes')?.addEventListener('click', () => {
    if (confirm('Clear all notes?')) {
      if (area) area.value = '';
      localStorage.removeItem('ck3-agot-notes');
    }
  });

  if (checklistContainer) {
    const savedChecks = JSON.parse(localStorage.getItem('ck3-agot-checklist') || '{}');

    checklistContainer.innerHTML = EARLY_GAME_TASKS.map((task, i) => `
      <div class="checklist-item ${savedChecks[i] ? 'checked' : ''}" data-index="${i}">
        <input type="checkbox" ${savedChecks[i] ? 'checked' : ''} />
        <span>${task}</span>
      </div>
    `).join('');

    checklistContainer.querySelectorAll('.checklist-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const cb = item.querySelector('input');
        if (e.target !== cb) cb.checked = !cb.checked;
        item.classList.toggle('checked', cb.checked);

        const checks = {};
        checklistContainer.querySelectorAll('.checklist-item').forEach((it, idx) => {
          checks[idx] = it.querySelector('input').checked;
        });
        localStorage.setItem('ck3-agot-checklist', JSON.stringify(checks));
      });
    });
  }
}
