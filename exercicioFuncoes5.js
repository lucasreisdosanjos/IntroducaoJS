function dividirPorDois(numeros){
    let primeiro = numeros[0]/2
    let ultimo = numeros[numeros.length-1]/2
    return[primeiro, ultimo]
}
let arrayNumeros = [12, 24, 36, 48, 50]
let resultado = dividirPorDois(arrayNumeros)
console.log("Novo array", resultado)