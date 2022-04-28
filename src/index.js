// Gloria In Excelsis Deo!
// assets
import laughing from "./assets/laughing.svg";
// components
import Footer from "./components/footer";
import Navigation from "./components/navigation";
// functions
import generateJokes from "./functions/generateJokes";
import extractNutrition from "./functions/extractNutrition";
// styles
import "./styles/scss/main.scss";

console.log("Hi");
// extract nutrition
const btnNutrition = document.querySelector("#btnNutrition");

btnNutrition.addEventListener("click", extractNutrition);
extractNutrition(); // Call imported function `extractNutrition` once

// console.dir(btnNutrition);

// **** generate jokes card **** /* this can be a component */
const laughingImg = document.getElementById("laughingImg");
const btnGenerateJokes = document.getElementById("btnJoke");
laughingImg.src = laughing;

btnGenerateJokes.addEventListener("click", generateJokes);
generateJokes(); // Call imported function `generateJokes` once
// **** end of generate jokes card ****

// **** shadowDOM Custom Elements ****
// window.customElements.define("navigation-component", Navigation);
