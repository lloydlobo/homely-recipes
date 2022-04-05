// declare constant breadcrumbsInnerHTML to hold the innerHTML of the breadcrumbs
const breadcrumbsInnerHTML = `
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/breadcrumbs.css">
  <div class="recipe-action-container | gap-top-400">
    <div class=" flex |">
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
          <slot name="breadcrumb-1--link"><a href="../../index.html" class="breadcrumb"><slot property="name" name="breadcrumb-1--name"><span name="property"></span></slot></a>
          </slot>
          <meta property="position" content="1" />
        </li>
        <li property="itemListElement" typeof="ListItem">
          <slot name="breadcrumb-2--link"><a href="../../collections.html" class="breadcrumb"><slot property="name" name="breadcrumb-2--name"><span name="property"></span></slot></a>
          </slot>
          <meta property="position" content="2" />
        </li>
        <li property="itemListElement" typeof="ListItem">
          <slot name="breadcrumb-3--link"><a href="" class="breadcrumb"><slot property="name" name="breadcrumb-3--name"><span name="property"></span></slot></a>
          </slot>
          <meta property="position" content="3" />
        </li>
        <li property="itemListElement" typeof="ListItem">
          <slot name="breadcrumb-4--link"><a href="" class="breadcrumb"><slot property="name" name="breadcrumb-4--name"><span name="property"></span></slot></a>
          </slot>
          <meta property="position" content="4" />
        </li>

        </ol>
      </nav>
    </div>
  </div>
`;

// create customELement shadowDom Breadcrumbs
class Breadcrumbs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = breadcrumbsInnerHTML;
  }
}
// register customElement with the browser
// naming it <breadcrumbs-component>
window.customElements.define("breadcrumbs-component", Breadcrumbs);
