/* Ingresar un número, obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe mostrar el factorial para los mismos números. El resultado debe ser mostrado por la consola del navegador. 
* 1. Crear una función para solicitar el número y validar antes de mostrar el resultado que el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al rango, mostrar un mensaje al usuario: "número fuera del rango"
* 2. Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.
* 3. Generar y mostrar por consola el resultado de las operaciones.
* 4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.
*/

"use strict";
const multiplicacion = (user) =>{
    user = parseInt(prompt(`Ingresa un número`));
    /** Valida que el usuario ingrese un número entre 1 y 20 */
    while (user < 1 || user > 20){
        alert(`Número fuera de rango`)
        user = parseInt(prompt(`Ingresa un número entre 1 y 20`));
    }
    /** Calcula y muestra la tabla de multiplicar hasta el número ingresado por el usuario */
    for (let num = 1; num <= user; num++) {
        console.log(`${num} x ${user} = ${num * user}`)
    }
    // Calcula y muestra el factorial hasta el número ingresado por el usuario
    for (let num = 1; num <= user; num++) {
        let factorial = 1;
        for (let multiplier = 1; multiplier <= num; multiplier++) {
            factorial = factorial * multiplier;
        }
        console.log(`El factorial de ${num} es: ${factorial}`);
    }
}
multiplicacion();
