var nome = "";

if (typeof localStorage == "underfined") {
  localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;

document.getElementById("nome").innerHTML = nome;
