//Number() y prompt


//if - else (si o sino) condicionales


/*

ejemplo if else

si (if) tenes comidas podes comer, si no (else) tenes que ir a comprar

ejemplo entrar a un bar
*/

let dniUsuario = prompt("Tenes DNI?").toLowerCase();

if(dniUsuario === "si"){
    let edadUsuario = prompt("Que dad tenes?")
    if(edadUsuario > 18){
        console.log("Podes entrar al Bar")
    }else if(edadUsuario < 18){
        console.log("No podes entrar al Bar")
    }else{
        console.log("No ingresas un caracter valido, tenes que ingresar un numero")
    }
}else if(dniUsuario=== "no"){
    console.log("No podes pasar, anda a buscar tu dni")
}else{
    console.log("Ingrese solamente Si o No")
}
