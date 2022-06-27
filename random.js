var myCar = {
    brand: "Toyota",
    model: "Corolla",
    annio: 2020,
    especificaciones: function(){
        console.log(`Auto ${this.brand} ${this.model} ${this.annio}`)
    }
}

function car(brand, model, annio){
    this.brand = brand;
    this.model = model;
    this.annio = annio;
}