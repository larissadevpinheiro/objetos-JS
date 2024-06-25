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
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

for(let chave in estudante) {
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function') {
        const texto = `A chave ${chave} tem o valor: ${estudante[chave]}`
        console.log(texto)
    } 
}



//método for...in para objetos
//método for...of para arrays