import React from 'react';

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  return (
    <article
      className={`colors__item ${index > 10 && 'colors__item--light'}`}
      style={{
        backgroundColor: `#${hexColor}`,
      }}
    >
      <p>#{hexColor}</p>
      <p>{weight}%</p>
    </article>
  );
};

export default SingleColor;
