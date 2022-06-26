function Victory(){
    console.log("Has ganado");
}

var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijera";

let pregunta = prompt("Eliges... /n1 Piedra/n2 Papel/n3 Tijera");

switch(true){
    case 1:
        user === Piedra && cpu === Papel;
        Victory;    
        break;
    case 2:
        user === Papel && cpu === Piedra;
        Victory;
        break;
    case 3:
        user === Tijera && cpu === Papel;
        Victory;
        break;
    case 4:
        user === cpu;
        console.log("Empate");
    default:
        console.log("La consola ha ganado");
        break;
}

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}
