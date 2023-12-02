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

let totalAPagar = 0;
for (let produto of consumo) {
    totalAPagar += produto.precoUnitario * produto.quantidade;
}

console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${(totalAPagar / 100).toFixed(2)}.`)