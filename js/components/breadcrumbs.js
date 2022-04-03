// Create a class Breadcumbs shadowDOM for the DOM element
// reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow

class Breadcrumbs extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });
    // create a shadow root
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../../css/style.css">
       <link rel="stylesheet" href="../../css/breadcrumbs.css">

       <div class="recipe-action-container | gap-top-1000">
        <div class="container | flex |">
          <button class="button action has-icon sidebar-button" type="button">
            <span class="button-wrap"
              ><span class="icon icon-sidebar"></span
            ></span>
          </button>
          <nav
            class="breadcrumbs-container | flex | align-items--center | gap-top-400 "
            aria-label="Breadcrumb navigation"
          >
            <ol
              aria-label="breadcrumbs" class=" | flex flex--wrap | body-small "
              data-state="list"
              role="list"
            >
              <li property="itemListElement" typeof="ListItem">
                <a href="" class="breadcrumb"
                  ><span property="name">Home</span></a
                >
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a href="" class="breadcrumb"
                  ><span property="name">Collections</span></a
                >
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a href="" class="breadcrumb"
                  ><span property="name">Fish Curry</span></a
                >
                <meta property="position" content="3" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a href="" class="breadcrumb"
                  ><span property="name">Fish Curry Special</span></a
                >
                <meta property="position" content="4" />
              </li>
            </ol>
          </nav>
        </div>
      </div>
    `;
  }
}

// define and render the shadowDOM element customElements
window.customElements.define("breadcrumbs-component", Breadcrumbs);
/*
If custom elements are the way to create a new HTML (with a JS API), shadow DOM is the way you provide its HTML and CSS.
The two APIs combine to make a component with self-contained HTML, CSS, and JavaScript.

Anything you add in the shadows becomes local to the hosting element, including <style>. This is how shadow DOM achieves CSS style scoping.

shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().

## Creating shadow DOM for a custom element

Shadow DOM is particularly useful when creating custom elements. Use shadow DOM to compartmentalize an element's HTML, CSS, and JS, thus producing a "web component".



href="https://web.dev/shadowdom-v1/#stylefromoutside"



 */
