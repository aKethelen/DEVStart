function dobro(x) {
    return x * 2
}

function triplo(x) {
    return x * 3
}

function executar(operacao, x) {
    console.log(operacao)
    console.log(x)
    // Escreva seu código abaixo
    function executar(operacao, x) {
    console.log(operacao);
    console.log(x);

    if (operacao === "dobro") {
        return dobro(x);
    } else if (operacao === "triplo") {
        return triplo(x);
    }
}
    
}