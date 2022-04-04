// declare a class for the shadowRoot DOM customElement
// uses the constructor function
class Footer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
          background-color: #f5f5f5;
        }
        :host ul.navigation {
          display: flex;
          list-style: none;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          padding: 0;

        }
      </style>
      <slot>
      <ul class="navigation">
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      </slot>
    `;
  }
}

// Register the new element with the browser.
window.customElements.define("footer-component", Footer);
("use strict");
