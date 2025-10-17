function pegueNome(nome) {
  let limpo = nome
  limpo = limpo.toUpperCase();
  limpo = limpo.trim();
  return limpo;
}

// Exemplo de uso - não modifique
console.log(pegueNome(" bruno"))
console.log(pegueNome(" alex  "))

// Facilitando meu codigo 
function pegueNome(nomeOriginal) {
  // 1. Armazena o nome original recebido
  let nomeSemEspacos = nomeOriginal.trim(); // Remove espaços no começo e no fim

  // 2. Converte todo o nome para maiúsculas
  let nomeFinal = nomeSemEspacos.toUpperCase();

  // 3. Retorna o nome já limpo e em maiúsculas
  return nomeFinal;
}

// Exemplo de uso - não modifique
console.log(pegueNome(" bruno"));
console.log(pegueNome(" alex  "));