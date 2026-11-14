
// ========================================
// UNESAKSES - JAVASCRIPT
// ========================================



// ==========================================
// DIREKTORI UNESAKSES - SISTEM BARU
// ==========================================

// 1. DATA RUANGAN GEDUNG MG1
// Nama ruangan mengikuti denah dan koreksi sementara.

const roomsMG1 = {
    "01": [
        { code: "MG1.01.00", name: "Lobby" },
        { code: "MG1.01.01", name: "Ruang Dosen" },
        { code: "MG1.01.02", name: "Ruang Administrasi" },
        { code: "MG1.01.03", name: "Area Pelayanan" },
        { code: "MG1.01.04", name: "Ruang Koorprodi (koreksi sementara)" },
        { code: "MG1.01.05", name: "KM/WC" },
        { code: "MG1.01.06", name: "Ruang Koorprodi (label denah asli)" },
        { code: "MG1.01.07", name: "Ruang Smartclass" },
        { code: "MG1.01.08", name: "Ruang Server & Kontrol" },
        { code: "MG1.01.09", name: "Ruang Laktasi" },
        { code: "MG1.01.10", name: "Ruang Wakil Direktur" },
        { code: "MG1.01.11", name: "Ruang Direktur" }
    ],

"02": [
    { code: "MG1.02.01", name: "KM/WC" },
    { code: "MG1.02.02", name: "Ruang Microteaching" },
    { code: "MG1.02.03", name: "Laboratorium Manajemen" },
    { code: "MG1.02.04", name: "Tangga" },
    { code: "MG1.02.05", name: "Ruang Server & Kontrol" },
    { code: "MG1.02.06", name: "Ruang Kelas" },
    { code: "MG1.02.07", name: "Ruang Kelas" },
    { code: "MG1.02.08", name: "Gudang" },
    { code: "MG1.02.09", name: "KM/WC" }
],

    "03": [
        { code: "MG1.03.01", name: "Dak Beton" },
        { code: "MG1.03.02", name: "KM/WC" },
        { code: "MG1.03.03", name: "Ruang Kelas" },
        { code: "MG1.03.04", name: "Ruang Kelas" },
        { code: "MG1.03.05", name: "Tangga" },
        { code: "MG1.03.06", name: "Ruang Server & Kontrol" },
        { code: "MG1.03.07", name: "Ruang Kelas" },
        { code: "MG1.03.08", name: "Ruang Kelas" },
        { code: "MG1.03.09", name: "KM/WC" },
        { code: "MG1.03.10", name: "Janitor" }
    ],

    "04": [
        { code: "MG1.04.01", name: "KM/WC" },
        { code: "MG1.04.02", name: "Ruang Rapat" },
        { code: "MG1.04.03", name: "Ruang Rapat" },
        { code: "MG1.04.04", name: "Ruang Rapat" },
        { code: "MG1.04.05", name: "Ruang 05 (nama perlu dikonfirmasi)" },
        { code: "MG1.04.06", name: "Ruang Server & Kontrol" },
        { code: "MG1.04.07", name: "Ruang Kelas" },
        { code: "MG1.04.08", name: "Laboratorium Komputer" },
        { code: "MG1.04.09", name: "Gudang" },
        { code: "MG1.04.10", name: "KM/WC" }
    ]
};

// ==========================================
// DATA RUANGAN GEDUNG MG2
// LABORATORIUM MRANGGEN
// ==========================================

const roomsMG2 = [
    { code: "MG2.01.01", name: "Lab Tata Rias" },
    { code: "MG2.01.02", name: "Ruang 02" },
    { code: "MG2.01.03", name: "Ruang 03" },
    { code: "MG2.01.04", name: "Ruang 04" },
    { code: "MG2.01.05", name: "Ruang 05" },
    { code: "MG2.01.06", name: "Ruang 06" },
    { code: "MG2.01.07", name: "Ruang GYM" },
    { code: "MG2.01.08", name: "Ruang" },
    { code: "MG2.01.09", name: "Ruang Konseling" },
    { code: "MG2.01.10", name: "Ruang Kesehatan" },
    { code: "MG2.01.11", name: "Ruang Aduan Hukum" },
    { code: "MG2.01.12", name: "Ruang Rapat" }
];

// 2. DATA FASILITAS TUNGGAL
// Lokasi pastinya akan dicocokkan dengan denah asli.

const campusFacilities = {
    "lab-tata-rias": {
        name: "Laboratorium Tata Rias",
        detail: "Laboratorium Tata Rias UNESA Kampus 5 Magetan."
    },
    "perpustakaan": {
        name: "Perpustakaan",
        detail: "Fasilitas perpustakaan kampus."
    },
    "masjid": {
        name: "Masjid",
        detail: "Tempat ibadah di lingkungan kampus."
    },
    "foodcourt": {
        name: "Food Court",
        detail: "Area makanan dan tempat istirahat."
    },
    "parkiran": {
        name: "Area Parkir",
        detail: "Area parkir mahasiswa dan dosen."
    }
};


// 3. MEMBUKA DAN MENUTUP KARTU GEDUNG

document.querySelectorAll(".building-toggle").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".building-card");

        if (!card) return;

        card.classList.toggle("active");

    });

});


// 4. MEMBUAT DAFTAR RUANGAN GEDUNG MG1

Object.entries(roomsMG1).forEach(([floor, rooms]) => {

    const roomContainer = document.getElementById(
        `rooms-MG1-${floor}`
    );

    if (!roomContainer) return;

    roomContainer.innerHTML = rooms.map(room => `
        <div class="room-item">
            <div class="room-information">
                <strong>${escapeHTML(room.name)}</strong>
                <small>${escapeHTML(room.code)}</small>
            </div>

            <button
                type="button"
                class="room-location-button"
                data-room-code="${room.code}">
                <i class="fas fa-map-marker-alt"></i>
                Lihat Lokasi
            </button>
        </div>
    `).join("");

});


// DAFTAR RUANGAN GEDUNG MG2

const mg2Container = document.getElementById("floors-MG2");

if (mg2Container) {
    mg2Container.innerHTML = `
        <div class="floor-group">
            <div class="floor-title">
                MG2.01 — Gedung Laboratorium Mranggen
            </div>

            ${roomsMG2.map(room => `
                <div class="room-item">
                    <div class="room-info">
                        <strong>${room.name}</strong>
                        <small>${room.code}</small>
                    </div>

                    <button
                        type="button"
                        class="room-location-button"
                        data-room-code="${room.code}">
                        <i class="fas fa-map-marker-alt"></i> Lihat Lokasi
                    </button>
                </div>
            `).join("")}
        </div>
    `;
}

// 6. MENAMPILKAN PILIHAN LOKASI DI BAGIAN DENAH

function renderMasjidMap(name, detail) {
    const denahDisplay = document.getElementById("denahDisplay");
    const selectedRoomTitle = document.getElementById("selectedRoomTitle");
    const selectedRoomInfo = document.getElementById("selectedRoomInfo");

    if (!denahDisplay || !selectedRoomTitle || !selectedRoomInfo) {
        console.error("Elemen denah Masjid tidak ditemukan.");
        return;
    }

    selectedRoomTitle.textContent = "Denah Masjid Joglo Al Hasan";
    selectedRoomInfo.textContent =
        "Pilih area pada denah untuk melihat keterangan lokasinya.";

    denahDisplay.innerHTML = `
        <div class="masjid-map-container">
            <svg viewBox="0 0 700 500"
                 class="masjid-svg"
                 xmlns="http://www.w3.org/2000/svg">

                <style>
                    .wall {
                        fill: none;
                        stroke: #333;
                        stroke-width: 2;
                    }

                    .inner-wall {
                        fill: none;
                        stroke: #555;
                        stroke-width: 3;
                    }

                    .column {
                        fill: white;
                        stroke: #333;
                        stroke-width: 2;
                    }

                    .room-area {
                        fill: #e8f0e8;
                        fill-opacity: 0.45;
                        stroke: transparent;
                        cursor: pointer;
                    }

                    .room-area:hover,
                    .room-area.selected {
                        fill: #ffb6b6;
                        fill-opacity: 0.7;
                        stroke: #d62828;
                        stroke-width: 2;
                    }

                    .room-label {
                        font-size: 13px;
                        fill: #333;
                        text-anchor: middle;
                        pointer-events: none;
                    }

                    .door {
                        fill: none;
                        stroke: #555;
                        stroke-width: 1.5;
                    }
                </style>

                <!-- Judul denah -->
                <text x="350" y="30"
                      text-anchor="middle"
                      font-size="19"
                      font-weight="bold">
                    MASJID JOGLO AL HASAN
                </text>

                <!-- Batas teras luar -->
                <rect x="150" y="65" width="410" height="365" class="wall"/>
                <rect x="160" y="75" width="390" height="345" class="wall"/>
                <rect x="170" y="85" width="370" height="325" class="wall"/>

                <!-- Area utama yang bisa diklik -->
                <rect x="180" y="145" width="350" height="250"
                      class="room-area"
                      data-room-code="MASJID-UTAMA"/>

                <text x="355" y="270" class="room-label">
                    AREA UTAMA MASJID
                </text>

                <!-- Ruang kecil bagian atas kiri -->
                <rect x="205" y="85" width="100" height="55" class="wall"/>
                <rect x="205" y="85" width="100" height="55"
                      class="room-area"
                      data-room-code="MASJID-DEPAN-KIRI"/>
                <text x="255" y="115" class="room-label">Ruang depan kiri</text>

                <!-- Ruang kecil bagian atas kanan -->
                <rect x="405" y="85" width="100" height="55" class="wall"/>
                <rect x="405" y="85" width="100" height="55"
                      class="room-area"
                      data-room-code="MASJID-DEPAN-KANAN"/>
                <text x="455" y="115" class="room-label">Ruang depan kanan</text>

                <!-- Sekat bagian tengah -->
                <path d="M305 145 V220" class="inner-wall"/>
                <path d="M405 145 V220" class="inner-wall"/>
                <path d="M305 245 V330 H405 V245"
                      class="inner-wall"/>

                <!-- Area tambahan sisi kiri -->
                <rect x="70" y="100" width="80" height="115" class="wall"/>
                <rect x="75" y="105" width="70" height="105"
                      class="room-area"
                      data-room-code="MASJID-SISI-KIRI"/>

                <path d="M110 105 V210" class="wall"/>
                <text x="110" y="160" class="room-label">Area</text>
                <text x="110" y="177" class="room-label">sisi kiri</text>

                <!-- Pintu area sisi kiri -->
                <path d="M145 175 A25 25 0 0 1 120 200" class="door"/>

                <!-- Tiang-tiang masjid -->
                <g>
                    <circle cx="195" cy="180" r="7" class="column"/>
                    <circle cx="290" cy="180" r="7" class="column"/>
                    <circle cx="390" cy="180" r="7" class="column"/>
                    <circle cx="515" cy="180" r="7" class="column"/>

                    <circle cx="195" cy="260" r="7" class="column"/>
                    <circle cx="290" cy="260" r="7" class="column"/>
                    <circle cx="390" cy="260" r="7" class="column"/>
                    <circle cx="515" cy="260" r="7" class="column"/>

                    <circle cx="195" cy="375" r="7" class="column"/>
                    <circle cx="290" cy="375" r="7" class="column"/>
                    <circle cx="390" cy="375" r="7" class="column"/>
                    <circle cx="515" cy="375" r="7" class="column"/>
                </g>

                <!-- Keterangan -->
                <text x="350" y="465"
                      text-anchor="middle"
                      font-size="12"
                      fill="#555">
                    Klik area denah untuk memilih lokasi
                </text>
            </svg>
        </div>
    `;

    // Fitur klik area denah
    const roomAreas = denahDisplay.querySelectorAll("[data-room-code]");

    roomAreas.forEach(area => {
        area.addEventListener("click", function () {
            roomAreas.forEach(item => item.classList.remove("selected"));
            this.classList.add("selected");

            const roomCode = this.dataset.roomCode;

            const roomNames = {
                "MASJID-UTAMA": "Area Utama Masjid",
                "MASJID-DEPAN-KIRI": "Ruang Depan Kiri",
                "MASJID-DEPAN-KANAN": "Ruang Depan Kanan",
                "MASJID-SISI-KIRI": "Area Sisi Kiri"
            };

            selectedRoomTitle.textContent = roomNames[roomCode];
            selectedRoomInfo.textContent =
                "Lokasi yang dipilih: " + roomNames[roomCode];
        });
    });
}

function renderFoodcourtMap(name, detail) {
    const denahDisplay = document.getElementById("denahDisplay");
    const selectedRoomTitle = document.getElementById("selectedRoomTitle");
    const selectedRoomInfo = document.getElementById("selectedRoomInfo");

    if (!denahDisplay || !selectedRoomTitle || !selectedRoomInfo) {
        console.error("Elemen denah Food Court tidak ditemukan.");
        return;
    }

    selectedRoomTitle.textContent = "Denah Food Court";
    selectedRoomInfo.textContent = "Lokasi Food Court ditandai dengan pin merah.";

    denahDisplay.innerHTML = `
        <div class="foodcourt-map-container">
            <svg viewBox="0 0 700 520"
                 class="foodcourt-svg"
                 xmlns="http://www.w3.org/2000/svg">

                <style>
                    .fc-wall {
                        fill: none;
                        stroke: #333;
                        stroke-width: 3;
                    }

                    .fc-inner-wall {
                        fill: none;
                        stroke: #555;
                        stroke-width: 2;
                    }

                    .fc-area {
                        fill: #f8f8f2;
                        stroke: #555;
                        stroke-width: 2;
                    }

                    .fc-label {
                        font-size: 13px;
                        fill: #333;
                        text-anchor: middle;
                    }

                    .fc-small-label {
                        font-size: 10px;
                        fill: #555;
                        text-anchor: middle;
                    }

                    .fc-table {
                        fill: #e7d7bd;
                        stroke: #6d6255;
                        stroke-width: 1.5;
                    }

                    .fc-chair {
                        fill: #fff;
                        stroke: #6d6255;
                        stroke-width: 1.3;
                    }

                    .fc-pin {
                        cursor: pointer;
                    }
                </style>

                <!-- Latar dan area luar -->
                <rect width="700" height="520" fill="#f4f5ef"/>

                <!-- Batas luar melengkung -->
                <path d="M105 105 Q75 260 105 415
                         L595 415 Q625 260 595 105"
                      fill="none" stroke="#888" stroke-width="2"/>

                <path d="M125 125 Q100 260 125 395
                         L575 395 Q600 260 575 125"
                      fill="none" stroke="#aaa" stroke-width="2"/>

                <!-- Bangunan utama -->
                <rect x="170" y="100" width="360" height="320"
                      class="fc-wall"/>

                <rect x="180" y="110" width="340" height="300"
                      class="fc-inner-wall"/>

                <!-- Area toilet pria -->
                <rect x="180" y="110" width="105" height="75"
                      class="fc-area"/>
                <text x="232" y="145" class="fc-label">TOILET PRIA</text>
                <text x="232" y="162" class="fc-small-label">WC</text>

                <!-- Area toilet wanita -->
                <rect x="415" y="110" width="105" height="75"
                      class="fc-area"/>
                <text x="467" y="145" class="fc-label">TOILET WANITA</text>
                <text x="467" y="162" class="fc-small-label">WC</text>

                <!-- Area makan tengah -->
                <rect x="285" y="185" width="130" height="215"
                      fill="#fffdf6" stroke="#777" stroke-width="1.5"/>

                <text x="350" y="285"
                      class="fc-label"
                      font-size="16"
                      font-weight="bold">
                    AREA MAKAN
                </text>

                <text x="350" y="305" class="fc-small-label">
                    FOOD COURT
                </text>

                <!-- Area meja sisi kiri atas -->
                <rect x="180" y="195" width="100" height="75"
                      class="fc-area"/>

                <!-- Meja dan kursi kiri atas -->
                <rect x="205" y="218" width="42" height="25"
                      rx="3" class="fc-table"/>
                <circle cx="198" cy="230" r="5" class="fc-chair"/>
                <circle cx="254" cy="230" r="5" class="fc-chair"/>
                <circle cx="226" cy="210" r="5" class="fc-chair"/>
                <circle cx="226" cy="251" r="5" class="fc-chair"/>

                <!-- Area meja sisi kiri bawah -->
                <rect x="180" y="280" width="100" height="120"
                      class="fc-area"/>

                <rect x="205" y="300" width="42" height="25"
                      rx="3" class="fc-table"/>
                <circle cx="198" cy="312" r="5" class="fc-chair"/>
                <circle cx="254" cy="312" r="5" class="fc-chair"/>
                <circle cx="226" cy="292" r="5" class="fc-chair"/>
                <circle cx="226" cy="333" r="5" class="fc-chair"/>

                <rect x="205" y="350" width="42" height="25"
                      rx="3" class="fc-table"/>
                <circle cx="198" cy="362" r="5" class="fc-chair"/>
                <circle cx="254" cy="362" r="5" class="fc-chair"/>
                <circle cx="226" cy="342" r="5" class="fc-chair"/>
                <circle cx="226" cy="383" r="5" class="fc-chair"/>

                <!-- Area meja sisi kanan atas -->
                <rect x="420" y="195" width="100" height="75"
                      class="fc-area"/>

                <rect x="453" y="218" width="42" height="25"
                      rx="3" class="fc-table"/>
                <circle cx="446" cy="230" r="5" class="fc-chair"/>
                <circle cx="502" cy="230" r="5" class="fc-chair"/>
                <circle cx="474" cy="210" r="5" class="fc-chair"/>
                <circle cx="474" cy="251" r="5" class="fc-chair"/>

                <!-- Area meja sisi kanan bawah -->
                <rect x="420" y="280" width="100" height="120"
                      class="fc-area"/>

                <rect x="453" y="300" width="42" height="25"
                      rx="3" class="fc-table"/>
                <circle cx="446" cy="312" r="5" class="fc-chair"/>
                <circle cx="502" cy="312" r="5" class="fc-chair"/>
                <circle cx="474" cy="292" r="5" class="fc-chair"/>
                <circle cx="474" cy="333" r="5" class="fc-chair"/>

                <rect x="453" y="350" width="42" height="25"
                      rx="3" class="fc-table"/>
                <circle cx="446" cy="362" r="5" class="fc-chair"/>
                <circle cx="502" cy="362" r="5" class="fc-chair"/>
                <circle cx="474" cy="342" r="5" class="fc-chair"/>
                <circle cx="474" cy="383" r="5" class="fc-chair"/>

                <!-- Jalur masuk -->
                <path d="M325 420 V445 H375 V420"
                      fill="none" stroke="#555" stroke-width="2"/>

                <text x="350" y="465" class="fc-small-label">
                    AKSES MASUK
                </text>

                <!-- Satu pin lokasi Food Court -->
                <g class="fc-pin" id="foodcourtLocationPin"
                   transform="translate(350 175)">

                    <path d="M0 0
                             C-22 0 -34 16 -34 36
                             C-34 61 0 91 0 91
                             C0 91 34 61 34 36
                             C34 16 22 0 0 0 Z"
                          fill="#e53935"
                          stroke="#ffffff"
                          stroke-width="4"/>

                    <circle cx="0" cy="35" r="12" fill="#ffffff"/>
                </g>

                <text x="350" y="495"
                      class="fc-small-label">
                    DENAH FOOD COURT
                </text>
            </svg>
        </div>
    `;

    // Pin merah bisa diklik untuk menampilkan informasi
    const pin = denahDisplay.querySelector("#foodcourtLocationPin");

    if (pin) {
        pin.addEventListener("click", function () {
            selectedRoomTitle.textContent = "Food Court";
            selectedRoomInfo.textContent =
                detail || "Area makan Food Court kampus.";
        });
    }
}

function renderParkirMap(name, detail) {
    const denahDisplay = document.getElementById("denahDisplay");
    const selectedRoomTitle = document.getElementById("selectedRoomTitle");
    const selectedRoomInfo = document.getElementById("selectedRoomInfo");

    if (!denahDisplay || !selectedRoomTitle || !selectedRoomInfo) {
        console.error("Elemen denah parkir tidak ditemukan.");
        return;
    }

    selectedRoomTitle.textContent = name;
    selectedRoomInfo.textContent = "Silakan pilih area parkir pada denah.";

    denahDisplay.innerHTML = `
        <div style="width:100%; max-width:1100px; margin:auto; overflow:hidden;">
            <svg id="parkingMap"
                viewBox="0 0 1000 650"
                xmlns="http://www.w3.org/2000/svg"
                style="width:100%; height:auto; display:block; background:#f5f5f5;">

                <rect width="1000" height="650" fill="#f5f5f5"/>

                <!-- JALAN UTAMA: GARIS TEPI -->
                <path d="M105 15 V620
                    M105 130 H420
                    C475 130 500 165 500 220
                    V405
                    C500 455 540 480 600 480
                    H900
                    C940 480 960 505 960 550
                    V620"
                    fill="none" stroke="#263342"
                    stroke-width="68" stroke-linecap="round"
                    stroke-linejoin="round"/>

                <!-- BAHU JALAN -->
                <path d="M105 15 V620
                    M105 130 H420
                    C475 130 500 165 500 220
                    V405
                    C500 455 540 480 600 480
                    H900
                    C940 480 960 505 960 550
                    V620"
                    fill="none" stroke="#ffffff"
                    stroke-width="62" stroke-linecap="round"
                    stroke-linejoin="round"/>

                <!-- ASPAL -->
                <path d="M105 15 V620
                    M105 130 H420
                    C475 130 500 165 500 220
                    V405
                    C500 455 540 480 600 480
                    H900
                    C940 480 960 505 960 550
                    V620"
                    fill="none" stroke="#424b59"
                    stroke-width="52" stroke-linecap="butt"
                    stroke-linejoin="round"/>

                <!-- GARIS PUTUS-PUTUS JALAN -->
                <path d="M105 15 V620
                    M145 130 H420
                    C475 130 500 165 500 220
                    V405
                    C500 455 540 480 600 480
                    H900
                    C940 480 960 505 960 550
                    V620"
                    fill="none" stroke="#ffffff"
                    stroke-width="3" stroke-dasharray="20 18"/>

                <!-- JALAN SISI ATAS KANAN -->
                <rect x="500" y="145" width="470" height="55"
                    rx="8" fill="#424b59"
                    stroke="#263342" stroke-width="4"/>

                <path d="M510 173 H960"
                    stroke="#ffffff" stroke-width="3"
                    stroke-dasharray="20 18"/>

                <!-- PARKIR MOTOR MAHASISWA BAGIAN ATAS KIRI -->
                <rect data-parkir="motor-mahasiswa"
                    x="160" y="10" width="340" height="95"
                    rx="12" fill="#cfe7fb"
                    stroke="#123b68" stroke-width="4"
                    style="cursor:pointer"/>

                <text x="330" y="52" text-anchor="middle"
                    font-size="27" font-weight="bold"
                    fill="#102d55" pointer-events="none">
                    P. MOTOR
                </text>
                <text x="330" y="82" text-anchor="middle"
                    font-size="27" font-weight="bold"
                    fill="#102d55" pointer-events="none">
                    MAHASISWA
                </text>

                <!-- PARKIR MOTOR MAHASISWA BAGIAN ATAS KANAN -->
                <rect data-parkir="motor-mahasiswa"
                    x="570" y="10" width="400" height="95"
                    rx="12" fill="#cfe7fb"
                    stroke="#123b68" stroke-width="4"
                    style="cursor:pointer"/>

                <text x="770" y="52" text-anchor="middle"
                    font-size="27" font-weight="bold"
                    fill="#102d55" pointer-events="none">
                    P. MOTOR
                </text>
                <text x="770" y="82" text-anchor="middle"
                    font-size="27" font-weight="bold"
                    fill="#102d55" pointer-events="none">
                    MAHASISWA
                </text>

                <!-- PARKIR MOTOR MAHASISWA SISI KIRI -->
                <rect data-parkir="motor-mahasiswa"
                    x="15" y="160" width="50" height="390"
                    rx="10" fill="#cfe7fb"
                    stroke="#123b68" stroke-width="4"
                    style="cursor:pointer"/>

                <text x="40" y="355"
                    text-anchor="middle"
                    font-size="21" font-weight="bold"
                    fill="#102d55"
                    transform="rotate(-90 40 355)"
                    pointer-events="none">
                    P. MOTOR MAHASISWA
                </text>

               <!-- PARKIR MOBIL DOSEN TENGAH -->
<rect data-parkir="mobil-dosen"
    x="380" y="210" width="70" height="290"
    rx="12" fill="#cfe7fb"
    stroke="#123b68" stroke-width="4"
    style="cursor:pointer"/>

<text x="415" y="355"
    text-anchor="middle"
    font-size="22" font-weight="bold"
    fill="#102d55"
    transform="rotate(-90 415 355)"
    pointer-events="none">
    P. MOBIL DOSEN
</text>

                <!-- DERETAN PARKIR MOTOR MAHASISWA -->
                <g fill="#cfe7fb" stroke="#123b68"
                    stroke-width="3.5">

                    <rect data-parkir="motor-mahasiswa"
                        <rect data-parkir="dosen"
                        x="535" y="195" width="78" height="290"
                        rx="12" style="cursor:pointer"/>

                    <rect data-parkir="motor-mahasiswa"
                        x="620" y="195" width="78" height="290"
                        rx="12" style="cursor:pointer"/>

                    <rect data-parkir="motor-mahasiswa"
                        x="705" y="195" width="78" height="290"
                        rx="12" style="cursor:pointer"/>

                    <rect data-parkir="motor-mahasiswa"
                        x="790" y="195" width="78" height="290"
                        rx="12" style="cursor:pointer"/>

                    <rect data-parkir="motor-mahasiswa"
                        x="875" y="195" width="78" height="290"
                        rx="12" style="cursor:pointer"/>
                </g>

                <!-- LABEL DERETAN PARKIR -->
                <g fill="#102d55" font-size="21"
                    font-weight="bold" text-anchor="middle"
                    pointer-events="none">

                    <text x="574" y="340"
                        transform="rotate(-90 574 340)">
                        P. MOTOR DOSEN
                    </text>

                    <text x="659" y="340"
                        transform="rotate(-90 659 340)">
                        P. MOTOR MAHASISWA
                    </text>

                    <text x="744" y="340"
                        transform="rotate(-90 744 340)">
                        P. MOTOR MAHASISWA
                    </text>

                    <text x="829" y="340"
                        transform="rotate(-90 829 340)">
                        P. MOTOR MAHASISWA
                    </text>

                    <text x="914" y="340"
                        transform="rotate(-90 914 340)">
                        P. MOTOR MAHASISWA
                    </text>
                </g>

                <!-- PIN PENANDA LOKASI -->
                <g id="parkingPin" style="display:none"
                    pointer-events="none">
                    <path d="M0 0 C-25 -32 -25 -52 0 -52
                        C25 -52 25 -32 0 0 Z"
                        fill="#e53935" stroke="white"
                        stroke-width="3"/>
                    <circle cx="0" cy="-35" r="8" fill="white"/>
                </g>

            </svg>
        </div>
    `;

    const parkingMap = document.getElementById("parkingMap");
    const parkingPin = parkingMap.querySelector("#parkingPin");

    parkingMap.querySelectorAll("[data-parkir]").forEach(area => {
        area.addEventListener("click", function () {
            const jenis = this.getAttribute("data-parkir");
            const posisi = this.getBBox();

            parkingPin.setAttribute(
                "transform",
                `translate(${posisi.x + posisi.width / 2}, ${posisi.y})`
            );

            parkingPin.style.display = "block";

            if (jenis === "dosen") {
                selectedRoomTitle.textContent = "Parkir Mobil Dosen";
                selectedRoomInfo.textContent =
                    "Lokasi parkir kendaraan mobil khusus dosen.";
            } else if (jenis === "dosen") { 
                selectedRoomTitle.textContent = "Parkir Motor Dosen";
                selectedRoomInfo.textContent =
                    "Lokasi parkir kendaraan motor khusus dosen.";
            } else {
                selectedRoomTitle.textContent = "Parkir Motor Mahasiswa";
                selectedRoomInfo.textContent =
                    "Lokasi parkir kendaraan motor khusus mahasiswa.";
            }
        });
    });
}

function openCampusLocation(name, detail, code = "") {
    console.log("openCampusLocation dijalankan:", name);
    const denahSection = document.getElementById("denah");
    const denahDisplay = document.getElementById("denahDisplay");
    const title = document.getElementById("selectedRoomTitle");
    const info = document.getElementById("selectedRoomInfo");

    if (!denahSection || !denahDisplay) {
        alert("Bagian denah belum ditemukan.");
        return;
    }

// MENAMPILKAN DENAH AREA PARKIR
if (name.toLowerCase().includes("parkir")) {
    renderParkirMap(name, detail);

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    return;
}

// MENAMPILKAN DENAH MASJID
if (name.toLowerCase().includes("masjid")) {
    title.textContent = name;
    info.textContent = detail;
    renderMasjidMap(name, detail);

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    return;
}

if (name.toLowerCase().includes("food court")) {
    renderFoodcourtMap(name, detail);
    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    return;
}

// MENAMPILKAN DENAH GEDUNG MG2
if (code && code.startsWith("MG2.")) {
    renderMG2Map(name, detail, code);

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    return;
}

// MENAMPILKAN DENAH SESUAI LANTAI 

const floorNumber = code ? code.split(".")[1] : "01";



// DENAH SVG GEDUNG MG1 LANTAI 2


// ==========================================
// DENAH GEDUNG MG1 LANTAI 3
// ==========================================


if (floorNumber === "03") {

    const floor3Positions = {
        "MG1.03.01": [230, 280],
        "MG1.03.02": [405, 195],
        "MG1.03.03": [555, 135],
        "MG1.03.04": [805, 135],
        "MG1.03.05": [965, 135],
        "MG1.03.06": [965, 405],
        "MG1.03.07": [805, 405],
        "MG1.03.08": [555, 405],
        "MG1.03.09": [405, 405],
        "MG1.03.10": [405, 470]
    };

    const selectedPosition = floor3Positions[code];

    title.textContent = name;
    info.textContent = code
        ? `${code} — ${detail}`
        : detail;

    denahDisplay.innerHTML = `
        <div class="campus-map">

            <div class="map-caption">
                <strong>GEDUNG MG1</strong>
                <span>LANTAI 3</span>
            </div>

            <svg viewBox="0 0 1050 570"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="Denah Gedung MG1 lantai 3">

                <!-- BATAS DENAH -->
                <rect x="15" y="15"
                      width="1020" height="540"
                      rx="12"
                      fill="#f8fbff"
                      stroke="#123B5D"
                      stroke-width="3"/>

                <!-- KERANGKA BAGIAN KIRI -->
                <g stroke="#123B5D"
                   stroke-width="3"
                   stroke-linejoin="round">

                    <circle cx="230" cy="280" r="205"
                            fill="#e8f1fa"/>

                    <circle cx="230" cy="280" r="105"
                            fill="#ffffff"
                            stroke-width="4"/>

                    <path d="M230 175 L190 80
                             A205 205 0 0 0 65 150
                             L145 215 Z"
                          fill="#d7e7f6"/>

                    <path d="M145 215 L65 150
                             A205 205 0 0 0 35 330
                             L125 330 Z"
                          fill="#d7e7f6"/>

                    <path d="M125 330 L35 330
                             A205 205 0 0 0 95 445
                             L175 365 Z"
                          fill="#d7e7f6"/>

                    <path d="M175 365 L95 445
                             A205 205 0 0 0 365 445
                             L285 365 Z"
                          fill="#d7e7f6"/>

                    <path d="M190 80
                             A205 205 0 0 1 300 95
                             L285 175 L230 175 Z"
                          fill="#d7e7f6"/>

                    <path d="M300 95
                             A205 205 0 0 1 420 205
                             L330 245 L285 175 Z"
                          fill="#d7e7f6"/>
                </g>

                <!-- AREA TENGAH -->
                <g fill="#123B5D"
                   text-anchor="middle"
                   font-weight="bold"
                   font-size="18">

                    <text x="230" y="270">DAK</text>
                    <text x="230" y="294">BETON</text>
                </g>

                <!-- RUANGAN BAGIAN KANAN -->
                <g fill="#d7e7f6"
                   stroke="#123B5D"
                   stroke-width="3">

                    <rect x="430" y="75"
                          width="250" height="125"/>

                    <rect x="680" y="75"
                          width="250" height="125"/>

                    <rect x="930" y="75"
                          width="75" height="125"/>

                    <rect x="430" y="350"
                          width="250" height="110"/>

                    <rect x="680" y="350"
                          width="250" height="110"/>

                    <rect x="930" y="350"
                          width="75" height="110"/>
                </g>

                <!-- KORIDOR -->
                <rect x="430" y="225"
                      width="575" height="90"
                      fill="#ffffff"
                      stroke="#123B5D"
                      stroke-width="3"/>

                <text x="705" y="278"
                      text-anchor="middle"
                      fill="#64748b"
                      font-size="17">
                    KORIDOR / SELASAR
                </text>

                <!-- AREA SERVIS -->
                <g stroke="#123B5D"
                   stroke-width="2"
                   fill="#ffffff">

                    <!-- Toilet wanita -->
                    <rect x="390" y="185"
                          width="38" height="55"/>

                    <!-- Tangga -->
                    <rect x="390" y="365"
                          width="38" height="85"/>

                    <!-- Toilet pria -->
                    <rect x="345" y="365"
                          width="38" height="85"/>

                    <!-- Janitor -->
                    <rect x="390" y="455"
                          width="38" height="55"/>
                </g>

                <!-- IKON WANITA: MG1.03.02 -->
                <g stroke="#123B5D"
                   stroke-width="2"
                   fill="none"
                   stroke-linecap="round"
                   stroke-linejoin="round">

                    <circle cx="409" cy="197" r="5"
                            fill="#123B5D" stroke="none"/>

                    <path d="M409 203 L403 216 L415 216 Z"
                          fill="#123B5D" stroke="none"/>

                    <path d="M406 216 L404 225
                             M412 216 L414 225"/>
                </g>

                <!-- IKON TANGGA -->
                <g stroke="#123B5D"
                   stroke-width="2"
                   fill="none">

                    <path d="
                        M394 435
                        V425 H400
                        V415 H406
                        V405 H412
                        V395 H418
                    "/>

                    <path d="M394 435 H418"/>
                </g>

                <!-- IKON PRIA: MG1.03.09 -->
                <g stroke="#123B5D"
                   stroke-width="2"
                   fill="none"
                   stroke-linecap="round">

                    <circle cx="364" cy="380" r="5"
                            fill="#123B5D" stroke="none"/>

                    <path d="M364 386 V405
                             M364 391 L356 399
                             M364 391 L372 399
                             M364 405 L357 418
                             M364 405 L371 418"/>
                </g>

                <!-- LABEL RUANGAN -->
                <g font-size="14"
                   fill="#123B5D"
                   font-weight="bold"
                   text-anchor="middle">

                    <text x="555" y="135">MG1.03.03</text>
                    <text x="805" y="135">MG1.03.04</text>
                    <text x="965" y="180">MG1.03.05</text>

                    <text x="965" y="420">MG1.03.06</text>
                    <text x="805" y="420">MG1.03.07</text>
                    <text x="555" y="420">MG1.03.08</text>

                    <text x="405" y="215">MG1.03.02</text>
                    <text x="405" y="465">MG1.03.09</text>
                    <text x="405" y="495">MG1.03.10</text>
                </g>

                <!-- AREA KLIK RUANGAN -->
                <g class="room-click-layer"
                   fill="transparent"
                   stroke="transparent"
                   style="cursor:pointer">

                    <path data-room-code="MG1.03.01"
                          d="M25 75 H390 V485
                             H95 A205 205 0 0 1 25 75 Z"/>

                    <rect data-room-code="MG1.03.02"
                          x="390" y="185"
                          width="38" height="55"/>

                    <rect data-room-code="MG1.03.03"
                          x="430" y="75"
                          width="250" height="125"/>

                    <rect data-room-code="MG1.03.04"
                          x="680" y="75"
                          width="250" height="125"/>

                    <rect data-room-code="MG1.03.05"
                          x="930" y="75"
                          width="75" height="125"/>

                    <rect data-room-code="MG1.03.06"
                          x="930" y="350"
                          width="75" height="110"/>

                    <rect data-room-code="MG1.03.07"
                          x="680" y="350"
                          width="250" height="110"/>

                    <rect data-room-code="MG1.03.08"
                          x="430" y="350"
                          width="250" height="110"/>

                    <rect data-room-code="MG1.03.09"
                          x="345" y="365"
                          width="38" height="85"/>

                    <rect data-room-code="MG1.03.10"
                          x="390" y="455"
                          width="38" height="55"/>
                </g>

                <!-- PIN MERAH -->
                ${selectedPosition ? `
                    <g transform="translate(
                        ${selectedPosition[0]},
                        ${selectedPosition[1]}
                    )">

                        <circle cx="0" cy="0" r="24"
                                fill="#ef4444"
                                opacity="0.18"/>

                        <circle cx="0" cy="0" r="12"
                                fill="#ef4444"
                                stroke="#ffffff"
                                stroke-width="4"/>

                        <path d="M0 12 L-7 25 L7 25 Z"
                              fill="#ef4444"/>
                    </g>
                ` : ""}

            </svg>

            <div class="map-legend">
                <span class="legend-dot"></span>
                Lokasi ruangan yang dipilih
            </div>

        </div>
    `;

    // EVENT KLIK RUANGAN LANTAI 3
const floor3Svg = denahDisplay.querySelector("svg");

if (floor3Svg) {
    floor3Svg.addEventListener("click", function(event) {

        const clickedRoom =
            event.target.closest("[data-room-code]");

        if (!clickedRoom) return;

        const selectedCode =
            clickedRoom.dataset.roomCode;

        const selectedRoom =
            roomsMG1["03"].find(
                room => room.code === selectedCode
            );

        if (!selectedRoom) return;

        openCampusLocation(
            selectedRoom.name,
            "Ruangan Gedung MG1 lantai 3.",
            selectedRoom.code
        );
    });
}

denahSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

return;
}



if (floorNumber === "04") {

    const floor4Positions = {
    "MG1.04.01": [409, 210],
    "MG1.04.02": [515, 135],
    "MG1.04.03": [680, 135],
    "MG1.04.04": [845, 135],
    "MG1.04.05": [965, 135],
    "MG1.04.06": [965, 405],
    "MG1.04.07": [805, 405],
    "MG1.04.08": [555, 405],
    "MG1.04.10": [364, 405]
};

    const selectedPosition = floor4Positions[code];

    title.textContent = name;
    info.textContent = code
        ? `${code} — ${detail}`
        : detail;

    denahDisplay.innerHTML = `
        <div class="campus-map">

            <div class="map-caption">
                <strong>GEDUNG MG1</strong>
                <span>LANTAI 4</span>
            </div>

            <svg viewBox="0 0 1050 570"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="Denah Gedung MG1 lantai 4">

                <!-- BATAS DENAH: SAMA DENGAN LANTAI 3 -->
                <rect x="15" y="15"
                      width="1020" height="540"
                      rx="12"
                      fill="#f8fbff"
                      stroke="#123B5D"
                      stroke-width="3"/>

                <!-- BENTUK AREA KIRI: SAMA DENGAN LANTAI 3 -->
                <g stroke="#123B5D"
                   stroke-width="3"
                   stroke-linejoin="round">

                    <circle cx="230" cy="280" r="205"
                            fill="#e8f1fa"/>

                    <circle cx="230" cy="280" r="105"
                            fill="#ffffff"
                            stroke-width="4"/>

                    <path d="M230 175 L190 80
                             A205 205 0 0 0 65 150
                             L145 215 Z"
                          fill="#d7e7f6"/>

                    <path d="M145 215 L65 150
                             A205 205 0 0 0 35 330
                             L125 330 Z"
                          fill="#d7e7f6"/>

                    <path d="M125 330 L35 330
                             A205 205 0 0 0 95 445
                             L175 365 Z"
                          fill="#d7e7f6"/>

                    <path d="M175 365 L95 445
                             A205 205 0 0 0 365 445
                             L285 365 Z"
                          fill="#d7e7f6"/>

                    <path d="M190 80
                             A205 205 0 0 1 300 95
                             L285 175 L230 175 Z"
                          fill="#d7e7f6"/>

                    <path d="M300 95
                             A205 205 0 0 1 420 205
                             L330 245 L285 175 Z"
                          fill="#d7e7f6"/>
                </g>

                <!-- AREA TENGAH: SAMA DENGAN LANTAI 3 -->
                <g fill="#123B5D"
                   text-anchor="middle"
                   font-weight="bold"
                   font-size="18">

                    <text x="230" y="270">DAK</text>
                    <text x="230" y="294">BETON</text>
                </g>

                <!-- RUANGAN BAGIAN KANAN -->
                <g fill="#d7e7f6"
                   stroke="#123B5D"
                   stroke-width="3">

                    <!-- RUANG RAPAT 02 -->
                    <rect x="430" y="75"
                          width="167" height="125"/>

                    <!-- RUANG RAPAT 03 -->
                    <rect x="597" y="75"
                          width="167" height="125"/>

                    <!-- RUANG RAPAT 04 -->
                    <rect x="764" y="75"
                          width="166" height="125"/>

                    <!-- TANGGA 05 -->
                    <rect x="930" y="75"
                          width="75" height="125"/>

                    <!-- LABORATORIUM KOMPUTER 08 -->
                    <rect x="430" y="350"
                          width="250" height="110"/>

                    <!-- RUANG KELAS 07 -->
                    <rect x="680" y="350"
                          width="250" height="110"/>

                    <!-- RUANG SERVER 06 -->
                    <rect x="930" y="350"
                          width="75" height="110"/>
                </g>

                <!-- KORIDOR: SAMA DENGAN LANTAI 3 -->
                <rect x="430" y="225"
                      width="575" height="90"
                      fill="#ffffff"
                      stroke="#123B5D"
                      stroke-width="3"/>

                <text x="705" y="278"
                      text-anchor="middle"
                      fill="#64748b"
                      font-size="17">
                    KORIDOR / SELASAR
                </text>

                <!-- AREA SERVIS KIRI -->
<g stroke="#123B5D"
   stroke-width="2"
   fill="#ffffff">

    <!-- KM/WC PEREMPUAN 01 -->
<rect x="390" y="185"
      width="38" height="55"
      fill="#ffffff"
      stroke="#123B5D"
      stroke-width="2"/>

<!-- IKON PEREMPUAN -->
<g stroke="#123B5D"
   stroke-width="2"
   fill="none"
   stroke-linecap="round"
   stroke-linejoin="round">

    <circle cx="409" cy="197" r="5"
            fill="#123B5D" stroke="none"/>

    <path d="M409 203 L402 218 H416 Z"
          fill="#123B5D"
          stroke="none"/>

    <path d="M406 218 L404 226
             M412 218 L414 226"/>
</g>

<!-- KM/WC PRIA 10 -->
<rect x="345" y="365"
      width="38" height="85"
      fill="#ffffff"
      stroke="#123B5D"
      stroke-width="2"/>

<!-- IKON PRIA -->
<g stroke="#123B5D"
   stroke-width="2"
   fill="none"
   stroke-linecap="round">

    <circle cx="364" cy="380" r="5"
            fill="#123B5D"
            stroke="none"/>

    <path d="M364 386 V405
             M364 391 L356 399
             M364 391 L372 399
             M364 405 L357 418
             M364 405 L371 418"/>
</g>

<!-- TANGGA DI SAMPING KIRI LAB KOMPUTER -->
<rect x="390" y="350"
      width="40" height="110"
      fill="#ffffff"
      stroke="#123B5D"
      stroke-width="2"/>

<!-- GAMBAR ANAK TANGGA -->
<g stroke="#123B5D"
   stroke-width="2"
   fill="none">

    <path d="
        M395 445
        V435 H401
        V425 H407
        V415 H413
        V405 H419
        V395 H425
    "/>

    <path d="M395 445 H425"/>
</g>

                <!-- PERLENGKAPAN RUANG SERVER -->
                <g stroke="#123B5D"
                   stroke-width="2"
                   fill="#ffffff">

                    <rect x="942" y="370"
                          width="50" height="18"
                          rx="2"/>

                    <rect x="942" y="394"
                          width="50" height="18"
                          rx="2"/>

                    <rect x="942" y="418"
                          width="50" height="18"
                          rx="2"/>
                </g>

                <!-- LABEL RUANGAN -->
                <g font-size="13"
                   fill="#123B5D"
                   font-weight="bold"
                   text-anchor="middle">

                    <text x="409" y="230">MG1.04.01</text>

                    <text x="513" y="130">RUANG RAPAT</text>
                    <text x="513" y="150">MG1.04.02</text>

                    <text x="680" y="130">RUANG RAPAT</text>
                    <text x="680" y="150">MG1.04.03</text>

                    <text x="847" y="130">RUANG RAPAT</text>
                    <text x="847" y="150">MG1.04.04</text>

                    <text x="967" y="190">MG1.04.05</text>

                    <text x="967" y="445">MG1.04.06</text>

                    <text x="805" y="405">RUANG KELAS</text>
                    <text x="805" y="425">MG1.04.07</text>

                    <text x="555" y="405">LAB. KOMPUTER</text>
                    <text x="555" y="425">MG1.04.08</text>

                    <text x="364" y="465">MG1.04.09</text>
                    <text x="409" y="445">MG1.04.10</text>
                </g>

                <!-- AREA KLIK RUANGAN -->
                <g class="room-click-layer"
                   fill="transparent"
                   stroke="transparent"
                   style="cursor:pointer">

                    <rect data-room-code="MG1.04.01"
                          x="390" y="185"
                          width="38" height="55"/>

                    <rect data-room-code="MG1.04.02"
                          x="430" y="75"
                          width="167" height="125"/>

                    <rect data-room-code="MG1.04.03"
                          x="597" y="75"
                          width="167" height="125"/>

                    <rect data-room-code="MG1.04.04"
                          x="764" y="75"
                          width="166" height="125"/>

                    <rect data-room-code="MG1.04.05"
                          x="930" y="75"
                          width="75" height="125"/>

                    <rect data-room-code="MG1.04.06"
                          x="930" y="350"
                          width="75" height="110"/>

                    <rect data-room-code="MG1.04.07"
                          x="680" y="350"
                          width="250" height="110"/>

                    <rect data-room-code="MG1.04.08"
                          x="430" y="350"
                          width="250" height="110"/>

                    <rect data-room-code="MG1.04.09"
                          x="345" y="365"
                          width="38" height="85"/>

                    <rect data-room-code="MG1.04.10"
                          x="345" y="365"
                          width="38" height="85"/>
                </g>

                <!-- PIN MERAH -->
                ${selectedPosition ? `
                    <g transform="translate(
                        ${selectedPosition[0]},
                        ${selectedPosition[1]}
                    )">

                        <circle cx="0" cy="0" r="24"
                                fill="#ef4444"
                                opacity="0.18"/>

                        <circle cx="0" cy="0" r="12"
                                fill="#ef4444"
                                stroke="#ffffff"
                                stroke-width="4"/>

                        <path d="M0 12 L-7 25 L7 25 Z"
                              fill="#ef4444"/>
                    </g>
                ` : ""}

            </svg>

            <div class="map-legend">
                <span class="legend-dot"></span>
                Lokasi ruangan yang dipilih
            </div>

        </div>
    `;

    // EVENT KLIK RUANGAN LANTAI 4
    const floor4Svg = denahDisplay.querySelector("svg");

    if (floor4Svg) {
        floor4Svg.addEventListener("click", function(event) {

            const clickedRoom =
                event.target.closest("[data-room-code]");

            if (!clickedRoom) return;

            const selectedCode =
                clickedRoom.dataset.roomCode;

            const selectedRoom =
                roomsMG1["04"].find(
                    room => room.code === selectedCode
                );

            if (!selectedRoom) return;

            openCampusLocation(
                selectedRoom.name,
                "Ruangan Gedung MG1 lantai 4.",
                selectedRoom.code
            );
        });
    }

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    return;
}

if (floorNumber === "02") {

    const floor2Positions = {
        "MG1.02.01": [405, 195],
        "MG1.02.02": [535, 130],
        "MG1.02.03": [790, 130],
        "MG1.02.04": [965, 130],
        "MG1.02.05": [965, 405],
        "MG1.02.06": [790, 405],
        "MG1.02.07": [535, 405],
        "MG1.02.08": [405, 405],
        "MG1.02.09": [405, 470]
    };

    const selectedPosition = floor2Positions[code];

    title.textContent = name;
    info.textContent = code
        ? `${code} — ${detail}`
        : detail;

    denahDisplay.innerHTML = `
        <div class="campus-map">

            <div class="map-caption">
                <strong>GEDUNG MG1</strong>
                <span>LANTAI 2</span>
            </div>

            <svg viewBox="0 0 1050 570"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="Denah skematis Gedung MG1 lantai 2">

                <!-- BATAS DENAH -->
                <rect x="15" y="15"
                      width="1020" height="540"
                      rx="12"
                      fill="#f8fbff"
                      stroke="#123B5D"
                      stroke-width="3"/>

                <!-- AREA GEDUNG BAGIAN MELINGKAR -->
                <g stroke="#123B5D"
                   stroke-width="3"
                   stroke-linejoin="round">

                    <circle cx="230" cy="280" r="205"
                            fill="#e8f1fa"/>

                    <circle cx="230" cy="280" r="105"
                            fill="#ffffff"
                            stroke-width="4"/>

                    <!-- RUANGAN SISI KIRI -->
                    <path d="M230 175 L190 80
                             A205 205 0 0 0 65 150
                             L145 215 Z"
                          fill="#d7e7f6"/>

                    <path d="M145 215 L65 150
                             A205 205 0 0 0 35 330
                             L125 330 Z"
                          fill="#d7e7f6"/>

                    <path d="M125 330 L35 330
                             A205 205 0 0 0 95 445
                             L175 365 Z"
                          fill="#d7e7f6"/>

                    <path d="M175 365 L95 445
                             A205 205 0 0 0 365 445
                             L285 365 Z"
                          fill="#d7e7f6"/>

                    <path d="M190 80
                             A205 205 0 0 1 300 95
                             L285 175 L230 175 Z"
                          fill="#d7e7f6"/>

                    <path d="M300 95
                             A205 205 0 0 1 420 205
                             L330 245 L285 175 Z"
                          fill="#d7e7f6"/>

                </g>

                <!-- AREA TENGAH -->
                <g fill="#123B5D"
                   text-anchor="middle"
                   font-weight="bold"
                   font-size="18">

                    <text x="230" y="270">AREA</text>
                    <text x="230" y="294">TENGAH</text>

                </g>

                <!-- RUANGAN BAGIAN KANAN -->
                <g fill="#d7e7f6"
                   stroke="#123B5D"
                   stroke-width="3">

                    <!-- BAGIAN ATAS -->
                    <rect x="430" y="75"
                          width="250" height="125"/>

                    <rect x="680" y="75"
                          width="250" height="125"/>

                    <rect x="930" y="75"
                          width="75" height="125"/>

                    <!-- BAGIAN BAWAH -->
                    <rect x="430" y="350"
                          width="250" height="110"/>

                    <rect x="680" y="350"
                          width="250" height="110"/>

                    <rect x="930" y="350"
                          width="75" height="110"/>

                </g>

                <!-- KORIDOR -->
                <rect x="410" y="225"
                      width="595" height="90"
                      fill="#ffffff"
                      stroke="#123B5D"
                      stroke-width="3"/>

                <text x="705" y="278"
                      text-anchor="middle"
                      fill="#64748b"
                      font-size="17">
                    KORIDOR / SELASAR
                </text>

                <!-- TANGGA -->
                <g stroke="#123B5D"
                   stroke-width="2"
                   fill="#ffffff">

                    <rect x="970" y="80"
                          width="35" height="120"/>

                    <path d="
                        M970 92 H1005
                        M970 104 H1005
                        M970 116 H1005
                        M970 128 H1005
                        M970 140 H1005
                        M970 152 H1005
                        M970 164 H1005
                        M970 176 H1005
                        M970 188 H1005
                    "/>

                </g>

                <!-- PEMBAGIAN AREA SERVIS LANTAI 2 -->
<g stroke="#123B5D" stroke-width="2" fill="#ffffff">

    <!-- Toilet wanita, sebelah kiri ruang 02 -->
    <rect x="390" y="185" width="38" height="55"/>

    <!-- Tangga, sebelah kiri ruang 07 -->
    <rect x="390" y="365" width="38" height="85"/>

    <!-- Toilet pria, setelah tangga ke arah kiri -->
    <rect x="345" y="365" width="38" height="85"/>

</g>

<!-- IKON WANITA -->
<g stroke="#123B5D" stroke-width="2" fill="none"
   stroke-linecap="round" stroke-linejoin="round">
    <circle cx="409" cy="197" r="5" fill="#123B5D" stroke="none"/>
    <path d="M409 203 L403 216 L415 216 Z" fill="#123B5D" stroke="none"/>
    <path d="M409 205 L402 211 M409 205 L416 211"/>
    <path d="M406 216 L404 225 M412 216 L414 225"/>
</g>

<!-- IKON TANGGA -->
<g stroke="#123B5D" stroke-width="2" fill="none">
    <path d="
        M394 435
        V425 H400
        V415 H406
        V405 H412
        V395 H418
    "/>
    <path d="M394 435 H418"/>
</g>

<!-- IKON PEREMPUAN: MG1.04.01 -->
<g stroke="#123B5D"
   stroke-width="2"
   fill="none"
   stroke-linecap="round"
   stroke-linejoin="round">

    <!-- Kepala -->
    <circle cx="409" cy="197" r="5"
            fill="#123B5D" stroke="none"/>

    <!-- Badan dan rok -->
    <path d="M409 203
             L402 218
             H416 Z"
          fill="#123B5D"
          stroke="none"/>

    <!-- Kaki -->
    <path d="M406 218 L404 226
             M412 218 L414 226"/>
</g>

<!-- IKON PRIA -->
<g stroke="#123B5D" stroke-width="2"
   fill="none" stroke-linecap="round">
    <circle cx="364" cy="380" r="5" fill="#123B5D" stroke="none"/>
    <path d="M364 386 V405"/>
    <path d="M364 391 L356 399 M364 391 L372 399"/>
    <path d="M364 405 L357 418 M364 405 L371 418"/>
</g>

                <!-- LABEL RUANGAN -->
                <g font-size="14"
                   fill="#123B5D"
                   font-weight="bold"
                   text-anchor="middle">

                    <text x="115" y="150">AREA</text>
                    <text x="245" y="105">AREA</text>
                    <text x="350" y="145">AREA</text>
                    <text x="100" y="345">AREA</text>
                    <text x="230" y="445">AREA</text>

                    <text x="555" y="135">MG1.02.02</text>
                    <text x="805" y="135">MG1.02.03</text>
                    <text x="965" y="215">MG1.02.04</text>

                    <text x="405" y="215">MG1.02.01</text>

                    <text x="555" y="420">MG1.02.07</text>
                    <text x="805" y="420">MG1.02.06</text>
                    <text x="965" y="420">MG1.02.05</text>

                    <text x="405" y="465">MG1.02.08</text>
                    <text x="405" y="495">MG1.02.09</text>

                </g>

                <!-- AREA KLIK RUANGAN -->
                <g class="room-click-layer"
                   fill="transparent"
                   stroke="transparent"
                   style="cursor:pointer">

                    <path data-room-code="MG1.02.01"
                          d="M390 185 H428 V240 H390 Z"/>

                    <rect data-room-code="MG1.02.02"
                          x="430" y="75"
                          width="250" height="125"/>

                    <rect data-room-code="MG1.02.03"
                          x="680" y="75"
                          width="250" height="125"/>

                    <rect data-room-code="MG1.02.04"
                          x="930" y="75"
                          width="75" height="125"/>

                    <rect data-room-code="MG1.02.05"
                          x="930" y="350"
                          width="75" height="110"/>

                    <rect data-room-code="MG1.02.06"
                          x="680" y="350"
                          width="250" height="110"/>

                    <rect data-room-code="MG1.02.07"
                          x="430" y="350"
                          width="250" height="110"/>

                    <rect data-room-code="MG1.02.08"
                          x="390" y="365"
                          width="38" height="40"/>

                    <rect data-room-code="MG1.02.09"
                          x="390" y="405"
                          width="38" height="45"/>

                </g>

                <!-- PIN MERAH -->
                ${selectedPosition ? `
                    <g transform="translate(
                        ${selectedPosition[0]},
                        ${selectedPosition[1]}
                    )">

                        <circle cx="0" cy="0" r="24"
                                fill="#ef4444"
                                opacity="0.18"/>

                        <circle cx="0" cy="0" r="12"
                                fill="#ef4444"
                                stroke="#ffffff"
                                stroke-width="4"/>

                        <path d="M0 12 L-7 25 L7 25 Z"
                              fill="#ef4444"/>

                    </g>
                ` : ""}

            </svg>

            <div class="map-legend">
                <span class="legend-dot"></span>
                Lokasi ruangan yang dipilih
            </div>

        </div>
    `;

    // EVENT KLIK RUANGAN
    const floor2Svg = denahDisplay.querySelector("svg");

    if (floor2Svg) {
        floor2Svg.addEventListener("click", function(event) {

            const clickedRoom =
                event.target.closest("[data-room-code]");

            if (!clickedRoom) return;

            const selectedCode =
                clickedRoom.dataset.roomCode;

            const selectedRoom =
                roomsMG1["02"].find(
                    room => room.code === selectedCode
                );

            if (!selectedRoom) return;

            openCampusLocation(
                selectedRoom.name,
                "Ruangan Gedung MG1 lantai 2.",
                selectedRoom.code
            );

        });
    }

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    return;
}

    // Posisi sementara penanda ruangan MG1 lantai 1
    const roomPositions = {
        "MG1.01.00": [190, 425],
        "MG1.01.01": [105, 310],
        "MG1.01.02": [105, 165],
        "MG1.01.03": [285, 100],
        "MG1.01.04": [345, 145],
        "MG1.01.05": [425, 205],
        "MG1.01.06": [565, 145],
        "MG1.01.07": [780, 145],
        "MG1.01.08": [930, 385],
        "MG1.01.09": [850, 385],
        "MG1.01.10": [750, 385],
        "MG1.01.11": [565, 385]
    };

    const selectedPosition = roomPositions[code];

    title.textContent = name;
    info.textContent = code
        ? `${code} — ${detail}`
        : detail;

    denahDisplay.innerHTML = `
        <div class="campus-map">
            <div class="map-caption">
                <strong>GEDUNG MG1</strong>
                <span>LANTAI 1</span>
            </div>

            <svg viewBox="0 0 1050 570"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="Denah skematis Gedung MG1 lantai 1">

                <rect x="15" y="15" width="1020" height="540"
                      rx="12" fill="#f8fbff"
                      stroke="#123B5D" stroke-width="3"/>

                <!-- AREA GEDUNG MG1 BAGIAN MELENGKUNG -->
<g stroke="#123B5D" stroke-width="3"
   stroke-linejoin="round">

    <!-- Area luar bangunan -->
    <circle cx="230" cy="280" r="205"
            fill="#e8f1fa"/>

    <!-- Area tengah / lobby -->
    <circle cx="230" cy="280" r="105"
            fill="#ffffff" stroke-width="4"/>

    <!-- Pembagian ruang sisi kiri -->
    <path d="M230 175 L190 80
             A205 205 0 0 0 65 150
             L145 215 Z"
          fill="#d7e7f6"/>

    <path d="M145 215 L65 150
             A205 205 0 0 0 35 330
             L125 330 Z"
          fill="#d7e7f6"/>

    <path d="M125 330 L35 330
             A205 205 0 0 0 95 445
             L175 365 Z"
          fill="#d7e7f6"/>

    <!-- Area lobby bagian bawah -->
    <path d="M175 365 L95 445
             A205 205 0 0 0 365 445
             L285 365 Z"
          fill="#d7e7f6"/>

    <!-- Area pelayanan -->
    <path d="M190 80
             A205 205 0 0 1 300 95
             L285 175 L230 175 Z"
          fill="#d7e7f6"/>

    <!-- Ruang bagian lengkungan kanan -->
    <path d="M300 95
             A205 205 0 0 1 420 205
             L330 245 L285 175 Z"
          fill="#d7e7f6"/>

    <!-- Batas area tengah -->
    <circle cx="230" cy="280" r="105"
            fill="none" stroke-width="4"/>
</g>

<!-- LABEL AREA TENGAH -->
<text x="230" y="270" text-anchor="middle"
      font-size="18" fill="#123B5D"
      font-weight="bold">AREA</text>

<text x="230" y="294" text-anchor="middle"
      font-size="18" fill="#123B5D"
      font-weight="bold">TENGAH</text>

                <!-- Ruangan bagian kanan -->
                <g fill="#d7e7f6" stroke="#123B5D" stroke-width="3">
                    <rect x="430" y="75" width="250" height="125"/>
                    <rect x="680" y="75" width="190" height="125"/>
                    <rect x="870" y="75" width="105" height="125"/>

                    <rect x="430" y="350" width="250" height="110"/>
                    <rect x="680" y="350" width="190" height="110"/>
                    <rect x="870" y="350" width="105" height="110"/>
                </g>

                <!-- Koridor -->
                <rect x="410" y="225" width="565" height="90"
                      fill="#ffffff" stroke="#123B5D"
                      stroke-width="3"/>

                <text x="690" y="278" text-anchor="middle"
                      font-size="17" fill="#64748b">
                    KORIDOR / SELASAR
                </text>

<!-- DETAIL TOILET DAN AREA SERVIS -->
<g stroke="#123B5D" stroke-width="2" fill="#ffffff">

    <!-- Area toilet dekat koridor -->
    <rect x="390" y="185" width="38" height="55" rx="2"/>
    <line x1="390" y1="212" x2="428" y2="212"/>

    <!-- Simbol kloset -->

    <!-- Area tangga sisi kanan -->
    <rect x="980" y="80" width="38" height="120"/>
    <line x1="980" y1="92" x2="1018" y2="92"/>
    <line x1="980" y1="104" x2="1018" y2="104"/>
    <line x1="980" y1="116" x2="1018" y2="116"/>
    <line x1="980" y1="128" x2="1018" y2="128"/>
    <line x1="980" y1="140" x2="1018" y2="140"/>
    <line x1="980" y1="152" x2="1018" y2="152"/>
    <line x1="980" y1="164" x2="1018" y2="164"/>
    <line x1="980" y1="176" x2="1018" y2="176"/>
    <line x1="980" y1="188" x2="1018" y2="188"/>

    <!-- Area tangga dekat sisi kiri bawah -->
    <rect x="390" y="365" width="32" height="85"/>
    <line x1="390" y1="375" x2="422" y2="375"/>
    <line x1="390" y1="385" x2="422" y2="385"/>
    <line x1="390" y1="395" x2="422" y2="395"/>
    <line x1="390" y1="405" x2="422" y2="405"/>
    <line x1="390" y1="415" x2="422" y2="415"/>
    <line x1="390" y1="425" x2="422" y2="425"/>
    <line x1="390" y1="435" x2="422" y2="435"/>
</g>

<!-- TOILET LAKI-LAKI DI SEBELAH KIRI TANGGA BAWAH -->
<g stroke="#123B5D" stroke-width="2" fill="#ffffff">
    <rect x="345" y="365" width="38" height="85" rx="2"/>
    <line x1="345" y1="407" x2="383" y2="407"/>
</g>


<!-- GAMBAR ORANG-ORANGAN TOILET PRIA -->
<g fill="#123B5D" stroke="#123B5D"
   stroke-width="3" stroke-linecap="round">

    <!-- Kepala -->
    <circle cx="364" cy="377" r="5" stroke="none"/>

    <!-- Badan -->
    <path d="M364 384 L364 402" fill="none"/>

    <!-- Tangan -->
    <path d="M364 389 L356 398 M364 389 L372 398"
          fill="none"/>

    <!-- Kaki -->
    <path d="M364 402 L357 415 M364 402 L371 415"
          fill="none"/>
</g>

<!-- LABEL TOILET PRIA -->
<text x="364" y="438" text-anchor="middle"
      fill="#123B5D" font-size="9" font-weight="bold">
    TOILET PRIA
</text>


<!-- GAMBAR ORANG-ORANGAN TOILET WANITA -->
<g fill="#123B5D" stroke="#123B5D"
   stroke-width="2" stroke-linecap="round">

    <!-- Kepala -->
    <circle cx="409" cy="193" r="5" stroke="none"/>

    <!-- Badan dan rok -->
    <path d="M409 200 L404 210 L414 210 Z"
          stroke="none"/>

    <!-- Tangan -->
    <path d="M409 201 L402 207 M409 201 L416 207"
          fill="none"/>

    <!-- Kaki -->
    <path d="M407 210 L405 220 M411 210 L413 220"
          fill="none"/>
</g>

<!-- LABEL TOILET WANITA -->
<text x="409" y="255" text-anchor="middle"
      fill="#123B5D" font-size="10" font-weight="bold">
    TOILET
</text>

<!-- LABEL TANGGA -->
<g fill="#123B5D" font-size="10" font-weight="bold"
   text-anchor="middle">
    <text x="999" y="215">TANGGA</text>
    <text x="406" y="465">TANGGA</text>
</g>


<!-- DETAIL PINTU DAN BUKAAN -->
<g stroke="#123B5D" stroke-width="2" fill="none">

    <!-- Pintu ruang atas -->
    <path d="M500 200 L500 185 A15 15 0 0 1 515 200"/>
    <path d="M680 200 L680 185 A15 15 0 0 1 695 200"/>
    <path d="M870 200 L870 185 A15 15 0 0 1 885 200"/>

    <!-- Pintu ruang bawah -->
    <path d="M500 350 L500 365 A15 15 0 0 0 515 350"/>
    <path d="M680 350 L680 365 A15 15 0 0 0 695 350"/>
    <path d="M870 350 L870 365 A15 15 0 0 0 885 350"/>
</g>


                <!-- Label ruangan -->
                <g font-size="14" fill="#123B5D"
                   font-weight="bold" text-anchor="middle">
                    <text x="115" y="150">MG1.01.02</text>
                    <text x="245" y="105">MG1.01.03</text>
                    <text x="350" y="145">MG1.01.04</text>
                    <text x="100" y="345">MG1.01.01</text>
                    <text x="230" y="445">MG1.01.00</text>
                    <text x="425" y="215">MG1.01.05</text>
                    <text x="555" y="135">MG1.01.06</text>
                    <text x="775" y="135">MG1.01.07</text>
                    <text x="920" y="185">MG1.01.08</text>
                    <text x="920" y="445">MG1.01.09</text>
                    <text x="775" y="420">MG1.01.10</text>
                    <text x="555" y="420">MG1.01.11</text>
                </g>


<!-- AREA KLIK RUANGAN DENAH MG1 -->
<g class="room-click-layer" fill="transparent"
   stroke="transparent" style="cursor:pointer">

    <!-- Bagian melengkung sebelah kiri -->
    <path data-room-code="MG1.01.02"
          d="M75 150 Q105 95 170 80 L185 175 L125 215 Z"/>

    <path data-room-code="MG1.01.03"
          d="M185 75 Q245 55 300 85 L285 180 L190 175 Z"/>

    <path data-room-code="MG1.01.04"
          d="M305 90 Q355 115 385 170 L320 220 L285 180 Z"/>

    <path data-room-code="MG1.01.01"
          d="M55 350 Q65 410 120 445 L165 365 L105 320 Z"/>

    <path data-room-code="MG1.01.00"
          d="M165 470 Q230 495 295 470 L280 385 L185 385 Z"/>

    <!-- Ruangan penghubung -->
    <rect data-room-code="MG1.01.05"
          x="390" y="185" width="38" height="55"/>

    <!-- Bagian kanan atas -->
    <rect data-room-code="MG1.01.06"
          x="430" y="75" width="250" height="125"/>

    <rect data-room-code="MG1.01.07"
          x="680" y="75" width="190" height="125"/>

    <rect data-room-code="MG1.01.08"
          x="870" y="75" width="105" height="125"/>

    <!-- Bagian kanan bawah -->
    <rect data-room-code="MG1.01.11"
          x="430" y="350" width="250" height="110"/>

    <rect data-room-code="MG1.01.10"
          x="680" y="350" width="190" height="110"/>

    <rect data-room-code="MG1.01.09"
          x="870" y="350" width="105" height="110"/>
</g>


                <!-- Penanda lokasi terpilih -->
                ${selectedPosition ? `
                    <g transform="translate(${selectedPosition[0]}, ${selectedPosition[1]})">
                        <circle cx="0" cy="0" r="24"
                                fill="#ef4444" opacity="0.18"/>
                        <circle cx="0" cy="0" r="12"
                                fill="#ef4444" stroke="#ffffff"
                                stroke-width="4"/>
                        <path d="M0 12 L-7 25 L7 25 Z"
                              fill="#ef4444"/>
                    </g>
                ` : ""}
            </svg>

            <div class="map-legend">
                <span class="legend-dot"></span>
                Lokasi ruangan yang dipilih
            </div>
        </div>
    `;
        // MENGAKTIFKAN KLIK PADA RUANGAN DENAH
    const campusSvg = denahDisplay.querySelector("svg");

    if (campusSvg) {
        campusSvg.addEventListener("click", function(event) {
            const clickedRoom = event.target.closest("[data-room-code]");

            if (!clickedRoom) return;

            const code = clickedRoom.dataset.roomCode;

            const selectedRoom = Object.values(roomsMG1)
                .flat()
                .find(room => room.code === code);

            if (!selectedRoom) return;

            openCampusLocation(
                selectedRoom.name,
                "Ruangan Gedung MG1.",
                selectedRoom.code
            );
        });
    }

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// DENAH INTERAKTIF GEDUNG MG2
function renderMG2Map(name, detail, code) {

    const title = document.getElementById("selectedRoomTitle");
    const info = document.getElementById("selectedRoomInfo");
    const denahDisplay = document.getElementById("denahDisplay");
    const denahSection = document.getElementById("denah");

    if (!title || !info || !denahDisplay || !denahSection) {
        console.error("Elemen denah MG2 tidak ditemukan.");
        return;
    }

    // Posisi setiap ruangan pada denah MG2
    const roomBoxes = [
        { code: "MG2.01.01", x: 290, y: 100, w: 95, h: 120 },
        { code: "MG2.01.02", x: 390, y: 100, w: 95, h: 120 },
        { code: "MG2.01.03", x: 490, y: 100, w: 95, h: 120 },
        { code: "MG2.01.04", x: 590, y: 100, w: 95, h: 120 },
        { code: "MG2.01.05", x: 690, y: 100, w: 95, h: 120 },
        { code: "MG2.01.06", x: 790, y: 100, w: 95, h: 120 },
        { code: "MG2.01.07", x: 890, y: 100, w: 95, h: 120 },

        { code: "MG2.01.08", x: 290, y: 390, w: 110, h: 100 },
        { code: "MG2.01.09", x: 410, y: 390, w: 110, h: 100 },
        { code: "MG2.01.10", x: 530, y: 390, w: 110, h: 100 },
        { code: "MG2.01.11", x: 290, y: 510, w: 110, h: 100 },
        { code: "MG2.01.12", x: 410, y: 510, w: 110, h: 100 }
    ];

    const selectedBox = roomBoxes.find(
        room => room.code === code
    );

    const selectedPosition = selectedBox
        ? [
            selectedBox.x + selectedBox.w / 2,
            selectedBox.y + selectedBox.h / 2
        ]
        : null;

    const roomShapes = roomBoxes.map(box => {
        const room = roomsMG2.find(
            item => item.code === box.code
        );

        return `
            <rect
                x="${box.x}"
                y="${box.y}"
                width="${box.w}"
                height="${box.h}"
                rx="5"
                fill="#d7e7f6"
                stroke="#123B5D"
                stroke-width="3"
            />

            <text
                x="${box.x + box.w / 2}"
                y="${box.y + box.h / 2 - 5}"
                text-anchor="middle"
                fill="#123B5D"
                font-size="13"
                font-weight="bold">
                ${box.code}
            </text>

            <text
                x="${box.x + box.w / 2}"
                y="${box.y + box.h / 2 + 15}"
                text-anchor="middle"
                fill="#123B5D"
                font-size="10">
                ${room ? room.name : ""}
            </text>
        `;
    }).join("");

    const clickableRooms = roomBoxes.map(box => `
        <rect
            data-room-code="${box.code}"
            x="${box.x}"
            y="${box.y}"
            width="${box.w}"
            height="${box.h}"
            fill="transparent"
            stroke="transparent"
            style="cursor:pointer"
        />
    `).join("");

    title.textContent = name;
    info.textContent = code
        ? `${code} — ${detail}`
        : detail;

    denahDisplay.innerHTML = `
        <div class="campus-map">

            <div class="map-caption">
                <strong>GEDUNG LABORATORIUM MRANGGEN</strong>
                <span>DENAH MG2</span>
            </div>

            <svg
                viewBox="0 0 1100 700"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Denah interaktif Gedung Laboratorium Mranggen">

                <!-- AREA DASAR -->
                <rect
                    x="15" y="15"
                    width="1070" height="670"
                    rx="12"
                    fill="#f8fbff"
                    stroke="#123B5D"
                    stroke-width="3"
                />


                <!-- AREA TOILET -->
                <rect
                    x="40" y="225"
                    width="210" height="100"
                    rx="5"
                    fill="#e8f1fa"
                    stroke="#123B5D"
                    stroke-width="3"
                />
                <text x="145" y="282"
                    text-anchor="middle"
                    fill="#123B5D"
                    font-size="17"
                    font-weight="bold">
                    TOILET
                </text>

                <!-- AREA RUANGAN -->
                <g>
                    ${roomShapes}
                </g>

                <!-- KORIDOR -->
                <rect
                    x="270" y="250"
                    width="730" height="90"
                    rx="4"
                    fill="#ffffff"
                    stroke="#123B5D"
                    stroke-width="3"
                />

                <text x="635" y="302"
                    text-anchor="middle"
                    fill="#64748b"
                    font-size="18">
                    KORIDOR / SELASAR
                </text>


                <!-- AREA GAZEBO -->
                <rect
                    x="680" y="510"
                    width="140" height="100"
                    rx="5"
                    fill="#e8f1fa"
                    stroke="#123B5D"
                    stroke-width="3"
                />

                <text x="750" y="565"
                    text-anchor="middle"
                    fill="#123B5D"
                    font-size="16"
                    font-weight="bold">
                    GAZEBO
                </text>

                <!-- PINTU MASUK -->
                <rect
                    x="850" y="510"
                    width="140" height="100"
                    rx="5"
                    fill="#dcebdc"
                    stroke="#123B5D"
                    stroke-width="3"
                />

                <text x="920" y="565"
                    text-anchor="middle"
                    fill="#123B5D"
                    font-size="16"
                    font-weight="bold">
                    PINTU MASUK
                </text>

                <!-- AREA KLIK RUANGAN -->
                <g class="room-click-layer">
                    ${clickableRooms}
                </g>

                <!-- PIN LOKASI RUANGAN -->
                ${selectedPosition ? `
                    <g transform="translate(
                        ${selectedPosition[0]},
                        ${selectedPosition[1]}
                    )">
                        <circle
                            cx="0" cy="0" r="25"
                            fill="#ef4444"
                            opacity="0.18"
                        />

                        <circle
                            cx="0" cy="0" r="12"
                            fill="#ef4444"
                            stroke="#ffffff"
                            stroke-width="4"
                        />

                        <path
                            d="M0 12 L-7 25 L7 25 Z"
                            fill="#ef4444"
                        />
                    </g>
                ` : ""}

            </svg>

            <div class="map-legend">
                <span class="legend-dot"></span>
                Lokasi ruangan yang dipilih
            </div>

        </div>
    `;

    // EVENT KLIK PADA DENAH MG2
    const mg2Svg = denahDisplay.querySelector("svg");

    if (mg2Svg) {
        mg2Svg.addEventListener("click", function(event) {

            const clickedRoom = event.target.closest(
                "[data-room-code]"
            );

            if (!clickedRoom) return;

            const selectedCode = clickedRoom.dataset.roomCode;

            const selectedRoom = roomsMG2.find(
                room => room.code === selectedCode
            );

            if (!selectedRoom) return;

            openCampusLocation(
                selectedRoom.name,
                "Ruangan Gedung Laboratorium Mranggen.",
                selectedRoom.code
            );
        });
    }

    denahSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// 7. TOMBOL LIHAT LOKASI RUANGAN MG1 DAN MG2

document.querySelectorAll(".room-location-button").forEach(button => {

    button.addEventListener("click", () => {

        const code = button.dataset.roomCode;

        let selectedRoom = null;

        // Cari ruangan MG1
        Object.values(roomsMG1).forEach(rooms => {
            const found = rooms.find(room => room.code === code);
            if (found) selectedRoom = found;
        });

        // Jika tidak ditemukan di MG1, cari di MG2
        if (!selectedRoom) {
            selectedRoom = roomsMG2.find(
                room => room.code === code
            );
        }

        if (!selectedRoom) return;

        const buildingCard = button.closest(".building-card");

        if (buildingCard) {
            buildingCard.classList.add("active");
        }

        const floorDetails = button.closest(".floor-group");

        if (floorDetails) {
            floorDetails.open = true;
        }

        const buildingName = code.startsWith("MG2.")
            ? "Gedung Laboratorium Mranggen"
            : "Gedung MG1";

        openCampusLocation(
            selectedRoom.name,
            `Ruangan ${buildingName}.`,
            selectedRoom.code
        );

    });

});


// 8. TOMBOL FASILITAS TUNGGAL

document.querySelectorAll(".facility-card").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.location;
        const facility = campusFacilities[key];

        console.log("Tombol diklik:", key);
        console.log("Data fasilitas:", facility); 
 
        if (!facility) return;

        openCampusLocation(facility.name, facility.detail);
    });

});


// 5. PENYIMPANAN LAPORAN

const complaintForm = document.getElementById("complaintForm");
const reportList = document.getElementById("reportList");

let reports = [];

try {
    reports = JSON.parse(
        localStorage.getItem("unesaksesReports")
    ) || [];
} catch (error) {
    reports = [];
}


// Menyesuaikan laporan lama agar tetap dapat ditampilkan.
reports = reports.map(report => ({
    ...report,
    location: report.location || "-",
    status: report.status || "Menunggu"
}));


// 6. MENGAMANKAN TEKS

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}


// 7. MENAMPILKAN DAFTAR LAPORAN

function displayReports() {
    if (!reportList) return;

    reportList.innerHTML = "";

    if (reports.length === 0) {
        reportList.innerHTML = `
            <p class="empty-report">
                Belum ada laporan yang dikirim.
            </p>
        `;
        return;
    }

    reports.slice().reverse().forEach(report => {
        const card = document.createElement("div");
        card.className = "report-card";

        card.innerHTML = `
            <div class="report-header">
                <h3>${escapeHTML(report.facility)}</h3>

                <span class="report-status">
                    ${escapeHTML(report.status)}
                </span>
            </div>

            <p>
                <strong>Kode Laporan:</strong>
                ${escapeHTML(report.ticket || "-")}
            </p>

            <p>
                <strong>Lokasi:</strong>
                ${escapeHTML(report.location)}
            </p>

            <p>
                <strong>Kategori:</strong>
                ${escapeHTML(report.category)}
            </p>

            <p>${escapeHTML(report.description)}</p>

            <p class="report-date">
                ${escapeHTML(report.date)}
            </p>

            ${report.image ? `
                <img
                    src="${report.image}"
                    alt="Foto laporan"
                    class="report-image"
                >
            ` : ""}
        `;

        reportList.appendChild(card);
    });
}


// 8. MEMPERBARUI RINGKASAN LAPORAN

function updateSummary() {
    const total = reports.length;

    const pending = reports.filter(
        report => report.status === "Menunggu"
    ).length;

    const progress = reports.filter(
        report => report.status === "Sedang Diperbaiki"
    ).length;

    const completed = reports.filter(
        report => report.status === "Selesai"
    ).length;

    document.getElementById("totalReports").textContent = total;
    document.getElementById("pendingReports").textContent = pending;
    document.getElementById("progressReports").textContent = progress;
    document.getElementById("completedReports").textContent = completed;

    updateChart(pending, progress, completed);
}


// 9. GRAFIK PENGADUAN

let reportChart = null;

function updateChart(pending, progress, completed) {

    const reports = JSON.parse(
        localStorage.getItem("unesaksesReports") || "[]"
    );

    const total = reports.length;

    // Mengelompokkan laporan berdasarkan kategori
    const categories = {};

    reports.forEach(report => {
        const category = report.category || "Lainnya";

        if (!categories[category]) {
            categories[category] = {
                pending: 0,
                progress: 0,
                completed: 0
            };
        }

        if (report.status === "Menunggu") {
            categories[category].pending++;
        } else if (report.status === "Sedang Diperbaiki") {
            categories[category].progress++;
        } else if (report.status === "Selesai") {
            categories[category].completed++;
        }
    });

    // Ambil empat kategori dengan laporan terbanyak
    const topCategories = Object.entries(categories)
        .sort((a, b) =>
            (b[1].pending + b[1].progress + b[1].completed) -
            (a[1].pending + a[1].progress + a[1].completed)
        )
        .slice(0, 4);

    const labels = topCategories.length
        ? topCategories.map(item => item[0])
        : ["Belum ada data"];

    const pendingData = topCategories.map(item => item[1].pending);
    const progressData = topCategories.map(item => item[1].progress);
    const completedData = topCategories.map(item => item[1].completed);

    const ctx = document.getElementById("reportChart");

    if (reportChart) {
        reportChart.destroy();
    }

    reportChart = new Chart(ctx, {
        type: "bar",

        data: {
            labels: labels,
            datasets: [
                {
                    label: "Menunggu",
                    data: pendingData,
                    backgroundColor: "#91B1F2",
                    stack: "status"
                },
                {
                    label: "Sedang Diperbaiki",
                    data: progressData,
                    backgroundColor: "#5786E8",
                    stack: "status"
                },
                {
                    label: "Selesai",
                    data: completedData,
                    backgroundColor: "#315BB5",
                    stack: "status"
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    position: "top"
                }
            },

            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });

    // Menghitung persentase berdasarkan jumlah laporan
    function setProgress(barId, textId, value) {
        const percent = total > 0
            ? Math.round((value / total) * 100)
            : 0;

        document.getElementById(barId).style.width =
            percent + "%";

        document.getElementById(textId).textContent =
            percent + "%";
    }

    setProgress("totalProgress", "totalPercentage", total > 0 ? total : 0);
    setProgress("pendingProgress", "pendingPercentage", pending);
    setProgress("progressBar", "progressPercentage", progress);
setProgress("completedProgress", "completedPercentage", completed);
}

// 10. MENGIRIM PENGADUAN

if (complaintForm) {
    complaintForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const facility = document
            .getElementById("facilityName").value.trim();

        const location = document
            .getElementById("reportLocation").value.trim();

        const category = document
            .getElementById("reportCategory").value;

        const description = document
            .getElementById("reportDescription").value.trim();

        const imageInput = document.getElementById("reportImage");
        const file = imageInput.files[0];

        if (!facility || !location || !category || !description) {
            alert("Mohon lengkapi semua data pengaduan.");
            return;
        }

        if (file && !file.type.startsWith("image/")) {
            alert("File harus berupa gambar.");
            return;
        }

        if (file && file.size > 2 * 1024 * 1024) {
            alert("Ukuran gambar maksimal 2 MB.");
            return;
        }

        function saveReport(imageData = "") {
            const newReport = {
                id: Date.now(),
                ticket: "UNS-" + Date.now().toString().slice(-8),
                facility: facility,
                location: location,
                category: category,
                description: description,
                image: imageData,
                status: "Menunggu",
                date: new Date().toLocaleString("id-ID")
            };

            reports.push(newReport);

            try {
                localStorage.setItem(
                    "unesaksesReports",
                    JSON.stringify(reports)
                );
            } catch (error) {
                reports.pop();

                alert(
                    "Penyimpanan gagal. Ukuran foto mungkin terlalu besar."
                );
                return;
            }

            displayReports();
            updateSummary();
            complaintForm.reset();

            alert(
                "Pengaduan berhasil dikirim!\n" +
                "Kode laporan kamu: " + newReport.ticket
            );

            document.getElementById("status").scrollIntoView({
                behavior: "smooth"
            });
        }

        if (file) {
            const reader = new FileReader();

            reader.onload = function() {
                saveReport(reader.result);
            };

            reader.onerror = function() {
                alert("Gagal membaca foto. Silakan coba lagi.");
            };

            reader.readAsDataURL(file);
        } else {
            saveReport();
        }
    });
}


// 11. MENAMPILKAN DATA SAAT WEBSITE DIBUKA

displayReports();
updateSummary();


// 12. EFEK NAVBAR SAAT SCROLL

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
    }
});


// 13. NAVIGASI AKTIF

document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".navbar nav a").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

