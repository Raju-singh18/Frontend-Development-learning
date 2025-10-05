import React, { useState } from "react";

const RegistrationReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>

          <label htmlFor="firstName">
            <b>First Name:</b>
          </label>
          <br />
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="lastName">
            <b>Last Name:</b>
          </label>
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={user.email}
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={user.password}
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="phone">
            <b>Phone Number:</b>
          </label>
          <br />
          <input className="border border-gray-600 w-full rounded-md"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            value={user.phone}
            onChange={handleInputChange}
          />
          <br />
          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              {" "}
              Terms & Privacy
            </a>
          </p>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>

      <section>
        <p>
          Hello, my name is{" "}
          <span>
            {user.firstName} {user.lastName}
          </span>
          . My email address is <span>{user.email}</span> and my phone number is{" "}
          <span>{user.phone}</span>.
        </p>
      </section>
    </div>
  );
};

export default RegistrationReact;
