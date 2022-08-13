# CursosSobreJS
Objetos

    window
    document
    console

Atributos

    window.location;
    document.anchors;
    console.backgroundColor;

Métodos
    window.esteEsUnMetodo();
    window.addEventListener();
    document.write(“Este método recibe un parámetro de tipo String”)
    console.count();

Cuando queremos llamar un atributo o un método de un objeto, lo que debemos hacer es:

    Llamar al objeto al cual quieres acceder a su información.
    document

    Poner un punto inmediatamente después del nombre del objeto. (En algunos programas de desarrollo web, te muestra una lista con todos los atributos y métodos que tiene el objeto en donde puedes buscar lo que necesitas).
    document**.**

    Llamar el atributo o método al qu quieres acceder.
    document.write();

    Si llamas a un método que recibe un parámetro, debes colocarlo entre los paréntesis.
    document.write("Este es el atributo que recibe como parámetro");

Recuerda:

    Las únicas etiquetas que deben ir a la misma altura de la etiqueta html son head y body.

    window.location  devuelve la ruta de la página

    Para agregar soporte a tildes y letras especiales puedes usar <meta charset=“utf-8”> dentro de head

    Cuándo quieres depurar un programa puedes usar console.log para ver mensajes en la consola

Una clase nos permite definir una colección de objetos permitiendo que estos posean los mismos atributos y métodos.

Qué es la importación dinámica

La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos.