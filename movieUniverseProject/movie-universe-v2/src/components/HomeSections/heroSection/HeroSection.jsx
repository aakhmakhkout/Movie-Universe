import React from "react";
import { getTrendingMovies } from "@/lib/tmdb/movies";
import HeroSectionCards from "./HeroSectionCards";

export default async function HeroSection() {
  const trending_movies = await getTrendingMovies();

  return (
    <div>
      <HeroSectionCards moviesList={{ trending_movies }} />
    </div>
  );
}
