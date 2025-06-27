const prompt = require('prompt-sync')();

function obterVendas() {
    const vendas = [];
    while (true) {
        const cliente = prompt("Nome do cliente (ou 'fim'): ");
        if (cliente.toLowerCase() === 'fim') break;

        const totalStr = prompt("Valor da venda: ");
        const total = parseFloat(totalStr);

        if (isNaN(total)) {
            console.log("Valor inválido.");
            continue;
        }

        vendas.push({ cliente, total });
    }
    return vendas;
}

function agruparPorCliente(vendas) {
    return vendas.reduce((resultado, venda) => {
        if (!resultado[venda.cliente]) {
            resultado[venda.cliente] = 0;
        }
        resultado[venda.cliente] += venda.total;
        return resultado;
    }, {});
}

const vendas = obterVendas();
const totaisPorCliente = agruparPorCliente(vendas);

console.log("Totais por cliente:");
console.log(totaisPorCliente);