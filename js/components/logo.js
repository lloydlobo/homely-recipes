// Add a shadowDOM for logo
// Language: javascript
// Path: js/components/logo.js
// Compare this snippet from js/components/navigation.js:

class Logo extends HTMLElement {
  constructor() {
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      :host * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      .logo {
          font-size: 1.5rem;
          font-family: Parisienne, cursive;
          transform: rotate(351.65deg);
  --mdc-theme-primary: #9c413d;
          color: var(--mdc-theme-primary);
      }

      </style>


      <slot>
      <div class="logo">
      <span>Octavia
      </span>
      </div>
      </slot>
        `;
  }
}

// Register and define the shadowDOM to window with the browser as a customElements
window.customElements.define("logo-component", Logo);
