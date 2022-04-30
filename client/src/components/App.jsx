import React from 'react';
import titleList from "./../../data/movie_data.js"
import MovieList from "./MovieList.jsx"
import AddMovieNav from "./AddMovieNav.jsx"
import SearchSwitchContainer from "./SearchSwitchContainer.jsx"


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titleList: titleList,
      foundTitles: titleList,
      textValue: ''

    };
    this.addMovieToList = this.addMovieToList.bind(this);
    this.handleChangeToSearch = this.handleChangeToSearch.bind(this);
    this.searchForMovie = this.searchForMovie.bind(this);
    this.updateWatch = this.updateWatch.bind(this);
    this.toggleWatchedMovies = this.toggleWatchedMovies.bind(this);

  }

  addMovieToList () {
    let submittedText = document.getElementById('addMovieTextBox').value
    if (submittedText.length === 0) {
      alert("please write something before submitting")
    } else {
      let newTitleAdded = {"title": submittedText, watched: false, "key": titleList.length};
      titleList.push(newTitleAdded);
      this.setState({titleList: titleList});
      this.setState({foundTitles: titleList});

      document.getElementById('addMovieTextBox').value = '';
    }

  }

  handleChangeToSearch (searchText) {
    this.setState({textValue: searchText});
  }



  searchForMovie (e) {
    e.preventDefault();
    let allTitles = this.state.titleList;
    let foundTitles = [];
    let searchedWord = this.state.textValue.toLowerCase();

    if(searchedWord.length === 0) {
      return;
    } else {
      for (var i = 0; i < allTitles.length; i++) {
        let title = allTitles[i].title.toLowerCase();
        if(title.includes(searchedWord)) {
          foundTitles.push(allTitles[i])
        }
      }
      if(foundTitles.length === 0) {
        foundTitles.push({title: 'no movie by that name found',watched: false, key: 'false'});

      }
      this.setState({foundTitles: foundTitles});
    }
  }

  updateWatch (movie) {

    let allTitles = this.state.titleList;
    let index = allTitles.findIndex(object => {
      return object.title.toLowerCase() === movie.toLowerCase();
    });
    if(index >= 0) {
      this.setState(prevState => {
        if (prevState.titleList[index].watched) {
          prevState.titleList[index].watched = false
        } else {
          prevState.titleList[index].watched = true;
        }
        return {titleList: prevState.titleList}
      })
    }
    return;
  }

  toggleWatchedMovies (watchButton){
    this.setState(prevState => {
      let allTitles = [];
      for (var objects of prevState.titleList) {
        if(objects.watched === watchButton) {
          allTitles.push(objects);
        }
      }
      return {foundTitles: allTitles}

    })
    document.getElementById('addMovieTextBox').value = '';
    document.getElementById('searchTextBox').value = '';

  }


  render () {
    return (
      <div>
      <nav className='movieListNav'>MovieList</nav>
      <AddMovieNav
      addMovieToList={this.addMovieToList}/>
      <div id="switchAndSearchContainer">
      <div id='watchSwitch'>
      </div>
      <button className='watchButtons' onClick={() => this.toggleWatchedMovies(true)}>Watched</button>
      <button className='watchButtons' onClick={() => this.toggleWatchedMovies(false)}>Not Watched</button>
      <SearchSwitchContainer
      handleChangeToSearch={this.handleChangeToSearch}
      searchForMovie={this.searchForMovie}/>

      </div>
      <MovieList
      updateWatch={this.updateWatch}
      foundTitles={this.state.foundTitles} />
      </div>
      );
    }
  };




  export default App;