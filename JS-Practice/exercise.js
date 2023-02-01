const firstButtonElement = document.querySelector("button");
const secondButtonElement = document.getElementById("change-bg-btn");

const firstParagraphElement = document.body.children[2].children[1];
console.log(firstParagraphElement);

const thirdParagraphElement = document.body.children[2].children[3];
console.log(firstParagraphElement);

function removeParagraph() {
  thirdParagraphElement.remove();
}

function changeBackgroundColor(event) {
  firstParagraphElement.style.backgroundColor = "yellow";
}

firstButtonElement.addEventListener("click", removeParagraph);
secondButtonElement.addEventListener("click", changeBackgroundColor);
