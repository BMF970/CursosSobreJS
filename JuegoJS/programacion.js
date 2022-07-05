var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "archivos/Granja.png",
    cargaOk: false
};

var vaca = {
    url: "archivos/vaca.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk){
        for(var v = 0; v < 10; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}






for(var i = 0; i < 10; i++){
    z = aleatorio(10, 20);
    document.write(z + ", ");
}


var z;

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (min - max + 1)) + min;
    return resultado;
}