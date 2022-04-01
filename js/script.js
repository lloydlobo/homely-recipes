// ****
// * Autocomplete Search
// ****
const searchable = [
  "Special Fish Curry",
  "Special Chicken Masala",
  "Traditional Rava Laddo",
  "Bread Butter Puding",
  "Rice Neer Dosa",
];

// *
// * set variables from the DOM
// *
const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

searchInput.addEventListener("keyup", () => {
  // // console.log(e.target.value);
  // filter through our searchable variable's itemListElement
  const inputValue = searchInput.value;
  // console.log(inputValue.length);   /* check the length of the input */
  if (inputValue.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(inputValue.toLowerCase());
    });
  }
  renderResults(results);
});

// *
// * renders the results of filtered variable `searchable` array
// *
function renderResults(results) {
  // if there is no items or no results.length - remove the class .show
  if (!results.length) {
    return searchWrapper.classList.remove(
      "show"
    ); /* ? could it be toggle instead of remove? */
  }

  // when there are results, loop over results with callback funtion map of item
  const content = results
    .map((item) => {
      return `<li><a href="">${item}</a></li>`;
      // return `<li><a href="collections/${item.collection}/${item.recipe}.html">${item}</a></li>`;
    })
    .join(""); /* join this on a string */
  // console.log(content); /* pass the console.log inside the function -- it grabs the results if there is length -- loops over the results and pass it through a map function */
  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// [] Practice Start
// // 1 filtering searchable array
// const searchableFilter = searchable.filter((item) => {
//   return item;
// });
// console.log(searchableFilter);

// 2 -- map method --> this works!!!!
const searchableMap = searchable.map((item) => {
  return item.recipe;
});
// console.log(searchableMap);

// 3 -- searchableFInd --> find method
const searchableFind = searchable.find((item) => {
  return item.recipe === "Special Fish Curry";
  // return item.recipe === this.searchInput.value;
});
// console.log(searchableFind);

// 4 -- forEach method --> Awesome!! /* syntax::===> array.forEach(function(currentValue, index, arr)) */

const searchableForEachRecipe = searchable.forEach((item) => {
  // return searchable.item.recipe; /* doesn't work */
  // console.log(item.recipe);
});
// console.log(searchableForEachRecipe); /* doesn't work */

// prinitng the contents of array searchable

const logArrayElements = (element, index, array) => {
  // console.table("a[" + index + "] = " + element);
};

[1, "{ id: 2 }", 5, , 9].forEach(logArrayElements);

// * logArraySearchable
const searchableJSON = JSON.stringify(searchable);
const logArraySearchable = (element, index, array) => {
  // console.table("a[" + index + "] = " + element);
};

[searchableJSON].forEach(logArraySearchable);
[searchable].forEach(logArraySearchable);

// JSONStrigify searchable

// console.log(myFunction);

// // another forEach example: https://www.programiz.com/javascript/forEach
const students = ["John", "Sara", "Jack"];

// using forEach
students.forEach(myFunction);

function myFunction(item) {
  // console.log(item);
}

// 5 -- some method
const searchablePreperationTime = searchable.some((item) => {
  return (searchable.prepTime = 45); /* true */
});

// console.log(searchablePreperationTime);

// 6 -- every method
const searchableEveryPrepTime = searchable.every((item) => {
  return searchable.prepTime >= 15; /* true */
});

// console.log(searchableEveryPrepTime);

// 7 -- reduce method
const searchablePrepTimeTotal = searchable.reduce((currentTotal, item) => {
  return searchable.prepTime + currentTotal;
}, 0); /* we start the currentTotal from 0 */ /* at each iteration the currentTotal gets added up to the next array value and that becomes the new currentTotal */

// console.log(searchablePrepTimeTotal); /* 225 (mins) */

// 8 -- includes method

// first print out prepTime forEach searchable arrays
const searchablePrepTimeValues = searchable.forEach((item) => {
  // console.log(item.prepTime);
});

const studentsIncludes = students.includes("John");
// console.log(studentsIncludes); /* true */

// //
//  maps out searchable sub-arrays
searchable.map(function (subarray) {
  // console.log(subarray);
});

//  [ ] Practice End
