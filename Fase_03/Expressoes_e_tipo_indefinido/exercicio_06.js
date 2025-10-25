function dobro(x) {
    return x * 2;
}

function triplo(x) {
    return x * 3;
}

function executar(operacao, x) {
    if (operacao === "dobro") {
        return dobro(x);      // chama a função dobro e retorna o resultado
    }
    
    if (operacao === "triplo") {
        return triplo(x);     // chama a função triplo e retorna o resultado
    }
}

// Testes
console.log(executar("dobro", 5));  // retorna 10
console.log(executar("triplo", 30)); // retorna 90s