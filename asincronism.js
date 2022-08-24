//Que son las promesas?
/*Las promesas son una funcion no-bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca, las promesas indican que algo va a pasar*/
const helloPromise = () => {
    return new promise ((resolve, reject) => {
        if(true){
            resolve(`Hey!`);
        }else{
            reject(`Ups!!`);
        }
    });
}
helloPromise()
.then(response => console.log(response))
.then(() => console.log(`Hola`))
.catch(error => console.log(error));
/*Async / Await
    Permite estructurar una funcion asincronica sin bloqueo de una manera similar a una funcion sincronica ordinaria
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
