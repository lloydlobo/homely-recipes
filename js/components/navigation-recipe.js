// declare a constant navigationInnerHTML
const navigationRecipeInnerHTML = `
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/navigation.css">
  <style>
    :host * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: "Work Sans", Helvetica, sans-serif;
    }

    :host .navbar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding-block: 1em;
    }

    @media screen and (min-width: 40em) {
      :host .navbar {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
      }
    }

    :host ul.navigation {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 0.2em;
      justify-content: center;
      align-items: center;
      padding: 0;
      max-inline-size: max-content;
    }

    @media screen and (min-width: 40em) {
      :host ul.navigation {
        flex-direction: row;
      }
    }

    :host ul.navigation li {
      --body-small: clamp(1rem, 0.9rem + 0.25vw, 1.25rem);
      font-size: var(--body-small, calc(clamp(1rem, 0.9rem + 0.25vw, 1.25rem)));
      font-weight: 400;
      --mdc-theme-on-background: #201a19;
      color: var(--mdc-theme-on-background);
      cursor: pointer;
      position: relative;
      padding-inline: 0.5em;
      border-radius: 0.25rem;
    }

    :host ul.navigation li:hover {
      display: block;
      --mdc-theme-primary: #9c413d;
      color: var(--mdc-theme-primary, #9c413d);
      text-decoration: none;
      transition: all 0.1s ease-in;
      position: relative;
      --mdc-theme-surface-variant: #f4dddb;
      background: var(--mdc-theme-surface-variant, #f4dddb);
    }

    :host ul.navigation li:hover::after {
      display: block;
      content: "";
      transition: all 0.2s ease-in-out;
      --mdc-theme-primary: #9c413d;
      --mdc-theme-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      box-shadow: var(--mdc-theme-shadow);
      position: relative;
      background: var(--mdc-theme-primary);
      max-inline-size: fit-content;
      text-decoration: none;
    }

    :host a.disabled {
      pointer-events: none;
      --mdc-theme-outline: #857371;
      color: var(--mdc-theme-outline, #857371);
      position: relative;
    }

    :host li.disabled {
      position: relative;
    }

    :host ul.navigation li.disabled:hover {
      text-decoration: none;
      position: relative;
      background: transparent;
    }

    :host ul.navigation li.disabled:hover::after {
      content: "coming soon...";
      position: absolute;
      color: #857371;
      background: #f4dddb;
      top: -23px;
      right: -12px;
      font-size: smaller;
      padding-inline: 0.5ch;
      border-radius: 0.25rem;
    }
  </style>

  <div class="navbar">
    <ul class="navigation | body-small">
      <li><a href="../../collections.html">Collections</a></li>
      <li class="disabled"><a class="disabled" href="../../holiday-seasons-recipes.html" aria-disabled="true">Holiday & Seasons</a></li>
      <li><a href="../../about.html">About</a></li>
      <li><a href="../../contact.html">Contact</a></li>
    </ul>
  </div>
`;

// Add a shadowDOM customElement for navigation
class NavigationRecipe extends HTMLElement {
  constructor() {
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = navigationRecipeInnerHTML;
  }
}

// Register the new element with the browser.
window.customElements.define("navigation-recipe-component", NavigationRecipe);

// function searchResults() {
//   const searchSiteInput = document.getElementById(searchSite).value;

//   document.getElementById(
//     "searchResults"
//   ).innerHTML = `Showing results for ${searchSiteInput}`;
// }
