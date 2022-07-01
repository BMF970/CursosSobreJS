var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibuj/arTeclado);
var lienzo = document.getElementById("areaDeDibujo");
var papel = lienzo.getContext("2d");/*
crearLinea("black", 1, 1, 1,999);
crearLinea("black", 1, 499, 999, 999);
crearLinea("black", 999, 999, 999, 1);
crearLinea("black", 999, 999, 1, 1);*/
dibujarLinea("red", 100, 100, 200, 200);

function dibujarTeclado(evento){
    switch(evento.keycode)
    {
        case teclas.DOWN:
            console.log("pa abajo");
            break;
        case teclas.UP:
            console.log("pa arriba");
            break;
        case teclas.LEFT:
            console.log("Pa la izquierda");
            break;
        case teclas.RIGHT:
            console.log("derecha");
            break;
        default:
            console.log("Otra Tecla");

    }
}






















function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, xfinal);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}