 import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title = "Untitled", Year = "N/A" } = curMovie;

  return (
    <div className="w-[140px] sm:w-[160px] flex-shrink-0 rounded-lg overflow-hidden bg-zinc-900 shadow hover:shadow-xl hover:scale-105 transform transition-all duration-300">
      <img
        src={Poster}
        alt={Title}
        className="w-full h-[210px] object-cover"
      />
      <div className="p-2">
        <h3 className="text-white text-sm font-semibold line-clamp-2">{Title}</h3>
        <p className="text-xs text-gray-400">Year: {Year}</p>
        <NavLink to={`/movie/${imdbID}`}>
          <button className="mt-1 w-full bg-red-600 hover:bg-red-700 text-white text-xs py-1 rounded-md transition">
            Watch
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
