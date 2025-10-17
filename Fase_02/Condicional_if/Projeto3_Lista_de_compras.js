function obtenhaMensagem(valor) {
  if (valor < 0) {
    return "Número inválido";
  } else if (valor === 0) {
    return "Você não tem nenhum item em sua lista de compras";
  } else if (valor === 1) {
    return "Você tem 1 item em sua lista de compras";
  } else if (valor > 1) {
    return "Você tem mais de 1 item em sua lista de compras";
  }
}