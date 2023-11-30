const pessoa = {
    nome: "Jéssica",
    idade: 35,
    altura: 1.62,
    temCnh: false,
    apelidos: ["Jel", "Jessi", "J."]
};
let textoCnh = "";

if (pessoa.temCnh) {
    textoCnh = "possui CNH";
} else {
    textoCnh = "não possui CNH";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCnh} e tem os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}