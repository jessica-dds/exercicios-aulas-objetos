const pessoa = {
    nome: "Jéssica",
    idade: 35,
    altura: 1.62,
    temCnh: false,
    apelidos: ["Jel", "Jessi", "J."]
};

// ternário
const textoCnh = pessoa.temCnh ? "possui CNH" : "não possui CNH";


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCnh} e tem os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}