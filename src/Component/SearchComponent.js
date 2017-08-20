import React, { Component } from 'react';

class SearchComponent extends Component {
constructor(){
    super();
    this.state = {
        searchText : "",
        showError : "hidden"
    }
}
searchMovie(e){
    e.preventDefault();
    if(this.refs.searchValue.value === ""){
        this.setState({showError:"visible"});
    }else{
        this.setState({showError:"hidden"});
        this.setState({
            searchText : this.refs.searchValue.value
        },function(){
            this.props.getSearchValue(this.state.searchText);
        });
    }
}
  render() {
        let moviedataOption = this.props.moviedata.map(movieName => {
        return <option key={movieName.Title} value={movieName.Title}>{movieName.Title}</option>
        });
    return (
      <div className="SearchComponent container">
        <form onSubmit={this.searchMovie.bind(this)}>
        <p><em>Please select movie name from below box</em></p>
        <div className="input-group col-sm-12 col-md-6">
            <select type="text" ref="searchValue" className="form-control">
                <option value="">Please Select</option>
                {moviedataOption}
            </select>
            <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                </button>
            </div>
        </div>
        <p className={this.state.showError === "visible" ? "errorMsg visible": "hidden"}>
            <em>Please select movie name</em>
        </p>
        </form>
      </div>
    );
  }
}

export default SearchComponent;