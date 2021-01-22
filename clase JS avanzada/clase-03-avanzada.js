/* 
ahora que ya sabemos manipular los elementos del DOM ahora vamos a crearlos con javascript!
y a usar boostrap (esto se va a explicar mejor en CSS aca lo vamos a ver para arriba por si no vieron el curso de css)

para crear un elemento document.createElement("elementoHTML");

const comidas = ["Fideos", "Hamburguesa", "Tortillas", "Sanguche de carte de ternera", "Pollo", "Papas Fritas", "Ensalada"]

className = "list-group-item list-group-item-action"; (clase para boostrap)

$link.setAttribute("target", "_blank");

ya vimos innerText o innerHTML pero tambien esta textContent
    
appendChild() lo vamos a utilizar para agregar un elemento hijo de un elemento padre del HTML ya que si creamos un elemento hay que introducirlo en el HTML de alguna forma
recomiendo siempre crear contenedores para esto, el <div></div> es el mas comun pero sabiendo mas de HTML van a encontrar mas
*/

const comidas = ["Fideos"];

comidas.forEach(comida=>{
    const $contenedorComida = document.querySelector("#contenedor-comidas");
    console.log($contenedorComida)
    const $listaComida = document.createElement("li");
    $listaComida.textContent = comida;
    $listaComida.setAttribute("id", comida)
    $listaComida.className = "list-group-item list-group-item-action"

    $contenedorComida.appendChild($listaComida);
});

const $contenedor = document.querySelector("#contenedor");

const $link = document.createElement("a");
$link.textContent = "Link a Google";
$link.setAttribute("href", "https://www.google.com/");
$link.setAttribute("target", "_blank");

$contenedor.appendChild($link)
