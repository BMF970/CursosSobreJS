var images =[];//Array asociativo que usamos para poner la imagen anclada al nombre y que cada vez que mandemos llamar el nombre se presente la imagen tambien
images["Cauchin"] = "vaca.png";
images["Pokacho"] = "pollo.png";
images["Tocinauro"] = "cerdo.png";
 
var coleccion = [];//usamos este array para evitar estar poniendo muchos console log, pues de lo contrario tendriamos que colocar una linea por cada animal que queramos llamar
coleccion.push(/*                        */new Pakiman("Cauchin", 100, 30));
//^ para agregar al final cada nuevo pakiman, ^ nos permite agregar directamente los pakimanes 
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//El siguiente buucle nos permite mostrar todos los pakimanes pues...
for (var allPakiman of coleccion){
// tiene esta cosa  ^^ que nos permite recorrer cada objeto de el array "coleccion"
    allPakiman.show();//metodo usado para imprimir en el documento toda la informacion
}