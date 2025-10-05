import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 404 Error Handling
  if (error?.status === 404) {
    return (
      <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
        <figure className="max-w-lg">
          <img
            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
            alt="404 Not Found"
            className="w-full h-auto"
          />
        </figure>
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            The page you were looking for doesn't exist or has been moved.
          </p>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition"
            >
              ⬅ Go to Home
            </Link>
            <button
              onClick={handleGoBack}
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition"
            >
             ⬅ Go Back to previous page
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Generic error fallback (e.g. 500)
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        {error.statusText || "An unexpected error occurred."}
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
      >
        ⬅ Return to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
