import React, { Component } from 'react';
import './App.css';
import SearchComponent from './Component/SearchComponent';
import MovieComponent from './Component/MovieComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchResult:[],
      moviedata:[],
      searchValue:""
    }
  }

  getMoviedata(){
    var data = require('./movie-package.json');
    this.setState({moviedata:data});
  }
  getSearchResult(){
    /*$.ajax({
      url:'./movie-package.json',
      dataType:'json',
      cache:'false',
      success:function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        });
      }.bind(this),
      error(xhr, status, err){
        console.log(err);
      } 
    });*/
    var data = require('./movie-package.json');
    var searchMovie = this.state.searchValue !== "" ? this.state.searchValue : "Sultan"; 
    let title = data.findIndex(x => x.Title === searchMovie);
    this.setState({searchResult:[data[title]]});
  }
  componentWillMount(){
    this.getSearchResult();
    this.getMoviedata();
    /*this.setState({
      searchResult:[
                {
                  "Title": "Sultan",
                  "Released": "06 Jul 2016",
                  "Actors": "Salman Khan, Anushka Sharma, Marko Zaror, Randeep Hooda",
                  "Plot": "Sultan is a classic underdog tale about a wrestler's journey, looking for a comeback by defeating all odds. Will he emerge victorious?",
                  "Language": "Hindi",
                  "Country": "India",
                  "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOWY3MmVmMGQtYTIyMS00ODc2LWI4N2YtMjA1MmY1YjA3MzVlXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SX300.jpg",

                }
       ]
    },function(){
      //console.log(this.state);
    });*/
  }
  handleSearch(searchValue){
    this.setState({searchValue:searchValue},function(){
      this.getSearchResult();
    });
    //console.log(searchValue)
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <SearchComponent moviedata={this.state.moviedata} getSearchValue={this.handleSearch.bind(this)}/>
        <MovieComponent searchResult={this.state.searchResult}/>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
