// 5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

// id (number): identificador da pessoa.
// nome (string): nome da pessoa.
// idade (number): idade da pessoa

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.
const pessoaModificada = copiarObjetoJson(pessoaOriginal)
pessoaModificada.idade = 31;


// Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.
console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)