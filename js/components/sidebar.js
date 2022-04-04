// create a constant for sidebar <aside> innerHTML
// this is used inside the shadowDOM constructor() function below
const sidebarInnerHTML = `
      <link rel="stylesheet" href="./css/style.css">
      <link rel="stylesheet" href="./css/sidebar.css">
      <link rel="stylesheet" href="../../css/style.css">
      <link rel="stylesheet" href="../../css/sidebar.css">

      <aside class="gap-top-1000">
        <div class="category | flow">
          <label
            for="recipe-collection-select"
            class="category__heading |"
            aria-label="Choose recipes by collections"
            >Recipes by collections</label
          >
          <select
            name=""
            id="recipe-collection-select"
            autofocus="true"
            class="category__select"
          >
            <option value="fish">Select by collections</option>
            <option value="fish">Fish Curry</option>
            <option value="chicken">Chicken</option>
            <option value="dosa">Dosa</option>
            <option value="ladoo">Ladoo</option>
            <option value="dessert">Dessert</option>
            <option value="pudding">Pudding</option>
          </select>
        </div>
        <div class="popular-recipes | flow">
          <label for="" class="category__heading |" aria-label="Popular Recipes"
            >Popular Recipes</label
          >
          <div class="popular-recipes__cards">
            <div class="popular-recipes__card">
              <img
                src="./assets/images/homepage/hero-img-0--333x460.png"
                alt=""
                class="popular-recipes__card__img"
                width="80"
                height="80"
              />
              <h2 class="popular-recipes__card__heading | body-small">
                Lorem, ipsum dolor.
              </h2>
            </div>
          </div>
          <div class="popular-recipes__card">
            <img
              src="./assets/images/homepage/hero-img-0--333x460.png"
              alt=""
              class="popular-recipes__card__img"
              width="80"
              height="80"
            />
            <h2 class="popular-recipes__card__heading | body-small">
              Lorem, ipsum dolor.
            </h2>
          </div>
          <div class="popular-recipes__card">
            <img
              src="./assets/images/homepage/hero-img-0--333x460.png"
              alt=""
              class="popular-recipes__card__img"
              width="80"
              height="80"
            />
            <h2 class="popular-recipes__card__heading | body-small">
              Lorem, ipsum dolor.
            </h2>
          </div>
        </div>
        <input type="search" name="" id="" placeholder="Search a recipe..." />
      </aside>
`;

// create a class Sidebar extends DOM HTMLElement
class Sidebar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    // import the innerHTML from the constant above
    this.shadowRoot.innerHTML = sidebarInnerHTML;
  }
}

// define customElements to be used in the HTML DOM as <sidebar-component>
customElements.define("sidebar-component", Sidebar);
