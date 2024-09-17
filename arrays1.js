//Selecionar apenas um valor de uma variável 
const listaCompras = ["Abacate", "Tomate", "Banana"]
const segundoItem =  listaCompras[2]
console.log(segundoItem)

let raçasdeDog = ["buldogg", "Pinsher", "salsisha", "Vira lata", "Pitbbul"]
let raça = raçasdeDog[0]
console.log(raça)

//Contar quantos valores tem dentro da minha variável
const pokedog = ["buldogg", "Pinsher", "salsisha", "Vira lata", "Pitbbul"]
console.log(pokedog.length)

//Dizer se algum valor, está ou não dentro da minha variável
let seriesBoas = ["The Walking Dead", "The Umbrela"]
console.log(seriesBoas.includes("The Walking Dead"))
console.log(seriesBoas.includes("cobra kai"))

//Adicionar valores a minha variável
const numeros = [1,2,3]
numeros.push(4)
numeros.push(5,6,7)
console.log(numeros)

//Adiconar e selecionar os valores da minha variável
const guardaRoupa = ["calça", "camisa", "meia"]
console.log(guardaRoupa)
let lookSelecionado = []
lookSelecionado.push(guardaRoupa[0])
lookSelecionado.push(guardaRoupa[2])
console.log(lookSelecionado)

//Remove apenas o último valor da variável
let meuPeixes = ["palhaço", "Mandarim", "Esturjão"]
console.log(meuPeixes)
meuPeixes.pop()
console.log(meuPeixes)

//O método splice(i,n), remove uma quantidade de valores(n), apartir de uma posição(i)
const letras = ["a","b","c","d","e","f"]
console.log(letras)
letras.splice(0,2)
console.log(letras)

//Determinar a quantidade de valores;adicionar o número 7;remover 4 e 5;determine a quantidade final
let numeros2 = [1,2,3,4,5,6]
console.log(numeros2.length)
numeros2.push(7)
numeros2.splice(3,2)
console.log(numeros2)
console.log(numeros2.length)