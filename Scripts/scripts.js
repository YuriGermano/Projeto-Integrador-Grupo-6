const header = document.getElementById('header');

window.onscroll = function() {

  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const imagens = [
  "Images/img1carrosselartedigital.png",
  "Images/img2carroselartedigital.jpg",
  "Images/img3carrosselartedigital.jpg",
  "Images/img4carrosselartedigital.png",
  "Images/img5carrosselartedigital.png"
];

let indiceAtual = 0;

function mostrarImagem() {
  const imagemCarrossel = document.getElementById("imagemCarrossel");
  imagemCarrossel.classList.remove("mostrar");

  console.log("Mostrando imagem:", imagens[indiceAtual]);

  setTimeout(() => {
    imagemCarrossel.src = imagens[indiceAtual];
    imagemCarrossel.classList.add("mostrar");
  }, 100);

  atualizarIndicadores();
}

function mudarImagem(direcao) {
  indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
  mostrarImagem();
}

function atualizarIndicadores() {
  const indicadores = document.querySelector(".indicadores");
  indicadores.innerHTML = "";

  imagens.forEach((_, i) => {
    const indicador = document.createElement("span");
    indicador.classList.add("indicador");
    if (i === indiceAtual) indicador.classList.add("ativo");
    indicador.onclick = () => {
      indiceAtual = i;
      mostrarImagem();
    };
    indicadores.appendChild(indicador);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarImagem();
});