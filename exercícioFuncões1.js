//Auto cuidado, motivação 
function gerarAdjetivos(nome){
   //Lista de adjetivos
   let adjetivos = ["esforçado", "inteligente", "corajoso", "dedicado", "10"]
   //Gerar um índice aleatorio para escoler um adjetivo
   let indiceAleatorio = Math.floor(Math.random() * adjetivos.length)
   //Math.floor arredonda o número pra baixo
   //Math.random() randomizar

   return nome + "  você é  " + adjetivos[indiceAleatorio]
}
//Chamado
console.log(gerarAdjetivos("Lucas"))