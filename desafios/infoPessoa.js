//1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

const pessoa = {
    nome: 'Larissa',
    idade: 37,
    solteiro: false,
    hobbies: ['Tocar órgão', 'Jogar vôlei', 'Estudar inglês']
}


// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// function mostrarInfoPessoa(pessoa) {
//     console.log("Informações da Pessoa:");
//     console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
//     console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
//     console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
//     console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
//     console.log(`Endereço: ${pessoa.endereco} (Tipo: ${typeof pessoa.endereco})`);
// }

// Chamada da função mostrarInfoPessoa
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

// mostrarInfoPessoa(pessoa);



// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

pessoa.endereco = {
    rua: 'Rua Salvador Dali',
    cidade: 'São Paulo',
    estado: 'São Paulo'
}



// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    console.log('Endereço:');
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Cidade: ${pessoa.endereco.cidade}`);
    console.log(`Estado: ${pessoa.endereco.estado}`);
    
}
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
mostrarInfoPessoa(pessoa);


// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

const listaPessoas = [{
    nome: 'Larissa',
    idade: 37,
    cidade: 'São Paulo'
},
{
    nome: 'Antonio',
    idade: 43,
    cidade: 'São Paulo' 
},
{
    nome: 'Eduarda',
    idade: 14,
    cidade: 'São Paulo'
},
{
    nome: 'Isabella',
    idade: 9,
    cidade: 'São Paulo'
}
]

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
function mostrarListaPessoas(pessoas) {
    console.log('Lista de Pessoas:');
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    })
}


// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
listaPessoas.push({nome: 'Ana', idade: 38, cidade: 'Santana do Parnaíba'});

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
mostrarListaPessoas(listaPessoas); 

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

// console.log(filtrarPorCidade(listaPessoas));
filtrarPorCidade(listaPessoas);

// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
const pessoasSaoPaulo = filtrarPorCidade(listaPessoas, 'São Paulo');
console.log('Pessoas em São Paulo:');
console.log(pessoasSaoPaulo);


// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.

const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a,b) {
        return a - b;
    },
    multiplicacao: function(a,b) {
        return a * b;
    },
    divisão: function(a, b) {
        if( b !== 0) {
            return a / b;
        } else {
            return 'Divisão por zero não é permitido';
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};


// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
console.log('Soma:' + calculadora.soma(5, 3));
console.log('Subtração:' + calculadora.subtracao(7, 3));
console.log('Multiplicação:' + calculadora.multiplicacao(6, 2));
console.log('Divisão:' + calculadora.divisão(12, 2));
console.log('Divisão por zero:' + calculadora.divisão(8, 0));

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
const numerosParaMedia = [10,8,6,9,7];

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
console.log('Média:' +  calculadora.calcularMedia(numerosParaMedia))

// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
const contaBancaria = {
    titular: 'Larissa',
    saldo: 5600,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
       if (valor <= this.saldo) {
        this.saldo -= valor;
       } else {
        console.log('Saldo insuficiente para saque')
       }
    }
}


// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
const cliente = {
    nome: 'Carlos',
    conta: contaBancaria
}

function mostrarSaldo(cliente) {
    console.log(`Nome do Cliente: ${cliente.nome}`)
    console.log(`Saldo da conta: R$${contaBancaria.saldo}`)
}

mostrarSaldo(cliente)


// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
cliente.conta.depositar(500);
cliente.conta.sacar(200);

mostrarSaldo(cliente)





