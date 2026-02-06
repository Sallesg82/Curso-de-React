var nome = "Mateus";

// Usando VAR
if (nome == "Matheus") {
  var idade = 25;
  console.log("Tem " + idade);
}

// Usando LET
if (nome == "Matheus") {
  let sobrenome = "Silva";
  // Quando se usa o LET, ele só funciona dentro do escopo do bloco.
  // Como nesse exemplo, o IF.
  console.log("Matehus" + sobrenome);
}

console.log(sobrenome); // vai dar erro.

// =============================================================================

// Var dentro de uma lista
var lista = [1, 2, 3];

for (var i in lista) {
  console.log(lista[i]);
}
i;

// For dentro de uma lista
for (let b in lista) {
  console.log(lista[b]);
}
b; // não funciona fora do escopo do bloco, então dará erro esse B

// =============================================================================

let nome = "Matheus";
var idade = 10;

if (idade == 10) {
  // O LET funciona normalmente dentro da condição IF,
  //mesmo criado fora.
  console.log(nome);
}

// =============================================================================

// Const

const nome = "Lucas";
lucas;

nome = "Lucas Silva"; // Não funciona, pois é uma constante e não se muda.
