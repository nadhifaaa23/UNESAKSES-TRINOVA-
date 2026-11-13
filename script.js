
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
        detail: "Area parkir kendaraan kampus."
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
                data-room-code="${escapeHTML(room.code)}">
                <i class="fa-solid fa-location-dot"></i>
                Lihat Lokasi
            </button>
        </div>
    `).join("");

});


// 5. DATA GEDUNG MG2
// Menunggu pencocokan daftar lantai dan ruangan dari denah asli.

const mg2Container = document.getElementById("floors-MG2");

if (mg2Container) {
    mg2Container.innerHTML = `
        <p class="directory-note">
            Daftar lantai dan ruangan Gedung MG2 akan ditampilkan
            setelah dicocokkan dengan denah asli.
        </p>
    `;
}


// 6. MENAMPILKAN PILIHAN LOKASI DI BAGIAN DENAH


function openCampusLocation(name, detail, code = "") {
    const denahSection = document.getElementById("denah");
    const denahDisplay = document.getElementById("denahDisplay");
    const title = document.getElementById("selectedRoomTitle");
    const info = document.getElementById("selectedRoomInfo");

    if (!denahSection || !denahDisplay) {
        alert("Bagian denah belum ditemukan.");
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


// 7. TOMBOL LIHAT LOKASI RUANGAN

document.querySelectorAll(".room-location-button").forEach(button => {

    button.addEventListener("click", () => {

        const code = button.dataset.roomCode;

        let selectedRoom = null;

        Object.values(roomsMG1).forEach(rooms => {

            const found = rooms.find(room => room.code === code);

            if (found) selectedRoom = found;

        });

        if (!selectedRoom) return;

        const buildingCard = button.closest(".building-card");

        if (buildingCard) {
            buildingCard.classList.add("active");
        }

        const floorDetails = button.closest(".floor-group");

        if (floorDetails) {
            floorDetails.open = true;
        }

        openCampusLocation(
            selectedRoom.name,
            "Ruangan Gedung MG1.",
            selectedRoom.code
        );

    });

});


// 8. TOMBOL FASILITAS TUNGGAL

document.querySelectorAll(".facility-card").forEach(button => {

    button.addEventListener("click", () => {

        const key = button.dataset.location;
        const facility = campusFacilities[key];

        if (!facility) return;

        openCampusLocation(
            facility.name,
            facility.detail
        );

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
    const canvas = document.getElementById("reportChart");

    if (!canvas || typeof Chart === "undefined") return;

    const chartData = [pending, progress, completed];

    if (reportChart) {
        reportChart.data.datasets[0].data = chartData;
        reportChart.update();
        return;
    }

    reportChart = new Chart(canvas, {
        type: "bar",

        data: {
            labels: [
                "Menunggu",
                "Sedang Diperbaiki",
                "Selesai"
            ],

            datasets: [{
                label: "Jumlah Laporan",
                data: chartData,
                backgroundColor: [
                    "#e9b949",
                    "#3995ce",
                    "#38a47c"
                ],
                borderRadius: 8,
                maxBarThickness: 65
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: true,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
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

