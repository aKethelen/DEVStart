function obterLetraDaNota(nota) {
    if (nota >= 15) {
        // Se a nota for 15 ou mais, retorna "A"
        return "A";
    } else if (nota >= 10) {
        // Se a nota não foi >= 15, mas é >= 10, retorna "B"
        // Isso cobre notas entre 10 e 14
        return "B";
    } else {
        // Para qualquer valor menor que 10, retorna "F"
        return "F";
    }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18))
console.log(obterLetraDaNota(15))
console.log(obterLetraDaNota(13))
console.log(obterLetraDaNota(4))