function iniciarJuego(){
    let botonMascota = document.getElementById(`boton-mascota`);
    botonMascota.addEventListener(`click`, seleccionarMascota);     
}

function seleccionarMascota(){
    let inputHipodoge = document.getElementById(`hipodoge`)
    let inputCapipepo = document.getElementById(`capipepo`)
    let inputRatigueya = document.getElementById(`ratigueya`)
    let spanMascotaJugador = document.getElementById(`mascota-jugador`)

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
        alert(`Seleccionaste a Hipodoge`)
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
        alert(`Seleccionaste a Capipepo`)
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = `Ratigueya`
        alert(`Seleccionaste a Ratigueya`)
    }else{
        alert(`Selecciona una mascota`)
    }
}

window.addEventListener(`load`, iniciarJuego)
