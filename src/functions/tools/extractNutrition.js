import axios from "axios";

//  Takes the user's input, sends it to the RapidAPI server,
// and then displays the response in the browser
export default function extractNutrition() {
  const querySelector = document.getElementById("inputUserQueryNutrition");
  const btnNutrition = document.getElementById("btnNutrition");
  const nutritionResponse = document.querySelector("#nutritionResponse");

  /* Getting the value of the input field and storing it in a variable. */
  let queryUserInput = querySelector.value;

  //  If the user doesn't enter anything in the search box,
  // the default search will be "chicken pork"
  const nutritionDefaultValue = () => {
    if (queryUserInput === "") {
      queryUserInput = "chicken pork";
    }
  };
  nutritionDefaultValue();

  const API_SECRET = process.env;
  // const URL = `https://dog.ceo/api/breed/${API_SECRET}/images`;

  /* A constant variable that is storing the options for the request. */
  const options = {
    method: "GET",
    // url: "https:/nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
    url: `${URL}/v1/nutrition`,
    params: {
      query: queryUserInput,
    },
    headers: {
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      "X-RapidAPI-Key": API_SECRET,
    },
  };

  //  Throw an error if API key is not available
  try {
    if (!API_SECRET) {
      throw new Error("You forgot to set API_SECRET");
    }
  } catch (err) {
    nutritionResponse.textContent = "You forgot to set API_SECRET";
  }

  /* A promise.  It is a function that is called when the request is successful. */
  axios
    .request(options)
    .then((response) => {
      nutritionResponse.textContent = JSON.stringify(response.data);
      return nutritionResponse;
    })
    .catch((error) => {
      nutritionResponse.textContent = error;
    });

  /* Listening for a click event on the button and then calling the function. */
  btnNutrition.addEventListener("click", () => {
    extractNutrition();
  });
}

/* Calling the function. */
extractNutrition();

/* Exporting the function so that it can be used in other files. */
// export default extractNutrition;

// install pre commit hook =>
//  https://docs.gitguardian.com/internal-repositories-monitoring/integrations/git_hooks/pre_commit?utm_source=product&utm_medium=GitHub_checks&utm_campaign=check_run
//  https://git-secret.io/

// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
//  https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-try-statement
/*  What happens on a new machine? A new developer won't have the .env file
  at all.  They need to create .env file and know wht string to be there.  */
