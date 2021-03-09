import React from 'react';
import { Link } from 'react-router-dom';
import { HiViewGrid, HiTrash } from 'react-icons/hi';
import { getSavedColorList } from '../ColorGenerator/utils';
import { useSavedColorsContext } from './context';
const SavedColorList = () => {
  // const { test } = useSavedColorsContext();
  const s = getSavedColorList();
  console.log(s);
  return (
    <section className="saved-colors">
      <div className="saved-colors__container">
        {Object.keys(s).map((key, i) => {
          return (
            <article className="saved-colors__card">
              <p className="saved-colors__title">{s[key]}</p>
              <p className="saved-colors__hex">{key}</p>
              <div className="saved-colors__buttons">
                <Link to={`/saved-colors/${key}`}>
                  <HiViewGrid />
                </Link>
                <button>
                  <HiTrash />
                </button>
              </div>
            </article>
          );
        })}
        <article className="saved-colors__card">
          <p className="saved-colors__title">Card name</p>
          <p className="saved-colors__hex">#asd123</p>
          <div className="saved-colors__buttons">
            <Link to="/">
              <HiViewGrid />
            </Link>
            <button>
              <HiTrash />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SavedColorList;
