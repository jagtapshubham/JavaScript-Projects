const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
console.log("This",btn);
console.log(color);

btn.addEventListener("click", function () {
    //get random number between 0 - 3
    const randomNumber = 1;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
