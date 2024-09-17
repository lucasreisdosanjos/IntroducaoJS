function calculeDesconto(precoOriginal,desconto){
    return precoFinal = precoOriginal - (precoOriginal * desconto / 100)
}
let precoOriginal = 100
let desconto = 15
PreçoComDesconto = calculeDesconto(precoOriginal,desconto)
console.log("O valor que eu deveria ter pago era de", PreçoComDesconto, "mas você me cobrou", precoOriginal)