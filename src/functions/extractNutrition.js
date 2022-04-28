const axios = require("axios");

// Query text to extract nutrition information (e.g. bacon and 3 eggs).
const inputUserQuery = document.querySelector("#inputUserQueryNutrition");
const nutritionResponse = document.querySelector("#nutritionResponse");
console.dir(nutritionResponse);

let inputUserQueryValue;
inputUserQuery.addEventListener("change", () => {
  inputUserQueryValue = inputUserQuery.value;
  console.log(inputUserQueryValue);
  console.log(typeof inputUserQueryValue);
  return inputUserQueryValue;
});


function extractNutrition() {
  const options = {
    method: "GET",
    url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
    params: { query: `${inputUserQueryValue}` },
    headers: {
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      "X-RapidAPI-Key": "7111cd23admsh37011cba3f28586p1c07bejsnfa8ebbae3d24",
    },
  };

  axios.request(options).then((response) => {
    console.log(response.data);
    console.dir(response.data);
    console.table(response.data);

    nutritionResponse.textContent = response.data;
  }).catch((error) => {
    console.error(error);
    nutritionResponse.textContent = error;
  });
}

export default extractNutrition;
