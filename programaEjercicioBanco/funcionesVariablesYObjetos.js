class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var caja = [];
var entregado = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var dinero = 210;
var papeles = 0;
var div = 0;//(dinero, billete)

function entregarDinero(){
    for(var bi of caja) {
        if(dinero > 0){
//div = Math.floor(dinero/bi.valor);
            console.log(bi);
        }        
    }
}