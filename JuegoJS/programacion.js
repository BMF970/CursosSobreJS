var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
<<<<<<< HEAD
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

=======
/*var cantidadVacas = aleatorio(3, 15);
var cantidadCerdos = aleatorio(4, 12);
var cantidadPollos = aleatorio(3, 60);
*/
var cantidad = aleatorio(1, 50);
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31

var fondo = {
	url: "archivos/Granja.png",
	cargaOK: false
};

var vaca = {
	url: "archivos/vaca.png",
	cargaOK: false,
	x : [],//Creo una variable X y Y para vaca y pollo en arreglo y la de cerdo la inicializo en cero
	y : []
};

var cerdo = {
<<<<<<< HEAD
	url: "archivos/cerdo.png",
	cargaOK: false,
	x : 0,
	y : 0
=======
    url: "archivos/cerdo.png",
    cargaOk: false,
    x: 0,
    y: 0
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31
};

var pollo = {
	url: "archivos/pollo.png",
	cargaOK: false,
	x : [],
	y : []
};
 
 
var cantidad = aleatorio(1,50);

fondo.imagen = new Image();//creamos objeto
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);//escuchamos el evento de carga del navegador

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
<<<<<<< HEAD
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo ()//cuando ocurre el evento, se llama a estas funciones para que a su vez llamen la funcion de dibujar
{
	fondo.cargaOK = true;
	dibujar();
}
 
 function cargarVaca ()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarCerdo ()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollo ()
{
	pollo.cargaOK = true;
	dibujar();
}

function dibujar()//aqui se evalua cual imagen ha cargado, para que siga el orden de carga que queremos
{

	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	if(vaca.cargaOK)//si el objeto de la vaca ya cargo se ejecuta el ciclo en donde se colocan cantidades y posiciones aleatorias
		//tambien se guardan en el arreglo las posiciones aleatorias que se generaron para posteriormente saber redibujar el objeto cuando
	//movamos el cerdo en el teclado
	{
		for( var v = 0; v < cantidad; v++)
		{
=======
pollo.imagen.addEventListener("load", cargarPollos);

function dibujar(){//aqui se evalua cual imagen ha cargado, para que siga el orden de carga que queremos

	if(fondo.cargaOK){
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	if(vaca.cargaOK){//si el objeto de la vaca ya cargo se ejecuta el ciclo en donde se colocan cantidades y posiciones aleatorias
		//tambien se guardan en el arreglo las posiciones aleatorias que se generaron para posteriormente saber redibujar el objeto cuando
	//movamos el cerdo en el teclado
		for( var v = 0; v < cantidad; v++){
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31
			var x = (aleatorio (0,7)*60);
			var y = (aleatorio (0,7)*60);
			vaca.x[v] = x;
			vaca.y[v] = y;
			papel.drawImage(vaca.imagen , x , y);
			console.log(cantidad);
<<<<<<< HEAD
		}
		
	}
	if(cerdo.cargaOK)
	{	
=======
		}	
	}
	if(cerdo.cargaOK){	
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31
		var x = (aleatorio (0,7)*60);
		var y = (aleatorio (0,7)*60);
		cerdo.x = x;
		cerdo.y = y;
		papel.drawImage(cerdo.imagen , x , y);
		
	}
<<<<<<< HEAD
	if(pollo.cargaOK)
	{
		for(var p =0; p <cantidad ; p++)
		{
=======
	if(pollo.cargaOK){
		for(var p =0; p <cantidad ; p++){
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31
			var x = (aleatorio (0,7)*60);
			var y = (aleatorio (0,7)*60);
			pollo.x [p] = x;
			pollo.y [p] = y;
			papel.drawImage(pollo.imagen , x , y);
			console.log(cantidad);
<<<<<<< HEAD
		}
		
	}
=======
		}	
	}
}

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31

}


function aleatorio(min , maxi)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function moverCerdo(x,y)
{
	papel.drawImage(cerdo.imagen,x,y);
}

function dibujarOtraVez(){//redibujamos los objetos, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar
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

document.addEventListener("keyup", moverTecla);//identificamos el evento del teclado y restamos o sumamos posicion, segun la tecla 
	function moverTecla(evento)
	{
			var movimiento = 15;
			switch (evento.keyCode)
		{
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
<<<<<<< HEAD
		}	
	}	
=======
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
      
>>>>>>> aa89362c948db1351fff3d7c6d3d6d0431921c31
