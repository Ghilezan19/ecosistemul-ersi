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
    'Negru': '#333333',
    'Gri': '#808080',
    'Rosu': '#E74C3C',
    'Albastru': '#3498DB',
    'Inox': '#B0B0B0',
};

const CURRENT_VERSION = 'v10';

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
    { id: 1, name: 'Frigider LG No Frost 375L', link: 'https://www.emag.ro/combina-frigorifica-lg-no-frost-375-l-wi-fi-compresor-smart-inverter-fresh-converter-argintiu-cls-c-gbbs322cpy/pd/DZ7L783BM/', color: 'Argintiu', energyClass: 'C', price: 2899.99 },
    { id: 2, name: 'Masina de spalat rufe Samsung 10 kg, 1400 RPM', link: 'https://www.emag.ro/masina-de-spalat-rufe-samsung-10-kg-1400-rpm-clasa-a-ai-control-ai-wash-autodose-ai-energy-mode-ai-ecobubble-motor-digital-inverter-neagra-ww10fg6u94lbu4/pd/DXH0Y13BM/', color: 'Negru', energyClass: 'A', price: 2399.99 },
    { id: 3, name: 'Masina de spalat vase incorporabila Bosch 14 seturi', link: 'https://www.emag.ro/masina-de-spalat-vase-incorporabila-bosch-14-seturi-6-programe-extradry-variohinge-ecosilence-drive-tab-count-status-light-home-connect-60-cm-clasa-a-sbh4ecx28e/pd/D8PMY5YBM/', color: 'Incorporabil', energyClass: 'A', price: 2899.99 },
    { id: 4, name: 'Cuptor incorporabil Bosch 71 L', link: 'https://www.emag.ro/cuptor-incorporabil-bosch-71-l-electric-multifunctional-grill-soft-close-air-fry-10-functii-autopilot30-suport-telescopic-3d-hotair-autocuratare-pirolitica-hidrolitica-clasa-a-negru-hbg578eb3/pd/DFXMY5YBM/', color: 'Negru', energyClass: 'A+', price: 3149.99 },
    { id: 5, name: 'Plita incorporabila inductie Bosch 60 cm', link: 'https://www.emag.ro/plita-incorporabila-bosch-inductie-4-zone-de-gatit-touchselect-powerboost-restart-temporizator-60-cm-negru-pue611bb6e/pd/DKB99FMBM/', color: 'Negru', energyClass: '', price: 2099.99 },
    { id: 6, name: 'Aspirator Robot Roborock Q10 S5+ 10000 Pa', link: 'https://www.emag.ro/aspirator-robot-roborock-q10-s5-set-10000-pa-sistem-de-taiere-vibrarise-2-0-dublu-sistem-anti-incalcira-evitarea-obstacolelor-navigatie-precisense-lidar-control-prin-app-negru-emag-q10s5plus5-p1-n/pd/DQ9SZ32BM/?ref=fam#Negru-gri', color: 'Negru gri', energyClass: '', price: 1499.99 },
];

let data = JSON.parse(JSON.stringify(DEFAULT_PROTECTED_DATA));

let editingIndex = -1;
let nextId = 7;

// ── Load data from GitHub (live for everyone) ──
async function loadData() {
    try {
        // Fetch latest data from GitHub with cache-busting
        const resp = await fetch(RAW_URL + '?t=' + Date.now());
        if (resp.ok) {
            data = await resp.json();
            nextId = Math.max(...data.map(d => d.id), 0) + 1;
            console.log('✅ Date încărcate de pe GitHub');
            return;
        }
    } catch (e) {
        console.warn('⚠️ Nu am putut încărca de pe GitHub, folosesc datele locale');
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

// ── Get color dot ──
function getColorDot(color) {
    if (!color) return '';
    const dotColor = COLOR_MAP[color] || '#888';
    return `<span class="color-dot" style="background:${dotColor}"></span>`;
}

// ── Get energy class badge ──
function getClassBadge(cls) {
    if (!cls) return '<span style="color: var(--text-muted); font-style: italic; font-size: 0.85rem;">—</span>';
    if (cls.toLowerCase() === 'n/a') return `<span class="class-badge class-na">${cls}</span>`;
    
    const classLetter = cls.replace(/\+/g, '').toLowerCase();
    let cssClass = 'class-c';
    if (classLetter === 'a') cssClass = 'class-a';
    else if (classLetter === 'b') cssClass = 'class-b';
    else if (classLetter === 'c') cssClass = 'class-c';
    else if (classLetter === 'd') cssClass = 'class-d';
    else if (classLetter === 'e') cssClass = 'class-e';
    else if (classLetter === 'f') cssClass = 'class-f';
    else if (classLetter === 'g') cssClass = 'class-g';
    return `<span class="class-badge ${cssClass}">${cls}</span>`;
}

// ── Format price ──
function formatPrice(price) {
    if (price === null || price === undefined || price === '' || isNaN(price)) {
        return '<span class="price-empty">— adaugă —</span>';
    }
    return `<span class="price-filled">${Number(price).toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} RON</span>`;
}

// ── Calculate total ──
function calculateTotal() {
    return data.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
}

// ── Count items with price ──
function countWithPrice() {
    return data.filter(item => item.price !== null && item.price !== '' && !isNaN(item.price)).length;
}

// ── Render table ──
function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-index', index);

        // Link cell
        let linkHTML = '<span class="empty">—</span>';
        if (item.link) {
            linkHTML = `<a href="${item.link}" target="_blank" rel="noopener">🔗 Vezi pe eMAG</a>`;
        }

        tr.innerHTML = `
            <td class="cell-nr" data-label="Nr.">${index + 1}</td>
            <td data-label="Electrocasnic">
                <div class="cell-name">
                    <span class="emoji">${getEmoji(item.name)}</span>
                    <span class="name-text">${item.name}</span>
                </div>
            </td>
            <td class="cell-link" data-label="Link">${linkHTML}</td>
            <td class="cell-color" data-label="Culoare">${getColorDot(item.color)} ${item.color || '<span style="color: var(--text-muted); font-style: italic; font-size: 0.85rem;">—</span>'}</td>
            <td class="cell-class" data-label="Clasă">${getClassBadge(item.energyClass)}</td>
            <td class="cell-price" data-label="Preț">${formatPrice(item.price)}</td>
            ${isAdmin ? `<td data-label="Acțiuni">
                <div class="cell-actions">
                    <button class="action-btn edit" onclick="editRow(${index})" title="Editează">✏️</button>
                    <button class="action-btn delete" onclick="deleteRow(${index})" title="Șterge">🗑️</button>
                </div>
            </td>` : ''}
        `;

        tbody.appendChild(tr);
    });

    updateStats();
    saveData();
}

// ── Update stats ──
function updateStats() {
    const total = calculateTotal();
    const completed = countWithPrice();

    document.getElementById('totalItems').textContent = data.length;
    document.getElementById('completedItems').textContent = completed;
    document.getElementById('totalPrice').textContent = total.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('totalAmount').textContent = total.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' RON';
}

// ── Edit Row ──
function editRow(index) {
    editingIndex = index;
    const item = data[index];

    document.getElementById('modalTitle').textContent = `Editează: ${item.name}`;
    document.getElementById('editName').value = item.name || '';
    document.getElementById('editLink').value = item.link || '';
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
        });
    } else {
        // Editing existing
        data[editingIndex].name = name;
        data[editingIndex].link = document.getElementById('editLink').value.trim();
        data[editingIndex].color = document.getElementById('editColor').value.trim();
        data[editingIndex].energyClass = document.getElementById('editClass').value;
        data[editingIndex].price = priceVal !== '' ? parseFloat(priceVal) : null;
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

    const row = document.querySelector(`tr[data-index="${index}"]`);
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
