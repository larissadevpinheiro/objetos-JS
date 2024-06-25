// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// const carro = {
//     marca: 'Peugeot',
//     modelo: '206',
//     ano: 2008,
//     cor: 'Preto',
//     ligado: true,
//     ligar: function () {
//         if (!this.ligado) {
//           this.ligado = true;
//           console.log('O carro está ligado.');
//         } else {
//           console.log('O carro já está ligado.');
//         }
//       },

//     desligar: function () {
//         if (this.ligado) {
//             this.ligado = false;
//             console.log('O carro está desligado.');
//         } else {
//             console.log('O carro já está desligado.');
//           }
//     },

//     obterDetalhes: function () {
//         const estado = this.ligado ? 'ligado' : 'desligado';
//         return `Detalhes do carro: \nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;

//     }
// }

// console.log(carro)



// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// carro.ligar(); // Tentar ligar o carro quando já está ligado
// carro.desligar(); // Desligar o carro
// carro.desligar(); // Tentar desligar o carro quando já está desligado
// carro.ligar(); // Ligar o carro

// // Chame o método obterDetalhes e imprima no console a string retornada.
// console.log(carro.obterDetalhes());



// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo.
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  cor: 'Prata',
  ligado: false,
  placa: "ABC1234"
};


//Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
Object.defineProperty(carro, 'placa', {enumerable: false});

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa);


// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
const carroNovo = {
marca: 'Hyundai',
modelo: 'Creta',
ano: 2024,
cor: 'Branco'
}

// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
const carroComNovosDetalhes = {...carro, ...carroNovo};

// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
console.log('\nCarro com Nosos Detalhes')
console.log(carroComNovosDetalhes)

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
carroComNovosDetalhes.modelo = "Accord";
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);


