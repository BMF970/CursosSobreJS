    //Los modulos son archivos que podemos exportar e importar par mantener separados las clases y/o calquier cosa, pues podemos hacer lo siguiente...

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //Con esta linea se marca la exportacion del arcivo

    /*Esta es la ultima version en nodejs, si no sirve usar la de abajo, la "vieja sintaxis"
        export default aleatorio;
    */

    module.exports = aleatorio

    //Y con esta linea marcamos la importacion del archivo, la tenemos que poner en el archivo que queramos usar y con la ruta de este archivo por ejemplo...

    //Nueva sintaxis: import {aleatorio} from ./modulos
    //Vieja sintaxis: const aleatorio = require(`./modulos`)

//Importacion y exportacion dinamica...
    /*Por ejemplo si tenemos un boton en HTML y le tenemos que agregar una funcion y/o hacer una accion con este podriamos usar la importacion dinamica, y esta seria algo asi...*/
    
    //Creamos un queryS para agregarlo
    const button = document.querySelector(".claseDelBoton");

    button.addEventListener(`click` async function() {
        const nombreDeVariable = await import(`./carpeta(s)/archivo`);
        nombreDeVariable.nombreDeLaFuncion/*De el archivo a importar*/();
    });

    //De esta manera podemos separar codigo para evitar 

