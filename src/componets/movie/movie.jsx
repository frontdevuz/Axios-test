import "./movie.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=97c6f53";
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios.get(URL).then((response) => setMovies(response.data));
  };
  console.log("movies", movies);
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="card__content">
            <div className="card__img-box">
              <img src={movies?.Poster} className="card__img" />
            </div>
            <div className="card__content-about">
              <h1 className="card__title">
                <span>Title:{movies?.Title}</span>
              </h1>
              <p className="card__plot">
                <span>Plot:</span> {movies?.Plot}
              </p>
              <h2 className="card__year">
                <span>Year:</span>
                {movies?.Year}
              </h2>
              <h2 className="card__rated">
                <span>Rated:</span>
                {movies?.Rated}
              </h2>
              <h2 className="card__released">
                <span>Released:</span>
                {movies?.Released}
              </h2>
              <h2 className="card__runtime">
                <span>Runtime:</span>
                {movies?.Runtime}
              </h2>
              <h2 className="card__boxoffice">
                <span>BoxOffice:</span>
                {movies?.Runtime}
              </h2>
              <h2 className="card__genre">
                <span>Genre:</span>
                {movies?.Genre}
              </h2>
              <h2 className="card__director">
                <span>Director:</span>
                {movies?.Director}
              </h2>
              <h2 className="card__writer">
                <span>Writer:</span>
                {movies?.Writer}
              </h2>
              <h2 className="card__actors">
                <span>Actors:</span>
                {movies?.Actors}
              </h2>
              <h2 className="card__language">
                <span>Language:</span>
                {movies?.Language}
              </h2>
              <h2 className="card__conutry">
                <span>Country:</span>
                {movies?.Country}
              </h2>
              <p className="card__awards">
                <span>Awards:</span>
                {movies?.Awards}
              </p>
              <h2 className="card__imdrating">
                <span>imdRating:</span>
                {movies?.imdbRating}
              </h2>
              <h2 className="card__imdvotes">
                <span>imdVotes:</span>
                {movies?.imdbVotes}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Movie;
