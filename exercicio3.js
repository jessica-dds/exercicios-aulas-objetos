const consumo = [
    {
        nome: "Hamburguer",
        precoUnitario: 2500,
        quantidade: 1
    },
    {
        nome: "Suco de laranja",
        precoUnitario: 1000,
        quantidade: 2
    },
    {
        nome: "sorvete",
        precoUnitario: 1500,
        quantidade: 1
    }
]


const cartao = {
    nome: "Arnaldo",
    idade: 40,
    consumo
};


console.log(cartao.nome); // Arnaldo
console.log(cartao.idade); 40
console.log(cartao.consumo[0].nome); // hamburguer 


