const buttonToDraw = document.querySelector(".button-to-draw")
const finalResult = document.getElementById("final-result")

function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-alternative").value)
    const max = Math.floor(document.querySelector(".input-alternative-2").value)

    if (min >= max) {
        finalResult.innerHTML = "O valor mínimo tem que ser MENOR que o valor MÁXIMO!"

    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        finalResult.innerHTML = result

    }

}

buttonToDraw.addEventListener("click", generateNumber)
