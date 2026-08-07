import { getTrendingMovies } from "@/lib/tmdb/movies";
import { getTopRatedMovies } from "@/lib/tmdb/movies";
import { getUpcomingMovies } from "@/lib/tmdb/movies";
import { getTrendingSeries } from "@/lib/tmdb/series";
import { getTopRatedSeries } from "@/lib/tmdb/series";
import { getTopAiringSeries } from "@/lib/tmdb/series";
// import { getPopularAnime } from "@/lib/tmdb/anime";
// import { getTopRatedAnime } from "@/lib/tmdb/anime";

export default async function fetchCategories() {
  const [
    trending_movies,
    top_rated_movies,
    upcoming_movies,
    trending_series,
    top_rated_series,
    airing_series,
    // popular_anime,
    // top_rated_anime,
  ] = await Promise.all([
    getTrendingMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
    getTrendingSeries(),
    getTopRatedSeries(),
    getTopAiringSeries(),
    // getPopularAnime(),
    // getTopRatedAnime(),
  ]);

  const categories = [
    {
      id: 1,
      label: "Movies - Trending",
      data: trending_movies,
      path: "trendingmovies",
    },
    {
      id: 2,
      label: "Movies - Top Rated",
      data: top_rated_movies,
      path: "topratedmovies",
    },
    {
      id: 3,
      label: "Movies - Upcoming",
      data: upcoming_movies,
      path: "upcomingmovies",
    },
    {
      id: 4,
      label: "Series - Trending",
      data: trending_series,
      path: "trendingseries",
    },
    {
      id: 5,
      label: "Series - Top Rated",
      data: top_rated_series,
      path: "topratedseries",
    },
    {
      id: 6,
      label: "Series - Airing",
      data: airing_series,
      path: "airingseries",
    },
  ];
  return categories;
}
