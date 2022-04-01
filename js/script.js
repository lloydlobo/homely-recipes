// * Autocomplete Search
// this could be the result of an API
const searchable = [
  "Apple",
  "Avocado",
  "Banana",
  "Orange",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Grape",
  "Peach",
  "Cherry",
  "Mango",
  "Pineapple",
  "Kiwi",
  "Coconut",
  "Papaya",
  "Pear",
  "Plum",
  "Apricot",
  "Lemon",
  "Lime",
  "Grapefruit",
  "Watermelon",
];

const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

// add event listener for search input events
searchInput.addEventListener("keyup", () => {
  // // console.log(e.target.value);
  // filter through our searchable variable's itemListElement
  const inputValue = searchInput.value;

  // check the length of the input
  // console.log(inputValue.length);
  if (inputValue.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(inputValue.toLowerCase());
    });
  }
  // renderResults of results
  renderResults(results);
});

// renders the results
function renderResults(results) {
  // if there is no items or no results.length - remove the class .show
  if (!results.length) {
    return searchWrapper.classList.remove("show");
  }

  // when there are results, loop over results with callback funtion map of item
  const content = results
    .map((item) => {
      return `<li><a href="">${item}</a></li>`;
      // return `<li><a href="">${item.name}</a></li>`;
    })
    .join(""); /* join this on a string */
  // console.log(content);/* pass the console.log inside the function -- it grabs the results if there is length -- loops over the results and pass it through a map function */
  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

// //
// //
// //
// create function siteSearch to fetch the value of input id="inputSearchSite" and execute with button onclick to display the value in the element with id="recipeList"

// function searchSite() {
//   const searchValue = document.getElementById("inputSearchSite").value;
//   // Manipulate the DOMstring with the <p id="recipeList"> element
//   // Add the searchValue to the DOMstring
//   document.getElementById(
//     "recipeList"
//   ).innerHTML = `<h4>Showing results for: ${searchValue}</h4>`;
// }

// Run function searchSite when keyup is "Enter"
// document
//   .getElementById("inputSearchSite")
//   .addEventListener("keyup", function (event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.key === "Enter") {
//       // trigger the function searchSite
//       // displaySearchSiteResults();
//       searchSite();
//     }
//   });

// // //
// // //
// // //
// // //

// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //

// function searchResults() {
//   const searchSiteInput = document.getElementById(searchSite).value;

//   document.getElementById(
//     "searchResults"
//   ).innerHTML = `<strong>Showing results for ${searchSiteInput}</strong>`;
// }

// Logging the search value of input#siteSearch onkeydown to a <p> with id#logSearchValue
const input = document.querySelector("input");
const log = document.getElementById("log");

// log textContent into p element with id #logSearchValue
function logKey(e) {
  log.textContent = `${e.code}`;
}

input.onkeydown = logKey;

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// Add a const with the name of editableContent and assign it to the class editableContnent Use querySelector to select the editableContent class

const editableContent = document.querySelector(".editableContent");

editableContent.addEventListener("click", updateContent);

function updateContent() {
  const favoriteFoodContent = prompt("What is your favorite food?");
  editableContent.textContent = `My favorite food to eat is ${favoriteFoodContent}`;
}

// Style the DOM element with the class name of editableContent
// Language: javascript
// Path: ../index.html

class Favorite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    :host * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    .editableContent {
      font-size: 1.5rem;
      font-family: Parisienne, cursive;
      color: #9c413d;
    }
    </style>
    <slot>
    <div class="editableContent">
    <span>My favorite food to eat: </span>
    </div>
    </slot>
  `;
  }
}

window.customElements.define("favorite-component", Favorite);
