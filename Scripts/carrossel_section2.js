let currentSlide = 0;

const images = [
  "Images/img1carrosseldeepfake.png",
  "Images/img2carrosseldeepfake.png",
  "Images/img3carrosseldeepfake.png",
  "Images/img4carrosseldeepfake.png",
  "Images/img4carrosseldeepfake.png",
  "Images/img5carrosseldeepfake.png"
];

const imagemCarrossel = document.getElementById("imagemCarrossel_section2");
const indicadores = document.getElementById("indicadores_section2");

// Initialize indicators and display the first image
function initCarousel() {
    images.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        indicator.addEventListener("click", () => goToSlide(index));
        indicadores.appendChild(indicator);
    });
    updateCarousel();
}

// Update the carousel display and active indicator
function updateCarousel() {
    imagemCarrossel.src = images[currentSlide];
    document.querySelectorAll("#indicadores_section2 .indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active-indicator", index === currentSlide);
    });
}

// Navigate to the previous or next slide
function mudarImagem(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;
    updateCarousel();
}

// Go directly to a specific slide
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Initialize the carousel on page load
window.onload = initCarousel;
