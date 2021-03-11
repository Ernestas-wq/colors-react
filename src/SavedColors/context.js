import React, { useReducer, useContext, useEffect } from 'react';
import {
  DELETE_COLOR,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  SET_COLOR_NAME,
  SET_EDIT_MODAL_ALERT,
  SET_SAVED_COLOR_LIST,
  EDIT_COLOR,
} from './actions';
import { getSavedColorList } from '../ColorGenerator/utils';

import reducer from './reducer';

const SavedColorsContext = React.createContext();

const initialState = {
  deleteModal: {
    isOpen: false,
    id: '',
    colorName: '',
  },
  editModal: {
    isOpen: false,
    id: '',
    colorName: '',
    alert: {
      show: false,
      type: '',
      message: '',
    },
  },
  savedColorList: getSavedColorList(),
};

const delayedCall = (delay, foo) => {
  setTimeout(() => {
    foo && foo();
  }, delay);
};

const SavedColorsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /*
  DELETE MODAL METHODS
  */
  useEffect(() => {
    dispatch({ type: SET_SAVED_COLOR_LIST, payload: getSavedColorList() });
  }, []);

  const openDeleteModal = (id, colorName) =>
    dispatch({ type: OPEN_DELETE_MODAL, payload: { id, colorName } });

  const closeDeleteModal = () => dispatch({ type: CLOSE_DELETE_MODAL });

  const deleteColor = id => dispatch({ type: DELETE_COLOR, payload: id });

  /*
  EDIT MODAL METHODS
  */
  const openEditModal = (id, colorName) =>
    dispatch({ type: OPEN_EDIT_MODAL, payload: { id, colorName } });

  const closeEditModal = () => dispatch({ type: CLOSE_EDIT_MODAL });

  const setColorName = colorName =>
    dispatch({ type: SET_COLOR_NAME, payload: colorName });

  const editColor = (id, colorName) => {
    if (colorName) {
      const alert = {
        show: true,
        type: 'success',
        message: 'Update successful',
      };
      dispatch({ type: EDIT_COLOR, payload: { id, colorName } });
      dispatch({ type: SET_EDIT_MODAL_ALERT, payload: alert });
      delayedCall(1500, () => {
        resetAlert();
        closeEditModal();
      });
    } else {
      const alert = {
        show: true,
        type: 'danger',
        message: 'Please enter a name',
      };
      dispatch({ type: SET_EDIT_MODAL_ALERT, payload: alert });
      delayedCall(1500, () => {
        resetAlert();
      });
    }
  };

  const resetAlert = () => {
    const alert = {
      show: false,
      type: '',
      message: '',
    };
    dispatch({ type: SET_EDIT_MODAL_ALERT, payload: alert });
  };

  return (
    <SavedColorsContext.Provider
      value={{
        ...state,
        openDeleteModal,
        closeDeleteModal,
        deleteColor,
        closeEditModal,
        openEditModal,
        setColorName,
        editColor,
      }}
    >
      {children}
    </SavedColorsContext.Provider>
  );
};

export const useSavedColorsContext = () => useContext(SavedColorsContext);
export { SavedColorsContext, SavedColorsProvider };
