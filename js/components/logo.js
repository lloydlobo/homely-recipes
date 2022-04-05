// Call a constant logoInnerHTML that which contain the innerHTML for shadowRoot
const logoInnerHTML = `
<link rel="stylesheet" href="../../css/style.css">
<link rel="stylesheet" href="./css/style.css">

<style>
:host * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:host .logo {
  font-size: 1.5rem;
  font-family: Parisienne, cursive;
  transform: rotate(351.65deg);
  --mdc-theme-primary: #9c413d;
  color: var(--mdc-theme-primary);
}

:host .logo a {
  text-decoration: none;
}

:host .logo:hover {
  cursor: pointer;
}

</style>


      <slot>
      <div class="logo">
      <span><a href=/index.html>Homely</a></span>
      </div>

      </slot>

`;

// Add a shadowDOM class Logo for logo witht he constructor() function

class Logo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = logoInnerHTML;
  }
}

// Register and define the shadowDOM to window with the browser as a customElements
window.customElements.define("logo-component", Logo);
