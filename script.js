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
        { nama: "Abdullah Fasya", role: "Sekretaris 2", imgSeed: "Fasya" },
        { nama: "Alice Aurellia A.", role: "Bendahara 1", imgSeed: "Alice" },
        { nama: "Maulie Alissa S.", role: "Bendahara 2", imgSeed: "Maulie" },
        { nama: "Ana Muflichah", role: "PJ Studi Al-Qur'an", imgSeed: "Ana" },
        { nama: "Yeni Susilawati", role: "PJ Studi Al-Qur'an", imgSeed: "Yeni" },
        { nama: "Yasin Faturrahman", role: "PJ Tahsin & Tahfidz", imgSeed: "Yasin" },
        { nama: "Amatillah Khodijah", role: "PJ Tahsin & Tahfidz", imgSeed: "Khodijah" },
        { nama: "Revan Harry P.", role: "PJ SPIK", imgSeed: "Revan" },
        { nama: "Adinda Salsabilah", role: "PJ SPIK", imgSeed: "Adinda" },
        { nama: "Misky Farhani", role: "PJ Ilmu Tauhid", imgSeed: "Misky"},
        { nama: "Alvina Suharyati", role: "PJ Ilmu Tauhid", imgSeed: "Vina"},
        { nama: "Kusuma Sab'ah A. S.", role: "PJ PKN", imgSeed: "Kusuma"},
        { nama: "Nida Azkia", role: "PJ PKN", imgSeed: "Nida"},
        { nama: "Sandy Jamaludin P.", role: "PJ B. Indonesia", imgSeed: "Sandy"},
        { nama: "Tasya Ayu L.", role: "PJ B. Indonesia", imgSeed: "Tasya"},
        { nama: "Agung Maulana", role: "PJ B. Arab", imgSeed: "Agung"},
        { nama: "Siti Zahrotul Amelia", role: "PJ B. Arab", imgSeed: "Amel"},
        { nama: "Mila Nurjuliani", role: "PJ Cirebon Studies", imgSeed: "Mila"},
        { nama: "Resty Bilqis A.", role: "PJ Cirebon Studies", imgSeed: "Resty"},
        { nama: "Fakhri A. Alfanani", role: "PJ Cyber Culture", imgSeed: "Fakhri"},
        { nama: "Salwa Salsabil", role: "PJ Cyber Culture", imgSeed: "Salwa"},
        { nama: "Abdullah Fasya", role: "PJ Kitab Kuning", imgSeed: "Fasya"},
        { nama: "Melinda Nurriyah", role: "PJ Kitab Kuning", imgSeed: "Melinda"},
        { nama: "Tuslah Tarsiyatur R.", role: "PJ PPTQ", imgSeed: "Tuslah"},
        { nama: "Khumaira Nur Aulia P.", role: "PJ PPTQ", imgSeed: "Khumaira"},
        { nama: "Adib Taufiqul H. S.", role: "", imgSeed: "Adib"},
        { nama: "Adinda Salsabilah", role: "", imgSeed: "Adinda"},
        { nama: "A. Rizky Nurhabib", role: "", imgSeed: "Habib"},
        { nama: "Diva Dienul Q.", role: "", imgSeed: "Diva"},
        { nama: "Ildiyo Putra P", role: "", imgSeed: "Ildiyo"},
        { nama: "M. Ragil Erlangga", role: "", imgSeed: "Ragil"},
        { nama: "Nindi Juli Andini", role: "", imgSeed: "Nindi"},
        { nama: "Raisa Iztania Balqis", role: "", imgSeed: "Raisa"},
        { nama: "Shelsi Riyanti", role: "", imgSeed: "Shelsi"},
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
