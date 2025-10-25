function dobro(x) {
  return x * 2;
}

function executar(operacao, valor) { // adicionamos o segundo parâmetro "valor"
  if (operacao === "dobro") {
    return dobro(valor); // passamos "valor" para a função dobro
  }
}

// Exemplos de uso - não modificar
console.log(executar("dobro", 4)); // deve retornar 8
console.log(executar("dobro", 5)); // deve retornar 10