//4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

// a) Leia o conteúdo do arquivo animais.json.
const animais = require('./animais.json');
console.log(typeof animais)

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
// const objAnimais = JSON.parse(animais)
// console.log(objAnimais)


// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
const objetoAnimais = {
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
};

const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};

objetoAnimais.animais.push(novoAnimal);
console.log(objetoAnimais);

// d) Modifique o habitat de um animal existente no array de animais.
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2)
if (animalParaModificar) {
    animalParaModificar.habitat = 'Oceano Antártico';
}
console.log(objetoAnimais);

// e) Remova um animal do array de animais.
const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1)
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}
console.log(objetoAnimais);

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// g) Imprima no console o objeto JavaScript resultante das operações.
console.log('Objeto JavaScript Resultante das Operações:')
console.log(objetoAnimais);