// seleziono l'elemento lampadina
const lampadina = document.getElementById("lampadina");

// seleziono l'elemento bottone
const bottone = document.querySelector("button");

// cambio l'immagine della lampadina al click sul pulsante
bottone.addEventListener("click", function () {
    lampadina.src = "./img/yellow_lamp.png"
})