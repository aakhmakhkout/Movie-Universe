export function getPoster(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export function getBackdrop(path) {
  return `https://image.tmdb.org/t/p/original${path}`;
}
