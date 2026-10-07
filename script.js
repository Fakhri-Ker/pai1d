document.addEventListener("DOMContentLoaded", () => {
    // 1. MENU HAMBURGER
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isOpen);
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. DATA ANGGOTA KELAS
    const anggota = [
        { nama: "Febri Harun",
          role: "Kosma",
          foto: "assets/images/individu/febri.jpg",
          ig: "https://www.instagram.com/_febriharun175/"
        },
        { nama: "Ismi Khoirunnisa", 
          role: "Wakosma",
          foto: "", 
          ig: "https://www.instagram.com/bebelove_88/" 
        },
        { nama: "Risma Komala", 
          role: "Sekretaris 1", 
          foto: "",
          ig: "https://www.instagram.com/rsmllaa4/"
        },
        { nama: "Abdullah Fasya", 
          role: "Sekretaris 2 & PJ Kitab Kuning", 
          foto: "", 
          ig: "https://www.instagram.com/absya13/" 
        },
        { nama: "Alice Aurellia A.",
          role: "Bendahara 1",
          foto: "", 
          ig: "https://www.instagram.com/al_aurellia/"
        },
        { nama: "Maulie Alissa S.", 
          role: "Bendahara 2",
          foto: "", 
          ig: "https://www.instagram.com/mauliealissasubagja/" 
        },

        { nama: "Ana Muflichah",
          role: "PJ Studi Al-Qur'an",
          foto: "", 
          ig: "https://www.instagram.com/anamflh_23/"
        },
        { nama: "Yeni Susilawati",
          role: "PJ Studi Al-Qur'an", 
          foto: "",
          ig: ""
        },

        { nama: "Yasin Faturrahman", 
          role: "PJ Tahsin & Tahfidz",
          foto: "", 
          ig: "https://www.instagram.com/yssnfthrrhmn/" 
        },
        { nama: "Amatillah Khodijah",
          role: "PJ Tahsin & Tahfidz",
          foto: "",
          ig: "https://www.instagram.com/khodijah_odii/" 
        },

        { nama: "Revan Harry P.",
          role: "PJ SPIK",
          foto: "", 
          ig: "https://www.instagram.com/rvannn.hry/"
        },
        { nama: "Adinda Salsabilah",
          role: "PJ SPIK", 
          foto: "", 
          ig: "https://www.instagram.com/aislsblh_/"
        },

        { nama: "Misky Farhani", 
          role: "PJ Ilmu Tauhid", 
          foto: "", 
          ig: "https://www.instagram.com/mskyfrhani/"
        },
        { nama: "Alvina Suharyati", 
          role: "PJ Ilmu Tauhid", 
          foto: "", 
          ig: "https://www.instagram.com/alvnn_2813/"
        },

        { nama: "Kusuma Sab'ah A. S.",
          role: "PJ PKN", 
          foto: "",
          ig: "https://www.instagram.com/umek1638_/"
        },
        { nama: "Nida Azkia",
          role: "PJ PKN", 
          foto: "",
          ig: "https://www.instagram.com/nida_azkiaa/"
        },

        { nama: "Sandy Jamaludin P.", role: "PJ B. Indonesia", imgSeed: "Sandy", ig: "https://www.instagram.com/sandy_prtama07/" },
        { nama: "Tasya Ayu L.", role: "PJ B. Indonesia", imgSeed: "Tasya", ig: "https://www.instagram.com/tvs_y_l/" },

        { nama: "Agung Maulana", role: "PJ B. Arab", imgSeed: "Agung", ig: "https://www.instagram.com/agungmaulana5257/" },
        { nama: "Siti Zahrotul Amelia", role: "PJ B. Arab", imgSeed: "Amel", ig: "https://www.instagram.com/cmelyya13/" },

        { nama: "Mila Nurjuliani", role: "PJ Cirebon Studies", imgSeed: "Mila", ig: "https://www.instagram.com/nurjulianimila/" },
        { nama: "Resty Bilqis A.", role: "PJ Cirebon Studies", imgSeed: "Resty", ig: "" },

        {
            nama: "Fakhri A. Alfanani",
            role: "PJ Cyber Culture",
            imgSeed: "Fakhri",
            ig: "https://www.instagram.com/mangeabanj/"
        },

        { nama: "Salwa Salsabil", role: "PJ Cyber Culture", imgSeed: "Salwa", ig: "" },
        
        { nama: "Melinda Nurriyah", role: "PJ Kitab Kuning", imgSeed: "Melinda", ig: "" },

        { nama: "Tuslah Tarsiyatur R.", role: "PJ PPTQ", imgSeed: "Tuslah", ig: "https://www.instagram.com/xzyahh.15/" },
        { nama: "Khumaira Nur Aulia P.", role: "PJ PPTQ", imgSeed: "Khumaira", ig: "" },

        { nama: "Adib Taufiqul H. S.", role: "", imgSeed: "Adib", ig: "https://www.instagram.com/adibtaufiqulhakimsyah/" },
        { nama: "A. Rizky Nurhabib", role: "", imgSeed: "Habib", ig: "https://www.instagram.com/ahmdrzkynrhbb_07/" },
        { nama: "Diva Dienul Q.", role: "", imgSeed: "Diva", ig: "https://www.instagram.com/_adzheanahelix/" },
        { nama: "Ildiyo Putra P", role: "", imgSeed: "Ildiyo", ig: "" },
        { nama: "M. Ragil Erlangga", role: "", imgSeed: "Ragil", ig: "https://www.instagram.com/rglerlanggaa_/" },
        { nama: "Nindi Juli Andini", role: "", imgSeed: "Nindi", ig: "https://www.instagram.com/its_nii097/" },
        { nama: "Raisa Iztania Balqis", role: "", imgSeed: "Raisa", ig: "https://www.instagram.com/raisa.iztania/" },
        { nama: "Shelsi Riyanti", role: "", imgSeed: "Shelsi", ig: "https://www.instagram.com/shlrynt_/" }
    ];

    // 3. DATA GALLERY / FOTBAR
const galleryData = [
    {
        kategori: "FOTBAR",
        foto: [
            "fotbar1.jpg",
            "fotbar2.jpg",
            "fotbar3.jpg",
            "fotbar4.jpg",
            "fotbar5.jpg",
            "fotbar6.jpg"
        ]
    },

    {
        kategori: "KEGIATAN 2",
        foto: [
            "kegiatan4.jpg",
            "kegiatan5.jpg"
        ]
    },

    {
        kategori: "KEGIATAN 3",
        foto: [
            "kegiatan6.jpg",
            "kegiatan7.jpg"
        ]
    }
];

    // Menampilkan Gallery
const galleryContainer = document.getElementById("gallery-container");

if (galleryContainer) {
    galleryContainer.innerHTML = galleryData.map(kategori => `
        <div class="gallery-category">

            <h3 class="gallery-category-title">
                ${kategori.kategori}
            </h3>

            <div class="gallery-grid">
                ${kategori.foto.map(namaFoto => `
                    <div class="gallery-item">
                        <img
                            src="assets/images/fotbar/${namaFoto}"
                            alt="${kategori.kategori}"
                            loading="lazy"
                        >
                        <span>${kategori.kategori}</span>
                    </div>
                `).join("")}
            </div>

        </div>
    `).join("");
}
    
    const container = document.getElementById("members-container");

        if (container) {
        container.innerHTML = anggota.map(person => {

            // Jika Instagram sudah diisi
            let instagramHTML = "";

            if (person.ig && person.ig.trim() !== "") {
                let username = person.ig
                    .replace(/^https?:\/\/(www\.)?instagram\.com\//, "")
                    .split("?")[0]
                    .replace(/\/$/, "");
                
                instagramHTML = `
                    <a 
                        href="${person.ig}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="member-ig"
                    >
                        @${username}
                    </a>
                `;
            } else {
                instagramHTML = `
                    <span class="member-ig member-ig-empty">
                        Instagram belum ditambahkan
                    </span>
                `;
            }

            return `
    <article class="member-card">
        <img
            src="${person.foto}"
            alt="Foto ${person.nama}"
            class="member-img"
            loading="lazy"
        >

        <h3 class="member-name">${person.nama}</h3>

        <p class="member-role">
            ${person.role || "Anggota Kelas"}
        </p>

        ${instagramHTML}
    </article>
`;
        }).join("");

        // Pastikan daftar anggota langsung terlihat
        container.classList.add("active");

        // Menampilkan jumlah data yang benar-benar ada di array
        const totalStudents = document.getElementById("total-students");

        if (totalStudents) {
            totalStudents.textContent = anggota.length;
        }
    }
    // 3. ANIMASI SCROLL REVEAL
    const reveals = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const scrollObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        reveals.forEach(reveal => scrollObserver.observe(reveal));
    } else {
        reveals.forEach(reveal => reveal.classList.add("active"));
    }

    // 4. TAHUN FOOTER OTOMATIS
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
