function obterMesagemVotacao(idade) {
    if (idade >= 16) {
        // Se idade >= 16, a função termina aqui e retorna essa mensagem
        return "Você está autorizado a votar";
    }
    // Se chegou aqui, significa que a idade é menor que 16
    return "Você não está autorizado a votar";
}

// Testes
console.log(obterMesagemVotacao(20)); // Saída: Você está autorizado a votar
console.log(obterMesagemVotacao(10)); // Saída: Você não está autorizado a votar
// Não modifique as linhas abaixo
console.log(obterMesagemVotacao(20))
console.log(obterMesagemVotacao(10))