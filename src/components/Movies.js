import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map(m => {
      return (
        <div>
          <p>{m.title}</p>
          <p>{m.time}</p>
          <ul>
            {
              m.genres.map(g => {
                return <li>{g}</li>
              })
            }
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
