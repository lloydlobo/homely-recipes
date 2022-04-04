// create a constant for sidebar <aside> innerHTML
// this is used inside the shadowDOM constructor() function below
const sidebarInnerHTML = `
      <link rel="stylesheet" href="../../css/style.css">
      <link rel="stylesheet" href="../../css/sidebar.css">

      <div class="sidebar | gap-top-1000">
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
            <option value="fish"><a href="../../collections/fish-curry/fish-curry-special.html">Fish Curry</a></option>
            <option value="chicken"><a href="../../collections/chicken-curry/chicken-coorg-curry.html">Chicken</a></option>
            <option value="dosa"><a href="../../collections/rice-dosas/rice-neer-dosa.html">Dosa</a></option>
            <option value="soooji"><a href="../../collections/sooji/sooji-laddu.html">Sooji</a></option>
            <option value="pudding"><a href="../../collections/dessert/bread-butter-pudding.html">Dessert</a></option>
          </select>
        </div>
        <div class="popular-recipes | flow">
          <label for="" class="category__heading |" aria-label="Popular Recipes"
            >Popular Recipes</label
          >
          <div class="popular-recipes__cards">
            <div class="popular-recipes__card">
              <a href="../../collections/fish-curry/fish-curry-special.html">
                <img
                    src="../../assets/images/homepage/hero-img-0--333x460.png"
                    alt=""
                    class="popular-recipes__card__img"
                    width="80"
                    height="80"
                  />
              </a>
              <h2 class="popular-recipes__card__heading | body-small">
                <a href="../../collections/fish-curry/fish-curry-special.html">Fish Curry Special</a>
              </h2>
            </div>
          </div>
          <div class="popular-recipes__card">
            <a href="../../collections/chicken-curry/chicken-coorg-curry.html">
              <img
                src="../../assets/images/homepage/hero-img-0--333x460.png"
                alt=""
                class="popular-recipes__card__img"
                width="80"
                height="80"
              />
            </a>
            <h2 class="popular-recipes__card__heading | body-small">
              <a href="../../collections/chicken-curry/chicken-coorg-curry.html">Chicken Coorg Curry</a>
            </h2>
          </div>
          <div class="popular-recipes__card">
            <a href="../../collections/dessert/bread-butter-pudding.html">
              <img
                src="../../assets/images/homepage/hero-img-0--333x460.png"
                alt=""
                class="popular-recipes__card__img"
                width="80"
                height="80"
              />
            </a>
            <h2 class="popular-recipes__card__heading | body-small">
              <a href="../../collections/dessert/bread-butter-pudding.html">Bread & Butter Pudding</a>
            </h2>
          </div>
        </div>
        <input type="search" name="" id="" placeholder="Search a recipe..." />
        </div>
      </div>
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
