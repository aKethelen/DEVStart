function dobro(x) {
  return x * 2; // Retorna o dobro do valor recebido
}

function triplo(x) {
  return x * 3; // Retorna o triplo do valor recebido
}

function executar(operacao, valor) {
  if (operacao === "dobro") {
    return dobro(valor); // Chama a função dobro passando o valor
  }
  
  if (operacao === "triplo") {
    return triplo(valor); // Chama a função triplo passando o valor
  }
}

// Exemplos de uso
console.log(executar("dobro", 4)); // Deve retornar 8
console.log(executar("triplo", 5)); // Deve retornar 15