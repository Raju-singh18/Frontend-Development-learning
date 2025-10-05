import React, { useState } from "react";

// #===========
// Not Appropiate for large input data
// ==============================
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const hadleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "phone":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please fill inn this form to create an account</p>

          <label htmlFor="firstName">
            <b>First Name:</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            required
            value={firstName}
            onChange={hadleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name:</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            required
            value={lastName}
            onChange={hadleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            value={email}
            onChange={hadleInputChange}
          />

          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={hadleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number:</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            value={phoneNumber}
            onChange={hadleInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div>
            <button>SignUp</button>
          </div>
        </div>
      </form>

      <section>
        <p>
          Hello My name is
          <span>
            {firstName} {lastName}
          </span>
          . MY email address is <span>{email}</span> and my phone number is
          <span>{phoneNumber}</span>
        </p>
      </section>
    </>
  );
};

export default RegistrationForm;
