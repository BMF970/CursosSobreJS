var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var cantidadVacas = aleatorio(3, 15);
var cantidadCerdos = aleatorio(4, 12);
var cantidadPollos = aleatorio(3, 60);


var fondo = {
    url: "archivos/Granja.png",
    cargaOk: false
};

var vaca = {
    url: "archivos/vaca.png",
    cargaOk: false,
    x: [],
    y: []
};

var cerdo = {
    url: "archivos/cerdo.png",
    cargaOk: false,
    x: 0,
    y
};

var pollo = {
    url: "archivos/pollo.png",
    cargaOk: false,
    x: [],
    y: []
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
        for( var v = 0; v < cantidadVacas; v++)
		{
			var x = (aleatorio (0, 7)*60);
			var y = (aleatorio (0, 7)*60);
			papel.drawImage(vaca.imagen , x , y);
		}
    }
    if(cerdo.cargaOk){
        for( var v = 0; v < cantidadCerdos; v++)
		{
			var x = (aleatorio (0, 7)*60);
			var y = (aleatorio (0, 7)*60);
			papel.drawImage(cerdo.imagen , x , y);
		}
    }
    if(pollo.cargaOk){
        for( var v = 0; v < cantidadPollos; v++)
		{
			var x = (aleatorio (0, 8)*70);
			var y = (aleatorio (0, 8)*70);
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

function moverCerdo(x, y){
    papel.drawImage(cerdo.imagen, x, y);
}

function dibujarOtraVez()//redibujamos los objetos, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	 if(vaca.cargaOK)
	 {
	 	for( var v = 0; v < cantidad; v++)
		{
			papel.drawImage(vaca.imagen , vaca.x[v] , vaca.y[v]);
			console.log(cantidad);
		}
	 }
	 if(pollo.cargaOK)
	 {
	 	for( var p = 0; p < cantidad; p++)
		{
			papel.drawImage(pollo.imagen , pollo.x[p] , pollo.y[p]);
			console.log(cantidad);
		}
	 }
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

document.addEventListener("keyup", moverTecla);//identificamos el evento del teclado y restamos o sumamos posicion, segun la tecla 
	function moverTecla(evento){
			var movimiento = 5;
			switch (evento.keyCode){
			case teclas.UP:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.y = cerdo.y - movimiento;
			break;
			case teclas.DOWN:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.y = cerdo.y + movimiento;				
			break;
			case teclas.LEFT:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.x = cerdo.x - movimiento;				
			break;
			case teclas.RIGHT:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.x = cerdo.x + movimiento;				
			break;
			default:
				console.log("Otra tecla");
			break;
		}	
	}	

document.write("Hay un total de " + cantidadVacas + " vacas");
document.write("</br>Hay un total de " + cantidadCerdos + " cerdos");
document.write("Hay un total de " + cantidadPollos + " pollos");
/*for(var i = 0; i < 10; i++){
    z = aleatorio(10, 20);
    document.write(z + ", ");
}


var z;
      