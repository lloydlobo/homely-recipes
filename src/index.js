import laughing from "./assets/laughing.svg";
import generateJokes from "./generateJokes";
import "./styles/main.scss"; /* You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders */

// eslint-disable-next-line no-console
// console.log("Gloria In Excelsis Deo!");

// add loader in webpack.config.js
// add a img id element in template.html
const laughingImg = document.getElementById("laughingImg");
laughingImg.src = laughing;

const btnGenerateJokes = document.getElementById("btnJoke");
btnGenerateJokes.addEventListener("click", generateJokes);

// Call imported function `generateJokes` once from "./generateJokes.js"
generateJokes();
