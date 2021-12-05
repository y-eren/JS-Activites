const hexColors = ["0", "1" ,"2 ", "3", "4", "5", "6","7", "8", "9", "0", "A",  "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hex = "#";
for(i= 0; i < 6; i++) {
    hex += hexColors[getNumber()];
}
color.textContent = hex;
document.body.style.backgroundColor = hex;

});

function getNumber() {
    return Math.floor(Math.random() * hexColors.length);
}