/* 

seguimos viendo document.querySelector pero esta vez va a ser el document.querySelectorAll() este es para seleccionar TODOS los elementos que tengan ese tag, class o id

y vamos a utilizar un nuevo metodo para recorrerlo, el forEach (cada uno)

y a manejar el className (class del HTML)

cambiar imagenes y manejar los if else con los className

setAttribute() para agregar id o mejor dicho agregar algun atributo al elemento HTML
la sintaxis es setAttribute("atributo", "contenido")

<button id="boton-dom">boton dom</button> 
*/


const $botonDom = document.querySelector("#boton-dom");
const $imagenDom = document.querySelector("#imagen-dom");

$botonDom.addEventListener("click", ()=>{
    if($imagenDom.className !== "dom-verde"){
        $imagenDom.setAttribute("src", "./img/dom-html-verde.png" )
        $imagenDom.setAttribute("id", "./img/dom-html-verde.png" )
        $imagenDom.className = "dom-verde"
    }else if($imagenDom.className !== "dom-blanco"){
        $imagenDom.setAttribute("src", "./img/arbol_dom.gif" )
        $imagenDom.className = "dom-blanco"
    }else{
        console.log("algo salio mal")
    }
})
