// Calculo Teorema de Pitagoras

function calcularHipotenusa(cate_a, cate_b){
    const hipotenusa = Math.sqrt(cate_a**2 + cate_b**2);
    return hipotenusa;
}

console.log(calcularHipotenusa(3,4))