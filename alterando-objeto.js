const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '52648792354',
    turma: 'JavaScript'
}

estudante.telefone = '5511999999999'
console.log(estudante.telefone)
console.log(estudante)

estudante.nome = 'José Souza';
console.log(estudante)

const estudante2 = {}

estudante2.nome = 'Ana Maria'
console.log(estudante2)






//Vamos considerar o objeto abaixo:
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
console.log(objPersonagem)
   

//Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
delete objPersonagem.aliado 
console.log(objPersonagem.aliado) //undefined

//Também é possível utilizar a notação de colchetes:
delete objPersonagem.aliado
delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

//Importante! Note que o delete remove do objeto o valor da propriedade, assim como a chave.

//Após remover as duas propriedades acima, o objeto agora está desta forma:

console.log(objPersonagem)

//O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. 
//Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true
