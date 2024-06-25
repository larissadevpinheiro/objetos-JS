//Como o JSON não é um objeto JavaScript, para a gente utilizar ele como objeto, precisamos converter usando a função require() por exemplo, ou usando o import:
//import estudante from './estudante.json' (Por mais que essa a forma mais utilizada, não vamos usar aqui pq precisa de algumas configurações a mais para funcionar enquanto o require é nativo do Node.js)

const estudante = require('./estudante.json');
// console.log(estudante)
// console.log(typeof estudante)

const chaves = Object.keys(estudante);
console.log(chaves)





// Java
// Script
// Object
// Notation
