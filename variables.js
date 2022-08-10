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

/*
Esta manera es una mala practica y no encaja en ECMAScript6
var miNombre = "Brian";
    function nombre(){
        var miApellido = "Martinez Flores";
        console.log(miNombre + " " + miApellido);
    }
    nombre();
Ahora se tiene que poner asi...
*/
let miNombre = "brian"
function nombreCompleto(nombre){
    let apellidoPaterno = "Martinez"
    let apellidoMaterno = "Flores"
    let nombreCompleto = `${miNombre} ${apellidoPaterno} ${apellidoMaterno}`
    console.log(nombreCompleto)
}
nombreCompleto(miNombre);
//y asi seria la mejor manera de juntar palabras sin usar el  + `  ` + etc etc

//La manera correcta de usar potencias en JS es con un **... por ejemplo
let base = 3;
let exponente = 3;
let potencia = base ** exponente;
console.log(potencia);

//Si tenemos espacios al final o al principio de un array podemos eliminarselos con 2 metodos y estos son...

//Espacios al principio del array -> trimStart()
    let saludoConEspAlIni = `          Hello world`;
    console.log(saludoConEspAlIni);
    console.log(saludoConEspAlIni.trimStart(/*Tenemos que colocar parentesis*/));

//Tambien podriamos crear otra variable para quitarles el espaciado del principio, pues si volvemos a imprimir "saludo" seguira teniendo los espacios

    console.log(saludoConEspAlIni);
    let saludoSinEspacios = saludoConEspAlIni.trimStart();
    console.log(saludoSinEspacios);

//Espacios al principio del array -> trimEnd()
    let saludoConEspAlFin = `hello world          `;
    console.log(saludoConEspAlFin);
    console.log(saludoConEspAlFin.trimEnd())

//Igual que con trimStart podemos crear otra variable a partir de esta que ya tenga la funcion, subrayar en consola para tener un mejor ejemplo

    console.log(saludoConEspAlFin);
    let saludoSinEspaciosAlFinal = saludoConEspAlFin.trimEnd();
    console.log(saludoSinEspaciosAlFinal)
    
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