function saludar() {
  // Pedimos el nombre al usuario
  let nombre = prompt("Ingresa tu nombre:");

  // Creamos el saludo
  let saludo = "¡Hola, " + nombre + "! Bienvenido/a.";

  // Mostramos el saludo en consola y en alerta
  console.log(saludo);
  alert(saludo);
}