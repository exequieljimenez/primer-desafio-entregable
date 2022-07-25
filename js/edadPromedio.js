// Función agregarEdad(): lanza un prompt para que el usuario agregue una edad, la parsea, la registra en la variable nuevaEdad y la devuelve 
function agregarEdad() {
    let nuevaEdad = parseInt(prompt(`Agregue una edad para calcular, escriba 0 (cero) para finalizar.`))
    return nuevaEdad
}

// Función calcularPromedio(): recibe dos parámetros, divide el primero por el segundo y devuelve el resultado
function calcularPromedio(acumulador, contador) {
    let promedio = acumulador / contador
    return promedio
}

// Función mostrarResultados(): recibe dos parámetros y mediante un alert informa al usuario sobre el promedio y el número de la muestra. Registra esta misma información en la consola.
function mostrarResultados(promedio, contador) {
    alert(`La edad promedio es de ${promedio}, sobre una muestra de ${contador} estudiantes.`)
    console.log(`La edad promedio es de ${promedio}, sobre una muestra de ${contador} estudiantes.`)
}

alert("Hola. Este programa calcula la edad promedio de los estudiantes")

// Este prompt registra el valor introducido por el ususario en la variable entrarONo
let entrarONo = prompt("Escriba 'S' o 's' para comenzar a agregar datos. Escriba cualquier otra cosa para salir.")

// Este condicional chequea la variable antes introducida por el usuario, al no cumplirse la condición un alert despide al usuario y el programa termina
if (entrarONo.toUpperCase() == "S") {

    // Se definen las variables acumulador, contador y edad. Para determinar el valor de la variable edad se llama a la función agregarEdad().
    let acumulador = 0
    let contador = 0
    let edad = agregarEdad()

    // Este loop while sigue funcionando mientras el usuario agregue edades mayores a 0 (lo cual es esperable ya que estamos hablando de estudiantes). 
    while (edad != 0) {

        // El acumulador va sumando el total de las edades y el contador va registrando la cantidad de edades introducidas. Registramos las entradas en la consola también.
        acumulador = acumulador + edad
        contador = contador + 1
        console.log(`La edad del estudiante N°${contador} es ${edad}`)
        edad = agregarEdad()
    }

    let promedio = calcularPromedio(acumulador, contador)
    mostrarResultados(promedio, contador)
}

else {
    alert("Hasta la próxima.")
}

