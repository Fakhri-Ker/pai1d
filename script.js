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
          gender: "L",
          foto: "assets/images/individu/febri.jpg",
          avatar: "Febri",
          ig: "https://www.instagram.com/_febriharun175/"
        },
        { nama: "Ismi Khoirunnisa", 
          role: "Wakosma",
          gender: "P",
          foto: "assets/images/individu/ismi.jpg", 
          avatar: "Ismi",
          ig: "https://www.instagram.com/bebelove_88/" 
        },
        { nama: "Risma Komala", 
          role: "Sekretaris 1", 
          gender: "P",
          foto: "",
          avatar: "Risma",
          ig: "https://www.instagram.com/rsmllaa4/"
        },
        { nama: "Abdullah Fasya", 
          role: "Sekretaris 2 & PJ Kitab Kuning", 
          gender: "L",
          foto: "", 
          avatar: "Fasya",
          ig: "https://www.instagram.com/absya13/" 
        },
        { nama: "Alice Aurellia A.",
          role: "Bendahara 1",
          gender: "P",
          foto: "", 
          avatar: "Alice",
          ig: "https://www.instagram.com/al_aurellia/"
        },
        { nama: "Maulie Alissa S.", 
          role: "Bendahara 2",
          gender: "P",
          foto: "assets/images/individu/maulie.jpg", 
          avatar: "Maulie",
          ig: "https://www.instagram.com/mauliealissasubagja/" 
        },

        { nama: "Ana Muflichah",
          role: "PJ Studi Al-Qur'an",
          gender: "P",
          foto: "", 
          avatar: "Ana",
          ig: "https://www.instagram.com/anamflh_23/"
        },
        { nama: "Yeni Susilawati",
          role: "PJ Studi Al-Qur'an", 
         gender: "P",
          foto: "",
         avatar: "Yeni",
          ig: ""
        },

        { nama: "Yasin Faturrahman", 
          role: "PJ Tahsin & Tahfidz",
         gender: "L",
          foto: "assets/images/individu/yasin.jpg", 
         avatar: "Yasin",
          ig: "https://www.instagram.com/yssnfthrrhmn/" 
        },
        { nama: "Amatillah Khodijah",
          role: "PJ Tahsin & Tahfidz",
         gender: "P",
          foto: "",
          avatar: "Khodijah",
          ig: "https://www.instagram.com/khodijah_odii/" 
        },

        { nama: "Revan Harry P.",
          role: "PJ SPIK",
         gender: "L",
          foto: "", 
         avatar: "Revan",
          ig: "https://www.instagram.com/rvannn.hry/"
        },
        { nama: "Adinda Salsabilah",
          role: "PJ SPIK", 
         gender: "P", 
          foto: "", 
         avatar: "Adinda",
          ig: "https://www.instagram.com/aislsblh_/"
        },

        { nama: "Misky Farhani", 
          role: "PJ Ilmu Tauhid", 
         gender: "L",
          foto: "", 
         avatar: "Misky",
          ig: "https://www.instagram.com/mskyfrhani/"
        },
        { nama: "Alvina Suharyati", 
          role: "PJ Ilmu Tauhid", 
         gender: "P",
          foto: "assets/images/individu/vina.jpg", 
         avatar: "Vina",
          ig: "https://www.instagram.com/alvnn_2813/"
        },

        { nama: "Kusuma Sab'ah A. S.",
          role: "PJ PKN", 
         gender: "P",
          foto: "",
         avatar: "Kusuma",
          ig: "https://www.instagram.com/umek1638_/"
        },
        { nama: "Nida Azkia",
          role: "PJ PKN", 
         gender: "P",
          foto: "assets/images/individu/nida.jpg",
         avatar: "Nida",
          ig: "https://www.instagram.com/nida_azkiaa/"
        },

        { nama: "Sandy Jamaludin P.", 
          role: "PJ B. Indonesia",
         gender: "L",
          foto: "",
         avatar: "Sandy",
          ig: "https://www.instagram.com/sandy_prtama07/"
        },
        { nama: "Tasya Ayu L.",
          role: "PJ B. Indonesia",
         gender: "P", 
          foto: "assets/images/individu/tasya.jpg",
         avatar: "Tasya",
          ig: "https://www.instagram.com/tvs_y_l/"
        },

        { nama: "Agung Maulana",
          role: "PJ B. Arab",
         gender: "L",
          foto: "assets/images/individu/agung.jpg",
         avatar: "Agung",
          ig: "https://www.instagram.com/agungmaulana5257/" 
        },
        { nama: "Siti Zahrotul Amelia",
          role: "PJ B. Arab",
         gender: "P",
          foto: "",
         avatar: "Amel",
          ig: "https://www.instagram.com/cmelyya13/" 
        },

        { nama: "Mila Nurjuliani",
          role: "PJ Cirebon Studies",
         gender: "P",
          foto: "",
         avatar: "Mila",
          ig: "https://www.instagram.com/nurjulianimila/"
        },
        { nama: "Resty Bilqis A.", 
          role: "PJ Cirebon Studies",
         gender: "P",
          foto: "",
         avatar: "Resty",
          ig: ""
        },

        {
            nama: "Fakhri A. Alfanani",
            role: "PJ Cyber Culture",
            gender: "L",
            foto: "",
            avatar: "Fakhri",
            ig: "https://www.instagram.com/mangeabanj/"
        },

        { nama: "Salwa Salsabil",
          role: "PJ Cyber Culture",
         gender: "P",
          foto: "",
         avatar: "Salwa",
          ig: ""
        },
        
        { nama: "Melinda Nurriyah",
          role: "PJ Kitab Kuning", 
         gender: "P",
          foto: "",
         avatar: "Melinda",
          ig: "" 
        },

        { nama: "Tuslah Tarsiyatur R.", 
          role: "PJ PPTQ",
         gender: "P",
          foto: "",
         avatar: "Tuslah",
          ig: "https://www.instagram.com/xzyahh.15/" 
        },
        { nama: "Khumaira Nur Aulia P.", 
          role: "PJ PPTQ", 
         gender: "P",
          foto: "assets/images/individu/khumaira.jpg",
         avatar: "Khumaira ",
          ig: ""
        },

        { nama: "Adib Taufiqul H. S.", 
          role: "",
         gender: "L",
          foto: "assets/images/individu/adib.jpg",
         avatar: "Adib",
          ig: "https://www.instagram.com/adibtaufiqulhakimsyah/"
        },
        { nama: "A. Rizky Nurhabib", 
          role: "",
         gender: "L",
          foto: "",
         avatar: "Habib",
          ig: "https://www.instagram.com/ahmdrzkynrhbb_07/" 
        },
        { nama: "Diva Dienul Q.", 
          role: "",
         gender: "P",
          foto: "", 
         avatar: "Diva",
          ig: "https://www.instagram.com/_adzheanahelix/"
        },
        { nama: "Ildiyo Putra P",
          role: "",
         gender: "L",
          foto: "",
         avatar: "Ildiyo",
          ig: ""
        },
        { nama: "M. Ragil Erlangga",
          role: "",
         gender: "L",
          foto: "assets/images/individu/ragil.jpg",
         avatar: "Ragil",
          ig: "https://www.instagram.com/rglerlanggaa_/"
        },
        { nama: "Nindi Juli Andini", 
          role: "", 
         gender: "P",
           foto: "",
         avatar: "Nindi",
          ig: "https://www.instagram.com/its_nii097/"
        },
        { nama: "Raisa Iztania Balqis",
          role: "", 
         gender: "P",
          foto: "",
         avatar: "Raisa",
          ig: "https://www.instagram.com/raisa.iztania/" 
        },
        { nama: "Shelsi Riyanti", 
          role: "", 
         gender: "P",
          foto: "",
         avatar: "Shelsi",
          ig: "https://www.instagram.com/shlrynt_/"
        }
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
    class="lightbox-image"
    data-full="assets/images/fotbar/${namaFoto}"
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

        // FOTO ASLI jika tersedia
        // Jika tidak ada, gunakan avatar
        let fotoURL = person.foto;

        if (!fotoURL || fotoURL.trim() === "") {

            if (person.gender === "P") {
                // Avatar perempuan
                fotoURL =
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(person.avatar)}&topType=LongHairStraight`;
            } else {
                // Avatar laki-laki
                fotoURL =
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(person.avatar)}&topType=ShortHairShortWaved`;
            }
        }

        // Instagram
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

                <div class="member-photo-wrapper">
                    <img
                        src="${fotoURL}"
                        alt="Foto ${person.nama}"
                        class="member-img lightbox-image"
                        loading="lazy"
                        data-full="${fotoURL}"
                    >
                </div>

                <h3 class="member-name">${person.nama}</h3>

                <p class="member-role">
                    ${person.role || "Anggota Kelas"}
                </p>

                ${instagramHTML}

            </article>
        `;

    }).join("");

    container.classList.add("active");

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

// 4. LIGHTBOX / IMAGE POP-UP

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
    <div class="lightbox-overlay"></div>

    <button class="lightbox-close" aria-label="Tutup">
        &times;
    </button>

    <img class="lightbox-image-full" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image-full");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const lightboxOverlay = lightbox.querySelector(".lightbox-overlay");

document.addEventListener("click", (e) => {

    const image = e.target.closest(".lightbox-image");

    if (!image) return;

    lightboxImage.src = image.dataset.full || image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";
});

function closeLightbox() {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

    // 5. TAHUN FOOTER OTOMATIS
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // =========================
// 6. MUSIC PLAYER
// =========================

const songs = [
    {
        title: "Kota Ini Tak Sama Tanpamu",
        src: "musik/kotataksama.mp3"
    },
    {
        title: "Usik",
        src: "musik/usik.mp3"
    },
    {
        title: "Melangitkanmu",
        src: "musik/langit.mp3"
    }
    {
        title: "Perunggu — 33x",
        src: "musik/33x.mp3"
}
];

let currentSongIndex = 0;

const audio = document.getElementById("audio-player");

const musicToggleBtn =
    document.getElementById("musicToggleBtn");

const musicPlayerContainer =
    document.getElementById("musicPlayerContainer");

const closeMusicBtn =
    document.getElementById("closeMusicBtn");

const playBtn =
    document.getElementById("playPause");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const muteBtn =
    document.getElementById("muteBtn");

const loopBtn =
    document.getElementById("loopBtn");

const toggleListBtn =
    document.getElementById("toggleListBtn");

const playlistDiv =
    document.getElementById("playlist");

const titleDisp =
    document.getElementById("song-title");

const currentTimeEl =
    document.getElementById("currentTime");

const durationTimeEl =
    document.getElementById("durationTime");

const progressBar =
    document.getElementById("progressBar");


// =========================
// MEMORI LAGU
// =========================

const savedSongIndex =
    localStorage.getItem("pai1dSongIndex");

const savedTime =
    localStorage.getItem("pai1dSongTime");

if (savedSongIndex !== null) {
    currentSongIndex = parseInt(savedSongIndex);

    if (
        currentSongIndex < 0 ||
        currentSongIndex >= songs.length
    ) {
        currentSongIndex = 0;
    }
}


// =========================
// BUKA / TUTUP PLAYER
// =========================

musicToggleBtn.addEventListener("click", () => {

    musicPlayerContainer.classList.toggle("show");

});


closeMusicBtn.addEventListener("click", () => {

    musicPlayerContainer.classList.remove("show");

});


// =========================
// FORMAT WAKTU
// =========================

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secondsPart =
        Math.floor(seconds % 60);

    return `${minutes}:${secondsPart
        .toString()
        .padStart(2, "0")}`;
}


// =========================
// LOAD LAGU
// =========================

function loadSong(index, autoPlay = false) {

    currentSongIndex = index;

    const song = songs[currentSongIndex];

    audio.src = song.src;

    titleDisp.textContent = song.title;

    localStorage.setItem(
        "pai1dSongIndex",
        currentSongIndex
    );

    localStorage.removeItem("pai1dSongTime");

    progressBar.value = 0;

    currentTimeEl.textContent = "0:00";
    durationTimeEl.textContent = "0:00";

    if (autoPlay) {

        audio.play()
            .then(() => {
                playBtn.textContent = "⏸";
            })
            .catch(() => {
                playBtn.textContent = "▶";
            });

    } else {

        playBtn.textContent = "▶";

    }

}


// =========================
// PLAYLIST
// =========================

songs.forEach((song, index) => {

    const item = document.createElement("div");

    item.textContent = song.title;

    item.addEventListener("click", () => {

        loadSong(index, true);

        playlistDiv.classList.remove("active");

    });

    playlistDiv.appendChild(item);

});


// =========================
// PLAY / PAUSE
// =========================

playBtn.addEventListener("click", () => {

    if (audio.paused) {

        audio.play()
            .then(() => {
                playBtn.textContent = "⏸";
            })
            .catch(() => {
                console.log("Musik belum dapat diputar.");
            });

    } else {

        audio.pause();

        playBtn.textContent = "▶";

    }

});


// =========================
// NEXT
// =========================

nextBtn.addEventListener("click", () => {

    currentSongIndex =
        (currentSongIndex + 1) % songs.length;

    loadSong(currentSongIndex, true);

});


// =========================
// PREVIOUS
// =========================

prevBtn.addEventListener("click", () => {

    currentSongIndex =
        (currentSongIndex - 1 + songs.length)
        % songs.length;

    loadSong(currentSongIndex, true);

});


// =========================
// MUTE
// =========================

muteBtn.addEventListener("click", () => {

    audio.muted = !audio.muted;

    muteBtn.textContent =
        audio.muted ? "🔇" : "🔊";

});


// =========================
// LOOP
// =========================

loopBtn.addEventListener("click", () => {

    audio.loop = !audio.loop;

    loopBtn.classList.toggle(
        "active",
        audio.loop
    );

});


// =========================
// PLAYLIST TOGGLE
// =========================

toggleListBtn.addEventListener("click", () => {

    playlistDiv.classList.toggle("active");

});


// =========================
// LAGU SELESAI
// =========================

audio.addEventListener("ended", () => {

    if (!audio.loop) {

        currentSongIndex =
            (currentSongIndex + 1) % songs.length;

        loadSong(currentSongIndex, true);

    }

});


// =========================
// UPDATE WAKTU
// =========================

audio.addEventListener("timeupdate", () => {

    currentTimeEl.textContent =
        formatTime(audio.currentTime);

    if (audio.duration) {

        durationTimeEl.textContent =
            formatTime(audio.duration);

        progressBar.value =
            (audio.currentTime / audio.duration) * 100;

    }

    if (audio.currentTime > 0) {

        localStorage.setItem(
            "pai1dSongTime",
            audio.currentTime
        );

    }

});


// =========================
// PROGRESS BAR
// =========================

progressBar.addEventListener("input", (e) => {

    if (audio.duration) {

        audio.currentTime =
            (e.target.value / 100)
            * audio.duration;

    }

});


// =========================
// KEMBALIKAN POSISI TERAKHIR
// =========================

audio.addEventListener(
    "loadedmetadata",
    () => {

        if (savedTime !== null) {

            const time =
                parseFloat(savedTime);

            if (
                !isNaN(time) &&
                time < audio.duration
            ) {

                audio.currentTime = time;

            }

        }

    },
    { once: true }
);


// =========================
// INISIALISASI
// =========================

loadSong(currentSongIndex, false);
});
