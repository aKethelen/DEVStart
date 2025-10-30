function senhaEValida(senha) {
    // Verifica se o comprimento da senha é maior ou igual a 10
    if (senha.length >= 10) {
        return true;  // senha válida
    } else {
        return false; // senha inválida
    }
}