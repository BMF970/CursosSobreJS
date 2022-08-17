/*
Básicamente tenemos 4 formas de leer nodos con JS:

    ·parent.getElementById(‘id’) => nos permite obtener un elemento a través de su id.

    ·parent.getElementsByClassName(‘class’) => obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

    ·parent.getElementsByTagName(‘div’) => con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements
    
    ·parent.querySelector() => nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => (’#id’), class => (’.class’), tagName (‘div’)
    
    ·parent.querySelectorAll()[Aqui va el numero que usaremos] => este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName), es necesario colocar como si fuera css, osea si es clase poner ".nombreDeLaClase", si es ID poner ".nombreDelID", etc

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

/*
Eliminacion de nodos
Para la agregacion de noos usamos 2 metodos fundamentales para el DOM, estos son...
    ·parentElement.removeChild()
    ·document.remove()<<< Hay que usar este, es mas sencillo rapido y menos revoltoso
Y hay un tercero que no elimina pero se puede implementar para algo parecido...
    ·document.replaceChild()
Ejemplos...
*/

/*
    ·parentElement.removeChild: Necesitamos una referencia y un nodo a eliminar, Referencia === padre directo.
    Por ejemplo: si hay un...
        <body>
            <div>
                <h1>Aprendiendo programacion con el lenguaje JS</h1>
                <p>Cuantas lineas quieres?</p>
                <input type="text" id="texto_lineas"/>
                <input type="button" value="A darle!" id="boton"/>
                <input type="button" value="Reset" id="botonReset"/><br><br>
                <canvas width="500" height="500" id="dibujo"></canvas>
                <script src="script.js"></script>
            <div>
        </body>
    y queremos eliminar el <h1> o el <p> la referencia(padre) seria div, y no el padre pues aunque <body> es padre no es el padre directo, podriamos guardar en una variable el padre directo (div), al nodo a eliminar y expresarlo asi...
*/
    const nodoToRemove = "<h1>Aprendiendo programacion con el lenguaje JS</h1>"; /*Usar el hack $0 para almacenar mas rapido(sin tener que usar el gEB o sQ)*/
    const fatherReference = "<div>...</div>";
    fatherReference.removeChild(nodoToRemove);
/*
sC === .selectQuery(All)[];
gEB === getElementBy...;
El tip de el tab + $0, es igual a guardar en una variable el nodo con un querySelector o GEBI o GEBC, siguiendo el ejemplo del codigo del archivo random.html seria...
*/
    const nodoCanvas = document.querySelectorAll(`#dibujo`);
    nodoCanvas;
/*
Para usar el .remove(), es mas simple, simplemente nos aseguramos de obtener la referencia y ponemos .remove() 
*/
    const crearDiv = document.createElement("div");
    const crearH1 = document.createElement("h1");
    const crearP = document.createElement("p");
    const textoDePrueba = document.createTextNode("p de prueba");
    document.body.append(crearDiv);
    crearDiv.append(crearH1);
    crearDiv.append(crearP);
    crearP.append(textoDePrueba);
    crearH1.append(textoDePrueba);

    //Comprobar aqui que se haya creado todo correctamente y luego borramos con...
    
    crearH1.remove()
//      ^   Aqui pondremos el elemento/nodo que querramos eliminar, pues si ponemos crearDiv.remove() se eliminara todo alv, incluyendo el h1 y el p

//Una de las formas de convertirlos a array es la vista en la clase:

    const nodeListAsArray = [...nombreDelNodeList]
    
//Sin embargo, otra forma es
    
    const nodeListArray = Array.from(nombreDelNodeList)
    
    function creacion(tipo, cantidad/*referencia*/){
        if(tipo === "div" && cantidad > 0){
            for (let i = 0; i === cantidad; i++) {
                const crearDiv = document.createElement("div");
                document.body.append(crearDiv);
            }  
        }else{
            for (let i = 0; i === cantidad; i++) {
                const crearP = document.createElement("p");
                document.body.append(crearP);
            }
        }
    }
    function crear(x, cantidad){
        if (x ==  && cantidad > 0) {
            const crearDiv = document.createElement("div");
            document.body.append(crearDiv);
        } else {
            const crearP = document.createElement("p");
            document.body.append(crearP);
        }
    }
        /*for (let i = 0; i === cantidad; i++) {
            switch (tipo) {
                case tipo === `div`:
                    const crearDiv = document.createElement("div");
                    document.body.append(crearDiv);
                    break;
            default:
                    const crearP = document.createElement("p");
                    document.body.append(crearP);
                    break;
        }  
        }*/
    }