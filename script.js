document.addEventListener("DOMContentLoaded", () => {

    /* --- 1. Logika Skeleton Loading --- */
    // Mensimulasikan pengambilan data dari server (delay 2.5 detik)
    setTimeout(() => {
        const skeletonElements = document.querySelectorAll('.skeleton');
        const skeletonTexts = document.querySelectorAll('.skeleton-text');
        const skeletonImgs = document.querySelectorAll('.skeleton-img');
        
        // Hapus class skeleton dari parent card
        skeletonElements.forEach(el => el.classList.remove('skeleton'));
        
        // Hapus background shimmer dan biarkan teks asli terlihat
        skeletonTexts.forEach(el => el.classList.remove('skeleton-text'));
        
        // Munculkan gambar asli
        skeletonImgs.forEach(el => {
            el.classList.remove('skeleton-img');
            const img = el.querySelector('img');
            if (img) img.style.opacity = '1';
        });

    }, 2500); // 2500ms = 2.5 detik


    /* --- 2. Logika Scroll Animasi (Intersection Observer) --- */
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1, // Elemen akan ter-trigger saat 10% masuk layar
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Jika belum terlihat, abaikan
            } else {
                entry.target.classList.add('active'); // Tambahkan class active
                observer.unobserve(entry.target); // Berhenti mengawasi setelah muncul
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});
