const prompt = require('prompt-sync')();

function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não está definido para números negativos.");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

const entrada = prompt("Digite um número inteiro para calcular o fatorial: ");
const numero = parseInt(entrada);

if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
} else {
    try {
        const resultado = fatorial(numero);
        console.log(`Fatorial de ${numero} é: ${resultado}`);
    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}