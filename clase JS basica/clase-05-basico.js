/* arrays

es una lista de valores ordenada por su indice, sirven tanto para guardar mas de un valor y para guardar mucho 
en javascript no importa si son numeros, strings o booleanos lo que se guarde
es array se crea usando []
creen un array de objetos que le gusten, o con una tematica que les guste
el indice del array empieza en 0
el .length del array empieza en 1(podemos verificar cuantos elementos tiene) se puede usar en strings para saber la cantidad de letras
los array pueden tener mas array adentros!

array const y let

array.push() para agregar un nuevo valor
array.pop(); eliminar el último
array.shift(); eliminar el primero
array.splice(x, 1); eliminar uno del indice deseado donde x es el indice que deseas eliminar
*/

let animales = ["gato", "perro", "conejo"]

console.log(animales)

const cosasRandom = ["gato", 15, true, "true", ["hola mundo", 7]]

cosasRandom[4] = ""
console.log(cosasRandom)
