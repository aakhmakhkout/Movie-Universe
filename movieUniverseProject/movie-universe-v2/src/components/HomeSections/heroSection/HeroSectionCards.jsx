"use client";

import { useState } from "react";
import { getBackdrop } from "@/lib/tmdb/images";
export default function HeroSectionCards({ moviesList }) {
  const { trending_movies } = moviesList;
  console.log(trending_movies);
  const [increment, setincrement] = useState(0);
  const imageSrc = getBackdrop(trending_movies[increment].backdrop_path);
  return (
    <div>
      <div
        className={`w-[98%] h-160 relative bg-cover bg-center flex flex-col items-center rounded-xl`}
        style={{
          background: `linear-gradient(90deg,rgba(0, 0, 0, 0.83) 26%, rgba(255, 255, 255, 0) 54%, rgba(255, 255, 255, 0) 86%), url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90%] h-40 flex items-center">
          <h1 className="bg-[#ffa60029] p-[8px_20px] rounded-full text-[#ffbf00] border border-[#ffbf00] text-xl ">
            Trending Movies
          </h1>
        </div>
        <div className="flex flex-col bg-black/20 w-full gap-5">
          <h1 className="text-7xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {trending_movies[increment].original_title}
          </h1>
          <div className="flex">
            <p>{trending_movies[increment].release_date}</p>
            <p>genre remaining</p>
          </div>
          <div>
            <p>{trending_movies[increment].overview}</p>
          </div>
          <div>
            <p>{trending_movies[increment].vote_average}</p>
            <p>IMDB</p>
            <p>{trending_movies[increment].vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
