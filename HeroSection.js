    // ===== SLIDESHOW BACKGROUND (HANYA DI SECTION INI) =====
    const images = [
        "Foto1.jpg",
        "Foto2.jpg",
        "Foto3.jpg",
        "Foto4.jpg",
        "Foto5.jpg",
        "Foto6.jpg",
        "Foto7.jpg",
        "Foto8.jpg"
    ];
    let currentIndex = 0;

    function changeBackground() {
        // Mengubah background dari .countdown-section, BUKAN document.body
        countdownSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000);
    changeBackground(); // Panggil pertama kali agar background langsung muncul
})();