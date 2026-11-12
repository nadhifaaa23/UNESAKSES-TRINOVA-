
// ========================================
// UNESAKSES - JAVASCRIPT
// ========================================


// 1. DATA LOKASI KAMPUS
const facilities = [
    {
        id: 1,
        name: "Gedung MG1",
        category: "Akademik",
        detail: "Area ruang kelas dan kegiatan perkuliahan mahasiswa.",
        location: "Area Utama Kampus",
        icon: "🏢"
    },
    {
        id: 2,
        name: "Perpustakaan",
        category: "Akademik",
        detail: "Tempat membaca, meminjam buku, dan belajar.",
        location: "Area Akademik",
        icon: "📚"
    },
    {
        id: 3,
        name: "Lab. Tata Rias",
        category: "Akademik",
        detail: "Fasilitas praktikum mahasiswa.",
        location: "Area Lab. Tata Rias",
        icon: "🔬"
    },
    {
        id: 4,
        name: "Masjid",
        category: "Umum",
        detail: "Tempat ibadah bagi warga kampus.",
        location: "Area Tengah Kampus",
        icon: "🕌"
    },
    {
        id: 5,
        name: "FoodCourt",
        category: "Umum",
        detail: "Tempat makan dan beristirahat mahasiswa.",
        location: "Area Komersial",
        icon: "🍽️"
    },
    {
        id: 6,
        name: "Gedung MG2",
        category: "Akademik",
        detail: "Area ruang kelas dan kegiatan perkuliahan mahasiswa.",
        location: "Mranggeen",
        icon: "🏢"
    },
    {
        id: 7,
        name: "Toilet Umum",
        category: "Umum",
        detail: "Fasilitas sanitasi untuk warga kampus.",
        location: "Area Gedung Perkuliahan",
        icon: "🚻"
    },
    {
        id: 8,
        name: "Area Parkir",
        category: "Umum",
        detail: "Area parkir kendaraan mahasiswa dan pengunjung.",
        location: "Area Depan Kampus",
        icon: "🅿️"
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
            <div class="facility-icon">${facility.icon}</div>
            <span class="facility-category">${facility.category}</span>
            <h3>${facility.name}</h3>
            <p>${facility.detail}</p>
            <div class="facility-location">
                📍 ${facility.location}
            </div>
            <button class="facility-button" data-id="${facility.id}">
                Lihat Lokasi 
            </button>
        `;

        facilityList.appendChild(card);
    });

    facilityList.querySelectorAll(".facility-button").forEach(button => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            const selected = facilities.find(item => item.id === id);

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


// 3. FITUR PENCARIAN LOKASI
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
                <strong>${item.icon} ${item.name}</strong>
                <p>${item.location}</p>
            </div>
            <button data-id="${item.id}">Detail</button>
        `;

        result.querySelector("button").addEventListener("click", () => {
            showLocation(item);
        });

        locationResults.appendChild(result);
    });
}

searchButton.addEventListener("click", searchLocation);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchLocation();
    }
});


// 4. MENAMPILKAN INFORMASI LOKASI
function showLocation(item) {
    locationResults.innerHTML = `
        <div class="selected-location">
            <span>${item.icon}</span>
            <div>
                <h3>${item.name}</h3>
                <p>${item.detail}</p>
                <p><strong>Lokasi:</strong> ${item.location}</p>
            </div>
        </div>
    `;

    searchInput.value = item.name;
}


// 5. FITUR PENGADUAN FASILITAS
const complaintForm = document.getElementById("complaintForm");
const reportList = document.getElementById("reportList");


// Mengambil data laporan dari localStorage
let reports = [];

try {
    reports = JSON.parse(localStorage.getItem("unesaksesReports")) || [];
} catch (error) {
    reports = [];
}


// 6. MENAMPILKAN LAPORAN
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
                <span class="report-status">${report.status}</span>
            </div>

            <p><strong>Pelapor:</strong> ${escapeHTML(report.name)}</p>
            <p><strong>Kategori:</strong> ${escapeHTML(report.category)}</p>
            <p>${escapeHTML(report.description)}</p>
            <p class="report-date">${report.date}</p>

            ${report.image ? `
                <img src="${report.image}" alt="Foto laporan"
                     class="report-image">
            ` : ""}
        `;

        reportList.appendChild(card);
    });
}


// Mencegah teks laporan dibaca sebagai HTML
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}


// 7. MENGIRIM PENGADUAN
complaintForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("reporterName").value.trim();
    const facility = document.getElementById("facilityName").value.trim();
    const category = document.getElementById("reportCategory").value;
    const description = document.getElementById("reportDescription").value.trim();
    const imageInput = document.getElementById("reportImage");

    if (!name || !facility || !category || !description) {
        alert("Mohon lengkapi semua data pengaduan.");
        return;
    }

    const file = imageInput.files[0];

    // Membatasi ukuran gambar
    if (file && file.size > 2 * 1024 * 1024) {
        alert("Ukuran gambar maksimal 2 MB.");
        return;
    }

    function saveReport(imageData = "") {
        const newReport = {
            id: Date.now(),
            name: name,
            facility: facility,
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
            alert("Penyimpanan gagal. Kapasitas browser mungkin penuh.");
            return;
        }

        displayReports();
        complaintForm.reset();

        alert("Pengaduan berhasil disimpan!");

        document.getElementById("status").scrollIntoView({
            behavior: "smooth"
        });
    }

    if (file) {
        if (!file.type.startsWith("image/")) {
            alert("File harus berupa gambar.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function() {
            saveReport(reader.result);
        };

        reader.onerror = function() {
            alert("Gagal membaca gambar.");
        };

        reader.readAsDataURL(file);
    } else {
        saveReport();
    }
});


// 8. MENAMPILKAN DATA LAPORAN SAAT WEBSITE DIBUKA
displayReports();


// 9. NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
    }
});


// 10. NAVIGASI AKTIF
document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".navbar nav a").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});
