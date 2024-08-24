const trocaCor = document.querySelector("#mudarCor");
const body = document.querySelector("body");

trocaCor.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
})