const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";


const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

const button = document.querySelector(".event-button");
button.addEventListener("click", function (){
    alert("Hey there!");
});

// const input = document.querySelector(".input-to-copy");
// const paragraph = document.querySelector(".p-to-copy");

// input.addEventListener("keyup", function () {
//   //paragraph.innerText = input.value;
//   paragraph.innerHTML = input.value;

// });


const input = document.querySelector(".color-input");
const paragraph = document.querySelector(".color-box");

input.addEventListener("change", function () {
  paragraph.style.backgroundColor = input.value;
});

// event deligation or bubbliung 
document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
  alert(`You clicked on button ${event.target.innerText}`);
});