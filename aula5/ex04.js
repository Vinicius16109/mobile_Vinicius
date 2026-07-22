const produtos = [
  { nome: "Arroz", preco: 14 },
  { nome: "Farinha", preco: 10 },
  { nome: "Óleo", preco: 8},
  { nome: "Mel", preco: 7.50 }
];

for (const item of produtos) {
  console.log(Produto: ${item.nome} - Preço: R$ ${item.preco});
}
