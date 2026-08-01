const api_key = process.env.TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const res = await fetch(`${baseUrl}/trending/movie/week?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getPopularMovies() {
  const res = await fetch(`${baseUrl}/movie/popular?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getTopRatedMovies() {
  const res = await fetch(`${baseUrl}/movie/top_rated?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getUpcomingMovies() {
  const res = await fetch(`${baseUrl}/movie/upcoming?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getActionMovies() {
  const res = await fetch(
    `${baseUrl}/discover/movie?with_genres=28&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getHorrorMovies() {
  const res = await fetch(
    `${baseUrl}/discover/movie?with_genres=27&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getCrimeMovies() {
  const res = await fetch(
    `${baseUrl}/discover/movie?with_genres=80&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getDramaMovies() {
  const res = await fetch(
    `${baseUrl}/discover/movie?with_genres=18&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getMoviesGenreList() {
  const res = await fetch(`${baseUrl}/genre/movie/list?api_key=${api_key}`);
  const data = await res.json();
  return data.genres;
}
