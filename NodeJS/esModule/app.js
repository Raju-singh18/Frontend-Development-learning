
 
// !for export default we can also import to it as; both are same
// //? import mult from "./math.js";
// import multiply from "./math.js";
// !------------------------------------


// ! if we import named export the we have to write the same name of function with curly brackets
// import { div, add } from "./math.js";
// ! -----------------------------------------

// ! import all at once ----------------
import {add,div,mult, PI}  from "./math.js";
import * as math from "./math.js";

console.log(mult(5,10));
console.log(math.div(50,5));
console.log(add(4,90));
console.log(math.PI);


