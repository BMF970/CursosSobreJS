let d = document.getElementById("dibujo");
let lienzo = d.getContext("2d");
var l = 0; 
var yi, xf;
var yi2, xf2 = 500;

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

for(l = 0; l < 500; l++)
{
    yi = 10 * l;
    xf = 10 * (l++);
    crearLinea("blue", 0, yi, xf, 500);
}


for(l = 0; l < 500; l++)
{
    yi = 10 * l;
    xf = 10 * (l++);
    crearLinea("red", 500, yi, xf, 0);
}
/*
var l =
for(l = 490; l < 500; l++)
{
    yi = l + 10;
    xf = (l++) + 10;
    crearLinea("green", 0, yi, 0, xf);
}*/