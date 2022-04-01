// * Autocomplete Search
// this could be the result of an API
const searchable = [
  "Special Fish Curry",
  "Special Chicken Masala",
  "Traditional Rava Laddo",
  "Bread Butter Puding",
  "Rice Neer Dosa",
];
// //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#grouping_the_elements_of_an_array

const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

// add event listener for search input events
searchInput.addEventListener("keyup", () => {
  // // console.log(e.target.value);
  // filter through our searchable variable's itemListElement
  const inputValue = searchInput.value;

  // check the length of the input
  // console.log(inputValue.length);
  if (inputValue.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(inputValue.toLowerCase());
    });
  }
  // renderResults of results
  renderResults(results);
});

// renders the results
function renderResults(results) {
  // if there is no items or no results.length - remove the class .show
  if (!results.length) {
    return searchWrapper.classList.remove(
      "show"
    ); /* ? could it be toggle instead of remove? */
  }

  // // assign variables for each data ids in the array searchable
  // const recipe = results.map((item) => item.recipe);
  // const ingredients = results.map((item) => item.ingredients);

  // when there are results, loop over results with callback funtion map of item
  const content = results
    .map((item) => {
      return `<li><a href="">${item}</a></li>`;
      // return `<li><a href="">${item.recipe}</a></li>`;
    })
    .join(""); /* join this on a string */
  // console.log(content);/* pass the console.log inside the function -- it grabs the results if there is length -- loops over the results and pass it through a map function */
  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
