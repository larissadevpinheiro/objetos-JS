const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '52648792354',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511999999998', '5511999999997'],
    enderecos: [{
        rua: 'Rua Joseh Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

function exibirTelefones(tel1, tel2) {
    console.log(`Ligar para ${tel1}`)
    console.log(`Ligar para ${tel2}`)
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1])
exibirTelefones(...estudante.telefones)
//Spread operator = operador de espalhamento (também conhecido como sintaxe de espalhamento ou operador de espalhamento)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}
console.log(dadosEnvio)


// '1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
// O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6

const pessoa = {
    nome: 'Larissa',
    notas: [7,8,9,10],
    
    calcularMediaNotas: function() {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2); //Arredondando para duas casas decimais
    },
    
    classificarDesempenho: function() {
        const media = this.calcularMediaNotas();
        
        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }
}

// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}`)

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.'
const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}`)


// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
const carro = {
    marca: 'Peugeot',
    modelo: '206',
    ano: 2008,
    cor: 'Preto'
}

console.log("Propriedades iniciais do carro:");
for (propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
}

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
carro.qtdPortas = 4;
carro.kmRodados = 10000;

console.log(carro)

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
console.log("Propriedades iniciais do carro:");
for (propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
}


// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.