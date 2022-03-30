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
