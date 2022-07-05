var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(1, 10);

var fondo = {
    url: "archivos/Granja.png",
    cargaOk: false
};

var vaca = {
    url: "archivos/vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "archivos/cerdo.png",
    cargaOk: false
};

var pollo = {
    url: "archivos/pollo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk){
        for( var v = 0; v < cantidad; v++)
		{
			var x = aleatorio (0, 420);
			var y = aleatorio (0, 420);
			papel.drawImage(vaca.imagen , x , y);
		}
    }
    if(cerdo.cargaOk){
        for( var v = 0; v < cantidad; v++)
		{
			var x = aleatorio (0, 420);
			var y = aleatorio (0, 420);
			papel.drawImage(cerdo.imagen , x , y);
		}
    }
    if(pollo.cargaOk){
        for( var v = 0; v < cantidad; v++)
		{
			var x = aleatorio (0, 420);
			var y = aleatorio (0, 420);
			papel.drawImage(pollo.imagen , x , y);
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

function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
}

for(var i = 0; i < 10; i++){
    z = aleatorio(10, 20);
    document.write(z + ", ");
}


var z;

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}