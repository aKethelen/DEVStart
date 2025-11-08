# Objetivo da fase: Funcoes

## Objetivos e Conceitos Aprendidos na Fase 3 — Funções

1. Introdução às Funções
Você aprendeu que funções são blocos de código que executam uma tarefa específica.
Funções ajudam a organizar e reutilizar código, evitando repetição.

2. Função que Retorna o Dobro
Viu como criar uma função que recebe um número e retorna o dobro.
Importante entender que as funções podem retornar um valor com a palavra-chave return.

3. Parâmetros em Funções
Compreendeu que funções podem receber parâmetros (valores de entrada).
Esses parâmetros são usados para personalizar o comportamento da função.

4. Chamar a Função
Aprendeu a invocar ou chamar uma função para executar seu código.
Ao chamar, pode passar argumentos correspondentes aos parâmetros.

5. Múltiplos Parâmetros
Funções podem receber mais de um parâmetro para operações mais complexas.
Por exemplo, a função soma(a, b) que recebe dois valores para somar.

6. Escopo das Variáveis
Entendeu que variáveis definidas dentro de funções têm escopo local — só existem dentro daquela função.
Variáveis criadas fora têm escopo global e podem ser acessadas em todo o programa.

7. Armazenar Valor Retornado por uma Função
Você aprendeu que pode guardar o resultado que a função retorna em uma variável.
Isso permite usar o resultado para outras operações ou apresentar na tela.

8. Projeto 1 — Calculadora
Colocou em prática tudo que aprendeu criando funções para as operações básicas matemáticas (soma, subtração, multiplicação e divisão).
Usou parâmetros para passar os números a serem calculados.
Utilizou o return para devolver o resultado da operação.
Integrou essas funções com elementos HTML para criar uma calculadora funcional, interativa pelo navegador.

Resumo
Nesta fase 3, você dominou o conceito central das funções em programação:

Como escrever funções com parâmetros.
Como retornar valores para usar depois.
Como usar funções para modularizar lógica, facilitando a manutenção e repetição do código.

## Exercicio 01

Retorne o dobro
Você já deve ter utilizado as diferentes funções de um controle remoto de TV ou de um aparelho de ar condicionado. Cada vez que você pressiona o botão com o sinal de (+), ocorre um aumento de 1, seja para o próximo canal ou para aumentar a temperatura em 1°C. Da mesma forma, ao clicar no botão (-), você reduz a temperatura em 1°C ou diminui um canal. Essas ações são bastante comuns, não é mesmo? Agora, vamos explorar como essas ações repetitivas podem ser representadas e executadas através de funções na programação.

👨🏻‍💻 Hora de praticar

Complete a função dobro de modo que ela calcule o dobro do número que recebe como argumento.

Importante: não altere o código fornecido, apenas adicione a linha que falta. Lembre-se de utilizar a palavra-chave return para retornar o dobro da variável numero

Testes

Retorne o dobro

Implemente a função dobro

## Exercicio 02

Chame a função
Para realizar uma ação específica em um controle remoto, como mudar de canal ou ajustar a temperatura, é necessário pressionar um botão específico. É o botão que irá chamar a função que você quer executar. Da mesma forma, na programação, depois de criar uma função, é preciso chamá-la ou invocá-la para que ela execute a ação desejada. Sem o código que chama a função, ela não será ativada. Vamos praticar?

Exemplo:

function triplica(num) {
  return num * 3;
}
triplica(4); // chamando a função triplica, que retorna o valor do triplo do parâmetro 4
triplica(7); // chamando a função triplica, que retorna o valor do triplo do parâmetro 7
👨🏻‍💻 Hora de praticar

Chame a função dobro duas vezes
Uma vez, com o número 5
E outra vez, com o número 23.
Testes

Chame a função dobro passando 5 como parâmetro.

Chame a função dobro passando 23 como parâmetro.

## Exercicio 03

Armazenar valor retornado por uma função
Às vezes, temos funções que exigem mais de um parâmetro de entrada. Como um celular, por exemplo, que exige uma senha de 4 dígitos para acesso por questão de segurança. Mas como programamos isso?

Vamos praticar o armazenamento do valor retornado pela função.

👨🏻‍💻 Hora de praticar

Crie uma variável chamada total. Armazene na variável total o resultado da soma de 10 e 20.

Importante: utilize a função soma() para realizar esta operação.

Exemplo:

let verificado = verificarSenha(num1, num2, num3, num4)

Chamando a função verificarSenha(), que retorna verdadeiro quando os dígitos da senha estão corretos, e armazena esse retorno numa variável chamada verificado.

Testes

Defina o total recebendo a função soma() com os parâmetros esperados.

Não faça hardcoding.

## Projeto Calculadora

Calculadora
Bem-vindo ao seu primeiro projeto de programação!

Neste projeto, você irá completar as quatro funções existentes na calculadora. Na coluna à direita da tela, você poderá conferir a calculadora em funcionamento. Lembre-se de que as operações só darão certo se você completar o código corretamente.

👨🏻‍💻 Hora de praticar

As quatro funções da calculadora já foram criadas: soma, subtrai, multiplica e divide.
Insira dentro de cada função o código para fazê-la retornar o cálculo correto.
Não basta escrever a operação +,-,/ ou *, é necessário usar a palavra-chave return
Conclua o código e experimente a calculadora que você acabou de configurar!

Testes

Implemente a função de soma

Implemente a função de subtração

Implemente a função de multiplicação

Implemente a função de divisão
