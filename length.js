//Conta as caracteres incluindo os espaços, só vale para strings
var nome = "Lucas Reis dos Anjos"
console.log(nome.length)

//Deixa todos os caracteres minusculos
var frase = "oIIIeEEEE"
var fraseMinuscula = frase.toLowerCase()
console.log(fraseMinuscula)

//Remove espaços 
var sobrenome = "    Lucas         "
console.log(sobrenome.trim())

//Dizer se algum valor, está ou não dentro da minha variável
const frase2 = "hoje comi cenoura"
console.log(frase2.includes("cenoura"))
console.log(frase2.includes("batata"))
