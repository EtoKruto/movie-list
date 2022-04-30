import React from 'react';

var MovieListEntry = ({updateWatch, movieEntry}) => (
  <div>
      <div className="movie-list-entry">
      {movieEntry.title}
      <button onClick={() => updateWatch(movieEntry.title)}>{
      movieEntry.watched ? 'Watched': "Not Watched"}</button>
      </div>

    </div>

  </div>
    );


    export default MovieListEntry;