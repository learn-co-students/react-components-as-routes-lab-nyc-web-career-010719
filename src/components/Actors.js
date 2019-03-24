import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map(a => {
      return (
        <div>
          {a.name}
          <ul>
            {
              a.movies.map(m => {
                return <li>{m}</li>
              })
            }
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
