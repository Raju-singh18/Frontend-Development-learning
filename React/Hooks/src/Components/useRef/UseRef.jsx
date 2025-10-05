import React, { useRef } from "react";

const UseRef = () => {
// !-------------------------------------------------------
//   console.log(document.getElementById("username"));
//   console.log(document.getElementById("password"));
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// console.log(username, password);
// !---------------------------------------------------------
const username = useRef(null);
const password = useRef(null);

// console.log(username);
//?output=> {current: null}current: null[[Prototype]]: Object


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(username.value, password.value);
    console.log(username.current, password.current);
    // ? output ==><input type="text" placeholder="username" id="username"/> <input type="text" placeholder="password" id="password"/>
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="username" id="username" ref={username}/>
      <br />
      <input type="text" placeholder="password" id="password" ref={password}/>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default UseRef;
