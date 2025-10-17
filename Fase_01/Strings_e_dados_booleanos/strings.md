# 📌 Anotações -

Conceitos Básicos - Strings e Booleanos em JavaScript
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

## Objetivos e conceitos aprendidos nesta fase

1.Introdução às Strings
Entender o que são strings: sequências de caracteres usadas para representar textos.
Aprender a definir uma string em JavaScript, usando aspas simples '...' ou aspas duplas "...".
js

let saudacao = "Olá, mundo!";

2.Comprimento da string
Saber como descobrir o tamanho (número de caracteres) de uma string usando a propriedade .length.
js

let palavra = "programação";
console.log(palavra.length);  // Exibe 10

3.Escrever no console
Utilizar console.log() para exibir texto e valores no console, uma ferramenta essencial para debugar e acompanhar o funcionamento do código.
js

console.log("Mensagem no console");

4.Console e funções
Criar funções para executar códigos reutilizáveis.
Entender como console.log() pode ser chamado dentro de funções para mostrar resultados.
js

function dizerOla() {
  console.log("Olá!");
}

dizerOla(); // chama a função e exibe "Olá!"

5.Métodos de strings
Utilizar métodos embutidos nas strings para transformá-las, como:
toUpperCase() — converte para maiúsculas.
toLowerCase() — converte para minúsculas.
js

let nome = "João";
console.log(nome.toUpperCase()); // "JOÃO"
console.log(nome.toLowerCase()); // "joão"

6.Projeto de aplicação simples (exemplo: Aplicativo de nomes)
Aplicar o conhecimento de strings para criar um app simples que manipula e exibe nomes, experimentando as variações aprendidas.

7.Dados booleanos
Entender os dados booleanos, que podem ter apenas dois valores: true (verdadeiro) ou false (falso).
Usar variáveis booleanas para indicar estados ou condições, como:
jaVotou = true — indica que o usuário já votou.
estaAtivo = false — indica que algo está inativo.
Aprender a atribuir e usar valores booleanos para controlar o fluxo do programa, baseando-se em condições.

## Benefícios desse aprendizado

Você passa a manipular dados textuais (strings) para criar e alterar mensagens no programa.
Aprende a medir e transformar textos, otimizando a apresentação dessas informações.
Entende como usar a ferramenta básica (console.log) para acompanhar o código.
Integra funções e métodos para organizar e modularizar seu código.
Aprende a trabalhar com tipos de dados essenciais: booleanos, fundamentais para tomadas de decisões e controles lógicos em qualquer programa.

## Exercicio 01

 Neste exercício, vamos praticar a atribuição do valor false a uma variável booleana.
Crie uma variável chamada podeVotar e atribua um valor a ela, sabendo que o usuário ainda é menor de idade e não pode votar.

## Exercicio 02

Neste exercício, vamos praticar a atribuição do valor true a uma variável booleana.

Crie uma variável chamada jaVotou e dê um valor a ela, sabendo que o usuário já votou.

## Dica

Dicas de uso e conversão
Diferencie texto de booleano: Quando você precisa de um valor \(true\) ou \(false\), escreva diretamente true ou false sem aspas. Por exemplo, em Python, variavel = True define um booleano, enquanto variavel = "True" define uma string.

Exemplo em Python

valor_booleano = True
valor_string = "True"

Converta strings para booleanos (com cuidado):
Em muitas linguagens, uma string vazia "" é avaliada como false.
Qualquer outra string, incluindo "true" ou "false", pode ser avaliada como true em contextos booleanos.
Para converter com mais controle, você pode fazer comparações ou usar funções específicas.

Exemplo em JavaScript

let minhaString = "false";
let meuBooleano = minhaString === "true"; // Isso resulta em false

let outraString = "true";
let outroBooleano = outraString === "true"; // Isso resulta em true
Utilize em lógica de programação:
Booleanos são ideais para tomar decisões em estruturas como if e else ou em loops.
É crucial garantir que a variável que você está usando para essa decisão seja realmente um tipo booleano.
Python

Exemplo de uso em um loop (Python)

if meuBooleano:
  print("O valor é verdadeiro.")
else:
  print("O valor é falso.")

Dica adicional para pesquisa: Pesquisa booleana

O que é: A pesquisa booleana usa operadores como AND, OR, e NOT para combinar termos e refinar resultados em pesquisas online, como no Google, LinkedIn, etc.
Exemplo: Para encontrar informações sobre gatos e cachorros você digitaria gatos AND cachorros. Para encontrar informações sobre gatos ou cachorros, você digitaria gatos OR cachorros. E para excluir um termo, você usaria gatos NOT cachorros para encontrar resultados sobre gatos que não mencionem cachorros.
