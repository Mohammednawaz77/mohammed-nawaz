document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let slideWidth = slides[0].clientWidth;
    let autoSlideInterval;

    function updateSliderPosition() {
        sliderContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSliderPosition();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    document.querySelector(".next").addEventListener("click", function() {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    document.querySelector(".prev").addEventListener("click", function() {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Start auto sliding
    startAutoSlide();

    // Hover to pause auto sliding
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);

    // Resize event to handle dynamic widths
    window.addEventListener("resize", function() {
        slideWidth = slides[0].clientWidth;
        updateSliderPosition();
    });
});
