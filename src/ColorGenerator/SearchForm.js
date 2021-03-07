import React, { useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useColorGeneratorContext } from './context';
import { BiError } from 'react-icons/bi';
const SearchForm = () => {
  const { setColor, setList, color, isError } = useColorGeneratorContext();
  const errorRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    setList(color);
  };
  useEffect(() => {
    isError
      ? (errorRef.current.style.transform = 'translateY(0)')
      : (errorRef.current.style.transform = 'translateY(-100%)');
  }, [isError]);

  return (
    <section className="generator">
      <form className="generator__form" onSubmit={handleSubmit}>
        <label htmlFor="searchHex"></label>
        <input
          type="text"
          name="searchHex"
          className={`${
            isError ? 'generator__input generator__input--error' : 'generator__input'
          }`}
          placeholder="#118ab2"
          onChange={e => setColor(e.target.value)}
        />
        <button
          type="submit"
          className={`${
            isError
              ? 'generator__submit generator__submit--error'
              : 'generator__submit'
          }`}
        >
          <FaSearch />
        </button>
      </form>
      <div className="generator__error" ref={errorRef}>
        Please enter a valid hex value <BiError />
      </div>
    </section>
  );
};

export default SearchForm;
