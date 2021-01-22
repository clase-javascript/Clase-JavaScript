
/*

dentro de un bucle se puede hacer lo mismo que realizamos afuera,
ejemplo un if else, llamar a alguna function, etc

*/

//ejemplo
/*
function mensaje(){
    console.log("soy un mensaje de una function")
}

for(let i = 0; i<= 20; i++){
    if(i === 5){
        mensaje()
    }else if(i === 10){
        console.log("ahora estamos en la mitad")
    }else{
        console.log(i)
    }
}
*/
/*
tarea FizzBuzz

consiste en recorrer todos los numeros entre el 1 y el 50

si el numero es multiplo por 3 tiene que salir un console.log que diga Fizz
si el numero es multiplo por 5 tiene que salir un console.log que diga Buzz
si el numero es multiplo por 3 Y por 5 el console.log va a tener que ser FizzBuzz
y si no es multiplo por ni por 3 ni por 5 tiene que ser un console.log del numero

ayuda! usar if else y tambien los operadores logicos! (&&, || o !) uno de esos
tambien usar el operador aritmetico % (calcula el resto a dividir) para saber si es multiplo o no
googlear


*/


for(let i = 1; i<= 50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz")
    }else if(i%3 === 0){
        console.log("Fizz")
    }else if(i%5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}


