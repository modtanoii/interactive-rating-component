import React from 'react';
import Card from './Card';
import './ThankYou.css';
import ThankYouImg from '../images/illustration-thank-you.svg';

const ThankYou = () => {
  return (
    <Card>
        <div className="thankyou-img-container">
            <img src={ThankYouImg} alt="" />
        </div>

        <div className="selected">
            <p>You selected 5 out of 5</p> 
        </div>

        <h2 className="title">Thank you!</h2>
        <p className="text">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </Card>
  );
};

export default ThankYou;