 import React, { useState } from 'react';

const ContactForm = () => {

    const [contact, setContact] = useState({
        username:"",
        email:"",
        message:"",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setContact((prev) =>({
            ...prev,
            [name]:value,
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Contact Form</h2>

        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="off"
              value={contact.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/*email*/}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="off"
              value={contact.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={contact.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-700 transition"
            >
               Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
