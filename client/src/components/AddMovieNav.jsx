import React from 'react';


const AddMovieNav = ({addMovieToList}) => (

  <div id="addMovieNav">
  <input type='text' id="addMovieTextBox" className='textBox' ></input>
  <button onClick={() => addMovieToList()}> Add a Movie</button>
  </div>
  );

  export default AddMovieNav;