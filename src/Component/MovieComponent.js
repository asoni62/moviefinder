import React, { Component } from 'react';
class MovieComponent extends Component {
  render() {
    let resultItem;
    let result={};
    if(this.props.searchResult){
    resultItem = this.props.searchResult.map(
        resultItem => {          
            return(
                result = {
                        poster:resultItem.Poster,
                        title:resultItem.Title,
                        plot:resultItem.Plot,
                        actors:resultItem.Actors,
                        released:resultItem.Released
                    }
                );
            }
        );
    }
    return (
      <div className="MovieComponent container">
        <div className="MovieImg">
            <img src={result.poster} alt="Movie Image" className="SearchImg img-responsive center-block img-thumbnail"/>
        </div>
        <div className="MovieDetails">
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>{result.title}</td>
                    </tr>
                    <tr>
                        <td><strong>Description</strong></td>
                        <td>{result.plot}</td>
                    </tr>
                    <tr>
                        <td><strong>Cast</strong></td>
                        <td>{result.actors}</td>
                    </tr>
                    <tr>
                        <td><strong>Released</strong></td>
                        <td>{result.released}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default MovieComponent;