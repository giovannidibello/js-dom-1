// seleziono l'elemento lampadina
const lampadina = document.getElementById("lampadina");

// seleziono l'elemento bottone
const bottone = document.querySelector("button");

// cambio l'immagine della lampadina al click sul pulsante
bottone.addEventListener("click", function () {
    
    // controllo se il testo del bottone include ACCENDI
    const isOn = bottone.innerHTML.includes("ACCENDI");

    // se è vero accendo la lampadina e scrivo spegni altrimenti il contrario
    if (isOn) {
        bottone.innerHTML = "SPEGNI"
        lampadina.src = "./img/yellow_lamp.png"
    } else {
        bottone.innerHTML = "ACCENDI"
        lampadina.src = "./img/white_lamp.png"
    }
})