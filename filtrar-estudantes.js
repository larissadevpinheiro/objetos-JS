const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

//O filter(), ao contrário do find(), retorna um array vazio ou com as ocorrências que ele encontra

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');

console.log(listaEnderecosIncompletos)