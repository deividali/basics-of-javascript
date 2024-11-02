let string1 = "1 ";
let string2 = "hola como estas, ";
let string3 = "espero que bien";
let string4 = string1 + string2 + string3;
let string5 = `${string1} ${string2} ${string3}`;
console.log("mensaje:", string4);
console.log("concatenar: ", string5);

let frase = "javascript tiene sus cositas";
let numeroCaracteres = frase.length;
console.log(numeroCaracteres);
console.log(frase.toLocaleUpperCase()) // imprime en mayusculas
console.log(frase.toLocaleLowerCase()) // imprime en minusculas

console.log(frase.substring(0,10)) // imprime en minusculas
