function calculeDivisao(valorPizza,valorRefri,equipe){
    return (valorPizza + valorRefri) / equipe
}
let valorPizza = 79 * 2
let valorRefri = 9 * 2
equipe = 4
valorFinal = calculeDivisao(valorPizza, valorRefri,equipe)
console.log(valorFinal)
