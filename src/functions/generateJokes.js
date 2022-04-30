import axios from "axios";
import laughing from "../assets/laughing.svg";

// * generate jokes
/**
 * @param  {{Accept:"application/json"} {constconfig={headers
 * @param  {} }
 * @param  {document.getElementById("joke"} };axios.get("https
 */
export function generateJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios.get("https://icanhazdadjoke.com/", config).then((response) => {
    document.getElementById("joke").innerHTML = response.data.joke;
  });
}
generateJokes(); // call the function once

const btnGenerateJokes = document.getElementById("btnJoke");
btnGenerateJokes.addEventListener(
  "click",
  generateJokes,
); /* alternative = response.data.joke */

/* Setting the src attribute of the img element with the id of `laughingImg` to
the value of the variable `laughing` */
const laughingImg = document.getElementById("laughingImg");
laughingImg.src = laughing;

export default generateJokes;

// -------------------------------------FIN-------------------------------------

// script: `npm run build` makes webpack build [name].js in /dist folder
// npm run dev => runs webpack-dev-server on port 3000 [localhost:3000]
// run eslint => `$ ./node_modules/.bin/eslint --fix src/`

// -------------------------------------API-------------------------------------

// ****
// **** api from https://icanhazdadjoke.com/api
// ****

/*
## API response format

All API endpoints follow their respective browser URLs,
but we adjust the response formatting to be more suited
for an API based on the provided HTTP Accept header.

**Accepted Accept headers**:
  - text/html - HTML response (default response format)
  - application/json - JSON response
  - text/plain - Plain text response
*/

// get(url: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>>

/* JSON
{
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
}
*/

/* # => {
          id: 'KBsWnO711Dd',
          joke: 'Remember, the best angle to approach a problem from is the "try" angle.',
          status: 200
        }
            id: "KBsWnO711Dd"
            joke: "Remember, the best angle to approach a problem from is the \"try\" angle."
            status: 200
            [[Prototype]]: Object
*/

/* # =>  Object
              id: "G6pr4EQfiqc"
              joke: "What did the piece of bread say to the knife? Butter me up."
              status: 200
              [[Prototype]]: Object
*/
