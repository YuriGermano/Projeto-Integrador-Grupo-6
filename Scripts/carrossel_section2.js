let currentSlide_section2 = 0;
const images_section2 = [
  "Images/img1carrosseldeepfake.png",
  "Images/img2carrosseldeepfake.png",
  "Images/img3carrosseldeepfake.png",
  "Images/img4carrosseldeepfake.png",
  "Images/img5carrosseldeepfake.png"
];

const imagemCarrossel_section2 = document.getElementById("imagemCarrossel_section2");
const indicadores_section2 = document.getElementById("indicadores_section2");
const prevButton_section2 = document.getElementById("prev_section2");
const nextButton_section2 = document.getElementById("next_section2");

function initCarousel_section2() {
    indicadores_section2.innerHTML = '';
    images_section2.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        indicator.addEventListener("click", () => goToSlide_section2(index));
        indicadores_section2.appendChild(indicator);
    });

    prevButton_section2.addEventListener("click", () => mudarImagem_section2(-1));
    nextButton_section2.addEventListener("click", () => mudarImagem_section2(1));

    updateCarousel_section2();
}

function updateCarousel_section2() {
    imagemCarrossel_section2.src = images_section2[currentSlide_section2];
    document.querySelectorAll("#indicadores_section2 .indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active-indicator", index === currentSlide_section2);
    });
}

function mudarImagem_section2(direction) {
    currentSlide_section2 = (currentSlide_section2 + direction + images_section2.length) % images_section2.length;
    updateCarousel_section2();
}

function goToSlide_section2(index) {
    currentSlide_section2 = index;
    updateCarousel_section2();
}

window.addEventListener('load', initCarousel_section2);