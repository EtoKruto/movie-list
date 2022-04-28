import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({updateWatch,foundTitles}) => (
  <div>
  <div className="movie-list">
  {foundTitles.map(movieEntry => (
    <MovieListEntry
    key={movieEntry.key}
    movieEntry={movieEntry}
    updateWatch={updateWatch}
    />
    ))}
    </div>
    <div>


    </div>
    </div>
    );

    export default MovieList;