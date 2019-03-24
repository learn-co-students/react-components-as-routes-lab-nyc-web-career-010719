import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {
      const movies = () => {
        return actor.movies.map(movie => {
          return <li>{movie}</li>
        })
      }

      return(
        <div className="actor">
        <h2>Name: {actor.name}</h2>
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
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
