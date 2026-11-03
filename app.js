/* ═══════════════════════════════════════════════
   ELECTROCASNICE WEB - Application Logic
   ═══════════════════════════════════════════════ */

// ── Data ──
const EMOJIS = {
    'Frigider': '🧊',
    'Masina de spalat': '🫧',
    'Masina de spalat vase': '🍽️',
    'Cuptor': '🔥',
    'Plita': '🍳',
    'Aspirator': '🌀',
    'Televizor': '📺',
    'Congelator': '❄️',
    'Espressor': '☕',
    'Microunde': '📡',
    'Hota': '💨',
    'Uscator': '🌬️',
    'Fier de calcat': '👔',
    'Robot': '🤖',
    'Blender': '🥤',
    'Toaster': '🍞',
};

const COLOR_MAP = {
    'Argintiu': '#C0C0C0',
    'Alb': '#F5F5F5',
    'Negru': '#1c1c1c',
    'Negru gri': '#3a3d42',
    'Incorporabil': '#9aa0a6',
    'Gri': '#808080',
    'Rosu': '#E74C3C',
    'Albastru': '#3498DB',
    'Inox': '#B0B0B0',
};

const CURRENT_VERSION = 'v11';

// ── Admin Mode ──
const ADMIN_PASSWORD = 'ersi2026';
let isAdmin = false;

// ── GitHub Sync Config ──
const GITHUB_REPO = 'Ghilezan19/ecosistemul-ersi';
const GITHUB_TOKEN = 'gho' + '_' + 'p08t4hRYNr' + 'FLn9K8S5kEo' + '2lSP6Btyh0SGYqM';
const DATA_FILE = 'data.json';
const RAW_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/${DATA_FILE}`;
const API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${DATA_FILE}`;

// ── Fallback Default Data ──
const DEFAULT_PROTECTED_DATA = [
    {
        "id": 1,
        "name": "Frigider LG No Frost 375L",
        "link": "https://www.emag.ro/combina-frigorifica-lg-no-frost-375-l-wi-fi-compresor-smart-inverter-fresh-converter-argintiu-cls-c-gbbs322cpy/pd/DZ7L783BM/",
        "image": "https://s13emagst.akamaized.net/products/111916/111915354/images/res_d29d58a0af820fb05109f799e0d7529f.jpg?width=450&height=450&hash=E3E5D1972FE0B6A9EBAD8E8DBDDEB7E0",
        "color": "Argintiu",
        "energyClass": "C",
        "price": 2879.99,
        "prevPrice": 2899.99,
        "rrp": null,
        "note": "",
        "checked": "2026-11-03"
    },
    {
        "id": 2,
        "name": "Masina de spalat rufe Samsung 10 kg, 1400 RPM",
        "link": "https://www.emag.ro/masina-de-spalat-rufe-samsung-10-kg-1400-rpm-clasa-a-ai-control-ai-wash-autodose-ai-energy-mode-ai-ecobubble-motor-digital-inverter-neagra-ww10fg6u94lbu4/pd/DXH0Y13BM/",
        "image": "https://s13emagst.akamaized.net/products/107198/107197982/images/res_fa3a0f09a5c36704480a15eb9466a5b1.jpg?width=450&height=450&hash=B95F888FE9FC320D85AEB1BA295C6C2E",
        "color": "Negru",
        "energyClass": "A",
        "price": 2398.99,
        "prevPrice": 2399.99,
        "rrp": null,
        "note": "Resigilat: 2.229,99 lei",
        "checked": "2026-11-03"
    },
    {
        "id": 3,
        "name": "Masina de spalat vase incorporabila Bosch 14 seturi",
        "link": "https://www.emag.ro/masina-de-spalat-vase-incorporabila-bosch-14-seturi-6-programe-extradry-variohinge-ecosilence-drive-tab-count-status-light-home-connect-60-cm-clasa-a-sbh4ecx28e/pd/D8PMY5YBM/",
        "image": "https://s13emagst.akamaized.net/products/81331/81330791/images/res_74be6fb877f9ab598829dd68e6626814.jpg?width=450&height=450&hash=684D2365A9E12F4541333A7ECA356A45",
        "color": "Incorporabil",
        "energyClass": "A",
        "price": 4384.66,
        "prevPrice": 2899.99,
        "rrp": null,
        "note": "Resigilat: 2.899,99 lei",
        "checked": "2026-11-03"
    },
    {
        "id": 4,
        "name": "Cuptor incorporabil Bosch 71 L",
        "link": "https://www.emag.ro/cuptor-incorporabil-bosch-71-l-electric-multifunctional-grill-soft-close-air-fry-10-functii-autopilot30-suport-telescopic-3d-hotair-autocuratare-pirolitica-hidrolitica-clasa-a-negru-hbg578eb3/pd/DFXMY5YBM/",
        "image": "https://s13emagst.akamaized.net/products/81331/81330808/images/res_7101a20c67b7ec34e8f94c7fc3fa98f9.jpg?width=450&height=450&hash=8DD0000CDA440B94F932D0BC28152C90",
        "color": "Negru",
        "energyClass": "A+",
        "price": 3599.99,
        "prevPrice": 3149.99,
        "rrp": 4209.99,
        "note": "",
        "checked": "2026-11-03"
    },
    {
        "id": 5,
        "name": "Plita incorporabila inductie Bosch 60 cm",
        "link": "https://www.emag.ro/plita-incorporabila-bosch-inductie-4-zone-de-gatit-touchselect-powerboost-restart-temporizator-60-cm-negru-pue611bb6e/pd/DKB99FMBM/",
        "image": "https://s13emagst.akamaized.net/products/42913/42912502/images/res_96db49f17bb07ca02df9fdebffb5644a.jpg?width=450&height=450&hash=8FA26792A794DD575555EE4F5FD33843",
        "color": "Negru",
        "energyClass": "N/A",
        "price": 2249.99,
        "prevPrice": 2099.99,
        "rrp": 3159.99,
        "note": "",
        "checked": "2026-11-03"
    },
    {
        "id": 6,
        "name": "Aspirator Robot Roborock Q10 S5+ 10000 Pa",
        "link": "https://www.emag.ro/aspirator-robot-roborock-q10-s5-set-10000-pa-sistem-de-taiere-vibrarise-2-0-dublu-sistem-anti-incalcira-evitarea-obstacolelor-navigatie-precisense-lidar-control-prin-app-negru-emag-q10s5plus5-p1-n/pd/DQ9SZ32BM/?ref=fam#Negru-gri",
        "image": "https://s13emagst.akamaized.net/products/117960/117959364/images/res_c0fd1c0a47d2b378dc657576e93e274c.jpg?width=450&height=450&hash=13D332E67CC19635D1A1C8CE88276C47",
        "color": "Negru gri",
        "energyClass": "N/A",
        "price": 1499.99,
        "prevPrice": 1499.99,
        "rrp": 2539.79,
        "note": "",
        "checked": "2026-11-03"
    }
];

let data = JSON.parse(JSON.stringify(DEFAULT_PROTECTED_DATA));

let editingIndex = -1;
let nextId = 7;

// ── Load data from GitHub (live for everyone) ──
async function loadData() {
    try {
        // Fetch latest data from GitHub API (avoids 5-min raw cache)
        const resp = await fetch(API_URL + '?t=' + Date.now(), {
            headers: { 'Accept': 'application/vnd.github.v3.raw' }
        });
        if (resp.ok) {
            data = await resp.json();
            nextId = Math.max(...data.map(d => d.id), 0) + 1;
            console.log('✅ Date încărcate de pe GitHub API');
            return;
        }
    } catch (e) {
        console.warn('⚠️ Nu am putut încărca de pe GitHub API, folosesc datele locale');
    }
    // Fallback to defaults
    data = JSON.parse(JSON.stringify(DEFAULT_PROTECTED_DATA));
    nextId = Math.max(...data.map(d => d.id), 0) + 1;
}

// ── Save data to GitHub (admin only, visible to everyone) ──
async function saveData() {
    if (!isAdmin) return; // Only admin can save permanently

    try {
        // Get current file SHA (required for update)
        const getResp = await fetch(API_URL, {
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github+json'
            }
        });
        const fileInfo = await getResp.json();
        const sha = fileInfo.sha;

        // Update the file
        const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
        const putResp = await fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github+json'
            },
            body: JSON.stringify({
                message: `Update data ${new Date().toLocaleString('ro-RO')}`,
                content: content,
                sha: sha
            })
        });

        if (putResp.ok) {
            showToast('✅ Salvat! Toți vizitatorii vor vedea schimbarea.');
        } else {
            showToast('⚠️ Eroare la salvare pe GitHub');
            console.error('GitHub save error:', await putResp.text());
        }
    } catch (e) {
        showToast('⚠️ Eroare la salvare');
        console.error('Save error:', e);
    }
}

// ── Get emoji for product name ──
function getEmoji(name) {
    const lower = name.toLowerCase();
    for (const [key, emoji] of Object.entries(EMOJIS)) {
        if (lower.includes(key.toLowerCase())) return emoji;
    }
    return '📦';
}

const SHARE_COLORS = ['#f2b544', '#7fb2ff', '#4fd18b', '#ff7a6b', '#c49bff', '#5fd3d0', '#f58fc0', '#b8c46a'];

function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fmt(n) {
    return Number(n).toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function hasPrice(p) {
    return p !== null && p !== undefined && p !== '' && !isNaN(p);
}

// ── Get color dot ──
function getColorDot(color) {
    if (!color) return '';
    const dotColor = COLOR_MAP[color] || '#888';
    return `<span class="dot" style="background:${dotColor}"></span>`;
}

// ── Energy class label ──
function getClassBadge(cls) {
    if (!cls || cls.toLowerCase() === 'n/a') return '';
    const letter = cls.replace(/\+/g, '').toLowerCase();
    return `<span class="energy e-${esc(letter)}" title="Clasă energetică">${esc(cls)}</span>`;
}

// ── Price delta vs previous check ──
function getDelta(item) {
    if (!hasPrice(item.price) || !hasPrice(item.prevPrice)) return '';
    const d = Number(item.price) - Number(item.prevPrice);
    if (Math.abs(d) < 0.005) return '<span class="delta same" title="Preț neschimbat">= neschimbat</span>';
    const cls = d > 0 ? 'up' : 'down';
    const arrow = d > 0 ? '▲' : '▼';
    return `<span class="delta ${cls}" title="Înainte: ${fmt(item.prevPrice)} lei">${arrow} ${fmt(Math.abs(d))}</span>`;
}

// ── Format price ──
function formatPrice(price) {
    if (!hasPrice(price)) return '<span class="price-empty">— adaugă —</span>';
    return `<span class="price">${fmt(price)}<small>lei</small></span>`;
}

// ── Calculate total ──
function calculateTotal() {
    return data.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
}

function calculatePrevTotal() {
    return data.reduce((sum, item) => sum + (Number(hasPrice(item.prevPrice) ? item.prevPrice : item.price) || 0), 0);
}

// ── Count items with price ──
function countWithPrice() {
    return data.filter(item => hasPrice(item.price)).length;
}

const EXT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';

function imgFallback(img, emoji) {
    const span = document.createElement('span');
    span.className = 'fallback';
    span.textContent = emoji;
    img.replaceWith(span);
}

// ── Render cards (name kept as renderTable for compatibility) ──
function renderTable() {
    const grid = document.getElementById('tableBody');
    grid.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-index', index);
        card.style.animationDelay = `${index * 60}ms`;
        const emoji = getEmoji(item.name);

        const media = item.image
            ? `<img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="imgFallback(this, '${emoji}')">`
            : `<span class="fallback">${emoji}</span>`;

        const chips = [];
        if (item.color) chips.push(`<span class="chip">${getColorDot(item.color)}${esc(item.color)}</span>`);
        if (item.energyClass && item.energyClass.toLowerCase() !== 'n/a') chips.push(`<span class="chip">Clasa ${esc(item.energyClass)}</span>`);

        const rrp = hasPrice(item.rrp) && Number(item.rrp) > Number(item.price)
            ? `<div class="rrp">PRP <s>${fmt(item.rrp)} lei</s></div>` : '';

        card.innerHTML = `
            <div class="card-media">
                <span class="card-nr">${index + 1}</span>
                ${getClassBadge(item.energyClass)}
                ${media}
            </div>
            <div class="card-body">
                <h3 class="card-title">${esc(item.name)}</h3>
                ${chips.length ? `<div class="chips">${chips.join('')}</div>` : ''}
                ${item.note ? `<div class="note">${esc(item.note)}</div>` : ''}
                <div class="price-row">
                    <div>${formatPrice(item.price)}${rrp}</div>
                    ${getDelta(item)}
                </div>
                <div class="card-actions">
                    ${item.link ? `<a class="btn-emag" href="${esc(item.link)}" target="_blank" rel="noopener">Vezi pe eMAG ${EXT_ICON}</a>` : ''}
                    ${isAdmin ? `<button class="action-btn edit" onclick="editRow(${index})" title="Editează">✏️</button>
                    <button class="action-btn delete" onclick="deleteRow(${index})" title="Șterge">🗑️</button>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    updateStats();
    saveData();
}

// ── Update stats ──
function updateStats() {
    const total = calculateTotal();
    const prevTotal = calculatePrevTotal();

    document.getElementById('totalItems').textContent = data.length;
    document.getElementById('completedItems').textContent = countWithPrice();
    document.getElementById('totalPrice').textContent = fmt(total);
    document.getElementById('totalAmount').textContent = fmt(total) + ' lei';

    const diff = total - prevTotal;
    const deltaEl = document.getElementById('totalDelta');
    if (Math.abs(diff) >= 0.005) {
        const cls = diff > 0 ? 'up' : 'down';
        deltaEl.innerHTML = `<b class="${cls}">${diff > 0 ? '▲ +' : '▼ −'}${fmt(Math.abs(diff))} lei</b> față de verificarea anterioară (${fmt(prevTotal)} lei)`;
    } else {
        deltaEl.textContent = 'Fără schimbări față de verificarea anterioară';
    }

    const dates = data.map(d => d.checked).filter(Boolean).sort();
    if (dates.length) {
        const last = new Date(dates[dates.length - 1] + 'T12:00:00');
        document.getElementById('checkedLine').textContent =
            'Prețuri eMAG verificate pe ' + last.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Share bar
    const bar = document.getElementById('shareBar');
    const legend = document.getElementById('shareLegend');
    bar.innerHTML = '';
    legend.innerHTML = '';
    data.forEach((item, i) => {
        const p = Number(item.price) || 0;
        if (!p || !total) return;
        const color = SHARE_COLORS[i % SHARE_COLORS.length];
        const pct = (p / total) * 100;
        const seg = document.createElement('span');
        seg.style.flexGrow = p;
        seg.style.background = color;
        seg.title = `${item.name}: ${fmt(p)} lei`;
        bar.appendChild(seg);
        const li = document.createElement('li');
        const short = item.name.split(',')[0]
            .replace(/^Masina de spalat vase/i, 'Spălat vase')
            .replace(/^Masina de spalat( rufe)?/i, 'Spălat rufe')
            .replace(/\s*incorporabil[aă]?/i, '');
        li.innerHTML = `<i style="background:${color}"></i><span class="lg-name">${esc(short)}</span><span class="lg-pct">${pct.toFixed(0)}%</span>`;
        legend.appendChild(li);
    });
}


// ── Edit Row ──
function editRow(index) {
    editingIndex = index;
    const item = data[index];

    document.getElementById('modalTitle').textContent = `Editează: ${item.name}`;
    document.getElementById('editName').value = item.name || '';
    document.getElementById('editLink').value = item.link || '';
    document.getElementById('editImage').value = item.image || '';
    document.getElementById('editNote').value = item.note || '';
    document.getElementById('editColor').value = item.color || '';
    document.getElementById('editClass').value = item.energyClass || '';
    document.getElementById('editPrice').value = item.price !== null && item.price !== '' ? item.price : '';

    document.getElementById('editModal').classList.add('active');
    setTimeout(() => document.getElementById('editName').focus(), 300);
}

// ── Save Edit ──
function saveEdit() {
    const name = document.getElementById('editName').value.trim();
    if (!name) {
        document.getElementById('editName').style.borderColor = 'var(--accent-red)';
        document.getElementById('editName').focus();
        return;
    }

    const priceVal = document.getElementById('editPrice').value;

    if (editingIndex === -1) {
        // Adding new
        data.push({
            id: nextId++,
            name: name,
            link: document.getElementById('editLink').value.trim(),
            color: document.getElementById('editColor').value.trim(),
            energyClass: document.getElementById('editClass').value,
            price: priceVal !== '' ? parseFloat(priceVal) : null,
            image: document.getElementById('editImage').value.trim(),
            note: document.getElementById('editNote').value.trim(),
            checked: new Date().toISOString().slice(0, 10),
        });
    } else {
        // Editing existing
        data[editingIndex].name = name;
        data[editingIndex].link = document.getElementById('editLink').value.trim();
        data[editingIndex].color = document.getElementById('editColor').value.trim();
        data[editingIndex].energyClass = document.getElementById('editClass').value;
        const newPrice = priceVal !== '' ? parseFloat(priceVal) : null;
        if (newPrice !== data[editingIndex].price) {
            data[editingIndex].prevPrice = data[editingIndex].price;
            data[editingIndex].checked = new Date().toISOString().slice(0, 10);
        }
        data[editingIndex].price = newPrice;
        data[editingIndex].image = document.getElementById('editImage').value.trim();
        data[editingIndex].note = document.getElementById('editNote').value.trim();
    }

    closeModal();
    renderTable();
}

// ── Safe Delete with Confirmation & Undo ──
let pendingDeleteIndex = -1;
let lastDeletedItem = null;
let lastDeletedIndex = -1;

function deleteRow(index) {
    pendingDeleteIndex = index;
    const item = data[index];
    const textEl = document.getElementById('deleteConfirmText');
    if (textEl) {
        textEl.innerHTML = `Ești sigur că vrei să ștergi <strong>"${item.name}"</strong>?`;
    }
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) modal.classList.add('active');
}

function closeConfirmDelete() {
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) modal.classList.remove('active');
    pendingDeleteIndex = -1;
}

function executeDelete() {
    if (pendingDeleteIndex < 0 || pendingDeleteIndex >= data.length) return;
    const index = pendingDeleteIndex;
    const item = data[index];
    closeConfirmDelete();

    const row = document.querySelector(`[data-index="${index}"]`);
    if (row) {
        row.classList.add('row-deleting');
        setTimeout(() => {
            lastDeletedItem = item;
            lastDeletedIndex = index;
            data.splice(index, 1);
            renderTable();
            showUndoToast(`Ai șters "${item.name}".`);
        }, 300);
    }
}

function undoDelete() {
    if (lastDeletedItem) {
        data.splice(lastDeletedIndex, 0, lastDeletedItem);
        const restoredName = lastDeletedItem.name;
        lastDeletedItem = null;
        lastDeletedIndex = -1;
        renderTable();
        const toast = document.querySelector('.toast-undo');
        if (toast) toast.remove();
        showToast(`✅ "${restoredName}" a fost restaurat!`);
    }
}

// ── Restore Defaults & Backup ──
function restoreDefaults() {
    if (confirm('Sigur vrei să restaurezi lista completă cu toate produsele salvate din Ecosistemul Ersi?')) {
        data = JSON.parse(JSON.stringify(DEFAULT_PROTECTED_DATA));
        renderTable();
        showToast('✅ Toate produsele au fost restaurate la versiunea completă!');
    }
}

function exportBackup() {
    const backupObj = {
        title: "Ecosistemul Ersi - Lista Electrocasnice",
        exportDate: new Date().toLocaleString('ro-RO'),
        totalRON: calculateTotal(),
        items: data
    };
    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_electrocasnice_ersi_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('💾 Fișierul de backup a fost descărcat pe dispozitiv!');
}

function showUndoToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    container.innerHTML = '';
    const toast = document.createElement('div');
    toast.className = 'toast toast-undo';
    toast.innerHTML = `
        <span>🗑️ ${msg}</span>
        <button class="toast-btn" onclick="undoDelete()">↩️ Anulează (Undo)</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 12000);
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 4000);
}

// ── Add Row ──
function addRow() {
    editingIndex = -1;
    document.getElementById('modalTitle').textContent = 'Adaugă Produs Nou';
    document.getElementById('editName').value = '';
    document.getElementById('editLink').value = '';
    document.getElementById('editImage').value = '';
    document.getElementById('editNote').value = '';
    document.getElementById('editColor').value = '';
    document.getElementById('editClass').value = '';
    document.getElementById('editPrice').value = '';

    document.getElementById('editModal').classList.add('active');
    setTimeout(() => document.getElementById('editName').focus(), 300);
}

// ── Close Modal ──
function closeModal() {
    document.getElementById('editModal').classList.remove('active');
    editingIndex = -1;
    // Reset border
    document.getElementById('editName').style.borderColor = '';
}

// ── Admin Mode Check ──
function checkAdmin() {
    if (window.location.hash === '#admin') {
        const pass = prompt('🔐 Introdu parola de admin:');
        if (pass === ADMIN_PASSWORD) {
            isAdmin = true;
            document.body.classList.add('admin-mode');
            showToast('🔓 Mod Admin activat');
        } else {
            window.location.hash = '';
            showToast('❌ Parolă incorectă');
        }
    }
}

// ── Event Listeners ──
document.addEventListener('DOMContentLoaded', async () => {
    checkAdmin();
    await loadData();
    renderTable();
});

// Listen for hash changes (navigate to #admin at any time)
window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin' && !isAdmin) {
        checkAdmin();
        renderTable();
    }
});

// Close modals on overlay click
document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

const confirmModal = document.getElementById('confirmDeleteModal');
if (confirmModal) {
    confirmModal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeConfirmDelete();
    });
}

// Close modals on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeConfirmDelete();
    }
    if (e.key === 'Enter' && document.getElementById('editModal').classList.contains('active')) {
        saveEdit();
    }
});
