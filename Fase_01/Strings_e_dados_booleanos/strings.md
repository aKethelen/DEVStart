# 📌 Anotações -

## Conceitos Básicos - Strings e Booleanos em JavaScript
Strings
O que são?
Strings são sequências de caracteres que representam textos, palavras, frases ou qualquer conteúdo textual.
Exemplo: "Olá, mundo!", "JavaScript", "1234".

Como usar em JavaScript?
Podemos criar strings usando aspas simples '...', aspas duplas "..." ou crases `...` (template literals).
Exemplos:

let nome = "Maria";
let saudacao = 'Olá!';
let frase = `Hoje é um dia ensolarado.`;

Para que serve?
Strings são muito usadas para mostrar mensagens ao usuário, manipular textos, armazenar nomes, endereços, etc.
2. Booleanos
O que são?
Booleanos (ou boolean) são um tipo de dado que só pode ter dois valores: true (verdadeiro) ou false (falso).

Como usar em JavaScript?
Você pode criar variáveis booleanas direto assim:

let estaChovendo = true;
let podeVotar = false;

Para que serve?
Booleanos são essenciais para controle de fluxo em programas, como decidir entre caminhos diferentes em estruturas condicionais (if, while, etc). Eles representam condições que podem ser verdadeiras ou falsas.

Exemplos práticos

let nome = "João";              // string
let maiorDeIdade = true;        // booleano

if (maiorDeIdade) {
  console.log(nome + " pode votar.");
} else {
  console.log(nome + " não pode votar.");
}
Resumo
| Tipo | Exemplos | Valores Possíveis |
| String | "texto", 'ola'| Qualquer texto (letras, números, símbolos) |
| Booleano | true, false | Apenas true ou false |

## Exercicio 01

 Neste exercício, vamos praticar a atribuição do valor false a uma variável booleana.
Crie uma variável chamada podeVotar e atribua um valor a ela, sabendo que o usuário ainda é menor de idade e não pode votar.

## Exercicio 02

Neste exercício, vamos praticar a atribuição do valor true a uma variável booleana.

Crie uma variável chamada jaVotou e dê um valor a ela, sabendo que o usuário já votou.
