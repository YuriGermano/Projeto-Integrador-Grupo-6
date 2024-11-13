const header = document.getElementById('header');

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const images = [
  'Images/img1carrosselartedigital.png',
  'Images/img2carroselartedigital.jpg',
  'Images/img3carrosselartedigital.jpg',
  'Images/img4carrosselartedigital.png',
  'Images/img5carrosselartedigital.png' // Fifth image added here
];

let currentSlideIndex = 0;

// Initialize Carousel
function initCarousel() {
  const slideContainer = document.getElementById('carousel-slides');
  const indicatorsContainer = document.getElementById('carousel-indicators');

  images.forEach((imageSrc, index) => {
      // Create slide element
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');
      if (index === 0) slide.style.display = 'flex';

      const img = document.createElement('img');
      img.src = imageSrc;
      slide.appendChild(img);

      slideContainer.appendChild(slide);

      // Create indicator
      const indicator = document.createElement('span');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.setAttribute('onclick', `goToSlide(${index})`);

      indicatorsContainer.appendChild(indicator);
  });
}

// Show Slide
function showSlide(index) {
  const slides = document.getElementsByClassName('carousel-slide');
  const indicators = document.getElementsByClassName('indicator');

  // Hide all slides and deactivate all indicators
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      indicators[i].classList.remove('active');
  }

  // Show the current slide and activate the corresponding indicator
  slides[index].style.display = 'flex';
  indicators[index].classList.add('active');
}

// Navigate to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % images.length;
  showSlide(currentSlideIndex);
}

// Navigate to the previous slide
function previousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
  showSlide(currentSlideIndex);
}

// Go to a specific slide
function goToSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

// Initialize carousel on page load
initCarousel();