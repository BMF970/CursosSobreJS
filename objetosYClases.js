class nuevaClase{//la clase es la definicion de un objeto| una clase es una plantilla para generar objetos con valores y funciones ya definidos
/*Con esto estamos creando un objeto, la definicion de un objeto...*/
    constructor(){/*es como escribir una funcion pero esta no tiene nombre, es parte de la clase*/
        /*En las clases no funcionan las variables, tienen que ser en el constructor*/
        this.mensaje = "Este es un mensaje";
    }
    agregarNuevosMetodos(){//asi se agregan metodos. (al parecer hay otra forma de hacer metodos *pendiente*)
    }
    #metodoPrivado(){//Ahora podemos poner los metodos en privado para que fuera de este no se pueda usar, ayuda a la seguridad general 
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

objeto.prototype.metodoQueQueramosAgregar() = function{
    //Aqui va el codigo que queramos agregar, de esta manera podremos agrega nuevos metodos, de hecho esto es mucho mejor y mas recomendable
}
/*
Metodos de las funciones
Podemos agregar metodos a las funciones, de la siguiente manera, lo que permitira que no se dupliquen estos metodos en todos, pues si solo necesitamos agregar uno o un par de metodos mas esto es lo ideal
*/


//Si tenemos un objeto de multiples caracteristicas independientes, podemos hacer una matriz de las propiedades de este objeto con el metodo .entries...

    // Object.entries 
    const data = {
        frontend: 'Juan',
        backend: 'Carlos',
        design: 'Ana',/*<<< Ahora podemos hacer uso de trailling comas, lo que permite hacer uso de esta ultima coma y que no haya errores */
    }

    //Aqui lo que hacemos es una matriz de las propiedades y valores que tiene el objeto "data"
    const entries = Object.entries(data);
    //Aqui lo imprimimos
    console.log(entries);
    
    //Aqui creamos un array que nos da como elementos las propiedades del objeto
    const key = Object.keys(data);
    //Aqui lo imprimimos
    console.log(key);

    //Aqui creamos un array que nos da los valores del objeto
    const values = Object.values(data);
    //Aqui lo imprimimos
    console.log(values);

    //Tambien podemos saber la cantidad de elementos que tiene el objeto de la siguiente manera
    const entriesL = entries.length;
    console.log(entriesL);