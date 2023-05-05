var numero = Math.floor(Math.random() * 11);
var tentativas = 0;
function chutar() {
  var chute = parseInt(document.getElementById("chute").value);
  if (chute === numero) {
    document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    numero = Math.floor(Math.random() * 11);
    tentativas = 0;
  } else {
    tentativas++;
    if (tentativas === 3) {
      document.getElementById("resultado").innerHTML = "Suas tentativas acabaram. O número era " + numero + ".";
      numero = Math.floor(Math.random() * 11);
      tentativas = 0;
    } else {
      var tentativasRestantes = 3 - tentativas;
      document.getElementById("resultado").innerHTML = "Ops, você errou. Você ainda tem " + tentativasRestantes + " tentativa(s) restante(s).";
    }
  }
}
