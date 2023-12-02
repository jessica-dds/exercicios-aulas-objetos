const pessoa = {
    nome: "Jéssica",
    idade: 35,
    cidade: "Salvador",
    Profissão: "Dev"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const { nome, idade, ...outros } = pessoa;

console.log(nome, idade);
console.log(outros);