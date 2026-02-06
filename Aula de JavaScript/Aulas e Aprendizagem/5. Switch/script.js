// Switch
document.writeln("<br> O que você gostaria de pedir?");
document.writeln("<br> 0- Sorvete / 1- Coca-Cola");
document.writeln("<br> 2- Suco / 3- Água <br><br>");

function pedir() {
  x = prompt("O que você gostaria de pedir?");

  switch (x) {
    case "0":
      alert("Você selecionou o sorvete.");
      break;

    case "1":
      alert("Você selecionou coca-cola.");
      break;

    case "2":
      alert("Você selecionou suco.");
      break;

    case "3":
      alert("Você selecionou água.");
      break;

    default:
      alert("Opção Inválida");
      break;
  }
}
