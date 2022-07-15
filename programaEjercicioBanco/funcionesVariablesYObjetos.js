class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
var dinero = 0;
var div = 0;
var papeles = 0;


function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
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
        document.write("<tr/>Soy un cajero pobre y no tengo dinero");

    }else{
        for(var e of entregado);
        document.write(e.cantidad + "billetes de $" + e.valor + "<br/>");
    }
}


var b = document.getElementById("extraer");
//parseInt("dinero");
b.addEventListener("click", entregarDinero);