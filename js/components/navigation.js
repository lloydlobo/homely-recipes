// Add a shadowDOM customEleemnt for navigation
// Language: javascript
// Path: js/components/navigation.js
// Compare this snippet from js/components/Footer.js:
class Navigation extends HTMLElement {
  constructor() {
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
       <link rel="stylesheet" href="../../css/style.css">
       <link rel="stylesheet" href="../../css/navigation.css">
      <slot>
        <div class="navbar">
          <ul class="navigation | body-small">
            <li><a href="collections.html">Collections</a></li>
            <li class="disabled"><a class="disabled" href="holiday-seasons-recipes.html" aria-disabled="true">Holiday & Seasons</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </slot>
    `;
  }
}

// Register the new element with the browser.
window.customElements.define("navigation-component", Navigation);

// function searchResults() {
//   const searchSiteInput = document.getElementById(searchSite).value;

//   document.getElementById(
//     "searchResults"
//   ).innerHTML = `Showing results for ${searchSiteInput}`;
// }
