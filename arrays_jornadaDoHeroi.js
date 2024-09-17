//Exercício
let inventario = ["Espada de Madeira", "escudo velho", "capa da invisibilidade", "mapa", "picareta"]
console.log("Seu inventario inicial:", inventario)

let novoItem = "Cavalo voador"
inventario.push(novoItem)
console.log("Você encontrou um baú!", "Novo item adicionado ao seu inventario", inventario)

console.log("Um golem apareceu! Prepare-se para a batalha.")

let itemUsado = inventario[2]
console.log("Você se esconde usando sua", itemUsado)

let itemUsado2 = inventario[0]
console.log("O golem te achou e inflingiu dano! Mas você contra-ataca com a", itemUsado2)

let itemUsado3 = inventario[3]
console.log("Como último golpe, para finalizar o golem você usa seu", itemUsado3)
