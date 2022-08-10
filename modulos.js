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