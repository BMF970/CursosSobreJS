/*
Básicamente tenemos 4 formas de leer nodos con JS:

    ·parent.getElementById(‘id’) => nos permite obtener un elemento a través de su id.

    ·parent.getElementsByClassName(‘class’) => obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

    ·parent.getElementsByTagName(‘div’) => con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements
    
    ·parent.querySelector() => nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => (’#id’), class => (’.class’), tagName (‘div’)
    
    ·parent.querySelectorAll() => este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName), es necesario colocar como si fuera css, osea si es clase poner ".nombreDeLaClase", si es ID poner ".nombreDelID", etc

    Casi siempre el elemento “padre o parent” es document. ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores.
    ejemplo = const button = document.querySelector(’#button)

*/
/*
    Crear != agregar.
    funciona masomenos como las variables o las funciones, si no las usamos o las mandamos llamar no van a hacer nada pues estan creadas pero no hemos hecho nada con ellas
    Para crear elementos necesitamos el siguiente codigo document.CreateElement, por ejemplo...
*/

    document.createElement("div"/*Aqui podemos agregar una etiqueta*/);

/*  
    Para la creacion de texto usamos document.createTextNode 
*/
    
    document.createTextNode("Texto de prueba");

/*
    Para la agregacion de noos usamos 4 metodos fundamentales para el DOM, estos son
        ·document. / parentElement.appendChild
        ·document. / parentElement.append
        ·document. / parentElement.insertBefore
        ·document. / parentElement.insertAdjacentElement

    parentElement == al lugar donde queremos que agregue las cosas, por ejemplo...

*/

    const texto = document.createTextNode(`Aqui va un texto`);
    div.apendChild(texto)

//obviamente si ya hay un div creado o podriamos crearlo y ponerle una clase y pasarle la clase en vez de poner div o un ID etc; Ejecutar en about:blank para el ejemplos

        const crearP = document.createElement("p");
        const textoDePrueba = document.createTextNode("p de prueba");
        document.body.appendChild(crearP);
        crearP.appendChild(textoDePrueba);

//Existen otras formas de agregar nodos:

    node.outerHTML/*:Sirve para leer HTML para leer HTML*/
    node.innerHTML/*:Sirve para escribir HTML*/

/*
PEEEEEEERO, tienen un problema de seguridad el problema con estas formas de inserciones es que permiten la inserción XSS, es decir, código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, imagina que cada que un usuario llegue a tu página le salga un alert… ¡Sería catastrófico! Siempre sanitiza (remover caracteres especiales) los inputs de tus usuarios, se podrian usar de la siguiente manera...
*/




//Una de las formas de convertirlos a array es la vista en la clase:

    const nodeListAsArray = [...nombreDelNodeList]
    
//Sin embargo, otra forma es
    
    const nodeListArray = Array.from(nombreDelNodeList)
    