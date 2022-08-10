class nuevaClase{//la clase es la definicion de un objeto| una clase es una plantilla para generar objetos con valores y funciones ya definidos
/*Con esto estamos creando un objeto, la definicion de un objeto...*/
    constructor(){/*es como escribir una funcion pero esta no tiene nombre, es parte de la clase*/
        /*En las clases no funcionan las variables, tienen que ser en el constructor*/
        this.mensaje = "Este es un mensaje";
    }
    agregarNuevosMetodos(){//asi se agregan metodos. (al parecer hay otra forma de hacer metodos *pendiente*)
}
}
//Los atributos no son mas que las variables de un objeto
/*dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos*/
//El proceso de crear objetos a partir de un molde/molde llamada clase se le llama instanciar, por eso a cada uno de esos objetos se les llama instancia
//En JS todo/la mayoria es un objeto por eso podemos crear cosas como que una variable en si puede tener mas de un atributo...

const persona = {
/*^Podemos usar const para que la zona de memoria le pertenezca solamente a este objeto, al parecer se recomienda mas*/
    nombre: `Pablo`,
    apellidos: `Martinez`,
    telefonno: 4444015094,
    edad: 21
    calcular(){
        this.telefonno + this.edad
    }
}

console.log(persona["nombre"]);
/*                 ^ se puede utilizar esto, pero lo mas comun es usar el punto (osea persona.nombre) aunque hay ocaciones donde si se tiene que hacer asi estrictamente*/