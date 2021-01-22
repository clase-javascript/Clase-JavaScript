/* objetos

    sirven para describir cosas (datos, caracteristicas, etc)

    definir un objeto en js {}

    objeto para describir a una persona y ver la sintaxis

    {
        nombre: "juan",
        apellido: 'vera',
        edad: 21,
        altura: 1.80,
        "fecha-nacimiento": "20-1-2000"
    }*/
    
    const persona ={
        nombre: "juan",
        apellido: "vera",
        edad: 21,  
        altura: 1.80,
        "fecha-nacimiento": "20-1-2000",
    }
    
    /*

    esta compuesta por key y el value (llave y valor) la key va sin comillas a menos que sea una key de mas de una palabra

    se las puede asignar a una constante o variable

    const persona = {
        nombre: "juan",
        apellido: 'vera',
        edad: 21,
        altura: 1.80,
        "fecha-nacimiento": "20-1-2000"
    }

    persona.nombre o persona["nombre"](se usaria este caso si o si cuando sea por ej "fecha-nacimiento")
    */

//console.log(persona["fecha-nacimiento"])

/*
    se puede agregar mas key y value a los objetos
        
    persona.peso = "75 kg"

    persona["color-pelo"] = "castaño"


    delete persona.altura
    
    se puede poner cualquier cosa dentro de un objeto

    const objetoRandom = {
        1: "texto",
        2: 15,
        3: { 4: "objeto dentro de un objeto"},
        5: function(){
            return console.log("funcion dentro de objeto")
        },
        6: [{7:"objeto dentro de array adentro de un objeto"}, "array"]
    }

*/ 
/*
delete persona.altura
delete persona["fecha-nacimiento"]

console.log(persona)
*/

const objetoRandom = {
    n1: "texto",
    n2: 15,
    n3: { n4: "objeto dentro de un objeto"},
    n5: function(){
        return console.log("funcion dentro de objeto")
    },
    n6: [{n7:"objeto dentro de array adentro de un objeto"}, "array"]
}

console.log(objetoRandom.n6[0].n7)