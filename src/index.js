import laughing from "./assets/laughing.svg";
import generateJokes from "./generateJokes";
import "./styles/main.scss";

// console.log("Gloria In Excelsis Deo!");

const laughingImg = document.getElementById("laughingImg");
const btnGenerateJokes = document.getElementById("btnJoke");

laughingImg.src = laughing;
btnGenerateJokes.addEventListener("click", generateJokes);

// Call imported function `generateJokes` once from "./generateJokes.js"
generateJokes();
