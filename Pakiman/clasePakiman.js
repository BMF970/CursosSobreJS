/*Por que este archivo? Principalmente para ser mas profesional y mejores practicas, solamente hay que recordar
que tenemos que insertarlo antes de el archivo programacionPakiman.js, por que ese archivo usa este objeto*/
class Pakiman//Este objeto es la plantilla para crear pakimanes
{
    constructor(n, h, a)//aqui ponemos las iniciales de los atributos basicos de los pakimanes
    {
    this.image = new Image();//esto es para agregar la imagen
    this.name = n;//atributos basicos
    this.health = h;
    this.atack = a;
    this.image.src = images[this.name];/*Este en particular es para colocar la imagen
    aqui arriba ^ es la ubicacion, ^ y esto redirecciona el archivo al nombre, pues 
    cada vez que mandemos traer el nombre la imagen aparecera*/}
    hablar()
    {
        alert(this.name);//funcion que podemos traer para emular como habla el pakiman
    }

    show(){//Esta otro atributo esta enfocado para poner la informacion del animal
        document./*        */body./*                           */appendChild/*                                     */(this.image);/*Este metodo es para insertar la imagen, pues necesita un metodo especial para colocar una imagen
        ^ parte de la pagina, ^ especificamos el body (importante), ^ metodo enfocado en crear una especie nueva en html, ^ colocamos el nombre gracias al array asociativo que nos traera la imagen cuando mandemos traer el nombre*/
        document.write("<br/><strong>" + this.name + "</strong><br/>");//Agregamos el nombre
        document.write("Health: " + this.health + "<br/>");//Agregamos la vida/salud
        document.write("atack: " + this.atack + "<hr/>");//Agregamos el ataque
    }//                                            ^ esta madre sirve para poner la linea y crear un salto de linea para evitar que se empalme la informacion
}