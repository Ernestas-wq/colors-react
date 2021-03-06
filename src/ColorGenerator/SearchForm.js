import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useColorGeneratorContext } from './context';
const SearchForm = () => {
  const { setColor, setList, color, isError } = useColorGeneratorContext();
  const handleSubmit = e => {
    e.preventDefault();
    setList(color);
    console.log(isError);
  };

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
          placeholder="#fffff"
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
    </section>
  );
};

export default SearchForm;
