const prompt = require('prompt-sync')();

function obterProdutos() {
    const produtos = [];
    while (true) {
        const nome = prompt("Nome do produto (ou 'fim'): ");
        if (nome.toLowerCase() === 'fim') break;

        const precoStr = prompt("Preço do produto: ");
        const preco = parseFloat(precoStr);

        if (isNaN(preco)) {
            console.log("Preço inválido.");
            continue;
        }

        produtos.push({ nome, preco });
    }
    return produtos;
}

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

const lista = obterProdutos();
const nomesOrdenados = nomesOrdenadosPorPreco(lista);

console.log("Nomes ordenados por preço crescente:");
console.log(nomesOrdenados.join(", "));
