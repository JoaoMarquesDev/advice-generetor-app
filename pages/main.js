const btn = document.querySelector('.icon-dice')

function teste() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        frase.textContent = data.slip.advice
        number1.textContent = data.slip.id
    })
    .catch(error => console.error(error))
}

teste()