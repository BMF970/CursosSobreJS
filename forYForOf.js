/*El ciclo for contine 3 bloques */
for(Inicializacion; Condicion; Actualizacion);

//Un ejemplo muy basico seria asi...
for(i=0; i<=10; i++){
    console.log([i]);
}
//Imprimira una variable 10 veces y cada vaz que la imprima se le aumentara en 1
for(i=0/*Aqui "i" iniciara en 0*/; i<=10/*Aqui se definio cuantas veces se imprimira la variable i, dependiendo de hasta cuanto va a llegar */; i++/*Aqui cada vez que "i" se imprima, i se le aumentara 1*/){
    console.log([i]);//Ponemos [] para imprimir i, y listo
}

for(int i = 10; i >= 1; i--){
    for(int j = 10; j >= 1; j--){
        console.log(i + "X" + j + "=" + i*j);
    }
}

//Existen otros 3 tipos de for que se pueden utilizar para diferentes cosas, por ejemplo...
    //Foreach/ For each, lo que hace este for es recorrer cada elemento de aquello que ocupemos, arreglo, matriz etc,

        let x =[
            `palabra`,
            `palabra2`,
            `palabra3`,
            `palabra4`,
            `palabra5`
        ]

    /* x = el arreglo, matriz, etc que queramos recorrer, */

        x.forEach(element => {
            console.log(element)
        });

    //Forin/ For in


    //Forof/ For of

    for (const iterator of object) {
        
    }