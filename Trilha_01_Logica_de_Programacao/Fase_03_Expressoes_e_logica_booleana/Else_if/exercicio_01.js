function obterLetraDaNota(nota) {
    if (nota >= 15) {
        return "A";
    } else if (nota >= 10) {
        return "B";
    } else {
        return "F";
    }
}

// Testes
console.log(obterLetraDaNota(18))  // Saída: A
console.log(obterLetraDaNota(15))  // Saída: A
console.log(obterLetraDaNota(13))  // Saída: B
console.log(obterLetraDaNota(4))   // Saída: F