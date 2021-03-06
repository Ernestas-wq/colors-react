import React from 'react';
import { useColorGeneratorContext } from './context';
import SearchForm from './SearchForm';
const ColorList = () => {
  const { test } = useColorGeneratorContext();
  console.log(test);
  return (
    <>
      <SearchForm />
      <p>Hello from color list</p>
    </>
  );
};

export default ColorList;
