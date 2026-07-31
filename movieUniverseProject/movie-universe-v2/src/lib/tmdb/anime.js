const api_key = process.env.TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export async function getPopularAnime() {
  const res = await fetch(
    `${baseUrl}/discover/tv?with_genres=16&with_origin_country=JP&sort_by=popularity.desc&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
export async function getTopRatedAnime() {
  const res = await fetch(
    `${baseUrl}/discover/tv?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&api_key=${api_key}`,
  );
  const data = await res.json();
  return data.results;
}
