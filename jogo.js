const puzzle = document.getElementById("puzzle");
const mensagem = document.getElementById("mensagemFinal");

const colunas = 5;
const linhas = 4;
let pecas = [];

for (let i = 0; i < colunas * linhas; i++) {
  pecas.push(i);
}

pecas = embaralhar(pecas);

pecas.forEach((numero, index) => {

  const peca = document.createElement("div");
  peca.classList.add("peca");

  const x = (numero % colunas) * 100;
  const y = Math.floor(numero / colunas) * 100;

  peca.style.backgroundPosition = `-${x}px -${y}px`;
  peca.setAttribute("draggable", true);
  peca.dataset.index = index;
  peca.dataset.correto = numero;

  puzzle.appendChild(peca);
});

let arrastando = null;

document.querySelectorAll(".peca").forEach(peca => {

  peca.addEventListener("dragstart", () => {
    arrastando = peca;
  });

  peca.addEventListener("dragover", e => {
    e.preventDefault();
  });

  peca.addEventListener("drop", () => {
    if (arrastando === peca) return;

    trocar(arrastando, peca);
    verificar();
  });

});

function trocar(a, b) {
  const temp = a.style.backgroundPosition;
  a.style.backgroundPosition = b.style.backgroundPosition;
  b.style.backgroundPosition = temp;

  const temp2 = a.dataset.correto;
  a.dataset.correto = b.dataset.correto;
  b.dataset.correto = temp2;
}

function verificar() {
  const pecas = document.querySelectorAll(".peca");
  let correto = true;

  pecas.forEach((peca, i) => {
    if (parseInt(peca.dataset.correto) !== i) {
      correto = false;
    }
  });

  if (correto) {
  mensagem.innerHTML = `
    Você montou nossa foto ❤️ <br><br>
    <button class="btn-video" onclick="irParaVideo()">
      Ver nosso vídeo!
    </button>
  `;
}
}

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}
function irParaVideo() {
  window.location.href = "video.html";
}
