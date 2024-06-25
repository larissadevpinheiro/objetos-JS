const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '52648792354',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511999999998', '5511999999997'],
    enderecos: [{
        rua: 'Rua Joseh Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}


estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
})

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => 
endereco.complemento)

console.log(listaEnderecosComComplemento);