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

Qué es el asincronismo 2/21 🤹🏾‍♂️
.
✍🏾 Conceptos importantes para entender el asincronismo:
.
• 🧵 Thread: Thread para Javascript permite realizar programación multihilos en este entorno. En realidad, simula la creación y ejecución de hilos, pero para el desarrollador es lo mismo. Ésto simplifica muchísimo la creación de aplicaciones Javascript.
• 🚫 Bloqueante: Una llamada u operación bloqueante no devuelve el control a la aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.
• 🚿 No bloqueante: Una tarea no bloqueante se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.
• 🎞️ Síncrono: Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.
• 🚦 Asíncrono: Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido. La finalización de la operación I/O (entrada/salida) se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.
• 🛤️ Paralelismo: El paralelismo es la ejecución simultánea de dos o más tareas. Algunas tareas se pueden dividir en partes más pequeñas que pueden ser resueltas simultáneamente.
• 🎮 Concurrencia: La concurrencia es la capacidad de un algoritmo o programa para ejecutar más de una tarea a la vez. El concepto es similar al procesamiento paralelo, pero con la posibilidad de que muchos trabajos independientes hagan diferentes cosas a la vez en lugar de ejecutar el mismo trabajo.
• 🌀 Eventloop o Loop de eventos: El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.
.
📝 Formas de manejar la asincronía en JavaScript:
.
• 📩 Callbacks: Una función que se pasa como argumento de otra función y que será invocada.
• 🫱🏼‍🫲🏾 Promesas: (implementado en ES6) Una promesa es una función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.
• 🛣️ Async / Await: (implementado en ES2017) Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.
.
📌 En JavaScript casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como asíncronismo. Lo único que no es procesado antes de que termine la operación son los callbacks, ya que éstos están amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.
.
⏳ El asincronismo es una manera de aprovechar el tiempo y los recursos de la aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.
.
⏲️ Un ejemplo fácil de asincronismo vs sincronismo es invitar a unos amigos a una fiesta y ofrecer una parrillada. Primero decides colocar la carne y verduras a la parrilla y luego repartir bebidas y algo para picar (snacks). Si fuera una persona síncrona (Blocking) tendrías que esperar a que la comida de la parrilla esté cocinada y luego atender a los invitados. Pero si fuera una persona asíncrona (Non Blocking) luego de poner la carne al carbón, sacas las bebidas frías de la nevera y compartes con los invitados mientras se cocina la carne. La acción de que la comida en la parrillada esté lista sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos (como compartir la velada con bebidas y algo de picar) ya podrían irse realizando.
.-.-.-.-.-.-.-.-DOM.-.-.-.-.-.-.-.-.-.
Las propiedades de los elementos serán aquellas que mayormente se modificarán.
La diferencia entre un atributo y una propiedad es que el atributo para iniciar el HTML y DOM, son constantes mientras que las propiedades vienen del DOM y se pueden ir cambiando