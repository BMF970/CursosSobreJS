//Que son las promesas?
/*Las promesas son una funcion no-bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca, las promesas indican que algo va a pasar*/

const { resolve } = require("path");

let helloPromise = () => {
    return new promise ((resolve, reject) => {
        if(true){
            resolve(`Hey!`);
        }else{
            reject(`Ups!!`);
        }
    });
}
helloPromise()
    .then(response => console.log(`${res} hola`))
    //.then(() => console.log(`${res} hola`))
    .catch(error => console.log(error));

//Asi queda la manera simple

let x = 1
const helloWorld = new Promise((resolve, reject) => {
    (x == 10)
    ?resolve(`La variable es igual a ${x}`)
    :reject(`La variable no es igual a 10`)})

helloWorld
    .then(res =>{console.log(`¡¡¡Success!!! ${res}`)})
    .catch(error => {console.log(`¡Error! ${error}`)})


/*Async / Await
    Permite estructurar una funcion asincronica sin bloqueo de una manera similar a una funcion sincronica ordinaria
*/



const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);

/*Callback`s
Los callbacks son funciones que nos permiten pasar funciones anonimas o arrow functions como argumento o parametro, que nos permiten asegurar que un determinado codigo o grupo de codigo no se ejecute hasta que otro ya haya cargado o se haya ejecutado, por ejemplo al momento de buscar informacion en una API o base de datos, etc
*/

function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};
console.log(callback)
