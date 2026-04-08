// 1. Capturamos el botón para saber cuándo hace clic el usuario
let boton = document.getElementById("btn-enviar");

boton.addEventListener("click", function() {
    // 2. Obtenemos los valores de los inputs
    let nombre = document.getElementById("input-nombre").value;
    let edadTexto = document.getElementById("input-edad").value;
    
    // 3. Tipos de datos: Convertimos el texto de edad a un Número
    let edad = Number(edadTexto);

    // 4. Condicionales: Verificamos si los campos están vacíos
    if (nombre === "" || edadTexto === "") {
        console.log("Error: Debes completar ambos campos.");
    } else {
        // 5. Operadores y Mensaje Personalizado
        console.log("--- Procesando Datos ---");
        console.log("Hola " + nombre + ", tienes " + edad + " años.");

        // 6. Bucle: Un saludo repetido según una cantidad fija (ej: 3 veces)
        console.log("Iniciando secuencia de bienvenida...");
        let contador = 1;
        while (contador <= 3) {
            console.log("Bienvenido a la consola - Intento " + contador);
            contador++; // Operador de incremento
        }
    }
});