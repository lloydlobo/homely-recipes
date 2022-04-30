/**
 * It creates a div element, sets its innerHTML to a string that includes the value of the NAME
 * environment variable, and returns the div element
 * @returns A function that returns a div element with the text "Hello World"
 */
function createEnvVar() {
  const elem = document.createElement("div");
  elem.innerHTML = `Hello ${process.env.NAME}`;
  return elem;
}
/* Appending the component to the body of the document. */
document.body.appendChild(createEnvVar());

export default createEnvVar;
