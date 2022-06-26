//Asi se crea un array...
//Se recomienda crear nombres mas intuitivos en las variables para buenas practicas
var /*<--Palabra var, nombre del array -->*/ nombreDelArray = [/*Aqui se ponen los datos: String, Integer, Arrays, etc*/]; /*<--Corchetes que representan los array y un ;*/

/*Con la extension .length podemos ver cuantos
elementos tiene el array, si es que nosotros no lo creamos
(obvio necesitaremos un console.log para imprimir el dato)*/
console.log(nombreDelArray.length);

/*Con la extension .push agregaremos un nuevo elemento 
solo que se agregara hasta el final*/
var nuevoElementoDenombreDelArray = nombreDelArray.push("String", 4, [] /*Etc*/);

/*Con la extencion .pop quitaremos un elemento del array */
var nombreDeVariableRandom = nombreDelArray.pop(/*Aqui pondremos el numero del elemento, o si sabemos los elementos podriamos poner el string exacto*/);

/*Con la extencion .unshift agregaremos un elemento al array y este
 se colocara en el primer lugar osea 0*/
var colocarObjetoAlInicio = nombreDelArray.unshift(/*Colocar el elemento*/);

/*Con la extension .shift eliminaremos el primer elemento del array */
var quitarPrimerElemento = nombreDelArray.shift(/*Aqui se puede poner en blanco, ya que no se necesita poner nada en especifico*/);

/*Con la extension .indexof podremos conocer la posicion de un elemento en especifico en un array*/
var posicionDelElemento = nombreDelArray.indexOf(/*Aqui colocar el elemento*/);

/*Solo necesitamos poner el nombre del array para poder imprimir este*/
nombreDelArray

//Ejemplo de array con Strings
var frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Mango"];
