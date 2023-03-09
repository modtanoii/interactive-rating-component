import React, { useState } from 'react';
import './Rating.css';
import Card from '../components/Card';
import StarImg from '../images/icon-star.svg';
import { useState } from 'react';

const Rating = () => {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: true,
    fourStars: false,
    fiveStars: false,
  });

  return (
    <Card>
      <div className="star-img-container">
          <img src={StarImg} alt="" />
      </div>
      <h2 className='title'>How did we do?</h2>
      <p className='text'>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      <div className="rating">
        <div 
          className={
            activeRating.oneStar
              ? "rating-container active"
              : "rating-container"
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: true,
              fourStars: false,
              fiveStars: false,
            })
          }}
        >1
        </div>
        <div className={activeRating.twoStars ? "rating-container active" : "rating-container"}>2</div>
        <div className={activeRating.threeStars ? "rating-container active" : "rating-container"}>3</div>
        <div className={activeRating.fourStars ? "rating-container active" : "rating-container"}>4</div>
        <div className={activeRating.fiveStars ? "rating-container active" : "rating-container"}>5</div>
      </div>
      <button className="submit-btn">Submit</button>
    </Card>
  );
};

export default Rating;