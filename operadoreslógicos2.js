//Só será falso se ambos forem falsos
let a = true;
let b = false;
let c = true;

let resultado = a || b;
let resultado2 = b || c;
let resultado3 = a || c;
let resultado4 = a || b || c;
let resultado5 = b || b;

console.log("a || b:", resultado)
console.log("b || c:", resultado2)
console.log("a || c:", resultado3)
console.log("a || b || c:", resultado4)
console.log("b || b:", resultado5)
