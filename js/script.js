// create function siteSearch to fetch the value of input id="inputSearchSite" and execute with button onclick to display the value in the element with id="recipeList"

function searchSite () {
  const searchValue = document.getElementById('inputSearchSite').value
  // Manipulate the DOMstring with the <p id="recipeList"> element
  // Add the searchValue to the DOMstring
  document.getElementById(
    'recipeList'
  ).innerHTML = `<h4>Showing results for: ${searchValue}</h4>`
}

// Run function searchSite when keyup is "Enter"
document
  .getElementById('inputSearchSite')
  .addEventListener('keyup', function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // trigger the function searchSite
      // displaySearchSiteResults();
      searchSite()
    }
  })

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
const input = document.querySelector('input')
const log = document.getElementById('log')

// log textContent into p element with id #logSearchValue
function logKey (e) {
  log.textContent = `${e.code}`
}

input.onkeydown = logKey

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

const editableContent = document.querySelector('.editableContent')

editableContent.addEventListener('click', updateContent)

function updateContent () {
  const favoriteFoodContent = prompt('What is your favorite food?')
  editableContent.textContent = `My favorite food to eat is ${favoriteFoodContent}`
}

// Style the DOM element with the class name of editableContent
// Language: javascript
// Path: ../index.html

class Favorite extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
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
  `
  }
}

window.customElements.define('favorite-component', Favorite)
