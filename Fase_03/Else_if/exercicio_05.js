function obterLetraDaNota(nota) {
  if (nota >= 15) {
        return "A"
    } else if (nota >= 10) { // aqui já sabemos que nota < 15, pois passou pelo else, então só checamos >= 10
        return "B"
    } else { // aqui significa que nota < 10
        return "F"
    }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18))
console.log(obterLetraDaNota(15))
console.log(obterLetraDaNota(13))
console.log(obterLetraDaNota(4))