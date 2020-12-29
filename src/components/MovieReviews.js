import React, {Component} from 'react';

const MovieReview = ({display_title, mpaa_rating}) => {
    return (
   
        <div key={display_title} className="review">
            <h2>{display_title}</h2>
            <p>{mpaa_rating}</p>      
        </div>
)}

const MovieReviews = ({reviews}) => { 
    return (
        <div className="review-list">
            {reviews.map(MovieReview)}
        </div>
    );
}
    // 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Y5CQi2LIxH5bgkEVHadYrQPHUizosvNQ'

export default MovieReviews;  
     