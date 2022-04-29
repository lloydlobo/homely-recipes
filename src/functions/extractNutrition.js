import axios from "axios";

function extractNutrition() {
  // !!!!!! https://git-secret.io/
  const apiKey = "c0316f7ac3msh83f6c9550985906p1056b6jsn942e8fa4cc71";
  // !!!!! encrypt the API
  // !! install pre commit hook =>
  // !! https://docs.gitguardian.com/internal-repositories-monitoring/integrations/git_hooks/pre_commit?utm_source=product&utm_medium=GitHub_checks&utm_campaign=check_run
  const apiHost = "nutrition-by-api-ninjas.p.rapidapi.com";
  // let queryUserInput = "chicken 1lb";
  const querySelector = document.getElementById("inputUserQueryNutrition");
  let queryUserInput = querySelector.value;
  const btnNutrition = document.getElementById("btnNutrition");

  const nutritionResponse = document.querySelector("#nutritionResponse");

  function nutritionDefaultValue() {
    if (queryUserInput === "") {
      queryUserInput = "chicken pork";
    }
  }
  nutritionDefaultValue();

  const options = {
    method: "GET",
    url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",

    params: {
      query: queryUserInput,
      // query: "chicken pork beef",
    },

    headers: {
      "X-RapidAPI-Host": apiHost,
      "X-RapidAPI-Key": apiKey,
    },
  };

  axios
    .request(options)
    .then((response) => {
      // const responseNutrition = response.data;
      nutritionResponse.textContent = JSON.stringify(response.data);
      // eslint-disable-next-line no-console
      console.table(response.data);
      // eslint-disable-next-line no-console
      console.dir(nutritionResponse);
      return nutritionResponse;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });

  // const btnNutrition = document.getElementById("btnNutrition");
  btnNutrition.addEventListener("click", () => {
    extractNutrition();
  });
}
extractNutrition();
export default extractNutrition;
