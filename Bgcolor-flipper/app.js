const button = document.querySelector(".btn");
const color = document.querySelector(".color");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const BgColourChanger = () => {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[randomColour()];
  }
  color.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
};

let randomColour = () => {
  return Math.floor(Math.random() * hex.length);
};
button.addEventListener("click", BgColourChanger);
