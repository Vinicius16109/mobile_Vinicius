let produtos = [
  {id: 1, nome: "Oi", preco: 10},
  {id: 2, nome: "tudo", preco: 15},
  {id: 3, nome: "bem", preco: 20},
  {id: 4, nome: "claro", preco: 30},
  {id: 5, nome: "ai", preco: 26},
]

console.log(produtos.find(e => {return e.id == "3"}));
console.log(produtos.find(e => {return e.preco >= 100}));
console.log(produtos.map(e => {return e.nome}));
produtos.forEach(e => {console.log(`Produtos: ${e.nome} Preço: ${e.preco}`)});
