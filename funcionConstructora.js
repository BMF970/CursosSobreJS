/*Para crear objetos con la funcion constructora */

function objeto(propiedad1, propiedad2, propiedad3, propiedadetc){
    this.propiedad1 = propiedad1;
    this.propiedad2 = propiedad2;
    this.propiedad3 = propiedad3;
    this.propiedadetc = propiedadetc;
}
/*En la funcion "car", tenemos como parametro las propiedades que como objeto queremos que tenga
es decir: en este objeto queremos que tenga las propiedades de marca, modelo y año por que es un coche/auto/carro*/
function car(brand, model, annio){
    //Aqui el objeto ya esta creado
    this.brand = brand;
    /*y aqui tenemos que agregar las funciones constructoras, para evitar hacer objeto por objeto (coche)*/
}
//Esta seria la plantilla con las propiedades del carro/coche y quedaria asi...
function car(brand, model, annio){
    this.brand = brand;
    this.model = model;
    this.annio = annio;
}
//Y ahora podemos comenzar a hacer coches con la plantilla de arriba asi
var newCar = new car("Tesla", "Model X", 2020);
//Y aqui tenemos el primer coche creado con la plantilla car