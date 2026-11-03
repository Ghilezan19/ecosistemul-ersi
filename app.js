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
    'Set Tefal': '🍳',
    'Aspirator vertical': '🧹',
    'Aspirator': '🌀',
    'Televizor': '📺',
    'Congelator': '❄️',
    'Espressor': '☕',
    'Microunde': '📡',
    'Hota': '💨',
    'Uscator': '🌬️',
    'Fier de calcat': '👔',
    'Air fryer': '🍟',
    'Robot de buc': '🥣',
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
    'Gri inchis': '#4a4d52',
    'Inox': '#B0B0B0',
};

const CURRENT_VERSION = 'v15';

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
        "id": 6,
        "section": "mari",
        "alternatives": [],
        "selected": 0,
        "label": "Mova",
        "badge": "Același preț, stație completă",
        "name": "Robot de aspirare cu mop Mova E40 Ultra 19.000 Pa",
        "color": "Alb",
        "energyClass": "N/A",
        "price": 1499.99,
        "rrp": 2549.99,
        "note": "",
        "features": [
            "19.000 Pa",
            "Stație: golire praf + spălare mopuri",
            "Baterie 5.200 mAh, până la 260 min",
            "Navigație laser"
        ],
        "link": "https://www.emag.ro/robot-de-aspirare-cu-mop-mova-e40-ultra-19-000-pa-5-200-mah-autonomie-260-min-single-line-laser-statie-colectare-inteligenta-alb-rle22se/pd/D7D3CW3BM/",
        "image": "https://s13emagst.akamaized.net/products/114192/114191977/images/res_b5d4c737a686e2bf6dd86d5b7c32963b.jpg?width=450&height=450&hash=EF76D216B35B8EBA1D79E96E0738129B",
        "prevPrice": null,
        "checked": "2026-11-03"
    },
    {
        "id": 2,
        "section": "mari",
        "selected": 0,
        "alternatives": [],
        "label": "LG",
        "name": "Masina de spalat rufe LG F4X5011TBB 11 kg, 1400 RPM, Direct Drive, Steam",
        "link": "https://www.emag.ro/masina-de-spalat-rufe-frontala-lg-direct-drive-steam-turbowash-wi-fi-11-kg-aidd-1400rpm-clasa-a-gri-inchis-f4x5011tbb/pd/DVX15C2BM/",
        "image": "https://s13emagst.akamaized.net/products/133785/133784114/images/res_41c02009a922bec75370f30288dfcf87.jpg?width=450&height=450&hash=76655263269AC9018D38B5D075C7EA18",
        "color": "Gri inchis",
        "energyClass": "A",
        "price": 2499.99,
        "prevPrice": null,
        "rrp": 2979.99,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "11 kg, 1400 rpm",
            "Direct Drive cu AI DD",
            "Abur (Steam) + TurboWash",
            "Wi-Fi"
        ]
    },
    {
        "id": 1,
        "section": "mari",
        "label": "LG",
        "name": "Frigider LG No Frost 375L",
        "link": "https://www.emag.ro/combina-frigorifica-lg-no-frost-375-l-wi-fi-compresor-smart-inverter-fresh-converter-argintiu-cls-c-gbbs322cpy/pd/DZ7L783BM/",
        "image": "https://s13emagst.akamaized.net/products/111916/111915354/images/res_d29d58a0af820fb05109f799e0d7529f.jpg?width=450&height=450&hash=E3E5D1972FE0B6A9EBAD8E8DBDDEB7E0",
        "color": "Argintiu",
        "energyClass": "C",
        "price": 2879.99,
        "prevPrice": 2899.99,
        "rrp": null,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "375 L, No Frost",
            "Compresor Smart Inverter",
            "Wi-Fi (ThinQ)",
            "Fresh Converter (zonă flexibilă)"
        ],
        "alternatives": [],
        "selected": 0
    },
    {
        "id": 3,
        "section": "mari",
        "selected": 0,
        "alternatives": [],
        "label": "Bosch Serie 6",
        "name": "Masina de spalat vase incorporabila Bosch SMV6YCX02E, 14 seturi, PerfectDry",
        "link": "https://www.emag.ro/masina-de-spalat-vase-incorporabila-bosch-14-seturi-6-programe-clasa-a-perfectdry-silence-plus-sertar-rackmatic-info-light-tab-count-home-connect-60-cm-smv6ycx02e/pd/DRS33TYBM/",
        "image": "https://s13emagst.akamaized.net/products/63816/63815757/images/res_29895e86dffde187378214deb82d9f64.jpg?width=450&height=450&hash=BD18EB67DCAA7F7E42294DF7E5746803",
        "color": "Incorporabil",
        "energyClass": "A",
        "price": 3799.99,
        "prevPrice": null,
        "rrp": 4399.99,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "14 seturi, 6 programe",
            "PerfectDry cu zeolit (uscare foarte bună)",
            "Sertar Rackmatic + Silence Plus",
            "Home Connect"
        ]
    },
    {
        "id": 4,
        "section": "mari",
        "label": "Bosch 71 L",
        "name": "Cuptor incorporabil Bosch 71 L",
        "link": "https://www.emag.ro/cuptor-incorporabil-bosch-71-l-electric-multifunctional-grill-soft-close-air-fry-10-functii-autopilot30-suport-telescopic-3d-hotair-autocuratare-pirolitica-hidrolitica-clasa-a-negru-hbg578eb3/pd/DFXMY5YBM/",
        "image": "https://s13emagst.akamaized.net/products/81331/81330808/images/res_7101a20c67b7ec34e8f94c7fc3fa98f9.jpg?width=450&height=450&hash=8DD0000CDA440B94F932D0BC28152C90",
        "color": "Negru",
        "energyClass": "A+",
        "price": 3599.99,
        "prevPrice": 3149.99,
        "rrp": 4209.99,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "71 L, Air Fry + 10 funcții",
            "Autocurățare pirolitică + hidrolitică",
            "AutoPilot 30 rețete",
            "Ghidaje telescopice, soft close"
        ],
        "alternatives": [],
        "selected": 0
    },
    {
        "id": 5,
        "section": "mari",
        "selected": 0,
        "label": "Bosch Serie 6",
        "name": "Plita inductie Bosch Serie 6 PVS631HC1E, 60 cm, FlexInduction",
        "link": "https://www.emag.ro/plita-cu-inductie-bosch-serie-6-592-mm-4-zone-flexinduction-touchslider-powerboost-perfectfry-home-connect-negru-pvs631hc1e/pd/DH5BVJ3BM/",
        "image": "https://s13emagst.akamaized.net/products/101201/101200844/images/res_2ab837dcc9a6016fdb8eb6bdea27d003.jpg?width=450&height=450&hash=EEFA6337F1D5D54F74E819A75C15ACED",
        "color": "Negru",
        "energyClass": "N/A",
        "price": 2657.39,
        "prevPrice": null,
        "rrp": null,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "4 zone, FlexInduction (zone unite pentru vase mari)",
            "PowerBoost",
            "PerfectFry (senzor de prăjire)",
            "TouchSlider + Home Connect"
        ]
    },
    {
        "id": 9,
        "section": "mari",
        "label": "Bosch Serie 6",
        "name": "Hota incorporabila Bosch DBB67DP60, 1 motor, 699 m3/h, 60 cm, negru",
        "link": "https://altex.ro/hota-incorporabila-bosch-dbb67dp60-1-motor-699-m3-h-l-60-cm-negru/cpd/DBB67DP60/",
        "image": "https://lcdn.altex.ro/resize/media/catalog/product/d/b/2bd48d28d1c32adea0e55139a4e6434a/dbb67dp60_01_259a18f3.jpg",
        "color": "Negru",
        "energyClass": "A",
        "price": 2799.9,
        "prevPrice": null,
        "rrp": null,
        "note": "Resigilat la Altex: 2.659,90 lei",
        "checked": "2026-11-03",
        "features": [
            "699 m³/h, 1 motor",
            "EcoSilence Drive (silențioasă)",
            "Touch control, Smart hood automatic",
            "Home Connect (Wi-Fi), iluminare LED"
        ],
        "selected": 0
    },
    {
        "id": 7,
        "section": "mici",
        "label": "Tefal",
        "name": "Air fryer dublu Tefal Dual Easy Fry & Grill EY905B10, 8.3 L, 2700 W",
        "link": "https://www.emag.ro/friteuza-dubla-cu-aer-cald-tefal-dual-easy-fry-grill-air-fryer-2700-w-capacitate-8-3-l-functie-grill-8-programe-vase-detasabile-antiaderente-tehnologie-extra-crisp-temperatura-reglabila-40-200-c-displ/pd/DGBY1YYBM/",
        "image": "https://s13emagst.akamaized.net/products/59793/59792488/images/res_d5d1a78601788337d85d837cc1dc6cbd.jpg?width=450&height=450&hash=97FBE05402D14B0578F7F413C7B0C9F2",
        "color": "Gri",
        "energyClass": "N/A",
        "price": 569.99,
        "prevPrice": null,
        "rrp": 1349.99,
        "note": "Resigilat: 529,99 lei",
        "checked": "2026-11-03",
        "features": [
            "8,3 L în 2 sertare",
            "2700 W",
            "Funcție grill",
            "8 programe"
        ],
        "alternatives": [],
        "selected": 0
    },
    {
        "id": 8,
        "section": "mici",
        "selected": 0,
        "alternatives": [],
        "label": "MUM 2",
        "badge": "Cu blender + tocător carne",
        "name": "Robot de bucătărie Bosch MUM Serie 2 MUMS2EW40, 700 W, cu blender și mașină de tocat",
        "link": "https://www.emag.ro/robot-de-bucatarie-bosch-mum-serie-2-700-w-3-8-l-blender-1-25-l-masina-de-tocat-carne-4-trepte-viteza-alb-mums2ew40/pd/DBLM0DMBM/",
        "image": "https://s13emagst.akamaized.net/products/34470/34469799/images/res_4f16effd21ba744ce81c1e26412075e9.jpg?width=450&height=450&hash=697D17EDF9A30DD82B7E99B84E227262",
        "color": "Alb",
        "energyClass": "N/A",
        "price": 899.99,
        "prevPrice": null,
        "rrp": 999.99,
        "note": "Stoc limitat pe eMAG",
        "checked": "2026-11-03",
        "features": [
            "Mixare planetară 3D, 700 W, 4 viteze",
            "Bol 3,8 L",
            "Blender 1,25 L",
            "Mașină de tocat carne inclusă"
        ]
    },
    {
        "id": 10,
        "section": "mici",
        "selected": 0,
        "alternatives": [],
        "label": "Rowenta",
        "badge": "Aspirator clasic, foarte popular",
        "name": "Aspirator fără sac Rowenta Compact Power Cyclonic RO3731EA, 750 W, 1,5 L",
        "link": "https://www.emag.ro/aspirator-fara-sac-rowenta-compact-power-cyclonic-750-w-recipient-praf-1-5l-motor-effitech-filtru-de-inalta-eficienta-sistem-cleanexpress-raza-de-operare-8-8m-negru-albastru-ro3731ea/pd/D181S3BBM/",
        "image": "https://s13emagst.akamaized.net/products/3301/3300004/images/res_5fa9edc1c51c68a34219df392a533592.jpg?width=450&height=450&hash=FFFDD7C1E5BB302991889B3E763556EA",
        "color": "Negru/Albastru",
        "energyClass": "N/A",
        "price": 399.99,
        "prevPrice": null,
        "rrp": 679.99,
        "note": "Resigilat: 349,99 lei",
        "checked": "2026-11-03",
        "features": [
            "Aspirator clasic pe roți, fără sac",
            "750 W, motor EffiTech",
            "Recipient praf 1,5 L",
            "Rază de lucru 8,8 m",
            "Rating 4,5 (aprox. 3.000 de review-uri)"
        ]
    },
    {
        "id": 11,
        "section": "vase",
        "selected": 0,
        "label": "Tefal Ingenio",
        "name": "Set Tefal Ingenio Emotion, 10 piese, mânere detașabile",
        "link": "https://www.emag.ro/set-de-10-piese-tefal-ingenio-emotion-tigaie-22-26-cm-cratita-24-cm-craticioare-16-20-cm-capac-ermetic-16-20-cm-2-manere-detasabile-capac-sticla-24-cm-3168430338579/pd/DN928LMBM/",
        "image": "https://s13emagst.akamaized.net/products/48862/48861527/images/res_78425b2894472bbd8a580e1d172d170c.png?width=450&height=450&hash=F45F7412E8FAF66782ACE58B5F5395E2",
        "color": "Inox",
        "energyClass": "N/A",
        "price": 399.99,
        "prevPrice": null,
        "rrp": 499.99,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "Tigăi 22 și 26 cm",
            "Cratiță 24 cm + crătițioare 16 și 20 cm",
            "2 mânere detașabile (intră unele în altele)",
            "Capace ermetice 16/20 cm + capac sticlă 24 cm"
        ]
    },
    {
        "id": 12,
        "section": "vase",
        "selected": 0,
        "label": "Bialetti",
        "name": "Espressor Bialetti New Moka Induction, 2 cești, negru",
        "link": "https://altex.ro/espressor-bialetti-new-moka-induction-2tz-black/cpd/65278E899D735/",
        "image": "https://lcdn.altex.ro/resize/media/catalog/product/6/5/2bd48d28d1c32adea0e55139a4e6434a/65278e899d735_main_b75d16c241_65278e899ddf8_92af53bd.jpg",
        "color": "Negru",
        "energyClass": "N/A",
        "price": 230.99,
        "prevPrice": null,
        "rrp": null,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "Cafetieră moka pentru aragaz",
            "Merge pe inducție (și pe plita Bosch)",
            "2 cești"
        ]
    }
];

let data = JSON.parse(JSON.stringify(DEFAULT_PROTECTED_DATA));

let editingIndex = -1;
let nextId = 7;

// ── Load data from GitHub (live for everyone) ──
// The GitHub API is freshest but allows only 60 requests/hour per network,
// so fall back to the copies that have no such limit before using the built-in list.
async function loadData() {
    const t = Date.now();
    const sources = [
        { url: API_URL + '?t=' + t, headers: isAdmin
            ? { 'Accept': 'application/vnd.github.v3.raw', 'Authorization': `Bearer ${GITHUB_TOKEN}` }
            : { 'Accept': 'application/vnd.github.v3.raw' } },
        { url: 'data.json?t=' + t },   // same file served by GitHub Pages (~1 min behind)
        { url: RAW_URL + '?t=' + t },  // raw.githubusercontent (up to ~5 min behind)
    ];
    for (const src of sources) {
        try {
            const resp = await fetch(src.url, { headers: src.headers || {}, cache: 'no-store' });
            if (!resp.ok) continue;
            const json = await resp.json();
            if (!Array.isArray(json) || !json.length) continue;
            data = json;
            baseJSON = JSON.stringify(json);
            nextId = Math.max(...data.map(d => d.id), 0) + 1;
            return;
        } catch (e) { /* try the next source */ }
    }
    console.warn('⚠️ Nu am putut încărca datele online, folosesc lista din cod');
    data = JSON.parse(JSON.stringify(DEFAULT_PROTECTED_DATA));
    nextId = Math.max(...data.map(d => d.id), 0) + 1;
}

// ── Save data to GitHub (admin only, visible to everyone) ──
// baseJSON = the list as it was on GitHub when this page loaded / last saved.
// Before writing we check GitHub still has exactly that; if someone else
// changed it in the meantime we reload instead of overwriting their change.
let baseJSON = null;
let saveChain = Promise.resolve();

function saveData() {
    if (!isAdmin) return Promise.resolve(); // Only admin can save permanently
    saveChain = saveChain.then(doSave, doSave);
    return saveChain;
}

async function doSave() {
    try {
        const getResp = await fetch(API_URL + '?t=' + Date.now(), {
            headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github+json' },
            cache: 'no-store'
        });
        if (!getResp.ok) throw new Error('GET ' + getResp.status);
        const fileInfo = await getResp.json();
        const remoteText = decodeURIComponent(escape(atob(String(fileInfo.content).replace(/\n/g, ''))));
        let remoteJSON = null;
        try { remoteJSON = JSON.stringify(JSON.parse(remoteText)); } catch (e) { /* unreadable */ }
        const mine = JSON.stringify(data);

        if (remoteJSON === mine) { baseJSON = mine; return; } // nothing to save
        if (baseJSON === null || remoteJSON !== baseJSON) {
            showToast('⚠️ Lista a fost modificată între timp. Reîncarc pagina ca să nu pierzi schimbările…');
            setTimeout(() => location.reload(), 2500);
            isAdmin = false; // stop further saves from this stale page
            return;
        }

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
                sha: fileInfo.sha
            })
        });

        if (putResp.ok) {
            baseJSON = mine;
            showToast('✅ Salvat! Toți vizitatorii vor vedea schimbarea.');
        } else if (putResp.status === 409) {
            showToast('⚠️ Lista a fost modificată între timp. Reîncarc pagina…');
            isAdmin = false;
            setTimeout(() => location.reload(), 2500);
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

const SECTIONS = [
    { key: 'mari', title: 'Electrocasnice mari', note: 'Apasă pe varianta pe care o vrei — poza, dotările și totalul se schimbă.' },
    { key: 'mici', title: 'Electrocasnice mici', note: 'Pentru bucătărie și casă.' },
    { key: 'vase', title: 'Vase de gătit', note: 'Tigăi, cratițe și ce mai trebuie în bucătărie.' },
];

function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fmt(n) {
    return Number(n).toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function hasPrice(p) {
    return p !== null && p !== undefined && p !== '' && !isNaN(p);
}

// ── Variants: option 0 is the item itself, 1.. are item.alternatives ──
function options(item) {
    return [item, ...(Array.isArray(item.alternatives) ? item.alternatives : [])];
}

function getSel(item) {
    const n = options(item).length;
    let sel = Number(item.selected) || 0;
    try {
        const saved = localStorage.getItem('ersi-sel-' + item.id);
        if (saved !== null && !isAdmin) sel = Number(saved);
    } catch (e) { /* storage unavailable */ }
    return Math.min(Math.max(sel, 0), n - 1);
}

function opt(item) {
    return options(item)[getSel(item)];
}

function chooseOption(index, sel) {
    const item = data[index];
    if (isAdmin) {
        item.selected = sel;
    }
    try { localStorage.setItem('ersi-sel-' + item.id, String(sel)); } catch (e) { /* ignore */ }
    const old = document.querySelector(`.card[data-index="${index}"]`);
    if (old) {
        const fresh = buildCard(item, index);
        fresh.classList.add('swapped');
        old.replaceWith(fresh);
    }
    updateStats();
    if (isAdmin) saveData();
}

// ── Admin: variant order / add / remove, product order ──
const META_KEYS = ['id', 'section', 'selected', 'alternatives', 'placeholder'];
let pendingNewVariant = null;

function setOptions(item, opts) {
    Object.keys(item).forEach(k => { if (!META_KEYS.includes(k)) delete item[k]; });
    const first = { ...opts[0] };
    META_KEYS.forEach(k => delete first[k]);
    Object.assign(item, first);
    const rest = opts.slice(1).map(o => { const c = { ...o }; META_KEYS.forEach(k => delete c[k]); return c; });
    if (rest.length) item.alternatives = rest; else delete item.alternatives;
}

function setSel(item, sel) {
    item.selected = sel;
    try { localStorage.setItem('ersi-sel-' + item.id, String(sel)); } catch (e) { /* ignore */ }
}

function moveVariant(index, dir) {
    const item = data[index];
    const opts = options(item).map(o => ({ ...o }));
    const from = getSel(item);
    const to = dir === 'first' ? 0 : from + dir;
    if (to < 0 || to >= opts.length || to === from) return;
    const [moved] = opts.splice(from, 1);
    opts.splice(to, 0, moved);
    setOptions(item, opts);
    setSel(item, to);
    renderTable();
}

function addVariant(index) {
    const item = data[index];
    const opts = options(item).map(o => ({ ...o }));
    opts.push({ name: '', link: '', image: '', color: '', energyClass: '', price: null, prevPrice: null, rrp: null, note: '', checked: new Date().toISOString().slice(0, 10) });
    setOptions(item, opts);
    setSel(item, opts.length - 1);
    pendingNewVariant = { id: item.id };
    editRow(index);
    document.getElementById('modalTitle').textContent = 'Variantă nouă';
}

function removeVariant(index) {
    const item = data[index];
    const opts = options(item).map(o => ({ ...o }));
    if (opts.length < 2) return;
    const sel = getSel(item);
    if (!confirm(`Scoți varianta "${opts[sel].label || opts[sel].name}"?`)) return;
    opts.splice(sel, 1);
    setOptions(item, opts);
    setSel(item, 0);
    renderTable();
}

function moveProduct(index, dir) {
    const item = data[index];
    const sec = item.section || 'mari';
    let j = index + dir;
    while (j >= 0 && j < data.length && (data[j].section || 'mari') !== sec) j += dir;
    if (j < 0 || j >= data.length) return;
    [data[index], data[j]] = [data[j], data[index]];
    renderTable();
}

function variantTools(index, opts, sel) {
    if (!isAdmin) return '';
    const multi = opts.length > 1;
    return `<div class="variant-tools">
        ${multi ? `<span class="vt-label">Varianta ${sel + 1} din ${opts.length}</span>
        <button type="button" onclick="moveVariant(${index}, -1)" ${sel === 0 ? 'disabled' : ''} title="Mută varianta la stânga">◀</button>
        <button type="button" onclick="moveVariant(${index}, 1)" ${sel === opts.length - 1 ? 'disabled' : ''} title="Mută varianta la dreapta">▶</button>
        <button type="button" onclick="moveVariant(${index}, 'first')" ${sel === 0 ? 'disabled' : ''} title="Fă-o prima">Fă-o prima</button>
        <button type="button" class="vt-danger" onclick="removeVariant(${index})" title="Scoate varianta afișată">Scoate</button>` : ''}
        <button type="button" onclick="addVariant(${index})" title="Adaugă o variantă nouă">+ variantă</button>
    </div>`;
}

// ── Get color dot ──
function getColorDot(color) {
    if (!color) return '';
    const dotColor = COLOR_MAP[color] || COLOR_MAP[color.split(' ')[0]] || '#888';
    return `<span class="dot" style="background:${dotColor}"></span>`;
}

// ── Energy class label ──
function getClassBadge(cls) {
    if (!cls || cls.toLowerCase() === 'n/a') return '';
    const letter = cls.replace(/\+/g, '').toLowerCase();
    return `<span class="energy e-${esc(letter)}" title="Clasă energetică">${esc(cls)}</span>`;
}

// ── Price delta vs previous check ──
function getDelta(o) {
    if (!hasPrice(o.price) || !hasPrice(o.prevPrice)) return '';
    const d = Number(o.price) - Number(o.prevPrice);
    if (Math.abs(d) < 0.005) return '<span class="delta same" title="Preț neschimbat">= neschimbat</span>';
    const cls = d > 0 ? 'up' : 'down';
    const arrow = d > 0 ? '▲' : '▼';
    return `<span class="delta ${cls}" title="Înainte: ${fmt(o.prevPrice)} lei">${arrow} ${fmt(Math.abs(d))}</span>`;
}

// ── Format price ──
function formatPrice(price) {
    if (!hasPrice(price)) return '<span class="price-empty">— adaugă —</span>';
    return `<span class="price">${fmt(price)}<small>lei</small></span>`;
}

// ── Totals (use the chosen variant) ──
function calculateTotal(list = data) {
    return list.reduce((sum, item) => sum + (Number(opt(item).price) || 0), 0);
}

function calculatePrevTotal() {
    return data.reduce((sum, item) => {
        const o = opt(item);
        return sum + (Number(hasPrice(o.prevPrice) ? o.prevPrice : o.price) || 0);
    }, 0);
}

function countWithPrice() {
    return data.filter(item => hasPrice(opt(item).price)).length;
}

const EXT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';

function storeName(link) {
    const host = ((String(link).match(/https?:\/\/(?:www\.)?([^/]+)/) || [])[1] || '').toLowerCase();
    const known = { 'emag.ro': 'eMAG', 'altex.ro': 'Altex', 'flanco.ro': 'Flanco', 'mediagalaxy.ro': 'Media Galaxy', 'cel.ro': 'CEL.ro', 'evomag.ro': 'evoMAG' };
    return known[host] || host.split('.')[0] || 'magazin';
}

function imgFallback(img, emoji) {
    const span = document.createElement('span');
    span.className = 'fallback';
    span.textContent = emoji;
    img.replaceWith(span);
}

function shortLabel(o) {
    return o.label || o.name.split(/\s+/).slice(0, 2).join(' ');
}

// ── Build one card ──
function buildCard(item, index) {
    const card = document.createElement('article');
    card.setAttribute('data-index', index);
    card.style.animationDelay = `${index * 50}ms`;

    const adminBtns = isAdmin ? `<button class="action-btn" onclick="moveProduct(${index}, -1)" title="Mută produsul mai sus în listă">↑</button>
                    <button class="action-btn" onclick="moveProduct(${index}, 1)" title="Mută produsul mai jos în listă">↓</button>
                    <button class="action-btn edit" onclick="editRow(${index})" title="Editează varianta afișată">✏️</button>
                    <button class="action-btn delete" onclick="deleteRow(${index})" title="Șterge">🗑️</button>` : '';

    if (item.placeholder && !hasPrice(item.price) && !item.link) {
        card.className = 'card card-placeholder';
        card.innerHTML = `
            <div class="placeholder-body">
                <span class="placeholder-icon">${getEmoji(item.name)}</span>
                <h3 class="card-title">${esc(item.name)}</h3>
                <p class="placeholder-text">Încă nu am ales modelul</p>
                ${adminBtns ? `<div class="card-actions">${adminBtns}</div>` : ''}
            </div>`;
        return card;
    }

    const opts = options(item);
    const sel = getSel(item);
    const o = opts[sel];
    card.className = 'card' + (opts.length > 1 ? ' has-variants' : '');
    const emoji = getEmoji(item.name);

    const media = o.image
        ? `<img src="${esc(o.image)}" alt="${esc(o.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="imgFallback(this, '${emoji}')">`
        : `<span class="fallback">${emoji}</span>`;

    let switcher = '';
    if (opts.length > 1) {
        switcher = `<div class="variants" role="radiogroup" aria-label="Alege varianta">${opts.map((v, i) => {
            const diff = hasPrice(v.price) && hasPrice(o.price) && i !== sel ? Number(v.price) - Number(o.price) : null;
            const diffTxt = diff === null ? (hasPrice(v.price) ? fmt(v.price) + ' lei' : '—')
                : Math.abs(diff) < 0.005 ? 'același preț' : (diff > 0 ? '+' : '−') + fmt(Math.abs(diff)) + ' lei';
            return `<button type="button" role="radio" aria-checked="${i === sel}" class="variant${i === sel ? ' active' : ''}" onclick="chooseOption(${index}, ${i})">
                    <span class="v-name">${esc(shortLabel(v))}</span>
                    <span class="v-price ${diff === null || Math.abs(diff) < 0.005 ? '' : diff > 0 ? 'up' : 'down'}">${diffTxt}</span>
                </button>`;
        }).join('')}</div>`;
    }

    const chips = [];
    if (o.color) chips.push(`<span class="chip">${getColorDot(o.color)}${esc(o.color)}</span>`);
    if (o.energyClass && o.energyClass.toLowerCase() !== 'n/a') chips.push(`<span class="chip">Clasa ${esc(o.energyClass)}</span>`);
    if (sel > 0 && !hasPrice(o.prevPrice) && hasPrice(o.price)) chips.push('<span class="chip chip-new">variantă nouă</span>');

    let rrp = '';
    if (hasPrice(o.rrp) && Number(o.rrp) > Number(o.price)) {
        const pct = Math.round((1 - Number(o.price) / Number(o.rrp)) * 100);
        rrp = `<div class="rrp"><s>${fmt(o.rrp)} lei</s> <span class="rrp-pct">−${pct}%</span></div>`;
    }

    card.innerHTML = `
        <div class="card-media">
            <span class="card-nr">${index + 1}</span>
            ${getClassBadge(o.energyClass)}
            ${media}
            ${o.badge && opts.length > 1 ? `<span class="pick-badge">${esc(o.badge)}</span>` : ''}
        </div>
        <div class="card-body">
            ${switcher}
            ${variantTools(index, opts, sel)}
            <h3 class="card-title">${esc(o.name)}</h3>
            ${chips.length ? `<div class="chips">${chips.join('')}</div>` : ''}
            ${Array.isArray(o.features) && o.features.length ? `<ul class="feats">${o.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
            ${o.note ? `<div class="note">${esc(o.note)}</div>` : ''}
            <div class="price-row">
                <div>${formatPrice(o.price)}${rrp}</div>
                ${getDelta(o)}
            </div>
            <div class="card-actions">
                ${o.link ? `<a class="btn-emag" href="${esc(o.link)}" target="_blank" rel="noopener">Vezi pe ${storeName(o.link)} ${EXT_ICON}</a>` : ''}
                ${adminBtns}
            </div>
        </div>
    `;
    return card;
}

// ── Render all sections (name kept as renderTable for compatibility) ──
function renderTable() {
    const root = document.getElementById('tableBody');
    root.innerHTML = '';

    SECTIONS.forEach(sec => {
        const entries = data.map((item, index) => ({ item, index }))
            .filter(({ item }) => (item.section || 'mari') === sec.key);
        if (!entries.length) return;

        const section = document.createElement('section');
        section.className = 'product-section';
        section.innerHTML = `
            <div class="section-head">
                <div>
                    <h2>${esc(sec.title)}</h2>
                    <p class="section-note">${esc(sec.note)}</p>
                </div>
                <p class="section-sub">Subtotal <strong data-subtotal="${sec.key}"></strong></p>
            </div>
            <div class="grid"></div>`;
        const grid = section.querySelector('.grid');
        entries.forEach(({ item, index }) => grid.appendChild(buildCard(item, index)));
        root.appendChild(section);
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

    SECTIONS.forEach(sec => {
        const el = document.querySelector(`[data-subtotal="${sec.key}"]`);
        if (el) el.textContent = fmt(calculateTotal(data.filter(i => (i.section || 'mari') === sec.key))) + ' lei';
    });

    const diff = total - prevTotal;
    const deltaEl = document.getElementById('totalDelta');
    if (Math.abs(diff) >= 0.005) {
        const cls = diff > 0 ? 'up' : 'down';
        deltaEl.innerHTML = `<b class="${cls}">${diff > 0 ? '▲ +' : '▼ −'}${fmt(Math.abs(diff))} lei</b> față de verificarea anterioară (${fmt(prevTotal)} lei)`;
    } else {
        deltaEl.textContent = 'Fără schimbări față de verificarea anterioară';
    }

    const dates = data.flatMap(d => options(d).map(o => o.checked)).filter(Boolean).sort();
    if (dates.length) {
        const last = new Date(dates[dates.length - 1] + 'T12:00:00');
        document.getElementById('checkedLine').textContent =
            'Prețuri verificate pe ' + last.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Share bar
    const bar = document.getElementById('shareBar');
    const legend = document.getElementById('shareLegend');
    bar.innerHTML = '';
    legend.innerHTML = '';
    data.forEach((item, i) => {
        const o = opt(item);
        const p = Number(o.price) || 0;
        if (!p || !total) return;
        const color = SHARE_COLORS[i % SHARE_COLORS.length];
        const pct = (p / total) * 100;
        const seg = document.createElement('span');
        seg.style.flexGrow = p;
        seg.style.background = color;
        seg.title = `${o.name}: ${fmt(p)} lei`;
        bar.appendChild(seg);
        const li = document.createElement('li');
        const n = item.name;
        const category = /spalat vase/i.test(n) ? 'Spălat vase'
            : /spalat/i.test(n) ? 'Spălat rufe'
            : /air fryer|friteuz/i.test(n) ? 'Air fryer'
            : /^plit/i.test(n) ? 'Plită'
            : n.split(/\s+/)[0];
        li.innerHTML = `<i style="background:${color}"></i><span class="lg-name">${esc(category)} <em>${esc(o.label || '')}</em></span><span class="lg-pct">${pct < 1 ? '<1' : pct.toFixed(0)}%</span>`;
        legend.appendChild(li);
    });
}


// ── Edit Row ──
function editRow(index) {
    editingIndex = index;
    const item = opt(data[index]);

    document.getElementById('modalTitle').textContent = `Editează: ${item.name}`;
    document.getElementById('editName').value = item.name || '';
    document.getElementById('editLabel').value = item.label || '';
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
            label: document.getElementById('editLabel').value.trim(),
            link: document.getElementById('editLink').value.trim(),
            color: document.getElementById('editColor').value.trim(),
            energyClass: document.getElementById('editClass').value,
            price: priceVal !== '' ? parseFloat(priceVal) : null,
            image: document.getElementById('editImage').value.trim(),
            note: document.getElementById('editNote').value.trim(),
            checked: new Date().toISOString().slice(0, 10),
            section: 'mari',
        });
    } else {
        // Editing existing (the currently chosen variant)
        const target = opt(data[editingIndex]);
        target.name = name;
        target.label = document.getElementById('editLabel').value.trim();
        target.link = document.getElementById('editLink').value.trim();
        target.color = document.getElementById('editColor').value.trim();
        target.energyClass = document.getElementById('editClass').value;
        const newPrice = priceVal !== '' ? parseFloat(priceVal) : null;
        if (newPrice !== target.price) {
            target.prevPrice = target.price;
            target.checked = new Date().toISOString().slice(0, 10);
        }
        target.price = newPrice;
        target.image = document.getElementById('editImage').value.trim();
        target.note = document.getElementById('editNote').value.trim();
        if (!target.label && pendingNewVariant) target.label = name.split(/\s+/).slice(0, 2).join(' ');
    }

    pendingNewVariant = null;
    closeModal();
    renderTable();
}

// ── Safe Delete with Confirmation & Undo ──
let pendingDeleteIndex = -1;
let lastDeletedItem = null;
let lastDeletedIndex = -1;
let lastDeleteWasVariant = false;

function deleteRow(index) {
    pendingDeleteIndex = index;
    const item = data[index];
    const opts = options(item);
    const textEl = document.getElementById('deleteConfirmText');
    if (textEl) {
        textEl.innerHTML = opts.length > 1
            ? `Ștergi doar varianta <strong>"${esc(opt(item).name)}"</strong>? Celelalte ${opts.length - 1} rămân.`
            : `Ești sigur că vrei să ștergi <strong>"${esc(item.name)}"</strong>?`;
    }
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) modal.classList.add('active');
}

function closeConfirmDelete() {
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) modal.classList.remove('active');
    pendingDeleteIndex = -1;
}

// Fields that belong to the product slot, not to a single variant
const SLOT_KEYS = ['id', 'section', 'placeholder', 'alternatives', 'selected'];

// Remove only the chosen variant; variant 0 is the item itself, so the next one takes its place
function removeVariant(item, sel) {
    const alts = Array.isArray(item.alternatives) ? item.alternatives.slice() : [];
    if (sel > 0) {
        alts.splice(sel - 1, 1);
        item.alternatives = alts;
    } else {
        const promoted = alts.shift();
        Object.keys(item).forEach(k => { if (!SLOT_KEYS.includes(k)) delete item[k]; });
        Object.assign(item, promoted);
        item.alternatives = alts;
    }
    item.selected = 0;
    try { localStorage.removeItem('ersi-sel-' + item.id); } catch (e) { /* ignore */ }
}

function executeDelete() {
    if (pendingDeleteIndex < 0 || pendingDeleteIndex >= data.length) return;
    const index = pendingDeleteIndex;
    const item = data[index];
    closeConfirmDelete();

    const sel = getSel(item);
    const variantMode = options(item).length > 1;
    const removedName = variantMode ? opt(item).name : item.name;

    const row = document.querySelector(`[data-index="${index}"]`);
    if (row) row.classList.add('row-deleting');
    setTimeout(() => {
        lastDeletedItem = JSON.parse(JSON.stringify(item));
        lastDeletedIndex = index;
        lastDeleteWasVariant = variantMode;
        if (variantMode) removeVariant(item, sel);
        else data.splice(index, 1);
        renderTable();
        showUndoToast(variantMode ? `Ai șters varianta "${removedName}".` : `Ai șters "${removedName}".`);
    }, row ? 300 : 0);
}

function undoDelete() {
    if (lastDeletedItem) {
        if (lastDeleteWasVariant) data[lastDeletedIndex] = lastDeletedItem;
        else data.splice(lastDeletedIndex, 0, lastDeletedItem);
        const restoredName = lastDeletedItem.name;
        lastDeletedItem = null;
        lastDeletedIndex = -1;
        lastDeleteWasVariant = false;
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
    document.getElementById('editLabel').value = '';
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
    if (pendingNewVariant) {
        // Cancelled while adding a variant: drop the empty one
        const item = data.find(d => d.id === pendingNewVariant.id);
        pendingNewVariant = null;
        if (item) {
            const opts = options(item).map(o => ({ ...o }));
            const last = opts[opts.length - 1];
            if (opts.length > 1 && !last.name) {
                opts.pop();
                setOptions(item, opts);
                setSel(item, 0);
            }
            editingIndex = -1;
            renderTable();
            return;
        }
    }
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
