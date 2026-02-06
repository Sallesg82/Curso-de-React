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

//-------------------------------------------------------------------
