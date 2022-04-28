import React from 'react';



const SearchSwitchContainer = ({handleChangeToSearch, searchForMovie}) => (

  <div>
  <form>
  <input  type='text' id="searchTextBox" className='textBox' onChange={(e) => handleChangeToSearch(e.target.value)}></input>
  <button type='submit' id='searchButton' onClick={(e) => searchForMovie(e)}> Go!</button>
  </form>
  </div>
  );

  export default SearchSwitchContainer;