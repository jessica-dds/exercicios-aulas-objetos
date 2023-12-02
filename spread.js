const pessoa = {
    nome: "Jéssica",
    idade: 35,
    cidade: "Salvador",
    Profissao: "Dev"
};

const endereco = {
    rua: "Rua da Felicidade",
    numero: "32",
    bairro: "Bairro feliz"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    apartamento: 104
};

console.log(objetoFundido);