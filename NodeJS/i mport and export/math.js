
const add = (a,b) =>{
    return a+b;
};

const mult = (a,b) =>{
    return a*b;
}



// first method
// module.exports = add;
// module.exports= mult;

// second method
//  module.exports.add = add;
//  module.exports.mult= mult;


// third method
//   module.exports = {add, mult};

// 4th method
 module.exports = {add, mult};
 

  






