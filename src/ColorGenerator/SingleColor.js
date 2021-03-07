import React from 'react';

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  // rgb = [1,2,3]

  return (
    <article
      className={`colors__item ${index > 10 && 'colors__item--light'}`}
      style={{
        backgroundColor: `#${hexColor}`,
      }}
    >
      <div className="colors__copy">
        <button>s</button>
        <button>s23</button>
      </div>
      <p className="colors__hex">#{hexColor}</p>
      <p className="colors__percent">{weight}%</p>
    </article>
  );
};

export default SingleColor;
