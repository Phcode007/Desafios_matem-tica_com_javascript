// Juros Compostos

function calculoJurosCOmpostos(capitalInicial, taxaDeJuros, tempo){
    const M = capitalInicial *(1 + taxaDeJuros) ** tempo
    return M
}

console.log(calculoJurosCOmpostos(1000, 0.10, 12))