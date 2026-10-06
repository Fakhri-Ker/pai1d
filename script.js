document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEK NAVBAR SCROLL
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. RENDER DATA ANGGOTA KELAS
    // Untuk contoh, saya masukkan beberapa nama inti yang Anda sebutkan, 
    // sisanya saya buat "Mahasiswa Lainnya" agar cukup. Anda bisa mengedit list ini sesuai 35 orang aslinya.
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
        { nama: "Revan Harry P.", role: "PJ Peradaban Islam", imgSeed: "Revan" },
        { nama: "Adinda Salsabilah", role: "PJ Peradaban Islam", imgSeed: "Adinda" },
        // ... (Tambahkan sisa mahasiswa di sini sesuai format)
    ];

    const container = document.getElementById("members-container");
    
    // Meloop data array untuk membuat card HTML
    anggota.forEach(person => {
        // Membuat username IG dari nama depan
        let igUsername = person.nama.split(" ")[0].toLowerCase();
        
        const cardHTML = `
            <div class="member-card">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${person.imgSeed}" alt="Foto ${person.nama}" class="member-img">
                <h3 class="member-name">${person.nama}</h3>
                <a href="#" class="member-ig">@${igUsername}</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});
