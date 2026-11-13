
// ========================================
// UNESAKSES - JAVASCRIPT
// ========================================


// 1. DATA FASILITAS KAMPUS
// Lokasi berikut masih mengikuti data contoh sebelumnya.
// Silakan sesuaikan dengan denah dan data asli kampus.

const facilities = [
    {
        id: 1,
        name: "Gedung MG1",
        category: "Akademik",
        detail: "Area ruang kelas dan kegiatan perkuliahan mahasiswa.",
        location: "Area Utama Kampus",
        icon: "fa-building"
    },
    {
        id: 2,
        name: "Perpustakaan",
        category: "Akademik",
        detail: "Tempat membaca, meminjam buku, dan belajar.",
        location: "Area Akademik",
        icon: "fa-book-open"
    },
    {
        id: 3,
        name: "Lab. Tata Rias",
        category: "Akademik",
        detail: "Fasilitas praktikum mahasiswa.",
        location: "Area Laboratorium",
        icon: "fa-flask"
    },
    {
        id: 4,
        name: "Masjid",
        category: "Umum",
        detail: "Tempat ibadah bagi warga kampus.",
        location: "Area Tengah Kampus",
        icon: "fa-mosque"
    },
    {
        id: 5,
        name: "Food Court",
        category: "Umum",
        detail: "Tempat makan dan beristirahat mahasiswa.",
        location: "Area Komersial",
        icon: "fa-utensils"
    },
    {
        id: 6,
        name: "Gedung MG2",
        category: "Akademik",
        detail: "Area ruang kelas dan kegiatan perkuliahan mahasiswa.",
        location: "Area Gedung MG2",
        icon: "fa-school"
    },
    {
        id: 7,
        name: "Toilet Umum",
        category: "Umum",
        detail: "Fasilitas sanitasi untuk warga kampus.",
        location: "Area Gedung Perkuliahan",
        icon: "fa-restroom"
    },
    {
        id: 8,
        name: "Area Parkir",
        category: "Umum",
        detail: "Area parkir kendaraan mahasiswa dan pengunjung.",
        location: "Area Depan Kampus",
        icon: "fa-square-parking"
    },
    {
        id: 9,
        name: "Lapangan",
        category: "Olahraga",
        detail: "Area kegiatan olahraga dan aktivitas mahasiswa.",
        location: "Area Lapangan Kampus",
        icon: "fa-volleyball"
    }
];


// 2. MENAMPILKAN DIREKTORI FASILITAS

const facilityList = document.getElementById("facilityList");

function displayFacilities(data = facilities) {
    if (!facilityList) return;

    facilityList.innerHTML = "";

    data.forEach(facility => {
        const card = document.createElement("div");
        card.className = "facility-card";

        card.innerHTML = `
            <div class="facility-icon">
                <i class="fa-solid ${facility.icon}"></i>
            </div>

            <span class="facility-category">
                ${escapeHTML(facility.category)}
            </span>

            <h3>${escapeHTML(facility.name)}</h3>

            <p>${escapeHTML(facility.detail)}</p>

            <div class="facility-location">
                <i class="fa-solid fa-location-dot"></i>
                ${escapeHTML(facility.location)}
            </div>

            <button class="facility-button" data-id="${facility.id}">
                Lihat Lokasi
            </button>
        `;

        facilityList.appendChild(card);
    });

    facilityList.querySelectorAll(".facility-button").forEach(button => {
        button.addEventListener("click", () => {
            const selected = facilities.find(
                item => item.id === Number(button.dataset.id)
            );

            if (selected) {
                document.getElementById("denah").scrollIntoView({
                    behavior: "smooth"
                });

                showLocation(selected);
            }
        });
    });
}

displayFacilities();


// 3. PENCARIAN LOKASI

const searchInput = document.getElementById("searchLocation");
const searchButton = document.getElementById("searchButton");
const locationResults = document.getElementById("locationResults");

function searchLocation() {
    const keyword = searchInput.value.toLowerCase().trim();

    if (!keyword) {
        locationResults.innerHTML = `
            <p>Silakan masukkan nama gedung atau fasilitas.</p>
        `;
        return;
    }

    const results = facilities.filter(item =>
        item.name.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword) ||
        item.location.toLowerCase().includes(keyword)
    );

    locationResults.innerHTML = "";

    if (results.length === 0) {
        locationResults.innerHTML = `
            <p>Lokasi tidak ditemukan. Coba kata kunci lain.</p>
        `;
        return;
    }

    results.forEach(item => {
        const result = document.createElement("div");
        result.className = "location-result";

        result.innerHTML = `
            <div>
                <strong>
                    <i class="fa-solid ${item.icon}"></i>
                    ${escapeHTML(item.name)}
                </strong>
                <p>${escapeHTML(item.location)}</p>
            </div>

            <button type="button">Detail</button>
        `;

        result.querySelector("button").addEventListener("click", () => {
            showLocation(item);
        });

        locationResults.appendChild(result);
    });
}

if (searchButton) {
    searchButton.addEventListener("click", searchLocation);
}

if (searchInput) {
    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchLocation();
        }
    });
}


// 4. MENAMPILKAN INFORMASI LOKASI

function showLocation(item) {
    locationResults.innerHTML = `
        <div class="selected-location">
            <span>
                <i class="fa-solid ${item.icon}"></i>
            </span>

            <div>
                <h3>${escapeHTML(item.name)}</h3>
                <p>${escapeHTML(item.detail)}</p>
                <p>
                    <strong>Lokasi:</strong>
                    ${escapeHTML(item.location)}
                </p>
            </div>
        </div>
    `;

    searchInput.value = item.name;
}


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




// ========================================
// 14. DENAH KAMPUS - TUJUH GAMBAR ASLI
// ========================================

const denahData = {
    lab: {
        nama: "Denah Gedung Lab Meranggen",
        gambar: "assets/DENAH GEDUNG LAB. MRANGGEN.jpeg"
    },

    mg101: {
        nama: "Denah Gedung 1 - Lantai 1",
        gambar: "assets/DENAH GEDUNG MG.1.01.jpeg"
    },

    mg102: {
        nama: "Denah Gedung 1 - Lantai 2",
        gambar: "assets/DENAH GEDUNG MG1.02.jpeg"
    },

    mg103: {
        nama: "Denah Gedung 1 - Lantai 3",
        gambar: "assets/DENAH GEDUNG MG1.03.jpeg"
    },

    mg104: {
        nama: "Denah Gedung 1 - Lantai 4",
        gambar: "assets/DENAH GEDUNG MG1.04.jpeg"
    },

    foodcourt: {
        nama: "Denah Food Court",
        gambar: "assets/FOODCOURT.jpeg"
    },

    masjid: {
        nama: "Denah Masjid",
        gambar: "assets/MASJID.jpeg"
    }
};

const denahSelect = document.getElementById("denahSelect");
const denahDisplay = document.getElementById("denahDisplay");

if (denahSelect && denahDisplay) {
    denahSelect.addEventListener("change", function () {
        const pilihan = denahData[this.value];

        if (!pilihan) {
            denahDisplay.innerHTML = `
                <div class="denah-placeholder">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <h3>Denah Kampus UNESA</h3>
                    <p>Silakan pilih gedung atau fasilitas.</p>
                </div>
            `;
            return;
        }

        denahDisplay.innerHTML = `
            <div class="denah-image-wrapper">
                <h3>${escapeHTML(pilihan.nama)}</h3>

                <img
                    src="${pilihan.gambar}"
                    alt="${escapeHTML(pilihan.nama)}"
                    class="denah-original"
                >
            </div>
        `;

        const gambar = denahDisplay.querySelector("img");

        gambar.addEventListener("error", function () {
            denahDisplay.innerHTML = `
                <p class="denah-error">
                    Gambar belum ditemukan. Periksa kembali nama file.
                </p>
            `;
        });
    });
}
