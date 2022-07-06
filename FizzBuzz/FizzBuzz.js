var i;
var numeros = 100;
for(i = 1; i <= numeros; i++){
    if(i % 3 == 0){
        document.write("Fizz");
     }else{
        document.write(i);
     }
    document.write("<br/>");
}