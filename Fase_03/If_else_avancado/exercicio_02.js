function podeVotar(idade) {
    if (idade >= 16) {
        return true;
    }
    return false;
}

// Não modifique as linhas abaixo
console.log(podeVotar(25))
console.log(podeVotar(13))