<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu peso en un lugar donde pesas menos</title>
</head>
<body>
    <h1>Tu peso en otro planeta</h1>
    <p>En la tierra pesas distinto que en Marte o Jupiter</p>
    <script>
        let g_tierra = 9.8;
        let g_marte = 3.7;
        let g_jupiter = 24.8;
        let g_sol = 273.7;
        let g_mercurio = 3.7;
        let g_venus = 8.82;
        let g_saturno = 9.01;
        let g_urano = 8.7;
        let g_neptuno = 10.9;
        let g_pluton = 0.65;
        let g_kripton = 1234567890
        var peso_final;
        //peso_final = peso * g_marte / g_tierra;
        peso_final = parseInt(peso_final);
        let usuario = prompt("¿Cual es tu peso?");
        let peso = parseInt(usuario);
        let decision = prompt("En que planeta te gustaria saber tu peso?");
        //let planeta = parseInt(decision);

        switch(decision){
            case (decision == "Marte"):
            case (decision == "marte"):
                peso_final = peso * g_marte / g_tierra;
                break;
            case (decision == "Jupiter"):
            case (decision == "jupiter"):
                peso_final = peso * g_jupiter / g_tierra;
                break;
            case (decision == "Mercurio"):
            case (decision == "mercurio"):
                peso_final = peso * g_mercurio / g_tierra;
                break;
            case (decision == "Venus"):
            case (decision == "venus"):
                peso_final = peso * g_venus / g_tierra;
                break;
            case (decision == "Saturno"):
            case (decision == "saturno"):
                peso_final = peso * g_saturno / g_tierra;
                break;
            case (decision == "Urano"):
            case (decision == "urano"):
                peso_final = peso * g_urano / g_tierra;
                break;
            case (decision == "Neptuno"):
            case (decision == "neptuno"):
                peso_final = peso * g_neptuno / g_tierra;
                break
            case (decision == "Pluton"):
            case (decision == "pluton"):
                peso_final = peso * g_pluton / g_tierra;
                break;
            case (decision == "Sol"):
            case (decision == "sol"):
                peso_final = peso * g_sol / g_tierra;
                break;
            default:
                peso_final = peso * 1234567890 / g_tierra;
        }

        if(decision === "Sol" || "sol"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Pluton" || "pluton"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Neptuno" || "neptuno"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Urano" || "urano"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Saturno" || "saturno"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Venus" || "venus"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Mercurio" || "mercurio"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Jupiter" || "jupiter"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else if(decision === "Marte" || "marte"){
            document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
        }else{
            document.write("Error en tu peso final " + peso_final + " Kg</strong>");
        }
        //document.write("Tu peso en " + decision + " es <strong>" + peso_final + " Kg</strong>");
    </script>
</body>
</html>