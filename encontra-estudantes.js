const estudantes = require('./estudantes.json')
// console.log(estudantes)

// function buscaInformacao(lista, chave, valor) {
//     return lista.find((estudante) => estudante[chave] === valor)
// }

//Usando o includes, permite que percorra dentro do array(para buscar um telefone, por exemplo).Se usar a função acima, retornará undefined)
function buscaInformacao(lista, valor) {
    return lista.find((estudante) => estudante.includes(valor))
}
//find()quando queremos encontrar uma informação específica, ele devolve apenas a primeira ocorrência encontrada.

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado)

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '9466883489');
console.log(telefoneEstudante)