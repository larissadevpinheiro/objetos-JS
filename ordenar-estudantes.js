const estudantes = require('./estudantes.json');


//O sorte() é um método do JS tem basicamente 2 formas de se utilizar, a forma mais simples onde não são feitas consdicionais dentro do callback,
//pode ser usadas em alguns casos, mas a gente não consegue utilizar ela para entrar dentro da propriedade de um objeto e fazer a ordenação por essa
//propriedade, e também não vai funcionar para valores numériocos, só para strings

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}


const listaOrdenada = ordena(estudantes, 'nome');
console.log('Lista ordenada')
console.log(listaOrdenada)


//Porém, agora queremos reordenar as listas na ordem inversa. Como podemos realizar essa tarefa?
//R: Após a ordenação da lista, podemos ajustar a implementação para inverter a ordem diretamente no método sort, considerando uma função que recebe um parâmetro indicando se a ordenação é crescente ou decrescente:

function ordenar(lista, propriedade, decrescente = false) {
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof valorA === 'string') {
            valorA = valorA.toUpperCase();
        }
        if (typeof valorB === 'string') {
            valorB = valorB.toUpperCase();
        }

        if (valorA < valorB) {
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB) {
            return decrescente ? -1 : 1;
        }
        return 0;
    });
}

// Exemplo de uso para ordenar de forma decrescente pelo nome
const ordenadoNomeDecrescente = ordenar(clientes, "nome", true);