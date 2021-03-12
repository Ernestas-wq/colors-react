import React from 'react';
import logo from '../assets/images/rgb.svg';
const Heading = () => {
  return (
    <header className="heading">
      <h3 className="heading__title">
        <img className="heading__logo" src={logo} alt="" />
        <p>
          <span>c</span>o<span>lo</span>r g<span>en</span>e<span>r</span>at
          <span>o</span>r
        </p>
      </h3>
    </header>
  );
};

export default Heading;
