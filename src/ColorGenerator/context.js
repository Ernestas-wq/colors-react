import React, { useReducer, useContext } from 'react';
import {
  SET_LOADING,
  SET_GENERATE_ERROR,
  SET_COLOR_LIST,
  SET_COLOR,
  SAVE_COLOR,
  OPEN_SAVE_COLOR_MODAL,
  CLOSE_SAVE_COLOR_MODAL,
  SET_SAVE_COLOR_NAME,
} from './actions';
import { getSavedColorList, validateHex } from './utils';
import Values from 'values.js';

import reducer from './reducer';

const ColorGeneratorContext = React.createContext();

const initialState = {
  generator: {
    color: '#118ab2',
    isLoading: false,
    isError: false,
  },
  saveColorModal: {
    isOpen: false,
    colorName: '',
    error: {
      show: false,
      message: '',
    },
  },

  colorList: new Values('#118ab2').all(10),
  savedColorList: getSavedColorList(),
};

const ColorGeneratorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
  Generator methods
  */
  const setColor = color => dispatch({ type: SET_COLOR, payload: color });

  const setColorList = color => {
    try {
      const colors = new Values(color).all(10);
      dispatch({ type: SET_LOADING, payload: true });

      setTimeout(() => {
        dispatch({ type: SET_COLOR_LIST, payload: colors });
        dispatch({ type: SET_LOADING, payload: false });
      }, 1000);
    } catch (err) {
      handleWrongHexError();
    }
  };

  const handleWrongHexError = () => {
    dispatch({ type: SET_GENERATE_ERROR, payload: true });
    setTimeout(() => {
      dispatch({ type: SET_GENERATE_ERROR, payload: false });
    }, 3000);
  };

  /*
  Save Modal methods
  */

  const saveColor = (name, color) =>
    dispatch({ type: SAVE_COLOR, payload: { name, color } });

  const openSaveColorModal = () => {
    validateHex(state.generator.color)
      ? dispatch({ type: OPEN_SAVE_COLOR_MODAL })
      : handleWrongHexError();
  };

  const closeSaveColorModal = () => dispatch({ type: CLOSE_SAVE_COLOR_MODAL });

  const setSaveColorName = name =>
    dispatch({ type: SET_SAVE_COLOR_NAME, payload: name });

  return (
    <ColorGeneratorContext.Provider
      value={{
        ...state,
        setColor,
        setColorList,
        saveColor,
        openSaveColorModal,
        closeSaveColorModal,
        setSaveColorName,
      }}
    >
      {children}
    </ColorGeneratorContext.Provider>
  );
};

export const useColorGeneratorContext = () => useContext(ColorGeneratorContext);

export { ColorGeneratorContext, ColorGeneratorProvider };
