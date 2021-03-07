import React, { useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useColorGeneratorContext } from './context';
import { BiError } from 'react-icons/bi';
const SearchForm = () => {
  const {
    setColor,
    setColorList,
    colorList,
    generator,
  } = useColorGeneratorContext();
  const errorRef = useRef(null);
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    setColorList(generator.color);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [colorList]);

  useEffect(() => {
    generator.isError
      ? (errorRef.current.style.transform = 'translateY(0)')
      : (errorRef.current.style.transform = 'translateY(-100%)');
  }, [generator.isError]);

  return (
    <section className="generator">
      <form className="generator__form" onSubmit={handleSubmit}>
        <label htmlFor="searchHex"></label>
        <input
          type="text"
          name="searchHex"
          className={`${
            generator.isError
              ? 'generator__input generator__input--error'
              : 'generator__input'
          }`}
          placeholder="#118ab2"
          ref={inputRef}
          onChange={e => setColor(e.target.value)}
        />
        <button
          type="submit"
          className={`${
            generator.isError
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
