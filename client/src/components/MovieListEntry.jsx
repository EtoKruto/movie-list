import React from 'react';

var MovieListEntry = ({updateWatch, movieEntry}) => (
  <div className="movie-list-entry">
  {movieEntry.title}
  <button onClick={() => updateWatch(movieEntry.title)}>{ movieEntry.watched ? 'Watched': "Not Watched"}</button>
  </div>


  );


  export default MovieListEntry;