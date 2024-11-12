const header = document.getElementById('header');

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};


// Array com as imagens para cada seção
const imagensSection2 = [
  "Images/img1carrosseldeepfake.png",
  "Images/img2carrosseldeepfake.png",
  "Images/img3carrosseldeepfake.png",
  "Images/img4carrosseldeepfake.png",
  "Images/img4carrosseldeepfake.png"
];

// Separate indices for each section
const imagensSection7 = [
  "./Images/img1carrosselartedigital.png",
  "./Images/img2carroselartedigital.jpg",
  "./Images/img3carrosselartedigital.jpg",
  "./Images/img4carrosselartedigital.png",
  "./Images/img5carrosselartedigital.png"
];

// Separate indices for each section
let indiceAtualSection2 = 0;
let indiceAtualSection7 = 0;

function getImageList(section) {
  return section === 'section2' ? imagensSection2 : imagensSection7;
}

function mostrarImagem(section) {
  const indiceAtual = section === 'section2' ? indiceAtualSection2 : indiceAtualSection7;
  const carouselId = section === 'section2' ? '#carrossel_section2' : '#carrossel_section7';
  const imagemCarrossel = document.querySelector(`${carouselId} #imagemCarrossel`);
  const imagens = getImageList(section);

  console.log(`Tentando carregar a imagem para ${section}:`, imagens[indiceAtual]);

  imagemCarrossel.src = imagens[indiceAtual];
  imagemCarrossel.classList.add("mostrar");

  imagemCarrossel.onerror = () => {
    console.error(`Erro ao carregar a imagem para ${section}:`, imagens[indiceAtual]);
    imagemCarrossel.alt = "Imagem não encontrada";
  };

  atualizarIndicadores(section);
}

function mudarImagem(direcao, section) {
  const imagens = getImageList(section);
  
  if (section === 'section2') {
    indiceAtualSection2 = (indiceAtualSection2 + direcao + imagens.length) % imagens.length;
    mostrarImagem('section2');
  } else {
    indiceAtualSection7 = (indiceAtualSection7 + direcao + imagens.length) % imagens.length;
    mostrarImagem('section7');
  }
}

function atualizarIndicadores(section) {
  const carouselId = section === 'section2' ? '#carrossel_section2' : '#carrossel_section7';
  const indiceAtual = section === 'section2' ? indiceAtualSection2 : indiceAtualSection7;
  const indicadores = document.querySelector(`${carouselId} .indicadores`);
  const imagens = getImageList(section);
  
  indicadores.innerHTML = "";

  imagens.forEach((_, i) => {
    const indicador = document.createElement("span");
    indicador.classList.add("indicador");
    if (i === indiceAtual) indicador.classList.add("ativo");
    indicador.onclick = () => {
      if (section === 'section2') {
        indiceAtualSection2 = i;
        mostrarImagem('section2');
      } else {
        indiceAtualSection7 = i;
        mostrarImagem('section7');
      }
    };
    indicadores.appendChild(indicador);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize both carousels
  mostrarImagem('section2');
  mostrarImagem('section7');
});