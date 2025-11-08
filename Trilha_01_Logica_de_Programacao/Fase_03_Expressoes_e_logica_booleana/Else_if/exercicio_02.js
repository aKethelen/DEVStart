function obterLetraDaNota(nota) {
    if (nota < 10) {
        return "F";
    } else if (nota < 15) {
        return "B";
    } else {
        return "A";
    }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18))
console.log(obterLetraDaNota(15))
console.log(obterLetraDaNota(13))
console.log(obterLetraDaNota(4))