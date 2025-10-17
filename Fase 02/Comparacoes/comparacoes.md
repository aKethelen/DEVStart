
# Objetivos Aprendidos – Operadores de Comparação e Comparação de Igualdade

Compreender o que são operadores de comparação
Operadores de comparação são símbolos ou símbolos combinados usados para comparar valores entre si.

## Aprender a usar os operadores de comparação em JavaScript para comparar valores e obter resultados booleanos (true ou false) que são essenciais para controlar o fluxo de execução do programa

O que são operadores de comparação?
Operadores de comparação são símbolos ou expressões que comparam dois valores e retornam um resultado do tipo booleano:

true — quando a comparação é verdadeira.
false — quando é falsa.
Principais operadores de comparação em JavaScript
| Operador | Descrição | Exemplo | Retorno | |----------|---------------------------------------|----------------------|----------| | == | Igualdade (valor) | 5 == '5' | true | | === | Igualdade estrita (valor e tipo) | 5 === '5' | false | | != | Diferente (valor) | 5 != 3 | true | | !== | Diferente estrito (valor e tipo) | 5 !== '5' | true | | > | Maior que | 10 > 7 | true | | >= | Maior ou igual a | 10 >= 10 | true | | < | Menor que | 3 < 5 | true | | <= | Menor ou igual a | 3 <= 3 | true |

Dicas importantes
Use === e !== para evitar surpresas com conversão de tipos no JavaScript (== pode fazer conversão automática).
Operadores de comparação são métodos fundamentais para criar condicionais, que definem diferentes comportamentos em seu código.
O resultado das comparações sempre será booleano, podendo ser usado diretamente em estruturas como if, while e ternários.

## Exercicio 01

Complete a atribuição da variável podeVotar, de forma que ela receba uma comparação entre idade e o valor de 16 (anos). Esta comparação deve utilizar a idade com a operação maior ou igual a 16.

Crie a comparação entre idade com a operação maior ou igual a 16 e a atribua o resultado à variável podeVotar.

## Exercicio 02

Complete a atribuição da variável temDezoitoAnos de forma que ela receba uma comparação de igualdade entre idade e o valor de 18 (anos). Esta comparação deve utilizar a variável idade comparando-a ao número 18 através da operação de comparação de igualdade (===).

Crie a comparação entre idade e 18 utilizando a comparação de igualdade (===) e a atribua à variável temDezoitoAnos.
