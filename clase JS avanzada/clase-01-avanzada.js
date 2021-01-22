/*
    Manejar los elementos del documento HTML o mejor dicho manejar el DOM (el DOM en una explicacion simple seria es esqueleto del documento HTML)

    document.querySelector()

    document.querySelector("h1"); llama al primer h1/tag
    document.querySelector(".class") se usa el . para llamar al elemento del html por su clase
    document.querySelector("#id") se usa para llamar al elemento por su ID

    addEventListener() se usa para realizar eventos por ejemplo un click

    la sintaxis es  elementoHTML.addEventListener(evento, funcion)
    como acepta funciones vamos empezar a implementar lo que ya conocemos de las clases anteriores ;)
    funciones flecha o arrow function es una alternativa compacta de las funciones, no se usa en todos los casos
    sintaxis ()=>{}

    para diferenciar que variable o constante proviene del DOM se utiliza el simbolo $ adelante

    ejemplo const $titulo = document.querySelector("#titulo")

*/

const $titulo = document.querySelector("#titulo");
const $boton = document.querySelector(".boton");
const $botonDecrementar = document.querySelector(".boton-decrementar");
const $contadorClicks = document.querySelector("#contador-clicks")
let contador = 0;


$titulo.addEventListener("click", ()=>{
    contador = contador +1;
    $contadorClicks.innerText = contador;

    if( $contadorClicks.innerText >= 0 && $contadorClicks.innerText <= 10){
        $titulo.innerHTML = "Soy un numero positivo"
    }else if($contadorClicks.innerText > 10){
        $titulo.innerHTML = "Pasamos los 10 numeros"
    }else{

    }
})


$botonDecrementar.addEventListener("click", ()=>{
    contador = contador -1;
    $contadorClicks.innerText = contador

    if($contadorClicks.innerText >=0){
        $titulo.innerHTML = "estamos restando"
    }else{
        $titulo.innerHTML = "Estamos en numero negativos"
    }
})