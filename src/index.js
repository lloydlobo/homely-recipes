// Gloria In Excelsis Deo!
// styles
import "./styles/scss/main.scss";
// assets
import laughing from "./assets/laughing.svg";
// components
import Footer from "./components/partials/footer";
import Navigation from "./components/partials/navigation";
// functions
import extractNutrition from "./functions/extractNutrition";
// eslint-disable-next-line no-unused-vars
import generateJokes from "./functions/generateJokes";

// eslint-disable-next-line no-console
console.log("Gloria In Ecelsis Deo!");
const laughingImg = document.getElementById("laughingImg");

const btnNutrition = document.getElementById("btnNutrition");
laughingImg.src = laughing;

// extract nutrition
// const querySelector = document.getElementById("inputUserQueryNutrition");
/**
 * @param  {} "click"
 * @param  {} (
 * @param  {} =>{extractNutrition(
 * @param  {} ;}
 */
btnNutrition.addEventListener("click", () => {
  extractNutrition();
});

// extractNutrition();

const btnGenerateJokes = document.getElementById("btnJoke");
// // generate jokes card
btnGenerateJokes.addEventListener("click", () => {
  generateJokes();
});
generateJokes(); // Call imported function `generateJokes` once

// **** shadowDOM Custom Elements ****
window.customElements.define("navigation-component", Navigation);
window.customElements.define("footer-component", Footer);
