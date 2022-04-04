// create a class Sidebar extends DOM HTMLElement
class Sidebar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
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
  }
}

// define customElements
window.customElements.define("sidebar-component", Sidebar);

// <style>
//   :host {
//     display: block;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;

//     background-color: #fff;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//     z-index: 1;
//     }
//     .sidebar-header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding: 10px;
//       background-color: #fff;
//       border-bottom: 1px solid #e5e5e5;
//       }
//       .sidebar-header img {
//         width: 40px;
//         height: 40px;
//         border-radius: 50%;
//         }
//         .sidebar-header .sidebar-header-text {
//           font-size: 14px;
//           font-weight: bold;
//           color: #333;
//           }

//   </style>
