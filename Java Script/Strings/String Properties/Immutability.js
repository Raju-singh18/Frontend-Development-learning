
// !Strings cannot be changed directly:
let str = "Hello";
str[0] = "J"; 
console.log(str); // "Hello" (unchanged)


// ?To change a string, create a new string:
let newStr = "J" + str.slice(1);
console.log(newStr); // "Jello"
