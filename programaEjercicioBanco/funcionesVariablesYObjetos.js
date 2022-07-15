class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];

var entregado = [];
var billete500 = new Billete(500, 2);
var billete100 = new Billete(100, 2);
var billete50 = new Billete(50, 2);
var billete20 = new Billete(20, 2);

caja.push(billete500);
caja.push(billete100);
caja.push(billete50);
caja.push(billete20);

var dinero = 0;
var div = 0;
var papeles = 0;

var sumaDe500 = billete500.cantidad * billete500.valor;
var sumaDe100 = billete100.cantidad * billete100.valor;
var sumaDe50 = billete50.cantidad * billete50.valor;    
var sumaDe20 = billete20.cantidad * billete20.valor;
var dineroTotal = sumaDe500 + sumaDe100 + sumaDe50 + sumaDe20 ;



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
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if (dinero > 0){
 
        resultado.innerHTML= "<tr/>Soy un cajero pobre y no tengo dinero";

    }else{
        for(var e of entregado);{
            if(e.cantidad > 0){
                resultado.innerHTML = resultado.innerHTML + e.cantidad + "billetes de $" + e.valor + "<br/>";
            }
        }
    }
}

var resultado = document.getElementById("resultado");
var e = document.getElementById("extraer");
//parseInt("dinero");
e.addEventListener("click", entregarDinero);