function estaCongelando(temperatura) {
  // retorna true se temperatura menor que zero, senão retorna false
  return temperatura < 0;
}

// Testes
console.log(estaCongelando(-5)) // true, porque -5 < 0
console.log(estaCongelando(10)) // false, porque 10 não é menor que 0