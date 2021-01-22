// enseñar poner rutas de carpetas en el script
/*
    operador ternario
    
    sintaxis condición ? expr1 : expr2 (Si la condicion es true hace lo de la izquierda si es false hace lo de la derecha, similar a if else)


    parametros por default/ por defecto
*/

/*
if( edad >= 18){
    console.log("podes pasar al bar")
}else{
    console.log("no podes pasar al bar")
}*/
/*
function entrarBar(edad = 19){
    edad >= 18 ? console.log("podes pasar al bar") : console.log("no podes pasar al bar")
}

entrarBar(12)
*/

   // asignar una function a una variable (funciones anonimas)

    function sumar (n1, n2){
        return n1+n2
    }

    const restar = function(n1,n2){
        return n1-n2
    }

    function ejemploFuncion(funcion, n1, n2){
        return console.log(funcion(n1, n2))
    }

ejemploFuncion(restar, 12, 14)

console.log(restar(12, 52))
