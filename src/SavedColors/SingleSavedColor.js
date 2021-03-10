import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Values from 'values.js';
import { getSavedColorList } from '../ColorGenerator/utils';
import SingleColor from '../ColorGenerator/SingleColor';
import { TiArrowBack } from 'react-icons/ti';
const SingleSavedColor = () => {
  const { id } = useParams();
  const [colorList, setColorList] = useState([]);
  const [isIDValid, setIsIDValid] = useState(`#${id}` in getSavedColorList());

  useEffect(() => {
    setIsIDValid(`#${id}` in getSavedColorList());
  }, [id, isIDValid]);

  useEffect(() => {
    if (isIDValid) {
      const newColorList = new Values(`#${id}`).all(10);
      setColorList(newColorList);
    }
  }, [id, isIDValid]);

  console.log(isIDValid);
  if (!isIDValid) {
    return (
      <section className="single-saved-color">
        <div className="single-saved-color__error">
          <h2>OOPS! We've hit a dead end! 🐼</h2>

          <Link className="single-saved-color__back" to="/saved-colors">
            go back <TiArrowBack />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="single-saved-color">
      <Link className="single-saved-color__back" to="/saved-colors">
        go back <TiArrowBack />
      </Link>
      <div className="single-saved-color__list">
        {colorList.map((color, index) => {
          return (
            <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
          );
        })}
      </div>
    </section>
  );
};

export default SingleSavedColor;
