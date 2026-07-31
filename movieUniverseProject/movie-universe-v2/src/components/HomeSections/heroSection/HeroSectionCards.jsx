"use client";

import { useState } from "react";
import Image from "next/image";
import { getBackdrop } from "@/lib/tmdb/images";

export default function HeroSectionCards({ moviesList }) {
  const { trending_movies } = moviesList;
  console.log(trending_movies);
  const [increment, setincrement] = useState(0);
  const imageSrc = getBackdrop(trending_movies[increment].backdrop_path);
  console.log(imageSrc);
  return (
    <div>
      <div
        className={`w-[98%] h-200 relative bg-cover bg-center flex flex-col items-center rounded-xl`}
        style={{
          background: `linear-gradient(90deg,rgba(0, 0, 0, 0.58) 38%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 86%), url(${imageSrc})`,
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
        <div>
          <h1>name</h1>
          <div>
            <p>release date</p>
            <p>genre</p>
          </div>
        </div>
      </div>
    </div>
  );
}
