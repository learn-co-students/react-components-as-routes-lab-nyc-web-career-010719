import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map(d => {
      return (
        <div>
          {d.name}
          <ul>
            {
              d.movies.map(m => {
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
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
