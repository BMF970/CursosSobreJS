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
}
function ataqueAgua(){
     ataqueAgua = `Agua`
     alert(ataqueJugador)
}
function ataqueTierra(){
     ataqueTierra = `Tierra`
     alert(ataqueJugador)
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
