// Calculo geral area e perimetro do circulo

function infoCirculo(r = 8){
    const area = Math.PI * r ** 2;
    const perimetro= 2 * Math.PI * r;
    return {area: area.toFixed(2), perimetro: perimetro.toFixed(2)};
}

console.log(infoCirculo());