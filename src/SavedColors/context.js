import React, { useReducer, useContext } from 'react';
import { DELETE_COLOR, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL } from './actions';
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
    colorName: '',
  },
  currentSavedColor: '',
  savedColorList: getSavedColorList(),
};

const SavedColorsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
  DELETE MODAL METHODS
  */
  const openDeleteModal = (id, name) =>
    dispatch({ type: OPEN_DELETE_MODAL, payload: { id, name } });

  const closeDeleteModal = () => dispatch({ type: CLOSE_DELETE_MODAL });

  const deleteColor = id => dispatch({ type: DELETE_COLOR, payload: id });

  return (
    <SavedColorsContext.Provider
      value={{
        ...state,
        openDeleteModal,
        closeDeleteModal,
        deleteColor,
      }}
    >
      {children}
    </SavedColorsContext.Provider>
  );
};

export const useSavedColorsContext = () => useContext(SavedColorsContext);
export { SavedColorsContext, SavedColorsProvider };
