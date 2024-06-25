//Um objeto é composto por propriedades que são: conjuntos de chave e valor
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '52648792354',
    turma: 'JavaScript'
}

console.log(estudante.idade)
console.log(`O nome do estudadante é ${estudante.nome}`)
console.log(`O três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`)