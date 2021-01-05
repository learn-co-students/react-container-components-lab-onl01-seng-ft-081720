import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
class SearchableMovieReviewsContainer extends React.Component {
    state = {
        searchTerm: '',
        reviews: []
      };
  
  
       handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
  
  
       handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL + this.state.searchTerm)
        console.log("vthis.state.searchTerm..............", this.state.searchTerm)
          .then(res => res.json())
          .then(data =>
            console.log("Data", data)
            )
        }

        componentDidMount(){
            fetch(URL)
              .then(res => res.json())
              .then(data =>
                  this.setState(
                    reviews: data.results
                  )
              )
          }
      
      
          render() {
            return(
              <div>
                <form onSubmit={this.onSubmit}>
                  <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange } />
                  <input type="submit" value="submit your search term" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
                {this.state.searchTerm}
              </div>
            )
          }
      
      
}

export default SearchableMovieReviewsContainer;