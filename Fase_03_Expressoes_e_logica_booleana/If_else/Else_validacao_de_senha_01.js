function senhaEValida(senha) {
    // Remove espaços em branco no começo e no fim da senha
    const senhaTrimmed = senha.trim();

    // Verifica se o tamanho da senha após remoção dos espaços é pelo menos 10
    if (senhaTrimmed.length >= 10) {
        return true;  // senha válida
    } else {
        return false; // senha inválida
    }
}