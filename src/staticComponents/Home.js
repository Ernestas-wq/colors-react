import React from 'react';
import { Link } from 'react-router-dom';
import { RiNavigationLine } from 'react-icons/ri';
const Home = () => {
  return (
    <section className="home">
      <h1>
        <span>c</span>o<span>lo</span>r g<span>en</span>e<span>r</span>at
        <span>o</span>r
      </h1>
      <div className="home__container">
        <article>
          <h3>What is the color generator for?</h3>
          <p>
            So you've probably heard that to paint a painting you only really need 2
            or 3 colors and various tints of them. This color generator will help you
            get just that! Just paste a hex value of your desired color and you will
            get a 20 color pallet ranging from the brightest to the darkest version
            of your color!
          </p>
        </article>
        <Link to="/color-generator">
          Try it out <RiNavigationLine />
        </Link>
      </div>
    </section>
  );
};

export default Home;
