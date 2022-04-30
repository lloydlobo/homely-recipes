// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#syntax

export * from "./input";
export * from "./partials";
// export { default as DefaultExport } from "./partials";
// export { default as Footer, default as Navigation } from "./partials";

// /* https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#using_export_from */

/* ## Using export from

Let's take an example where we have the following hierarchy:

childModule1.js: exporting myFunction and myVariable
childModule2.js: exporting myClass
parentModule.js: acting as an aggregator (and doing nothing else)
top level module: consuming the exports of parentModule.js
This is what it would look like using code snippets:

// In childModule1.js
let myFunction = ...; // assign something useful to myFunction
let myVariable = ...; // assign something useful to myVariable
export {myFunction, myVariable};
// In childModule2.js
let myClass = ...; // assign something useful to myClass
export myClass;
// In parentModule.js
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
export { myFunction, myVariable } from 'childModule1.js';
export { myClass } from 'childModule2.js';
// In top-level module
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source
import { myFunction, myVariable, myClass } from 'parentModule.js' */
