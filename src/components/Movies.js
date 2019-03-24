import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {
      const genres = () => {
        return movie.genres.map(genre => {
        return <li>{genre}</li>
      })}

      return(
        <div>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {genres()}
        </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
