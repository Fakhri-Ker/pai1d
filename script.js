document.addEventListener("DOMContentLoaded", () => {

    /* --- 1. DATA UNTUK 11 PJ MATA KULIAH --- */
    const pjMkData = [
        { nama: "Rina Nose", mk: "PJ MK Kalkulus", ig: "rina_n" },
        { nama: "Taufik H.", mk: "PJ MK Algoritma", ig: "taufikh" },
        { nama: "Joko Anwar", mk: "PJ MK Basis Data", ig: "joko_a" },
        { nama: "Lesti K.", mk: "PJ MK Jaringan", ig: "lesti.k" },
        { nama: "Rizky B.", mk: "PJ MK Web Dasar", ig: "rizkyb" },
        { nama: "Sule", mk: "PJ MK PBO", ig: "sule_p" },
        { nama: "Andre T.", mk: "PJ MK Sistem Operasi", ig: "andre_t" },
        { nama: "Nunung", mk: "PJ MK AI & Machine Learning", ig: "nunung" },
        { nama: "Aziz G.", mk: "PJ MK Etika Profesi", ig: "aziz_g" },
        { nama: "Parto", mk: "PJ MK UI/UX Design", ig: "parto_dsgn" },
        { nama: "Vidi A.", mk: "PJ MK Kewirausahaan", ig: "vidi_a" }
    ];

    const pjContainer = document.getElementById("pj-container");

    // Membuat HTML untuk setiap PJ MK (Diawali dengan mode skeleton)
    pjMkData.forEach((data, index) => {
        const cardHTML = `
            <div class="card skeleton">
                <div class="avatar-box">
                    <div class="skeleton-shape s-avatar"></div>
                    <!-- Foto random generate by name -->
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${data.nama}" alt="Foto" class="real-content">
                </div>
                <div class="info-box">
                    <div class="skeleton-shape s-name"></div>
                    <h3 class="real-content">${data.nama}</h3>
                    
                    <div class="skeleton-shape s-role"></div>
                    <p class="real-content role">${data.mk}</p>
                    
                    <div class="skeleton-shape s-ig"></div>
                    <a href="https://instagram.com/${data.ig}" target="_blank" class="real-content ig-link">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        @${data.ig}
                    </a>
                </div>
            </div>
        `;
        pjContainer.innerHTML += cardHTML;
    });

    /* --- 2. LOGIKA SKELETON LOADING (Simulasi Internet Lag) --- */
    // Setelah 2.5 Detik, matikan semua kerangka dan tampilkan wujud aslinya
    setTimeout(() => {
        const skeletonCards = document.querySelectorAll('.card.skeleton');
        
        skeletonCards.forEach(card => {
            // CSS secara otomatis akan menyembunyikan div skeleton-shape
            // dan memunculkan div real-content ketika class 'skeleton' dihapus
            card.classList.remove('skeleton');
        });
    }, 2500); 


    /* --- 3. ANIMASI SAAT SCROLL --- */
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
