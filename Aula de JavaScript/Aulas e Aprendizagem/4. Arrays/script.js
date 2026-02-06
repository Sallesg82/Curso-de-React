/* 
    Criação de lista e variavel
*/

var nome = "Matheus";

var lista = ["Matheus", "Lucas", "Henrique", "João", 20];



/*
    Mensagens
*/

// O "alert" é para criar um alerta na página.
alert("Na lista tem " + lista.length + " nomes."); // lenght serve para mostrar a quantidade de uma lista.


// o "console.log" irá enviar uma mensagem para o console.
console.log("O segundo item na lista é " + lista[2]);

/*-----------------------------------------------------------------------------------------------------------------*/


/* Manipulação de arrays */

// Localizar onde está o nome "João"
console.log("O nome joão está localizado em: " + lista.indexOf("João")); // "indexOf" localiza em qual número está o nome

// Localizar um nome que não está na lista. A resposta sempre será "-1" quando o item não é localizado dentro da lista mensionada
console.log("O nome Felipe está localizado em: " + lista.indexOf("Felipe")+ ". Ou seja, não foi encontrado.");

// Mostrar a lista inteira com separações
console.log(lista.join(" / "));
console.log(lista.join(", "));

// Remover o ultimo item da lista.
lista.pop();
console.log(lista.join(" | "));

// Remover o primeiro item da lista.
lista.shift();
console.log(lista.join(" | "));

// Adicionar um novo item para a lista
lista.push("Matheus")
console.log(lista.join(" | "))

var ifnome = "Joãoo"

if(lista.indexOf(ifnome) > -1){
    console.log("O nome " + ifnome + " está na lista")
}else{
    console.log("O nome " + ifnome +" não está na lista")
}