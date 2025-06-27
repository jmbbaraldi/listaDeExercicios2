const prompt = require('prompt-sync')();

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function minhaFuncao(texto) {
    console.log("Executando:", texto);
}

const funcaoDebounce = debounce(minhaFuncao, 2000);

while (true) {
    const entrada = prompt("Digite algo (ou 'sair' para encerrar): ");
    if (entrada === 'sair') break;
    funcaoDebounce(entrada);
}