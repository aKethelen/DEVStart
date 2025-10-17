# Nomeando variáveis e funções

Você não pode definir uma variaveis depois que ela foi definida.

exemplos:

let nome = "Kethelen"

Isso é INVALIDO e vai retornar um erro

nome = "Kethelen"

Agora sim!

A diferenciação de maisculas e minusculas significam que um caractere minusculo e o seu caractere maisculo equivalente não são considerados iguais.

exemplo:

"Kethelen" e "KETHELEN" não são considerados iguais.

Agora, se não existe essa diferenciação tanto faz se o nome esta todo em minuúscula ou maiúscula.

exemplo:

let Nome = "Kethelen"

Essa não é a variavel nome

nome = "Kethelen"

Os nomes de variáveis e de funções diferenciam maiúsculas de minúsculas.

exemplo:

function teste() {
}

esse funcao é diferente da primeira.
function Teste() {
}

Uma conversao de nomeclatura é um conjunto de regras que voce deve levar em consideracao ao definir o noe de uma variavel ou funcao.

Em Js, a conversao de nomenclatura para variaveis e funcoes e a lowerCamelCase

lowerCamelCase significa que o primeiro caractere da primeira palavra deve ser minusculo, e o primeiro caractere das palavra restantes deve ser maisculo.

Voce nao pode iniciar um nome de variave ou de funcao com um numero.

o Parametro esta disponivel apenas dentro da funcao.

Pode ser confuso quando o nome da variavel é igual ao do parametro da funcao, mas lembre-se de que eles nao sao a mesma coisa.

Use nomes diferentes ao criar variaveis e parametros, para evitar confusao.

## 1. Nomeando variáveis e funções

Objetivo: Entender como escolher nomes significativos para variáveis e funções que reflitam claramente o que elas armazenam ou fazem. Nomes bons tornam o código mais legível e fácil de manter.

Exemplo:

js

let idade = 25; // nome claro que indica idade
function calcularArea() { ... } // função que calcula área

## 2. Regras de variáveis e funções

Objetivo: Aprender as regras de sintaxe para escrever nomes válidos de variáveis e funções no JavaScript:

Nomes não podem começar com números;
Nomes podem conter letras, números, $ e _;
Não podem usar palavras reservadas do JavaScript (como function, var, let, etc.);
São case-sensitive (diferenciam maiúsculas e minúsculas): idade e Idade são variáveis diferentes.

## 3. Convenção de nomenclatura

Objetivo: Conhecer as práticas padrão e recomendadas para nomear variáveis e funções. As convenções ajudam a manter um padrão e entendibilidade no time, por exemplo:

camelCase para nomes de variáveis e funções — exemplo: minhaVariavel, calcularMedia;
PascalCase para nomes de classes — exemplo: MinhaClasse;
Usar nomes descritivos e evitar abreviações confusas.

## 4. Confusão de parâmetros

Objetivo: Aprender a evitar erros comuns como trocar a ordem dos parâmetros na chamada de funções, passar tipos errados ou não passar todos os parâmetros necessários.

Exemplo:

js

function soma(a, b) {
  return a + b;
}

soma(3, 5); // correto
soma(5); // errado ou incompleto, faltou o segundo parâmetro
Entender que a ordem e o número de parâmetros são importantes para o funcionamento correto da função.
