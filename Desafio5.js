//Equação do segundo grau

function eq2grau(a, b, c){
    const delta = b ** 2 - 4 * a *c;
    if(delta < 0){
        return "Não existem raízes reais";
    } else if(delta === 0){
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}

console.log(eq2grau(1, -5, 6))