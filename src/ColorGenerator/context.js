import React, { useReducer, useContext } from 'react';
import {
  SET_LOADING,
  SET_ERROR,
  SET_COLOR_LIST,
  SET_COLOR,
  SAVE_COLOR,
  OPEN_SAVE_COLOR_MODAL,
  CLOSE_SAVE_COLOR_MODAL,
} from './actions';
import { getSavedColorList } from './utils';
import Values from 'values.js';

import reducer from './reducer';

const ColorGeneratorContext = React.createContext();

const initialState = {
  color: '#118ab2',
  isError: false,
  isLoading: false,
  isSaveColorModalOpen: false,
  colorList: new Values('#118ab2').all(10),
  savedColorList: getSavedColorList(),
};

const ColorGeneratorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      dispatch({ type: SET_ERROR, payload: true });

      setTimeout(() => {
        dispatch({ type: SET_ERROR, payload: false });
      }, 3000);
    }
  };

  const saveColor = color => dispatch({ type: SAVE_COLOR, payload: color });

  const openSaveColorModal = () => dispatch({ type: OPEN_SAVE_COLOR_MODAL });

  const closeSaveColorModal = () => dispatch({ type: CLOSE_SAVE_COLOR_MODAL });

  return (
    <ColorGeneratorContext.Provider
      value={{
        ...state,
        setColor,
        setColorList,
        saveColor,
        openSaveColorModal,
        closeSaveColorModal,
      }}
    >
      {children}
    </ColorGeneratorContext.Provider>
  );
};

export const useColorGeneratorContext = () => useContext(ColorGeneratorContext);

export { ColorGeneratorContext, ColorGeneratorProvider };
