// Pedimos al usuario que ingrese un número
// parseFloat() convierte el texto ingresado en un número decimal
let numero = parseFloat(prompt("Ingresa un número:"));

// Primero verificamos si el número es positivo
if (numero > 0) {
    // Si entra acá, sabemos que el número es mayor que 0 → positivo
    console.log("Tu número es positivo");
} 

// Si no es positivo, verificamos si es negativo
else if (numero < 0) {
    // Si entra acá, sabemos que el número es menor que 0 → negativo
    console.log("Tu número es negativo");
} 

// Si no es positivo ni negativo, solo queda que sea cero
else {
    // Si llega acá, necesariamente es 0
    console.log("Tu número es cero");
}

// 🔹 Extra opcional: validar que el usuario ingresó un número
// if (isNaN(numero)) {
//     console.log("Eso no es un número, intenta de nuevo");
// }
