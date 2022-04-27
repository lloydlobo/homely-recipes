// Autocomplete Search Array
const searchable = [
  "Bread Butter Pudding",
  "Fish Curry Special",
  "Rice Neer Dosa",
  "Special Chicken Masala",
  "Traditional Rava Laddo",
];

const searchableLink = [
  "collections/dessert-recipes/bread-butter-pudding.html",
  "collections/fish-curry/fish-curry-special.html",
  "collections/dosa-recipes/rice-neer-dosa.html",
  "collections/chicken-recipes/special-chicken-masala.html",
  "collections/rava-recipes/traditional-rava-laddo.html",
];

let searchResults;

// filter the searchableLink array
function filterResults(e) {
  const searchTerm = e.target.value.toLowerCase();
  searchResults = searchable.filter((item) => item.toLowerCase().includes(searchTerm));
  const searchResultsLink = searchableLink.filter((item) => {
    item.toLowerCase().includes(searchTerm);
    return item;
  });
  const searchResultsList = document.querySelector(".search-results");
  searchResultsList.innerHTML = "";
  searchResults.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${searchResultsLink[index]}">${item}</a>`;
    searchResultsList.appendChild(li);
  });
  return searchResults;
}

filterResults(searchResults);

// * set variables from the DOM
const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

// function to create the list items
function addSearchResultContent(item) {
  const searchableLinkItem = searchableLink[1]; // filter with results index
  return `<li><a href="${searchableLinkItem}">${item}</a></li>`;
}

// Function to show the results by adding the class `show` to the wrapper
// and adding the content to the results wrapper
function showSearchResults(content) {
  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

// Function renders the results of filtered variable `searchable` array
function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove("show");
  }
  // Function to Loop over results with callback function map of item
  const content = results.map((item) => addSearchResultContent(item)).join("");

  const showsSearchResultsContent = showSearchResults(content);

  return showsSearchResultsContent;
}

searchInput.addEventListener("keyup", (results) => {
  // filter through our searchable variable's itemListElement
  let resultsValue = results;
  const inputValue = searchInput.value;
  if (inputValue.length) {
    resultsValue = searchable.filter((item) => {
      item.toLowerCase().includes(inputValue.toLowerCase());

      return item;
    });
    return resultsValue;
  }
  const renderedResults = renderResults(resultsValue);

  return renderedResults;
});
