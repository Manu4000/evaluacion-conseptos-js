//ejercicio 3 a)
/*let nombre = prompt("Por favor ingrese su nombre"); 
alert("Bienvenido " + nombre + "!");*/

//ejercicio 3 b)
/* let num1 = parseInt(prompt("Por favor ingrese el primer número"));
let num2 = parseInt(prompt("Por favor ingrese el segundo número"));
let suma = num1 + num2;
alert("La suma de " + num1 + " y " + num2 + " es igual a " + suma + ".");*/


//ejercicio 3 c)
/* let num1 = parseInt(prompt("Por favor ingrese el primer número"));
let num2 = parseInt(prompt("Por favor ingrese el segundo número"));
let mayor = (num1 > num2) ? num1 : num2;
alert("El número mayor entre " + num1 + " y " + num2 + " es " + mayor + "."); */

//ejercicio 3 d)
/* let num1 = parseInt(prompt("Por favor ingrese el primer número"));
let num2 = parseInt(prompt("Por favor ingrese el segundo número"));
let num3 = parseInt(prompt("Por favor ingrese el tercer número"));
let mensaje;

if (num1 == num2 && num2 == num3) {
    mensaje = "Los tres números son iguales.";
} else {
    mensaje = "Los tres números no son iguales.";
}

alert(mensaje);*/

//ejercicio 3 e)
/*let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

let numeros = [num1, num2, num3];
numeros.sort(function(a, b){return b-a});

alert("Los números ordenados de mayor a menor son: " + numeros);*/

//ejercicio 3 f)
//f) Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / Altura (en metros) al cuadrado.
/*let peso = parseInt(prompt("Ingrese su peso en kg:"));
let altura = parseInt(prompt("Ingrese su altura en metros:"));

let imc = peso / (altura * altura);

alert("Su índice de masa corporal (IMC) es: " + imc);*/

//Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal" Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso" Si el número esmayor a 30 mostrá la leyenda "Obesidad"

/*let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));
let imc = peso / (altura * altura);

if (imc < 18.6) {
  alert("Su índice de masa corporal es " + imc + " y está en Bajo peso");
} else if (imc >= 18.6 && imc <= 24.9) {
  alert("Su índice de masa corporal es " + imc + " y está en Normal");
} else if (imc >= 25 && imc <= 29.9) {
  alert("Su índice de masa corporal es " + imc + " y está en Sobrepeso");
} else {
  alert("Su índice de masa corporal es " + imc + " y está en Obesidad");
}*/

//ejercicio 5
/*let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (let i = 0; i < dias.length; i++) {
  let dia = dias[i];
  if (dia === "Sábado" || dia === "Domingo") {
    console.log(dia + ": Fin de semana!");
  } else {
    console.log(dia);
  }
}*/

//ejercicio 6 a)

let carrito = [];
let total = 0;
let art = "";

while (art !== "0") {
  art = prompt("Ingresá un artículo");
  if (art === "0") break;
  let costoUnitario = parseFloat(prompt("Ingresá el costo unitario"));
  let cantidad = parseInt(prompt("Ingresá la cantidad de unidades"));
  let monto = costoUnitario * cantidad;
  carrito.push({ nombre: art, monto: monto });
  total += monto;
}

console.log("************************************");
console.log("FACTURA A - Número XXXXXXX-XXXXXXX-X");
console.log("Ítems:");
for (let i = 0; i < carrito.length; i++) {
  console.log("- " + carrito[i].nombre);
}
console.log("");
console.log("Total a facturar: $" + total.toFixed(2));
console.log("************************************");



