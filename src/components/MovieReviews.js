import React from 'react';



  const MovieReviews = ({reviews}) =>  
    <div className='review-list'>
      <ul>
        {reviews.map((review, i) =>        
          <li key={i} className='review'>{review.display_title}</li>
        )}
      </ul>
    </div>

export default MovieReviews;