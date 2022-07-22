var jugador = 0;
var pc = aleatorio(1,3);

function aleatorio(min, max){return Math.floor(Math.random() * (max - min + 1) + min)}

function eleccion(jugada){
    let resultado = "";
    if(jugada == 1){
        resultado = "Piedra";
    }else if (jugada == 2){
        resultado = "Papel";
    }else if(jugada == 3){
        resultado = "Tijera";
    }else{
        resultado = "Mal elegido";
    }
    return resultado;
}

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

alert("PC elige: " + eleccion(pc));
alert("Tu elijes: " + eleccion(jugador));

if(pc == jugador){
    alert("Empate");
}else if(jugador ==1 && pc==3){
    alert("ganaste");
}else if(jugador==2 && pc==1){
    alert("ganaste");
}else if(jugador==3 && pc==1){
    alert("Ganaste");
}else{
    alert("Perdiste");
}