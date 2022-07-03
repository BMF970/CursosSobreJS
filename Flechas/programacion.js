var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 250;
var y = 250;
/*
crearLinea("black", 1, 1, 1,999);
crearLinea("black", 1, 499, 999, 999);
crearLinea("black", 999, 999, 999, 1);
crearLinea("black", 999, 999, 1, 1);*/
dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarTeclado(evento){
    var blueColor = "red";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(blueColor, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(blueColor, x, y, x, y + movimiento, papel);
            y = y + movimiento; 
            break;
        case teclas.LEFT:
            dibujarLinea(blueColor, x, y, x - movimiento, y, papel);
            x = x - 10;
            break;
        case teclas.RIGHT:
            dibujarLinea(blueColor, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
    }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, xfinal);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}