import React from "react";
import { getTrendingMovies, getMoviesGenreList } from "@/lib/tmdb/movies";
import HeroSectionCards from "./HeroSectionCards";

export default async function HeroSection() {
  const genreIDs = await getMoviesGenreList();
  const trending_movies = await getTrendingMovies();

  return (
    <div>
      <HeroSectionCards
        moviesList={{ trending_movies }}
        genres={{ genreIDs }}
      />
    </div>
  );
}
