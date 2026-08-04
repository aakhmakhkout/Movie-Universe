import { getTrendingMovies } from "@/lib/tmdb/movies";
import { getTopRatedMovies } from "@/lib/tmdb/movies";
import { getUpcomingMovies } from "@/lib/tmdb/movies";
import { getTrendingSeries } from "@/lib/tmdb/series";
import { getTopRatedSeries } from "@/lib/tmdb/series";
import { getTopAiringSeries } from "@/lib/tmdb/series";
import { getPopularAnime } from "@/lib/tmdb/anime";
import { getTopRatedAnime } from "@/lib/tmdb/anime";

async function fetchData() {
  const [
    trending_movies,
    top_rated_movies,
    upcoming_movies,
    trending_series,
    top_rated_series,
    airing_series,
    popular_anime,
    top_rated_anime,
  ] = await Promise.all([
    getTrendingMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
    getTrendingSeries(),
    getTopRatedSeries(),
    getTopAiringSeries(),
    getPopularAnime(),
    getTopRatedAnime(),
  ]);
  return {
    trending_movies,
    top_rated_movies,
    upcoming_movies,
    trending_series,
    top_rated_series,
    airing_series,
    popular_anime,
    top_rated_anime,
  };
}

const dataArr = await fetchData();

export const categories = [
  {
    id: 1,
    label: "Movies - Trending",
    data: dataArr.trending_movies,
    path: "trendingmovies",
  },
  {
    id: 2,
    label: "Movies - Top Rated",
    data: dataArr.top_rated_movies,
    path: "topratedmovies",
  },
  {
    id: 3,
    label: "Movies - Upcoming",
    data: dataArr.upcoming_movies,
    path: "upcomingmovies",
  },
  {
    id: 4,
    label: "Series - Trending",
    data: dataArr.trending_series,
    path: "trendingseries",
  },
  {
    id: 5,
    label: "Series - Top Rated",
    data: dataArr.top_rated_series,
    path: "topratedseries",
  },
  {
    id: 6,
    label: "Series - Airing",
    data: dataArr.airing_series,
    path: "airingseries",
  },
  {
    id: 7,
    label: "Anime - Popular",
    data: dataArr.popular_anime,
    path: "popularanime",
  },
  {
    id: 8,
    label: "Anime - Top Rated",
    data: dataArr.top_rated_anime,
    path: "topratedanime",
  },
];
