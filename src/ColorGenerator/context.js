import React, { useReducer, useContext } from 'react';
import { SET_LOADING, SET_ERROR, SET_LIST, COPY_TO_CLIPBOARD } from './actions';

import reducer from './reducer';
const initialState = {
  num: 1,
};

const ColorGeneratorContext = React.createContext();
const ColorGeneratorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const test = () => {
    console.log('testing');
  };

  return (
    <ColorGeneratorContext.Provider value={{ test }}>
      {children}
    </ColorGeneratorContext.Provider>
  );
};

export const useColorGeneratorContext = () => {
  return useContext(ColorGeneratorContext);
};

export { ColorGeneratorContext, ColorGeneratorProvider };
