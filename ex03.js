const prompt = require('prompt-sync')();

let entrada = prompt("Digite uma frase:");
let palavras = entrada.split(" ");
let unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let jaExiste = false;

    for (let j = 0; j < unicas.length; j++) {
        if (unicas[j] === palavraAtual) {
            jaExiste = true;
            break;
        }
    }

    if (!jaExiste) {
        unicas.push(palavraAtual);
    }
}

console.log("Palavras únicas: " + unicas.join(", "));