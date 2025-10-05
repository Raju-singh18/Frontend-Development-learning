 import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  const sliderRef = useRef();

  // Slide handler
  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="px-6 py-8 relative">
      <h2 className="text-2xl font-bold text-white mb-4">Search Results</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-[50%] -translate-y-1/2 left-2 z-10 bg-zinc-800/80 text-white p-2 rounded-full hover:bg-zinc-700 transition"
      >
        ⬅
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-[50%] -translate-y-1/2 right-2 z-10 bg-zinc-800/80 text-white p-2 rounded-full hover:bg-zinc-700 transition"
      >
        ➡
      </button>

      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
      >
        {moviesData.Search.map((curMovie) => (
          <Card key={curMovie.imdbID} curMovie={curMovie} />
        ))}
      </div>
    </section>
  );
};
