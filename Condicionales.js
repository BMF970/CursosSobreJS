
var edad = 18;
console.

if(edad === 18){
console.log ("Puedes votar, Esta sera tu 1era votacion");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}

//Condicional tryCatch este sirve para ejecutar un codigo y en caso de que ocurra un error este ejecutara otro bloque de codigo, por ejemplo

try {
    
} catch (error /*Esto es opcional, siempre y cuando en el bloque de codigo de abajo ejecutemos error(), si pasamos otro parametro es necesario colocarlo */) {
    //asi deberia de quedar...
    error
}

/*Condicional ternario
El condicional ternario es un if...else, pero escrito de otra manera, lo podemos usar para ahorrar codigo si el if/else es muy corto, y este se escribe asi...
*/
    
    (/*Algo*/)?/*Hacer algo, esta parte es el "if"*/:/*Hacer algo si lo anterior no se realizo, esta parte es el "else" */;
    
    //Tambien podemos colocarlo asi para poder organizarnos mejor
    
    (/*Algo*/)
    ?/*Hacer algo, esta parte es el "if"*/
    :/*Hacer algo si lo anterior no se realizo, esta parte es el "else" */

    (/*Aqui ponemos lo que queremos validar*/true)
        ?/*Aqui ponemos lo que pasara si la parte de arriba es verdadera*/console.log(`Hola mundo`)
        :/*Esta parte es el "else" de la condicional ternaria*/
        console.log(`Hola...`)