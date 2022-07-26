let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById(`seleccionar-ataque`)
    sectionSeleccionarAtaque.style.display = `none`

    let sectionReiniciar = document.getElementById(`reiniciar`)
    sectionReiniciar.style.display = `none`

    let botonMascotaJugador = document.getElementById(`boton-mascota`);
    botonMascotaJugador.addEventListener(`click`, seleccionarMascotaJugador);    
    let botonFuego = document.getElementById(`boton-fuego`);
    botonFuego.addEventListener(`click`, ataqueFuego);
    let botonAgua = document.getElementById(`boton-agua`);
    botonAgua.addEventListener(`click`, ataqueAgua);
    let botonTierra = document.getElementById(`boton-tierra`);
    botonTierra.addEventListener(`click`, ataqueTierra);

    let botonReiniciar = document.getElementById(`boton-reiniciar`)
    botonReiniciar.addEventListener(`click`, reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById(`seleccionar-mascota`)
    sectionSeleccionarMascota.style.display = `none`

    let sectionSeleccionarAtaque = document.getElementById(`seleccionar-ataque`)
    sectionSeleccionarAtaque.style.display = `flex`
    
    let inputHipodoge = document.getElementById(`hipodoge`)
    let inputCapipepo = document.getElementById(`capipepo`)
    let inputRatigueya = document.getElementById(`ratigueya`)
    let spanMascotaJugador = document.getElementById(`mascota-jugador`);
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = `Hipodoge`
        alert(`Seleccionaste a Hipodoge`)
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = `Capipepo`
        alert(`Seleccionaste a Capipepo`)
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = `Ratigueya`
        alert(`Seleccionaste a Ratigueya`)
    }else{
        alert(`Selecciona una mascota`)
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById(`mascota-enemigo`)
    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = `Hipodoge`
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = `Capipepo`
    }else{
        spanMascotaEnemigo.innerHTML = `Ratigueya`
    }
}

function ataqueFuego(){
    ataqueJugador = `Fuego`
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = `Agua`
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = `Tierra`
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = `Fuego`
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = `Agua`
    }else{
        ataqueEnemigo = `Tierra`
    }combate()
}

function combate() {
    let spanVidasJugador = document.getElementById(`vidas-jugador`)
    let spanVidasEnemigo = document.getElementById(`vidas-enemigo`)

    if (ataqueEnemigo == ataqueJugador) {
        createMensaje(`EMPATE`)
      } else if (ataqueJugador == `Fuego` && ataqueEnemigo == `Tierra`) {
        createMensaje(`Ganaste`)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
      } else if (ataqueJugador == `Agua` && ataqueEnemigo == `Fuego`) {
        createMensaje(`Ganaste`)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
      } else if (ataqueJugador == `Tierra` && ataqueEnemigo == `Agua`) {
        createMensaje(`Ganaste`)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
      } else {
        createMensaje(`Perdiste`)
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo <= 0){
        createFinal(`Has ganado`)
        alert(`Ganaste`)
    }else if(vidasJugador<= 0){
        createFinal(`Has perdido`)
        alert(`Perdiste`)
    }
}

function createMensaje(resultado) {
    let sectionMensajes = document.getElementById(`mensajes`)
    let parrafo = document.createElement(`p`)
    parrafo.innerHTML = `Tu mascota atacó con ` + ataqueJugador + ` la mascota del enemigo atacó con ` + ataqueEnemigo + ` ` +  resultado
    sectionMensajes.appendChild(parrafo)
}

function createFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById(`mensajes`)
    let parrafo = document.createElement(`p`)
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById(`boton-fuego`);
    botonFuego.disabled = true
    let botonAgua = document.getElementById(`boton-agua`);
    botonAgua.disabled = true
    let botonTierra = document.getElementById(`boton-tierra`);
    botonTierra.disabled = true
    
    let sectionReiniciar = document.getElementById(`reiniciar`)
    sectionReiniciar.style.display = `block`
}

function reiniciarJuego() {
    location.reload()

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener(`load`, iniciarJuego)
