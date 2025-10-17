# Objetivo da fase: Corpo da funcao

## O principal objetivo dessa fase é

1. Corpo da função
Objetivo: Aprender a implementar o conteúdo principal dentro de uma função. Ou seja, entender onde colocar o código que realiza a tarefa solicitada, retornando ou manipulando dados conforme o esperado. É a "parte ativa" da função onde a lógica acontece.

2. Método .trim()
Objetivo: Utilizar o método .trim() para remover espaços em branco do início e do fim de uma string. Isso é muito útil para limpeza de dados, como quando um usuário digita e-mails ou nomes com espaços extras.

3. Formatação de e-mail
Objetivo: Aplicar técnicas para formatar corretamente um e-mail, como remover espaços com .trim(), transformar todas as letras em minúsculas ou maiúsculas com .toLowerCase() ou .toUpperCase(), ou validar seu formato.

4. Reatribuindo valor à variável
Objetivo: Praticar a modificação do conteúdo armazenado em uma variável, mostrando que o valor original pode ser alterado durante a execução do programa para atender a nova lógica ou processamento.

5. Transforme todas as letras em maiúsculas
Objetivo: Aprender a usar o método .toUpperCase() para converter todas as letras de uma string em letras maiúsculas, o que pode ser útil em padronização de dados.

6. Trabalhando com números
Objetivo: Manipular valores numéricos (como somar, subtrair, multiplicar, dividir ou converter unidades) para resolver problemas práticos usando operações matemáticas em JavaScript.

7. Conversor de metros para quilômetros
Objetivo: Criar uma função que converta distâncias em metros para quilômetros, reforçando o uso de operações matemáticas e retorno de valores em funções.

8. Projeto 4 - Aplicativo conversor
Objetivo: Desenvolver um mini-projeto que integra o aprendizado das funções, manipulação de strings e números para criar aplicativos que convertem valores entre unidades — por exemplo, temperaturas ou distâncias.

9. Conversor de Km para milhas
Objetivo: Construir uma função que faça conversão de quilômetros para milhas, praticando a aplicação de fórmulas matemáticas dentro de funções em JavaScript.

10. Conversor de Celsius para Fahrenheit
Objetivo: Implementar a conversão de temperaturas de Celsius para Fahrenheit utilizando a fórmula (Celsius * 9/5) + 32, praticando lógica matemática e estruturas de função.

## Exercicio 01

- O método Trim () nos permite fazer uma nova cópia de uma string, removendo os espaços iniciais e finais
- o modo de usar trim() é semelhante ao toUpperCase() e ao toLowerCase()

1- Conclua o retorno da função pegueEmail() de forma que o e-mail retornado não tenha mais espaços extras, nem à esquerda nem à direita. Ou seja, retire os espaços indesejados.

Implemente o retorno da função pegueEmail().

Testes

Retire os espaços indesejados antes e depois do e-mail recebido pela função pegueEmail().

É esperado que, ao receber qualquer e-mail com espaços no início e no final, o resultado seja apenas o endereço de e-mail, sem espaço algum.

## Explicacao

O método .trim() é a solução simples e direta para retirar espaços extras do e-mail.
Usar return é essencial para devolver o resultado desejado.
Se não usar return, a função retorna undefined automaticamente, o que pode gerar erro ou resultado inesperado

## Exercicio 02

- Os métodos trim(), toLowerCase() e toUpperCase() criam novas cópias da variável. Eles não alteram a variável original.

- O método toLowerCase() retorna o valor da string original convertido para minúsculo. toLowerCase() não altera o valor da string original.

-O método toUpperCase() retorna o valor da string convertido para letras maiúsculas. toUpperCase() não altera o valor da string original.

- Para alterar a variável, você deve reatribuir essa variável a ela mesma com uma chamada de função. Por exemplo, limpo = limpo.trim() vai alterar o valor da variável, removendo os espaços iniciais e finais que houver dentro dela.

2- Complete a função pegueNome() de forma que ela converta todo o nome em letras maiúsculas e também remova os espaços à esquerda e à direita. Tente fazê-lo passo a passo, em várias linhas, seguindo a mesma abordagem que vimos anteriormente. Sinta-se à vontade para adicionar logs do console ao longo do caminho para ver as transformações passo a passo.

Implemente o retorno da função pegueNome().

Testes

Retire os espaços indesejados e, ao mesmo tempo, faça com que todas letras do nome fiquem em maiúsculas. É esperado que a sua implementação, ao receber qualquer nome como " bruno", retorne o seguinte resultado: "BRUNO".

É esperado que a sua implementação, ao receber qualquer nome como " alex ", retorne o seguinte resultado: "ALEX".

## Explicacao 02

trim(): é uma função de string que remove os espaços extras do começo (esquerda) e do fim (direita) da string.
toUpperCase(): converte todas as letras da string para maiúsculas.
Variáveis intermediárias (nomeSemEspacos e nomeMaiusculo) são úteis para entender e debugar o código passo a passo.
Os console.log() são para acompanhar as mudanças em cada etapa, mas você pode removê-los depois que seu código estiver funcionando.

## Exercicio 03

Complete a função converterMetrosParaKm, de forma que ela converta os metros recebidos em quilômetros. Certifique-se de retornar o novo valor assumido pela conversão.

Implemente uma função converterMetrosParaKm()

Testes

A função converteu de metro para Km.

## Explicacao 03

 para converter metros para quilômetros, você deve dividir o valor em metros por 1000.

 Multiplicar por 1 não altera o valor.
Dividir por 1000 converte metros em quilômetros, porque 1000 metros equivalem a 1 km.

## Exercicio Projeto 4.1

Complete a função converterKmParaMilhas() de forma que ela retorne o número de quilômetros que recebe, convertido em milhas. A fórmula para converter de km para milhas é: valorKM multiplicado por 0.62137. Certifique-se de retornar o novo valor assumido pela conversão.

Implemente a função que foi solicitada.

Testes

A função converteu Km em milhas.

## Exercicio Projeto 4.2

Complete a função converterCelsiusParaFahrenheit() de forma que ela retorne a temperatura em Celsius, convertida para Fahrenheit. A fórmula para converter de Celsius para Fahrenheit é: (celsius * 9 / 5) + 32.

Exemplo: Se você precisar converter uma temperatura de 25°C para Fahrenheit, a expressão converterCelsiusParaFahrenheit(25) deve retornar 77.

Implemente a função que foi solicitada.

Testes

A função converte de Celsius para Fahrenheit.

## Explicacao Porjeto 4.2

## Colinha: Conversões e Operadores em JavaScript

Conversões Básicas de Unidades
1 quilômetro (km) = 1000 metros (m)
Para converter metros para quilômetros:

km = metros / 1000;

Para converter quilômetros para metros:

metros = km * 1000;

Operadores Aritméticos
| Operador | Descrição | Exemplo | Resultado |
| + | Soma | 5 + 3 | 8 |
| - | Subtração | 10 - 4 | 6 |
| *| Multiplicação | 6* 2 | 12 |
| / | Divisão | 20 / 4 | 5 | | % | Resto da divisão | 9 % 4 | 1

Operadores de Atribuição Combinada
Eles atualizam o valor de uma variável com base em uma operação.

| Operador | Equivalência | Exemplo | Descrição

| += | x = x + y | x += 5 | Soma e atribui |
| -= | x = x - y | x -= 3 | Subtrai e atribui |
| *= | x = x*y | x *= 2 | Multiplica e atribui |
| /= | x = x / y | x /= 4 | Divide e atribui |

Quando usar cada um?
Use += quando quiser somar um valor a uma variável existente e atualizar seu valor.
Exemplo:

let contador = 0;
contador += 1;  // contador agora vale 1
Use * para multiplicar dois valores.

Exemplo:

let area = comprimento * largura;
Use / para dividir um número por outro, por exemplo, para converter unidades.

Exemplo:
let km = metros / 1000;

-- A fórmula para converter de km para milhas é: valorKM multiplicado por 0.62137.

1. Celsius para Fahrenheit
Fórmula:

F = (C * 9 / 5) + 32;

Função:

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
2. Fahrenheit para Celsius
Fórmula:

C = (F - 32) * 5 / 9;

Função:

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
3. Celsius para Kelvin
Fórmula:

K = C + 273.15;
Função:

function celsiusParaKelvin(celsius) {
  return celsius + 273.15;
}
4. Kelvin para Celsius
Fórmula:

C = K - 273.15;
Função:

function kelvinParaCelsius(kelvin) {
  return kelvin - 273.15;
}
5. Fahrenheit para Kelvin
Podemos converter Fahrenheit para Celsius, e depois Celsius para Kelvin, ou diretamente:

Fórmula:

K = (F - 32) * 5/9 + 273.15;
Função:

function fahrenheitParaKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9 + 273.15;
}
6. Kelvin para Fahrenheit
Fórmula:

F = (K - 273.15) * 9 / 5 + 32;
Função:

function kelvinParaFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9 / 5 + 32;
}

Exeplos de uso:

 Vou criar uma função chamada converterTemperatura que recebe três parâmetros:

valor — o valor da temperatura a ser convertida;
unidadeOrigem — a unidade atual da temperatura ('C', 'F' ou 'K');
unidadeDestino — a unidade para a qual queremos converter ('C', 'F' ou 'K').
A função vai fazer as verificações necessárias e retornar o valor convertido.

Segue o código comentado para facilitar o entendimento:

js

function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
  // Normaliza as unidades para maiúsculo para facilitar comparações
  unidadeOrigem = unidadeOrigem.toUpperCase();
  unidadeDestino = unidadeDestino.toUpperCase();

  // Se as unidades forem iguais, retorna o valor original
  if (unidadeOrigem === unidadeDestino) {
    return valor;
  }

  let celsius;

  // Converte a temperatura de origem para Celsius:
  switch (unidadeOrigem) {
    case 'C':
      celsius = valor;
      break;
    case 'F':
      celsius = (valor - 32) * 5 / 9;
      break;
    case 'K':
      celsius = valor - 273.15;
      break;
    default:
      throw new Error('Unidade de origem inválida. Use "C", "F" ou "K".');
  }

  // Agora converte de Celsius para a unidade destino:
  switch (unidadeDestino) {
    case 'C':
      return celsius;
    case 'F':
      return (celsius * 9 / 5) + 32;
    case 'K':
      return celsius + 273.15;
    default:
      throw new Error('Unidade de destino inválida. Use "C", "F" ou "K".');
  }
}
Exemplos de uso
js

console.log(converterTemperatura(25, 'C', 'F')); // 77
console.log(converterTemperatura(77, 'F', 'C')); // 25
console.log(converterTemperatura(25, 'C', 'K')); // 298.15
console.log(converterTemperatura(30

Explicação resumida
Primeiro o valor é convertido para Celsius, pois é uma unidade base mais simples para cálculos intermediários.
Depois, o valor em Celsius é convertido para a unidade desejada.
O controle de erros também ajuda a garantir que o usuário informe apenas C, F ou K.

## Dica

Quando quiser praticar programacao fora do curso
sites:
codepen.io
codesandbox.io
