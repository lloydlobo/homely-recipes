// create a constant for sidebar <aside> innerHTML
// this is used inside the shadowDOM constructor() function below
const sidebarRecipeInnerHTML = `
      <link rel="stylesheet" href="../../css/style.css">
      <link rel="stylesheet" href="./css/style.css">

<style>
  /* * aside sidebar */
  aside {
    grid-area: aside;
  }

  /* sidebar */

  .sidebar {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1.618em;
    --scale: 1.618;
    border-radius: calc(var(--corner) / var(--scale));
  }

  @media screen and (min-width: 60em) {
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }

  .sidebar__search {
    order: 3;
    flex: 1 0 auto;
  }

  @media screen and (min-width: 60em) {
    .sidebar__search {
      order: 3;
      flex: 1 0 auto;
    }
  }

  .sidebar__search > input {
    width: 100%;
    flex: 1 0 auto;
  }

  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 1;
    flex: 1 0 auto;
  }
  /* popular recipe card  */
  .popular-recipes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 3;
    flex-wrap: wrap;
    flex: 1 0 auto;
  }

  @media screen and (max-width: 60em) {
    .popular-recipes__cards {
      display: flex;
      flex-wrap: wrap;
      /* flex-direction: column; */
      /* justify-content: center; */
      /* order: 4; */
      /* flex: 1 0 auto; */
    }
  }

  .popular-recipes__cards {
    display: grid;
    row-gap: 1em;
  }

  .popular-recipes__card {
    display: flex;
    gap: 1em;
  }
  @media screen and (min-width: 40em) and (max-width: 60em) {
    .popular-recipes__cards {
      display: grid;
      grid-template-columns: repeat(3, 0.618fr);
      row-gap: 1em;
    }
    .popular-recipes__card {
      display: flex;
      gap: 1em;
    }
  }
  label {
    background-color: var(--mdc-theme-secondary-container);
    color: var(--mdc-theme-on-secondary-container);
    /* padding: 0.5em; */
    padding-block: 0.3em;
    padding-inline: 0.5em;
    text-align: center;
    text-overflow: clip;

    /* white-space: wrap; */
    overflow: hidden;
    /* text-overflow: ellipsis; */
    /* font-size: 0.8em; */
    font-weight: 500;
    text-transform: uppercase;
    /* max-inline-size: max-content; */
  }
</style>

<div class="sidebar | gap-top-1000">
  <div class="category | flow">
    <label
      for="recipe-collection-select"
      class="category__heading |"
      aria-label="Choose recipes by collections"
      >Recipes by collections</label
    >
    <select name="" id="recipe-collection-select" class="category__select">
      <option value="fish">Select by collections</option>
      <option value="fish">
        <a href="./collections/fish-curry/fish-curry-special.html"
          >Fish Curry</a
        >
      </option>
      <option value="chicken">
        <a href="./collections/chicken-curry/chicken-coorg-curry.html"
          >Chicken</a
        >
      </option>
      <option value="dosa">
        <a href="./collections/rice-dosas/rice-neer-dosa.html">Dosa</a>
      </option>
      <option value="soooji">
        <a href="./collections/sooji/sooji-laddu.html">Sooji</a>
      </option>
      <option value="pudding">
        <a href="./collections/dessert/bread-butter-pudding.html"
          >Dessert</a
        >
      </option>
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
            src="../../assets/images/recipes/fish-curry-fish-curry-special.jpeg"
            alt=""
            class="popular-recipes__card__img"
            width="80"
            height="80"
          />
        </a>
        <h2 class="popular-recipes__card__heading | body-small">
          <a href="../../collections/fish-curry/fish-curry-special.html"
            >Fish Curry Special</a
          >
        </h2>
      </div>
      <div class="popular-recipes__card">
        <a href="../../collections/chicken-curry/chicken-coorg-curry.html">
          <img
            src="../../assets/images/recipes/chicken-curry-chicken-coorg-curry.jpg"
            alt=""
            class="popular-recipes__card__img"
            width="80"
            height="80"
          />
        </a>
        <h2 class="popular-recipes__card__heading | body-small">
          <a href="../../collections/chicken-curry/chicken-coorg-curry.html"
            >Chicken Coorg Curry</a
          >
        </h2>
      </div>
      <div class="popular-recipes__card">
        <a href="../../collections/dessert/bread-butter-pudding.html">
          <img
            src="../../assets/images/recipes/dessert-bread-and-butter-pudding.jpg"
            alt=""
            class="popular-recipes__card__img"
            width="80"
            height="80"
          />
        </a>
        <h2 class="popular-recipes__card__heading | body-small">
          <a href="../../collections/dessert/bread-butter-pudding.html"
            >Bread & Butter Pudding</a
          >
        </h2>
      </div>
    </div>
  </div>
  <div class="sidebar__search | flow">
    <input type="search" name="" id="" placeholder="Search a recipe..." />
  </div>
</div>

`;

// create a class Sidebar extends DOM HTMLElement
class SidebarRecipe extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    // import the innerHTML from the constant above
    this.shadowRoot.innerHTML = sidebarRecipeInnerHTML;
  }
}

// define customElements to be used in the HTML DOM as <sidebar-component>
customElements.define("sidebar-recipe-component", SidebarRecipe);
