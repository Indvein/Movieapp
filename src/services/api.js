const API_KEY = "7e2171f7fca3df680c87c6e0d782d8f7";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Search movies by query
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
