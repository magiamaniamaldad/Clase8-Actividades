// Ejercicio 4: Determinar si un número es par o impar

Pasos:
// 1. Pedir al usuario que ingrese un número

// 2. Usar el operador % para comprobar si es par o impar

  // 3. Mostrar mensaje si es par
 
  // 3. Mostrar mensaje si es impar
 


function esPar(numero) {
  return numero % 2 === 0;
}

let numero = Number(prompt("Ingresa un número entero:"));

if (esPar(numero)) {
  alert("El número " + numero + " es par.");
} else {
  alert("El número " + numero + " es impar.");
}