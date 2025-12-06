// Conversão de temperaturas C, F e K

function conversaoDeTemperatura(valor, escalaOrigem){
    if (escalaOrigem === "C"){
        const fahrenheit = (valor * 1.8) + 32;
        const kelvin = valor + 273.15;
        return {celsius: valor, fahrenheit, kelvin};
        
    } else if (escalaOrigem === "F"){
        const celsius = (valor - 32) / 1.8;
        const kelvin = celsius + 273.15;
        return {celsius, fahrenheit: valor, kelvin};
        
    } else if(escalaOrigem === "K"){
        const celsius = valor - 273.15;
        const fahrenheit = (celsius * 1.8) + 32;
        return {celsius, fahrenheit, kelvin: valor};
        
    } else {
        return "Escala inválida";
    }
}

console.log(conversaoDeTemperatura(0, "C"));