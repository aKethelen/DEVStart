  function eCodigoPromocionalValido(codigo) {
    // Pega o tamanho do código
    const tamanho = codigo.length;

    // Verifica se o tamanho está entre 5 e 10
    // Retorna true se sim, false se não
    return tamanho >= 5 && tamanho <= 10;
}