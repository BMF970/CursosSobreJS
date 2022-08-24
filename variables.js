//var nombre = oscar;

const { setTimeout } = require("timers/promises");

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
  
//Para numeros enteros mayores a la 2^53 podemos trabajar de 2 formas...
    //Una seria agregando una "n" al final del numero por ejemplo...
    let aBigNumber = 98987496746541305489679846210324684630035416n;
    console.log(aBigNumber);
    //La otra seria asignar el numero asi...
    let anotherBigNumber = BigInt(98987496746541305489679846210324684630035416);
    console.log(anotherBigNumber);

//Metodos que podemos usar/aplicar en variables

//Con el metodo replace podemos encontrar coincidencias en palabras y reemplasarlas por otras, por ejemplo...

    //Imprimir este bloque de codigo para un mejor ejemplo
    
    const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
    const replacedString = mensaje.replace("JavaScript", "Python");
    
    //<<< const nuevaVariable = x/*x = variable que queremos modificar*/.replace/*Metodo .replace*/(/*Primera palabra es la que queremos cambiar, es necesario escribir la palabra exacta, si tiene mayusculas en medio o cualquier cosa, palabra EXACTA*/, /*La segunda palabra es aquella que va a ser cambiada*/);
    
    //Este es el mensaje original...
    console.log(mensaje);
    //Y este es el mensaje modificado, para cambiar todas las palabras "javaScript" por python...
    console.log(replacedString);
    
//El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima, si la cantidad de longitud maxima es menor a la del propio strin no agregara nada, podemos agregar "padding" al...
    //Principio -> .padStart()
    const abc =`abc`;
    const abcGuiones = abc.padStart(10, `-·`)
    //const nuevaVariable = variableConLaCadenaQueVamosAModificar.padStart(10 < Cantidad de caracteres(mayores al string), `-`< Caracter o caracteres que queremos mostrar)
    
    console.log(abcGuiones)
    
    //Final -> .padEnd();
    const abcd =`abcd`;
    const abcdGuiones = abcd.padEnd(10, `-·`)
    console.log(abcdGuiones)

/*
Variables con Strings
Con la implementacion de ES6 ya no necesitamos del comando "\n", pues solo es necesario usar un enter, por ejemplo
*/
    let lorem3 = "Lorem ipsum dolor sit amet consectetur adipisicing " + "\nelit. Fugiat vel inventore illo facere maiores unde earum " + "\nvoluptatibus quisquam praesentium aliquid, facilis quas at quam. Ad"+ "\nnumquam repellat autem nesciunt rerum Nihil beatae saepe quod rem " 
    let lorem3Mejorado = `
    Lorem ipsum dolor sit amet consectetur adipisicing 
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
    `
    console.log(lorem3);
    setTimeout(() => {
            console.log(lorem3Mejorado);
    }, 5000);

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