//3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.

const produto = {
    id: 1,
    nome: 'Camiseta',
    preco: 25.99
}

//Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.
const stringProduto = JSON.stringify(produto)
console.log(stringProduto)