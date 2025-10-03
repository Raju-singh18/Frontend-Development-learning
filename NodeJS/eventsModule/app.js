
// import EventEmitter class
const EventEmitter = require("events");

// create instance of eventemitter

const emitter = new EventEmitter();

//! --------------------------------------------
// ? 1. Define an eventListener(addListener)
// emitter.on("greet",() => {
//     console.log("hello raju");
// })

// ? 2. trigger (emit) the greet event
// emitter.emit("greet");

//* output-> hello raju
// ----------------------------------------------

// !---------------------------------------
// ? 1. Define an eventListener(addListener)
// emitter.on("greet",(username) => {
//     console.log(`hello ${username}`);
// })

// ? 2. trigger (emit) the greet event
// emitter.emit("greet","Raju Singh");

//* output -> hello Raju Singh
// !-------------------------------------------

// !------------------------------------------
//? 1. Define an eventListener(addListener)
// emitter.on("greet",(username, prof) => {
//     console.log(`hello ${username}, I am a ${prof}eloper`);
// })

//? 2. trigger (emit) the greet event
//   emitter.emit("greet","Raju Singh", "Full Stack Dev");

//* output -> hello Raju Singh, I am a Full Stack Developer
//! ----------------------------------------------------------

//! -------------------------------------------------------------
//! but it's best idea to take a single argument as an object.

//? 1. Define an eventListener(addListener)
 emitter.on("greet",(arg) => {
    console.log(`hello ${arg.name}, I am a ${arg.prof}eloper`);
 })

//? 2. trigger (emit) the greet event
   emitter.emit("greet",{name: "Raju Singh",prof: "Full Stack Dev"});

   //* output -> hello Raju Singh, I am a Full Stack Developer
// !------------------------------------------------------------------

