import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "7e2171f7fca3df680c87c6e0d782d8f7";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Failed to load movie details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details" style={{ padding: "2rem", color: "white" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px", margin: "1rem 0" }}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
    </div>
  );
}

export default MovieDetails;
