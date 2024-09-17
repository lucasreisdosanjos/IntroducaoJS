let carrodosSonhos = {
    marca: "Tesla",
    modelo: "Model 3",
    cor: "branco",
    combustivel: "elétrico",
    quilometragem: 0,
    preco: 300000,
    ligado: false,

    ligar: function(){
        this.ligado = true
        console.log("O carro está ligado.")
    }
}

console.log(carrodosSonhos)
carrodosSonhos.ligar()