// src/Components/MovieCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const [hovered, setHovered] = useState(false);

  const onFavoriteClick = (e) => {
    e.preventDefault(); // stop navigation
    favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤
          </button>
        </div>
      </div>

      {/* Details shown on hover like Netflix */}
      {hovered && (
        <div className="movie-hover-details">
          <h4>{movie.title}</h4>
          <p>Release: {movie.release_date}</p>
          <p>{movie.overview.slice(0, 100)}...</p>
        </div>
      )}

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
