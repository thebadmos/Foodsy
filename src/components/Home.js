import React from 'react';
import Image from '../images/bg-image2.png';
import TextAnminate from './TextAnminate';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1>
          <div id="firstText">
            good food
            <br /> starts with good <br /> product
          </div>
        </h1>
      </div>
      <div className="mini-container">
        <h3 className="alignleft">About Foodsy</h3>
        <p className="alignright">
          Foodsy is a sleek multiplatform recipe manager, accessible on and{' '}
          offline, <br /> across your Apple iOS or Android devices, on your
          tablet, laptop or desktop.
          <br />
        </p>
      </div>
      <div className="img-cont">
        <img src={Image} alt="imageRandom"></img>
        <p className="textright">
          <TextAnminate />
        </p>
      </div>
    </div>
  );
};

export default Home;
