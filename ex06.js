const prompt = require('prompt-sync')();

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const chave = JSON.stringify(args);
        if (chave in cache) {
            console.log("(Cache)");
            return cache[chave];
        }
        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

function fatorial(n) {
    if (n < 0) throw new Error("Valor inválido.");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

const fatorialMemoizado = memoize(fatorial);

while (true) {
    const entrada = prompt("Digite um número para calcular o fatorial (ou 'sair'): ");
    if (entrada === 'sair') break;

    const numero = parseInt(entrada);
    if (isNaN(numero)) {
        console.log("Entrada inválida.");
        continue;
    }

    try {
        const resultado = fatorialMemoizado(numero);
        console.log(`Fatorial de ${numero} é: ${resultado}`);
    } catch (e) {
        console.log("Erro:", e.message);
    }
}