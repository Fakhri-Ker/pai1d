document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENU HAMBURGER (Buka/Tutup Menu di HP)
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Tutup menu otomatis saat salah satu link diklik di HP
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });


    // 2. RENDER DATA ANGGOTA KELAS
    const anggota = [
        { nama: "Febri Harun", role: "Kosma", imgSeed: "Febri" },
        { nama: "Ismi Khoirunnisa", role: "Wakosma", imgSeed: "Ismi" },
        { nama: "Risma Komala", role: "Sekretaris 1", imgSeed: "Risma" },
        { nama: "Abdullah Fasya", role: "Sekretaris 2", imgSeed: "Abdullah" },
        { nama: "Alice Aurellia A.", role: "Bendahara 1", imgSeed: "Alice" },
        { nama: "Maulie Alissa S.", role: "Bendahara 2", imgSeed: "Maulie" },
        { nama: "Ana Muflichah", role: "PJ Studi Al-Qur'an", imgSeed: "Ana" },
        { nama: "Yeni Susilawati", role: "PJ Studi Al-Qur'an", imgSeed: "Yeni" },
        { nama: "Yasin Faturrahman", role: "PJ Tahsin", imgSeed: "Yasin" },
        { nama: "Amatillah Khodijah", role: "PJ Tahsin", imgSeed: "Amatillah" },
        { nama: "Revan Harry P.", role: "PJ Peradaban", imgSeed: "Revan" },
        { nama: "Adinda Salsabilah", role: "PJ Peradaban", imgSeed: "Adinda" }
    ];

    const container = document.getElementById("members-container");
    if(container) {
        anggota.forEach(person => {
            let igUsername = person.nama.split(" ")[0].toLowerCase();
            const cardHTML = `
                <div class="member-card">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${person.imgSeed}" alt="Foto ${person.nama}" class="member-img">
                    <h3 class="member-name">${person.nama}</h3>
                    <a href="https://instagram.com/${igUsername}" target="_blank" class="member-ig">@${igUsername}</a>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }


    // 3. ANIMASI SCROLL REVEAL (Elemen muncul mulus saat digulir)
    const reveals = document.querySelectorAll('.reveal');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Buka komentar ini jika ingin animasi hanya 1 kali muncul
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        scrollObserver.observe(reveal);
    });

});
