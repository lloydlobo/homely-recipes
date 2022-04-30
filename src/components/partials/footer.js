// The class extends the HTMLElement class, and it attaches a shadow DOM to the element, and then it
// adds some styles and markup to the shadow DOM
export default class Footer extends HTMLElement {
  /**
   * The constructor function is called when the component is created
   */
  constructor() {
    /* Calling the constructor of the parent class. */
    super();

    /* Attaching a shadow DOM to the element. */
    this.attachShadow({ mode: "open" });
    /* Adding the styles and markup to the shadow DOM. */
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

/* Registering the new element with the browser. */
window.customElements.define("footer-component", Footer);

/* Exporting the Footer class so that it can be imported into other files. */
// export default Footer;

// https://web.dev/custom-elements-v1/#:~:text=Extending%20HTMLElement%20ensures%20the%20custom,JavaScript%20API%20for%20your%20tag.&text=%2F%2F%20A%20getter%2Fsetter%20for%20an%20open%20property.

/*
Rules on creating custom elements #

The name of a custom element must contain a dash (-).
So <x-tags>, <my-element>, and <my-awesome-app> are all valid names,
  while <tabs> and <foo_bar> are not.
This requirement is so the HTML parser can distinguish custom elements from regular elements.
It also ensures forward compatibility when new tags are added to HTML.

You can't register the same tag more than once. Attempting to do so will throw a DOMException.
Once you've told the browser about a new tag, that's it. No take backs.

Custom elements cannot be self-closing because HTML only allows a few elements to be self-closing.
Always write a closing tag (<app-drawer></app-drawer>).
*/
