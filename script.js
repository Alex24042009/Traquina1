document.getElementById("enterBtn").addEventListener("click", function() {
    window.location.href = "lembrancas.html";
});

function atualizarContador() {

  // COLOQUE A DATA QUE VOCÊS COMEÇARAM
  const dataInicio = new Date("2025-12-17T00:00:00");

  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("tempoJuntos").innerHTML =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}

setInterval(atualizarContador, 1000);
atualizarContador();