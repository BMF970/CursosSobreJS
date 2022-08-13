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

    //Resuelto y agregandolo ya con funcion lista
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
    
    contarLetrasRepetidas(lorem15, `a`);

    