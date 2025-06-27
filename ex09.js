function paresParaObjeto(pares) {
    const obj = {};
    for (let i = 0; i < pares.length; i++) {
        const [chave, valor] = pares[i];
        obj[chave] = valor;
    }
    return obj;
}

function objetoParaPares(obj) {
    const pares = [];
    for (let chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

const pares = [['nome', 'João'], ['idade', 21], ['ativo', true]];
const obj = paresParaObjeto(pares);
console.log("Objeto gerado:", obj);

const paresConvertidos = objetoParaPares(obj);
console.log("Pares convertidos de volta:", paresConvertidos);
