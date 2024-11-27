let currentSlide_section7 = 0;
const images_section7 = [
  "Images/img1carrosselartedigital.png",
  "Images/img2carrosselartedigital.jpg",
  "Images/img3carrosselartedigital.jpg",
  "Images/img4carrosselartedigital.png",
  "Images/img5carrosselartedigital.png"
];

const imagemCarrossel_section7 = document.getElementById("imagemCarrossel_section7");
const indicadores_section7 = document.getElementById("indicadores_section7");
const prevButton_section7 = document.getElementById("prev_section7");
const nextButton_section7 = document.getElementById("next_section7");

function initCarousel_section7() {
    indicadores_section7.innerHTML = '';
    images_section7.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        indicator.addEventListener("click", () => goToSlide_section7(index));
        indicadores_section7.appendChild(indicator);
    });
    
    prevButton_section7.addEventListener("click", () => mudarImagem_section7(-1));
    nextButton_section7.addEventListener("click", () => mudarImagem_section7(1));

    updateCarousel_section7();
}

function updateCarousel_section7() {
    imagemCarrossel_section7.src = images_section7[currentSlide_section7];
    document.querySelectorAll("#indicadores_section7 .indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active-indicator", index === currentSlide_section7);
    });
}

function mudarImagem_section7(direction) {
    currentSlide_section7 = (currentSlide_section7 + direction + images_section7.length) % images_section7.length;
    updateCarousel_section7();
}

function goToSlide_section7(index) {
    currentSlide_section7 = index;
    updateCarousel_section7();
}

window.addEventListener('load', initCarousel_section7);