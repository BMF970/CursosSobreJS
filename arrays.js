//Asi se crea un array...
//Se recomienda crear nombres mas intuitivos en las variables para buenas practicas
    let /*<--Palabra    let, nombre del array -->*/ nombreDelArray = [/*Aqui se ponen los datos: String, Integer, Arrays, etc*/]; /*<--Corchetes que representan los array y un ;*/

/*Con el metodo .length podemos ver cuantos elementos tiene el array, si es que nosotros no lo creamos
(obvio necesitaremos un console.log para imprimir el dato)*/
    console.log(nombreDelArray.length);

/*Con el metodo .push agregaremos un nuevo elemento 
solo que se agregara hasta el final*/
    let nuevoElementoDenombreDelArray = nombreDelArray.push("String", 4, [] /*Etc*/);

/*Con el metodo .pop quitaremos un elemento del array */
    let nombreDeVariableRandom = nombreDelArray.pop(/*Aqui pondremos el numero del elemento, o si sabemos los elementos podriamos poner el string exacto*/);

/*Con el metodo .unshift agregaremos un elemento al array y este
 se colocara en el primer lugar osea 0*/
    let colocarObjetoAlInicio = nombreDelArray.unshift(/*Colocar el elemento*/);

/*Con el metodo .shift eliminaremos el primer elemento del array */
    let quitarPrimerElemento = nombreDelArray.shift(/*Aqui se puede poner en blanco, ya que no se necesita poner nada en especifico*/);

/*Con el metodo .indexof podremos conocer la posicion de un elemento en especifico en un array*/
    let posicionDelElemento = nombreDelArray.indexOf(/*Aqui colocar el elemento*/);

//con el metodo .includes podremos conocer y verificar si se encuentra una letra o un elemento en un array
    let elementoABuscar = nombreDelArray.includes(/*Aqui ponemos el valor que queremos buscar */)

//Con el metodo .flat podremos devolver una matriz con una submatriz aplanada, basicamente como esta estructurada la matriz

    let array = [1,2,3, [1,2,3, [1,2,3]]];
    let submatriz = array.flat(0/*Toma como argumento la cantidad de niveles que queremos ver, si ponemos 0 nos pondra los corchetes y todo*/);
    console.log(submatriz)

/*Solo necesitamos poner el nombre del array para poder imprimir este*/
    nombreDelArray

//Ejemplo de array con Strings
    let frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Mango"];

//En el siguiente bloque de codigo podemos crear un objeto a partir de un array de arrays
    let entries = [["name", "oscar"], ["age", 32]];
    console.log(Object.fromEntries(entries));



//Metodos de recorridos de Arrays
/*Podemos crear arrays con objetos como...*/
    let articulos = [
        { nombre: "Bici", costo: 3000},
        { nombre: "Tv", costo: 2500},
        { nombre: "Libro", costo: 320},
        { nombre: "Celular", costo: 10000},
        { nombre: "Laptop", costo: 20000},
        { nombre: "Teclado", costo: 500},
        { nombre: "Audifonos", costo: 1700},
    ];

//Con esta formula podemos crear un nuevo array y filtrar ciertos objetos, en este caso seria por precio
    let articulosFiltrados = articulos.filter(function(articulo){return articulo.costo <= 500;});
//Y con esta formula podemos crear un nuevo array que nos diga el nombre de todos los objetos
    let nombreArticulos = articulos.map(function(articulo){return articulo.nombre});

/*La formula es asi */
    let filtradoDeObjetos = articulos.filter(function(objeto){
    return objeto.propiedad = /*| = | <= | => | != */ propiedad
    })

    let encuentraArticulo = articulos.find(function(articulo){return articulo.nombre === "Laptop"});

    articulos.forEach(function(articulo){console.log(articulo.nombre);});   