import React, { useReducer, useContext } from 'react';
import {
  SET_LOADING,
  SET_ERROR,
  SET_LIST,
  COPY_TO_CLIPBOARD,
  SET_COLOR,
} from './actions';
import Values from 'values.js';

import reducer from './reducer';

const ColorGeneratorContext = React.createContext();

const initialState = {
  color: '',
  isError: false,
  isLoading: false,
  list: [],
};

const ColorGeneratorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setColor = color => {
    dispatch({ type: SET_COLOR, payload: color });
  };

  const setList = color => {
    try {
      const colors = new Values(color).all(10);
      dispatch({ type: SET_LOADING, payload: true });

      setTimeout(() => {
        dispatch({ type: SET_LIST, payload: colors });
        dispatch({ type: SET_LOADING, payload: false });
      }, 1000);
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: true });

      setTimeout(() => {
        dispatch({ type: SET_ERROR, payload: false });
      }, 3000);
    }
  };
  return (
    <ColorGeneratorContext.Provider value={{ ...state, setColor, setList }}>
      {children}
    </ColorGeneratorContext.Provider>
  );
};

export const useColorGeneratorContext = () => {
  return useContext(ColorGeneratorContext);
};

export { ColorGeneratorContext, ColorGeneratorProvider };
