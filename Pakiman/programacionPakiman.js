HEAD
var images =[];
images["Cauchin"] = "vaca.png";
images["Pokacho"] = "pollo.png";
images["Tocinauro"] = "cerdo.png";
 
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var allPakiman of coleccion){
    allPakiman.show();
}