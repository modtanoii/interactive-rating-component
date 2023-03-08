import React from 'react';
import './Rating.css';
import Card from '../components/Card';
import StarImg from '../images/icon-star.svg';

const Rating = () => {
  return (
    <Card>
      <div className="star-img-container">
          <img src={StarImg} alt="" />
      </div>
      <h2 className='title'>How did we do?</h2>

      <p className='text'>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      <div className="rating">
          <ul>
              <li className="rating-container">1</li>
              <li className="rating-container">2</li>
              <li className="rating-container">3</li>
              <li className="rating-container">4</li>
              <li className="rating-container">5</li>
          </ul>
      </div>
      <button className="submit-btn">Submit</button>
    </Card>
  );
};

export default Rating;