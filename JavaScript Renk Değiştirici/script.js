const colors = ["green", "red", "rgba(140, 122, 120)", "#f1034"];

const btn = document.getElementById('btn');
const color  =document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



