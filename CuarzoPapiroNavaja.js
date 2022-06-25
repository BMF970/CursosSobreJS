var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijera";

//function
var game = function(user, cpu){
    if(user === opc1 && cpu === opc2){
        console.log("El usuario gano con " + opc1);
    }else if (user === opc2 && cpu === opc1){
        console.log("El usuario gano con " + opc2);
    }else if(user === opc3 && cpu === opc2){
        console.log("El usuario gano con " + opc3);
    }else if(user === cpu){
        console.log("Empate")    
    }else{
        console.log("La consola gano con " cpu);
    }
}
