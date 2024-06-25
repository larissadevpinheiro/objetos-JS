//1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
const livro = {
    titulo: 'A Cabana',
    autor: 'William P. Young',
    AnoPublicacao: 2007,
    genero: 'religioso'
}


//No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
console.log(`Detahes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.AnoPublicacao}
    Gênero: ${livro.genero}`)

//2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
//Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'A Cabana',
//     autor: 'William P. Young',
//     AnoPublicacao: 2007,
//     genero: 'religioso'
// }

//Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. 
//Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
//livro.idadePublicacao = anoAtual - livro.AnoPublicacao


//Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// livro.mostraDetalhes = `Publicado nos Estados Unidos há ${livro.idadePublicacao} anos`
// console.log(livro.mostraDetalhes)

//3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

// const livro = {
//     titulo: 'A Cabana',
//     autor: 'William P. Young',
//     AnoPublicacao: 2007,
//     genero: 'religioso',
// }

// livro.idadePublicacao = anoAtual - livro.AnoPublicacao

// console.log(livro['autor'])


//4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
//Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
// const livro = {
//     titulo: 'A Cabana',
//     autor: 'William P. Young',
//     AnoPublicacao: 2007,
//     genero: 'religioso',
//     idadePublicacao: '17 anos'
// }

// livro.avaliacao = null

// console.log(livro)


//No final do arquivo livro.js, adicione uma avaliação ao objeto.
//Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
//Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.


//5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
// Depois altere o gênero do livro para "Aventura".

// const livro = {
//     titulo: 'A Cabana',
//     autor: 'William P. Young',
//     AnoPublicacao: 2007,
//     genero: 'religioso',
//     idadePublicacao: '17 anos'
// }

// livro.genero = 'Aventura'

// console.log(livro)

//6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
//Em seguida, exclua a propriedade genero do livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, 
//sem a avaliação, são exibidas corretamente.

// const livro = {
//     titulo: 'A Cabana',
//     autor: 'William P. Young',
//     AnoPublicacao: 2007,
//     genero: 'religioso',
//     idadePublicacao: '17 anos'
// }

//  delete livro.genero 

// console.log(livro)

