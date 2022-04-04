// Add a shadowDOM class Logo for logo witht he constructor() function

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
      <span><a href=index.html>Octavia</a></span>
      </div>

      </slot>
        `;
  }
}

// Register and define the shadowDOM to window with the browser as a customElements
window.customElements.define("logo-component", Logo);
