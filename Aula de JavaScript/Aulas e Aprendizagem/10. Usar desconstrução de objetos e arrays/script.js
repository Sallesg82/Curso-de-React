// Uma chave com descrições de uma pessoa
const pessoa = {
  nome: "Felipe",
  sobrenome: "Silva",
  idade: 15,
  cargo: "Desenvolvedor Front-end",
};

console.log(pessoa); // Aqui ele chamará "pessoa" junto com suas caracteristicas

// Aqui ele desconstruirá o nome da pessoa e criará uma variável chamada "nome"
let { nome } = pessoa;
console.log(nome);

// Aqui ele desconstruirá o sobrenome da pessoa e criará uma variável
let { sobrenome } = pessoa;
console.log(sobrenome);

// Aqui ele desconstruirá a idade e cargo da pessoa e criará variáveis separadas
let { idade, cargo } = pessoa;
console.log(idade);
console.log(cargo);

// Aqui ele desconstruirá o cargo da pessoa
// e criará uma variável chamada "programador_JS"
let { cargo: programador_JS } = pessoa;
console.log(programador_JS);

// =============================================================================

console.log(pessoa); // Aqui temos o nome do cargo normalmente

console.log(cargo);
cargo = "Louco"; // porém se alterarmos o cargo por fora
//                  ele não será alterado em pessoa

console.log(cargo);
console.log(pessoa);

//  ============================================================================
let nomes = ["Matheus", "Fraga", 10]; // Aqui ele desconstruirá a chave
console.log(nomes);

let { 1: segundoNome } = nomes; // A primeira maneira é usando o número
//                                          (começa em 0)
console.log(segundoNome);

let { 0: primeiroNome, 2: idade2 } = nomes; // Para multimas variaveis
console.log(primeiroNome);
console.log(idade2);

// =============================================================================

// Aqui ele desconstruirá sem precisar colocar o número, abrindo uma chave.
let nomes2 = ["Lucas", "Fernandes", 24];

let [primeiroNome2, segundoNome2, idade3] = nomes2;
console.log(primeiroNome2);
console.log(segundoNome2);
console.log(idade3);
