var i;/*Esta variable es para el ciclo*/ var numeros = 100;//Esta variable es para el ciclo, cuanto va a durar el ciclo
for(i = 1; i <= numeros; i++){
    //Este if es para los numeros que son divisibles entre 3
    if(esDivisible(i, 3)){
        document.write(" Fizz");//si es divisible entre 3 se escribira la palabra Fizz
    }
    //Este if es para los numeros que son divisibles entre 5
    if(esDivisible(i, 5)){
        document.write(" Buzz");//si es divisible entre 5 se escribira la palabra Buzz
    }
    //Este if es para los numeros que son divisibles entre 3 "Y" 5
    if(!esDivisible(i, 3) && !esDivisible(i, 5)){
        document.write(i);//Si es divisible entre 3 y 5 se escribira FizzBuzz por que?
        /*En estas 2 funciones se pondra un numero, y este numero tendra que entrar en ambas
        funciones el modulo de 3 y el de 5, si el numero tiene como resultado un modulo diferente a 0
        se escribira, solo y solo si entra en ambas funciones de lo contrario escribira fizz por que es divisible por 3
        y seguido escribira buzz por que es divisible por 5*/

    }document.write("<br/>");//Esto es para el salto de linea, y que no se pongan uno siguiente de otro
}
//Esta funcion es para la division y el modulo, se pone para poder simplificar el trabajo
function esDivisible(num, divisor){/*Se pondra primero el numero "i", y en el divisor el modulo*/
    if (num % divisor == 0){
        return true;
        //Si es divisible entre el "divisor" y el resto es 0 sera verdadero
    }else{
        return false;
        //Si no retornara falso
    }
}