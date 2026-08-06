import React from "react";
import { getTrendingMovies } from "@/lib/tmdb/movies";
import { getPoster } from "@/lib/tmdb/images";
import Image from "next/image";
import { Star } from "lucide-react";

export default async function page() {
  const trending_movies = await getTrendingMovies();
  console.log(trending_movies[0]);
  return (
    <div className="bg-[#0A0713] rounded-lg border border-white/20">
      <div>
        <h1 className="text-3xl font-bold p-5">Trending Movies</h1>
      </div>
      <div className="w-full h-full flex flex-wrap gap-5   p-5">
        {trending_movies.map((items) => {
          const imageSrc = getPoster(items.poster_path);
          return (
            <div
              key={items.id}
              className="bg-[#151515] w-65 min-h-110 gap-5 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-65 h-95 ">
                <Image
                  src={imageSrc}
                  alt={items.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center items-center min-h-8 ">
                <h1 className="font-bold text-center">{items.title}</h1>
              </div>
              <div className="flex items-center justify-evenly text-sm text-white/70">
                <div className="flex gap-1">
                  <p className="text-[#e2b616]">
                    <Star size={18} />
                  </p>
                  <p>{items.vote_average}</p>
                </div>
                <p>{items.vote_count} Votes</p>
                <p>{items.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
