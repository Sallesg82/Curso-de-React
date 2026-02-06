// Forma antiga de concatenar strings

let nome = "matheus";
let sobrenome = "silva";
let idade = 12;

let pessoa = "Meu nome é: " + nome + sobrenome + " e minha idade é: " + idade;
pessoa;

// Forma mais recente de concatenar strings
let pessoa2 = `Meu nome é ${nome} ${sobrenome} e minha idade é ${idade}`;
pessoa2;

// Porem só funciona com cráse, pois com aspas simples ou duplas não funciona
let pessoa3 = "Meu nome é ${nome} ${sobrenome} e minha idade é ${idade}";
pessoa3;
