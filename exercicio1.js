const pessoa = {
    nome: "Jéssica",
    idade: 35,
    altura: 1.62,
    temCnh: false,
    apelidos: ["Jel", "Jessi"]
};
let textoCnh = "";

if (pessoa.temCnh) {
    textoCnh = "possui CNH";
} else {
    textoCnh = "não possui CNH";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCnh} e tem os seguintes apelidos:
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`);