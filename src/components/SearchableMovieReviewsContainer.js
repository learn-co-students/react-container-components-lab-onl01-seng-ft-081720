import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

class SearchableMovieReviewsContainer extends Component {
  
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(URL + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
      .then(resp => resp.json())
      .then(movieData => this.setState({
        reviews: movieData.results
      }))
  }

  searchTerms = (e) => {
    this.setState({
      searchTerm : e.target.value  
    })
  }
  
  render() {
    debugger
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.searchTerms.bind(this)} />
          <button type='submit'>Search</button>
        </form>

        <MovieReviews reviews={this.state.reviews}/>        
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
