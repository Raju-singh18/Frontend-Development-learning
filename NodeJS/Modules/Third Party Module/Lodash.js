
const _ = require('lodash');
const numbers = [10, 5, 8, 3];
const sorted = _.sortBy(numbers);
console.log(sorted); // [3, 5, 8, 10]