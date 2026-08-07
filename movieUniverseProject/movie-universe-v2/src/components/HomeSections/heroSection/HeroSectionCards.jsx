"use client";

import { useState } from "react";
import { getBackdrop } from "@/lib/tmdb/images";
import { Plus, Star, ChevronLeft, ChevronRight } from "lucide-react";
export default function HeroSectionCards({ moviesList, genres }) {
  const [increment, setincrement] = useState(0);
  const { genreIDs } = genres;
  const { trending_movies } = moviesList;
  const moviesGenre = genreIDs.filter((items) => {
    return trending_movies[increment].genre_ids.includes(items.id);
  });
  const imageSrc = getBackdrop(trending_movies[increment].backdrop_path);
  const rating = Math.trunc(trending_movies[increment].vote_average);
  const trendingMoviesLength = trending_movies.length;
  return (
    <div className="w-full h-full flex justify-center relative">
      <div
        className={`w-full h-160 relative flex flex-col items-center rounded-xl`}
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 0.70) 35%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0) 86%), url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[92%] h-full flex flex-col">
          <div className="w-full h-40 flex items-center">
            <h1 className="bg-[#ffa6000b] p-[8px_20px] rounded-full text-[#ffbf00] border border-[#ffbf00b7]">
              Trending Movies
            </h1>
          </div>
          <div className="flex flex-col w-full gap-10">
            <h1 className="text-3xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {trending_movies[increment].original_title}
            </h1>
            <div className="flex gap-5 items-center">
              <p className="font-bold text-white/70">
                {trending_movies[increment].release_date}
              </p>
              <span>•</span>
              <div className="flex gap-2 items-center text-white/70">
                {moviesGenre.map((items) => {
                  return (
                    <p
                      key={items.id}
                      className="bg-white/10 p-[5px_20px] rounded-full"
                    >
                      {items.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-130 text-sm text-white/70">
              <p>{trending_movies[increment].overview}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-[#e2b616]">
                  <Star size={20} strokeWidth={3} />
                </span>
                <p className="text-xl font-bold">{rating}</p>
              </div>
              <span>•</span>
              <p className="bg-[#e2b616] p-[2px_10px] rounded-lg text-black font-extrabold">
                IMDB
              </p>
              <p className="font-bold text-white/70 text-sm">
                {trending_movies[increment].vote_count} votes
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-[#7b5bf5] p-[5px_20px] rounded-lg shadow-md font-bold">
                Watch Trailer
              </button>
              <button className="bg-white/10 border border-white/20 p-2 rounded-full">
                <Plus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-8  items-center gap-2">
          {trending_movies.map((items, idx) => {
            return (
              <p
                key={idx}
                className={`w-3 h-3 rounded-full bg-black/30 ${increment === idx ? "bg-purple-500" : null}`}
              ></p>
            );
          })}
        </div>
      </div>

      <button
        className="absolute top-[50%] left-0 z-20 bg-white/20 ml-2 p-1 rounded-full border border-white/20"
        onClick={() => {
          setincrement((prev) => {
            return increment > 1 ? prev - 1 : 0;
          });
        }}
      >
        <ChevronLeft size={30} strokeWidth={2.5} />
      </button>
      <button
        className="absolute top-[50%] right-0 z-20 bg-black/30 mr-2 p-1 rounded-full border border-white/20"
        onClick={() => {
          setincrement((prev) => {
            return increment < trendingMoviesLength - 1
              ? prev + 1
              : trendingMoviesLength - 1;
          });
        }}
      >
        <ChevronRight size={30} strokeWidth={2.5} />
      </button>
    </div>
  );
}
