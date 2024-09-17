const cachorro = {
    nome: "caramelo",
    idade: 8,
    raça: "vira-lata",
    cor: "marrom",
    latir: function(){
        console.log("au,au,au")
    },
    comer: function(comida){
        console.log(`${this.nome} está comendo ${comida}`)
    },
    unificando: function(){
        console.log(`Esse é o ${this.nome}, um ${this.raça} de ${this.idade} anos de cor ${this.cor}`)
    }
}
console.log(cachorro)
cachorro.latir()
cachorro.comer("ração")
cachorro.unificando()

