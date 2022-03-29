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
      <style>
        :host {
          display: block;
          // padding: 1rem;
          // background-color: #f5f5f5;
        }
        :host ul.navigation {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          gap: 2em;
          justify-content: center;
          align-items: center;
          padding: 0;
        }
        :host .navbar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2em;
        }
      </style>
      <slot>
        <div class="navbar">
          <ul class="navigation">
            <li>Collections</li>
            <li>Holiday & Seasons</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div class="search-bar">
            <input type="text" placeholder="Search">
            <button>Search</button>
          </div>
        </div>
      </slot>
    `;
  }
}

// Register the new element with the browser.
window.customElements.define("navigation-component", Navigation);
