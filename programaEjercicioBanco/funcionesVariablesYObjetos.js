class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];

var entregado = [];
//dineroTotalEnBilletes
    var billete500 = new Billete(500, 9050);
    var sumaDe500 = billete500.cantidad * billete500.valor;
    caja.push(billete500);
    
    var billete200 = new Billete(200, 10000);
    var sumaDe200 = billete200.cantidad * billete200.valor;
    caja.push(billete200);
    
    var billete100 = new Billete(100, 20000);
    var sumaDe100 = billete100.cantidad * billete100.valor;
    caja.push(billete100);

    var billete1000 = new Billete(1000, 8000);
    var sumaDe1000 = billete1000.cantidad * billete1000.valor;
    caja.push(billete1000);

var dineroTotal=sumaDe500+sumaDe100+sumaDe200+sumaDe1000
var dinero = 0;
var div = 0;
var papeles = 0;

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > dineroTotal)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }else
            {
                papeles = div;    
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero -= (bi.valor * papeles);
        }
    }

    if (dinero > 0){
 
        resultado.innerHTML= "<tr/>Soy un cajero pobre y no tengo dinero";

    }else{
        for(var e of entregado);{
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + "billetes de $" + e.valor + "<br/>";
            }
        }
    }
}

var resultado = document.getElementById("resultado");
var e = document.getElementById("extraer");
e.addEventListener("click", entregarDinero);