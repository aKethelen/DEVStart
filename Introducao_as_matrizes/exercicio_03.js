// Criar o array com as temperaturas de cada dia
const temperaturas = [3, 0, -4, 2, 9, 12, 10];

// Exibir o array completo
console.log("Temperaturas nos 7 dias:", temperaturas);

// Se quiser, pode exibir temperatura por dia em um loop
temperaturas.forEach((temp, index) => {
  console.log(`Dia ${index + 1}: ${temp}°C`);
});