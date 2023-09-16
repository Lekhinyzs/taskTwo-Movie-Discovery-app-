import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";
import logo from "./images/tv.png";
import { GrHomeRounded } from "react-icons/gr";
import { BsCameraReels } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsListStars } from "react-icons/bs";
import { BiMobileVibration } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import playBtn from "./images/play.png";
import mixedMovie from "./images/mixed-movie.png";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  const [singleMovie, setSingleMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getSingleMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3346668ecc2e44c6329cd3e798a66216`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "The Data could not be fetched. Check Your URL PARAMETERS"
          );
        }
        return res.json();
      })
      .then((data) => {
        setSingleMovie(data);
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    getSingleMovie();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <GridLoader color={"FFA500"} loading={loading} size={20} />
      ) : (
        <div className="movieDetailsHold">
          <div className="sideBar">
            <div className="sideBarLogo">
              <img src={logo} alt="logo" className="tvImg" />
              <span>MovieBox</span>
            </div>
            <div className="sideBarNav">
              <div className="sideLink">
                <Link to="/" className="link">
                  {" "}
                  <GrHomeRounded /> <span> Home </span>
                </Link>
              </div>
              <div className="sideLink active">
                <Link className="link activeLink">
                  {" "}
                  <BsCameraReels />
                  <span> Movies </span>
                </Link>
              </div>
              <div className="sideLink">
                <Link className="link">
                  {" "}
                  <RiComputerLine /> <span> TV Series </span>
                </Link>
              </div>
              <div className="sideLink">
                <Link className="link">
                  {" "}
                  <FaRegCalendarAlt /> <span> Upcoming </span>
                </Link>
              </div>
              <div className="ads">
                <small className="first">
                  Play movie quizes and earn free tickets
                </small>
                <br />
                <small className="sec">50k people are playing now</small>
                <div>
                  <button>Start playing</button>
                </div>
              </div>
              <div className="sideLink">
                <Link className="link">
                  {" "}
                  <TbLogout /> <span> Logout </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" movie-details">
            {error && <div className="errorM">{error}</div>}
            <div className="container-fluid">
              <div className="movieHold ">
                <img
                  src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`}
                  alt="moive"
                  width="100%"
                  className="imgfluid"
                />
                <img src={playBtn} alt="playbtn" className="play-Btn" />
                <i className="play mt-2">Watch trailer</i>
              </div>
            </div>
            <div className="row mt-2 container-fluid">
              <div>
                <div className="mainDetails">
                  <span data-testid="movie-title" className="movieName">
                    {singleMovie.title}
                  </span>
                  <span data-testid="movie-release-date" className="movieDate">
                    {singleMovie.release_date}
                  </span>
                  <span className="pgRating"> PG-13</span>
                  <span data-testid="movie-runtime" className="watchTime">
                    {singleMovie.runtime}
                  </span>
                  <span className="movieChoice ">Action</span>
                  <span className="movieChoice">Drama</span>
                </div>
                <div>
                  <div className="movie-overview">
                    <p data-testid="movie-overview" className="movieOverview ">
                      {singleMovie.overview}
                    </p>
                  </div>
                </div>
                <div className="castList">
                  <p>
                    Director: <span>Joseph Kosinski</span>
                  </p>
                  <p>
                    Writers: <span>Jim Cash, Jack Epps jr, Peter Craig</span>
                  </p>
                  <p>
                    Stars:
                    <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                  </p>
                </div>
                <div>
                  <div className="rated">
                    <p className="topRate">Top rated movies #65</p>
                    <select className="selectTag">
                      <option className="option">Awards 9 nominations</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="stats">
                <div className="movie-star">
                  <p>
                    {" "}
                    <span>
                      <FaStar />
                    </span>
                    8.5/350k
                  </p>
                </div>
                <div>
                  <button className="btnShow">
                    <BiMobileVibration /> see showtimes
                  </button>
                  <button className="btnWatch">
                    <BsListStars /> more watch options
                  </button>
                </div>
                <div>
                  <img
                    src={mixedMovie}
                    alt="upcomingmovie"
                    width="100%"
                    height="150px"
                    className="mixed-movie"
                  />
                  <span className="best">
                    <BsListStars /> the best movies and shows in september
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
