const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '52648792354',
    turma: 'JavaScript'
}

estudante.nome //José Silva

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];

}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));