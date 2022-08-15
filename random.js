//Invertir la cadena de texto de la variable palabra e imprimirla
let palabra = `pato`;
let palabraInvertida = ``;

//Primer metodo
    for (let i = palabra.length - 1; i >= 0; i--) {
        /*console.log(*/palabraInvertida += palabra[i]//);        
    }
    console.log(palabraInvertida);

//Segundo metodo
    palabra.
    for (const letra of palabra) {
        console.log(letra)
    }


//Cuantas veces se repite un caracter check

    let cadena = `faewfnrnnafkfaldskfnaweifoiwpe4afaldskfnmfaloifniewaedgnñegnañngañgjknaw`;
    let letraABuscar = `f`;
    //let cantidadDeLetras= 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === `f`) {
            cantidadDeLetras++
        }
    }
    console.log(cantidadDeLetras);

    //Resuelto y agregandolo ya con funcion lista para usarse

    function contarLetrasRepetidas(texto, letra){
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === letra) {
                cantidadDeLetras++
            }
        }
        return console.log(cantidadDeLetras);
    }
    let cantidadDeLetras= 0;
    let lorem15 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae cum laborum suscipit eum blanditiis natus earum autem? Tempore eveniet illo sed quos quia autem doloribus et. Adipisci, est cupiditate?
        Error voluptatum magni vel perspiciatis labore soluta delectus, laboriosam exercitationem veniam neque illo at? Quod tempora quo soluta? Temporibus labore, doloremque nesciunt molestiae voluptatem id animi optio cumque reiciendis voluptatum.
        Ex ullam asperiores, recusandae similique, harum, cum hic quae obcaecati optio accusamus animi blanditiis mollitia sint dolores at aperiam rerum vitae nisi est maxime atque porro non labore officia? Ipsa!
        Porro nobis earum sunt quam corrupti, tempore consequatur doloribus, cum, doloremque excepturi magnam non! Qui aut necessitatibus adipisci, porro architecto repudiandae, dolorum accusamus ipsa incidunt, reprehenderit commodi? Magnam, accusantium nesciunt.
        Perspiciatis distinctio nesciunt aperiam cupiditate voluptate possimus ex quis fuga consequatur, rerum vel, culpa quibusdam aliquam porro ipsum minima suscipit ratione itaque eaque consectetur iure. Omnis possimus illo architecto esse.
        Suscipit asperiores harum quo nisi ad omnis fuga temporibus veritatis sit consequuntur quod, illum dignissimos? Quasi maiores autem ullam officiis aliquid nemo dolores, reiciendis eveniet ex similique vitae praesentium cum?
        Doloribus eos aspernatur fugiat tenetur sunt repellendus odit assumenda, incidunt, nam, optio perspiciatis? Veritatis dolorem quidem aspernatur temporibus doloremque facere aliquam tempore, est, ipsum velit vero, voluptas earum dolor nobis.
        Debitis reprehenderit delectus, fuga porro possimus odit beatae nesciunt corrupti necessitatibus sed facilis eaque voluptatem cumque accusantium atque molestiae ipsam repudiandae voluptate eos. Blanditiis vitae libero a quo assumenda illum.
        Omnis voluptatem enim nostrum repellendus amet deleniti similique praesentium veritatis dolorum voluptates sint, reprehenderit id libero quod rerum est optio adipisci consequuntur facilis soluta quaerat consectetur quisquam accusamus? Molestias, totam.
        Alias, suscipit, dolore excepturi dignissimos repellendus quae obcaecati harum eaque sapiente veniam magnam debitis quam ea voluptatibus? Facere similique iste, velit, necessitatibus corrupti enim ut dolorem, quasi qui sint et?
        Eveniet earum dicta enim modi, ab nam sequi quia dolores ipsam ipsum alias reprehenderit hic! Cum quisquam maiores debitis perspiciatis soluta fugiat distinctio expedita provident recusandae magni, voluptate eos rerum.
        Similique labore provident explicabo laboriosam corrupti odio, amet numquam cupiditate doloremque tempora accusamus eos reiciendis accusantium hic nihil. Possimus blanditiis dolorum quaerat tempore sequi error cum officia officiis, a autem!
        Expedita possimus sed eius tenetur fuga, repellat quo sapiente ut, delectus molestiae voluptates minima dolorum placeat dolore hic provident perferendis nemo aut velit accusantium ab repellendus sequi. Cumque, accusamus porro.
        Unde veniam harum quis praesentium iste deleniti molestias ea nostrum, voluptatem magnam illum placeat dolor ullam hic tempore doloribus nisi nam dolore soluta libero incidunt vitae cumque eveniet adipisci. Possimus.
        Assumenda soluta qui quae dolorem veniam, aliquam ratione tempora modi quasi dignissimos reiciendis facilis recusandae, alias voluptatibus natus tenetur vero quidem pariatur nobis aliquid laborum odio non. Nemo, adipisci ab.`;
    
    //contarLetrasRepetidas(lorem15, `a`);

    let letrasFiltradas = lorem15.filter(
            function (letra){
                lorem15[i] === letra
                letra++
                return letra
            }
    );
//Reto de distancia de hamming cumplido

        let text1 = `patitosw`;
        let text2 = `paratosa`;

        function longitudDePalabras(cadena1, cadena2){
            let letraDiferente = 0;
            if (cadena1.length == cadena2.length) {
                console.log(`Tienen la misma cantidad de letras`)
                //return true
            } else {
                console.log(`Son de diferente tamaño`)
                return false
            }
            for (let i = 0; i < cadena1.length; i++) {
                if (cadena1[i] === cadena2[i]) {
                    console.log(`Letra igual ${cadena1[i]}`)

                }else{
                    letraDiferente++ 
                    console.log(`Letra diferente ${cadena2[i]}`)
                }
            }
            console.log(`1er Palabra: ${cadena1}\n2da Palabra: ${cadena2}\nTotal de letras diferentes ${letraDiferente}`)
        }
        longitudDePalabras(text1, text2);
    

let lorem10 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam distinctio assumenda id neque? Non fugiat atque rem, quam earum molestias neque aut maxime odio reprehenderit sequi dicta, ad omnis?
    Odit odio et repellendus mollitia velit deleniti tenetur temporibus voluptatum sit sunt praesentium obcaecati quibusdam ex beatae iste dolorem vitae veniam enim, animi alias tempore natus perferendis assumenda! Eos, perferendis.
    Perspiciatis dolorum voluptas maiores at dolore magnam dolores iure exercitationem! Voluptas, sint earum minima totam sequi corporis cumque voluptatibus architecto dolorum vitae, voluptates libero vel omnis at repellendus quod exercitationem!
    Nihil saepe alias et possimus vero neque optio. Ad aliquam minima itaque voluptas! Assumenda consequuntur eaque optio temporibus tempora, dolore magni facere doloribus numquam exercitationem eligendi sunt autem et vero!
    Nobis provident non quas libero molestias labore assumenda. Pariatur velit rem excepturi magnam eius, incidunt saepe. Rerum sint alias, at voluptates, assumenda praesentium culpa eaque a quibusdam illum dicta? A.
    Tenetur minus voluptatum molestias ipsum laudantium et quis aspernatur distinctio iure labore! Illum numquam, in consectetur adipisci magnam culpa, corporis recusandae, atque quo itaque at expedita ipsum ullam blanditiis eaque.
    Corrupti ad ut dolorem qui adipisci minus illo quae ratione eligendi ab quam voluptas atque, voluptatum vero tenetur sed, reiciendis possimus odio recusandae? Repudiandae iusto inventore commodi distinctio debitis voluptatem?
    Voluptates esse, vero commodi, nostrum praesentium est hic neque accusamus iusto laudantium voluptatum sint! Repellendus consectetur asperiores obcaecati expedita saepe accusantium? Eum saepe omnis in nesciunt, repudiandae adipisci? Culpa, dolor!
    Tempora aperiam assumenda inventore fuga deleniti voluptas, incidunt, asperiores unde debitis distinctio, sint ut accusamus cumque fugit quae aspernatur quod aliquid quo iste nostrum rerum tempore placeat. Quae, amet necessitatibus.
    Saepe maxime iusto, reiciendis labore dolor consequatur. Eum quidem maxime aut suscipit, quam, at optio rerum architecto, voluptatum neque fugiat! Vero assumenda voluptates porro ipsa veniam pariatur doloribus magnam at.`
let frase = `        cinco  palabras son estas eh     `
let purosEspacios = `                  `
    function contarPalabras(cadenaDeTex){
        let palabras = 1;
        let cadenaDeText = cadenaDeTex.trimStart(); let cadenaDeTexto = cadenaDeText.trimEnd();
        if (cadenaDeTexto.length > 0) {
            for (let i = 0; i < cadenaDeTexto.length; i++) {
                if (cadenaDeTexto[i] == ` `/** && cadenaDeTexto[i] != `  `*/) {
                    palabras++ 
                }
            }
        }else{
            return console.log(`Ingresa un texto con palabras`)
        }
        return console.log(`Cantidad de palabras totales ${palabras}`)
    }
contarPalabras(lorem10);    contarPalabras(frase);  contarPalabras(purosEspacios);