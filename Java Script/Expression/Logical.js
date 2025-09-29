
let age = 20;
let hasID = true;
let canEnter = (age >= 18) && (hasID === true);
console.log(canEnter); // true (because both are true)


let hasTicket = false;
let isVIP = true;
let canWatchMovie = hasTicket || isVIP;
console.log(canWatchMovie); // true (because one is true)


let isRaining = false;
console.log(!isRaining); // true (because !false = true)


 
let hasPermission = true;

let canDrive = (age >= 18 && hasPermission) || (age >= 16 && hasPermission);
console.log(canDrive); // true (because second condition is true)

