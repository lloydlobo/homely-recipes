// declare a constant with the name of the component factInnerHTML
const recipeInfoInnerHTML = `
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/recipes.css">

 <div class="recipe-info | gap-top-1000">
  <div class="recipe-tips |">
  <details >
  <summary class="recipe-info__heading | body-small" aria-label="Recipe Info">
  Recipe Info
    </summary>

      <h3 class="recipe-details__tips__heading | headline-small">Recipe Tips</h3>
      <div class="flow gap-top-300">
        <h4 class="recipe-details__tips__sub-heading">Serving Suggestion</h4>
        <span class="recipe-details__tips__sub-heading__body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, culpa!
        </span>
        <h4 class="recipe-details__tips__sub-heading">Substitute</h4>
        <span class="recipe-details__tips__sub-heading__body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, cul!
        </span>
        <h4 class="recipe-details__tips__sub-heading">How to Store</h4>
        <span class="recipe-details__tips__sub-heading__body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, culpa!
        </span>
      </div>
    </div>
  </details>
  <div class="fun-fact | flow">
  <details >
  <summary class="recipe-info__heading | body-small" aria-label="Fun Food Facts">
  Fun Fact
    </summary>
      <h3 class="recipe-details__fun-fact | headline-small | gap-bottom-400">
        Fun Fact
      </h3>
      <span class="recipe-details__fun-fact__fact-title |">
        Curry originally came from the Tamil word <em>“Kari”</em>.
      </span>
      <div class="recipe-details__fun-fact__fact-info | body-small">
        According to
        <a target="_blank" href="https://en.wikipedia.org/wiki/Curry#Etymology"
          >Wikipedia</a
        >, "Curry is an anglicised form of the Tamil: கறி kaṟi meaning 'sauce' or
        'relish for rice' that uses the leaves of the curry tree
        <em>(Murraya koenigii)</em>."
      </div>
      <div class="recipe-details__fun-fact__fact-info | body-small">
        To denote its spicy properties, the pepper was formerly called
        <em>'Curry Milagu'</em>. Curry became a generic word for anything prepared
        with pepper or chilli later on. Curry is also a derivation word that means
        biting.
      </div>
    </div>
  </div>

`;

// add a shadowDOM root customElement class
class RecipeInfo extends HTMLElement {
  constructor() {
    super();

    // Allow the shadowDOM to be styled by external CSS with the mode: open
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = recipeInfoInnerHTML;
  }
}

// Register the new element with the browser.
window.customElements.define("recipeinfo-component", RecipeInfo);
