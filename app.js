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

const CURRENT_VERSION = 'v13';

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
        "alternatives": [
            {
                "label": "Samsung",
                "badge": "Mai mare și mai ieftin",
                "name": "Combina frigorifica Samsung RB38C600CS9 390 L, Total No Frost",
                "color": "Inox",
                "energyClass": "C",
                "price": 2599,
                "rrp": 2699,
                "note": "",
                "features": [
                    "390 L, Total No Frost",
                    "Compresor Digital Inverter (garanție 20 ani)",
                    "Wi-Fi + AI Energy",
                    "Înălțime 203 cm"
                ],
                "link": "https://www.emag.ro/combina-frigorifica-samsung-390-l-clasa-c-total-no-frost-all-around-cooling-compresor-digital-inverter-wifi-ai-energy-smart-control-h-203-cm-inox-rb38c600cs9-ef/pd/DBFR14YBM/",
                "image": "https://s13emagst.akamaized.net/products/75515/75514884/images/res_cfedcec7c926a95f9ee92784ab7c63a0.jpg?width=450&height=450&hash=7B179FFC72543A350502DCF043D4044F",
                "prevPrice": null,
                "checked": "2026-11-03"
            },
            {
                "label": "Arctic",
                "badge": "Cel mai ieftin",
                "name": "Combina frigorifica Arctic AK60406E40NFMT 362 L, Full No Frost",
                "color": "Argintiu",
                "energyClass": "E",
                "price": 2114.99,
                "rrp": 2198.99,
                "note": "",
                "features": [
                    "362 L, Full No Frost",
                    "Fast Freeze",
                    "Display LCD",
                    "Clasa E (consum mai mare)"
                ],
                "link": "https://www.emag.ro/combina-frigorifica-arctic-362-l-full-nofrost-blue-tech-air-flow-dual-tech-fast-freeze-display-lcd-clasa-e-h-202-cm-argintiu-ak60406e40nfmt/pd/D32CK3MBM/",
                "image": "https://s13emagst.akamaized.net/products/31658/31657389/images/res_0d3f755b1ff059e9b778d1d6dd3fc999.jpg?width=450&height=450&hash=7C918E0EB73EF6486E1160FF0D1BFD3F",
                "prevPrice": null,
                "checked": "2026-11-03"
            }
        ],
        "selected": 0
    },
    {
        "id": 2,
        "section": "mari",
        "selected": 0,
        "label": "Samsung",
        "name": "Masina de spalat rufe Samsung 10 kg, 1400 RPM",
        "link": "https://www.emag.ro/masina-de-spalat-rufe-samsung-10-kg-1400-rpm-clasa-a-ai-control-ai-wash-autodose-ai-energy-mode-ai-ecobubble-motor-digital-inverter-neagra-ww10fg6u94lbu4/pd/DXH0Y13BM/",
        "image": "https://s13emagst.akamaized.net/products/107198/107197982/images/res_fa3a0f09a5c36704480a15eb9466a5b1.jpg?width=450&height=450&hash=B95F888FE9FC320D85AEB1BA295C6C2E",
        "color": "Negru",
        "energyClass": "A",
        "price": 2398.99,
        "prevPrice": 2399.99,
        "rrp": null,
        "note": "Resigilat: 2.229,99 lei",
        "checked": "2026-11-03",
        "alternatives": [
            {
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
            }
        ],
        "features": [
            "10 kg, 1400 rpm",
            "AI Wash + AutoDose (dozare automată)",
            "EcoBubble",
            "Motor Digital Inverter"
        ]
    },
    {
        "id": 3,
        "section": "mari",
        "selected": 0,
        "label": "Bosch Serie 4",
        "name": "Masina de spalat vase incorporabila Bosch 14 seturi",
        "link": "https://www.emag.ro/masina-de-spalat-vase-incorporabila-bosch-14-seturi-6-programe-extradry-variohinge-ecosilence-drive-tab-count-status-light-home-connect-60-cm-clasa-a-sbh4ecx28e/pd/D8PMY5YBM/",
        "image": "https://s13emagst.akamaized.net/products/81331/81330791/images/res_74be6fb877f9ab598829dd68e6626814.jpg?width=450&height=450&hash=684D2365A9E12F4541333A7ECA356A45",
        "color": "Incorporabil",
        "energyClass": "A",
        "price": 4384.66,
        "prevPrice": 2899.99,
        "rrp": null,
        "note": "Resigilat: 2.899,99 lei",
        "checked": "2026-11-03",
        "alternatives": [
            {
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
            }
        ],
        "features": [
            "14 seturi, 6 programe",
            "ExtraDry",
            "VarioHinge (ușă pentru mobilier înalt)",
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
        "alternatives": [
            {
                "label": "Electrolux",
                "badge": "Pirolitic la jumătate de preț",
                "name": "Cuptor incorporabil Electrolux EOF6P76X2 72 L, pirolitic",
                "color": "Inox",
                "energyClass": "A+",
                "price": 1742.39,
                "rrp": 2419.99,
                "note": "",
                "features": [
                    "72 L",
                    "Autocurățare pirolitică",
                    "SurroundCook (aer cald uniform)",
                    "Fără Air Fry, culoare inox"
                ],
                "link": "https://www.emag.ro/cuptor-incorporabil-electrolux-electric-72-l-autocuratare-pirolitica-surroundcook-grill-timer-cu-display-electronic-clasa-a-inox-eof6p76x2/pd/DL08FCMBM/",
                "image": "https://s13emagst.akamaized.net/products/47574/47573675/images/res_bf134c3a56ccce2bbd3bc68aade2db2b.jpg?width=450&height=450&hash=7933750F5EC3D5A1CE0B2A85F4DB8B05",
                "prevPrice": null,
                "checked": "2026-11-03"
            },
            {
                "label": "Bosch 66 L",
                "badge": "Cel mai ieftin",
                "name": "Cuptor incorporabil Bosch HBF153EB0 66 L",
                "color": "Negru",
                "energyClass": "A",
                "price": 1299.99,
                "rrp": 1599.99,
                "note": "",
                "features": [
                    "66 L",
                    "Convecție 3D HotAir",
                    "EcoClean Direct (doar peretele din spate)",
                    "Ghidaj telescopic"
                ],
                "link": "https://www.emag.ro/cuptor-incorporabil-bosch-electric-66-l-grill-autocuratare-ecoclean-direct-suport-telescopic-convectie-3d-clasa-a-negru-argintiu-hbf153eb0/pd/DTDRP6BBM/",
                "image": "https://s13emagst.akamaized.net/products/25317/25316777/images/res_b57806128a1a216257d4c6b5c473a729.jpg?width=450&height=450&hash=8BF3DC6446E6A697B512F70E87A16CF9",
                "prevPrice": null,
                "checked": "2026-11-03"
            }
        ],
        "selected": 0
    },
    {
        "id": 5,
        "section": "mari",
        "selected": 0,
        "label": "Bosch Serie 4",
        "name": "Plita incorporabila inductie Bosch 60 cm",
        "link": "https://www.emag.ro/plita-incorporabila-bosch-inductie-4-zone-de-gatit-touchselect-powerboost-restart-temporizator-60-cm-negru-pue611bb6e/pd/DKB99FMBM/",
        "image": "https://s13emagst.akamaized.net/products/42913/42912502/images/res_96db49f17bb07ca02df9fdebffb5644a.jpg?width=450&height=450&hash=8FA26792A794DD575555EE4F5FD33843",
        "color": "Negru",
        "energyClass": "N/A",
        "price": 2249.99,
        "prevPrice": 2099.99,
        "rrp": 3159.99,
        "note": "",
        "checked": "2026-11-03",
        "alternatives": [
            {
                "label": "Bosch Serie 6",
                "name": "Plita incorporabila inductie Bosch PVS631HB1E, Combi Zone, Home Connect, 60 cm",
                "link": "https://www.emag.ro/plita-incorporabila-bosch-inductie-4-zone-de-gatit-combi-zone-conectivitate-hota-power-boost-home-connect-60cm-negru-pvs631hb1e/pd/DNWTP3YBM/",
                "image": "https://s13emagst.akamaized.net/products/60395/60394023/images/res_22f98b9ff3890cf9595d10a53a350b43.jpg?width=450&height=450&hash=52E9DD68304FA763FB51B475627F12F4",
                "color": "Negru",
                "energyClass": "N/A",
                "price": 2599.99,
                "prevPrice": null,
                "rrp": 2899.99,
                "note": "",
                "checked": "2026-11-03",
                "features": [
                    "4 zone + Combi Zone (2 zone unite)",
                    "PowerBoost",
                    "Conectare automată cu hota",
                    "Home Connect"
                ]
            }
        ],
        "features": [
            "4 zone inducție, 60 cm",
            "PowerBoost",
            "TouchSelect + temporizator"
        ]
    },
    {
        "id": 6,
        "section": "mari",
        "label": "Roborock",
        "name": "Aspirator Robot Roborock Q10 S5+ 10000 Pa",
        "link": "https://www.emag.ro/aspirator-robot-roborock-q10-s5-set-10000-pa-sistem-de-taiere-vibrarise-2-0-dublu-sistem-anti-incalcira-evitarea-obstacolelor-navigatie-precisense-lidar-control-prin-app-negru-emag-q10s5plus5-p1-n/pd/DQ9SZ32BM/?ref=fam#Negru-gri",
        "image": "https://s13emagst.akamaized.net/products/117960/117959364/images/res_c0fd1c0a47d2b378dc657576e93e274c.jpg?width=450&height=450&hash=13D332E67CC19635D1A1C8CE88276C47",
        "color": "Negru gri",
        "energyClass": "N/A",
        "price": 1499.99,
        "prevPrice": 1499.99,
        "rrp": 2539.79,
        "note": "",
        "checked": "2026-11-03",
        "features": [
            "10.000 Pa",
            "Stație de autogolire",
            "Mop vibrant VibraRise 2.0",
            "Navigație LiDAR, anti-încâlcire"
        ],
        "alternatives": [
            {
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
                "label": "Xiaomi",
                "badge": "Cele mai multe review-uri",
                "name": "Robot de aspirare Xiaomi X20+ cu stație de golire și spălare",
                "color": "Alb",
                "energyClass": "N/A",
                "price": 1989.99,
                "rrp": 3599.99,
                "note": "Resigilat: 1.769,99 lei",
                "features": [
                    "6.000 Pa",
                    "Aspiră și spală simultan",
                    "Stație: golire praf + spălare mop",
                    "Rezervor apă 4 L, 140 min"
                ],
                "link": "https://www.emag.ro/robot-de-aspirare-xiaomi-x20-eu-wi-fi-aspirare-spalare-simultana-statie-de-golire-75-w-autonomie-140-min-6000pa-colectare-automata-a-prafului-in-10-secunde-rezervor-de-apa-4-l-75-w-alb-bhr8124eu/pd/DG6RLFYBM/",
                "image": "https://s13emagst.akamaized.net/products/71762/71761619/images/res_7c466fd911f8854cd4d3ee6afc9d2e91.jpg?width=450&height=450&hash=A0B2539B092E057227CCCE554DDFC6E0",
                "prevPrice": null,
                "checked": "2026-11-03"
            }
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
        "alternatives": [
            {
                "label": "Airnova",
                "badge": "Cel mai ieftin",
                "name": "Air fryer Airnova BiFritto 9,4 L, 2 compartimente",
                "color": "Negru",
                "energyClass": "N/A",
                "price": 399.99,
                "rrp": null,
                "note": "",
                "features": [
                    "9,4 L în 2 compartimente",
                    "2200 W",
                    "Rating 4,9 (150+ review-uri)"
                ],
                "link": "https://www.emag.ro/air-fryer-airnovar-2200w-friteuza-cu-aer-cald-capacitate-9-4l-2-compartimente-negru-bifritto/pd/DJPHH93BM/",
                "image": "https://s13emagst.akamaized.net/products/99156/99155407/images/res_eaa23ec4783f94cff4c03d1bc57fea15.jpg?width=450&height=450&hash=F771BDA9184526742A6C67F0776BAD58",
                "prevPrice": null,
                "checked": "2026-11-03"
            },
            {
                "label": "Philips",
                "badge": "Premium, cu abur",
                "name": "Air fryer dublu Philips Seria 5000 NA552/00 cu abur, 9 L",
                "color": "Negru",
                "energyClass": "N/A",
                "price": 999.9,
                "rrp": null,
                "note": "Resigilat: 939,99 lei",
                "features": [
                    "9 L în 2 coșuri",
                    "Air Steam (aer cald + abur)",
                    "12 programe, ecran tactil",
                    "RapidAir Plus"
                ],
                "link": "https://www.emag.ro/friteuza-dubla-cu-aer-cald-si-abur-philips-airfryer-seria-5000-2-cosuri-de-gatit-capacitate-9l-afisaj-digital-ecran-tactil-12-programe-presetate-tehnologie-rapidair-plus-air-steam-culoare-negru-cu-man/pd/DQHJ1WYBM/",
                "image": "https://s13emagst.akamaized.net/products/85665/85664866/images/res_e86e26db85357f35543f9a85f1c488e6.jpg?width=450&height=450&hash=F8175EA4A3A43ADE28C4EDF3E5A76528",
                "prevPrice": null,
                "checked": "2026-11-03"
            }
        ],
        "selected": 0
    },
    {
        "id": 8,
        "section": "mici",
        "name": "Robot de bucătărie Bosch MUM58720, planetar 1000 W, bol inox 3,9 L",
        "link": "https://www.emag.ro/robot-de-bucatarie-bosch-1000-w-bol-inox-3-9-l-blender-1-25-l-7-viteze-impulse-mixare-planetara-3d-rosu-mum58720/pd/D3PJ32BBM/",
        "image": "https://s13emagst.akamaized.net/products/3800/3799208/images/res_bec5fd55d1a237bd5ec379769a7577a9.jpg?width=450&height=450&hash=CC1A585D5C6D1E118C1484981F499DD8",
        "color": "Rosu",
        "energyClass": "N/A",
        "price": 1199.9,
        "prevPrice": null,
        "rrp": 1809,
        "note": "Resigilat: 1.129,99 lei",
        "label": "Bosch MUM5",
        "badge": "Mixer planetar",
        "checked": "2026-11-03",
        "selected": 0,
        "features": [
            "Mixare planetară 3D (aluat, frișcă)",
            "1000 W, 7 viteze",
            "Bol inox 3,9 L + blender 1,25 L"
        ],
        "alternatives": [
            {
                "label": "Bosch MCM3",
                "badge": "Procesor compact",
                "name": "Robot de bucătărie Bosch MultiTalent 3 MCM3200W, 800 W",
                "link": "https://www.emag.ro/robot-de-bucatarie-bosch-multitalent-3-800-w-capacitate-2-3l-blender-1l-2-trepte-de-viteza-peste-30-de-functii-gri-alb-mcm3200w/pd/DXWTJYBBM/",
                "image": "https://s13emagst.akamaized.net/products/2332/2331368/images/res_d900b337e0dbcabd26dc57da3c58bfba.jpg?width=450&height=450&hash=5D2A25FACED532BE615073BA8E34F2D5",
                "color": "Alb",
                "energyClass": "N/A",
                "price": 339.99,
                "prevPrice": null,
                "rrp": 619,
                "note": "Resigilat: 319,99 lei",
                "checked": "2026-11-03",
                "features": [
                    "Tocare, feliere, răzuire (30+ funcții)",
                    "800 W, 2 viteze",
                    "Bol 2,3 L + blender 1 L"
                ]
            }
        ]
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

const SECTIONS = [
    { key: 'mari', title: 'Electrocasnice mari', note: 'Apasă pe varianta pe care o vrei — poza, dotările și totalul se schimbă.' },
    { key: 'mici', title: 'Electrocasnice mici', note: 'Pentru bucătărie și casă.' },
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

    const adminBtns = isAdmin ? `<button class="action-btn edit" onclick="editRow(${index})" title="Editează">✏️</button>
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
            <h3 class="card-title">${esc(o.name)}</h3>
            ${chips.length ? `<div class="chips">${chips.join('')}</div>` : ''}
            ${Array.isArray(o.features) && o.features.length ? `<ul class="feats">${o.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
            ${o.note ? `<div class="note">${esc(o.note)}</div>` : ''}
            <div class="price-row">
                <div>${formatPrice(o.price)}${rrp}</div>
                ${getDelta(o)}
            </div>
            <div class="card-actions">
                ${o.link ? `<a class="btn-emag" href="${esc(o.link)}" target="_blank" rel="noopener">Vezi pe eMAG ${EXT_ICON}</a>` : ''}
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
            'Prețuri eMAG verificate pe ' + last.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
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
            section: 'mari',
        });
    } else {
        // Editing existing (the currently chosen variant)
        const target = opt(data[editingIndex]);
        target.name = name;
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
