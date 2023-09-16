import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieList.css";
import { faPlayCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import poster from "./images/poster.png";

function MovieList() {
  const [topMovies, setTopMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch top 10 movies
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3346668ecc2e44c6329cd3e798a66216&language=en-US&page=1`
      )
      .then((response) => {
        setTopMovies(response.data.results);
        const top10Movies = response.data.results.slice(0, 10);
        setTopMovies(top10Movies);
      })
      .catch((error) => {
        console.error("Error fetching top movies:", error);
      });
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;

    setLoading(true);

    // Fetch movies by search query
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3346668ecc2e44c6329cd3e798a66216&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      )
      .then((response) => {
        setSearchResults(response.data.results);
        const top10Movies = response.data.results.slice(0, 10);
        setTopMovies(top10Movies);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false);
      });
  };

  return (
    <div style={{ backgroundImage: `url(${poster})` }} className="header-fluid">
      <div className="nav">
        <div>
          <div className="nav_box">
            <img src="tv.png" alt="displayTv" className="tvImg" />
            <h2 className="img_title">MovieBox</h2>
          </div>
        </div>
        <div className="search-bar">
          <input
            className="search_input"
            type="text"
            placeholder="What do you want to watch?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon
            onClick={handleSearch}
            icon={faSearch}
            className="searchIcon"
          />
        </div>
        <div className="nav_sign">
          <h2 className="signIn_title">Sign in</h2>
          <img src="Menu.png" alt="MenuImg" className="MenuImg" />
        </div>
      </div>
      <div className="container_main">
        <h1 className="movie_title">
          John wick 3: <br /> Parabellum
        </h1>
        <span className="sub_title">
          John Wick is on the run after killing after killing a member of the
          <br />
          international assasin guard and with a $14 million price tag on his
          <br />
          head, he is the target of men and women anywhere.
        </span>
        <div className="ratings_main">
          <div className="imdb">
            <img src="./imdb.png" alt="imdb raitng" className="imdb_logo" />
            <p className="text_main">86/100</p>
          </div>

          <div className="rotten_tomato">
            <img src="./rotten.png" alt="tomato_logo" className="tomato_logo" />
            <p className="text_main"> 97%</p>
          </div>
        </div>
        <button className="trailer_btn">
          <FontAwesomeIcon icon={faPlayCircle} className="play_icon" />
          <b>WATCH TRAILER</b>
        </button>
      </div>
      {loading && <p>Loading...</p>}
      <div className="movie-list">
        {searchResults.map((movie) => (
          <MovieCard data-testid="movie-card" key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="featured_title">
        <h1 className="featured_text">Featured Movie</h1>
        <span className="more_movies">See more</span>
      </div>
      <div className="movie-list">
        {topMovies.map((movie) => (
          <MovieCard data-testid="movie-card" key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />;
    </div>
  );
}

export default MovieList;
