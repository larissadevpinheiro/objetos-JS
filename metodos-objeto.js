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

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um enderço cadastrado')
}

//Object.keys --> retorna uma array com as chaves do objeto
//Object.values --> retorna uma array com os valores do objeto
//Object.entries --> retorna uma array com ambos (chave e valor)