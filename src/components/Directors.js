import React from 'react';
import { directors } from '../data';

// const renderDirectors = () => {
//   return (
//     <div>
//       <h1> Directors Page </h1>
//       {directors.map(director => (
//         <div className='director'>
//         <h3> Name: {director.name} </h3>
//         <ul>
//           {director.movies.map(movie => (
//             <li> {movie} </li>
//           ))}
//           </ul>
//       </div>
//        ))}
//     </div>
//   )
// }

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
        {directors.map(director => (
          <div className='director'>
            <h3> Name: {director.name} </h3>
            <ul>
              {director.movies.map(movie => (
                <li> {movie} </li>
              ))}
            </ul>
            </div>
          ))}
      </div>
    )
}


export default Directors
