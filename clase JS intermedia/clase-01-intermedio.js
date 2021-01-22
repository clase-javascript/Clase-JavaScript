//console.log("hola".length)

//console.log("hola"[0])


/*
const saludo = "hola mundo"

console.log(saludo.length)

console.log(saludo[4])
*/


/*
const ejemploArrayDeArrays = [[1,2], [3,4], [[5,10],6]]

console.log(ejemploArrayDeArrays[2][0][1])
*/

/* 
    Bucles

    un ejemplo seria si les pidiera un console.log de 1000 numeros del 1 al 1000, todos empezarian 1 2 3... asi hasta el 100
    con los bucles hacemos que todo eso se haga de una vez

    cada bucle tiene que tener 3 cosas principales, un inicio, una condicion y un final (si falta uno de esto pueden entrar en un bucle infinito)

    primer bucle 

    while(mientras)
    el bucle while se va a ejecutar hasta que una condicion se cumpla

*/

//ejemplo

/*let numero=0 //numero en 0 es el inicio, tiene que ser let porque vamos a modificarlo todo el tiempo, no puede ser const

while(numero<=10){ //si es true se va a seguir ejecutando el while y si es false va a parar (con if se hace una sola vez con el while se va a ejecutar hasta que de false)
    //que numero sera menor o igual a 10 es la condicion

    console.log(`esto lo hacemos con JavaScript! contador de vueltas ${numero}`)//cada vez que se ejecute va a mostrar este console.log

    numero = numero +1 //numero va a incrementarse en 1, se le asigna un nuevo valor para que cuando llegue a 11 termine el bucle while para que no sea un bucle infinito
}*/


/*let numero = 0;

while(numero<=10){
    console.log(`esto lo hacemos con JavaScript! contador de vueltas ${numero}`)
    numero = numero +1
}
*/
//ahoran hagan lo mismo pero del 10 al 1! al revez!(consejo el contador puede incrementar o decrementar, piensen tambien cual es el punto de partida)

let numero = 10;

while(numero>=1){
    console.log(numero)
    numero = numero -1
}
