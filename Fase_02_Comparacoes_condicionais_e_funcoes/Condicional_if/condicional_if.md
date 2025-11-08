# Objetivo da fase: Condicional if-

## O principal objetivo dessa fase é introduzir e fixar o uso da estrutura condicional if, que é o fundamento da tomada de decisão em qualquer programa de computador

Por que aprender condicional if?
Para que seu programa execute um bloco de código somente quando uma condição específica for verdadeira.
Isso permite que o programa mude seu comportamento dependendo da entrada, contexto ou estado, tornando-o dinâmico e útil para situações do mundo real.
Ajuda a controlar o fluxo da aplicação, permitindo implementar regras, restrições e decisões.
No desafio em questão, você aprende:
Como comparar valores usando operadores como < (menor que), >= (maior ou igual a), etc.
Como verificar se uma condição é verdadeira para executar um código específico — neste caso, exibir uma mensagem apenas para pessoas com 18 anos ou mais.
A importância de escrever corretamente a condição para que a lógica gere o comportamento esperado.
Que a função pode executar comandos, como exibir algo no console, dependendo do resultado da condição.
Resumo simples do objetivo:
Aprender a usar a estrutura if para tomar decisões dentro do código, executando algo apenas quando uma condição lógica for satisfeita.

## Exercicio 01

A partir de agora, você vai se deparar com conceitos que talvez ainda não foram esclarecidos. No entanto, pedimos para que tenha foco em resolver apenas aquilo que está sendo proposto a você! E no momento oportuno, terá conhecimento de sobra sobre funções, retornos...

Corrija a comparação realizada dentro da condição if que se encontra dentro da função mostreMesagemVoto. Ela deve apresentar a mensagem de votação quando o usuário tiver permissão para votar (ou seja, quando tiver 18 anos ou mais).

Feito isso, você deveria visualizar o resultado dessa função com base em como ela está sendo chamada. Quando a função mostreMesagemVoto recebe 10, qual mensagem aparece? Quando a função mostreMesagemVoto recebe 20, qual mensagem aparece?

Veja que, no primeiro exemplo, você deve ver undefined no console, porque a condição resultará em false. No segundo exemplo, você deve ver "Você tem permissão para votar" no console, porque a condição resultará em true.

Tome seu tempo e certifique-se de que você entendeu o que está acontecendo neste desafio!

Faça a correção na condição if.

## Exercicio 02

Que tal, agora, você montar a sua condição if para uma votação? Levaremos em consideração que, aos 16 anos, o cidadão brasileiro já tem direito a votar.

Desta vez, você deverá completar o método podeVotar() de forma que ele retorne true quando a idade for 16 anos ou mais. Preste atenção na sintaxe e tente escrever você mesmo, sem usar suas anotações dessa vez ;

Crie a condição if dentro do método podeVotar()
testes:
Complete a função podeVotar() com uma condição if.

Se chamar o método podeVotar() com o parâmetro 10, ele retornará undefined como resposta.

Se chamar o método podeVotar() com o parâmetro 20, ele retornará true como resposta.

Se chamar o método podeVotar() com o parâmetro 55, ele retornará true como resposta.

*Obs: Tem que fazer só a parte do True.

## Explicação

Quando o if não é atendido e o código não tem return, o JavaScript devolve automaticamente undefined.
Isso é importante para o exercício, pois ele espera exatamente esse comportamento.

## Exercicio 03

É positivo?
Complete a função ePositivo com uma condição if que retorne true quando o número for positivo. Note que o número 0 também pode ser considerado positivo.

Implemente a função ePositivo().

Testes

A condição if deve ser implementada corretamente.

Se chamar o método ePositivo(0), ele retornará true como resposta.

Se chamar o método ePositivo(-980), ele retornará undefined como resposta.

Se chamar o método ePositivo(), com o parâmetro 1 ou qualquer número maior do que este, ele retornará true como resposta.

## Explicação 3

Explicação:
O operador >= compara se o número é maior ou igual a zero.
Se a condição não for atendida, a função não retorna nada — e por padrão, o JavaScript retorna undefined.

## Projeto3_Lista_de_compras

Este projeto representa um futuro pedaço de um aplicativo de compras. Imagine que, ao clicar sobre botões + e -, aumenta e diminui respectivamente o número de itens que o usuário deseja comprar.

Altere a função obtenhaMensagem de modo que ela retorne uma string diferente para cada situação abaixo:

Se o parâmetro valor for menor que 0 (por exemplo, -1, -2 etc.), retorne a mensagem: "Número inválido"
Se o parâmetro valor for 0, retorne a mensagem: "Você não tem nenhum item em sua lista de compras"
Se o parâmetro valor for 1, retorne a mensagem: "Você tem 1 item em sua lista de compras"
Se o parâmetro valor for maior que 1, retorne a mensagem: "Você tem mais de 1 item em sua lista de compras"
Para mostrar a mensagem na tela, você deve inserir uma string no retorno da função obtenhaMensagem().

Demos a você um exemplo de retorno que você deve remover assim que começar a resolver este projeto.

Dica: cuidado ao fazer comparações no seu código. Use três sinais de igual (===) para isso, em vez de um igual simples (=). Exemplo:

// Este código está ERRADO, porque o = simples não serve para fazer comparação
if (valor = 0) {
    return "Você não tem nenhum item em sua lista de compras"
}

// Este código está CORRETO, porque está usando === para fazer comparação
if (valor === 0) {
    return "Você não tem nenhum item em sua lista de compras"
}
Testes

Mostrar "Número inválido" para números negativos.

Mostrar a mensagem correta quando 0 é selecionado.

Mostrar a mensagem correta quando 1 é selecionado.

Mostra a mensagem correta quando há mais de 1 item selecionado.

## Explicação Projeto

Aqui usamos vários else if porque cada faixa de valores (negativos, zero, um e maior que um) exige uma resposta específica.
O uso de === garante que estamos comparando valores idênticos e do mesmo tipo (sem conversões automáticas)

🧩 O que esses exercícios ensinam

Como usar estruturas condicionais (if, else if, else).

Diferença entre =, == e ===.

Comportamento padrão de funções sem return → retornam undefined.

Boa prática de escrever código limpo e direto.

💡 Dica final

Sempre lê o enunciado com atenção: às vezes o exercício espera que não haja retorno (ou seja, undefined).
Evita usar else desnecessários — quanto mais simples e direto o código, melhor pra entender e manter
