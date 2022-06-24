//var nombre = oscar;

var edad;

console.log(edad)
edad = 30;
console.log(edad)

var elementos = ["Computadora", "Celular"];
//elementos(1);


var persona = {
    Nombres: "Brian",
    Apellidos: "Martinez Flores",
    Edad: 21,
    Escolaridad: "Preparatoria Terminada"
}
console.log(persona)


var miNombre = "Brian";
    function nombre(){
        var miApellido = "Martinez Flores";
        console.log(miNombre + " " + miApellido);
    }
    nombre();
/*
Scope:
    El scope basicamente es el alcance que tienen las variables
    Determina el conjunto de variables que podemos acceder desde una linea de codigo
    Hay que declarar las variables con el scope mas reducido posible
 
Scope Global:
    Las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa
    estas son aquellas variables declaradas fuera de toda funcion o bloque de codigo, 
    no importa si son "var", "let" o "const" es importante reducirlas, pues
    se quedan en memoria durante toda la ejecucion del programa

Scope Local:
    Las variables locales solo se pueden acceder desde una parte de nuestro programa
    regularmente aquellas que son creadas en un bloque o en una variable local no pueden 
    pasar de ese entorno local (bloque o variable)
*/

/*
Hoisting:
 El hoisting es cuando primero llamamos 
 la variable o funcion sin haberla declarado
 lo que nos deja como resultado este con un valor indefinido
 basicamente una mala practica, primero declaramos 
 funciones y variables y luego programamos
*/ 