var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var x = 500;
var y = 500;
document.addEventListener("keydown", dibujarTeclado);
var lienzo = document.getElementById("areaDeDibujo");
var papel = lienzo.getContext("2d");/*
crearLinea("black", 1, 1, 1,999);
crearLinea("black", 1, 499, 999, 999);
crearLinea("black", 999, 999, 999, 1);
crearLinea("black", 999, 999, 1, 1);*/
dibujarLinea("red", 499, 499, 501, 501, papel);

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
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(blueColor, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log("Otra Tecla");
    }
}






















function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, xfinal);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}