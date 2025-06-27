function ehDataValida(dia, mes, ano) {
    if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number') {
        return false;
    }

    if (mes < 1 || mes > 12) {
        return false;
    }

    if (ano < 1) {
        return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasPorMes[1] = 29;
    }

    return dia >= 1 && dia <= diasPorMes[mes - 1];
}

console.log(ehDataValida(15, 8, 2025));