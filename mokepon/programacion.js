let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascota = document.getElementById(`boton-mascota`);
    botonMascota.addEventListener(`click`, seleccionarMascota);    

    let botonFuego = document.getElementById(`boton-fuego`);
    botonFuego.addEventListener(`click`, ataqueFuego);
    let botonAgua = document.getElementById(`boton-agua`);
    botonAgua.addEventListener(`click`, ataqueAgua);
    let botonTierra = document.getElementById(`boton-tierra`);
    botonTierra.addEventListener(`click`, ataqueTierra);
}

function ataqueFuego(){
     ataqueFuego = `Fuego`
     alert(ataqueJugador)
     ataqueAleatorioEnemigo()
}
function ataqueAgua(){
     ataqueAgua = `Agua`
     alert(ataqueJugador)
     ataqueAleatorioEnemigo()
}
function ataqueTierra(){
     ataqueTierra = `Tierra`
     alert(ataqueJugador)
     ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueEnemigo = aleatorio(1,3)
    if(ataqueEnemigo == 1){
        alert("Ataque de Fuego")
    }else if(ataqueEnemigo == 2){
        alert("Ataque de Agua")
    }else{
        alert("Ataque de Tierra")
    }
    createMensaje()
}

function createMensaje() {
    let sectionMensajes = document.getElementById(`mensajes`)

    let parrafo = document.createElement(`p`)
    //parrafo.innerHTML = `Tu mascota atacó con ` + ataqueJugador + ` la mascota del enemigo atacó con ` + ataqueEnemigo + ` - pendiente 🎉`    
    sectionMensajes.appendChild(parrafo)
}

function seleccionarMascota(){
    let inputHipodoge = document.getElementById(`Hipodoge`)
    let inputCapipepo = document.getElementById(`Capipepo`)
    let inputRatigueya = document.getElementById(`Ratigueya`)
    let spanMascotaJugador = document.getElementById(`mascota-jugador`)

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
    seleccionarMascota()
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

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener(`load`, iniciarJuego)
