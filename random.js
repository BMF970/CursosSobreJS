var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
var reinicio = document.getElementById("botonReset");
var l = 0; 
var yi, xf;
var xi, yf;
var c = 0;
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width; 
boton.addEventListener("click", dibujoPorClick);
botonReset.addEventListener("click", resetPorClick);

function crearLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, xfinal);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

crearLinea("black", 1, 1, 1, 499);
crearLinea("black", 1, 499, 499, 499);
crearLinea("black", 499, 499, 499, 1);
crearLinea("black", 499, 499, 1, 1);

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;

    for(l = 0; l < 500; l++)
    {
        yi = espacio * l;
        xf = espacio * (l++);
        crearLinea("blue", 0, yi, xf, 500);
    }

    for(l = 0; l < 500; l++)
    {
        yi = espacio * l;
        xf = espacio * (l++);
        crearLinea("red", 500, yi, xf, 0);
    }
}

















for(l = 1; l < 500; l + 10)
{
    yi = 500 * l;
    xf = 10;
    crearLinea("green", 0, yi, xf, 0);
}