/* 
    bucle For

    es parecido al bucle while solo que el contador se declara el contador en la misma declaracion del bucle
*/

//ejemplo

/*
    for(let i = 0; i <=10; i = i++){ //(inicio; condicion; contador para llegar al final) el ++ es para incrementar y el -- para decrementar
        console.log(`bucle for y el contador: ${i}`)
    }
*/

/*  for(let i = 10; i >=1; i--){
        console.log(`bucle for y el contador: ${i}`)
    } 
*/

// cuando usar while o for? while es para saber que la condicion va a cambiar en algun momento pero no sabemos cuando y en el for es cuando si sabemos y por eso declaramos el
// contador/condicion en el mismo bucle for

//hacer ejercicio de sacar promerios (acumuladores) para explicar array con bucle for


let notas = [8, 9, 10, 8, 9, 7, 5, 4]
let totalNotas = 0;

for(let i = 0; i<notas.length; i++){
    totalNotas = totalNotas + notas[i]
    console.log(totalNotas)
}

console.log(totalNotas / notas.length)

