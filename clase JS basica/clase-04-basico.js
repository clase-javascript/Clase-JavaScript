//if else el valor a comparar tiene que ser un booleano true false
// preguntarle al usuario que operacion quiere realizar (+, -, *, /)
// preguntarle 2 numeros
// calculadora con if else (ayuda recordar usar el Number())

/*

    verlo en consola

    > Mayor que
    < Menor que
    <= Menor o igual
    >= Mayor o igual
    === exactamente igual
    !== distinto/diferente

    un solo "=" es para asignar, "==" es similar/igual por ejemplo un 26 == "26" va a dar verdadero/true por mas que uno sea un string
    y "===" es exactamente igual si 26 === "26" va a dar falso/false ya que un 26 es un Number y el otro es un String

    operador logico
    && and/ y
    || OR / o
    ! NOT / no
*/


let operadorUsuario = prompt("Que operador queres usar? +, -, * o /")
let numeroUsuario1 = Number(prompt("Ingrese un numero para realizar su cuenta"))
let numeroUsuario2 = Number(prompt("Ingrese otro numero para realizar su cuenta"))

function sumar(numero, numero2){
    return numero + numero2
}

function restar(numero, numero2){
    return numero - numero2
}

function multiplicar(numero, numero2){
    return numero * numero2
}

function divir(numero, numero2){
    return numero / numero2
}

if(operadorUsuario === "+"){
    console.log(`La suma de ${numeroUsuario1} y de ${numeroUsuario2} es igual a ${sumar(numeroUsuario1, numeroUsuario2)}`)
}else if (operadorUsuario === "-"){
    console.log(`La resta de ${numeroUsuario1} y de ${numeroUsuario2} es igual a ${restar(numeroUsuario1, numeroUsuario2)}`)
}else if (operadorUsuario === "*"){
    console.log(`La multiplicacion de ${numeroUsuario1} y de ${numeroUsuario2} es igual a ${multiplicar(numeroUsuario1, numeroUsuario2)}`)
}else if (operadorUsuario === "/"){
    console.log(`La divicion de ${numeroUsuario1} y de ${numeroUsuario2} es igual a ${divir(numeroUsuario1, numeroUsuario2)}`)
}else{
    console.log("Ingresar un operador valido: +, -, * y /")
}
