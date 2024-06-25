const estudante = require('./estudante.json');
console.log(estudante.nome); //Ana

//Para converter um arquivo JSON em string 
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

console.log(stringEstudante.nome); //Undefined

//Para fazer o inverso, converter string para JSON
const objEstudante = JSON.parse(stringEstudante)
console.log(objEstudante);
console.log(typeof objEstudante);

console.log(objEstudante.nome); //Ana