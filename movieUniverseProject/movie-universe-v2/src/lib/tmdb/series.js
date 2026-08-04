const api_key = process.env.TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export async function getTrendingSeries() {
  const res = await fetch(`${baseUrl}/trending/tv/week?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getPopularSeries() {
  const res = await fetch(`${baseUrl}/tv/popular?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getTopRatedSeries() {
  const res = await fetch(`${baseUrl}/tv/top_rated?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getTopAiringSeries() {
  const res = await fetch(`${baseUrl}/tv/airing_today?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
export async function getActionSeries() {
  const res = await fetch(
    `${baseUrl}/discover/tv?with_genres=10759&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getMysterySeries() {
  const res = await fetch(
    `${baseUrl}/discover/tv?with_genres=9648&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getCrimeSeries() {
  const res = await fetch(
    `${baseUrl}/discover/tv?with_genres=80&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getDramaSeries() {
  const res = await fetch(
    `${baseUrl}/discover/tv?with_genres=18&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getSeriesGenreList() {
  const res = await fetch(`${baseUrl}/genre/tv/list?api_key=${api_key}`);
  const data = await res.json();
  return data.results;
}
