//Hay 2 tipos de funciones:

//Declarativas
function miFunction()/*<--se necesita asignar nombre */{
    /*va a guardar valores aqui*/
    return 3;/*Aqui tenemos que colocar return 
    para poder dar terminada la funcion*/
}
//si pusieramos...
miFunction

//Expresion
//Esta funcion necesita parametros y van en los parentesis
//Se conocen como funciones anonimas, por que no tienen nombre 
//Generamos una variable que tiene como valor una funcion
//pero como tal la funcion no tiene nombre 
var miFunctionExpresiva = function(a,b){
    return a + b;
}
miFunctionExpresiva() //<-- Como es funcion agregamos parentesis

//Ejemplo
//Este es un ejemplo de una funcion declarativa 
/*Ponemos el parametro estudiante, y dentro de la funcion
 ponemos un saludo y un nombre cualquiera, la cual como 
 resultado nos dara*/
//Hola Diego (en este caso)

function saludarEstudiantes(estudiante){
    console.log("Hola " + estudiante);
}
saludarEstudiantes("Diego");

//Ejemplo 2
function Suma(a,b,c){
    var result = a + b + c;
    return result;
}
//Si colocamos...
Suma(1,2,3);

/*nos traera como resultado 6. pues la funcion "suma"
 ya se encargo de no solo sumar 
Curso JavaScript: 46. Callbacks - #jonmirchaos 3 parametros si no
 de regresar el resultado*/

/*
Fat arrow function(tambien se les conoce como funciones anonimas o como una expresion, pues la asignamos a una variable)
*/
    
    const funcionX = () => {
        //Aqui van los argumentos de la funcion
    } 

/*Las podemos usar para quitarnos de las funciones simples, como retornar una suma, conseguir un numero aleatorio, etc, pues para funciones con un parametro y una linea de codigo son muy buenas.
Siguiendo el ejemplo anterior una arrow function seria asi
*/

    () => {
/* ^ Como podemos ver no lleva nombre*/
        //Aqui van los argumentos de la funcion
    }

/*Las podemos declarar como una expresion asignandolas a una variable, por ejemplo*/

    const arrowFunction = () => {
        //Aqui van los argumentos de la funcion
        
    }
    
//Para importar archivos con funciones o funciones de otros archivos tenemos que usar la siguiente linea de codigo 

/*Esta es la ultima version en nodejs, si no sirve usar la de abajo, la "vieja sintaxis"
import aleatorio from `./modulos.js`*/

const aleatorio = require(`./modulos`)
console.log(aleatorio(1, 3));