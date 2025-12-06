// Calculo de IMC 

function calcularIMC(peso,altura){
    const imc = peso / (altura ** 2)

    if(imc < 18.5){
        return "Abaixo do peso"
    } else if(imc >= 18.5 && imc < 25){
        return "Peso normal"}
    else if(imc >= 25 && imc < 29.9){
        return "Sobrepeso"
    } else if(imc >= 30){
        return"Obesidade"
    }
}

console.log(calcularIMC(80, 1.65))