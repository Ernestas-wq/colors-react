import React, { useReducer, useContext } from 'react';
import { SET_LOADING, SET_ERROR, SET_LIST, COPY_TO_CLIPBOARD } from './actions';
import reducer from './reducer';

const ColorGeneratorContext = React.createContext();

const initialState = {
  num: 1,
};

const ColorGeneratorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const test = () => {
    console.log('testing');
  };

  return (
    <ColorGeneratorContext.Provider value={{ ...state, test }}>
      {children}
    </ColorGeneratorContext.Provider>
  );
};

export const useColorGeneratorContext = () => {
  return useContext(ColorGeneratorContext);
};

export { ColorGeneratorContext, ColorGeneratorProvider };
