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
      <link rel="stylesheet" href="../../css/style.css">
      <link rel="stylesheet" href="../../css/logo.css">

      <slot>

      <div class="logo">
      <span><a href=index.html>Homely</a></span>
      </div>

      </slot>
        `;
  }
}

// Register and define the shadowDOM to window with the browser as a customElements
window.customElements.define("logo-component", Logo);
