let nombre = "Ulises"
let apellido = "Berasain"
let edad = "26"

console.log(`Mi nombre es ${nombre} y mi edad es ${edad} años afasfas`)

console.log(edad)

let numero = 20
let numero2 = 5

let resultadoMultiplicacion = numero * numero2

console.log(`${numero} multiplicado por ${numero2} es igual a ${resultadoMultiplicacion}`)

function mostrarNombreYApellido(valor1, valor2){
    return console.log(valor1, valor2)
}

mostrarNombreYApellido(nombre,apellido)

function restar(numero1, numero2){
    return numero1 - numero2
}

console.log(restar(numero, numero2))

let añoDeNacimiento = 1994
let añoActual = 2021

function calcularEdad(numero, numero2){
    return numero - numero2
}

console.log(calcularEdad(añoActual, añoDeNacimiento))
