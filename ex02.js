const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite = null;

while (palpite !== numeroSecreto) {
    let entrada = prompt("Adivinhe o número entre 1 e 100:");
    
    palpite = Number(entrada);
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }

    if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    }
}