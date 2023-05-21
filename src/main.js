const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 4) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carouselInner = document.querySelector(".carousel-inner");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const mobileQuery = window.matchMedia("(max-width: 767.9px)");
    const tabletQuery = window.matchMedia("(max-width: 1023px)");

    if (mobileQuery.matches) {
        const cardsPerSlide = 1;

        // Lebar satu card termasuk margin
        const cardWidth = carouselInner.querySelector(".card").offsetWidth + 16;

        // Jumlah total slide
        const totalSlides = Math.ceil(carouselInner.children.length / cardsPerSlide);

        let currentSlide = 0;

        // Fungsi untuk menggeser slide ke kiri
        const slideToPrev = function () {
            if (currentSlide > 0) {
                currentSlide--;
                carousel.scrollLeft = currentSlide * (cardWidth * cardsPerSlide);
            }
        };

        // Fungsi untuk menggeser slide ke kanan
        const slideToNext = function () {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                carousel.scrollLeft = currentSlide * (cardWidth * cardsPerSlide);
            }
        };

        // Tambahkan event listener pada tombol prev
        prevBtn.addEventListener("click", slideToPrev);

        // Tambahkan event listener pada tombol next
        nextBtn.addEventListener("click", slideToNext);
    } else if (tabletQuery.matches) {
        const cardsPerSlide = 2;

        // Lebar satu card termasuk margin
        const cardWidth = carouselInner.querySelector(".card").offsetWidth + 16;

        // Jumlah total slide
        const totalSlides = Math.ceil(carouselInner.children.length / cardsPerSlide);

        let currentSlide = 0;

        // Fungsi untuk menggeser slide ke kiri
        const slideToPrev = function () {
            if (currentSlide > 0) {
                currentSlide--;
                carousel.scrollLeft = currentSlide * (cardWidth * cardsPerSlide);
            }
        };

        // Fungsi untuk menggeser slide ke kanan
        const slideToNext = function () {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                carousel.scrollLeft = currentSlide * (cardWidth * cardsPerSlide);
            }
        };

        // Tambahkan event listener pada tombol prev
        prevBtn.addEventListener("click", slideToPrev);

        // Tambahkan event listener pada tombol next
        nextBtn.addEventListener("click", slideToNext);
    } else {
        const cardsPerSlide = 3;

        // Lebar satu card termasuk margin
        const cardWidth = carouselInner.querySelector(".card").offsetWidth + 16;

        // Jumlah total slide
        const totalSlides = Math.ceil(carouselInner.children.length / cardsPerSlide);

        let currentSlide = 0;

        // Fungsi untuk menggeser slide ke kiri
        const slideToPrev = function () {
            if (currentSlide > 0) {
                currentSlide--;
                carousel.scrollLeft = currentSlide * (cardWidth * cardsPerSlide);
            }
        };

        // Fungsi untuk menggeser slide ke kanan
        const slideToNext = function () {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                carousel.scrollLeft = currentSlide * (cardWidth * cardsPerSlide);
            }
        };

        // Tambahkan event listener pada tombol prev
        prevBtn.addEventListener("click", slideToPrev);

        // Tambahkan event listener pada tombol next
        nextBtn.addEventListener("click", slideToNext);
    }
});
