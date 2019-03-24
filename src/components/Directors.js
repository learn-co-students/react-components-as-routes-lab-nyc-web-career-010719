import React from 'react';
import { directors } from '../data';

const Directors = () => {

  console.log(directors)

  const renderDirectors = () => {
    return directors.map(director => {

      const movies = () => {
        return director.movies.map(movie => {
          return <li>{movie}</li>
        })
      }

      return(
        <div>
          <h2>Name: {director.name}</h2>
          <p>Movies:</p>
          <ul>
          {movies()}
          </ul>
        </div>
      )
    })
  }


  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
