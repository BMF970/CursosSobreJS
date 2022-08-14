//Que son las promesas?
/*Las promesas son una funcion no-bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca*/
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
