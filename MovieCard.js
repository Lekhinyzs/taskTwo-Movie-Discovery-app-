import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movieLink">
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <p data-testid="movie-release-date">{movie.release_date}</p>
        <h2 data-testid="movie-title"> {movie.title}</h2>
        <div className="ratings">
          <div className="imdb">
            <img src="./imdb.png" alt="imdb_logo" className="imdb_logo" />
            <p>{movie.vote_average}/100</p>
          </div>

          <div className="rotten_tomato">
            <img src="./rotten.png" alt="tomato_logo" className="tomato_logo" />
            <p> 87%</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
