const header = document.getElementById('header');

window.onscroll = function() {

  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const imagens = [
  "Images/img1carrosseldeepfake.png",
  "Images/img2carrosseldeepfake.png",
  "Images/img3carroseldeepfake.png",
  "Images/img4carroseldeepfake.png",
  "Images/img5carroseldeepfake.png"
];

let indiceAtual = 0;

function mostrarImagem() {
  const imagemCarrossel = document.getElementById("imagemCarrossel");
  imagemCarrossel.classList.remove("mostrar");
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
  atualizarIndicadores();
});