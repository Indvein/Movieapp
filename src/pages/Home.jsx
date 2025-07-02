import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies on mount
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // Handle movie search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    try {
      setLoading(true);
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Movie List */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
