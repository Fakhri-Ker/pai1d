document.addEventListener("DOMContentLoaded", () => {

    /* --- DATA 11 MATA KULIAH LENGKAP --- */
    const mkData = [
        {
            namaMK: "Studi Al-Qur'an dan Hadits",
            pjs: [
                { nama: "Ana Muflichah", gender: "P" },
                { nama: "Yeni Susilawati", gender: "P" }
            ]
        },
        {
            namaMK: "Tahsin dan Tahfidz",
            pjs: [
                { nama: "Yasin Faturrahman", gender: "L" },
                { nama: "Amatillah Khodijah P.N.", gender: "P" }
            ]
        },
        {
            namaMK: "Peradaban Islam Klasik",
            pjs: [
                { nama: "Revan Harry Pratama", gender: "L" },
                { nama: "Adinda Salsabilah", gender: "P" }
            ]
        },
        {
            namaMK: "Ilmu Tauhid",
            pjs: [
                { nama: "Misky Farhani", gender: "L" },
                { nama: "Alvina Suharyati", gender: "P" }
            ]
        },
        {
            namaMK: "Pendidikan Kewarganegaraan",
            pjs: [
                { nama: "Kusuma Sab'ah Ahad S.", gender: "P" },
                { nama: "Nida Azkia", gender: "P" }
            ]
        },
        {
            namaMK: "Bahasa Indonesia",
            pjs: [
                { nama: "Sandy Jamaludin P.", gender: "L" },
                { nama: "Tasya Ayu Lestari", gender: "P" }
            ]
        },
        {
            namaMK: "Bahasa Arab",
            pjs: [
                { nama: "Agung Maulana", gender: "L" },
                { nama: "Siti Zahrotul Amelia", gender: "P" }
            ]
        },
        {
            namaMK: "Cirebon Studies",
            pjs: [
                { nama: "Mila Nurjuliani", gender: "P" },
                { nama: "Resty Bilqis Aurora", gender: "P" }
            ]
        },
        {
            namaMK: "Cyber Culture",
            pjs: [
                { nama: "Fakhri Ahmad Alfanani", gender: "L" },
                { nama: "Salwa Salsabil", gender: "P" }
            ]
        },
        {
            namaMK: "Kitab Kuning",
            pjs: [
                { nama: "Abdullah Fasya", gender: "L" },
                { nama: "Belum Diisi", gender: "N" }
            ]
        },
        {
            namaMK: "PPTQ",
            pjs: [
                { nama: "Khumaira", gender: "P" },
                { nama: "Belum Diisi", gender: "N" }
            ]
        }
    ];

    const pjContainer = document.getElementById("pj-container");
    const igIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;

    // Render HTML untuk setiap MK
    mkData.forEach(mk => {
        let membersHTML = '';
        
        mk.pjs.forEach(pj => {
            // Logika untuk avatar Laki-laki / Perempuan / Kosong
            let seedWord = "unknown";
            if(pj.gender === "L") seedWord = pj.nama + " boy";
            if(pj.gender === "P") seedWord = pj.nama + " girl";

            // Buat username IG buatan dari nama depan
            let igUsername = pj.nama.split(" ")[0].toLowerCase();
            
            // Jika data kosong ("Belum Diisi")
            let igElement = `<a href="#" target="_blank" class="real-content ig-link">${igIcon} @${igUsername}</a>`;
            if (pj.nama === "Belum Diisi") {
                igElement = `<span class="real-content ig-link" style="color: #64748b;">(TBA)</span>`;
            }

            membersHTML += `
                <div class="member">
                    <div class="avatar-box">
                        <div class="skeleton-shape s-avatar-sm"></div>
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seedWord)}" class="real-content" alt="Foto">
                    </div>
                    <div class="skeleton-shape s-name-sm"></div>
                    <h4 class="real-content">${pj.nama}</h4>
                    <div class="skeleton-shape s-ig-sm"></div>
                    ${igElement}
                </div>
            `;
        });

        const cardHTML = `
            <div class="group-card skeleton">
                <div class="skeleton-shape s-group-title"></div>
                <h3 class="group-title real-content">${mk.namaMK}</h3>
                <div class="members">
                    ${membersHTML}
                </div>
            </div>
        `;
        
        pjContainer.innerHTML += cardHTML;
    });

    /* --- MATIKAN SKELETON SETELAH 2 DETIK --- */
    setTimeout(() => {
        const skeletonCards = document.querySelectorAll('.skeleton');
        skeletonCards.forEach(card => card.classList.remove('skeleton'));
    }, 2000); 

    /* --- ANIMASI SCROLL --- */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    reveals.forEach(reveal => observer.observe(reveal));
});
