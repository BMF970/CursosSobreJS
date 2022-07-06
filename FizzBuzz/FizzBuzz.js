var i;
var numeros = 100;
var divisible = false;
for(i = 1; i <= numeros; i++){
    if(esDivisible(i, 3)){
    //var divisible = false;
        document.write(" Fizz");
        //divisible = true;
    }

     if(esDivisible(i, 5)){
        document.write(" Buzz");
        //divisible = true;
    }
     
     if(!esDivisible(i, 3) && !esDivisible(i, 5)){
        document.write(i);
    }
    document.write("<br/>");
}

function esDivisible(num, divisor){
    if (num % divisor == 0){
        return true;
    }else{
        return false;
    }
}