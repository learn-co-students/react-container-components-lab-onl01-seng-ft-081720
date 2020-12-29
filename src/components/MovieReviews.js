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

export default MovieReviews;  
     