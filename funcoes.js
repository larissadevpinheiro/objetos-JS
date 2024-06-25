const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '52648792354',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511999999998', '5511999999997'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7))
