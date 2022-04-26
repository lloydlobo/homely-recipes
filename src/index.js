import generateJokes from "./generateJokes";
import "./styles/main.scss"; /* You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders */
// add loader in webpack.config.js
// eslint-disable-next-line no-console
console.log("Gloria In Excelsis Deo!");

// eslint-disable-next-line no-console
console.log(generateJokes());

/* const newPara = document.createElement("p");
newPara.classList.add("h1");
newPara.textContent = "Gloria In Excelsis Deo!";
// add newPara to the DOM
document.body.appendChild(newPara);
 */
